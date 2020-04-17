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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar app = express();\r\nvar booksList = [{\r\n        name: 'Князь Света',\r\n        author: 'Роджер Желязны',\r\n        type: 'роман',\r\n        year: 1967,\r\n        price: '20',\r\n        description: 'После гибели Земли экипаж космического корабля «Звезда Индии» основывает колонию на одной из планет в другой звёздной системе. Победив почти всех исконных обитателей планеты, экипаж корабля строит для себя город на одном из полюсов планеты. В процессе колонизации планеты люди достигают технического могущества и бессмертия и объявляют себя богами. Колонисты разделяется на две части: боги, живущие в Небесном Граде и пользующиеся техническими благами, и простые люди, всячески угнетаемые божествами и живущие в средневековых городах по всей планете. Развивается небесная иерархия по образу и подобию индийского пантеона божеств.\\n' +\r\n            '\\n' +\r\n            'Во избежание потери власти и из нежелания передавать опасные технологии простым и невежественным людям бессмертные боги из Небесного Града начинают насаждать кастовую систему и культ поклонения себе лично как богам. Любой прогресс среди простых людей подавляется. Богам помогает управлять людьми подвластная им система реинкарнации: верные последователи получают в награду перерождение в прекрасное тело, возможно даже в младших богов, а противники существующего режима вынуждены жить в некрасивых или больных телах, а подчас и вовсе получают тела животных.\\n' +\r\n            '\\n' +\r\n            'Но и среди богов происходит раскол. Среди них образуется небольшая группа сторонников технического прогресса, которая, веря в здравый смысл людей, хочет поделиться с ними своими знаниями. Вокруг этой борьбы за свержение богов и торжества науки и завязывается сюжет романа.',\r\n    }];\r\napp.get('/', function (req, res) {\r\n    res.sendFile(path.join(__dirname + '/index.html'));\r\n});\r\napp.get('/booksList', function (req, res) {\r\n    res.send(booksList);\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Example app listening on port 3000!');\r\n});\r\n\n\n//# sourceURL=webpack:///./server/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });