/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Book-Keeper/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cd49");


/***/ }),

/***/ "001c":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"Phenderix Magic World.esp\"],\"books\":[{\"title\":\"Water Encounter Hints\",\"category\":[]},{\"title\":\"Phenderix's Essence Spells\",\"category\":[]},{\"title\":\"Phenderix Polls\",\"category\":[]},{\"title\":\"Fire Magic, Vol. I\",\"category\":[]},{\"title\":\"Green House\",\"category\":[]},{\"title\":\"Red House\",\"category\":[]},{\"title\":\"Yellow House\",\"category\":[]},{\"title\":\"Blue House\",\"category\":[]},{\"title\":\"Fortified Items\",\"category\":[]},{\"title\":\"Blood Magic\",\"category\":[]},{\"title\":\"Spirit Magic\",\"category\":[]},{\"title\":\"Phenderix's Magic Evolved\",\"category\":[]},{\"title\":\"Apotek Reservations\",\"category\":[]}]}");

/***/ }),

/***/ "012d":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Demonhunter.esp\"],\"books\":[{\"title\":\"Ysabel Ashwing is Missing\",\"category\":[]}]}");

/***/ }),

/***/ "022c":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://en.wikipedia.org/wiki/Arthur_Conan_Doyle\"],\"books\":[{\"title\":\"A Study in Scarlet\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Sign of the Four\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Hound of the Baskervilles\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Valley of Fear\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"A Scandal in Bohemia\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Red-Headed League\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"A Case of Identity\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Boscombe Valley Mystery\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Five Orange Pips\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Man with the Twisted Lip\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Blue Carbuncle\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Speckled Band\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Engineer's Thumb\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Noble Bachelor\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Beryl Coronet\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Copper Beeches\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of Silver Blaze\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Cardboard Box\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Yellow Face\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Stockbroker's Clerk\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Gloria Scott\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Musgrave Ritual\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Reigate Squire\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Crooked Man\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Resident Patient\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Greek Interpreter\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Naval Treaty\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Final Problem\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Empty House\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Norwood Builder\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Dancing Men\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Solitary Cyclist\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Priory School\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of Black Peter\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of Charles Augustus Milverton\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Six Napoleons\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Three Students\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Golden Pince-Nez\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Missing Three-Quarter\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Abbey Grange\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Second Stain\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of Wisteria Lodge\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Red Circle\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Bruce-Partington Plans\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Dying Detective\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Disappearance of Lady Frances Carfax\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Devil's Foot\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"His Last Bow. The War Service of Sherlock Holmes\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Mazarin Stone\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Problem of Thor Bridge\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Creeping Man\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Sussex Vampire\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Three Garridebs\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Illustrious Client\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Three Gables\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Blanched Soldier\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Lion's Mane\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Retired Colourman\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Veiled Lodger\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of Shoscombe Old Place\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Field Bazaar\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Story of the Lost Special\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"The Story of the Man with the Watches\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]},{\"title\":\"Angels of Darkness\",\"author\":\"Sir Arthur Conan Doyle\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0396":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"https://elderscrolls.fandom.com/wiki/Books_(Oblivion)\"],\"books\":[{\"category\":[],\"title\":\"A Less Rude Song\"},{\"category\":[],\"title\":\"A Life of Uriel Septim VII\"},{\"category\":[],\"title\":\"Before The Ages Of Man\"},{\"category\":[],\"title\":\"Bible of the Deep Ones\"},{\"category\":[],\"title\":\"Calcinator Treatise\"},{\"category\":[],\"title\":\"Cherim's Heart of Anequina\"},{\"category\":[],\"title\":\"Daughter Of The Niben\"},{\"category\":[],\"title\":\"Death Blow Of Abernanit\"},{\"category\":[],\"title\":\"Fighters Guild History, 1st Ed.\"},{\"category\":[],\"title\":\"Followers of the Gray Fox\"},{\"category\":[],\"title\":\"Fundamentals of Alchemy\"},{\"category\":[],\"title\":\"Guide to Anvil\"},{\"category\":[],\"title\":\"Guide to Bravil\"},{\"category\":[],\"title\":\"Guide to Bruma\"},{\"category\":[],\"title\":\"Guide to Cheydinhal\"},{\"category\":[],\"title\":\"Guide to Chorrol\"},{\"category\":[],\"title\":\"Guide to Leyawiin\"},{\"category\":[],\"title\":\"Guide to Skingrad\"},{\"category\":[],\"title\":\"Guide to the Imperial City\"},{\"category\":[],\"title\":\"Heavy Armor Repair\"},{\"category\":[],\"title\":\"History of Lock Picking\"},{\"category\":[],\"title\":\"History of the Fighters Guild\"},{\"category\":[],\"title\":\"How Orsinium Passed to Orcs\"},{\"category\":[],\"title\":\"Imbel Genealogy\"},{\"category\":[],\"title\":\"Knightfall\"},{\"category\":[],\"title\":\"Light Armor Repair\"},{\"category\":[],\"title\":\"Lord Jornibret's Last Dance\"},{\"category\":[],\"title\":\"Lost Histories of Tamriel\"},{\"category\":[],\"title\":\"Mages Guild Charter\"},{\"category\":[],\"title\":\"Magic From The Sky\"},{\"category\":[],\"title\":\"Manual of Armor\"},{\"category\":[],\"title\":\"Manual of Arms\"},{\"category\":[],\"title\":\"Manual of Spellcraft\"},{\"category\":[],\"title\":\"Master Zoaraym's Tale\"},{\"category\":[],\"title\":\"Modern Heretics\"},{\"category\":[],\"title\":\"More Than Mortal\"},{\"category\":[],\"title\":\"Mystery of Talara, Book I\"},{\"category\":[],\"title\":\"Mystery of Talara, Book II\"},{\"category\":[],\"title\":\"Mystery of Talara, Book III\"},{\"category\":[],\"title\":\"Mystery of Talara, Book IV\"},{\"category\":[],\"title\":\"Mystery of Talara, Book V\"},{\"category\":[],\"title\":\"Mysticism\"},{\"category\":[],\"title\":\"Myth or Menace?\"},{\"category\":[],\"title\":\"Nerevar Moon And Star\"},{\"category\":[],\"title\":\"Nirnroot Missive\"},{\"category\":[],\"title\":\"Notes on Racial Phylogeny\"},{\"category\":[],\"title\":\"On Morrowind\"},{\"category\":[],\"title\":\"Provinces of Tamriel\"},{\"category\":[],\"title\":\"The Ruins of Kemel-Ze\"},{\"category\":[],\"title\":\"Shezarr and the Nine Divines\",\"Item ID\":\"xx000ed4\"},{\"category\":[],\"title\":\"Steward's Registry\",\"Item ID\":\"xx001995\"},{\"category\":[],\"title\":\"Tamrielic Lore\"},{\"category\":[],\"title\":\"Ten Commands: Nine Divines\"},{\"category\":[],\"title\":\"The Black Arrow, Book I\"},{\"category\":[],\"title\":\"The Black Arrow, Book II\"},{\"category\":[],\"title\":\"The Five Tenets\"},{\"category\":[],\"title\":\"The Horror of Castle Xyr\"},{\"category\":[],\"title\":\"The Last Scabbard of Akrash\"},{\"category\":[],\"title\":\"The Warp in the West\"},{\"category\":[],\"title\":\"The Way of the Exposed Palm\"},{\"category\":[],\"title\":\"Hiding with the Shadow\"},{\"category\":[],\"title\":\"Macabre Manifest\"},{\"category\":[],\"title\":\"Ramblings of Audens Avidius\"},{\"category\":[],\"title\":\"The Path of Transcendence\"},{\"category\":[],\"title\":\"Gray Fox, Man or Myth?\"}]}");

/***/ }),

/***/ "040e":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[],\"books\":[{\"title\":\"Book of Dracul\",\"category\":[\"History\"]},{\"title\":\"Tome of Arms, Vol. 1\",\"description\":\"An encyclopedia of weaponry\",\"category\":[]},{\"title\":\"Tome of Arms, Vol. 2\",\"description\":\"An encyclopedia of weaponry\",\"category\":[]},{\"title\":\"Tome of Arms, Vol. 3\",\"description\":\"An encyclopedia of weaponry\",\"category\":[]},{\"title\":\"Tome of Arms, X\",\"description\":\"The secret lost volume, banned for its destructive secrets. \",\"category\":[]}]}");

/***/ }),

/***/ "08bc":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[],\"books\":[{\"title\":\"Tusk Love\",\"description\":\"The story deals with the saucy union of Oskar (a half-orc) and the daughter of a traveling merchant, named Guinevere. They met along the Amber Road, up near Druvenlode. However, they couldn't be together, for fear of what their families might think.\",\"author\":\"Matilda Mercuria\",\"category\":[\"Story\"]},{\"title\":\"The Mountain Range of Gold, Vol. 1\",\"category\":[\"Story\"]},{\"title\":\"The Mountain Range of Gold, Vol. 2\",\"category\":[\"Story\"]},{\"title\":\"The Mountain Range of Gold, Vol. 3\",\"category\":[\"Story\"]},{\"title\":\"The Daring Trials and Tribulations of Ser Taryon Darrington\",\"description\":\"Doty! Doty, take this down: In my travels through Ank'Harel, I have never seen so many magical items in one place! But then I saw them, walking up to me, and I knew: I had met some very special people! That's it for now.\",\"category\":[\"History\"]},{\"title\":\"In the Belly of Dragons: The Legend of Scanlan Shorthalt and Vox Machina\",\"author\":\"Scanlan Shorthalt\",\"category\":[\"History\"]},{\"title\":\"Before the River's Dawn\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "0cd8":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"INFERNAL FLAME.esp\"],\"books\":[{\"title\":\"Faded Hope\",\"category\":[]},{\"title\":\"The Blade of Akatosh: History\",\"category\":[]},{\"title\":\"Ghale's Guidence\",\"category\":[]},{\"title\":\"The Crimson Stone\",\"category\":[]}]}");

/***/ }),

/***/ "0d5c":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"http://www.scp-wiki.net/\"],\"books\":[{\"title\":\"A Chronicle of the Daevas (SCP-140)\",\"category\":[\"History\"]},{\"title\":\"The Encyclopedia of Common Diseases (SCP-1025)\",\"category\":[\"Scholarly\"]},{\"title\":\"The Dangers Of Free Knowledge, Vol. I (SCP-1065)\",\"category\":[\"Scholarly\"]},{\"title\":\"The Dangers Of Free Knowledge, Vol. II (SCP-1065)\",\"category\":[\"Scholarly\"]},{\"title\":\"The Dangers Of Free Knowledge, Vol. III (SCP-1065)\",\"category\":[\"Scholarly\"]},{\"title\":\"The Dangers Of Free Knowledge, Vol. IV (SCP-1065)\",\"category\":[\"Scholarly\"]},{\"title\":\"How to _RANDOM_ (SCP-1161)\",\"category\":[\"Self Help\"]},{\"title\":\"Bleeding Book (SCP-1195)\",\"category\":[]},{\"title\":\"A Hero is Born (SCP-1230)\",\"category\":[]},{\"title\":\"Ornate Locked Library Book (SCP-1326)\",\"category\":[]},{\"title\":\"Zoologist's Guide to the Care and Feeding of Sea Scorpions (SCP-1326-Work)\",\"category\":[\"Self Help\"]},{\"title\":\"Beginner's Guide to Memetic Kill Agents (SCP-1326-Work)\",\"author\":\"██████ ██████\",\"category\":[\"Self Help\"],\"description\":\"Research Assistant Greene managed only to read past the words \\\" Chapter One \\\" aloud before suffering a grand mal seizure and dying of multiple brain aneurysms. All subsequent readings of SCP-1326 to be carried out by D-class personnel only.\"},{\"title\":\"The Secret Lives of Centipede Nymphs (SCP-1326-Work)\",\"category\":[\"Scholarly\"],\"description\":\"Documentary of the culture and religion of a species of sentient, semi-humanoid arthropods in their native habitat. Accessed by accident after inputting the incorrect index for Dr. ██████'s notes, then inputting the correct index without opening SCP-1326. Inputting multiple index combinations into SCP-1326 found to yield different results than inputting either single combination.\"},{\"title\":\"The Gentlewoman's Guide to the Perpetration and Proper serving of Castaway Squirts (SCP-1326-Work)\",\"author\":\"Lady ██████████ of Derbyshire\",\"category\":[\"Cookbook\"],\"description\":\"A description of how to capture, identify from human castaways and prepare for human consumption creatures resembling SCP-1014. Also contains tips for ideal table settings while serving.\"},{\"title\":\"Theological material of the Church of the Hanging God (SCP-1326-Work)\",\"category\":[\"Religious\"],\"description\":\"Theological material for an unknown religious cult claiming that as life is suffering, all faithful should simply commit suicide to go directly to the afterlife. Notable in a difference from most suicidal cults, the document claims it is a sin to attempt to kill others than the faithful as a method of conversion.\"},{\"title\":\"1,200 Ways To Die Involving Fire, But Not Involving A Lighter (SCP-1326-Work)\",\"category\":[],\"description\":\"A list of exactly 1,200 death scenarios involving fire. The word lighter, or anything pertaining to a lighter, was never mentioned in the list.\"},{\"title\":\"Book of Long Shadows (SCP-1326-Work)\",\"category\":[\"Poem\"],\"description\":\"A collection of rhyming poems expressing human misery. Several sections are prefaced with a warning not to read the poems within aloud.\"},{\"title\":\"Twenty Flightless birds of the Ravelwoods (SCP-1326-Work)\",\"category\":[\"Scholarly\"],\"description\":\"A guidebook referring to twenty (20) species of flightless birds. Apart from the common turkey, none are presently known to science, although if captured ████████, and ██████ would be considered to require SCP classification.\"},{\"title\":\"Young Alchemyst's Guide to Chemikals (SCP-1326-Work)\",\"category\":[\"Scholarly\",\"Self Help\"],\"description\":\"Illustrated in the 17th century style and written in archaic French in a format apparently intended for 10-15 year old children. It describes the alchemical symbols and the chemicals associated with them, along with the Philosopher's Stone and a universal solvent. Notably, mercury is not mentioned, and its place is taken by silicon.\"},{\"title\":\"2,000 Things You Should Never Write (SCP-1326-Work)\",\"author\":\"Johana Gregorio\",\"description\":\"Many pages filled with sentence and words from different known and unknown languages enumerated in line from 1 to 2,000. Reading such lines will cause no effect more than a faint dizziness in the subject, although writing them will provoke reactions that go from sudden decapitation to forgetting how to write at all. At the time of the experiment, no word has affected any person other than the writer. However, due to the dangerous nature of these words, Dr. █████████ joined Dr. █████████ request to reconsider the containment procedures of SCP-1326. Response is still pending.\",\"category\":[]},{\"title\":\"Star Signals (SCP-1425)\",\"description\":\"Did you know that some stars in the sky are dead, but we still see their ancient image ?\\r\\n With the best-selling novel Star Signals, sold in four countries and translated into hundreds of languages, you too can tune in to the celestial frequencies, and then become like the stars!\",\"category\":[\"Self Help\"]},{\"title\":\"Book of Endings (SCP-152)\",\"category\":[\"History\"]},{\"title\":\"1001 Places To Be Before You Die (SCP-1841)\",\"category\":[],\"description\":\"There is a world of beauty and wonder that you can never see.Outside this room, there is a place with infinite potential\\r\\n for you to grow and explore.But you can never see.It was too late, from the moment you were born, there were things born alongside that can never be met or even known.Some nights, you can nearly make it there.Almost becoming real, it stretches before you as a colossal plane of what there can be.\\r\\n Then you wake up, and the only thing stretched before you is the bedsheets.But it 's alright.\\r\\n Even if there's so much out there that you cannot see, what's been done was enough.There 's never going to be enough time to see everything, but be happy with what you have.\\r\\n So what if you didn't see the world? There were family, friends, and an experience that's unique to you.That 's what each of us have, what you took away from this whole uncaring thing. Even with everything you never saw, there's something that this amazing unknown will never see.Your experience.\\r\\n You finished what you had to do.Now, rest.Goodnight.\"},{\"title\":\"Making Your Dreams Your Reality: Lucidity for Beginners (SCP-2081)\",\"category\":[\"Self Help\"]},{\"title\":\"Thinking in Abstraction (SCP-2685)\",\"category\":[\"Philosophy\"]},{\"title\":\"An antiquated Guide to Avoiding Writer's Block (SCP-3039)\",\"category\":[\"Self Help\"],\"author\":\"R. Sebastian\"},{\"title\":\"In the Hall of the Last King (SCP-2976)\",\"category\":[\"Story\"],\"author\":\"Harold G. Talont\"},{\"title\":\"300 Tricks: Stage Magic Made Easy (SCP-3079)\",\"category\":[\"Self Help\"],\"author\":\"Tobin Hollis\"},{\"title\":\"Crime Novel By You (SCP-3345)\",\"category\":[\"Story\"],\"author\":\"You\"},{\"title\":\"The Compiled Vocabulary of the Kaejnethionian Language (SCP-3348)\",\"author\":\"Mandred Motzer\",\"category\":[\"Scholarly\"]}]}");

/***/ }),

/***/ "0fba":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Gallowmere.esp\"],\"books\":[{\"title\":\"Hero of Gallowmere\",\"category\":[]},{\"title\":\"Ars Magna et Ultima\",\"category\":[]},{\"title\":\"Sworn Book of Honorius\",\"category\":[]},{\"title\":\"Heroes from History Ch4\",\"category\":[]},{\"title\":\"Heroes from History Ch9\",\"category\":[]}]}");

/***/ }),

/***/ "1338":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Reaper's Esmeralda's Desert Manor.esp\"],\"books\":[{\"title\":\"Necronomicon Morph\",\"category\":[]},{\"title\":\"Perfume Formula\",\"category\":[]},{\"title\":\"Tome of Souls\",\"category\":[]}]}");

/***/ }),

/***/ "1644":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://tvtropes.org/pmwiki/pmwiki.php/Literature/ArseneLupin\"],\"books\":[{\"title\":\"Arsène Lupin, Gentleman Burglar\",\"description\":\"Short story collection, covering the first 9 Lupin tales. \\\"The Arrest of Arsène Lupin\\\". First published in July, 1905. \\\"Arsène Lupin in Prison\\\". First published in December, 1905. \\\"The Escape of Arsène Lupin\\\". First published in January, 1906. \\\"The Mysterious Traveller\\\". First published in February, 1906. \\\"The Queen's Necklace\\\". First published in April, 1906. \\\"The Safe of Madame Imbert\\\". First published in May, 1906. \\\"Sherlock Holmes Arrives Too Late\\\". First published in June, 1906. \\\"The Black Pearl\\\". First published in July, 1906. \\\"Seven of Hearts\\\". First published in May, 1907.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"Arsène Lupin vs. Herlock Sholmes\",\"description\":\"Collection including a novella and a short story. \\\"The Blonde Lady\\\". Serialized from November, 1906 to April, 1907. \\\"The Jewish Lamp\\\". Serialized in September-October, 1907.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Hollow Needle\",\"description\":\"First full novel in this series. Serialized from November, 1908 to May, 1909.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"813\",\"description\":\"Second Lupin novel.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Crystal Stopper\",\"description\":\"Third Lupin novel.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Confessions of Arsène Lupin\",\"description\":\"Short story collection, including 9 tales. \\\"The Games of the Sun\\\". First published in April, 1911. \\\"The Wedding Ring\\\". First published in May, 1911. \\\"The Sign of the Shadow\\\". First published in June, 1911. \\\"The Infernal Trap\\\". First published in July, 1911. \\\"The Red Silk Scarf\\\". First published in August, 1911. \\\"Death on the Prowl\\\". First published in September, 1911. \\\"The Marriage of Arsène Lupin\\\". First published in November, 1912. \\\"The Straw\\\". First published in January, 1913. \\\"Edith the Swan-Neck\\\". First published in February, 1913.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Shell Shard\",\"description\":\"A war novel set in World War I. Lupin himself has a cameo.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Golden Triangle\",\"description\":\"Novel set in the aftermath of World War I. Lupin serves as a supporting character.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Island of Thirty Coffins\",\"description\":\"Lupin serves as a co-protagonist with Veronica Hergemont.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Teeth Of The Tiger\",\"description\":\"Fourth Lupin novel.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Eight Strokes Of The Clock\",\"description\":\"Short story collection, including 8 tales. Connected through a frame story. \\\"At the top of the Tower\\\" \\\"Pitcher of Water\\\" \\\"Therese and Germaine\\\" \\\"The Film Reveals\\\" \\\"The Case of Jean-Louis\\\" \\\"The Lady and the Axe\\\" \\\"Not on the Snow\\\" \\\"To the God Mercury\\\"\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Countess Of Cagliostro\",\"description\":\"Fifth Lupin novel.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Damsel With Green Eyes\",\"description\":\"Sixth Lupin novel.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Barnett & Co. Agency\",\"description\":\"Short story collection, including 8 tales. Lupin uses the alias Jim Barnett. \\\"The drops that fall\\\" \\\"The love letter from King George\\\" \\\"The Game of Baccarat\\\" \\\"The Man with Gold Teeth\\\" \\\"The twelve Africans of Béchoux\\\" \\\"Chance Miracles\\\" \\\"White gloves... White spats...\\\" \\\"Béchoux stops Jim Barnett\\\"\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Mysterious Mansion\",\"description\":\"Seventh Lupin novel.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"Barre-y-va\",\"description\":\"Eighth Lupin novel. Named after a location within the tale.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Woman With Two Smiles\",\"description\":\"Ninth Lupin novel.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"Victor of the Wordly Brigade\",\"description\":\"Tenth Lupin novel. The Wordly Brigade is an old term for the vice squad.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Revenge Of The Countess Of Cagliostro\",\"description\":\"Eleventh Lupin novel.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The billions of Arsène Lupin\",\"description\":\"Twelfth Lupin novel. Left incomplete due to Leblanc's health problems. A missing chapter was discovered much later, published in 2002.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]},{\"title\":\"The Last Love of Arsene Lupin\",\"description\":\". Unpublished novel. Left incomplete due to Leblanc's health problems.\",\"author\":\"Maurice Leblanc\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "2076":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"The Haven From The Cold And Dark.esp\"],\"books\":[{\"title\":\"Invitation To The Haven\",\"category\":[]},{\"title\":\"Nevariad's Inventory\",\"category\":[]}]}");

/***/ }),

/***/ "20ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookViewer_vue_vue_type_style_index_0_id_b5cfe0f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f58a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookViewer_vue_vue_type_style_index_0_id_b5cfe0f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookViewer_vue_vue_type_style_index_0_id_b5cfe0f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookViewer_vue_vue_type_style_index_0_id_b5cfe0f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "25ec":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Undeath.esp\"],\"books\":[{\"title\":\"Broker's Message\",\"category\":[]},{\"title\":\"Arkay the Enemy\",\"category\":[]},{\"title\":\"On Constructing Servants\",\"category\":[]},{\"title\":\"Black Book: Whispers of the Veil\",\"category\":[]},{\"title\":\"Corpse Preparation: Volume Two\",\"category\":[]},{\"title\":\"The Path of Transcendance\",\"category\":[]},{\"title\":\"Tome of Unlife\",\"category\":[]},{\"title\":\"Corpse Preparation: Volume One\",\"category\":[]},{\"title\":\"Necromancer's Moon\",\"category\":[]},{\"title\":\"Corpse Preparation: Volume Three\",\"category\":[]},{\"title\":\"Blessed Bone\",\"category\":[]},{\"title\":\"Binding Blood\",\"category\":[]},{\"title\":\"Shackled Soul\",\"category\":[]},{\"title\":\"Fleeting Flesh\",\"category\":[]},{\"title\":\"Book of Life and Service\",\"category\":[]},{\"title\":\"Barrows of the Mountains\",\"category\":[]}]}");

/***/ }),

/***/ "2a3c":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://en.wikipedia.org/wiki/Agatha_Christie\"],\"books\":[{\"title\":\"The Mysterious Affair at Styles\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Secret Adversary\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Murder on the Links\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Man in the Brown Suit\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Secret of Chimneys \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Murder of Roger Ackroyd \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The big Four \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Mystery of the Blue Train \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Seven Dials Mystery \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Murder at the Vicarage \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Giant 's Bread\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Floating Admiral\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Sittaford Mystery\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Peril at End House\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Lord Edgware Dies\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Murder on the Orient Express\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Unfinished Portrait\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Why Didn'They Ask Evans ? \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Three Act Tragedy \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Death in the Clouds \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The A.B.C.Murders \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Murder in Mesopotamia \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Cards on the Table \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Cards on the Table \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Dumb Witness \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Death on the Nile \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Appointment with Death \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Murder Is Easy \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Sad Cypress \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Sad Cypress \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"One, Two, Buckle My Shoe \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Evil Under the Sun \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"N or M ? \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Body in the Library \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Five Little Pigs \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Moving Finger \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Towards Zero \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Absent in the Spring \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Death Comes as the End \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Sparkling Cyanide \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Hollow \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Take at the Flood \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Rose and the Yew Tree \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Crooked House \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"A Murder is Announced \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Mrs McGinty 's Dead\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"They Do It with Mirrors\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"A Daughter's a Daughter \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"After the Funeral \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"A Pocket Full of Rye \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Destination Unknown \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Hickory Dickory Dock \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Dead man 's Folly\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Burden\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"4.50 from Paddington\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Ordeal by Innocense\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Cat Among the Pigeons\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Pale Horse\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Mirror Crack'd from Side to Side \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Clocks \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"A Carribean Mystery \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"At Bertram 's Hotel\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Third Girl\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Endless Night\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"By the Pricking of My Thumbs\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Hallowe'en Party \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Nemesis \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Elephants Can Remember \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Postern of Fate \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Curtain \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Sleeping Murder \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Hercule Poirot and the Greenshore Folly \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Murder at Hazelmoor \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Thirteen at Dinner \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Murder in the Calais Coach \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Boomerang Clue \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Murder in Three Acts \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Death in the Air \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Poirot Loses a Client \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Easy to Kill \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"And Then There Were None \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Patriotic Murders \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Murder in Retrospect \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Remembered Death \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"There is a Tide...\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Funerals are Fatal \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"So Many Steps to Death \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Poirot Investigates \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Partners in Crime \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Mysterious Mr Quin \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Tuesday Club Murders \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Thirteen Problems \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Hound of Death \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Listerdale Mystery \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Parker Pyne Investigates \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Mr.Parker Pyne, Detective \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Murder in the Mews \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Dead Man 's Mirror\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Regatta Mystery\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Crime in Cabin 66\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Mystery of the Baghdad Chest\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Poirot and Regatta Mystery\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Poirot on Holidaty\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Veiled Lady\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Poirot Knows the Murderer\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Witness for the Prosecution\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"13 for Luck!\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Suprise! Suprise!\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Golden Ball\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Hercule Poirot's Early Cases \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Miss Marple 's Final Cases\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Problem at Pollensa Bay\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"While the Light Lasts\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Harlequin Tea Set\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Big Four\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of 'The Western Star '\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Tragedy at Marsdon Manor\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Cheap Flat\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Mystery of Hunter's Lodge \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Million Dollar Bond Robbery \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Egyptian Tomb \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Jewel Robbery at the Grand Metropolitan \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Kidnapped Prime Minister \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Disappearance of Mr.Davenheim \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Missing Will \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"A Fairy in the Flat \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"A Pot of Tea \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Affair of the Pink Pearl \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Sinister Stranger \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Finessing the King / The Gentleman Dressed in Newspaper \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Missing Lady \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Blindman 's Buff\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Man in the Mist\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Crackler\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Sunningdale Mystery\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The House of Lurking Death\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Unbreakable Alibi\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Clergyman's Daughter / The Red House \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Ambassador 's Boots\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Man Who Was No. 16\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Coming of Mr. Quin\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Shadow on the Glass\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"At the 'Bells and Motley '\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Sign in the Sky\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Soul of the Croupier\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Man from the Sea\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Voice in the Dark\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Face of Helen\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Dead Harlequin\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Bird with the Broken Wing\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The World's End \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Harlequin 's Lane\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Tuesday Night Club\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Idol House of Astarte\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Ingots of Gold\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Blood-Stained Pavement\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Motive v. Opportunity\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Thumb Mark of St. Peter\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Blue Geranium\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Companion\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Four Suspects\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"A Christmas Tragedy\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Herb of Death\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Affair at the Bungalow\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Death by Drowning\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Red Signal\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Gypsy\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Lamp\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Wireless\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Witness for the Prosecution\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Mystery of the Blue Jar\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Strange Case of Sir Arthur Carmichael\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Call of Wings\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Last Seance\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"S.O.S.\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Philomel Cottage\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Girl in the Train\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Sing a Song of Sixpence\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Manhood of Edward Robinson\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Accident\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Jane in Search of a Job\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"A Fruitful Sunday\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Mr. Eastwood’s Adventure\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Rajah's Emerald \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Swan Song \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Middle - aged Wife \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Discontented Soldier \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Distressed Lady \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Discontented Husband \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the City Clerk \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Rich Woman \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Have You Got Everything You Want ? \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Gate of Baghdad \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The House at Shiraz \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Pearl of Price \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Death on the Nile \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Oracle at Delphi \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Incredible Theft \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Dead Man 's Mirror\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Triangle at Rhodes\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Nemean Lion\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Lernean Hydra\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Arcadian Deer\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Erymanthian Boar\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Augean Stables\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Stymphalean Birds\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Cretan Bull\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Horse of Diomedes\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Girdle of Hippolyta\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Flock of Geryon\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Apples of the Hesperides\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Capture of Cerberus\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Four and Twenty Blackbirds\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Dream\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Greenshaw's Folly \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Affair at the Victory Ball \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Clapham Cook \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Cornish Mystery \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of Johnnie Waverly \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Double Clue \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The King of Clubs \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Lemesurier Inheritance \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Lost Mine \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Plymouth Express \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Chocolate Box \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Submarine Plans \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Third - Floor Flat \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Double Sin \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Market Basing Mystery \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Wasps ' Nest\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Veiled Lady\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Problem at Sea\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"How Does Your Garden Grow?\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Sanctuary\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Strange Jest\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Tape-Measure Murder\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Caretaker\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Perfect Maid\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Miss Marple Tells a Story\",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Dressmaker's Doll \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"In a Glass Darkly \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Second Gong \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Yellow Iris \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Love Detectives \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Next to a Dog \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Magnolia Blossom \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The House of Dreams \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Actress \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Edge \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Lonely God \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Manx Gold \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Within A Wall \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"While the Light Lasts \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Unexpected Guest \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Dartmoor Bungalow \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Lady on the Stairs \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Radium Thieves \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"In the House of the Enemy \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Yellow Jasmine Mystery \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Chess Problem \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Baited Trap \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Adventure of the Peroxide Blonde \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Terrible Catastrophe \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Dying Chinaman \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Crag in the Dolomites \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"The Road of Dreams \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Come, Tell Me How You Live \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]},{\"title\":\"Black Coffee \",\"author\":\"Agatha Christie\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "2c74":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"bhabhilon.esp\"],\"books\":[{\"title\":\"Hanging Gardens Reprint\",\"category\":[]},{\"title\":\"Dwemer Animunculi\",\"category\":[]}]}");

/***/ }),

/***/ "3228":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeItem_vue_vue_type_style_index_0_id_4dfc0402_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7177");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeItem_vue_vue_type_style_index_0_id_4dfc0402_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeItem_vue_vue_type_style_index_0_id_4dfc0402_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeItem_vue_vue_type_style_index_0_id_4dfc0402_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "351f":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"TOTF.esp\"],\"books\":[{\"title\":\"The Butcher of Armindale\",\"category\":[]},{\"title\":\"Slightly-Charred Book\",\"category\":[]},{\"title\":\"Guide to Enchanting\",\"category\":[]},{\"title\":\"Pellew and Other Tales\",\"category\":[]},{\"title\":\"Bizarre Murders!\",\"category\":[]}]}");

/***/ }),

/***/ "3658":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"LordKain_Adash_World.esp\"],\"books\":[{\"title\":\"Mushroom Seeds for Alchemy\",\"category\":[]},{\"title\":\"The Life of Ahab III, Vol 1\",\"category\":[]},{\"title\":\"History of the Order, Vol 1\",\"category\":[]},{\"title\":\"Healing Light\",\"category\":[]},{\"title\":\"Song of the Light\",\"category\":[]},{\"title\":\"Symbolism of the Order\",\"category\":[]},{\"title\":\"Before the Beginning (Copy)\",\"category\":[]},{\"title\":\"Anur's Seven Commandments\",\"category\":[]},{\"title\":\"Seeking Spider Silk\",\"category\":[]},{\"title\":\"Warning!\",\"category\":[]},{\"title\":\"Staff Wanted!\",\"category\":[]},{\"title\":\"The Archmage's Palace\",\"category\":[]},{\"title\":\"Namadash Apple Wine\",\"category\":[]},{\"title\":\"The Varaqusfest\",\"category\":[]},{\"title\":\"The World of Danqua (copy)\",\"category\":[]},{\"title\":\"The First Danqua Invasion (Copy)\",\"category\":[]},{\"title\":\"The Second Danqua Invasion (Copy)\",\"category\":[]},{\"title\":\"About the Legions\",\"category\":[]},{\"title\":\"The Arcane Brotherhood\",\"category\":[]},{\"title\":\"Scripture of the Black Circle (187)\",\"category\":[]},{\"title\":\"The Little Waterbearer and the False Tiger\",\"category\":[]},{\"title\":\"On the Modern Morrowind\",\"category\":[]},{\"title\":\"The Founder of the Circle, Vol 1\",\"category\":[]},{\"title\":\"Scripture of the Red Circle (187)\",\"category\":[]},{\"title\":\"Scripture of the White Circle (187)\",\"category\":[]},{\"title\":\"Scripture of the Green Circle (187)\",\"category\":[]},{\"title\":\"History of the Order, Vol 2\",\"category\":[]},{\"title\":\"History of the Order, Vol 3\",\"category\":[]},{\"title\":\"Scripture of the Blue Circle (187)\",\"category\":[]},{\"title\":\"Prayer in Distress\",\"category\":[]},{\"title\":\"Wanted: Monster Slayer\",\"category\":[]},{\"title\":\"Silent Prayer\",\"category\":[]},{\"title\":\"Prayer of Thanks\",\"category\":[]},{\"title\":\"About the Daedric Princes\",\"category\":[]}]}");

/***/ }),

/***/ "39e4":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"TheBawbsShire.esp\"],\"books\":[{\"title\":\"Teleport to Halfling Home\",\"category\":[]},{\"title\":\"The Rangers and the Sea of Wrun V1\",\"category\":[]},{\"title\":\"Gone And Home Again\",\"category\":[]},{\"title\":\"Ruffian Plans\",\"category\":[]},{\"title\":\"Lesson in Elvish #1\",\"category\":[]},{\"title\":\"Lesson in Elvish #2\",\"category\":[]},{\"title\":\"Lesson in Elvish #3\",\"category\":[]},{\"title\":\"Lesson in Elvish #4\",\"category\":[]},{\"title\":\"Tinruth's Fantasy Tale\",\"category\":[]},{\"title\":\"Archery Scoring\",\"category\":[]}]}");

/***/ }),

/***/ "3cae":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"In The Tower Of The Crescent Moon.esp\"],\"books\":[{\"title\":\"In the Tower of the Crescent Moon\",\"category\":[]}]}");

/***/ }),

/***/ "3d18":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"QOTW Season Two.esp\"],\"books\":[{\"title\":\"Prisoner Location\",\"category\":[]},{\"title\":\"Why I Died\",\"category\":[]},{\"title\":\"Common Treasures Trail\",\"category\":[]},{\"title\":\"Mysterious Riddle\",\"category\":[]}]}");

/***/ }),

/***/ "3e78":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"The_Feast.esp\"],\"books\":[{\"title\":\"The Feast\",\"category\":[]}]}");

/***/ }),

/***/ "3f04":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"HammetDungeons.esm\"],\"books\":[{\"title\":\"Guardians of the Priest\",\"category\":[]},{\"title\":\"Norok's Last Words\",\"category\":[]},{\"title\":\"Vhulon's Elegy\",\"category\":[]},{\"title\":\"The Elemental Witches of Vuldur\",\"category\":[]},{\"title\":\"Overlord Avuldmir and His Rangers\",\"category\":[]},{\"title\":\"Keepers of the Sanctum\",\"category\":[]},{\"title\":\"Hokimir's Claymore\",\"category\":[]},{\"title\":\"Ingulfrid and Her Lords of Chaos\",\"category\":[]},{\"title\":\"Ghost of Whiteshore\",\"category\":[]},{\"title\":\"Whiteshore Camp\",\"category\":[]},{\"title\":\"The Lost Relic of Lord Hammet\",\"category\":[]},{\"title\":\"A strange weapon\",\"category\":[]},{\"title\":\"Vuldur and His Disciples\",\"category\":[]}]}");

/***/ }),

/***/ "4101":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"SwordOfSigdan.esp\"],\"books\":[{\"title\":\"The Chamber Awaits\",\"category\":[]},{\"title\":\"Be Warned\",\"category\":[]},{\"title\":\"A Parting Gift\",\"category\":[]},{\"title\":\"The Duelist\",\"category\":[]},{\"title\":\"Last Words of Sigdan\",\"category\":[]}]}");

/***/ }),

