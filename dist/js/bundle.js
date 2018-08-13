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

/***/ "./node_modules/tingle.js/dist/tingle.min.js":
/*!***************************************************!*\
  !*** ./node_modules/tingle.js/dist/tingle.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,o){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:\"Close\",closeMethods:[\"overlay\",\"button\",\"escape\"]};this.opts=r({},o,t),this.init()}function o(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+\"px\",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+\"px\")}function e(){this.modal=document.createElement(\"div\"),this.modal.classList.add(\"tingle-modal\"),0!==this.opts.closeMethods.length&&this.opts.closeMethods.indexOf(\"overlay\")!==-1||this.modal.classList.add(\"tingle-modal--noOverlayClose\"),this.modal.style.display=\"none\",this.opts.cssClass.forEach(function(t){\"string\"==typeof t&&this.modal.classList.add(t)},this),this.opts.closeMethods.indexOf(\"button\")!==-1&&(this.modalCloseBtn=document.createElement(\"button\"),this.modalCloseBtn.classList.add(\"tingle-modal__close\"),this.modalCloseBtnIcon=document.createElement(\"span\"),this.modalCloseBtnIcon.classList.add(\"tingle-modal__closeIcon\"),this.modalCloseBtnIcon.innerHTML=\"×\",this.modalCloseBtnLabel=document.createElement(\"span\"),this.modalCloseBtnLabel.classList.add(\"tingle-modal__closeLabel\"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement(\"div\"),this.modalBox.classList.add(\"tingle-modal-box\"),this.modalBoxContent=document.createElement(\"div\"),this.modalBoxContent.classList.add(\"tingle-modal-box__content\"),this.modalBox.appendChild(this.modalBoxContent),this.opts.closeMethods.indexOf(\"button\")!==-1&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function s(){this.modalBoxFooter=document.createElement(\"div\"),this.modalBoxFooter.classList.add(\"tingle-modal-box__footer\"),this.modalBox.appendChild(this.modalBoxFooter)}function i(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:l.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:n.bind(this)},this.opts.closeMethods.indexOf(\"button\")!==-1&&this.modalCloseBtn.addEventListener(\"click\",this._events.clickCloseBtn),this.modal.addEventListener(\"mousedown\",this._events.clickOverlay),window.addEventListener(\"resize\",this._events.resize),document.addEventListener(\"keydown\",this._events.keyboardNav)}function n(t){this.opts.closeMethods.indexOf(\"escape\")!==-1&&27===t.which&&this.isOpen()&&this.close()}function l(t){this.opts.closeMethods.indexOf(\"overlay\")!==-1&&!d(t.target,\"tingle-modal\")&&t.clientX<this.modal.clientWidth&&this.close()}function d(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function a(){this.opts.closeMethods.indexOf(\"button\")!==-1&&this.modalCloseBtn.removeEventListener(\"click\",this._events.clickCloseBtn),this.modal.removeEventListener(\"mousedown\",this._events.clickOverlay),window.removeEventListener(\"resize\",this._events.resize),document.removeEventListener(\"keydown\",this._events.keyboardNav)}function r(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}function h(){var t,o=document.createElement(\"tingle-test-transition\"),e={transition:\"transitionend\",OTransition:\"oTransitionEnd\",MozTransition:\"transitionend\",WebkitTransition:\"webkitTransitionEnd\"};for(t in e)if(void 0!==o.style[t])return e[t]}var c=h();return t.prototype.init=function(){this.modal||(e.call(this),i.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter())},t.prototype.destroy=function(){null!==this.modal&&(a.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.open=function(){var t=this;\"function\"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty(\"display\"):this.modal.style.removeAttribute(\"display\"),this._scrollPosition=window.pageYOffset,document.body.classList.add(\"tingle-enabled\"),document.body.style.top=-this._scrollPosition+\"px\",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add(\"tingle-modal--visible\"),c?this.modal.addEventListener(c,function o(){\"function\"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t.modal.removeEventListener(c,o,!1)},!1):\"function\"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),this.checkOverflow()},t.prototype.isOpen=function(){return!!this.modal.classList.contains(\"tingle-modal--visible\")},t.prototype.close=function(){if(\"function\"==typeof this.opts.beforeClose){var t=this.opts.beforeClose.call(this);if(!t)return}document.body.classList.remove(\"tingle-enabled\"),window.scrollTo(0,this._scrollPosition),document.body.style.top=null,this.modal.classList.remove(\"tingle-modal--visible\");var o=this;c?this.modal.addEventListener(c,function t(){o.modal.removeEventListener(c,t,!1),o.modal.style.display=\"none\",\"function\"==typeof o.opts.onClose&&o.opts.onClose.call(this)},!1):(o.modal.style.display=\"none\",\"function\"==typeof o.opts.onClose&&o.opts.onClose.call(this))},t.prototype.setContent=function(t){\"string\"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML=\"\",this.modalBoxContent.appendChild(t))},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){s.call(this)},t.prototype.setFooterContent=function(t){this.modalBoxFooter.innerHTML=t},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add(\"tingle-modal-box__footer--sticky\"),o.call(this),this.modalBoxContent.style[\"padding-bottom\"]=this.modalBoxFooter.clientHeight+20+\"px\"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width=\"auto\",this.modalBoxFooter.style.left=\"\",this.modalBoxContent.style[\"padding-bottom\"]=\"\",this.modalBoxFooter.classList.remove(\"tingle-modal-box__footer--sticky\")))},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement(\"button\");return s.innerHTML=t,s.addEventListener(\"click\",e),\"string\"==typeof o&&o.length&&o.split(\" \").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn(\"Resize is deprecated and will be removed in version 1.0\")},t.prototype.isOverflow=function(){var t=window.innerHeight,o=this.modalBox.clientHeight;return o>=t},t.prototype.checkOverflow=function(){this.modal.classList.contains(\"tingle-modal--visible\")&&(this.isOverflow()?this.modal.classList.add(\"tingle-modal--overflow\"):this.modal.classList.remove(\"tingle-modal--overflow\"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(o.call(this),this.setStickyFooter(!0)))},{modal:t}});\n\n//# sourceURL=webpack:///./node_modules/tingle.js/dist/tingle.min.js?");

/***/ }),

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

