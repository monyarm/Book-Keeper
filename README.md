# book-keeper

> A tool to give you random books for your D&D loot. Book data lives in one or
> more external "sources" (local folders or git repos) that get merged
> together at load time.

## Setup

```
npm install
```

## Data sources

Book data isn't bundled in this repo — point book-keeper at one or more
sources and it merges them:

```
npm run start -- sources add git@github.com:monyarm/Book-Keeper-Data.git
npm run start -- sources sync
```

- `sources add <path-or-git-url> [--name x]` — register a local folder or a
  git repo URL.
- `sources sync` — clone/pull all git sources into `~/.book-keeper/sources/`.
- `sources list` / `sources remove <name>`

A source is any folder tree of `.json` files shaped like:

```json
{ "books": [{ "title": "...", "category": ["..."] }] }
```

Every subfolder becomes a nested group; add more sources and their trees are
merged by folder name — no code changes needed to add a new book series.

## Run in terminal

```
npm run start -- <command> [args]

commands:
> dump [path]     - print books (optionally scoped to a group path, e.g. "Anime/Bleach")
> log             - print the total book count
> random <n>      - print n random books
> dupe            - print titles that appear more than once
> sources ...     - manage data sources, see above
```

## Build

```
npm run build      # compile TypeScript to dist/
npm run package     # build a standalone single-file binary at dist/book-keeper
```