/***/ "445c":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"https://elderscrolls.fandom.com/wiki/Books_(Shivering_Isles)\"],\"books\":[{\"category\":[],\"title\":\"An Elytra's Life\",\"author\":\"Karmelle\",\"description\":\"A study on the Elytra.\",\"Item ID\":\"00069876\"},{\"category\":[],\"title\":\"Bark and Sap\",\"description\":\"A study on the Root System, amber and Gnarl.\",\"Item ID\":\"00044407\"},{\"category\":[],\"title\":\"Fall of Vitharn\",\"description\":\"The history of Vitharn\",\"Item ID\":\"0006987F\"},{\"category\":[],\"title\":\"From Frog to Man\",\"author\":\"Meekus Ralbrek\",\"description\":\"The physiology of Grummites and Baliwogs.\",\"Item ID\":\"00069875\"},{\"category\":[],\"title\":\"Grommok's Journal\",\"author\":\"Grommok gro-Barak\",\"description\":\"A journal telling of the adventures of Grommok and how he discovered Dawnfang.\",\"Item ID\":\"0007F3E7\"},{\"category\":[],\"title\":\"Guide to New Sheoth\",\"author\":\"Brenith Aralyn\",\"description\":\"A guide describing New Sheoth.\",\"Item ID\":\"0006A7FE\"},{\"category\":[],\"title\":\"Heretical Thoughts\",\"description\":\"The Shivering Isles belongs to Arden Sul.\",\"Item ID\":\"0006987E\"},{\"category\":[],\"title\":\"Manual of Xedilian\",\"author\":\"Unknown\",\"description\":\"A guide around Xedilian.\",\"Item ID\":\"000181E1\"},{\"category\":[],\"title\":\"Myths of Sheogorath\",\"author\":\"Mymophonus\",\"description\":\"A collection of three short stories involving Sheogorath.\",\"Item ID\":\"000552c9\"},{\"category\":[],\"title\":\"Saints and Seducers\",\"author\":\"Andoche Marie\",\"description\":\"An analysis of the Golden Saints and Dark Seducers.\",\"Item ID\":\"0006A835\"},{\"category\":[],\"title\":\"Sixteen Accords of Madness, Book VI\",\"description\":\"A tale of a duel between Sheogorath and Hircine.\",\"Item ID\":\"0008DCCB\"},{\"category\":[],\"title\":\"Sixteen Accords of Madness, Book IX\",\"description\":\"Sheogorath and Vaermina strike a bet.\",\"Item ID\":\"0008DCCA\"},{\"category\":[],\"title\":\"Sixteen Accords of Madness, Book XII\",\"description\":\"Malacath's dealings with Sheogorath.\",\"Item ID\":\"0008DCC8\"},{\"category\":[],\"title\":\"The Blessings of Sheogorath\",\"description\":\"Proverbs revolving around Sheogorath.\",\"Item ID\":\"0006A800\"},{\"category\":[],\"title\":\"The Liturgy of Affliction\",\"author\":\"Transcribed by Anias Gael\",\"description\":\"A man becomes obsessed with inflicting Destruction magic upon himself.\",\"Item ID\":\"00043F77\"},{\"category\":[],\"title\":\"The Living Woods\",\"description\":\"On the Gnarl.\",\"Item ID\":\"00069877\"},{\"category\":[],\"title\":\"The Madness of Pelagius\",\"author\":\"Tsathenes\",\"description\":\"The life of Pelagius Septim III.\",\"Item ID\":\"00043f76\"},{\"category\":[],\"title\":\"The Predecessors\",\"author\":\"Yngvar the Wanderer\",\"description\":\"A study on ruins of the Shivering Isles leads to the discovery of the next Greymarch.\",\"Item ID\":\"00043981\"},{\"category\":[],\"title\":\"The Prophet Arden-Sul\",\"description\":\"Two stories regarding the death of Arden Sul.\",\"Item ID\":\"00043523\"},{\"category\":[],\"title\":\"The Ravings of Fenroy\",\"author\":\"Fenroy\",\"description\":\"A prisoner's ramblings as he descends into madness.\",\"Item ID\":\"00081F8D\"},{\"category\":[],\"title\":\"The Shivering Apothecary\",\"author\":\"Cinda Amatius\",\"description\":\"A listing of various ingredients that can be found in the Shivering Isles.\",\"Item ID\":\"0006A801\"},{\"category\":[],\"title\":\"The Shivering Bestiary\",\"author\":\"Namlir Esprink\",\"description\":\"A listing of different creatures that can be encountered in the Shivering Isles.\",\"Item ID\":\"0006A808\"},{\"category\":[],\"title\":\"The Standing Stones\",\"description\":\"On the strange, crystalline stones dotted around the Isles.\",\"Item ID\":\"0006A83A\"},{\"category\":[],\"title\":\"Wabbajack\",\"description\":\"A boy wanting to summon Hermaeus Mora is tricked into summoning Sheogorath.\"},{\"category\":[],\"title\":\"Zealotry\",\"description\":\"On the dedicated Zealots.\",\"Item ID\":\"0006987D\"},{\"category\":[],\"title\":\"Amber Materials List\",\"author\":\"Dumag gro-Bonk\",\"Item ID\":\"0001F3C6\"},{\"category\":[],\"title\":\"Death Decree\",\"Item ID\":\"00082597\"},{\"category\":[],\"title\":\"Hunger vs. Shambles\",\"author\":\"Relmyna Verenim\",\"Item ID\":\"00093F36\"},{\"category\":[],\"title\":\"Liturgy of the Duelists\",\"Item ID\":\"000813CC\"},{\"category\":[],\"title\":\"Project Hound's Blood\",\"author\":\"Relmyna Verenim\",\"Item ID\":\"0008DCB9\"},{\"category\":[],\"title\":\"Project Limb Removal\",\"author\":\"Relmyna Verenim\",\"Item ID\":\"0008DCB7\"},{\"category\":[],\"title\":\"Reptilian Appetite Conditioning\",\"author\":\"Relmyna Verenim\",\"Item ID\":\"00093F39\"},{\"category\":[],\"title\":\"Unproductive Musings\",\"author\":\"Relmyna Verenim\",\"Item ID\":\"0008DCB8\"},{\"category\":[],\"title\":\"Week-old blood\",\"author\":\"Relmyna Verenim\",\"Item ID\":\"00093F26\"}]}");

/***/ }),

/***/ "4734":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://en.wikipedia.org/wiki/Neil_Gaiman\"],\"books\":[{\"title\":\"Good Omens\",\"author\":\"Neil Gaiman & Terry Pratchett\",\"category\":[\"Story\"],\"description\":\"It is the coming of the End Times: the Apocalypse is near, and Final Judgement will soon descend upon the human species. This comes as a bit of bad news to the angel Aziraphale (who was the guardian of the Eastern Gate of Eden) and the demon Crowley (who, when he was originally named Crawly, was the serpent who tempted Eve to eat the apple), respectively the representatives of Heaven and Hell on Earth, as they have become used to living their cosy, comfortable lives and have, in a perverse way, taken a liking to humanity. As such, since they are good friends (despite ostensibly representing the polar opposites of Good and Evil), they decide to work together and keep an eye on the Antichrist, destined to be the son of a prominent American diplomat stationed in Britain, and thus ensure he grows up in a way that means he can never decide between Good and Evil, thereby postponing the end of the world.\"},{\"title\":\"Neverwhere\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Stardust\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Coraline\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"InterWorld\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Graveyard Book\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Silver Dream\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Ocean at the End of the Lane\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Eternity's Wheel\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Wolves in the Walls\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"MirrorMask\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Odd and the Frost Giants\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Angels and Visitations: A Miscellany\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Chivalry\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Vampire Sestina\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Foreign Parts\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Cold Colours\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Luther's Villanelle\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Case of the Four And Twenty Blackbirds\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Post-Mortem on Our Love\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The White Road\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Queen of Knives\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Smokes and Mirrors\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Daughter of Owls\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Wedding Present\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Virus\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Only The End of The World Again\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Fifteen Painted Cards From A Vampire Tarot\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Sea Change\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"How Do You Think It Feels\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"When We Went To See The End Of The World\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Snow, Glass, Apples\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Fragile Things: Short Fictions and Wonders\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"A Study in Emerald\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Fairy Reel\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Forbidden Brides of the Faceless Slaves in the Secret House of the Night of Dread Desire\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Hidden Chamber\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Closing Time\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Bitter Grounds\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Other People\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Shoggoth's Old Peculiar\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Keepsakes and Treasures\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Harlequin Valentine\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"Sunbird\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Monarch of the Glen\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"M is for Magic\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"A little Gold Book of Ghastly Stuff\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"I Cthulhu: or What's a Tentacle-Faced Thing Like Me Doing in a Sunken City Like This (Latitude 47°9′S, Longitude 126°43′W)?\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]},{\"title\":\"The Sandman\",\"author\":\"Neil Gaiman\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "4b91":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"arnima.esm\"],\"books\":[{\"title\":\"The lost Lord\",\"category\":[]},{\"title\":\"Witchmen: Pox of the North\",\"category\":[]},{\"title\":\"Direnni: The Blackest Market\",\"category\":[]},{\"title\":\"The Towers that Bind\",\"category\":[]},{\"title\":\"The Hecularana\",\"category\":[]},{\"title\":\"The Hecularana: Volume II\",\"category\":[]},{\"title\":\"The Hecularana: Volume III\",\"category\":[]},{\"title\":\"The Hecularana: Volume IV\",\"category\":[]},{\"title\":\"Transcendence\",\"category\":[]},{\"title\":\"Mados: Documents of Valor Vol I\",\"category\":[]},{\"title\":\"Mados: Documents of Valor Vol II\",\"category\":[]},{\"title\":\"Mados: Documents of Valor Vol III\",\"category\":[]},{\"title\":\"The Wretched Form\",\"category\":[]},{\"title\":\"Delivery paper\",\"category\":[]},{\"title\":\"Citizen in Need\",\"category\":[]},{\"title\":\"Black Book: Epistolary Acumen\",\"category\":[]},{\"title\":\"Black Book: Power Caesarean\",\"category\":[]},{\"title\":\"Mother's Muse Vol 1\",\"category\":[]},{\"title\":\"Mother's Muse Vol 2\",\"category\":[]},{\"title\":\"Mother's Muse Vol.3\",\"category\":[]},{\"title\":\"Seek it out\",\"category\":[]}]}");

/***/ }),

/***/ "4ee7":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"TheElderCouncil.esp\"],\"books\":[{\"title\":\"Cancelled Arrest Warrant \",\"category\":[]},{\"title\":\"Memo \",\"category\":[]},{\"title\":\"Dishonourable Discharge\",\"category\":[]},{\"title\":\"Tec Secrets\",\"category\":[]}]}");

/***/ }),

/***/ "4ff6":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Sundas Morning.esp\"],\"books\":[{\"title\":\"Sundas Morning\",\"category\":[]}]}");

/***/ }),

/***/ "50a2":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"BladeOfTheHaunted.esp\"],\"books\":[{\"title\":\"Loose Book Page\",\"category\":[]},{\"title\":\"Aaro and Dundellon\",\"category\":[]}]}");

/***/ }),

/***/ "572c":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Necromancy Books.esp\"],\"books\":[{\"title\":\"Corpse Preparation I\",\"category\":[]},{\"title\":\"Corpse Preparation II\",\"category\":[]},{\"title\":\"Corpse Preparation III\",\"category\":[]},{\"title\":\"Blasphemous Revenants\",\"category\":[]},{\"title\":\"Legions of the Dead\",\"category\":[]},{\"title\":\"Arkay the Enemy\",\"category\":[]}]}");

/***/ }),

/***/ "57cf":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Maeva Scribonias Bookshop NO BookPlacing plus Castas Books plus Amalrics Books.esp\"],\"books\":[{\"title\":\"The Dagger Of The Tong Vol 1\",\"category\":[]},{\"title\":\"The Dagger Of The Tong Vol 2\",\"category\":[]},{\"title\":\"The Feast\",\"category\":[]},{\"title\":\"The Last Audience\",\"category\":[]},{\"title\":\"The Bosmer's Ordeal\",\"category\":[]},{\"title\":\"The Orc's Initiation\",\"category\":[]},{\"title\":\"Maeva The Buxom\",\"category\":[]},{\"title\":\"Guide To A Routine Patrol\",\"category\":[]},{\"title\":\"Guide To Maeva The Buxom\",\"category\":[]},{\"title\":\"Focs'le Justice\",\"category\":[]},{\"title\":\"The Hidden Library\",\"category\":[]},{\"title\":\"Queen Nimbea XVII\",\"category\":[]},{\"title\":\"Welcome!\",\"category\":[]},{\"title\":\"Guide To Queen Nimbea XVII\",\"category\":[]},{\"title\":\"Guide To A Maid's Tale\",\"category\":[]},{\"title\":\"Rape!\",\"category\":[]},{\"title\":\"Torentine\",\"category\":[]},{\"title\":\"Fleet Manouevres\",\"category\":[]},{\"title\":\"The Gate Of The Underworld\",\"category\":[]},{\"title\":\"Nimbea And Milvana\",\"category\":[]},{\"title\":\"A Perfect Approach\",\"category\":[]},{\"title\":\"Wilbur's Other Business\",\"category\":[]},{\"title\":\"Guide To Wilbur's Other Business\",\"category\":[]},{\"title\":\"The Crowning Moment\",\"category\":[]},{\"title\":\"Furball\",\"category\":[]},{\"title\":\"Guide To Furball\",\"category\":[]},{\"title\":\"Stairway To Heaven\",\"category\":[]},{\"title\":\"Affairs Of State\",\"category\":[]},{\"title\":\"Waypoint\",\"category\":[]},{\"title\":\"Catfight!\",\"category\":[]},{\"title\":\"Guide To Catfight!\",\"category\":[]},{\"title\":\"A Last Skirmish\",\"category\":[]},{\"title\":\"Zymbrael And Vivec\",\"category\":[]},{\"title\":\"Farewell To Cyrodiil\",\"category\":[]},{\"title\":\"Stickleback\",\"category\":[]},{\"title\":\"Guide To Stickleback\",\"category\":[]},{\"title\":\"Retribution!\",\"category\":[]},{\"title\":\"Guide To Retribution!\",\"category\":[]},{\"title\":\"The Storm\",\"category\":[]},{\"title\":\"Guide To The Storm\",\"category\":[]},{\"title\":\"An Interlude Of Comfort\",\"category\":[]},{\"title\":\"Guide To An Interlude Of Comfort\",\"category\":[]},{\"title\":\"An Errant Blade, v 1\",\"category\":[]},{\"title\":\"An Errant Blade, v 2\",\"category\":[]},{\"title\":\"An Errant Blade, v 3\",\"category\":[]},{\"title\":\"Guide To An Errant Blade vols 1 - 3\",\"category\":[]},{\"title\":\"A Different Tack\",\"category\":[]},{\"title\":\"Watch Post\",\"category\":[]},{\"title\":\"Changing The Guard\",\"category\":[]},{\"title\":\"Constructive Criticism\",\"category\":[]},{\"title\":\"Beef and Oyster Pie\",\"category\":[]},{\"title\":\"Guide To A Blade's Story Vol 4 and 5\",\"category\":[]},{\"title\":\"Guide To Changing The Guard\",\"category\":[]},{\"title\":\"Chance Encounter\",\"category\":[]},{\"title\":\"Upstairs At The Fair Deal\",\"category\":[]},{\"title\":\"Guide To Upstairs At The Fair Deal\",\"category\":[]},{\"title\":\"Guide To A Blade's Story Vol 6\",\"category\":[]},{\"title\":\"A Regal Challenge\",\"category\":[]},{\"title\":\"Guide To A Regal Challenge\",\"category\":[]},{\"title\":\"Dead Meat\",\"category\":[]},{\"title\":\"Guide To Dead Meat\",\"category\":[]},{\"title\":\"Deus Ex Machina\",\"category\":[]},{\"title\":\"Guide To A Blade's Story Vol 7\",\"category\":[]},{\"title\":\"Following The Plot\",\"category\":[]},{\"title\":\"Security\",\"category\":[]},{\"title\":\"Rigor Mortis\",\"category\":[]},{\"title\":\"Guide To A Blade's Story Vol 8\",\"category\":[]},{\"title\":\"Guide To Rigor Mortis\",\"category\":[]},{\"title\":\"A Grand Reception\",\"category\":[]},{\"title\":\"Correspondence Folio No 23\",\"category\":[]},{\"title\":\"Guide To A Blade's Story Vol 9\",\"category\":[]},{\"title\":\"An Argonian Account\",\"category\":[]},{\"title\":\"A Change In Circumstances\",\"category\":[]},{\"title\":\"Rogue's Jest\",\"category\":[]},{\"title\":\"Guide To Rogue's Jest\",\"category\":[]},{\"title\":\"Guide To A Blade's Story Vol 10\",\"category\":[]},{\"title\":\"The Beacon\",\"category\":[]},{\"title\":\"Guide To In The Lair Of The Orc Bandits\",\"category\":[]},{\"title\":\"Guide To The Taste Of Treason\",\"category\":[]},{\"title\":\"Guide To The Taste Of Treason V2 and 3\",\"category\":[]},{\"title\":\"Guide To After The Regatta\",\"category\":[]},{\"title\":\"Guide To Satin And Hot Oil\",\"category\":[]},{\"title\":\"Guide To Satin And Hot Oil v2\",\"category\":[]},{\"title\":\"Guide To Satin And Hot Oil v3\",\"category\":[]},{\"title\":\"Guide To A Marauder's Progress Trilogy\",\"category\":[]},{\"title\":\"Guide To In The Tower Of The Crescent Moon\",\"category\":[]},{\"title\":\"Guide To The Dagger Of The Tong\",\"category\":[]},{\"title\":\"Guide To Sundas Morning\",\"category\":[]},{\"title\":\"Guide To The Orc's Initiation\",\"category\":[]},{\"title\":\"Guide To The Feast\",\"category\":[]},{\"title\":\"Crumpled Piece of Paper\",\"category\":[]},{\"title\":\"Guide To Maeva Scribonia Collection 4\",\"category\":[]},{\"title\":\"A Catalogue Of Maids\",\"category\":[]},{\"title\":\"Milvana's Pillow Book\",\"category\":[]},{\"title\":\"Despicable Orcs\",\"category\":[]},{\"title\":\"Fiasco!\",\"category\":[]},{\"title\":\"Rogue's Challenge Vol 1\",\"category\":[]},{\"title\":\"Rogue's Challenge Vol 2\",\"category\":[]},{\"title\":\"Guide To A Blade's Story Vol 11\",\"category\":[]},{\"title\":\"Guide To Rogue's Challenge Vols 1 and 2\",\"category\":[]},{\"title\":\"Rogue's Challenge Vol 3\",\"category\":[]},{\"title\":\"An Arena Fighter's Tale\",\"category\":[]},{\"title\":\"Guide To Rogue's Challenge Vol 3\",\"category\":[]},{\"title\":\"Settling the Score\",\"category\":[]},{\"title\":\"Guide To A Blade's Story Vol 12\",\"category\":[]},{\"title\":\"Guide To An Arena Fighter's Tale\",\"category\":[]},{\"title\":\"Rogue's Postscript Part 1\",\"category\":[]},{\"title\":\"Rogue's Postscript Part 2\",\"category\":[]},{\"title\":\"The Lady-In-Waiting's Tale\",\"category\":[]},{\"title\":\"On The Approach\",\"category\":[]},{\"title\":\"Chasing Events\",\"category\":[]},{\"title\":\"Font Test\",\"category\":[]},{\"title\":\"Forbidden Love Part 1\",\"category\":[]},{\"title\":\"Forbidden Love Part 2\",\"category\":[]},{\"title\":\"The Pearl Diver's Tale\",\"category\":[]},{\"title\":\"Tale Of Three Nords\",\"category\":[]},{\"title\":\"Summer's Love\",\"category\":[]},{\"title\":\"Blademaster Speaks\",\"category\":[]},{\"title\":\"Cleftshale Cave\",\"category\":[]},{\"title\":\"Guide To Maeva Scribonia Collection 5\",\"category\":[]},{\"title\":\"Blood Or Desire Vol 1\",\"category\":[]},{\"title\":\"Blood Or Desire Vol 2\",\"category\":[]},{\"title\":\"Blood Or Desire Vol 3\",\"category\":[]},{\"title\":\"Blood Or Desire Vol 4\",\"category\":[]},{\"title\":\"Debutantes' Ball\",\"category\":[]},{\"title\":\"Market Days\",\"category\":[]},{\"title\":\"Impossible Choice\",\"category\":[]},{\"title\":\"Seeking Fulfilment\",\"category\":[]},{\"title\":\"The Maid's Rescue\",\"category\":[]},{\"title\":\"Woman Gone Wild\",\"category\":[]},{\"title\":\"Combat Poisons\",\"category\":[]},{\"title\":\"Dragonheart Bruma\",\"category\":[]},{\"title\":\"History Of The Imperial Legion\",\"category\":[]},{\"title\":\"The Night Kvatch Died\",\"category\":[]},{\"title\":\"The Ogre Hunter\",\"category\":[]},{\"title\":\"The Voyage Of The Xandra Elyse\",\"category\":[]},{\"title\":\"Knives In The Night\",\"category\":[]},{\"title\":\"A Festive Occasion\",\"category\":[]},{\"title\":\"A Garden Wedding\",\"category\":[]},{\"title\":\"A Marauder's Progress Vol 1\",\"category\":[]},{\"title\":\"Gone To The Dogs\",\"category\":[]},{\"title\":\"A Marauder's Progress Vol 2\",\"category\":[]},{\"title\":\"A Marauder's Progress Vol 3\",\"category\":[]},{\"title\":\"Prologue And Knight's Tale\",\"category\":[]},{\"title\":\"A Matter Of Persuasion\",\"category\":[]},{\"title\":\"A Routine Patrol\",\"category\":[]},{\"title\":\"A Vampire Hunter's Downfall\",\"category\":[]},{\"title\":\"Board Of Enquiry\",\"category\":[]},{\"title\":\"A Brina Cross Inn Tale\",\"category\":[]},{\"title\":\"A Princely Prelude\",\"category\":[]},{\"title\":\"Thief's Handbook\",\"category\":[]},{\"title\":\"Castle Ivystone\",\"category\":[]},{\"title\":\"Combat Poisons Vol II\",\"category\":[]},{\"title\":\"Murder Or Accident?\",\"category\":[]},{\"title\":\"Bruma, a Sailor's Guide\",\"category\":[]},{\"title\":\"The Imperial City, a Sailor's Guide\",\"category\":[]},{\"title\":\"Skingrad, a Sailor's Guide\",\"category\":[]},{\"title\":\"Leyawiin, a Sailor's Guide\",\"category\":[]},{\"title\":\"Kvatch, a Sailor's Guide\",\"category\":[]},{\"title\":\"Chorrol, a Sailor's Guide\",\"category\":[]},{\"title\":\"Cheydinhal, a Sailor's Guide\",\"category\":[]},{\"title\":\"Bravil, a Sailor's Guide\",\"category\":[]},{\"title\":\"Anvil, a Sailor's Guide\",\"category\":[]},{\"title\":\"Catwoman\",\"category\":[]},{\"title\":\"A Change Of Pace\",\"category\":[]},{\"title\":\"Every Tirdas At Noon\",\"category\":[]},{\"title\":\"A Day For Celebration\",\"category\":[]},{\"title\":\"Scamp In The House\",\"category\":[]},{\"title\":\"A Twisted Plot\",\"category\":[]},{\"title\":\"Songs From The Wood\",\"category\":[]},{\"title\":\"Prioress' And Tavern Cook's Tales\",\"category\":[]},{\"title\":\"The Selection\",\"category\":[]},{\"title\":\"A Breath Of Fresh Air\",\"category\":[]},{\"title\":\"Riding The March Rider\",\"category\":[]},{\"title\":\"Party At The Riverview\",\"category\":[]},{\"title\":\"On The Docks Of Bravil\",\"category\":[]},{\"title\":\"Impish\",\"category\":[]},{\"title\":\"The Alchemist's Assistant\",\"category\":[]},{\"title\":\"Private Lessons, Part 1\",\"category\":[]},{\"title\":\"The Orc Porter's Tale\",\"category\":[]},{\"title\":\"Private Lessons, Part 2\",\"category\":[]},{\"title\":\"Private Lessons, Part 3\",\"category\":[]},{\"title\":\"Private Lessons, Part 4\",\"category\":[]},{\"title\":\"Casta Scribonia Catalogus\",\"category\":[]},{\"title\":\"Ambush\",\"category\":[]},{\"title\":\"A Necessary Precaution\",\"category\":[]},{\"title\":\"Hot Gossip Part 1\",\"category\":[]},{\"title\":\"Hot Gossip Part 2\",\"category\":[]},{\"title\":\"Hall Of Wonders\",\"category\":[]},{\"title\":\"An Incident On Campaign\",\"category\":[]},{\"title\":\"A Dead Evening at the Roxey Inn\",\"category\":[]},{\"title\":\"After The Regatta\",\"category\":[]},{\"title\":\"The Mystery of the Midnight Mouth\",\"category\":[]},{\"title\":\"Uncontrollable\",\"category\":[]},{\"title\":\"Daydreams\",\"category\":[]},{\"title\":\"Challenge Match\",\"category\":[]},{\"title\":\"Lonely Nights\",\"category\":[]},{\"title\":\"Sharp Bargain\",\"category\":[]},{\"title\":\"The Shipman's Tale\",\"category\":[]},{\"title\":\"Embassy, Part 1\",\"category\":[]},{\"title\":\"Bharkum's Errand\",\"category\":[]},{\"title\":\"An End To Subtlety\",\"category\":[]},{\"title\":\"Happy Homewrecker\",\"category\":[]},{\"title\":\"Feral\",\"category\":[]},{\"title\":\"Walking Furniture\",\"category\":[]},{\"title\":\"Student Bodies\",\"category\":[]},{\"title\":\"Desire And Desecration\",\"category\":[]},{\"title\":\"Part Of The Package\",\"category\":[]},{\"title\":\"Embassy, Part 2\",\"category\":[]},{\"title\":\"Foreplay By Proxy\",\"category\":[]},{\"title\":\"Careful Calculations\",\"category\":[]},{\"title\":\"Demonstration\",\"category\":[]},{\"title\":\"The Alchemist's Revenge\",\"category\":[]},{\"title\":\"Chances Taken Vol 2\",\"category\":[]},{\"title\":\"Chances Taken Vol 1\",\"category\":[]},{\"title\":\"The Lonely Huntress\",\"category\":[]},{\"title\":\"Stress Test\",\"category\":[]},{\"title\":\"Fire On The Heights\",\"category\":[]},{\"title\":\"The Pilgrim Widow's Tale\",\"category\":[]},{\"title\":\"Ink Formulae\",\"category\":[]},{\"title\":\"Reminder to self\",\"category\":[]},{\"title\":\"Elsabeth's Gather Trip\",\"category\":[]},{\"title\":\"Hasathil And Enilroth\",\"category\":[]},{\"title\":\"In The Lair Of The Orc Bandits\",\"category\":[]},{\"title\":\"In The Tower Of The Crescent Moon\",\"category\":[]},{\"title\":\"The Maid's Tale\",\"category\":[]},{\"title\":\"Satin And Hot Oil\",\"category\":[]},{\"title\":\"Satin And Hot Oil V2\",\"category\":[]},{\"title\":\"Satin And Hot Oil V3\",\"category\":[]},{\"title\":\"Sundas Morning\",\"category\":[]},{\"title\":\"The Taste Of Treason\",\"category\":[]},{\"title\":\"The Taste Of Treason Vol 2\",\"category\":[]},{\"title\":\"Imperial Goblin\",\"category\":[]},{\"title\":\"Waking Day\",\"category\":[]},{\"title\":\"Sundas At The Newlands\",\"category\":[]},{\"title\":\"An Orcish Wedding\",\"category\":[]},{\"title\":\"Guide To An Orcish Wedding\",\"category\":[]},{\"title\":\"Completing The Set\",\"category\":[]},{\"title\":\"Valenwood Gambit V1\",\"category\":[]},{\"title\":\"Valenwood Gambit V2\",\"category\":[]},{\"title\":\"A Birthday Wish\",\"category\":[]},{\"title\":\"The Reassignment\",\"category\":[]},{\"title\":\"Estelle's Escape\",\"category\":[]},{\"title\":\"Guide To Estelle's Escape\",\"category\":[]},{\"title\":\"A Fond Farewell\",\"category\":[]},{\"title\":\"A Battlefield Surprise\",\"category\":[]},{\"title\":\"Epiphany\",\"category\":[]},{\"title\":\"Valenwood Gambit V3\",\"category\":[]},{\"title\":\"A Cultural Event\",\"category\":[]},{\"title\":\"Valenwood Gambit V4\",\"category\":[]},{\"title\":\"Anvil Literary Association\",\"category\":[]},{\"title\":\"Playing The Game\",\"category\":[]},{\"title\":\"Adventures Of Bhargaz V1\",\"category\":[]},{\"title\":\"Adventures Of Bhargaz V2\",\"category\":[]},{\"title\":\"Adventures Of Bhargaz V3\",\"category\":[]},{\"title\":\"Bhargaz' Big Adventure\",\"category\":[]},{\"title\":\"Bhargaz' Excellent Escapade V1\",\"category\":[]},{\"title\":\"Bhargaz' Excellent Escapade V2\",\"category\":[]},{\"title\":\"Domestic Service\",\"category\":[]},{\"title\":\"Welcome Part 2\",\"category\":[]},{\"title\":\"A Casual Encounter\",\"category\":[]},{\"title\":\"Honour Demands\",\"category\":[]},{\"title\":\"Happiness\",\"category\":[]},{\"title\":\"A Trip To Skyrim\",\"category\":[]},{\"title\":\"A Day At The Baths\",\"category\":[]},{\"title\":\"Serpents Underfoot\",\"category\":[]},{\"title\":\"The Miller's Tale\",\"category\":[]},{\"title\":\"Queens and Pawns\",\"category\":[]},{\"title\":\"Masquerade\",\"category\":[]},{\"title\":\"Bhargaz' Excellent Escapade V3\",\"category\":[]},{\"title\":\"Newheim's Desserts\",\"category\":[]},{\"title\":\"The Taste Of Treason Vol 3\",\"category\":[]},{\"title\":\"Wrong House\",\"category\":[]},{\"title\":\"How Appropriate\",\"category\":[]},{\"title\":\"Incentives\",\"category\":[]},{\"title\":\"Arrogance Tamed\",\"category\":[]},{\"title\":\"An Adventure At Home\",\"category\":[]},{\"title\":\"Mercantile Affairs\",\"category\":[]},{\"title\":\"A Splash Of Cold Water\",\"category\":[]},{\"title\":\"Of Gods And Dunmer\",\"category\":[]},{\"title\":\"Three Brothers One Woman\",\"category\":[]},{\"title\":\"Palonirya's Secret\",\"category\":[]},{\"title\":\"An Adventure Continued\",\"category\":[]}]}");

/***/ }),

/***/ "598d":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[],\"books\":[{\"title\":\"Duck and Cover!\",\"category\":[]},{\"title\":\"Motivational Secrets of the Stars\",\"category\":[]},{\"title\":\"Paradise Lost\",\"category\":[]},{\"title\":\"Pugilism Illustrated\",\"category\":[]},{\"title\":\"Tumblers Today\",\"category\":[]},{\"title\":\"Wasteland Survival Guide\",\"category\":[]}]}");

/***/ }),

/***/ "5af0":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Bloodworm.esp\"],\"books\":[{\"title\":\"Message to the Vigilants\",\"category\":[]},{\"title\":\"Necromancer's Moon\",\"category\":[]}]}");

/***/ }),

/***/ "5c64":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"maslea.esm\"],\"books\":[{\"title\":\"Bark and Sap\",\"category\":[]},{\"title\":\"Zealotry\",\"category\":[]},{\"title\":\"Saints and Seducers\",\"category\":[]},{\"title\":\"Heretical Thoughts\",\"category\":[]},{\"title\":\"The Predecessors\",\"category\":[]},{\"title\":\"The Standing Stones\",\"category\":[]},{\"title\":\"The Blessings of Sheogorath\",\"category\":[]},{\"title\":\"From Frog to Man\",\"category\":[]},{\"title\":\"The Prophet Arden-Sul\",\"category\":[]},{\"title\":\"Fall of Vitharn\",\"category\":[]},{\"title\":\"As promised\",\"category\":[]},{\"title\":\"The Path of Freedom\",\"category\":[]},{\"title\":\"Kinlord Rilis And The Mages Guild Lorebook\",\"category\":[]},{\"title\":\"The Fall of Carac Dena\",\"category\":[]},{\"title\":\"The Chim El-Adabal\",\"category\":[]},{\"title\":\"The Origins of Conjuration\",\"category\":[]},{\"title\":\"Treaty on the Maslmer\",\"category\":[]},{\"title\":\"Worrisome disappearance\",\"category\":[]},{\"title\":\"The Maslean Courier: Closing of the gates\",\"category\":[]},{\"title\":\"Study on Maslmer Glyphs\",\"category\":[]},{\"title\":\"The Maslean Courier: Incident at Fort Palios\",\"category\":[]},{\"title\":\"The Maslean Courier: End of the dragon crisis\",\"category\":[]},{\"title\":\"The Maslean Courier: Victory of the Empire in Skyrim\",\"category\":[]},{\"title\":\"The Maslean Courier: Victory of the rebels in Skyrim\",\"category\":[]},{\"title\":\"The Sermons of Saint Velinus: The Psalm of Faith\",\"category\":[]},{\"title\":\"Book of Deliveries\",\"category\":[]},{\"title\":\"Bandits at the Coast\",\"category\":[]},{\"title\":\"The Klepthe Problem\",\"category\":[]},{\"title\":\"History of Paluseuil\",\"category\":[]},{\"title\":\"Bestiary of Maslea, First Part\",\"category\":[]},{\"title\":\"The History of Maslea, Chapter 2\",\"category\":[]},{\"title\":\"The History of Maslea, Chapter 3\",\"category\":[]},{\"title\":\"The History of Maslea, Chapter 1\",\"category\":[]},{\"title\":\"The Very Magnanimous King Fahara'jad\",\"category\":[]},{\"title\":\"Jorunn the Skald King\",\"category\":[]}]}");

/***/ }),

/***/ "5f46":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography\"],\"books\":[{\"title\":\"Poetry\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"O, Tempora! O, Mores!\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Tamerlane\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Song\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Imitation\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"A Dream\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Lake\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Spirits of the Dead\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Evening Star\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Dreams\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Stanzas\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Happiest Day\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"To Margaret\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Alone\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"To Isaac Lea\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"To The River ——\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"To ——\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Romance\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Fairy-Land\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"To Science\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"An Ascotic\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Elizabeth\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"To Helen\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"A Paean\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Sleeper\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The City in the Sea\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Valley of Unrest\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Israfel\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Enigma\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Coliseum\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Serenade\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The One in Paradise\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Hymn\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"To Elizabeth\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"May Queen Ode\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Spiritual Song\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Latin Hymn\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Bridal Ballad\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"To Zante\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Haunted Palace\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Silence-A Sonnet\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Lines on Joe Locke\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Conqueror Worm\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Lenore\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"A Campaign Song\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Dream-Land\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Impromptu. To Kate Carol\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Eulalie\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Raven\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Divine Right of Kings\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"A Valentine\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Beloved Physician\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Deep in Earth\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Ulalume\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Lines on Ale\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"An Enigma\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"A Dream Within A Dream\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"To My Mother\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"The Bells\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Poem\"]},{\"title\":\"Loss of Breath\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"A Decided Loss\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Bargain Lost\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Assignation\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Visionary\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Lionizing\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"A Tale\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Unparalleled Adventure of One Hans Pfaall\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"King Pest\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Shadow--A Parable\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Four Beasts in One--The Homo-Cameleopard\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Epimanes\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Mystification\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Von Jung, The Mystific\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Silence--A Fable\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"A Predicament\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Devil in the Belfry\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Man That Was Used Up\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Man in the Crowd\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Murders in the Rue Morgue\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"A Descent into the Maelström\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Island of the Fay\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Never Bet THe Devil Your Head\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Masque of the Red Death\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Oval Portrait\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Life in Death\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Landscape Garden\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Mystery of Marie Rogêt\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Pit and the Pendulum\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Tell-Tale Heart\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Gold-Bug\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Black Cat\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Spectacles\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"A Tale of the Ragged Mountains\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Premature Burial\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Mesmeric Revelation\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Oblong Box\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"An Extravaganza\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Angel of the Odd\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Thou Art the Man\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Purloined Letter\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"Some Words with a Mummy\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Power of Words\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Imp of the Perverse\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The System of Doctor Tarr and Professor Fether\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Sphinx\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]},{\"title\":\"The Domain of Arnheim\",\"author\":\"Edgar Allan Poe\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "5fa9":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Windfall.esm\"],\"books\":[{\"title\":\"Sacryn al'Hill\",\"category\":[]},{\"title\":\"The Medical Center Ledger\",\"category\":[]},{\"title\":\"Graz'Akh's Anatomy Reference\",\"category\":[]},{\"title\":\"Killer's Description\",\"category\":[]},{\"title\":\"101 Things to do with a Dead Rebel\",\"category\":[]},{\"title\":\"The Gambit\",\"category\":[]},{\"title\":\"Knight Operation Log\",\"category\":[]},{\"title\":\"Directions\",\"category\":[]},{\"title\":\"Imperial Directive\",\"category\":[]},{\"title\":\"Mystery of the Gorvette Diamond\",\"category\":[]},{\"title\":\"Guide to Windfall\",\"category\":[]},{\"title\":\"History of Windfall, Vol 1\",\"category\":[]},{\"title\":\"History of Windfall, Vol 2\",\"category\":[]},{\"title\":\"History of Windfall, Vol 3\",\"category\":[]},{\"title\":\"The Lucky Charm\",\"category\":[]},{\"title\":\"Proclamation!\",\"category\":[]},{\"title\":\"Righteous Operation Log\",\"category\":[]},{\"title\":\"Chamber Book\",\"category\":[]},{\"title\":\"Release\",\"category\":[]},{\"title\":\"History of Windfall, Vol 4\",\"category\":[]}]}");

/***/ }),

