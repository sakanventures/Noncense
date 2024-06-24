"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/custom/feed.tsx":
/*!************************************!*\
  !*** ./components/custom/feed.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Feed; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/badge */ \"(app-pages-browser)/./components/ui/badge.tsx\");\n/* harmony import */ var _components_custom_latest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/custom/latest */ \"(app-pages-browser)/./components/custom/latest.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Feed() {\n    _s();\n    const baseUrl = \"http://localhost:1337\";\n    const [articleProps, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchArticle = async ()=>{\n            try {\n                const res = await fetch(\"\".concat(baseUrl, \"/api/articles?pagination[limit]=3&sort=publishedAt:desc&populate=*\"));\n                if (!res.ok) {\n                    throw new Error(\"Failed to fetch articles\");\n                }\n                const jsonData = await res.json();\n                const postData = jsonData.data;\n                setArticle(postData);\n            } catch (error) {\n                console.error(\"Error fetching articles:\", error);\n                setError(\"Failed to fetch articles\");\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchArticle();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between m-8\",\n        children: [\n            !loading && articleProps.length > 0 ? articleProps.map((post, idx)=>{\n                const thumbnail = post.attributes.Thumbnail.data.attributes.url;\n                const { Category, Tags } = post.attributes;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/articles/\".concat(post.attributes.Slug),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                            className: \"rounded-lg w-[300px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: baseUrl + thumbnail,\n                                    alt: post.attributes.Title,\n                                    className: \"w-full rounded-t-lg\",\n                                    width: 1000,\n                                    height: 1000\n                                }, void 0, false, {\n                                    fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex space-x-2 py-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {\n                                                    variant: \"secondary\",\n                                                    children: Category\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {\n                                                    variant: \"secondary\",\n                                                    children: Tags\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {\n                                            children: post.attributes.Title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 15\n                    }, this)\n                }, idx, false, {\n                    fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, this);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: loading ? \"Loading...\" : \"No articles available\"\n            }, void 0, false, {\n                fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custom_latest__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sterlingsavariau/Code/Development/Noncense/frontend/components/custom/feed.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(Feed, \"pSvyytbkIo3WhbdP+4cs/HDj+Hg=\");\n_c = Feed;\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY3VzdG9tL2ZlZWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ2Y7QUFDRTtBQUNxQztBQUN0QjtBQUNFO0FBOENqQyxTQUFTUzs7SUFDdEIsTUFBTUMsVUFBVTtJQUNoQixNQUFNLENBQUNDLGNBQWNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQWlCLEVBQUU7SUFDOUQsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFVO0lBQ2hELE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBZ0I7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLGVBQWU7WUFDbkIsSUFBSTtnQkFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLEdBQVcsT0FBUlQsU0FBUTtnQkFFYixJQUFJLENBQUNRLElBQUlFLEVBQUUsRUFBRTtvQkFDWCxNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU1DLFdBQVcsTUFBTUosSUFBSUssSUFBSTtnQkFDL0IsTUFBTUMsV0FBMkJGLFNBQVNHLElBQUk7Z0JBQzlDYixXQUFXWTtZQUNiLEVBQUUsT0FBT1QsT0FBTztnQkFDZFcsUUFBUVgsS0FBSyxDQUFDLDRCQUE0QkE7Z0JBQzFDQyxTQUFTO1lBQ1gsU0FBVTtnQkFDUkYsV0FBVztZQUNiO1FBQ0Y7UUFFQUc7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7WUFDWixDQUFDZixXQUFXRixhQUFha0IsTUFBTSxHQUFHLElBQ2pDbEIsYUFBYW1CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztnQkFDdEIsTUFBTUMsWUFBWUYsS0FBS0csVUFBVSxDQUFDQyxTQUFTLENBQUNWLElBQUksQ0FBQ1MsVUFBVSxDQUFDRSxHQUFHO2dCQUMvRCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFLEdBQUdQLEtBQUtHLFVBQVU7Z0JBRTFDLHFCQUNFLDhEQUFDUDtvQkFBY0MsV0FBVTs4QkFDdkIsNEVBQUMxQixpREFBSUE7d0JBQUNxQyxNQUFNLGFBQWtDLE9BQXJCUixLQUFLRyxVQUFVLENBQUNNLElBQUk7d0JBQUlDLFFBQVE7a0NBQ3pELDRFQUFDckMscURBQUlBOzRCQUFDd0IsV0FBVTs7OENBQ2QsOERBQUN6QixrREFBS0E7b0NBQ0p1QyxLQUFLaEMsVUFBUXVCO29DQUNiVSxLQUFLWixLQUFLRyxVQUFVLENBQUNVLEtBQUs7b0NBQzFCaEIsV0FBVTtvQ0FDVmlCLE9BQU87b0NBQ1BDLFFBQVE7Ozs7Ozs4Q0FFViw4REFBQ3pDLDREQUFXQTs7c0RBQ1YsOERBQUNzQjs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNyQix1REFBS0E7b0RBQUN3QyxTQUFROzhEQUFhVjs7Ozs7OzhEQUM1Qiw4REFBQzlCLHVEQUFLQTtvREFBQ3dDLFNBQVE7OERBQWFUOzs7Ozs7Ozs7Ozs7c0RBRTlCLDhEQUFDaEMsMERBQVNBO3NEQUFFeUIsS0FBS0csVUFBVSxDQUFDVSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFmN0JaOzs7OztZQXFCZCxtQkFFQSw4REFBQ0w7MEJBQUtkLFVBQVUsZUFBZTs7Ozs7OzBCQUVqQyw4REFBQ0wsaUVBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBakV3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdXN0b20vZmVlZC50c3g/YTU5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IExhdGVzdCBmcm9tIFwiQC9jb21wb25lbnRzL2N1c3RvbS9sYXRlc3RcIjtcblxuaW50ZXJmYWNlIEltYWdlRGF0YSB7XG4gIGlkOiBudW1iZXI7XG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWx0ZXJuYXRpdmVUZXh0OiBzdHJpbmcgfCBudWxsO1xuICAgIGNhcHRpb246IHN0cmluZyB8IG51bGw7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBmb3JtYXRzOiB7XG4gICAgICB0aHVtYm5haWw6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgICB9O1xuICAgICAgc21hbGw6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgICB9O1xuICAgICAgbWVkaXVtOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgfTtcbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHVybDogc3RyaW5nO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgQXJ0aWNsZVByb3BzIHtcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogJ2FydGljbGUnIHwgJ2VwaXNvZGUnO1xuICBhdHRyaWJ1dGVzOiB7XG4gICAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gICAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gICAgU2x1Zzogc3RyaW5nO1xuICAgIFRpdGxlOiBzdHJpbmc7XG4gICAgaXNGZWF0dXJlZDogYm9vbGVhbjtcbiAgICBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIENhdGVnb3J5OiBzdHJpbmc7XG4gICAgVGFnczogc3RyaW5nO1xuICAgIFRodW1ibmFpbDoge1xuICAgICAgZGF0YTogSW1hZ2VEYXRhO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlZWQoKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuICBjb25zdCBbYXJ0aWNsZVByb3BzLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlPEFydGljbGVQcm9wc1tdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hBcnRpY2xlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYCR7YmFzZVVybH0vYXBpL2FydGljbGVzP3BhZ2luYXRpb25bbGltaXRdPTMmc29ydD1wdWJsaXNoZWRBdDpkZXNjJnBvcHVsYXRlPSpgXG4gICAgICAgICk7XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggYXJ0aWNsZXMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhOiBBcnRpY2xlUHJvcHNbXSA9IGpzb25EYXRhLmRhdGE7XG4gICAgICAgIHNldEFydGljbGUocG9zdERhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYXJ0aWNsZXM6JywgZXJyb3IpO1xuICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGZldGNoIGFydGljbGVzJyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hBcnRpY2xlKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbS04XCI+XG4gICAgICB7IWxvYWRpbmcgJiYgYXJ0aWNsZVByb3BzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIGFydGljbGVQcm9wcy5tYXAoKHBvc3QsIGlkeCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IHBvc3QuYXR0cmlidXRlcy5UaHVtYm5haWwuZGF0YS5hdHRyaWJ1dGVzLnVybDtcbiAgICAgICAgICBjb25zdCB7IENhdGVnb3J5LCBUYWdzIH0gPSBwb3N0LmF0dHJpYnV0ZXNcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FydGljbGVzLyR7cG9zdC5hdHRyaWJ1dGVzLlNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1bMzAwcHhdXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2Jhc2VVcmwrdGh1bWJuYWlsfSBcbiAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5hdHRyaWJ1dGVzLlRpdGxlfSBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXQtbGdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMDB9IC8+XG5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57Q2F0ZWdvcnl9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57VGFnc308L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPntwb3N0LmF0dHJpYnV0ZXMuVGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj57bG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogXCJObyBhcnRpY2xlcyBhdmFpbGFibGVcIn08L2Rpdj5cbiAgICAgICl9XG4gICAgICA8TGF0ZXN0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkVGl0bGUiLCJCYWRnZSIsIkxhdGVzdCIsIkZlZWQiLCJiYXNlVXJsIiwiYXJ0aWNsZVByb3BzIiwic2V0QXJ0aWNsZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoQXJ0aWNsZSIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImpzb25EYXRhIiwianNvbiIsInBvc3REYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaWR4IiwidGh1bWJuYWlsIiwiYXR0cmlidXRlcyIsIlRodW1ibmFpbCIsInVybCIsIkNhdGVnb3J5IiwiVGFncyIsImhyZWYiLCJTbHVnIiwicGFzc0hyZWYiLCJzcmMiLCJhbHQiLCJUaXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/custom/feed.tsx\n"));

/***/ })

});