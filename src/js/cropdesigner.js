! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.cropDesigner = e() : t.cropDesigner = e()
}(this, (function() {
    return function(t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var r = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) n.d(i, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return i
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 14)
    }([function(t, e) {
        t.exports = function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
    }, function(t, e) {
        function n(e) {
            return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, n(e)
        }
        t.exports = n
    }, function(t, e) {
        t.exports = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(t, e) {
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        t.exports = function(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t
        }
    }, function(t, e, n) {
        var i = n(12);
        t.exports = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && i(t, e)
        }
    }, function(t, e, n) {
        var i = n(13),
            r = n(0);
        t.exports = function(t, e) {
            return !e || "object" !== i(e) && "function" != typeof e ? r(t) : e
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i
        }
    }, function(t, e, n) {
        var i = n(8),
            r = n(9),
            o = n(10),
            a = n(11);
        t.exports = function(t) {
            return i(t) || r(t) || o(t) || a()
        }
    }, function(t, e, n) {
        var i = n(6);
        t.exports = function(t) {
            if (Array.isArray(t)) return i(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }
    }, function(t, e, n) {
        var i = n(6);
        t.exports = function(t, e) {
            if (t) {
                if ("string" == typeof t) return i(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
            }
        }
    }, function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }, function(t, e) {
        function n(e, i) {
            return t.exports = n = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            }, n(e, i)
        }
        t.exports = n
    }, function(t, e) {
        function n(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) {
                return typeof t
            } : t.exports = n = function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, n(e)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(7),
            r = n.n(i),
            o = n(2),
            a = n.n(o),
            s = n(3),
            c = n.n(s),
            u = n(4),
            l = n.n(u),
            h = n(5),
            d = n.n(h),
            f = n(1),
            p = n.n(f),
            v = function() {
                function t() {
                    a()(this, t), this._listeners = {}
                }
                return c()(t, [{
                    key: "addEventListener",
                    value: function(t, e) {
                        var n = this._listeners;
                        void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
                    }
                }, {
                    key: "removeEventListener",
                    value: function(t, e) {
                        var n = this._listeners[t];
                        if (void 0 !== n) {
                            var i = n.indexOf(e); - 1 !== i && n.splice(i, 1)
                        }
                    }
                }, {
                    key: "removeAllEventListeners",
                    value: function(t) {
                        t ? Array.isArray(this._listeners[t]) && (this._listeners[t].length = 0) : this._listeners = {}
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(t) {
                        var e = this._listeners[t.type];
                        if (void 0 !== e) {
                            t.target = this;
                            for (var n = e.slice(0), i = 0, r = n.length; i < r; i++) n[i].call(this, t)
                        }
                    }
                }]), t
            }(),
            _ = function(t) {
                return "number" == typeof t && isFinite(t)
            };

        function g(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = p()(t);
                if (e) {
                    var r = p()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return d()(this, n)
            }
        }
        var y = function(t) {
                l()(n, t);
                var e = g(n);

                function n(t) {
                    var i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return a()(this, n), (i = e.call(this))._protList = [], i._maxEntry = _(r.maxEntry) ? r.maxEntry : 1 / 0, i._disableTag = r.disableTag || !1, i.load(t), i
                }
                return c()(n, [{
                    key: "addProtData",
                    value: function() {
                        var t;
                        if (!(this._protList.length >= this._maxEntry)) {
                            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            this._disableTag && n.forEach((function(t) {
                                return t.tag = null
                            })), (t = this._protList).push.apply(t, n), this.dispatchEvent({
                                type: "change"
                            })
                        }
                    }
                }, {
                    key: "removeProtDataById",
                    value: function(t) {
                        var e = this._protList.findIndex((function(e) {
                            return e.id === t
                        })); - 1 != e && (this._protList.splice(e, 1), this.dispatchEvent({
                            type: "change"
                        }))
                    }
                }, {
                    key: "changeProtData",
                    value: function() {
                        for (var t = this, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        n.forEach((function(e) {
                            var n = t._protList.findIndex((function(t) {
                                return t.id === e.id
                            })); - 1 != n && (t._protList[n].id = e.id, t._protList[n].tag = t._disableTag ? null : e.tag, t._protList[n].x1 = Math.max(e.x1, 0), t._protList[n].y1 = Math.max(e.y1, 0), t._protList[n].x2 = Math.min(e.x2, t._imgfile.width), t._protList[n].y2 = Math.min(e.y2, t._imgfile.height))
                        })), this.dispatchEvent({
                            type: "change"
                        })
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this._protList.length = 0, this.dispatchEvent({
                            type: "change"
                        })
                    }
                }, {
                    key: "load",
                    value: function(t) {
                        var e, n = t.entryspec || [];
                        this._protList.length = 0, this._imgfile = t.imgfile, (e = this._protList).push.apply(e, r()(n)), this.dispatchEvent({
                            type: "change"
                        })
                    }
                }, {
                    key: "toJSON",
                    value: function() {
                        return {
                            imgfile: this.imgfile,
                            entryspec: this.protList
                        }
                    }
                }, {
                    key: "imgfile",
                    get: function() {
                        return this._imgfile
                    }
                }, {
                    key: "protList",
                    get: function() {
                        return this._protList
                    }
                }, {
                    key: "maxEntry",
                    get: function() {
                        return this._maxEntry
                    }
                }, {
                    key: "disableTag",
                    get: function() {
                        return this._disableTag
                    }
                }]), n
            }(v),
            m = n(0),
            b = n.n(m);

        function x(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = p()(t);
                if (e) {
                    var r = p()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return d()(this, n)
            }
        }
        var E = function(t) {
                l()(n, t);
                var e = x(n);

                function n(t, i) {
                    var r, o = i.imageView,
                        s = i.tableView;
                    return a()(this, n), (r = e.call(this))._onProtListChange = r._handleProtListChange.bind(b()(r)), r._onImageViewChange = r._handleImageViewChange.bind(b()(r)), r._onImageViewItemAdd = r._handleImageViewItemAdd.bind(b()(r)), r._onImageViewItemRemove = r._handleImageViewItemRemove.bind(b()(r)), r._onTableViewChange = r._handleTableViewInput.bind(b()(r)), r._store = t, r._store.addEventListener("change", r._onProtListChange), o && (r._imageView = o, r._imageView.store = t, r._imageView.addEventListener("change", r._onImageViewChange), r._imageView.addEventListener("add", r._onImageViewItemAdd), r._imageView.addEventListener("remove", r._onImageViewItemRemove)), s && (r._tableView = s, r._tableView.store = t, r._tableView.addEventListener("input", r._onTableViewChange)), r
                }
                return c()(n, [{
                    key: "clear",
                    value: function() {
                        this._store.clear()
                    }
                }, {
                    key: "load",
                    value: function(t) {
                        this._store.load(t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.clear(), this._store.removeEventListener("change", this._onProtListChange), this._imageView && (this._imageView.removeEventListener("change", this._onImageViewChange), this._imageView.destroy())
                    }
                }, {
                    key: "toJSON",
                    value: function() {
                        return this._store.toJSON()
                    }
                }, {
                    key: "_handleProtListChange",
                    value: function() {
                        this.dispatchEvent({
                            type: "change"
                        })
                    }
                }, {
                    key: "_handleImageViewChange",
                    value: function(t) {
                        var e = {
                            id: t.id,
                            tag: t.tag,
                            x1: t.x1,
                            y1: t.y1,
                            x2: t.x2,
                            y2: t.y2
                        };
                        this._store.changeProtData(e)
                    }
                }, {
                    key: "_handleImageViewItemAdd",
                    value: function(t) {
                        var e = {
                            id: t.id,
                            tag: t.tag,
                            x1: t.x1,
                            y1: t.y1,
                            x2: t.x2,
                            y2: t.y2
                        };
                        this._store.addProtData(e)
                    }
                }, {
                    key: "_handleImageViewItemRemove",
                    value: function(t) {
                        var e = t.id;
                        this._store.removeProtDataById(e)
                    }
                }, {
                    key: "_handleTableViewInput",
                    value: function(t) {
                        var e = {
                            id: t.id,
                            tag: t.tag,
                            x1: t.x1,
                            y1: t.y1,
                            x2: t.x2,
                            y2: t.y2
                        };
                        this._store.changeProtData(e)
                    }
                }]), n
            }(v),
            L = "http://www.w3.org/2000/svg";

        function w(t) {
            var e = t.getBoundingClientRect();
            return {
                width: e.width,
                height: e.height,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                x: e.left,
                y: e.top
            }
        }

        function D(t) {
            if ("[object Window]" !== t.toString()) {
                var e = t.ownerDocument;
                return e ? e.defaultView : window
            }
            return t
        }

        function k(t) {
            var e = D(t);
            return {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            }
        }

        function S(t) {
            return t instanceof D(t).Element || t instanceof Element
        }

        function $(t) {
            return t instanceof D(t).HTMLElement || t instanceof HTMLElement
        }

        function A(t) {
            return t ? (t.nodeName || "").toLowerCase() : null
        }

        function O(t) {
            return (S(t) ? t.ownerDocument : t.document).documentElement
        }

        function M(t) {
            return w(O(t)).left + k(t).scrollLeft
        }

        function C(t) {
            return D(t).getComputedStyle(t)
        }

        function R(t) {
            var e = C(t),
                n = e.overflow,
                i = e.overflowX,
                r = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + r + i)
        }

        function I(t, e, n) {
            void 0 === n && (n = !1);
            var i, r, o = O(e),
                a = w(t),
                s = $(e),
                c = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                u = {
                    x: 0,
                    y: 0
                };
            return (s || !s && !n) && (("body" !== A(e) || R(o)) && (c = (i = e) !== D(i) && $(i) ? {
                scrollLeft: (r = i).scrollLeft,
                scrollTop: r.scrollTop
            } : k(i)), $(e) ? ((u = w(e)).x += e.clientLeft, u.y += e.clientTop) : o && (u.x = M(o))), {
                x: a.left + c.scrollLeft - u.x,
                y: a.top + c.scrollTop - u.y,
                width: a.width,
                height: a.height
            }
        }

        function P(t) {
            return {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }

        function j(t) {
            return "html" === A(t) ? t : t.assignedSlot || t.parentNode || t.host || O(t)
        }

        function T(t, e) {
            void 0 === e && (e = []);
            var n = function t(e) {
                    return ["html", "body", "#document"].indexOf(A(e)) >= 0 ? e.ownerDocument.body : $(e) && R(e) ? e : t(j(e))
                }(t),
                i = "body" === A(n),
                r = D(n),
                o = i ? [r].concat(r.visualViewport || [], R(n) ? n : []) : n,
                a = e.concat(o);
            return i ? a : a.concat(T(j(o)))
        }

        function X(t) {
            return ["table", "td", "th"].indexOf(A(t)) >= 0
        }

        function Y(t) {
            if (!$(t) || "fixed" === C(t).position) return null;
            var e = t.offsetParent;
            if (e) {
                var n = O(e);
                if ("body" === A(e) && "static" === C(e).position && "static" !== C(n).position) return n
            }
            return e
        }

        function B(t) {
            for (var e = D(t), n = Y(t); n && X(n) && "static" === C(n).position;) n = Y(n);
            return n && "body" === A(n) && "static" === C(n).position ? e : n || function(t) {
                for (var e = j(t); $(e) && ["html", "body"].indexOf(A(e)) < 0;) {
                    var n = C(e);
                    if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return e;
                    e = e.parentNode
                }
                return null
            }(t) || e
        }
        var V = "top",
            q = "bottom",
            N = "right",
            H = "left",
            W = [V, q, N, H],
            U = W.reduce((function(t, e) {
                return t.concat([e + "-start", e + "-end"])
            }), []),
            z = [].concat(W, ["auto"]).reduce((function(t, e) {
                return t.concat([e, e + "-start", e + "-end"])
            }), []),
            F = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

        function K(t) {
            var e = new Map,
                n = new Set,
                i = [];
            return t.forEach((function(t) {
                e.set(t.name, t)
            })), t.forEach((function(t) {
                n.has(t.name) || function t(r) {
                    n.add(r.name), [].concat(r.requires || [], r.requiresIfExists || []).forEach((function(i) {
                        if (!n.has(i)) {
                            var r = e.get(i);
                            r && t(r)
                        }
                    })), i.push(r)
                }(t)
            })), i
        }
        var G = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };

        function J() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return !e.some((function(t) {
                return !(t && "function" == typeof t.getBoundingClientRect)
            }))
        }

        function Q(t) {
            void 0 === t && (t = {});
            var e = t,
                n = e.defaultModifiers,
                i = void 0 === n ? [] : n,
                r = e.defaultOptions,
                o = void 0 === r ? G : r;
            return function(t, e, n) {
                void 0 === n && (n = o);
                var r, a, s = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign(Object.assign({}, G), o),
                        modifiersData: {},
                        elements: {
                            reference: t,
                            popper: e
                        },
                        attributes: {},
                        styles: {}
                    },
                    c = [],
                    u = !1,
                    l = {
                        state: s,
                        setOptions: function(n) {
                            h(), s.options = Object.assign(Object.assign(Object.assign({}, o), s.options), n), s.scrollParents = {
                                reference: S(t) ? T(t) : t.contextElement ? T(t.contextElement) : [],
                                popper: T(e)
                            };
                            var r = function(t) {
                                var e = K(t);
                                return F.reduce((function(t, n) {
                                    return t.concat(e.filter((function(t) {
                                        return t.phase === n
                                    })))
                                }), [])
                            }(function(t) {
                                var e = t.reduce((function(t, e) {
                                    var n = t[e.name];
                                    return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
                                        options: Object.assign(Object.assign({}, n.options), e.options),
                                        data: Object.assign(Object.assign({}, n.data), e.data)
                                    }) : e, t
                                }), {});
                                return Object.keys(e).map((function(t) {
                                    return e[t]
                                }))
                            }([].concat(i, s.options.modifiers)));
                            return s.orderedModifiers = r.filter((function(t) {
                                return t.enabled
                            })), s.orderedModifiers.forEach((function(t) {
                                var e = t.name,
                                    n = t.options,
                                    i = void 0 === n ? {} : n,
                                    r = t.effect;
                                if ("function" == typeof r) {
                                    var o = r({
                                        state: s,
                                        name: e,
                                        instance: l,
                                        options: i
                                    });
                                    c.push(o || function() {})
                                }
                            })), l.update()
                        },
                        forceUpdate: function() {
                            if (!u) {
                                var t = s.elements,
                                    e = t.reference,
                                    n = t.popper;
                                if (J(e, n)) {
                                    s.rects = {
                                        reference: I(e, B(n), "fixed" === s.options.strategy),
                                        popper: P(n)
                                    }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(t) {
                                        return s.modifiersData[t.name] = Object.assign({}, t.data)
                                    }));
                                    for (var i = 0; i < s.orderedModifiers.length; i++)
                                        if (!0 !== s.reset) {
                                            var r = s.orderedModifiers[i],
                                                o = r.fn,
                                                a = r.options,
                                                c = void 0 === a ? {} : a,
                                                h = r.name;
                                            "function" == typeof o && (s = o({
                                                state: s,
                                                options: c,
                                                name: h,
                                                instance: l
                                            }) || s)
                                        } else s.reset = !1, i = -1
                                }
                            }
                        },
                        update: (r = function() {
                            return new Promise((function(t) {
                                l.forceUpdate(), t(s)
                            }))
                        }, function() {
                            return a || (a = new Promise((function(t) {
                                Promise.resolve().then((function() {
                                    a = void 0, t(r())
                                }))
                            }))), a
                        }),
                        destroy: function() {
                            h(), u = !0
                        }
                    };
                if (!J(t, e)) return l;

                function h() {
                    c.forEach((function(t) {
                        return t()
                    })), c = []
                }
                return l.setOptions(n).then((function(t) {
                    !u && n.onFirstUpdate && n.onFirstUpdate(t)
                })), l
            }
        }
        var Z = {
            passive: !0
        };

        function tt(t) {
            return t.split("-")[0]
        }

        function et(t) {
            return t.split("-")[1]
        }

        function nt(t) {
            return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
        }

        function it(t) {
            var e, n = t.reference,
                i = t.element,
                r = t.placement,
                o = r ? tt(r) : null,
                a = r ? et(r) : null,
                s = n.x + n.width / 2 - i.width / 2,
                c = n.y + n.height / 2 - i.height / 2;
            switch (o) {
                case V:
                    e = {
                        x: s,
                        y: n.y - i.height
                    };
                    break;
                case q:
                    e = {
                        x: s,
                        y: n.y + n.height
                    };
                    break;
                case N:
                    e = {
                        x: n.x + n.width,
                        y: c
                    };
                    break;
                case H:
                    e = {
                        x: n.x - i.width,
                        y: c
                    };
                    break;
                default:
                    e = {
                        x: n.x,
                        y: n.y
                    }
            }
            var u = o ? nt(o) : null;
            if (null != u) {
                var l = "y" === u ? "height" : "width";
                switch (a) {
                    case "start":
                        e[u] = Math.floor(e[u]) - Math.floor(n[l] / 2 - i[l] / 2);
                        break;
                    case "end":
                        e[u] = Math.floor(e[u]) + Math.ceil(n[l] / 2 - i[l] / 2)
                }
            }
            return e
        }
        var rt = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

        function ot(t) {
            var e, n = t.popper,
                i = t.popperRect,
                r = t.placement,
                o = t.offsets,
                a = t.position,
                s = t.gpuAcceleration,
                c = t.adaptive,
                u = function(t) {
                    var e = t.x,
                        n = t.y,
                        i = window.devicePixelRatio || 1;
                    return {
                        x: Math.round(e * i) / i || 0,
                        y: Math.round(n * i) / i || 0
                    }
                }(o),
                l = u.x,
                h = u.y,
                d = o.hasOwnProperty("x"),
                f = o.hasOwnProperty("y"),
                p = H,
                v = V,
                _ = window;
            if (c) {
                var g = B(n);
                g === D(n) && (g = O(n)), r === V && (v = q, h -= g.clientHeight - i.height, h *= s ? 1 : -1), r === H && (p = N, l -= g.clientWidth - i.width, l *= s ? 1 : -1)
            }
            var y, m = Object.assign({
                position: a
            }, c && rt);
            return s ? Object.assign(Object.assign({}, m), {}, ((y = {})[v] = f ? "0" : "", y[p] = d ? "0" : "", y.transform = (_.devicePixelRatio || 1) < 2 ? "translate(" + l + "px, " + h + "px)" : "translate3d(" + l + "px, " + h + "px, 0)", y)) : Object.assign(Object.assign({}, m), {}, ((e = {})[v] = f ? h + "px" : "", e[p] = d ? l + "px" : "", e.transform = "", e))
        }
        var at = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

        function st(t) {
            return t.replace(/left|right|bottom|top/g, (function(t) {
                return at[t]
            }))
        }
        var ct = {
            start: "end",
            end: "start"
        };

        function ut(t) {
            return t.replace(/start|end/g, (function(t) {
                return ct[t]
            }))
        }

        function lt(t, e) {
            var n = Boolean(e.getRootNode && e.getRootNode().host);
            if (t.contains(e)) return !0;
            if (n) {
                var i = e;
                do {
                    if (i && t.isSameNode(i)) return !0;
                    i = i.parentNode || i.host
                } while (i)
            }
            return !1
        }

        function ht(t) {
            return Object.assign(Object.assign({}, t), {}, {
                left: t.x,
                top: t.y,
                right: t.x + t.width,
                bottom: t.y + t.height
            })
        }

        function dt(t, e) {
            return "viewport" === e ? ht(function(t) {
                var e = D(t),
                    n = O(t),
                    i = e.visualViewport,
                    r = n.clientWidth,
                    o = n.clientHeight,
                    a = 0,
                    s = 0;
                return i && (r = i.width, o = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = i.offsetLeft, s = i.offsetTop)), {
                    width: r,
                    height: o,
                    x: a + M(t),
                    y: s
                }
            }(t)) : $(e) ? function(t) {
                var e = w(t);
                return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
            }(e) : ht(function(t) {
                var e = O(t),
                    n = k(t),
                    i = t.ownerDocument.body,
                    r = Math.max(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                    o = Math.max(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                    a = -n.scrollLeft + M(t),
                    s = -n.scrollTop;
                return "rtl" === C(i || e).direction && (a += Math.max(e.clientWidth, i ? i.clientWidth : 0) - r), {
                    width: r,
                    height: o,
                    x: a,
                    y: s
                }
            }(O(t)))
        }

        function ft(t, e, n) {
            var i = "clippingParents" === e ? function(t) {
                    var e = T(j(t)),
                        n = ["absolute", "fixed"].indexOf(C(t).position) >= 0 && $(t) ? B(t) : t;
                    return S(n) ? e.filter((function(t) {
                        return S(t) && lt(t, n) && "body" !== A(t)
                    })) : []
                }(t) : [].concat(e),
                r = [].concat(i, [n]),
                o = r[0],
                a = r.reduce((function(e, n) {
                    var i = dt(t, n);
                    return e.top = Math.max(i.top, e.top), e.right = Math.min(i.right, e.right), e.bottom = Math.min(i.bottom, e.bottom), e.left = Math.max(i.left, e.left), e
                }), dt(t, o));
            return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
        }

        function pt(t) {
            return Object.assign(Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }), t)
        }

        function vt(t, e) {
            return e.reduce((function(e, n) {
                return e[n] = t, e
            }), {})
        }

        function _t(t, e) {
            void 0 === e && (e = {});
            var n = e,
                i = n.placement,
                r = void 0 === i ? t.placement : i,
                o = n.boundary,
                a = void 0 === o ? "clippingParents" : o,
                s = n.rootBoundary,
                c = void 0 === s ? "viewport" : s,
                u = n.elementContext,
                l = void 0 === u ? "popper" : u,
                h = n.altBoundary,
                d = void 0 !== h && h,
                f = n.padding,
                p = void 0 === f ? 0 : f,
                v = pt("number" != typeof p ? p : vt(p, W)),
                _ = "popper" === l ? "reference" : "popper",
                g = t.elements.reference,
                y = t.rects.popper,
                m = t.elements[d ? _ : l],
                b = ft(S(m) ? m : m.contextElement || O(t.elements.popper), a, c),
                x = w(g),
                E = it({
                    reference: x,
                    element: y,
                    strategy: "absolute",
                    placement: r
                }),
                L = ht(Object.assign(Object.assign({}, y), E)),
                D = "popper" === l ? L : x,
                k = {
                    top: b.top - D.top + v.top,
                    bottom: D.bottom - b.bottom + v.bottom,
                    left: b.left - D.left + v.left,
                    right: D.right - b.right + v.right
                },
                $ = t.modifiersData.offset;
            if ("popper" === l && $) {
                var A = $[r];
                Object.keys(k).forEach((function(t) {
                    var e = [N, q].indexOf(t) >= 0 ? 1 : -1,
                        n = [V, q].indexOf(t) >= 0 ? "y" : "x";
                    k[t] += A[n] * e
                }))
            }
            return k
        }

        function gt(t, e, n) {
            return Math.max(t, Math.min(e, n))
        }

        function yt(t, e, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }), {
                top: t.top - e.height - n.y,
                right: t.right - e.width + n.x,
                bottom: t.bottom - e.height + n.y,
                left: t.left - e.width - n.x
            }
        }

        function mt(t) {
            return [V, N, q, H].some((function(e) {
                return t[e] >= 0
            }))
        }
        var bt = Q({
                defaultModifiers: [{
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(t) {
                        var e = t.state,
                            n = t.instance,
                            i = t.options,
                            r = i.scroll,
                            o = void 0 === r || r,
                            a = i.resize,
                            s = void 0 === a || a,
                            c = D(e.elements.popper),
                            u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                        return o && u.forEach((function(t) {
                                t.addEventListener("scroll", n.update, Z)
                            })), s && c.addEventListener("resize", n.update, Z),
                            function() {
                                o && u.forEach((function(t) {
                                    t.removeEventListener("scroll", n.update, Z)
                                })), s && c.removeEventListener("resize", n.update, Z)
                            }
                    },
                    data: {}
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(t) {
                        var e = t.state,
                            n = t.name;
                        e.modifiersData[n] = it({
                            reference: e.rects.reference,
                            element: e.rects.popper,
                            strategy: "absolute",
                            placement: e.placement
                        })
                    },
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = n.gpuAcceleration,
                            r = void 0 === i || i,
                            o = n.adaptive,
                            a = void 0 === o || o,
                            s = {
                                placement: tt(e.placement),
                                popper: e.elements.popper,
                                popperRect: e.rects.popper,
                                gpuAcceleration: r
                            };
                        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), ot(Object.assign(Object.assign({}, s), {}, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: a
                        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), ot(Object.assign(Object.assign({}, s), {}, {
                            offsets: e.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1
                        })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                            "data-popper-placement": e.placement
                        })
                    },
                    data: {}
                }, {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(t) {
                        var e = t.state;
                        Object.keys(e.elements).forEach((function(t) {
                            var n = e.styles[t] || {},
                                i = e.attributes[t] || {},
                                r = e.elements[t];
                            $(r) && A(r) && (Object.assign(r.style, n), Object.keys(i).forEach((function(t) {
                                var e = i[t];
                                !1 === e ? r.removeAttribute(t) : r.setAttribute(t, !0 === e ? "" : e)
                            })))
                        }))
                    },
                    effect: function(t) {
                        var e = t.state,
                            n = {
                                popper: {
                                    position: e.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(e.elements.popper.style, n.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(e.elements).forEach((function(t) {
                                    var i = e.elements[t],
                                        r = e.attributes[t] || {},
                                        o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                                            return t[e] = "", t
                                        }), {});
                                    $(i) && A(i) && (Object.assign(i.style, o), Object.keys(r).forEach((function(t) {
                                        i.removeAttribute(t)
                                    })))
                                }))
                            }
                    },
                    requires: ["computeStyles"]
                }, {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = t.name,
                            r = n.offset,
                            o = void 0 === r ? [0, 0] : r,
                            a = z.reduce((function(t, n) {
                                return t[n] = function(t, e, n) {
                                    var i = tt(t),
                                        r = [H, V].indexOf(i) >= 0 ? -1 : 1,
                                        o = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {
                                            placement: t
                                        })) : n,
                                        a = o[0],
                                        s = o[1];
                                    return a = a || 0, s = (s || 0) * r, [H, N].indexOf(i) >= 0 ? {
                                        x: s,
                                        y: a
                                    } : {
                                        x: a,
                                        y: s
                                    }
                                }(n, e.rects, o), t
                            }), {}),
                            s = a[e.placement],
                            c = s.x,
                            u = s.y;
                        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += u), e.modifiersData[i] = a
                    }
                }, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = t.name;
                        if (!e.modifiersData[i]._skip) {
                            for (var r = n.mainAxis, o = void 0 === r || r, a = n.altAxis, s = void 0 === a || a, c = n.fallbackPlacements, u = n.padding, l = n.boundary, h = n.rootBoundary, d = n.altBoundary, f = n.flipVariations, p = void 0 === f || f, v = n.allowedAutoPlacements, _ = e.options.placement, g = tt(_), y = c || (g === _ || !p ? [st(_)] : function(t) {
                                    if ("auto" === tt(t)) return [];
                                    var e = st(t);
                                    return [ut(t), e, ut(e)]
                                }(_)), m = [_].concat(y).reduce((function(t, n) {
                                    return t.concat("auto" === tt(n) ? function(t, e) {
                                        void 0 === e && (e = {});
                                        var n = e,
                                            i = n.placement,
                                            r = n.boundary,
                                            o = n.rootBoundary,
                                            a = n.padding,
                                            s = n.flipVariations,
                                            c = n.allowedAutoPlacements,
                                            u = void 0 === c ? z : c,
                                            l = et(i),
                                            h = l ? s ? U : U.filter((function(t) {
                                                return et(t) === l
                                            })) : W,
                                            d = h.filter((function(t) {
                                                return u.indexOf(t) >= 0
                                            }));
                                        0 === d.length && (d = h);
                                        var f = d.reduce((function(e, n) {
                                            return e[n] = _t(t, {
                                                placement: n,
                                                boundary: r,
                                                rootBoundary: o,
                                                padding: a
                                            })[tt(n)], e
                                        }), {});
                                        return Object.keys(f).sort((function(t, e) {
                                            return f[t] - f[e]
                                        }))
                                    }(e, {
                                        placement: n,
                                        boundary: l,
                                        rootBoundary: h,
                                        padding: u,
                                        flipVariations: p,
                                        allowedAutoPlacements: v
                                    }) : n)
                                }), []), b = e.rects.reference, x = e.rects.popper, E = new Map, L = !0, w = m[0], D = 0; D < m.length; D++) {
                                var k = m[D],
                                    S = tt(k),
                                    $ = "start" === et(k),
                                    A = [V, q].indexOf(S) >= 0,
                                    O = A ? "width" : "height",
                                    M = _t(e, {
                                        placement: k,
                                        boundary: l,
                                        rootBoundary: h,
                                        altBoundary: d,
                                        padding: u
                                    }),
                                    C = A ? $ ? N : H : $ ? q : V;
                                b[O] > x[O] && (C = st(C));
                                var R = st(C),
                                    I = [];
                                if (o && I.push(M[S] <= 0), s && I.push(M[C] <= 0, M[R] <= 0), I.every((function(t) {
                                        return t
                                    }))) {
                                    w = k, L = !1;
                                    break
                                }
                                E.set(k, I)
                            }
                            if (L)
                                for (var P = function(t) {
                                        var e = m.find((function(e) {
                                            var n = E.get(e);
                                            if (n) return n.slice(0, t).every((function(t) {
                                                return t
                                            }))
                                        }));
                                        if (e) return w = e, "break"
                                    }, j = p ? 3 : 1; j > 0; j--) {
                                    if ("break" === P(j)) break
                                }
                            e.placement !== w && (e.modifiersData[i]._skip = !0, e.placement = w, e.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = t.name,
                            r = n.mainAxis,
                            o = void 0 === r || r,
                            a = n.altAxis,
                            s = void 0 !== a && a,
                            c = n.boundary,
                            u = n.rootBoundary,
                            l = n.altBoundary,
                            h = n.padding,
                            d = n.tether,
                            f = void 0 === d || d,
                            p = n.tetherOffset,
                            v = void 0 === p ? 0 : p,
                            _ = _t(e, {
                                boundary: c,
                                rootBoundary: u,
                                padding: h,
                                altBoundary: l
                            }),
                            g = tt(e.placement),
                            y = et(e.placement),
                            m = !y,
                            b = nt(g),
                            x = "x" === b ? "y" : "x",
                            E = e.modifiersData.popperOffsets,
                            L = e.rects.reference,
                            w = e.rects.popper,
                            D = "function" == typeof v ? v(Object.assign(Object.assign({}, e.rects), {}, {
                                placement: e.placement
                            })) : v,
                            k = {
                                x: 0,
                                y: 0
                            };
                        if (E) {
                            if (o) {
                                var S = "y" === b ? V : H,
                                    $ = "y" === b ? q : N,
                                    A = "y" === b ? "height" : "width",
                                    O = E[b],
                                    M = E[b] + _[S],
                                    C = E[b] - _[$],
                                    R = f ? -w[A] / 2 : 0,
                                    I = "start" === y ? L[A] : w[A],
                                    j = "start" === y ? -w[A] : -L[A],
                                    T = e.elements.arrow,
                                    X = f && T ? P(T) : {
                                        width: 0,
                                        height: 0
                                    },
                                    Y = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0
                                    },
                                    W = Y[S],
                                    U = Y[$],
                                    z = gt(0, L[A], X[A]),
                                    F = m ? L[A] / 2 - R - z - W - D : I - z - W - D,
                                    K = m ? -L[A] / 2 + R + z + U + D : j + z + U + D,
                                    G = e.elements.arrow && B(e.elements.arrow),
                                    J = G ? "y" === b ? G.clientTop || 0 : G.clientLeft || 0 : 0,
                                    Q = e.modifiersData.offset ? e.modifiersData.offset[e.placement][b] : 0,
                                    Z = E[b] + F - Q - J,
                                    it = E[b] + K - Q,
                                    rt = gt(f ? Math.min(M, Z) : M, O, f ? Math.max(C, it) : C);
                                E[b] = rt, k[b] = rt - O
                            }
                            if (s) {
                                var ot = "x" === b ? V : H,
                                    at = "x" === b ? q : N,
                                    st = E[x],
                                    ct = gt(st + _[ot], st, st - _[at]);
                                E[x] = ct, k[x] = ct - st
                            }
                            e.modifiersData[i] = k
                        }
                    },
                    requiresIfExists: ["offset"]
                }, {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e, n = t.state,
                            i = t.name,
                            r = n.elements.arrow,
                            o = n.modifiersData.popperOffsets,
                            a = tt(n.placement),
                            s = nt(a),
                            c = [H, N].indexOf(a) >= 0 ? "height" : "width";
                        if (r && o) {
                            var u = n.modifiersData[i + "#persistent"].padding,
                                l = P(r),
                                h = "y" === s ? V : H,
                                d = "y" === s ? q : N,
                                f = n.rects.reference[c] + n.rects.reference[s] - o[s] - n.rects.popper[c],
                                p = o[s] - n.rects.reference[s],
                                v = B(r),
                                _ = v ? "y" === s ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                                g = f / 2 - p / 2,
                                y = u[h],
                                m = _ - l[c] - u[d],
                                b = _ / 2 - l[c] / 2 + g,
                                x = gt(y, b, m),
                                E = s;
                            n.modifiersData[i] = ((e = {})[E] = x, e.centerOffset = x - b, e)
                        }
                    },
                    effect: function(t) {
                        var e = t.state,
                            n = t.options,
                            i = t.name,
                            r = n.element,
                            o = void 0 === r ? "[data-popper-arrow]" : r,
                            a = n.padding,
                            s = void 0 === a ? 0 : a;
                        null != o && ("string" != typeof o || (o = e.elements.popper.querySelector(o))) && lt(e.elements.popper, o) && (e.elements.arrow = o, e.modifiersData[i + "#persistent"] = {
                            padding: pt("number" != typeof s ? s : vt(s, W))
                        })
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                }, {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.name,
                            i = e.rects.reference,
                            r = e.rects.popper,
                            o = e.modifiersData.preventOverflow,
                            a = _t(e, {
                                elementContext: "reference"
                            }),
                            s = _t(e, {
                                altBoundary: !0
                            }),
                            c = yt(a, i),
                            u = yt(s, r, o),
                            l = mt(c),
                            h = mt(u);
                        e.modifiersData[n] = {
                            referenceClippingOffsets: c,
                            popperEscapeOffsets: u,
                            isReferenceHidden: l,
                            hasPopperEscaped: h
                        }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                            "data-popper-reference-hidden": l,
                            "data-popper-escaped": h
                        })
                    }
                }]
            }),
            xt = function() {
                function t() {
                    this._listeners = {}
                }
                return t.prototype.addEventListener = function(t, e) {
                    var n = this._listeners;
                    void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
                }, t.prototype.removeEventListener = function(t, e) {
                    var n = this._listeners[t];
                    if (void 0 !== n) {
                        var i = n.indexOf(e); - 1 !== i && n.splice(i, 1)
                    }
                }, t.prototype.dispatchEvent = function(t) {
                    var e = this._listeners[t.type];
                    if (void 0 !== e) {
                        t.target = this;
                        for (var n = e.slice(0), i = 0, r = n.length; i < r; i++) n[i].call(this, t)
                    }
                }, t
            }();

        function Et(t) {
            return "TouchEvent" in window && t instanceof TouchEvent
        }
        var Lt = {
                passive: !1
            },
            wt = function() {
                function t(t) {
                    this._isDragging = !1, this._eventDispatcher = new xt, this._count = 0, this._dragStartX = 0, this._dragStartY = 0, this._dragLastX = 0, this._dragLastY = 0, this._accumulatedX = 0, this._accumulatedY = 0, this._$el = t, this._onDragStart = this._handleDragStart.bind(this), this._onDragMove = this._handleDragMove.bind(this), this._onDragEnd = this._handleDragEnd.bind(this), this._$el.addEventListener("mousedown", this._onDragStart), this._$el.addEventListener("touchstart", this._onDragStart)
                }
                return Object.defineProperty(t.prototype, "isDragging", {
                    get: function() {
                        return this._isDragging
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.addEventListener = function(t, e) {
                    this._eventDispatcher.addEventListener(t, e)
                }, t.prototype.removeEventListener = function(t, e) {
                    this._eventDispatcher.removeEventListener(t, e)
                }, t.prototype.forceDragEnd = function() {
                    document.removeEventListener("mousemove", this._onDragMove), document.removeEventListener("touchmove", this._onDragMove, Lt), document.removeEventListener("mouseup", this._onDragEnd), document.removeEventListener("touchend", this._onDragEnd), this._isDragging = !1, this._eventDispatcher.dispatchEvent({
                        type: "dragcancel",
                        dragStartX: this._dragStartX,
                        dragStartY: this._dragStartY,
                        accumulatedX: this._accumulatedX,
                        accumulatedY: this._accumulatedY
                    })
                }, t.prototype.destroy = function() {
                    this.forceDragEnd()
                }, t.prototype._handleDragStart = function(t) {
                    t.preventDefault(), document.removeEventListener("mousemove", this._onDragMove), document.removeEventListener("touchmove", this._onDragMove, Lt), document.removeEventListener("mouseup", this._onDragEnd), document.removeEventListener("touchend", this._onDragEnd);
                    var e = Et(t) ? t.touches[0] : t;
                    this._isDragging = !0, this._count = 0, this._accumulatedX = 0, this._accumulatedY = 0, this._dragStartX = e.clientX, this._dragStartY = e.clientY, this._dragLastX = e.clientX, this._dragLastY = e.clientY, this._eventDispatcher.dispatchEvent({
                        type: "dragstart",
                        clientX: e.clientX,
                        clientY: e.clientY,
                        dragStartX: this._dragStartX,
                        dragStartY: this._dragStartY,
                        deltaY: 0,
                        deltaX: 0,
                        accumulatedX: this._accumulatedX,
                        accumulatedY: this._accumulatedY
                    }), document.addEventListener("mousemove", this._onDragMove), document.addEventListener("touchmove", this._onDragMove, Lt), document.addEventListener("mouseup", this._onDragEnd), document.addEventListener("touchend", this._onDragEnd)
                }, t.prototype._handleDragMove = function(t) {
                    t.preventDefault();
                    var e = Et(t) ? t.touches[0] : t;
                    this._count += 1;
                    var n = e.clientX - this._dragLastX,
                        i = e.clientY - this._dragLastY;
                    this._accumulatedX += n, this._accumulatedY += i, this._dragLastX = e.clientX, this._dragLastY = e.clientY, this._eventDispatcher.dispatchEvent({
                        type: "dragmove",
                        count: this._count,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        dragStartX: this._dragStartX,
                        dragStartY: this._dragStartY,
                        deltaY: i,
                        deltaX: n,
                        accumulatedX: this._accumulatedX,
                        accumulatedY: this._accumulatedY
                    })
                }, t.prototype._handleDragEnd = function(t) {
                    this.forceDragEnd();
                    var e = Et(t) ? t.changedTouches[0] : t;
                    this._eventDispatcher.dispatchEvent({
                        type: "dragend",
                        clientX: e.clientX,
                        clientY: e.clientY,
                        dragStartX: this._dragStartX,
                        dragStartY: this._dragStartY,
                        deltaY: 0,
                        deltaX: 0,
                        accumulatedX: this._accumulatedX,
                        accumulatedY: this._accumulatedY
                    })
                }, t
            }();

        function Dt(t, e) {
            if (Element.prototype.contains) return t.contains(e);
            do {
                if (t === e) return !0;
                e = e.parentNode
            } while (e);
            return !1
        }

        function kt(t) {
            return "TouchEvent" in window && t instanceof TouchEvent
        }

        function St(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = p()(t);
                if (e) {
                    var r = p()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return d()(this, n)
            }
        }
        var $t = function(t) {
            l()(n, t);
            var e = St(n);

            function n() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return a()(this, n), (t = e.call(this))._x = i, t._y = r, t
            }
            return c()(n, [{
                key: "set",
                value: function(t, e) {
                    return this._x === t && this._y === e || (this._x = t, this._y = e, this.dispatchEvent({
                        type: "change"
                    })), this
                }
            }, {
                key: "copy",
                value: function(t) {
                    return this.set(t.x, t.y)
                }
            }, {
                key: "round",
                value: function() {
                    var t = Math.round(this._x),
                        e = Math.round(this._y);
                    return this.set(t, e)
                }
            }, {
                key: "add",
                value: function(t) {
                    return this.set(this.x + t.x, this.y + t.y)
                }
            }, {
                key: "sub",
                value: function(t) {
                    return this.set(this.x - t.x, this.y - t.y)
                }
            }, {
                key: "lengthSq",
                value: function() {
                    return this.x * this.x + this.y * this.y
                }
            }, {
                key: "x",
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x !== t && (this._x = t, this.dispatchEvent({
                        type: "change"
                    }))
                }
            }, {
                key: "y",
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y !== t && (this._y = t, this.dispatchEvent({
                        type: "change"
                    }))
                }
            }]), n
        }(v);

        function At(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = p()(t);
                if (e) {
                    var r = p()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return d()(this, n)
            }
        }
        var Ot = function(t) {
            l()(n, t);
            var e = At(n);

            function n(t) {
                var i;
                return a()(this, n), (i = e.call(this))._$el = t, i._targetElement = null, i._clickStartTime = 0, i._clickStartPosition = new $t, i._clickEndPosition = new $t, i._clickStart = i._handleClickStart.bind(b()(i)), i._clickEnd = i._handleClickEnd.bind(b()(i)), i._$el.addEventListener("mousedown", i._clickStart), i._$el.addEventListener("touchstart", i._clickStart), i
            }
            return c()(n, [{
                key: "dispatchEvent",
                value: function(t) {
                    var e = this._listeners[t.type];
                    if (void 0 !== e)
                        for (var n = e.slice(0), i = 0, r = n.length; i < r; i++) n[i].call(this, t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this._$el.removeEventListener("mousedown", this._clickStart), this._$el.removeEventListener("touchstart", this._clickStart), document.removeEventListener("mouseup", this._clickEnd), document.removeEventListener("touchend", this._clickEnd)
                }
            }, {
                key: "_handleClickStart",
                value: function(t) {
                    document.removeEventListener("mouseup", this._clickEnd), document.removeEventListener("touchend", this._clickEnd);
                    var e = kt(t) ? t.touches[0] : t;
                    this._clickStartPosition.set(e.clientX, e.clientY), this._clickStartTime = performance.now(), e.target instanceof Element ? (this._targetElement = e.target, document.addEventListener("mouseup", this._clickEnd), document.addEventListener("touchend", this._clickEnd)) : this._targetElement = null
                }
            }, {
                key: "_handleClickEnd",
                value: function(t) {
                    var e = this;
                    t.preventDefault();
                    var n = kt(t) ? t.touches[0] : t,
                        i = performance.now() - this._clickStartTime;
                    if ((document.removeEventListener("mouseup", this._clickEnd), document.removeEventListener("touchend", this._clickEnd), this._targetElement) && !(i > 1e3 || (this._clickEndPosition.set(n.clientX, n.clientY), 25 < this._clickEndPosition.sub(this._clickStartPosition).lengthSq()))) {
                        var r = this._targetElement;
                        setTimeout((function() {
                            return e.dispatchEvent({
                                type: "click",
                                target: r
                            })
                        }), 0)
                    }
                }
            }]), n
        }(v);

        function Mt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = p()(t);
                if (e) {
                    var r = p()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return d()(this, n)
            }
        }
        var Ct = function(t) {
            l()(n, t);
            var e = Mt(n);

            function n() {
                var t;
                return a()(this, n), (t = e.call(this))._isActive = !1, t.position = new $t, t.$el = document.createElementNS(L, "circle"), t.$el.style.cursor = "move", t.$el.setAttribute("fill", "#fff"), t.$el.setAttribute("stroke", "#fe0000"), t.$el.setAttribute("stroke-width", "2"), t.$el.setAttribute("r", "8"), t._onDragStart = t._handleDragStart.bind(b()(t)), t._onDragMove = t._handleDragMove.bind(b()(t)), t._onDragEnd = t._handleDragEnd.bind(b()(t)), t._onPositionChange = t._update.bind(b()(t)), t._dragEventDispatcher = new wt(t.$el), t._dragEventDispatcher.addEventListener("dragstart", t._onDragStart), t._dragEventDispatcher.addEventListener("dragmove", t._onDragMove), t._dragEventDispatcher.addEventListener("dragend", t._onDragEnd), t.position.addEventListener("change", t._onPositionChange), t
            }
            return c()(n, [{
                key: "destroy",
                value: function() {
                    this._dragEventDispatcher.destroy()
                }
            }, {
                key: "_update",
                value: function() {
                    this.$el.style.display = this._isActive ? "inline" : "none", this.$el.setAttribute("cx", "".concat(this.position.x)), this.$el.setAttribute("cy", "".concat(this.position.y))
                }
            }, {
                key: "_handleDragStart",
                value: function(t) {
                    this.dispatchEvent(t)
                }
            }, {
                key: "_handleDragMove",
                value: function(t) {
                    this.dispatchEvent(t)
                }
            }, {
                key: "_handleDragEnd",
                value: function(t) {
                    this.dispatchEvent(t)
                }
            }, {
                key: "isActive",
                set: function(t) {
                    this._isActive = t, this._update()
                }
            }]), n
        }(v);

        function Rt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = p()(t);
                if (e) {
                    var r = p()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return d()(this, n)
            }
        }
        var It = function(t) {
            l()(n, t);
            var e = Rt(n);

            function n() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                a()(this, n), (t = e.call(this))._id = i.id, t._tag = i.tag, t._x1 = i.x1, t._y1 = i.y1, t._x2 = i.x2, t._y2 = i.y2, t._boundary = {
                    min: new $t(-1 / 0, -1 / 0),
                    max: new $t(1 / 0, 1 / 0)
                }, t._isActive = !1, t._isDragging = !1, t._isDestroyed = !1, t._disableDialog = r.disableDialog || !1, t._onClick = t._handleClick.bind(b()(t)), t._onApplyButtonClick = t._handleApplyButtonClick.bind(b()(t)), t._onClearButtonClick = t._handleClearButtonClick.bind(b()(t)), t._onKeyDown = t._handleKeyDown.bind(b()(t)), t._onDragStart = t._handleDragStart.bind(b()(t)), t._onDragEnd = t._handleDragEnd.bind(b()(t)), t._onBodyDragMove = t._handleBodyDragMove.bind(b()(t)), t._onTopLeftDragMove = t._handleTopLeftDragMove.bind(b()(t)), t._onBottomRightDragMove = t._handleBottomRightDragMove.bind(b()(t)), t.$el = document.createElementNS(L, "g"), t._$body = document.createElementNS(L, "g"), t._$rect = document.createElementNS(L, "rect"), t._$labelBg = document.createElementNS(L, "rect"), t._$label = document.createElementNS(L, "text"), t._$handleTopLeft = document.createElementNS(L, "circle"), t._$handleBottomRight = document.createElementNS(L, "circle"), t._$dialog = document.createElement("div"), t._dialog = bt(t.$el, t._$dialog), t.$el.setAttribute("transform", "translate( ".concat(t._x1, " ").concat(t._y1, " )")), t._$rect.style.strokeWidth = "3", t._$rect.style.fillOpacity = "0.2", t._$rect.style.transition = "stroke .2s, fill .2s", t._$rect.setAttribute("width", "".concat(t._x2 - t._x1)), t._$rect.setAttribute("height", "".concat(t._y2 - t._y1)), t._$labelBg.style.transition = "all .2s", t._$labelBg.setAttribute("width", "30"), t._$labelBg.setAttribute("height", "30"), t._$label.style.userSelect = "none", t._$label.setAttribute("text-anchor", "middle"), t._$label.setAttribute("x", "15"), t._$label.setAttribute("y", "20"), t._$label.setAttribute("fill", "#fff"), t._$label.setAttribute("font-size", "16px"), t._$label.setAttribute("font-family", "sans-serif"), t._$label.textContent = t._id, t._$dialog.style.opacity = "0", t._$dialog.style.border = "3px solid ".concat("#fe0000"), t._$dialog.style.background = "#fae5d7", t._$dialog.style.transition = "opacity .3s", t._$dialog.innerHTML = '\n\t\t\t<div style="font-family: sans-serif; font-size: 14px; padding: 10px;">\n\t\t\t\t<div style="display: flex; align-items: center;">\n\t\t\t\t\t<div style="white-space: nowrap; padding-right: 5px; ">\n\t\t\t\t\t\tタグ名\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tstyle="width: 120px;"\n\t\t\t\t\t\t\tvalue="'.concat(t._tag, '"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style="text-align: right; margin-top: 5px;">\n\t\t\t\t\t<button type="submit">\n\t\t\t\t\t\t登録\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type="button">\n\t\t\t\t\t\t消去\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'), t._moveStartMin = new $t, t._moveStartMax = new $t, t._handleTopLeft = new Ct, t._handleBottomRight = new Ct, t._$body.appendChild(t._$rect), t._$body.appendChild(t._$labelBg), t._$body.appendChild(t._$label), t.$el.appendChild(t._$body), t.$el.appendChild(t._handleTopLeft.$el), t.$el.appendChild(t._handleBottomRight.$el), document.body.appendChild(t._$dialog);
                var o = t._$dialog.querySelectorAll("button")[0],
                    s = t._$dialog.querySelectorAll("button")[1];
                return o.style.cursor = "pointer", s.style.cursor = "pointer", o.addEventListener("click", t._onApplyButtonClick), s.addEventListener("click", t._onClearButtonClick), document.addEventListener("keydown", t._onKeyDown), t._clickEventDispatcher = new Ot(document.body), t._clickEventDispatcher.addEventListener("click", t._onClick), t._bodyDragDispatcher = new wt(t._$body), t._bodyDragDispatcher.addEventListener("dragstart", t._onDragStart), t._bodyDragDispatcher.addEventListener("dragmove", t._onBodyDragMove), t._bodyDragDispatcher.addEventListener("dragend", t._onDragEnd), t._handleTopLeft.addEventListener("dragstart", t._onDragStart), t._handleTopLeft.addEventListener("dragmove", t._onTopLeftDragMove), t._handleTopLeft.addEventListener("dragend", t._onDragEnd), t._handleBottomRight.addEventListener("dragstart", t._onDragStart), t._handleBottomRight.addEventListener("dragmove", t._onBottomRightDragMove), t._handleBottomRight.addEventListener("dragend", t._onDragEnd), t.update(), t
            }
            return c()(n, [{
                key: "set",
                value: function(t, e, n, i, r) {
                    this._tag === t && this._x1 === e && this._y1 === n && this._x2 === i && this._y2 === r || (this._tag = t, this._x1 = e, this._y1 = n, this._x2 = i, this._y2 = r, this.update(), this.dispatchEvent({
                        type: "change"
                    }))
                }
            }, {
                key: "setBoundary",
                value: function(t, e, n, i) {
                    this._boundary.min.set(t, e), this._boundary.max.set(n, i)
                }
            }, {
                key: "update",
                value: function() {
                    var t = this._width,
                        e = this._height,
                        n = this._$dialog.querySelector("input");
                    n.value = this._tag, this.$el.setAttribute("transform", "translate( ".concat(this._x1, " ").concat(this._y1, " )")), this._$rect.setAttribute("width", "".concat(t)), this._$rect.setAttribute("height", "".concat(e)), this._handleBottomRight.position.set(t, e), document.body.style.cursor = this._isDragging ? "move" : "", this._$dialog.style.display = this._disableDialog ? "none" : "block", this._$dialog.style.visibility = this._isActive ? "visible" : "hidden", this._$dialog.style.pointerEvents = this._isActive ? "auto" : "none", this._$dialog.style.opacity = this._isActive ? "1" : "0", this._dialog.update(), this._$labelBg.style.fill = this._isActive ? "#fe0000" : "#30528f", this._$rect.style.fill = this._isActive ? "#fe0000" : "#30528f", this._$rect.style.stroke = this._isActive ? "#fe0000" : "#30528f", this._handleTopLeft.isActive = this._isActive, this._handleBottomRight.isActive = this._isActive;
                    var i = this._$dialog.querySelectorAll("button")[0],
                        r = this._$dialog.querySelectorAll("button")[1],
                        o = document.activeElement === n || document.activeElement === i || document.activeElement === r;
                    this._isActive && !o && setTimeout((function() {
                        n.focus(),
                            function(t) {
                                var e = t.value.length;
                                if (document.selection) {
                                    var n = document.selection.createRange();
                                    n.moveStart("character", -e), n.moveStart("character", e), n.moveEnd("character", 0), n.select()
                                } else(t.selectionStart || 0 === t.selectionStart) && (t.selectionStart = e, t.selectionEnd = e)
                            }(n)
                    }), 100)
                }
            }, {
                key: "destroy",
                value: function() {
                    if (!this._isDestroyed) {
                        this._isDestroyed = !0;
                        var t = this._$dialog.querySelector("input");
                        t.removeEventListener("input", this._onValueChange), t.removeEventListener("change", this._onValueChange), t.removeEventListener("blur", this._onValueChange), document.removeEventListener("click", this._onKeyDown), document.body.removeChild(this._$dialog), this._clickEventDispatcher.destroy(), this._bodyDragDispatcher.destroy(), this._handleTopLeft.destroy(), this._handleBottomRight.destroy(), this._dialog.destroy()
                    }
                }
            }, {
                key: "_handleClick",
                value: function(t) {
                    var e = !!t.target && (Dt(this._handleTopLeft.$el, t.target) || Dt(this._handleBottomRight.$el, t.target) ? this._isActive : !(!Dt(this._$dialog, t.target) && t.target !== this._$dialog) || !(!Dt(this.$el, t.target) && t.target !== this._$el) && !this._isActive);
                    this._isActive !== e && (this._isActive = e, this.dispatchEvent({
                        type: this._isActive ? "active" : "inactive"
                    })), this.update()
                }
            }, {
                key: "_handleApplyButtonClick",
                value: function() {
                    var t = this._$dialog.querySelector("input").value;
                    this._tag !== t && (this.tag = t)
                }
            }, {
                key: "_handleClearButtonClick",
                value: function() {
                    this.dispatchEvent({
                        type: "remove"
                    }), this.destroy()
                }
            }, {
                key: "_handleKeyDown",
                value: function(t) {
                    if (this._isActive) {
                        if (!("INPUT" === t.target.tagName) || 13 !== t.keyCode) return 27 === t.keyCode ? (this._isActive = !1, this.dispatchEvent("inactive"), void this.update()) : void(46 !== t.keyCode || this._handleClearButtonClick());
                        this._handleApplyButtonClick()
                    }
                }
            }, {
                key: "_handleDragStart",
                value: function() {
                    this._moveStartMin.set(this._x1, this._y1), this._moveStartMax.set(this._x2, this._y2), this.dispatchEvent({
                        type: "dragstart"
                    })
                }
            }, {
                key: "_handleDragEnd",
                value: function() {
                    this._isDragging = !1, this.dispatchEvent({
                        type: "dragend"
                    }), this.update()
                }
            }, {
                key: "_handleBodyDragMove",
                value: function(t) {
                    if (this._isActive) {
                        this._isDragging = !0;
                        var e = this._width,
                            n = this._height,
                            i = Math.round(t.accumulatedX / this._canvasScale),
                            r = Math.round(t.accumulatedY / this._canvasScale),
                            o = this._moveStartMin.x + i,
                            a = this._moveStartMin.y + r,
                            s = this._moveStartMax.x + i,
                            c = this._moveStartMax.y + r,
                            u = o <= this._boundary.min.x,
                            l = a <= this._boundary.min.y,
                            h = s >= this._boundary.max.x,
                            d = c >= this._boundary.max.y;
                        this._x1 = u ? 0 : h ? this._boundary.max.x - e : o, this._y1 = l ? 0 : d ? this._boundary.max.y - n : a, this._x2 = u ? e : h ? this._boundary.max.x : s, this._y2 = l ? n : d ? this._boundary.max.y : c, this.dispatchEvent({
                            type: "change"
                        }), this.update()
                    }
                }
            }, {
                key: "_handleTopLeftDragMove",
                value: function(t) {
                    if (this._isActive) {
                        this._isDragging = !0;
                        var e = Math.round(t.accumulatedX / this._canvasScale),
                            n = Math.round(t.accumulatedY / this._canvasScale),
                            i = Math.min(this._moveStartMin.x + e, this._x2 - 1),
                            r = Math.min(this._moveStartMin.y + n, this._y2 - 1);
                        this._x1 === i && this._y1 === r || (this._x1 = i, this._y1 = r, this.dispatchEvent({
                            type: "change"
                        }), this.update())
                    }
                }
            }, {
                key: "_handleBottomRightDragMove",
                value: function(t) {
                    if (this._isActive) {
                        this._isDragging = !0;
                        var e = Math.round(t.accumulatedX / this._canvasScale),
                            n = Math.round(t.accumulatedY / this._canvasScale),
                            i = Math.max(this._moveStartMax.x + e, this._x1 + 1),
                            r = Math.max(this._moveStartMax.y + n, this._y1 + 1);
                        this._x2 === i && this._y2 === r || (this._x2 = i, this._y2 = r, this.dispatchEvent({
                            type: "change"
                        }), this.update())
                    }
                }
            }, {
                key: "isActive",
                get: function() {
                    return this._isActive
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                },
                set: function(t) {
                    console.warn("id cannot be changed")
                }
            }, {
                key: "tag",
                get: function() {
                    return this._tag
                },
                set: function(t) {
                    this._tag !== t && (this._tag = t, this.update(), this.dispatchEvent({
                        type: "change"
                    }))
                }
            }, {
                key: "x1",
                get: function() {
                    return this._x1
                },
                set: function(t) {
                    this._x1 !== t && (this._x1 = t, this.update(), this.dispatchEvent({
                        type: "change"
                    }))
                }
            }, {
                key: "y1",
                get: function() {
                    return this._y1
                },
                set: function(t) {
                    this._y1 !== t && (this._y1 = t, this.update(), this.dispatchEvent({
                        type: "change"
                    }))
                }
            }, {
                key: "x2",
                get: function() {
                    return this._x2
                },
                set: function(t) {
                    this._x2 !== t && (this._x2 = t, this.update(), this.dispatchEvent({
                        type: "change"
                    }))
                }
            }, {
                key: "y2",
                get: function() {
                    return this._y2
                },
                set: function(t) {
                    this._y2 !== t && (this._y2 = t, this.update(), this.dispatchEvent({
                        type: "change"
                    }))
                }
            }, {
                key: "_width",
                get: function() {
                    return this._x2 - this._x1
                }
            }, {
                key: "_height",
                get: function() {
                    return this._y2 - this._y1
                }
            }, {
                key: "_canvasScale",
                get: function() {
                    var t = this.$el.ownerSVGElement,
                        e = t.viewBox.baseVal.width;
                    return t.width.baseVal.value / e
                }
            }]), n
        }(v);

        function Pt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = p()(t);
                if (e) {
                    var r = p()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return d()(this, n)
            }
        }
        var jt = function(t) {
            l()(n, t);
            var e = Pt(n);

            function n(t) {
                var i;
                return a()(this, n), (i = e.call(this))._$el = document.createElementNS(L, "rect"), i._x1 = 0, i._y1 = 0, i._x2 = 0, i._y2 = 0, i._$target = t, i._$svgRoot = t.ownerSVGElement, i._isDragging = !1, i._dragStartPoint = new $t, i._dragLastPoint = new $t, i._$el.style.fill = "#fe0000", i._$el.style.fillOpacity = "0.2", i._$el.style.stroke = "#fe0000", i._$svgRoot.appendChild(i._$el), i._onDragStart = i._handleDragStart.bind(b()(i)), i._onDragMove = i._handleDragMove.bind(b()(i)), i._onDragEnd = i._handleDragEnd.bind(b()(i)), i._$target.addEventListener("mousedown", i._onDragStart), i._$target.addEventListener("touchstart", i._onDragStart), i
            }
            return c()(n, [{
                key: "destroy",
                value: function() {
                    this._$target.removeEventListener("mousedown", this._onDragStart), this._$target.removeEventListener("touchstart", this._onDragStart), document.removeEventListener("mousemove", this._onDragMove), document.removeEventListener("touchmove", this._onDragMove, {
                        passive: !1
                    }), document.removeEventListener("mouseup", this._onDragEnd), document.removeEventListener("touchend", this._onDragEnd)
                }
            }, {
                key: "_projectPoint",
                value: function(t, e) {
                    var n = this._$target.ownerSVGElement.createSVGPoint();
                    n.x = t, n.y = e;
                    var i = n.matrixTransform(this._$target.getCTM().inverse());
                    return {
                        x: i.x,
                        y: i.y
                    }
                }
            }, {
                key: "_update",
                value: function() {
                    var t = this._projectPoint(this._dragStartPoint.x, this._dragStartPoint.y),
                        e = t.x,
                        n = t.y,
                        i = this._projectPoint(this._dragLastPoint.x, this._dragLastPoint.y),
                        r = i.x,
                        o = i.y;
                    this._x1 = Math.min(e, r), this._y1 = Math.min(n, o), this._x2 = Math.max(e, r), this._y2 = Math.max(n, o), this._$el.setAttribute("x", this._x1), this._$el.setAttribute("y", this._y1), this._$el.setAttribute("width", this._x2 - this._x1), this._$el.setAttribute("height", this._y2 - this._y1), this._$el.style.display = this._isDragging ? "inline" : "none"
                }
            }, {
                key: "_getRootOffset",
                value: function() {
                    var t = this._$svgRoot.getBoundingClientRect(),
                        e = window.getComputedStyle(this._$svgRoot),
                        n = parseFloat(e.getPropertyValue("border-top-width")),
                        i = parseFloat(e.getPropertyValue("border-left-width"));
                    return {
                        offsetLeft: t.left + i,
                        offsetTop: t.top + n
                    }
                }
            }, {
                key: "_handleDragStart",
                value: function(t) {
                    t.preventDefault(), document.removeEventListener("mousemove", this._onDragMove), document.removeEventListener("touchmove", this._onDragMove, {
                        passive: !1
                    }), document.removeEventListener("mouseup", this._onDragEnd), document.removeEventListener("touchend", this._onDragEnd);
                    var e = kt(t) ? t.touches[0] : t,
                        n = this._getRootOffset(),
                        i = n.offsetLeft,
                        r = n.offsetTop;
                    this._isDragging = !0, this._dragStartPoint.set(e.clientX - i, e.clientY - r), this._dragLastPoint.copy(this._dragStartPoint), document.addEventListener("mousemove", this._onDragMove), document.addEventListener("touchmove", this._onDragMove, {
                        passive: !1
                    }), document.addEventListener("mouseup", this._onDragEnd), document.addEventListener("touchend", this._onDragEnd)
                }
            }, {
                key: "_handleDragMove",
                value: function(t) {
                    t.preventDefault();
                    var e = kt(t) ? t.touches[0] : t,
                        n = this._getRootOffset(),
                        i = n.offsetLeft,
                        r = n.offsetTop;
                    this._dragLastPoint.set(e.clientX - i, e.clientY - r), this._update()
                }
            }, {
                key: "_handleDragEnd",
                value: function() {
                    document.removeEventListener("mousemove", this._onDragMove), document.removeEventListener("touchmove", this._onDragMove, {
                        passive: !1
                    }), document.removeEventListener("mouseup", this._onDragEnd), document.removeEventListener("touchend", this._onDragEnd), this._isDragging = !1, this._update(), this._x2 - this._x1 < 20 || this._y2 - this._y1 < 20 || this.dispatchEvent({
                        type: "select",
                        x1: Math.round(this._x1),
                        y1: Math.round(this._y1),
                        x2: Math.round(this._x2),
                        y2: Math.round(this._y2)
                    })
                }
            }]), n
        }(v);

        function Tt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = p()(t);
                if (e) {
                    var r = p()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return d()(this, n)
            }
        }
        var Xt = function(t) {
            l()(n, t);
            var e = Tt(n);

            function n(t) {
                var i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return a()(this, n), (i = e.call(this))._onProtListChange = i._handleProtListChange.bind(b()(i)), i._store = null, i._children = [], i._disableDialog = r.disableDialog || !1, i.$el = t, i._$htmlImg = new Image, i._$spacer = document.createElement("div"), i._$canvas = document.createElementNS(L, "svg"), i._$image = document.createElementNS(L, "image"), i.$el.style.position = "relative", i.$el.appendChild(i._$spacer), i.$el.appendChild(i._$canvas), i._$canvas.style.position = "absolute", i._$canvas.style.top = "0", i._$canvas.style.right = "0", i._$canvas.style.bottom = "0", i._$canvas.style.left = "0", i._$canvas.appendChild(i._$image), i._onChange = i._handleChange.bind(b()(i)), i._onRemove = i._handleRemove.bind(b()(i)), i._onImageLoad = i._handleImageLoad.bind(b()(i)), i._onActiveChange = i._handleActiveChange.bind(b()(i)), i._$htmlImg.addEventListener("load", i._onImageLoad), i._onRectSelect = i._handleRectSelect.bind(b()(i)), i.rectSelector = new jt(i._$image), i.rectSelector.addEventListener("select", i._onRectSelect), i
            }
            return c()(n, [{
                key: "addProt",
                value: function(t) {
                    var e = new It(t, {
                        disableDialog: this._disableDialog
                    });
                    e.setBoundary(0, 0, this._store.imgfile.width, this._store.imgfile.height), this._children.push(e), this._$canvas.appendChild(e.$el), e.addEventListener("change", this._onChange), e.addEventListener("remove", this._onRemove), e.addEventListener("active", this._onActiveChange), e.addEventListener("inactive", this._onActiveChange)
                }
            }, {
                key: "removeProt",
                value: function(t) {
                    var e = this._children.indexOf(t); - 1 != e && (t.removeEventListener("change", this._onChange), t.removeEventListener("remove", this._onRemove), t.removeEventListener("active", this._onActiveChange), t.removeEventListener("inactive", this._onActiveChange), this._$canvas.removeChild(t.$el), t.destroy(), this._children.splice(e, 1), this.dispatchEvent({
                        type: "change"
                    }))
                }
            }, {
                key: "clear",
                value: function() {
                    for (; this._children.length;) this.removeProt(this._children[0]);
                    this.dispatchEvent({
                        type: "change"
                    })
                }
            }, {
                key: "setImage",
                value: function(t) {
                    this._$htmlImg.src = t, this.dispatchEvent({
                        type: "change"
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.clear(), this.rectSelector.destroy(), this._$htmlImg.removeEventListener("load", this._onImageLoad), this.rectSelector.removeEventListener("select", this._onRectSelect), this.$el.removeChild(this._$canvas)
                }
            }, {
                key: "_findAvailableId",
                value: function() {
                    var t = this._store.protList.map((function(t) {
                        return t.id
                    }));
                    return t.sort((function(t, e) {
                        return t - e
                    })), 0 === t.length ? 1 : t[t.length - 1] + 1
                }
            }, {
                key: "_handleImageLoad",
                value: function() {
                    var t = this._$htmlImg.naturalWidth,
                        e = this._$htmlImg.naturalHeight,
                        n = e / t;
                    this._$spacer.style.paddingTop = "".concat(100 * n, "%");
                    var i = "0 0 ".concat(t, " ").concat(e);
                    this._$canvas.setAttribute("viewBox", i), this._$image.setAttribute("href", this._$htmlImg.src), this._$image.setAttribute("width", t.toString()), this._$image.setAttribute("height", e.toString()), this._children.forEach((function(t) {
                        return t.update()
                    }))
                }
            }, {
                key: "_handleActiveChange",
                value: function() {
                    var t = this;
                    this._children.forEach((function(e) {
                        e.isActive || t._$canvas.appendChild(e.$el)
                    })), this._children.filter((function(t) {
                        return t.isActive
                    })).forEach((function(e) {
                        t._$canvas.appendChild(e.$el)
                    }))
                }
            }, {
                key: "_handleProtListChange",
                value: function() {
                    var t = this;
                    this._store && (this._store.protList.forEach((function(e) {
                        var n = t._children.findIndex((function(t) {
                            return t.id === e.id
                        }));
                        if (-1 !== n) {
                            var i = t._children[n];
                            return i.set(e.tag, e.x1, e.y1, e.x2, e.y2), void i.setBoundary(0, 0, t._store.imgfile.width, t._store.imgfile.height)
                        }
                        t.addProt(e)
                    })), [].concat(this._children).reverse().forEach((function(e) {
                        -1 === t._store.protList.findIndex((function(t) {
                            return e.id === t.id
                        })) && t.removeProt(e)
                    })))
                }
            }, {
                key: "_handleChange",
                value: function(t) {
                    var e = t.target;
                    this.dispatchEvent({
                        type: "change",
                        id: e.id,
                        tag: e.tag,
                        x1: e.x1,
                        y1: e.y1,
                        x2: e.x2,
                        y2: e.y2
                    })
                }
            }, {
                key: "_handleRemove",
                value: function(t) {
                    var e = t.target;
                    this.dispatchEvent({
                        type: "remove",
                        id: e.id
                    })
                }
            }, {
                key: "_handleRectSelect",
                value: function(t) {
                    var e = this._findAvailableId();
                    this.dispatchEvent({
                        type: "add",
                        id: e,
                        tag: "",
                        x1: t.x1,
                        y1: t.y1,
                        x2: t.x2,
                        y2: t.y2
                    })
                }
            }, {
                key: "store",
                set: function(t) {
                    this._store && this._store.removeEventListener("change", this._onProtListChange), this._store = t, this.setImage(this._store.imgfile.url), this._handleProtListChange(), this._store.addEventListener("change", this._onProtListChange)
                }
            }]), n
        }(v);

        function Yt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, i = p()(t);
                if (e) {
                    var r = p()(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return d()(this, n)
            }
        }
        var Bt = function(t) {
            l()(n, t);
            var e = Yt(n);

            function n(t) {
                var i;
                return a()(this, n), (i = e.call(this))._onProtListChange = i._handleProtListChange.bind(b()(i)), i._onTagInput = i._handleTagInput.bind(b()(i)), i._onX1Input = i._handleX1Input.bind(b()(i)), i._onY1Input = i._handleY1Input.bind(b()(i)), i._onX2Input = i._handleX2Input.bind(b()(i)), i._onY2Input = i._handleY2Input.bind(b()(i)), i._store = null, i._rows = [], i.$el = t, i._$table = document.createElement("table"), i._$table.innerHTML = "\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>PLOT ID</th>\n\t\t\t\t<th>タグ名</th>\n\t\t\t\t<th>x1, y1</th>\n\t\t\t\t<th>x2, y2</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t", t.appendChild(i._$table), i
            }
            return c()(n, [{
                key: "addRow",
                value: function(t) {
                    var e = document.createElement("tr"),
                        n = this._store && this._store.disableTag;
                    this._rows.push({
                        data: t,
                        $el: e
                    }), e.innerHTML = "\n\t\t\t<th>\n\t\t\t\t".concat(t.id, "\n\t\t\t</th>\n\t\t\t<td ").concat(n && 'style="display: none;"', '>\n\t\t\t\t<input value="').concat(t.tag, '" data-index="').concat(this._rows.length - 1, '">\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type="number" value="').concat(t.x1, '" data-index="').concat(this._rows.length - 1, '">,\n\t\t\t\t<input type="number" value="').concat(t.y1, '" data-index="').concat(this._rows.length - 1, '">\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<input type="number" value="').concat(t.x2, '" data-index="').concat(this._rows.length - 1, '">,\n\t\t\t\t<input type="number" value="').concat(t.y2, '" data-index="').concat(this._rows.length - 1, '">\n\t\t\t</td>\n\t\t');
                    var i = e.querySelectorAll("input")[0],
                        r = e.querySelectorAll("input")[1],
                        o = e.querySelectorAll("input")[2],
                        a = e.querySelectorAll("input")[3],
                        s = e.querySelectorAll("input")[4];
                    i.addEventListener("input", this._onTagInput), i.addEventListener("blur", this._onTagInput), r.addEventListener("input", this._onX1Input), r.addEventListener("blur", this._onX1Input), o.addEventListener("input", this._onY1Input), o.addEventListener("blur", this._onY1Input), a.addEventListener("input", this._onX2Input), a.addEventListener("blur", this._onX2Input), s.addEventListener("input", this._onY2Input), s.addEventListener("blur", this._onY2Input), this._$table.appendChild(e)
                }
            }, {
                key: "updateRow",
                value: function(t) {
                    var e = this._store.protList.findIndex((function(e) {
                        return e.id === t.data.id
                    }));
                    if (-1 !== e) {
                        var n = this._store.protList[e],
                            i = t.$el.querySelectorAll("input")[0],
                            r = t.$el.querySelectorAll("input")[1],
                            o = t.$el.querySelectorAll("input")[2],
                            a = t.$el.querySelectorAll("input")[3],
                            s = t.$el.querySelectorAll("input")[4];
                        i.value = n.tag, r.value = n.x1, o.value = n.y1, a.value = n.x2, s.value = n.y2
                    } else this.removeRow(t)
                }
            }, {
                key: "removeRow",
                value: function(t) {
                    var e = this._rows.indexOf(t);
                    if (-1 !== e) {
                        var n = t.$el.querySelectorAll("input")[0],
                            i = t.$el.querySelectorAll("input")[1],
                            r = t.$el.querySelectorAll("input")[2],
                            o = t.$el.querySelectorAll("input")[3],
                            a = t.$el.querySelectorAll("input")[4];
                        n.removeEventListener("input", this._onTagInput), n.removeEventListener("blur", this._onTagInput), i.removeEventListener("input", this._onX1Input), i.removeEventListener("blur", this._onX1Input), r.removeEventListener("input", this._onY1Input), r.removeEventListener("blur", this._onY1Input), o.removeEventListener("input", this._onX2Input), o.removeEventListener("blur", this._onX2Input), a.removeEventListener("input", this._onY2Input), a.removeEventListener("blur", this._onY2Input), this._$table.removeChild(t.$el), this._rows.splice(e, 1)
                    }
                }
            }, {
                key: "sortRows",
                value: function() {
                    var t = this;
                    this._store.protList.some((function(e, n) {
                        return e.id !== t._rows[n].data.id
                    })) && this._store.protList.forEach((function(e) {
                        var n = t._rows.findIndex((function(t) {
                            return t.data.id === e.id
                        }));
                        if (-1 !== n) {
                            var i = t._rows[n].$el;
                            t._$table.appendChild(i)
                        }
                    }))
                }
            }, {
                key: "_handleTagInput",
                value: function(t) {
                    var e = t.target,
                        n = +e.getAttribute("data-index"),
                        i = this._store.protList[n];
                    this.dispatchEvent({
                        type: "input",
                        id: i.id,
                        tag: e.value,
                        x1: i.x1,
                        y1: i.y1,
                        x2: i.x2,
                        y2: i.y2
                    })
                }
            }, {
                key: "_handleX1Input",
                value: function(t) {
                    var e = t.target,
                        n = +e.getAttribute("data-index"),
                        i = this._store.protList[n],
                        r = _(0 | e.value) ? 0 | e.value : i.x1,
                        o = Math.max(Math.min(r, i.x2 - 1), 0);
                    (e.value = o) && (e.value = o), this.dispatchEvent({
                        type: "input",
                        id: i.id,
                        tag: i.tag,
                        x1: o,
                        y1: i.y1,
                        x2: i.x2,
                        y2: i.y2
                    })
                }
            }, {
                key: "_handleY1Input",
                value: function(t) {
                    var e = t.target,
                        n = +e.getAttribute("data-index"),
                        i = this._store.protList[n],
                        r = _(0 | e.value) ? 0 | e.value : i.y1,
                        o = Math.max(Math.min(r, i.y2 - 1), 0);
                    (e.value = o) && (e.value = o), this.dispatchEvent({
                        type: "input",
                        id: i.id,
                        tag: i.tag,
                        x1: i.x1,
                        y1: o,
                        x2: i.x2,
                        y2: i.y2
                    })
                }
            }, {
                key: "_handleX2Input",
                value: function(t) {
                    var e = t.target,
                        n = +e.getAttribute("data-index"),
                        i = this._store.protList[n],
                        r = _(0 | e.value) ? 0 | e.value : i.x2,
                        o = Math.max(r, i.x1 + 1);
                    (e.value = o) && (e.value = o), this.dispatchEvent({
                        type: "input",
                        id: i.id,
                        tag: i.tag,
                        x1: i.x1,
                        y1: i.y1,
                        x2: o,
                        y2: i.y2
                    })
                }
            }, {
                key: "_handleY2Input",
                value: function(t) {
                    var e = t.target,
                        n = +e.getAttribute("data-index"),
                        i = this._store.protList[n],
                        r = _(0 | e.value) ? 0 | e.value : i.y2,
                        o = Math.max(r, i.y1 + 1);
                    (e.value = o) && (e.value = o), this.dispatchEvent({
                        type: "input",
                        id: i.id,
                        tag: i.tag,
                        x1: i.x1,
                        y1: i.y1,
                        x2: i.x2,
                        y2: o
                    })
                }
            }, {
                key: "_handleProtListChange",
                value: function() {
                    var t = this;
                    this._store && (this._store.protList.forEach((function(e) {
                        var n = t._rows.findIndex((function(t) {
                            return t.data.id === e.id
                        }));
                        if (-1 === n) t.addRow(e);
                        else {
                            var i = t._rows[n];
                            t.updateRow(i)
                        }
                    })), [].concat(this._rows).reverse().forEach((function(e) {
                        -1 === t._store.protList.findIndex((function(t) {
                            return e.data.id === t.id
                        })) && t.removeRow(e)
                    })), this.sortRows())
                }
            }, {
                key: "store",
                set: function(t) {
                    this._store && this._store.removeEventListener("change", this._onProtListChange), this._store = t, this._$table.querySelector("thead").innerHTML = "\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>PLOT ID</th>\n\t\t\t\t<th ".concat(this._store.disableTag && 'style="display: none;"', ">タグ名</th>\n\t\t\t\t<th>x1, y1</th>\n\t\t\t\t<th>x2, y2</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t"), this._handleProtListChange(), this._store.addEventListener("change", this._onProtListChange)
                }
            }]), n
        }(v);
        e.default = {
            Store: y,
            App: E,
            ImageView: Xt,
            TableView: Bt
        }
    }]).default
}));