/***/ "661f":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://forgottenrealms.fandom.com/wiki/Category:Books_(in-universe)\"],\"books\":[{\"title\":\"A Dove at Dawn\",\"author\":\"Ardreth, the High Harp of Berdusk.\",\"category\":[]},{\"title\":\"A Harper's Companion, Vol. I\",\"author\":\"Cressaed Wood\",\"category\":[\"Spellbook\",\"Poem\"]},{\"title\":\"A Harper's Companion, Vol. II\",\"author\":\"Cressaed Wood\",\"category\":[\"Spellbook\",\"Poem\"]},{\"title\":\"A Harper's Companion, Vol. III\",\"author\":\"Cressaed Wood\",\"category\":[\"Spellbook\",\"Poem\"]},{\"title\":\"A History of Draconic Interactions\",\"category\":[\"Scholarly\"],\"description\":\"A History of Draconic Interactions was a book that compiled human knowledge about dragons. The book had very detailed facts about dragon society, including a section about the Xorvintaal.\"},{\"title\":\"A Merchant's Sagacity\",\"author\":\"Blackthorn Belgadar\",\"category\":[]},{\"title\":\"Against the Undead\",\"category\":[\"Spellbook\",\"Scholarly\",\"Religious\",\"Story\"]},{\"title\":\"Apocalypto\",\"category\":[\"Poem\"]},{\"title\":\"The Art of Weaponcrafting\",\"category\":[\"Self Help\"]},{\"title\":\"Book of Change\",\"category\":[\"Religious\",\"Spellbook\"],\"author\":\"Hsin Fu Chan of Kara-Tur\"},{\"title\":\"Book of the Holy Scourge\",\"category\":[\"Religious\"]},{\"title\":\"Book of St. Sollars\",\"category\":[\"Religious\"]},{\"title\":\"Chronicle of Years to Come, Vol. I\",\"author\":\"Maglas\",\"category\":[\"Myth\"]},{\"title\":\"Chronicle of Years to Come, Vol. II\",\"author\":\"Maglas\",\"category\":[\"Myth\"]},{\"title\":\"Chronicle of Years to Come, Vol. III\",\"author\":\"Maglas\",\"category\":[\"Myth\"]},{\"title\":\"Chronicle of Years to Come, Vol. IV\",\"author\":\"Maglas\",\"category\":[\"Myth\"]},{\"title\":\"The Collected Wisdom of Snilloc\",\"category\":[\"Scholarly\"],\"author\":\"Snilloc\"},{\"title\":\"The Compleat Dragon-Hunter\",\"author\":\"Smerdiuk Dragonbane\",\"category\":[\"Scholarly\",\"Self Help\"]},{\"title\":\"Delblood's Atlas of Faerûn\",\"author\":\"Delblood\",\"category\":[\"Scholarly\"]},{\"title\":\"Delver's Tome, Vol. I\",\"description\":\"Pure gold does not fear the fire.\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Delver's Tome, Vol. II\",\"description\":\"Better a friend at court than gold on the finger.\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Delver's Tome, Vol. III\",\"description\":\"Truth comes to us from the past, like gold washed down from the mountains.\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Delver's Tome, Vol. IV\",\"description\":\"A golden key will open every lock.\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Delver's Tome, Vol. V\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Delver's Tome, Vol. VI\",\"description\":\"Better an ounce of happiness than a pound of gold.\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Delver's Tome, Vol. VII\",\"description\":\"Silence is golden.\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Delver's Tome, Vol. VIII\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Delver's Tome, Vol. IX\",\"description\":\"The man who treasures his friends is usually solid gold himself.\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Delver's Tome, Vol. X\",\"description\":\"Gold is tried by fire; men by adversity.\",\"category\":[\"Self Help\",\"Philosophy\"]},{\"title\":\"Demonic Infestations\",\"category\":[\"Story\"]},{\"title\":\"Demonomicon of Iggwilv, Vol. I\",\"category\":[\"History\",\"Scholarly\"]},{\"title\":\"Demonomicon of Iggwilv, Vol. II\",\"category\":[\"History\",\"Scholarly\"]},{\"title\":\"Demonomicon of Iggwilv, Vol. III\",\"category\":[\"History\",\"Scholarly\"]},{\"title\":\"Demonomicon of Iggwilv, Vol. IV\",\"category\":[\"History\",\"Scholarly\"]},{\"title\":\"Demonomicon of Iggwilv, Vol. V\",\"category\":[\"History\",\"Scholarly\"]},{\"title\":\"Demonomicon of Iggwilv, Vol. VI\",\"category\":[\"History\",\"Scholarly\"]},{\"title\":\"Demonomicon of Iggwilv, Vol. VII\",\"category\":[\"History\",\"Scholarly\"]},{\"title\":\"A Discovery of the World\",\"author\":\"Vilhiard of Procampur\",\"category\":[\"Scholarly\"]},{\"title\":\"Dragonheir Clans\",\"category\":[\"History\",\"Scholarly\"]},{\"title\":\"The Dream of the Dragon\",\"category\":[\"Poem\"]},{\"title\":\"Elminster's Ecologies, Vol. I: An Investigation into the Natural Systems of Organisms and Their Surroundings\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Elminster's Ecologies, Vol. II: Cormanthor\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Elminster's Ecologies, Vol. III: Anauroch\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Elminster's Ecologies, Vol. IV: The Storm Horns and the Thunder Peaks\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Elminster's Ecologies, Vol. V: The Cormyrean Marshes\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Elminster's Ecologies, Vol. VI: The Stonelands and the Goblin Marches\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Elminster's Ecologies, Vol. VII: The Sea of Fallen Stars\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Elminster's Ecologies, Vol. VIII: The Great Gray Land of Thar\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Elminster's Ecologies, Vol. IX: The Settled Lands\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Elminster's Ecologies, Appendix IIIa\",\"author\":\"Elminster\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Encyclopaedia Deifica: Tales of Divinities, Both Living and Dead, Extracted Through Studious Cross-Faith Comparison and Revealed By the Hand of Oghma\",\"category\":[\"Scholarly\",\"Religious\"]}]}");

/***/ }),

/***/ "68a3":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[],\"books\":[{\"title\":\"How I Did It\",\"author\":\"Victor Frankenstein\",\"category\":[]}]}");

/***/ }),

/***/ "69f8":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"https://elderscrolls.fandom.com/wiki/Books_(Dragonborn)\"],\"books\":[{\"category\":[],\"title\":\"Ahzidal's Descent\",\"overview\":\"A short biography about the famed Nord enchanter and Dragon Priest, Ahzidal.\"},{\"category\":[],\"title\":\"Black Book: Epistolary Acumen\",\"overview\":\"A mysterious Black Book attributed to Hermaeus Mora.\"},{\"category\":[],\"title\":\"Black Book: Filament and Filigree\",\"overview\":\"A mysterious Black Book attributed to Hermaeus Mora.\"},{\"category\":[],\"title\":\"Black Book: The Hidden Twilight\",\"overview\":\"A mysterious Black Book attributed to Hermaeus Mora.\"},{\"category\":[],\"title\":\"Black Book: The Sallow Regent\",\"overview\":\"A mysterious Black Book attributed to Hermaeus Mora.\"},{\"category\":[],\"title\":\"Black Book: The Winds of Change\",\"overview\":\"A mysterious Black Book attributed to Hermaeus Mora.\"},{\"category\":[],\"title\":\"Black Book: Untold Legends\",\"overview\":\"A mysterious Black Book attributed to Hermaeus Mora.\"},{\"category\":[],\"title\":\"Black Book: Waking Dreams\",\"overview\":\"A mysterious Black Book attributed to Hermaeus Mora.\"},{\"category\":[],\"title\":\"Bone, Part I\",\"overview\":\"Part one in a tale surrounding the invention of bonemold armor.\"},{\"category\":[],\"title\":\"Bone, Part II\",\"overview\":\"Part two in a tale surrounding the invention of bonemold armor.\"},{\"category\":[],\"title\":\"Changed Ones\",\"overview\":\"A tale of how Boethiah corrupted Trinimac.\"},{\"category\":[],\"title\":\"Children of the All-Maker\",\"overview\":\"A brief study of the Skaal peoples of Solstheim in the Fourth Era.\"},{\"category\":[],\"title\":\"Confessions of a Dunmer Skooma Eater\",\"overview\":\"A cured Skooma addict's account of his addiction.\"},{\"category\":[],\"title\":\"Deathbrand\",\"overview\":\"A tale of the fearsome pirate king, Haknir Death-Brand.\"},{\"category\":[],\"title\":\"History of Raven Rock, Vol. I\",\"overview\":\"Part one of a description of events surrounding Raven Rock.\"},{\"category\":[],\"title\":\"History of Raven Rock, Vol. II\",\"overview\":\"Part two of a description of events surrounding Raven Rock.\"},{\"category\":[],\"title\":\"History of Raven Rock, Vol. III\",\"overview\":\"Part three of a description of events surrounding Raven Rock.\"},{\"category\":[],\"title\":\"Lives of the Saints\",\"overview\":\"A brief overview of the major saints in the Dunmer faith.\"},{\"category\":[],\"title\":\"Nchunak's Fire and Faith\",\"overview\":\"A translated account of Nchunak's travels among the Dwemer colonies, explaining the theories of Kagrenac.\"},{\"category\":[],\"title\":\"Nerevar at Red Mountain\",\"overview\":\"A scholarly retelling of Ashlander traditions describing the Battle of Red Mountain.\"},{\"category\":[],\"title\":\"On Apocrypha: Boneless Limbs\",\"overview\":\"A mysterious tome found in Apocrypha.\"},{\"category\":[],\"title\":\"On Apocrypha: Delving Pincers\",\"overview\":\"A mysterious tome found in Apocrypha.\"},{\"category\":[],\"title\":\"On Apocrypha: Gnashing Blades\",\"overview\":\"A mysterious tome found in Apocrypha.\"},{\"category\":[],\"title\":\"On Apocrypha: Prying Orbs\",\"overview\":\"A mysterious tome found in Apocrypha.\"},{\"category\":[],\"title\":\"The Axe Man\",\"overview\":\"The tale of a Morag Tong assassin and his affinity for axes.\"},{\"category\":[],\"title\":\"The Anticipations\",\"overview\":\"A brief overview of the \\\"good\\\" Daedric Princes venerated by the Dunmer people.\"},{\"category\":[],\"title\":\"The Doors of the Spirit\",\"overview\":\"Dunmer religious text relating to Ancestor spirits.\"},{\"category\":[],\"title\":\"The Five Far Stars\",\"overview\":\"A volume of verse collected from wise women of the Urshilaku Ashlanders.\"},{\"category\":[],\"title\":\"The Guardian and the Traitor\",\"overview\":\"A Skaal legend recounting the fall of the Dragon Priest, Miraak.\"},{\"category\":[],\"title\":\"The House of Troubles\",\"overview\":\"An overview of the Daedric Princes who rebelled against the Tribunal Temple.\"},{\"category\":[],\"title\":\"The Poison Song, Book I\",\"overview\":\"Part 1 of an epic set in the aftermath of the war with the Dwemer and House Dagoth.\"},{\"category\":[],\"title\":\"The Poison Song, Book II\",\"overview\":\"Part 2 of an epic set in the aftermath of the war with the Dwemer and House Dagoth.\"},{\"category\":[],\"title\":\"The Poison Song, Book III\",\"overview\":\"Part 3 of an epic set in the aftermath of the war with the Dwemer and House Dagoth.\"},{\"category\":[],\"title\":\"The Poison Song, Book IV\",\"overview\":\"Part 4 of an epic set in the aftermath of the war with the Dwemer and House Dagoth.\"},{\"category\":[],\"title\":\"The Poison Song, Book V\",\"overview\":\"Part 5 of an epic set in the aftermath of the war with the Dwemer and House Dagoth.\"},{\"category\":[],\"title\":\"The Poison Song, Book VI\",\"overview\":\"Part 6 of an epic set in the aftermath of the war with the Dwemer and House Dagoth.\"},{\"category\":[],\"title\":\"The Poison Song, Book VII\",\"overview\":\"Part 7 of an epic set in the aftermath of the war with the Dwemer and House Dagoth.\"},{\"category\":[],\"title\":\"Thirsk, a Revised History\",\"overview\":\"A chronicle of Thirsk Mead Hall's history and chieftains.\"},{\"category\":[],\"title\":\"The Reclamations\",\"overview\":\"A study into the fall of the Tribunal Temple and the reinstatement of the Daedric Princes in Dunmer religion.\"},{\"category\":[],\"title\":\"The Red Year, Vol I\",\"overview\":\"Part one in a series of interviews with survivors of the Red Year.\"},{\"category\":[],\"title\":\"The Red Year, Vol II\",\"overview\":\"Part two in a series of interviews with survivors of the Red Year.\"},{\"category\":[],\"title\":\"The True Noble's Code\",\"overview\":\"A guidebook for members of House Redoran.\"},{\"category\":[],\"title\":\"Trap\",\"overview\":\"A tale describing the chilling fate of a thief.\"},{\"category\":[],\"title\":\"Varieties of Faith in the Empire\",\"overview\":\"Detailed listing of the pantheons and associated divine spirits of Tamriel's dominant cultures.\"},{\"category\":[],\"title\":\"Where were you when the Dragon Broke?\",\"overview\":\"A study in to the Dragon Breaks and their effects.\"},{\"category\":[],\"title\":\"Wind and Sand\",\"overview\":\"A brief essay about the sands of the Alik'r Desert and their relationship to magic.\"},{\"category\":[],\"title\":\"Words of the Wind\",\"overview\":\"A volume of verse collected from Ashlander wise women.\"}]}");

/***/ }),

/***/ "6db6":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[],\"books\":[{\"title\":\"The Veritas\",\"description\":\"A short book kept in the Vatican's secret library of blasphemy, the contents of which cause everyone who reads it to kill themselves. Why? Because it reveals the \\\" world \\\" is a computer simulation created by hostile aliens as preparation for their planned invasion of Earth, and thus no one in it is real.\",\"category\":[]}]}");

/***/ }),

/***/ "6e39":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"Darkend.esp\"],\"books\":[{\"title\":\"Subject 18\",\"category\":[]},{\"title\":\"The Storm and Her Captain\",\"category\":[]}]}");

/***/ }),

/***/ "6fa2":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"WheelsOfLull.esp\"],\"books\":[{\"title\":\"Message from the Eternity\",\"category\":[]},{\"title\":\"Security Pack List\",\"category\":[]},{\"title\":\"Sybandis\",\"category\":[]},{\"title\":\"Journeys Through Sybandis\",\"category\":[]},{\"title\":\"Harquebuses\",\"category\":[]},{\"title\":\"Tatterdemalion\",\"category\":[]},{\"title\":\"The Cacophany\",\"category\":[]},{\"title\":\"Wind Up and Wound Down\",\"category\":[]},{\"title\":\"Musings On Power\",\"category\":[]},{\"title\":\"De Rerum Mutabilitatis\",\"category\":[]},{\"title\":\"Cheater\",\"category\":[]},{\"title\":\"How To Moon\",\"category\":[]},{\"title\":\"Chronography, Volume I\",\"category\":[]},{\"title\":\"Chronography, Volume III\",\"category\":[]},{\"title\":\"Chronography, Volume II\",\"category\":[]}]}");

/***/ }),

/***/ "7177":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "740e":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Ivellon.esp\"],\"books\":[{\"title\":\"Teleport Scroll\",\"category\":[]},{\"title\":\"The Nine Commandments of the Eight \",\"category\":[]},{\"title\":\"Blessed Weapons\",\"category\":[]},{\"title\":\"Stone Plate\",\"category\":[]},{\"title\":\"The Undead\",\"category\":[]},{\"title\":\"The Cloud Tower of Cheydinhal\",\"category\":[]},{\"title\":\"The Legend of Ivellon\",\"category\":[]},{\"title\":\"Ancient Scroll\",\"category\":[]},{\"title\":\"Castle Ivellon's Log Book\",\"category\":[]},{\"title\":\"Strange Tombstone\",\"category\":[]},{\"title\":\"Scepter of the Ancestors\",\"category\":[]},{\"title\":\"The last pages of Castle Ivellon's log book\",\"category\":[]}]}");

/***/ }),

/***/ "764c":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"Phoe.esm\"],\"books\":[{\"title\":\"Akaviri Wildlife\",\"category\":[]},{\"title\":\"Tei History\",\"category\":[]},{\"title\":\"Arcane Stone: Ignite\",\"category\":[]},{\"title\":\"Arcane Stone: Frost Fire\",\"category\":[]}]}");

/***/ }),

/***/ "7c09":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"GoldenCrest.esp\"],\"books\":[{\"title\":\"Honorable Pirates?\",\"category\":[]},{\"title\":\"The Four Suitors of Benitah\",\"category\":[]},{\"title\":\"The Underground\",\"category\":[]},{\"title\":\"The Pirates of Anvil!\",\"category\":[]},{\"title\":\"Helen's Cure for Depression\",\"category\":[]},{\"title\":\"Realizations of Acrobacy\",\"category\":[]},{\"title\":\"The Forgotten Power\",\"category\":[]},{\"title\":\"The Mythology of the Buccaneer\",\"category\":[]},{\"title\":\"School of Destruction\",\"category\":[]},{\"title\":\"The Dowry\",\"category\":[]}]}");

/***/ }),

/***/ "7df5":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"QOTW Season One.esp\"],\"books\":[{\"title\":\"Assassination!\",\"category\":[]},{\"title\":\"A New Guild for Fighters?\",\"category\":[]}]}");

/***/ }),

/***/ "80cc":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[],\"books\":[{\"title\":\"The Darkhold\",\"author\":\"Chtlon\",\"category\":[\"Spellbook\"],\"description\":\"The tome called The Darkhold was written by the elder (and evil) god Chthon as one of the first—if not the first—book of magic ever. Writing the Darkhold allowed Chthon to influence the very nature of magic itself. It contains a variety of spells, but using one equals sealing your soul to Chthon, and most of them work in really twisted and sick ways. The Darkhold is also known as the Book of Sins because of its corrupting influence. \"},{\"title\":\"Book of the Vishanti\",\"category\":[\"Spellbook\"],\"description\":\"The Book of the Vishanti is said to contain every counter-spell and all defensive magic ever (to be) known, including a spell to free one from the Darkhold's control. (Oddly enough it doesn't seem to contain the spell to cure vampirism, which is in the Darkhold.) It also contains a lot of useful lore penned by previous holders of the tome and it seems to explicitly add new pages for current owners to add their own information into its pages. Doctor Strange has an entire library of these.\"}]}");

/***/ }),

/***/ "80f7":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"The Orcs Initiation.esp\"],\"books\":[{\"title\":\"The Orc's Initiation\",\"category\":[]}]}");

/***/ }),

/***/ "8107":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"Black Marsh.esm\"],\"books\":[{\"title\":\"Finally\",\"category\":[]},{\"title\":\"Refuge\",\"category\":[]},{\"title\":\"Lost Gods\",\"category\":[]}]}");

/***/ }),

/***/ "81bd":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"ElsweyrAnequina.esp\"],\"books\":[{\"title\":\"Guide to Elsweyr, v 1\",\"category\":[]},{\"title\":\"Riverhold Music Bar Hours\",\"category\":[]},{\"title\":\"Khajiit Book of Fables I\",\"category\":[]},{\"title\":\"Guide to Elsweyr, v 2\",\"category\":[]},{\"title\":\"Faith in the Empire, Elsweyr\",\"category\":[]},{\"title\":\"Words of Clan Mother Ahnissi\",\"category\":[]},{\"title\":\"The Arena Circuit, v 7\",\"category\":[]},{\"title\":\"Confessions of a Dunmer Skooma-Eater\",\"category\":[]},{\"title\":\"Hunting Hunters Hunted, v 1\",\"category\":[]},{\"title\":\"Hunting Hunters Hunted, v 2\",\"category\":[]},{\"title\":\"Hunting Hunters Hunted, v 3\",\"category\":[]},{\"title\":\"The Pocket Guide to the Empire, 1st Ed.\",\"category\":[]},{\"title\":\"The Pocket Guide to the Empire, 3rd E.\",\"category\":[]},{\"title\":\"Sugar and Blood, the Cats of the South\",\"category\":[]},{\"title\":\"Orsinium\",\"category\":[]},{\"title\":\"Ius, Animal God\",\"category\":[]},{\"title\":\"The Tsaesci Creation Myth\",\"category\":[]},{\"title\":\"The Water-Getting Girl\",\"category\":[]},{\"title\":\"Provinces of Tamriel\",\"category\":[]},{\"title\":\"On Lycanthropy\",\"category\":[]},{\"title\":\"Imperial Legion Missive\",\"category\":[]},{\"title\":\"Dune Market Hours\",\"category\":[]},{\"title\":\"Corinthe Market Hours\",\"category\":[]},{\"title\":\"Orcrest Market Hours\",\"category\":[]},{\"title\":\"Riverhold Market Hours\",\"category\":[]},{\"title\":\"The Art of Taxidermy\",\"category\":[]},{\"title\":\"Missing Cats!\",\"category\":[]},{\"title\":\"House Dining Area\",\"category\":[]},{\"title\":\"House Bedroom Area\",\"category\":[]},{\"title\":\"The Tamriel Bestiary Vol. 1\",\"category\":[]},{\"title\":\"The Tamriel Bestiary Vol. 2\",\"category\":[]},{\"title\":\"House Kitchen Area\",\"category\":[]},{\"title\":\"House Wall Hangings\",\"category\":[]},{\"title\":\"The Song of Pelinal, v 5\",\"category\":[]},{\"title\":\"Special Flora of Tamriel\",\"category\":[]},{\"title\":\"Animal Explode\",\"category\":[]},{\"title\":\"Jobasha's Rare Books\",\"category\":[]},{\"title\":\"Chae-Varseu Florist\",\"category\":[]},{\"title\":\"Maerendil's Fine Tapestries\",\"category\":[]},{\"title\":\"The Arena Circuit, v 3\",\"category\":[]},{\"title\":\"The Firmament (Illuminated)\",\"category\":[]},{\"title\":\"House Sitting Area\",\"category\":[]},{\"title\":\"House Storage Area\",\"category\":[]},{\"title\":\"Khajiit Books\",\"category\":[]},{\"title\":\"House Fireplace Area\",\"category\":[]},{\"title\":\"House Reading Area\",\"category\":[]},{\"title\":\"Elsweyr Anequina\",\"category\":[]},{\"title\":\"House Study Area\",\"category\":[]},{\"title\":\"House Rugs and Tapestries\",\"category\":[]},{\"title\":\"The Arena Circuit, v 1\",\"category\":[]},{\"title\":\"Rimmen Market Hours\",\"category\":[]},{\"title\":\"The Arena Circuit, v 4\",\"category\":[]}]}");

/***/ }),

/***/ "844c":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Gray Fox Cowl.esm\"],\"books\":[{\"title\":\"We were Yokudans\",\"category\":[]},{\"title\":\"The Great Mission\",\"category\":[]},{\"title\":\"The punishment of the Forgotten Draugr\",\"category\":[]}]}");

/***/ }),

/***/ "85ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8606":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"The Lost Spires.esp\"],\"books\":[{\"title\":\"Warlock Scroll\",\"category\":[]},{\"title\":\"Sentinels of Kar'toom\",\"category\":[]},{\"title\":\"Ayleid Scroll\",\"category\":[]},{\"title\":\"Sacred Warlock Scroll\",\"category\":[]},{\"title\":\"Runes of Cyrodiil\",\"category\":[]}]}");

/***/ }),

/***/ "89c6":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"Black Marsh North.esp\"],\"books\":[{\"title\":\"Portal to our master\",\"category\":[]},{\"title\":\"Welcome to Black Marsh\",\"category\":[]}]}");

/***/ }),

/***/ "8ac7":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"HeartOftheDead.esp\"],\"books\":[{\"title\":\"Yurn's 2nd Passage\",\"category\":[]},{\"title\":\"Song of the Three Clue\",\"category\":[]},{\"title\":\"Song of the Nerevarine\",\"category\":[]},{\"title\":\"Song of the Three, v1\",\"category\":[]},{\"title\":\"Dragon Hint\",\"category\":[]},{\"title\":\"Yurn's 3rd Passage\",\"category\":[]},{\"title\":\"Yurn's 1st Passage\",\"category\":[]}]}");

/***/ }),

/***/ "9201":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://kamenrider.fandom.com/\"],\"books\":[{\"title\":\"UNDEAD GREEN BLOOD\",\"category\":[\"Myth\"]},{\"title\":\"Hybrid Insector\",\"category\":[]},{\"title\":\"Say Your Wish…\",\"category\":[]},{\"title\":\"The Garden Inside the Lens\",\"category\":[]},{\"title\":\"Memories of the Future\",\"category\":[]}]}");

/***/ }),

/***/ "9220":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Satin And Hot Oil.esp\"],\"books\":[{\"title\":\"Satin And Hot Oil\",\"category\":[]}]}");

/***/ }),

/***/ "95f4":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Kragenir's Death Quest.esp\"],\"books\":[{\"title\":\"Umbra\",\"category\":[]},{\"title\":\"The King's Men Part 1\",\"category\":[]},{\"title\":\"The King's Men Part 2\",\"category\":[]},{\"title\":\"Alternative Armour\",\"category\":[]},{\"title\":\"Arald Potier and the Freed Dragon\",\"category\":[]},{\"title\":\"Milbereth and the Glass Kagouti 1\",\"category\":[]},{\"title\":\"Milbereth and the Glass Kagouti 2\",\"category\":[]},{\"title\":\"Milbereth and the Glass Kagouti 3\",\"category\":[]},{\"title\":\"The Do It Yourself Guide to Boatbuilding\",\"category\":[]},{\"title\":\"Zabhila's Guide to Leyawiin\",\"category\":[]},{\"title\":\"The Hoyden's Husband Part 1\",\"category\":[]},{\"title\":\"The Hoyden's Husband Part 2\",\"category\":[]},{\"title\":\"The Hoyden's Husband Part 3\",\"category\":[]},{\"title\":\"Confirmation\",\"category\":[]},{\"title\":\"Book of Magery\",\"category\":[]},{\"title\":\"Desiree's Second Torn Up Contract\",\"category\":[]},{\"title\":\"Algot's The Gold Ribbon of Merit\",\"category\":[]},{\"title\":\"Summon Vampire Horde\",\"category\":[]},{\"title\":\"Paper Aeroplane\",\"category\":[]},{\"title\":\"Guide to Visiting Ayleid Ruins\",\"category\":[]},{\"title\":\"The Cliff Racer Song Sheet\",\"category\":[]},{\"title\":\"Treatment for Dopey, Page 1\",\"category\":[]},{\"title\":\"Desiree's Torn Up Contract\",\"category\":[]},{\"title\":\"Seal Key 1: Scroll\",\"category\":[]},{\"title\":\"Treatment for Dopey, Page 2\",\"category\":[]},{\"title\":\"Daedric Eyes\",\"category\":[]},{\"title\":\"Collection of Books\",\"category\":[]},{\"title\":\"Eating Houses\",\"category\":[]},{\"title\":\"Agilius Pranko's Memorandum\",\"category\":[]},{\"title\":\"Querulus Mona's Route Description\",\"category\":[]},{\"title\":\"Strange Book\",\"category\":[]},{\"title\":\"Serpent Project Chapter 1\",\"category\":[]},{\"title\":\"The Riddle of the Ring\",\"category\":[]},{\"title\":\"Snowwhite's Portrait\",\"category\":[]},{\"title\":\"Daedra Zoo Flyer\",\"category\":[]},{\"title\":\"Daedra Zoo Membership Card\",\"category\":[]},{\"title\":\"Daedra Zoo Ticket\",\"category\":[]},{\"title\":\"Life After Death\",\"category\":[]},{\"title\":\"Summon Essence Scroll\",\"category\":[]},{\"title\":\"Deevius's Log\",\"category\":[]},{\"title\":\"The Life of Riley\",\"category\":[]},{\"title\":\"Testament of Futurus X\",\"category\":[]},{\"title\":\"Investigation: Rancid Ra'dirsha\",\"category\":[]},{\"title\":\"Investigation: Atahba\",\"category\":[]},{\"title\":\"Investigation: J'bari\",\"category\":[]},{\"title\":\"Investigation: Shamada\",\"category\":[]},{\"title\":\"Investigation: Shomara\",\"category\":[]},{\"title\":\"Investigation: Tsrava\",\"category\":[]},{\"title\":\"Investigation: S'kasha\",\"category\":[]},{\"title\":\"Investigation: Shuravi\",\"category\":[]},{\"title\":\"Investigation: S'drassa\",\"category\":[]},{\"title\":\"Investigation: Tsavi\",\"category\":[]},{\"title\":\"Investigation: Woman in Three Sisters Inn\",\"category\":[]},{\"title\":\"Investigation: Janonia Aruncaeia\",\"category\":[]},{\"title\":\"Investigation: Januarius Aruncaeia\",\"category\":[]},{\"title\":\"Investigation: Alessia Caro\",\"category\":[]},{\"title\":\"Investigation: Hlidara Mothril \",\"category\":[]},{\"title\":\"Investigation: On-Staya Sundew\",\"category\":[]},{\"title\":\"Investigation: Betto Plottius\",\"category\":[]},{\"title\":\"Investigation: Julitta Plottius\",\"category\":[]},{\"title\":\"Investigation: Eitar\",\"category\":[]},{\"title\":\"Investigation: Ahdarji\",\"category\":[]},{\"title\":\"Investigation: Ra'Jahirr\",\"category\":[]},{\"title\":\"From John the Reeker\",\"category\":[]},{\"title\":\"Carrying Useless Clutter?\",\"category\":[]},{\"title\":\"Contract for Three Little Pigs\",\"category\":[]},{\"title\":\"Walt's Screen Test Voucher\",\"category\":[]},{\"title\":\"Salmo's Flyer\",\"category\":[]},{\"title\":\"Bear Human Dictionary\",\"category\":[]},{\"title\":\"The Tragic Tale of Roberto Denarius\",\"category\":[]},{\"title\":\"Blank Affidavit\",\"category\":[]},{\"title\":\"Completed Affidavit \",\"category\":[]},{\"title\":\"The Shame of Kvatch\",\"category\":[]},{\"title\":\"Tavia's Sister's Red Book of Riddles\",\"category\":[]},{\"title\":\"Baeralorn's Spell Book\",\"category\":[]},{\"title\":\"Roll of Honour\",\"category\":[]},{\"title\":\"Card of Wonder\",\"category\":[]},{\"title\":\"Bruiant's Dogs Painting\",\"category\":[]},{\"title\":\"Members of the Waterfront\",\"category\":[]},{\"title\":\"The Stone in the Sword\",\"category\":[]},{\"title\":\"Tolgan's Clue 1\",\"category\":[]},{\"title\":\"Tolgan's Clue 2\",\"category\":[]},{\"title\":\"Tolgan's Clue 3\",\"category\":[]},{\"title\":\"Tolgan's Clue 4\",\"category\":[]},{\"title\":\"Tolgan's Clue 5\",\"category\":[]},{\"title\":\"Tolgan's Clue 6\",\"category\":[]},{\"title\":\"Tolgan's Clue 7\",\"category\":[]},{\"title\":\"Tolgan's Clue 8\",\"category\":[]},{\"title\":\"Courier Competition Edition\",\"category\":[]},{\"title\":\"Broken Worlds\",\"category\":[]},{\"title\":\"Money Talks\",\"category\":[]},{\"title\":\"Lovelorn\",\"category\":[]},{\"title\":\"Heavenly Armour\",\"category\":[]},{\"title\":\"Serpent Project Chapter 2\",\"category\":[]},{\"title\":\"Serpent Project Chapter 3\",\"category\":[]},{\"title\":\"Serpent Project Chapter 4\",\"category\":[]},{\"title\":\"Serpent Project Chapter 5\",\"category\":[]},{\"title\":\"Music of the Shallaran Seas\",\"category\":[]},{\"title\":\"Serpent Project Chapter 6\",\"category\":[]},{\"title\":\"Serpent Project Chapter 7\",\"category\":[]},{\"title\":\"Serpent Project Conclusion\",\"category\":[]},{\"title\":\"Carmana's The Argonian Account, Book 1\",\"category\":[]},{\"title\":\"Iniel's The Third Door\",\"category\":[]},{\"title\":\"Jastia's The Argonian Account, Book 1\",\"category\":[]},{\"title\":\"Vontan's The Argonian Account, Book 1\",\"category\":[]},{\"title\":\"Vontan's Dwemer History and Culture\",\"category\":[]},{\"title\":\"Geem's The Argonian Account, Book 1\",\"category\":[]},{\"title\":\"Pista's Fall of the Snow Prince\",\"category\":[]},{\"title\":\"Winson's The Old Ways\",\"category\":[]},{\"title\":\"Wumeek's Tamrielic Lore\",\"category\":[]},{\"title\":\"Is it a Sin?\",\"category\":[]},{\"title\":\"Inconsequential\",\"category\":[]},{\"title\":\"Face Value\",\"category\":[]},{\"title\":\"Dead Men Walking\",\"category\":[]},{\"title\":\"Life at the High End V1\",\"category\":[]},{\"title\":\"Life at the High End V2\",\"category\":[]},{\"title\":\"Passing the Time\",\"category\":[]},{\"title\":\"Sheep\",\"category\":[]},{\"title\":\"The Fall of the Goblin King\",\"category\":[]},{\"title\":\"The Pirates of Black Rock Cavern\",\"category\":[]},{\"title\":\"Dirty Dealings by the Rich and Powerful?\",\"category\":[]},{\"title\":\"On the Art of Doing Nothing\",\"category\":[]},{\"title\":\"Wine Deliverer Wanted!\",\"category\":[]}]}");

/***/ }),

/***/ "9748":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"TrueHel.esp\"],\"books\":[{\"title\":\"Sermon\",\"category\":[]},{\"title\":\"An Appointment\",\"category\":[]},{\"title\":\"Sonatorrek\",\"category\":[]},{\"title\":\"From Hel #2\",\"category\":[]},{\"title\":\"From Hel #3\",\"category\":[]},{\"title\":\"From Hel #1\",\"category\":[]},{\"title\":\"From Hel #4\",\"category\":[]}]}");

/***/ }),

/***/ "98fc":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Clockwork.esp\"],\"books\":[{\"title\":\"Camilla's Trail - Part One\",\"category\":[]},{\"title\":\"Camilla's Trail - Part Four\",\"category\":[]},{\"title\":\"Camilla's Trail - Part Three\",\"category\":[]},{\"title\":\"Camilla's Trail - Part Two\",\"category\":[]},{\"title\":\"Corrosive Vapour Warning\",\"category\":[]}]}");

/***/ }),

/***/ "999e":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../books-schema.json\",\"sources\":[\"https://elderscrolls.fandom.com/wiki/Books_(Daggerfall)\"],\"books\":[{\"category\":[],\"title\":\"A Dubious Tale of the Crystal Tower\",\"author\":\"Bibenus Geon\",\"description\":\"A dubious tale of a talented bard, as told by a neonate of the Crystal Tower.\"},{\"category\":[],\"title\":\"A History of Daggerfall\",\"author\":\"Odiva Gallwood\",\"description\":\"A book on the history of Daggerfall.\"},{\"category\":[],\"title\":\"A Scholar's Guide to Nymphs\",\"author\":\"Vondham Barres\",\"description\":\"A book on Nymphs.\"},{\"category\":[],\"title\":\"An Overview of Gods and Worship in Tamriel\",\"author\":\"Brother Hetchfeld\",\"description\":\"A study into the worship of the gods in Tamriel.\"},{\"category\":[],\"title\":\"Arkay The God\",\"author\":\"Mymophonus\",\"description\":\"A book on the God Arkay.\"},{\"category\":[],\"title\":\"Banker's Bet\",\"author\":\"Porbert Lyttumly\",\"description\":\"A story showing how far someone will go for gold.\"},{\"category\":[],\"title\":\"Bothdorji Scroll\",\"description\":\"A mysterious text mentioning Oblivion and its minions.\"},{\"category\":[],\"title\":\"Broken Diamonds\",\"author\":\"Ryston Baylor\",\"description\":\"A book on the Broken Diamonds holiday.\"},{\"category\":[],\"title\":\"Confessions of a Thief\",\"description\":\"The confessions of a thief.\"},{\"category\":[],\"title\":\"Divad the Singer\",\"author\":\"Destri Melarg\",\"description\":\"A book on the early life of Divad the Singer.\"},{\"category\":[],\"title\":\"Etiquette with Rulers\",\"author\":\"Erystera Ligen\",\"description\":\"An etiquette for when speaking with nobles.\"},{\"category\":[],\"title\":\"Fav'te's War of Betony\",\"author\":\"Fav'te\",\"description\":\"A book on the War of Betony.\"},{\"category\":[],\"title\":\"Fool's Ebony, Book I\",\"author\":\"Frincheps\",\"description\":\"The first book in a six part series of an adventurer.\"},{\"category\":[],\"title\":\"Fool's Ebony, Book II\",\"author\":\"Frincheps\",\"description\":\"The second book in the series.\"},{\"category\":[],\"title\":\"Fool's Ebony, Book III\",\"author\":\"Frincheps\",\"description\":\"The third book in the series.\"},{\"category\":[],\"title\":\"Fool's Ebony, Book IV\",\"author\":\"Frincheps\",\"description\":\"The fourth book in the series.\"},{\"category\":[],\"title\":\"Fool's Ebony, Book V\",\"author\":\"Frincheps\",\"description\":\"The fifth book in the series.\"},{\"category\":[],\"title\":\"Fool's Ebony, Book VI\",\"author\":\"Frincheps\",\"description\":\"The sixth book in the series.\"},{\"category\":[],\"title\":\"Ghraewaj and the Harpies\",\"author\":\"Tidasus\",\"description\":\"A book on the play Ghraewaj.\"},{\"category\":[],\"title\":\"Holidays of the Iliac Bay\",\"author\":\"Theth-i\",\"description\":\"A book on the holidays of the Iliac Bay.\"},{\"category\":[],\"title\":\"Invocation of Azura\",\"author\":\"Sigillah Parate\",\"description\":\"The autobiography of a high priestess of Azura, focusing on the various Daedric cults she followed throughout her life.\"},{\"category\":[],\"title\":\"Ius, Animal God\",\"author\":\"Buljursoma\",\"description\":\"A book on the description of the animal God Ius.\"},{\"category\":[],\"title\":\"Jokes\",\"author\":\"Butha Sunhous\",\"description\":\"A book of jokes.\"},{\"category\":[],\"title\":\"King Edward, Book I\",\"description\":\"The first book in the twelve part series on King Edward.\"},{\"category\":[],\"title\":\"King Edward, Book II\",\"description\":\"The second book in series.\"},{\"category\":[],\"title\":\"King Edward, Book III\",\"description\":\"The third book in the series.\"},{\"category\":[],\"title\":\"King Edward, Book IV\",\"description\":\"The forth book in the series.\"},{\"category\":[],\"title\":\"King Edward, Book V\",\"description\":\"The fifth book in the series.\"},{\"category\":[],\"title\":\"King Edward, Book VI\",\"description\":\"The sixth book in the series.\"},{\"category\":[],\"title\":\"King Edward, Book VII\",\"description\":\"The seventh book in the series.\"},{\"category\":[],\"title\":\"King Edward, Book VIII\",\"description\":\"The eighth book in the series.\"},{\"category\":[],\"title\":\"King Edward, Book IX\",\"description\":\"The ninth book in the series.\"},{\"category\":[],\"title\":\"King Edward, Book X\",\"description\":\"The tenth book in the series.\"},{\"category\":[],\"title\":\"King Edward, Book XI\",\"description\":\"The eleventh book in the series.\"},{\"category\":[],\"title\":\"King Edward, Book XII\",\"description\":\"The twelfth book in the series.\"},{\"category\":[],\"title\":\"Legal Basics\",\"author\":\"M.Z.F. Anchivius\",\"description\":\"A book on the law\"},{\"category\":[],\"title\":\"Mara's Tear\",\"author\":\"Zhen\",\"description\":\"A tale about Masser and Secunda.\"},{\"category\":[],\"title\":\"Mysticism: The Unfathomable Voyage\",\"author\":\"Tetronius Lor\",\"description\":\"A description of the school of Mysticism.\"},{\"category\":[],\"title\":\"Newgate's War of Betony\",\"author\":\"Vulper Newgate\",\"description\":\"A book on the War of Betony.\"},{\"category\":[],\"title\":\"Oelander's Hammer\",\"author\":\"Krowle\",\"description\":\"A children's tale of Oelander's Hammer.\"},{\"category\":[],\"title\":\"Of Jephre\",\"description\":\"A book on the Deity Y'ffre.\"},{\"category\":[],\"title\":\"On Lycanthropy\",\"author\":\"Varnard Karessen\",\"description\":\"a book on the Lycanthropes of Tamriel.\"},{\"category\":[],\"title\":\"Origin of the Mages Guild\",\"author\":\"Archmage Salarth\",\"description\":\"A book detailing where and how the Mages Guild began.\"},{\"category\":[],\"title\":\"Redguards, Their History and Their Heroes\",\"author\":\"Destri Melarg\",\"description\":\"A book on Redguard history.\"},{\"category\":[],\"title\":\"Rude Song\",\"description\":\"A song.\"},{\"category\":[],\"title\":\"Special Flora of Tamriel\",\"author\":\"Hardin the Herbalist\",\"description\":\"List of some of the rarest plants in Tamriel.\"},{\"category\":[],\"title\":\"The Alik'r\",\"author\":\"Enric Milres\",\"description\":\"A book on the Alik'r Desert.\"},{\"category\":[],\"title\":\"The Arrowshot Woman\",\"description\":\"A tale of a woman who claims she's been shot.\"},{\"category\":[],\"title\":\"The Asylum Ball\",\"author\":\"Waughin Jarth\",\"description\":\"The tale of a ball that was held at an Asylum, by Pelagius III.\"},{\"category\":[],\"title\":\"The Ebon Arm\",\"author\":\"Witten Rol\",\"description\":\"A book on Reymon Ebonarm, the God of war.\"},{\"category\":[],\"title\":\"The Epic of the Grey Falcon\",\"author\":\"Anido Jhone\",\"description\":\"A tale from the Second Era of a warship called the Grey Falcon.\"},{\"category\":[],\"title\":\"The Faerie\",\"author\":\"Szun Triop\",\"description\":\"A book on the Faerie of Tamriel.\"},{\"category\":[],\"title\":\"The Fall of the Usurper\",\"author\":\"Palaux Illthre\",\"description\":\"A book on the downfall of Camoran Usurper.\"},{\"category\":[],\"title\":\"The First Scroll of Baan Dar\",\"author\":\"Arkan\",\"description\":\"A book on Baan Dar.\"},{\"category\":[],\"title\":\"The Healer's Tale\",\"description\":\"A book on the tale of a healer.\"},{\"category\":[],\"title\":\"The Legend of Lover's Lament\",\"author\":\"Croll Baumoval\",\"description\":\"A tale of two lovers.\"},{\"category\":[],\"title\":\"The Light and the Dark\",\"author\":\"Irek Unterge\",\"description\":\"A story of an elderly man teaching the subject of the Light and the Dark to his grandchildren.\"},{\"category\":[],\"title\":\"The Pig Children\",\"author\":\"Tyston Bane\",\"description\":\"A racist overview of the Orsimer.\"},{\"category\":[],\"title\":\"The Sage\",\"author\":\"Aegrothius Goth\",\"description\":\"A book about a Breton and his journey of becoming a sage.\"},{\"category\":[],\"title\":\"The Story of Lyrisius\",\"author\":\"Bresne Smythe\",\"description\":\"A tale of Lyrisius.\"},{\"category\":[],\"title\":\"The Wild Elves\",\"author\":\"Kier-Jo Chorvak\",\"description\":\"An insight into Ayleid culture.\"},{\"category\":[],\"title\":\"Tract\",\"description\":\"A description of a mysterious contact with a deity.\"},{\"category\":[],\"title\":\"Vampires of the Iliac Bay\",\"description\":\"A book on the vampires of the Illiac Bay.\"},{\"category\":[],\"title\":\"Wayrest, Jewel of the Bay\",\"author\":\"Sathyr Longleat\",\"description\":\"A book on Wayrest.\"}]}");

