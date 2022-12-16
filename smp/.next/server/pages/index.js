"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _prisma_client__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _prisma_client__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\",\n        \"error\",\n        \"info\",\n        \"warn\"\n    ]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQUM5QyxNQUFNQyxNQUFNLEdBQUcsSUFBSUQsd0RBQVksQ0FBQztJQUM5QkUsR0FBRyxFQUFFO1FBQUMsT0FBTztRQUFFLE9BQU87UUFBRSxNQUFNO1FBQUUsTUFBTTtLQUFDO0NBQ3hDLENBQUM7QUFDRixpRUFBZUQsTUFBTSxFQUFDO0FBRVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbXAvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHtcbiAgbG9nOiBbXCJxdWVyeVwiLCBcImVycm9yXCIsIFwiaW5mb1wiLCBcIndhcm5cIl0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcblxuZXhwb3J0ICogZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.ts\");\n\n\nconst getServerSideProps = async ()=>{\n    const count = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.count();\n    return {\n        props: {\n            count\n        }\n    };\n};\nconst Home = ({ count  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: `User Count: ${count}`\n        }, void 0, false, {\n            fileName: \"/Users/kenjimorita/git/workspace/smp/pages/index.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kenjimorita/git/workspace/smp/pages/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNrQztBQU0zQixNQUFNQyxrQkFBa0IsR0FBOEIsVUFBWTtJQUN2RSxNQUFNQyxLQUFLLEdBQUcsTUFBTUYsOERBQWlCLEVBQUU7SUFDdkMsT0FBTztRQUNMSSxLQUFLLEVBQUU7WUFDTEYsS0FBSztTQUNOO0tBQ0Y7Q0FDRjtBQUNELE1BQU1HLElBQUksR0FBb0IsQ0FBQyxFQUFFSCxLQUFLLEdBQUUsR0FBSztJQUMzQyxxQkFDRSw4REFBQ0ksS0FBRztrQkFDRiw0RUFBQ0MsSUFBRTtzQkFBRSxDQUFDLFlBQVksRUFBRUwsS0FBSyxDQUFDLENBQUM7Ozs7O3FCQUFNOzs7OztpQkFDN0IsQ0FDUDtDQUNGO0FBRUQsaUVBQWVHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbXAvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdldFNlcnZlclNpZGVQcm9wcywgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi9saWIvcHJpc21hJ1xuXG50eXBlIFByb3BzID0ge1xuICBjb3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczxQcm9wcz4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLnVzZXIuY291bnQoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfVxufVxuY29uc3QgSG9tZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgY291bnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2BVc2VyIENvdW50OiAke2NvdW50fWB9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsicHJpc21hIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY291bnQiLCJ1c2VyIiwicHJvcHMiLCJIb21lIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();