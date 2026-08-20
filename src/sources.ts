import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execFileSync } from 'child_process';

export interface Source {
    name: string;
    type: 'local' | 'git';
    path?: string;
    url?: string;
}

const HOME_DIR = path.join(os.homedir(), '.book-keeper');
const CONFIG_PATH = path.join(HOME_DIR, 'sources.json');
const CACHE_DIR = path.join(HOME_DIR, 'sources');

const DEFAULT_SOURCES: Source[] = [
    { name: 'Book-Keeper-Data', type: 'git', url: 'git@github.com:monyarm/Book-Keeper-Data.git' },
];

function isGitUrl(s: string): boolean {
    return /^(git@|https?:\/\/|ssh:\/\/|git:\/\/)/.test(s) || s.endsWith('.git');
}

function inferName(arg: string): string {
    const base = arg.replace(/\/$/, '').split(/[\\/]/).pop() ?? arg;
    return base.replace(/\.git$/, '');
}

export function loadConfig(): Source[] {
    if (!fs.existsSync(CONFIG_PATH)) {
        saveConfig(DEFAULT_SOURCES);
        return DEFAULT_SOURCES;
    }
    return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
}

function saveConfig(sources: Source[]): void {
    fs.mkdirSync(HOME_DIR, { recursive: true });
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(sources, null, 2));
}

export function addSource(arg: string, name?: string): Source {
    const sources = loadConfig();
    const resolvedName = name ?? inferName(arg);
    if (sources.some(s => s.name === resolvedName)) {
        throw new Error(`Source "${resolvedName}" already exists`);
    }
    const source: Source = isGitUrl(arg)
        ? { name: resolvedName, type: 'git', url: arg }
        : { name: resolvedName, type: 'local', path: path.resolve(arg) };
    sources.push(source);
    saveConfig(sources);
    return source;
}

export function removeSource(name: string): void {
    const sources = loadConfig().filter(s => s.name !== name);
    saveConfig(sources);
}

function syncSource(source: Source): void {
    if (source.type !== 'git' || !source.url) return;
    const dest = path.join(CACHE_DIR, source.name);
    if (fs.existsSync(path.join(dest, '.git'))) {
        console.log(`Pulling ${source.name}...`);
        execFileSync('git', ['pull'], { cwd: dest, stdio: 'inherit' });
    } else {
        console.log(`Cloning ${source.name}...`);
        fs.mkdirSync(CACHE_DIR, { recursive: true });
        execFileSync('git', ['clone', source.url, dest], { stdio: 'inherit' });
    }
}

export function syncSources(): void {
    for (const source of loadConfig()) syncSource(source);
}

export function resolveSourcePaths(): string[] {
    return loadConfig()
        .map(source => {
            if (source.type === 'local') return source.path!;
            const dest = path.join(CACHE_DIR, source.name);
            if (!fs.existsSync(path.join(dest, '.git'))) syncSource(source);
            return dest;
        })
        .filter(p => fs.existsSync(p));
}
