!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports.ReactSortableTreeThemeFileExplorer = factory() : root.ReactSortableTreeThemeFileExplorer = factory();
}("undefined" != typeof self ? self : this, function() {
    /******/
    return function(modules) {
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: !1,
                /******/
                exports: {}
            };
            /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            __webpack_require__.o(exports, name) || /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: !1,
                /******/
                enumerable: !0,
                /******/
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ? /******/
            function() {
                return module.default;
            } : /******/
            function() {
                return module;
            };
            /******/
            /******/
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 4);
    }([ /* 0 */
    /***/
    function(module, exports) {
        module.exports = require("react");
    }, /* 1 */
    /***/
    function(module, exports) {
        module.exports = require("prop-types");
    }, /* 2 */
    /***/
    function(module, exports) {
        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "", cssMapping = item[3];
            if (!cssMapping) return content;
            if (useSourceMap && "function" == typeof btoa) {
                var sourceMapping = toComment(cssMapping);
                return [ content ].concat(cssMapping.sources.map(function(source) {
                    return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                })).concat([ sourceMapping ]).join("\n");
            }
            return [ content ].join("\n");
        }
        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        module.exports = function(useSourceMap) {
            var list = [];
            // return the list of modules as css string
            // import a list of modules into the list
            return list.toString = function() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
                }).join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }, /* 3 */
    /***/
    function(module, exports, __webpack_require__) {
        function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                    for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
                } else {
                    for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                    stylesInDom[item.id] = {
                        id: item.id,
                        refs: 1,
                        parts: parts
                    };
                }
            }
        }
        function listToStyles(list, options) {
            for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
                var item = list[i], id = options.base ? item[0] + options.base : item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                    id: id,
                    parts: [ part ]
                });
            }
            return styles;
        }
        function insertStyleElement(options, style) {
            var target = getElement(options.insertInto);
            if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
            if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling) : target.appendChild(style) : target.insertBefore(style, target.firstChild), 
            stylesInsertedAtTop.push(style); else if ("bottom" === options.insertAt) target.appendChild(style); else {
                if ("object" != typeof options.insertAt || !options.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
                target.insertBefore(style, nextSibling);
            }
        }
        function removeStyleElement(style) {
            if (null === style.parentNode) return !1;
            style.parentNode.removeChild(style);
            var idx = stylesInsertedAtTop.indexOf(style);
            idx >= 0 && stylesInsertedAtTop.splice(idx, 1);
        }
        function createStyleElement(options) {
            var style = document.createElement("style");
            return options.attrs.type = "text/css", addAttrs(style, options.attrs), insertStyleElement(options, style), 
            style;
        }
        function createLinkElement(options) {
            var link = document.createElement("link");
            return options.attrs.type = "text/css", options.attrs.rel = "stylesheet", addAttrs(link, options.attrs), 
            insertStyleElement(options, link), link;
        }
        function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function(key) {
                el.setAttribute(key, attrs[key]);
            });
        }
        function addStyle(obj, options) {
            var style, update, remove, result;
            // If a transform function was defined, run it on the css
            if (options.transform && obj.css) {
                if (!(result = options.transform(obj.css))) // If the transform function returns a falsy value, don't add this css.
                // This allows conditional loading of css
                return function() {};
                // If transform returns a value, use that instead of the original css.
                // This allows running runtime transformations on the css.
                obj.css = result;
            }
            if (options.singleton) {
                var styleIndex = singletonCounter++;
                style = singleton || (singleton = createStyleElement(options)), update = applyToSingletonTag.bind(null, style, styleIndex, !1), 
                remove = applyToSingletonTag.bind(null, style, styleIndex, !0);
            } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (style = createLinkElement(options), 
            update = updateLink.bind(null, style, options), remove = function() {
                removeStyleElement(style), style.href && URL.revokeObjectURL(style.href);
            }) : (style = createStyleElement(options), update = applyToTag.bind(null, style), 
            remove = function() {
                removeStyleElement(style);
            });
            return update(obj), function(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj);
                } else remove();
            };
        }
        function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (style.styleSheet) style.styleSheet.cssText = replaceText(index, css); else {
                var cssNode = document.createTextNode(css), childNodes = style.childNodes;
                childNodes[index] && style.removeChild(childNodes[index]), childNodes.length ? style.insertBefore(cssNode, childNodes[index]) : style.appendChild(cssNode);
            }
        }
        function applyToTag(style, obj) {
            var css = obj.css, media = obj.media;
            if (media && style.setAttribute("media", media), style.styleSheet) style.styleSheet.cssText = css; else {
                for (;style.firstChild; ) style.removeChild(style.firstChild);
                style.appendChild(document.createTextNode(css));
            }
        }
        function updateLink(link, options, obj) {
            var css = obj.css, sourceMap = obj.sourceMap, autoFixUrls = void 0 === options.convertToAbsoluteUrls && sourceMap;
            (options.convertToAbsoluteUrls || autoFixUrls) && (css = fixUrls(css)), sourceMap && (// http://stackoverflow.com/a/26603875
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
            var blob = new Blob([ css ], {
                type: "text/css"
            }), oldSrc = link.href;
            link.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
        }
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        var stylesInDom = {}, isOldIE = function(fn) {
            var memo;
            return function() {
                return void 0 === memo && (memo = fn.apply(this, arguments)), memo;
            };
        }(function() {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            return window && document && document.all && !window.atob;
        }), getElement = function(fn) {
            var memo = {};
            return function(selector) {
                if (void 0 === memo[selector]) {
                    var styleTarget = fn.call(this, selector);
                    // Special case to return head of iframe instead of iframe itself
                    if (styleTarget instanceof window.HTMLIFrameElement) try {
                        // This will throw an exception if access to iframe is blocked
                        // due to cross-origin restrictions
                        styleTarget = styleTarget.contentDocument.head;
                    } catch (e) {
                        styleTarget = null;
                    }
                    memo[selector] = styleTarget;
                }
                return memo[selector];
            };
        }(function(target) {
            return document.querySelector(target);
        }), singleton = null, singletonCounter = 0, stylesInsertedAtTop = [], fixUrls = __webpack_require__(8);
        module.exports = function(list, options) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            options = options || {}, options.attrs = "object" == typeof options.attrs ? options.attrs : {}, 
            // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            options.singleton || "boolean" == typeof options.singleton || (options.singleton = isOldIE()), 
            // By default, add <style> tags to the <head> element
            options.insertInto || (options.insertInto = "head"), // By default, add <style> tags to the bottom of the target
            options.insertAt || (options.insertAt = "bottom");
            var styles = listToStyles(list, options);
            return addStylesToDom(styles, options), function(newList) {
                for (var mayRemove = [], i = 0; i < styles.length; i++) {
                    var item = styles[i], domStyle = stylesInDom[item.id];
                    domStyle.refs--, mayRemove.push(domStyle);
                }
                if (newList) {
                    addStylesToDom(listToStyles(newList, options), options);
                }
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (0 === domStyle.refs) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };
        var replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
                return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
            };
        }();
    }, /* 4 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var _NodeContentRenderer = __webpack_require__(5), _NodeContentRenderer2 = _interopRequireDefault(_NodeContentRenderer), _TreeNodeRenderer = __webpack_require__(10), _TreeNodeRenderer2 = _interopRequireDefault(_TreeNodeRenderer);
        // Can override the following:
        //
        // style: PropTypes.shape({}),
        // innerStyle: PropTypes.shape({}),
        // reactVirtualizedListProps: PropTypes.shape({}),
        // scaffoldBlockPxWidth: PropTypes.number,
        // slideRegionSize: PropTypes.number,
        // rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
        // treeNodeRenderer: PropTypes.func,
        // nodeContentRenderer: PropTypes.func,
        // placeholderRenderer: PropTypes.func,
        module.exports = {
            nodeContentRenderer: _NodeContentRenderer2.default,
            treeNodeRenderer: _TreeNodeRenderer2.default,
            scaffoldBlockPxWidth: 45
        };
    }, /* 5 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function isDescendant(older, younger) {
            return !!older.children && "function" != typeof older.children && older.children.some(function(child) {
                return child === younger || isDescendant(child, younger);
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(0), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(1), _propTypes2 = _interopRequireDefault(_propTypes), _NodeContentRenderer = __webpack_require__(6), _NodeContentRenderer2 = _interopRequireDefault(_NodeContentRenderer), _Chevron = __webpack_require__(9), _Chevron2 = _interopRequireDefault(_Chevron), nodeTypes = {
            array: "[]",
            object: "{}",
            string: "S",
            number: "N"
        }, MinimalThemeNodeContentRenderer = function(_Component) {
            function MinimalThemeNodeContentRenderer() {
                return _classCallCheck(this, MinimalThemeNodeContentRenderer), _possibleConstructorReturn(this, (MinimalThemeNodeContentRenderer.__proto__ || Object.getPrototypeOf(MinimalThemeNodeContentRenderer)).apply(this, arguments));
            }
            return _inherits(MinimalThemeNodeContentRenderer, _Component), _createClass(MinimalThemeNodeContentRenderer, [ {
                key: "render",
                value: function() {
                    var _props = this.props, scaffoldBlockPxWidth = _props.scaffoldBlockPxWidth, toggleChildrenVisibility = _props.toggleChildrenVisibility, connectDragPreview = _props.connectDragPreview, connectDragSource = _props.connectDragSource, isDragging = _props.isDragging, canDrop = _props.canDrop, canDrag = _props.canDrag, node = _props.node, title = _props.title, subtitle = _props.subtitle, draggedNode = _props.draggedNode, path = _props.path, treeIndex = _props.treeIndex, isSearchMatch = _props.isSearchMatch, isSearchFocus = _props.isSearchFocus, buttons = (_props.icons, 
                    _props.buttons), className = _props.className, style = _props.style, didDrop = _props.didDrop, otherProps = (_props.swapFrom, 
                    _props.swapLength, _props.swapDepth, _props.treeId, _props.isOver, _props.parentNode, 
                    _props.rowDirection, _objectWithoutProperties(_props, [ "scaffoldBlockPxWidth", "toggleChildrenVisibility", "connectDragPreview", "connectDragSource", "isDragging", "canDrop", "canDrag", "node", "title", "subtitle", "draggedNode", "path", "treeIndex", "isSearchMatch", "isSearchFocus", "icons", "buttons", "className", "style", "didDrop", "swapFrom", "swapLength", "swapDepth", "treeId", "isOver", "parentNode", "rowDirection" ])), nodeTitle = title || node.title, nodeSubtitle = subtitle || node.subtitle, isDraggedDescendant = draggedNode && isDescendant(draggedNode, node), isLandingPadActive = !didDrop && isDragging, nodeContent = connectDragPreview(_react2.default.createElement("div", {
                        className: _NodeContentRenderer2.default.rowContents + (isSearchMatch ? " " + _NodeContentRenderer2.default.rowSearchMatch : "") + (isSearchFocus ? " " + _NodeContentRenderer2.default.rowSearchFocus : "") + (canDrag ? "" : " " + _NodeContentRenderer2.default.rowContentsDragDisabled)
                    }, node.type && _react2.default.createElement("span", {
                        className: _NodeContentRenderer2.default.nodeType
                    }, nodeTypes[node.type]), _react2.default.createElement("div", {
                        className: _NodeContentRenderer2.default.rowLabel
                    }, _react2.default.createElement("span", {
                        className: _NodeContentRenderer2.default.rowTitle + (node.subtitle ? " " + _NodeContentRenderer2.default.rowTitleWithSubtitle : "")
                    }, "function" == typeof nodeTitle ? nodeTitle({
                        node: node,
                        path: path,
                        treeIndex: treeIndex
                    }) : nodeTitle), nodeSubtitle && _react2.default.createElement("span", {
                        className: _NodeContentRenderer2.default.rowSubtitle
                    }, "function" == typeof nodeSubtitle ? nodeSubtitle({
                        node: node,
                        path: path,
                        treeIndex: treeIndex
                    }) : nodeSubtitle)), _react2.default.createElement("div", {
                        className: _NodeContentRenderer2.default.rowToolbar
                    }, buttons.map(function(btn, index) {
                        return _react2.default.createElement("div", {
                            key: index,
                            className: _NodeContentRenderer2.default.toolbarButton
                        }, btn);
                    }))));
                    return _react2.default.createElement("div", _extends({
                        style: {
                            height: "100%"
                        }
                    }, otherProps), toggleChildrenVisibility && node.children && (node.children.length > 0 || "function" == typeof node.children) && _react2.default.createElement("div", null, _react2.default.createElement(_Chevron2.default, {
                        type: "button",
                        className: node.expanded ? _NodeContentRenderer2.default.collapseButton : _NodeContentRenderer2.default.expandButton,
                        onClick: function() {
                            return toggleChildrenVisibility({
                                node: node,
                                path: path,
                                treeIndex: treeIndex
                            });
                        }
                    }), node.expanded && !isDragging && _react2.default.createElement("div", {
                        style: {
                            width: scaffoldBlockPxWidth
                        },
                        className: _NodeContentRenderer2.default.lineChildren
                    })), _react2.default.createElement("div", {
                        className: _NodeContentRenderer2.default.rowWrapper + (canDrag ? "" : " " + _NodeContentRenderer2.default.rowWrapperDragDisabled)
                    }, _react2.default.createElement("div", {
                        className: _NodeContentRenderer2.default.row + (isLandingPadActive ? " " + _NodeContentRenderer2.default.rowLandingPad : "") + (isLandingPadActive && !canDrop ? " " + _NodeContentRenderer2.default.rowCancelPad : "") + (className ? " " + className : ""),
                        style: _extends({
                            opacity: isDraggedDescendant ? .5 : 1,
                            paddingLeft: scaffoldBlockPxWidth
                        }, style)
                    }, canDrag ? connectDragSource(nodeContent, {
                        dropEffect: "copy"
                    }) : nodeContent)));
                }
            } ]), MinimalThemeNodeContentRenderer;
        }(_react.Component);
        MinimalThemeNodeContentRenderer.defaultProps = {
            buttons: [],
            canDrag: !1,
            canDrop: !1,
            className: "",
            draggedNode: null,
            icons: [],
            isSearchFocus: !1,
            isSearchMatch: !1,
            parentNode: null,
            style: {},
            subtitle: null,
            swapDepth: null,
            swapFrom: null,
            swapLength: null,
            title: null,
            toggleChildrenVisibility: null,
            rowDirection: "ltr"
        }, MinimalThemeNodeContentRenderer.propTypes = {
            buttons: _propTypes2.default.arrayOf(_propTypes2.default.node),
            canDrag: _propTypes2.default.bool,
            className: _propTypes2.default.string,
            icons: _propTypes2.default.arrayOf(_propTypes2.default.node),
            isSearchFocus: _propTypes2.default.bool,
            isSearchMatch: _propTypes2.default.bool,
            node: _propTypes2.default.shape({}).isRequired,
            path: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([ _propTypes2.default.string, _propTypes2.default.number ])).isRequired,
            scaffoldBlockPxWidth: _propTypes2.default.number.isRequired,
            style: _propTypes2.default.shape({}),
            subtitle: _propTypes2.default.oneOfType([ _propTypes2.default.func, _propTypes2.default.node ]),
            swapDepth: _propTypes2.default.number,
            swapFrom: _propTypes2.default.number,
            swapLength: _propTypes2.default.number,
            title: _propTypes2.default.oneOfType([ _propTypes2.default.func, _propTypes2.default.node ]),
            toggleChildrenVisibility: _propTypes2.default.func,
            treeIndex: _propTypes2.default.number.isRequired,
            treeId: _propTypes2.default.string.isRequired,
            // Drag and drop API functions
            // Drag source
            connectDragPreview: _propTypes2.default.func.isRequired,
            connectDragSource: _propTypes2.default.func.isRequired,
            didDrop: _propTypes2.default.bool.isRequired,
            draggedNode: _propTypes2.default.shape({}),
            isDragging: _propTypes2.default.bool.isRequired,
            parentNode: _propTypes2.default.shape({}),
            // Needed for dndManager
            // Drop target
            canDrop: _propTypes2.default.bool,
            isOver: _propTypes2.default.bool.isRequired,
            rowDirection: _propTypes2.default.string.isRequired
        }, exports.default = MinimalThemeNodeContentRenderer;
    }, /* 6 */
    /***/
    function(module, exports, __webpack_require__) {
        // style-loader: Adds some css to the DOM by adding a <style> tag
        // load the styles
        var content = __webpack_require__(7);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
        // Prepare cssTransformation
        var options = {
            insertAt: "top",
            hmr: !0
        };
        options.transform = void 0;
        // add the styles to the DOM
        __webpack_require__(3)(content, options);
        content.locals && (module.exports = content.locals);
    }, /* 7 */
    /***/
    function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(2)(!1), // imports
        // module
        exports.push([ module.i, '.rstcustom__rowWrapper {\n  padding: 2px 2px 2px 0;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: default; }\n  .rstcustom__rowWrapper:hover {\n    opacity: 0.7; }\n  .rstcustom__rowWrapper:active {\n    opacity: 1; }\n\n.rstcustom__rowWrapperDragDisabled {\n  cursor: default; }\n  .rstcustom__rowWrapperDragDisabled:hover {\n    opacity: 1; }\n\n.rstcustom__row {\n  height: 100%;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .rstcustom__row > * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n.rstcustom__nodeType {\n  color: lightblue;\n  font-size: large;\n  padding: 0 10px; }\n\n/**\n * The outline of where the element will go if dropped, displayed while dragging\n */\n.rstcustom__rowLandingPad, .rstcustom__rowCancelPad {\n  border: none !important;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  outline: none !important;\n  width: 500px; }\n  .rstcustom__rowLandingPad *, .rstcustom__rowCancelPad * {\n    opacity: 0 !important; }\n  .rstcustom__rowLandingPad::before, .rstcustom__rowCancelPad::before {\n    background-color: lightblue;\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    width: 100%; }\n\n/**\n * Alternate appearance of the landing pad when the dragged location is invalid\n */\n.rstcustom__rowCancelPad::before {\n  background-color: #e6a8ad; }\n\n/**\n * Nodes matching the search conditions are highlighted\n */\n.rstcustom__rowSearchMatch {\n  outline: solid 1px #0080ff; }\n\n/**\n * The node that matches the search conditions and is currently focused\n */\n.rstcustom__rowSearchFocus {\n  outline: solid 1px #fc6421; }\n\n.rstcustom__rowContents, .rstcustom__rowLabel, .rstcustom__rowToolbar, .rstcustom__moveHandle, .rstcustom__loadingHandle, .rstcustom__toolbarButton {\n  display: inline-block;\n  vertical-align: middle; }\n\n.rstcustom__rowContents {\n  --border-color: gray;\n  --border-weight: 1.4px;\n  --dash-size: 8px;\n  --gap-size: 8px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  font-weight: 500;\n  position: relative;\n  height: 100%;\n  min-width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.rstcustom__rowContents::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: -webkit-gradient(linear, left top, right top, color-stop(100%, var(--border-color)), to(transparent)) top left no-repeat, -webkit-gradient(linear, left top, right top, from(transparent), color-stop(var(--border-color)), color-stop(var(--border-color)), to(transparent)) top center repeat-x, -webkit-gradient(linear, left top, right top, color-stop(100%, var(--border-color)), to(transparent)) top right no-repeat, -webkit-gradient(linear, left bottom, left top, color-stop(100%, var(--border-color)), to(transparent)) top left no-repeat, -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(var(--border-color)), color-stop(var(--border-color)), to(transparent)) center left repeat-y, -webkit-gradient(linear, left bottom, left top, color-stop(100%, var(--border-color)), to(transparent)) bottom left no-repeat, -webkit-gradient(linear, left top, right top, color-stop(100%, var(--border-color)), to(transparent)) bottom left no-repeat, -webkit-gradient(linear, left top, right top, from(transparent), color-stop(var(--border-color)), color-stop(var(--border-color)), to(transparent)) bottom center repeat-x, -webkit-gradient(linear, left top, right top, color-stop(100%, var(--border-color)), to(transparent)) bottom right no-repeat, -webkit-gradient(linear, left bottom, left top, color-stop(100%, var(--border-color)), to(transparent)) top right no-repeat, -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(var(--border-color)), color-stop(var(--border-color)), to(transparent)) center right repeat-y, -webkit-gradient(linear, left bottom, left top, color-stop(100%, var(--border-color)), to(transparent)) bottom right no-repeat;\n  background: linear-gradient(90deg, var(--border-color) 100%, transparent 100%) top left no-repeat, linear-gradient(90deg, transparent calc(var(--gap-size) / 2), var(--border-color) calc(var(--gap-size) / 2), var(--border-color) calc(var(--gap-size) / 2 + var(--dash-size)), transparent calc(var(--gap-size) / 2 + var(--dash-size))) top center repeat-x, linear-gradient(90deg, var(--border-color) 100%, transparent 100%) top right no-repeat, linear-gradient(0deg, var(--border-color) 100%, transparent 100%) top left no-repeat, linear-gradient(0deg, transparent calc(var(--gap-size) / 2), var(--border-color) calc(var(--gap-size) / 2), var(--border-color) calc(var(--gap-size) / 2 + var(--dash-size)), transparent calc(var(--gap-size) / 2 + var(--dash-size))) center left repeat-y, linear-gradient(0deg, var(--border-color) 100%, transparent 100%) bottom left no-repeat, linear-gradient(90deg, var(--border-color) 100%, transparent 100%) bottom left no-repeat, linear-gradient(90deg, transparent calc(var(--gap-size) / 2), var(--border-color) calc(var(--gap-size) / 2), var(--border-color) calc(var(--gap-size) / 2 + var(--dash-size)), transparent calc(var(--gap-size) / 2 + var(--dash-size))) bottom center repeat-x, linear-gradient(90deg, var(--border-color) 100%, transparent 100%) bottom right no-repeat, linear-gradient(0deg, var(--border-color) 100%, transparent 100%) top right no-repeat, linear-gradient(0deg, transparent calc(var(--gap-size) / 2), var(--border-color) calc(var(--gap-size) / 2), var(--border-color) calc(var(--gap-size) / 2 + var(--dash-size)), transparent calc(var(--gap-size) / 2 + var(--dash-size))) center right repeat-y, linear-gradient(0deg, var(--border-color) 100%, transparent 100%) bottom right no-repeat;\n  background-size: var(--dash-size) var(--border-weight), calc(var(--dash-size) + var(--gap-size)) var(--border-weight), var(--dash-size) var(--border-weight), var(--border-weight) var(--dash-size), var(--border-weight) calc(var(--dash-size) + var(--gap-size)), var(--border-weight) var(--dash-size); }\n\n.rstcustom__rowLabel {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  padding-right: 20px;\n  width: 100%; }\n\n.rstcustom__rowToolbar {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-right: 10px; }\n  .rstcustom__rowToolbar > div {\n    margin: 0 3px; }\n    .rstcustom__rowToolbar > div > svg {\n      max-height: 19px;\n      max-width: 19px; }\n\n.rstcustom__moveHandle, .rstcustom__loadingHandle {\n  height: 100%;\n  width: 44px;\n  background: #d9d9d9 url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiI+PGcgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuOSIgPjxwYXRoIGQ9Ik0xNCAxNS43aDE0LjQiLz48cGF0aCBkPSJNMTQgMjEuNGgxNC40Ii8+PHBhdGggZD0iTTE0IDI3LjFoMTQuNCIvPjwvZz4KPC9zdmc+") no-repeat center;\n  border: solid #aaa 1px;\n  -webkit-box-shadow: 0 2px 2px -2px;\n          box-shadow: 0 2px 2px -2px;\n  cursor: move;\n  border-radius: 1px;\n  z-index: 1; }\n\n.rstcustom__loadingHandle {\n  cursor: default;\n  background: #d9d9d9; }\n\n@-webkit-keyframes rstcustom__pointFade {\n  0%,\n  19.999%,\n  100% {\n    opacity: 0; }\n  20% {\n    opacity: 1; } }\n\n@keyframes rstcustom__pointFade {\n  0%,\n  19.999%,\n  100% {\n    opacity: 0; }\n  20% {\n    opacity: 1; } }\n\n.rstcustom__loadingCircle {\n  width: 80%;\n  height: 80%;\n  margin: 10%;\n  position: relative; }\n\n.rstcustom__loadingCirclePoint {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n  .rstcustom__loadingCirclePoint:before {\n    content: "";\n    display: block;\n    margin: 0 auto;\n    width: 11%;\n    height: 30%;\n    background-color: #fff;\n    border-radius: 30%;\n    -webkit-animation: rstcustom__pointFade 800ms infinite ease-in-out both;\n            animation: rstcustom__pointFade 800ms infinite ease-in-out both; }\n  .rstcustom__loadingCirclePoint:nth-of-type(1) {\n    -webkit-transform: rotate(0deg);\n        -ms-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(1):before, .rstcustom__loadingCirclePoint:nth-of-type(7):before {\n    -webkit-animation-delay: -800ms;\n            animation-delay: -800ms; }\n  .rstcustom__loadingCirclePoint:nth-of-type(2) {\n    -webkit-transform: rotate(30deg);\n        -ms-transform: rotate(30deg);\n            transform: rotate(30deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(8) {\n    -webkit-transform: rotate(210deg);\n        -ms-transform: rotate(210deg);\n            transform: rotate(210deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(2):before, .rstcustom__loadingCirclePoint:nth-of-type(8):before {\n    -webkit-animation-delay: -666.66667ms;\n            animation-delay: -666.66667ms; }\n  .rstcustom__loadingCirclePoint:nth-of-type(3) {\n    -webkit-transform: rotate(60deg);\n        -ms-transform: rotate(60deg);\n            transform: rotate(60deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(9) {\n    -webkit-transform: rotate(240deg);\n        -ms-transform: rotate(240deg);\n            transform: rotate(240deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(3):before, .rstcustom__loadingCirclePoint:nth-of-type(9):before {\n    -webkit-animation-delay: -533.33333ms;\n            animation-delay: -533.33333ms; }\n  .rstcustom__loadingCirclePoint:nth-of-type(4) {\n    -webkit-transform: rotate(90deg);\n        -ms-transform: rotate(90deg);\n            transform: rotate(90deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(10) {\n    -webkit-transform: rotate(270deg);\n        -ms-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(4):before, .rstcustom__loadingCirclePoint:nth-of-type(10):before {\n    -webkit-animation-delay: -400ms;\n            animation-delay: -400ms; }\n  .rstcustom__loadingCirclePoint:nth-of-type(5) {\n    -webkit-transform: rotate(120deg);\n        -ms-transform: rotate(120deg);\n            transform: rotate(120deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(11) {\n    -webkit-transform: rotate(300deg);\n        -ms-transform: rotate(300deg);\n            transform: rotate(300deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(5):before, .rstcustom__loadingCirclePoint:nth-of-type(11):before {\n    -webkit-animation-delay: -266.66667ms;\n            animation-delay: -266.66667ms; }\n  .rstcustom__loadingCirclePoint:nth-of-type(6) {\n    -webkit-transform: rotate(150deg);\n        -ms-transform: rotate(150deg);\n            transform: rotate(150deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(12) {\n    -webkit-transform: rotate(330deg);\n        -ms-transform: rotate(330deg);\n            transform: rotate(330deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(6):before, .rstcustom__loadingCirclePoint:nth-of-type(12):before {\n    -webkit-animation-delay: -133.33333ms;\n            animation-delay: -133.33333ms; }\n  .rstcustom__loadingCirclePoint:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(13) {\n    -webkit-transform: rotate(360deg);\n        -ms-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  .rstcustom__loadingCirclePoint:nth-of-type(7):before, .rstcustom__loadingCirclePoint:nth-of-type(13):before {\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms; }\n\n.rstcustom__rowTitle {\n  font-weight: 500; }\n\n.rstcustom__rowTitleWithSubtitle {\n  display: block; }\n\n.rstcustom__rowSubtitle {\n  font-size: 70%;\n  line-height: 0.7;\n  width: 95%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: inline-block; }\n\n.rstcustom__collapseButton,\n.rstcustom__expandButton {\n  background: none;\n  position: absolute;\n  top: 25%;\n  margin-left: 10px;\n  cursor: pointer;\n  z-index: 1000; }\n\n.rstcustom__collapseButton {\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n/**\n * Line for under a node with children\n */\n.rstcustom__lineChildren {\n  height: 100%;\n  display: inline-block;\n  position: absolute; }\n\n.rstcustom__contentContainer {\n  width: 75%; }\n', "" ]), 
        // exports
        exports.locals = {
            rowWrapper: "rstcustom__rowWrapper",
            rowWrapperDragDisabled: "rstcustom__rowWrapperDragDisabled",
            row: "rstcustom__row",
            nodeType: "rstcustom__nodeType",
            rowLandingPad: "rstcustom__rowLandingPad",
            rowCancelPad: "rstcustom__rowCancelPad",
            rowSearchMatch: "rstcustom__rowSearchMatch",
            rowSearchFocus: "rstcustom__rowSearchFocus",
            rowContents: "rstcustom__rowContents",
            rowLabel: "rstcustom__rowLabel",
            rowToolbar: "rstcustom__rowToolbar",
            moveHandle: "rstcustom__moveHandle",
            loadingHandle: "rstcustom__loadingHandle",
            toolbarButton: "rstcustom__toolbarButton",
            loadingCircle: "rstcustom__loadingCircle",
            loadingCirclePoint: "rstcustom__loadingCirclePoint",
            pointFade: "rstcustom__pointFade",
            rowTitle: "rstcustom__rowTitle",
            rowTitleWithSubtitle: "rstcustom__rowTitleWithSubtitle",
            rowSubtitle: "rstcustom__rowSubtitle",
            collapseButton: "rstcustom__collapseButton",
            expandButton: "rstcustom__expandButton",
            lineChildren: "rstcustom__lineChildren",
            contentContainer: "rstcustom__contentContainer"
        };
    }, /* 8 */
    /***/
    function(module, exports) {
        /**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
        module.exports = function(css) {
            // get current location
            var location = "undefined" != typeof window && window.location;
            if (!location) throw new Error("fixUrls requires window.location");
            // blank or null?
            if (!css || "string" != typeof css) return css;
            var baseUrl = location.protocol + "//" + location.host, currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
            // send back the fixed css
            return css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
                // strip quotes (if they exist)
                var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function(o, $1) {
                    return $1;
                }).replace(/^'(.*)'$/, function(o, $1) {
                    return $1;
                });
                // already a full url? no change
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) return fullMatch;
                // convert the url to a full url
                var newUrl;
                // send back the fixed url(...)
                //TODO: should we add protocol?
                return newUrl = 0 === unquotedOrigUrl.indexOf("//") ? unquotedOrigUrl : 0 === unquotedOrigUrl.indexOf("/") ? baseUrl + unquotedOrigUrl : currentDir + unquotedOrigUrl.replace(/^\.\//, ""), 
                "url(" + JSON.stringify(newUrl) + ")";
            });
        };
    }, /* 9 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function Chevron(props) {
            return React.createElement("svg", _extends({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 3,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, props), React.createElement("path", {
                d: "M9 18l6-6-6-6"
            }));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _react = __webpack_require__(0), React = function(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj.default = obj, newObj;
        }(_react);
        exports.default = Chevron;
    }, /* 10 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(0), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(1), _propTypes2 = _interopRequireDefault(_propTypes), _TreeNodeRenderer = __webpack_require__(11), _TreeNodeRenderer2 = _interopRequireDefault(_TreeNodeRenderer), MinimalThemeTreeNodeRenderer = function(_Component) {
            function MinimalThemeTreeNodeRenderer(props) {
                _classCallCheck(this, MinimalThemeTreeNodeRenderer);
                var _this = _possibleConstructorReturn(this, (MinimalThemeTreeNodeRenderer.__proto__ || Object.getPrototypeOf(MinimalThemeTreeNodeRenderer)).call(this, props));
                return _this.state = {}, _this.bound = {
                    handleMouseOver: _this.handleMouseOver.bind(_this),
                    handleMouseLeave: _this.handleMouseLeave.bind(_this)
                }, _this;
            }
            return _inherits(MinimalThemeTreeNodeRenderer, _Component), _createClass(MinimalThemeTreeNodeRenderer, [ {
                key: "handleMouseOver",
                value: function() {
                    this.state.highlight || this.setState({
                        highlight: !0
                    });
                }
            }, {
                key: "handleMouseLeave",
                value: function() {
                    this.setState({
                        highlight: !1
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var _props = this.props, children = _props.children, scaffoldBlockPxWidth = (_props.swapFrom, 
                    _props.swapLength, _props.swapDepth, _props.scaffoldBlockPxWidth), lowerSiblingCounts = _props.lowerSiblingCounts, connectDropTarget = _props.connectDropTarget, isOver = _props.isOver, draggedNode = _props.draggedNode, canDrop = _props.canDrop, otherProps = (_props.treeIndex, 
                    _props.treeId, _props.listIndex, _props.rowDirection, _props.getPrevRow, _props.node, 
                    _props.path, _objectWithoutProperties(_props, [ "children", "swapFrom", "swapLength", "swapDepth", "scaffoldBlockPxWidth", "lowerSiblingCounts", "connectDropTarget", "isOver", "draggedNode", "canDrop", "treeIndex", "treeId", "listIndex", "rowDirection", "getPrevRow", "node", "path" ])), scaffoldBlockCount = lowerSiblingCounts.length - 1, dropType = void 0;
                    return canDrop && !isOver ? dropType = "validDrop" : !canDrop && isOver && (dropType = "invalidDrop"), 
                    connectDropTarget(_react2.default.createElement("div", _extends({}, otherProps, {
                        onMouseOver: this.bound.handleMouseOver,
                        onMouseLeave: this.bound.handleMouseLeave
                    }, otherProps, {
                        onFocus: function() {},
                        className: _TreeNodeRenderer2.default.node + (this.state.highlight ? " " + _TreeNodeRenderer2.default.highlight : "") + (dropType ? " " + _TreeNodeRenderer2.default[dropType] : "")
                    }), _react2.default.createElement("div", {
                        className: _TreeNodeRenderer2.default.nodeContent,
                        style: {
                            paddingLeft: scaffoldBlockPxWidth * scaffoldBlockCount
                        }
                    }, _react.Children.map(children, function(child) {
                        return (0, _react.cloneElement)(child, {
                            isOver: isOver,
                            canDrop: canDrop,
                            draggedNode: draggedNode
                        });
                    }))));
                }
            } ]), MinimalThemeTreeNodeRenderer;
        }(_react.Component);
        MinimalThemeTreeNodeRenderer.defaultProps = {
            swapFrom: null,
            swapDepth: null,
            swapLength: null,
            canDrop: !1,
            draggedNode: null,
            rowDirection: "ltr"
        }, MinimalThemeTreeNodeRenderer.propTypes = {
            treeIndex: _propTypes2.default.number.isRequired,
            swapFrom: _propTypes2.default.number,
            swapDepth: _propTypes2.default.number,
            swapLength: _propTypes2.default.number,
            scaffoldBlockPxWidth: _propTypes2.default.number.isRequired,
            lowerSiblingCounts: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
            treeId: _propTypes2.default.string.isRequired,
            listIndex: _propTypes2.default.number.isRequired,
            rowDirection: _propTypes2.default.string,
            children: _propTypes2.default.node.isRequired,
            // Drop target
            connectDropTarget: _propTypes2.default.func.isRequired,
            isOver: _propTypes2.default.bool.isRequired,
            canDrop: _propTypes2.default.bool,
            draggedNode: _propTypes2.default.shape({}),
            // used in dndManager
            getPrevRow: _propTypes2.default.func.isRequired,
            node: _propTypes2.default.shape({}).isRequired,
            path: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([ _propTypes2.default.string, _propTypes2.default.number ])).isRequired
        }, exports.default = MinimalThemeTreeNodeRenderer;
    }, /* 11 */
    /***/
    function(module, exports, __webpack_require__) {
        // style-loader: Adds some css to the DOM by adding a <style> tag
        // load the styles
        var content = __webpack_require__(12);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
        // Prepare cssTransformation
        var options = {
            insertAt: "top",
            hmr: !0
        };
        options.transform = void 0;
        // add the styles to the DOM
        __webpack_require__(3)(content, options);
        content.locals && (module.exports = content.locals);
    }, /* 12 */
    /***/
    function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(2)(!1), // imports
        // module
        exports.push([ module.i, ".rstcustom__node {\n  height: 52px !important;\n  width: 50%;\n  white-space: nowrap;\n  position: relative;\n  text-align: left;\n  min-width: 100%;\n  overflow: hidden; }\n\n.rstcustom__nodeContent {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 80%; }\n\n.rstcustom__validDrop {\n  background: #26C281; }\n\n.rstcustom__invalidDrop {\n  background: #C0392B; }\n\n.rstcustom__highlight {\n  cursor: pointer; }\n", "" ]), 
        // exports
        exports.locals = {
            node: "rstcustom__node",
            nodeContent: "rstcustom__nodeContent",
            validDrop: "rstcustom__validDrop",
            invalidDrop: "rstcustom__invalidDrop",
            highlight: "rstcustom__highlight"
        };
    } ]);
});