eval("__webpack_require__(/*! ./css/mystyle.scss */ \"./src/css/mystyle.scss\");\n__webpack_require__(/*! ./js/popover.js */ \"./src/js/popover.js\");\n__webpack_require__(/*! ./js/modal */ \"./src/js/modal.js\");\n\nfunction genPdf() {\n    html2canvas(document.getElementById(\"cv-wrapper\")).then(function (canvas) {\n\n        var img = canvas.toDataURL(\"image/png\");\n        var doc = new jsPDF('p', 'mm', \"a4\");\n        var width = doc.internal.pageSize.width;\n        var height = doc.internal.pageSize.height;\n\n        doc.addImage(img, 'JPEG', 0, 0, width, height);\n        // change the file name to something dynamic -- replace it with reg #\n        doc.save('test.pdf');\n        // saveAs(canvas.toDataURL(), 'canvas.png');\n    });\n}\n\nfunction saveAs(uri, filename) {\n    var link = document.createElement('a');\n    if (typeof link.download === 'string') {\n        link.href = uri;\n        link.download = filename;\n\n        //Firefox requires the link to be in the body\n        document.body.appendChild(link);\n\n        //simulate click\n        link.click();\n\n        //remove the link when done\n        document.body.removeChild(link);\n    } else {\n        window.open(uri);\n    }\n}\n\ndocument.getElementById(\"download\").onclick = genPdf;\n\n// Date and Range Picker\n$(function () {\n    $('input[name=\"daterange\"]').daterangepicker({\n        \"showDropdowns\": true,\n        locale: {\n            cancelLabel: 'Clear'\n        }\n    });\n});\n\n// document.getElementById(\"pdfDownload\").addEventListener(\"click\", genPdf);\n\n// Education Popover \ntippy('#hEducationPopoverHolder', {\n    html: '#dEducationPopover',\n    delay: 100,\n    size: 'large',\n    duration: 500,\n    animation: 'scale',\n    interactive: true\n});\n\n// add education function\nlet eduSecCount = 1;\nfunction addEducation() {\n\n    console.log(\"Add Education\");\n    var div = document.getElementById('dEducationSection'),\n        clone = div.cloneNode(true); // true means clone all childNodes and all event handlers\n    clone.id = \"dEducationSection-\" + eduSecCount;\n    // console.log(clone.childNodes[11].childNodes[1]);\n    clone.childNodes[11].id = 'dDeletePopover-' + eduSecCount;\n    clone.childNodes[11].childNodes[1].id = \"dDeletePopoverButton-\" + eduSecCount;\n    document.getElementById('dEducationWrapper').appendChild(clone);\n    addDeletePopover(eduSecCount);\n    eduSecCount++;\n}\nconsole.log(\"listener\");\n// document.getElementById(\"baddeducation\").onclick = addEducation;\n$(document).on('click', '#bAddEducation', addEducation);\n\nfunction addDeletePopover(eduSecCount) {\n    tippy('#dEducationSection-' + eduSecCount, {\n        html: '#dDeletePopover-' + eduSecCount,\n        position: 'left',\n        arrow: true,\n        delay: 100,\n        size: 'large',\n        duration: 500,\n        animation: 'scale',\n        interactive: true\n    });\n    // $(document).on('click', '#dDeletePopover-'+i, removeElement);\n    $(document).on('click', '#dDeletePopoverButton-' + eduSecCount, removeElement);\n}\n\nfunction removeElement() {\n    // alert(\"hello\");\n    // Removes an element from the document\n    var elementId = this.getAttribute('id');\n    console.log(elementId);\n    var eduSecNumber = elementId.split('-');\n    console.log(eduSecNumber[1]);\n    var dSECTION = \"#dEducationSection-\" + parseInt(eduSecNumber[1]);;\n    console.log(dSECTION);\n    let deleteNode = document.querySelector(dSECTION);\n    clearInner(deleteNode);\n    // console.log(deleteNode.parentNode.removeChild(deleteNode));\n    deleteNode.parentNode.removeChild(deleteNode);\n}\n\nfunction clearInner(node) {\n    while (node.hasChildNodes()) {\n        clear(node.firstChild);\n    }\n}\n\nfunction clear(node) {\n    while (node.hasChildNodes()) {\n        clear(node.firstChild);\n    }\n    node.parentNode.removeChild(node);\n    // console.log(node, \"cleared!\");\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tingle.js */ \"./node_modules/tingle.js/dist/tingle.min.js\");\n/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tingle_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// instanciate new modal\nvar modal = new tingle_js__WEBPACK_IMPORTED_MODULE_0___default.a.modal({\n    footer: true,\n    stickyFooter: false,\n    closeMethods: ['overlay', 'button', 'escape'],\n    closeLabel: \"Close\",\n    cssClass: ['custom-class-1', 'custom-class-2'],\n    onOpen: function () {\n        console.log('modal open');\n    },\n    onClose: function () {\n        console.log('modal closed');\n    },\n    beforeClose: function () {\n        // here's goes some logic\n        // e.g. save content before closing the modal\n        return true; // close the modal\n        return false; // nothing happens\n    }\n});\n\n// set content\nmodal.setContent(`\n                <div class=\"columns\">\n                    <div class=\"column\">\n                        <div class=\"columns\">\n                            <div class=\"column top-padding-30\">\n                                <i class=\"far fa-envelope is-size-4\"></i>\n                            </div>\n                            <div class=\"column\">\n                                <input class=\"input is-size-4 has-text-weight-semibold white-bottom-border is-inline\" type=\"text\" placeholder=\"amer.tanwani@gmail.com\">\n                            </div>\n                        </div>\n                        <div class=\"columns\">\n                            <div class=\"column top-padding-30\">\n                            <i class=\"fas fa-mobile-alt is-size-4\"></i> \n                            </div>\n                            <div class=\"column\">\n                                <input class=\"input is-size-4 has-text-weight-semibold white-bottom-border is-inline\" type=\"text\" placeholder=\"03123011155\">\n                                </div>\n                            </div>\n                    </div>\n                    <div class=\"column\">\n                        <div class=\"columns\">\n                            <div class=\"column top-padding-30 is-2 is-offset-1\">\n                                <i class=\"fas fa-map-marker-alt is-size-4\"></i>&nbsp;\n                                <input class=\"is-size-4\" type=\"checkbox\">\n                            </div>\n                            <div class=\"column\">\n                                    <input class=\"input is-size-5 has-text-weight-normal is-inline white-bottom-border\" type=\"text\" placeholder=\"Islamabad,PK\">\n                            </div>\n                        </div>\n                        <div class=\"columns\">\n                            <div class=\"column top-padding-30 is-2 is-offset-1\">\n                                <i class=\"fab fa-linkedin is-size-4\"></i>&nbsp;\n                                <input class=\"is-size-4\" type=\"checkbox\">\n                            </div>\n                            <div class=\"column\">\n                                 <input class=\"input is-size-5 is-inline has-text-weight-normal white-bottom-border\" type=\"text\" placeholder=\"linked.com/in/amerkumar\">\n                            </div>\n                        </div>\n                        <div class=\"columns\">\n                            <div class=\"column top-padding-30 is-2 is-offset-1\">\n                                <i class=\"fab fa-skype is-size-4\"></i>&nbsp;\n                                <input class=\"is-size-4\" type=\"checkbox\">\n                            </div>\n                            <div class=\"column\">       \n                                    <input class=\"input is-size-5 is-inline has-text-weight-normal white-bottom-border\" type=\"text\" placeholder=\"amer.kumar\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                    \n                    `);\n\n// add a button\nmodal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function () {\n    // here goes some logic\n    modal.close();\n});\n\n// open modal\nmodal.open();\n\n//# sourceURL=webpack:///./src/js/modal.js?");

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