/***/ }),

/***/ "9d10":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"QOTW Season Three.esp\"],\"books\":[{\"title\":\"Wolf Attack Plan\",\"category\":[]}]}");

/***/ }),

/***/ "a255":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[],\"books\":[{\"title\":\"Bone Guide\",\"category\":[\"Biology\"]},{\"title\":\"Blood Type OH!\",\"category\":[\"Story\"]},{\"title\":\"Unusual Blood Types\",\"category\":[\"Biology\"]},{\"title\":\"Rise and Fall of the Roman Vampire\",\"category\":[\"History\"]},{\"title\":\"Bloody Types\",\"category\":[\"Biology\"]},{\"title\":\"Health and Care of Fangs\",\"category\":[\"Self Help\"]},{\"title\":\"Magic Words & Phrases\",\"category\":[\"Spellbook\"]},{\"title\":\"Embalmers Almanac\",\"category\":[\"Biology\"]}]}");

/***/ }),

/***/ "a300":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Enderal - Forgotten Stories.esm\"],\"books\":[{\"title\":\"A Village in Turmoil\",\"category\":[]},{\"title\":\"Vyn - A Geographical Overview\",\"category\":[]},{\"title\":\"Encyclopedia Arcana - Magic, Part I\",\"category\":[]},{\"title\":\"Encyclopedia Arcana - Magic, Part II\",\"category\":[]},{\"title\":\"Encyclopedia Arcana - Magic, Part III\",\"category\":[]},{\"title\":\"Account of an Unknown Traveler, Volume 1\",\"category\":[]},{\"title\":\"The Holy Order\",\"category\":[]},{\"title\":\"The Crystal Jellyfish - Its Physique and Use in Alchemy\",\"category\":[]},{\"title\":\"The Path, Tome 12: The Star Summer Night\",\"category\":[]},{\"title\":\"Manual of Dreams and Visions\",\"category\":[]},{\"title\":\"The Disciplines of Magic - Entropy\",\"category\":[]},{\"title\":\"Myths and Legends: The Blind Miner\",\"category\":[]},{\"title\":\"The Butcher of Ark, Volume 3: First Steps\",\"category\":[]},{\"title\":\"Glimmercapdust - Use and Dangers\",\"category\":[]},{\"title\":\"The Butcher of Ark, Volume 4: Ashes\",\"category\":[]},{\"title\":\"The Butcher of Ark, Volume 5: Qalian\",\"category\":[]},{\"title\":\"The Butcher of Ark, Volume 6: The Silver Cloud\",\"category\":[]},{\"title\":\"The Butcher of Ark, Volume 7: All the Dead Souls\",\"category\":[]},{\"title\":\"The Butcher of Ark, Volume 8: Masks\",\"category\":[]},{\"title\":\"Contract of the Golden Sickle\",\"category\":[]},{\"title\":\"The Butcher of Ark, Volume 9: The Rise\",\"category\":[]},{\"title\":\"Daddy's Savoury Meat Pies\",\"category\":[]},{\"title\":\"Lethonia - Myth or Reality?\",\"category\":[]},{\"title\":\"The Path, Tome 1: The Chaos\",\"category\":[]},{\"title\":\"The Path, Tome 2: The Epiphany\",\"category\":[]},{\"title\":\"The Path, Tome 3: The Gods\",\"category\":[]},{\"title\":\"The Path, Tome 4: The Departure\",\"category\":[]},{\"title\":\"The Path, Tome 5: The Hunger Days\",\"category\":[]},{\"title\":\"The Path, Tome 6: The Lost Ones\",\"category\":[]},{\"title\":\"The Path, Tome 7: The Kraken\",\"category\":[]},{\"title\":\"The Path, Tome 8: The Arrival\",\"category\":[]},{\"title\":\"The Path, Tome 9: The Fundament\",\"category\":[]},{\"title\":\"The Path, Tome 10: The Order\",\"category\":[]},{\"title\":\"The Path, Tome 11: The Treason\",\"category\":[]},{\"title\":\"Final Words\",\"category\":[]},{\"title\":\"Myths and Legends: The Steel Warden\",\"category\":[]},{\"title\":\"Myths and Legends: The Ash Widow\",\"category\":[]},{\"title\":\"Tales of the Wanderer: The Archer from the Steppe\",\"category\":[]},{\"title\":\"Myths and Legends: The Gargantuan Lizard\",\"category\":[]},{\"title\":\"Tales of the Wanderer: The Dark Keeper\",\"category\":[]},{\"title\":\"Tales of the Wanderer: The Shadow Dancer\",\"category\":[]},{\"title\":\"Myths and Legends: Arveldhiin the Wanderer\",\"category\":[]},{\"title\":\"Tales of the Wanderer: The Seraph\",\"category\":[]},{\"title\":\"Tales of the Wanderer: The Blade Master\",\"category\":[]},{\"title\":\"The Creed\",\"category\":[]},{\"title\":\"Kadath\",\"category\":[]},{\"title\":\"The Dreamflower: An Essay\",\"category\":[]},{\"title\":\"A Token of Goodwill\",\"category\":[]},{\"title\":\"A Strange Friend\",\"category\":[]},{\"title\":\"Mother's Pain\",\"category\":[]},{\"title\":\"Conversation with a Blind Man\",\"category\":[]},{\"title\":\"Concerning the Holiness of the Order\",\"category\":[]},{\"title\":\"The Little Mouse Mitata\",\"category\":[]},{\"title\":\"Document of the Holy Order concerning the rifts in the intercontinental temporal fabric\",\"category\":[]}]}");

/***/ }),

/***/ "aa56":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"Falskaar.esm\"],\"books\":[{\"title\":\"On Sheogorath and the Mad Beggar\",\"category\":[]},{\"title\":\"Olav's Journey\",\"category\":[]},{\"title\":\"In Case I forget\",\"category\":[]},{\"title\":\"A Dark Awakening\",\"category\":[]},{\"title\":\"Dragons In Falskaar\",\"category\":[]},{\"title\":\"Amber Creek Home Decorating Guide\",\"category\":[]},{\"title\":\"The Heart Chamber\",\"category\":[]},{\"title\":\"Nordic Caves\",\"category\":[]},{\"title\":\"A Strange Sighting\",\"category\":[]},{\"title\":\"Save Yourself!\",\"category\":[]},{\"title\":\"Setup Camp\",\"category\":[]},{\"title\":\"The Same in Death\",\"category\":[]},{\"title\":\"The Power of Darkness\",\"category\":[]},{\"title\":\"Ballad of the Bard\",\"category\":[]},{\"title\":\"Secrets of Horndew Lodge\",\"category\":[]},{\"title\":\"Rite of Lord Garjeheim\",\"category\":[]},{\"title\":\"War in Falskaar\",\"category\":[]},{\"title\":\"The Wanderin' Bard\",\"category\":[]},{\"title\":\"The Mead of Shor\",\"category\":[]},{\"title\":\"The Four Holds\",\"category\":[]}]}");

/***/ }),

/***/ "ac3a":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://rwby.fandom.com/wiki/Books\"],\"books\":[{\"title\":\"Another Pun\",\"category\":[\"Story\"]},{\"title\":\"Cold Heart/Hot Love\",\"category\":[\"Story\"]},{\"title\":\"Dealing with Hyperactive Children\",\"category\":[\"Story\"]},{\"title\":\"Hidden Remnant\",\"category\":[\"Story\"]},{\"title\":\"History: Huntsmen and Huntresses\",\"category\":[\"Story\"]},{\"title\":\"How to Arm Yourself\",\"category\":[\"Story\"]},{\"title\":\"Howling at the Moon\",\"category\":[\"Story\"]},{\"title\":\"'Kink' in the Chamomille\",\"category\":[\"Story\"]},{\"title\":\"My Sweet Samurai\",\"category\":[\"Story\"]},{\"title\":\"Ninjas of Love\",\"category\":[\"Story\"],\"author\":\"Patty Berdioler\"},{\"title\":\"The Corpse Doctor\",\"category\":[\"Story\"]},{\"title\":\"The Sais of Passion\",\"category\":[\"Story\"]},{\"title\":\"Slave to the Sword\",\"category\":[\"Story\"]},{\"title\":\"The Boy Who Fell from the Sky\",\"category\":[\"Story\"]},{\"title\":\"The Man With Two Souls\",\"category\":[\"Story\"],\"author\":\"Ursula Berpdioloo\"},{\"title\":\"The Man With Two Souls II: The Man With Four Souls\",\"category\":[\"Story\"],\"author\":\"Ursula Berpdioloo\"},{\"title\":\"The Thief and the Butcher\",\"category\":[\"Story\"]},{\"title\":\"The Third Crusade\",\"category\":[\"Story\"]},{\"title\":\"The Undead\",\"category\":[\"Story\"]},{\"title\":\"The Vampire Count\",\"category\":[\"Story\"]},{\"title\":\"Violet's Garden\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "ad0e":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[],\"books\":[{\"title\":\"Edicts of the Chained Darkness\",\"category\":[]}]}");

/***/ }),

/***/ "ad61":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://en.wikipedia.org/wiki/Terry_Pratchett\"],\"books\":[{\"title\":\"The Dark Side of the Sun\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"The Colour of Magic\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"The Light Fantastic\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Equal Rites\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Mort\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Sourcery\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Wyrd Sisters\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Guards! Guards!\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Reaper Man\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Witches Abroad\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Small Gods\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Lords and Ladies\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Men at Arms\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Soul Music\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Interesting Times\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Feet of Clay\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"The Last Continent\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Carpe Jugulum\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"The Truth\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Thief of Time\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"The Last Hero\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"The Amazing Maurice and His Educated Rodents\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Night Watch\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"The Wee Free Men\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Monstrous Regiment\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"A Hat Full of Sky\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Thud!\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Wintersmith\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Unseen Academicals\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Raising Steam\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"The Shepherd's Crown\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Troll Bridge\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Theatre of Cruelty\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"Death and What Comes Next\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]},{\"title\":\"A collegiate Casting-Out of Devilish Devices\",\"author\":\"Terry Pratchett\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "ae37":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"DibellasWatch.esm\"],\"books\":[{\"title\":\"The History of Dibella's Watch\",\"category\":[]},{\"title\":\"The Lost Crusade\",\"category\":[]},{\"title\":\"Rules for Beastfolk\",\"category\":[]},{\"title\":\"Time to Free the Slaves!\",\"category\":[]},{\"title\":\"Eastwatch Vote\",\"category\":[]},{\"title\":\"Wordham Vote\",\"category\":[]},{\"title\":\"On Dibella's Wrath\",\"category\":[]},{\"title\":\"Old Scarley\",\"category\":[]},{\"title\":\"Lord Scarley's Last Words\",\"category\":[]}]}");

/***/ }),

/***/ "b0ff":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"moonpath.esp\"],\"books\":[{\"title\":\"On the Khajiit Moonpaths\",\"category\":[]}]}");

/***/ }),

/***/ "b471":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"Darkglade.esp\"],\"books\":[{\"title\":\"Choose Wisely\",\"category\":[]}]}");

/***/ }),

/***/ "b479":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"QOTW Season Four.esp\"],\"books\":[{\"title\":\"Mace Etiquette\",\"category\":[]},{\"title\":\"Souls In A Sword\",\"category\":[]},{\"title\":\"Dalus Omani Release\",\"category\":[]},{\"title\":\"The True Nature of Orcs\",\"category\":[]},{\"title\":\"Cyrodiil Mages Tournament\",\"category\":[]}]}");

/***/ }),

/***/ "b5b1":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"A Maids Tale.esp\"],\"books\":[{\"title\":\"The Maid's Tale\",\"category\":[]}]}");

/***/ }),

/***/ "b703":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://en.wikipedia.org/wiki/Mary Shelley\"],\"books\":[{\"title\":\"Frankenstein; Or, The Modern Prometheus, Vol. I\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Frankenstein; Or, The Modern Prometheus, Vol. II\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Frankenstein; Or, The Modern Prometheus, Vol. III\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Valperga: Or, the Life and Adventures of Castruccio, Prince of Lucca, Vol. I\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Valperga: Or, the Life and Adventures of Castruccio, Prince of Lucca, Vol. II\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Valperga: Or, the Life and Adventures of Castruccio, Prince of Lucca, Vol. III\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Last Man, Vol. I\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Last Man, Vol. II\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Last Man, Vol. III\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Fortunes of Perkin Warbeck, A Romance, Vol. I\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Fortunes of Perkin Warbeck, A Romance, Vol. II\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Fortunes of Perkin Warbeck, A Romance, Vol. III\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Lodore, Vol. I\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Lodore, Vol. II\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Lodore, Vol. III\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Falkner. A Novel, Vol. I\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Falkner. A Novel, VOl. II\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Falkner. A Novel, Vol. III\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Mathilda\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"A Tale of the Passions, or, the Death of Despina\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Lady de Vere\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Covenant of Chailot\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Ferdinando Eboli. A Tale\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Mourner\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Evil Eye. A Tale\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The False Rhyme\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Transformation\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Dream, A Tale\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Pole\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Invisible Girl\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Mortal Immortal\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Elder Son\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Trial of Love\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Parvenue\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Pilgrims\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Heir of Mondolfo\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Prosperine\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Midas\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Marurice; or, The Fisher's Cot\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Absence; 'Ah! he is gone—and I alone!—'\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"A Dirge; 'This morn, thy gallant bark, I love'\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"A Night Scene; 'I see thee not, my gentlest Isabel'\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Song: 'When I'm no more, this harp that rings'\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Death of Love\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"To Love in Solitude and Mystery\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"I Must Forget Thy Dark Eyes' Love-Fraught Gaze\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Ode to Ignorance; 'Hail, Ignorance! majestic queen!'\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Fame\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"How like a star you rose upon my life\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"To the Death; 'O, Come to me in dreams, my love'\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"\\\"Oh Listen While I sing to Thee,\\\" Canzonet, With Accompaniment for the Harp or Piano Forte, Composed and Inscribed to his Friend Berry King, Esqr. by Henry Hugh Pearson, Professor of Music in the University of Edinburgh\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Choice. a Poem on Shelley's Death\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"On Reading Wordsworth's Lines on Peel Castle; 'It is with me, as erst with you\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Fragment; (To Jane with the Last [Man]) 'Tribute for thee, dear solace of my life'\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The tide of Time was at my feet\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Theseus\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Cyrus\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Cupid and Psyche\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Samuel\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"The Necessity of a Belief in the Heathen Mythology\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Religion\"]},{\"title\":\"Life of Shelley\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"God of the Best the Brightest\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Alas I weep my life away\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]},{\"title\":\"Struugle no more, my Soul with the sad chains\",\"author\":\"Mary Wollstonecraft Shelley\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "baf5":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"MoonAndStar_MAS.esp\"],\"books\":[{\"title\":\"The First Question\",\"category\":[]},{\"title\":\"Honorable Writ of Execution\",\"category\":[]},{\"title\":\"The Second Question\",\"category\":[]},{\"title\":\"The Final Trial\",\"category\":[]},{\"title\":\"Ancient Dwemer Tome\",\"category\":[]},{\"title\":\"Memories of Dorana\",\"category\":[]},{\"title\":\"Bal-Ran's Proclamation\",\"category\":[]},{\"title\":\"Selyse's Proclamation\",\"category\":[]},{\"title\":\"To the Slayer of Legends\",\"category\":[]},{\"title\":\"Toren's Proclamation\",\"category\":[]},{\"title\":\"The Third Question\",\"category\":[]}]}");

/***/ }),

/***/ "be82":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://harrypotter.fandom.com/wiki/List_of_books\"],\"books\":[{\"title\":\"The Tales of Beedle the Bard\",\"author\":\"Beedle the Bard\",\"category\":[\"Story\"],\"description\":\"Beedle's stories resemble Muggle fairy tales in many respects; for instance, virtue is usually rewarded and wickedness punished. However, there is one very obvious difference. In Muggle fairy tales, magic tends to lie at the root of the hero or heroine's troubles — the wicked witch has poisoned the apple, put the princess into a hundred years' sleep or turned the prince into a hideous beast.\\r\\n\\r\\n        In The Tales of Beedle the Bard, on the other hand, we meet heroes and heroines who can perform magic themselves, and yet find it just as hard to solve their problems as the Muggle heroes do.Beedle 's stories have helped generations of wizarding parents to explain this painful fact of life to their young children: that magic causes as much trouble as it cures.\\r\\n\\r\\n            Another notable difference between these fables and their Muggle counterparts is that Beedle 's witches are much more active in seeking their fortunes than our fairy-tale heroines. Asha, Altheda, Amata and Babbitty Rabbity are all witches who take their fate into their own hands, rather than a prolonged nap or waiting for someone to return a lost shoe. The exception to this rule — the unnamed maiden of '\\r\\n        The Warlock 's Hairy Heart'—\\r\\n        acts more like a Muggle 's idea of a storybook princess, but there is no happily ever after at the end of her tale.\\r\\n\\r\\n        Most of these tales(with the exception of The Warlock 's Hairy Heart) have been rewritten by Beatrix Bloxam and compiled into her book The Toadstool Tales; which has since been banned since it had a tendency to induce nausea and vomiting in the children who read, or had to listen to, them. \\r\\nOne story by Beedle is \\\"The Tale of the Three Brothers \\\". This story was about brothers who meet Death on the road and avoid his clutches; each in turn receives a gift from him, although Death attempts to twist each boon into a bane. \"},{\"title\":\"The Toadstool Tales\",\"author\":\"Beatrix Bloxam\",\"category\":[\"Story\"],\"description\":\"The Toadstool Tales were a series of adaptations of other works, written by Beatrix Bloxam. They contained soppy, \\\"sanitised\\\" versions of other works, including The Tales of Beedle the Bard , which was Mrs Bloxam's way of purifying them so as to preserve children's innocence. Beatrix Bloxam set out to write The Toadstool Tales because of the \\\"unwholesome characters\\\" and themes found in The Tales of Beedle the Bard that she believed were damaging to children. Among these adaptations were a \\\"pure and precious\\\" reworking of \\\"The Wizard and the Hopping Pot\\\", the last paragraph of which contains nausea-inducing nonsense about \\\"Wee Willykins\\\" curing his \\\"dollies\\\" of their \\\"poorly tum-tums\\\", and then giving them sweeties, reminding them to brush their \\\"teethy-pegs\\\", and promising to help the dollies and no longer be an \\\"old grumpy-wumpkins\\\". \"},{\"title\":\"Enchanted Encounters\",\"author\":\"Fifi LaFolle\",\"category\":[\"Story\"]},{\"title\":\"Hélas, Je me suis Transfiguré Les Pieds\",\"translatedTitle\":\"Alas, I have Transfigured My Feet\",\"category\":[\"Play\"],\"author\":\"Malecrit\"},{\"title\":\"Sonnets of a Sorcerer\",\"category\":[\"Poem\"],\"description\":\"Sonnets of a Sorcerer was a book which cursed anyone who read it. They would speak in limericks for the rest of their lives.\"},{\"title\":\"New Theory of Numerology\",\"author\":\"Lukas Karuzos\",\"category\":[\"Scholarly\"]},{\"title\":\"Numerology and Grammatica\",\"author\":\"L. Wakefield/M. Carneiro\",\"category\":[\"Scholarly\"]},{\"title\":\"Aquatic Wonders of Yorkshire: A Wizard's Field Guide\",\"category\":[\"Scholarly\",\"Biology\"],\"description\":\"It includes information on the Grindylow, including its development from the Grypt stage, details on its anatomy (such as the 'lure', nictating membrane, and grip), and remarks on the creature's evolutionary history (such as is regional physical variations, and its rudimentary lung).\"},{\"title\":\"Bestiarium Magicum\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"A Children's Anthology of Monsters\",\"author\":\"Newton Scamander\",\"category\":[\"Myth\",\"Scholarly\",\"Biology\"]},{\"title\":\"Break with a Banshee\",\"author\":\"Gilderoy Lockhart\",\"category\":[\"Story\",\"History\"]},{\"title\":\"Dreadful Denizens of the Deep\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"The Enclopedia of Bat Eyes, Vol. I\",\"category\":[\"Scholarly\",\"Alchemy\"]},{\"title\":\"The Enclopedia of Bat Eyes, Vol. II\",\"category\":[\"Scholarly\",\"Alchemy\"]},{\"title\":\"The Enclopedia of Bat Eyes, Vol. III\",\"category\":[\"Scholarly\",\"Alchemy\"]},{\"title\":\"The Enclopedia of Bat Eyes, Vol. IV\",\"category\":[\"Scholarly\",\"Alchemy\"]},{\"title\":\"The Enclopedia of Bat Eyes, Vol. V\",\"category\":[\"Scholarly\",\"Alchemy\"]},{\"title\":\"The Enclopedia of Bat Eyes, Vol. VI\",\"category\":[\"Scholarly\",\"Alchemy\"]},{\"title\":\"Fantastic Beasts and Where to Find Them\",\"author\":\"Newt Scamander\",\"category\":[\"Scholarly\",\"Myth\",\"Biology\"],\"description\":\"'If Newt Scamander hasn’t found it, it’s not worth finding.'\\n                        —Description\\n\\n      Introduction\\n      About This Book\\n      What Is a Beast ?\\n        A Brief History of Muggle Awareness of Fantastic Beasts\\n      Magical Beasts in Hiding\\n      Safe Habitats\\n      Controls on Selling and Breeding\\n      Disillusionment Charms\\n      Memory Charms\\n      The Office of Misinformation\\n      Why Magizoology Matters\\n      Ministry of Magic Classifications\\n      An A - Z of Fantastic Beasts \"},{\"title\":\"Gadding with Ghouls\",\"author\":\"Gilderoy Lockhart\",\"category\":[\"Story\",\"History\"]},{\"title\":\"Hoax and Dreams\",\"author\":\"Laura Thorn\",\"category\":[\"Story\",\"Myth\",\"Biology\"]},{\"title\":\"Gadding with Ghouls\",\"author\":\"Gilderoy Lockhart\",\"category\":[\"Story\",\"History\"]},{\"title\":\"Holidays with Hags\",\"author\":\"Gilderoy Lockhart\",\"category\":[\"Story\",\"History\"]},{\"title\":\"House-Elves & Self-Hatred, Vol. I\",\"category\":[\"Scholarly\"]},{\"title\":\"House-Elves & Self-Hatred, Vol. II\",\"category\":[\"Scholarly\"]},{\"title\":\"House-Elves & Self-Hatred, Vol. III\",\"category\":[\"Scholarly\"]},{\"title\":\"House-Elves & Self-Hatred, Vol. IV\",\"category\":[\"Scholarly\"]},{\"title\":\"House-Elves & Self-Hatred, Vol. V\",\"category\":[\"Scholarly\"]},{\"title\":\"House-Elves & Self-Hatred, Vol. VI\",\"category\":[\"Scholarly\"]},{\"title\":\"House-Elves & Self-Hatred, Vol. VII\",\"category\":[\"Scholarly\"]},{\"title\":\"House-Elves & Self-Hatred, Vol. VIII\",\"category\":[\"Scholarly\"]},{\"title\":\"How to Tame Tigers\",\"author\":\"Vindictus Viridian\",\"category\":[\"Self Help\"]},{\"title\":\"Little People, Big Plans\",\"author\":\"Ragnok the Pigeon-Toed\",\"category\":[]},{\"title\":\"Lizard's Claws From Africa\",\"category\":[\"Scholarly\",\"Alchemy\"]},{\"title\":\"Magical Creatures\",\"category\":[\"Scholarly\",\"Myth\",\"Biology\"]},{\"title\":\"Marauding with Monsters\",\"author\":\"Gilderoy Lockhart\",\"category\":[\"Scholarly\",\"Myth\",\"Biology\",\"Story\",\"History\"],\"description\":\"Chapter I - Animal, Vegetable, Horklump or Gnome?\\n\\nA Horklump can be overcome by casting Flipendo to retract its spikes and then pulling it out of the ground. During my myriad travels across this magical globe of ours, I have beheld many strange sights and encountered a veritable bestiary of peculiar and exotic creatures. The vast majority of creatures I have had the misfortune to encounter have been of a decidedly threatening variety – not so the Horklump, which is similar to a large, bristly toadstool and is actually an animal rather than a plant. I well remember the time when, during a particularly satisfying sojourn with some fans of mine in the wilds of Essex, I offered to clear a pathway in their quaint, suburban yard (I quail from terming this square of scrub and turf a 'garden'), which had been ubiquitously blocked by several Horklumps. The usual technique for Horklumps is to hit them with a Knockback Jinx then, taking a good firm hold on them, twist and yank them from the ground. Needless to say, when I had cleared the pathway of every last Horklump, my fans were more than grateful and rewarded me with several bottles of their home-brewed Celery and Beetroot Wine – which, of course, I promptly declined.\\n\\nGnomes are rather more threatening than the inert and somewhat tedious Horklump. These little pests are endemic to even the most well-tended garden – like my own, for example, which stretches to eight, well-manicured acres. A rather common way to deal with garden gnomes is to grab them as they pop up from their burrows, and spin them in a circle. After doing so, keep spinning them (make sure that they are well away from your hair) above your head and then launch them as far as possible. However, I have found that the most efficient way of dealing with this potato-headed garden blight is to Flipendo the little blighter, grab him by the legs and fling him over a low wall or hedgerow – preferably not into your neighbour’s smaller and less cared for garden! One must be careful of the gnome's tiny, yet razor-sharp teeth, but a well-targeted Flipendo Knockback Jinx will deal with them most assuredly.\\nChapter II - Of Impish Idiosyncrasies\\n\\nTo dispose of an Imp, Flipendo it then pick it up and drop in the nearest cage, hole or bottomless pit. I well remember the time when, on a particularly dangerous trek along the banks of the River Clyde in Glasgow, Scotland, in search of the fabled 'Weetimorousbeastie', I chanced upon a snickering cluster of Imps. Not to be confused with the pixie, these small, spiteful creatures are mischievous in the extreme and often waylay the unwary traveller, pushing and tripping them in a most unpleasant manner. As a well-seasoned traveller across this magnificent globe of ours, I, of course, am never 'unwary' and immediately upon spotting the snickering gang, I whipped out my trusty wand and cast a particularly well-aimed Flipendo Knockback Jinx at their cavorting leader. Before his gibbering cohorts could react, I then proceeded to grab the upended Imp by its slimy ankles (being careful not to besmirch my lime green robes) and threw it into the Clyde where it floundered most satisfyingly before dragging itself on to the opposite bank and fleeing in the direction of the nearby sewage works. Thus were the Imps defeated – the remaining band of jabbering pests running back to the filthy hole from whence they came.\\nChapter III - A Frenzy of Furious Fire Crabs\\n\\nSubdue a Fire Crab by casting Flipendo then casting Incendio. I well recall the time when, on a peculiarly perspicacious journey into the heart of the Fijian rainforest, while engaged in a legendary odyssey to rescue the Giant Fire Crab from extinction at the hands of unscrupulous wizard poachers, I had occasion to rest a while in the shade of a banyan tree. While performing certain urgent ablutions, I was attacked by a veritable horde of furious fire crabs – these dastardly crustaceans obviously ignorant of the fact that I was endeavouring to save one of their kind from going the way of the dodo. Gracefully, I managed to dance away from the fearsome blasts of flame roaring from their posteriors and immediately whipped out my trusty wand. With several deft and delightful casts of the Knockback Jinx, the fire crabs were all flipped on to their backs, their pathetic legs waving uselessly in the foetid Fijian air. Leaving their exposed bellies to the burning rays of the searing Fijian sun, I went jauntily on my way – with an avowed intent to join the unscrupulous wizard poachers and assist them in wiping out every last trace of these cruel and savage crustaceans.\\nChapter IV - Dire Dog Spirits\\n\\nGytrashes are only hurt by the light directed from a Lumos Spell. The black, vampire-infested forest of central Romania is not so bleak and forbidding a place than the twisted heart of the New Forest in Hampshire, England. It was here, several winters ago that I chanced upon two of the most dreadful creatures known to wizards and witches. I well remember the hour, late in the day, as I wandered gaily through the blighted woodland in search of the infamous Wild Ponies of that area. I entered a leafy glade, only to be confronted by a pair of prowling Gytrashes. These large dog-like spirits barred my way and so, whipping out my trusty wand, I cast Lumos to illuminate its tip, whereupon the Gytrashes retreated from the light and I was free to pass through the forest unmolested. \"},{\"title\":\"Merpeople: A Comprehensive Guide to Their Language and Customs\",\"author\":\"Dylan Marwood\",\"category\":[\"Scholarly\",\"Biology\"],\"description\":\"Players can learn Aquan (Primordial dialect) by studying this book.\"},{\"title\":\"Most Macabre Monstrosities\",\"description\":\"Of the many fearsome beasts and monsters that roam our land, there is none more curious or more deadly than the Basilisk, known also as the King of Serpents. This snake, which may reach gigantic size and live many hundreds of years, is born from a chicken's egg, hatched beneath a toad. Its methods of killing are most wondrous, for aside from its deadly and venomous fangs, the Basilisk has a murderous stare, and all who are fixed with the beam of its eye shall suffer instant death. Spiders flee before the Basilisk, for it is their mortal enemy, and the Basilisk flees only from the crowing of the rooster, which is fatal to it.\",\"category\":[\"Scholarly\",\"Myth\",\"Biology\"]},{\"title\":\"Travels with Trolls\",\"author\":\"Gilderoy Lockhart\",\"category\":[\"Story\",\"History\"]},{\"title\":\"The Monster Book of Monsters\",\"category\":[\"Scholarly\",\"Myth\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. I\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. II\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. III\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. IV\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. V\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. VI\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. VII\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. VIII\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. IX\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. X\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. XI\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Owl Breeds, Vol. XII\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Newts of Bognor\",\"author\":\"Walter Aragon\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"You & Your Owl\",\"category\":[\"Biology\"]},{\"title\":\"Year with the Yeti\",\"author\":\"Gilderoy Lockhart\",\"category\":[\"Story\",\"History\"]},{\"title\":\"Which Owl?, Vol. I\",\"author\":\"Miranda Goshawk\",\"category\":[]},{\"title\":\"Which Owl?, Vol. II\",\"author\":\"Miranda Goshawk\",\"category\":[]},{\"title\":\"Which Owl?, Vol. III\",\"author\":\"Miranda Goshawk\",\"category\":[]},{\"title\":\"Why I Didn't Die When the Augurey Cried\",\"author\":\"Gulliver Pokeby\",\"category\":[\"Story\"]},{\"title\":\"Dragon Breeding for Pleasure and Profit\",\"category\":[\"Biology\"],\"description\":\"'Tried and tested tips to help you breed dragons, including the old-time favourite of brandy and chicken blood every half hour for newly-hatched chicks.'\\n     —Description \\n\\nFirst sparks, usually accompanied by thick grey smoke, appear at around six months. However, the ability to fly is normally developed later, at around twelve months and your dragon will not be fully mature until he is two years old. Your dragon requires a lot of care during these first few months.\"},{\"title\":\"Dragon Species of Great Britain and Ireland\",\"category\":[\"Scholarly\",\"Biology\"],\"description\":\"This spectacular book lists all of the wild dragons living in Britain and Ireland today, from the Common Welsh Green to Hebridean Blacks.\"},{\"title\":\"From Egg to Inferno: a Dragon-Keeper's Guide\",\"category\":[\"Biology\"],\"description\":\"This book contains everything you need to know about breeding dragons, but never taming them, that is far too dangerous.\"},{\"title\":\"From Egg to Inferno: a Dragon-Keeper's Guide\",\"category\":[\"Biology\"]},{\"title\":\"The Handbook of Hippogriff Psychology\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Fowl or Foul? A Study of Hippogriff Brutality\",\"category\":[\"Scholarly\",\"Biology\"]},{\"title\":\"Blood Brothers: My Life Amongst the Vampires\",\"author\":\"Eldred Worple\",\"category\":[\"Scholarly\",\"Story\"]},{\"title\":\"A Vampire's Monologue\",\"author\":\"Amarillo Lestoat\",\"category\":[\"Scholarly\",\"Story\"]},{\"title\":\"Voyages with Vampires\",\"author\":\"Gilderoy Lockhart\",\"category\":[\"Story\",\"History\"]},{\"title\":\"Hairy Snout, Human Heart\",\"author\":\"Anonymous\",\"category\":[\"Story\"]},{\"title\":\"Hunting Werewolves\",\"category\":[]},{\"title\":\"Lupine Lawlessness: Why Lycanthropes Don't Deserve to Live\",\"author\":\"Professor Emerett Picardy\",\"category\":[\"\"]},{\"title\":\"Wanderings with Werewolves\",\"author\":\"Gilderoy Lockhart\",\"description\":\"Learn about Gilderoy Lockhart’s experiences of werewolves, and his favourite birthday gift.\",\"category\":[\"Story\",\"History\"]},{\"title\":\"Encyclopedia of Toadstools\",\"description\":\"Everything you ever wanted to know about toadstools.\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"]},{\"title\":\"Flesh-Eating Trees of the World\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"]},{\"title\":\"Goshawk's Guide to Herbology\",\"author\":\"Miranda Goshawk\",\"description\":\"If you're interested in plants, then you're better off with Goshawk's Guide To Herbology. Did you know there's a wizard in Nepal who's growing gravity-resistant trees?\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"]},{\"title\":\"Ingredient Encyclopedia\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"]},{\"title\":\"Magical Water Plants of the Highland Lochs\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"],\"author\":\"Hadrian Whittle\"},{\"title\":\"Magical Mediterranean Water-Plants and Their Properties\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"],\"author\":\"Hadrian Whittle\"},{\"title\":\"One Thousand Magical Herbs and Fungi\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"],\"author\":\"Hogwarts Headmistress Phyllida Spore\",\"description\":\"A comprehensive botanical A-Z of magical herbs and fungi for easy plant identification and application.\"},{\"title\":\"Shrubs & Trees for the Garden\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"],\"author\":\"A. Osborn\"},{\"title\":\"Sub-Aquatic Botanical Mysteries\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"],\"author\":\"Quiac Marinus\"},{\"title\":\"Wanderings of a Tree in the Alps, Vol. I\",\"category\":[\"Story\"]},{\"title\":\"Wanderings of a Tree in the Alps, Vol. II\",\"category\":[\"Story\"]},{\"title\":\"Wanderings of a Tree in the Alps, Vol. III\",\"category\":[\"Story\"]},{\"title\":\"Wanderings of a Tree in the Alps, Vol. IV\",\"category\":[\"Story\"]},{\"title\":\"Wanderings of a Tree in the Alps, Vol. V\",\"category\":[\"Story\"]},{\"title\":\"Winogrand's Wondrous Water Plants\",\"category\":[\"Scholarly\",\"Biology\",\"Alchemy\"],\"author\":\"Selina Sapworthy\"},{\"title\":\"The Book of Charms & Spells\",\"category\":[\"Scholarly\",\"Spellbook\"]},{\"title\":\"Achievements in Charming\",\"category\":[\"Scholarly\"]},{\"title\":\"Charms of Defence and Deterrence\",\"category\":[\"Scholarly\"],\"author\":\"Professor Catullus Spangle\"},{\"title\":\"Cheering Charms\",\"category\":[\"Scholarly\",\"Spellbook\"]},{\"title\":\"Extreme Incantations\",\"category\":[\"Scholarly\",\"Spellbook\"],\"author\":\"Professor Violeta Stitch\"},{\"title\":\"Quintessence: A Quest\",\"category\":[\"Scholarly\"]},{\"title\":\"The Standard Book of Spells, Grade 1\",\"category\":[\"Scholarly\",\"Spellbook\"],\"author\":\"Miranda Goshawk\"},{\"title\":\"The Standard Book of Spells, Grade 2\",\"category\":[\"Scholarly\",\"Spellbook\"],\"author\":\"Miranda Goshawk\"},{\"title\":\"The Standard Book of Spells, Grade 3\",\"category\":[\"Scholarly\",\"Spellbook\"],\"author\":\"Miranda Goshawk\"},{\"title\":\"The Standard Book of Spells, Grade 4\",\"category\":[\"Scholarly\",\"Spellbook\"],\"author\":\"Miranda Goshawk\"},{\"title\":\"The Standard Book of Spells, Grade 5\",\"category\":[\"Scholarly\",\"Spellbook\"],\"author\":\"Miranda Goshawk\"},{\"title\":\"The Standard Book of Spells, Grade 6\",\"category\":[\"Scholarly\",\"Spellbook\"],\"author\":\"Miranda Goshawk\"},{\"title\":\"The Standard Book of Spells, Grade 7\",\"category\":[\"Scholarly\",\"Spellbook\"],\"author\":\"Miranda Goshawk\"},{\"title\":\"Chadwick's Charms, Vol. 1\",\"category\":[\"Scholarly\"],\"author\":\"Chadwick Boot\"},{\"title\":\"Chadwick's Charms, Vol. 2\",\"category\":[\"Scholarly\"],\"author\":\"Chadwick Boot\"},{\"title\":\"Chadwick's Charms, Vol. 3\",\"category\":[\"Scholarly\"],\"author\":\"Chadwick Boot\"},{\"title\":\"Chadwick's Charms, Vol. 4\",\"category\":[\"Scholarly\"],\"author\":\"Chadwick Boot\"},{\"title\":\"Chadwick's Charms, Vol. 5\",\"category\":[\"Scholarly\"],\"author\":\"Chadwick Boot\"},{\"title\":\"Chadwick's Charms, Vol. 6\",\"category\":[\"Scholarly\"],\"author\":\"Chadwick Boot\"},{\"title\":\"Chadwick's Charms, Vol. 7\",\"category\":[\"Scholarly\"],\"author\":\"Chadwick Boot\"},{\"title\":\"Abracadabra: An A-Z of Spooky Spells\",\"category\":[\"Scholarly\"]},{\"title\":\"Basic Hexes for the Busy and Vexed\",\"category\":[\"Scholarly\"]},{\"title\":\"A Compendium of Common Curses and Their Counter-Actions\",\"category\":[\"Scholarly\"]},{\"title\":\"Confronting the Faceless\",\"category\":[\"Scholarly\"]},{\"title\":\"Curses and Counter-Curses\",\"category\":[\"Scholarly\"],\"author\":\"Professor Vindictus Viridian\"},{\"title\":\"Dark Arts Defence – Basics for Beginners\",\"category\":[\"Scholarly\"]},{\"title\":\"The Dark Arts Outsmarted\",\"category\":[\"Scholarly\"]},{\"title\":\"The Dark Forces: A Guide to Self-Protection\",\"category\":[\"Scholarly\"],\"author\":\"Professor Quentin Trimble\"},{\"title\":\"Defensive Magical Theory\",\"category\":[\"Scholarly\"],\"author\":\"Wilbert Slinkhard\"},{\"title\":\"The Essential Defence Against the Dark Arts\",\"category\":[\"Scholarly\"],\"author\":\"Arsenius Jigger\"},{\"title\":\"Guide to Advanced Occlumency\",\"category\":[\"Scholarly\"],\"author\":\"Maxwell Barnett\"},{\"title\":\"Jinxes for the Jinxed\",\"category\":[\"Scholarly\",\"Spellbook\"]},{\"title\":\"Practical Defence Against the Dark Arts\",\"category\":[\"Scholarly\"]},{\"title\":\"Practical Defensive Magic and Its Use Against the Dark Arts\",\"category\":[\"Scholarly\"]},{\"title\":\"Self-Defensive Spellwork\",\"category\":[\"Scholarly\"]},{\"title\":\"Counter-Curse Handbook\",\"category\":[\"Scholarly\"]},{\"title\":\"Protection Charm Your Mind: A Practical Guide to Counter Legilimensy\",\"category\":[\"Scholarly\"],\"author\":\"Franciscus Fieldwake\"},{\"title\":\"Magick Moste Evile\",\"category\":[\"Scholarly\"],\"author\":\"Godelot\"},{\"title\":\"Secrets of the Darkest Art\",\"category\":[\"Scholarly\",\"Spellbook\"],\"description\":\"Secrets of the Darkest Art is a tome, possibly of medieval origin, that discusses Dark Arts. It is the only known source of written instructions on the creation and destruction of a Horcrux. It is a large volume, bound in faded black leather.\"},{\"title\":\"A Beginner's Guide to Transfiguration\",\"category\":[\"Scholarly\"],\"author\":\"Emeric Switch\"},{\"title\":\"A Guide to Advanced Transfiguration\",\"category\":[\"Scholarly\"]},{\"title\":\"Intermediate Transfiguration\",\"category\":[\"Scholarly\"]},{\"title\":\"Theories of Transubstantial Transfiguration\",\"category\":[\"Scholarly\"]},{\"title\":\"Transformation Through the Ages\",\"category\":[\"Scholarly\",\"History\"]},{\"title\":\"Madcap Magic for Wacky Warlocks\",\"category\":[]},{\"title\":\"Saucy Tricks for Tricky Sorts\",\"category\":[]},{\"title\":\"Easy Spells to Fool Muggles\",\"author\":\"Luna Caruso\",\"category\":[\"Scholarly\"]},{\"title\":\"Jiggery Pokery and Hocus Pocus\",\"author\":\"Brian Gagwilde\",\"category\":[\"Scholarly\"]},{\"title\":\"My Favourite Spells\",\"author\":\"Name\",\"category\":[]},{\"title\":\"Alchemy, Ancient Art and Science\",\"author\":\"Argo Pyrites\",\"category\":[\"Scholarly\"]},{\"title\":\"Alchemical duodecimo\",\"category\":[\"Scholarly\"]},{\"title\":\"Advanced Potion-Making\",\"author\":\"Libatius Borage\",\"category\":[\"Scholarly\"]},{\"title\":\"Asiatic Anti-Venoms\",\"author\":\"Libatius Borage\",\"category\":[\"Scholarly\"]},{\"title\":\"Book of Potions\",\"author\":\"Zygmunt Budge\",\"category\":[\"Scholarly\"],\"description\":\"This potion book will teach you the composition of particularly potent and complex potions.\"},{\"title\":\"A Collection of Above Three Hundred Receipts in Cookery, Physick, and Surgery\",\"category\":[]},{\"title\":\"Have Yourself a Fiesta in a Bottle!\",\"author\":\"Libatius Borage\",\"category\":[\"Scholarly\"]},{\"title\":\"Magical Drafts and Potions\",\"author\":\"Arsenius Jigger\",\"category\":[\"Scholarly\"]},{\"title\":\"Moste Potente Potions\",\"author\":\"Phineas Bourne\",\"category\":[\"Scholarly\"]},{\"title\":\"Potion Opuscule\",\"author\":\"Arsenius Jigger\",\"category\":[\"Scholarly\"]},{\"title\":\"Cyfaddasrwydd y Drefn o Gadwedigaeth trwy Ffydd\",\"translatedTitle\":\"Compatibility of the Order of Preservation through Faith\",\"category\":[\"Religious\"]},{\"title\":\"Learned Comments of Wisdom\",\"category\":[\"Philosophy\"]},{\"title\":\"Charm Your Own Cheese\",\"author\":\"Gerda Curd\",\"category\":[\"Cookbook\"]},{\"title\":\"Enchantment in Baking\",\"category\":[\"Cookbook\"]},{\"title\":\"Gilderoy Lockhart's Guide to Household Pests\",\"author\":\"Gilderoy Lockhart\",\"category\":[]},{\"title\":\"One Minute Feasts - It's Magic!\",\"category\":[\"Cookbook\"]},{\"title\":\"Practical Household Magic\",\"category\":[]},{\"title\":\"Broken Balls: When Fortunes Turn Foul\",\"category\":[]},{\"title\":\"Death Omens: What to Do When You Know the Worst is Coming\",\"category\":[]},{\"title\":\"The Dream Oracle\",\"author\":\"Inigo Imago\",\"category\":[]},{\"title\":\"Omens, Oracles & the Goat\",\"author\":\"Bathilda Bagshot\",\"category\":[]},{\"title\":\"The Oracle of Palombo\",\"author\":\"Bathilda Bagshot\",\"category\":[]},{\"title\":\"Predicting the Unpredictable: Insulate Yourself Against Shocks\",\"category\":[]},{\"title\":\"The Predictions of Tycho Dodonus\",\"author\":\"Tycho Dodonus\",\"category\":[]},{\"title\":\"Unfogging the Future\",\"author\":\"Cassandra Vablatsky\",\"category\":[]},{\"title\":\"Xylomancy\",\"author\":\"Selina Sapworthy\",\"category\":[]},{\"title\":\"Preferred Preface for Perfect Prefects\",\"category\":[]},{\"title\":\"Common Magical Ailments and Afflictions\",\"category\":[]},{\"title\":\"The Healer's Helpmate\",\"author\":\"H. Pollingtonious (compiler)\",\"category\":[]},{\"title\":\"Healing at Home with Herbs\",\"author\":\"Phyllida Spore\",\"category\":[]},{\"title\":\"Armando Dippet: Master or Moron?\",\"author\":\"Rita Skeeter\",\"category\":[]},{\"title\":\"He Flew Like a Madman\",\"author\":\"Kennilworthy Whisp\",\"category\":[]},{\"title\":\"Magical Me\",\"author\":\"Gilderoy Lockhart\",\"category\":[]},{\"title\":\"Snape: Scoundrel or Saint?\",\"author\":\"Rita Skeeter\",\"category\":[]},{\"title\":\"An Anthology of Eighteenth Century Charms\",\"category\":[]},{\"title\":\"A Guide to Medieval Sorcery\",\"category\":[]},{\"title\":\"Olde and Forgotten Bewitchments and Charmes\",\"author\":\"E. Limus\",\"category\":[]},{\"title\":\"A History of Magic\",\"author\":\"Bathilda Bagshot\",\"category\":[\"History\"]},{\"title\":\"The Decline of Pagan Magic\",\"author\":\"Bathilda Bagshot\",\"category\":[\"History\"]},{\"title\":\"Famous Fire-Eaters\",\"category\":[]},{\"title\":\"Fifteenth-Century Fiends\",\"category\":[]},{\"title\":\"Nature's Nobility: A Wizarding Genealogy\",\"category\":[]},{\"title\":\"Notable Magical Names of Our Time\",\"category\":[]},{\"title\":\"The Rise and Fall of the Dark Arts\",\"category\":[\"History\"]},{\"title\":\"Big Foot's Last Stand\",\"author\":\"Ortiz O'Flaherty\",\"category\":[]},{\"title\":\"Sites of Historical Sorcery\",\"category\":[\"History\"]},{\"title\":\"Important Modern Magical Discoveries\",\"category\":[\"History\"]},{\"title\":\"Modern Magical History\",\"category\":[\"History\"]},{\"title\":\"A Study of Recent Developments in Wizardry\",\"category\":[\"History\"]},{\"title\":\"Living With Legilimens: Choose Your Minds Wisely\",\"author\":\"The Society of Legilimens\",\"category\":[\"Scholarly\"]},{\"title\":\"Protection Charm Your Mind: A Practical Guide to Counter Legilimensy\",\"author\":\"Franciscus Fieldwake\",\"category\":[\"Scholarly\"]},{\"title\":\"Powers You Never Knew You Had and What To Do With Them Now You've Wised Up\",\"category\":[]},{\"title\":\"Twelve Fail-Safe Ways to Charm Witches\",\"category\":[]},{\"title\":\"Weird Wizarding Dilemmas and Their Solutions\",\"category\":[]},{\"title\":\"Where There's a Wand, There's a Way\",\"category\":[]},{\"title\":\"Advanced Rune Translation\",\"category\":[\"Scholarly\"],\"author\":\"Yuri Blishen\"},{\"title\":\"Ancient Runes Made Easy\",\"category\":[\"Scholarly\"],\"author\":\"Laurenzoo\"},{\"title\":\"Magical Hieroglyphs and Logograms\",\"category\":[\"Scholarly\"]},{\"title\":\"Rune Dictionary\",\"category\":[\"Scholarly\"]},{\"title\":\"Spellman's Syllabary\",\"author\":\" Rosana Amorim\",\"category\":[\"Scholarly\"]},{\"title\":\"Ars moriendi\",\"translatedTitle\":\"The Art of Dying\",\"category\":[]},{\"title\":\"First Love, First Loss\",\"author\":\"Amorette Deneuve\",\"category\":[\"Story\"]},{\"title\":\"The Flap of the Cape\",\"author\":\"Abigail R. Cankus\",\"category\":[]},{\"title\":\"Skrifter af Knos\",\"translatedTitle\":\"Writings of Knos\",\"category\":[]},{\"title\":\"A Study into the Possibility of Reversing the Actual and Metaphysical Effects of Natural Death, with Particular Regard to the Reintegration of Essence and Matter\",\"author\":\"Bertrand de Pensées-Profondes\",\"category\":[\"Scholarly\"]},{\"title\":\"Who Am I?\",\"author\":\"Gilderoy Lockhart\",\"category\":[]},{\"title\":\"Ancient Law\",\"category\":[\"Scholarly\"]},{\"title\":\"The Dark Arts: A Legal Companion\",\"category\":[\"Scholarly\"]},{\"title\":\"Extraordinary Trials in History\",\"category\":[\"Scholarly\"]},{\"title\":\"Guidelines for the Treatment of Non-Wizard Part-Humans\",\"category\":[]},{\"title\":\"Law & Literature\",\"category\":[]},{\"title\":\"Legal Loopholes & Leprechauns\",\"category\":[]},{\"title\":\"Legal Rules for Roving Sprites\",\"category\":[]},{\"title\":\"Legal Guideline sfor the Manufacture of Magical Apparatus\",\"category\":[]},{\"title\":\"Legislative Guide to the Proper Use of Magic\",\"category\":[]},{\"title\":\"Magical Misdemeanours and the Modern Law\",\"category\":[]},{\"title\":\"Magical Moral Perspective\",\"category\":[]},{\"title\":\"Unforgivable Curses and Their Legal Implications, Vol. 1\",\"category\":[]},{\"title\":\"Unforgivable Curses and Their Legal Implications, Vol. 2\",\"category\":[]},{\"title\":\"Unforgivable Curses and Their Legal Implications, Vol. 3\",\"category\":[]},{\"title\":\"Handbook of Do-It-Yourself Broomcare\",\"category\":[\"Self Help\"]},{\"title\":\"A Fully Illustrated History of the Flying Carpet\",\"category\":[\"History\"]}]}");

/***/ }),

/***/ "c065":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"The Underking.esp\"],\"books\":[{\"title\":\"Codex Of The Underking Volume 3\",\"category\":[]},{\"title\":\"Codex Of The Underking Volume 2\",\"category\":[]},{\"title\":\"The Mantellan Crux\",\"category\":[]},{\"title\":\"Codex Of The Underking Volume 1\",\"category\":[]}]}");

/***/ }),

/***/ "c693":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"RodryksBooks.esp\"],\"books\":[{\"title\":\"Planeswalker 6: Tranquillity\",\"category\":[]},{\"title\":\"Planeswalker 7: The Circle of Sixteen\",\"category\":[]},{\"title\":\"Planeswalker 8: A Conspiracy of Princes\",\"category\":[]},{\"title\":\"Planeswalker 9: The Lord in the Tower\",\"category\":[]},{\"title\":\"Permutations of Man\",\"category\":[]},{\"title\":\"Undoing the Dawn\",\"category\":[]},{\"title\":\"Planeswalker 1: Experimentation\",\"category\":[]},{\"title\":\"Planeswalker 2: Sorrow & Summoning\",\"category\":[]},{\"title\":\"Planeswalker 3: The Doors of Oblivion\",\"category\":[]},{\"title\":\"Planeswalker 4: Becoming Oblivion\",\"category\":[]},{\"title\":\"Planeswalker 5: The Reachman's Roads\",\"category\":[]}]}");

/***/ }),

/***/ "c713":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"The Brotherhood of Old.esp\"],\"books\":[{\"title\":\"Handbill\",\"category\":[]},{\"title\":\"The Five Tenets\",\"category\":[]},{\"title\":\"Arquen's First Clue\",\"category\":[]},{\"title\":\"Arquen's Second Clue\",\"category\":[]},{\"title\":\"A Proposition\",\"category\":[]},{\"title\":\"Writ of Assassination\",\"category\":[]},{\"title\":\"To my beloved...\",\"category\":[]},{\"title\":\"A Tip\",\"category\":[]}]}");

/***/ }),

/***/ "cd49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37a8d8d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=d773ddbe&
var Appvue_type_template_id_d773ddbe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('img',{attrs:{"alt":"Vue logo","src":__webpack_require__("cf05")}}),_c('BookViewer')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=d773ddbe&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 5 modules
var createSuper = __webpack_require__("2caf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js + 1 modules
var vue_property_decorator = __webpack_require__("60a3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37a8d8d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BookViewer.vue?vue&type=template&id=b5cfe0f4&scoped=true&
var BookViewervue_type_template_id_b5cfe0f4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('ul',{staticClass:"col",attrs:{"id":"demo"}},[_c('TreeItem',{staticClass:"item",attrs:{"isOpenProp":true}})],1),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.outputText),expression:"outputText"}],staticClass:"col",domProps:{"value":(_vm.outputText)},on:{"input":function($event){if($event.target.composing){ return; }_vm.outputText=$event.target.value}}})]),_c('button',{on:{"click":_vm.generateBooks}},[_vm._v("Generate Random Books")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.count),expression:"count"}],domProps:{"value":(_vm.count)},on:{"input":function($event){if($event.target.composing){ return; }_vm.count=$event.target.value}}})])}
var BookViewervue_type_template_id_b5cfe0f4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BookViewer.vue?vue&type=template&id=b5cfe0f4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__("0481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat.js
var es_array_unscopables_flat = __webpack_require__("4069");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37a8d8d0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TreeItem.vue?vue&type=template&id=4dfc0402&scoped=true&
var TreeItemvue_type_template_id_4dfc0402_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('div',{class:{bold: _vm.isFolder}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.item.selected),expression:"item.selected"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.item.selected)?_vm._i(_vm.item.selected,null)>-1:(_vm.item.selected)},on:{"click":_vm.toggleRadio,"change":function($event){var $$a=_vm.item.selected,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.item, "selected", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.item, "selected", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.item, "selected", $$c)}}}}),_c('span',{on:{"click":_vm.toggleOpen}},[_vm._v(_vm._s(_vm.name))]),(_vm.isFolder)?_c('span',{on:{"click":_vm.toggleOpen}},[_vm._v("["+_vm._s(_vm.isOpen ? '-' : '+')+"]")]):_vm._e()]),(_vm.isFolder)?_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpen),expression:"isOpen"}]},_vm._l((_vm.childPaths),function(chPath,index){return _c('TreeItem',{key:index,ref:"childItems",refInFor:true,staticClass:"item",attrs:{"path":chPath}})}),1):_vm._e()])}
var TreeItemvue_type_template_id_4dfc0402_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TreeItem.vue?vue&type=template&id=4dfc0402&scoped=true&

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// CONCATENATED MODULE: ./src/book.ts





var book_Book = /*#__PURE__*/function () {
  function Book($title, $category, $translatedTitle, $language, $sources, $description, $author, $selected) {
    Object(classCallCheck["a" /* default */])(this, Book);

    this.selected = true;
    this.title = $title;
    if ($translatedTitle != undefined) this.translatedTitle = $translatedTitle;
    if ($language != undefined) this.language = $language;
    this.category = $category;
    if ($sources != undefined) this.sources = $sources;
    if ($description != undefined) this.description = $description;
    if ($author != undefined) this.author = $author;
    if ($selected != undefined) this.selected = $selected;
  }

  Object(createClass["a" /* default */])(Book, [{
    key: "selectChildren",
    value: function selectChildren(select) {
      this.selected = select;
    }
  }]);

  return Book;
}();


// CONCATENATED MODULE: ./src/bookgroup.ts






var bookgroup_BookGroup = /*#__PURE__*/function () {
  function BookGroup(path, children) {
    Object(classCallCheck["a" /* default */])(this, BookGroup);

    this.selected = true;
    this.path = path;
    this.children = children;
  }

  Object(createClass["a" /* default */])(BookGroup, [{
    key: "selectChildren",
    value: function selectChildren(select) {
      this.selected = select;

      if (this.children instanceof BookGroup) {
        this.children.selectChildren(select);
      } else if (this.children instanceof Array) {
        this.children.forEach(function (x) {
          if (x instanceof BookGroup) {
            x.selectChildren(select);
          } else if (x instanceof book_Book) {
            x.selected = select;
          }
        });
      }
    }
  }]);

  return BookGroup;
}();


// EXTERNAL MODULE: ./books/Book/Harry Potter.json
var Harry_Potter = __webpack_require__("be82");

// EXTERNAL MODULE: ./books/Book/Lovecraft.json
var Lovecraft = __webpack_require__("f2a8");

// EXTERNAL MODULE: ./books/Cartoon/Looney Tunes.json
var Looney_Tunes = __webpack_require__("a255");

// EXTERNAL MODULE: ./books/Cartoon/The Simpsons.json
var The_Simpsons = __webpack_require__("dc09");

// EXTERNAL MODULE: ./books/Comic/Marvel.json
var Marvel = __webpack_require__("80cc");

// EXTERNAL MODULE: ./books/Movie/Frankenstein.json
var Frankenstein = __webpack_require__("68a3");

// EXTERNAL MODULE: ./books/Movie/MCU.json
var MCU = __webpack_require__("d2bb0");

// EXTERNAL MODULE: ./books/Real Life/Agatha Christie.json
var Agatha_Christie = __webpack_require__("2a3c");

// EXTERNAL MODULE: ./books/Real Life/Arthur Conan Doyle.json
var Arthur_Conan_Doyle = __webpack_require__("022c");

// EXTERNAL MODULE: ./books/Real Life/Edgar Allan Poe.json
var Edgar_Allan_Poe = __webpack_require__("5f46");

// EXTERNAL MODULE: ./books/Real Life/Jules Gabriel Verne.json
var Jules_Gabriel_Verne = __webpack_require__("fc66");

// EXTERNAL MODULE: ./books/Real Life/Mary Shelley.json
var Mary_Shelley = __webpack_require__("b703");

// EXTERNAL MODULE: ./books/Real Life/Maurice Leblanc.json
var Maurice_Leblanc = __webpack_require__("1644");

// EXTERNAL MODULE: ./books/Real Life/Neil Gaiman.json
var Neil_Gaiman = __webpack_require__("4734");

// EXTERNAL MODULE: ./books/Real Life/Terry Pratchett.json
var Terry_Pratchett = __webpack_require__("ad61");

// EXTERNAL MODULE: ./books/Tabletop Game/Critical Role.json
var Critical_Role = __webpack_require__("08bc");

// EXTERNAL MODULE: ./books/Tabletop Game/Forgotten Realms.json
var Forgotten_Realms = __webpack_require__("661f");

// EXTERNAL MODULE: ./books/Tabletop Game/High Rollers D&D.json
var High_Rollers_D_D = __webpack_require__("ad0e");

// EXTERNAL MODULE: ./books/Tabletop Game/MTG.json
var MTG = __webpack_require__("f1c7");

// EXTERNAL MODULE: ./books/TV/Doctor Who.json
var Doctor_Who = __webpack_require__("6db6");

// EXTERNAL MODULE: ./books/TV/Kamen Rider.json
var Kamen_Rider = __webpack_require__("9201");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Oblivion.json
var Oblivion = __webpack_require__("0396");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Shivering Isles.json
var Shivering_Isles = __webpack_require__("445c");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/A Maids Tale.esp.json
var A_Maids_Tale_esp = __webpack_require__("b5b1");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/AfterTheRegatta.esp.json
var AfterTheRegatta_esp = __webpack_require__("faba");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/BladeOfTheHaunted.esp.json
var BladeOfTheHaunted_esp = __webpack_require__("50a2");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/DarkBrotherhoodChronicles.esp.json
var DarkBrotherhoodChronicles_esp = __webpack_require__("e2c1");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Demonhunter.esp.json
var Demonhunter_esp = __webpack_require__("012d");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/DibellasWatch.esm.json
var DibellasWatch_esm = __webpack_require__("ae37");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/ElsweyrAnequina.esp.json
var ElsweyrAnequina_esp = __webpack_require__("81bd");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/GoldenCrest.esp.json
var GoldenCrest_esp = __webpack_require__("7c09");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/GTAesgaard.esp.json
var GTAesgaard_esp = __webpack_require__("feec");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/HeartOftheDead.esp.json
var HeartOftheDead_esp = __webpack_require__("8ac7");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/In The Tower Of The Crescent Moon.esp.json
var In_The_Tower_Of_The_Crescent_Moon_esp = __webpack_require__("3cae");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Ivellon.esp.json
var Ivellon_esp = __webpack_require__("740e");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Kragenir's Death Quest.esp.json
var Kragenir_s_Death_Quest_esp = __webpack_require__("95f4");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/LordKain_Adash_World.esp.json
var LordKain_Adash_World_esp = __webpack_require__("3658");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Maeva Scribonias Bookshop NO BookPlacing plus Castas Books plus Amalrics Books.esp.json
var Maeva_Scribonias_Bookshop_NO_BookPlacing_plus_Castas_Books_plus_Amalrics_Books_esp = __webpack_require__("57cf");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Malevolent.esp.json
var Malevolent_esp = __webpack_require__("effb");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Necromancy Books.esp.json
var Necromancy_Books_esp = __webpack_require__("572c");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season Four.esp.json
var QOTW_Season_Four_esp = __webpack_require__("b479");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season One.esp.json
var QOTW_Season_One_esp = __webpack_require__("7df5");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season Three.esp.json
var QOTW_Season_Three_esp = __webpack_require__("9d10");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/QOTW Season Two.esp.json
var QOTW_Season_Two_esp = __webpack_require__("3d18");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Reaper's Esmeralda's Desert Manor.esp.json
var Reaper_s_Esmeralda_s_Desert_Manor_esp = __webpack_require__("1338");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/ReclaimSancreTor.esp.json
var ReclaimSancreTor_esp = __webpack_require__("fc7d");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Satin And Hot Oil 2.esp.json
var Satin_And_Hot_Oil_2_esp = __webpack_require__("e703");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Satin And Hot Oil.esp.json
var Satin_And_Hot_Oil_esp = __webpack_require__("9220");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Sundas Morning.esp.json
var Sundas_Morning_esp = __webpack_require__("4ff6");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/The Lost Spires.esp.json
var The_Lost_Spires_esp = __webpack_require__("8606");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/The Orcs Initiation.esp.json
var The_Orcs_Initiation_esp = __webpack_require__("80f7");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/The Underking.esp.json
var The_Underking_esp = __webpack_require__("c065");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/The_Feast.esp.json
var The_Feast_esp = __webpack_require__("3e78");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/TheElderCouncil.esp.json
var TheElderCouncil_esp = __webpack_require__("4ee7");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/TOTF.esp.json
var TOTF_esp = __webpack_require__("351f");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Oblivion/Mods/Windfall.esm.json
var Windfall_esm = __webpack_require__("5fa9");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Skyrim.json
var Skyrim = __webpack_require__("d545");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Dragonborn.json
var Dragonborn = __webpack_require__("69f8");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Bloodworm.esp.json
var Bloodworm_esp = __webpack_require__("5af0");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Clockwork.esp.json
var Clockwork_esp = __webpack_require__("98fc");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Dwarfsphere.esp.json
var Dwarfsphere_esp = __webpack_require__("dbf9");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Enderal - Forgotten Stories.esm.json
var Enderal_Forgotten_Stories_esm = __webpack_require__("a300");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/ForgottenCity.esp.json
var ForgottenCity_esp = __webpack_require__("e391");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Gallowmere.esp.json
var Gallowmere_esp = __webpack_require__("0fba");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Gray Fox Cowl.esm.json
var Gray_Fox_Cowl_esm = __webpack_require__("844c");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/INFERNAL FLAME.esp.json
var INFERNAL_FLAME_esp = __webpack_require__("0cd8");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/MoonAndStar_MAS.esp.json
var MoonAndStar_MAS_esp = __webpack_require__("baf5");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/moonpath.esp.json
var moonpath_esp = __webpack_require__("b0ff");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/RodryksBooks.esp.json
var RodryksBooks_esp = __webpack_require__("c693");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/SwordOfSigdan.esp.json
var SwordOfSigdan_esp = __webpack_require__("4101");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/The Brotherhood of Old.esp.json
var The_Brotherhood_of_Old_esp = __webpack_require__("c713");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/TrueHel.esp.json
var TrueHel_esp = __webpack_require__("9748");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Undeath.esp.json
var Undeath_esp = __webpack_require__("25ec");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/WheelsOfLull.esp.json
var WheelsOfLull_esp = __webpack_require__("6fa2");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/arnima.esm.json
var arnima_esm = __webpack_require__("4b91");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/bhabhilon.esp.json
var bhabhilon_esp = __webpack_require__("2c74");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Black Marsh North.esp.json
var Black_Marsh_North_esp = __webpack_require__("89c6");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Black Marsh.esm.json
var Black_Marsh_esm = __webpack_require__("8107");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Darkend.esp.json
var Darkend_esp = __webpack_require__("6e39");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Darkglade.esp.json
var Darkglade_esp = __webpack_require__("b471");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Falskaar.esm.json
var Falskaar_esm = __webpack_require__("aa56");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/HammetDungeons.esm.json
var HammetDungeons_esm = __webpack_require__("3f04");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/maslea.esm.json
var maslea_esm = __webpack_require__("5c64");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Phenderix Magic World.esp.json
var Phenderix_Magic_World_esp = __webpack_require__("001c");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/Phoe.esm.json
var Phoe_esm = __webpack_require__("764c");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/The Haven From The Cold And Dark.esp.json
var The_Haven_From_The_Cold_And_Dark_esp = __webpack_require__("2076");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Skyrim/Mods/TheBawbsShire.esp.json
var TheBawbsShire_esp = __webpack_require__("39e4");

// EXTERNAL MODULE: ./books/Video Game/Elder Scrolls/Daggerfall.json
var Daggerfall = __webpack_require__("999e");

// EXTERNAL MODULE: ./books/Video Game/Castlevania.json
var Castlevania = __webpack_require__("040e");

// EXTERNAL MODULE: ./books/Video Game/Fallout.json
var Fallout = __webpack_require__("598d");

// EXTERNAL MODULE: ./books/Video Game/Minecraft.json
var Minecraft = __webpack_require__("d1f9");

// EXTERNAL MODULE: ./books/Video Game/RuneScape.json
var RuneScape = __webpack_require__("e06b");

// EXTERNAL MODULE: ./books/Web/RWBY.json
var RWBY = __webpack_require__("ac3a");

// EXTERNAL MODULE: ./books/Web/SCP.json
var SCP = __webpack_require__("0d5c");

// CONCATENATED MODULE: ./books/index.ts





 //#region Books



 //#endregion
//#region Cartoons


 //#endregion
//#region Comics

 //#endregion
//#region Movies


 //#endregion
//#region Real Life








 //#endregion
//#region Tabletop Games




 //#endregion
//#region TV


 //#endregion
//#region Video Games
//#region Elder Scrolls
//#region  Oblivion


 //#region   Mods

































 //#endregion
//#endregion
//#region   Skyrim


 //#region   Mods





























 //#endregion
//#endregion
//#region   Daggerfall

 //#endregion
//#endregion




 //#endregion
//#region Web


 //#endregion

function convert(input) {
  var tempBooks = [];
  input.forEach(function (x) {
    tempBooks.push(new book_Book(x.title, x.category, x.translatedTitle, x.language, x.sources, x.description, x.author, x.selected));
  });
  return tempBooks;
}

var BooksArray = [new bookgroup_BookGroup('Book', [new bookgroup_BookGroup('Harry Potter', convert(Harry_Potter.books)), new bookgroup_BookGroup('Lovecraft', convert(Lovecraft.books)), new bookgroup_BookGroup('Tolkien', convert(Lovecraft.books))]), new bookgroup_BookGroup('Cartoon', [new bookgroup_BookGroup('Looney Tunes', convert(Looney_Tunes.books)), new bookgroup_BookGroup('The Simpsons', convert(The_Simpsons.books))]), new bookgroup_BookGroup('Comic', [new bookgroup_BookGroup('Marvel', convert(Marvel.books))]), new bookgroup_BookGroup('Movie', [new bookgroup_BookGroup('Frankenstein', convert(Frankenstein.books)), new bookgroup_BookGroup('MCU', convert(MCU.books))]), new bookgroup_BookGroup('Real Life', [new bookgroup_BookGroup('Agatha Christie', convert(Agatha_Christie.books)), new bookgroup_BookGroup('Arthur Conan Doyle', convert(Arthur_Conan_Doyle.books)), new bookgroup_BookGroup('Edgar Allan Poe', convert(Edgar_Allan_Poe.books)), new bookgroup_BookGroup('Jules Gabriel Verne', convert(Jules_Gabriel_Verne.books)), new bookgroup_BookGroup('Mary Shelley', convert(Mary_Shelley.books)), new bookgroup_BookGroup('Maurice Leblanc', convert(Maurice_Leblanc.books)), new bookgroup_BookGroup('Neil Gaiman', convert(Neil_Gaiman.books)), new bookgroup_BookGroup('Terry Pratchett', convert(Terry_Pratchett.books))]), new bookgroup_BookGroup('Tabletop Game', [new bookgroup_BookGroup('Critical Role', convert(Critical_Role.books)), new bookgroup_BookGroup('Forgotten Realms', convert(Forgotten_Realms.books)), new bookgroup_BookGroup('High Rollers D&D', convert(High_Rollers_D_D.books)), new bookgroup_BookGroup('MTG', convert(MTG.books))]), new bookgroup_BookGroup('TV', [new bookgroup_BookGroup('Doctor Who', convert(Doctor_Who.books)), new bookgroup_BookGroup('Kamen Rider', convert(Kamen_Rider.books))]), new bookgroup_BookGroup('Video Game', [new bookgroup_BookGroup('Elder Scrolls', [new bookgroup_BookGroup('Daggerfall', convert(Daggerfall.books)), new bookgroup_BookGroup('Oblivion', [new bookgroup_BookGroup('Oblivion', convert(Oblivion.books)), new bookgroup_BookGroup('Shivering Isles', convert(Shivering_Isles.books)), new bookgroup_BookGroup('Mods', [new bookgroup_BookGroup('A Maids Tale.esp', convert(A_Maids_Tale_esp.books)), new bookgroup_BookGroup('AfterTheRegatta.esp', convert(AfterTheRegatta_esp.books)), new bookgroup_BookGroup('BladeOfTheHaunted.esp', convert(BladeOfTheHaunted_esp.books)), new bookgroup_BookGroup('DarkBrotherhoodChronicles.esp', convert(DarkBrotherhoodChronicles_esp.books)), new bookgroup_BookGroup('Demonhunter.esp', convert(Demonhunter_esp.books)), new bookgroup_BookGroup('DibellasWatch.esm', convert(DibellasWatch_esm.books)), new bookgroup_BookGroup('ElsweyrAnequina.esp', convert(ElsweyrAnequina_esp.books)), new bookgroup_BookGroup('GoldenCrest.esp', convert(GoldenCrest_esp.books)), new bookgroup_BookGroup('GTAesgaard.esp', convert(GTAesgaard_esp.books)), new bookgroup_BookGroup('HeartOftheDead.esp', convert(HeartOftheDead_esp.books)), new bookgroup_BookGroup('In The Tower Of The Crescent Moon.esp', convert(In_The_Tower_Of_The_Crescent_Moon_esp.books)), new bookgroup_BookGroup('Ivellon.esp', convert(Ivellon_esp.books)), new bookgroup_BookGroup('Kragenir\'s Death Quest.esp', convert(Kragenir_s_Death_Quest_esp.books)), new bookgroup_BookGroup('LordKain_Adash_World.esp', convert(LordKain_Adash_World_esp.books)), new bookgroup_BookGroup('Maeva Scribonias Bookshop NO BookPlacing plus Castas Books plus Amalrics Books.esp', convert(Maeva_Scribonias_Bookshop_NO_BookPlacing_plus_Castas_Books_plus_Amalrics_Books_esp.books)), new bookgroup_BookGroup('Malevolent.esp', convert(Malevolent_esp.books)), new bookgroup_BookGroup('Necromancy Books.esp', convert(Necromancy_Books_esp.books)), new bookgroup_BookGroup('QOTW Season Four.esp', convert(QOTW_Season_Four_esp.books)), new bookgroup_BookGroup('QOTW Season One.esp', convert(QOTW_Season_One_esp.books)), new bookgroup_BookGroup('QOTW Season Three.esp', convert(QOTW_Season_Three_esp.books)), new bookgroup_BookGroup('QOTW Season Two.esp', convert(QOTW_Season_Two_esp.books)), new bookgroup_BookGroup('Reaper\'s Esmeralda\'s Desert Manor.esp', convert(Reaper_s_Esmeralda_s_Desert_Manor_esp.books)), new bookgroup_BookGroup('ReclaimSancreTor.esp', convert(ReclaimSancreTor_esp.books)), new bookgroup_BookGroup('Satin And Hot Oil 2.esp', convert(Satin_And_Hot_Oil_2_esp.books)), new bookgroup_BookGroup('Satin And Hot Oil.esp', convert(Satin_And_Hot_Oil_esp.books)), new bookgroup_BookGroup('Sundas Morning.esp', convert(Sundas_Morning_esp.books)), new bookgroup_BookGroup('The Lost Spires.esp', convert(The_Lost_Spires_esp.books)), new bookgroup_BookGroup('The Orcs Initiation.esp', convert(The_Orcs_Initiation_esp.books)), new bookgroup_BookGroup('The Underking.esp', convert(The_Underking_esp.books)), new bookgroup_BookGroup('The_Feast.esp', convert(The_Feast_esp.books)), new bookgroup_BookGroup('TheElderCouncil.esp', convert(TheElderCouncil_esp.books)), new bookgroup_BookGroup('TOTF.esp', convert(TOTF_esp.books)), new bookgroup_BookGroup('Windfall.esm', convert(Windfall_esm.books))])]), new bookgroup_BookGroup('Skyrim', [new bookgroup_BookGroup('Skyrim', convert(Skyrim.books)), new bookgroup_BookGroup('Dragonborn', convert(Dragonborn.books)), new bookgroup_BookGroup('Mods', [new bookgroup_BookGroup('Bloodworm.esp', convert(Bloodworm_esp.books)), new bookgroup_BookGroup('Clockwork.esp', convert(Clockwork_esp.books)), new bookgroup_BookGroup('Dwarfsphere.esp', convert(Dwarfsphere_esp.books)), new bookgroup_BookGroup('Enderal - Forgotten Stories.esm', convert(Enderal_Forgotten_Stories_esm.books)), new bookgroup_BookGroup('ForgottenCity.esp', convert(ForgottenCity_esp.books)), new bookgroup_BookGroup('Gallowmere.esp', convert(Gallowmere_esp.books)), new bookgroup_BookGroup('Gray Fox Cowl.esm', convert(Gray_Fox_Cowl_esm.books)), new bookgroup_BookGroup('INFERNAL FLAME.esp', convert(INFERNAL_FLAME_esp.books)), new bookgroup_BookGroup('MoonAndStar_MAS.esp', convert(MoonAndStar_MAS_esp.books)), new bookgroup_BookGroup('moonpath.esp', convert(moonpath_esp.books)), new bookgroup_BookGroup('RodryksBooks.esp', convert(RodryksBooks_esp.books)), new bookgroup_BookGroup('SwordOfSigdan.esp', convert(SwordOfSigdan_esp.books)), new bookgroup_BookGroup('The Brotherhood of Old.esp', convert(The_Brotherhood_of_Old_esp.books)), new bookgroup_BookGroup('TrueHel.esp', convert(TrueHel_esp.books)), new bookgroup_BookGroup('Undeath.esp', convert(Undeath_esp.books)), new bookgroup_BookGroup('WheelsOfLull.esp', convert(WheelsOfLull_esp.books)), new bookgroup_BookGroup('arnima.esm', convert(arnima_esm.books)), new bookgroup_BookGroup('bhabhilon.esp', convert(bhabhilon_esp.books)), new bookgroup_BookGroup('Black Marsh North.esp', convert(Black_Marsh_North_esp.books)), new bookgroup_BookGroup('Black Marsh.esm', convert(Black_Marsh_esm.books)), new bookgroup_BookGroup('Darkend.esp', convert(Darkend_esp.books)), new bookgroup_BookGroup('Darkglade.esp', convert(Darkglade_esp.books)), new bookgroup_BookGroup('Falskaar.esm', convert(Falskaar_esm.books)), new bookgroup_BookGroup('HammetDungeons.esm', convert(HammetDungeons_esm.books)), new bookgroup_BookGroup('maslea.esm', convert(maslea_esm.books)), new bookgroup_BookGroup('Phenderix Magic World.esp', convert(Phenderix_Magic_World_esp.books)), new bookgroup_BookGroup('Phoe.esm', convert(Phoe_esm.books)), new bookgroup_BookGroup('The Haven From The Cold And Dark.esp', convert(The_Haven_From_The_Cold_And_Dark_esp.books)), new bookgroup_BookGroup('TheBawbsShire.esp', convert(TheBawbsShire_esp.books))])])]), new bookgroup_BookGroup('Castlevania', convert(Castlevania.books)), new bookgroup_BookGroup('Fallout', convert(Fallout.books)), new bookgroup_BookGroup('Minecraft', convert(Minecraft.books)), new bookgroup_BookGroup('Runescape', convert(RuneScape.books))]), new bookgroup_BookGroup('Web', [new bookgroup_BookGroup('RWBY', convert(RWBY.books)), new bookgroup_BookGroup('SCP', convert(SCP.books))])];
/* harmony default export */ var books = (BooksArray);
// CONCATENATED MODULE: ./src/library.ts






