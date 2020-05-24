webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\n/* harmony import */ var _styles_Auth_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Auth.module.css */ \"./styles/Auth.module.css\");\n/* harmony import */ var _styles_Auth_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Auth_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/home/localuser/.devpost/spring_payments_marqeta/webapp/pages/login.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction LoginPage() {\n  _s();\n\n  var registrationForm = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      pswd = _useState2[0],\n      setPswd = _useState2[1];\n\n  var handleEChange = function handleEChange(event) {\n    setEmail(event.target.value);\n  };\n\n  var handlePChange = function handlePChange(event) {\n    setPswd(event.target.value);\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      var resp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.next = 3;\n              return Object(_services_api__WEBPACK_IMPORTED_MODULE_5__[\"loginUser\"])(email, pswd);\n\n            case 3:\n              resp = _context.sent;\n\n              if (resp.status === 200 && resp.data.exists === true) {\n                localStorage.setItem('token', resp.data.accessToken); // alert(`Logging in ${resp.data.user.email}!`);\n\n                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, \"Return to the homepage.\")), __jsx(\"form\", {\n    ref: registrationForm,\n    onSubmit: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, \"Welcome back! Please sign in.\"), __jsx(\"label\", {\n    \"for\": \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, \"Email\"), __jsx(\"input\", {\n    type: \"email\",\n    onChange: handleEChange,\n    value: email,\n    placeholder: \"Enter your email address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }), __jsx(\"label\", {\n    \"for\": \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }, \"Password\"), __jsx(\"input\", {\n    type: \"password\",\n    onChange: handlePChange,\n    value: pswd,\n    placeholder: \"Enter your password\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    className: _styles_Auth_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.athBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, \"Sign In\")));\n}\n\n_s(LoginPage, \"2y59z5Tn7W54SQDm2l1FFRd/svU=\");\n\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkxvZ2luUGFnZSIsInJlZ2lzdHJhdGlvbkZvcm0iLCJjcmVhdGVSZWYiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwc3dkIiwic2V0UHN3ZCIsImhhbmRsZUVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW5Vc2VyIiwicmVzcCIsInN0YXR1cyIsImRhdGEiLCJleGlzdHMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYWNjZXNzVG9rZW4iLCJSb3V0ZXIiLCJwdXNoIiwic3R5bGVzIiwiYXRoQnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUNqQixNQUFJQyxnQkFBZ0IsR0FBR0MsdURBQVMsRUFBaEM7O0FBRGlCLGtCQUdTQyxzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUdWQyxLQUhVO0FBQUEsTUFHSEMsUUFIRzs7QUFBQSxtQkFJT0Ysc0RBQVEsQ0FBQyxFQUFELENBSmY7QUFBQSxNQUlWRyxJQUpVO0FBQUEsTUFJSkMsT0FKSTs7QUFNakIsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDM0JKLFlBQVEsQ0FBQ0ksS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDSCxLQUFELEVBQVc7QUFDM0JGLFdBQU8sQ0FBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBSUUsWUFBWTtBQUFBLGdNQUFHLGlCQUFPSixLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQSxtQkFBSyxDQUFDSyxjQUFOO0FBRGU7QUFBQSxxQkFFRUMsK0RBQVMsQ0FBQ1gsS0FBRCxFQUFRRSxJQUFSLENBRlg7O0FBQUE7QUFFWFUsa0JBRlc7O0FBSWYsa0JBQUlBLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixJQUF1QkQsSUFBSSxDQUFDRSxJQUFMLENBQVVDLE1BQVYsS0FBcUIsSUFBaEQsRUFBc0Q7QUFFbERDLDRCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJMLElBQUksQ0FBQ0UsSUFBTCxDQUFVSSxXQUF4QyxFQUZrRCxDQUdsRDs7QUFDQUMsa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSDs7QUFUYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaWCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQVlBLFNBQ0ksbUVBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLENBREosRUFLSTtBQUFNLE9BQUcsRUFBRVosZ0JBQVg7QUFBNkIsWUFBUSxFQUFFWSxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FGSixFQUlJO0FBQU8sV0FBSSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixFQUtJO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBUSxFQUFFTCxhQUE5QjtBQUE2QyxTQUFLLEVBQUVKLEtBQXBEO0FBQTJELGVBQVcsRUFBQywwQkFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBTyxXQUFJLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixFQU9JO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsWUFBUSxFQUFFUSxhQUFqQztBQUFnRCxTQUFLLEVBQUVOLElBQXZEO0FBQTZELGVBQVcsRUFBQyxxQkFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBU0k7QUFBUSxhQUFTLEVBQUVtQiw4REFBTSxDQUFDQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosQ0FMSixDQURKO0FBb0JIOztHQTlDUTFCLFM7O0tBQUFBLFM7QUFnRE1BLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7bG9naW5Vc2VyfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQXV0aC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTG9naW5QYWdlKCkge1xuICAgIGxldCByZWdpc3RyYXRpb25Gb3JtID0gY3JlYXRlUmVmKCk7XG5cbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwc3dkLCBzZXRQc3dkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgbGV0IGhhbmRsZUVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlUENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRQc3dkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgcmVzcCA9IGF3YWl0IGxvZ2luVXNlcihlbWFpbCwgcHN3ZCk7XG4gICAgICAgIFxuICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDIwMCAmJiByZXNwLmRhdGEuZXhpc3RzID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3AuZGF0YS5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAvLyBhbGVydChgTG9nZ2luZyBpbiAke3Jlc3AuZGF0YS51c2VyLmVtYWlsfSFgKTtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgIDxhPlJldHVybiB0byB0aGUgaG9tZXBhZ2UuPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Zm9ybSByZWY9e3JlZ2lzdHJhdGlvbkZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxoND5XZWxjb21lIGJhY2shIFBsZWFzZSBzaWduIGluLjwvaDQ+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBvbkNoYW5nZT17aGFuZGxlRUNoYW5nZX0gdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG9uQ2hhbmdlPXtoYW5kbGVQQ2hhbmdlfSB2YWx1ZT17cHN3ZH0gcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgcGFzc3dvcmQnIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hdGhCdG59PlNpZ24gSW48L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})