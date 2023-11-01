(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[226], {
    5887: function(t, r, o) {
        "use strict";
        o.d(r, {
            q: function() {
                return CopyButton
            }
        });
        var d = o(7294)
          , m = o(8104)
          , y = Object.defineProperty
          , v = Object.getOwnPropertySymbols
          , b = Object.prototype.hasOwnProperty
          , E = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (t,r,o)=>r in t ? y(t, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : t[r] = o
          , __spreadValues = (t,r)=>{
            for (var o in r || (r = {}))
                b.call(r, o) && __defNormalProp(t, o, r[o]);
            if (v)
                for (var o of v(r))
                    E.call(r, o) && __defNormalProp(t, o, r[o]);
            return t
        }
          , __objRest = (t,r)=>{
            var o = {};
            for (var d in t)
                b.call(t, d) && 0 > r.indexOf(d) && (o[d] = t[d]);
            if (null != t && v)
                for (var d of v(t))
                    0 > r.indexOf(d) && E.call(t, d) && (o[d] = t[d]);
            return o
        }
        ;
        let S = {
            timeout: 1e3
        };
        function CopyButton(t) {
            let r = (0,
            m.N4)("CopyButton", S, t)
              , {children: o, timeout: y, value: v} = r
              , b = __objRest(r, ["children", "timeout", "value"])
              , E = function({timeout: t=2e3}={}) {
                let[r,o] = (0,
                d.useState)(null)
                  , [m,y] = (0,
                d.useState)(!1)
                  , [v,b] = (0,
                d.useState)(null)
                  , handleCopyResult = r=>{
                    clearTimeout(v),
                    b(setTimeout(()=>y(!1), t)),
                    y(r)
                }
                ;
                return {
                    copy: t=>{
                        "clipboard"in navigator ? navigator.clipboard.writeText(t).then(()=>handleCopyResult(!0)).catch(t=>o(t)) : o(Error("useClipboard: navigator.clipboard is not supported"))
                    }
                    ,
                    reset: ()=>{
                        y(!1),
                        o(null),
                        clearTimeout(v)
                    }
                    ,
                    error: r,
                    copied: m
                }
            }({
                timeout: y
            });
            return d.createElement(d.Fragment, null, o(__spreadValues({
                copy: ()=>E.copy(v),
                copied: E.copied
            }, b)))
        }
        CopyButton.displayName = "@mantine/core/CopyButton"
    },
    6086: function(t) {
        "use strict";
        var r = Object.assign.bind(Object);
        t.exports = r,
        t.exports.default = t.exports
    },
    1163: function(t, r, o) {
        t.exports = o(9974)
    },
    4298: function(t, r, o) {
        t.exports = o(5354)
    },
    4155: function(t) {
        var r, o, d, m = t.exports = {};
        function defaultSetTimout() {
            throw Error("setTimeout has not been defined")
        }
        function defaultClearTimeout() {
            throw Error("clearTimeout has not been defined")
        }
        function runTimeout(t) {
            if (r === setTimeout)
                return setTimeout(t, 0);
            if ((r === defaultSetTimout || !r) && setTimeout)
                return r = setTimeout,
                setTimeout(t, 0);
            try {
                return r(t, 0)
            } catch (o) {
                try {
                    return r.call(null, t, 0)
                } catch (o) {
                    return r.call(this, t, 0)
                }
            }
        }
        !function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
            } catch (t) {
                r = defaultSetTimout
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
            } catch (t) {
                o = defaultClearTimeout
            }
        }();
        var y = []
          , v = !1
          , b = -1;
        function cleanUpNextTick() {
            v && d && (v = !1,
            d.length ? y = d.concat(y) : b = -1,
            y.length && drainQueue())
        }
        function drainQueue() {
            if (!v) {
                var t = runTimeout(cleanUpNextTick);
                v = !0;
                for (var r = y.length; r; ) {
                    for (d = y,
                    y = []; ++b < r; )
                        d && d[b].run();
                    b = -1,
                    r = y.length
                }
                d = null,
                v = !1,
                function(t) {
                    if (o === clearTimeout)
                        return clearTimeout(t);
                    if ((o === defaultClearTimeout || !o) && clearTimeout)
                        return o = clearTimeout,
                        clearTimeout(t);
                    try {
                        o(t)
                    } catch (r) {
                        try {
                            return o.call(null, t)
                        } catch (r) {
                            return o.call(this, t)
                        }
                    }
                }(t)
            }
        }
        function Item(t, r) {
            this.fun = t,
            this.array = r
        }
        function noop() {}
        m.nextTick = function(t) {
            var r = Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var o = 1; o < arguments.length; o++)
                    r[o - 1] = arguments[o];
            y.push(new Item(t,r)),
            1 !== y.length || v || runTimeout(drainQueue)
        }
        ,
        Item.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        m.title = "browser",
        m.browser = !0,
        m.env = {},
        m.argv = [],
        m.version = "",
        m.versions = {},
        m.on = noop,
        m.addListener = noop,
        m.once = noop,
        m.off = noop,
        m.removeListener = noop,
        m.removeAllListeners = noop,
        m.emit = noop,
        m.prependListener = noop,
        m.prependOnceListener = noop,
        m.listeners = function(t) {
            return []
        }
        ,
        m.binding = function(t) {
            throw Error("process.binding is not supported")
        }
        ,
        m.cwd = function() {
            return "/"
        }
        ,
        m.chdir = function(t) {
            throw Error("process.chdir is not supported")
        }
        ,
        m.umask = function() {
            return 0
        }
    },
    2703: function(t, r, o) {
        "use strict";
        var d = o(414);
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        emptyFunctionWithReset.resetWarningCache = emptyFunction,
        t.exports = function() {
            function shim(t, r, o, m, y, v) {
                if (v !== d) {
                    var b = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw b.name = "Invariant Violation",
                    b
                }
            }
            function getShim() {
                return shim
            }
            shim.isRequired = shim;
            var t = {
                array: shim,
                bigint: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                elementType: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction
            };
            return t.PropTypes = t,
            t
        }
    },
    5697: function(t, r, o) {
        t.exports = o(2703)()
    },
    414: function(t) {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    9590: function(t) {
        var r = "undefined" != typeof Element
          , o = "function" == typeof Map
          , d = "function" == typeof Set
          , m = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
        t.exports = function(t, y) {
            try {
                return function equal(t, y) {
                    if (t === y)
                        return !0;
                    if (t && y && "object" == typeof t && "object" == typeof y) {
                        var v, b, E, S;
                        if (t.constructor !== y.constructor)
                            return !1;
                        if (Array.isArray(t)) {
                            if ((v = t.length) != y.length)
                                return !1;
                            for (b = v; 0 != b--; )
                                if (!equal(t[b], y[b]))
                                    return !1;
                            return !0
                        }
                        if (o && t instanceof Map && y instanceof Map) {
                            if (t.size !== y.size)
                                return !1;
                            for (S = t.entries(); !(b = S.next()).done; )
                                if (!y.has(b.value[0]))
                                    return !1;
                            for (S = t.entries(); !(b = S.next()).done; )
                                if (!equal(b.value[1], y.get(b.value[0])))
                                    return !1;
                            return !0
                        }
                        if (d && t instanceof Set && y instanceof Set) {
                            if (t.size !== y.size)
                                return !1;
                            for (S = t.entries(); !(b = S.next()).done; )
                                if (!y.has(b.value[0]))
                                    return !1;
                            return !0
                        }
                        if (m && ArrayBuffer.isView(t) && ArrayBuffer.isView(y)) {
                            if ((v = t.length) != y.length)
                                return !1;
                            for (b = v; 0 != b--; )
                                if (t[b] !== y[b])
                                    return !1;
                            return !0
                        }
                        if (t.constructor === RegExp)
                            return t.source === y.source && t.flags === y.flags;
                        if (t.valueOf !== Object.prototype.valueOf && "function" == typeof t.valueOf && "function" == typeof y.valueOf)
                            return t.valueOf() === y.valueOf();
                        if (t.toString !== Object.prototype.toString && "function" == typeof t.toString && "function" == typeof y.toString)
                            return t.toString() === y.toString();
                        if ((v = (E = Object.keys(t)).length) !== Object.keys(y).length)
                            return !1;
                        for (b = v; 0 != b--; )
                            if (!Object.prototype.hasOwnProperty.call(y, E[b]))
                                return !1;
                        if (r && t instanceof Element)
                            return !1;
                        for (b = v; 0 != b--; )
                            if (("_owner" !== E[b] && "__v" !== E[b] && "__o" !== E[b] || !t.$$typeof) && !equal(t[E[b]], y[E[b]]))
                                return !1;
                        return !0
                    }
                    return t != t && y != y
                }(t, y)
            } catch (t) {
                if ((t.message || "").match(/stack|recursion/i))
                    return console.warn("react-fast-compare cannot handle circular refs"),
                    !1;
                throw t
            }
        }
    },
    4593: function(t, r, o) {
        "use strict";
        o.d(r, {
            q: function() {
                return V
            }
        });
        var d, m, y, v, b = o(5697), E = o.n(b), S = o(3524), A = o.n(S), C = o(9590), P = o.n(C), L = o(7294), N = o(6086), R = o.n(N), k = {
            BODY: "bodyAttributes",
            HTML: "htmlAttributes",
            TITLE: "titleAttributes"
        }, M = {
            BASE: "base",
            BODY: "body",
            HEAD: "head",
            HTML: "html",
            LINK: "link",
            META: "meta",
            NOSCRIPT: "noscript",
            SCRIPT: "script",
            STYLE: "style",
            TITLE: "title"
        };
        Object.keys(M).map(function(t) {
            return M[t]
        });
        var I = {
            CHARSET: "charset",
            CSS_TEXT: "cssText",
            HREF: "href",
            HTTPEQUIV: "http-equiv",
            INNER_HTML: "innerHTML",
            ITEM_PROP: "itemprop",
            NAME: "name",
            PROPERTY: "property",
            REL: "rel",
            SRC: "src",
            TARGET: "target"
        }
          , F = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex"
        }
          , H = Object.keys(F).reduce(function(t, r) {
            return t[F[r]] = r,
            t
        }, {})
          , D = [M.NOSCRIPT, M.SCRIPT, M.STYLE]
          , z = "data-react-helmet"
          , B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , classCallCheck = function(t, r) {
            if (!(t instanceof r))
                throw TypeError("Cannot call a class as a function")
        }
          , U = function() {
            function defineProperties(t, r) {
                for (var o = 0; o < r.length; o++) {
                    var d = r[o];
                    d.enumerable = d.enumerable || !1,
                    d.configurable = !0,
                    "value"in d && (d.writable = !0),
                    Object.defineProperty(t, d.key, d)
                }
            }
            return function(t, r, o) {
                return r && defineProperties(t.prototype, r),
                o && defineProperties(t, o),
                t
            }
        }()
          , W = Object.assign || function(t) {
            for (var r = 1; r < arguments.length; r++) {
                var o = arguments[r];
                for (var d in o)
                    Object.prototype.hasOwnProperty.call(o, d) && (t[d] = o[d])
            }
            return t
        }
          , inherits = function(t, r) {
            if ("function" != typeof r && null !== r)
                throw TypeError("Super expression must either be null or a function, not " + typeof r);
            t.prototype = Object.create(r && r.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            r && (Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : t.__proto__ = r)
        }
          , objectWithoutProperties = function(t, r) {
            var o = {};
            for (var d in t)
                !(r.indexOf(d) >= 0) && Object.prototype.hasOwnProperty.call(t, d) && (o[d] = t[d]);
            return o
        }
          , possibleConstructorReturn = function(t, r) {
            if (!t)
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && ("object" == typeof r || "function" == typeof r) ? r : t
        }
          , encodeSpecialCharacters = function(t) {
            var r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return !1 === r ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }
          , getTitleFromPropsList = function(t) {
            var r = getInnermostProperty(t, M.TITLE)
              , o = getInnermostProperty(t, "titleTemplate");
            if (o && r)
                return o.replace(/%s/g, function() {
                    return Array.isArray(r) ? r.join("") : r
                });
            var d = getInnermostProperty(t, "defaultTitle");
            return r || d || void 0
        }
          , getAttributesFromPropsList = function(t, r) {
            return r.filter(function(r) {
                return void 0 !== r[t]
            }).map(function(r) {
                return r[t]
            }).reduce(function(t, r) {
                return W({}, t, r)
            }, {})
        }
          , getTagsFromPropsList = function(t, r, o) {
            var d = {};
            return o.filter(function(r) {
                return !!Array.isArray(r[t]) || (void 0 !== r[t] && warn("Helmet: " + t + ' should be of type "Array". Instead found type "' + B(r[t]) + '"'),
                !1)
            }).map(function(r) {
                return r[t]
            }).reverse().reduce(function(t, o) {
                var m = {};
                o.filter(function(t) {
                    for (var o = void 0, y = Object.keys(t), v = 0; v < y.length; v++) {
                        var b = y[v]
                          , E = b.toLowerCase();
                        -1 === r.indexOf(E) || o === I.REL && "canonical" === t[o].toLowerCase() || E === I.REL && "stylesheet" === t[E].toLowerCase() || (o = E),
                        -1 !== r.indexOf(b) && (b === I.INNER_HTML || b === I.CSS_TEXT || b === I.ITEM_PROP) && (o = b)
                    }
                    if (!o || !t[o])
                        return !1;
                    var S = t[o].toLowerCase();
                    return d[o] || (d[o] = {}),
                    m[o] || (m[o] = {}),
                    !d[o][S] && (m[o][S] = !0,
                    !0)
                }).reverse().forEach(function(r) {
                    return t.push(r)
                });
                for (var y = Object.keys(m), v = 0; v < y.length; v++) {
                    var b = y[v]
                      , E = R()({}, d[b], m[b]);
                    d[b] = E
                }
                return t
            }, []).reverse()
        }
          , getInnermostProperty = function(t, r) {
            for (var o = t.length - 1; o >= 0; o--) {
                var d = t[o];
                if (d.hasOwnProperty(r))
                    return d[r]
            }
            return null
        }
          , Y = (d = Date.now(),
        function(t) {
            var r = Date.now();
            r - d > 16 ? (d = r,
            t(r)) : setTimeout(function() {
                Y(t)
            }, 0)
        }
        )
          , cafPolyfill = function(t) {
            return clearTimeout(t)
        }
          , q = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Y : o.g.requestAnimationFrame || Y
          , Q = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : o.g.cancelAnimationFrame || cafPolyfill
          , warn = function(t) {
            return console && "function" == typeof console.warn && console.warn(t)
        }
          , X = null
          , commitTagChanges = function(t, r) {
            var o = t.baseTag
              , d = t.bodyAttributes
              , m = t.htmlAttributes
              , y = t.linkTags
              , v = t.metaTags
              , b = t.noscriptTags
              , E = t.onChangeClientState
              , S = t.scriptTags
              , A = t.styleTags
              , C = t.title
              , P = t.titleAttributes;
            updateAttributes(M.BODY, d),
            updateAttributes(M.HTML, m),
            updateTitle(C, P);
            var L = {
                baseTag: updateTags(M.BASE, o),
                linkTags: updateTags(M.LINK, y),
                metaTags: updateTags(M.META, v),
                noscriptTags: updateTags(M.NOSCRIPT, b),
                scriptTags: updateTags(M.SCRIPT, S),
                styleTags: updateTags(M.STYLE, A)
            }
              , N = {}
              , R = {};
            Object.keys(L).forEach(function(t) {
                var r = L[t]
                  , o = r.newTags
                  , d = r.oldTags;
                o.length && (N[t] = o),
                d.length && (R[t] = L[t].oldTags)
            }),
            r && r(),
            E(t, N, R)
        }
          , flattenArray = function(t) {
            return Array.isArray(t) ? t.join("") : t
        }
          , updateTitle = function(t, r) {
            void 0 !== t && document.title !== t && (document.title = flattenArray(t)),
            updateAttributes(M.TITLE, r)
        }
          , updateAttributes = function(t, r) {
            var o = document.getElementsByTagName(t)[0];
            if (o) {
                for (var d = o.getAttribute(z), m = d ? d.split(",") : [], y = [].concat(m), v = Object.keys(r), b = 0; b < v.length; b++) {
                    var E = v[b]
                      , S = r[E] || "";
                    o.getAttribute(E) !== S && o.setAttribute(E, S),
                    -1 === m.indexOf(E) && m.push(E);
                    var A = y.indexOf(E);
                    -1 !== A && y.splice(A, 1)
                }
                for (var C = y.length - 1; C >= 0; C--)
                    o.removeAttribute(y[C]);
                m.length === y.length ? o.removeAttribute(z) : o.getAttribute(z) !== v.join(",") && o.setAttribute(z, v.join(","))
            }
        }
          , updateTags = function(t, r) {
            var o = document.head || document.querySelector(M.HEAD)
              , d = o.querySelectorAll(t + "[" + z + "]")
              , m = Array.prototype.slice.call(d)
              , y = []
              , v = void 0;
            return r && r.length && r.forEach(function(r) {
                var o = document.createElement(t);
                for (var d in r)
                    if (r.hasOwnProperty(d)) {
                        if (d === I.INNER_HTML)
                            o.innerHTML = r.innerHTML;
                        else if (d === I.CSS_TEXT)
                            o.styleSheet ? o.styleSheet.cssText = r.cssText : o.appendChild(document.createTextNode(r.cssText));
                        else {
                            var b = void 0 === r[d] ? "" : r[d];
                            o.setAttribute(d, b)
                        }
                    }
                o.setAttribute(z, "true"),
                m.some(function(t, r) {
                    return v = r,
                    o.isEqualNode(t)
                }) ? m.splice(v, 1) : y.push(o)
            }),
            m.forEach(function(t) {
                return t.parentNode.removeChild(t)
            }),
            y.forEach(function(t) {
                return o.appendChild(t)
            }),
            {
                oldTags: m,
                newTags: y
            }
        }
          , generateElementAttributesAsString = function(t) {
            return Object.keys(t).reduce(function(r, o) {
                var d = void 0 !== t[o] ? o + '="' + t[o] + '"' : "" + o;
                return r ? r + " " + d : d
            }, "")
        }
          , generateTitleAsString = function(t, r, o, d) {
            var m = generateElementAttributesAsString(o)
              , y = flattenArray(r);
            return m ? "<" + t + " " + z + '="true" ' + m + ">" + encodeSpecialCharacters(y, d) + "</" + t + ">" : "<" + t + " " + z + '="true">' + encodeSpecialCharacters(y, d) + "</" + t + ">"
        }
          , convertElementAttributestoReactProps = function(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object.keys(t).reduce(function(r, o) {
                return r[F[o] || o] = t[o],
                r
            }, r)
        }
          , convertReactPropstoHtmlAttributes = function(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object.keys(t).reduce(function(r, o) {
                return r[H[o] || o] = t[o],
                r
            }, r)
        }
          , generateTitleAsReactComponent = function(t, r, o) {
            var d, m = convertElementAttributestoReactProps(o, ((d = {
                key: r
            })[z] = !0,
            d));
            return [L.createElement(M.TITLE, m, r)]
        }
          , getMethodsForTag = function(t, r, o) {
            switch (t) {
            case M.TITLE:
                return {
                    toComponent: function() {
                        return generateTitleAsReactComponent(t, r.title, r.titleAttributes, o)
                    },
                    toString: function() {
                        return generateTitleAsString(t, r.title, r.titleAttributes, o)
                    }
                };
            case k.BODY:
            case k.HTML:
                return {
                    toComponent: function() {
                        return convertElementAttributestoReactProps(r)
                    },
                    toString: function() {
                        return generateElementAttributesAsString(r)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return r.map(function(r, o) {
                            var d, m = ((d = {
                                key: o
                            })[z] = !0,
                            d);
                            return Object.keys(r).forEach(function(t) {
                                var o = F[t] || t;
                                if (o === I.INNER_HTML || o === I.CSS_TEXT) {
                                    var d = r.innerHTML || r.cssText;
                                    m.dangerouslySetInnerHTML = {
                                        __html: d
                                    }
                                } else
                                    m[o] = r[t]
                            }),
                            L.createElement(t, m)
                        })
                    },
                    toString: function() {
                        return r.reduce(function(r, d) {
                            var m = Object.keys(d).filter(function(t) {
                                return !(t === I.INNER_HTML || t === I.CSS_TEXT)
                            }).reduce(function(t, r) {
                                var m = void 0 === d[r] ? r : r + '="' + encodeSpecialCharacters(d[r], o) + '"';
                                return t ? t + " " + m : m
                            }, "")
                              , y = d.innerHTML || d.cssText || ""
                              , v = -1 === D.indexOf(t);
                            return r + "<" + t + " " + z + '="true" ' + m + (v ? "/>" : ">" + y + "</" + t + ">")
                        }, "")
                    }
                }
            }
        }
          , mapStateOnServer = function(t) {
            var r = t.baseTag
              , o = t.bodyAttributes
              , d = t.encode
              , m = t.htmlAttributes
              , y = t.linkTags
              , v = t.metaTags
              , b = t.noscriptTags
              , E = t.scriptTags
              , S = t.styleTags
              , A = t.title
              , C = t.titleAttributes;
            return {
                base: getMethodsForTag(M.BASE, r, d),
                bodyAttributes: getMethodsForTag(k.BODY, o, d),
                htmlAttributes: getMethodsForTag(k.HTML, m, d),
                link: getMethodsForTag(M.LINK, y, d),
                meta: getMethodsForTag(M.META, v, d),
                noscript: getMethodsForTag(M.NOSCRIPT, b, d),
                script: getMethodsForTag(M.SCRIPT, E, d),
                style: getMethodsForTag(M.STYLE, S, d),
                title: getMethodsForTag(M.TITLE, {
                    title: void 0 === A ? "" : A,
                    titleAttributes: C
                }, d)
            }
        }
          , V = (m = A()(function(t) {
            var r;
            return {
                baseTag: (r = [I.HREF, I.TARGET],
                t.filter(function(t) {
                    return void 0 !== t[M.BASE]
                }).map(function(t) {
                    return t[M.BASE]
                }).reverse().reduce(function(t, o) {
                    if (!t.length)
                        for (var d = Object.keys(o), m = 0; m < d.length; m++) {
                            var y = d[m].toLowerCase();
                            if (-1 !== r.indexOf(y) && o[y])
                                return t.concat(o)
                        }
                    return t
                }, [])),
                bodyAttributes: getAttributesFromPropsList(k.BODY, t),
                defer: getInnermostProperty(t, "defer"),
                encode: getInnermostProperty(t, "encodeSpecialCharacters"),
                htmlAttributes: getAttributesFromPropsList(k.HTML, t),
                linkTags: getTagsFromPropsList(M.LINK, [I.REL, I.HREF], t),
                metaTags: getTagsFromPropsList(M.META, [I.NAME, I.CHARSET, I.HTTPEQUIV, I.PROPERTY, I.ITEM_PROP], t),
                noscriptTags: getTagsFromPropsList(M.NOSCRIPT, [I.INNER_HTML], t),
                onChangeClientState: getInnermostProperty(t, "onChangeClientState") || function() {}
                ,
                scriptTags: getTagsFromPropsList(M.SCRIPT, [I.SRC, I.INNER_HTML], t),
                styleTags: getTagsFromPropsList(M.STYLE, [I.CSS_TEXT], t),
                title: getTitleFromPropsList(t),
                titleAttributes: getAttributesFromPropsList(k.TITLE, t)
            }
        }, function(t) {
            X && Q(X),
            t.defer ? X = q(function() {
                commitTagChanges(t, function() {
                    X = null
                })
            }) : (commitTagChanges(t),
            X = null)
        }, mapStateOnServer)(function() {
            return null
        }),
        v = y = function(t) {
            function HelmetWrapper() {
                return classCallCheck(this, HelmetWrapper),
                possibleConstructorReturn(this, t.apply(this, arguments))
            }
            return inherits(HelmetWrapper, t),
            HelmetWrapper.prototype.shouldComponentUpdate = function(t) {
                return !P()(this.props, t)
            }
            ,
            HelmetWrapper.prototype.mapNestedChildrenToProps = function(t, r) {
                if (!r)
                    return null;
                switch (t.type) {
                case M.SCRIPT:
                case M.NOSCRIPT:
                    return {
                        innerHTML: r
                    };
                case M.STYLE:
                    return {
                        cssText: r
                    }
                }
                throw Error("<" + t.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }
            ,
            HelmetWrapper.prototype.flattenArrayTypeChildren = function(t) {
                var r, o = t.child, d = t.arrayTypeChildren, m = t.newChildProps, y = t.nestedChildren;
                return W({}, d, ((r = {})[o.type] = [].concat(d[o.type] || [], [W({}, m, this.mapNestedChildrenToProps(o, y))]),
                r))
            }
            ,
            HelmetWrapper.prototype.mapObjectTypeChildren = function(t) {
                var r, o, d = t.child, m = t.newProps, y = t.newChildProps, v = t.nestedChildren;
                switch (d.type) {
                case M.TITLE:
                    return W({}, m, ((r = {})[d.type] = v,
                    r.titleAttributes = W({}, y),
                    r));
                case M.BODY:
                    return W({}, m, {
                        bodyAttributes: W({}, y)
                    });
                case M.HTML:
                    return W({}, m, {
                        htmlAttributes: W({}, y)
                    })
                }
                return W({}, m, ((o = {})[d.type] = W({}, y),
                o))
            }
            ,
            HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function(t, r) {
                var o = W({}, r);
                return Object.keys(t).forEach(function(r) {
                    var d;
                    o = W({}, o, ((d = {})[r] = t[r],
                    d))
                }),
                o
            }
            ,
            HelmetWrapper.prototype.warnOnInvalidChildren = function(t, r) {
                return !0
            }
            ,
            HelmetWrapper.prototype.mapChildrenToProps = function(t, r) {
                var o = this
                  , d = {};
                return L.Children.forEach(t, function(t) {
                    if (t && t.props) {
                        var m = t.props
                          , y = m.children
                          , v = convertReactPropstoHtmlAttributes(objectWithoutProperties(m, ["children"]));
                        switch (o.warnOnInvalidChildren(t, y),
                        t.type) {
                        case M.LINK:
                        case M.META:
                        case M.NOSCRIPT:
                        case M.SCRIPT:
                        case M.STYLE:
                            d = o.flattenArrayTypeChildren({
                                child: t,
                                arrayTypeChildren: d,
                                newChildProps: v,
                                nestedChildren: y
                            });
                            break;
                        default:
                            r = o.mapObjectTypeChildren({
                                child: t,
                                newProps: r,
                                newChildProps: v,
                                nestedChildren: y
                            })
                        }
                    }
                }),
                r = this.mapArrayTypeChildrenToProps(d, r)
            }
            ,
            HelmetWrapper.prototype.render = function() {
                var t = this.props
                  , r = t.children
                  , o = W({}, objectWithoutProperties(t, ["children"]));
                return r && (o = this.mapChildrenToProps(r, o)),
                L.createElement(m, o)
            }
            ,
            U(HelmetWrapper, null, [{
                key: "canUseDOM",
                set: function(t) {
                    m.canUseDOM = t
                }
            }]),
            HelmetWrapper
        }(L.Component),
        y.propTypes = {
            base: E().object,
            bodyAttributes: E().object,
            children: E().oneOfType([E().arrayOf(E().node), E().node]),
            defaultTitle: E().string,
            defer: E().bool,
            encodeSpecialCharacters: E().bool,
            htmlAttributes: E().object,
            link: E().arrayOf(E().object),
            meta: E().arrayOf(E().object),
            noscript: E().arrayOf(E().object),
            onChangeClientState: E().func,
            script: E().arrayOf(E().object),
            style: E().arrayOf(E().object),
            title: E().string,
            titleAttributes: E().object,
            titleTemplate: E().string
        },
        y.defaultProps = {
            defer: !0,
            encodeSpecialCharacters: !0
        },
        y.peek = m.peek,
        y.rewind = function() {
            var t = m.rewind();
            return t || (t = mapStateOnServer({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            })),
            t
        }
        ,
        v);
        V.renderStatic = V.rewind
    },
    3524: function(t, r, o) {
        "use strict";
        var d = o(7294)
          , m = d && "object" == typeof d && "default"in d ? d.default : d;
        function _defineProperty(t, r, o) {
            return r in t ? Object.defineProperty(t, r, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = o,
            t
        }
        var y = !!("undefined" != typeof window && window.document && window.document.createElement);
        t.exports = function(t, r, o) {
            if ("function" != typeof t)
                throw Error("Expected reducePropsToState to be a function.");
            if ("function" != typeof r)
                throw Error("Expected handleStateChangeOnClient to be a function.");
            if (void 0 !== o && "function" != typeof o)
                throw Error("Expected mapStateOnServer to either be undefined or a function.");
            return function(v) {
                if ("function" != typeof v)
                    throw Error("Expected WrappedComponent to be a React component.");
                var b, E = [];
                function emitChange() {
                    b = t(E.map(function(t) {
                        return t.props
                    })),
                    S.canUseDOM ? r(b) : o && (b = o(b))
                }
                var S = function(t) {
                    function SideEffect() {
                        return t.apply(this, arguments) || this
                    }
                    SideEffect.prototype = Object.create(t.prototype),
                    SideEffect.prototype.constructor = SideEffect,
                    SideEffect.__proto__ = t,
                    SideEffect.peek = function() {
                        return b
                    }
                    ,
                    SideEffect.rewind = function() {
                        if (SideEffect.canUseDOM)
                            throw Error("You may only call rewind() on the server. Call peek() to read the current state.");
                        var t = b;
                        return b = void 0,
                        E = [],
                        t
                    }
                    ;
                    var r = SideEffect.prototype;
                    return r.UNSAFE_componentWillMount = function() {
                        E.push(this),
                        emitChange()
                    }
                    ,
                    r.componentDidUpdate = function() {
                        emitChange()
                    }
                    ,
                    r.componentWillUnmount = function() {
                        var t = E.indexOf(this);
                        E.splice(t, 1),
                        emitChange()
                    }
                    ,
                    r.render = function() {
                        return m.createElement(v, this.props)
                    }
                    ,
                    SideEffect
                }(d.PureComponent);
                return _defineProperty(S, "displayName", "SideEffect(" + (v.displayName || v.name || "Component") + ")"),
                _defineProperty(S, "canUseDOM", y),
                S
            }
        }
    },
    5459: function(t, r, o) {
        var d, m = o(4155);
        "undefined" != typeof self && self,
        t.exports = (d = o(7294),
        (()=>{
            var t = {
                7403: (t,r,o)=>{
                    "use strict";
                    o.d(r, {
                        default: ()=>M
                    });
                    var d = o(4087)
                      , m = o.n(d);
                    let a = function(t) {
                        return new RegExp(/<[a-z][\s\S]*>/i).test(t)
                    }
                      , i = function(t, r) {
                        return Math.floor(Math.random() * (r - t + 1)) + t
                    };
                    var y = "TYPE_CHARACTER"
                      , v = "REMOVE_CHARACTER"
                      , b = "REMOVE_ALL"
                      , E = "REMOVE_LAST_VISIBLE_NODE"
                      , S = "PAUSE_FOR"
                      , A = "CALL_FUNCTION"
                      , C = "ADD_HTML_TAG_ELEMENT"
                      , P = "CHANGE_DELETE_SPEED"
                      , L = "CHANGE_DELAY"
                      , N = "CHANGE_CURSOR"
                      , R = "PASTE_STRING"
                      , k = "HTML_TAG";
                    function _(t) {
                        return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        }
                        : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }
                        )(t)
                    }
                    function g(t, r) {
                        var o = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var d = Object.getOwnPropertySymbols(t);
                            r && (d = d.filter(function(r) {
                                return Object.getOwnPropertyDescriptor(t, r).enumerable
                            })),
                            o.push.apply(o, d)
                        }
                        return o
                    }
                    function w(t) {
                        for (var r = 1; r < arguments.length; r++) {
                            var o = null != arguments[r] ? arguments[r] : {};
                            r % 2 ? g(Object(o), !0).forEach(function(r) {
                                O(t, r, o[r])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : g(Object(o)).forEach(function(r) {
                                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(o, r))
                            })
                        }
                        return t
                    }
                    function x(t) {
                        return function(t) {
                            if (Array.isArray(t))
                                return j(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                                return Array.from(t)
                        }(t) || function(t, r) {
                            if (t) {
                                if ("string" == typeof t)
                                    return j(t, r);
                                var o = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === o && t.constructor && (o = t.constructor.name),
                                "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? j(t, r) : void 0
                            }
                        }(t) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }
                    function j(t, r) {
                        (null == r || r > t.length) && (r = t.length);
                        for (var o = 0, d = Array(r); o < r; o++)
                            d[o] = t[o];
                        return d
                    }
                    function O(t, r, o) {
                        return (r = T(r))in t ? Object.defineProperty(t, r, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[r] = o,
                        t
                    }
                    function T(t) {
                        var r = function(t, r) {
                            if ("object" !== _(t) || null === t)
                                return t;
                            var o = t[Symbol.toPrimitive];
                            if (void 0 !== o) {
                                var d = o.call(t, "string");
                                if ("object" !== _(d))
                                    return d;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(t)
                        }(t);
                        return "symbol" === _(r) ? r : String(r)
                    }
                    let M = function() {
                        var t;
                        function e(t, r) {
                            var o = this;
                            if (function(t, r) {
                                if (!(t instanceof r))
                                    throw TypeError("Cannot call a class as a function")
                            }(this, e),
                            O(this, "state", {
                                cursorAnimation: null,
                                lastFrameTime: null,
                                pauseUntil: null,
                                eventQueue: [],
                                eventLoop: null,
                                eventLoopPaused: !1,
                                reverseCalledEvents: [],
                                calledEvents: [],
                                visibleNodes: [],
                                initialOptions: null,
                                elements: {
                                    container: null,
                                    wrapper: document.createElement("span"),
                                    cursor: document.createElement("span")
                                }
                            }),
                            O(this, "options", {
                                strings: null,
                                cursor: "|",
                                delay: "natural",
                                pauseFor: 1500,
                                deleteSpeed: "natural",
                                loop: !1,
                                autoStart: !1,
                                devMode: !1,
                                skipAddStyles: !1,
                                wrapperClassName: "Typewriter__wrapper",
                                cursorClassName: "Typewriter__cursor",
                                stringSplitter: null,
                                onCreateTextNode: null,
                                onRemoveNode: null
                            }),
                            O(this, "setupWrapperElement", function() {
                                o.state.elements.container && (o.state.elements.wrapper.className = o.options.wrapperClassName,
                                o.state.elements.cursor.className = o.options.cursorClassName,
                                o.state.elements.cursor.innerHTML = o.options.cursor,
                                o.state.elements.container.innerHTML = "",
                                o.state.elements.container.appendChild(o.state.elements.wrapper),
                                o.state.elements.container.appendChild(o.state.elements.cursor))
                            }),
                            O(this, "start", function() {
                                return o.state.eventLoopPaused = !1,
                                o.runEventLoop(),
                                o
                            }),
                            O(this, "pause", function() {
                                return o.state.eventLoopPaused = !0,
                                o
                            }),
                            O(this, "stop", function() {
                                return o.state.eventLoop && ((0,
                                d.cancel)(o.state.eventLoop),
                                o.state.eventLoop = null),
                                o
                            }),
                            O(this, "pauseFor", function(t) {
                                return o.addEventToQueue(S, {
                                    ms: t
                                }),
                                o
                            }),
                            O(this, "typeOutAllStrings", function() {
                                return "string" == typeof o.options.strings ? o.typeString(o.options.strings).pauseFor(o.options.pauseFor) : o.options.strings.forEach(function(t) {
                                    o.typeString(t).pauseFor(o.options.pauseFor).deleteAll(o.options.deleteSpeed)
                                }),
                                o
                            }),
                            O(this, "typeString", function(t) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                if (a(t))
                                    return o.typeOutHTMLString(t, r);
                                if (t) {
                                    var d = (o.options || {}).stringSplitter
                                      , m = "function" == typeof d ? d(t) : t.split("");
                                    o.typeCharacters(m, r)
                                }
                                return o
                            }),
                            O(this, "pasteString", function(t) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                return a(t) ? o.typeOutHTMLString(t, r, !0) : (t && o.addEventToQueue(R, {
                                    character: t,
                                    node: r
                                }),
                                o)
                            }),
                            O(this, "typeOutHTMLString", function(t) {
                                var r, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, m = arguments.length > 2 ? arguments[2] : void 0, y = ((r = document.createElement("div")).innerHTML = t,
                                r.childNodes);
                                if (y.length > 0)
                                    for (var v = 0; v < y.length; v++) {
                                        var b = y[v]
                                          , E = b.innerHTML;
                                        b && 3 !== b.nodeType ? (b.innerHTML = "",
                                        o.addEventToQueue(C, {
                                            node: b,
                                            parentNode: d
                                        }),
                                        m ? o.pasteString(E, b) : o.typeString(E, b)) : b.textContent && (m ? o.pasteString(b.textContent, d) : o.typeString(b.textContent, d))
                                    }
                                return o
                            }),
                            O(this, "deleteAll", function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                                return o.addEventToQueue(b, {
                                    speed: t
                                }),
                                o
                            }),
                            O(this, "changeDeleteSpeed", function(t) {
                                if (!t)
                                    throw Error("Must provide new delete speed");
                                return o.addEventToQueue(P, {
                                    speed: t
                                }),
                                o
                            }),
                            O(this, "changeDelay", function(t) {
                                if (!t)
                                    throw Error("Must provide new delay");
                                return o.addEventToQueue(L, {
                                    delay: t
                                }),
                                o
                            }),
                            O(this, "changeCursor", function(t) {
                                if (!t)
                                    throw Error("Must provide new cursor");
                                return o.addEventToQueue(N, {
                                    cursor: t
                                }),
                                o
                            }),
                            O(this, "deleteChars", function(t) {
                                if (!t)
                                    throw Error("Must provide amount of characters to delete");
                                for (var r = 0; r < t; r++)
                                    o.addEventToQueue(v);
                                return o
                            }),
                            O(this, "callFunction", function(t, r) {
                                if (!t || "function" != typeof t)
                                    throw Error("Callback must be a function");
                                return o.addEventToQueue(A, {
                                    cb: t,
                                    thisArg: r
                                }),
                                o
                            }),
                            O(this, "typeCharacters", function(t) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                if (!t || !Array.isArray(t))
                                    throw Error("Characters must be an array");
                                return t.forEach(function(t) {
                                    o.addEventToQueue(y, {
                                        character: t,
                                        node: r
                                    })
                                }),
                                o
                            }),
                            O(this, "removeCharacters", function(t) {
                                if (!t || !Array.isArray(t))
                                    throw Error("Characters must be an array");
                                return t.forEach(function() {
                                    o.addEventToQueue(v)
                                }),
                                o
                            }),
                            O(this, "addEventToQueue", function(t, r) {
                                var d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return o.addEventToStateProperty(t, r, d, "eventQueue")
                            }),
                            O(this, "addReverseCalledEvent", function(t, r) {
                                var d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return o.options.loop ? o.addEventToStateProperty(t, r, d, "reverseCalledEvents") : o
                            }),
                            O(this, "addEventToStateProperty", function(t, r) {
                                var d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                                  , m = arguments.length > 3 ? arguments[3] : void 0
                                  , y = {
                                    eventName: t,
                                    eventArgs: r || {}
                                };
                                return o.state[m] = d ? [y].concat(x(o.state[m])) : [].concat(x(o.state[m]), [y]),
                                o
                            }),
                            O(this, "runEventLoop", function() {
                                o.state.lastFrameTime || (o.state.lastFrameTime = Date.now());
                                var t = Date.now()
                                  , r = t - o.state.lastFrameTime;
                                if (!o.state.eventQueue.length) {
                                    if (!o.options.loop)
                                        return;
                                    o.state.eventQueue = x(o.state.calledEvents),
                                    o.state.calledEvents = [],
                                    o.options = w({}, o.state.initialOptions)
                                }
                                if (o.state.eventLoop = m()(o.runEventLoop),
                                !o.state.eventLoopPaused) {
                                    if (o.state.pauseUntil) {
                                        if (t < o.state.pauseUntil)
                                            return;
                                        o.state.pauseUntil = null
                                    }
                                    var d, M = x(o.state.eventQueue), I = M.shift();
                                    if (!(r <= (d = I.eventName === E || I.eventName === v ? "natural" === o.options.deleteSpeed ? i(40, 80) : o.options.deleteSpeed : "natural" === o.options.delay ? i(120, 160) : o.options.delay))) {
                                        var F = I.eventName
                                          , H = I.eventArgs;
                                        switch (o.logInDevMode({
                                            currentEvent: I,
                                            state: o.state,
                                            delay: d
                                        }),
                                        F) {
                                        case R:
                                        case y:
                                            var D = H.character
                                              , z = H.node
                                              , B = document.createTextNode(D)
                                              , U = B;
                                            o.options.onCreateTextNode && "function" == typeof o.options.onCreateTextNode && (U = o.options.onCreateTextNode(D, B)),
                                            U && (z ? z.appendChild(U) : o.state.elements.wrapper.appendChild(U)),
                                            o.state.visibleNodes = [].concat(x(o.state.visibleNodes), [{
                                                type: "TEXT_NODE",
                                                character: D,
                                                node: U
                                            }]);
                                            break;
                                        case v:
                                            M.unshift({
                                                eventName: E,
                                                eventArgs: {
                                                    removingCharacterNode: !0
                                                }
                                            });
                                            break;
                                        case S:
                                            var W = I.eventArgs.ms;
                                            o.state.pauseUntil = Date.now() + parseInt(W);
                                            break;
                                        case A:
                                            var Y = I.eventArgs
                                              , q = Y.cb
                                              , Q = Y.thisArg;
                                            q.call(Q, {
                                                elements: o.state.elements
                                            });
                                            break;
                                        case C:
                                            var X = I.eventArgs
                                              , V = X.node
                                              , $ = X.parentNode;
                                            $ ? $.appendChild(V) : o.state.elements.wrapper.appendChild(V),
                                            o.state.visibleNodes = [].concat(x(o.state.visibleNodes), [{
                                                type: k,
                                                node: V,
                                                parentNode: $ || o.state.elements.wrapper
                                            }]);
                                            break;
                                        case b:
                                            var G = o.state.visibleNodes
                                              , K = H.speed
                                              , J = [];
                                            K && J.push({
                                                eventName: P,
                                                eventArgs: {
                                                    speed: K,
                                                    temp: !0
                                                }
                                            });
                                            for (var Z = 0, ee = G.length; Z < ee; Z++)
                                                J.push({
                                                    eventName: E,
                                                    eventArgs: {
                                                        removingCharacterNode: !1
                                                    }
                                                });
                                            K && J.push({
                                                eventName: P,
                                                eventArgs: {
                                                    speed: o.options.deleteSpeed,
                                                    temp: !0
                                                }
                                            }),
                                            M.unshift.apply(M, J);
                                            break;
                                        case E:
                                            var et = I.eventArgs.removingCharacterNode;
                                            if (o.state.visibleNodes.length) {
                                                var er = o.state.visibleNodes.pop()
                                                  , en = er.type
                                                  , eo = er.node
                                                  , ea = er.character;
                                                o.options.onRemoveNode && "function" == typeof o.options.onRemoveNode && o.options.onRemoveNode({
                                                    node: eo,
                                                    character: ea
                                                }),
                                                eo && eo.parentNode.removeChild(eo),
                                                en === k && et && M.unshift({
                                                    eventName: E,
                                                    eventArgs: {}
                                                })
                                            }
                                            break;
                                        case P:
                                            o.options.deleteSpeed = I.eventArgs.speed;
                                            break;
                                        case L:
                                            o.options.delay = I.eventArgs.delay;
                                            break;
                                        case N:
                                            o.options.cursor = I.eventArgs.cursor,
                                            o.state.elements.cursor.innerHTML = I.eventArgs.cursor
                                        }
                                        o.options.loop && (I.eventName === E || I.eventArgs && I.eventArgs.temp || (o.state.calledEvents = [].concat(x(o.state.calledEvents), [I]))),
                                        o.state.eventQueue = M,
                                        o.state.lastFrameTime = t
                                    }
                                }
                            }),
                            t) {
                                if ("string" == typeof t) {
                                    var M = document.querySelector(t);
                                    if (!M)
                                        throw Error("Could not find container element");
                                    this.state.elements.container = M
                                } else
                                    this.state.elements.container = t
                            }
                            r && (this.options = w(w({}, this.options), r)),
                            this.state.initialOptions = w({}, this.options),
                            this.init()
                        }
                        return t = [{
                            key: "init",
                            value: function() {
                                var t;
                                this.setupWrapperElement(),
                                this.addEventToQueue(N, {
                                    cursor: this.options.cursor
                                }, !0),
                                this.addEventToQueue(b, null, !0),
                                !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || ((t = document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),
                                document.head.appendChild(t),
                                window.___TYPEWRITER_JS_STYLES_ADDED___ = !0),
                                !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                            }
                        }, {
                            key: "logInDevMode",
                            value: function(t) {
                                this.options.devMode && console.log(t)
                            }
                        }],
                        function(t, r) {
                            for (var o = 0; o < r.length; o++) {
                                var d = r[o];
                                d.enumerable = d.enumerable || !1,
                                d.configurable = !0,
                                "value"in d && (d.writable = !0),
                                Object.defineProperty(t, T(d.key), d)
                            }
                        }(e.prototype, t),
                        Object.defineProperty(e, "prototype", {
                            writable: !1
                        }),
                        e
                    }()
                }
                ,
                8552: (t,r,o)=>{
                    var d = o(852)(o(5639), "DataView");
                    t.exports = d
                }
                ,
                1989: (t,r,o)=>{
                    var d = o(1789)
                      , m = o(401)
                      , y = o(7667)
                      , v = o(1327)
                      , b = o(1866);
                    function u(t) {
                        var r = -1
                          , o = null == t ? 0 : t.length;
                        for (this.clear(); ++r < o; ) {
                            var d = t[r];
                            this.set(d[0], d[1])
                        }
                    }
                    u.prototype.clear = d,
                    u.prototype.delete = m,
                    u.prototype.get = y,
                    u.prototype.has = v,
                    u.prototype.set = b,
                    t.exports = u
                }
                ,
                8407: (t,r,o)=>{
                    var d = o(7040)
                      , m = o(4125)
                      , y = o(2117)
                      , v = o(7518)
                      , b = o(4705);
                    function u(t) {
                        var r = -1
                          , o = null == t ? 0 : t.length;
                        for (this.clear(); ++r < o; ) {
                            var d = t[r];
                            this.set(d[0], d[1])
                        }
                    }
                    u.prototype.clear = d,
                    u.prototype.delete = m,
                    u.prototype.get = y,
                    u.prototype.has = v,
                    u.prototype.set = b,
                    t.exports = u
                }
                ,
                7071: (t,r,o)=>{
                    var d = o(852)(o(5639), "Map");
                    t.exports = d
                }
                ,
                3369: (t,r,o)=>{
                    var d = o(4785)
                      , m = o(1285)
                      , y = o(6e3)
                      , v = o(9916)
                      , b = o(5265);
                    function u(t) {
                        var r = -1
                          , o = null == t ? 0 : t.length;
                        for (this.clear(); ++r < o; ) {
                            var d = t[r];
                            this.set(d[0], d[1])
                        }
                    }
                    u.prototype.clear = d,
                    u.prototype.delete = m,
                    u.prototype.get = y,
                    u.prototype.has = v,
                    u.prototype.set = b,
                    t.exports = u
                }
                ,
                3818: (t,r,o)=>{
                    var d = o(852)(o(5639), "Promise");
                    t.exports = d
                }
                ,
                8525: (t,r,o)=>{
                    var d = o(852)(o(5639), "Set");
                    t.exports = d
                }
                ,
                8668: (t,r,o)=>{
                    var d = o(3369)
                      , m = o(619)
                      , y = o(2385);
                    function i(t) {
                        var r = -1
                          , o = null == t ? 0 : t.length;
                        for (this.__data__ = new d; ++r < o; )
                            this.add(t[r])
                    }
                    i.prototype.add = i.prototype.push = m,
                    i.prototype.has = y,
                    t.exports = i
                }
                ,
                6384: (t,r,o)=>{
                    var d = o(8407)
                      , m = o(7465)
                      , y = o(3779)
                      , v = o(7599)
                      , b = o(4758)
                      , E = o(4309);
                    function c(t) {
                        var r = this.__data__ = new d(t);
                        this.size = r.size
                    }
                    c.prototype.clear = m,
                    c.prototype.delete = y,
                    c.prototype.get = v,
                    c.prototype.has = b,
                    c.prototype.set = E,
                    t.exports = c
                }
                ,
                2705: (t,r,o)=>{
                    var d = o(5639).Symbol;
                    t.exports = d
                }
                ,
                1149: (t,r,o)=>{
                    var d = o(5639).Uint8Array;
                    t.exports = d
                }
                ,
                577: (t,r,o)=>{
                    var d = o(852)(o(5639), "WeakMap");
                    t.exports = d
                }
                ,
                4963: t=>{
                    t.exports = function(t, r) {
                        for (var o = -1, d = null == t ? 0 : t.length, m = 0, y = []; ++o < d; ) {
                            var v = t[o];
                            r(v, o, t) && (y[m++] = v)
                        }
                        return y
                    }
                }
                ,
                4636: (t,r,o)=>{
                    var d = o(2545)
                      , m = o(5694)
                      , y = o(1469)
                      , v = o(4144)
                      , b = o(5776)
                      , E = o(6719)
                      , S = Object.prototype.hasOwnProperty;
                    t.exports = function(t, r) {
                        var o = y(t)
                          , A = !o && m(t)
                          , C = !o && !A && v(t)
                          , P = !o && !A && !C && E(t)
                          , L = o || A || C || P
                          , N = L ? d(t.length, String) : []
                          , R = N.length;
                        for (var k in t)
                            !r && !S.call(t, k) || L && ("length" == k || C && ("offset" == k || "parent" == k) || P && ("buffer" == k || "byteLength" == k || "byteOffset" == k) || b(k, R)) || N.push(k);
                        return N
                    }
                }
                ,
                2488: t=>{
                    t.exports = function(t, r) {
                        for (var o = -1, d = r.length, m = t.length; ++o < d; )
                            t[m + o] = r[o];
                        return t
                    }
                }
                ,
                2908: t=>{
                    t.exports = function(t, r) {
                        for (var o = -1, d = null == t ? 0 : t.length; ++o < d; )
                            if (r(t[o], o, t))
                                return !0;
                        return !1
                    }
                }
                ,
                8470: (t,r,o)=>{
                    var d = o(7813);
                    t.exports = function(t, r) {
                        for (var o = t.length; o--; )
                            if (d(t[o][0], r))
                                return o;
                        return -1
                    }
                }
                ,
                8866: (t,r,o)=>{
                    var d = o(2488)
                      , m = o(1469);
                    t.exports = function(t, r, o) {
                        var y = r(t);
                        return m(t) ? y : d(y, o(t))
                    }
                }
                ,
                4239: (t,r,o)=>{
                    var d = o(2705)
                      , m = o(9607)
                      , y = o(2333)
                      , v = d ? d.toStringTag : void 0;
                    t.exports = function(t) {
                        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : v && v in Object(t) ? m(t) : y(t)
                    }
                }
                ,
                9454: (t,r,o)=>{
                    var d = o(4239)
                      , m = o(7005);
                    t.exports = function(t) {
                        return m(t) && "[object Arguments]" == d(t)
                    }
                }
                ,
                939: (t,r,o)=>{
                    var d = o(2492)
                      , m = o(7005);
                    t.exports = function e(t, r, o, y, v) {
                        return t === r || (null != t && null != r && (m(t) || m(r)) ? d(t, r, o, y, e, v) : t != t && r != r)
                    }
                }
                ,
                2492: (t,r,o)=>{
                    var d = o(6384)
                      , m = o(7114)
                      , y = o(8351)
                      , v = o(6096)
                      , b = o(4160)
                      , E = o(1469)
                      , S = o(4144)
                      , A = o(6719)
                      , C = "[object Arguments]"
                      , P = "[object Array]"
                      , L = "[object Object]"
                      , N = Object.prototype.hasOwnProperty;
                    t.exports = function(t, r, o, R, k, M) {
                        var I = E(t)
                          , F = E(r)
                          , H = I ? P : b(t)
                          , D = F ? P : b(r)
                          , z = (H = H == C ? L : H) == L
                          , B = (D = D == C ? L : D) == L
                          , U = H == D;
                        if (U && S(t)) {
                            if (!S(r))
                                return !1;
                            I = !0,
                            z = !1
                        }
                        if (U && !z)
                            return M || (M = new d),
                            I || A(t) ? m(t, r, o, R, k, M) : y(t, r, H, o, R, k, M);
                        if (!(1 & o)) {
                            var W = z && N.call(t, "__wrapped__")
                              , Y = B && N.call(r, "__wrapped__");
                            if (W || Y) {
                                var q = W ? t.value() : t
                                  , Q = Y ? r.value() : r;
                                return M || (M = new d),
                                k(q, Q, o, R, M)
                            }
                        }
                        return !!U && (M || (M = new d),
                        v(t, r, o, R, k, M))
                    }
                }
                ,
                8458: (t,r,o)=>{
                    var d = o(3560)
                      , m = o(5346)
                      , y = o(3218)
                      , v = o(346)
                      , b = /^\[object .+?Constructor\]$/
                      , E = Object.prototype
                      , S = Function.prototype.toString
                      , A = E.hasOwnProperty
                      , C = RegExp("^" + S.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                    t.exports = function(t) {
                        return !(!y(t) || m(t)) && (d(t) ? C : b).test(v(t))
                    }
                }
                ,
                8749: (t,r,o)=>{
                    var d = o(4239)
                      , m = o(1780)
                      , y = o(7005)
                      , v = {};
                    v["[object Float32Array]"] = v["[object Float64Array]"] = v["[object Int8Array]"] = v["[object Int16Array]"] = v["[object Int32Array]"] = v["[object Uint8Array]"] = v["[object Uint8ClampedArray]"] = v["[object Uint16Array]"] = v["[object Uint32Array]"] = !0,
                    v["[object Arguments]"] = v["[object Array]"] = v["[object ArrayBuffer]"] = v["[object Boolean]"] = v["[object DataView]"] = v["[object Date]"] = v["[object Error]"] = v["[object Function]"] = v["[object Map]"] = v["[object Number]"] = v["[object Object]"] = v["[object RegExp]"] = v["[object Set]"] = v["[object String]"] = v["[object WeakMap]"] = !1,
                    t.exports = function(t) {
                        return y(t) && m(t.length) && !!v[d(t)]
                    }
                }
                ,
                280: (t,r,o)=>{
                    var d = o(5726)
                      , m = o(6916)
                      , y = Object.prototype.hasOwnProperty;
                    t.exports = function(t) {
                        if (!d(t))
                            return m(t);
                        var r = [];
                        for (var o in Object(t))
                            y.call(t, o) && "constructor" != o && r.push(o);
                        return r
                    }
                }
                ,
                2545: t=>{
                    t.exports = function(t, r) {
                        for (var o = -1, d = Array(t); ++o < t; )
                            d[o] = r(o);
                        return d
                    }
                }
                ,
                1717: t=>{
                    t.exports = function(t) {
                        return function(r) {
                            return t(r)
                        }
                    }
                }
                ,
                4757: t=>{
                    t.exports = function(t, r) {
                        return t.has(r)
                    }
                }
                ,
                4429: (t,r,o)=>{
                    var d = o(5639)["__core-js_shared__"];
                    t.exports = d
                }
                ,
                7114: (t,r,o)=>{
                    var d = o(8668)
                      , m = o(2908)
                      , y = o(4757);
                    t.exports = function(t, r, o, v, b, E) {
                        var S = 1 & o
                          , A = t.length
                          , C = r.length;
                        if (A != C && !(S && C > A))
                            return !1;
                        var P = E.get(t)
                          , L = E.get(r);
                        if (P && L)
                            return P == r && L == t;
                        var N = -1
                          , R = !0
                          , k = 2 & o ? new d : void 0;
                        for (E.set(t, r),
                        E.set(r, t); ++N < A; ) {
                            var M = t[N]
                              , I = r[N];
                            if (v)
                                var F = S ? v(I, M, N, r, t, E) : v(M, I, N, t, r, E);
                            if (void 0 !== F) {
                                if (F)
                                    continue;
                                R = !1;
                                break
                            }
                            if (k) {
                                if (!m(r, function(t, r) {
                                    if (!y(k, r) && (M === t || b(M, t, o, v, E)))
                                        return k.push(r)
                                })) {
                                    R = !1;
                                    break
                                }
                            } else if (M !== I && !b(M, I, o, v, E)) {
                                R = !1;
                                break
                            }
                        }
                        return E.delete(t),
                        E.delete(r),
                        R
                    }
                }
                ,
                8351: (t,r,o)=>{
                    var d = o(2705)
                      , m = o(1149)
                      , y = o(7813)
                      , v = o(7114)
                      , b = o(8776)
                      , E = o(1814)
                      , S = d ? d.prototype : void 0
                      , A = S ? S.valueOf : void 0;
                    t.exports = function(t, r, o, d, S, C, P) {
                        switch (o) {
                        case "[object DataView]":
                            if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
                                break;
                            t = t.buffer,
                            r = r.buffer;
                        case "[object ArrayBuffer]":
                            return !(t.byteLength != r.byteLength || !C(new m(t), new m(r)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return y(+t, +r);
                        case "[object Error]":
                            return t.name == r.name && t.message == r.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return t == r + "";
                        case "[object Map]":
                            var L = b;
                        case "[object Set]":
                            var N = 1 & d;
                            if (L || (L = E),
                            t.size != r.size && !N)
                                break;
                            var R = P.get(t);
                            if (R)
                                return R == r;
                            d |= 2,
                            P.set(t, r);
                            var k = v(L(t), L(r), d, S, C, P);
                            return P.delete(t),
                            k;
                        case "[object Symbol]":
                            if (A)
                                return A.call(t) == A.call(r)
                        }
                        return !1
                    }
                }
                ,
                6096: (t,r,o)=>{
                    var d = o(8234)
                      , m = Object.prototype.hasOwnProperty;
                    t.exports = function(t, r, o, y, v, b) {
                        var E = 1 & o
                          , S = d(t)
                          , A = S.length;
                        if (A != d(r).length && !E)
                            return !1;
                        for (var C = A; C--; ) {
                            var P = S[C];
                            if (!(E ? P in r : m.call(r, P)))
                                return !1
                        }
                        var L = b.get(t)
                          , N = b.get(r);
                        if (L && N)
                            return L == r && N == t;
                        var R = !0;
                        b.set(t, r),
                        b.set(r, t);
                        for (var k = E; ++C < A; ) {
                            var M = t[P = S[C]]
                              , I = r[P];
                            if (y)
                                var F = E ? y(I, M, P, r, t, b) : y(M, I, P, t, r, b);
                            if (!(void 0 === F ? M === I || v(M, I, o, y, b) : F)) {
                                R = !1;
                                break
                            }
                            k || (k = "constructor" == P)
                        }
                        if (R && !k) {
                            var H = t.constructor
                              , D = r.constructor;
                            H == D || !("constructor"in t) || !("constructor"in r) || "function" == typeof H && H instanceof H && "function" == typeof D && D instanceof D || (R = !1)
                        }
                        return b.delete(t),
                        b.delete(r),
                        R
                    }
                }
                ,
                1957: (t,r,o)=>{
                    var d = "object" == typeof o.g && o.g && o.g.Object === Object && o.g;
                    t.exports = d
                }
                ,
                8234: (t,r,o)=>{
                    var d = o(8866)
                      , m = o(9551)
                      , y = o(3674);
                    t.exports = function(t) {
                        return d(t, y, m)
                    }
                }
                ,
                5050: (t,r,o)=>{
                    var d = o(7019);
                    t.exports = function(t, r) {
                        var o = t.__data__;
                        return d(r) ? o["string" == typeof r ? "string" : "hash"] : o.map
                    }
                }
                ,
                852: (t,r,o)=>{
                    var d = o(8458)
                      , m = o(7801);
                    t.exports = function(t, r) {
                        var o = m(t, r);
                        return d(o) ? o : void 0
                    }
                }
                ,
                9607: (t,r,o)=>{
                    var d = o(2705)
                      , m = Object.prototype
                      , y = m.hasOwnProperty
                      , v = m.toString
                      , b = d ? d.toStringTag : void 0;
                    t.exports = function(t) {
                        var r = y.call(t, b)
                          , o = t[b];
                        try {
                            t[b] = void 0;
                            var d = !0
                        } catch (t) {}
                        var m = v.call(t);
                        return d && (r ? t[b] = o : delete t[b]),
                        m
                    }
                }
                ,
                9551: (t,r,o)=>{
                    var d = o(4963)
                      , m = o(479)
                      , y = Object.prototype.propertyIsEnumerable
                      , v = Object.getOwnPropertySymbols
                      , b = v ? function(t) {
                        return null == t ? [] : d(v(t = Object(t)), function(r) {
                            return y.call(t, r)
                        })
                    }
                    : m;
                    t.exports = b
                }
                ,
                4160: (t,r,o)=>{
                    var d = o(8552)
                      , m = o(7071)
                      , y = o(3818)
                      , v = o(8525)
                      , b = o(577)
                      , E = o(4239)
                      , S = o(346)
                      , A = "[object Map]"
                      , C = "[object Promise]"
                      , P = "[object Set]"
                      , L = "[object WeakMap]"
                      , N = "[object DataView]"
                      , R = S(d)
                      , k = S(m)
                      , M = S(y)
                      , I = S(v)
                      , F = S(b)
                      , H = E;
                    (d && H(new d(new ArrayBuffer(1))) != N || m && H(new m) != A || y && H(y.resolve()) != C || v && H(new v) != P || b && H(new b) != L) && (H = function(t) {
                        var r = E(t)
                          , o = "[object Object]" == r ? t.constructor : void 0
                          , d = o ? S(o) : "";
                        if (d)
                            switch (d) {
                            case R:
                                return N;
                            case k:
                                return A;
                            case M:
                                return C;
                            case I:
                                return P;
                            case F:
                                return L
                            }
                        return r
                    }
                    ),
                    t.exports = H
                }
                ,
                7801: t=>{
                    t.exports = function(t, r) {
                        return null == t ? void 0 : t[r]
                    }
                }
                ,
                1789: (t,r,o)=>{
                    var d = o(4536);
                    t.exports = function() {
                        this.__data__ = d ? d(null) : {},
                        this.size = 0
                    }
                }
                ,
                401: t=>{
                    t.exports = function(t) {
                        var r = this.has(t) && delete this.__data__[t];
                        return this.size -= r ? 1 : 0,
                        r
                    }
                }
                ,
                7667: (t,r,o)=>{
                    var d = o(4536)
                      , m = Object.prototype.hasOwnProperty;
                    t.exports = function(t) {
                        var r = this.__data__;
                        if (d) {
                            var o = r[t];
                            return "__lodash_hash_undefined__" === o ? void 0 : o
                        }
                        return m.call(r, t) ? r[t] : void 0
                    }
                }
                ,
                1327: (t,r,o)=>{
                    var d = o(4536)
                      , m = Object.prototype.hasOwnProperty;
                    t.exports = function(t) {
                        var r = this.__data__;
                        return d ? void 0 !== r[t] : m.call(r, t)
                    }
                }
                ,
                1866: (t,r,o)=>{
                    var d = o(4536);
                    t.exports = function(t, r) {
                        var o = this.__data__;
                        return this.size += this.has(t) ? 0 : 1,
                        o[t] = d && void 0 === r ? "__lodash_hash_undefined__" : r,
                        this
                    }
                }
                ,
                5776: t=>{
                    var r = /^(?:0|[1-9]\d*)$/;
                    t.exports = function(t, o) {
                        var d = typeof t;
                        return !!(o = null == o ? 9007199254740991 : o) && ("number" == d || "symbol" != d && r.test(t)) && t > -1 && t % 1 == 0 && t < o
                    }
                }
                ,
                7019: t=>{
                    t.exports = function(t) {
                        var r = typeof t;
                        return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t
                    }
                }
                ,
                5346: (t,r,o)=>{
                    var d, m = o(4429), y = (d = /[^.]+$/.exec(m && m.keys && m.keys.IE_PROTO || "")) ? "Symbol(src)_1." + d : "";
                    t.exports = function(t) {
                        return !!y && y in t
                    }
                }
                ,
                5726: t=>{
                    var r = Object.prototype;
                    t.exports = function(t) {
                        var o = t && t.constructor;
                        return t === ("function" == typeof o && o.prototype || r)
                    }
                }
                ,
                7040: t=>{
                    t.exports = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                }
                ,
                4125: (t,r,o)=>{
                    var d = o(8470)
                      , m = Array.prototype.splice;
                    t.exports = function(t) {
                        var r = this.__data__
                          , o = d(r, t);
                        return !(o < 0 || (o == r.length - 1 ? r.pop() : m.call(r, o, 1),
                        --this.size,
                        0))
                    }
                }
                ,
                2117: (t,r,o)=>{
                    var d = o(8470);
                    t.exports = function(t) {
                        var r = this.__data__
                          , o = d(r, t);
                        return o < 0 ? void 0 : r[o][1]
                    }
                }
                ,
                7518: (t,r,o)=>{
                    var d = o(8470);
                    t.exports = function(t) {
                        return d(this.__data__, t) > -1
                    }
                }
                ,
                4705: (t,r,o)=>{
                    var d = o(8470);
                    t.exports = function(t, r) {
                        var o = this.__data__
                          , m = d(o, t);
                        return m < 0 ? (++this.size,
                        o.push([t, r])) : o[m][1] = r,
                        this
                    }
                }
                ,
                4785: (t,r,o)=>{
                    var d = o(1989)
                      , m = o(8407)
                      , y = o(7071);
                    t.exports = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new d,
                            map: new (y || m),
                            string: new d
                        }
                    }
                }
                ,
                1285: (t,r,o)=>{
                    var d = o(5050);
                    t.exports = function(t) {
                        var r = d(this, t).delete(t);
                        return this.size -= r ? 1 : 0,
                        r
                    }
                }
                ,
                6e3: (t,r,o)=>{
                    var d = o(5050);
                    t.exports = function(t) {
                        return d(this, t).get(t)
                    }
                }
                ,
                9916: (t,r,o)=>{
                    var d = o(5050);
                    t.exports = function(t) {
                        return d(this, t).has(t)
                    }
                }
                ,
                5265: (t,r,o)=>{
                    var d = o(5050);
                    t.exports = function(t, r) {
                        var o = d(this, t)
                          , m = o.size;
                        return o.set(t, r),
                        this.size += o.size == m ? 0 : 1,
                        this
                    }
                }
                ,
                8776: t=>{
                    t.exports = function(t) {
                        var r = -1
                          , o = Array(t.size);
                        return t.forEach(function(t, d) {
                            o[++r] = [d, t]
                        }),
                        o
                    }
                }
                ,
                4536: (t,r,o)=>{
                    var d = o(852)(Object, "create");
                    t.exports = d
                }
                ,
                6916: (t,r,o)=>{
                    var d = o(5569)(Object.keys, Object);
                    t.exports = d
                }
                ,
                1167: (t,r,o)=>{
                    t = o.nmd(t);
                    var d = o(1957)
                      , m = r && !r.nodeType && r
                      , y = m && t && !t.nodeType && t
                      , v = y && y.exports === m && d.process
                      , b = function() {
                        try {
                            return y && y.require && y.require("util").types || v && v.binding && v.binding("util")
                        } catch (t) {}
                    }();
                    t.exports = b
                }
                ,
                2333: t=>{
                    var r = Object.prototype.toString;
                    t.exports = function(t) {
                        return r.call(t)
                    }
                }
                ,
                5569: t=>{
                    t.exports = function(t, r) {
                        return function(o) {
                            return t(r(o))
                        }
                    }
                }
                ,
                5639: (t,r,o)=>{
                    var d = o(1957)
                      , m = "object" == typeof self && self && self.Object === Object && self
                      , y = d || m || Function("return this")();
                    t.exports = y
                }
                ,
                619: t=>{
                    t.exports = function(t) {
                        return this.__data__.set(t, "__lodash_hash_undefined__"),
                        this
                    }
                }
                ,
                2385: t=>{
                    t.exports = function(t) {
                        return this.__data__.has(t)
                    }
                }
                ,
                1814: t=>{
                    t.exports = function(t) {
                        var r = -1
                          , o = Array(t.size);
                        return t.forEach(function(t) {
                            o[++r] = t
                        }),
                        o
                    }
                }
                ,
                7465: (t,r,o)=>{
                    var d = o(8407);
                    t.exports = function() {
                        this.__data__ = new d,
                        this.size = 0
                    }
                }
                ,
                3779: t=>{
                    t.exports = function(t) {
                        var r = this.__data__
                          , o = r.delete(t);
                        return this.size = r.size,
                        o
                    }
                }
                ,
                7599: t=>{
                    t.exports = function(t) {
                        return this.__data__.get(t)
                    }
                }
                ,
                4758: t=>{
                    t.exports = function(t) {
                        return this.__data__.has(t)
                    }
                }
                ,
                4309: (t,r,o)=>{
                    var d = o(8407)
                      , m = o(7071)
                      , y = o(3369);
                    t.exports = function(t, r) {
                        var o = this.__data__;
                        if (o instanceof d) {
                            var v = o.__data__;
                            if (!m || v.length < 199)
                                return v.push([t, r]),
                                this.size = ++o.size,
                                this;
                            o = this.__data__ = new y(v)
                        }
                        return o.set(t, r),
                        this.size = o.size,
                        this
                    }
                }
                ,
                346: t=>{
                    var r = Function.prototype.toString;
                    t.exports = function(t) {
                        if (null != t) {
                            try {
                                return r.call(t)
                            } catch (t) {}
                            try {
                                return t + ""
                            } catch (t) {}
                        }
                        return ""
                    }
                }
                ,
                7813: t=>{
                    t.exports = function(t, r) {
                        return t === r || t != t && r != r
                    }
                }
                ,
                5694: (t,r,o)=>{
                    var d = o(9454)
                      , m = o(7005)
                      , y = Object.prototype
                      , v = y.hasOwnProperty
                      , b = y.propertyIsEnumerable
                      , E = d(function() {
                        return arguments
                    }()) ? d : function(t) {
                        return m(t) && v.call(t, "callee") && !b.call(t, "callee")
                    }
                    ;
                    t.exports = E
                }
                ,
                1469: t=>{
                    var r = Array.isArray;
                    t.exports = r
                }
                ,
                8612: (t,r,o)=>{
                    var d = o(3560)
                      , m = o(1780);
                    t.exports = function(t) {
                        return null != t && m(t.length) && !d(t)
                    }
                }
                ,
                4144: (t,r,o)=>{
                    t = o.nmd(t);
                    var d = o(5639)
                      , m = o(5062)
                      , y = r && !r.nodeType && r
                      , v = y && t && !t.nodeType && t
                      , b = v && v.exports === y ? d.Buffer : void 0
                      , E = (b ? b.isBuffer : void 0) || m;
                    t.exports = E
                }
                ,
                8446: (t,r,o)=>{
                    var d = o(939);
                    t.exports = function(t, r) {
                        return d(t, r)
                    }
                }
                ,
                3560: (t,r,o)=>{
                    var d = o(4239)
                      , m = o(3218);
                    t.exports = function(t) {
                        if (!m(t))
                            return !1;
                        var r = d(t);
                        return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
                    }
                }
                ,
                1780: t=>{
                    t.exports = function(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                    }
                }
                ,
                3218: t=>{
                    t.exports = function(t) {
                        var r = typeof t;
                        return null != t && ("object" == r || "function" == r)
                    }
                }
                ,
                7005: t=>{
                    t.exports = function(t) {
                        return null != t && "object" == typeof t
                    }
                }
                ,
                6719: (t,r,o)=>{
                    var d = o(8749)
                      , m = o(1717)
                      , y = o(1167)
                      , v = y && y.isTypedArray
                      , b = v ? m(v) : d;
                    t.exports = b
                }
                ,
                3674: (t,r,o)=>{
                    var d = o(4636)
                      , m = o(280)
                      , y = o(8612);
                    t.exports = function(t) {
                        return y(t) ? d(t) : m(t)
                    }
                }
                ,
                479: t=>{
                    t.exports = function() {
                        return []
                    }
                }
                ,
                5062: t=>{
                    t.exports = function() {
                        return !1
                    }
                }
                ,
                75: function(t) {
                    (function() {
                        var r, o, d, y;
                        "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() {
                            return performance.now()
                        }
                        : null != m && m.hrtime ? (t.exports = function() {
                            return (r() - y) / 1e6
                        }
                        ,
                        o = m.hrtime,
                        y = (r = function() {
                            var t;
                            return 1e9 * (t = o())[0] + t[1]
                        }
                        )() - 1e9 * m.uptime()) : Date.now ? (t.exports = function() {
                            return Date.now() - d
                        }
                        ,
                        d = Date.now()) : (t.exports = function() {
                            return (new Date).getTime() - d
                        }
                        ,
                        d = (new Date).getTime())
                    }
                    ).call(this)
                },
                4087: (t,r,o)=>{
                    for (var d = o(75), m = "undefined" == typeof window ? o.g : window, y = ["moz", "webkit"], v = "AnimationFrame", b = m["request" + v], E = m["cancel" + v] || m["cancelRequest" + v], S = 0; !b && S < y.length; S++)
                        b = m[y[S] + "Request" + v],
                        E = m[y[S] + "Cancel" + v] || m[y[S] + "CancelRequest" + v];
                    if (!b || !E) {
                        var A = 0
                          , C = 0
                          , P = [];
                        b = function(t) {
                            if (0 === P.length) {
                                var r = d()
                                  , o = Math.max(0, 16.666666666666668 - (r - A));
                                A = o + r,
                                setTimeout(function() {
                                    var t = P.slice(0);
                                    P.length = 0;
                                    for (var r = 0; r < t.length; r++)
                                        if (!t[r].cancelled)
                                            try {
                                                t[r].callback(A)
                                            } catch (t) {
                                                setTimeout(function() {
                                                    throw t
                                                }, 0)
                                            }
                                }, Math.round(o))
                            }
                            return P.push({
                                handle: ++C,
                                callback: t,
                                cancelled: !1
                            }),
                            C
                        }
                        ,
                        E = function(t) {
                            for (var r = 0; r < P.length; r++)
                                P[r].handle === t && (P[r].cancelled = !0)
                        }
                    }
                    t.exports = function(t) {
                        return b.call(m, t)
                    }
                    ,
                    t.exports.cancel = function() {
                        E.apply(m, arguments)
                    }
                    ,
                    t.exports.polyfill = function(t) {
                        t || (t = m),
                        t.requestAnimationFrame = b,
                        t.cancelAnimationFrame = E
                    }
                }
                ,
                8156: t=>{
                    "use strict";
                    t.exports = d
                }
            }
              , r = {};
            function n(o) {
                var d = r[o];
                if (void 0 !== d)
                    return d.exports;
                var m = r[o] = {
                    id: o,
                    loaded: !1,
                    exports: {}
                };
                return t[o].call(m.exports, m, m.exports, n),
                m.loaded = !0,
                m.exports
            }
            n.n = t=>{
                var r = t && t.__esModule ? ()=>t.default : ()=>t;
                return n.d(r, {
                    a: r
                }),
                r
            }
            ,
            n.d = (t,r)=>{
                for (var o in r)
                    n.o(r, o) && !n.o(t, o) && Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: r[o]
                    })
            }
            ,
            n.g = function() {
                if ("object" == typeof globalThis)
                    return globalThis;
                try {
                    return this || Function("return this")()
                } catch (t) {
                    if ("object" == typeof window)
                        return window
                }
            }(),
            n.o = (t,r)=>Object.prototype.hasOwnProperty.call(t, r),
            n.nmd = t=>(t.paths = [],
            t.children || (t.children = []),
            t);
            var o = {};
            return (()=>{
                "use strict";
                n.d(o, {
                    default: ()=>b
                });
                var t = n(8156)
                  , r = n.n(t)
                  , d = n(7403)
                  , m = n(8446)
                  , y = n.n(m);
                function s(t) {
                    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    )(t)
                }
                function c(t, r) {
                    return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
                        return t.__proto__ = r,
                        t
                    }
                    )(t, r)
                }
                function p(t) {
                    if (void 0 === t)
                        throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }
                function l(t) {
                    return (l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }
                    )(t)
                }
                function f(t) {
                    var r = function(t, r) {
                        if ("object" !== s(t) || null === t)
                            return t;
                        var o = t[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var d = o.call(t, "string");
                            if ("object" !== s(d))
                                return d;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" === s(r) ? r : String(r)
                }
                var v = function(t) {
                    !function(t, r) {
                        if ("function" != typeof r && null !== r)
                            throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(r && r.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        Object.defineProperty(t, "prototype", {
                            writable: !1
                        }),
                        r && c(t, r)
                    }(h, t);
                    var o, m, v = (m = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    function() {
                        var t, r = l(h);
                        if (m) {
                            var o = l(this).constructor;
                            t = Reflect.construct(r, arguments, o)
                        } else
                            t = r.apply(this, arguments);
                        return function(t, r) {
                            if (r && ("object" === s(r) || "function" == typeof r))
                                return r;
                            if (void 0 !== r)
                                throw TypeError("Derived constructors may only return object or undefined");
                            return p(t)
                        }(this, t)
                    }
                    );
                    function h() {
                        var t, r, o, d;
                        !function(t, r) {
                            if (!(t instanceof r))
                                throw TypeError("Cannot call a class as a function")
                        }(this, h);
                        for (var m = arguments.length, y = Array(m), b = 0; b < m; b++)
                            y[b] = arguments[b];
                        return r = p(t = v.call.apply(v, [this].concat(y))),
                        d = {
                            instance: null
                        },
                        (o = f(o = "state"))in r ? Object.defineProperty(r, o, {
                            value: d,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = d,
                        t
                    }
                    return o = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this
                              , r = new d.default(this.typewriter,this.props.options);
                            this.setState({
                                instance: r
                            }, function() {
                                var o = t.props.onInit;
                                o && o(r)
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t) {
                            y()(this.props.options, t.options) || this.setState({
                                instance: new d.default(this.typewriter,this.props.options)
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.state.instance && this.state.instance.stop()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this
                              , o = this.props.component;
                            return r().createElement(o, {
                                ref: function(r) {
                                    return t.typewriter = r
                                },
                                className: "Typewriter",
                                "data-testid": "typewriter-wrapper"
                            })
                        }
                    }],
                    function(t, r) {
                        for (var o = 0; o < r.length; o++) {
                            var d = r[o];
                            d.enumerable = d.enumerable || !1,
                            d.configurable = !0,
                            "value"in d && (d.writable = !0),
                            Object.defineProperty(t, f(d.key), d)
                        }
                    }(h.prototype, o),
                    Object.defineProperty(h, "prototype", {
                        writable: !1
                    }),
                    h
                }(t.Component);
                v.defaultProps = {
                    component: "div"
                };
                let b = v
            }
            )(),
            o.default
        }
        )())
    },
    246: function(t, r, o) {
        "use strict";
        o.d(r, {
            e: function() {
                return X
            }
        });
        var d = o(7294)
          , m = o(5698);
        let y = {}
          , v = 0
          , b = !1
          , E = null
          , S = null;
        var A = o(768)
          , C = o(2290)
          , P = o(8628)
          , L = o(324)
          , N = o(2134)
          , R = o(3649)
          , k = o(9472)
          , M = o(7893)
          , I = (0,
        k.tv)({
            slots: {
                base: ["z-10", "relative", "inline-flex", "flex-col", "items-center", "justify-center", "box-border", "subpixel-antialiased", "px-4", "py-1", "outline-none", "box-border", ...M.Dh],
                trigger: ["z-10"],
                backdrop: ["hidden"],
                arrow: ["z-[-1]", "absolute", "rotate-45", "w-2.5", "h-2.5", "rounded-sm", "data-[placement=top]:-bottom-1", "data-[placement=top]:-translate-x-1/2", "data-[placement=top-start]:-bottom-1", "data-[placement=top-start]:-translate-x-8", "data-[placement=top-end]:-bottom-1", "data-[placement=top-end]:translate-x-6", "data-[placement=bottom]:-top-1", "data-[placement=bottom]:-translate-x-1/2", "data-[placement=bottom-start]:-top-1", "data-[placement=bottom-start]:-translate-x-8", "data-[placement=bottom-end]:-top-1", "data-[placement=bottom-end]:translate-x-6", "data-[placement=left]:-right-1", "data-[placement=left]:-translate-y-1/2", "data-[placement=left-start]:-right-1", "data-[placement=left-start]:-translate-y-3", "data-[placement=left-end]:-right-1", "data-[placement=left-end]:translate-y-0.5", "data-[placement=right]:-left-1", "data-[placement=right]:-translate-y-1/2", "data-[placement=right-start]:-left-1", "data-[placement=right-start]:-translate-y-3", "data-[placement=right-end]:-left-1", "data-[placement=right-end]:translate-y-0.5"]
            },
            variants: {
                size: {
                    sm: {
                        base: "text-tiny"
                    },
                    md: {
                        base: "text-small"
                    },
                    lg: {
                        base: "text-medium"
                    }
                },
                color: {
                    default: {
                        base: "bg-content1",
                        arrow: "shadow-small bg-content1"
                    },
                    foreground: {
                        base: R.J.solid.foreground,
                        arrow: "bg-foreground"
                    },
                    primary: {
                        base: R.J.solid.primary,
                        arrow: "bg-primary"
                    },
                    secondary: {
                        base: R.J.solid.secondary,
                        arrow: "bg-secondary"
                    },
                    success: {
                        base: R.J.solid.success,
                        arrow: "bg-success"
                    },
                    warning: {
                        base: R.J.solid.warning,
                        arrow: "bg-warning"
                    },
                    danger: {
                        base: R.J.solid.danger,
                        arrow: "bg-danger"
                    }
                },
                radius: {
                    none: {
                        base: "rounded-none"
                    },
                    sm: {
                        base: "rounded-small"
                    },
                    md: {
                        base: "rounded-medium"
                    },
                    lg: {
                        base: "rounded-large"
                    },
                    full: {
                        base: "rounded-full"
                    }
                },
                shadow: {
                    sm: {
                        base: "shadow-small"
                    },
                    md: {
                        base: "shadow-medium"
                    },
                    lg: {
                        base: "shadow-large"
                    }
                },
                backdrop: {
                    transparent: {},
                    opaque: {
                        backdrop: "bg-overlay/50 backdrop-opacity-disabled"
                    },
                    blur: {
                        backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"
                    }
                },
                triggerScaleOnOpen: {
                    true: {
                        trigger: ["aria-expanded:scale-[0.97]", "aria-expanded:opacity-70", "subpixel-antialiased"]
                    },
                    false: {}
                },
                disableAnimation: {
                    true: {
                        base: "animate-none"
                    }
                }
            },
            defaultVariants: {
                color: "default",
                radius: "lg",
                size: "md",
                shadow: "md",
                backdrop: "transparent",
                disableAnimation: !1,
                triggerScaleOnOpen: !0
            },
            compoundVariants: [{
                backdrop: ["opaque", "blur"],
                class: {
                    backdrop: "block w-full h-full fixed inset-0 -z-30"
                }
            }]
        })
          , F = o(9869)
          , H = o(262)
          , D = o(1744)
          , getTransformOrigins = t=>{
            let r = {
                top: {
                    originY: 1
                },
                bottom: {
                    originY: 0
                },
                left: {
                    originX: 1
                },
                right: {
                    originX: 0
                },
                "top-start": {
                    originX: 0,
                    originY: 1
                },
                "top-end": {
                    originX: 1,
                    originY: 1
                },
                "bottom-start": {
                    originX: 0,
                    originY: 0
                },
                "bottom-end": {
                    originX: 1,
                    originY: 0
                },
                "right-start": {
                    originX: 0,
                    originY: 0
                },
                "right-end": {
                    originX: 0,
                    originY: 1
                },
                "left-start": {
                    originX: 1,
                    originY: 0
                },
                "left-end": {
                    originX: 1,
                    originY: 1
                }
            };
            return (null == r ? void 0 : r[t]) || {}
        }
          , toReactAriaPlacement = t=>({
            top: "top",
            bottom: "bottom",
            left: "left",
            right: "right",
            "top-start": "top start",
            "top-end": "top end",
            "bottom-start": "bottom start",
            "bottom-end": "bottom end",
            "left-start": "left top",
            "left-end": "left bottom",
            "right-start": "right top",
            "right-end": "right bottom"
        })[t]
          , getArrowPlacement = (t,r)=>{
            if (r.includes("-")) {
                let[,o] = r.split("-");
                return `${t}-${o}`
            }
            return t
        }
          , z = o(2023)
          , B = o(1526)
          , U = o(6590)
          , W = o(4155)
          , Y = {}
          , q = o(5893)
          , Q = (0,
        N.Gp)((t,r)=>{
            let o;
            let {Component: R, children: k, content: M, isOpen: Q, portalContainer: X, placement: V, disableAnimation: $, motionProps: G, showArrow: K, getTriggerProps: J, getTooltipProps: Z, getArrowProps: ee} = function(t) {
                let[r,o] = (0,
                N.oe)(t, I.variantKeys)
                  , {ref: R, as: k, isOpen: M, content: z, children: B, defaultOpen: U, onOpenChange: W, isDisabled: Y, trigger: q, shouldFlip: Q=!0, containerPadding: X=12, placement: V="top", delay: $=0, closeDelay: G=500, showArrow: K=!1, offset: J=7, crossOffset: Z=0, isDismissable: ee, shouldCloseOnBlur: et=!0, portalContainer: er, isKeyboardDismissDisabled: en=!1, shouldCloseOnInteractOutside: eo, className: ea, onClose: ei, motionProps: es, classNames: eu, ...ec} = r
                  , el = function(t={}) {
                    let {delay: r=1500, closeDelay: o=500} = t
                      , {isOpen: A, open: C, close: P} = (0,
                    m.d)(t)
                      , L = (0,
                    d.useMemo)(()=>`${++v}`, [])
                      , N = (0,
                    d.useRef)()
                      , ensureTooltipEntry = ()=>{
                        y[L] = hideTooltip
                    }
                      , closeOpenTooltips = ()=>{
                        for (let t in y)
                            t !== L && (y[t](!0),
                            delete y[t])
                    }
                      , showTooltip = ()=>{
                        clearTimeout(N.current),
                        N.current = null,
                        closeOpenTooltips(),
                        ensureTooltipEntry(),
                        b = !0,
                        C(),
                        E && (clearTimeout(E),
                        E = null),
                        S && (clearTimeout(S),
                        S = null)
                    }
                      , hideTooltip = t=>{
                        t || o <= 0 ? (clearTimeout(N.current),
                        N.current = null,
                        P()) : N.current || (N.current = setTimeout(()=>{
                            N.current = null,
                            P()
                        }
                        , o)),
                        E && (clearTimeout(E),
                        E = null),
                        b && (S && clearTimeout(S),
                        S = setTimeout(()=>{
                            delete y[L],
                            S = null,
                            b = !1
                        }
                        , Math.max(500, o)))
                    }
                      , warmupTooltip = ()=>{
                        closeOpenTooltips(),
                        ensureTooltipEntry(),
                        A || E || b ? A || showTooltip() : E = setTimeout(()=>{
                            E = null,
                            b = !0,
                            showTooltip()
                        }
                        , r)
                    }
                    ;
                    return (0,
                    d.useEffect)(()=>()=>{
                        clearTimeout(N.current),
                        y[L] && delete y[L]
                    }
                    , [L]),
                    {
                        isOpen: A,
                        open: t=>{
                            t || !(r > 0) || N.current ? showTooltip() : warmupTooltip()
                        }
                        ,
                        close: hideTooltip
                    }
                }({
                    delay: $,
                    closeDelay: G,
                    isDisabled: Y,
                    defaultOpen: U,
                    isOpen: M,
                    onOpenChange: t=>{
                        null == W || W(t),
                        t || null == ei || ei()
                    }
                })
                  , ep = (0,
                d.useRef)(null)
                  , ef = (0,
                d.useRef)(null)
                  , ed = (0,
                d.useId)()
                  , eh = el.isOpen && !Y;
                (0,
                d.useImperativeHandle)(R, ()=>(0,
                D.fg)(ef));
                let {triggerProps: em, tooltipProps: ey} = function(t, r, o) {
                    let {isDisabled: m, trigger: y} = t
                      , v = (0,
                    A.Me)()
                      , b = (0,
                    d.useRef)(!1)
                      , E = (0,
                    d.useRef)(!1)
                      , handleShow = ()=>{
                        (b.current || E.current) && r.open(E.current)
                    }
                      , handleHide = t=>{
                        b.current || E.current || r.close(t)
                    }
                    ;
                    (0,
                    d.useEffect)(()=>{
                        let onKeyDown = t=>{
                            o && o.current && "Escape" === t.key && (t.stopPropagation(),
                            r.close(!0))
                        }
                        ;
                        if (r.isOpen)
                            return document.addEventListener("keydown", onKeyDown, !0),
                            ()=>{
                                document.removeEventListener("keydown", onKeyDown, !0)
                            }
                    }
                    , [o, r]);
                    let {hoverProps: S} = (0,
                    C.XI)({
                        isDisabled: m,
                        onHoverStart: ()=>{
                            "focus" !== y && ("pointer" === (0,
                            C.Jz)() ? b.current = !0 : b.current = !1,
                            handleShow())
                        }
                        ,
                        onHoverEnd: ()=>{
                            "focus" !== y && (E.current = !1,
                            b.current = !1,
                            handleHide())
                        }
                    })
                      , {pressProps: L} = (0,
                    C.r7)({
                        onPressStart: ()=>{
                            E.current = !1,
                            b.current = !1,
                            handleHide(!0)
                        }
                    })
                      , {focusableProps: N} = (0,
                    P.kc)({
                        isDisabled: m,
                        onFocus: ()=>{
                            (0,
                            C.E)() && (E.current = !0,
                            handleShow())
                        }
                        ,
                        onBlur: ()=>{
                            E.current = !1,
                            b.current = !1,
                            handleHide(!0)
                        }
                    }, o);
                    return {
                        triggerProps: {
                            "aria-describedby": r.isOpen ? v : void 0,
                            ...(0,
                            A.dG)(N, S, L)
                        },
                        tooltipProps: {
                            id: v
                        }
                    }
                }({
                    isDisabled: Y,
                    trigger: q
                }, el, ep)
                  , {tooltipProps: ev} = function(t, r) {
                    let o = (0,
                    A.zL)(t, {
                        labelable: !0
                    })
                      , {hoverProps: d} = (0,
                    C.XI)({
                        onHoverStart: ()=>null == r ? void 0 : r.open(!0),
                        onHoverEnd: ()=>null == r ? void 0 : r.close()
                    });
                    return {
                        tooltipProps: (0,
                        A.dG)(o, d, {
                            role: "tooltip"
                        })
                    }
                }({
                    isOpen: eh,
                    ...(0,
                    A.dG)(r, ey)
                }, el)
                  , {overlayProps: eb, arrowProps: eg, placement: eT} = (0,
                L.tN)({
                    isOpen: eh,
                    targetRef: ep,
                    placement: toReactAriaPlacement(V),
                    overlayRef: ef,
                    offset: K ? J + 3 : J,
                    crossOffset: Z,
                    shouldFlip: Q,
                    containerPadding: X
                })
                  , {overlayProps: ew} = (0,
                L.Ir)({
                    isOpen: eh,
                    onClose: el.close,
                    isDismissable: ee,
                    shouldCloseOnBlur: et,
                    isKeyboardDismissDisabled: en,
                    shouldCloseOnInteractOutside: eo
                }, ef)
                  , eO = (0,
                d.useMemo)(()=>{
                    var r, d, m;
                    return I({
                        ...o,
                        radius: null != (r = null == t ? void 0 : t.radius) ? r : "md",
                        size: null != (d = null == t ? void 0 : t.size) ? d : "md",
                        shadow: null != (m = null == t ? void 0 : t.shadow) ? m : "sm"
                    })
                }
                , [...Object.values(o), null == t ? void 0 : t.radius, null == t ? void 0 : t.size, null == t ? void 0 : t.shadow])
                  , e_ = (0,
                F.W)(null == eu ? void 0 : eu.base, ea)
                  , eE = (0,
                d.useCallback)((t={},r=null)=>({
                    ...(0,
                    A.dG)(em, t),
                    ref: function(...t) {
                        return r=>{
                            t.forEach(t=>(function(t, r) {
                                if (null != t) {
                                    if ((0,
                                    H.mf)(t)) {
                                        t(r);
                                        return
                                    }
                                    try {
                                        t.current = r
                                    } catch (o) {
                                        throw Error(`Cannot assign value '${r}' to ref '${t}'`)
                                    }
                                }
                            }
                            )(t, r))
                        }
                    }(r, ep),
                    "aria-describedby": eh ? ed : void 0
                }), [em, eh, ed, el])
                  , eS = (0,
                d.useCallback)(()=>({
                    ref: ef,
                    "data-open": (0,
                    H.PB)(eh),
                    "data-disabled": (0,
                    H.PB)(Y),
                    "data-placement": getArrowPlacement(eT, V),
                    className: eO.base({
                        class: e_
                    }),
                    ...(0,
                    A.dG)(ev, ew, ec),
                    style: (0,
                    A.dG)(eb.style, ec.style, r.style),
                    id: ed
                }), [e_, ew, ec, ef, eb, eO, ed, ev])
                  , ex = (0,
                d.useCallback)(()=>({
                    className: eO.arrow({
                        class: null == eu ? void 0 : eu.arrow
                    }),
                    "data-placement": getArrowPlacement(eT, V),
                    ...eg
                }), [eg, eT, V, eO, eu]);
                return {
                    Component: k || "div",
                    content: z,
                    children: B,
                    isOpen: eh,
                    triggerRef: ep,
                    showArrow: K,
                    portalContainer: er,
                    placement: V,
                    disableAnimation: null == t ? void 0 : t.disableAnimation,
                    isDisabled: Y,
                    motionProps: es,
                    getTriggerProps: eE,
                    getTooltipProps: eS,
                    getArrowProps: ex
                }
            }({
                ...t,
                ref: r
            })
              , {className: et, ...er} = Z();
            try {
                let t = d.Children.only(k);
                o = (0,
                d.cloneElement)(t, J(t.props, t.ref))
            } catch (t) {
                o = (0,
                q.jsx)("span", {}),
                function(t, r, ...o) {
                    var d;
                    let m = r ? ` [${r}]` : " "
                      , y = `[Next UI]${m}: ${t}`;
                    "undefined" == typeof console || Y[y] || (Y[y] = !0,
                    (null == (d = null == W ? void 0 : W.env) ? void 0 : d.NODE_ENV) === "production") || console.warn(y, o)
                }("Tooltip must have only one child node. Please, check your code.")
            }
            let en = (0,
            d.useMemo)(()=>K ? (0,
            q.jsx)("span", {
                ...ee()
            }) : null, [K, ee])
              , eo = (0,
            d.useMemo)(()=>(0,
            q.jsx)("div", {
                ...er,
                children: (0,
                q.jsxs)(z.E.div, {
                    animate: "enter",
                    exit: "exit",
                    initial: "exit",
                    style: {
                        ...getTransformOrigins(V)
                    },
                    variants: U.y7.scaleSpring,
                    ...G,
                    children: [(0,
                    q.jsx)(R, {
                        className: et,
                        children: M
                    }), en]
                })
            }), [er, et, V, G, R, M, en]);
            return (0,
            q.jsxs)(q.Fragment, {
                children: [o, $ && Q ? (0,
                q.jsx)(L.Xj, {
                    portalContainer: X,
                    children: (0,
                    q.jsxs)("div", {
                        ...er,
                        children: [(0,
                        q.jsx)(R, {
                            className: et,
                            children: M
                        }), en]
                    })
                }) : (0,
                q.jsx)(B.M, {
                    children: Q ? (0,
                    q.jsx)(L.Xj, {
                        portalContainer: X,
                        children: eo
                    }) : null
                })]
            })
        }
        );
        Q.displayName = "NextUI.Tooltip";
        var X = Q
    }
}]);