var library_Library = /*#__PURE__*/function () {
  function Library(children) {
    Object(classCallCheck["a" /* default */])(this, Library);

    this.path = '/';
    this.selected = true;
    this.children = children;
  }

  Object(createClass["a" /* default */])(Library, [{
    key: "selectChildren",
    value: function selectChildren(select) {
      this.selected = select;
      this.children.forEach(function (x) {
        x.selectChildren(select);
      });
    }
  }], [{
    key: "computeLibrary",
    value: function computeLibrary() {
      this._library = new Library(books);
    }
  }, {
    key: "selectChildren",
    value: function selectChildren(select) {
      this._library.selected = select;

      this._library.children.forEach(function (x) {
        x.selectChildren(select);
      });
    }
  }]);

  return Library;
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TreeItem.vue?vue&type=script&lang=ts&













var TreeItemvue_type_script_lang_ts_TreeItem = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(TreeItem, _Vue);

  var _super = Object(createSuper["a" /* default */])(TreeItem);

  function TreeItem() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TreeItem);

    _this = _super.apply(this, arguments);
    _this.isOpen = _this.isOpenProp;
    return _this;
  }

  Object(createClass["a" /* default */])(TreeItem, [{
    key: "toggleOpen",
    value: function toggleOpen() {
      //console.log(this.childPaths);
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    }
  }, {
    key: "toggleRadio",
    value: function toggleRadio() {
      var _this$$refs$childItem;

      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.path;

      lodash_default.a.set(this.$library, path + '.selected', !this.item.selected);

      (_this$$refs$childItem = this.$refs.childItems) === null || _this$$refs$childItem === void 0 ? void 0 : _this$$refs$childItem.forEach(function (x) {
        x.toggleRadio();
        x.$forceUpdate();
      });
    }
  }, {
    key: "item",
    get: function get() {
      if (this.path == '') {
        return this.$library;
      }

      ;
      return lodash_default.a.get(this.$library, this.path);
    }
  }, {
    key: "childPaths",
    get: function get() {
      if (this.item instanceof bookgroup_BookGroup || this.item instanceof library_Library) {
        if (this.item.children instanceof Array) {
          var tempArray = [];

          for (var i = 0; i < this.item.children.length; i++) {
            tempArray.push(this.path + (this.path == '' ? '' : '.') + 'children[' + i + ']');
          }

          return tempArray;
        } else if (this.item.children instanceof book_Book || this.item.children instanceof bookgroup_BookGroup) {
          return [this.path + '.children'];
        }
      }

      return;
    }
  }, {
    key: "isFolder",
    get: function get() {
      if (this.item instanceof bookgroup_BookGroup || this.item instanceof library_Library) {
        return true;
      }

      return false;
    }
  }, {
    key: "name",
    get: function get() {
      if (this.item instanceof bookgroup_BookGroup) {
        return this.item.path;
      } else if (this.item instanceof book_Book || this.item instanceof Object) {
        return this.item.title;
      }

      return "/";
    }
  }]);

  return TreeItem;
}(vue_property_decorator["c" /* Vue */]);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  default: ''
})], TreeItemvue_type_script_lang_ts_TreeItem.prototype, "path", void 0);

Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["b" /* Prop */])({
  default: false
})], TreeItemvue_type_script_lang_ts_TreeItem.prototype, "isOpenProp", void 0);

TreeItemvue_type_script_lang_ts_TreeItem = Object(tslib_es6["a" /* __decorate */])([vue_property_decorator["a" /* Component */]], TreeItemvue_type_script_lang_ts_TreeItem);
/* harmony default export */ var TreeItemvue_type_script_lang_ts_ = (TreeItemvue_type_script_lang_ts_TreeItem);
// CONCATENATED MODULE: ./src/components/TreeItem.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_TreeItemvue_type_script_lang_ts_ = (TreeItemvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/TreeItem.vue?vue&type=style&index=0&id=4dfc0402&scoped=true&lang=scss&
var TreeItemvue_type_style_index_0_id_4dfc0402_scoped_true_lang_scss_ = __webpack_require__("3228");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/TreeItem.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TreeItemvue_type_script_lang_ts_,
  TreeItemvue_type_template_id_4dfc0402_scoped_true_render,
  TreeItemvue_type_template_id_4dfc0402_scoped_true_staticRenderFns,
  false,
  null,
  "4dfc0402",
  null
  
)

/* harmony default export */ var components_TreeItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BookViewer.vue?vue&type=script&lang=ts&





















var BookViewervue_type_script_lang_ts_BookViewer = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(BookViewer, _Vue);

  var _super = Object(createSuper["a" /* default */])(BookViewer);

  function BookViewer() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BookViewer);

    _this = _super.apply(this, arguments);
    _this.outputText = '';
    _this.count = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(BookViewer, [{
    key: "generateBooks",
    value: function generateBooks() {
      var _this2 = this;

      var tempArray = JSON.parse(JSON.stringify(this.$library)).children;
      tempArray = tempArray.filter(function (x) {
        return x.selected;
      }).map(function (x) {
        return _this2.processBookGroup(x);
      });
      tempArray = this.filterBookGroups(tempArray); //console.log(tempArray);

      tempArray = lodash_default.a.shuffle(tempArray).slice(0, this.count);
      this.printPretty(tempArray);
    }
  }, {
    key: "filterBookGroups",
    value: function filterBookGroups(input) {
      //console.log(input);
      if (input instanceof Array && input.some(function (e) {
        return e.hasOwnProperty('children');
      })) {
        return this.filterBookGroups(input.map(function (x) {
          if (x.hasOwnProperty('children')) {
            return x.children;
          } else {
            return x;
          }
        }).flat());
      }

      return input;
    }
  }, {
    key: "printPretty",
    value: function printPretty(arr) {
      var _this3 = this;

      this.outputText = '';
      this.outputText += '---------\n';
      arr.forEach(function (book) {
        _this3.outputText += 'Title: ' + book.title + '\n';

        if (book.translatedTitle) {
          _this3.outputText += 'Translated Title: ' + book.translatedTitle + '\n';
        }

        if (book.language) {
          _this3.outputText += 'Language: ' + book.language + '\n';
        }

        if (book.author) {
          _this3.outputText += 'Author: ' + book.author + '\n';
        }

        if (book.category) {
          book.category.forEach(function (cat) {
            _this3.outputText += 'Category: ' + cat + '\n';
          });
        }

        if (book.description) {
          _this3.outputText += 'Description: ' + book.description + '\n';
        }

        _this3.outputText += '---------\n';
      });
    }
  }, {
    key: "processBookGroup",
    value: function processBookGroup(item) {
      var _this4 = this;

      if (item.children instanceof Array) {
        if (item.children[1] instanceof bookgroup_BookGroup) {
          item.children = item.children.filter(function (x) {
            return x.selected;
          }).map(function (x) {
            return _this4.processBookGroup(x);
          });
        } else if (item.children[1] instanceof book_Book) {
          item.children = item.children.filter(function (x) {
            return x.selected;
          });
        }
      }

      return item;
    }
  }]);

  return BookViewer;
}(vue_property_decorator["c" /* Vue */]);

BookViewervue_type_script_lang_ts_BookViewer = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {
    TreeItem: components_TreeItem
  }
})], BookViewervue_type_script_lang_ts_BookViewer);
/* harmony default export */ var BookViewervue_type_script_lang_ts_ = (BookViewervue_type_script_lang_ts_BookViewer);
// CONCATENATED MODULE: ./src/components/BookViewer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_BookViewervue_type_script_lang_ts_ = (BookViewervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/BookViewer.vue?vue&type=style&index=0&id=b5cfe0f4&scoped=true&lang=scss&
var BookViewervue_type_style_index_0_id_b5cfe0f4_scoped_true_lang_scss_ = __webpack_require__("20ef");

// CONCATENATED MODULE: ./src/components/BookViewer.vue






/* normalize component */

var BookViewer_component = Object(componentNormalizer["a" /* default */])(
  components_BookViewervue_type_script_lang_ts_,
  BookViewervue_type_template_id_b5cfe0f4_scoped_true_render,
  BookViewervue_type_template_id_b5cfe0f4_scoped_true_staticRenderFns,
  false,
  null,
  "b5cfe0f4",
  null
  
)

/* harmony default export */ var components_BookViewer = (BookViewer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&







var Appvue_type_script_lang_ts_App = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(App, _Vue);

  var _super = Object(createSuper["a" /* default */])(App);

  function App() {
    Object(classCallCheck["a" /* default */])(this, App);

    return _super.apply(this, arguments);
  }

  return App;
}(vue_property_decorator["c" /* Vue */]);

Appvue_type_script_lang_ts_App = Object(tslib_es6["a" /* __decorate */])([Object(vue_property_decorator["a" /* Component */])({
  components: {
    BookViewer: components_BookViewer
  }
})], Appvue_type_script_lang_ts_App);
/* harmony default export */ var Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_App);
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_ts_,
  Appvue_type_template_id_d773ddbe_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/register-service-worker/index.js
var register_service_worker = __webpack_require__("9483");

// CONCATENATED MODULE: ./src/registerServiceWorker.ts
/* eslint-disable no-console */


if (true) {
  Object(register_service_worker["a" /* register */])("".concat("/Book-Keeper/", "service-worker.js"), {
    ready: function ready() {
      console.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB');
    },
    registered: function registered() {
      console.log('Service worker has been registered.');
    },
    cached: function cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound: function updatefound() {
      console.log('New content is downloading.');
    },
    updated: function updated() {
      console.log('New content is available; please refresh.');
    },
    offline: function offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error: function error(_error) {
      console.error('Error during service worker registration:', _error);
    }
  });
}
// CONCATENATED MODULE: ./src/main.ts








vue_runtime_esm["a" /* default */].config.productionTip = false;
library_Library.computeLibrary();
vue_runtime_esm["a" /* default */].prototype.$library = library_Library._library;
new vue_runtime_esm["a" /* default */]({
  render: function render(h) {
    return h(src_App);
  }
}).$mount('#app');

/***/ }),

/***/ "cf05":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.82b9c7a5.png";

/***/ }),

/***/ "d1f9":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[],\"books\":[{\"title\":\"Lexica Botanica\",\"category\":[\"Biology\",\"Alchemy\",\"Spellbook\",\"Scholarly\"]},{\"title\":\"Arcane Compendium\",\"category\":[\"Spellbook\",\"Scholarly\"]},{\"title\":\"Astral Tome\",\"category\":[\"Spellbook\",\"Scholarly\"]},{\"title\":\"Book of Biomes\",\"category\":[\"Biology\",\"Scholarly\"]},{\"title\":\"Book of Alloys, Smeltery Edition\",\"category\":[]},{\"title\":\"Book of Herblore\",\"category\":[\"Biology\",\"Alchemy\",\"Spellbook\",\"Scholarly\"]},{\"title\":\"Book of Spellcraft\",\"category\":[\"Spellbook\",\"Scholarly\"]},{\"title\":\"Book of the Natural Arts\",\"category\":[\"Spellbook\",\"Scholarly\",\"Myth\"]},{\"title\":\"Book of the Well\",\"category\":[]},{\"title\":\"Chromic Lexicon\",\"category\":[]},{\"title\":\"ENHANCED PORTALS: wormhole tunneling\",\"category\":[]},{\"title\":\"Esteemed Innovation\",\"category\":[]},{\"title\":\"Handbook of Prodigies\",\"category\":[]},{\"title\":\"Juiciest Wares\",\"category\":[]},{\"title\":\"Observations of an Immortal\",\"category\":[]},{\"title\":\"On the Dynamics of Integration\",\"category\":[]},{\"title\":\"Spellforger's Codex\",\"category\":[]},{\"title\":\"Strange Dreams\",\"category\":[]},{\"title\":\"Thaumonomicon\",\"category\":[]},{\"title\":\"Totempedia\",\"category\":[]},{\"title\":\"Witchcraft: Brews & Infusions\",\"category\":[\"Spellbook\",\"Alchemy\"]},{\"title\":\"Witchcraft: Circle Magic\",\"category\":[\"Spellbook\"]},{\"title\":\"Witchcraft: Collecting Fumes\",\"category\":[\"Spellbook\",\"Alchemy\"]},{\"title\":\"Witchcraft: Conjuration & Fetishes\",\"category\":[\"Spellbook\"]},{\"title\":\"Witchcraft: Distilling\",\"category\":[\"Spellbook\",\"Alchemy\"]},{\"title\":\"Witchcraft: Herbology\",\"category\":[\"Spellbook\",\"Alchemy\",\"Biology\"]},{\"title\":\"Witchcraft: Symbology\",\"category\":[\"Spellbook\"]},{\"title\":\"Witches' Brews\",\"category\":[\"Spellbook\",\"Alchemy\"]}]}");

/***/ }),

/***/ "d2bb0":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://marvelcinematicuniverse.fandom.com/\"],\"books\":[{\"title\":\"Book of the Invisible Sun\",\"category\":[]},{\"title\":\"Book of Yggdrasil\",\"category\":[]},{\"title\":\"Book of Gibborim\",\"category\":[]},{\"title\":\"Book of Cagliostro\",\"category\":[]},{\"title\":\"Darkhold\",\"category\":[]},{\"title\":\"Book of Sins\",\"category\":[]},{\"title\":\"Myths and Ledgends From Around the World\",\"author\":\"Anneka Sunden\",\"category\":[]},{\"title\":\"One Batch, Two Batch\",\"category\":[]},{\"title\":\"Inventory of Rare and Endangered Tracheophyta of Amazônia\",\"category\":[]},{\"title\":\"Codex Imperium\",\"category\":[]},{\"title\":\"Maxim's Primer\",\"category\":[]}]}");

/***/ }),

/***/ "d545":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../books-schema.json\",\"sources\":[\"https://elderscrolls.fandom.com/wiki/Books_(Skyrim)\"],\"books\":[{\"category\":[],\"title\":\"16 Accords of Madness, Vol. VI\",\"description\":\"A tale of a duel between Sheogorath and Hircine.\"},{\"category\":[],\"title\":\"16 Accords of Madness, Vol. IX\",\"description\":\"Sheogorath and Vaermina strike a bet.\"},{\"category\":[],\"title\":\"16 Accords of Madness, Vol. XII\",\"description\":\"Malacath's dealings with Sheogorath.\"},{\"category\":[],\"title\":\"2920, Vol. I - Morning Star\",\"description\":\"First book in a series of books recounting the events surrounding the Empire during the last year of the First Era.\"},{\"category\":[],\"title\":\"2920, Vol. II - Sun's Dawn\",\"description\":\"Details one of Sotha Sil's lessons, Turala's exile and Molag Bal arriving to Gilverdale, as well as Almalexia discovering the city's destruction.\"},{\"category\":[],\"title\":\"2920, Vol. III - First Seed\",\"description\":\"Details the disaster of the attempted Imperial invasion of Mournhold, Morrowind by Emperor Reman III.\"},{\"category\":[],\"title\":\"2920, Vol. IV - Rain's Hand\",\"description\":\"Follows Sotha Sil and his initiates in their negotiation and dealings with Daedra following the destruction of Gilverdale by Molag Bal.\"},{\"category\":[],\"title\":\"2920, Vol. V - Second Seed\",\"description\":\"Narrates attempts on the life of Emperor Reman III and Turala's birth of a daughter.\"},{\"category\":[],\"title\":\"2920, Vol. VI - Mid Year\",\"description\":\"Details the events of the Battle of Ald Marak between Vivec's forces and the army of the Reman Empire.\"},{\"category\":[],\"title\":\"2920, Vol. VII - Sun's Height\",\"description\":\"Details the events that began the Sacking of Black Gate and the inception of the Morag Tong's contract to assassinate Emperor Reman Cyrodiil III.\"},{\"category\":[],\"title\":\"2920, Vol. VIII - Last Seed\",\"description\":\"Details the events that lead to Juilek Cyrodiil's assassination, as well as the treaty between Cyrodiil and Morrowind that ended the 80 year-long war.\"},{\"category\":[],\"title\":\"2920, Vol. IX - Hearth Fire\",\"description\":\"Details Empress Tavia's agony and her suicide, Potentate Versidue Shaie convincing the emperor to sentence Rijja to death and Turala and Cassyr meeting a witch of the Skeffington Coven.\"},{\"category\":[],\"title\":\"2920, Vol. X- Frostfall\",\"description\":\"Details Turala's life in Skeffington Coven, Cassyr arriving to Dwynnen, his encounter with Sotha Sil's ex-student and his use of Turala's wrath after the destruction of Skeffington Coven.\"},{\"category\":[],\"title\":\"2920, Vol. XI - Sun's Dusk\",\"description\":\"Details Zuuk's meeting with the Night Mother, first signs of the Daedric attack on Mournhold, negotiations in Bodrum and an attempt of assassination of the Emperor.\"},{\"category\":[],\"title\":\"2920, Vol. XII - Evening Star\",\"description\":\"Details Emperor Reman Cyrodiil III's death, rebuilding of Mournhold, the Potentate taking on duties of ruling the Empire and the beginning of the Second Era.\"},{\"category\":[],\"title\":\"A Children's Anuad\",\"description\":\"A simplified account of creation myths.\"},{\"category\":[],\"title\":\"A Dance in Fire, Book I\",\"description\":\"Account of Decumus Scotti's exploits during the war between Valenwood and Elsweyr.\"},{\"category\":[],\"title\":\"A Dance in Fire, Book II\",\"description\":\"Part two of Decumus Scotti's exploits during the war between Valenwood and Elsweyr.\"},{\"category\":[],\"title\":\"A Dance in Fire, Book III\",\"description\":\"Part three of Decumus Scotti's exploits during the war between Valenwood and Elsweyr.\"},{\"category\":[],\"title\":\"A Dance in Fire, Book IV\",\"description\":\"Part four of Decumus Scotti's exploits during the war between Valenwood and Elsweyr.\"},{\"category\":[],\"title\":\"A Dance in Fire, Book V\",\"description\":\"Part five of Decumus Scotti's exploits during the war between Valenwood and Elsweyr.\"},{\"category\":[],\"title\":\"A Dance in Fire, Book VI\",\"description\":\"Part six of Decumus Scotti's exploits during the war between Valenwood and Elsweyr.\"},{\"category\":[],\"title\":\"A Dance in Fire, Book VII\",\"description\":\"Part seven of Decumus Scotti's exploits during the war between Valenwood and Elsweyr.\"},{\"category\":[],\"title\":\"A Dream of Sovngarde\",\"description\":\"A Nord soldier's account of visiting the afterlife in a dream.\"},{\"category\":[],\"title\":\"A Game at Dinner\",\"description\":\"An anonymous letter written by a spy.\"},{\"category\":[],\"title\":\"A Gentleman's Guide to Whiterun\",\"description\":\"A guide to the Nordic city of Whiterun in the Fourth Era.\"},{\"category\":[],\"title\":\"A Hypothetical Treachery\",\"description\":\"A short play about betrayal.\"},{\"category\":[],\"title\":\"A Kiss, Sweet Mother\",\"description\":\"Guide to performing the Black Sacrament in order to summon the Dark Brotherhood.\"},{\"category\":[],\"title\":\"A Minor Maze\",\"description\":\"The history of Labyrinthian and its creator, Shalidor.\"},{\"category\":[],\"title\":\"A Tragedy in Black\",\"description\":\"A folk tale about a young boy's encounter with a Dremora.\"},{\"category\":[],\"title\":\"Advances in Lockpicking\",\"description\":\"A brief guidebook on lockpicking.\"},{\"category\":[],\"title\":\"Aedra and Daedra\",\"description\":\"A brief summary of the differences between Aedra and Daedra.\"},{\"category\":[],\"title\":\"Aevar Stone-Singer\",\"description\":\"A Skaal folk tale about a young boy's journey to return the gifts of the All-Maker from the Greedy Man.\"},{\"category\":[],\"title\":\"Ahzirr Traajijazeri\",\"description\":\"The public manifesto of the Khajiit organization Renrijra Krin.\"},{\"category\":[],\"title\":\"Alduin is Real\",\"description\":\"A poorly-written book on the subject of Alduin's existence.\"},{\"category\":[],\"title\":\"Amongst the Draugr\",\"description\":\"Bernadette Bandian's study into the behavior of the Draugr.\"},{\"category\":[],\"title\":\"An Accounting of the Scrolls\",\"description\":\"An attempted study into the number of Elder Scrolls that exist.\"},{\"category\":[],\"title\":\"An Explorer's Guide to Skyrim\",\"description\":\"A brief overview of some cities in Skyrim for tourists to visit.\"},{\"category\":[],\"title\":\"Ancestors and the Dunmer\",\"description\":\"An overview of Dunmer ancestor worship and afterlife.\"},{\"category\":[],\"title\":\"Annals of the Dragonguard\",\"description\":\"A journal written by a member of the ancient Dragonguard.\"},{\"category\":[],\"title\":\"Antecedents of Dwemer Law\",\"description\":\"The customs and laws of the Dwemer.\"},{\"category\":[],\"title\":\"Arcana Restored\",\"description\":\"A guide to restoring enchanted items.\"},{\"category\":[],\"title\":\"The Argonian Account, Book I\",\"description\":\"Account of Decumus Scotti's first entering Black Marsh. The first part of his adventures there.\"},{\"category\":[],\"title\":\"The Argonian Account, Book II\",\"description\":\"Part two of Decumus Scotti's adventures in the Black Marsh.\"},{\"category\":[],\"title\":\"The Argonian Account, Book III\",\"description\":\"Part three of Decumus Scotti's adventures in the Black Marsh.\"},{\"category\":[],\"title\":\"The Argonian Account, Book IV\",\"description\":\"Part four of Decumus Scotti's adventures in the Black Marsh.\"},{\"category\":[],\"title\":\"Atlas of Dragons\",\"description\":\"A historical record of known Dragons, both living and dead.\"},{\"category\":[],\"title\":\"Azura and the Box\",\"description\":\"Part eleven of the Ancient Tales of the Dwemer series.\"},{\"category\":[],\"title\":\"Battle of Sancre Tor\",\"description\":\"A historical record of the battle at Sancre Tor.\"},{\"category\":[],\"title\":\"Before the Ages of Man\",\"description\":\"A brief history of the Dawn Era and Merethic Era.\"},{\"category\":[],\"title\":\"Beggar\",\"description\":\"Part one of the fictional tale surrounding the adventures of Eslaf Erol.\"},{\"category\":[],\"title\":\"Beggar Prince\",\"description\":\"A fictional story of a prince who is given unusual \\\"gifts\\\" from Namira.\"},{\"category\":[],\"title\":\"Biography of Barenziah, Vol. I\",\"description\":\"Volume one in the official biography of Queen Barenziah.\"},{\"category\":[],\"title\":\"Biography of Barenziah, Vol. II\",\"description\":\"Volume two in the official biography of Queen Barenziah.\"},{\"category\":[],\"title\":\"Biography of Barenziah, Vol. III\",\"description\":\"Volume three in the official biography of Queen Barenziah.\"},{\"category\":[],\"title\":\"Biography of the Wolf Queen\",\"description\":\"The history of Potema, The Wolf Queen of Solitude.\"},{\"category\":[],\"title\":\"Boethiah's Glory\",\"description\":\"A short prayer to Boethiah.\"},{\"category\":[],\"title\":\"Boethiah's Proving\",\"description\":\"A cultist's account of summoning Boethiah.\"},{\"category\":[],\"title\":\"Breathing Water\",\"description\":\"A fictional tale where Tharien Winloth seeks to master water breathing.\"},{\"category\":[],\"title\":\"Brief History of the Empire, Vol. I\",\"author\":\"Stronach K'Thojj III\",\"description\":\"The succession of the first eight Emperors of the Septim Dynasty, from Tiber Septim to Kintyra II.\"},{\"category\":[],\"title\":\"Brief History of the Empire, Vol. II\",\"author\":\"Stronach K'Thojj III\",\"description\":\"The second volume described the War of the Red Diamond and the six Emperors who followed.\"},{\"category\":[],\"title\":\"Brief History of the Empire, Vol. III\",\"author\":\"Stronach K'Thojj III\",\"description\":\"The third volume described the troubles of the next three Emperors - the frustrated Uriel IV, the ineffectual Cephorus II, and the heroic Uriel V.\"},{\"category\":[],\"title\":\"Brief History of the Empire, Vol. IV\",\"author\":\"Stronach K'Thojj III\",\"description\":\"The final volume describes the rest of the Empire's history leading up to Jagar Tharn.\"},{\"category\":[],\"title\":\"The Brothers of Darkness\",\"author\":\"Pellarne Assi\",\"description\":\"The founding and rise of the Dark Brotherhood.\"},{\"category\":[],\"title\":\"Catalogue of Armor Enchantments\",\"description\":\"A guide to various enchantments that can be bound to apparel.\"},{\"category\":[],\"title\":\"Catalogue of Weapon Enchantments\",\"description\":\"A guide to various enchantments that can be bound to weapons.\"},{\"category\":[],\"title\":\"Cats of Skyrim\",\"description\":\"A brief overview about the Sabrecats and Khajiit found in Skyrim.\"},{\"category\":[],\"title\":\"Chance's Folly\",\"description\":\"A fictional tale of a thief who gets more than she bargained for.\"},{\"category\":[],\"title\":\"Charwich-Koniinge Letters, Vol. I\",\"description\":\"A series of letters between Charwich and his friend Koniinge written during their search for Azura's Star.\"},{\"category\":[],\"title\":\"Charwich-Koniinge Letters, Vol. II\",\"description\":\"Letters between Charwich and Koniinge about their search for Azura's Star.\"},{\"category\":[],\"title\":\"Charwich-Koniinge Letters, Vol. III\",\"description\":\"Letters between Charwich and Koniinge about their search for Azura's Star.\"},{\"category\":[],\"title\":\"Charwich-Koniinge Letters, Vol. IV\",\"description\":\"Letters between Charwich and Koniinge about their search for Azura's Star.\"},{\"category\":[],\"title\":\"Chaurus Pie: A Recipe\",\"description\":\"A recipe for pie, written by Windhelm resident Nils.\"},{\"category\":[],\"title\":\"Cherim's Heart\",\"description\":\"An interview with Khajiiti tapestist Cherim about his most famous work - \\\"The Heart of Anequina.\\\"\"},{\"category\":[],\"title\":\"Children of the Sky\",\"description\":\"A text detailing aspects of Nordic culture, with a primary focus on Thu'um and Tongues.\"},{\"category\":[],\"title\":\"Chimarvamidium\",\"description\":\"Part six of the Ancient Tales of the Dwemer series.\"},{\"category\":[],\"title\":\"Chronicles of Nchuleft\",\"description\":\"A historical account of events surrounding the Dwemer colony of Nchuleft.\"},{\"category\":[],\"title\":\"Cleansing of the Fane\",\"description\":\"A fragment from a First Era chronicle surrounding the destruction of the Ayleid city of Malada.\"},{\"category\":[],\"title\":\"Darkest Darkness\",\"description\":\"A book discussing the different varieties of Daedra and whom they serve.\"},{\"category\":[],\"title\":\"Daughter of the Niben\",\"description\":\"A brief history of Bravil, including the tale of its namesake Teo Bravillius Tasus.\"},{\"category\":[],\"title\":\"De Rerum Dirennis\",\"description\":\"Vorian Direnni writes of his lesser known family members in hopes their names won't be forgotten.\"},{\"category\":[],\"title\":\"Death Blow of Abernanit\",\"description\":\"A poem about the death of Dagoth Thras, a powerful Daedra worshipper who declared himself the heir of the Sixth House.\"},{\"category\":[],\"title\":\"Death of a Wanderer\",\"description\":\"The tale of a sick and elderly Argonian explaining the intricacies of the ancient Nordic Dragon Claws.\"},{\"category\":[],\"title\":\"Dragon Language: Myth no More\",\"description\":\"Hela Thrice-Versed recounts her travels across Skyrim in search of Word Walls and outlines her theories on how Dragons communicated.\"},{\"category\":[],\"title\":\"Dunmer of Skyrim\",\"description\":\"Dunmer immigrant Athal Sarys writes about the poor treatment of his kin in the Nordic city of Windhelm.\"},{\"category\":[],\"title\":\"Dwarves, Vol. I\",\"description\":\"Calcelmo's three-part series into the various facets of the Dwemer. The first part looks at architecture and design.\"},{\"category\":[],\"title\":\"Dwarves, Vol. II\",\"description\":\"The second part looks at weapons, armor and machines.\"},{\"category\":[],\"title\":\"Dwarves, Vol. III\",\"description\":\"The third part looks at culture and history.\"},{\"category\":[],\"title\":\"Dwemer History and Culture\",\"description\":\"An investigation into the works of Marobar Sul and their effect.\"},{\"category\":[],\"title\":\"Dwemer Inquiries, Vol. I\",\"description\":\"The first book in a three part study by Thelwe Ghelein investigating Dwemer architecture and civilization.\"},{\"category\":[],\"title\":\"Dwemer Inquiries, Vol. II\",\"description\":\"The second book in a three part study by Thelwe Ghelein investigating Dwemer architecture and civilization.\"},{\"category\":[],\"title\":\"Dwemer Inquiries, Vol. III\",\"description\":\"The third book in a three-part study by Thelwe Ghelein investigating Dwemer architecture and civilization.\"},{\"category\":[],\"title\":\"Effects of the Elder Scrolls\",\"description\":\"Justinius Poluhnius's study into the effects of reading an Elder Scroll.\"},{\"category\":[],\"title\":\"Enchanter's Primer\",\"description\":\"A basic guide to Enchanting by Sergius Turrianus of the College of Winterhold.\"},{\"category\":[],\"title\":\"Fall From Glory\",\"description\":\"A study into the fall of Riften's Thieves Guild in the Fourth Era.\"},{\"category\":[],\"title\":\"Fall of the Snow Prince\",\"description\":\"An account of the Battle of the Moesring between the Atmorans and Snow Elves, including the death of the Snow Prince.\"},{\"category\":[],\"title\":\"Father Of The Niben\",\"description\":\"Ancient journal translations of Topal the Pilot, the earliest known Aldmer explorer of Tamriel.\"},{\"category\":[],\"title\":\"Feyfolken, Book I\",\"description\":\"The first book of a three part tale of a great sage and his lessons for his two students, Taksim and Vonguldak.\"},{\"category\":[],\"title\":\"Feyfolken, Book II\",\"description\":\"The second book of a three part tale of a great sage and his lessons for his two students, Taksim and Vonguldak.\"},{\"category\":[],\"title\":\"Feyfolken, Book III\",\"description\":\"The third book of a three part tale of a great sage and his lessons for his two students, Taksim and Vonguldak.\"},{\"category\":[],\"title\":\"Final Lesson\",\"description\":\"The great sage from the Feyfolken series has one last lesson to teach his students.\"},{\"category\":[],\"title\":\"Fire and Darkness\",\"description\":\"The history of the Morag Tong and its evolution into the Dark Brotherhood.\"},{\"category\":[],\"title\":\"Five Songs of King Wulfharth\",\"description\":\"Five songs spanning the life of King Wulfharth. Includes a controversial secret song about his involvement at Red Mountain.\"},{\"category\":[],\"title\":\"Flight from the Thalmor\",\"description\":\"Hadrik Oaken-Heart's account of his capture and escape from the Thalmor.\"},{\"category\":[],\"title\":\"Forge, Hammer and Anvil\",\"description\":\"Thorbald the blacksmith's notes on various smithing techniques.\"},{\"category\":[],\"title\":\"Fragment: On Artaeum\",\"author\":\"Taurce il-Anselma\",\"description\":\"A essay about the island of Artaeum, home of the Psijic Order.\"},{\"category\":[],\"title\":\"Frontier, Conquest\",\"description\":\"A brief look at the Atmoran migration and settlement of Tamriel during the Merethic Era.\"},{\"category\":[],\"title\":\"Galerion the Mystic\",\"description\":\"A biography of Galerion the Mystic, former Psijic monk and founder of the Mages Guild.\"},{\"category\":[],\"title\":\"Ghosts in the Storm\",\"description\":\"A trade caravaneer's account of a Falmer ambush a during a snow storm.\"},{\"category\":[],\"title\":\"Glories and Laments\",\"description\":\"Alexandre Hetrard's account of exploring the Ayleid Ruin of Ceyatatar.\"},{\"category\":[],\"title\":\"Great Harbingers\",\"description\":\"A brief synopsis of notable Harbingers who led the Companions.\"},{\"category\":[],\"title\":\"Guide to Better Thieving\",\"description\":\"A short guidebook on various thieving techniques.\"},{\"category\":[],\"title\":\"Hallgerd's Tale\",\"description\":\"A tale about the legendary warrior Hlaalu Pasoroth and his natural affinity towards wearing armor.\"},{\"category\":[],\"title\":\"Hanging Gardens\",\"description\":\"A fragment of a guidebook covering the Hanging Gardens of Wasten Coridale.\"},{\"category\":[],\"title\":\"Harvesting Frostbite Spider Venom\",\"description\":\"A guide about Frostbite Spiders and how to harvest their venom.\"},{\"category\":[],\"title\":\"Heavy Armor Forging\",\"description\":\"A short guide covering how to forge various types of heavy armor.\"},{\"category\":[],\"title\":\"Herbalist's Guide to Skyrim\",\"description\":\"An illustrated guide of various alchemy ingredients found in Skyrim.\"},{\"category\":[],\"title\":\"Herbane's Bestiary: Automatons\",\"description\":\"Herbane's account of his interactions with Dwemer automatons.\"},{\"category\":[],\"title\":\"Herbane's Bestiary: Hagravens\",\"description\":\"Herbane's account of his interactions with Hagravens.\"},{\"category\":[],\"title\":\"Herbane's Bestiary: Ice Wraiths\",\"description\":\"Herbane's account of his interactions with Ice Wraiths.\"},{\"category\":[],\"title\":\"Holdings of Jarl Gjalund\",\"description\":\"An ancient record of the lands under the lordship of Jarl Gjalund.\"},{\"category\":[],\"title\":\"Horker Attacks\",\"description\":\"An account of how a hunter survived a Horker attack.\"},{\"category\":[],\"title\":\"Horror of Castle Xyr\",\"description\":\"A one act play involving House Telvanni.\"},{\"category\":[],\"title\":\"Ice and Chitin\",\"description\":\"A tale about how Chitin armor saved Commander Beatia and her Lieutenant from an army.\"},{\"category\":[],\"title\":\"Immortal Blood\",\"description\":\"A tale of Movarth Piquine and his encounters with a vampire.\"},{\"category\":[],\"title\":\"Imperial Report on Saarthal\",\"description\":\"A report on Saarthal and the elven attack that later became known as the Night of Tears.\"},{\"category\":[],\"title\":\"Incident at Necrom\",\"description\":\"A tale of four mercenaries and their battle with a brood of vampires.\"},{\"category\":[],\"title\":\"Jornibret's Last Dance\",\"description\":\"A lewd song about the Queen of Rimmen and her consort.\"},{\"category\":[],\"title\":\"Killing - Before You're Killed\",\"description\":\"A short guide about various combat strategies.\"},{\"category\":[],\"title\":\"King\",\"description\":\"Part four of the fictional tale surrounding the adventures of Eslaf Erol.\"},{\"category\":[],\"title\":\"King Olaf's Verse\",\"description\":\"The missing verse of a poetic edda written by Svaknir that denounces High King Olaf as a fraud.\"},{\"category\":[],\"title\":\"Kolb and the Dragon\",\"description\":\"A \\\"choose your own adventure\\\" style book about a quest to slay a dragon.\"},{\"category\":[],\"title\":\"Last Scabbard of Akrash\",\"description\":\"A story of a slaver's daughter and her Khajiit lover.\"},{\"category\":[],\"title\":\"Legend of Krately House\",\"description\":\"A play set in the famous haunted Krately House in Cheydinhal.\"},{\"category\":[],\"title\":\"Life of Uriel Septim VII\",\"description\":\"A short biography of Uriel Septim VII.\"},{\"category\":[],\"title\":\"Light Armor Forging\",\"description\":\"A short guide covering how to forge various types of light armor.\"},{\"category\":[],\"title\":\"Liminal Bridges\",\"description\":\"Jargon laden guide to traveling between Mundus and Oblivion using a sigil stone.\"},{\"category\":[],\"title\":\"Lost Legends\",\"description\":\"A collection of folk tales from Skyrim.\"},{\"category\":[],\"title\":\"Lycanthropic Legends of Skyrim\",\"description\":\"A traveler's search for information regarding the legends of werewolves and werebears.\"},{\"category\":[],\"title\":\"Mace Etiquette\",\"description\":\"A short guide about how to wield a mace in combat.\"},{\"category\":[],\"title\":\"Magic from the Sky\",\"description\":\"A treatise covering Ayleid Wells, Welkynd Stones and Varla Stones.\"},{\"category\":[],\"title\":\"Malyn Varen's Grimoire\",\"description\":\"Malyn Varen's notes about corrupting Azura's Star.\"},{\"category\":[],\"title\":\"Mannimarco, King of Worms\",\"description\":\"A biography about Mannimarco, in the style of a poem.\"},{\"category\":[],\"title\":\"Markarth Home Decorating Guide\",\"description\":\"A guide to decorating Vlindrel Hall in Markarth.\"},{\"category\":[],\"title\":\"Mixed Unit Tactics\",\"description\":\"Notes on the strategies used by the Khajiit during the Five Year War.\"},{\"category\":[],\"title\":\"Mysterious Akavir\",\"description\":\"A short guide about the continent and inhabitants of Akavir.\"},{\"category\":[],\"title\":\"Mystery of Talara, Vol. I\",\"description\":\"Part one in a series of books about a fictional Breton princess.\"},{\"category\":[],\"title\":\"Mystery of Talara, Vol. II\",\"description\":\"Part two of the story of Princess Talara.\"},{\"category\":[],\"title\":\"Mystery of Talara, Vol. III\",\"description\":\"Part three of the story of Princess Talara.\"},{\"category\":[],\"title\":\"Mystery of Talara, Vol. IV\",\"description\":\"Part four of the story of Princess Talara.\"},{\"category\":[],\"title\":\"Mystery of Talara, Vol. V\",\"description\":\"Part five of the story of Princess Talara.\"},{\"category\":[],\"title\":\"Mythic Dawn Commentaries 1\",\"description\":\"First in a four part guide for new members of the Mythic Dawn.\"},{\"category\":[],\"title\":\"Mythic Dawn Commentaries 2\",\"description\":\"Second in a four part guide for new members of the Mythic Dawn.\"},{\"category\":[],\"title\":\"Mythic Dawn Commentaries 3\",\"description\":\"Third in a four part guide for new members of the Mythic Dawn.\"},{\"category\":[],\"title\":\"Mythic Dawn Commentaries 4\",\"description\":\"Last book in a four part guide for new members of the Mythic Dawn.\"},{\"category\":[],\"title\":\"N'Gasta! Kvata! Kvakis!\",\"description\":\"An untranslated text written by a Sload necromancer.\"},{\"category\":[],\"title\":\"Nerevar Moon and Star\",\"description\":\"A selection from a series of monographs by various Imperial scholars on Ashlander legends surrounding Nerevar.\"},{\"category\":[],\"title\":\"Night of Tears\",\"description\":\"A study into the Night of Tears and the true motives of the Snow Elves.\"},{\"category\":[],\"title\":\"Night Falls on Sentinel\",\"description\":\"A story about the assassination of King Lhotun's brother.\"},{\"category\":[],\"title\":\"Nightingales: Fact or Fiction?\",\"description\":\"Debating whether or not Nightingales truly exist.\"},{\"category\":[],\"title\":\"Nords Arise!\",\"description\":\"A book glorifying Ulfric Stormcloak and inciting rebellion against the Empire and the Aldmeri Dominion.\"},{\"category\":[],\"title\":\"Nords of Skyrim\",\"description\":\"overview of the Nordic people of Skyrim.\"},{\"category\":[],\"title\":\"Ode To The Tundrastriders\",\"description\":\"A short poem dedicated to the Giant of Skyrim.\"},{\"category\":[],\"title\":\"Of Crossed Daggers\",\"description\":\"A brief history of the city of Riften.\"},{\"category\":[],\"title\":\"Of Fjori and Holgeir\",\"description\":\"A short tale of two star-crossed lovers in ancient Skyrim.\"},{\"category\":[],\"title\":\"Oghma Infinium\",\"description\":\"A powerful Daedric artifact, written by the god-scribe Xarxes using knowledge gifted by Hermaeus Mora.\"},{\"category\":[],\"title\":\"Olaf and the Dragon\",\"description\":\"A historical look at the legend of Olaf One-Eye and Numinex.\"},{\"category\":[],\"title\":\"On Oblivion\",\"author\":\"Morian Zenas\",\"description\":\"A guide to Oblivion and its inhabitants.\"},{\"category\":[],\"title\":\"On Stepping Lightly\",\"description\":\"An adventurer's guide to the ancient Nordic ruins of Skyrim.\"},{\"category\":[],\"title\":\"Opusculus Lamae Bal\",\"description\":\"A tale surrounding the origins of vampirism.\"},{\"category\":[],\"title\":\"Orsinium and the Orcs\",\"description\":\"The story of how Orsinium was won in a duel by Gortwog gro-Nagorm.\"},{\"category\":[],\"title\":\"Palla, Book I\",\"description\":\"Part one of the tale of an infatuated and mistaken magician.\"},{\"category\":[],\"title\":\"Palla, Book II\",\"description\":\"Part two of the tale of an infatuated and mistaken magician.\"},{\"category\":[],\"title\":\"Pension of the Ancestor Moth\",\"description\":\"A summary of the Order of the Ancestor Moth and the duties of its novitiates.\"},{\"category\":[],\"title\":\"Physicalities of Werewolves\",\"description\":\"A scientific study into the anatomy of werewolves and werewolf transformations.\"},{\"category\":[],\"title\":\"Pirate King of the Abecean\",\"description\":\"An ode to the Dremora pirate Velehk Sain.\"},{\"category\":[],\"title\":\"Power of the Elements\",\"description\":\"A mysterious tome, central to learning advanced Destruction spells.\"},{\"category\":[],\"title\":\"Proper Lock Design\",\"description\":\"A guide to making locks, with tips to help make them more difficult for thieves to pick.\"},{\"category\":[],\"title\":\"Purloined Shadows\",\"description\":\"The tale of how a young thief helped Emer Dareloth steal Nocturnal's Cowl.\"},{\"category\":[],\"title\":\"Racial Phylogeny\",\"description\":\"An essay by the Council of Healers of the Imperial University on the races of Tamriel, specifically focusing on interracial reproduction.\"},{\"category\":[],\"title\":\"Reality & Other Falsehoods\",\"description\":\"A brief introduction to Alteration magic.\"},{\"category\":[],\"title\":\"Remanada\",\"description\":\"An ancient, mythological account of events that transpired in the First and Second Eras.\"},{\"category\":[],\"title\":\"Report: Disaster at Ionith\",\"description\":\"An Imperial government document on the events that transpired during the Disaster of Ionith.\"},{\"category\":[],\"title\":\"Response to Bero's Speech\",\"description\":\"An overview of Bero's speech to the Battlemages which received attention in some academic circles.\"},{\"category\":[],\"title\":\"Riften Home Decorating Guide\",\"description\":\"A guide to decorating Honeyside in Riften.\"},{\"category\":[],\"title\":\"Rising Threat, Vol. I\",\"description\":\"Account of Lathenil, an Altmer refugee from Summerset Isle who came to Cyrodiil in the early years of the Fourth Era.\"},{\"category\":[],\"title\":\"Rising Threat, Vol. II\",\"description\":\"Part two of the story of the Altmer refugee.\"},{\"category\":[],\"title\":\"Rising Threat, Vol. III\",\"description\":\"Part three of the story of the Altmer refugee.\"},{\"category\":[],\"title\":\"Rising Threat, Vol. IV\",\"description\":\"Part four of the story of the Altmer refugee.\"},{\"category\":[],\"title\":\"Rislav The Righteous\",\"description\":\"Account of Rislav Larich who was a former King of Skingrad.\"},{\"category\":[],\"title\":\"Ruins of Kemel-Ze\",\"description\":\"A detailed account of an expedition into Dwarven ruins.\"},{\"category\":[],\"title\":\"Rumination on the Elder Scrolls\",\"description\":\"Septimus Signus' seemingly insane ramblings about the Elder Scrolls.\"},{\"category\":[],\"title\":\"Sacred Witness\",\"description\":\"A chronicle surrounding various aspects of the Dark Brotherhood's origin and deities.\"},{\"category\":[],\"title\":\"Scourge of the Gray Quarter\",\"description\":\"Propaganda against the Dark Elves inhabiting the Gray Quarter of Windhelm in the Fourth Era.\"},{\"category\":[],\"title\":\"Shadowmarks\",\"description\":\"A glossary of Thieves Guild Shadowmarks.\"},{\"category\":[],\"title\":\"Shezarr and the Divines\",\"description\":\"A treatise about Shezarr and his relationship to the Divines.\"},{\"category\":[],\"title\":\"Short History of Morrowind\",\"description\":\"Information about the settlements of the Vvardenfell district.\"},{\"category\":[],\"title\":\"Sithis\",\"description\":\"Creation myth involving Sithis and Lorkhan.\"},{\"category\":[],\"title\":\"Skyrim's Rule\",\"description\":\"Brief overview of Skyrim's political makeup.\"},{\"category\":[],\"title\":\"Solitude Home Decorating Guide\",\"description\":\"The decorating guide to Proudspire Manor in Solitude.\"},{\"category\":[],\"title\":\"Song of Hrormir\",\"description\":\"Telling of a man's quest to save his brother and his dealings with Nocturnal.\"},{\"category\":[],\"title\":\"Song of the Alchemists\",\"description\":\"Part five of the Ancient Tales of the Dwemer series.\"},{\"category\":[],\"title\":\"Song of the Askelde Men\",\"description\":\"A traditional Nordic poem about a vengeful ghost.\"},{\"category\":[],\"title\":\"Songs of Skyrim\",\"description\":\"Collection of songs from Skyrim including Ragnar the Red, The Dragonborn Comes and The Age of Oppression.\"},{\"category\":[],\"title\":\"Songs of Skyrim: Revised\",\"description\":\"A revised collection of songs from Skyrim, including Tale of the Tongues.\"},{\"category\":[],\"title\":\"Songs of the Return, Vol. II\",\"description\":\"The story of Yngol and Ylgar's journey to Skyrim.\"},{\"category\":[],\"title\":\"Songs of the Return, Vol. VII\",\"description\":\"Various tales of Ysgramor and his Five Hundred Companions' settlement of Skyrim.\"},{\"category\":[],\"title\":\"Songs of the Return, Vol. XIX\",\"description\":\"The story describing the founding and building of Windhelm.\"},{\"category\":[],\"title\":\"Songs of the Return, Vol. XXIV\",\"description\":\"Tales of certain crews from the Five Hundred Companions who explored other provinces in Tamriel.\"},{\"category\":[],\"title\":\"Songs of the Return, Vol. LVI\",\"description\":\"The crews were slowly informed of Ysgramor's passing, and so ended the period of the Return.\"},{\"category\":[],\"title\":\"Souls, Black and White\",\"description\":\"Basics on black and white soul gems.\"},{\"category\":[],\"title\":\"Sovngarde, a Reexamination\",\"description\":\"Speculative article on how to reach the Nordish afterlife Sovngarde.\"},{\"category\":[],\"title\":\"Spirit of Nirn\",\"description\":\"Short text on differing cultural views of Lorkhan.\"},{\"category\":[],\"title\":\"Spirit of the Daedra\",\"description\":\"Informative view into the nature of the Daedra.\"},{\"category\":[],\"title\":\"Surfeit of Thieves\",\"description\":\"Two thieves planned robbery of a secluded castle doesn't go to plan when they are forced to become guests for dinner.\"},{\"category\":[],\"title\":\"The Adabal-a\",\"description\":\"Morihaus' writings from the early First Era.\"},{\"category\":[],\"title\":\"The Aetherium Wars\",\"description\":\"A theory detailing the cause of the Dwemer's downfall in Skyrim.\"},{\"category\":[],\"title\":\"The Alduin-Akatosh Dichotomy\",\"description\":\"Relationship between Alduin and Akatosh.\"},{\"category\":[],\"title\":\"The Amulet of Kings\",\"description\":\"Chronicle of the covenant between Akatosh and Alessia.\"},{\"category\":[],\"title\":\"The Apprentice's Assistant\",\"description\":\"A guidebook for novice spellcasters.\"},{\"category\":[],\"title\":\"The Arcturian Heresy\",\"description\":\"A controversial historical account surrounding Tiber Septim, King Wulfharth and the Underking.\"},{\"category\":[],\"title\":\"The Armorer's Challenge\",\"description\":\"An account of a contest between blacksmiths, decided ultimately by the suitability of their products for use in a given environment.\"},{\"category\":[],\"title\":\"The Art of War Magic\",\"description\":\"A guide to the arcane arts of war magic written by Zurin Arctus with commentary from notable mages as well.\"},{\"category\":[],\"title\":\"The Battle of Red Mountain\",\"description\":\"Vivec's account of the Battle of Red Mountain, addressed to a Dissident Priest.\"},{\"category\":[],\"title\":\"The Bear of Markarth\",\"description\":\"An Imperial book concerning Ulfric Stormcloak's role in quelling the Forsworn uprising in The Reach.\"},{\"category\":[],\"title\":\"The Beginner's Guide to Homesteading HF\",\"description\":\"A step-by-step instruction book explaining the process of constructing a house.\"},{\"category\":[],\"title\":\"The Black Arrow, v1\",\"description\":\"Part one of a tale by Gorgic Guine, footman who became a bard, detailing some of his experiences before and during his time as a servant of the Duchess of Woda.\"},{\"category\":[],\"title\":\"The Black Arrow, v2\",\"description\":\"Part two of a tale by Gorgic Guine, footman who became a bard, detailing some of his experiences during and after his time as a servant of the Duchess of Woda.\"},{\"category\":[],\"title\":\"The Black Arts On Trial\",\"description\":\"Hannibal Traven's arguments for and against the study of necromancy in the Mages' Guild.\"},{\"category\":[],\"title\":\"The Book of Daedra\",\"description\":\"A description of the different Daedra that rule the planes of Oblivion.\"},{\"category\":[],\"title\":\"The Book of Fate\",\"description\":\"A book with empty pages, pages that are said to contain the reader's fate.\"},{\"category\":[],\"title\":\"The Book of the Dragonborn\",\"description\":\"A book describing the Dragonborn in history as well as an analysis of the Prophecy of the Dragonborn.\"},{\"category\":[],\"title\":\"The Buying Game\",\"description\":\"A book encouraging haggling, and giving guidelines on how the activity is practiced in Elsweyr.\"},{\"category\":[],\"title\":\"The Cabin in the Woods\",\"description\":\"A poorly written tale of a soldier's haunting experiences in his travels through a forest.\"},{\"category\":[],\"title\":\"The Cake and the Diamond\",\"description\":\"Tale of Aelle Chriditte, a Breton Alchemist who outwits a Dunmer and his friends, and absconds with a diamond.\"},{\"category\":[],\"title\":\"The City of Stone\",\"description\":\"A mercenary's guide to the city of Markarth.\"},{\"category\":[],\"title\":\"The Code of Malacath\",\"description\":\"A book about the Orsimer race.\"},{\"category\":[],\"title\":\"The Doors of Oblivion\",\"description\":\"A book describing the travels of Morian Zenas through the different realms of Oblivion, written by his apprentice, Seif-ij Hidja.\"},{\"category\":[],\"title\":\"The Dowry\",\"description\":\"Part ten of the Ancient Tales of the Dwemer series.\"},{\"category\":[],\"title\":\"The Dragon Break\",\"description\":\"Describes the dating errors found in Encyclopedia Tamrielica and how this fueled superstitious beliefs surrounding a Dragon Break.\"},{\"category\":[],\"title\":\"The Dragon War\",\"description\":\"A book speaking of the events leading up to the Dragon War, and briefly the war itself and the results of the war.\"},{\"category\":[],\"title\":\"The Dreamstride\",\"description\":\"A tome describing and explaining the mysterious alchemists of Vaermina.\"},{\"category\":[],\"title\":\"The Exodus\",\"description\":\"A vague tale of a disease-stricken child, desperate parents, and necromancy at Olenveld.\"},{\"category\":[],\"title\":\"The Falmer: A Study\",\"description\":\"A treatise on the degeneration of the Snow Elves into the Falmer.\"},{\"category\":[],\"title\":\"The Firmament\",\"description\":\"A short text listing and describing the constellations of Aurbis.\"},{\"category\":[],\"title\":\"The Firsthold Revolt\",\"description\":\"A book detailing the events of a large revolution regarding the city of Firsthold.\"},{\"category\":[],\"title\":\"The Four Totems of Volskygge\",\"description\":\"A riddle designed to help open a puzzle door in the ancient ruin Volskygge.\"},{\"category\":[],\"title\":\"The Gold Ribbon of Merit\",\"description\":\"A story of two friends reuniting, and a display of great skill in archery as they compete with one another.\"},{\"category\":[],\"title\":\"The Great War\",\"description\":\"An Imperial Legate's account of the Great War.\"},{\"category\":[],\"title\":\"The Holds of Skyrim\",\"description\":\"A brief overview of the nine Holds in Skyrim, intended for use by Imperial officers stationed in Skyrim.\"},{\"category\":[],\"title\":\"The Hope of the Redoran\",\"description\":\"Details the story of a battle between Andas, the Hope of House Redoran, and his cousin Athyn.\"},{\"category\":[],\"title\":\"The Importance of Where\",\"description\":\"Part three of the Ancient Tales of the Dwemer series.\"},{\"category\":[],\"title\":\"The Knights of the Nine\",\"description\":\"A chronical surrounding the rise and fall of the Knights of the Nine.\"},{\"category\":[],\"title\":\"The Last King of the Ayleids\",\"description\":\"A chronicle of the fall of the Ayleid Empire during the First Era.\"},{\"category\":[],\"title\":\"The Legend of Red Eagle\",\"description\":\"A short biography of Red Eagle, including his uprising in the Reach.\"},{\"category\":[],\"title\":\"The Legendary Sancre Tor\",\"description\":\"Details historical events that occurred at Sancre Tor.\"},{\"category\":[],\"title\":\"The Legendary Scourge\",\"description\":\"Tells of the legend surrounding Scourge, a mace blessed by Malacath and used to battle against the Daedric Lords.\"},{\"category\":[],\"title\":\"The Locked Room\",\"description\":\"A tale about a girl, an infuriated mentor, a room with no windows or anything except a steel door and a crate, and a vampire stored in the crate.\"},{\"category\":[],\"title\":\"The Lunar Lorkhan\",\"description\":\"An outline of the creation-myth which theorises that the two moons of Nirn are remnants of Lorkhan's body.\"},{\"category\":[],\"title\":\"The Lusty Argonian Maid, Vol. I\",\"description\":\"A sexually-themed play featuring a wealthy man and a beautiful Argonian maid.\"},{\"category\":[],\"title\":\"The Lusty Argonian Maid, Vol. II\",\"description\":\"Another scene from the play, but with different sexual themes.\"},{\"category\":[],\"title\":\"The \\\"Madmen\\\" of the Reach\",\"description\":\"A brief Imperial account of the Reachmen and Forsworn's history and motivations.\"},{\"category\":[],\"title\":\"The Marksmanship Lesson\",\"description\":\"A story about a slaver whose son was taught archery by his Bosmer slave.\"},{\"category\":[],\"title\":\"The Mirror\",\"description\":\"A story about the best defensive fighter and his greatest opponent.\"},{\"category\":[],\"title\":\"The Monomyth\",\"description\":\"A book containing the known information on the origins of Mundus and its creators, as well as various world creation myths from multiple cultures.\"},{\"category\":[],\"title\":\"The Night Mother's Truth\",\"description\":\"A book about the Night Mother's true identity.\"},{\"category\":[],\"title\":\"The Nightingales, Vol. I\",\"description\":\"Description of the Nightingales and their role.\"},{\"category\":[],\"title\":\"The Nightingales, Vol. II\",\"description\":\"Description of the Nightingales' history.\"},{\"category\":[],\"title\":\"The Nirnoot Missive\",\"description\":\"Transcript of a speech encouraging the study and preservation of Nirnroot, and theorizing on the causes of its recent changes in appearance and habitat.\"},{\"category\":[],\"title\":\"The Oblivion Crisis\",\"description\":\"An account of the events during the Oblivion Crisis.\"},{\"category\":[],\"title\":\"The Old Ways\",\"description\":\"A text detailing the ways, culture and philosophy of the Psijic Order.\"},{\"category\":[],\"title\":\"The Posting of the Hunt\",\"description\":\"Describes the events, traditions and rules surrounding The Ritual of the Innocent Quarry, also known as the Wild Hunt. While Hircine is never directly mentioned in this book, it is highly suggested that this book details rituals belonging to his realm of Oblivion.\"},{\"category\":[],\"title\":\"The Ransom of Zarek\",\"description\":\"Part one of the Ancient Tales of the Dwemer series.\"},{\"category\":[],\"title\":\"The Real Barenziah, Book I\",\"description\":\"A large text describing a young Symmachus and how the death of his mother occurred. Also describes Barenziah's traumatic childhood, and the story of Straw the Nord.\"},{\"category\":[],\"title\":\"The Real Barenziah, Book II\",\"description\":\"Tells the story of Barenziah's rise and eventual fall while working for the Thieves Guild, and how she was captured by Symmachus. The fates of Straw, Therris and Katisha are revealed here and Barenziah is officially made the Queen of Mournhold.\"},{\"category\":[],\"title\":\"The Real Barenziah, Book III\",\"description\":\"Barenziah arrives in the Imperial City, meeting Tiber Septim himself. The book then details the affair between them, with Barenziah falling pregnant as a result. Tiber Septim orders that an abortion be performed on her, and she is soon sent childless to Mournhold.\"},{\"category\":[],\"title\":\"The Real Barenziah, Book IV\",\"description\":\"Barenziah arrives in Mournhold and eventually marries Symmachus and bears children with him. The book also details the appearance of Drayven Indoril, with whom she has a brief affair with and results in the Staff of Chaos being stolen.\"},{\"category\":[],\"title\":\"The Real Barenziah, Book V\",\"description\":\"Due to strained relations between Morrowind and the Empire, Barenziah travels to the Imperial City to speak with the Emperor, during which she gains an inkling of suspicious towards his true identity, and eventually proof. Her husband is later killed, and she has a liaison with the Nightingale, but soon flees the Imperial City for Wayrest and marries King Eadwyre to live a more peaceful, pleasant life.\"},{\"category\":[],\"title\":\"The Rear Guard\",\"description\":\"Tells the tale of a Bosmer mercenary, Menegur, who single-handedly defended the Cascabel Castle while facing starvation and through great wit, becomes the new count of the castle. Also gives a high level of detail on usage of Netch Leather Armor.\"},{\"category\":[],\"title\":\"The Red Book of Riddles\",\"description\":\"A book filled with several riddles.\"},{\"category\":[],\"title\":\"The Red Kitchen Reader\",\"description\":\"Describes how not only meal preparation is important for enjoying good food, but also details how experiences, settings and context all play a large role in the enjoyment of food as well.\"},{\"category\":[],\"title\":\"The Refugees\",\"description\":\"A story of people fleeing the Camoran Usurper's conquest; his mistress and son are mentioned in the story as well.\"},{\"category\":[],\"title\":\"The Rise and Fall of the Blades\",\"description\":\"Detailed historical account of the Blades.\"},{\"category\":[],\"title\":\"The Secrets of Ragnvald\",\"description\":\"A poem about Ragnvald.\"},{\"category\":[],\"title\":\"The Seed\",\"description\":\"Part two of the Ancient Tales of the Dwemer series.\"},{\"category\":[],\"title\":\"The Song of Pelinal, Book I\",\"description\":\"The first in the Song of Pelinal series, this book introduces Pelinal Whitestrake to the reader.\"},{\"category\":[],\"title\":\"The Song of Pelinal, Book II\",\"description\":\"The second edition of the Song of Pelinal series, this book describes how Alessia prayed to the Akatosh to aid her in her struggle.\"},{\"category\":[],\"title\":\"The Song of Pelinal, Book III\",\"description\":\"The third edition of the Song of Pelinal series, this book describes Pelinal's conquest of the Ayleid slavemasters and introduces the Ayleid's \\\"half-Elf\\\" champion, Umaril the Unfeathered.\"},{\"category\":[],\"title\":\"The Song of Pelinal, Book IV\",\"description\":\"The fourth edition of the Song of Pelinal series, this book describes the liberation of the Cyrodiilic population from their Ayleid overlords.\"},{\"category\":[],\"title\":\"The Song of Pelinal, Book V\",\"description\":\"The fifth edition of the Song of Pelinal series, this book describes Pelinal's relationship with Morihaus, while also describing Morihaus' relationship with Alessia.\"},{\"category\":[],\"title\":\"The Song of Pelinal, Book VI\",\"description\":\"The sixth edition of the Song of Pelinal series, this book describes the origins of Pelinal Whitestrake.\"},{\"category\":[],\"title\":\"The Song of Pelinal, Book VII\",\"description\":\"The seventh edition of the Song of Pelinal series, this book describes Pelinal's death at the hands of Umaril and the Elvish kings.\"},{\"category\":[],\"title\":\"The Song of Pelinal, Book VIII\",\"description\":\"The eight and last edition of the Song of Pelinal series, this book describes the liberation of Man in Cyrodiil, and Pelinal's last words to Alessia.\"},{\"category\":[],\"title\":\"The Tale of Dro'Zina\",\"description\":\"An account of a Khajiiti tale as told by a father to his cub while under the influence of Moon Sugar.\"},{\"category\":[],\"title\":\"The Talos Mistake\",\"description\":\"An Imperial treatise on the \\\"mistake\\\" of allowing the worship of Talos in the Empire. Heavily slanted toward the view of the Thalmor.\"},{\"category\":[],\"title\":\"The Third Door\",\"description\":\"A poem about a jealous and heartbroken, axe-wielding woman called Ellabeth.\"},{\"category\":[],\"title\":\"The Third Era Timeline\",\"description\":\"A timeline of the Third Era.\"},{\"category\":[],\"title\":\"The Totems of Hircine\",\"description\":\"A book about the four totems of Hircine.\"},{\"category\":[],\"title\":\"The True Nature of Orcs\",\"description\":\"A look into the culture and origin of the Orsimer race.\"},{\"category\":[],\"title\":\"The Warrior's Charge\",\"description\":\"An old Redguard poem.\"},{\"category\":[],\"title\":\"The Waters of Oblivion\",\"description\":\"A book describing the origins of Oblivion and the Daedra.\"},{\"category\":[],\"title\":\"The Wispmother\",\"description\":\"A summary of accounts and legends regarding Wispmothers and Wisps.\"},{\"category\":[],\"title\":\"The Wolf Queen, Book I\",\"description\":\"An epic series concerning the tale of the infamous Queen Potema of Solitude.\"},{\"category\":[],\"title\":\"The Wolf Queen, Book II\",\"description\":\"A continuation of Potema's tale.\"},{\"category\":[],\"title\":\"The Wolf Queen, Book III\",\"description\":\"A continuation of Potema's tale.\"},{\"category\":[],\"title\":\"The Wolf Queen, Book IV\",\"description\":\"A continuation of Potema's tale.\"},{\"category\":[],\"title\":\"The Wolf Queen, Book V\",\"description\":\"A continuation of Potema's tale.\"},{\"category\":[],\"title\":\"The Wolf Queen, Book VI\",\"description\":\"A continuation of Potema's tale.\"},{\"category\":[],\"title\":\"The Wolf Queen, Book VII\",\"description\":\"A continuation of Potema's tale.\"},{\"category\":[],\"title\":\"The Wolf Queen, Book VIII\",\"description\":\"A continuation of Potema's tale.\"},{\"category\":[],\"title\":\"The Woodcutter's Wife\",\"description\":\"A grim tale of a lone family in a cabin.\"},{\"category\":[],\"title\":\"There Be Dragons\",\"description\":\"A book describing Dragons, their presence on Tamriel and their disappearance.\"},{\"category\":[],\"title\":\"Thief\",\"description\":\"Part two of the fictional tale surrounding the adventures of Eslaf Erol.\"},{\"category\":[],\"title\":\"Thief of Virtue\",\"description\":\"Ravius Terinus, a short story of a Master thief.\"},{\"category\":[],\"title\":\"Treatise on Ayleidic Cities\",\"description\":\"A book describing the construction of Varsa Baalim, and its connection to Mehrunes Razor.\"},{\"category\":[],\"title\":\"Three Thieves\",\"description\":\"A tale of three thieves and an ill-fated heist.\"},{\"category\":[],\"title\":\"Trials of St. Alessia\",\"description\":\"A book describing Akatosh's gift to St. Alessia.\"},{\"category\":[],\"title\":\"Troll Slaying\",\"description\":\"A guidebook describing how to deal with Trolls.\"},{\"category\":[],\"title\":\"Twin Secrets\",\"description\":\"A master enchanter's encounter with a Dragon in Morrowind.\"},{\"category\":[],\"title\":\"Ulfr's Book\",\"description\":\"An apparently empty book found in front of Ulfr the Blind.\"},{\"category\":[],\"title\":\"Uncommon Taste\",\"description\":\"A recipe book written by the famous Gourmet.\"},{\"category\":[],\"title\":\"Uncommon Taste - Signed\",\"description\":\"A recipe book written and signed by the famous Gourmet.\"},{\"category\":[],\"title\":\"Varieties of Daedra\",\"description\":\"An analysis of the different varieties of Daedra and Daedric beings.\"},{\"category\":[],\"title\":\"Vernaccus and Bourlor\",\"description\":\"The tale of a Daedra and a hero, and how they were both forgotten.\"},{\"category\":[],\"title\":\"Walking the World, Vol. XI\",\"description\":\"A traveler's guide to Solitude in the Fourth Era.\"},{\"category\":[],\"title\":\"War of the First Council\",\"description\":\"Religious conflict between the secular Dunmer Houses Dwemer and House Dagoth and the orthodox Dunmer Houses Indoril, Redoran, Dres, Hlaalu, and Telvanni.\"},{\"category\":[],\"title\":\"Warrior\",\"description\":\"Part three of the fictional tale surrounding the adventures of Eslaf Erol.\"},{\"category\":[],\"title\":\"Watcher Of Stones\",\"description\":\"A guide to the standing stones\"},{\"category\":[],\"title\":\"Whiterun Home Decorating Guide\",\"description\":\"A guide for decorating one's home in Whiterun.\"},{\"category\":[],\"title\":\"Withershins\",\"description\":\"A tale about a man's illness and his cure.\"},{\"category\":[],\"title\":\"Windhelm Home Decorating Guide\",\"description\":\"A guide for decorating one's home in Windhelm.\"},{\"category\":[],\"title\":\"Words and Philosophy\",\"description\":\"An interview with Allena Benoch.\"},{\"category\":[],\"title\":\"Words of Clan Mother Ahnissi\",\"description\":\"A Khajiit creation myth.\"},{\"category\":[],\"title\":\"Wraith's Wedding Dowry\",\"description\":\"The story of an Orc reclaiming her wedding gift from thieves.\"},{\"category\":[],\"title\":\"Yellow Book of Riddles\",\"description\":\"A collection of humorous riddles.\"},{\"category\":[],\"title\":\"Yngol And The Sea-Ghosts\",\"description\":\"A tale of Ysgramor's crossing to Skyrim and the events following the death of his son, Yngol.\"}]}");

/***/ }),

/***/ "dbf9":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Dwarfsphere.esp\"],\"books\":[{\"title\":\"Places to Explore\",\"category\":[]},{\"title\":\"List of Necessary\",\"category\":[]},{\"title\":\"King Edward, Part II\",\"category\":[]},{\"title\":\"King Edward, Part III\",\"category\":[]},{\"title\":\"King Edward, Part IV\",\"category\":[]},{\"title\":\"King Edward, Part V\",\"category\":[]},{\"title\":\"King Edward, Part VI\",\"category\":[]},{\"title\":\"King Edward, Part VII\",\"category\":[]},{\"title\":\"King Edward, Part VIII\",\"category\":[]},{\"title\":\"King Edward, Part IX\",\"category\":[]},{\"title\":\"King Edward, Part X\",\"category\":[]},{\"title\":\"King Edward, Part XI\",\"category\":[]},{\"title\":\"King Edward, Part XII\",\"category\":[]},{\"title\":\"The Legend of Lover's Lament\",\"category\":[]},{\"title\":\"Oelander's Hammer\",\"category\":[]},{\"title\":\"The Sage\",\"category\":[]},{\"title\":\"Snow elf and the Variations-Lens\",\"category\":[]},{\"title\":\"Secret Dwemer Origins\",\"category\":[]},{\"title\":\"Kagrenac's Tools\",\"category\":[]},{\"title\":\"The Fall of the Usurper\",\"category\":[]},{\"title\":\"Banker's Bet\",\"category\":[]},{\"title\":\"The Homilies of Blessed Almalexia\",\"category\":[]},{\"title\":\"Holidays of the Iliac Bay\",\"category\":[]},{\"title\":\"The Light and the Dark\",\"category\":[]},{\"title\":\"Mara's Tear\",\"category\":[]},{\"title\":\"A Dubious Tale of the Crystal Tower\",\"category\":[]},{\"title\":\"Cheeses of Tamriel\",\"category\":[]},{\"title\":\"A Scholar's Guide to Nymphs\",\"category\":[]},{\"title\":\"The Epic of the Grey Falcon\",\"category\":[]},{\"title\":\"About Tonal Architecture\",\"category\":[]},{\"title\":\"The History of Steam\",\"category\":[]},{\"title\":\"The Transliteration of Dwemeris\",\"category\":[]},{\"title\":\"Ius, Animal God\",\"category\":[]},{\"title\":\"The Asylum Ball\",\"category\":[]},{\"title\":\"Fellowship of the Temple\",\"category\":[]},{\"title\":\"Sadrith Kegran, Guilds and Factions\",\"category\":[]},{\"title\":\"Sadrith Kegran, A Brief History Part IV\",\"category\":[]},{\"title\":\"Sadrith Kegran, A Brief History Part III\",\"category\":[]},{\"title\":\"Sadrith Kegran, A Brief History Part II\",\"category\":[]},{\"title\":\"ABCs for Barbarians\",\"category\":[]},{\"title\":\"Great Houses of Morrowind\",\"category\":[]},{\"title\":\"The Arrowshot Woman\",\"category\":[]},{\"title\":\"A History of Daggerfall\",\"category\":[]},{\"title\":\"The Story of Lyrisius\",\"category\":[]},{\"title\":\"Jorunn the Skald-King\",\"category\":[]},{\"title\":\"Activation Manual for the Control Cube\",\"category\":[]},{\"title\":\"King Edward, Part I\",\"category\":[]},{\"title\":\"Sadrith Kegran, A Brief History Part I\",\"category\":[]},{\"title\":\"Orc Creation Story\",\"category\":[]}]}");

/***/ }),

/***/ "dc09":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://simpsonswiki.com/\"],\"books\":[{\"title\":\"How To Cook For Forty Humans And Then Eat Them\",\"category\":[\"Cookbook\"]},{\"title\":\"The 10 Dos and 500 Don'ts of Knife Safety\",\"category\":[]},{\"title\":\"The 13 Clocks\",\"author\":\"James Thurber\",\"category\":[\"Story\"]},{\"title\":\"A Brief History of Thyme: The Intersection of Science and Vegetarianism\",\"category\":[]},{\"title\":\"The Adventures of Huckleberry Fang\",\"category\":[\"Story\"]},{\"title\":\"Adventures in Baby Drinking\",\"category\":[]},{\"title\":\"The Age of Incense\",\"category\":[]},{\"title\":\"Angelica Button Again With The Unicorns\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Chalice of Consequence\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Deadly Denouncement\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Dragon King's Trundle Bed\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Ending Where She Dies But Doesn't\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Half-Blood Pudding\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Infinite Armoire\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Marmalade of Destiny\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Mystery of Secrets\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Scone of Destiny\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"Angelica Button and the Teacup of Terror\",\"author\":\"T. R. Francis\",\"category\":[\"Story\"]},{\"title\":\"The Bartender's Bible\",\"author\":\"Dr. Swig McJigger\",\"category\":[]},{\"title\":\"Frankincense and Sensibility\",\"category\":[]},{\"title\":\"The Core: Mistress of Death\",\"category\":[]}]}");

/***/ }),

/***/ "e06b":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://oldschoolrunescape.fandom.com/wiki/List_of_books\"],\"books\":[{\"title\":\"Ablenkian's escape\",\"author\":\"Ablenkian\",\"category\":[\"History\"]},{\"title\":\"The Sleeping Seven\",\"category\":[\"Story\"]},{\"title\":\"Arachnids of Vampyrium\",\"category\":[\"Story\"]},{\"title\":\"The Tale of Scorpius\",\"category\":[\"Story\"]},{\"title\":\"The Ballad of Jareesh\",\"category\":[\"Poem\"]},{\"title\":\"Histories of Hallowland\",\"category\":[\"History\"]},{\"title\":\"Big Book o' Bangs\",\"author\":\"Mel Achy\",\"category\":[]},{\"title\":\"William Oddity's Guide to the Avian\",\"author\":\"William Oddity\",\"category\":[]},{\"title\":\"The Myth of the Elder-dragons\",\"category\":[\"Myth\"]},{\"title\":\"The Origins of the Bird of Evil\",\"category\":[\"Myth\"]},{\"title\":\"The Little Book o' Piracy\",\"category\":[]},{\"title\":\"Turnip Growing for Beginners\",\"category\":[\"Self Help\"]},{\"title\":\"Speech of King Byrne I\",\"category\":[]},{\"title\":\"The Cadarn Lineage\",\"category\":[]},{\"title\":\"Clockwork Toys - A Clockwork Mechanism, Chapter 1.0\",\"category\":[]},{\"title\":\"The Blurberry Cocktail Guide\",\"category\":[\"Self Help\"]},{\"title\":\"Legend of the Brothers\",\"category\":[\"Myth\"]},{\"title\":\"Crystal Singing for Beginners\",\"category\":[\"Self Help\"]},{\"title\":\"The Fall of the Dagon'hai\",\"category\":[\"History\"]},{\"title\":\"The Arzinian Being of Bordanzan\",\"category\":[\"History\"]},{\"title\":\"Exploration of the Eastern Realm\",\"category\":[\"History\"]},{\"title\":\"Settlement of the East\",\"category\":[\"History\"]},{\"title\":\"The Little Book of Embalming\",\"author\":\"Bod E. Wrapper\",\"category\":[]},{\"title\":\"Memoirs of a Dwarven Explorer\",\"author\":\"Nestor Peregrine\",\"category\":[]},{\"title\":\"Farmer Gricoller's Farming Manual\",\"author\":\"Farmer Gricoller\",\"category\":[]},{\"title\":\"Ultimate Guide to Glassblowing\",\"author\":\"Fritz the Glassblower\",\"category\":[]},{\"title\":\"A History of the Goblin Race\",\"category\":[\"Scholarly\",\"History\",\"Biology\"]},{\"title\":\"The Great Divide\",\"category\":[]},{\"title\":\"Dionysius: A Legend in His Own Lifetime\",\"author\":\"Herman Caranos\",\"category\":[\"History\"]},{\"title\":\"The Tale of Iban\",\"author\":\"Kardia\",\"category\":[\"Story\"]},{\"title\":\"The Ideology of Darkness\",\"author\":\"Philophaire\",\"category\":[]},{\"title\":\"Dwarf Multicannon Manual\",\"category\":[]},{\"title\":\"The Fall of Imcandoria\",\"author\":\"Highseer Gulbrand\",\"category\":[]},{\"title\":\"Lutwidge and the Moonfly\",\"author\":\"Shudersque\",\"category\":[]},{\"title\":\"Prayer of Deliverance from Poisons\",\"category\":[]},{\"title\":\"The Creation of Prifddinas\",\"category\":[]},{\"title\":\"Census of King Rada III\",\"author\":\"Matthias Vorseth\",\"category\":[]},{\"title\":\"The Tale of Serafina\",\"author\":\"James Locke\",\"category\":[]},{\"title\":\"The Shadow Realm\",\"category\":[]},{\"title\":\"The Journey of Souls\",\"author\":\"Aretha\",\"category\":[]},{\"title\":\"Gnome-Common Translation Dictionary \",\"category\":[\"Self Help\"]},{\"title\":\"The Theory of Transvergence\",\"author\":\"Amon Ducot\",\"category\":[]},{\"title\":\"The Treachery of Royalty\",\"author\":\"Professor Answith\",\"category\":[]},{\"title\":\"The Tragedy of Tristessa\",\"category\":[]},{\"title\":\"The Royal Accord of Twill\",\"category\":[]},{\"title\":\"The Envoy to Varlamore\",\"author\":\"Deryk Paulson\",\"category\":[]},{\"title\":\"Judgement of the Vanguard\",\"category\":[]},{\"title\":\"The Weeping\",\"author\":\"Herbert Dunwich\",\"category\":[]},{\"title\":\"The Wild Hunt\",\"author\":\"Lord Drakan\",\"category\":[]},{\"title\":\"The Parable of the Wintertodt\",\"category\":[]}]}");

