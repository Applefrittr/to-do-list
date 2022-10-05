/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! lined-paper-2.png */ \"./src/lined-paper-2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! leather.jpg */ \"./src/leather.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*   {\\n    box-sizing: border-box;\\n    margin: 0;\\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n}\\n\\nbody    {\\n    display: flex;\\n    justify-content: center;\\n    min-height: 100vh;\\n    position: relative; \\n}\\n\\n#container  {\\n    display: grid;\\n    width: 70vw;\\n    background-color: #FFF36D;\\n    grid-template-rows: 100px 1fr;\\n    grid-template-columns: 1fr 4fr;\\n    border-right: solid black 1px;\\n    border-top: solid black 1px;\\n    border-left: solid black 1px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n#header {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-size: cover;\\n    grid-row: 1 / 2;\\n    grid-column: 1 / 3;\\n    border: solid black 1px;\\n    box-shadow: 0 1.5px 1px black;\\n    display:flex;\\n    align-items: center;\\n    padding: 0 2rem;\\n    z-index: 1;\\n}\\n\\n#navSideBar {\\n    grid-row: 2 / 3;\\n    grid-column: 1 / 2;\\n    border-right: solid darkred 2px;\\n    position: relative;\\n    padding-left: 2rem;\\n    padding-top: 10rem;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 3rem;\\n\\n}\\n\\n.navContainer>h4 ,\\n#newProjects>div    {\\n    margin-left: 1rem;\\n    margin-bottom: 1rem;\\n}\\n\\nh2  {\\n    margin-bottom: 1rem;\\n}\\n\\nh2:hover,\\nh4:hover    {\\n    text-decoration: underline;\\n    cursor: pointer;\\n}\\n\\n#list-header    {\\n    padding-bottom: 2rem;\\n}\\n\\n#list   {\\n    padding-top: 10rem;\\n    padding-left: 2rem;\\n    padding-right: 2rem;\\n    background-color: #FFF36D;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    transition: opacity linear .25s;\\n}\\n\\n.next-page  {\\n    opacity: 0;\\n}\\n\\n#addNewToDo {\\n    margin-top: 2rem;\\n}\\n\\n.modal  {\\n    display: none;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: rgba(0, 0, 0, .3);\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    width: 100%;\\n}\\n\\n.modalWindow    {\\n    width: 700px;\\n    height: 375px;\\n    background-color: white;\\n    display:grid;\\n    grid-template-rows: 1.50fr repeat(7, 1fr);\\n    position: relative;\\n}\\n/*\\n.modal>div>div  {\\n    opacity: .2;\\n}\\n*/\\n\\n.todo   {\\n    display: flex;\\n    width: 100%;\\n    padding: 1rem 3rem;\\n    justify-content: space-between;\\n    transition: transform .5s, border 2s;\\n}\\n\\n.todo:hover {\\n    transform: scale(1.01, 1.10);\\n    border: solid 1px black;\\n    box-shadow: 2px 2px 5px black;\\n}\\n\\n.todobox    {\\n    display: flex;\\n    gap: 1rem;\\n    align-items: center;\\n}\\n\\n.complete   {\\n    color: gray;\\n}\\n\\nform    {\\n    position: absolute;\\n    z-index: 2;\\n    top: 2rem;\\n    display:flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n    left: 0;\\n    right: 0;\\n    margin-left: auto;\\n    margin-right: auto;\\n    width: 450px;\\n}\\n\\nform>.inputs   {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\nform>.datePrioBox   {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\nform>button {\\n    width: 100px;\\n}\\n\\ninput,\\ntextarea    {\\n    border: solid gray 1px;\\n    padding: 5px;\\n    resize: none;\\n}\\n\\ninput[type=\\\"checkbox\\\"]  {\\n    appearance: none;\\n    position: relative;\\n    border: solid gray 1px;\\n    border-radius: 50%;\\n    height: auto;\\n    color: navy;   \\n}\\n\\ninput[type=\\\"checkbox\\\"]::before {\\n    content: \\\"✔\\\";\\n    position: absolute;\\n    font-size: 1.5rem;\\n    right: -10px;\\n    top: -1rem;\\n    visibility: hidden;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked::before {\\n      visibility: visible;\\n}\\n\\n.selected::after {\\n    font-size: 1rem;\\n    content: ' >>>'\\n}\\n\\n.project-color  {\\n    padding: 5px;\\n    height: auto;\\n    margin-right: 5px;\\n}\\n\\n.todo-project-color {\\n    padding: 5px;\\n    height: 100%;\\n    display: inline-block;\\n    margin-right: -10px;\\n}\\n\\n.descrpt:hover .popup   {\\n    \\n    opacity: 1;\\n}\\n\\n.popup  {\\n    position: absolute;\\n    \\n    background-color: white;\\n    padding: 1rem;\\n    height: auto;\\n    z-index: 1000;\\n    opacity: 0;\\n    transition: ease-in .25s;\\n}\\n\\n.modal-header   {\\n    display: flex;\\n    justify-content: space-between;\\n    padding: .5rem;    \\n}\\n\\nlegend  {\\n    padding: .15rem;\\n}\\n\\n.close  {\\n    transition: scale .25s;\\n}\\n\\n.close:hover    {\\n    scale: 1.25;\\n    cursor: pointer;\\n}\\n\\n#createToDoName,\\n#createToDoDate   {\\n    position: relative;\\n}\\n\\n.name-error {\\n    position:absolute;\\n    background-color: #FFF36D;\\n    top: 30px;\\n    left: 15px;\\n    z-index: 1;\\n    padding: 5px;\\n}\\n\\n.shake  {\\n    animation: shake .25s;\\n\\n}\\n@keyframes shake {\\n    0% { transform: translate(5px);}\\n    33% { transform: translate(-10px);}\\n    66% { transform: translate(10px);}\\n    100% { transform: translate(-5px);}\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://y/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://y/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClearList\": () => (/* binding */ ClearList),\n/* harmony export */   \"CreateProject\": () => (/* binding */ CreateProject),\n/* harmony export */   \"CreateToDoItem\": () => (/* binding */ CreateToDoItem),\n/* harmony export */   \"Selected\": () => (/* binding */ Selected)\n/* harmony export */ });\nconst editBtn = document.querySelector('#editToDo')\n\n// DOM created element which represents a to-do object.  Edit and Delete buttons call methods repsectively from the to-do object itself and update DOM accordingly\nfunction CreateToDoItem(obj) {\n    let newItem = document.createElement('div')\n    newItem.classList.add('todo')\n\n    let box1 = document.createElement('div')\n    box1.classList.add('todobox')\n\n    let checkbox = document.createElement('input')\n    checkbox.type = 'checkbox'\n    if (obj.completed) {\n        checkbox.checked = true\n        newItem.classList.add('complete')\n    }\n\n    checkbox.addEventListener('click', () => {\n        newItem.classList.toggle('complete')\n        obj.completed = !obj.completed\n    })\n\n    let newItemName = document.createElement('p')\n    newItemName.textContent = obj.name\n\n    box1.appendChild(checkbox)\n    if (obj.color)    {\n        let color = document.createElement('div')\n        color.classList.add('todo-project-color')\n        color.style.backgroundColor = obj.color\n        box1.appendChild(color)\n    }\n    box1.appendChild(newItemName)\n\n    let box2 = document.createElement('div')\n    box2.classList.add('todobox')\n\n    let newItemDate = document.createElement('p')\n    newItemDate.textContent = obj.dueDate\n\n    let descptPreview = document.createElement('div')\n    descptPreview.textContent = obj.description.slice(0, 30) + '...'\n    descptPreview.classList.add('descrpt')\n\n    let descptPopup = document.createElement('div')\n    descptPopup.textContent = obj.description\n    descptPopup.classList.add('popup')\n    descptPreview.addEventListener('mousemove', () => {\n        descptPopup.style.left = '20vw'\n        descptPopup.style.top = '40px'\n    })\n\n    let edit = document.createElement('button')\n    edit.textContent = 'Edit'\n    \n    edit.addEventListener('click', () => {\n        let update = obj.edit()\n        editBtn.addEventListener('click', () => {\n            newItemName.textContent = update.name\n            descptPreview.textContent = update.description.slice(0, 30) + '...'\n            newItemDate.textContent = update.dueDate\n        })\n    })\n\n    descptPreview.appendChild(descptPopup)\n    \n    let del = document.createElement('button')\n    del.textContent = 'Delete'\n    del.onclick = () => obj.del(newItem)\n\n    box2.appendChild(newItemDate)\n    box2.appendChild(edit)\n    box2.appendChild(del)\n    \n    newItem.appendChild(box1)\n    newItem.appendChild(descptPreview)\n    newItem.appendChild(box2)\n\n    return newItem\n}\n\n\n// Project DOM element.  Used to represent the Project Objects created by the user and displayed on-screen\nfunction CreateProject(obj)    {\n    let newProject = document.createElement('div')\n    newProject.style.display = 'flex'\n\n    let projectColor = document.createElement('div')\n    projectColor.classList.add('project-color')\n    projectColor.style['background-color'] = obj.color\n    \n    let projectName = document.createElement('h4')\n    projectName.textContent = obj.name\n    \n    newProject.appendChild(projectColor)\n    newProject.appendChild(projectName)\n\n    return newProject\n}\n\n// Deletes the DOM to-do's displayed on-screen\nfunction ClearList(element)  {\n    while(element.lastChild)   {\n        element.removeChild(element.lastChild)\n    }\n}\n\n// Add's the '>>>' to the current user selected list or project\nfunction Selected(list)  {\n    let notSelected = document.querySelector('.selected')\n    notSelected.classList.remove('selected')\n    list.classList.add('selected')\n}\n\n\n//# sourceURL=webpack://y/./src/DOM.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgModalWindow\": () => (/* binding */ bgModalWindow)\n/* harmony export */ });\nconst createToDo = document.querySelector('#createToDoWindow')\nconst editToDo = document.querySelector('#editToDoWindow')\n\nfunction bgModalWindow()   {\n    for (let a = 0; a < 8; a++) {\n        let row1 = document.createElement('div')\n        let row2 = document.createElement('div')\n        let x = [row1, row2]\n        createToDo.appendChild(row1)\n        editToDo.appendChild(row2)\n        a == 0 ? x.forEach(row => row.style['border-bottom'] = 'solid red 1px') : x.forEach(row => row.style['border-bottom'] = 'solid blue 1px')\n    }\n}\n\n//# sourceURL=webpack://y/./src/background.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL\": () => (/* binding */ ALL),\n/* harmony export */   \"ErrorMsg\": () => (/* binding */ ErrorMsg),\n/* harmony export */   \"PROJECTS\": () => (/* binding */ PROJECTS)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects.js */ \"./src/objects.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background.js */ \"./src/background.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\n\n\nconst newToDo = document.querySelector('#addNewToDo')\nconst createModal = document.querySelector('.modal')\nconst createToDo = document.querySelector('#createToDo')\nconst formToDo = document.querySelector('#formToDo')\nconst editModal = document.querySelector('#editModal')\nconst list = document.querySelector('#newToDo')\nconst allList = document.querySelector('#all')\nconst todayList = document.querySelector('#today')\nconst weekList = document.querySelector('#week')\nconst monthList = document.querySelector('#month')\nconst newProject = document.querySelector('#addProject')\nconst projectModal = document.querySelector('#projectModal')\nconst createProject = document.querySelector('#newProject')\nconst formProject = document.querySelector('#formProject')\nconst projectList = document.querySelector('#newProjects')\nconst listHeader = document.querySelector('#list-header')\nconst page = document.querySelector('#list')\nconst close = document.querySelectorAll('.close')\n\nconst todoName = document.querySelector('#createToDoName')\nconst todoDate = document.querySelector('#createToDoDate')\nconst projectName = document.querySelector('#projectName')\n\n\n\n//bgModalWindow() // add index card styling to modal windows, called from background.js\n\n\n/////////////////  Storage API retrieval on page load //////////////////////\n\n//localStorage.clear()\nlet storedData = Initialize()\n\nconst ALL = storedData[0] //InitializeDefaultList() // Initalize the ALL default list\nif(!localStorage.getItem('ALL')) localStorage.setItem('ALL', JSON.stringify(ALL))\n\nconst PROJECTS = storedData[1] //InitializeProjectsList()\nif(!localStorage.getItem('PROJECTS')) localStorage.setItem('PROJECTS', JSON.stringify(PROJECTS))\n\nInitializeProjectsList()\n\n\n// Activate form modal for user to add a new to-do\nnewToDo.addEventListener('click', () => {\n    createModal.style.display = 'flex'\n})\n\n// Closes modal then captures user input and creates a new to-do object along with it's DOM representation.  Also stores newly created object in local storage element 'ALL'\ncreateToDo.addEventListener('click', () => {\n    let todo = Object.values(formToDo.elements).map(x => x.type == 'checkbox' ? x.checked : x.value)\n\n    if(!todo[0]) {\n        ErrorMsg(todoName, 'Please enter a name for the task')\n        return\n    }\n    \n    if(!todo[2]) {\n        ErrorMsg(todoDate, 'Enter a due date')\n        return\n    }    \n    \n\n    createModal.style.display = 'none'\n    let todoObj = (0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.ToDo)(todo)\n    todoObj.id = Math.floor(Math.random() * 100000)  // Unique ID created for each to-do to help with storage retrieval and 'edit' and 'delete' functionality after page reload\n    // if custom project selected, add to that list as well\n    PROJECTS.forEach(project =>     {\n        if (project.selected == true)   {\n            project.tasks.push(todoObj)\n            todoObj.color = project.color\n            localStorage.setItem('PROJECTS', JSON.stringify(PROJECTS))\n        } \n    })\n    ALL.push(todoObj)       // push new to-do to default ALL list\n    \n    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.Store)('ALL', todoObj)   // store newly created object in localStorage\n    \n    let ele = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateToDoItem)(todoObj)\n    ;(0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.Schedule)(todoObj)       // call Schedule from objects.js, will add new to-do into due-date lists\n    list.appendChild(ele)\n    \n    formToDo.reset()        // reset input fields in the form for next use\n})\n\npage.addEventListener('transitionend', () => page.classList.remove('next-page'))\n\n// Displays all to-do's in the default list ALL\nallList.addEventListener('click',() => {\n    page.classList.add('next-page')\n    setTimeout(function ()   {\n        listHeader.textContent = `All To-Dos`\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.ClearList)(list)\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.Selected)(allList)\n        PROJECTS.forEach(project => project.selected = false)\n        ALL.forEach(obj => {\n            let ele = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateToDoItem)(obj)\n            list.appendChild(ele)\n        })\n        //page.classList.toggle('next-page')\n    }, 300)\n})\n\n// Displays all to-do's in the default list TODAY\ntodayList.addEventListener('click', () => {\n    page.classList.add('next-page')\n    setTimeout(function ()  {\n        listHeader.textContent = `Today's To-Dos`\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.ClearList)(list)\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.Selected)(todayList)\n        PROJECTS.forEach(project => project.selected = false)\n        _objects_js__WEBPACK_IMPORTED_MODULE_1__.TODAY.forEach(obj => {\n            let ele = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateToDoItem)(obj)\n            list.appendChild(ele)\n        })\n    }, 300)\n})\n\n// Displays all to-do's in the default list THIS WEEK\nweekList.addEventListener('click', () => {\n    page.classList.add('next-page')\n    setTimeout(function ()  {\n        listHeader.textContent = `This Week's To-Dos`\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.ClearList)(list)\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.Selected)(weekList)\n        PROJECTS.forEach(project => project.selected = false)\n        _objects_js__WEBPACK_IMPORTED_MODULE_1__.WEEK.forEach(obj => {\n            let ele = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateToDoItem)(obj)\n            list.appendChild(ele)\n        })\n    }, 300)\n})\n\n// Displays all to-do's in the default list THIS MONTH\nmonthList.addEventListener('click', () => {\n    page.classList.add('next-page')\n    setTimeout(function ()  {\n        listHeader.textContent = `This Month's To-Dos`\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.ClearList)(list)\n        ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.Selected)(monthList)\n        PROJECTS.forEach(project => project.selected = false)\n        _objects_js__WEBPACK_IMPORTED_MODULE_1__.MONTH.forEach(obj => {\n            let ele = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateToDoItem)(obj)\n            list.appendChild(ele)\n        })\n    }, 300)\n})\n\n// Activate project form modal for user to create a new project\nnewProject.addEventListener('click', () => {\n    projectModal.style.display = 'flex'\n})\n\n// Closes new project modal then captures user input and creates a new project object along with it's DOM representation\ncreateProject.addEventListener('click', () =>  {\n    let project = Object.values(formProject.elements).map(x => x.value)\n    \n    if (!project[0])    {\n        ErrorMsg(projectName, 'Choose a name for the project')\n        return\n    }\n\n    projectModal.style.display = 'none'\n    let projectObj = new _objects_js__WEBPACK_IMPORTED_MODULE_1__.Project(project),\n        ele = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateProject)(projectObj)\n    projectList.appendChild(ele)\n    PROJECTS.push(projectObj)\n    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.Store)('PROJECTS', projectObj)\n    // event listener added to the project DOM element to be a 'clickable' list to where the user can add new to-dos and switch between the default lists and \n    // any other projects the user creates\n    ele.addEventListener('click', () => {\n        page.classList.add('next-page')\n        setTimeout(function() {\n            listHeader.textContent = `${projectObj.name}'s To-Dos`\n            ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.ClearList)(list)\n            ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.Selected)(ele.lastChild)\n            PROJECTS.forEach(project => project.selected = false)\n            projectObj.selected = true\n            projectObj.tasks.forEach(obj => {\n                let todo = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateToDoItem)(obj)\n                list.appendChild(todo)\n            })\n        }, 300)\n    })\n    formProject.reset()\n})\n\n// Functionality for close 'X' on the modal pop-up windows on each of the forms.  Also deletes left over error messages\nclose.forEach(x => {\n    x.addEventListener('click', () => {\n        createModal.style.display = 'none'\n        projectModal.style.display = 'none'\n        editModal.style.display = 'none'\n        \n        if (todoName.childElementCount > 2) todoName.removeChild(todoName.lastChild)\n        if (todoDate.childElementCount > 2) todoDate.removeChild(todoDate.lastChild)\n        if (projectName.childElementCount > 2) projectName.removeChild(projectName.lastChild)\n\n        formToDo.reset()\n        formProject.reset()\n    })\n})\n\nfunction InitializeProjectsList()   {\n    let data = PROJECTS\n    data.forEach(project => {\n        let projectDiv = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateProject)(project)\n        projectList.appendChild(projectDiv)\n        projectDiv.addEventListener('click', () => {\n            page.classList.add('next-page')\n            setTimeout(function()   {\n                listHeader.textContent = `${project.name}'s To-Dos`\n                ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.ClearList)(list)\n                ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.Selected)(projectDiv.lastChild)\n                PROJECTS.forEach(project => project.selected = false)\n                project.selected = true\n                project.tasks.forEach(task =>   {\n                    let todoDiv = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateToDoItem)(task)\n                    list.appendChild(todoDiv)\n                })\n            }, 300)\n        })\n    })\n}\n\nfunction Initialize()    {\n    if( localStorage.getItem('ALL') )   {\n        let dataAll = JSON.parse(localStorage.getItem('ALL') || [])\n        let dataProjects = JSON.parse(localStorage.getItem('PROJECTS') || [])\n\n        for (let a = 0; a < dataAll.length; a++)    {\n\n            dataProjects.forEach(project => {\n                for (let i = 0; i < project.tasks.length; i++)  {\n                    if (dataAll[a].id == project.tasks[i].id) {\n                        let array = Object.values(dataAll[a]),\n                            todoObj = (0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.ToDo)(array)\n                            todoObj.color = dataAll[a].color\n                            todoObj.id = dataAll[a].id\n                            dataAll[a] = todoObj\n                            project.tasks[i] = todoObj\n                            break\n                    }\n                }\n\n            })\n            let array = Object.values(dataAll[a]),\n                todoObj = (0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.ToDo)(array)\n                todoObj.color = dataAll[a].color\n                todoObj.id = dataAll[a].id\n                dataAll[a] = todoObj\n                let ele = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.CreateToDoItem)(todoObj)\n                ;(0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.Schedule)(todoObj)\n                list.appendChild(ele)\n        }\n        \n        return [dataAll, dataProjects]\n    }\n    return [[], []]\n}\n\n// function that detects either missing name or date from newly created todo's and projects.  Creates pop error messages\nfunction ErrorMsg(node, msg) {\n    if (node.childElementCount > 2) {\n        node.lastChild.classList.add('shake')\n        setTimeout(() => {\n            node.lastChild.classList.remove('shake')\n        }, 260)\n        return\n    }\n    else {\n        let popup = document.createElement('div')\n        popup.classList.add('name-error')\n        popup.textContent = msg\n\n        if(node == todoDate) {\n            popup.style.left = '25px'\n            popup.style.top = '-30px'\n        }\n\n        node.appendChild(popup)\n        node.onclick = () => {\n            node.removeChild(popup)\n            node.onclick = null\n        }\n    }\n    return\n}\n\n//# sourceURL=webpack://y/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MONTH\": () => (/* binding */ MONTH),\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Schedule\": () => (/* binding */ Schedule),\n/* harmony export */   \"TODAY\": () => (/* binding */ TODAY),\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo),\n/* harmony export */   \"WEEK\": () => (/* binding */ WEEK)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nconst modal = document.querySelector('#editModal')\nconst form = document.querySelector('#formEditToDo')\nconst edit = document.querySelector('#editToDo')\n\n// To-Do items are represented as objects.  Lists will be arrays which contain the To-Do objects\n\nconst TODAY = [] // List that contiains to-do objects due today, this week, and this month\nconst WEEK = []\nconst MONTH = []\n\n\n\n// to-do factory function, 5 attributes and 2 methods.  Parameter 'array' passed is a collection of the values pulled from input form createToDo provided by user\nfunction ToDo(array) {\n\n\n    return  {\n        'name': array[0],\n        'description': array[1],\n        'dueDate': array[2],\n        'priority': array[3],\n        'completed': false,\n        del(todo)   {\n            todo.parentNode.removeChild(todo)\n\n            let id = this.id\n            for (let a = 0; a < _index_js__WEBPACK_IMPORTED_MODULE_0__.ALL.length; a++)    {\n                if (_index_js__WEBPACK_IMPORTED_MODULE_0__.ALL[a].id == id)    {\n                    _index_js__WEBPACK_IMPORTED_MODULE_0__.ALL.splice(a, 1)\n                    break\n                }\n            }\n\n            for (let a = 0; a < TODAY.length; a++)    {\n                if (TODAY[a].id == id)    {\n                    TODAY.splice(a, 1)\n                    break\n                }\n            }\n\n            for (let a = 0; a < WEEK.length; a++)    {\n                if (WEEK[a].id == id)    {\n                    WEEK.splice(a, 1)\n                    break\n                }\n            }\n            for (let a = 0; a < MONTH.length; a++)    {\n                if (MONTH[a].id == id)    {\n                    MONTH.splice(a, 1)\n                    break\n                }\n            }\n\n            for (let b = 0; b < _index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS.length; b++) {\n                for (let c = 0; c < _index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS[b].tasks.length; c++ )   {\n                    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS[b].tasks[c].id == id)  {\n                        _index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS[b].tasks.splice(c, 1)\n                        break\n                    }\n                }\n            }\n            localStorage.setItem('ALL', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.ALL))\n            localStorage.setItem('PROJECTS', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS))\n        },\n        edit()  {\n            modal.style.display ='flex'\n            form.elements[0].value = this.name\n            form.elements[1].value = this.description\n            form.elements[2].value = this.dueDate\n            form.elements[3].checked = this.priority\n\n            // onclick used over eventlistener since we use the same edit button to modify all to-do objects.  Onclick updates the edit button's 'onclick' property\n            // each time it is clicked, tying it to the current to-do obj for modification.  Eventlisteners would have linked all objects together and edits would \n            // happen to several objects at once.\n            edit.onclick = () => {\n                //console.log(this, {ALL}, {PROJECTS})\n                this.name = form.elements[0].value\n                this.description = form.elements[1].value\n                this.dueDate = form.elements[2].value\n                this.priority = form.elements[3].checked\n                modal.style.display = 'none'\n                \n                let id = this.id\n                for (let a = 0; a < _index_js__WEBPACK_IMPORTED_MODULE_0__.ALL.length; a++)    {\n                    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.ALL[a].id == id)    {\n                        _index_js__WEBPACK_IMPORTED_MODULE_0__.ALL[a] = this\n                        break\n                    }\n                }\n                for (let b = 0; b < _index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS.length; b++) {\n                    for (let c = 0; c < _index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS[b].tasks.length; c++ )   {\n                        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS[b].tasks[c].id == id)  {\n                            _index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS[b].tasks[c] = this\n                            break\n                        }\n                    }\n                }\n                localStorage.setItem('ALL', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.ALL))\n                localStorage.setItem('PROJECTS', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.PROJECTS))\n\n            }\n            return this\n        }\n    }\n}\n\n// Project class.  An Object w/ 'name' and 'notes' elements, as well as a 'tasks' array, which holds that projects ToDo Objects.  The 'selected' boolean is used to push new ToDo's in the objects 'tasks' array\nclass Project {\n    constructor(array) {\n        this.name = array[0]\n        this.notes = array[1]\n        this.color = array[2]\n        this.tasks = []\n        this.selected = false\n    }\n}\n\n\n// This function organizes the param To-Do obj into the correct due-date list\nfunction Schedule(obj)  {\n    let today = new Date(),\n        due = new Date(obj.dueDate)\n    if (due.getDate() + 1 == today.getDate()) TODAY.push(obj)\n    if (due.getMonth() == today.getMonth()) MONTH.push(obj)\n    let week = today.setDate(today.getDate() + 7)\n    if (due <= week) WEEK.push(obj)\n    \n}\n\n//# sourceURL=webpack://y/./src/objects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store)\n/* harmony export */ });\nfunction Store(name, obj)    {\n    let data = JSON.parse(localStorage.getItem(name))\n    data.push(obj)\n    localStorage.setItem(name, JSON.stringify(data))\n}\n\n//# sourceURL=webpack://y/./src/storage.js?");

/***/ }),

/***/ "./src/leather.jpg":
/*!*************************!*\
  !*** ./src/leather.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89a597e90b1d44e76203.jpg\";\n\n//# sourceURL=webpack://y/./src/leather.jpg?");

/***/ }),

/***/ "./src/lined-paper-2.png":
/*!*******************************!*\
  !*** ./src/lined-paper-2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c5e9911c7da0779bba3.png\";\n\n//# sourceURL=webpack://y/./src/lined-paper-2.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;