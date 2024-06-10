"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@strapi";
exports.ids = ["vendor-chunks/@strapi"];
exports.modules = {

/***/ "(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/Block.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@strapi/blocks-react-renderer/dist/Block.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Block: () => (/* binding */ Block)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlocksRenderer.mjs */ \"(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs\");\n/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text.mjs */ \"(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/Text.mjs\");\n\n\n\n\nconst voidTypes = [\"image\"];\nconst augmentProps = (content) => {\n  const { children: childrenNodes, type, ...props } = content;\n  if (type === \"code\") {\n    const getPlainText = (children) => {\n      return children.reduce((currentPlainText, node) => {\n        if (node.type === \"text\") {\n          return currentPlainText.concat(node.text);\n        }\n        if (node.type === \"link\") {\n          return currentPlainText.concat(getPlainText(node.children));\n        }\n        return currentPlainText;\n      }, \"\");\n    };\n    return {\n      ...props,\n      plainText: getPlainText(content.children)\n    };\n  }\n  return props;\n};\nconst Block = ({ content }) => {\n  const { children: childrenNodes, type, ...props } = content;\n  const { blocks, missingBlockTypes } = (0,_BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_2__.useComponentsContext)();\n  const BlockComponent = blocks[type];\n  if (!BlockComponent) {\n    if (!missingBlockTypes.includes(type)) {\n      console.warn(`[@strapi/block-react-renderer] No component found for block type \"${type}\"`);\n      missingBlockTypes.push(type);\n    }\n    return null;\n  }\n  if (voidTypes.includes(type)) {\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockComponent, { ...props });\n  }\n  if (type === \"paragraph\" && childrenNodes.length === 1 && childrenNodes[0].type === \"text\" && childrenNodes[0].text === \"\") {\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {});\n  }\n  const augmentedProps = augmentProps(content);\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockComponent, { ...augmentedProps, children: childrenNodes.map((childNode, index) => {\n    if (childNode.type === \"text\") {\n      const { type: _type, ...childNodeProps } = childNode;\n      return /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Text_mjs__WEBPACK_IMPORTED_MODULE_3__.Text, { ...childNodeProps, key: index });\n    }\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block, { content: childNode }, index);\n  }) });\n};\n\n//# sourceMappingURL=Block.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXIvZGlzdC9CbG9jay5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDRjtBQUNzQjtBQUMxQjtBQUNsQztBQUNBO0FBQ0EsVUFBVSwwQ0FBMEM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCLFVBQVUsMENBQTBDO0FBQ3BELFVBQVUsNEJBQTRCLEVBQUUseUVBQW9CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RixLQUFLO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQUcsbUJBQW1CLFVBQVU7QUFDM0Q7QUFDQTtBQUNBLDJCQUEyQixzREFBRyxTQUFTO0FBQ3ZDO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQUcsbUJBQW1CO0FBQy9DO0FBQ0EsY0FBYyxpQ0FBaUM7QUFDL0MsNkJBQTZCLG9EQUFhLENBQUMsMkNBQUksSUFBSSwrQkFBK0I7QUFDbEY7QUFDQSwyQkFBMkIsc0RBQUcsVUFBVSxvQkFBb0I7QUFDNUQsR0FBRyxHQUFHO0FBQ047QUFHRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXIvZGlzdC9CbG9jay5tanM/NDk5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbXBvbmVudHNDb250ZXh0IH0gZnJvbSBcIi4vQmxvY2tzUmVuZGVyZXIubWpzXCI7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSBcIi4vVGV4dC5tanNcIjtcbmNvbnN0IHZvaWRUeXBlcyA9IFtcImltYWdlXCJdO1xuY29uc3QgYXVnbWVudFByb3BzID0gKGNvbnRlbnQpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbjogY2hpbGRyZW5Ob2RlcywgdHlwZSwgLi4ucHJvcHMgfSA9IGNvbnRlbnQ7XG4gIGlmICh0eXBlID09PSBcImNvZGVcIikge1xuICAgIGNvbnN0IGdldFBsYWluVGV4dCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuLnJlZHVjZSgoY3VycmVudFBsYWluVGV4dCwgbm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSBcInRleHRcIikge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50UGxhaW5UZXh0LmNvbmNhdChub2RlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwibGlua1wiKSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRQbGFpblRleHQuY29uY2F0KGdldFBsYWluVGV4dChub2RlLmNoaWxkcmVuKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQbGFpblRleHQ7XG4gICAgICB9LCBcIlwiKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIHBsYWluVGV4dDogZ2V0UGxhaW5UZXh0KGNvbnRlbnQuY2hpbGRyZW4pXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcHJvcHM7XG59O1xuY29uc3QgQmxvY2sgPSAoeyBjb250ZW50IH0pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbjogY2hpbGRyZW5Ob2RlcywgdHlwZSwgLi4ucHJvcHMgfSA9IGNvbnRlbnQ7XG4gIGNvbnN0IHsgYmxvY2tzLCBtaXNzaW5nQmxvY2tUeXBlcyB9ID0gdXNlQ29tcG9uZW50c0NvbnRleHQoKTtcbiAgY29uc3QgQmxvY2tDb21wb25lbnQgPSBibG9ja3NbdHlwZV07XG4gIGlmICghQmxvY2tDb21wb25lbnQpIHtcbiAgICBpZiAoIW1pc3NpbmdCbG9ja1R5cGVzLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtAc3RyYXBpL2Jsb2NrLXJlYWN0LXJlbmRlcmVyXSBObyBjb21wb25lbnQgZm91bmQgZm9yIGJsb2NrIHR5cGUgXCIke3R5cGV9XCJgKTtcbiAgICAgIG1pc3NpbmdCbG9ja1R5cGVzLnB1c2godHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh2b2lkVHlwZXMuaW5jbHVkZXModHlwZSkpIHtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChCbG9ja0NvbXBvbmVudCwgeyAuLi5wcm9wcyB9KTtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJwYXJhZ3JhcGhcIiAmJiBjaGlsZHJlbk5vZGVzLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlbk5vZGVzWzBdLnR5cGUgPT09IFwidGV4dFwiICYmIGNoaWxkcmVuTm9kZXNbMF0udGV4dCA9PT0gXCJcIikge1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFwiYnJcIiwge30pO1xuICB9XG4gIGNvbnN0IGF1Z21lbnRlZFByb3BzID0gYXVnbWVudFByb3BzKGNvbnRlbnQpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChCbG9ja0NvbXBvbmVudCwgeyAuLi5hdWdtZW50ZWRQcm9wcywgY2hpbGRyZW46IGNoaWxkcmVuTm9kZXMubWFwKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGNoaWxkTm9kZS50eXBlID09PSBcInRleHRcIikge1xuICAgICAgY29uc3QgeyB0eXBlOiBfdHlwZSwgLi4uY2hpbGROb2RlUHJvcHMgfSA9IGNoaWxkTm9kZTtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gY3JlYXRlRWxlbWVudChUZXh0LCB7IC4uLmNoaWxkTm9kZVByb3BzLCBrZXk6IGluZGV4IH0pO1xuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChCbG9jaywgeyBjb250ZW50OiBjaGlsZE5vZGUgfSwgaW5kZXgpO1xuICB9KSB9KTtcbn07XG5leHBvcnQge1xuICBCbG9ja1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJsb2NrLm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/Block.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BlocksRenderer: () => (/* binding */ BlocksRenderer),\n/* harmony export */   ComponentsProvider: () => (/* binding */ ComponentsProvider),\n/* harmony export */   useComponentsContext: () => (/* binding */ useComponentsContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _Block_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Block.mjs */ \"(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/Block.mjs\");\n/* __next_internal_client_entry_do_not_use__ BlocksRenderer,ComponentsProvider,useComponentsContext auto */ \n\n\nconst defaultComponents = {\n    blocks: {\n        paragraph: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                children: props.children\n            }),\n        quote: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"blockquote\", {\n                children: props.children\n            }),\n        code: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"pre\", {\n                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"code\", {\n                    children: props.plainText\n                })\n            }),\n        heading: ({ level, children })=>{\n            switch(level){\n                case 1:\n                    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        children\n                    });\n                case 2:\n                    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        children\n                    });\n                case 3:\n                    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        children\n                    });\n                case 4:\n                    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                        children\n                    });\n                case 5:\n                    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                        children\n                    });\n                case 6:\n                    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h6\", {\n                        children\n                    });\n            }\n        },\n        link: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                href: props.url,\n                children: props.children\n            }),\n        list: (props)=>{\n            if (props.format === \"ordered\") {\n                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ol\", {\n                    children: props.children\n                });\n            }\n            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                children: props.children\n            });\n        },\n        \"list-item\": (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                children: props.children\n            }),\n        image: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: props.image.url,\n                alt: props.image.alternativeText || void 0\n            })\n    },\n    modifiers: {\n        bold: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                children: props.children\n            }),\n        italic: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"em\", {\n                children: props.children\n            }),\n        underline: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"u\", {\n                children: props.children\n            }),\n        strikethrough: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"del\", {\n                children: props.children\n            }),\n        code: (props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"code\", {\n                children: props.children\n            })\n    },\n    missingBlockTypes: [],\n    missingModifierTypes: []\n};\nconst ComponentsContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(defaultComponents);\nconst ComponentsProvider = ({ children, value = defaultComponents })=>{\n    const memoizedValue = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>value, [\n        value\n    ]);\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ComponentsContext.Provider, {\n        value: memoizedValue,\n        children\n    });\n};\nfunction useComponentsContext() {\n    return react__WEBPACK_IMPORTED_MODULE_1__.useContext(ComponentsContext);\n}\nconst BlocksRenderer = (props)=>{\n    const blocks = {\n        ...defaultComponents.blocks,\n        ...props.blocks\n    };\n    const modifiers = {\n        ...defaultComponents.modifiers,\n        ...props.modifiers\n    };\n    const missingBlockTypes = react__WEBPACK_IMPORTED_MODULE_1__.useRef([]);\n    const missingModifierTypes = react__WEBPACK_IMPORTED_MODULE_1__.useRef([]);\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ComponentsProvider, {\n        value: {\n            blocks,\n            modifiers,\n            missingBlockTypes: missingBlockTypes.current,\n            missingModifierTypes: missingModifierTypes.current\n        },\n        children: props.content.map((content, index)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Block_mjs__WEBPACK_IMPORTED_MODULE_2__.Block, {\n                content\n            }, index))\n    });\n};\n //# sourceMappingURL=BlocksRenderer.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXIvZGlzdC9CbG9ja3NSZW5kZXJlci5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBc0hBLE1BQUFBLG9CQUFBO0lBQWtEQyxRQUFBO1FBQ3hDQyxXQUFBLENBQUFDLFFBQUEsZ0JBQUFDLHNEQUFBQSxDQUFBO2dCQUFBQyxVQUFBRixNQUFBRSxRQUFBO1lBQUE7UUFDbUNDLE9BQUEsQ0FBQUgsUUFBQSxnQkFBQUMsc0RBQUFBLENBQUE7Z0JBQUFDLFVBQUFGLE1BQUFFLFFBQUE7WUFBQTtRQUNLRSxNQUFBLENBQUFKLFFBQUEsZ0JBQUFDLHNEQUFBQSxDQUFBO2dCQUFBQyxVQUFBLGdCQUFBRCxzREFBQUEsQ0FBQTtvQkFBQUMsVUFBQUYsTUFBQUssU0FBQTtnQkFBQTtZQUFBO1FBSTVDQyxTQUFBLEdBQUFDLEtBQUEsRUFBQUwsUUFBQTtZQUdBLE9BQUFLO2dCQUFlO29CQUVKLHVCQUFBTixzREFBQUEsQ0FBQTt3QkFBQUM7b0JBQUE7Z0JBQWM7b0JBRWQsdUJBQUFELHNEQUFBQSxDQUFBO3dCQUFBQztvQkFBQTtnQkFBYztvQkFFZCx1QkFBQUQsc0RBQUFBLENBQUE7d0JBQUFDO29CQUFBO2dCQUFjO29CQUVkLHVCQUFBRCxzREFBQUEsQ0FBQTt3QkFBQUM7b0JBQUE7Z0JBQWM7b0JBRWQsdUJBQUFELHNEQUFBQSxDQUFBO3dCQUFBQztvQkFBQTtnQkFBYztvQkFFZCx1QkFBQUQsc0RBQUFBLENBQUE7d0JBQUFDO29CQUFBO1lBQWM7UUFDekI7UUFDRk0sTUFBQSxDQUFBUixRQUFBLGdCQUFBQyxzREFBQUEsQ0FBQTtnQkFBQVEsTUFBQVQsTUFBQVUsR0FBQTtnQkFBQVIsVUFBQUYsTUFBQUUsUUFBQTtZQUFBO1FBQ3FEUyxNQUFBLENBQUFYO1lBRS9DLElBQUFBLE1BQUFZLE1BQUE7Z0JBQ0ssdUJBQUFYLHNEQUFBQSxDQUFBO29CQUFBQyxVQUFBRixNQUFBRSxRQUFBO2dCQUFBO1lBQW9CO1lBR3RCLHVCQUFBRCxzREFBQUEsQ0FBQTtnQkFBQUMsVUFBQUYsTUFBQUUsUUFBQTtZQUFBO1FBQW9CO1FBQzdCLGNBQUFGLFFBQUEsZ0JBQUFDLHNEQUFBQSxDQUFBO2dCQUFBQyxVQUFBRixNQUFBRSxRQUFBO1lBQUE7UUFDNENXLE9BQUEsQ0FBQWIsUUFBQSxnQkFBQUMsc0RBQUFBLENBQUE7Z0JBQUFhLEtBQUFkLE1BQUFhLEtBQUEsQ0FBQUgsR0FBQTtnQkFBQUssS0FBQWYsTUFBQWEsS0FBQSxDQUFBRyxlQUFBO1lBQUE7SUFDZ0Q7SUFDOUZDLFdBQUE7UUFDV0MsTUFBQSxDQUFBbEIsUUFBQSxnQkFBQUMsc0RBQUFBLENBQUE7Z0JBQUFDLFVBQUFGLE1BQUFFLFFBQUE7WUFBQTtRQUNnQ2lCLFFBQUEsQ0FBQW5CLFFBQUEsZ0JBQUFDLHNEQUFBQSxDQUFBO2dCQUFBQyxVQUFBRixNQUFBRSxRQUFBO1lBQUE7UUFDRmtCLFdBQUEsQ0FBQXBCLFFBQUEsZ0JBQUFDLHNEQUFBQSxDQUFBO2dCQUFBQyxVQUFBRixNQUFBRSxRQUFBO1lBQUE7UUFDRW1CLGVBQUEsQ0FBQXJCLFFBQUEsZ0JBQUFDLHNEQUFBQSxDQUFBO2dCQUFBQyxVQUFBRixNQUFBRSxRQUFBO1lBQUE7UUFDTUUsTUFBQSxDQUFBSixRQUFBLGdCQUFBQyxzREFBQUEsQ0FBQTtnQkFBQUMsVUFBQUYsTUFBQUUsUUFBQTtZQUFBO0lBQ1I7SUFDekNvQixtQkFBQTtJQUNvQkMsc0JBQUE7QUFFdEI7QUFNQSxNQUFBQyxrQ0FBQUMsZ0RBQUEsQ0FBQTVCO0FBUUEsTUFBQThCLHFCQUFBLEdBQUF6QixRQUFBLEVBQUEwQixRQUFBL0IsaUJBQUE7SUFDRSxNQUFBZ0MsZ0JBQUFKLDBDQUFBLEtBQUFHLE9BQUE7UUFBQUE7S0FBQTtJQUVBLHVCQUFBM0Isc0RBQUFBLENBQUF1QixrQkFBQU8sUUFBQTtRQUFBSCxPQUFBQztRQUFBM0I7SUFBQTtBQUNGO0FBRUEsU0FBQThCO0lBQ1MsT0FBQVAsNkNBQUEsQ0FBQUQ7QUFDVDtBQVlNLE1BQUFVLGlCQUFBLENBQUFsQztJQUVKLE1BQUFGLFNBQUE7UUFBZSxHQUFBRCxrQkFBQUMsTUFBQTtRQUNRLEdBQUFFLE1BQUFGLE1BQUE7SUFDWjtJQUlYLE1BQUFtQixZQUFBO1FBQWtCLEdBQUFwQixrQkFBQW9CLFNBQUE7UUFDSyxHQUFBakIsTUFBQWlCLFNBQUE7SUFDWjtJQUlYLE1BQUFLLG9CQUFBRyx5Q0FBQTtJQUNBLE1BQUFGLHVCQUFBRSx5Q0FBQTtJQUdFLHVCQUFBeEIsc0RBQUFBLENBQUEwQixvQkFBQztRQUFBQyxPQUFBO1lBQ1E5QjtZQUNMbUI7WUFDQUssbUJBQUFBLGtCQUFBYyxPQUFBO1lBQ3FDYixzQkFBQUEscUJBQUFhLE9BQUE7UUFDTTtRQUM3Q2xDLFVBQUFGLE1BQUFxQyxPQUFBLENBQUFDLEdBQUEsRUFBQUQsU0FBQUUsUUFBQSxnQkFBQXRDLHNEQUFBQSxDQUFBdUMsNkNBQUFBLEVBQUE7Z0JBQUFIO1lBQUEsR0FBQUU7SUFLQztBQUdQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi4vc3JjL0Jsb2Nrc1JlbmRlcmVyLnRzeD81NThhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gJy4vQmxvY2snO1xuaW1wb3J0IHsgdHlwZSBNb2RpZmllciwgdHlwZSBUZXh0SW5saW5lTm9kZSB9IGZyb20gJy4vVGV4dCc7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR5cGVTY3JpcHQgdHlwZXMgYW5kIHV0aWxzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmludGVyZmFjZSBMaW5rSW5saW5lTm9kZSB7XG4gIHR5cGU6ICdsaW5rJztcbiAgdXJsOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBUZXh0SW5saW5lTm9kZVtdO1xufVxuXG5pbnRlcmZhY2UgTGlzdEl0ZW1JbmxpbmVOb2RlIHtcbiAgdHlwZTogJ2xpc3QtaXRlbSc7XG4gIGNoaWxkcmVuOiBEZWZhdWx0SW5saW5lTm9kZVtdO1xufVxuXG4vLyBJbmxpbmUgbm9kZSB0eXBlc1xudHlwZSBEZWZhdWx0SW5saW5lTm9kZSA9IFRleHRJbmxpbmVOb2RlIHwgTGlua0lubGluZU5vZGU7XG50eXBlIE5vblRleHRJbmxpbmVOb2RlID0gRXhjbHVkZTxEZWZhdWx0SW5saW5lTm9kZSwgVGV4dElubGluZU5vZGU+IHwgTGlzdEl0ZW1JbmxpbmVOb2RlO1xuXG5pbnRlcmZhY2UgUGFyYWdyYXBoQmxvY2tOb2RlIHtcbiAgdHlwZTogJ3BhcmFncmFwaCc7XG4gIGNoaWxkcmVuOiBEZWZhdWx0SW5saW5lTm9kZVtdO1xufVxuXG5pbnRlcmZhY2UgUXVvdGVCbG9ja05vZGUge1xuICB0eXBlOiAncXVvdGUnO1xuICBjaGlsZHJlbjogRGVmYXVsdElubGluZU5vZGVbXTtcbn1cblxuaW50ZXJmYWNlIENvZGVCbG9ja05vZGUge1xuICB0eXBlOiAnY29kZSc7XG4gIGNoaWxkcmVuOiBEZWZhdWx0SW5saW5lTm9kZVtdO1xufVxuXG5pbnRlcmZhY2UgSGVhZGluZ0Jsb2NrTm9kZSB7XG4gIHR5cGU6ICdoZWFkaW5nJztcbiAgbGV2ZWw6IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcbiAgY2hpbGRyZW46IERlZmF1bHRJbmxpbmVOb2RlW107XG59XG5cbmludGVyZmFjZSBMaXN0QmxvY2tOb2RlIHtcbiAgdHlwZTogJ2xpc3QnO1xuICBmb3JtYXQ6ICdvcmRlcmVkJyB8ICd1bm9yZGVyZWQnO1xuICBjaGlsZHJlbjogKExpc3RJdGVtSW5saW5lTm9kZSB8IExpc3RCbG9ja05vZGUpW107XG59XG5cbmludGVyZmFjZSBJbWFnZUJsb2NrTm9kZSB7XG4gIHR5cGU6ICdpbWFnZSc7XG4gIGltYWdlOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFsdGVybmF0aXZlVGV4dD86IHN0cmluZyB8IG51bGw7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgY2FwdGlvbj86IHN0cmluZyB8IG51bGw7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBmb3JtYXRzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgaGFzaDogc3RyaW5nO1xuICAgIGV4dDogc3RyaW5nO1xuICAgIG1pbWU6IHN0cmluZztcbiAgICBzaXplOiBudW1iZXI7XG4gICAgcHJldmlld1VybD86IHN0cmluZyB8IG51bGw7XG4gICAgcHJvdmlkZXI6IHN0cmluZztcbiAgICBwcm92aWRlcl9tZXRhZGF0YT86IHVua25vd24gfCBudWxsO1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgIHVwZGF0ZWRBdDogc3RyaW5nO1xuICB9O1xuICBjaGlsZHJlbjogW3sgdHlwZTogJ3RleHQnOyB0ZXh0OiAnJyB9XTtcbn1cblxuLy8gQmxvY2sgbm9kZSB0eXBlc1xudHlwZSBSb290Tm9kZSA9XG4gIHwgUGFyYWdyYXBoQmxvY2tOb2RlXG4gIHwgUXVvdGVCbG9ja05vZGVcbiAgfCBDb2RlQmxvY2tOb2RlXG4gIHwgSGVhZGluZ0Jsb2NrTm9kZVxuICB8IExpc3RCbG9ja05vZGVcbiAgfCBJbWFnZUJsb2NrTm9kZTtcbnR5cGUgTm9kZSA9IFJvb3ROb2RlIHwgTm9uVGV4dElubGluZU5vZGU7XG5cbi8vIFV0aWwgdG8gY29udmVydCBhIG5vZGUgdG8gdGhlIHByb3BzIG9mIHRoZSBjb3JyZXNwb25kaW5nIFJlYWN0IGNvbXBvbmVudFxudHlwZSBHZXRQcm9wc0Zyb21Ob2RlPFQ+ID0gT21pdDxULCAndHlwZScgfCAnY2hpbGRyZW4nPiAmIHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8vIEZvciBjb2RlIGJsb2NrcywgYWRkIGEgcGxhaW5UZXh0IHByb3BlcnR5IHRoYXQgaXMgY3JlYXRlZCBieSB0aGlzIHJlbmRlcmVyXG4gIHBsYWluVGV4dD86IFQgZXh0ZW5kcyB7IHR5cGU6ICdjb2RlJyB9ID8gc3RyaW5nIDogbmV2ZXI7XG59O1xuXG4vLyBNYXAgb2YgYWxsIGJsb2NrIHR5cGVzIHRvIHRoZWlyIG1hdGNoaW5nIFJlYWN0IGNvbXBvbmVudFxudHlwZSBCbG9ja3NDb21wb25lbnRzID0ge1xuICBbSyBpbiBOb2RlWyd0eXBlJ11dOiBSZWFjdC5Db21wb25lbnRUeXBlPFxuICAgIC8vIEZpbmQgdGhlIEJsb2NrUHJvcHMgaW4gdGhlIHVuaW9uIHRoYXQgbWF0Y2ggdGhlIHR5cGUga2V5IG9mIHRoZSBjdXJyZW50IEJsb2NrTm9kZVxuICAgIC8vIGFuZCB1c2UgaXQgYXMgdGhlIGNvbXBvbmVudCBwcm9wc1xuICAgIEdldFByb3BzRnJvbU5vZGU8RXh0cmFjdDxOb2RlLCB7IHR5cGU6IEsgfT4+XG4gID47XG59O1xuXG4vLyBNYXAgb2YgYWxsIGlubGluZSB0eXBlcyB0byB0aGVpciBtYXRjaGluZyBSZWFjdCBjb21wb25lbnRcbnR5cGUgTW9kaWZpZXJzQ29tcG9uZW50cyA9IHtcbiAgW0sgaW4gTW9kaWZpZXJdOiBSZWFjdC5Db21wb25lbnRUeXBlPHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9Pjtcbn07XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERlZmF1bHQgYmxvY2tzIGFuZCBtb2RpZmllcnMgY29tcG9uZW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbnRlcmZhY2UgQ29tcG9uZW50c0NvbnRleHRWYWx1ZSB7XG4gIGJsb2NrczogQmxvY2tzQ29tcG9uZW50cztcbiAgbW9kaWZpZXJzOiBNb2RpZmllcnNDb21wb25lbnRzO1xuICBtaXNzaW5nQmxvY2tUeXBlczogc3RyaW5nW107XG4gIG1pc3NpbmdNb2RpZmllclR5cGVzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgZGVmYXVsdENvbXBvbmVudHM6IENvbXBvbmVudHNDb250ZXh0VmFsdWUgPSB7XG4gIGJsb2Nrczoge1xuICAgIHBhcmFncmFwaDogKHByb3BzKSA9PiA8cD57cHJvcHMuY2hpbGRyZW59PC9wPixcbiAgICBxdW90ZTogKHByb3BzKSA9PiA8YmxvY2txdW90ZT57cHJvcHMuY2hpbGRyZW59PC9ibG9ja3F1b3RlPixcbiAgICBjb2RlOiAocHJvcHMpID0+IChcbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntwcm9wcy5wbGFpblRleHR9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgKSxcbiAgICBoZWFkaW5nOiAoeyBsZXZlbCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgICAgc3dpdGNoIChsZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIDxoMT57Y2hpbGRyZW59PC9oMT47XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gPGgyPntjaGlsZHJlbn08L2gyPjtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiA8aDM+e2NoaWxkcmVufTwvaDM+O1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuIDxoND57Y2hpbGRyZW59PC9oND47XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gPGg1PntjaGlsZHJlbn08L2g1PjtcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiA8aDY+e2NoaWxkcmVufTwvaDY+O1xuICAgICAgfVxuICAgIH0sXG4gICAgbGluazogKHByb3BzKSA9PiA8YSBocmVmPXtwcm9wcy51cmx9Pntwcm9wcy5jaGlsZHJlbn08L2E+LFxuICAgIGxpc3Q6IChwcm9wcykgPT4ge1xuICAgICAgaWYgKHByb3BzLmZvcm1hdCA9PT0gJ29yZGVyZWQnKSB7XG4gICAgICAgIHJldHVybiA8b2w+e3Byb3BzLmNoaWxkcmVufTwvb2w+O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gPHVsPntwcm9wcy5jaGlsZHJlbn08L3VsPjtcbiAgICB9LFxuICAgICdsaXN0LWl0ZW0nOiAocHJvcHMpID0+IDxsaT57cHJvcHMuY2hpbGRyZW59PC9saT4sXG4gICAgaW1hZ2U6IChwcm9wcykgPT4gPGltZyBzcmM9e3Byb3BzLmltYWdlLnVybH0gYWx0PXtwcm9wcy5pbWFnZS5hbHRlcm5hdGl2ZVRleHQgfHwgdW5kZWZpbmVkfSAvPixcbiAgfSxcbiAgbW9kaWZpZXJzOiB7XG4gICAgYm9sZDogKHByb3BzKSA9PiA8c3Ryb25nPntwcm9wcy5jaGlsZHJlbn08L3N0cm9uZz4sXG4gICAgaXRhbGljOiAocHJvcHMpID0+IDxlbT57cHJvcHMuY2hpbGRyZW59PC9lbT4sXG4gICAgdW5kZXJsaW5lOiAocHJvcHMpID0+IDx1Pntwcm9wcy5jaGlsZHJlbn08L3U+LFxuICAgIHN0cmlrZXRocm91Z2g6IChwcm9wcykgPT4gPGRlbD57cHJvcHMuY2hpbGRyZW59PC9kZWw+LFxuICAgIGNvZGU6IChwcm9wcykgPT4gPGNvZGU+e3Byb3BzLmNoaWxkcmVufTwvY29kZT4sXG4gIH0sXG4gIG1pc3NpbmdCbG9ja1R5cGVzOiBbXSxcbiAgbWlzc2luZ01vZGlmaWVyVHlwZXM6IFtdLFxufTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29udGV4dCB0byBwYXNzIGJsb2NrcyBhbmQgaW5saW5lIGNvbXBvbmVudHMgdG8gdGhlIG5lc3RlZCBjb21wb25lbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IENvbXBvbmVudHNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb21wb25lbnRzQ29udGV4dFZhbHVlPihkZWZhdWx0Q29tcG9uZW50cyk7XG5cbmludGVyZmFjZSBDb21wb25lbnRzUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhbHVlPzogQ29tcG9uZW50c0NvbnRleHRWYWx1ZTtcbn1cblxuLy8gUHJvdmlkZSBkZWZhdWx0IHZhbHVlIHNvIHdlIGRvbid0IG5lZWQgdG8gaW1wb3J0IGRlZmF1bHRDb21wb25lbnRzIGluIGFsbCB0ZXN0c1xuY29uc3QgQ29tcG9uZW50c1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4sIHZhbHVlID0gZGVmYXVsdENvbXBvbmVudHMgfTogQ29tcG9uZW50c1Byb3ZpZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgbWVtb2l6ZWRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gdmFsdWUsIFt2YWx1ZV0pO1xuXG4gIHJldHVybiA8Q29tcG9uZW50c0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21lbW9pemVkVmFsdWV9PntjaGlsZHJlbn08L0NvbXBvbmVudHNDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmZ1bmN0aW9uIHVzZUNvbXBvbmVudHNDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChDb21wb25lbnRzQ29udGV4dCk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJsb2Nrc1JlbmRlcmVyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmludGVyZmFjZSBCbG9ja3NSZW5kZXJlclByb3BzIHtcbiAgY29udGVudDogUm9vdE5vZGVbXTtcbiAgYmxvY2tzPzogUGFydGlhbDxCbG9ja3NDb21wb25lbnRzPjtcbiAgbW9kaWZpZXJzPzogUGFydGlhbDxNb2RpZmllcnNDb21wb25lbnRzPjtcbn1cblxuY29uc3QgQmxvY2tzUmVuZGVyZXIgPSAocHJvcHM6IEJsb2Nrc1JlbmRlcmVyUHJvcHMpID0+IHtcbiAgLy8gTWVyZ2UgZGVmYXVsdCBibG9ja3Mgd2l0aCB0aGUgb25lcyBwcm92aWRlZCBieSB0aGUgdXNlclxuICBjb25zdCBibG9ja3MgPSB7XG4gICAgLi4uZGVmYXVsdENvbXBvbmVudHMuYmxvY2tzLFxuICAgIC4uLnByb3BzLmJsb2NrcyxcbiAgfTtcblxuICAvLyBNZXJnZSBkZWZhdWx0IG1vZGlmaWVycyB3aXRoIHRoZSBvbmVzIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gIGNvbnN0IG1vZGlmaWVycyA9IHtcbiAgICAuLi5kZWZhdWx0Q29tcG9uZW50cy5tb2RpZmllcnMsXG4gICAgLi4ucHJvcHMubW9kaWZpZXJzLFxuICB9O1xuXG4gIC8vIFVzZSByZWZzIGJlY2F1c2Ugd2UgY2FuIG11dGF0ZSB0aGVtIGFuZCBhdm9pZCB0cmlnZ2VyaW5nIHJlLXJlbmRlcnNcbiAgY29uc3QgbWlzc2luZ0Jsb2NrVHlwZXMgPSBSZWFjdC51c2VSZWY8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgbWlzc2luZ01vZGlmaWVyVHlwZXMgPSBSZWFjdC51c2VSZWY8c3RyaW5nW10+KFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnRzUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGJsb2NrcyxcbiAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICBtaXNzaW5nQmxvY2tUeXBlczogbWlzc2luZ0Jsb2NrVHlwZXMuY3VycmVudCxcbiAgICAgICAgbWlzc2luZ01vZGlmaWVyVHlwZXM6IG1pc3NpbmdNb2RpZmllclR5cGVzLmN1cnJlbnQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHsvKiBUT0RPIHVzZSBXZWFrTWFwIGluc3RlYWQgb2YgaW5kZXggYXMgdGhlIGtleSAqL31cbiAgICAgIHtwcm9wcy5jb250ZW50Lm1hcCgoY29udGVudCwgaW5kZXgpID0+IChcbiAgICAgICAgPEJsb2NrIGNvbnRlbnQ9e2NvbnRlbnR9IGtleT17aW5kZXh9IC8+XG4gICAgICApKX1cbiAgICA8L0NvbXBvbmVudHNQcm92aWRlcj5cbiAgKTtcbn07XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4cG9ydHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZXhwb3J0IHR5cGUgeyBSb290Tm9kZSwgTm9kZSwgR2V0UHJvcHNGcm9tTm9kZSB9O1xuZXhwb3J0IHsgQ29tcG9uZW50c1Byb3ZpZGVyLCB1c2VDb21wb25lbnRzQ29udGV4dCwgQmxvY2tzUmVuZGVyZXIgfTtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0Q29tcG9uZW50cyIsImJsb2NrcyIsInBhcmFncmFwaCIsInByb3BzIiwianN4IiwiY2hpbGRyZW4iLCJxdW90ZSIsImNvZGUiLCJwbGFpblRleHQiLCJoZWFkaW5nIiwibGV2ZWwiLCJsaW5rIiwiaHJlZiIsInVybCIsImxpc3QiLCJmb3JtYXQiLCJpbWFnZSIsInNyYyIsImFsdCIsImFsdGVybmF0aXZlVGV4dCIsIm1vZGlmaWVycyIsImJvbGQiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJzdHJpa2V0aHJvdWdoIiwibWlzc2luZ0Jsb2NrVHlwZXMiLCJtaXNzaW5nTW9kaWZpZXJUeXBlcyIsIkNvbXBvbmVudHNDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQ29tcG9uZW50c1Byb3ZpZGVyIiwidmFsdWUiLCJtZW1vaXplZFZhbHVlIiwidXNlTWVtbyIsIlByb3ZpZGVyIiwidXNlQ29tcG9uZW50c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiQmxvY2tzUmVuZGVyZXIiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29udGVudCIsIm1hcCIsImluZGV4IiwiQmxvY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/Text.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@strapi/blocks-react-renderer/dist/Text.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Text: () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var _BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlocksRenderer.mjs */ \"(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs\");\n\n\nconst Text = ({ text, ...modifiers }) => {\n  const { modifiers: modifierComponents, missingModifierTypes } = (0,_BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_1__.useComponentsContext)();\n  const modifierNames = Object.keys(modifiers);\n  return modifierNames.reduce(\n    (children, modifierName) => {\n      if (!modifiers[modifierName]) {\n        return children;\n      }\n      const ModifierComponent = modifierComponents[modifierName];\n      if (!ModifierComponent) {\n        if (!missingModifierTypes.includes(modifierName)) {\n          console.warn(\n            `[@strapi/block-react-renderer] No component found for modifier \"${modifierName}\"`\n          );\n          missingModifierTypes.push(modifierName);\n        }\n        return children;\n      }\n      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ModifierComponent, { children });\n    },\n    // By default, return the text without any wrapper to avoid useless nesting\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: text })\n  );\n};\n\n//# sourceMappingURL=Text.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXIvZGlzdC9UZXh0Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDVTtBQUM1RCxnQkFBZ0Isb0JBQW9CO0FBQ3BDLFVBQVUsc0RBQXNELEVBQUUseUVBQW9CO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGFBQWE7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBRyxzQkFBc0IsVUFBVTtBQUNoRSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0Isc0RBQUcsQ0FBQyx1REFBUSxJQUFJLGdCQUFnQjtBQUNwRDtBQUNBO0FBR0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL0BzdHJhcGkvYmxvY2tzLXJlYWN0LXJlbmRlcmVyL2Rpc3QvVGV4dC5tanM/OWZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VDb21wb25lbnRzQ29udGV4dCB9IGZyb20gXCIuL0Jsb2Nrc1JlbmRlcmVyLm1qc1wiO1xuY29uc3QgVGV4dCA9ICh7IHRleHQsIC4uLm1vZGlmaWVycyB9KSA9PiB7XG4gIGNvbnN0IHsgbW9kaWZpZXJzOiBtb2RpZmllckNvbXBvbmVudHMsIG1pc3NpbmdNb2RpZmllclR5cGVzIH0gPSB1c2VDb21wb25lbnRzQ29udGV4dCgpO1xuICBjb25zdCBtb2RpZmllck5hbWVzID0gT2JqZWN0LmtleXMobW9kaWZpZXJzKTtcbiAgcmV0dXJuIG1vZGlmaWVyTmFtZXMucmVkdWNlKFxuICAgIChjaGlsZHJlbiwgbW9kaWZpZXJOYW1lKSA9PiB7XG4gICAgICBpZiAoIW1vZGlmaWVyc1ttb2RpZmllck5hbWVdKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IE1vZGlmaWVyQ29tcG9uZW50ID0gbW9kaWZpZXJDb21wb25lbnRzW21vZGlmaWVyTmFtZV07XG4gICAgICBpZiAoIU1vZGlmaWVyQ29tcG9uZW50KSB7XG4gICAgICAgIGlmICghbWlzc2luZ01vZGlmaWVyVHlwZXMuaW5jbHVkZXMobW9kaWZpZXJOYW1lKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBbQHN0cmFwaS9ibG9jay1yZWFjdC1yZW5kZXJlcl0gTm8gY29tcG9uZW50IGZvdW5kIGZvciBtb2RpZmllciBcIiR7bW9kaWZpZXJOYW1lfVwiYFxuICAgICAgICAgICk7XG4gICAgICAgICAgbWlzc2luZ01vZGlmaWVyVHlwZXMucHVzaChtb2RpZmllck5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KE1vZGlmaWVyQ29tcG9uZW50LCB7IGNoaWxkcmVuIH0pO1xuICAgIH0sXG4gICAgLy8gQnkgZGVmYXVsdCwgcmV0dXJuIHRoZSB0ZXh0IHdpdGhvdXQgYW55IHdyYXBwZXIgdG8gYXZvaWQgdXNlbGVzcyBuZXN0aW5nXG4gICAgLyogQF9fUFVSRV9fICovIGpzeChGcmFnbWVudCwgeyBjaGlsZHJlbjogdGV4dCB9KVxuICApO1xufTtcbmV4cG9ydCB7XG4gIFRleHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UZXh0Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/Text.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/index.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@strapi/blocks-react-renderer/dist/index.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BlocksRenderer: () => (/* reexport safe */ _BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_0__.BlocksRenderer)\n/* harmony export */ });\n/* harmony import */ var _BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlocksRenderer.mjs */ \"(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs\");\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXIvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0Q7QUFHcEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL0BzdHJhcGkvYmxvY2tzLXJlYWN0LXJlbmRlcmVyL2Rpc3QvaW5kZXgubWpzPzYwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxvY2tzUmVuZGVyZXIgfSBmcm9tIFwiLi9CbG9ja3NSZW5kZXJlci5tanNcIjtcbmV4cG9ydCB7XG4gIEJsb2Nrc1JlbmRlcmVyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@strapi/blocks-react-renderer/dist/index.mjs\n");

/***/ })

};
;