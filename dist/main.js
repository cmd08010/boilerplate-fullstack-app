/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/src/index.js: Identifier 'App' has already been declared (7:6)\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m\\u001b[36mconst\\u001b[39m root \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mquerySelector(\\u001b[32m\\\"#root\\\"\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m\\u001b[36mconst\\u001b[39m \\u001b[33mApp\\u001b[39m \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m  \\u001b[36mreturn\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mThe\\u001b[39m \\u001b[33mApp\\u001b[39m duh\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:723:17)\\n    at Object.raiseWithData (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:716:17)\\n    at Object.raise (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:710:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:4698:12)\\n    at ScopeHandler.declareName (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:4664:12)\\n    at Object.checkLVal (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:9056:22)\\n    at Object.parseVarId (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:11560:10)\\n    at Object.parseVar (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:11535:12)\\n    at Object.parseVarStatement (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:11350:10)\\n    at Object.parseStatementContent (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:10949:21)\\n    at Object.parseStatement (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:10882:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:11456:25)\\n    at Object.parseBlockBody (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:11443:10)\\n    at Object.parseTopLevel (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:10813:10)\\n    at Object.parse (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:12425:10)\\n    at parse (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/parser/lib/index.js:12476:38)\\n    at parser (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/gensync/index.js:254:32)\\n    at /Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/gensync/index.js:266:13\\n    at async.call.result.err.err (/Users/cmd08010/Desktop/Code/boilerplate-fullstack-app/node_modules/gensync/index.js:216:11)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });