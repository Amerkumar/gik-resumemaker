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

/***/ "./src/css/mystyle.scss":
/*!******************************!*\
  !*** ./src/css/mystyle.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/mystyle.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./css/mystyle.scss */ \"./src/css/mystyle.scss\");\n__webpack_require__(/*! ./js/popover.js */ \"./src/js/popover.js\");\n\nfunction genPdf() {\n    html2canvas(document.getElementById(\"cv-wrapper\")).then(function (canvas) {\n\n        var img = canvas.toDataURL(\"image/png\");\n        var doc = new jsPDF('p', 'mm', \"a4\");\n        var width = doc.internal.pageSize.width;\n        var height = doc.internal.pageSize.height;\n\n        doc.addImage(img, 'JPEG', 0, 0, width, height);\n        // change the file name to something dynamic -- replace it with reg #\n        doc.save('test.pdf');\n        // saveAs(canvas.toDataURL(), 'canvas.png');\n    });\n}\n\nfunction saveAs(uri, filename) {\n    var link = document.createElement('a');\n    if (typeof link.download === 'string') {\n        link.href = uri;\n        link.download = filename;\n\n        //Firefox requires the link to be in the body\n        document.body.appendChild(link);\n\n        //simulate click\n        link.click();\n\n        //remove the link when done\n        document.body.removeChild(link);\n    } else {\n        window.open(uri);\n    }\n}\n\ndocument.getElementById(\"download\").onclick = genPdf;\n\n// Date and Range Picker\n$(function () {\n    $('input[name=\"daterange\"]').daterangepicker({\n        \"showDropdowns\": true,\n        locale: {\n            cancelLabel: 'Clear'\n        }\n    });\n});\n\n// document.getElementById(\"pdfDownload\").addEventListener(\"click\", genPdf);\n\n// Education Popover \ntippy('#hEducationPopoverHolder', {\n    html: '#dEducationPopover',\n    delay: 100,\n    size: 'large',\n    duration: 500,\n    animation: 'scale',\n    interactive: true\n});\n\n// add education function\nlet i = 1;\nfunction addEducation() {\n    console.log(\"Add Education\");\n    var div = document.getElementById('dEducationSection'),\n        clone = div.cloneNode(true); // true means clone all childNodes and all event handlers\n    clone.id = \"dEducationSection-\" + i;\n    document.getElementById('dEducationWrapper').appendChild(clone);\n    i++;\n}\nconsole.log(\"listener\");\n// document.getElementById(\"baddeducation\").onclick = addEducation;\n$(document).on('click', '#bAddEducation', addEducation);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/popover.js":
/*!***************************!*\
  !*** ./src/js/popover.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\n    This file adds popover of addition button to all elements.\r\n*/\n\n//# sourceURL=webpack:///./src/js/popover.js?");

/***/ })

/******/ });