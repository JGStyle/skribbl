/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/[id]",{

/***/ "./pages/game/[id].tsx":
/*!*****************************!*\
  !*** ./pages/game/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_CanvasUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/game/CanvasUI */ \"./components/game/CanvasUI.tsx\");\n/* harmony import */ var _components_chat_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/chat/Chat */ \"./components/chat/Chat.tsx\");\n/* harmony import */ var _components_players_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/players/Sidebar */ \"./components/players/Sidebar.tsx\");\n/* harmony import */ var _components_game_Topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/game/Topbar */ \"./components/game/Topbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jgs/jgs/Coding/Playground/rtd-t/frontend/pages/game/[id].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ExpandableSidebar() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"z-50 lg:static absolute\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"lg:hidden block absolute z-40\",\n      onClick: function onClick() {\n        return setActive(!active);\n      },\n      children: \"toggle\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"lg:static absolute\",\n      children: active && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_players_Sidebar__WEBPACK_IMPORTED_MODULE_3__.default, {\n        players: [{\n          name: \"alisia\",\n          id: \"1\",\n          score: 750,\n          wins: 2,\n          status: \"\"\n        }, {\n          name: \"josef\",\n          id: \"1\",\n          score: 750,\n          wins: 2,\n          status: \"\"\n        }],\n        admin: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ExpandableSidebar, \"1cfVChV6gA1Fk8+xDnwTj3gmgZo=\");\n\n_c = ExpandableSidebar;\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex justify-center items-center min-h-screen min-w-screen bg-main\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-col\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_Topbar__WEBPACK_IMPORTED_MODULE_4__.default, {\n        roomname: \"Peters raum\",\n        time: 30,\n        round: \"3/5\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"mr-4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExpandableSidebar, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_CanvasUI__WEBPACK_IMPORTED_MODULE_1__.default, {\n          disabled: false,\n          word: \"banana\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"ml-4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat_Chat__WEBPACK_IMPORTED_MODULE_2__.default, {\n            self: \"JGStyle\",\n            messages: [{\n              msg: \"Cooles Spiel\",\n              author: \"Alisia\",\n              color: \"#000\"\n            }]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ExpandableSidebar\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS9baWRdLnRzeD80ZTM1Il0sIm5hbWVzIjpbIkV4cGFuZGFibGVTaWRlYmFyIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJuYW1lIiwiaWQiLCJzY29yZSIsIndpbnMiLCJzdGF0dXMiLCJIb21lIiwibXNnIiwiYXV0aG9yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsaUJBQVQsR0FBNkI7QUFBQTs7QUFBQSxrQkFDQ0MsK0NBQVEsQ0FBQyxLQUFELENBRFQ7QUFBQSxNQUNwQkMsTUFEb0I7QUFBQSxNQUNaQyxTQURZOztBQUczQixzQkFDRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLCtCQURaO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUEsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsZ0JBQ0dBLE1BQU0saUJBQ0wsOERBQUMsZ0VBQUQ7QUFDRSxlQUFPLEVBQUUsQ0FDUDtBQUFFRSxjQUFJLEVBQUUsUUFBUjtBQUFrQkMsWUFBRSxFQUFFLEdBQXRCO0FBQTJCQyxlQUFLLEVBQUUsR0FBbEM7QUFBdUNDLGNBQUksRUFBRSxDQUE3QztBQUFnREMsZ0JBQU0sRUFBRTtBQUF4RCxTQURPLEVBRVA7QUFBRUosY0FBSSxFQUFFLE9BQVI7QUFBaUJDLFlBQUUsRUFBRSxHQUFyQjtBQUEwQkMsZUFBSyxFQUFFLEdBQWpDO0FBQXNDQyxjQUFJLEVBQUUsQ0FBNUM7QUFBK0NDLGdCQUFNLEVBQUU7QUFBdkQsU0FGTyxDQURYO0FBS0UsYUFBSyxFQUFFO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0F4QlFSLGlCOztLQUFBQSxpQjtBQTBCTSxTQUFTUyxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9FQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFLDhEQUFDLDREQUFEO0FBQVEsZ0JBQVEsRUFBQyxhQUFqQjtBQUErQixZQUFJLEVBQUUsRUFBckM7QUFBeUMsYUFBSyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0UsOERBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSw4REFBQyw4REFBRDtBQUFVLGtCQUFRLEVBQUUsS0FBcEI7QUFBMkIsY0FBSSxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGlDQUNFLDhEQUFDLDBEQUFEO0FBQ0UsZ0JBQUksRUFBQyxTQURQO0FBRUUsb0JBQVEsRUFBRSxDQUNSO0FBQUVDLGlCQUFHLEVBQUUsY0FBUDtBQUF1QkMsb0JBQU0sRUFBRSxRQUEvQjtBQUF5Q0MsbUJBQUssRUFBRTtBQUFoRCxhQURRO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJEO01BN0J1QkgsSSIsImZpbGUiOiIuL3BhZ2VzL2dhbWUvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzVUkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2FtZS9DYW52YXNVSVwiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2hhdC9DaGF0XCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wbGF5ZXJzL1NpZGViYXJcIjtcbmltcG9ydCBUb3BiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2FtZS9Ub3BiYXJcIjtcbmltcG9ydCBXb3JkcGlja2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dhbWUvV29yZHBpY2tlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gRXhwYW5kYWJsZVNpZGViYXIoKSB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgbGc6c3RhdGljIGFic29sdXRlXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiBibG9jayBhYnNvbHV0ZSB6LTQwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfVxuICAgICAgPlxuICAgICAgICB0b2dnbGVcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpzdGF0aWMgYWJzb2x1dGVcIj5cbiAgICAgICAge2FjdGl2ZSAmJiAoXG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIHBsYXllcnM9e1tcbiAgICAgICAgICAgICAgeyBuYW1lOiBcImFsaXNpYVwiLCBpZDogXCIxXCIsIHNjb3JlOiA3NTAsIHdpbnM6IDIsIHN0YXR1czogXCJcIiB9LFxuICAgICAgICAgICAgICB7IG5hbWU6IFwiam9zZWZcIiwgaWQ6IFwiMVwiLCBzY29yZTogNzUwLCB3aW5zOiAyLCBzdGF0dXM6IFwiXCIgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBhZG1pbj17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gbWluLXctc2NyZWVuIGJnLW1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8VG9wYmFyIHJvb21uYW1lPVwiUGV0ZXJzIHJhdW1cIiB0aW1lPXszMH0gcm91bmQ9XCIzLzVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTRcIj5cbiAgICAgICAgICAgIDxFeHBhbmRhYmxlU2lkZWJhcj48L0V4cGFuZGFibGVTaWRlYmFyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDYW52YXNVSSBkaXNhYmxlZD17ZmFsc2V9IHdvcmQ9XCJiYW5hbmFcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNFwiPlxuICAgICAgICAgICAgPENoYXRcbiAgICAgICAgICAgICAgc2VsZj1cIkpHU3R5bGVcIlxuICAgICAgICAgICAgICBtZXNzYWdlcz17W1xuICAgICAgICAgICAgICAgIHsgbXNnOiBcIkNvb2xlcyBTcGllbFwiLCBhdXRob3I6IFwiQWxpc2lhXCIsIGNvbG9yOiBcIiMwMDBcIiB9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPjwvQ2hhdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiB1bmNvbW1lbnQgdG8gc2hvdyB3b3JkcGlja2VyICovfVxuICAgICAgICB7LyogPFdvcmRwaWNrZXJcbiAgICAgICAgICB3b3Jkcz17W1wiaGFtYnVyZ2VyXCIsIFwiYXBwbHBsZVwiLCBcImJhbGxhcHBsZVwiXX1cbiAgICAgICAgICBjaG9vc2VXb3JkPXsodykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/game/[id].tsx\n");

/***/ })

});