/***/ }),

/***/ "e2c1":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"DarkBrotherhoodChronicles.esp\"],\"books\":[{\"title\":\"Fi'Nestre's Book of Traps (Very Nice)\",\"category\":[]},{\"title\":\"The Food Trap\",\"category\":[]},{\"title\":\"The Art of Hiding Objects\",\"category\":[]},{\"title\":\"The Chronicles - Volume One\",\"category\":[]},{\"title\":\"The Chronicles - Volume Two\",\"category\":[]},{\"title\":\"The Chronicles - Volume Three\",\"category\":[]},{\"title\":\"The Chronicles - Volume Four\",\"category\":[]},{\"title\":\"The Chronicles - Volume Five\",\"category\":[]},{\"title\":\"The Chronicles - Volume Six\",\"category\":[]},{\"title\":\"The Chronicles - Volume Seven\",\"category\":[]},{\"title\":\"An Empty Volume\",\"category\":[]},{\"title\":\"Anvil's Mysterious Disappearances!\",\"category\":[]},{\"title\":\"How to Make Skooma\",\"category\":[]},{\"title\":\"Confessions of a Skooma-Eater\",\"category\":[]}]}");

/***/ }),

/***/ "e391":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"ForgottenCity.esp\"],\"books\":[{\"title\":\"Brandas' Will\",\"category\":[]},{\"title\":\"Jeshol's Prayer\",\"category\":[]},{\"title\":\"The Myth of the Dwarves' Law\",\"category\":[]}]}");

/***/ }),

/***/ "e703":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Satin And Hot Oil 2.esp\"],\"books\":[{\"title\":\"Satin And Hot Oil, Vol. II\",\"category\":[]}]}");

/***/ }),

/***/ "effb":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"Malevolent.esp\"],\"books\":[{\"title\":\"The Book of a Thousand Curses\",\"category\":[]},{\"title\":\"A Disturbing Poem\",\"category\":[]},{\"title\":\"The Butcher of Armindale\",\"category\":[]},{\"title\":\"Blank Book 1\",\"category\":[]},{\"title\":\"Directions to the Pellew Crypt\",\"category\":[]}]}");

/***/ }),

/***/ "f1c7":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://www.reddit.com/r/DnDBehindTheScreen/comments/aoiwvq/need_help_stocking_a_library_list_of_all/\"],\"books\":[{\"title\":\"The Underworld Cookbook\",\"author\":\"Asmoranomardicadaistinaculdacar\",\"source\":[\"MTG: Lightning Axe\",\"MTG: Granite Gargoyle\",\"MTG: Saute\"],\"description\":\"A gargoyle's meat can be carved with an ordinary cleaver, but for its petrous hide . . .\\r\\nWhile most overworlders fortunately don't realize this, gargoyles can be most delicious, providing you have the appropriate tools to carve them.\\r\\nSelecting the proper beeble is the key to a good sauté. The pinker the fur and the heartier the yelp, the more succulent the beeble will be when you pop it in your mouth.\",\"category\":[\"Cookbook\"]},{\"title\":\"Battle of Akagi River: A Survivor's Tale\",\"source\":[\"MTG: Soul of Magma\",\"MTG: Strength of Cedars\",\"MTG: Call to Glory\"],\"category\":[\"History\"],\"description\":\"In every other mind, the battle was lost. General Takeno alone was not touched by despair. Drawing his blade, he was attack and rallying cry in one.\\r\\nNo sooner had the beast collapsed under the blows of Takeno's sword than the earth rippled and the creature rose again to face him.\\r\\nGeneral Takeno glared at us as if we were the enemy. ‘The day is not over yet,' he shouted, ‘and unless you have a nezumi's heart, you will stand and fight\"},{\"title\":\"Chronicles of the Quarum Plaines\",\"author\":\"Sorgus\",\"category\":[\"History\"],\"source\":[\"MTG: Quarum Trench Gnomes\"],\"description\":\"O Great Captain, all is lost. They tunneled, they burrowed, they trenched. They sapped the strength of our defenses.\"},{\"title\":\"Great Battles of Kamigawa\",\"category\":[\"History\"],\"source\":[\"MTG: Befoul\",\"MTG: Eiganjo Free-Riders\",\"MTG: Final Judgement\",\"MTG: Glitterfang\",\"MTG: Gnarled Mass\",\"MTG: Ire of Kaminari\",\"MTG: Kami of the Waning Moon\",\"MTG: Rend Flesh\",\"MTG: Rend Spirit\",\"MTG: Time of Need\"]},{\"title\":\"Havenwood Remembered\",\"author\":\"Kyliki of Havenwood\",\"source\":[\"MTG: Homarid Shaman\"],\"category\":[\"History\"]},{\"title\":\"History of the Goblin Wars\",\"author\":\"Tivadar of Thorn\",\"source\":[\"MTG: Knights of Thorn\",\"MTG: Morale\"],\"category\":[\"History\"]},{\"title\":\"Kjeldor: Ice Civilization\",\"category\":[\"History\"],\"source\":[\"MTG: Balduvian Barbarians\",\"MTG: Darien, King of Kjeldor\",\"MTG: Scaled Wurm\"]},{\"title\":\"Observations of the Kami War\",\"category\":[\"History\"],\"source\":[\"MTG: Aether Shockwave\",\"MTG: Akki Underminer\",\"MTG: Blood Rites\",\"MTG: Crack the Earth\",\"MTG: Field of Reality\",\"MTG: In the Web of War\",\"MTG: Kabuto Moth\",\"MTG: Kumano's Pupils\",\"MTG: Psychic Spear\",\"MTG: Pull Under\",\"MTG: Thoughtbind\",\"MTG: Three Tradegies\",\"MTG: Toils of Night and Day\",\"MTG: Villainous Ogre\",\"MTG: Walking Nightmare\"]},{\"title\":\"Sarpadian Empires, Vol. I\",\"category\":[\"History\"],\"source\":[\"MTG: Aeolipile\",\"MTG: Balm of Restoration\",\"MTG: Dwarven Soldier\",\"MTG: Feral Thallid\",\"MTG: Orcish Spy\",\"MTG: Order of Leitbur\"]},{\"title\":\"Sarpadian Empires, Vol. II\",\"category\":[\"History\"],\"source\":[\"MTG: Basal Thrull\",\"MTG: Derelor\",\"MTG: Hymn to Tourach a\",\"MTG: Hymn to Tourach c\",\"MTG: Initiates of the Ebon Hand\",\"MTG: Thrull Retainer\",\"MTG: Thrull Wizard\"]},{\"title\":\"Sarpadian Empires, Vol. III\",\"category\":[\"History\"],\"source\":[\"MTG: Elven Fortress\",\"MTG: Elvish Hunter\",\"MTG: Fungal Bloom\",\"MTG: Night Soil\",\"MTG: Sporecrown Thallid\",\"MTG: Thelonite Monk\",\"MTG: Thorn Thallid\",\"MTG: Yavimaya Sapherd\"]},{\"title\":\"Sarpadian Empires, Vol. IV\",\"category\":[\"History\"],\"source\":[\"MTG: Brassclaw Orcs\",\"MTG: Dwarven Armorer\",\"MTG: Dwarven Catapult\",\"MTG: Dwarven Lieutenant\",\"MTG: Empty the Warrens\",\"MTG: Goblin Grenade\",\"MTG: Goblin War Drums\",\"MTG: Goblin Warrens\"],\"description\":\"Brassclaws were typical Orcs—quick to laud their own prowess in battle, quick to jeer at their opponents, and quicker still to run away when things started to look slightly dangerous.\\r\\nThe few remaining pieces from this period suggest the Dwarves eventually made weapons and armor out of everything, even children's toys.\\r\\nOften greatly outnumbered in battle, dwarves relied on catapults as one means of damaging a large army.\\r\\nDwarven officers were tireless in battle, moving up and down the lines to rally their troops and boost morale.\\r\\nThey'd pour out of the warrens to make war (and to make room for the littering matrons).\\r\\nAccording to accepted theory, the grenade held some kind of flammable mixture and was carried to its target by a hapless goblin.\\r\\nThe Goblins' dreaded War Drums struck terror into the hearts of even their bravest foes.\\r\\nGoblins bred underground, their numbers hidden from the enemy until it was too late.\"},{\"title\":\"Sarpadian Empires, Vol. V\",\"category\":[\"History\"],\"source\":[\"MTG: High Tide\",\"MTG: River Merfolk\",\"MTG: Svyekunite Priest\",\"MTG: Vodalian Soldiers\"]},{\"title\":\"Sarpadian Empires, Vol. VI\",\"source\":[\"MTG: Combat Medic\",\"MTG: Icatian Infantry\",\"MTG: Icatian Scout\",\"MTG: Orcish Veteran\",\"MTG: Order of the Ebon Hand\"],\"category\":[\"History\"]},{\"title\":\"The Anvilonian Grimoire\",\"category\":[\"History\"],\"source\":[\"MTG: Adun Oakenshield\"]},{\"title\":\"The Fall of Alsoor\",\"author\":\"Sevti Mukul\",\"source\":[\"Diabolic Machine\"],\"category\":[\"History\"]},{\"title\":\"Diabolic Machine\",\"source\":[\"MTG: Dread Shade\",\"MTG: Woodland Cemetary\",\"MTG: Will - o '-the-Wisp\"],\"category\":[\"History\"]},{\"title\":\"The History of Kamigawa\",\"author\":\"Reki\",\"source\":[\"MTG: Akki Blizzard-Herder\",\"MTG: Cut the Earthly Bond\",\"MTG: Ebony Owl Netsuke\",\"MTG: Hair-String Koto\",\"MTG: Horobi, Death's Wail\",\"MTG: Mannichi, the Fevered Dream\",\"MTG: Mark of the Oni\",\"MTG: Midnight Covenant\",\"MTG: Nezumi Ronin\",\"MTG: Ogre Recluse\",\"MTG: Oathkeeper\",\"MTG: Reki, History of Kamigawa\",\"MTG: Sakura-Tribe Scout\",\"MTG: Scourge of Numai\",\"MTG: Stone Rain\",\"MTG: Threads of Disloyalty\"],\"category\":[\"History\"]},{\"title\":\"A Tale of Auntie Grub\",\"category\":[\"Myth\"],\"source\":[\"MTG: Boggart Sprite - Chaser\",\"MTG: Hornet Harasser\",\"MTG: Tar Pitcher\",\"MTG: Tarfire\"]},{\"title\":\"Chanter's Epics\",\"category\":[\"Myth\"],\"source\":[\"MTG: Joraga Bard\"]},{\"title\":\"Clachan Tales\",\"category\":[\"Myth\"],\"source\":[\"MTG: Battle Mastery\",\"MTG: Forfend\"]},{\"title\":\"Legends of the Firedancer\",\"source\":[\"MTG: Fervent Strike\"],\"category\":[\"Myth\"]},{\"title\":\"Origins of Kholon\",\"author\":\"Glem the Lonebard\",\"category\":[\"Myth\"],\"source\":[\"River of Tears\"]},{\"title\":\"The Book of Kith and Kin\",\"category\":[\"Myth\"],\"source\":[\"MTG: Idyllic Tutor\"]},{\"title\":\"The Book of Other Folk\",\"category\":[\"Myth\"],\"source\":[\"MTG: Flow of Ideas\",\"MTG: Old Ghastbark\",\"MTG: Warren Weirding\"]},{\"title\":\"The Invoker's Tales\",\"category\":[\"Myth\"],\"source\":[\"MTG: Bloodrite Invoker\",\"MTG: Dawnglare Invoker\",\"MTG: Frostwind Invoker\",\"MTG: Lavafume Invoker\",\"MTG: Oran - Rief Invoker\",\"MTG: Velakut Invoker\",\"MTG: Wildheart Invoker\"]},{\"title\":\"The Seer's Parables\",\"category\":[\"Myth\"],\"source\":[\"MTG: Deity of Scars\",\"MTG: Demigod of Revenge\",\"MTG: Deus of Calamity\",\"MTG: Divinity of Pride\",\"MTG: Dominus of Fealty\",\"MTG: Ghastlord of Fugue\",\"MTG: Godhead of Awe\",\"MTG: Nobilis of War\",\"MTG: Overbeing of Myth\",\"MTG: Oversoul of Dusk\"]},{\"title\":\"The Stories of Nature\",\"source\":[\"MTG: Teferi's Realm\"],\"category\":[\"Myth\"]},{\"title\":\"The Tale of Odum and Broadbark\",\"source\":[\"MTG: Indomitable Ancients\"],\"category\":[\"Myth\"]},{\"title\":\"The Theriad\",\"source\":[\"MTG: Borderland Minotaur\",\"MTG: Bronze Sable\",\"MTG: Cyclops of One - Eyed Pass\",\"MTG: Felhide Minotaur\",\"MTG: Great Hart\",\"MTG: Nessian Courser\",\"MTG: Oreskos Swiftclaw\",\"MTG: Pensive Minotaur\",\"MTG: Pheres - Band Centaurs\",\"MTG: Rotted Hulk\",\"MTG: Silent Artisan\",\"MTG: Swordwise Centaur\",\"MTG: Traveling Phillospher\",\"MTG: Triton Shorethief\",\"MTG: Yoked Ox\"],\"category\":[\"Myth\"]},{\"title\":\"The One Thousand Questions\",\"source\":[\"MTG: Soar\",\"MTG: Griffin Canyon\",\"MTG: Rogue Elephant\",\"MTG: Stampede\"],\"category\":[\"Philosophy\"]},{\"title\":\"The Teachings of Zho\",\"category\":[\"Philosophy\"],\"source\":[\"MTG: Mirror Strike\"]},{\"title\":\"Love Song of Night and Day\",\"source\":[\"MTG: Blinding Light\",\"MTG: Chariot of the Sun\",\"MTG: Early Harvest\",\"MTG: Femeref Knight\",\"MTG: Flare\",\"MTG: Kukemssa Pirates\",\"MTG: Mortal Wound\",\"MTG: Panther Warriors\",\"MTG: Remedy\",\"MTG: Sands of Time\",\"MTG: Simoon\",\"MTG: Summer Bloom\",\"MTG: Unfulfilled Desires\",\"MTG: Village Elder\",\"MTG: Wild Elephant\",\"MTG: Zebra Unicorn\",\"MTG: Zhalfirin Knight\"],\"category\":[\"Poem\"]},{\"title\":\"Poem of the Five Trees\",\"category\":[\"Poem\"],\"source\":[\"MTG: Kodama of the North Tree\",\"MTG: Kodama of the South Tree\"]},{\"title\":\"Iron Tusk\",\"author\":\"Femeref Song\",\"category\":[\"Poem\"],\"source\":[\"MTG: Iron Tusk Elephant\"]},{\"title\":\"Song to the Sun\",\"author\":\"Femeref Song\",\"category\":[\"Poem\"],\"source\":[\"MTG: Guiding Spirit\",\"MTG: Sacred Mesa\"]},{\"title\":\"Watchdragon\",\"author\":\"Tobrian\",\"source\":[\"MTG: Spinal Villain\"],\"category\":[\"Poem\"]},{\"title\":\"Codex of the Constellari\",\"source\":[\"MTG: Holy Strength\",\"MTG: Unholy Strength\"],\"category\":[\"Religious\"]},{\"title\":\"Hymn of Angelfire\",\"source\":[\"MTG: Empyrial Armor\"],\"category\":[\"Religious\"]},{\"title\":\"Keld Triumphant\",\"source\":[\"Blessed Wind\",\"Denying Wind\",\"Plague Wind\",\"Searing Wind\",\"Vitalizing Wind\"],\"category\":[\"Religious\"]},{\"title\":\"Oath of Avacyn\",\"category\":[\"Religious\"],\"source\":[\"MTG: Bonds of Faith\"],\"description\":\"What cannot be destroyed will be bound.\"},{\"title\":\"Oath of the Ebon Hand\",\"category\":[\"Religious\"],\"source\":[\"MTG: Initiates of the Ebon Hand\"],\"description\":\"We are no longer Nature's children, but her masters...\"},{\"title\":\"Oath of the East\",\"category\":[\"Religious\"],\"source\":[\"MTG: Eastern Paladin\"],\"description\":\"Their fragile world. Their futile lives. They obstruct the Grand Evolution. In Yawgmoth's name, we shall excise them.\"},{\"title\":\"Oath of the West\",\"category\":[\"Religious\"],\"source\":[\"MTG: Western Paladin\"],\"description\":\"Their weak laws. Their flawed systems. They inhibit the Grand Evolution. In Yawgmoth's name, we shall erase them.\"},{\"title\":\"Rite of Redemption\",\"category\":[\"Religious\"],\"source\":[\"MTG: Mark of the Vampire\"]},{\"title\":\"The Accounting of Hours\",\"category\":[\"Religious\"],\"source\":[\"MTG: Nimble - Blade Khenra\",\"MTG: Dissenter 's Deliverence\",\"MTG: Throne of the God Pharoah\",\"MTG: Winged Shepherd\"]},{\"title\":\"The Book of Tal\",\"category\":[\"Religious\"],\"source\":[\"MTG: Holy Light\",\"MTG: Northern Paladin\",\"MTG: Southern Paladin\"]},{\"title\":\"Writings of Mikaeus\",\"category\":[\"Religious\"],\"source\":[\"MTG: Angel's Tomb\"]},{\"title\":\"Chainer's Torment\",\"category\":[\"Saga\"],\"source\":[\"MTG: Chainer's Torment\",\"MTG: Cast Down\"]},{\"title\":\"Fall of the Thran\",\"category\":[\"Saga\"],\"source\":[\"MTG: Fall of the Thran\",\"MTG: Evra, Halcyon Witness\"]},{\"title\":\"Rite of Belzenlok\",\"category\":[\"Saga\"],\"source\":[\"MTG: Rite of Belzenlok\",\"MTG: Blessing of Belzenlok\",\"MTG: Cabal Paladin\"]},{\"title\":\"Rootwater Saga\",\"category\":[\"Saga\"],\"source\":[\"MTG: Benthic Behemoth\",\"MTG: Cunning\",\"MTG: Rootwater Hunter\",\"MTG: Rootwater Mystic\"]},{\"title\":\"The Antiquities War\",\"category\":[\"Saga\"],\"source\":[\"MTG: The Antiquities War\",\"MTG: Nature's Spiral\"]},{\"title\":\"The Dynasty of Winter Kings\",\"category\":[\"Saga\"],\"source\":[\"MTG: Arctic Flats\",\"MTG: Boreal Shelf\",\"MTG: Frost Marsh\",\"MTG: Highland Weald\",\"MTG: Tresserhorn Sinks\"]},{\"title\":\"The Eldest Reborn\",\"category\":[\"Saga\"],\"source\":[\"MTG: The Eldest Reborn\",\"MTG: Lingering Phantom\"]},{\"title\":\"The First Eruption\",\"category\":[\"Saga\"],\"source\":[\"MTG: The First Eruption\",\"MTG: Seismic Shift\"]},{\"title\":\"The Flame of Keld\",\"category\":[\"Saga\"],\"source\":[\"MTG: The Flame of Keld\",\"MTG: Keldon Warcaller\"]},{\"title\":\"The Mirari Conjecture\",\"category\":[\"Saga\"],\"source\":[\"MTG: The Mirari Conjecture\"]},{\"title\":\"Time of Ice\",\"category\":[\"Saga\"],\"source\":[\"MTG: Time of Ice\",\"MTG: Homarid Explorer\"]},{\"title\":\"Biomancy, Vol. I\",\"author\":\"Momir Vig\",\"category\":[\"Scholarly\"],\"source\":[\"MTG: Biomantic Mastery\"]},{\"title\":\"Camouflage and Its Practical Applications\",\"category\":[\"Scholarly\"],\"source\":[\"MTG: Suspicious Bookcase\"]},{\"title\":\"Cryptohistories\",\"category\":[\"Scholarly\"],\"source\":[\"MTG: Amphin Cutthroat\",\"MTG: Amphin Pathmage\"],\"author\":\"Gor Muldrak\"},{\"title\":\"Necromancer's Handbook\",\"author\":\"Nevinyrral\",\"category\":[\"Scholarly\"],\"source\":[\"MTG: Drudge Skeletons\"]},{\"title\":\"Of Elements and Eternity\",\"author\":\"Jestus Dreya\",\"category\":[\"Scholarly\"],\"source\":[\"MTG: Air Servant\",\"MTG: Earth Servant\",\"MTG: Fire Servant\",\"MTG: Water Servant\"]},{\"title\":\"Ponderings\",\"author\":\"Delif\",\"category\":[\"Scholarly\"],\"source\":[\"MTG: Delif's Cone\"]},{\"title\":\"Principia\",\"author\":\"Barrin\",\"source\":[\"MTG: Back to Basics\"],\"category\":[\"Scholarly\"]},{\"title\":\"Thrulls\",\"author\":\"Endrek Sahr\",\"source\":[\"MTG: Armor Thrull\"],\"category\":[\"Scholarly\"]},{\"title\":\"Tome of Elemental Mastery\",\"source\":[\"MTG: Flowstone Embrace\"],\"category\":[\"Scholarly\"]},{\"title\":\"Vastwood Biodiversity\",\"source\":[\"MTG: Vastwood Gorger\"],\"author\":\"Mulak Ffar\",\"category\":[\"Scholarly\"]},{\"title\":\"Zhalfirin Guide to the Desert\",\"source\":[\"MTG: Viashino Sandstalker\",\"MTG: Viashino Warrior\"],\"category\":[\"Scholarly\"]},{\"title\":\"Glitter Moon\",\"author\":\"Azeworai\",\"source\":[\"MTG: Solfatara\"],\"category\":[\"Story\"],\"description\":\"A burst of hot air tossed the moon into the air, and the moon liked it up there so much it never needed the ground again.\"},{\"title\":\"Kenechi's Dream\",\"author\":\"Azeworai\",\"source\":[\"MTG: Radiant Essense\",\"MTG: Gossamer Chains \"],\"category\":[\"Story\"]},{\"title\":\"Miracles of the Saints\",\"author\":\"Sister Betje\",\"source\":[\"MTG: Malach of the Dawn\",\"MTG: Miracle Worker\"],\"category\":[\"Story\",\"Religious\"]},{\"title\":\"Proper Passage\",\"author\":\"Kamau\",\"source\":[\"MTG: Unseen Walker\"],\"category\":[\"Story\"]},{\"title\":\"The Advokist and the Urchin\",\"source\":[\"MTG: Book Devourer\"],\"category\":[\"Story\"]},{\"title\":\"The Cyclops who Couldn't\",\"source\":[\"MTG: Tar Pit Warrior\"],\"author\":\"Azeworai\",\"category\":[\"Story\"]},{\"title\":\"The Enchantress\",\"source\":[\"MTG: Femeref Enchantress\"],\"author\":\"Femeref Tale\",\"category\":[\"Story\"]},{\"title\":\"The Golem's Wish\",\"author\":\"Azeworai\",\"source\":[\"MTG: Crystal Golem\"],\"category\":[\"Story\"]},{\"title\":\"The Lonely Giant\",\"author\":\"Azeworai\",\"source\":[\"MTG: Cinder Giant\"],\"category\":[\"Story\"]},{\"title\":\"The Treeling\",\"author\":\"Azeworai\",\"source\":[\"MTG: Ironroot Treefolk\"],\"category\":[\"Story\"]},{\"title\":\"The Ugly Bird\",\"author\":\"Azeworai\",\"source\":[\"MTG: Daraja Griffin\",\"MTG: Wake of Vultures\"],\"category\":[\"Story\"]},{\"title\":\"The Unruly Wind\",\"author\":\"Azeworai\",\"source\":[\"MTG: Wind Shear\"],\"category\":[\"Story\"]},{\"title\":\"Three Riddles\",\"author\":\"Azeworai\",\"source\":[\"MTG: Memory Lapse\"],\"category\":[\"Story\"],\"description\":\"The caliph was so intelligent he could not remember what he knew.\"}]}");

/***/ }),

/***/ "f2a8":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://en.wikipedia.org/wiki/Books_in_the_Cthulhu_Mythos\"],\"books\":[{\"title\":\"Book of Azathoth\",\"category\":[\"Religious\",\"Myth\"]},{\"title\":\"Book of Eibon\",\"author\":\"Eibon\",\"category\":[\"Religious\",\"Myth\"]},{\"title\":\"Book of Iod\",\"author\":\"Khut-Nah\",\"category\":[\"Religious\",\"Myth\"]},{\"title\":\"Celaeno Fragments\",\"author\":\"Professor Laban Shrewsbury\",\"category\":[\"Scholarly\"]},{\"title\":\"Cthäat Aquadingen\",\"category\":[\"Scholarly\",\"Myth\",\"Spellbook\"]},{\"title\":\"Cultes des Goules\",\"category\":[\"Spellbook\",\"Myth\"]},{\"title\":\"De Vermis Mysteriis\",\"category\":[\"Grimoire\"]},{\"title\":\"Dhol Chants\",\"category\":[\"Religious\",\"Myth\"]},{\"title\":\"The King in Yellow\",\"category\":[\"Play\"]},{\"title\":\"Necronomicon\",\"category\":[\"Grimoire\"],\"author\":\"Abdul Alhazred\",\"description\":\"That is not dead which can eternal lie.\\r\\nAnd with strange aeons even death may die.\\r\\nNor is it to be thought...that man is either the oldest or the last of earth's masters, or that the common bulk of life and substance walks alone. The Old Ones were, the Old Ones are, and the Old Ones shall be. Not in the spaces we know, but between them, they walk serene and primal, undimensioned and to us unseen. Yog-Sothoth knows the gate. Yog-Sothoth is the gate. Yog-Sothoth is the key and guardian of the gate. Past, present, future, all are one in Yog-Sothoth. He knows where the Old Ones broke through of old, and where They shall break through again. He knows where They had trod earth's fields, and where They still tread them, and why no one can behold Them as They tread. By Their smell can men sometimes know Them near, but of Their semblance can no man know, saving only in the features of those They have begotten on mankind; and of those are there many sorts, differing in likeness from man's truest eidolon to that shape without sight or substance which is Them. They walk unseen and foul in lonely places where the Words have been spoken and the Rites howled through at their Seasons. The wind gibbers with Their voices, and the earth mutters with Their consciousness. They bend the forest and crush the city, yet may not forest or city behold the hand that smites. Kadath in the cold waste hath known Them, and what man knows Kadath? The ice desert of the South and the sunken isles of Ocean hold stones whereon Their seal is engraver, but who hath seen the deep frozen city or the sealed tower long garlanded with seaweed and barnacles? Great Cthulhu is Their cousin, yet can he spy Them only dimly. Iä! Shub-Niggurath! As a foulness shall ye know Them. Their hand is at your throats, yet ye see Them not; and Their habitation is even one with your guarded threshold. Yog-Sothoth is the key to the gate, whereby the spheres meet. Man rules now where They ruled once; They shall soon rule where man rules now. After summer is winter, after winter summer. They wait patient and potent, for here shall They reign again.\\r\\nKlaatu barada nikto\"},{\"title\":\"On the Sending Out of the Soul\",\"category\":[\"Scholarly\"]},{\"title\":\"Las Reglas de Ruina\",\"author\":\"Philip of Navarre\",\"category\":[\"Myth\",\"History\"]},{\"title\":\"Revelations of Gla'aki, Vol. I (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. II (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. III (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. IV (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. V (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. VI (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. VII (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. VIII (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. IX (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. X (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. XI (Unabridged)\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. I\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. II\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. III\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. IV\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. V\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. VI\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. VII\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. VIII\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Revelations of Gla'aki, Vol. IX\",\"author\":\"Cult of Great Old One Gla'aki\",\"category\":[\"Religious\"]},{\"title\":\"Tarsioid Psalms\",\"category\":[\"History\",\"Myth\"]},{\"title\":\"Testament of Carnamagos\",\"category\":[\"History\",\"Myth\"]},{\"title\":\"Unaussprechlichen Kulten\",\"author\":\"Friedrich von Junzt\",\"category\":[\"Scholarly\"]},{\"title\":\"An Investigation into Myth - Patterns of Latter - Day Primitives with Especial Reference to the R 'lyeh Text\",\"author\":\"Prof. Laban Shrewsbury\",\"category\":[\"Scholarly\"]},{\"title\":\"Azathoth and Other Horrors\",\"author\":\"Edward Pickman Derby\",\"category\":[\"Myth\"]},{\"title\":\"The Black Rites\",\"category\":[\"Religious\"],\"author\":\"Luveh-Keraphf\"},{\"title\":\"Book of Hidden Things\",\"category\":[]},{\"title\":\"Book of Thoth\",\"category\":[\"Religious\"]},{\"title\":\"Commentaries on Witchcraft\",\"author\":\"Mycroft H.\",\"category\":[\"Scholarly\"]},{\"title\":\"Cthulhu in the Necronomicon\",\"author\":\"Prof. Laban Shrewsbury\",\"category\":[\"Scholarly\"]},{\"title\":\"The Daemonolorum\",\"category\":[]},{\"title\":\"De Masticatione Mortuorum in Tumulis\",\"translatedTitle\":\"On the Eating of the Dead in the Tomb\",\"author\":\"Ranft\",\"category\":[\"Myth\"]},{\"title\":\"Ghorl Nigral\",\"category\":[\"Myth\"]},{\"title\":\"Invocations to Dagon \",\"category\":[\"Religious\"]},{\"title\":\"Liber-Damnatus\",\"category\":[]},{\"title\":\"Magyar Folklore\",\"author\":\"Dornly\",\"category\":[\"Myth\"]},{\"title\":\"Night-Gaunt\",\"category\":[\"Myth\"]},{\"title\":\"Occultus\",\"author\":\"Heiriarchus\",\"category\":[\"Myth\"]},{\"title\":\"Remnants of Lost Empires\",\"author\":\"Otto Dostman\",\"category\":[\"Scholarly\"]},{\"title\":\"The Saurian Age\",\"author\":\"Banfort\",\"category\":[\"History\"]},{\"title\":\"The Soul of Chaos\",\"author\":\"Edgar Hengist Gordon\",\"category\":[\"Story\"]},{\"title\":\"We Pass From View\",\"author\":\"Roland Franklyn\",\"category\":[]}]}");

/***/ }),

/***/ "f58a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "faba":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"AfterTheRegatta.esp\"],\"books\":[{\"title\":\"After The Regatta\",\"category\":[]}]}");

/***/ }),

/***/ "fc66":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../books-schema.json\",\"sources\":[\"https://en.wikipedia.org/wiki/Jules Verne\"],\"books\":[{\"title\":\"Five Weeks in a Ballon\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Adventures of Captain Hatteras\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Journey to the Center of the Earth\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"From the Earth to the Moon\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"In Search of the Castaways\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Twenty Thousand Leagues Under the Sea\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Around the Moon\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"A Floating City\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Fur Country\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Around the World in Eighty Days\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Mysterious Island\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Survivors of the Chancellor\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Off on a Comet\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Child of the Cavern\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Dick Sand, A Captain at Fifteen\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Begum's Fortune\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Steam House\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Eigh Hundred Leagues on the Amazon\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Godfrey Morgan\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Green Ray\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Kéraban the Inflexible\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Vanished Diamond\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Archipelago on Fire\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Mathias Sandorf\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Lottery Ticket\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Robur the Conqueror\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"North Against South\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Two Years' Vacation\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Family Without a Name\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"César Cascabel\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Mistress Branican\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Carpathian Castle\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Claudius Bombarnac\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Foundling Mick\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Captain Antifer\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Propeller Island\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Facing the Flag\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Clovis Dardentor\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Mighty Orinoco\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Will of an Eccentric\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Castaways of the Flag\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Village in the Treetops\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Sea Serpent\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Kip Brothers\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Travel Scholarships\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Master of the World\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Invasion of the Sea\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Lighthouse at the End of the World\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Golden Volcano\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Thompson Travel Agency\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Chase of the Golden Meteor\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Survivors of the \\\"Jonathan\\\"\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Secret of Willhelm Storitz\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Barsac Mission\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"A Drama in the Air\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"A Winter Amid the Ice\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Blockade Runners\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Count of Chanteleine\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Dr. Ox's Experiment\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"An Ideal Town\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Mutineers of the Bounty\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Ten Hours Hunting\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Adventures of the Rat Family\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Humbug\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Broken Straws\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Adoptive Son\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Blind Man's Buff\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Knights of the Daffodil\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Mr. Chimpanzee\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"The Inn in the Ardennes\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Eleven Days Siege\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]},{\"title\":\"Journey Through the Impossible\",\"author\":\"Jules Gabriel Verne\",\"category\":[\"Story\"]}]}");

/***/ }),

/***/ "fc7d":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"ReclaimSancreTor.esp\"],\"books\":[{\"title\":\"The Wind Warrior\",\"category\":[]},{\"title\":\"The Void Warrior\",\"category\":[]},{\"title\":\"Mythic Dawn Commentaries 3\",\"category\":[]},{\"title\":\"Mythic Dawn Commentaries 4\",\"category\":[]},{\"title\":\"Ancient Tablet\",\"category\":[]},{\"title\":\"Ode to a Rider Dark\",\"category\":[]},{\"title\":\"Sancre Tor Reclaimed!\",\"category\":[]},{\"title\":\"A Surveyor's Sketchbook\",\"category\":[]},{\"title\":\"The Earth Warrior\",\"category\":[]},{\"title\":\"The Water Warrior\",\"category\":[]},{\"title\":\"The Fire Warrior\",\"category\":[]},{\"title\":\"Blades Common History\",\"category\":[]},{\"title\":\"Information Release Form\",\"category\":[]},{\"title\":\"Imperial Manor Dining Area\",\"category\":[]},{\"title\":\"Worn Tamrielic Lore\",\"category\":[]},{\"title\":\"Wisdom of a Blademaster\",\"category\":[]},{\"title\":\"A Blades History Book II\",\"category\":[]},{\"title\":\"A Blades History Book III\",\"category\":[]},{\"title\":\"A Blades History Book IV\",\"category\":[]},{\"title\":\"A Tasting Guide\",\"category\":[]},{\"title\":\"Ode to a Beggar\",\"category\":[]},{\"title\":\"The City of Tears\",\"category\":[]},{\"title\":\"Imperial Manor Display Area\",\"category\":[]},{\"title\":\"Imperial Manor Foyer Area\",\"category\":[]},{\"title\":\"Imperial Manor Guest Room\",\"category\":[]},{\"title\":\"Imperial Manor Kitchen Area\",\"category\":[]},{\"title\":\"Imperial Manor Library\",\"category\":[]},{\"title\":\"Imperial Manor Living Area\",\"category\":[]},{\"title\":\"Imperial Manor Master Bedroom\",\"category\":[]},{\"title\":\"Imperial Manor Wall Hangings\",\"category\":[]},{\"title\":\"Imperial Manor Servant Quarters\",\"category\":[]},{\"title\":\"Imperial Manor Breakfast Nook\",\"category\":[]},{\"title\":\"Imperial Manor Storage Area\",\"category\":[]},{\"title\":\"Imperial Manor Study Room\",\"category\":[]},{\"title\":\"Imperial Manor Vineyard Area\",\"category\":[]},{\"title\":\"A Blades History Book I\",\"category\":[]},{\"title\":\"A Children's Anuad\",\"category\":[]},{\"title\":\"Order of the Gear Stone\",\"category\":[]},{\"title\":\"Imperial Manor Upper Hall Area\",\"category\":[]},{\"title\":\"Page from Tamrielic Lore\",\"category\":[]},{\"title\":\"Ode to the Reaper\",\"category\":[]},{\"title\":\"A Tavern Tale Book I\",\"category\":[]},{\"title\":\"Martin's Lament\",\"category\":[]},{\"title\":\"Ode to Farwil\",\"category\":[]},{\"title\":\"Dragon Hunter's Song\",\"category\":[]},{\"title\":\"Ode to a Tavern\",\"category\":[]},{\"title\":\"Fundaments of Alchemy\",\"category\":[]},{\"title\":\"Galerion The Mystic\",\"category\":[]},{\"title\":\"The Isle of Mormath\",\"category\":[]},{\"title\":\"Karan Aba-Agea\",\"category\":[]},{\"title\":\"Meal Credit\",\"category\":[]},{\"title\":\"Chance's Folly\",\"category\":[]},{\"title\":\"Surfeit of Thieves\",\"category\":[]},{\"title\":\"The Vintner's Blade\",\"category\":[]},{\"title\":\"The Marksmenship Lesson\",\"category\":[]},{\"title\":\"From the Quartermaster\",\"category\":[]},{\"title\":\"Manual of Armor\",\"category\":[]},{\"title\":\"The Five Tenets\",\"category\":[]},{\"title\":\"Claim Ticket\",\"category\":[]},{\"title\":\"Mysterium Xarxes Relic\",\"category\":[]},{\"title\":\"Trials of St. Alessia\",\"category\":[]},{\"title\":\"Lost Scroll\",\"category\":[]},{\"title\":\"Guide to Kvatch\",\"category\":[]},{\"title\":\"Missive from Rider\",\"category\":[]},{\"title\":\"Monkey and the Crystal Pear\",\"category\":[]}]}");

/***/ }),

/***/ "feec":
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"../../../../../books-schema.json\",\"sources\":[\"GTAesgaard.esp\"],\"books\":[{\"title\":\"Ghouls & Ghosts II\",\"category\":[]},{\"title\":\"Ghouls & Ghosts III\",\"category\":[]},{\"title\":\"Ghouls & Ghosts IV\",\"category\":[]},{\"title\":\"Ghouls & Ghosts I\",\"category\":[]},{\"title\":\"The King's Axeman\",\"category\":[]},{\"title\":\"The Key To Paradise\",\"category\":[]}]}");

/***/ })

/******/ });
//# sourceMappingURL=app.104b2715.js.map