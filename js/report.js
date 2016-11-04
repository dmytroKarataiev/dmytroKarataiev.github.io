/**
 * Created by karataev on 10/30/16.
 */
!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i)return i(g, !0);
                if (f)return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]);
    return e
}({
    1: [function (a, b, c) {
        !function () {
            function a(a) {
                return a && (a.ownerDocument || a.document || a).documentElement
            }

            function c(a) {
                return a && (a.ownerDocument && a.ownerDocument.defaultView || a.document && a || a.defaultView)
            }

            function d(a, b) {
                return b > a ? -1 : a > b ? 1 : a >= b ? 0 : NaN
            }

            function e(a) {
                return null === a ? NaN : +a
            }

            function f(a) {
                return !isNaN(a)
            }

            function g(a) {
                return {
                    left: function (b, c, d, e) {
                        for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                            var f = d + e >>> 1;
                            a(b[f], c) < 0 ? d = f + 1 : e = f
                        }
                        return d
                    }, right: function (b, c, d, e) {
                        for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                            var f = d + e >>> 1;
                            a(b[f], c) > 0 ? e = f : d = f + 1
                        }
                        return d
                    }
                }
            }

            function h(a) {
                return a.length
            }

            function i(a) {
                for (var b = 1; a * b % 1;)b *= 10;
                return b
            }

            function j(a, b) {
                for (var c in b)Object.defineProperty(a.prototype, c, {value: b[c], enumerable: !1})
            }

            function k() {
                this._ = Object.create(null)
            }

            function l(a) {
                return (a += "") === vg || a[0] === wg ? wg + a : a
            }

            function m(a) {
                return (a += "")[0] === wg ? a.slice(1) : a
            }

            function n(a) {
                return l(a) in this._
            }

            function o(a) {
                return (a = l(a)) in this._ && delete this._[a]
            }

            function p() {
                var a = [];
                for (var b in this._)a.push(m(b));
                return a
            }

            function q() {
                var a = 0;
                for (var b in this._)++a;
                return a
            }

            function r() {
                for (var a in this._)return !1;
                return !0
            }

            function s() {
                this._ = Object.create(null)
            }

            function t(a) {
                return a
            }

            function u(a, b, c) {
                return function () {
                    var d = c.apply(b, arguments);
                    return d === b ? a : d
                }
            }

            function v(a, b) {
                if (b in a)return b;
                b = b.charAt(0).toUpperCase() + b.slice(1);
                for (var c = 0, d = xg.length; d > c; ++c) {
                    var e = xg[c] + b;
                    if (e in a)return e
                }
            }

            function w() {
            }

            function x() {
            }

            function y(a) {
                function b() {
                    for (var b, d = c, e = -1, f = d.length; ++e < f;)(b = d[e].on) && b.apply(this, arguments);
                    return a
                }

                var c = [], d = new k;
                return b.on = function (b, e) {
                    var f, g = d.get(b);
                    return arguments.length < 2 ? g && g.on : (g && (g.on = null, c = c.slice(0, f = c.indexOf(g)).concat(c.slice(f + 1)), d.remove(b)), e && c.push(d.set(b, {on: e})), a)
                }, b
            }

            function z() {
                ig.event.preventDefault()
            }

            function A() {
                for (var a, b = ig.event; a = b.sourceEvent;)b = a;
                return b
            }

            function B(a) {
                for (var b = new x, c = 0, d = arguments.length; ++c < d;)b[arguments[c]] = y(b);
                return b.of = function (c, d) {
                    return function (e) {
                        try {
                            var f = e.sourceEvent = ig.event;
                            e.target = a, ig.event = e, b[e.type].apply(c, d)
                        } finally {
                            ig.event = f
                        }
                    }
                }, b
            }

            function C(a) {
                return zg(a, Dg), a
            }

            function D(a) {
                return "function" == typeof a ? a : function () {
                    return Ag(a, this)
                }
            }

            function E(a) {
                return "function" == typeof a ? a : function () {
                    return Bg(a, this)
                }
            }

            function F(a, b) {
                function c() {
                    this.removeAttribute(a)
                }

                function d() {
                    this.removeAttributeNS(a.space, a.local)
                }

                function e() {
                    this.setAttribute(a, b)
                }

                function f() {
                    this.setAttributeNS(a.space, a.local, b)
                }

                function g() {
                    var c = b.apply(this, arguments);
                    null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
                }

                function h() {
                    var c = b.apply(this, arguments);
                    null == c ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
                }

                return a = ig.ns.qualify(a), null == b ? a.local ? d : c : "function" == typeof b ? a.local ? h : g : a.local ? f : e
            }

            function G(a) {
                return a.trim().replace(/\s+/g, " ")
            }

            function H(a) {
                return new RegExp("(?:^|\\s+)" + ig.requote(a) + "(?:\\s+|$)", "g")
            }

            function I(a) {
                return (a + "").trim().split(/^|\s+/)
            }

            function J(a, b) {
                function c() {
                    for (var c = -1; ++c < e;)a[c](this, b)
                }

                function d() {
                    for (var c = -1, d = b.apply(this, arguments); ++c < e;)a[c](this, d)
                }

                a = I(a).map(K);
                var e = a.length;
                return "function" == typeof b ? d : c
            }

            function K(a) {
                var b = H(a);
                return function (c, d) {
                    if (e = c.classList)return d ? e.add(a) : e.remove(a);
                    var e = c.getAttribute("class") || "";
                    d ? (b.lastIndex = 0, b.test(e) || c.setAttribute("class", G(e + " " + a))) : c.setAttribute("class", G(e.replace(b, " ")))
                }
            }

            function L(a, b, c) {
                function d() {
                    this.style.removeProperty(a)
                }

                function e() {
                    this.style.setProperty(a, b, c)
                }

                function f() {
                    var d = b.apply(this, arguments);
                    null == d ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
                }

                return null == b ? d : "function" == typeof b ? f : e
            }

            function M(a, b) {
                function c() {
                    delete this[a]
                }

                function d() {
                    this[a] = b
                }

                function e() {
                    var c = b.apply(this, arguments);
                    null == c ? delete this[a] : this[a] = c
                }

                return null == b ? c : "function" == typeof b ? e : d
            }

            function N(a) {
                function b() {
                    var b = this.ownerDocument, c = this.namespaceURI;
                    return c === Eg && b.documentElement.namespaceURI === Eg ? b.createElement(a) : b.createElementNS(c, a)
                }

                function c() {
                    return this.ownerDocument.createElementNS(a.space, a.local)
                }

                return "function" == typeof a ? a : (a = ig.ns.qualify(a)).local ? c : b
            }

            function O() {
                var a = this.parentNode;
                a && a.removeChild(this)
            }

            function P(a) {
                return {__data__: a}
            }

            function Q(a) {
                return function () {
                    return Cg(this, a)
                }
            }

            function R(a) {
                return arguments.length || (a = d), function (b, c) {
                    return b && c ? a(b.__data__, c.__data__) : !b - !c
                }
            }

            function S(a, b) {
                for (var c = 0, d = a.length; d > c; c++)for (var e, f = a[c], g = 0, h = f.length; h > g; g++)(e = f[g]) && b(e, g, c);
                return a
            }

            function T(a) {
                return zg(a, Gg), a
            }

            function U(a) {
                var b, c;
                return function (d, e, f) {
                    var g, h = a[f].update, i = h.length;
                    for (f != c && (c = f, b = 0), e >= b && (b = e + 1); !(g = h[b]) && ++b < i;);
                    return g
                }
            }

            function V(a, b, c) {
                function d() {
                    var b = this[g];
                    b && (this.removeEventListener(a, b, b.$), delete this[g])
                }

                function e() {
                    var e = i(b, kg(arguments));
                    d.call(this), this.addEventListener(a, this[g] = e, e.$ = c), e._ = b
                }

                function f() {
                    var b, c = new RegExp("^__on([^.]+)" + ig.requote(a) + "$");
                    for (var d in this)if (b = d.match(c)) {
                        var e = this[d];
                        this.removeEventListener(b[1], e, e.$), delete this[d]
                    }
                }

                var g = "__on" + a, h = a.indexOf("."), i = W;
                h > 0 && (a = a.slice(0, h));
                var j = Hg.get(a);
                return j && (a = j, i = X), h ? b ? e : d : b ? w : f
            }

            function W(a, b) {
                return function (c) {
                    var d = ig.event;
                    ig.event = c, b[0] = this.__data__;
                    try {
                        a.apply(this, b)
                    } finally {
                        ig.event = d
                    }
                }
            }

            function X(a, b) {
                var c = W(a, b);
                return function (a) {
                    var b = this, d = a.relatedTarget;
                    d && (d === b || 8 & d.compareDocumentPosition(b)) || c.call(b, a)
                }
            }

            function Y(b) {
                var d = ".dragsuppress-" + ++Jg, e = "click" + d, f = ig.select(c(b)).on("touchmove" + d, z).on("dragstart" + d, z).on("selectstart" + d, z);
                if (null == Ig && (Ig = "onselectstart" in b ? !1 : v(b.style, "userSelect")), Ig) {
                    var g = a(b).style, h = g[Ig];
                    g[Ig] = "none"
                }
                return function (a) {
                    if (f.on(d, null), Ig && (g[Ig] = h), a) {
                        var b = function () {
                            f.on(e, null)
                        };
                        f.on(e, function () {
                            z(), b()
                        }, !0), setTimeout(b, 0)
                    }
                }
            }

            function Z(a, b) {
                b.changedTouches && (b = b.changedTouches[0]);
                var d = a.ownerSVGElement || a;
                if (d.createSVGPoint) {
                    var e = d.createSVGPoint();
                    if (0 > Kg) {
                        var f = c(a);
                        if (f.scrollX || f.scrollY) {
                            d = ig.select("body").append("svg").style({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: "none"
                            }, "important");
                            var g = d[0][0].getScreenCTM();
                            Kg = !(g.f || g.e), d.remove()
                        }
                    }
                    return Kg ? (e.x = b.pageX, e.y = b.pageY) : (e.x = b.clientX, e.y = b.clientY), e = e.matrixTransform(a.getScreenCTM().inverse()), [e.x, e.y]
                }
                var h = a.getBoundingClientRect();
                return [b.clientX - h.left - a.clientLeft, b.clientY - h.top - a.clientTop]
            }

            function $() {
                return ig.event.changedTouches[0].identifier
            }

            function _(a) {
                return a > 0 ? 1 : 0 > a ? -1 : 0
            }

            function aa(a, b, c) {
                return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
            }

            function ba(a) {
                return a > 1 ? 0 : -1 > a ? Ng : Math.acos(a)
            }

            function ca(a) {
                return a > 1 ? Qg : -1 > a ? -Qg : Math.asin(a)
            }

            function da(a) {
                return ((a = Math.exp(a)) - 1 / a) / 2
            }

            function ea(a) {
                return ((a = Math.exp(a)) + 1 / a) / 2
            }

            function fa(a) {
                return ((a = Math.exp(2 * a)) - 1) / (a + 1)
            }

            function ga(a) {
                return (a = Math.sin(a / 2)) * a
            }

            function ha() {
            }

            function ia(a, b, c) {
                return this instanceof ia ? (this.h = +a, this.s = +b, void(this.l = +c)) : arguments.length < 2 ? a instanceof ia ? new ia(a.h, a.s, a.l) : wa("" + a, xa, ia) : new ia(a, b, c)
            }

            function ja(a, b, c) {
                function d(a) {
                    return a > 360 ? a -= 360 : 0 > a && (a += 360), 60 > a ? f + (g - f) * a / 60 : 180 > a ? g : 240 > a ? f + (g - f) * (240 - a) / 60 : f
                }

                function e(a) {
                    return Math.round(255 * d(a))
                }

                var f, g;
                return a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a, b = isNaN(b) ? 0 : 0 > b ? 0 : b > 1 ? 1 : b, c = 0 > c ? 0 : c > 1 ? 1 : c, g = .5 >= c ? c * (1 + b) : c + b - c * b, f = 2 * c - g, new sa(e(a + 120), e(a), e(a - 120))
            }

            function ka(a, b, c) {
                return this instanceof ka ? (this.h = +a, this.c = +b, void(this.l = +c)) : arguments.length < 2 ? a instanceof ka ? new ka(a.h, a.c, a.l) : a instanceof ma ? oa(a.l, a.a, a.b) : oa((a = ya((a = ig.rgb(a)).r, a.g, a.b)).l, a.a, a.b) : new ka(a, b, c)
            }

            function la(a, b, c) {
                return isNaN(a) && (a = 0), isNaN(b) && (b = 0), new ma(c, Math.cos(a *= Rg) * b, Math.sin(a) * b)
            }

            function ma(a, b, c) {
                return this instanceof ma ? (this.l = +a, this.a = +b, void(this.b = +c)) : arguments.length < 2 ? a instanceof ma ? new ma(a.l, a.a, a.b) : a instanceof ka ? la(a.h, a.c, a.l) : ya((a = sa(a)).r, a.g, a.b) : new ma(a, b, c)
            }

            function na(a, b, c) {
                var d = (a + 16) / 116, e = d + b / 500, f = d - c / 200;
                return e = pa(e) * ah, d = pa(d) * bh, f = pa(f) * ch, new sa(ra(3.2404542 * e - 1.5371385 * d - .4985314 * f), ra(-.969266 * e + 1.8760108 * d + .041556 * f), ra(.0556434 * e - .2040259 * d + 1.0572252 * f))
            }

            function oa(a, b, c) {
                return a > 0 ? new ka(Math.atan2(c, b) * Sg, Math.sqrt(b * b + c * c), a) : new ka(NaN, NaN, a)
            }

            function pa(a) {
                return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
            }

            function qa(a) {
                return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
            }

            function ra(a) {
                return Math.round(255 * (.00304 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
            }

            function sa(a, b, c) {
                return this instanceof sa ? (this.r = ~~a, this.g = ~~b, void(this.b = ~~c)) : arguments.length < 2 ? a instanceof sa ? new sa(a.r, a.g, a.b) : wa("" + a, sa, ja) : new sa(a, b, c)
            }

            function ta(a) {
                return new sa(a >> 16, a >> 8 & 255, 255 & a)
            }

            function ua(a) {
                return ta(a) + ""
            }

            function va(a) {
                return 16 > a ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
            }

            function wa(a, b, c) {
                var d, e, f, g = 0, h = 0, i = 0;
                if (d = /([a-z]+)\((.*)\)/.exec(a = a.toLowerCase()))switch (e = d[2].split(","), d[1]) {
                    case"hsl":
                        return c(parseFloat(e[0]), parseFloat(e[1]) / 100, parseFloat(e[2]) / 100);
                    case"rgb":
                        return b(Aa(e[0]), Aa(e[1]), Aa(e[2]))
                }
                return (f = fh.get(a)) ? b(f.r, f.g, f.b) : (null == a || "#" !== a.charAt(0) || isNaN(f = parseInt(a.slice(1), 16)) || (4 === a.length ? (g = (3840 & f) >> 4, g = g >> 4 | g, h = 240 & f, h = h >> 4 | h, i = 15 & f, i = i << 4 | i) : 7 === a.length && (g = (16711680 & f) >> 16, h = (65280 & f) >> 8, i = 255 & f)), b(g, h, i))
            }

            function xa(a, b, c) {
                var d, e, f = Math.min(a /= 255, b /= 255, c /= 255), g = Math.max(a, b, c), h = g - f, i = (g + f) / 2;
                return h ? (e = .5 > i ? h / (g + f) : h / (2 - g - f), d = a == g ? (b - c) / h + (c > b ? 6 : 0) : b == g ? (c - a) / h + 2 : (a - b) / h + 4, d *= 60) : (d = NaN, e = i > 0 && 1 > i ? 0 : d), new ia(d, e, i)
            }

            function ya(a, b, c) {
                a = za(a), b = za(b), c = za(c);
                var d = qa((.4124564 * a + .3575761 * b + .1804375 * c) / ah), e = qa((.2126729 * a + .7151522 * b + .072175 * c) / bh), f = qa((.0193339 * a + .119192 * b + .9503041 * c) / ch);
                return ma(116 * e - 16, 500 * (d - e), 200 * (e - f))
            }

            function za(a) {
                return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
            }

            function Aa(a) {
                var b = parseFloat(a);
                return "%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b
            }

            function Ba(a) {
                return "function" == typeof a ? a : function () {
                    return a
                }
            }

            function Ca(a) {
                return function (b, c, d) {
                    return 2 === arguments.length && "function" == typeof c && (d = c, c = null), Da(b, c, a, d)
                }
            }

            function Da(a, b, c, d) {
                function e() {
                    var a, b = i.status;
                    if (!b && Fa(i) || b >= 200 && 300 > b || 304 === b) {
                        try {
                            a = c.call(f, i)
                        } catch (d) {
                            return void g.error.call(f, d)
                        }
                        g.load.call(f, a)
                    } else g.error.call(f, i)
                }

                var f = {}, g = ig.dispatch("beforesend", "progress", "load", "error"), h = {}, i = new XMLHttpRequest, j = null;
                return !this.XDomainRequest || "withCredentials" in i || !/^(http(s)?:)?\/\//.test(a) || (i = new XDomainRequest), "onload" in i ? i.onload = i.onerror = e : i.onreadystatechange = function () {
                    i.readyState > 3 && e()
                }, i.onprogress = function (a) {
                    var b = ig.event;
                    ig.event = a;
                    try {
                        g.progress.call(f, i)
                    } finally {
                        ig.event = b
                    }
                }, f.header = function (a, b) {
                    return a = (a + "").toLowerCase(), arguments.length < 2 ? h[a] : (null == b ? delete h[a] : h[a] = b + "", f)
                }, f.mimeType = function (a) {
                    return arguments.length ? (b = null == a ? null : a + "", f) : b
                }, f.responseType = function (a) {
                    return arguments.length ? (j = a, f) : j
                }, f.response = function (a) {
                    return c = a, f
                }, ["get", "post"].forEach(function (a) {
                    f[a] = function () {
                        return f.send.apply(f, [a].concat(kg(arguments)))
                    }
                }), f.send = function (c, d, e) {
                    if (2 === arguments.length && "function" == typeof d && (e = d, d = null), i.open(c, a, !0), null == b || "accept" in h || (h.accept = b + ",*/*"), i.setRequestHeader)for (var k in h)i.setRequestHeader(k, h[k]);
                    return null != b && i.overrideMimeType && i.overrideMimeType(b), null != j && (i.responseType = j), null != e && f.on("error", e).on("load", function (a) {
                        e(null, a)
                    }), g.beforesend.call(f, i), i.send(null == d ? null : d), f
                }, f.abort = function () {
                    return i.abort(), f
                }, ig.rebind(f, g, "on"), null == d ? f : f.get(Ea(d))
            }

            function Ea(a) {
                return 1 === a.length ? function (b, c) {
                    a(null == b ? c : null)
                } : a
            }

            function Fa(a) {
                var b = a.responseType;
                return b && "text" !== b ? a.response : a.responseText
            }

            function Ga(a, b, c) {
                var d = arguments.length;
                2 > d && (b = 0), 3 > d && (c = Date.now());
                var e = c + b, f = {c: a, t: e, n: null};
                return hh ? hh.n = f : gh = f, hh = f, ih || (jh = clearTimeout(jh), ih = 1, kh(Ha)), f
            }

            function Ha() {
                var a = Ia(), b = Ja() - a;
                b > 24 ? (isFinite(b) && (clearTimeout(jh), jh = setTimeout(Ha, b)), ih = 0) : (ih = 1, kh(Ha))
            }

            function Ia() {
                for (var a = Date.now(), b = gh; b;)a >= b.t && b.c(a - b.t) && (b.c = null), b = b.n;
                return a
            }

            function Ja() {
                for (var a, b = gh, c = 1 / 0; b;)b.c ? (b.t < c && (c = b.t), b = (a = b).n) : b = a ? a.n = b.n : gh = b.n;
                return hh = a, c
            }

            function Ka(a, b) {
                return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
            }

            function La(a, b) {
                var c = Math.pow(10, 3 * ug(8 - b));
                return {
                    scale: b > 8 ? function (a) {
                        return a / c
                    } : function (a) {
                        return a * c
                    }, symbol: a
                }
            }

            function Ma(a) {
                var b = a.decimal, c = a.thousands, d = a.grouping, e = a.currency, f = d && c ? function (a, b) {
                    for (var e = a.length, f = [], g = 0, h = d[0], i = 0; e > 0 && h > 0 && (i + h + 1 > b && (h = Math.max(1, b - i)), f.push(a.substring(e -= h, e + h)), !((i += h + 1) > b));)h = d[g = (g + 1) % d.length];
                    return f.reverse().join(c)
                } : t;
                return function (a) {
                    var c = mh.exec(a), d = c[1] || " ", g = c[2] || ">", h = c[3] || "-", i = c[4] || "", j = c[5], k = +c[6], l = c[7], m = c[8], n = c[9], o = 1, p = "", q = "", r = !1, s = !0;
                    switch (m && (m = +m.substring(1)), (j || "0" === d && "=" === g) && (j = d = "0", g = "="), n) {
                        case"n":
                            l = !0, n = "g";
                            break;
                        case"%":
                            o = 100, q = "%", n = "f";
                            break;
                        case"p":
                            o = 100, q = "%", n = "r";
                            break;
                        case"b":
                        case"o":
                        case"x":
                        case"X":
                            "#" === i && (p = "0" + n.toLowerCase());
                        case"c":
                            s = !1;
                        case"d":
                            r = !0, m = 0;
                            break;
                        case"s":
                            o = -1, n = "r"
                    }
                    "$" === i && (p = e[0], q = e[1]), "r" != n || m || (n = "g"), null != m && ("g" == n ? m = Math.max(1, Math.min(21, m)) : ("e" == n || "f" == n) && (m = Math.max(0, Math.min(20, m)))), n = nh.get(n) || Na;
                    var t = j && l;
                    return function (a) {
                        var c = q;
                        if (r && a % 1)return "";
                        var e = 0 > a || 0 === a && 0 > 1 / a ? (a = -a, "-") : "-" === h ? "" : h;
                        if (0 > o) {
                            var i = ig.formatPrefix(a, m);
                            a = i.scale(a), c = i.symbol + q
                        } else a *= o;
                        a = n(a, m);
                        var u, v, w = a.lastIndexOf(".");
                        if (0 > w) {
                            var x = s ? a.lastIndexOf("e") : -1;
                            0 > x ? (u = a, v = "") : (u = a.substring(0, x), v = a.substring(x))
                        } else u = a.substring(0, w), v = b + a.substring(w + 1);
                        !j && l && (u = f(u, 1 / 0));
                        var y = p.length + u.length + v.length + (t ? 0 : e.length), z = k > y ? new Array(y = k - y + 1).join(d) : "";
                        return t && (u = f(z + u, z.length ? k - v.length : 1 / 0)), e += p, a = u + v, ("<" === g ? e + a + z : ">" === g ? z + e + a : "^" === g ? z.substring(0, y >>= 1) + e + a + z.substring(y) : e + (t ? a : z + a)) + c
                    }
                }
            }

            function Na(a) {
                return a + ""
            }

            function Oa() {
                this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
            }

            function Pa(a, b, c) {
                function d(b) {
                    var c = a(b), d = f(c, 1);
                    return d - b > b - c ? c : d
                }

                function e(c) {
                    return b(c = a(new ph(c - 1)), 1), c
                }

                function f(a, c) {
                    return b(a = new ph(+a), c), a
                }

                function g(a, d, f) {
                    var g = e(a), h = [];
                    if (f > 1)for (; d > g;)c(g) % f || h.push(new Date(+g)), b(g, 1); else for (; d > g;)h.push(new Date(+g)), b(g, 1);
                    return h
                }

                function h(a, b, c) {
                    try {
                        ph = Oa;
                        var d = new Oa;
                        return d._ = a, g(d, b, c)
                    } finally {
                        ph = Date
                    }
                }

                a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
                var i = a.utc = Qa(a);
                return i.floor = i, i.round = Qa(d), i.ceil = Qa(e), i.offset = Qa(f), i.range = h, a
            }

            function Qa(a) {
                return function (b, c) {
                    try {
                        ph = Oa;
                        var d = new Oa;
                        return d._ = b, a(d, c)._
                    } finally {
                        ph = Date
                    }
                }
            }

            function Ra(a) {
                function b(a) {
                    function b(b) {
                        for (var c, e, f, g = [], h = -1, i = 0; ++h < d;)37 === a.charCodeAt(h) && (g.push(a.slice(i, h)), null != (e = rh[c = a.charAt(++h)]) && (c = a.charAt(++h)), (f = C[c]) && (c = f(b, null == e ? "e" === c ? " " : "0" : e)), g.push(c), i = h + 1);
                        return g.push(a.slice(i, h)), g.join("")
                    }

                    var d = a.length;
                    return b.parse = function (b) {
                        var d = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null}, e = c(d, a, b, 0);
                        if (e != b.length)return null;
                        "p" in d && (d.H = d.H % 12 + 12 * d.p);
                        var f = null != d.Z && ph !== Oa, g = new (f ? Oa : ph);
                        return "j" in d ? g.setFullYear(d.y, 0, d.j) : "W" in d || "U" in d ? ("w" in d || (d.w = "W" in d ? 1 : 0), g.setFullYear(d.y, 0, 1), g.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + 7 * d.W - (g.getDay() + 5) % 7 : d.w + 7 * d.U - (g.getDay() + 6) % 7)) : g.setFullYear(d.y, d.m, d.d), g.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L), f ? g._ : g
                    }, b.toString = function () {
                        return a
                    }, b
                }

                function c(a, b, c, d) {
                    for (var e, f, g, h = 0, i = b.length, j = c.length; i > h;) {
                        if (d >= j)return -1;
                        if (e = b.charCodeAt(h++), 37 === e) {
                            if (g = b.charAt(h++), f = D[g in rh ? b.charAt(h++) : g], !f || (d = f(a, c, d)) < 0)return -1
                        } else if (e != c.charCodeAt(d++))return -1
                    }
                    return d
                }

                function d(a, b, c) {
                    w.lastIndex = 0;
                    var d = w.exec(b.slice(c));
                    return d ? (a.w = x.get(d[0].toLowerCase()), c + d[0].length) : -1
                }

                function e(a, b, c) {
                    u.lastIndex = 0;
                    var d = u.exec(b.slice(c));
                    return d ? (a.w = v.get(d[0].toLowerCase()), c + d[0].length) : -1
                }

                function f(a, b, c) {
                    A.lastIndex = 0;
                    var d = A.exec(b.slice(c));
                    return d ? (a.m = B.get(d[0].toLowerCase()), c + d[0].length) : -1
                }

                function g(a, b, c) {
                    y.lastIndex = 0;
                    var d = y.exec(b.slice(c));
                    return d ? (a.m = z.get(d[0].toLowerCase()), c + d[0].length) : -1
                }

                function h(a, b, d) {
                    return c(a, C.c.toString(), b, d)
                }

                function i(a, b, d) {
                    return c(a, C.x.toString(), b, d)
                }

                function j(a, b, d) {
                    return c(a, C.X.toString(), b, d)
                }

                function k(a, b, c) {
                    var d = t.get(b.slice(c, c += 2).toLowerCase());
                    return null == d ? -1 : (a.p = d, c)
                }

                var l = a.dateTime, m = a.date, n = a.time, o = a.periods, p = a.days, q = a.shortDays, r = a.months, s = a.shortMonths;
                b.utc = function (a) {
                    function c(a) {
                        try {
                            ph = Oa;
                            var b = new ph;
                            return b._ = a, d(b)
                        } finally {
                            ph = Date
                        }
                    }

                    var d = b(a);
                    return c.parse = function (a) {
                        try {
                            ph = Oa;
                            var b = d.parse(a);
                            return b && b._
                        } finally {
                            ph = Date
                        }
                    }, c.toString = d.toString, c
                }, b.multi = b.utc.multi = jb;
                var t = ig.map(), u = Ta(p), v = Ua(p), w = Ta(q), x = Ua(q), y = Ta(r), z = Ua(r), A = Ta(s), B = Ua(s);
                o.forEach(function (a, b) {
                    t.set(a.toLowerCase(), b)
                });
                var C = {
                    a: function (a) {
                        return q[a.getDay()]
                    }, A: function (a) {
                        return p[a.getDay()]
                    }, b: function (a) {
                        return s[a.getMonth()]
                    }, B: function (a) {
                        return r[a.getMonth()]
                    }, c: b(l), d: function (a, b) {
                        return Sa(a.getDate(), b, 2)
                    }, e: function (a, b) {
                        return Sa(a.getDate(), b, 2)
                    }, H: function (a, b) {
                        return Sa(a.getHours(), b, 2)
                    }, I: function (a, b) {
                        return Sa(a.getHours() % 12 || 12, b, 2)
                    }, j: function (a, b) {
                        return Sa(1 + oh.dayOfYear(a), b, 3)
                    }, L: function (a, b) {
                        return Sa(a.getMilliseconds(), b, 3)
                    }, m: function (a, b) {
                        return Sa(a.getMonth() + 1, b, 2)
                    }, M: function (a, b) {
                        return Sa(a.getMinutes(), b, 2)
                    }, p: function (a) {
                        return o[+(a.getHours() >= 12)]
                    }, S: function (a, b) {
                        return Sa(a.getSeconds(), b, 2)
                    }, U: function (a, b) {
                        return Sa(oh.sundayOfYear(a), b, 2)
                    }, w: function (a) {
                        return a.getDay()
                    }, W: function (a, b) {
                        return Sa(oh.mondayOfYear(a), b, 2)
                    }, x: b(m), X: b(n), y: function (a, b) {
                        return Sa(a.getFullYear() % 100, b, 2)
                    }, Y: function (a, b) {
                        return Sa(a.getFullYear() % 1e4, b, 4)
                    }, Z: hb, "%": function () {
                        return "%"
                    }
                }, D = {
                    a: d,
                    A: e,
                    b: f,
                    B: g,
                    c: h,
                    d: bb,
                    e: bb,
                    H: db,
                    I: db,
                    j: cb,
                    L: gb,
                    m: ab,
                    M: eb,
                    p: k,
                    S: fb,
                    U: Wa,
                    w: Va,
                    W: Xa,
                    x: i,
                    X: j,
                    y: Za,
                    Y: Ya,
                    Z: $a,
                    "%": ib
                };
                return b
            }

            function Sa(a, b, c) {
                var d = 0 > a ? "-" : "", e = (d ? -a : a) + "", f = e.length;
                return d + (c > f ? new Array(c - f + 1).join(b) + e : e)
            }

            function Ta(a) {
                return new RegExp("^(?:" + a.map(ig.requote).join("|") + ")", "i")
            }

            function Ua(a) {
                for (var b = new k, c = -1, d = a.length; ++c < d;)b.set(a[c].toLowerCase(), c);
                return b
            }

            function Va(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 1));
                return d ? (a.w = +d[0], c + d[0].length) : -1
            }

            function Wa(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c));
                return d ? (a.U = +d[0], c + d[0].length) : -1
            }

            function Xa(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c));
                return d ? (a.W = +d[0], c + d[0].length) : -1
            }

            function Ya(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 4));
                return d ? (a.y = +d[0], c + d[0].length) : -1
            }

            function Za(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 2));
                return d ? (a.y = _a(+d[0]), c + d[0].length) : -1
            }

            function $a(a, b, c) {
                return /^[+-]\d{4}$/.test(b = b.slice(c, c + 5)) ? (a.Z = -b, c + 5) : -1
            }

            function _a(a) {
                return a + (a > 68 ? 1900 : 2e3)
            }

            function ab(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 2));
                return d ? (a.m = d[0] - 1, c + d[0].length) : -1
            }

            function bb(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 2));
                return d ? (a.d = +d[0], c + d[0].length) : -1
            }

            function cb(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 3));
                return d ? (a.j = +d[0], c + d[0].length) : -1
            }

            function db(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 2));
                return d ? (a.H = +d[0], c + d[0].length) : -1
            }

            function eb(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 2));
                return d ? (a.M = +d[0], c + d[0].length) : -1
            }

            function fb(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 2));
                return d ? (a.S = +d[0], c + d[0].length) : -1
            }

            function gb(a, b, c) {
                sh.lastIndex = 0;
                var d = sh.exec(b.slice(c, c + 3));
                return d ? (a.L = +d[0], c + d[0].length) : -1
            }

            function hb(a) {
                var b = a.getTimezoneOffset(), c = b > 0 ? "-" : "+", d = ug(b) / 60 | 0, e = ug(b) % 60;
                return c + Sa(d, "0", 2) + Sa(e, "0", 2)
            }

            function ib(a, b, c) {
                th.lastIndex = 0;
                var d = th.exec(b.slice(c, c + 1));
                return d ? c + d[0].length : -1
            }

            function jb(a) {
                for (var b = a.length, c = -1; ++c < b;)a[c][0] = this(a[c][0]);
                return function (b) {
                    for (var c = 0, d = a[c]; !d[1](b);)d = a[++c];
                    return d[0](b)
                }
            }

            function kb() {
            }

            function lb(a, b, c) {
                var d = c.s = a + b, e = d - a, f = d - e;
                c.t = a - f + (b - e)
            }

            function mb(a, b) {
                a && xh.hasOwnProperty(a.type) && xh[a.type](a, b)
            }

            function nb(a, b, c) {
                var d, e = -1, f = a.length - c;
                for (b.lineStart(); ++e < f;)d = a[e], b.point(d[0], d[1], d[2]);
                b.lineEnd()
            }

            function ob(a, b) {
                var c = -1, d = a.length;
                for (b.polygonStart(); ++c < d;)nb(a[c], b, 1);
                b.polygonEnd()
            }

            function pb() {
                function a(a, b) {
                    a *= Rg, b = b * Rg / 2 + Ng / 4;
                    var c = a - d, g = c >= 0 ? 1 : -1, h = g * c, i = Math.cos(b), j = Math.sin(b), k = f * j, l = e * i + k * Math.cos(h), m = k * g * Math.sin(h);
                    zh.add(Math.atan2(m, l)), d = a, e = i, f = j
                }

                var b, c, d, e, f;
                Ah.point = function (g, h) {
                    Ah.point = a, d = (b = g) * Rg, e = Math.cos(h = (c = h) * Rg / 2 + Ng / 4), f = Math.sin(h)
                }, Ah.lineEnd = function () {
                    a(b, c)
                }
            }

            function qb(a) {
                var b = a[0], c = a[1], d = Math.cos(c);
                return [d * Math.cos(b), d * Math.sin(b), Math.sin(c)]
            }

            function rb(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
            }

            function sb(a, b) {
                return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
            }

            function tb(a, b) {
                a[0] += b[0], a[1] += b[1], a[2] += b[2]
            }

            function ub(a, b) {
                return [a[0] * b, a[1] * b, a[2] * b]
            }

            function vb(a) {
                var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
                a[0] /= b, a[1] /= b, a[2] /= b
            }

            function wb(a) {
                return [Math.atan2(a[1], a[0]), ca(a[2])]
            }

            function xb(a, b) {
                return ug(a[0] - b[0]) < Lg && ug(a[1] - b[1]) < Lg
            }

            function yb(a, b) {
                a *= Rg;
                var c = Math.cos(b *= Rg);
                zb(c * Math.cos(a), c * Math.sin(a), Math.sin(b))
            }

            function zb(a, b, c) {
                ++Bh, Dh += (a - Dh) / Bh, Eh += (b - Eh) / Bh, Fh += (c - Fh) / Bh
            }

            function Ab() {
                function a(a, e) {
                    a *= Rg;
                    var f = Math.cos(e *= Rg), g = f * Math.cos(a), h = f * Math.sin(a), i = Math.sin(e), j = Math.atan2(Math.sqrt((j = c * i - d * h) * j + (j = d * g - b * i) * j + (j = b * h - c * g) * j), b * g + c * h + d * i);
                    Ch += j, Gh += j * (b + (b = g)), Hh += j * (c + (c = h)), Ih += j * (d + (d = i)), zb(b, c, d)
                }

                var b, c, d;
                Mh.point = function (e, f) {
                    e *= Rg;
                    var g = Math.cos(f *= Rg);
                    b = g * Math.cos(e), c = g * Math.sin(e), d = Math.sin(f), Mh.point = a, zb(b, c, d)
                }
            }

            function Bb() {
                Mh.point = yb
            }

            function Cb() {
                function a(a, b) {
                    a *= Rg;
                    var c = Math.cos(b *= Rg), g = c * Math.cos(a), h = c * Math.sin(a), i = Math.sin(b), j = e * i - f * h, k = f * g - d * i, l = d * h - e * g, m = Math.sqrt(j * j + k * k + l * l), n = d * g + e * h + f * i, o = m && -ba(n) / m, p = Math.atan2(m, n);
                    Jh += o * j, Kh += o * k, Lh += o * l, Ch += p, Gh += p * (d + (d = g)), Hh += p * (e + (e = h)), Ih += p * (f + (f = i)), zb(d, e, f)
                }

                var b, c, d, e, f;
                Mh.point = function (g, h) {
                    b = g, c = h, Mh.point = a, g *= Rg;
                    var i = Math.cos(h *= Rg);
                    d = i * Math.cos(g), e = i * Math.sin(g), f = Math.sin(h), zb(d, e, f)
                }, Mh.lineEnd = function () {
                    a(b, c), Mh.lineEnd = Bb, Mh.point = yb
                }
            }

            function Db(a, b) {
                function c(c, d) {
                    return c = a(c, d), b(c[0], c[1])
                }

                return a.invert && b.invert && (c.invert = function (c, d) {
                    return c = b.invert(c, d), c && a.invert(c[0], c[1])
                }), c
            }

            function Eb() {
                return !0
            }

            function Fb(a, b, c, d, e) {
                var f = [], g = [];
                if (a.forEach(function (a) {
                        if (!((b = a.length - 1) <= 0)) {
                            var b, c = a[0], d = a[b];
                            if (xb(c, d)) {
                                e.lineStart();
                                for (var h = 0; b > h; ++h)e.point((c = a[h])[0], c[1]);
                                return void e.lineEnd()
                            }
                            var i = new Hb(c, a, null, !0), j = new Hb(c, null, i, !1);
                            i.o = j, f.push(i), g.push(j), i = new Hb(d, a, null, !1), j = new Hb(d, null, i, !0), i.o = j, f.push(i), g.push(j)
                        }
                    }), g.sort(b), Gb(f), Gb(g), f.length) {
                    for (var h = 0, i = c, j = g.length; j > h; ++h)g[h].e = i = !i;
                    for (var k, l, m = f[0]; ;) {
                        for (var n = m, o = !0; n.v;)if ((n = n.n) === m)return;
                        k = n.z, e.lineStart();
                        do {
                            if (n.v = n.o.v = !0, n.e) {
                                if (o)for (var h = 0, j = k.length; j > h; ++h)e.point((l = k[h])[0], l[1]); else d(n.x, n.n.x, 1, e);
                                n = n.n
                            } else {
                                if (o) {
                                    k = n.p.z;
                                    for (var h = k.length - 1; h >= 0; --h)e.point((l = k[h])[0], l[1])
                                } else d(n.x, n.p.x, -1, e);
                                n = n.p
                            }
                            n = n.o, k = n.z, o = !o
                        } while (!n.v);
                        e.lineEnd()
                    }
                }
            }

            function Gb(a) {
                if (b = a.length) {
                    for (var b, c, d = 0, e = a[0]; ++d < b;)e.n = c = a[d], c.p = e, e = c;
                    e.n = c = a[0], c.p = e
                }
            }

            function Hb(a, b, c, d) {
                this.x = a, this.z = b, this.o = c, this.e = d, this.v = !1, this.n = this.p = null
            }

            function Ib(a, b, c, d) {
                return function (e, f) {
                    function g(b, c) {
                        var d = e(b, c);
                        a(b = d[0], c = d[1]) && f.point(b, c)
                    }

                    function h(a, b) {
                        var c = e(a, b);
                        q.point(c[0], c[1])
                    }

                    function i() {
                        s.point = h, q.lineStart()
                    }

                    function j() {
                        s.point = g, q.lineEnd()
                    }

                    function k(a, b) {
                        p.push([a, b]);
                        var c = e(a, b);
                        u.point(c[0], c[1])
                    }

                    function l() {
                        u.lineStart(), p = []
                    }

                    function m() {
                        k(p[0][0], p[0][1]), u.lineEnd();
                        var a, b = u.clean(), c = t.buffer(), d = c.length;
                        if (p.pop(), o.push(p), p = null, d)if (1 & b) {
                            a = c[0];
                            var e, d = a.length - 1, g = -1;
                            if (d > 0) {
                                for (v || (f.polygonStart(), v = !0), f.lineStart(); ++g < d;)f.point((e = a[g])[0], e[1]);
                                f.lineEnd()
                            }
                        } else d > 1 && 2 & b && c.push(c.pop().concat(c.shift())), n.push(c.filter(Jb))
                    }

                    var n, o, p, q = b(f), r = e.invert(d[0], d[1]), s = {
                        point: g,
                        lineStart: i,
                        lineEnd: j,
                        polygonStart: function () {
                            s.point = k, s.lineStart = l, s.lineEnd = m, n = [], o = []
                        },
                        polygonEnd: function () {
                            s.point = g, s.lineStart = i, s.lineEnd = j, n = ig.merge(n);
                            var a = Pb(r, o);
                            n.length ? (v || (f.polygonStart(), v = !0), Fb(n, Lb, a, c, f)) : a && (v || (f.polygonStart(), v = !0), f.lineStart(), c(null, null, 1, f), f.lineEnd()), v && (f.polygonEnd(), v = !1), n = o = null
                        },
                        sphere: function () {
                            f.polygonStart(), f.lineStart(), c(null, null, 1, f), f.lineEnd(), f.polygonEnd()
                        }
                    }, t = Kb(), u = b(t), v = !1;
                    return s
                }
            }

            function Jb(a) {
                return a.length > 1
            }

            function Kb() {
                var a, b = [];
                return {
                    lineStart: function () {
                        b.push(a = [])
                    }, point: function (b, c) {
                        a.push([b, c])
                    }, lineEnd: w, buffer: function () {
                        var c = b;
                        return b = [], a = null, c
                    }, rejoin: function () {
                        b.length > 1 && b.push(b.pop().concat(b.shift()))
                    }
                }
            }

            function Lb(a, b) {
                return ((a = a.x)[0] < 0 ? a[1] - Qg - Lg : Qg - a[1]) - ((b = b.x)[0] < 0 ? b[1] - Qg - Lg : Qg - b[1])
            }

            function Mb(a) {
                var b, c = NaN, d = NaN, e = NaN;
                return {
                    lineStart: function () {
                        a.lineStart(), b = 1
                    }, point: function (f, g) {
                        var h = f > 0 ? Ng : -Ng, i = ug(f - c);
                        ug(i - Ng) < Lg ? (a.point(c, d = (d + g) / 2 > 0 ? Qg : -Qg), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), a.point(f, d), b = 0) : e !== h && i >= Ng && (ug(c - e) < Lg && (c -= e * Lg), ug(f - h) < Lg && (f -= h * Lg), d = Nb(c, d, f, g), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), b = 0), a.point(c = f, d = g), e = h
                    }, lineEnd: function () {
                        a.lineEnd(), c = d = NaN
                    }, clean: function () {
                        return 2 - b
                    }
                }
            }

            function Nb(a, b, c, d) {
                var e, f, g = Math.sin(a - c);
                return ug(g) > Lg ? Math.atan((Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) - Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) / (e * f * g)) : (b + d) / 2
            }

            function Ob(a, b, c, d) {
                var e;
                if (null == a)e = c * Qg, d.point(-Ng, e), d.point(0, e), d.point(Ng, e), d.point(Ng, 0), d.point(Ng, -e), d.point(0, -e), d.point(-Ng, -e), d.point(-Ng, 0), d.point(-Ng, e); else if (ug(a[0] - b[0]) > Lg) {
                    var f = a[0] < b[0] ? Ng : -Ng;
                    e = c * f / 2, d.point(-f, e), d.point(0, e), d.point(f, e)
                } else d.point(b[0], b[1])
            }

            function Pb(a, b) {
                var c = a[0], d = a[1], e = [Math.sin(c), -Math.cos(c), 0], f = 0, g = 0;
                zh.reset();
                for (var h = 0, i = b.length; i > h; ++h) {
                    var j = b[h], k = j.length;
                    if (k)for (var l = j[0], m = l[0], n = l[1] / 2 + Ng / 4, o = Math.sin(n), p = Math.cos(n), q = 1; ;) {
                        q === k && (q = 0), a = j[q];
                        var r = a[0], s = a[1] / 2 + Ng / 4, t = Math.sin(s), u = Math.cos(s), v = r - m, w = v >= 0 ? 1 : -1, x = w * v, y = x > Ng, z = o * t;
                        if (zh.add(Math.atan2(z * w * Math.sin(x), p * u + z * Math.cos(x))), f += y ? v + w * Og : v, y ^ m >= c ^ r >= c) {
                            var A = sb(qb(l), qb(a));
                            vb(A);
                            var B = sb(e, A);
                            vb(B);
                            var C = (y ^ v >= 0 ? -1 : 1) * ca(B[2]);
                            (d > C || d === C && (A[0] || A[1])) && (g += y ^ v >= 0 ? 1 : -1)
                        }
                        if (!q++)break;
                        m = r, o = t, p = u, l = a
                    }
                }
                return (-Lg > f || Lg > f && -Lg > zh) ^ 1 & g
            }

            function Qb(a) {
                function b(a, b) {
                    return Math.cos(a) * Math.cos(b) > f
                }

                function c(a) {
                    var c, f, i, j, k;
                    return {
                        lineStart: function () {
                            j = i = !1, k = 1
                        }, point: function (l, m) {
                            var n, o = [l, m], p = b(l, m), q = g ? p ? 0 : e(l, m) : p ? e(l + (0 > l ? Ng : -Ng), m) : 0;
                            if (!c && (j = i = p) && a.lineStart(), p !== i && (n = d(c, o), (xb(c, n) || xb(o, n)) && (o[0] += Lg, o[1] += Lg, p = b(o[0], o[1]))), p !== i)k = 0, p ? (a.lineStart(), n = d(o, c), a.point(n[0], n[1])) : (n = d(c, o), a.point(n[0], n[1]), a.lineEnd()), c = n; else if (h && c && g ^ p) {
                                var r;
                                q & f || !(r = d(o, c, !0)) || (k = 0, g ? (a.lineStart(), a.point(r[0][0], r[0][1]), a.point(r[1][0], r[1][1]), a.lineEnd()) : (a.point(r[1][0], r[1][1]), a.lineEnd(), a.lineStart(), a.point(r[0][0], r[0][1])))
                            }
                            !p || c && xb(c, o) || a.point(o[0], o[1]), c = o, i = p, f = q
                        }, lineEnd: function () {
                            i && a.lineEnd(), c = null
                        }, clean: function () {
                            return k | (j && i) << 1
                        }
                    }
                }

                function d(a, b, c) {
                    var d = qb(a), e = qb(b), g = [1, 0, 0], h = sb(d, e), i = rb(h, h), j = h[0], k = i - j * j;
                    if (!k)return !c && a;
                    var l = f * i / k, m = -f * j / k, n = sb(g, h), o = ub(g, l), p = ub(h, m);
                    tb(o, p);
                    var q = n, r = rb(o, q), s = rb(q, q), t = r * r - s * (rb(o, o) - 1);
                    if (!(0 > t)) {
                        var u = Math.sqrt(t), v = ub(q, (-r - u) / s);
                        if (tb(v, o), v = wb(v), !c)return v;
                        var w, x = a[0], y = b[0], z = a[1], A = b[1];
                        x > y && (w = x, x = y, y = w);
                        var B = y - x, C = ug(B - Ng) < Lg, D = C || Lg > B;
                        if (!C && z > A && (w = z, z = A, A = w), D ? C ? z + A > 0 ^ v[1] < (ug(v[0] - x) < Lg ? z : A) : z <= v[1] && v[1] <= A : B > Ng ^ (x <= v[0] && v[0] <= y)) {
                            var E = ub(q, (-r + u) / s);
                            return tb(E, o), [v, wb(E)]
                        }
                    }
                }

                function e(b, c) {
                    var d = g ? a : Ng - a, e = 0;
                    return -d > b ? e |= 1 : b > d && (e |= 2), -d > c ? e |= 4 : c > d && (e |= 8), e
                }

                var f = Math.cos(a), g = f > 0, h = ug(f) > Lg, i = pc(a, 6 * Rg);
                return Ib(b, c, i, g ? [0, -a] : [-Ng, a - Ng])
            }

            function Rb(a, b, c, d) {
                return function (e) {
                    var f, g = e.a, h = e.b, i = g.x, j = g.y, k = h.x, l = h.y, m = 0, n = 1, o = k - i, p = l - j;
                    if (f = a - i, o || !(f > 0)) {
                        if (f /= o, 0 > o) {
                            if (m > f)return;
                            n > f && (n = f)
                        } else if (o > 0) {
                            if (f > n)return;
                            f > m && (m = f)
                        }
                        if (f = c - i, o || !(0 > f)) {
                            if (f /= o, 0 > o) {
                                if (f > n)return;
                                f > m && (m = f)
                            } else if (o > 0) {
                                if (m > f)return;
                                n > f && (n = f)
                            }
                            if (f = b - j, p || !(f > 0)) {
                                if (f /= p, 0 > p) {
                                    if (m > f)return;
                                    n > f && (n = f)
                                } else if (p > 0) {
                                    if (f > n)return;
                                    f > m && (m = f)
                                }
                                if (f = d - j, p || !(0 > f)) {
                                    if (f /= p, 0 > p) {
                                        if (f > n)return;
                                        f > m && (m = f)
                                    } else if (p > 0) {
                                        if (m > f)return;
                                        n > f && (n = f)
                                    }
                                    return m > 0 && (e.a = {x: i + m * o, y: j + m * p}), 1 > n && (e.b = {
                                        x: i + n * o,
                                        y: j + n * p
                                    }), e
                                }
                            }
                        }
                    }
                }
            }

            function Sb(a, b, c, d) {
                function e(d, e) {
                    return ug(d[0] - a) < Lg ? e > 0 ? 0 : 3 : ug(d[0] - c) < Lg ? e > 0 ? 2 : 1 : ug(d[1] - b) < Lg ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
                }

                function f(a, b) {
                    return g(a.x, b.x)
                }

                function g(a, b) {
                    var c = e(a, 1), d = e(b, 1);
                    return c !== d ? c - d : 0 === c ? b[1] - a[1] : 1 === c ? a[0] - b[0] : 2 === c ? a[1] - b[1] : b[0] - a[0]
                }

                return function (h) {
                    function i(a) {
                        for (var b = 0, c = q.length, d = a[1], e = 0; c > e; ++e)for (var f, g = 1, h = q[e], i = h.length, j = h[0]; i > g; ++g)f = h[g], j[1] <= d ? f[1] > d && aa(j, f, a) > 0 && ++b : f[1] <= d && aa(j, f, a) < 0 && --b, j = f;
                        return 0 !== b
                    }

                    function j(f, h, i, j) {
                        var k = 0, l = 0;
                        if (null == f || (k = e(f, i)) !== (l = e(h, i)) || g(f, h) < 0 ^ i > 0) {
                            do j.point(0 === k || 3 === k ? a : c, k > 1 ? d : b); while ((k = (k + i + 4) % 4) !== l)
                        } else j.point(h[0], h[1])
                    }

                    function k(e, f) {
                        return e >= a && c >= e && f >= b && d >= f
                    }

                    function l(a, b) {
                        k(a, b) && h.point(a, b)
                    }

                    function m() {
                        D.point = o, q && q.push(r = []), y = !0, x = !1, v = w = NaN
                    }

                    function n() {
                        p && (o(s, t), u && x && B.rejoin(), p.push(B.buffer())), D.point = l, x && h.lineEnd()
                    }

                    function o(a, b) {
                        a = Math.max(-Oh, Math.min(Oh, a)), b = Math.max(-Oh, Math.min(Oh, b));
                        var c = k(a, b);
                        if (q && r.push([a, b]), y)s = a, t = b, u = c, y = !1, c && (h.lineStart(), h.point(a, b)); else if (c && x)h.point(a, b); else {
                            var d = {a: {x: v, y: w}, b: {x: a, y: b}};
                            C(d) ? (x || (h.lineStart(), h.point(d.a.x, d.a.y)), h.point(d.b.x, d.b.y), c || h.lineEnd(), z = !1) : c && (h.lineStart(), h.point(a, b), z = !1)
                        }
                        v = a, w = b, x = c
                    }

                    var p, q, r, s, t, u, v, w, x, y, z, A = h, B = Kb(), C = Rb(a, b, c, d), D = {
                        point: l,
                        lineStart: m,
                        lineEnd: n,
                        polygonStart: function () {
                            h = B, p = [], q = [], z = !0
                        },
                        polygonEnd: function () {
                            h = A, p = ig.merge(p);
                            var b = i([a, d]), c = z && b, e = p.length;
                            (c || e) && (h.polygonStart(), c && (h.lineStart(), j(null, null, 1, h), h.lineEnd()), e && Fb(p, f, b, j, h), h.polygonEnd()), p = q = r = null
                        }
                    };
                    return D
                }
            }

            function Tb(a) {
                var b = 0, c = Ng / 3, d = hc(a), e = d(b, c);
                return e.parallels = function (a) {
                    return arguments.length ? d(b = a[0] * Ng / 180, c = a[1] * Ng / 180) : [b / Ng * 180, c / Ng * 180]
                }, e
            }

            function Ub(a, b) {
                function c(a, b) {
                    var c = Math.sqrt(f - 2 * e * Math.sin(b)) / e;
                    return [c * Math.sin(a *= e), g - c * Math.cos(a)]
                }

                var d = Math.sin(a), e = (d + Math.sin(b)) / 2, f = 1 + d * (2 * e - d), g = Math.sqrt(f) / e;
                return c.invert = function (a, b) {
                    var c = g - b;
                    return [Math.atan2(a, c) / e, ca((f - (a * a + c * c) * e * e) / (2 * e))]
                }, c
            }

            function Vb() {
                function a(a, b) {
                    Qh += e * a - d * b, d = a, e = b
                }

                var b, c, d, e;
                Vh.point = function (f, g) {
                    Vh.point = a, b = d = f, c = e = g
                }, Vh.lineEnd = function () {
                    a(b, c)
                }
            }

            function Wb(a, b) {
                Rh > a && (Rh = a), a > Th && (Th = a), Sh > b && (Sh = b), b > Uh && (Uh = b)
            }

            function Xb() {
                function a(a, b) {
                    g.push("M", a, ",", b, f)
                }

                function b(a, b) {
                    g.push("M", a, ",", b), h.point = c
                }

                function c(a, b) {
                    g.push("L", a, ",", b)
                }

                function d() {
                    h.point = a
                }

                function e() {
                    g.push("Z")
                }

                var f = Yb(4.5), g = [], h = {
                    point: a, lineStart: function () {
                        h.point = b
                    }, lineEnd: d, polygonStart: function () {
                        h.lineEnd = e
                    }, polygonEnd: function () {
                        h.lineEnd = d, h.point = a
                    }, pointRadius: function (a) {
                        return f = Yb(a), h
                    }, result: function () {
                        if (g.length) {
                            var a = g.join("");
                            return g = [], a
                        }
                    }
                };
                return h
            }

            function Yb(a) {
                return "m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
            }

            function Zb(a, b) {
                Dh += a, Eh += b, ++Fh
            }

            function $b() {
                function a(a, d) {
                    var e = a - b, f = d - c, g = Math.sqrt(e * e + f * f);
                    Gh += g * (b + a) / 2, Hh += g * (c + d) / 2, Ih += g, Zb(b = a, c = d)
                }

                var b, c;
                Xh.point = function (d, e) {
                    Xh.point = a, Zb(b = d, c = e)
                }
            }

            function _b() {
                Xh.point = Zb
            }

            function ac() {
                function a(a, b) {
                    var c = a - d, f = b - e, g = Math.sqrt(c * c + f * f);
                    Gh += g * (d + a) / 2, Hh += g * (e + b) / 2, Ih += g, g = e * a - d * b, Jh += g * (d + a), Kh += g * (e + b), Lh += 3 * g, Zb(d = a, e = b)
                }

                var b, c, d, e;
                Xh.point = function (f, g) {
                    Xh.point = a, Zb(b = d = f, c = e = g)
                }, Xh.lineEnd = function () {
                    a(b, c)
                }
            }

            function bc(a) {
                function b(b, c) {
                    a.moveTo(b + g, c), a.arc(b, c, g, 0, Og)
                }

                function c(b, c) {
                    a.moveTo(b, c), h.point = d
                }

                function d(b, c) {
                    a.lineTo(b, c)
                }

                function e() {
                    h.point = b
                }

                function f() {
                    a.closePath()
                }

                var g = 4.5, h = {
                    point: b, lineStart: function () {
                        h.point = c
                    }, lineEnd: e, polygonStart: function () {
                        h.lineEnd = f
                    }, polygonEnd: function () {
                        h.lineEnd = e, h.point = b
                    }, pointRadius: function (a) {
                        return g = a, h
                    }, result: w
                };
                return h
            }

            function cc(a) {
                function b(a) {
                    return (h ? d : c)(a)
                }

                function c(b) {
                    return fc(b, function (c, d) {
                        c = a(c, d), b.point(c[0], c[1])
                    })
                }

                function d(b) {
                    function c(c, d) {
                        c = a(c, d), b.point(c[0], c[1])
                    }

                    function d() {
                        t = NaN, y.point = f, b.lineStart()
                    }

                    function f(c, d) {
                        var f = qb([c, d]), g = a(c, d);
                        e(t, u, s, v, w, x, t = g[0], u = g[1], s = c, v = f[0], w = f[1], x = f[2], h, b), b.point(t, u)
                    }

                    function g() {
                        y.point = c, b.lineEnd()
                    }

                    function i() {
                        d(), y.point = j, y.lineEnd = k
                    }

                    function j(a, b) {
                        f(l = a, m = b), n = t, o = u, p = v, q = w, r = x, y.point = f
                    }

                    function k() {
                        e(t, u, s, v, w, x, n, o, l, p, q, r, h, b), y.lineEnd = g, g()
                    }

                    var l, m, n, o, p, q, r, s, t, u, v, w, x, y = {
                        point: c,
                        lineStart: d,
                        lineEnd: g,
                        polygonStart: function () {
                            b.polygonStart(), y.lineStart = i
                        },
                        polygonEnd: function () {
                            b.polygonEnd(), y.lineStart = d
                        }
                    };
                    return y
                }

                function e(b, c, d, h, i, j, k, l, m, n, o, p, q, r) {
                    var s = k - b, t = l - c, u = s * s + t * t;
                    if (u > 4 * f && q--) {
                        var v = h + n, w = i + o, x = j + p, y = Math.sqrt(v * v + w * w + x * x), z = Math.asin(x /= y), A = ug(ug(x) - 1) < Lg || ug(d - m) < Lg ? (d + m) / 2 : Math.atan2(w, v), B = a(A, z), C = B[0], D = B[1], E = C - b, F = D - c, G = t * E - s * F;
                        (G * G / u > f || ug((s * E + t * F) / u - .5) > .3 || g > h * n + i * o + j * p) && (e(b, c, d, h, i, j, C, D, A, v /= y, w /= y, x, q, r), r.point(C, D), e(C, D, A, v, w, x, k, l, m, n, o, p, q, r))
                    }
                }

                var f = .5, g = Math.cos(30 * Rg), h = 16;
                return b.precision = function (a) {
                    return arguments.length ? (h = (f = a * a) > 0 && 16, b) : Math.sqrt(f)
                }, b
            }

            function dc(a) {
                var b = cc(function (b, c) {
                    return a([b * Sg, c * Sg])
                });
                return function (a) {
                    return ic(b(a))
                }
            }

            function ec(a) {
                this.stream = a
            }

            function fc(a, b) {
                return {
                    point: b, sphere: function () {
                        a.sphere()
                    }, lineStart: function () {
                        a.lineStart()
                    }, lineEnd: function () {
                        a.lineEnd()
                    }, polygonStart: function () {
                        a.polygonStart()
                    }, polygonEnd: function () {
                        a.polygonEnd()
                    }
                }
            }

            function gc(a) {
                return hc(function () {
                    return a
                })()
            }

            function hc(a) {
                function b(a) {
                    return a = h(a[0] * Rg, a[1] * Rg), [a[0] * m + i, j - a[1] * m]
                }

                function c(a) {
                    return a = h.invert((a[0] - i) / m, (j - a[1]) / m), a && [a[0] * Sg, a[1] * Sg]
                }

                function d() {
                    h = Db(g = lc(r, s, u), f);
                    var a = f(p, q);
                    return i = n - a[0] * m, j = o + a[1] * m, e()
                }

                function e() {
                    return k && (k.valid = !1, k = null), b
                }

                var f, g, h, i, j, k, l = cc(function (a, b) {
                    return a = f(a, b), [a[0] * m + i, j - a[1] * m]
                }), m = 150, n = 480, o = 250, p = 0, q = 0, r = 0, s = 0, u = 0, v = Nh, w = t, x = null, y = null;
                return b.stream = function (a) {
                    return k && (k.valid = !1), k = ic(v(g, l(w(a)))), k.valid = !0, k
                }, b.clipAngle = function (a) {
                    return arguments.length ? (v = null == a ? (x = a, Nh) : Qb((x = +a) * Rg), e()) : x
                }, b.clipExtent = function (a) {
                    return arguments.length ? (y = a, w = a ? Sb(a[0][0], a[0][1], a[1][0], a[1][1]) : t, e()) : y
                }, b.scale = function (a) {
                    return arguments.length ? (m = +a, d()) : m
                }, b.translate = function (a) {
                    return arguments.length ? (n = +a[0], o = +a[1], d()) : [n, o]
                }, b.center = function (a) {
                    return arguments.length ? (p = a[0] % 360 * Rg, q = a[1] % 360 * Rg, d()) : [p * Sg, q * Sg]
                }, b.rotate = function (a) {
                    return arguments.length ? (r = a[0] % 360 * Rg, s = a[1] % 360 * Rg, u = a.length > 2 ? a[2] % 360 * Rg : 0, d()) : [r * Sg, s * Sg, u * Sg]
                }, ig.rebind(b, l, "precision"), function () {
                    return f = a.apply(this, arguments), b.invert = f.invert && c, d()
                }
            }

            function ic(a) {
                return fc(a, function (b, c) {
                    a.point(b * Rg, c * Rg)
                })
            }

            function jc(a, b) {
                return [a, b]
            }

            function kc(a, b) {
                return [a > Ng ? a - Og : -Ng > a ? a + Og : a, b]
            }

            function lc(a, b, c) {
                return a ? b || c ? Db(nc(a), oc(b, c)) : nc(a) : b || c ? oc(b, c) : kc
            }

            function mc(a) {
                return function (b, c) {
                    return b += a, [b > Ng ? b - Og : -Ng > b ? b + Og : b, c]
                }
            }

            function nc(a) {
                var b = mc(a);
                return b.invert = mc(-a), b
            }

            function oc(a, b) {
                function c(a, b) {
                    var c = Math.cos(b), h = Math.cos(a) * c, i = Math.sin(a) * c, j = Math.sin(b), k = j * d + h * e;
                    return [Math.atan2(i * f - k * g, h * d - j * e), ca(k * f + i * g)]
                }

                var d = Math.cos(a), e = Math.sin(a), f = Math.cos(b), g = Math.sin(b);
                return c.invert = function (a, b) {
                    var c = Math.cos(b), h = Math.cos(a) * c, i = Math.sin(a) * c, j = Math.sin(b), k = j * f - i * g;
                    return [Math.atan2(i * f + j * g, h * d + k * e), ca(k * d - h * e)]
                }, c
            }

            function pc(a, b) {
                var c = Math.cos(a), d = Math.sin(a);
                return function (e, f, g, h) {
                    var i = g * b;
                    null != e ? (e = qc(c, e), f = qc(c, f), (g > 0 ? f > e : e > f) && (e += g * Og)) : (e = a + g * Og, f = a - .5 * i);
                    for (var j, k = e; g > 0 ? k > f : f > k; k -= i)h.point((j = wb([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], j[1])
                }
            }

            function qc(a, b) {
                var c = qb(b);
                c[0] -= a, vb(c);
                var d = ba(-c[1]);
                return ((-c[2] < 0 ? -d : d) + 2 * Math.PI - Lg) % (2 * Math.PI)
            }

            function rc(a, b, c) {
                var d = ig.range(a, b - Lg, c).concat(b);
                return function (a) {
                    return d.map(function (b) {
                        return [a, b]
                    })
                }
            }

            function sc(a, b, c) {
                var d = ig.range(a, b - Lg, c).concat(b);
                return function (a) {
                    return d.map(function (b) {
                        return [b, a]
                    })
                }
            }

            function tc(a) {
                return a.source
            }

            function uc(a) {
                return a.target
            }

            function vc(a, b, c, d) {
                var e = Math.cos(b), f = Math.sin(b), g = Math.cos(d), h = Math.sin(d), i = e * Math.cos(a), j = e * Math.sin(a), k = g * Math.cos(c), l = g * Math.sin(c), m = 2 * Math.asin(Math.sqrt(ga(d - b) + e * g * ga(c - a))), n = 1 / Math.sin(m), o = m ? function (a) {
                    var b = Math.sin(a *= m) * n, c = Math.sin(m - a) * n, d = c * i + b * k, e = c * j + b * l, g = c * f + b * h;
                    return [Math.atan2(e, d) * Sg, Math.atan2(g, Math.sqrt(d * d + e * e)) * Sg]
                } : function () {
                    return [a * Sg, b * Sg]
                };
                return o.distance = m, o
            }

            function wc() {
                function a(a, e) {
                    var f = Math.sin(e *= Rg), g = Math.cos(e), h = ug((a *= Rg) - b), i = Math.cos(h);
                    Yh += Math.atan2(Math.sqrt((h = g * Math.sin(h)) * h + (h = d * f - c * g * i) * h), c * f + d * g * i), b = a, c = f, d = g
                }

                var b, c, d;
                Zh.point = function (e, f) {
                    b = e * Rg, c = Math.sin(f *= Rg), d = Math.cos(f), Zh.point = a
                }, Zh.lineEnd = function () {
                    Zh.point = Zh.lineEnd = w
                }
            }

            function xc(a, b) {
                function c(b, c) {
                    var d = Math.cos(b), e = Math.cos(c), f = a(d * e);
                    return [f * e * Math.sin(b), f * Math.sin(c)]
                }

                return c.invert = function (a, c) {
                    var d = Math.sqrt(a * a + c * c), e = b(d), f = Math.sin(e), g = Math.cos(e);
                    return [Math.atan2(a * f, d * g), Math.asin(d && c * f / d)]
                }, c
            }

            function yc(a, b) {
                function c(a, b) {
                    g > 0 ? -Qg + Lg > b && (b = -Qg + Lg) : b > Qg - Lg && (b = Qg - Lg);
                    var c = g / Math.pow(e(b), f);
                    return [c * Math.sin(f * a), g - c * Math.cos(f * a)]
                }

                var d = Math.cos(a), e = function (a) {
                    return Math.tan(Ng / 4 + a / 2)
                }, f = a === b ? Math.sin(a) : Math.log(d / Math.cos(b)) / Math.log(e(b) / e(a)), g = d * Math.pow(e(a), f) / f;
                return f ? (c.invert = function (a, b) {
                    var c = g - b, d = _(f) * Math.sqrt(a * a + c * c);
                    return [Math.atan2(a, c) / f, 2 * Math.atan(Math.pow(g / d, 1 / f)) - Qg]
                }, c) : Ac
            }

            function zc(a, b) {
                function c(a, b) {
                    var c = f - b;
                    return [c * Math.sin(e * a), f - c * Math.cos(e * a)]
                }

                var d = Math.cos(a), e = a === b ? Math.sin(a) : (d - Math.cos(b)) / (b - a), f = d / e + a;
                return ug(e) < Lg ? jc : (c.invert = function (a, b) {
                    var c = f - b;
                    return [Math.atan2(a, c) / e, f - _(e) * Math.sqrt(a * a + c * c)]
                }, c)
            }

            function Ac(a, b) {
                return [a, Math.log(Math.tan(Ng / 4 + b / 2))]
            }

            function Bc(a) {
                var b, c = gc(a), d = c.scale, e = c.translate, f = c.clipExtent;
                return c.scale = function () {
                    var a = d.apply(c, arguments);
                    return a === c ? b ? c.clipExtent(null) : c : a
                }, c.translate = function () {
                    var a = e.apply(c, arguments);
                    return a === c ? b ? c.clipExtent(null) : c : a
                }, c.clipExtent = function (a) {
                    var g = f.apply(c, arguments);
                    if (g === c) {
                        if (b = null == a) {
                            var h = Ng * d(), i = e();
                            f([[i[0] - h, i[1] - h], [i[0] + h, i[1] + h]])
                        }
                    } else b && (g = null);
                    return g
                }, c.clipExtent(null)
            }

            function Cc(a, b) {
                return [Math.log(Math.tan(Ng / 4 + b / 2)), -a]
            }

            function Dc(a) {
                return a[0]
            }

            function Ec(a) {
                return a[1]
            }

            function Fc(a) {
                for (var b = a.length, c = [0, 1], d = 2, e = 2; b > e; e++) {
                    for (; d > 1 && aa(a[c[d - 2]], a[c[d - 1]], a[e]) <= 0;)--d;
                    c[d++] = e
                }
                return c.slice(0, d)
            }

            function Gc(a, b) {
                return a[0] - b[0] || a[1] - b[1]
            }

            function Hc(a, b, c) {
                return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
            }

            function Ic(a, b, c, d) {
                var e = a[0], f = c[0], g = b[0] - e, h = d[0] - f, i = a[1], j = c[1], k = b[1] - i, l = d[1] - j, m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
                return [e + m * g, i + m * k]
            }

            function Jc(a) {
                var b = a[0], c = a[a.length - 1];
                return !(b[0] - c[0] || b[1] - c[1])
            }

            function Kc() {
                dd(this), this.edge = this.site = this.circle = null
            }

            function Lc(a) {
                var b = ji.pop() || new Kc;
                return b.site = a, b
            }

            function Mc(a) {
                Wc(a), gi.remove(a), ji.push(a), dd(a)
            }

            function Nc(a) {
                var b = a.circle, c = b.x, d = b.cy, e = {x: c, y: d}, f = a.P, g = a.N, h = [a];
                Mc(a);
                for (var i = f; i.circle && ug(c - i.circle.x) < Lg && ug(d - i.circle.cy) < Lg;)f = i.P, h.unshift(i), Mc(i), i = f;
                h.unshift(i), Wc(i);
                for (var j = g; j.circle && ug(c - j.circle.x) < Lg && ug(d - j.circle.cy) < Lg;)g = j.N, h.push(j), Mc(j), j = g;
                h.push(j), Wc(j);
                var k, l = h.length;
                for (k = 1; l > k; ++k)j = h[k], i = h[k - 1], ad(j.edge, i.site, j.site, e);
                i = h[0], j = h[l - 1], j.edge = $c(i.site, j.site, null, e), Vc(i), Vc(j)
            }

            function Oc(a) {
                for (var b, c, d, e, f = a.x, g = a.y, h = gi._; h;)if (d = Pc(h, g) - f, d > Lg)h = h.L; else {
                    if (e = f - Qc(h, g), !(e > Lg)) {
                        d > -Lg ? (b = h.P, c = h) : e > -Lg ? (b = h, c = h.N) : b = c = h;
                        break
                    }
                    if (!h.R) {
                        b = h;
                        break
                    }
                    h = h.R
                }
                var i = Lc(a);
                if (gi.insert(b, i), b || c) {
                    if (b === c)return Wc(b), c = Lc(b.site), gi.insert(i, c), i.edge = c.edge = $c(b.site, i.site), Vc(b), void Vc(c);
                    if (!c)return void(i.edge = $c(b.site, i.site));
                    Wc(b), Wc(c);
                    var j = b.site, k = j.x, l = j.y, m = a.x - k, n = a.y - l, o = c.site, p = o.x - k, q = o.y - l, r = 2 * (m * q - n * p), s = m * m + n * n, t = p * p + q * q, u = {
                        x: (q * s - n * t) / r + k,
                        y: (m * t - p * s) / r + l
                    };
                    ad(c.edge, j, o, u), i.edge = $c(j, a, null, u), c.edge = $c(a, o, null, u), Vc(b), Vc(c)
                }
            }

            function Pc(a, b) {
                var c = a.site, d = c.x, e = c.y, f = e - b;
                if (!f)return d;
                var g = a.P;
                if (!g)return -(1 / 0);
                c = g.site;
                var h = c.x, i = c.y, j = i - b;
                if (!j)return h;
                var k = h - d, l = 1 / f - 1 / j, m = k / j;
                return l ? (-m + Math.sqrt(m * m - 2 * l * (k * k / (-2 * j) - i + j / 2 + e - f / 2))) / l + d : (d + h) / 2
            }

            function Qc(a, b) {
                var c = a.N;
                if (c)return Pc(c, b);
                var d = a.site;
                return d.y === b ? d.x : 1 / 0
            }

            function Rc(a) {
                this.site = a, this.edges = []
            }

            function Sc(a) {
                for (var b, c, d, e, f, g, h, i, j, k, l = a[0][0], m = a[1][0], n = a[0][1], o = a[1][1], p = fi, q = p.length; q--;)if (f = p[q], f && f.prepare())for (h = f.edges, i = h.length, g = 0; i > g;)k = h[g].end(), d = k.x, e = k.y, j = h[++g % i].start(), b = j.x, c = j.y, (ug(d - b) > Lg || ug(e - c) > Lg) && (h.splice(g, 0, new bd(_c(f.site, k, ug(d - l) < Lg && o - e > Lg ? {
                    x: l,
                    y: ug(b - l) < Lg ? c : o
                } : ug(e - o) < Lg && m - d > Lg ? {
                    x: ug(c - o) < Lg ? b : m,
                    y: o
                } : ug(d - m) < Lg && e - n > Lg ? {
                    x: m,
                    y: ug(b - m) < Lg ? c : n
                } : ug(e - n) < Lg && d - l > Lg ? {x: ug(c - n) < Lg ? b : l, y: n} : null), f.site, null)), ++i)
            }

            function Tc(a, b) {
                return b.angle - a.angle
            }

            function Uc() {
                dd(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function Vc(a) {
                var b = a.P, c = a.N;
                if (b && c) {
                    var d = b.site, e = a.site, f = c.site;
                    if (d !== f) {
                        var g = e.x, h = e.y, i = d.x - g, j = d.y - h, k = f.x - g, l = f.y - h, m = 2 * (i * l - j * k);
                        if (!(m >= -Mg)) {
                            var n = i * i + j * j, o = k * k + l * l, p = (l * n - j * o) / m, q = (i * o - k * n) / m, l = q + h, r = ki.pop() || new Uc;
                            r.arc = a, r.site = e, r.x = p + g, r.y = l + Math.sqrt(p * p + q * q), r.cy = l, a.circle = r;
                            for (var s = null, t = ii._; t;)if (r.y < t.y || r.y === t.y && r.x <= t.x) {
                                if (!t.L) {
                                    s = t.P;
                                    break
                                }
                                t = t.L
                            } else {
                                if (!t.R) {
                                    s = t;
                                    break
                                }
                                t = t.R
                            }
                            ii.insert(s, r), s || (hi = r)
                        }
                    }
                }
            }

            function Wc(a) {
                var b = a.circle;
                b && (b.P || (hi = b.N), ii.remove(b), ki.push(b), dd(b), a.circle = null)
            }

            function Xc(a) {
                for (var b, c = ei, d = Rb(a[0][0], a[0][1], a[1][0], a[1][1]), e = c.length; e--;)b = c[e], (!Yc(b, a) || !d(b) || ug(b.a.x - b.b.x) < Lg && ug(b.a.y - b.b.y) < Lg) && (b.a = b.b = null, c.splice(e, 1))
            }

            function Yc(a, b) {
                var c = a.b;
                if (c)return !0;
                var d, e, f = a.a, g = b[0][0], h = b[1][0], i = b[0][1], j = b[1][1], k = a.l, l = a.r, m = k.x, n = k.y, o = l.x, p = l.y, q = (m + o) / 2, r = (n + p) / 2;
                if (p === n) {
                    if (g > q || q >= h)return;
                    if (m > o) {
                        if (f) {
                            if (f.y >= j)return
                        } else f = {x: q, y: i};
                        c = {x: q, y: j}
                    } else {
                        if (f) {
                            if (f.y < i)return
                        } else f = {x: q, y: j};
                        c = {x: q, y: i}
                    }
                } else if (d = (m - o) / (p - n), e = r - d * q, -1 > d || d > 1)if (m > o) {
                    if (f) {
                        if (f.y >= j)return
                    } else f = {x: (i - e) / d, y: i};
                    c = {x: (j - e) / d, y: j}
                } else {
                    if (f) {
                        if (f.y < i)return
                    } else f = {x: (j - e) / d, y: j};
                    c = {x: (i - e) / d, y: i}
                } else if (p > n) {
                    if (f) {
                        if (f.x >= h)return
                    } else f = {x: g, y: d * g + e};
                    c = {x: h, y: d * h + e}
                } else {
                    if (f) {
                        if (f.x < g)return
                    } else f = {x: h, y: d * h + e};
                    c = {x: g, y: d * g + e}
                }
                return a.a = f, a.b = c, !0
            }

            function Zc(a, b) {
                this.l = a, this.r = b, this.a = this.b = null
            }

            function $c(a, b, c, d) {
                var e = new Zc(a, b);
                return ei.push(e), c && ad(e, a, b, c), d && ad(e, b, a, d), fi[a.i].edges.push(new bd(e, a, b)), fi[b.i].edges.push(new bd(e, b, a)), e
            }

            function _c(a, b, c) {
                var d = new Zc(a, null);
                return d.a = b, d.b = c, ei.push(d), d
            }

            function ad(a, b, c, d) {
                a.a || a.b ? a.l === c ? a.b = d : a.a = d : (a.a = d, a.l = b, a.r = c)
            }

            function bd(a, b, c) {
                var d = a.a, e = a.b;
                this.edge = a, this.site = b, this.angle = c ? Math.atan2(c.y - b.y, c.x - b.x) : a.l === b ? Math.atan2(e.x - d.x, d.y - e.y) : Math.atan2(d.x - e.x, e.y - d.y)
            }

            function cd() {
                this._ = null
            }

            function dd(a) {
                a.U = a.C = a.L = a.R = a.P = a.N = null
            }

            function ed(a, b) {
                var c = b, d = b.R, e = c.U;
                e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.R = d.L, c.R && (c.R.U = c), d.L = c
            }

            function fd(a, b) {
                var c = b, d = b.L, e = c.U;
                e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.L = d.R, c.L && (c.L.U = c), d.R = c
            }

            function gd(a) {
                for (; a.L;)a = a.L;
                return a
            }

            function hd(a, b) {
                var c, d, e, f = a.sort(id).pop();
                for (ei = [], fi = new Array(a.length), gi = new cd, ii = new cd; ;)if (e = hi, f && (!e || f.y < e.y || f.y === e.y && f.x < e.x))(f.x !== c || f.y !== d) && (fi[f.i] = new Rc(f), Oc(f), c = f.x, d = f.y), f = a.pop(); else {
                    if (!e)break;
                    Nc(e.arc)
                }
                b && (Xc(b), Sc(b));
                var g = {cells: fi, edges: ei};
                return gi = ii = ei = fi = null, g
            }

            function id(a, b) {
                return b.y - a.y || b.x - a.x
            }

            function jd(a, b, c) {
                return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y)
            }

            function kd(a) {
                return a.x
            }

            function ld(a) {
                return a.y
            }

            function md() {
                return {leaf: !0, nodes: [], point: null, x: null, y: null}
            }

            function nd(a, b, c, d, e, f) {
                if (!a(b, c, d, e, f)) {
                    var g = .5 * (c + e), h = .5 * (d + f), i = b.nodes;
                    i[0] && nd(a, i[0], c, d, g, h), i[1] && nd(a, i[1], g, d, e, h), i[2] && nd(a, i[2], c, h, g, f), i[3] && nd(a, i[3], g, h, e, f)
                }
            }

            function od(a, b, c, d, e, f, g) {
                var h, i = 1 / 0;
                return function j(a, k, l, m, n) {
                    if (!(k > f || l > g || d > m || e > n)) {
                        if (o = a.point) {
                            var o, p = b - a.x, q = c - a.y, r = p * p + q * q;
                            if (i > r) {
                                var s = Math.sqrt(i = r);
                                d = b - s, e = c - s, f = b + s, g = c + s, h = o
                            }
                        }
                        for (var t = a.nodes, u = .5 * (k + m), v = .5 * (l + n), w = b >= u, x = c >= v, y = x << 1 | w, z = y + 4; z > y; ++y)if (a = t[3 & y])switch (3 & y) {
                            case 0:
                                j(a, k, l, u, v);
                                break;
                            case 1:
                                j(a, u, l, m, v);
                                break;
                            case 2:
                                j(a, k, v, u, n);
                                break;
                            case 3:
                                j(a, u, v, m, n)
                        }
                    }
                }(a, d, e, f, g), h
            }

            function pd(a, b) {
                a = ig.rgb(a), b = ig.rgb(b);
                var c = a.r, d = a.g, e = a.b, f = b.r - c, g = b.g - d, h = b.b - e;
                return function (a) {
                    return "#" + va(Math.round(c + f * a)) + va(Math.round(d + g * a)) + va(Math.round(e + h * a))
                }
            }

            function qd(a, b) {
                var c, d = {}, e = {};
                for (c in a)c in b ? d[c] = td(a[c], b[c]) : e[c] = a[c];
                for (c in b)c in a || (e[c] = b[c]);
                return function (a) {
                    for (c in d)e[c] = d[c](a);
                    return e
                }
            }

            function rd(a, b) {
                return a = +a, b = +b, function (c) {
                    return a * (1 - c) + b * c
                }
            }

            function sd(a, b) {
                var c, d, e, f = mi.lastIndex = ni.lastIndex = 0, g = -1, h = [], i = [];
                for (a += "", b += ""; (c = mi.exec(a)) && (d = ni.exec(b));)(e = d.index) > f && (e = b.slice(f, e), h[g] ? h[g] += e : h[++g] = e), (c = c[0]) === (d = d[0]) ? h[g] ? h[g] += d : h[++g] = d : (h[++g] = null, i.push({
                    i: g,
                    x: rd(c, d)
                })), f = ni.lastIndex;
                return f < b.length && (e = b.slice(f), h[g] ? h[g] += e : h[++g] = e), h.length < 2 ? i[0] ? (b = i[0].x, function (a) {
                    return b(a) + ""
                }) : function () {
                    return b
                } : (b = i.length, function (a) {
                    for (var c, d = 0; b > d; ++d)h[(c = i[d]).i] = c.x(a);
                    return h.join("")
                })
            }

            function td(a, b) {
                for (var c, d = ig.interpolators.length; --d >= 0 && !(c = ig.interpolators[d](a, b)););
                return c
            }

            function ud(a, b) {
                var c, d = [], e = [], f = a.length, g = b.length, h = Math.min(a.length, b.length);
                for (c = 0; h > c; ++c)d.push(td(a[c], b[c]));
                for (; f > c; ++c)e[c] = a[c];
                for (; g > c; ++c)e[c] = b[c];
                return function (a) {
                    for (c = 0; h > c; ++c)e[c] = d[c](a);
                    return e
                }
            }

            function vd(a) {
                return function (b) {
                    return 0 >= b ? 0 : b >= 1 ? 1 : a(b)
                }
            }

            function wd(a) {
                return function (b) {
                    return 1 - a(1 - b)
                }
            }

            function xd(a) {
                return function (b) {
                    return .5 * (.5 > b ? a(2 * b) : 2 - a(2 - 2 * b))
                }
            }

            function yd(a) {
                return a * a
            }

            function zd(a) {
                return a * a * a
            }

            function Ad(a) {
                if (0 >= a)return 0;
                if (a >= 1)return 1;
                var b = a * a, c = b * a;
                return 4 * (.5 > a ? c : 3 * (a - b) + c - .75)
            }

            function Bd(a) {
                return function (b) {
                    return Math.pow(b, a)
                }
            }

            function Cd(a) {
                return 1 - Math.cos(a * Qg)
            }

            function Dd(a) {
                return Math.pow(2, 10 * (a - 1))
            }

            function Ed(a) {
                return 1 - Math.sqrt(1 - a * a)
            }

            function Fd(a, b) {
                var c;
                return arguments.length < 2 && (b = .45), arguments.length ? c = b / Og * Math.asin(1 / a) : (a = 1, c = b / 4), function (d) {
                    return 1 + a * Math.pow(2, -10 * d) * Math.sin((d - c) * Og / b)
                }
            }

            function Gd(a) {
                return a || (a = 1.70158), function (b) {
                    return b * b * ((a + 1) * b - a)
                }
            }

            function Hd(a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            }

            function Id(a, b) {
                a = ig.hcl(a), b = ig.hcl(b);
                var c = a.h, d = a.c, e = a.l, f = b.h - c, g = b.c - d, h = b.l - e;
                return isNaN(g) && (g = 0, d = isNaN(d) ? b.c : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360), function (a) {
                    return la(c + f * a, d + g * a, e + h * a) + ""
                }
            }

            function Jd(a, b) {
                a = ig.hsl(a), b = ig.hsl(b);
                var c = a.h, d = a.s, e = a.l, f = b.h - c, g = b.s - d, h = b.l - e;
                return isNaN(g) && (g = 0, d = isNaN(d) ? b.s : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360), function (a) {
                    return ja(c + f * a, d + g * a, e + h * a) + ""
                }
            }

            function Kd(a, b) {
                a = ig.lab(a), b = ig.lab(b);
                var c = a.l, d = a.a, e = a.b, f = b.l - c, g = b.a - d, h = b.b - e;
                return function (a) {
                    return na(c + f * a, d + g * a, e + h * a) + ""
                }
            }

            function Ld(a, b) {
                return b -= a, function (c) {
                    return Math.round(a + b * c)
                }
            }

            function Md(a) {
                var b = [a.a, a.b], c = [a.c, a.d], d = Od(b), e = Nd(b, c), f = Od(Pd(c, b, -e)) || 0;
                b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Sg, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * Sg : 0
            }

            function Nd(a, b) {
                return a[0] * b[0] + a[1] * b[1]
            }

            function Od(a) {
                var b = Math.sqrt(Nd(a, a));
                return b && (a[0] /= b, a[1] /= b), b
            }

            function Pd(a, b, c) {
                return a[0] += c * b[0], a[1] += c * b[1], a
            }

            function Qd(a) {
                return a.length ? a.pop() + "," : ""
            }

            function Rd(a, b, c, d) {
                if (a[0] !== b[0] || a[1] !== b[1]) {
                    var e = c.push("translate(", null, ",", null, ")");
                    d.push({i: e - 4, x: rd(a[0], b[0])}, {i: e - 2, x: rd(a[1], b[1])})
                } else(b[0] || b[1]) && c.push("translate(" + b + ")")
            }

            function Sd(a, b, c, d) {
                a !== b ? (a - b > 180 ? b += 360 : b - a > 180 && (a += 360), d.push({
                    i: c.push(Qd(c) + "rotate(", null, ")") - 2,
                    x: rd(a, b)
                })) : b && c.push(Qd(c) + "rotate(" + b + ")")
            }

            function Td(a, b, c, d) {
                a !== b ? d.push({
                    i: c.push(Qd(c) + "skewX(", null, ")") - 2,
                    x: rd(a, b)
                }) : b && c.push(Qd(c) + "skewX(" + b + ")")
            }

            function Ud(a, b, c, d) {
                if (a[0] !== b[0] || a[1] !== b[1]) {
                    var e = c.push(Qd(c) + "scale(", null, ",", null, ")");
                    d.push({i: e - 4, x: rd(a[0], b[0])}, {i: e - 2, x: rd(a[1], b[1])})
                } else(1 !== b[0] || 1 !== b[1]) && c.push(Qd(c) + "scale(" + b + ")")
            }

            function Vd(a, b) {
                var c = [], d = [];
                return a = ig.transform(a), b = ig.transform(b), Rd(a.translate, b.translate, c, d), Sd(a.rotate, b.rotate, c, d), Td(a.skew, b.skew, c, d), Ud(a.scale, b.scale, c, d), a = b = null, function (a) {
                    for (var b, e = -1, f = d.length; ++e < f;)c[(b = d[e]).i] = b.x(a);
                    return c.join("")
                }
            }

            function Wd(a, b) {
                return b = (b -= a = +a) || 1 / b, function (c) {
                    return (c - a) / b
                }
            }

            function Xd(a, b) {
                return b = (b -= a = +a) || 1 / b, function (c) {
                    return Math.max(0, Math.min(1, (c - a) / b))
                }
            }

            function Yd(a) {
                for (var b = a.source, c = a.target, d = $d(b, c), e = [b]; b !== d;)b = b.parent, e.push(b);
                for (var f = e.length; c !== d;)e.splice(f, 0, c), c = c.parent;
                return e
            }

            function Zd(a) {
                for (var b = [], c = a.parent; null != c;)b.push(a), a = c, c = c.parent;
                return b.push(a), b
            }

            function $d(a, b) {
                if (a === b)return a;
                for (var c = Zd(a), d = Zd(b), e = c.pop(), f = d.pop(), g = null; e === f;)g = e, e = c.pop(), f = d.pop();
                return g
            }

            function _d(a) {
                a.fixed |= 2
            }

            function ae(a) {
                a.fixed &= -7
            }

            function be(a) {
                a.fixed |= 4, a.px = a.x, a.py = a.y
            }

            function ce(a) {
                a.fixed &= -5
            }

            function de(a, b, c) {
                var d = 0, e = 0;
                if (a.charge = 0, !a.leaf)for (var f, g = a.nodes, h = g.length, i = -1; ++i < h;)f = g[i], null != f && (de(f, b, c), a.charge += f.charge, d += f.charge * f.cx, e += f.charge * f.cy);
                if (a.point) {
                    a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
                    var j = b * c[a.point.index];
                    a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
                }
                a.cx = d / a.charge, a.cy = e / a.charge
            }

            function ee(a, b) {
                return ig.rebind(a, b, "sort", "children", "value"), a.nodes = a, a.links = ke, a
            }

            function fe(a, b) {
                for (var c = [a]; null != (a = c.pop());)if (b(a), (e = a.children) && (d = e.length))for (var d, e; --d >= 0;)c.push(e[d])
            }

            function ge(a, b) {
                for (var c = [a], d = []; null != (a = c.pop());)if (d.push(a), (f = a.children) && (e = f.length))for (var e, f, g = -1; ++g < e;)c.push(f[g]);
                for (; null != (a = d.pop());)b(a)
            }

            function he(a) {
                return a.children
            }

            function ie(a) {
                return a.value
            }

            function je(a, b) {
                return b.value - a.value
            }

            function ke(a) {
                return ig.merge(a.map(function (a) {
                    return (a.children || []).map(function (b) {
                        return {source: a, target: b}
                    })
                }))
            }

            function le(a) {
                return a.x
            }

            function me(a) {
                return a.y
            }

            function ne(a, b, c) {
                a.y0 = b, a.y = c
            }

            function oe(a) {
                return ig.range(a.length)
            }

            function pe(a) {
                for (var b = -1, c = a[0].length, d = []; ++b < c;)d[b] = 0;
                return d
            }

            function qe(a) {
                for (var b, c = 1, d = 0, e = a[0][1], f = a.length; f > c; ++c)(b = a[c][1]) > e && (d = c, e = b);
                return d
            }

            function re(a) {
                return a.reduce(se, 0)
            }

            function se(a, b) {
                return a + b[1]
            }

            function te(a, b) {
                return ue(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
            }

            function ue(a, b) {
                for (var c = -1, d = +a[0], e = (a[1] - d) / b, f = []; ++c <= b;)f[c] = e * c + d;
                return f
            }

            function ve(a) {
                return [ig.min(a), ig.max(a)]
            }

            function we(a, b) {
                return a.value - b.value
            }

            function xe(a, b) {
                var c = a._pack_next;
                a._pack_next = b, b._pack_prev = a, b._pack_next = c, c._pack_prev = b
            }

            function ye(a, b) {
                a._pack_next = b, b._pack_prev = a
            }

            function ze(a, b) {
                var c = b.x - a.x, d = b.y - a.y, e = a.r + b.r;
                return .999 * e * e > c * c + d * d
            }

            function Ae(a) {
                function b(a) {
                    k = Math.min(a.x - a.r, k), l = Math.max(a.x + a.r, l), m = Math.min(a.y - a.r, m), n = Math.max(a.y + a.r, n)
                }

                if ((c = a.children) && (j = c.length)) {
                    var c, d, e, f, g, h, i, j, k = 1 / 0, l = -(1 / 0), m = 1 / 0, n = -(1 / 0);
                    if (c.forEach(Be), d = c[0], d.x = -d.r, d.y = 0, b(d), j > 1 && (e = c[1], e.x = e.r, e.y = 0, b(e), j > 2))for (f = c[2], Ee(d, e, f), b(f), xe(d, f), d._pack_prev = f, xe(f, e), e = d._pack_next, g = 3; j > g; g++) {
                        Ee(d, e, f = c[g]);
                        var o = 0, p = 1, q = 1;
                        for (h = e._pack_next; h !== e; h = h._pack_next, p++)if (ze(h, f)) {
                            o = 1;
                            break
                        }
                        if (1 == o)for (i = d._pack_prev; i !== h._pack_prev && !ze(i, f); i = i._pack_prev, q++);
                        o ? (q > p || p == q && e.r < d.r ? ye(d, e = h) : ye(d = i, e), g--) : (xe(d, f), e = f, b(f))
                    }
                    var r = (k + l) / 2, s = (m + n) / 2, t = 0;
                    for (g = 0; j > g; g++)f = c[g], f.x -= r, f.y -= s, t = Math.max(t, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
                    a.r = t, c.forEach(Ce)
                }
            }

            function Be(a) {
                a._pack_next = a._pack_prev = a
            }

            function Ce(a) {
                delete a._pack_next, delete a._pack_prev
            }

            function De(a, b, c, d) {
                var e = a.children;
                if (a.x = b += d * a.x, a.y = c += d * a.y, a.r *= d, e)for (var f = -1, g = e.length; ++f < g;)De(e[f], b, c, d)
            }

            function Ee(a, b, c) {
                var d = a.r + c.r, e = b.x - a.x, f = b.y - a.y;
                if (d && (e || f)) {
                    var g = b.r + c.r, h = e * e + f * f;
                    g *= g, d *= d;
                    var i = .5 + (d - g) / (2 * h), j = Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) / (2 * h);
                    c.x = a.x + i * e + j * f, c.y = a.y + i * f - j * e
                } else c.x = a.x + d, c.y = a.y
            }

            function Fe(a, b) {
                return a.parent == b.parent ? 1 : 2
            }

            function Ge(a) {
                var b = a.children;
                return b.length ? b[0] : a.t
            }

            function He(a) {
                var b, c = a.children;
                return (b = c.length) ? c[b - 1] : a.t
            }

            function Ie(a, b, c) {
                var d = c / (b.i - a.i);
                b.c -= d, b.s += c, a.c += d, b.z += c, b.m += c
            }

            function Je(a) {
                for (var b, c = 0, d = 0, e = a.children, f = e.length; --f >= 0;)b = e[f], b.z += c, b.m += c, c += b.s + (d += b.c)
            }

            function Ke(a, b, c) {
                return a.a.parent === b.parent ? a.a : c
            }

            function Le(a) {
                return 1 + ig.max(a, function (a) {
                        return a.y
                    })
            }

            function Me(a) {
                return a.reduce(function (a, b) {
                        return a + b.x
                    }, 0) / a.length
            }

            function Ne(a) {
                var b = a.children;
                return b && b.length ? Ne(b[0]) : a
            }

            function Oe(a) {
                var b, c = a.children;
                return c && (b = c.length) ? Oe(c[b - 1]) : a
            }

            function Pe(a) {
                return {x: a.x, y: a.y, dx: a.dx, dy: a.dy}
            }

            function Qe(a, b) {
                var c = a.x + b[3], d = a.y + b[0], e = a.dx - b[1] - b[3], f = a.dy - b[0] - b[2];
                return 0 > e && (c += e / 2, e = 0), 0 > f && (d += f / 2, f = 0), {x: c, y: d, dx: e, dy: f}
            }

            function Re(a) {
                var b = a[0], c = a[a.length - 1];
                return c > b ? [b, c] : [c, b]
            }

            function Se(a) {
                return a.rangeExtent ? a.rangeExtent() : Re(a.range())
            }

            function Te(a, b, c, d) {
                var e = c(a[0], a[1]), f = d(b[0], b[1]);
                return function (a) {
                    return f(e(a))
                }
            }

            function Ue(a, b) {
                var c, d = 0, e = a.length - 1, f = a[d], g = a[e];
                return f > g && (c = d, d = e, e = c, c = f, f = g, g = c), a[d] = b.floor(f), a[e] = b.ceil(g), a
            }

            function Ve(a) {
                return a ? {
                    floor: function (b) {
                        return Math.floor(b / a) * a
                    }, ceil: function (b) {
                        return Math.ceil(b / a) * a
                    }
                } : yi
            }

            function We(a, b, c, d) {
                var e = [], f = [], g = 0, h = Math.min(a.length, b.length) - 1;
                for (a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++g <= h;)e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
                return function (b) {
                    var c = ig.bisect(a, b, 1, h) - 1;
                    return f[c](e[c](b))
                }
            }

            function Xe(a, b, c, d) {
                function e() {
                    var e = Math.min(a.length, b.length) > 2 ? We : Te, i = d ? Xd : Wd;
                    return g = e(a, b, i, c), h = e(b, a, i, td), f
                }

                function f(a) {
                    return g(a)
                }

                var g, h;
                return f.invert = function (a) {
                    return h(a)
                }, f.domain = function (b) {
                    return arguments.length ? (a = b.map(Number), e()) : a
                }, f.range = function (a) {
                    return arguments.length ? (b = a, e()) : b
                }, f.rangeRound = function (a) {
                    return f.range(a).interpolate(Ld)
                }, f.clamp = function (a) {
                    return arguments.length ? (d = a, e()) : d
                }, f.interpolate = function (a) {
                    return arguments.length ? (c = a, e()) : c
                }, f.ticks = function (b) {
                    return _e(a, b)
                }, f.tickFormat = function (b, c) {
                    return af(a, b, c)
                }, f.nice = function (b) {
                    return Ze(a, b), e()
                }, f.copy = function () {
                    return Xe(a, b, c, d)
                }, e()
            }

            function Ye(a, b) {
                return ig.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
            }

            function Ze(a, b) {
                return Ue(a, Ve($e(a, b)[2])), Ue(a, Ve($e(a, b)[2])), a
            }

            function $e(a, b) {
                null == b && (b = 10);
                var c = Re(a), d = c[1] - c[0], e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)), f = b / d * e;
                return .15 >= f ? e *= 10 : .35 >= f ? e *= 5 : .75 >= f && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + .5 * e, c[2] = e, c
            }

            function _e(a, b) {
                return ig.range.apply(ig, $e(a, b))
            }

            function af(a, b, c) {
                var d = $e(a, b);
                if (c) {
                    var e = mh.exec(c);
                    if (e.shift(), "s" === e[8]) {
                        var f = ig.formatPrefix(Math.max(ug(d[0]), ug(d[1])));
                        return e[7] || (e[7] = "." + bf(f.scale(d[2]))), e[8] = "f", c = ig.format(e.join("")), function (a) {
                            return c(f.scale(a)) + f.symbol
                        }
                    }
                    e[7] || (e[7] = "." + cf(e[8], d)), c = e.join("")
                } else c = ",." + bf(d[2]) + "f";
                return ig.format(c)
            }

            function bf(a) {
                return -Math.floor(Math.log(a) / Math.LN10 + .01)
            }

            function cf(a, b) {
                var c = bf(b[2]);
                return a in zi ? Math.abs(c - bf(Math.max(ug(b[0]), ug(b[1])))) + +("e" !== a) : c - 2 * ("%" === a)
            }

            function df(a, b, c, d) {
                function e(a) {
                    return (c ? Math.log(0 > a ? 0 : a) : -Math.log(a > 0 ? 0 : -a)) / Math.log(b)
                }

                function f(a) {
                    return c ? Math.pow(b, a) : -Math.pow(b, -a)
                }

                function g(b) {
                    return a(e(b))
                }

                return g.invert = function (b) {
                    return f(a.invert(b))
                }, g.domain = function (b) {
                    return arguments.length ? (c = b[0] >= 0, a.domain((d = b.map(Number)).map(e)), g) : d
                }, g.base = function (c) {
                    return arguments.length ? (b = +c, a.domain(d.map(e)), g) : b
                }, g.nice = function () {
                    var b = Ue(d.map(e), c ? Math : Bi);
                    return a.domain(b), d = b.map(f), g
                }, g.ticks = function () {
                    var a = Re(d), g = [], h = a[0], i = a[1], j = Math.floor(e(h)), k = Math.ceil(e(i)), l = b % 1 ? 2 : b;
                    if (isFinite(k - j)) {
                        if (c) {
                            for (; k > j; j++)for (var m = 1; l > m; m++)g.push(f(j) * m);
                            g.push(f(j))
                        } else for (g.push(f(j)); j++ < k;)for (var m = l - 1; m > 0; m--)g.push(f(j) * m);
                        for (j = 0; g[j] < h; j++);
                        for (k = g.length; g[k - 1] > i; k--);
                        g = g.slice(j, k)
                    }
                    return g
                }, g.tickFormat = function (a, c) {
                    if (!arguments.length)return Ai;
                    arguments.length < 2 ? c = Ai : "function" != typeof c && (c = ig.format(c));
                    var d = Math.max(1, b * a / g.ticks().length);
                    return function (a) {
                        var g = a / f(Math.round(e(a)));
                        return b - .5 > g * b && (g *= b), d >= g ? c(a) : ""
                    }
                }, g.copy = function () {
                    return df(a.copy(), b, c, d)
                }, Ye(g, a)
            }

            function ef(a, b, c) {
                function d(b) {
                    return a(e(b))
                }

                var e = ff(b), f = ff(1 / b);
                return d.invert = function (b) {
                    return f(a.invert(b))
                }, d.domain = function (b) {
                    return arguments.length ? (a.domain((c = b.map(Number)).map(e)), d) : c
                }, d.ticks = function (a) {
                    return _e(c, a)
                }, d.tickFormat = function (a, b) {
                    return af(c, a, b)
                }, d.nice = function (a) {
                    return d.domain(Ze(c, a))
                }, d.exponent = function (g) {
                    return arguments.length ? (e = ff(b = g), f = ff(1 / b), a.domain(c.map(e)), d) : b
                }, d.copy = function () {
                    return ef(a.copy(), b, c)
                }, Ye(d, a)
            }

            function ff(a) {
                return function (b) {
                    return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a)
                }
            }

            function gf(a, b) {
                function c(c) {
                    return f[((e.get(c) || ("range" === b.t ? e.set(c, a.push(c)) : NaN)) - 1) % f.length]
                }

                function d(b, c) {
                    return ig.range(a.length).map(function (a) {
                        return b + c * a
                    })
                }

                var e, f, g;
                return c.domain = function (d) {
                    if (!arguments.length)return a;
                    a = [], e = new k;
                    for (var f, g = -1, h = d.length; ++g < h;)e.has(f = d[g]) || e.set(f, a.push(f));
                    return c[b.t].apply(c, b.a)
                }, c.range = function (a) {
                    return arguments.length ? (f = a, g = 0, b = {t: "range", a: arguments}, c) : f
                }, c.rangePoints = function (e, h) {
                    arguments.length < 2 && (h = 0);
                    var i = e[0], j = e[1], k = a.length < 2 ? (i = (i + j) / 2, 0) : (j - i) / (a.length - 1 + h);
                    return f = d(i + k * h / 2, k), g = 0, b = {t: "rangePoints", a: arguments}, c
                }, c.rangeRoundPoints = function (e, h) {
                    arguments.length < 2 && (h = 0);
                    var i = e[0], j = e[1], k = a.length < 2 ? (i = j = Math.round((i + j) / 2), 0) : (j - i) / (a.length - 1 + h) | 0;
                    return f = d(i + Math.round(k * h / 2 + (j - i - (a.length - 1 + h) * k) / 2), k), g = 0, b = {
                        t: "rangeRoundPoints",
                        a: arguments
                    }, c
                }, c.rangeBands = function (e, h, i) {
                    arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
                    var j = e[1] < e[0], k = e[j - 0], l = e[1 - j], m = (l - k) / (a.length - h + 2 * i);
                    return f = d(k + m * i, m), j && f.reverse(), g = m * (1 - h), b = {
                        t: "rangeBands",
                        a: arguments
                    }, c
                }, c.rangeRoundBands = function (e, h, i) {
                    arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
                    var j = e[1] < e[0], k = e[j - 0], l = e[1 - j], m = Math.floor((l - k) / (a.length - h + 2 * i));
                    return f = d(k + Math.round((l - k - (a.length - h) * m) / 2), m), j && f.reverse(), g = Math.round(m * (1 - h)), b = {
                        t: "rangeRoundBands",
                        a: arguments
                    }, c
                }, c.rangeBand = function () {
                    return g
                }, c.rangeExtent = function () {
                    return Re(b.a[0])
                }, c.copy = function () {
                    return gf(a, b)
                }, c.domain(a)
            }

            function hf(a, b) {
                function c() {
                    var c = 0, d = b.length;
                    for (h = []; ++c < d;)h[c - 1] = ig.quantile(a, c / d);
                    return g
                }

                function g(a) {
                    return isNaN(a = +a) ? void 0 : b[ig.bisect(h, a)]
                }

                var h;
                return g.domain = function (b) {
                    return arguments.length ? (a = b.map(e).filter(f).sort(d), c()) : a
                }, g.range = function (a) {
                    return arguments.length ? (b = a, c()) : b
                }, g.quantiles = function () {
                    return h
                }, g.invertExtent = function (c) {
                    return c = b.indexOf(c), 0 > c ? [NaN, NaN] : [c > 0 ? h[c - 1] : a[0], c < h.length ? h[c] : a[a.length - 1]]
                }, g.copy = function () {
                    return hf(a, b)
                }, c()
            }

            function jf(a, b, c) {
                function d(b) {
                    return c[Math.max(0, Math.min(g, Math.floor(f * (b - a))))]
                }

                function e() {
                    return f = c.length / (b - a), g = c.length - 1, d
                }

                var f, g;
                return d.domain = function (c) {
                    return arguments.length ? (a = +c[0], b = +c[c.length - 1], e()) : [a, b]
                }, d.range = function (a) {
                    return arguments.length ? (c = a, e()) : c
                }, d.invertExtent = function (b) {
                    return b = c.indexOf(b), b = 0 > b ? NaN : b / f + a, [b, b + 1 / f]
                }, d.copy = function () {
                    return jf(a, b, c)
                }, e()
            }

            function kf(a, b) {
                function c(c) {
                    return c >= c ? b[ig.bisect(a, c)] : void 0
                }

                return c.domain = function (b) {
                    return arguments.length ? (a = b, c) : a
                }, c.range = function (a) {
                    return arguments.length ? (b = a, c) : b
                }, c.invertExtent = function (c) {
                    return c = b.indexOf(c), [a[c - 1], a[c]]
                }, c.copy = function () {
                    return kf(a, b)
                }, c
            }

            function lf(a) {
                function b(a) {
                    return +a
                }

                return b.invert = b, b.domain = b.range = function (c) {
                    return arguments.length ? (a = c.map(b), b) : a
                }, b.ticks = function (b) {
                    return _e(a, b)
                }, b.tickFormat = function (b, c) {
                    return af(a, b, c)
                }, b.copy = function () {
                    return lf(a)
                }, b
            }

            function mf() {
                return 0
            }

            function nf(a) {
                return a.innerRadius
            }

            function of(a) {
                return a.outerRadius
            }

            function pf(a) {
                return a.startAngle
            }

            function qf(a) {
                return a.endAngle
            }

            function rf(a) {
                return a && a.padAngle
            }

            function sf(a, b, c, d) {
                return (a - c) * b - (b - d) * a > 0 ? 0 : 1
            }

            function tf(a, b, c, d, e) {
                var f = a[0] - b[0], g = a[1] - b[1], h = (e ? d : -d) / Math.sqrt(f * f + g * g), i = h * g, j = -h * f, k = a[0] + i, l = a[1] + j, m = b[0] + i, n = b[1] + j, o = (k + m) / 2, p = (l + n) / 2, q = m - k, r = n - l, s = q * q + r * r, t = c - d, u = k * n - m * l, v = (0 > r ? -1 : 1) * Math.sqrt(Math.max(0, t * t * s - u * u)), w = (u * r - q * v) / s, x = (-u * q - r * v) / s, y = (u * r + q * v) / s, z = (-u * q + r * v) / s, A = w - o, B = x - p, C = y - o, D = z - p;
                return A * A + B * B > C * C + D * D && (w = y, x = z), [[w - i, x - j], [w * c / t, x * c / t]]
            }

            function uf(a) {
                function b(b) {
                    function g() {
                        j.push("M", f(a(k), h))
                    }

                    for (var i, j = [], k = [], l = -1, m = b.length, n = Ba(c), o = Ba(d); ++l < m;)e.call(this, i = b[l], l) ? k.push([+n.call(this, i, l), +o.call(this, i, l)]) : k.length && (g(), k = []);
                    return k.length && g(), j.length ? j.join("") : null
                }

                var c = Dc, d = Ec, e = Eb, f = vf, g = f.key, h = .7;
                return b.x = function (a) {
                    return arguments.length ? (c = a, b) : c
                }, b.y = function (a) {
                    return arguments.length ? (d = a, b) : d
                }, b.defined = function (a) {
                    return arguments.length ? (e = a, b) : e
                }, b.interpolate = function (a) {
                    return arguments.length ? (g = "function" == typeof a ? f = a : (f = Hi.get(a) || vf).key, b) : g
                }, b.tension = function (a) {
                    return arguments.length ? (h = a, b) : h
                }, b
            }

            function vf(a) {
                return a.length > 1 ? a.join("L") : a + "Z"
            }

            function wf(a) {
                return a.join("L") + "Z"
            }

            function xf(a) {
                for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;)e.push("H", (d[0] + (d = a[b])[0]) / 2, "V", d[1]);
                return c > 1 && e.push("H", d[0]), e.join("")
            }

            function yf(a) {
                for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;)e.push("V", (d = a[b])[1], "H", d[0]);
                return e.join("")
            }

            function zf(a) {
                for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;)e.push("H", (d = a[b])[0], "V", d[1]);
                return e.join("")
            }

            function Af(a, b) {
                return a.length < 4 ? vf(a) : a[1] + Df(a.slice(1, -1), Ef(a, b))
            }

            function Bf(a, b) {
                return a.length < 3 ? wf(a) : a[0] + Df((a.push(a[0]), a), Ef([a[a.length - 2]].concat(a, [a[1]]), b))
            }

            function Cf(a, b) {
                return a.length < 3 ? vf(a) : a[0] + Df(a, Ef(a, b))
            }

            function Df(a, b) {
                if (b.length < 1 || a.length != b.length && a.length != b.length + 2)return vf(a);
                var c = a.length != b.length, d = "", e = a[0], f = a[1], g = b[0], h = g, i = 1;
                if (c && (d += "Q" + (f[0] - 2 * g[0] / 3) + "," + (f[1] - 2 * g[1] / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2), b.length > 1) {
                    h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
                    for (var j = 2; j < b.length; j++, i++)f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
                }
                if (c) {
                    var k = a[i];
                    d += "Q" + (f[0] + 2 * h[0] / 3) + "," + (f[1] + 2 * h[1] / 3) + "," + k[0] + "," + k[1]
                }
                return d
            }

            function Ef(a, b) {
                for (var c, d = [], e = (1 - b) / 2, f = a[0], g = a[1], h = 1, i = a.length; ++h < i;)c = f, f = g, g = a[h], d.push([e * (g[0] - c[0]), e * (g[1] - c[1])]);
                return d
            }

            function Ff(a) {
                if (a.length < 3)return vf(a);
                var b = 1, c = a.length, d = a[0], e = d[0], f = d[1], g = [e, e, e, (d = a[1])[0]], h = [f, f, f, d[1]], i = [e, ",", f, "L", Jf(Ki, g), ",", Jf(Ki, h)];
                for (a.push(a[c - 1]); ++b <= c;)d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), Kf(i, g, h);
                return a.pop(), i.push("L", d), i.join("")
            }

            function Gf(a) {
                if (a.length < 4)return vf(a);
                for (var b, c = [], d = -1, e = a.length, f = [0], g = [0]; ++d < 3;)b = a[d], f.push(b[0]), g.push(b[1]);
                for (c.push(Jf(Ki, f) + "," + Jf(Ki, g)), --d; ++d < e;)b = a[d], f.shift(), f.push(b[0]), g.shift(), g.push(b[1]), Kf(c, f, g);
                return c.join("")
            }

            function Hf(a) {
                for (var b, c, d = -1, e = a.length, f = e + 4, g = [], h = []; ++d < 4;)c = a[d % e], g.push(c[0]), h.push(c[1]);
                for (b = [Jf(Ki, g), ",", Jf(Ki, h)], --d; ++d < f;)c = a[d % e], g.shift(), g.push(c[0]), h.shift(), h.push(c[1]), Kf(b, g, h);
                return b.join("")
            }

            function If(a, b) {
                var c = a.length - 1;
                if (c)for (var d, e, f = a[0][0], g = a[0][1], h = a[c][0] - f, i = a[c][1] - g, j = -1; ++j <= c;)d = a[j], e = j / c, d[0] = b * d[0] + (1 - b) * (f + e * h), d[1] = b * d[1] + (1 - b) * (g + e * i);
                return Ff(a)
            }

            function Jf(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
            }

            function Kf(a, b, c) {
                a.push("C", Jf(Ii, b), ",", Jf(Ii, c), ",", Jf(Ji, b), ",", Jf(Ji, c), ",", Jf(Ki, b), ",", Jf(Ki, c))
            }

            function Lf(a, b) {
                return (b[1] - a[1]) / (b[0] - a[0])
            }

            function Mf(a) {
                for (var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1], g = d[0] = Lf(e, f); ++b < c;)d[b] = (g + (g = Lf(e = f, f = a[b + 1]))) / 2;
                return d[b] = g, d
            }

            function Nf(a) {
                for (var b, c, d, e, f = [], g = Mf(a), h = -1, i = a.length - 1; ++h < i;)b = Lf(a[h], a[h + 1]), ug(b) < Lg ? g[h] = g[h + 1] = 0 : (c = g[h] / b, d = g[h + 1] / b, e = c * c + d * d, e > 9 && (e = 3 * b / Math.sqrt(e),
                    g[h] = e * c, g[h + 1] = e * d));
                for (h = -1; ++h <= i;)e = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), f.push([e || 0, g[h] * e || 0]);
                return f
            }

            function Of(a) {
                return a.length < 3 ? vf(a) : a[0] + Df(a, Nf(a))
            }

            function Pf(a) {
                for (var b, c, d, e = -1, f = a.length; ++e < f;)b = a[e], c = b[0], d = b[1] - Qg, b[0] = c * Math.cos(d), b[1] = c * Math.sin(d);
                return a
            }

            function Qf(a) {
                function b(b) {
                    function i() {
                        p.push("M", h(a(r), l), k, j(a(q.reverse()), l), "Z")
                    }

                    for (var m, n, o, p = [], q = [], r = [], s = -1, t = b.length, u = Ba(c), v = Ba(e), w = c === d ? function () {
                        return n
                    } : Ba(d), x = e === f ? function () {
                        return o
                    } : Ba(f); ++s < t;)g.call(this, m = b[s], s) ? (q.push([n = +u.call(this, m, s), o = +v.call(this, m, s)]), r.push([+w.call(this, m, s), +x.call(this, m, s)])) : q.length && (i(), q = [], r = []);
                    return q.length && i(), p.length ? p.join("") : null
                }

                var c = Dc, d = Dc, e = 0, f = Ec, g = Eb, h = vf, i = h.key, j = h, k = "L", l = .7;
                return b.x = function (a) {
                    return arguments.length ? (c = d = a, b) : d
                }, b.x0 = function (a) {
                    return arguments.length ? (c = a, b) : c
                }, b.x1 = function (a) {
                    return arguments.length ? (d = a, b) : d
                }, b.y = function (a) {
                    return arguments.length ? (e = f = a, b) : f
                }, b.y0 = function (a) {
                    return arguments.length ? (e = a, b) : e
                }, b.y1 = function (a) {
                    return arguments.length ? (f = a, b) : f
                }, b.defined = function (a) {
                    return arguments.length ? (g = a, b) : g
                }, b.interpolate = function (a) {
                    return arguments.length ? (i = "function" == typeof a ? h = a : (h = Hi.get(a) || vf).key, j = h.reverse || h, k = h.closed ? "M" : "L", b) : i
                }, b.tension = function (a) {
                    return arguments.length ? (l = a, b) : l
                }, b
            }

            function Rf(a) {
                return a.radius
            }

            function Sf(a) {
                return [a.x, a.y]
            }

            function Tf(a) {
                return function () {
                    var b = a.apply(this, arguments), c = b[0], d = b[1] - Qg;
                    return [c * Math.cos(d), c * Math.sin(d)]
                }
            }

            function Uf() {
                return 64
            }

            function Vf() {
                return "circle"
            }

            function Wf(a) {
                var b = Math.sqrt(a / Ng);
                return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
            }

            function Xf(a) {
                return function () {
                    var b, c, d;
                    (b = this[a]) && (d = b[c = b.active]) && (d.timer.c = null, d.timer.t = NaN, --b.count ? delete b[c] : delete this[a], b.active += .5, d.event && d.event.interrupt.call(this, this.__data__, d.index))
                }
            }

            function Yf(a, b, c) {
                return zg(a, Ri), a.namespace = b, a.id = c, a
            }

            function Zf(a, b, c, d) {
                var e = a.id, f = a.namespace;
                return S(a, "function" == typeof c ? function (a, g, h) {
                    a[f][e].tween.set(b, d(c.call(a, a.__data__, g, h)))
                } : (c = d(c), function (a) {
                    a[f][e].tween.set(b, c)
                }))
            }

            function $f(a) {
                return null == a && (a = ""), function () {
                    this.textContent = a
                }
            }

            function _f(a) {
                return null == a ? "__transition__" : "__transition_" + a + "__"
            }

            function ag(a, b, c, d, e) {
                function f(a) {
                    var b = p.delay;
                    return j.t = b + i, a >= b ? g(a - b) : void(j.c = g)
                }

                function g(c) {
                    var e = o.active, f = o[e];
                    f && (f.timer.c = null, f.timer.t = NaN, --o.count, delete o[e], f.event && f.event.interrupt.call(a, a.__data__, f.index));
                    for (var g in o)if (d > +g) {
                        var k = o[g];
                        k.timer.c = null, k.timer.t = NaN, --o.count, delete o[g]
                    }
                    j.c = h, Ga(function () {
                        return j.c && h(c || 1) && (j.c = null, j.t = NaN), 1
                    }, 0, i), o.active = d, p.event && p.event.start.call(a, a.__data__, b), n = [], p.tween.forEach(function (c, d) {
                        (d = d.call(a, a.__data__, b)) && n.push(d)
                    }), m = p.ease, l = p.duration
                }

                function h(e) {
                    for (var f = e / l, g = m(f), h = n.length; h > 0;)n[--h].call(a, g);
                    return f >= 1 ? (p.event && p.event.end.call(a, a.__data__, b), --o.count ? delete o[d] : delete a[c], 1) : void 0
                }

                var i, j, l, m, n, o = a[c] || (a[c] = {active: 0, count: 0}), p = o[d];
                p || (i = e.time, j = Ga(f, 0, i), p = o[d] = {
                    tween: new k,
                    time: i,
                    timer: j,
                    delay: e.delay,
                    duration: e.duration,
                    ease: e.ease,
                    index: b
                }, e = null, ++o.count)
            }

            function bg(a, b, c) {
                a.attr("transform", function (a) {
                    var d = b(a);
                    return "translate(" + (isFinite(d) ? d : c(a)) + ",0)"
                })
            }

            function cg(a, b, c) {
                a.attr("transform", function (a) {
                    var d = b(a);
                    return "translate(0," + (isFinite(d) ? d : c(a)) + ")"
                })
            }

            function dg(a) {
                return a.toISOString()
            }

            function eg(a, b, c) {
                function d(b) {
                    return a(b)
                }

                function e(a, c) {
                    var d = a[1] - a[0], e = d / c, f = ig.bisect($i, e);
                    return f == $i.length ? [b.year, $e(a.map(function (a) {
                        return a / 31536e6
                    }), c)[2]] : f ? b[e / $i[f - 1] < $i[f] / e ? f - 1 : f] : [bj, $e(a, c)[2]]
                }

                return d.invert = function (b) {
                    return fg(a.invert(b))
                }, d.domain = function (b) {
                    return arguments.length ? (a.domain(b), d) : a.domain().map(fg)
                }, d.nice = function (a, b) {
                    function c(c) {
                        return !isNaN(c) && !a.range(c, fg(+c + 1), b).length
                    }

                    var f = d.domain(), g = Re(f), h = null == a ? e(g, 10) : "number" == typeof a && e(g, a);
                    return h && (a = h[0], b = h[1]), d.domain(Ue(f, b > 1 ? {
                        floor: function (b) {
                            for (; c(b = a.floor(b));)b = fg(b - 1);
                            return b
                        }, ceil: function (b) {
                            for (; c(b = a.ceil(b));)b = fg(+b + 1);
                            return b
                        }
                    } : a))
                }, d.ticks = function (a, b) {
                    var c = Re(d.domain()), f = null == a ? e(c, 10) : "number" == typeof a ? e(c, a) : !a.range && [{range: a}, b];
                    return f && (a = f[0], b = f[1]), a.range(c[0], fg(+c[1] + 1), 1 > b ? 1 : b)
                }, d.tickFormat = function () {
                    return c
                }, d.copy = function () {
                    return eg(a.copy(), b, c)
                }, Ye(d, a)
            }

            function fg(a) {
                return new Date(a)
            }

            function gg(a) {
                return JSON.parse(a.responseText)
            }

            function hg(a) {
                var b = lg.createRange();
                return b.selectNode(lg.body), b.createContextualFragment(a.responseText)
            }

            var ig = {version: "3.5.17"}, jg = [].slice, kg = function (a) {
                return jg.call(a)
            }, lg = this.document;
            if (lg)try {
                kg(lg.documentElement.childNodes)[0].nodeType
            } catch (mg) {
                kg = function (a) {
                    for (var b = a.length, c = new Array(b); b--;)c[b] = a[b];
                    return c
                }
            }
            if (Date.now || (Date.now = function () {
                    return +new Date
                }), lg)try {
                lg.createElement("DIV").style.setProperty("opacity", 0, "")
            } catch (ng) {
                var og = this.Element.prototype, pg = og.setAttribute, qg = og.setAttributeNS, rg = this.CSSStyleDeclaration.prototype, sg = rg.setProperty;
                og.setAttribute = function (a, b) {
                    pg.call(this, a, b + "")
                }, og.setAttributeNS = function (a, b, c) {
                    qg.call(this, a, b, c + "")
                }, rg.setProperty = function (a, b, c) {
                    sg.call(this, a, b + "", c)
                }
            }
            ig.ascending = d, ig.descending = function (a, b) {
                return a > b ? -1 : b > a ? 1 : b >= a ? 0 : NaN
            }, ig.min = function (a, b) {
                var c, d, e = -1, f = a.length;
                if (1 === arguments.length) {
                    for (; ++e < f;)if (null != (d = a[e]) && d >= d) {
                        c = d;
                        break
                    }
                    for (; ++e < f;)null != (d = a[e]) && c > d && (c = d)
                } else {
                    for (; ++e < f;)if (null != (d = b.call(a, a[e], e)) && d >= d) {
                        c = d;
                        break
                    }
                    for (; ++e < f;)null != (d = b.call(a, a[e], e)) && c > d && (c = d)
                }
                return c
            }, ig.max = function (a, b) {
                var c, d, e = -1, f = a.length;
                if (1 === arguments.length) {
                    for (; ++e < f;)if (null != (d = a[e]) && d >= d) {
                        c = d;
                        break
                    }
                    for (; ++e < f;)null != (d = a[e]) && d > c && (c = d)
                } else {
                    for (; ++e < f;)if (null != (d = b.call(a, a[e], e)) && d >= d) {
                        c = d;
                        break
                    }
                    for (; ++e < f;)null != (d = b.call(a, a[e], e)) && d > c && (c = d)
                }
                return c
            }, ig.extent = function (a, b) {
                var c, d, e, f = -1, g = a.length;
                if (1 === arguments.length) {
                    for (; ++f < g;)if (null != (d = a[f]) && d >= d) {
                        c = e = d;
                        break
                    }
                    for (; ++f < g;)null != (d = a[f]) && (c > d && (c = d), d > e && (e = d))
                } else {
                    for (; ++f < g;)if (null != (d = b.call(a, a[f], f)) && d >= d) {
                        c = e = d;
                        break
                    }
                    for (; ++f < g;)null != (d = b.call(a, a[f], f)) && (c > d && (c = d), d > e && (e = d))
                }
                return [c, e]
            }, ig.sum = function (a, b) {
                var c, d = 0, e = a.length, g = -1;
                if (1 === arguments.length)for (; ++g < e;)f(c = +a[g]) && (d += c); else for (; ++g < e;)f(c = +b.call(a, a[g], g)) && (d += c);
                return d
            }, ig.mean = function (a, b) {
                var c, d = 0, g = a.length, h = -1, i = g;
                if (1 === arguments.length)for (; ++h < g;)f(c = e(a[h])) ? d += c : --i; else for (; ++h < g;)f(c = e(b.call(a, a[h], h))) ? d += c : --i;
                return i ? d / i : void 0
            }, ig.quantile = function (a, b) {
                var c = (a.length - 1) * b + 1, d = Math.floor(c), e = +a[d - 1], f = c - d;
                return f ? e + f * (a[d] - e) : e
            }, ig.median = function (a, b) {
                var c, g = [], h = a.length, i = -1;
                if (1 === arguments.length)for (; ++i < h;)f(c = e(a[i])) && g.push(c); else for (; ++i < h;)f(c = e(b.call(a, a[i], i))) && g.push(c);
                return g.length ? ig.quantile(g.sort(d), .5) : void 0
            }, ig.variance = function (a, b) {
                var c, d, g = a.length, h = 0, i = 0, j = -1, k = 0;
                if (1 === arguments.length)for (; ++j < g;)f(c = e(a[j])) && (d = c - h, h += d / ++k, i += d * (c - h)); else for (; ++j < g;)f(c = e(b.call(a, a[j], j))) && (d = c - h, h += d / ++k, i += d * (c - h));
                return k > 1 ? i / (k - 1) : void 0
            }, ig.deviation = function () {
                var a = ig.variance.apply(this, arguments);
                return a ? Math.sqrt(a) : a
            };
            var tg = g(d);
            ig.bisectLeft = tg.left, ig.bisect = ig.bisectRight = tg.right, ig.bisector = function (a) {
                return g(1 === a.length ? function (b, c) {
                    return d(a(b), c)
                } : a)
            }, ig.shuffle = function (a, b, c) {
                (f = arguments.length) < 3 && (c = a.length, 2 > f && (b = 0));
                for (var d, e, f = c - b; f;)e = Math.random() * f-- | 0, d = a[f + b], a[f + b] = a[e + b], a[e + b] = d;
                return a
            }, ig.permute = function (a, b) {
                for (var c = b.length, d = new Array(c); c--;)d[c] = a[b[c]];
                return d
            }, ig.pairs = function (a) {
                for (var b, c = 0, d = a.length - 1, e = a[0], f = new Array(0 > d ? 0 : d); d > c;)f[c] = [b = e, e = a[++c]];
                return f
            }, ig.transpose = function (a) {
                if (!(e = a.length))return [];
                for (var b = -1, c = ig.min(a, h), d = new Array(c); ++b < c;)for (var e, f = -1, g = d[b] = new Array(e); ++f < e;)g[f] = a[f][b];
                return d
            }, ig.zip = function () {
                return ig.transpose(arguments)
            }, ig.keys = function (a) {
                var b = [];
                for (var c in a)b.push(c);
                return b
            }, ig.values = function (a) {
                var b = [];
                for (var c in a)b.push(a[c]);
                return b
            }, ig.entries = function (a) {
                var b = [];
                for (var c in a)b.push({key: c, value: a[c]});
                return b
            }, ig.merge = function (a) {
                for (var b, c, d, e = a.length, f = -1, g = 0; ++f < e;)g += a[f].length;
                for (c = new Array(g); --e >= 0;)for (d = a[e], b = d.length; --b >= 0;)c[--g] = d[b];
                return c
            };
            var ug = Math.abs;
            ig.range = function (a, b, c) {
                if (arguments.length < 3 && (c = 1, arguments.length < 2 && (b = a, a = 0)), (b - a) / c === 1 / 0)throw new Error("infinite range");
                var d, e = [], f = i(ug(c)), g = -1;
                if (a *= f, b *= f, c *= f, 0 > c)for (; (d = a + c * ++g) > b;)e.push(d / f); else for (; (d = a + c * ++g) < b;)e.push(d / f);
                return e
            }, ig.map = function (a, b) {
                var c = new k;
                if (a instanceof k)a.forEach(function (a, b) {
                    c.set(a, b)
                }); else if (Array.isArray(a)) {
                    var d, e = -1, f = a.length;
                    if (1 === arguments.length)for (; ++e < f;)c.set(e, a[e]); else for (; ++e < f;)c.set(b.call(a, d = a[e], e), d)
                } else for (var g in a)c.set(g, a[g]);
                return c
            };
            var vg = "__proto__", wg = "\x00";
            j(k, {
                has: n, get: function (a) {
                    return this._[l(a)]
                }, set: function (a, b) {
                    return this._[l(a)] = b
                }, remove: o, keys: p, values: function () {
                    var a = [];
                    for (var b in this._)a.push(this._[b]);
                    return a
                }, entries: function () {
                    var a = [];
                    for (var b in this._)a.push({key: m(b), value: this._[b]});
                    return a
                }, size: q, empty: r, forEach: function (a) {
                    for (var b in this._)a.call(this, m(b), this._[b])
                }
            }), ig.nest = function () {
                function a(b, g, h) {
                    if (h >= f.length)return d ? d.call(e, g) : c ? g.sort(c) : g;
                    for (var i, j, l, m, n = -1, o = g.length, p = f[h++], q = new k; ++n < o;)(m = q.get(i = p(j = g[n]))) ? m.push(j) : q.set(i, [j]);
                    return b ? (j = b(), l = function (c, d) {
                        j.set(c, a(b, d, h))
                    }) : (j = {}, l = function (c, d) {
                        j[c] = a(b, d, h)
                    }), q.forEach(l), j
                }

                function b(a, c) {
                    if (c >= f.length)return a;
                    var d = [], e = g[c++];
                    return a.forEach(function (a, e) {
                        d.push({key: a, values: b(e, c)})
                    }), e ? d.sort(function (a, b) {
                        return e(a.key, b.key)
                    }) : d
                }

                var c, d, e = {}, f = [], g = [];
                return e.map = function (b, c) {
                    return a(c, b, 0)
                }, e.entries = function (c) {
                    return b(a(ig.map, c, 0), 0)
                }, e.key = function (a) {
                    return f.push(a), e
                }, e.sortKeys = function (a) {
                    return g[f.length - 1] = a, e
                }, e.sortValues = function (a) {
                    return c = a, e
                }, e.rollup = function (a) {
                    return d = a, e
                }, e
            }, ig.set = function (a) {
                var b = new s;
                if (a)for (var c = 0, d = a.length; d > c; ++c)b.add(a[c]);
                return b
            }, j(s, {
                has: n, add: function (a) {
                    return this._[l(a += "")] = !0, a
                }, remove: o, values: p, size: q, empty: r, forEach: function (a) {
                    for (var b in this._)a.call(this, m(b))
                }
            }), ig.behavior = {}, ig.rebind = function (a, b) {
                for (var c, d = 1, e = arguments.length; ++d < e;)a[c = arguments[d]] = u(a, b, b[c]);
                return a
            };
            var xg = ["webkit", "ms", "moz", "Moz", "o", "O"];
            ig.dispatch = function () {
                for (var a = new x, b = -1, c = arguments.length; ++b < c;)a[arguments[b]] = y(a);
                return a
            }, x.prototype.on = function (a, b) {
                var c = a.indexOf("."), d = "";
                if (c >= 0 && (d = a.slice(c + 1), a = a.slice(0, c)), a)return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
                if (2 === arguments.length) {
                    if (null == b)for (a in this)this.hasOwnProperty(a) && this[a].on(d, null);
                    return this
                }
            }, ig.event = null, ig.requote = function (a) {
                return a.replace(yg, "\\$&")
            };
            var yg = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, zg = {}.__proto__ ? function (a, b) {
                a.__proto__ = b
            } : function (a, b) {
                for (var c in b)a[c] = b[c]
            }, Ag = function (a, b) {
                return b.querySelector(a)
            }, Bg = function (a, b) {
                return b.querySelectorAll(a)
            }, Cg = function (a, b) {
                var c = a.matches || a[v(a, "matchesSelector")];
                return (Cg = function (a, b) {
                    return c.call(a, b)
                })(a, b)
            };
            "function" == typeof Sizzle && (Ag = function (a, b) {
                return Sizzle(a, b)[0] || null
            }, Bg = Sizzle, Cg = Sizzle.matchesSelector), ig.selection = function () {
                return ig.select(lg.documentElement)
            };
            var Dg = ig.selection.prototype = [];
            Dg.select = function (a) {
                var b, c, d, e, f = [];
                a = D(a);
                for (var g = -1, h = this.length; ++g < h;) {
                    f.push(b = []), b.parentNode = (d = this[g]).parentNode;
                    for (var i = -1, j = d.length; ++i < j;)(e = d[i]) ? (b.push(c = a.call(e, e.__data__, i, g)), c && "__data__" in e && (c.__data__ = e.__data__)) : b.push(null)
                }
                return C(f)
            }, Dg.selectAll = function (a) {
                var b, c, d = [];
                a = E(a);
                for (var e = -1, f = this.length; ++e < f;)for (var g = this[e], h = -1, i = g.length; ++h < i;)(c = g[h]) && (d.push(b = kg(a.call(c, c.__data__, h, e))), b.parentNode = c);
                return C(d)
            };
            var Eg = "http://www.w3.org/1999/xhtml", Fg = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: Eg,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };
            ig.ns = {
                prefix: Fg, qualify: function (a) {
                    var b = a.indexOf(":"), c = a;
                    return b >= 0 && "xmlns" !== (c = a.slice(0, b)) && (a = a.slice(b + 1)), Fg.hasOwnProperty(c) ? {
                        space: Fg[c],
                        local: a
                    } : a
                }
            }, Dg.attr = function (a, b) {
                if (arguments.length < 2) {
                    if ("string" == typeof a) {
                        var c = this.node();
                        return a = ig.ns.qualify(a), a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
                    }
                    for (b in a)this.each(F(b, a[b]));
                    return this
                }
                return this.each(F(a, b))
            }, Dg.classed = function (a, b) {
                if (arguments.length < 2) {
                    if ("string" == typeof a) {
                        var c = this.node(), d = (a = I(a)).length, e = -1;
                        if (b = c.classList) {
                            for (; ++e < d;)if (!b.contains(a[e]))return !1
                        } else for (b = c.getAttribute("class"); ++e < d;)if (!H(a[e]).test(b))return !1;
                        return !0
                    }
                    for (b in a)this.each(J(b, a[b]));
                    return this
                }
                return this.each(J(a, b))
            }, Dg.style = function (a, b, d) {
                var e = arguments.length;
                if (3 > e) {
                    if ("string" != typeof a) {
                        2 > e && (b = "");
                        for (d in a)this.each(L(d, a[d], b));
                        return this
                    }
                    if (2 > e) {
                        var f = this.node();
                        return c(f).getComputedStyle(f, null).getPropertyValue(a)
                    }
                    d = ""
                }
                return this.each(L(a, b, d))
            }, Dg.property = function (a, b) {
                if (arguments.length < 2) {
                    if ("string" == typeof a)return this.node()[a];
                    for (b in a)this.each(M(b, a[b]));
                    return this
                }
                return this.each(M(a, b))
            }, Dg.text = function (a) {
                return arguments.length ? this.each("function" == typeof a ? function () {
                    var b = a.apply(this, arguments);
                    this.textContent = null == b ? "" : b
                } : null == a ? function () {
                    this.textContent = ""
                } : function () {
                    this.textContent = a
                }) : this.node().textContent
            }, Dg.html = function (a) {
                return arguments.length ? this.each("function" == typeof a ? function () {
                    var b = a.apply(this, arguments);
                    this.innerHTML = null == b ? "" : b
                } : null == a ? function () {
                    this.innerHTML = ""
                } : function () {
                    this.innerHTML = a
                }) : this.node().innerHTML
            }, Dg.append = function (a) {
                return a = N(a), this.select(function () {
                    return this.appendChild(a.apply(this, arguments))
                })
            }, Dg.insert = function (a, b) {
                return a = N(a), b = D(b), this.select(function () {
                    return this.insertBefore(a.apply(this, arguments), b.apply(this, arguments) || null)
                })
            }, Dg.remove = function () {
                return this.each(O)
            }, Dg.data = function (a, b) {
                function c(a, c) {
                    var d, e, f, g = a.length, l = c.length, m = Math.min(g, l), n = new Array(l), o = new Array(l), p = new Array(g);
                    if (b) {
                        var q, r = new k, s = new Array(g);
                        for (d = -1; ++d < g;)(e = a[d]) && (r.has(q = b.call(e, e.__data__, d)) ? p[d] = e : r.set(q, e), s[d] = q);
                        for (d = -1; ++d < l;)(e = r.get(q = b.call(c, f = c[d], d))) ? e !== !0 && (n[d] = e, e.__data__ = f) : o[d] = P(f), r.set(q, !0);
                        for (d = -1; ++d < g;)d in s && r.get(s[d]) !== !0 && (p[d] = a[d])
                    } else {
                        for (d = -1; ++d < m;)e = a[d], f = c[d], e ? (e.__data__ = f, n[d] = e) : o[d] = P(f);
                        for (; l > d; ++d)o[d] = P(c[d]);
                        for (; g > d; ++d)p[d] = a[d]
                    }
                    o.update = n, o.parentNode = n.parentNode = p.parentNode = a.parentNode, h.push(o), i.push(n), j.push(p)
                }

                var d, e, f = -1, g = this.length;
                if (!arguments.length) {
                    for (a = new Array(g = (d = this[0]).length); ++f < g;)(e = d[f]) && (a[f] = e.__data__);
                    return a
                }
                var h = T([]), i = C([]), j = C([]);
                if ("function" == typeof a)for (; ++f < g;)c(d = this[f], a.call(d, d.parentNode.__data__, f)); else for (; ++f < g;)c(d = this[f], a);
                return i.enter = function () {
                    return h
                }, i.exit = function () {
                    return j
                }, i
            }, Dg.datum = function (a) {
                return arguments.length ? this.property("__data__", a) : this.property("__data__")
            }, Dg.filter = function (a) {
                var b, c, d, e = [];
                "function" != typeof a && (a = Q(a));
                for (var f = 0, g = this.length; g > f; f++) {
                    e.push(b = []), b.parentNode = (c = this[f]).parentNode;
                    for (var h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
                }
                return C(e)
            }, Dg.order = function () {
                for (var a = -1, b = this.length; ++a < b;)for (var c, d = this[a], e = d.length - 1, f = d[e]; --e >= 0;)(c = d[e]) && (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f), f = c);
                return this
            }, Dg.sort = function (a) {
                a = R.apply(this, arguments);
                for (var b = -1, c = this.length; ++b < c;)this[b].sort(a);
                return this.order()
            }, Dg.each = function (a) {
                return S(this, function (b, c, d) {
                    a.call(b, b.__data__, c, d)
                })
            }, Dg.call = function (a) {
                var b = kg(arguments);
                return a.apply(b[0] = this, b), this
            }, Dg.empty = function () {
                return !this.node()
            }, Dg.node = function () {
                for (var a = 0, b = this.length; b > a; a++)for (var c = this[a], d = 0, e = c.length; e > d; d++) {
                    var f = c[d];
                    if (f)return f
                }
                return null
            }, Dg.size = function () {
                var a = 0;
                return S(this, function () {
                    ++a
                }), a
            };
            var Gg = [];
            ig.selection.enter = T, ig.selection.enter.prototype = Gg, Gg.append = Dg.append, Gg.empty = Dg.empty, Gg.node = Dg.node, Gg.call = Dg.call, Gg.size = Dg.size, Gg.select = function (a) {
                for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i;) {
                    d = (e = this[h]).update, g.push(b = []), b.parentNode = e.parentNode;
                    for (var j = -1, k = e.length; ++j < k;)(f = e[j]) ? (b.push(d[j] = c = a.call(e.parentNode, f.__data__, j, h)), c.__data__ = f.__data__) : b.push(null)
                }
                return C(g)
            }, Gg.insert = function (a, b) {
                return arguments.length < 2 && (b = U(this)), Dg.insert.call(this, a, b)
            }, ig.select = function (b) {
                var c;
                return "string" == typeof b ? (c = [Ag(b, lg)], c.parentNode = lg.documentElement) : (c = [b], c.parentNode = a(b)), C([c])
            }, ig.selectAll = function (a) {
                var b;
                return "string" == typeof a ? (b = kg(Bg(a, lg)), b.parentNode = lg.documentElement) : (b = kg(a), b.parentNode = null), C([b])
            }, Dg.on = function (a, b, c) {
                var d = arguments.length;
                if (3 > d) {
                    if ("string" != typeof a) {
                        2 > d && (b = !1);
                        for (c in a)this.each(V(c, a[c], b));
                        return this
                    }
                    if (2 > d)return (d = this.node()["__on" + a]) && d._;
                    c = !1
                }
                return this.each(V(a, b, c))
            };
            var Hg = ig.map({mouseenter: "mouseover", mouseleave: "mouseout"});
            lg && Hg.forEach(function (a) {
                "on" + a in lg && Hg.remove(a)
            });
            var Ig, Jg = 0;
            ig.mouse = function (a) {
                return Z(a, A())
            };
            var Kg = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
            ig.touch = function (a, b, c) {
                if (arguments.length < 3 && (c = b, b = A().changedTouches), b)for (var d, e = 0, f = b.length; f > e; ++e)if ((d = b[e]).identifier === c)return Z(a, d)
            }, ig.behavior.drag = function () {
                function a() {
                    this.on("mousedown.drag", f).on("touchstart.drag", g)
                }

                function b(a, b, c, f, g) {
                    return function () {
                        function h() {
                            var a, c, d = b(m, p);
                            d && (a = d[0] - t[0], c = d[1] - t[1], o |= a | c, t = d, n({
                                type: "drag",
                                x: d[0] + j[0],
                                y: d[1] + j[1],
                                dx: a,
                                dy: c
                            }))
                        }

                        function i() {
                            b(m, p) && (r.on(f + q, null).on(g + q, null), s(o), n({type: "dragend"}))
                        }

                        var j, k = this, l = ig.event.target.correspondingElement || ig.event.target, m = k.parentNode, n = d.of(k, arguments), o = 0, p = a(), q = ".drag" + (null == p ? "" : "-" + p), r = ig.select(c(l)).on(f + q, h).on(g + q, i), s = Y(l), t = b(m, p);
                        e ? (j = e.apply(k, arguments), j = [j.x - t[0], j.y - t[1]]) : j = [0, 0], n({type: "dragstart"})
                    }
                }

                var d = B(a, "drag", "dragstart", "dragend"), e = null, f = b(w, ig.mouse, c, "mousemove", "mouseup"), g = b($, ig.touch, t, "touchmove", "touchend");
                return a.origin = function (b) {
                    return arguments.length ? (e = b, a) : e
                }, ig.rebind(a, d, "on")
            }, ig.touches = function (a, b) {
                return arguments.length < 2 && (b = A().touches), b ? kg(b).map(function (b) {
                    var c = Z(a, b);
                    return c.identifier = b.identifier, c
                }) : []
            };
            var Lg = 1e-6, Mg = Lg * Lg, Ng = Math.PI, Og = 2 * Ng, Pg = Og - Lg, Qg = Ng / 2, Rg = Ng / 180, Sg = 180 / Ng, Tg = Math.SQRT2, Ug = 2, Vg = 4;
            ig.interpolateZoom = function (a, b) {
                var c, d, e = a[0], f = a[1], g = a[2], h = b[0], i = b[1], j = b[2], k = h - e, l = i - f, m = k * k + l * l;
                if (Mg > m)d = Math.log(j / g) / Tg, c = function (a) {
                    return [e + a * k, f + a * l, g * Math.exp(Tg * a * d)]
                }; else {
                    var n = Math.sqrt(m), o = (j * j - g * g + Vg * m) / (2 * g * Ug * n), p = (j * j - g * g - Vg * m) / (2 * j * Ug * n), q = Math.log(Math.sqrt(o * o + 1) - o), r = Math.log(Math.sqrt(p * p + 1) - p);
                    d = (r - q) / Tg, c = function (a) {
                        var b = a * d, c = ea(q), h = g / (Ug * n) * (c * fa(Tg * b + q) - da(q));
                        return [e + h * k, f + h * l, g * c / ea(Tg * b + q)]
                    }
                }
                return c.duration = 1e3 * d, c
            }, ig.behavior.zoom = function () {
                function a(a) {
                    a.on(F, l).on(Xg + ".zoom", n).on("dblclick.zoom", o).on(I, m)
                }

                function b(a) {
                    return [(a[0] - y.x) / y.k, (a[1] - y.y) / y.k]
                }

                function d(a) {
                    return [a[0] * y.k + y.x, a[1] * y.k + y.y]
                }

                function e(a) {
                    y.k = Math.max(C[0], Math.min(C[1], a))
                }

                function f(a, b) {
                    b = d(b), y.x += a[0] - b[0], y.y += a[1] - b[1]
                }

                function g(b, c, d, g) {
                    b.__chart__ = {
                        x: y.x,
                        y: y.y,
                        k: y.k
                    }, e(Math.pow(2, g)), f(q = c, d), b = ig.select(b), D > 0 && (b = b.transition().duration(D)), b.call(a.event)
                }

                function h() {
                    v && v.domain(u.range().map(function (a) {
                        return (a - y.x) / y.k
                    }).map(u.invert)), x && x.domain(w.range().map(function (a) {
                        return (a - y.y) / y.k
                    }).map(w.invert))
                }

                function i(a) {
                    E++ || a({type: "zoomstart"})
                }

                function j(a) {
                    h(), a({type: "zoom", scale: y.k, translate: [y.x, y.y]})
                }

                function k(a) {
                    --E || (a({type: "zoomend"}), q = null)
                }

                function l() {
                    function a() {
                        h = 1, f(ig.mouse(e), m), j(g)
                    }

                    function d() {
                        l.on(G, null).on(H, null), n(h), k(g)
                    }

                    var e = this, g = J.of(e, arguments), h = 0, l = ig.select(c(e)).on(G, a).on(H, d), m = b(ig.mouse(e)), n = Y(e);
                    Qi.call(e), i(g)
                }

                function m() {
                    function a() {
                        var a = ig.touches(o);
                        return n = y.k, a.forEach(function (a) {
                            a.identifier in q && (q[a.identifier] = b(a))
                        }), a
                    }

                    function c() {
                        var b = ig.event.target;
                        ig.select(b).on(u, d).on(v, h), w.push(b);
                        for (var c = ig.event.changedTouches, e = 0, f = c.length; f > e; ++e)q[c[e].identifier] = null;
                        var i = a(), j = Date.now();
                        if (1 === i.length) {
                            if (500 > j - t) {
                                var k = i[0];
                                g(o, k, q[k.identifier], Math.floor(Math.log(y.k) / Math.LN2) + 1), z()
                            }
                            t = j
                        } else if (i.length > 1) {
                            var k = i[0], l = i[1], m = k[0] - l[0], n = k[1] - l[1];
                            r = m * m + n * n
                        }
                    }

                    function d() {
                        var a, b, c, d, g = ig.touches(o);
                        Qi.call(o);
                        for (var h = 0, i = g.length; i > h; ++h, d = null)if (c = g[h], d = q[c.identifier]) {
                            if (b)break;
                            a = c, b = d
                        }
                        if (d) {
                            var k = (k = c[0] - a[0]) * k + (k = c[1] - a[1]) * k, l = r && Math.sqrt(k / r);
                            a = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2], b = [(b[0] + d[0]) / 2, (b[1] + d[1]) / 2], e(l * n)
                        }
                        t = null, f(a, b), j(p)
                    }

                    function h() {
                        if (ig.event.touches.length) {
                            for (var b = ig.event.changedTouches, c = 0, d = b.length; d > c; ++c)delete q[b[c].identifier];
                            for (var e in q)return void a()
                        }
                        ig.selectAll(w).on(s, null), x.on(F, l).on(I, m), A(), k(p)
                    }

                    var n, o = this, p = J.of(o, arguments), q = {}, r = 0, s = ".zoom-" + ig.event.changedTouches[0].identifier, u = "touchmove" + s, v = "touchend" + s, w = [], x = ig.select(o), A = Y(o);
                    c(), i(p), x.on(F, null).on(I, c)
                }

                function n() {
                    var a = J.of(this, arguments);
                    s ? clearTimeout(s) : (Qi.call(this), p = b(q = r || ig.mouse(this)), i(a)), s = setTimeout(function () {
                        s = null, k(a)
                    }, 50), z(), e(Math.pow(2, .002 * Wg()) * y.k), f(q, p), j(a)
                }

                function o() {
                    var a = ig.mouse(this), c = Math.log(y.k) / Math.LN2;
                    g(this, a, b(a), ig.event.shiftKey ? Math.ceil(c) - 1 : Math.floor(c) + 1)
                }

                var p, q, r, s, t, u, v, w, x, y = {
                    x: 0,
                    y: 0,
                    k: 1
                }, A = [960, 500], C = Yg, D = 250, E = 0, F = "mousedown.zoom", G = "mousemove.zoom", H = "mouseup.zoom", I = "touchstart.zoom", J = B(a, "zoomstart", "zoom", "zoomend");
                return Xg || (Xg = "onwheel" in lg ? (Wg = function () {
                    return -ig.event.deltaY * (ig.event.deltaMode ? 120 : 1)
                }, "wheel") : "onmousewheel" in lg ? (Wg = function () {
                    return ig.event.wheelDelta
                }, "mousewheel") : (Wg = function () {
                    return -ig.event.detail
                }, "MozMousePixelScroll")), a.event = function (a) {
                    a.each(function () {
                        var a = J.of(this, arguments), b = y;
                        Oi ? ig.select(this).transition().each("start.zoom", function () {
                            y = this.__chart__ || {x: 0, y: 0, k: 1}, i(a)
                        }).tween("zoom:zoom", function () {
                            var c = A[0], d = A[1], e = q ? q[0] : c / 2, f = q ? q[1] : d / 2, g = ig.interpolateZoom([(e - y.x) / y.k, (f - y.y) / y.k, c / y.k], [(e - b.x) / b.k, (f - b.y) / b.k, c / b.k]);
                            return function (b) {
                                var d = g(b), h = c / d[2];
                                this.__chart__ = y = {x: e - d[0] * h, y: f - d[1] * h, k: h}, j(a)
                            }
                        }).each("interrupt.zoom", function () {
                            k(a)
                        }).each("end.zoom", function () {
                            k(a)
                        }) : (this.__chart__ = y, i(a), j(a), k(a))
                    })
                }, a.translate = function (b) {
                    return arguments.length ? (y = {x: +b[0], y: +b[1], k: y.k}, h(), a) : [y.x, y.y]
                }, a.scale = function (b) {
                    return arguments.length ? (y = {x: y.x, y: y.y, k: null}, e(+b), h(), a) : y.k
                }, a.scaleExtent = function (b) {
                    return arguments.length ? (C = null == b ? Yg : [+b[0], +b[1]], a) : C
                }, a.center = function (b) {
                    return arguments.length ? (r = b && [+b[0], +b[1]], a) : r
                }, a.size = function (b) {
                    return arguments.length ? (A = b && [+b[0], +b[1]], a) : A
                }, a.duration = function (b) {
                    return arguments.length ? (D = +b, a) : D
                }, a.x = function (b) {
                    return arguments.length ? (v = b, u = b.copy(), y = {x: 0, y: 0, k: 1}, a) : v
                }, a.y = function (b) {
                    return arguments.length ? (x = b, w = b.copy(), y = {x: 0, y: 0, k: 1}, a) : x
                }, ig.rebind(a, J, "on")
            };
            var Wg, Xg, Yg = [0, 1 / 0];
            ig.color = ha, ha.prototype.toString = function () {
                return this.rgb() + ""
            }, ig.hsl = ia;
            var Zg = ia.prototype = new ha;
            Zg.brighter = function (a) {
                return a = Math.pow(.7, arguments.length ? a : 1), new ia(this.h, this.s, this.l / a)
            }, Zg.darker = function (a) {
                return a = Math.pow(.7, arguments.length ? a : 1), new ia(this.h, this.s, a * this.l)
            }, Zg.rgb = function () {
                return ja(this.h, this.s, this.l)
            }, ig.hcl = ka;
            var $g = ka.prototype = new ha;
            $g.brighter = function (a) {
                return new ka(this.h, this.c, Math.min(100, this.l + _g * (arguments.length ? a : 1)))
            }, $g.darker = function (a) {
                return new ka(this.h, this.c, Math.max(0, this.l - _g * (arguments.length ? a : 1)))
            }, $g.rgb = function () {
                return la(this.h, this.c, this.l).rgb()
            }, ig.lab = ma;
            var _g = 18, ah = .95047, bh = 1, ch = 1.08883, dh = ma.prototype = new ha;
            dh.brighter = function (a) {
                return new ma(Math.min(100, this.l + _g * (arguments.length ? a : 1)), this.a, this.b)
            }, dh.darker = function (a) {
                return new ma(Math.max(0, this.l - _g * (arguments.length ? a : 1)), this.a, this.b)
            }, dh.rgb = function () {
                return na(this.l, this.a, this.b)
            }, ig.rgb = sa;
            var eh = sa.prototype = new ha;
            eh.brighter = function (a) {
                a = Math.pow(.7, arguments.length ? a : 1);
                var b = this.r, c = this.g, d = this.b, e = 30;
                return b || c || d ? (b && e > b && (b = e), c && e > c && (c = e), d && e > d && (d = e), new sa(Math.min(255, b / a), Math.min(255, c / a), Math.min(255, d / a))) : new sa(e, e, e)
            }, eh.darker = function (a) {
                return a = Math.pow(.7, arguments.length ? a : 1), new sa(a * this.r, a * this.g, a * this.b)
            }, eh.hsl = function () {
                return xa(this.r, this.g, this.b)
            }, eh.toString = function () {
                return "#" + va(this.r) + va(this.g) + va(this.b)
            };
            var fh = ig.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });
            fh.forEach(function (a, b) {
                fh.set(a, ta(b))
            }), ig.functor = Ba, ig.xhr = Ca(t), ig.dsv = function (a, b) {
                function c(a, c, f) {
                    arguments.length < 3 && (f = c, c = null);
                    var g = Da(a, b, null == c ? d : e(c), f);
                    return g.row = function (a) {
                        return arguments.length ? g.response(null == (c = a) ? d : e(a)) : c
                    }, g
                }

                function d(a) {
                    return c.parse(a.responseText)
                }

                function e(a) {
                    return function (b) {
                        return c.parse(b.responseText, a)
                    }
                }

                function f(b) {
                    return b.map(g).join(a)
                }

                function g(a) {
                    return h.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
                }

                var h = new RegExp('["' + a + "\n]"), i = a.charCodeAt(0);
                return c.parse = function (a, b) {
                    var d;
                    return c.parseRows(a, function (a, c) {
                        if (d)return d(a, c - 1);
                        var e = new Function("d", "return {" + a.map(function (a, b) {
                                return JSON.stringify(a) + ": d[" + b + "]"
                            }).join(",") + "}");
                        d = b ? function (a, c) {
                            return b(e(a), c)
                        } : e
                    })
                }, c.parseRows = function (a, b) {
                    function c() {
                        if (k >= j)return g;
                        if (e)return e = !1, f;
                        var b = k;
                        if (34 === a.charCodeAt(b)) {
                            for (var c = b; c++ < j;)if (34 === a.charCodeAt(c)) {
                                if (34 !== a.charCodeAt(c + 1))break;
                                ++c
                            }
                            k = c + 2;
                            var d = a.charCodeAt(c + 1);
                            return 13 === d ? (e = !0, 10 === a.charCodeAt(c + 2) && ++k) : 10 === d && (e = !0), a.slice(b + 1, c).replace(/""/g, '"')
                        }
                        for (; j > k;) {
                            var d = a.charCodeAt(k++), h = 1;
                            if (10 === d)e = !0; else if (13 === d)e = !0, 10 === a.charCodeAt(k) && (++k, ++h); else if (d !== i)continue;
                            return a.slice(b, k - h)
                        }
                        return a.slice(b)
                    }

                    for (var d, e, f = {}, g = {}, h = [], j = a.length, k = 0, l = 0; (d = c()) !== g;) {
                        for (var m = []; d !== f && d !== g;)m.push(d), d = c();
                        b && null == (m = b(m, l++)) || h.push(m)
                    }
                    return h
                }, c.format = function (b) {
                    if (Array.isArray(b[0]))return c.formatRows(b);
                    var d = new s, e = [];
                    return b.forEach(function (a) {
                        for (var b in a)d.has(b) || e.push(d.add(b))
                    }), [e.map(g).join(a)].concat(b.map(function (b) {
                        return e.map(function (a) {
                            return g(b[a])
                        }).join(a)
                    })).join("\n")
                }, c.formatRows = function (a) {
                    return a.map(f).join("\n")
                }, c
            }, ig.csv = ig.dsv(",", "text/csv"), ig.tsv = ig.dsv("	", "text/tab-separated-values");
            var gh, hh, ih, jh, kh = this[v(this, "requestAnimationFrame")] || function (a) {
                    setTimeout(a, 17)
                };
            ig.timer = function () {
                Ga.apply(this, arguments)
            }, ig.timer.flush = function () {
                Ia(), Ja()
            }, ig.round = function (a, b) {
                return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
            };
            var lh = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(La);
            ig.formatPrefix = function (a, b) {
                var c = 0;
                return (a = +a) && (0 > a && (a *= -1), b && (a = ig.round(a, Ka(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, 3 * Math.floor((c - 1) / 3)))), lh[8 + c / 3]
            };
            var mh = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, nh = ig.map({
                b: function (a) {
                    return a.toString(2)
                }, c: function (a) {
                    return String.fromCharCode(a)
                }, o: function (a) {
                    return a.toString(8)
                }, x: function (a) {
                    return a.toString(16)
                }, X: function (a) {
                    return a.toString(16).toUpperCase()
                }, g: function (a, b) {
                    return a.toPrecision(b)
                }, e: function (a, b) {
                    return a.toExponential(b)
                }, f: function (a, b) {
                    return a.toFixed(b)
                }, r: function (a, b) {
                    return (a = ig.round(a, Ka(a, b))).toFixed(Math.max(0, Math.min(20, Ka(a * (1 + 1e-15), b))))
                }
            }), oh = ig.time = {}, ph = Date;
            Oa.prototype = {
                getDate: function () {
                    return this._.getUTCDate()
                }, getDay: function () {
                    return this._.getUTCDay()
                }, getFullYear: function () {
                    return this._.getUTCFullYear()
                }, getHours: function () {
                    return this._.getUTCHours()
                }, getMilliseconds: function () {
                    return this._.getUTCMilliseconds()
                }, getMinutes: function () {
                    return this._.getUTCMinutes()
                }, getMonth: function () {
                    return this._.getUTCMonth()
                }, getSeconds: function () {
                    return this._.getUTCSeconds()
                }, getTime: function () {
                    return this._.getTime()
                }, getTimezoneOffset: function () {
                    return 0
                }, valueOf: function () {
                    return this._.valueOf()
                }, setDate: function () {
                    qh.setUTCDate.apply(this._, arguments)
                }, setDay: function () {
                    qh.setUTCDay.apply(this._, arguments)
                }, setFullYear: function () {
                    qh.setUTCFullYear.apply(this._, arguments)
                }, setHours: function () {
                    qh.setUTCHours.apply(this._, arguments)
                }, setMilliseconds: function () {
                    qh.setUTCMilliseconds.apply(this._, arguments)
                }, setMinutes: function () {
                    qh.setUTCMinutes.apply(this._, arguments)
                }, setMonth: function () {
                    qh.setUTCMonth.apply(this._, arguments)
                }, setSeconds: function () {
                    qh.setUTCSeconds.apply(this._, arguments)
                }, setTime: function () {
                    qh.setTime.apply(this._, arguments)
                }
            };
            var qh = Date.prototype;
            oh.year = Pa(function (a) {
                return a = oh.day(a), a.setMonth(0, 1), a
            }, function (a, b) {
                a.setFullYear(a.getFullYear() + b)
            }, function (a) {
                return a.getFullYear()
            }), oh.years = oh.year.range, oh.years.utc = oh.year.utc.range, oh.day = Pa(function (a) {
                var b = new ph(2e3, 0);
                return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b
            }, function (a, b) {
                a.setDate(a.getDate() + b)
            }, function (a) {
                return a.getDate() - 1
            }), oh.days = oh.day.range, oh.days.utc = oh.day.utc.range, oh.dayOfYear = function (a) {
                var b = oh.year(a);
                return Math.floor((a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5)
            }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (a, b) {
                b = 7 - b;
                var c = oh[a] = Pa(function (a) {
                    return (a = oh.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7), a
                }, function (a, b) {
                    a.setDate(a.getDate() + 7 * Math.floor(b))
                }, function (a) {
                    var c = oh.year(a).getDay();
                    return Math.floor((oh.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
                });
                oh[a + "s"] = c.range, oh[a + "s"].utc = c.utc.range,
                    oh[a + "OfYear"] = function (a) {
                        var c = oh.year(a).getDay();
                        return Math.floor((oh.dayOfYear(a) + (c + b) % 7) / 7)
                    }
            }), oh.week = oh.sunday, oh.weeks = oh.sunday.range, oh.weeks.utc = oh.sunday.utc.range, oh.weekOfYear = oh.sundayOfYear;
            var rh = {"-": "", _: " ", 0: "0"}, sh = /^\s*\d+/, th = /^%/;
            ig.locale = function (a) {
                return {numberFormat: Ma(a), timeFormat: Ra(a)}
            };
            var uh = ig.locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            ig.format = uh.numberFormat, ig.geo = {}, kb.prototype = {
                s: 0, t: 0, add: function (a) {
                    lb(a, this.t, vh), lb(vh.s, this.s, this), this.s ? this.t += vh.t : this.s = vh.t
                }, reset: function () {
                    this.s = this.t = 0
                }, valueOf: function () {
                    return this.s
                }
            };
            var vh = new kb;
            ig.geo.stream = function (a, b) {
                a && wh.hasOwnProperty(a.type) ? wh[a.type](a, b) : mb(a, b)
            };
            var wh = {
                Feature: function (a, b) {
                    mb(a.geometry, b)
                }, FeatureCollection: function (a, b) {
                    for (var c = a.features, d = -1, e = c.length; ++d < e;)mb(c[d].geometry, b)
                }
            }, xh = {
                Sphere: function (a, b) {
                    b.sphere()
                }, Point: function (a, b) {
                    a = a.coordinates, b.point(a[0], a[1], a[2])
                }, MultiPoint: function (a, b) {
                    for (var c = a.coordinates, d = -1, e = c.length; ++d < e;)a = c[d], b.point(a[0], a[1], a[2])
                }, LineString: function (a, b) {
                    nb(a.coordinates, b, 0)
                }, MultiLineString: function (a, b) {
                    for (var c = a.coordinates, d = -1, e = c.length; ++d < e;)nb(c[d], b, 0)
                }, Polygon: function (a, b) {
                    ob(a.coordinates, b)
                }, MultiPolygon: function (a, b) {
                    for (var c = a.coordinates, d = -1, e = c.length; ++d < e;)ob(c[d], b)
                }, GeometryCollection: function (a, b) {
                    for (var c = a.geometries, d = -1, e = c.length; ++d < e;)mb(c[d], b)
                }
            };
            ig.geo.area = function (a) {
                return yh = 0, ig.geo.stream(a, Ah), yh
            };
            var yh, zh = new kb, Ah = {
                sphere: function () {
                    yh += 4 * Ng
                }, point: w, lineStart: w, lineEnd: w, polygonStart: function () {
                    zh.reset(), Ah.lineStart = pb
                }, polygonEnd: function () {
                    var a = 2 * zh;
                    yh += 0 > a ? 4 * Ng + a : a, Ah.lineStart = Ah.lineEnd = Ah.point = w
                }
            };
            ig.geo.bounds = function () {
                function a(a, b) {
                    t.push(u = [k = a, m = a]), l > b && (l = b), b > n && (n = b)
                }

                function b(b, c) {
                    var d = qb([b * Rg, c * Rg]);
                    if (r) {
                        var e = sb(r, d), f = [e[1], -e[0], 0], g = sb(f, e);
                        vb(g), g = wb(g);
                        var i = b - o, j = i > 0 ? 1 : -1, p = g[0] * Sg * j, q = ug(i) > 180;
                        if (q ^ (p > j * o && j * b > p)) {
                            var s = g[1] * Sg;
                            s > n && (n = s)
                        } else if (p = (p + 360) % 360 - 180, q ^ (p > j * o && j * b > p)) {
                            var s = -g[1] * Sg;
                            l > s && (l = s)
                        } else l > c && (l = c), c > n && (n = c);
                        q ? o > b ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b) : m >= k ? (k > b && (k = b), b > m && (m = b)) : b > o ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b)
                    } else a(b, c);
                    r = d, o = b
                }

                function c() {
                    v.point = b
                }

                function d() {
                    u[0] = k, u[1] = m, v.point = a, r = null
                }

                function e(a, c) {
                    if (r) {
                        var d = a - o;
                        s += ug(d) > 180 ? d + (d > 0 ? 360 : -360) : d
                    } else p = a, q = c;
                    Ah.point(a, c), b(a, c)
                }

                function f() {
                    Ah.lineStart()
                }

                function g() {
                    e(p, q), Ah.lineEnd(), ug(s) > Lg && (k = -(m = 180)), u[0] = k, u[1] = m, r = null
                }

                function h(a, b) {
                    return (b -= a) < 0 ? b + 360 : b
                }

                function i(a, b) {
                    return a[0] - b[0]
                }

                function j(a, b) {
                    return b[0] <= b[1] ? b[0] <= a && a <= b[1] : a < b[0] || b[1] < a
                }

                var k, l, m, n, o, p, q, r, s, t, u, v = {
                    point: a,
                    lineStart: c,
                    lineEnd: d,
                    polygonStart: function () {
                        v.point = e, v.lineStart = f, v.lineEnd = g, s = 0, Ah.polygonStart()
                    },
                    polygonEnd: function () {
                        Ah.polygonEnd(), v.point = a, v.lineStart = c, v.lineEnd = d, 0 > zh ? (k = -(m = 180), l = -(n = 90)) : s > Lg ? n = 90 : -Lg > s && (l = -90), u[0] = k, u[1] = m
                    }
                };
                return function (a) {
                    n = m = -(k = l = 1 / 0), t = [], ig.geo.stream(a, v);
                    var b = t.length;
                    if (b) {
                        t.sort(i);
                        for (var c, d = 1, e = t[0], f = [e]; b > d; ++d)c = t[d], j(c[0], e) || j(c[1], e) ? (h(e[0], c[1]) > h(e[0], e[1]) && (e[1] = c[1]), h(c[0], e[1]) > h(e[0], e[1]) && (e[0] = c[0])) : f.push(e = c);
                        for (var g, c, o = -(1 / 0), b = f.length - 1, d = 0, e = f[b]; b >= d; e = c, ++d)c = f[d], (g = h(e[1], c[0])) > o && (o = g, k = c[0], m = e[1])
                    }
                    return t = u = null, k === 1 / 0 || l === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[k, l], [m, n]]
                }
            }(), ig.geo.centroid = function (a) {
                Bh = Ch = Dh = Eh = Fh = Gh = Hh = Ih = Jh = Kh = Lh = 0, ig.geo.stream(a, Mh);
                var b = Jh, c = Kh, d = Lh, e = b * b + c * c + d * d;
                return Mg > e && (b = Gh, c = Hh, d = Ih, Lg > Ch && (b = Dh, c = Eh, d = Fh), e = b * b + c * c + d * d, Mg > e) ? [NaN, NaN] : [Math.atan2(c, b) * Sg, ca(d / Math.sqrt(e)) * Sg]
            };
            var Bh, Ch, Dh, Eh, Fh, Gh, Hh, Ih, Jh, Kh, Lh, Mh = {
                sphere: w,
                point: yb,
                lineStart: Ab,
                lineEnd: Bb,
                polygonStart: function () {
                    Mh.lineStart = Cb
                },
                polygonEnd: function () {
                    Mh.lineStart = Ab
                }
            }, Nh = Ib(Eb, Mb, Ob, [-Ng, -Ng / 2]), Oh = 1e9;
            ig.geo.clipExtent = function () {
                var a, b, c, d, e, f, g = {
                    stream: function (a) {
                        return e && (e.valid = !1), e = f(a), e.valid = !0, e
                    }, extent: function (h) {
                        return arguments.length ? (f = Sb(a = +h[0][0], b = +h[0][1], c = +h[1][0], d = +h[1][1]), e && (e.valid = !1, e = null), g) : [[a, b], [c, d]]
                    }
                };
                return g.extent([[0, 0], [960, 500]])
            }, (ig.geo.conicEqualArea = function () {
                return Tb(Ub)
            }).raw = Ub, ig.geo.albers = function () {
                return ig.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
            }, ig.geo.albersUsa = function () {
                function a(a) {
                    var f = a[0], g = a[1];
                    return b = null, c(f, g), b || (d(f, g), b) || e(f, g), b
                }

                var b, c, d, e, f = ig.geo.albers(), g = ig.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), h = ig.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), i = {
                    point: function (a, c) {
                        b = [a, c]
                    }
                };
                return a.invert = function (a) {
                    var b = f.scale(), c = f.translate(), d = (a[0] - c[0]) / b, e = (a[1] - c[1]) / b;
                    return (e >= .12 && .234 > e && d >= -.425 && -.214 > d ? g : e >= .166 && .234 > e && d >= -.214 && -.115 > d ? h : f).invert(a)
                }, a.stream = function (a) {
                    var b = f.stream(a), c = g.stream(a), d = h.stream(a);
                    return {
                        point: function (a, e) {
                            b.point(a, e), c.point(a, e), d.point(a, e)
                        }, sphere: function () {
                            b.sphere(), c.sphere(), d.sphere()
                        }, lineStart: function () {
                            b.lineStart(), c.lineStart(), d.lineStart()
                        }, lineEnd: function () {
                            b.lineEnd(), c.lineEnd(), d.lineEnd()
                        }, polygonStart: function () {
                            b.polygonStart(), c.polygonStart(), d.polygonStart()
                        }, polygonEnd: function () {
                            b.polygonEnd(), c.polygonEnd(), d.polygonEnd()
                        }
                    }
                }, a.precision = function (b) {
                    return arguments.length ? (f.precision(b), g.precision(b), h.precision(b), a) : f.precision()
                }, a.scale = function (b) {
                    return arguments.length ? (f.scale(b), g.scale(.35 * b), h.scale(b), a.translate(f.translate())) : f.scale()
                }, a.translate = function (b) {
                    if (!arguments.length)return f.translate();
                    var j = f.scale(), k = +b[0], l = +b[1];
                    return c = f.translate(b).clipExtent([[k - .455 * j, l - .238 * j], [k + .455 * j, l + .238 * j]]).stream(i).point, d = g.translate([k - .307 * j, l + .201 * j]).clipExtent([[k - .425 * j + Lg, l + .12 * j + Lg], [k - .214 * j - Lg, l + .234 * j - Lg]]).stream(i).point, e = h.translate([k - .205 * j, l + .212 * j]).clipExtent([[k - .214 * j + Lg, l + .166 * j + Lg], [k - .115 * j - Lg, l + .234 * j - Lg]]).stream(i).point, a
                }, a.scale(1070)
            };
            var Ph, Qh, Rh, Sh, Th, Uh, Vh = {
                point: w, lineStart: w, lineEnd: w, polygonStart: function () {
                    Qh = 0, Vh.lineStart = Vb
                }, polygonEnd: function () {
                    Vh.lineStart = Vh.lineEnd = Vh.point = w, Ph += ug(Qh / 2)
                }
            }, Wh = {point: Wb, lineStart: w, lineEnd: w, polygonStart: w, polygonEnd: w}, Xh = {
                point: Zb,
                lineStart: $b,
                lineEnd: _b,
                polygonStart: function () {
                    Xh.lineStart = ac
                },
                polygonEnd: function () {
                    Xh.point = Zb, Xh.lineStart = $b, Xh.lineEnd = _b
                }
            };
            ig.geo.path = function () {
                function a(a) {
                    return a && ("function" == typeof h && f.pointRadius(+h.apply(this, arguments)), g && g.valid || (g = e(f)), ig.geo.stream(a, g)), f.result()
                }

                function b() {
                    return g = null, a
                }

                var c, d, e, f, g, h = 4.5;
                return a.area = function (a) {
                    return Ph = 0, ig.geo.stream(a, e(Vh)), Ph
                }, a.centroid = function (a) {
                    return Dh = Eh = Fh = Gh = Hh = Ih = Jh = Kh = Lh = 0, ig.geo.stream(a, e(Xh)), Lh ? [Jh / Lh, Kh / Lh] : Ih ? [Gh / Ih, Hh / Ih] : Fh ? [Dh / Fh, Eh / Fh] : [NaN, NaN]
                }, a.bounds = function (a) {
                    return Th = Uh = -(Rh = Sh = 1 / 0), ig.geo.stream(a, e(Wh)), [[Rh, Sh], [Th, Uh]]
                }, a.projection = function (a) {
                    return arguments.length ? (e = (c = a) ? a.stream || dc(a) : t, b()) : c
                }, a.context = function (a) {
                    return arguments.length ? (f = null == (d = a) ? new Xb : new bc(a), "function" != typeof h && f.pointRadius(h), b()) : d
                }, a.pointRadius = function (b) {
                    return arguments.length ? (h = "function" == typeof b ? b : (f.pointRadius(+b), +b), a) : h
                }, a.projection(ig.geo.albersUsa()).context(null)
            }, ig.geo.transform = function (a) {
                return {
                    stream: function (b) {
                        var c = new ec(b);
                        for (var d in a)c[d] = a[d];
                        return c
                    }
                }
            }, ec.prototype = {
                point: function (a, b) {
                    this.stream.point(a, b)
                }, sphere: function () {
                    this.stream.sphere()
                }, lineStart: function () {
                    this.stream.lineStart()
                }, lineEnd: function () {
                    this.stream.lineEnd()
                }, polygonStart: function () {
                    this.stream.polygonStart()
                }, polygonEnd: function () {
                    this.stream.polygonEnd()
                }
            }, ig.geo.projection = gc, ig.geo.projectionMutator = hc, (ig.geo.equirectangular = function () {
                return gc(jc)
            }).raw = jc.invert = jc, ig.geo.rotation = function (a) {
                function b(b) {
                    return b = a(b[0] * Rg, b[1] * Rg), b[0] *= Sg, b[1] *= Sg, b
                }

                return a = lc(a[0] % 360 * Rg, a[1] * Rg, a.length > 2 ? a[2] * Rg : 0), b.invert = function (b) {
                    return b = a.invert(b[0] * Rg, b[1] * Rg), b[0] *= Sg, b[1] *= Sg, b
                }, b
            }, kc.invert = jc, ig.geo.circle = function () {
                function a() {
                    var a = "function" == typeof d ? d.apply(this, arguments) : d, b = lc(-a[0] * Rg, -a[1] * Rg, 0).invert, e = [];
                    return c(null, null, 1, {
                        point: function (a, c) {
                            e.push(a = b(a, c)), a[0] *= Sg, a[1] *= Sg
                        }
                    }), {type: "Polygon", coordinates: [e]}
                }

                var b, c, d = [0, 0], e = 6;
                return a.origin = function (b) {
                    return arguments.length ? (d = b, a) : d
                }, a.angle = function (d) {
                    return arguments.length ? (c = pc((b = +d) * Rg, e * Rg), a) : b
                }, a.precision = function (d) {
                    return arguments.length ? (c = pc(b * Rg, (e = +d) * Rg), a) : e
                }, a.angle(90)
            }, ig.geo.distance = function (a, b) {
                var c, d = (b[0] - a[0]) * Rg, e = a[1] * Rg, f = b[1] * Rg, g = Math.sin(d), h = Math.cos(d), i = Math.sin(e), j = Math.cos(e), k = Math.sin(f), l = Math.cos(f);
                return Math.atan2(Math.sqrt((c = l * g) * c + (c = j * k - i * l * h) * c), i * k + j * l * h)
            }, ig.geo.graticule = function () {
                function a() {
                    return {type: "MultiLineString", coordinates: b()}
                }

                function b() {
                    return ig.range(Math.ceil(f / q) * q, e, q).map(m).concat(ig.range(Math.ceil(j / r) * r, i, r).map(n)).concat(ig.range(Math.ceil(d / o) * o, c, o).filter(function (a) {
                        return ug(a % q) > Lg
                    }).map(k)).concat(ig.range(Math.ceil(h / p) * p, g, p).filter(function (a) {
                        return ug(a % r) > Lg
                    }).map(l))
                }

                var c, d, e, f, g, h, i, j, k, l, m, n, o = 10, p = o, q = 90, r = 360, s = 2.5;
                return a.lines = function () {
                    return b().map(function (a) {
                        return {type: "LineString", coordinates: a}
                    })
                }, a.outline = function () {
                    return {
                        type: "Polygon",
                        coordinates: [m(f).concat(n(i).slice(1), m(e).reverse().slice(1), n(j).reverse().slice(1))]
                    }
                }, a.extent = function (b) {
                    return arguments.length ? a.majorExtent(b).minorExtent(b) : a.minorExtent()
                }, a.majorExtent = function (b) {
                    return arguments.length ? (f = +b[0][0], e = +b[1][0], j = +b[0][1], i = +b[1][1], f > e && (b = f, f = e, e = b), j > i && (b = j, j = i, i = b), a.precision(s)) : [[f, j], [e, i]]
                }, a.minorExtent = function (b) {
                    return arguments.length ? (d = +b[0][0], c = +b[1][0], h = +b[0][1], g = +b[1][1], d > c && (b = d, d = c, c = b), h > g && (b = h, h = g, g = b), a.precision(s)) : [[d, h], [c, g]]
                }, a.step = function (b) {
                    return arguments.length ? a.majorStep(b).minorStep(b) : a.minorStep()
                }, a.majorStep = function (b) {
                    return arguments.length ? (q = +b[0], r = +b[1], a) : [q, r]
                }, a.minorStep = function (b) {
                    return arguments.length ? (o = +b[0], p = +b[1], a) : [o, p]
                }, a.precision = function (b) {
                    return arguments.length ? (s = +b, k = rc(h, g, 90), l = sc(d, c, s), m = rc(j, i, 90), n = sc(f, e, s), a) : s
                }, a.majorExtent([[-180, -90 + Lg], [180, 90 - Lg]]).minorExtent([[-180, -80 - Lg], [180, 80 + Lg]])
            }, ig.geo.greatArc = function () {
                function a() {
                    return {
                        type: "LineString",
                        coordinates: [b || d.apply(this, arguments), c || e.apply(this, arguments)]
                    }
                }

                var b, c, d = tc, e = uc;
                return a.distance = function () {
                    return ig.geo.distance(b || d.apply(this, arguments), c || e.apply(this, arguments))
                }, a.source = function (c) {
                    return arguments.length ? (d = c, b = "function" == typeof c ? null : c, a) : d
                }, a.target = function (b) {
                    return arguments.length ? (e = b, c = "function" == typeof b ? null : b, a) : e
                }, a.precision = function () {
                    return arguments.length ? a : 0
                }, a
            }, ig.geo.interpolate = function (a, b) {
                return vc(a[0] * Rg, a[1] * Rg, b[0] * Rg, b[1] * Rg)
            }, ig.geo.length = function (a) {
                return Yh = 0, ig.geo.stream(a, Zh), Yh
            };
            var Yh, Zh = {
                sphere: w,
                point: w,
                lineStart: wc,
                lineEnd: w,
                polygonStart: w,
                polygonEnd: w
            }, $h = xc(function (a) {
                return Math.sqrt(2 / (1 + a))
            }, function (a) {
                return 2 * Math.asin(a / 2)
            });
            (ig.geo.azimuthalEqualArea = function () {
                return gc($h)
            }).raw = $h;
            var _h = xc(function (a) {
                var b = Math.acos(a);
                return b && b / Math.sin(b)
            }, t);
            (ig.geo.azimuthalEquidistant = function () {
                return gc(_h)
            }).raw = _h, (ig.geo.conicConformal = function () {
                return Tb(yc)
            }).raw = yc, (ig.geo.conicEquidistant = function () {
                return Tb(zc)
            }).raw = zc;
            var ai = xc(function (a) {
                return 1 / a
            }, Math.atan);
            (ig.geo.gnomonic = function () {
                return gc(ai)
            }).raw = ai, Ac.invert = function (a, b) {
                return [a, 2 * Math.atan(Math.exp(b)) - Qg]
            }, (ig.geo.mercator = function () {
                return Bc(Ac)
            }).raw = Ac;
            var bi = xc(function () {
                return 1
            }, Math.asin);
            (ig.geo.orthographic = function () {
                return gc(bi)
            }).raw = bi;
            var ci = xc(function (a) {
                return 1 / (1 + a)
            }, function (a) {
                return 2 * Math.atan(a)
            });
            (ig.geo.stereographic = function () {
                return gc(ci)
            }).raw = ci, Cc.invert = function (a, b) {
                return [-b, 2 * Math.atan(Math.exp(a)) - Qg]
            }, (ig.geo.transverseMercator = function () {
                var a = Bc(Cc), b = a.center, c = a.rotate;
                return a.center = function (a) {
                    return a ? b([-a[1], a[0]]) : (a = b(), [a[1], -a[0]])
                }, a.rotate = function (a) {
                    return a ? c([a[0], a[1], a.length > 2 ? a[2] + 90 : 90]) : (a = c(), [a[0], a[1], a[2] - 90])
                }, c([0, 0, 90])
            }).raw = Cc, ig.geom = {}, ig.geom.hull = function (a) {
                function b(a) {
                    if (a.length < 3)return [];
                    var b, e = Ba(c), f = Ba(d), g = a.length, h = [], i = [];
                    for (b = 0; g > b; b++)h.push([+e.call(this, a[b], b), +f.call(this, a[b], b), b]);
                    for (h.sort(Gc), b = 0; g > b; b++)i.push([h[b][0], -h[b][1]]);
                    var j = Fc(h), k = Fc(i), l = k[0] === j[0], m = k[k.length - 1] === j[j.length - 1], n = [];
                    for (b = j.length - 1; b >= 0; --b)n.push(a[h[j[b]][2]]);
                    for (b = +l; b < k.length - m; ++b)n.push(a[h[k[b]][2]]);
                    return n
                }

                var c = Dc, d = Ec;
                return arguments.length ? b(a) : (b.x = function (a) {
                    return arguments.length ? (c = a, b) : c
                }, b.y = function (a) {
                    return arguments.length ? (d = a, b) : d
                }, b)
            }, ig.geom.polygon = function (a) {
                return zg(a, di), a
            };
            var di = ig.geom.polygon.prototype = [];
            di.area = function () {
                for (var a, b = -1, c = this.length, d = this[c - 1], e = 0; ++b < c;)a = d, d = this[b], e += a[1] * d[0] - a[0] * d[1];
                return .5 * e
            }, di.centroid = function (a) {
                var b, c, d = -1, e = this.length, f = 0, g = 0, h = this[e - 1];
                for (arguments.length || (a = -1 / (6 * this.area())); ++d < e;)b = h, h = this[d], c = b[0] * h[1] - h[0] * b[1], f += (b[0] + h[0]) * c, g += (b[1] + h[1]) * c;
                return [f * a, g * a]
            }, di.clip = function (a) {
                for (var b, c, d, e, f, g, h = Jc(a), i = -1, j = this.length - Jc(this), k = this[j - 1]; ++i < j;) {
                    for (b = a.slice(), a.length = 0, e = this[i], f = b[(d = b.length - h) - 1], c = -1; ++c < d;)g = b[c], Hc(g, k, e) ? (Hc(f, k, e) || a.push(Ic(f, g, k, e)), a.push(g)) : Hc(f, k, e) && a.push(Ic(f, g, k, e)), f = g;
                    h && a.push(a[0]), k = e
                }
                return a
            };
            var ei, fi, gi, hi, ii, ji = [], ki = [];
            Rc.prototype.prepare = function () {
                for (var a, b = this.edges, c = b.length; c--;)a = b[c].edge, a.b && a.a || b.splice(c, 1);
                return b.sort(Tc), b.length
            }, bd.prototype = {
                start: function () {
                    return this.edge.l === this.site ? this.edge.a : this.edge.b
                }, end: function () {
                    return this.edge.l === this.site ? this.edge.b : this.edge.a
                }
            }, cd.prototype = {
                insert: function (a, b) {
                    var c, d, e;
                    if (a) {
                        if (b.P = a, b.N = a.N, a.N && (a.N.P = b), a.N = b, a.R) {
                            for (a = a.R; a.L;)a = a.L;
                            a.L = b
                        } else a.R = b;
                        c = a
                    } else this._ ? (a = gd(this._), b.P = null, b.N = a, a.P = a.L = b, c = a) : (b.P = b.N = null, this._ = b, c = null);
                    for (b.L = b.R = null, b.U = c, b.C = !0, a = b; c && c.C;)d = c.U, c === d.L ? (e = d.R, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.R && (ed(this, c), a = c, c = a.U), c.C = !1, d.C = !0, fd(this, d))) : (e = d.L, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.L && (fd(this, c), a = c, c = a.U), c.C = !1, d.C = !0, ed(this, d))), c = a.U;
                    this._.C = !1
                }, remove: function (a) {
                    a.N && (a.N.P = a.P), a.P && (a.P.N = a.N), a.N = a.P = null;
                    var b, c, d, e = a.U, f = a.L, g = a.R;
                    if (c = f ? g ? gd(g) : f : g, e ? e.L === a ? e.L = c : e.R = c : this._ = c, f && g ? (d = c.C, c.C = a.C, c.L = f, f.U = c, c !== g ? (e = c.U, c.U = a.U, a = c.R, e.L = a, c.R = g, g.U = c) : (c.U = e, e = c, a = c.R)) : (d = a.C, a = c), a && (a.U = e), !d) {
                        if (a && a.C)return void(a.C = !1);
                        do {
                            if (a === this._)break;
                            if (a === e.L) {
                                if (b = e.R, b.C && (b.C = !1, e.C = !0, ed(this, e), b = e.R), b.L && b.L.C || b.R && b.R.C) {
                                    b.R && b.R.C || (b.L.C = !1, b.C = !0, fd(this, b), b = e.R), b.C = e.C, e.C = b.R.C = !1, ed(this, e), a = this._;
                                    break
                                }
                            } else if (b = e.L, b.C && (b.C = !1, e.C = !0, fd(this, e), b = e.L), b.L && b.L.C || b.R && b.R.C) {
                                b.L && b.L.C || (b.R.C = !1, b.C = !0, ed(this, b), b = e.L), b.C = e.C, e.C = b.L.C = !1, fd(this, e), a = this._;
                                break
                            }
                            b.C = !0, a = e, e = e.U
                        } while (!a.C);
                        a && (a.C = !1)
                    }
                }
            }, ig.geom.voronoi = function (a) {
                function b(a) {
                    var b = new Array(a.length), d = h[0][0], e = h[0][1], f = h[1][0], g = h[1][1];
                    return hd(c(a), h).cells.forEach(function (c, h) {
                        var i = c.edges, j = c.site, k = b[h] = i.length ? i.map(function (a) {
                            var b = a.start();
                            return [b.x, b.y]
                        }) : j.x >= d && j.x <= f && j.y >= e && j.y <= g ? [[d, g], [f, g], [f, e], [d, e]] : [];
                        k.point = a[h]
                    }), b
                }

                function c(a) {
                    return a.map(function (a, b) {
                        return {x: Math.round(f(a, b) / Lg) * Lg, y: Math.round(g(a, b) / Lg) * Lg, i: b}
                    })
                }

                var d = Dc, e = Ec, f = d, g = e, h = li;
                return a ? b(a) : (b.links = function (a) {
                    return hd(c(a)).edges.filter(function (a) {
                        return a.l && a.r
                    }).map(function (b) {
                        return {source: a[b.l.i], target: a[b.r.i]}
                    })
                }, b.triangles = function (a) {
                    var b = [];
                    return hd(c(a)).cells.forEach(function (c, d) {
                        for (var e, f, g = c.site, h = c.edges.sort(Tc), i = -1, j = h.length, k = h[j - 1].edge, l = k.l === g ? k.r : k.l; ++i < j;)e = k, f = l, k = h[i].edge, l = k.l === g ? k.r : k.l, d < f.i && d < l.i && jd(g, f, l) < 0 && b.push([a[d], a[f.i], a[l.i]])
                    }), b
                }, b.x = function (a) {
                    return arguments.length ? (f = Ba(d = a), b) : d
                }, b.y = function (a) {
                    return arguments.length ? (g = Ba(e = a), b) : e
                }, b.clipExtent = function (a) {
                    return arguments.length ? (h = null == a ? li : a, b) : h === li ? null : h
                }, b.size = function (a) {
                    return arguments.length ? b.clipExtent(a && [[0, 0], a]) : h === li ? null : h && h[1]
                }, b)
            };
            var li = [[-1e6, -1e6], [1e6, 1e6]];
            ig.geom.delaunay = function (a) {
                return ig.geom.voronoi().triangles(a)
            }, ig.geom.quadtree = function (a, b, c, d, e) {
                function f(a) {
                    function f(a, b, c, d, e, f, g, h) {
                        if (!isNaN(c) && !isNaN(d))if (a.leaf) {
                            var i = a.x, k = a.y;
                            if (null != i)if (ug(i - c) + ug(k - d) < .01)j(a, b, c, d, e, f, g, h); else {
                                var l = a.point;
                                a.x = a.y = a.point = null, j(a, l, i, k, e, f, g, h), j(a, b, c, d, e, f, g, h)
                            } else a.x = c, a.y = d, a.point = b
                        } else j(a, b, c, d, e, f, g, h)
                    }

                    function j(a, b, c, d, e, g, h, i) {
                        var j = .5 * (e + h), k = .5 * (g + i), l = c >= j, m = d >= k, n = m << 1 | l;
                        a.leaf = !1, a = a.nodes[n] || (a.nodes[n] = md()), l ? e = j : h = j, m ? g = k : i = k, f(a, b, c, d, e, g, h, i)
                    }

                    var k, l, m, n, o, p, q, r, s, t = Ba(h), u = Ba(i);
                    if (null != b)p = b, q = c, r = d, s = e; else if (r = s = -(p = q = 1 / 0), l = [], m = [], o = a.length, g)for (n = 0; o > n; ++n)k = a[n], k.x < p && (p = k.x), k.y < q && (q = k.y), k.x > r && (r = k.x), k.y > s && (s = k.y), l.push(k.x), m.push(k.y); else for (n = 0; o > n; ++n) {
                        var v = +t(k = a[n], n), w = +u(k, n);
                        p > v && (p = v), q > w && (q = w), v > r && (r = v), w > s && (s = w), l.push(v), m.push(w)
                    }
                    var x = r - p, y = s - q;
                    x > y ? s = q + x : r = p + y;
                    var z = md();
                    if (z.add = function (a) {
                            f(z, a, +t(a, ++n), +u(a, n), p, q, r, s)
                        }, z.visit = function (a) {
                            nd(a, z, p, q, r, s)
                        }, z.find = function (a) {
                            return od(z, a[0], a[1], p, q, r, s)
                        }, n = -1, null == b) {
                        for (; ++n < o;)f(z, a[n], l[n], m[n], p, q, r, s);
                        --n
                    } else a.forEach(z.add);
                    return l = m = a = k = null, z
                }

                var g, h = Dc, i = Ec;
                return (g = arguments.length) ? (h = kd, i = ld, 3 === g && (e = c, d = b, c = b = 0), f(a)) : (f.x = function (a) {
                    return arguments.length ? (h = a, f) : h
                }, f.y = function (a) {
                    return arguments.length ? (i = a, f) : i
                }, f.extent = function (a) {
                    return arguments.length ? (null == a ? b = c = d = e = null : (b = +a[0][0], c = +a[0][1], d = +a[1][0], e = +a[1][1]), f) : null == b ? null : [[b, c], [d, e]]
                }, f.size = function (a) {
                    return arguments.length ? (null == a ? b = c = d = e = null : (b = c = 0, d = +a[0], e = +a[1]), f) : null == b ? null : [d - b, e - c]
                }, f)
            }, ig.interpolateRgb = pd, ig.interpolateObject = qd, ig.interpolateNumber = rd, ig.interpolateString = sd;
            var mi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ni = new RegExp(mi.source, "g");
            ig.interpolate = td, ig.interpolators = [function (a, b) {
                var c = typeof b;
                return ("string" === c ? fh.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? pd : sd : b instanceof ha ? pd : Array.isArray(b) ? ud : "object" === c && isNaN(b) ? qd : rd)(a, b)
            }], ig.interpolateArray = ud;
            var oi = function () {
                return t
            }, pi = ig.map({
                linear: oi, poly: Bd, quad: function () {
                    return yd
                }, cubic: function () {
                    return zd
                }, sin: function () {
                    return Cd
                }, exp: function () {
                    return Dd
                }, circle: function () {
                    return Ed
                }, elastic: Fd, back: Gd, bounce: function () {
                    return Hd
                }
            }), qi = ig.map({
                "in": t, out: wd, "in-out": xd, "out-in": function (a) {
                    return xd(wd(a))
                }
            });
            ig.ease = function (a) {
                var b = a.indexOf("-"), c = b >= 0 ? a.slice(0, b) : a, d = b >= 0 ? a.slice(b + 1) : "in";
                return c = pi.get(c) || oi, d = qi.get(d) || t, vd(d(c.apply(null, jg.call(arguments, 1))))
            }, ig.interpolateHcl = Id, ig.interpolateHsl = Jd, ig.interpolateLab = Kd, ig.interpolateRound = Ld, ig.transform = function (a) {
                var b = lg.createElementNS(ig.ns.prefix.svg, "g");
                return (ig.transform = function (a) {
                    if (null != a) {
                        b.setAttribute("transform", a);
                        var c = b.transform.baseVal.consolidate()
                    }
                    return new Md(c ? c.matrix : ri)
                })(a)
            }, Md.prototype.toString = function () {
                return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
            };
            var ri = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
            ig.interpolateTransform = Vd, ig.layout = {}, ig.layout.bundle = function () {
                return function (a) {
                    for (var b = [], c = -1, d = a.length; ++c < d;)b.push(Yd(a[c]));
                    return b
                }
            }, ig.layout.chord = function () {
                function a() {
                    var a, j, l, m, n, o = {}, p = [], q = ig.range(f), r = [];
                    for (c = [], d = [], a = 0, m = -1; ++m < f;) {
                        for (j = 0, n = -1; ++n < f;)j += e[m][n];
                        p.push(j), r.push(ig.range(f)), a += j
                    }
                    for (g && q.sort(function (a, b) {
                        return g(p[a], p[b])
                    }), h && r.forEach(function (a, b) {
                        a.sort(function (a, c) {
                            return h(e[b][a], e[b][c])
                        })
                    }), a = (Og - k * f) / a, j = 0, m = -1; ++m < f;) {
                        for (l = j, n = -1; ++n < f;) {
                            var s = q[m], t = r[s][n], u = e[s][t], v = j, w = j += u * a;
                            o[s + "-" + t] = {index: s, subindex: t, startAngle: v, endAngle: w, value: u}
                        }
                        d[s] = {index: s, startAngle: l, endAngle: j, value: p[s]}, j += k
                    }
                    for (m = -1; ++m < f;)for (n = m - 1; ++n < f;) {
                        var x = o[m + "-" + n], y = o[n + "-" + m];
                        (x.value || y.value) && c.push(x.value < y.value ? {source: y, target: x} : {
                            source: x,
                            target: y
                        })
                    }
                    i && b()
                }

                function b() {
                    c.sort(function (a, b) {
                        return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
                    })
                }

                var c, d, e, f, g, h, i, j = {}, k = 0;
                return j.matrix = function (a) {
                    return arguments.length ? (f = (e = a) && e.length, c = d = null, j) : e
                }, j.padding = function (a) {
                    return arguments.length ? (k = a, c = d = null, j) : k
                }, j.sortGroups = function (a) {
                    return arguments.length ? (g = a, c = d = null, j) : g
                }, j.sortSubgroups = function (a) {
                    return arguments.length ? (h = a, c = null, j) : h
                }, j.sortChords = function (a) {
                    return arguments.length ? (i = a, c && b(), j) : i
                }, j.chords = function () {
                    return c || a(), c
                }, j.groups = function () {
                    return d || a(), d
                }, j
            }, ig.layout.force = function () {
                function a(a) {
                    return function (b, c, d, e) {
                        if (b.point !== a) {
                            var f = b.cx - a.x, g = b.cy - a.y, h = e - c, i = f * f + g * g;
                            if (i > h * h / r) {
                                if (p > i) {
                                    var j = b.charge / i;
                                    a.px -= f * j, a.py -= g * j
                                }
                                return !0
                            }
                            if (b.point && i && p > i) {
                                var j = b.pointCharge / i;
                                a.px -= f * j, a.py -= g * j
                            }
                        }
                        return !b.charge
                    }
                }

                function b(a) {
                    a.px = ig.event.x, a.py = ig.event.y, i.resume()
                }

                var c, d, e, f, g, h, i = {}, j = ig.dispatch("start", "tick", "end"), k = [1, 1], l = .9, m = si, n = ti, o = -30, p = ui, q = .1, r = .64, s = [], u = [];
                return i.tick = function () {
                    if ((e *= .99) < .005)return c = null, j.end({type: "end", alpha: e = 0}), !0;
                    var b, d, i, m, n, p, r, t, v, w = s.length, x = u.length;
                    for (d = 0; x > d; ++d)i = u[d], m = i.source, n = i.target, t = n.x - m.x, v = n.y - m.y, (p = t * t + v * v) && (p = e * g[d] * ((p = Math.sqrt(p)) - f[d]) / p, t *= p, v *= p, n.x -= t * (r = m.weight + n.weight ? m.weight / (m.weight + n.weight) : .5), n.y -= v * r, m.x += t * (r = 1 - r), m.y += v * r);
                    if ((r = e * q) && (t = k[0] / 2, v = k[1] / 2, d = -1, r))for (; ++d < w;)i = s[d], i.x += (t - i.x) * r, i.y += (v - i.y) * r;
                    if (o)for (de(b = ig.geom.quadtree(s), e, h), d = -1; ++d < w;)(i = s[d]).fixed || b.visit(a(i));
                    for (d = -1; ++d < w;)i = s[d], i.fixed ? (i.x = i.px, i.y = i.py) : (i.x -= (i.px - (i.px = i.x)) * l, i.y -= (i.py - (i.py = i.y)) * l);
                    j.tick({type: "tick", alpha: e})
                }, i.nodes = function (a) {
                    return arguments.length ? (s = a, i) : s
                }, i.links = function (a) {
                    return arguments.length ? (u = a, i) : u
                }, i.size = function (a) {
                    return arguments.length ? (k = a, i) : k
                }, i.linkDistance = function (a) {
                    return arguments.length ? (m = "function" == typeof a ? a : +a, i) : m
                }, i.distance = i.linkDistance, i.linkStrength = function (a) {
                    return arguments.length ? (n = "function" == typeof a ? a : +a, i) : n
                }, i.friction = function (a) {
                    return arguments.length ? (l = +a, i) : l
                }, i.charge = function (a) {
                    return arguments.length ? (o = "function" == typeof a ? a : +a, i) : o
                }, i.chargeDistance = function (a) {
                    return arguments.length ? (p = a * a, i) : Math.sqrt(p)
                }, i.gravity = function (a) {
                    return arguments.length ? (q = +a, i) : q
                }, i.theta = function (a) {
                    return arguments.length ? (r = a * a, i) : Math.sqrt(r)
                }, i.alpha = function (a) {
                    return arguments.length ? (a = +a, e ? a > 0 ? e = a : (c.c = null, c.t = NaN, c = null, j.end({
                        type: "end",
                        alpha: e = 0
                    })) : a > 0 && (j.start({type: "start", alpha: e = a}), c = Ga(i.tick)), i) : e
                }, i.start = function () {
                    function a(a, d) {
                        if (!c) {
                            for (c = new Array(e), i = 0; e > i; ++i)c[i] = [];
                            for (i = 0; j > i; ++i) {
                                var f = u[i];
                                c[f.source.index].push(f.target), c[f.target.index].push(f.source)
                            }
                        }
                        for (var g, h = c[b], i = -1, k = h.length; ++i < k;)if (!isNaN(g = h[i][a]))return g;
                        return Math.random() * d
                    }

                    var b, c, d, e = s.length, j = u.length, l = k[0], p = k[1];
                    for (b = 0; e > b; ++b)(d = s[b]).index = b, d.weight = 0;
                    for (b = 0; j > b; ++b)d = u[b], "number" == typeof d.source && (d.source = s[d.source]), "number" == typeof d.target && (d.target = s[d.target]), ++d.source.weight, ++d.target.weight;
                    for (b = 0; e > b; ++b)d = s[b], isNaN(d.x) && (d.x = a("x", l)), isNaN(d.y) && (d.y = a("y", p)), isNaN(d.px) && (d.px = d.x), isNaN(d.py) && (d.py = d.y);
                    if (f = [], "function" == typeof m)for (b = 0; j > b; ++b)f[b] = +m.call(this, u[b], b); else for (b = 0; j > b; ++b)f[b] = m;
                    if (g = [], "function" == typeof n)for (b = 0; j > b; ++b)g[b] = +n.call(this, u[b], b); else for (b = 0; j > b; ++b)g[b] = n;
                    if (h = [], "function" == typeof o)for (b = 0; e > b; ++b)h[b] = +o.call(this, s[b], b); else for (b = 0; e > b; ++b)h[b] = o;
                    return i.resume()
                }, i.resume = function () {
                    return i.alpha(.1)
                }, i.stop = function () {
                    return i.alpha(0)
                }, i.drag = function () {
                    return d || (d = ig.behavior.drag().origin(t).on("dragstart.force", _d).on("drag.force", b).on("dragend.force", ae)), arguments.length ? void this.on("mouseover.force", be).on("mouseout.force", ce).call(d) : d
                }, ig.rebind(i, j, "on")
            };
            var si = 20, ti = 1, ui = 1 / 0;
            ig.layout.hierarchy = function () {
                function a(e) {
                    var f, g = [e], h = [];
                    for (e.depth = 0; null != (f = g.pop());)if (h.push(f), (j = c.call(a, f, f.depth)) && (i = j.length)) {
                        for (var i, j, k; --i >= 0;)g.push(k = j[i]), k.parent = f, k.depth = f.depth + 1;
                        d && (f.value = 0), f.children = j
                    } else d && (f.value = +d.call(a, f, f.depth) || 0), delete f.children;
                    return ge(e, function (a) {
                        var c, e;
                        b && (c = a.children) && c.sort(b), d && (e = a.parent) && (e.value += a.value)
                    }), h
                }

                var b = je, c = he, d = ie;
                return a.sort = function (c) {
                    return arguments.length ? (b = c, a) : b
                }, a.children = function (b) {
                    return arguments.length ? (c = b, a) : c
                }, a.value = function (b) {
                    return arguments.length ? (d = b, a) : d
                }, a.revalue = function (b) {
                    return d && (fe(b, function (a) {
                        a.children && (a.value = 0)
                    }), ge(b, function (b) {
                        var c;
                        b.children || (b.value = +d.call(a, b, b.depth) || 0), (c = b.parent) && (c.value += b.value)
                    })), b
                }, a
            }, ig.layout.partition = function () {
                function a(b, c, d, e) {
                    var f = b.children;
                    if (b.x = c, b.y = b.depth * e, b.dx = d, b.dy = e, f && (g = f.length)) {
                        var g, h, i, j = -1;
                        for (d = b.value ? d / b.value : 0; ++j < g;)a(h = f[j], c, i = h.value * d, e), c += i
                    }
                }

                function b(a) {
                    var c = a.children, d = 0;
                    if (c && (e = c.length))for (var e, f = -1; ++f < e;)d = Math.max(d, b(c[f]));
                    return 1 + d
                }

                function c(c, f) {
                    var g = d.call(this, c, f);
                    return a(g[0], 0, e[0], e[1] / b(g[0])), g
                }

                var d = ig.layout.hierarchy(), e = [1, 1];
                return c.size = function (a) {
                    return arguments.length ? (e = a, c) : e
                }, ee(c, d)
            }, ig.layout.pie = function () {
                function a(g) {
                    var h, i = g.length, j = g.map(function (c, d) {
                        return +b.call(a, c, d)
                    }), k = +("function" == typeof d ? d.apply(this, arguments) : d), l = ("function" == typeof e ? e.apply(this, arguments) : e) - k, m = Math.min(Math.abs(l) / i, +("function" == typeof f ? f.apply(this, arguments) : f)), n = m * (0 > l ? -1 : 1), o = ig.sum(j), p = o ? (l - i * n) / o : 0, q = ig.range(i), r = [];
                    return null != c && q.sort(c === vi ? function (a, b) {
                        return j[b] - j[a]
                    } : function (a, b) {
                        return c(g[a], g[b])
                    }), q.forEach(function (a) {
                        r[a] = {data: g[a], value: h = j[a], startAngle: k, endAngle: k += h * p + n, padAngle: m}
                    }), r
                }

                var b = Number, c = vi, d = 0, e = Og, f = 0;
                return a.value = function (c) {
                    return arguments.length ? (b = c, a) : b
                }, a.sort = function (b) {
                    return arguments.length ? (c = b, a) : c
                }, a.startAngle = function (b) {
                    return arguments.length ? (d = b, a) : d
                }, a.endAngle = function (b) {
                    return arguments.length ? (e = b, a) : e
                }, a.padAngle = function (b) {
                    return arguments.length ? (f = b, a) : f
                }, a
            };
            var vi = {};
            ig.layout.stack = function () {
                function a(h, i) {
                    if (!(m = h.length))return h;
                    var j = h.map(function (c, d) {
                        return b.call(a, c, d)
                    }), k = j.map(function (b) {
                        return b.map(function (b, c) {
                            return [f.call(a, b, c), g.call(a, b, c)]
                        })
                    }), l = c.call(a, k, i);
                    j = ig.permute(j, l), k = ig.permute(k, l);
                    var m, n, o, p, q = d.call(a, k, i), r = j[0].length;
                    for (o = 0; r > o; ++o)for (e.call(a, j[0][o], p = q[o], k[0][o][1]), n = 1; m > n; ++n)e.call(a, j[n][o], p += k[n - 1][o][1], k[n][o][1]);
                    return h
                }

                var b = t, c = oe, d = pe, e = ne, f = le, g = me;
                return a.values = function (c) {
                    return arguments.length ? (b = c, a) : b
                }, a.order = function (b) {
                    return arguments.length ? (c = "function" == typeof b ? b : wi.get(b) || oe, a) : c
                }, a.offset = function (b) {
                    return arguments.length ? (d = "function" == typeof b ? b : xi.get(b) || pe, a) : d
                }, a.x = function (b) {
                    return arguments.length ? (f = b, a) : f
                }, a.y = function (b) {
                    return arguments.length ? (g = b, a) : g
                }, a.out = function (b) {
                    return arguments.length ? (e = b, a) : e
                }, a
            };
            var wi = ig.map({
                "inside-out": function (a) {
                    var b, c, d = a.length, e = a.map(qe), f = a.map(re), g = ig.range(d).sort(function (a, b) {
                        return e[a] - e[b]
                    }), h = 0, i = 0, j = [], k = [];
                    for (b = 0; d > b; ++b)c = g[b], i > h ? (h += f[c], j.push(c)) : (i += f[c], k.push(c));
                    return k.reverse().concat(j)
                }, reverse: function (a) {
                    return ig.range(a.length).reverse()
                }, "default": oe
            }), xi = ig.map({
                silhouette: function (a) {
                    var b, c, d, e = a.length, f = a[0].length, g = [], h = 0, i = [];
                    for (c = 0; f > c; ++c) {
                        for (b = 0, d = 0; e > b; b++)d += a[b][c][1];
                        d > h && (h = d), g.push(d)
                    }
                    for (c = 0; f > c; ++c)i[c] = (h - g[c]) / 2;
                    return i
                }, wiggle: function (a) {
                    var b, c, d, e, f, g, h, i, j, k = a.length, l = a[0], m = l.length, n = [];
                    for (n[0] = i = j = 0, c = 1; m > c; ++c) {
                        for (b = 0, e = 0; k > b; ++b)e += a[b][c][1];
                        for (b = 0, f = 0, h = l[c][0] - l[c - 1][0]; k > b; ++b) {
                            for (d = 0, g = (a[b][c][1] - a[b][c - 1][1]) / (2 * h); b > d; ++d)g += (a[d][c][1] - a[d][c - 1][1]) / h;
                            f += g * a[b][c][1]
                        }
                        n[c] = i -= e ? f / e * h : 0, j > i && (j = i)
                    }
                    for (c = 0; m > c; ++c)n[c] -= j;
                    return n
                }, expand: function (a) {
                    var b, c, d, e = a.length, f = a[0].length, g = 1 / e, h = [];
                    for (c = 0; f > c; ++c) {
                        for (b = 0, d = 0; e > b; b++)d += a[b][c][1];
                        if (d)for (b = 0; e > b; b++)a[b][c][1] /= d; else for (b = 0; e > b; b++)a[b][c][1] = g
                    }
                    for (c = 0; f > c; ++c)h[c] = 0;
                    return h
                }, zero: pe
            });
            ig.layout.histogram = function () {
                function a(a, f) {
                    for (var g, h, i = [], j = a.map(c, this), k = d.call(this, j, f), l = e.call(this, k, j, f), f = -1, m = j.length, n = l.length - 1, o = b ? 1 : 1 / m; ++f < n;)g = i[f] = [], g.dx = l[f + 1] - (g.x = l[f]), g.y = 0;
                    if (n > 0)for (f = -1; ++f < m;)h = j[f], h >= k[0] && h <= k[1] && (g = i[ig.bisect(l, h, 1, n) - 1], g.y += o, g.push(a[f]));
                    return i
                }

                var b = !0, c = Number, d = ve, e = te;
                return a.value = function (b) {
                    return arguments.length ? (c = b, a) : c
                }, a.range = function (b) {
                    return arguments.length ? (d = Ba(b), a) : d
                }, a.bins = function (b) {
                    return arguments.length ? (e = "number" == typeof b ? function (a) {
                        return ue(a, b)
                    } : Ba(b), a) : e
                }, a.frequency = function (c) {
                    return arguments.length ? (b = !!c, a) : b
                }, a
            }, ig.layout.pack = function () {
                function a(a, f) {
                    var g = c.call(this, a, f), h = g[0], i = e[0], j = e[1], k = null == b ? Math.sqrt : "function" == typeof b ? b : function () {
                        return b
                    };
                    if (h.x = h.y = 0, ge(h, function (a) {
                            a.r = +k(a.value)
                        }), ge(h, Ae), d) {
                        var l = d * (b ? 1 : Math.max(2 * h.r / i, 2 * h.r / j)) / 2;
                        ge(h, function (a) {
                            a.r += l
                        }), ge(h, Ae), ge(h, function (a) {
                            a.r -= l
                        })
                    }
                    return De(h, i / 2, j / 2, b ? 1 : 1 / Math.max(2 * h.r / i, 2 * h.r / j)), g
                }

                var b, c = ig.layout.hierarchy().sort(we), d = 0, e = [1, 1];
                return a.size = function (b) {
                    return arguments.length ? (e = b, a) : e
                }, a.radius = function (c) {
                    return arguments.length ? (b = null == c || "function" == typeof c ? c : +c, a) : b
                }, a.padding = function (b) {
                    return arguments.length ? (d = +b, a) : d
                }, ee(a, c)
            }, ig.layout.tree = function () {
                function a(a, e) {
                    var k = g.call(this, a, e), l = k[0], m = b(l);
                    if (ge(m, c), m.parent.m = -m.z, fe(m, d), j)fe(l, f); else {
                        var n = l, o = l, p = l;
                        fe(l, function (a) {
                            a.x < n.x && (n = a), a.x > o.x && (o = a), a.depth > p.depth && (p = a)
                        });
                        var q = h(n, o) / 2 - n.x, r = i[0] / (o.x + h(o, n) / 2 + q), s = i[1] / (p.depth || 1);
                        fe(l, function (a) {
                            a.x = (a.x + q) * r, a.y = a.depth * s
                        })
                    }
                    return k
                }

                function b(a) {
                    for (var b, c = {
                        A: null,
                        children: [a]
                    }, d = [c]; null != (b = d.pop());)for (var e, f = b.children, g = 0, h = f.length; h > g; ++g)d.push((f[g] = e = {
                        _: f[g],
                        parent: b,
                        children: (e = f[g].children) && e.slice() || [],
                        A: null,
                        a: null,
                        z: 0,
                        m: 0,
                        c: 0,
                        s: 0,
                        t: null,
                        i: g
                    }).a = e);
                    return c.children[0]
                }

                function c(a) {
                    var b = a.children, c = a.parent.children, d = a.i ? c[a.i - 1] : null;
                    if (b.length) {
                        Je(a);
                        var f = (b[0].z + b[b.length - 1].z) / 2;
                        d ? (a.z = d.z + h(a._, d._), a.m = a.z - f) : a.z = f
                    } else d && (a.z = d.z + h(a._, d._));
                    a.parent.A = e(a, d, a.parent.A || c[0])
                }

                function d(a) {
                    a._.x = a.z + a.parent.m, a.m += a.parent.m
                }

                function e(a, b, c) {
                    if (b) {
                        for (var d, e = a, f = a, g = b, i = e.parent.children[0], j = e.m, k = f.m, l = g.m, m = i.m; g = He(g), e = Ge(e), g && e;)i = Ge(i), f = He(f), f.a = a, d = g.z + l - e.z - j + h(g._, e._), d > 0 && (Ie(Ke(g, a, c), a, d), j += d, k += d), l += g.m, j += e.m, m += i.m, k += f.m;
                        g && !He(f) && (f.t = g, f.m += l - k), e && !Ge(i) && (i.t = e, i.m += j - m, c = a)
                    }
                    return c
                }

                function f(a) {
                    a.x *= i[0], a.y = a.depth * i[1]
                }

                var g = ig.layout.hierarchy().sort(null).value(null), h = Fe, i = [1, 1], j = null;
                return a.separation = function (b) {
                    return arguments.length ? (h = b, a) : h
                }, a.size = function (b) {
                    return arguments.length ? (j = null == (i = b) ? f : null, a) : j ? null : i
                }, a.nodeSize = function (b) {
                    return arguments.length ? (j = null == (i = b) ? null : f, a) : j ? i : null
                }, ee(a, g)
            }, ig.layout.cluster = function () {
                function a(a, f) {
                    var g, h = b.call(this, a, f), i = h[0], j = 0;
                    ge(i, function (a) {
                        var b = a.children;
                        b && b.length ? (a.x = Me(b), a.y = Le(b)) : (a.x = g ? j += c(a, g) : 0, a.y = 0, g = a)
                    });
                    var k = Ne(i), l = Oe(i), m = k.x - c(k, l) / 2, n = l.x + c(l, k) / 2;
                    return ge(i, e ? function (a) {
                        a.x = (a.x - i.x) * d[0], a.y = (i.y - a.y) * d[1]
                    } : function (a) {
                        a.x = (a.x - m) / (n - m) * d[0], a.y = (1 - (i.y ? a.y / i.y : 1)) * d[1]
                    }), h
                }

                var b = ig.layout.hierarchy().sort(null).value(null), c = Fe, d = [1, 1], e = !1;
                return a.separation = function (b) {
                    return arguments.length ? (c = b, a) : c
                }, a.size = function (b) {
                    return arguments.length ? (e = null == (d = b), a) : e ? null : d
                }, a.nodeSize = function (b) {
                    return arguments.length ? (e = null != (d = b), a) : e ? d : null
                }, ee(a, b)
            }, ig.layout.treemap = function () {
                function a(a, b) {
                    for (var c, d, e = -1, f = a.length; ++e < f;)d = (c = a[e]).value * (0 > b ? 0 : b), c.area = isNaN(d) || 0 >= d ? 0 : d
                }

                function b(c) {
                    var f = c.children;
                    if (f && f.length) {
                        var g, h, i, j = l(c), k = [], m = f.slice(), o = 1 / 0, p = "slice" === n ? j.dx : "dice" === n ? j.dy : "slice-dice" === n ? 1 & c.depth ? j.dy : j.dx : Math.min(j.dx, j.dy);
                        for (a(m, j.dx * j.dy / c.value), k.area = 0; (i = m.length) > 0;)k.push(g = m[i - 1]), k.area += g.area, "squarify" !== n || (h = d(k, p)) <= o ? (m.pop(), o = h) : (k.area -= k.pop().area,
                            e(k, p, j, !1), p = Math.min(j.dx, j.dy), k.length = k.area = 0, o = 1 / 0);
                        k.length && (e(k, p, j, !0), k.length = k.area = 0), f.forEach(b)
                    }
                }

                function c(b) {
                    var d = b.children;
                    if (d && d.length) {
                        var f, g = l(b), h = d.slice(), i = [];
                        for (a(h, g.dx * g.dy / b.value), i.area = 0; f = h.pop();)i.push(f), i.area += f.area, null != f.z && (e(i, f.z ? g.dx : g.dy, g, !h.length), i.length = i.area = 0);
                        d.forEach(c)
                    }
                }

                function d(a, b) {
                    for (var c, d = a.area, e = 0, f = 1 / 0, g = -1, h = a.length; ++g < h;)(c = a[g].area) && (f > c && (f = c), c > e && (e = c));
                    return d *= d, b *= b, d ? Math.max(b * e * o / d, d / (b * f * o)) : 1 / 0
                }

                function e(a, b, c, d) {
                    var e, f = -1, g = a.length, h = c.x, j = c.y, k = b ? i(a.area / b) : 0;
                    if (b == c.dx) {
                        for ((d || k > c.dy) && (k = c.dy); ++f < g;)e = a[f], e.x = h, e.y = j, e.dy = k, h += e.dx = Math.min(c.x + c.dx - h, k ? i(e.area / k) : 0);
                        e.z = !0, e.dx += c.x + c.dx - h, c.y += k, c.dy -= k
                    } else {
                        for ((d || k > c.dx) && (k = c.dx); ++f < g;)e = a[f], e.x = h, e.y = j, e.dx = k, j += e.dy = Math.min(c.y + c.dy - j, k ? i(e.area / k) : 0);
                        e.z = !1, e.dy += c.y + c.dy - j, c.x += k, c.dx -= k
                    }
                }

                function f(d) {
                    var e = g || h(d), f = e[0];
                    return f.x = f.y = 0, f.value ? (f.dx = j[0], f.dy = j[1]) : f.dx = f.dy = 0, g && h.revalue(f), a([f], f.dx * f.dy / f.value), (g ? c : b)(f), m && (g = e), e
                }

                var g, h = ig.layout.hierarchy(), i = Math.round, j = [1, 1], k = null, l = Pe, m = !1, n = "squarify", o = .5 * (1 + Math.sqrt(5));
                return f.size = function (a) {
                    return arguments.length ? (j = a, f) : j
                }, f.padding = function (a) {
                    function b(b) {
                        var c = a.call(f, b, b.depth);
                        return null == c ? Pe(b) : Qe(b, "number" == typeof c ? [c, c, c, c] : c)
                    }

                    function c(b) {
                        return Qe(b, a)
                    }

                    if (!arguments.length)return k;
                    var d;
                    return l = null == (k = a) ? Pe : "function" == (d = typeof a) ? b : "number" === d ? (a = [a, a, a, a], c) : c, f
                }, f.round = function (a) {
                    return arguments.length ? (i = a ? Math.round : Number, f) : i != Number
                }, f.sticky = function (a) {
                    return arguments.length ? (m = a, g = null, f) : m
                }, f.ratio = function (a) {
                    return arguments.length ? (o = a, f) : o
                }, f.mode = function (a) {
                    return arguments.length ? (n = a + "", f) : n
                }, ee(f, h)
            }, ig.random = {
                normal: function (a, b) {
                    var c = arguments.length;
                    return 2 > c && (b = 1), 1 > c && (a = 0), function () {
                        var c, d, e;
                        do c = 2 * Math.random() - 1, d = 2 * Math.random() - 1, e = c * c + d * d; while (!e || e > 1);
                        return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
                    }
                }, logNormal: function () {
                    var a = ig.random.normal.apply(ig, arguments);
                    return function () {
                        return Math.exp(a())
                    }
                }, bates: function (a) {
                    var b = ig.random.irwinHall(a);
                    return function () {
                        return b() / a
                    }
                }, irwinHall: function (a) {
                    return function () {
                        for (var b = 0, c = 0; a > c; c++)b += Math.random();
                        return b
                    }
                }
            }, ig.scale = {};
            var yi = {floor: t, ceil: t};
            ig.scale.linear = function () {
                return Xe([0, 1], [0, 1], td, !1)
            };
            var zi = {s: 1, g: 1, p: 1, r: 1, e: 1};
            ig.scale.log = function () {
                return df(ig.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            };
            var Ai = ig.format(".0e"), Bi = {
                floor: function (a) {
                    return -Math.ceil(-a)
                }, ceil: function (a) {
                    return -Math.floor(-a)
                }
            };
            ig.scale.pow = function () {
                return ef(ig.scale.linear(), 1, [0, 1])
            }, ig.scale.sqrt = function () {
                return ig.scale.pow().exponent(.5)
            }, ig.scale.ordinal = function () {
                return gf([], {t: "range", a: [[]]})
            }, ig.scale.category10 = function () {
                return ig.scale.ordinal().range(Ci)
            }, ig.scale.category20 = function () {
                return ig.scale.ordinal().range(Di)
            }, ig.scale.category20b = function () {
                return ig.scale.ordinal().range(Ei)
            }, ig.scale.category20c = function () {
                return ig.scale.ordinal().range(Fi)
            };
            var Ci = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ua), Di = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ua), Ei = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ua), Fi = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ua);
            ig.scale.quantile = function () {
                return hf([], [])
            }, ig.scale.quantize = function () {
                return jf(0, 1, [0, 1])
            }, ig.scale.threshold = function () {
                return kf([.5], [0, 1])
            }, ig.scale.identity = function () {
                return lf([0, 1])
            }, ig.svg = {}, ig.svg.arc = function () {
                function a() {
                    var a = Math.max(0, +c.apply(this, arguments)), j = Math.max(0, +d.apply(this, arguments)), k = g.apply(this, arguments) - Qg, l = h.apply(this, arguments) - Qg, m = Math.abs(l - k), n = k > l ? 0 : 1;
                    if (a > j && (o = j, j = a, a = o), m >= Pg)return b(j, n) + (a ? b(a, 1 - n) : "") + "Z";
                    var o, p, q, r, s, t, u, v, w, x, y, z, A = 0, B = 0, C = [];
                    if ((r = (+i.apply(this, arguments) || 0) / 2) && (q = f === Gi ? Math.sqrt(a * a + j * j) : +f.apply(this, arguments), n || (B *= -1), j && (B = ca(q / j * Math.sin(r))), a && (A = ca(q / a * Math.sin(r)))), j) {
                        s = j * Math.cos(k + B), t = j * Math.sin(k + B), u = j * Math.cos(l - B), v = j * Math.sin(l - B);
                        var D = Math.abs(l - k - 2 * B) <= Ng ? 0 : 1;
                        if (B && sf(s, t, u, v) === n ^ D) {
                            var E = (k + l) / 2;
                            s = j * Math.cos(E), t = j * Math.sin(E), u = v = null
                        }
                    } else s = t = 0;
                    if (a) {
                        w = a * Math.cos(l - A), x = a * Math.sin(l - A), y = a * Math.cos(k + A), z = a * Math.sin(k + A);
                        var F = Math.abs(k - l + 2 * A) <= Ng ? 0 : 1;
                        if (A && sf(w, x, y, z) === 1 - n ^ F) {
                            var G = (k + l) / 2;
                            w = a * Math.cos(G), x = a * Math.sin(G), y = z = null
                        }
                    } else w = x = 0;
                    if (m > Lg && (o = Math.min(Math.abs(j - a) / 2, +e.apply(this, arguments))) > .001) {
                        p = j > a ^ n ? 0 : 1;
                        var H = o, I = o;
                        if (Ng > m) {
                            var J = null == y ? [w, x] : null == u ? [s, t] : Ic([s, t], [y, z], [u, v], [w, x]), K = s - J[0], L = t - J[1], M = u - J[0], N = v - J[1], O = 1 / Math.sin(Math.acos((K * M + L * N) / (Math.sqrt(K * K + L * L) * Math.sqrt(M * M + N * N))) / 2), P = Math.sqrt(J[0] * J[0] + J[1] * J[1]);
                            I = Math.min(o, (a - P) / (O - 1)), H = Math.min(o, (j - P) / (O + 1))
                        }
                        if (null != u) {
                            var Q = tf(null == y ? [w, x] : [y, z], [s, t], j, H, n), R = tf([u, v], [w, x], j, H, n);
                            o === H ? C.push("M", Q[0], "A", H, ",", H, " 0 0,", p, " ", Q[1], "A", j, ",", j, " 0 ", 1 - n ^ sf(Q[1][0], Q[1][1], R[1][0], R[1][1]), ",", n, " ", R[1], "A", H, ",", H, " 0 0,", p, " ", R[0]) : C.push("M", Q[0], "A", H, ",", H, " 0 1,", p, " ", R[0])
                        } else C.push("M", s, ",", t);
                        if (null != y) {
                            var S = tf([s, t], [y, z], a, -I, n), T = tf([w, x], null == u ? [s, t] : [u, v], a, -I, n);
                            o === I ? C.push("L", T[0], "A", I, ",", I, " 0 0,", p, " ", T[1], "A", a, ",", a, " 0 ", n ^ sf(T[1][0], T[1][1], S[1][0], S[1][1]), ",", 1 - n, " ", S[1], "A", I, ",", I, " 0 0,", p, " ", S[0]) : C.push("L", T[0], "A", I, ",", I, " 0 0,", p, " ", S[0])
                        } else C.push("L", w, ",", x)
                    } else C.push("M", s, ",", t), null != u && C.push("A", j, ",", j, " 0 ", D, ",", n, " ", u, ",", v), C.push("L", w, ",", x), null != y && C.push("A", a, ",", a, " 0 ", F, ",", 1 - n, " ", y, ",", z);
                    return C.push("Z"), C.join("")
                }

                function b(a, b) {
                    return "M0," + a + "A" + a + "," + a + " 0 1," + b + " 0," + -a + "A" + a + "," + a + " 0 1," + b + " 0," + a
                }

                var c = nf, d = of, e = mf, f = Gi, g = pf, h = qf, i = rf;
                return a.innerRadius = function (b) {
                    return arguments.length ? (c = Ba(b), a) : c
                }, a.outerRadius = function (b) {
                    return arguments.length ? (d = Ba(b), a) : d
                }, a.cornerRadius = function (b) {
                    return arguments.length ? (e = Ba(b), a) : e
                }, a.padRadius = function (b) {
                    return arguments.length ? (f = b == Gi ? Gi : Ba(b), a) : f
                }, a.startAngle = function (b) {
                    return arguments.length ? (g = Ba(b), a) : g
                }, a.endAngle = function (b) {
                    return arguments.length ? (h = Ba(b), a) : h
                }, a.padAngle = function (b) {
                    return arguments.length ? (i = Ba(b), a) : i
                }, a.centroid = function () {
                    var a = (+c.apply(this, arguments) + +d.apply(this, arguments)) / 2, b = (+g.apply(this, arguments) + +h.apply(this, arguments)) / 2 - Qg;
                    return [Math.cos(b) * a, Math.sin(b) * a]
                }, a
            };
            var Gi = "auto";
            ig.svg.line = function () {
                return uf(t)
            };
            var Hi = ig.map({
                linear: vf,
                "linear-closed": wf,
                step: xf,
                "step-before": yf,
                "step-after": zf,
                basis: Ff,
                "basis-open": Gf,
                "basis-closed": Hf,
                bundle: If,
                cardinal: Cf,
                "cardinal-open": Af,
                "cardinal-closed": Bf,
                monotone: Of
            });
            Hi.forEach(function (a, b) {
                b.key = a, b.closed = /-closed$/.test(a)
            });
            var Ii = [0, 2 / 3, 1 / 3, 0], Ji = [0, 1 / 3, 2 / 3, 0], Ki = [0, 1 / 6, 2 / 3, 1 / 6];
            ig.svg.line.radial = function () {
                var a = uf(Pf);
                return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
            }, yf.reverse = zf, zf.reverse = yf, ig.svg.area = function () {
                return Qf(t)
            }, ig.svg.area.radial = function () {
                var a = Qf(Pf);
                return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
            }, ig.svg.chord = function () {
                function a(a, h) {
                    var i = b(this, f, a, h), j = b(this, g, a, h);
                    return "M" + i.p0 + d(i.r, i.p1, i.a1 - i.a0) + (c(i, j) ? e(i.r, i.p1, i.r, i.p0) : e(i.r, i.p1, j.r, j.p0) + d(j.r, j.p1, j.a1 - j.a0) + e(j.r, j.p1, i.r, i.p0)) + "Z"
                }

                function b(a, b, c, d) {
                    var e = b.call(a, c, d), f = h.call(a, e, d), g = i.call(a, e, d) - Qg, k = j.call(a, e, d) - Qg;
                    return {
                        r: f,
                        a0: g,
                        a1: k,
                        p0: [f * Math.cos(g), f * Math.sin(g)],
                        p1: [f * Math.cos(k), f * Math.sin(k)]
                    }
                }

                function c(a, b) {
                    return a.a0 == b.a0 && a.a1 == b.a1
                }

                function d(a, b, c) {
                    return "A" + a + "," + a + " 0 " + +(c > Ng) + ",1 " + b
                }

                function e(a, b, c, d) {
                    return "Q 0,0 " + d
                }

                var f = tc, g = uc, h = Rf, i = pf, j = qf;
                return a.radius = function (b) {
                    return arguments.length ? (h = Ba(b), a) : h
                }, a.source = function (b) {
                    return arguments.length ? (f = Ba(b), a) : f
                }, a.target = function (b) {
                    return arguments.length ? (g = Ba(b), a) : g
                }, a.startAngle = function (b) {
                    return arguments.length ? (i = Ba(b), a) : i
                }, a.endAngle = function (b) {
                    return arguments.length ? (j = Ba(b), a) : j
                }, a
            }, ig.svg.diagonal = function () {
                function a(a, e) {
                    var f = b.call(this, a, e), g = c.call(this, a, e), h = (f.y + g.y) / 2, i = [f, {
                        x: f.x,
                        y: h
                    }, {x: g.x, y: h}, g];
                    return i = i.map(d), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
                }

                var b = tc, c = uc, d = Sf;
                return a.source = function (c) {
                    return arguments.length ? (b = Ba(c), a) : b
                }, a.target = function (b) {
                    return arguments.length ? (c = Ba(b), a) : c
                }, a.projection = function (b) {
                    return arguments.length ? (d = b, a) : d
                }, a
            }, ig.svg.diagonal.radial = function () {
                var a = ig.svg.diagonal(), b = Sf, c = a.projection;
                return a.projection = function (a) {
                    return arguments.length ? c(Tf(b = a)) : b
                }, a
            }, ig.svg.symbol = function () {
                function a(a, d) {
                    return (Li.get(b.call(this, a, d)) || Wf)(c.call(this, a, d))
                }

                var b = Vf, c = Uf;
                return a.type = function (c) {
                    return arguments.length ? (b = Ba(c), a) : b
                }, a.size = function (b) {
                    return arguments.length ? (c = Ba(b), a) : c
                }, a
            };
            var Li = ig.map({
                circle: Wf, cross: function (a) {
                    var b = Math.sqrt(a / 5) / 2;
                    return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
                }, diamond: function (a) {
                    var b = Math.sqrt(a / (2 * Ni)), c = b * Ni;
                    return "M0," + -b + "L" + c + ",0 0," + b + " " + -c + ",0Z"
                }, square: function (a) {
                    var b = Math.sqrt(a) / 2;
                    return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
                }, "triangle-down": function (a) {
                    var b = Math.sqrt(a / Mi), c = b * Mi / 2;
                    return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
                }, "triangle-up": function (a) {
                    var b = Math.sqrt(a / Mi), c = b * Mi / 2;
                    return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
                }
            });
            ig.svg.symbolTypes = Li.keys();
            var Mi = Math.sqrt(3), Ni = Math.tan(30 * Rg);
            Dg.transition = function (a) {
                for (var b, c, d = Oi || ++Si, e = _f(a), f = [], g = Pi || {
                        time: Date.now(),
                        ease: Ad,
                        delay: 0,
                        duration: 250
                    }, h = -1, i = this.length; ++h < i;) {
                    f.push(b = []);
                    for (var j = this[h], k = -1, l = j.length; ++k < l;)(c = j[k]) && ag(c, k, e, d, g), b.push(c)
                }
                return Yf(f, e, d)
            }, Dg.interrupt = function (a) {
                return this.each(null == a ? Qi : Xf(_f(a)))
            };
            var Oi, Pi, Qi = Xf(_f()), Ri = [], Si = 0;
            Ri.call = Dg.call, Ri.empty = Dg.empty, Ri.node = Dg.node, Ri.size = Dg.size, ig.transition = function (a, b) {
                return a && a.transition ? Oi ? a.transition(b) : a : ig.selection().transition(a)
            }, ig.transition.prototype = Ri, Ri.select = function (a) {
                var b, c, d, e = this.id, f = this.namespace, g = [];
                a = D(a);
                for (var h = -1, i = this.length; ++h < i;) {
                    g.push(b = []);
                    for (var j = this[h], k = -1, l = j.length; ++k < l;)(d = j[k]) && (c = a.call(d, d.__data__, k, h)) ? ("__data__" in d && (c.__data__ = d.__data__), ag(c, k, f, e, d[f][e]), b.push(c)) : b.push(null)
                }
                return Yf(g, f, e)
            }, Ri.selectAll = function (a) {
                var b, c, d, e, f, g = this.id, h = this.namespace, i = [];
                a = E(a);
                for (var j = -1, k = this.length; ++j < k;)for (var l = this[j], m = -1, n = l.length; ++m < n;)if (d = l[m]) {
                    f = d[h][g], c = a.call(d, d.__data__, m, j), i.push(b = []);
                    for (var o = -1, p = c.length; ++o < p;)(e = c[o]) && ag(e, o, h, g, f), b.push(e)
                }
                return Yf(i, h, g)
            }, Ri.filter = function (a) {
                var b, c, d, e = [];
                "function" != typeof a && (a = Q(a));
                for (var f = 0, g = this.length; g > f; f++) {
                    e.push(b = []);
                    for (var c = this[f], h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
                }
                return Yf(e, this.namespace, this.id)
            }, Ri.tween = function (a, b) {
                var c = this.id, d = this.namespace;
                return arguments.length < 2 ? this.node()[d][c].tween.get(a) : S(this, null == b ? function (b) {
                    b[d][c].tween.remove(a)
                } : function (e) {
                    e[d][c].tween.set(a, b)
                })
            }, Ri.attr = function (a, b) {
                function c() {
                    this.removeAttribute(h)
                }

                function d() {
                    this.removeAttributeNS(h.space, h.local)
                }

                function e(a) {
                    return null == a ? c : (a += "", function () {
                        var b, c = this.getAttribute(h);
                        return c !== a && (b = g(c, a), function (a) {
                                this.setAttribute(h, b(a))
                            })
                    })
                }

                function f(a) {
                    return null == a ? d : (a += "", function () {
                        var b, c = this.getAttributeNS(h.space, h.local);
                        return c !== a && (b = g(c, a), function (a) {
                                this.setAttributeNS(h.space, h.local, b(a))
                            })
                    })
                }

                if (arguments.length < 2) {
                    for (b in a)this.attr(b, a[b]);
                    return this
                }
                var g = "transform" == a ? Vd : td, h = ig.ns.qualify(a);
                return Zf(this, "attr." + a, b, h.local ? f : e)
            }, Ri.attrTween = function (a, b) {
                function c(a, c) {
                    var d = b.call(this, a, c, this.getAttribute(e));
                    return d && function (a) {
                            this.setAttribute(e, d(a))
                        }
                }

                function d(a, c) {
                    var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
                    return d && function (a) {
                            this.setAttributeNS(e.space, e.local, d(a))
                        }
                }

                var e = ig.ns.qualify(a);
                return this.tween("attr." + a, e.local ? d : c)
            }, Ri.style = function (a, b, d) {
                function e() {
                    this.style.removeProperty(a)
                }

                function f(b) {
                    return null == b ? e : (b += "", function () {
                        var e, f = c(this).getComputedStyle(this, null).getPropertyValue(a);
                        return f !== b && (e = td(f, b), function (b) {
                                this.style.setProperty(a, e(b), d)
                            })
                    })
                }

                var g = arguments.length;
                if (3 > g) {
                    if ("string" != typeof a) {
                        2 > g && (b = "");
                        for (d in a)this.style(d, a[d], b);
                        return this
                    }
                    d = ""
                }
                return Zf(this, "style." + a, b, f)
            }, Ri.styleTween = function (a, b, d) {
                function e(e, f) {
                    var g = b.call(this, e, f, c(this).getComputedStyle(this, null).getPropertyValue(a));
                    return g && function (b) {
                            this.style.setProperty(a, g(b), d)
                        }
                }

                return arguments.length < 3 && (d = ""), this.tween("style." + a, e)
            }, Ri.text = function (a) {
                return Zf(this, "text", a, $f)
            }, Ri.remove = function () {
                var a = this.namespace;
                return this.each("end.transition", function () {
                    var b;
                    this[a].count < 2 && (b = this.parentNode) && b.removeChild(this)
                })
            }, Ri.ease = function (a) {
                var b = this.id, c = this.namespace;
                return arguments.length < 1 ? this.node()[c][b].ease : ("function" != typeof a && (a = ig.ease.apply(ig, arguments)), S(this, function (d) {
                    d[c][b].ease = a
                }))
            }, Ri.delay = function (a) {
                var b = this.id, c = this.namespace;
                return arguments.length < 1 ? this.node()[c][b].delay : S(this, "function" == typeof a ? function (d, e, f) {
                    d[c][b].delay = +a.call(d, d.__data__, e, f)
                } : (a = +a, function (d) {
                    d[c][b].delay = a
                }))
            }, Ri.duration = function (a) {
                var b = this.id, c = this.namespace;
                return arguments.length < 1 ? this.node()[c][b].duration : S(this, "function" == typeof a ? function (d, e, f) {
                    d[c][b].duration = Math.max(1, a.call(d, d.__data__, e, f))
                } : (a = Math.max(1, a), function (d) {
                    d[c][b].duration = a
                }))
            }, Ri.each = function (a, b) {
                var c = this.id, d = this.namespace;
                if (arguments.length < 2) {
                    var e = Pi, f = Oi;
                    try {
                        Oi = c, S(this, function (b, e, f) {
                            Pi = b[d][c], a.call(b, b.__data__, e, f)
                        })
                    } finally {
                        Pi = e, Oi = f
                    }
                } else S(this, function (e) {
                    var f = e[d][c];
                    (f.event || (f.event = ig.dispatch("start", "end", "interrupt"))).on(a, b)
                });
                return this
            }, Ri.transition = function () {
                for (var a, b, c, d, e = this.id, f = ++Si, g = this.namespace, h = [], i = 0, j = this.length; j > i; i++) {
                    h.push(a = []);
                    for (var b = this[i], k = 0, l = b.length; l > k; k++)(c = b[k]) && (d = c[g][e], ag(c, k, g, f, {
                        time: d.time,
                        ease: d.ease,
                        delay: d.delay + d.duration,
                        duration: d.duration
                    })), a.push(c)
                }
                return Yf(h, g, f)
            }, ig.svg.axis = function () {
                function a(a) {
                    a.each(function () {
                        var a, j = ig.select(this), k = this.__chart__ || c, l = this.__chart__ = c.copy(), m = null == i ? l.ticks ? l.ticks.apply(l, h) : l.domain() : i, n = null == b ? l.tickFormat ? l.tickFormat.apply(l, h) : t : b, o = j.selectAll(".tick").data(m, l), p = o.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Lg), q = ig.transition(o.exit()).style("opacity", Lg).remove(), r = ig.transition(o.order()).style("opacity", 1), s = Math.max(e, 0) + g, u = Se(l), v = j.selectAll(".domain").data([0]), w = (v.enter().append("path").attr("class", "domain"), ig.transition(v));
                        p.append("line"), p.append("text");
                        var x, y, z, A, B = p.select("line"), C = r.select("line"), D = o.select("text").text(n), E = p.select("text"), F = r.select("text"), G = "top" === d || "left" === d ? -1 : 1;
                        if ("bottom" === d || "top" === d ? (a = bg, x = "x", z = "y", y = "x2", A = "y2", D.attr("dy", 0 > G ? "0em" : ".71em").style("text-anchor", "middle"), w.attr("d", "M" + u[0] + "," + G * f + "V0H" + u[1] + "V" + G * f)) : (a = cg, x = "y", z = "x", y = "y2", A = "x2", D.attr("dy", ".32em").style("text-anchor", 0 > G ? "end" : "start"), w.attr("d", "M" + G * f + "," + u[0] + "H0V" + u[1] + "H" + G * f)), B.attr(A, G * e), E.attr(z, G * s), C.attr(y, 0).attr(A, G * e), F.attr(x, 0).attr(z, G * s), l.rangeBand) {
                            var H = l, I = H.rangeBand() / 2;
                            k = l = function (a) {
                                return H(a) + I
                            }
                        } else k.rangeBand ? k = l : q.call(a, l, k);
                        p.call(a, k, l), r.call(a, l, l)
                    })
                }

                var b, c = ig.scale.linear(), d = Ti, e = 6, f = 6, g = 3, h = [10], i = null;
                return a.scale = function (b) {
                    return arguments.length ? (c = b, a) : c
                }, a.orient = function (b) {
                    return arguments.length ? (d = b in Ui ? b + "" : Ti, a) : d
                }, a.ticks = function () {
                    return arguments.length ? (h = kg(arguments), a) : h
                }, a.tickValues = function (b) {
                    return arguments.length ? (i = b, a) : i
                }, a.tickFormat = function (c) {
                    return arguments.length ? (b = c, a) : b
                }, a.tickSize = function (b) {
                    var c = arguments.length;
                    return c ? (e = +b, f = +arguments[c - 1], a) : e
                }, a.innerTickSize = function (b) {
                    return arguments.length ? (e = +b, a) : e
                }, a.outerTickSize = function (b) {
                    return arguments.length ? (f = +b, a) : f
                }, a.tickPadding = function (b) {
                    return arguments.length ? (g = +b, a) : g
                }, a.tickSubdivide = function () {
                    return arguments.length && a
                }, a
            };
            var Ti = "bottom", Ui = {top: 1, right: 1, bottom: 1, left: 1};
            ig.svg.brush = function () {
                function a(c) {
                    c.each(function () {
                        var c = ig.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", f).on("touchstart.brush", f), g = c.selectAll(".background").data([0]);
                        g.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), c.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var h = c.selectAll(".resize").data(p, t);
                        h.exit().remove(), h.enter().append("g").attr("class", function (a) {
                            return "resize " + a
                        }).style("cursor", function (a) {
                            return Vi[a]
                        }).append("rect").attr("x", function (a) {
                            return /[ew]$/.test(a) ? -3 : null
                        }).attr("y", function (a) {
                            return /^[ns]/.test(a) ? -3 : null
                        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", a.empty() ? "none" : null);
                        var i, l = ig.transition(c), m = ig.transition(g);
                        j && (i = Se(j), m.attr("x", i[0]).attr("width", i[1] - i[0]), d(l)), k && (i = Se(k), m.attr("y", i[0]).attr("height", i[1] - i[0]), e(l)), b(l)
                    })
                }

                function b(a) {
                    a.selectAll(".resize").attr("transform", function (a) {
                        return "translate(" + l[+/e$/.test(a)] + "," + m[+/^s/.test(a)] + ")"
                    })
                }

                function d(a) {
                    a.select(".extent").attr("x", l[0]), a.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
                }

                function e(a) {
                    a.select(".extent").attr("y", m[0]), a.selectAll(".extent,.e>rect,.w>rect").attr("height", m[1] - m[0])
                }

                function f() {
                    function f() {
                        32 == ig.event.keyCode && (D || (t = null, F[0] -= l[1], F[1] -= m[1], D = 2), z())
                    }

                    function p() {
                        32 == ig.event.keyCode && 2 == D && (F[0] += l[1], F[1] += m[1], D = 0, z())
                    }

                    function q() {
                        var a = ig.mouse(v), c = !1;
                        u && (a[0] += u[0], a[1] += u[1]), D || (ig.event.altKey ? (t || (t = [(l[0] + l[1]) / 2, (m[0] + m[1]) / 2]), F[0] = l[+(a[0] < t[0])], F[1] = m[+(a[1] < t[1])]) : t = null), B && r(a, j, 0) && (d(y), c = !0), C && r(a, k, 1) && (e(y), c = !0), c && (b(y), x({
                            type: "brush",
                            mode: D ? "move" : "resize"
                        }))
                    }

                    function r(a, b, c) {
                        var d, e, f = Se(b), i = f[0], j = f[1], k = F[c], p = c ? m : l, q = p[1] - p[0];
                        return D && (i -= k, j -= q + k), d = (c ? o : n) ? Math.max(i, Math.min(j, a[c])) : a[c], D ? e = (d += k) + q : (t && (k = Math.max(i, Math.min(j, 2 * t[c] - d))), d > k ? (e = d, d = k) : e = k), p[0] != d || p[1] != e ? (c ? h = null : g = null, p[0] = d, p[1] = e, !0) : void 0
                    }

                    function s() {
                        q(), y.style("pointer-events", "all").selectAll(".resize").style("display", a.empty() ? "none" : null), ig.select("body").style("cursor", null), G.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), E(), x({type: "brushend"})
                    }

                    var t, u, v = this, w = ig.select(ig.event.target), x = i.of(v, arguments), y = ig.select(v), A = w.datum(), B = !/^(n|s)$/.test(A) && j, C = !/^(e|w)$/.test(A) && k, D = w.classed("extent"), E = Y(v), F = ig.mouse(v), G = ig.select(c(v)).on("keydown.brush", f).on("keyup.brush", p);
                    if (ig.event.changedTouches ? G.on("touchmove.brush", q).on("touchend.brush", s) : G.on("mousemove.brush", q).on("mouseup.brush", s), y.interrupt().selectAll("*").interrupt(), D)F[0] = l[0] - F[0], F[1] = m[0] - F[1]; else if (A) {
                        var H = +/w$/.test(A), I = +/^n/.test(A);
                        u = [l[1 - H] - F[0], m[1 - I] - F[1]], F[0] = l[H], F[1] = m[I]
                    } else ig.event.altKey && (t = F.slice());
                    y.style("pointer-events", "none").selectAll(".resize").style("display", null), ig.select("body").style("cursor", w.style("cursor")), x({type: "brushstart"}), q()
                }

                var g, h, i = B(a, "brushstart", "brush", "brushend"), j = null, k = null, l = [0, 0], m = [0, 0], n = !0, o = !0, p = Wi[0];
                return a.event = function (a) {
                    a.each(function () {
                        var a = i.of(this, arguments), b = {x: l, y: m, i: g, j: h}, c = this.__chart__ || b;
                        this.__chart__ = b, Oi ? ig.select(this).transition().each("start.brush", function () {
                            g = c.i, h = c.j, l = c.x, m = c.y, a({type: "brushstart"})
                        }).tween("brush:brush", function () {
                            var c = ud(l, b.x), d = ud(m, b.y);
                            return g = h = null, function (e) {
                                l = b.x = c(e), m = b.y = d(e), a({type: "brush", mode: "resize"})
                            }
                        }).each("end.brush", function () {
                            g = b.i, h = b.j, a({type: "brush", mode: "resize"}), a({type: "brushend"})
                        }) : (a({type: "brushstart"}), a({type: "brush", mode: "resize"}), a({type: "brushend"}))
                    })
                }, a.x = function (b) {
                    return arguments.length ? (j = b, p = Wi[!j << 1 | !k], a) : j
                }, a.y = function (b) {
                    return arguments.length ? (k = b, p = Wi[!j << 1 | !k], a) : k
                }, a.clamp = function (b) {
                    return arguments.length ? (j && k ? (n = !!b[0], o = !!b[1]) : j ? n = !!b : k && (o = !!b), a) : j && k ? [n, o] : j ? n : k ? o : null
                }, a.extent = function (b) {
                    var c, d, e, f, i;
                    return arguments.length ? (j && (c = b[0], d = b[1], k && (c = c[0], d = d[0]), g = [c, d], j.invert && (c = j(c), d = j(d)), c > d && (i = c, c = d, d = i), (c != l[0] || d != l[1]) && (l = [c, d])), k && (e = b[0], f = b[1], j && (e = e[1], f = f[1]), h = [e, f], k.invert && (e = k(e), f = k(f)), e > f && (i = e, e = f, f = i), (e != m[0] || f != m[1]) && (m = [e, f])), a) : (j && (g ? (c = g[0], d = g[1]) : (c = l[0], d = l[1], j.invert && (c = j.invert(c), d = j.invert(d)), c > d && (i = c, c = d, d = i))), k && (h ? (e = h[0], f = h[1]) : (e = m[0], f = m[1], k.invert && (e = k.invert(e), f = k.invert(f)), e > f && (i = e, e = f, f = i))), j && k ? [[c, e], [d, f]] : j ? [c, d] : k && [e, f])
                }, a.clear = function () {
                    return a.empty() || (l = [0, 0], m = [0, 0], g = h = null), a
                }, a.empty = function () {
                    return !!j && l[0] == l[1] || !!k && m[0] == m[1]
                }, ig.rebind(a, i, "on")
            };
            var Vi = {
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            }, Wi = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []], Xi = oh.format = uh.timeFormat, Yi = Xi.utc, Zi = Yi("%Y-%m-%dT%H:%M:%S.%LZ");
            Xi.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? dg : Zi, dg.parse = function (a) {
                var b = new Date(a);
                return isNaN(b) ? null : b
            }, dg.toString = Zi.toString, oh.second = Pa(function (a) {
                return new ph(1e3 * Math.floor(a / 1e3))
            }, function (a, b) {
                a.setTime(a.getTime() + 1e3 * Math.floor(b))
            }, function (a) {
                return a.getSeconds()
            }), oh.seconds = oh.second.range, oh.seconds.utc = oh.second.utc.range, oh.minute = Pa(function (a) {
                return new ph(6e4 * Math.floor(a / 6e4))
            }, function (a, b) {
                a.setTime(a.getTime() + 6e4 * Math.floor(b))
            }, function (a) {
                return a.getMinutes()
            }), oh.minutes = oh.minute.range, oh.minutes.utc = oh.minute.utc.range, oh.hour = Pa(function (a) {
                var b = a.getTimezoneOffset() / 60;
                return new ph(36e5 * (Math.floor(a / 36e5 - b) + b))
            }, function (a, b) {
                a.setTime(a.getTime() + 36e5 * Math.floor(b))
            }, function (a) {
                return a.getHours()
            }), oh.hours = oh.hour.range, oh.hours.utc = oh.hour.utc.range, oh.month = Pa(function (a) {
                return a = oh.day(a), a.setDate(1), a
            }, function (a, b) {
                a.setMonth(a.getMonth() + b)
            }, function (a) {
                return a.getMonth()
            }), oh.months = oh.month.range, oh.months.utc = oh.month.utc.range;
            var $i = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], _i = [[oh.second, 1], [oh.second, 5], [oh.second, 15], [oh.second, 30], [oh.minute, 1], [oh.minute, 5], [oh.minute, 15], [oh.minute, 30], [oh.hour, 1], [oh.hour, 3], [oh.hour, 6], [oh.hour, 12], [oh.day, 1], [oh.day, 2], [oh.week, 1], [oh.month, 1], [oh.month, 3], [oh.year, 1]], aj = Xi.multi([[".%L", function (a) {
                return a.getMilliseconds()
            }], [":%S", function (a) {
                return a.getSeconds()
            }], ["%I:%M", function (a) {
                return a.getMinutes()
            }], ["%I %p", function (a) {
                return a.getHours()
            }], ["%a %d", function (a) {
                return a.getDay() && 1 != a.getDate()
            }], ["%b %d", function (a) {
                return 1 != a.getDate()
            }], ["%B", function (a) {
                return a.getMonth()
            }], ["%Y", Eb]]), bj = {
                range: function (a, b, c) {
                    return ig.range(Math.ceil(a / c) * c, +b, c).map(fg)
                }, floor: t, ceil: t
            };
            _i.year = oh.year, oh.scale = function () {
                return eg(ig.scale.linear(), _i, aj)
            };
            var cj = _i.map(function (a) {
                return [a[0].utc, a[1]]
            }), dj = Yi.multi([[".%L", function (a) {
                return a.getUTCMilliseconds()
            }], [":%S", function (a) {
                return a.getUTCSeconds()
            }], ["%I:%M", function (a) {
                return a.getUTCMinutes()
            }], ["%I %p", function (a) {
                return a.getUTCHours()
            }], ["%a %d", function (a) {
                return a.getUTCDay() && 1 != a.getUTCDate()
            }], ["%b %d", function (a) {
                return 1 != a.getUTCDate()
            }], ["%B", function (a) {
                return a.getUTCMonth()
            }], ["%Y", Eb]]);
            cj.year = oh.year.utc, oh.scale.utc = function () {
                return eg(ig.scale.linear(), cj, dj)
            }, ig.text = Ca(function (a) {
                return a.responseText
            }), ig.json = function (a, b) {
                return Da(a, "application/json", gg, b)
            }, ig.html = function (a, b) {
                return Da(a, "text/html", hg, b)
            }, ig.xml = Ca(function (a) {
                return a.responseXML
            }), "function" == typeof define && define.amd ? (this.d3 = ig, define(ig)) : "object" == typeof b && b.exports ? b.exports = ig : this.d3 = ig
        }()
    }, {}],
    2: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h;
        d = {accordions: null, el: null}, e = {
            toggleText: "Details",
            toggleElement: "span",
            content: "Contents",
            classes: "accordion-standard"
        }, f = "accordion-closed", g = "accordion-toggle", h = "accordion-content";
        var i = function (a) {
            for (var b = 1, c = arguments.length; c > b; b++) {
                var d = arguments[b];
                for (var e in d)a[e] = d[e]
            }
            return a
        }, j = function (a) {
            var b = a.target;
            b.classList.contains(g) && b.parentElement.classList.toggle(f)
        }, k = function (a) {
            var b, c, f, k;
            return b = {addAccordion: null, destroy: null}, c = function (a) {
                var c, e;
                if (k = i({}, d, a), f = k.el || document.createElement("section"), f.addEventListener("click", j), a.accordions)for (e = a.accordions.length, c = 0; e > c; c++)b.addAccordion(a.accordions[c])
            }, b.addAccordion = function (a) {
                var b, c, d;
                a = i({}, e, a), b = document.createElement("section"), b.className = "accordion " + a.classes, c = document.createElement(a.toggleElement), c.className = g, c.innerHTML = a.toggleText, b.appendChild(c), d = document.createElement("div"), d.className = h, a.contentText ? d.innerHTML = a.contentText : "string" == typeof a.content ? d.innerHTML = a.content : d.appendChild(a.content), b.appendChild(d), f.appendChild(b)
            }, b.destroy = function () {
                f.removeEventListener("click", j), f = null, k = null, b = null
            }, c(a), a = null, b
        };
        b.exports = k
    }, {}],
    3: [function (a, b, c) {
        "use strict";
        var d = function (a) {
            var b, c, d, e, f;
            return b = {}, c = function () {
                e = null, d = [], b.length = 0, f(!0)
            }, f = function (c) {
                var f;
                c ? (f = a.getAttribute("class"), null === f ? (d = [], b.length = 0) : (f = "" + f, d = f.split(" "), b.length = d.length)) : (f = d.join(" "), a.setAttribute("class", f)), e = f
            }, b.add = function (a) {
                var c;
                f(!0), c = d.indexOf(a), -1 === c && (d.push(a), b.length++, f(!1))
            }, b.contains = function (a) {
                var b;
                return f(!0), b = d.indexOf(a), -1 !== b
            }, b.item = function (a) {
                return f(!0), 0 > a || a >= d.length ? null : d[a]
            }, b.remove = function (a) {
                var c;
                f(!0), c = d.indexOf(a), -1 !== c && (d.splice(c, 1), b.length--, f(!1))
            }, b.toggle = function (a) {
                b.has(a) ? b.remove(a) : b.add(a)
            }, c(), b
        };
        d.polyfill = function (a) {
            a.classList || (a.classList = d(a))
        }, b.exports = d
    }, {}],
    4: [function (a, b, c) {
        "use strict";
        var d = a("d3"), e = a("./ClassList"), f = a("d3/D3SubView"), g = a("util/Util"), h = function (a) {
            var b, c, h, i, j, k, l, m, n, o, p, q, r;
            return b = f(a), c = function (a) {
                b.model.set(g.extend({
                    data: [],
                    pointRadius: 5,
                    showLine: !0,
                    showPoints: !0,
                    showLegendPoint: !0
                }, a, b.model.get()), {silent: !0}), e.polyfill(b.el), b.el.classList.add("D3LineView"), h = d.select(b.el), b.legend ? (e.polyfill(b.legend), b.legend.classList.add("D3LineView"), i = d.select(b.legend), j = i.append("path").attr("class", "line"), l = i.append("text").attr("class", "text")) : (i = null, j = null, l = null), m = h.append("path").attr("class", "line").attr("clip-path", "url(#plotAreaClip)"), n = a.lineFormat || d.svg.line(), n.x(b.getScaleX), n.y(b.getScaleY)
            }, b.getScaleX = function (a) {
                return o(a[0])
            }, b.getScaleY = function (a) {
                return p(a[1])
            }, q = function (a) {
                return a[0]
            }, r = function (a) {
                return a[1]
            }, b.destroy = g.compose(function () {
                var a;
                h && (a = h.selectAll(".point").on("mouseout", null).on("mouseover", null), h = null), i && (j = null, l = null), m = null, n = null, o = null, p = null, b = null
            }, b.destroy), b.formatX = function (a) {
                return a
            }, b.formatY = function (a) {
                return a
            }, b.getXExtent = function () {
                return d.extent(b.model.get("data"), q)
            }, b.getYExtent = function () {
                return d.extent(b.model.get("data"), r)
            }, b.onPointOut = function () {
                var a;
                a = d.event.target, e.polyfill(a), a.classList.remove("mouseover"), b.view.showTooltip(null, null)
            }, b.onPointOver = function (a) {
                var c;
                c = d.event.target, e.polyfill(c), c.classList.add("mouseover"), b.view.showTooltip(a, [{text: b.model.get("label")}, [{
                    "class": "label",
                    text: b.view.model.get("xLabel") + ": "
                }, {"class": "value", text: b.formatX(q(a))}], [{
                    "class": "label",
                    text: b.view.model.get("yLabel") + ": "
                }, {"class": "value", text: b.formatY(r(a))}]])
            }, b.plotPoints = function (a) {
                a.enter().append("svg:circle").attr("class", "point").on("mouseout", b.onPointOut).on("mouseover", b.onPointOver), a.attr("r", b.model.get("pointRadius")).attr("cx", b.getScaleX).attr("cy", b.getScaleY), a.exit().on("mouseout", null).on("mouseover", null).remove()
            }, b.render = function () {
                var a, c;
                a = b.model.get("data"), o = b.view.model.get("xAxisScale"), p = b.view.model.get("yAxisScale"), b.legend && (j.attr("d", "M0,-3L25,-3"), k = i.selectAll(".point"), b.model.get("showLegendPoint") ? (k.empty() && (k = i.append("svg:circle").attr("class", "point")), k.attr("r", b.model.get("pointRadius")).attr("cx", 12.5).attr("cy", -3)) : k.remove(), l.text(b.model.get("label")).attr("dx", 30)), 0 !== a.length && b.model.get("showLine") ? m.attr("d", n(a)) : m.attr("d", null), c = h.selectAll(".point").data(a), b.model.get("showPoints") ? b.plotPoints(c) : c.remove()
            }, c(a), a = null, b
        };
        b.exports = h
    }, {"./ClassList": 3, d3: 1, "d3/D3SubView": 5, "util/Util": 44}],
    5: [function (a, b, c) {
        "use strict";
        var d = a("d3"), e = a("./ClassList"), f = a("util/Util"), g = a("mvc/View"), h = 0, i = function (a) {
            var b, c, i, j;
            return b = g(f.extend({el: document.createElementNS("http://www.w3.org/2000/svg", "g")}, a)), c = function (a) {
                a = f.extend({
                    className: null,
                    legend: document.createElementNS("http://www.w3.org/2000/svg", "g")
                }, a), b.id = a.id || h++, b.view = a.view, b.el.view = b, e.polyfill(b.el), i = d.select(b.el), i.on("click", b.onClick), i.on("mouseout", b.onMouseOut), i.on("mouseover", b.onMouseOver), b.legend = a.legend, b.legend && (e.polyfill(b.legend), j = d.select(b.legend), j.on("click", b.onClick), j.on("mouseout", b.onMouseOut), j.on("mouseover", b.onMouseOver)), a.className && (b.el.classList.add(a.className), b.legend && b.legend.classList.add(a.className))
            }, b.destroy = f.compose(function () {
                null !== b && (i && (i.on("click", null), i.on("mouseout", null), i.on("mouseover", null), i = null), b.legend && (j.on("click", null), j.on("mouseout", null), j.on("mouseover", null), j = null), b.el.view = null, b = null)
            }, b.destroy), b.getXExtent = function () {
                return []
            }, b.getYExtent = function () {
                return []
            }, b.onClick = function () {
                b.trigger("click")
            }, b.onDeselect = function () {
                b.el.classList.remove("selected"), b.legend && b.legend.classList.remove("selected")
            }, b.onMouseOut = function () {
                b.el.classList.remove("mouseover"), b.legend && b.legend.classList.remove("mouseover")
            }, b.onMouseOver = function () {
                b.el.classList.add("mouseover"), b.legend && b.legend.classList.add("mouseover")
            }, b.onSelect = function () {
                b.el.classList.add("selected"), b.legend && b.legend.classList.add("selected")
            }, b.render = function () {
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"./ClassList": 3, d3: 1, "mvc/View": 42, "util/Util": 44}],
    6: [function (a, b, c) {
        "use strict";
        var d = function (a, b) {
            var c;
            b = b.map(function (b) {
                var c = a.append("text");
                return "function" == typeof b.forEach ? b.forEach(function (a) {
                    c.append("tspan").attr("class", a["class"] || "").text(a.text)
                }) : c.attr("class", b["class"] || "").text(b.text), c
            }), c = 0, b.forEach(function (a) {
                var b = a.node().getBBox();
                c += b.height, a.attr("y", c)
            })
        }, e = function (a) {
            var b;
            try {
                b = a.getBBox()
            } catch (c) {
            }
            if (!b)try {
                b = a.getBoundingClientRect()
            } catch (c) {
            }
            return b || (b = {x: 0, y: 0, width: 0, height: 0}), b
        }, f = function (a, b) {
            var c = a[0], d = a[a.length - 1], e = d - c, f = e * b;
            return [c - f, d + f]
        }, g = function (a, b) {
            var c, d, e, g;
            return c = 10, d = Math.log(c), g = Math.log(a[0]) / d, e = Math.log(a[a.length - 1]) / d, a = f([g, e], b), [Math.pow(c, a[0]), Math.pow(c, a[a.length - 1])]
        }, h = {formatText: d, getBBox: e, padExtent: f, padLogExtent: g};
        b.exports = h
    }, {}],
    7: [function (a, b, c) {
        "use strict";
        var d = a("d3"), e = a("mvc/Collection"), f = a("./D3Util"), g = a("util/Util"), h = a("mvc/View"), i = function (a) {
            var b, c, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A;
            return b = h(a), c = function (a) {
                var c;
                a = a || {}, i = !0, b.model.set(g.extend({
                    clickToSelect: !0,
                    height: 480,
                    legendPosition: "topright",
                    legendOffset: 20,
                    marginBottom: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    paddingBottom: 80,
                    paddingLeft: 80,
                    paddingRight: 20,
                    paddingTop: 50,
                    pointRadius: 3,
                    title: "",
                    tooltipOffset: 10,
                    tooltipPadding: 5,
                    width: 640,
                    xAxisFormat: null,
                    xAxisPadding: .05,
                    xAxisScale: d.scale.linear(),
                    xAxisTicks: null,
                    xExtent: null,
                    xLabel: "",
                    yAxisFormat: null,
                    yAxisPadding: .05,
                    yAxisScale: d.scale.linear(),
                    yAxisTicks: null,
                    yExtent: null,
                    yLabel: ""
                }, a), {silent: !0}), c = b.el, c.classList.add("D3View"), c.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="plotAreaClip"><rect x="0" y="0"></rect></clipPath></defs><g class="margin"><rect class="outer-frame"></rect><text class="plot-title" text-anchor="middle"></text><g class="padding"><rect class="inner-frame"></rect><g class="legend"></g><g class="x"><g class="axis"></g><text class="label" text-anchor="middle"></text></g><g class="y"><g class="axis"></g><text class="label" text-anchor="middle" transform="rotate(-90)"></text></g><g class="plot"></g><g class="tooltip"></g></g></g></svg>',
                    r = c.querySelector("svg"), p = r.querySelector("#plotAreaClip > rect"), m = r.querySelector(".outer-frame"), j = r.querySelector(".inner-frame"), l = r.querySelector(".margin"), q = l.querySelector(".plot-title"), n = l.querySelector(".padding"), k = n.querySelector(".legend"), w = n.querySelector(".x"), u = w.querySelector(".axis"), v = w.querySelector(".label"), A = n.querySelector(".y"), y = A.querySelector(".axis"), z = A.querySelector(".label"), o = n.querySelector(".plot"), s = n.querySelector(".tooltip"), b.views = e([]), b.views.on("add", b.onAdd), b.views.on("deselect", b.onDeselect), b.views.on("remove", b.onRemove), b.views.on("reset", b.onReset), b.views.on("select", b.onSelect), t = d.svg.axis().orient("bottom").outerTickSize(0), x = d.svg.axis().orient("left").outerTickSize(0)
            }, b.destroy = g.compose(function () {
                null !== b && (b.views.off(), b.views.destroy(), b.views = null, j = null, k = null, l = null, m = null, n = null, o = null, p = null, q = null, r = null, s = null, t = null, u = null, v = null, w = null, x = null, y = null, z = null, A = null, b = null)
            }, b.destroy), b.getLegendClass = function () {
                return "legend-content"
            }, b.onAdd = function (a, c) {
                a.forEach(function (a) {
                    a._d3view_onclick = function () {
                        b.onClick(a)
                    }, a.on("click", a._d3view_onclick)
                }), c || b.render()
            }, b.onClick = function (a) {
                b.model.get("clickToSelect") && b.views.select(a)
            }, b.onDeselect = function (a) {
                a.onDeselect()
            }, b.onRemove = function (a, c) {
                a.forEach(function (a) {
                    a.off("click", a._d3view_onclick), a._d3view_onclick = null
                }), c || b.render()
            }, b.onReset = function () {
                for (var a, c = []; o.firstChild;)a = o.firstChild, o.removeChild(a), c.push(a.view);
                b.onRemove(c), b.onAdd(b.views.data())
            }, b.onSelect = function (a) {
                a.onSelect()
            }, b.render = function (a) {
                var c, e, g, h, o, s, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R;
                E = b.model.get(), (i || !a) && (a = E, i = !1), M = E.xAxisScale, P = E.yAxisScale, H = E.paddingBottom, I = E.paddingLeft, a.hasOwnProperty("title") && (q.textContent = E.title, q.setAttribute("y", f.getBBox(q).height)), a.hasOwnProperty("xLabel") && (v.textContent = E.xLabel), a.hasOwnProperty("yLabel") && (z.textContent = E.yLabel), (a.hasOwnProperty("width") || a.hasOwnProperty("height") || a.hasOwnProperty("legendPosition") || a.hasOwnProperty("marginBottom") || a.hasOwnProperty("marginLeft") || a.hasOwnProperty("marginRight") || a.hasOwnProperty("marginTop") || a.hasOwnProperty("paddingBottom") || a.hasOwnProperty("paddingLeft") || a.hasOwnProperty("paddingRight") || a.hasOwnProperty("paddingTop")) && (L = E.width, c = E.height, A = E.marginBottom, B = E.marginLeft, C = E.marginRight, D = E.marginTop, J = E.paddingRight, K = E.paddingTop, G = L - B - C, F = c - D - A, e = G - I - J, g = F - K - H, b.el.style.paddingBottom = 100 * c / L + "%", r.setAttribute("viewBox", "0 0 " + L + " " + c), r.setAttribute("preserveAspectRatio", "xMinYMin meet"), p.setAttribute("width", e), p.setAttribute("height", g), l.setAttribute("transform", "translate(" + B + "," + D + ")"), m.setAttribute("height", F), m.setAttribute("width", G), q.setAttribute("x", G / 2), n.setAttribute("transform", "translate(" + I + "," + K + ")"), j.setAttribute("width", e), j.setAttribute("height", g), w.setAttribute("transform", "translate(0," + g + ")"), M.range([0, e]), P.range([g, 0]), v.setAttribute("x", e / 2), z.setAttribute("x", -g / 2), h = E.legendPosition, o = 0, s = 0, "topright" === h ? o = e : "bottomleft" === h ? s = g : "bottomright" === h && (o = e, s = g), k.setAttribute("transform", "translate(" + o + "," + s + ")")), O = b.getPlotXExtent(), M.domain(O), R = b.getPlotYExtent(O), P.domain(R), t.scale(M), t.tickFormat(E.xAxisFormat), N = E.xAxisTicks, "function" == typeof N && (N = N(O)), t.tickValues(N), x.scale(P), x.tickFormat(E.yAxisFormat), Q = E.yAxisTicks, "function" == typeof Q && (Q = Q(R)), x.tickValues(Q), d.select(u).call(t), d.select(y).call(x), v.setAttribute("y", H - f.getBBox(v).height), z.setAttribute("y", f.getBBox(z).height - I), b.renderViews()
            }, b.renderViews = function () {
                var a, c, e, h, i, j;
                g.empty(o), g.empty(k), c = d.select(k).append("g").attr("class", b.getLegendClass).node(), j = 0, b.views.data().forEach(function (d, e) {
                    o.appendChild(d.el), d.el.setAttribute("data-index", e), d.legend && (c.appendChild(d.legend), d.legend.setAttribute("data-index", e)), d.render(b), d.legend && (a = f.getBBox(d.legend), j += a.height, d.legend.setAttribute("transform", "translate(0," + j + ")"))
                }), a = f.getBBox(c), e = b.model.get("legendOffset"), h = b.model.get("legendPosition"), i = e, j = e, "topright" === h ? i = -(e + a.width) : "bottomleft" === h ? j = -(e + a.height) : "bottomright" === h && (i = -(e + a.width), j = -(e + a.height)), c.setAttribute("transform", "translate(" + i + "," + j + ")")
            }, b.getPlotXExtent = function () {
                var a, c, d;
                return d = b.getXExtent(), a = b.model.get("xAxisPadding"), a && (c = b.model.get("xAxisScale"), d = ("function" == typeof c.base ? f.padLogExtent : f.padExtent)(d, a)), d
            }, b.getPlotYExtent = function (a) {
                var c, d, e;
                return e = b.getYExtent(a), c = b.model.get("yAxisPadding"), c && (d = b.model.get("yAxisScale"), e = ("function" == typeof d.base ? f.padLogExtent : f.padExtent)(e, c)), e
            }, b.getXExtent = function () {
                var a;
                return a = b.model.get("xExtent"), null === a && (a = [], b.views.data().forEach(function (b) {
                    a = a.concat(b.getXExtent())
                }), a = d.extent(a)), a
            }, b.getYExtent = function () {
                var a;
                return a = b.model.get("yExtent"), null === a && (a = [], b.views.data().forEach(function (b) {
                    a = a.concat(b.getYExtent())
                }), a = d.extent(a)), a
            }, b.showTooltip = function (a, c) {
                var e, g, h, i, k, l, m, n, o, p;
                m = d.select(s), m.selectAll("*").remove(), a && c && (i = b.model.get(), h = i.tooltipOffset, l = i.tooltipPadding, k = m.append("rect").attr("class", "tooltip-outline"), g = m.append("g").attr("class", "tooltip-content"), f.formatText(g, c), e = f.getBBox(m.node()), k.attr("width", e.width + 2 * l).attr("height", e.height + 2 * l), g.attr("transform", "translate(" + l + ",0)"), o = i.xAxisScale(a[0]), p = i.yAxisScale(a[1]), e = f.getBBox(j), n = f.getBBox(s), o + n.width > e.width ? o = o - n.width - h : o += h, p + n.height > e.height ? p = p - n.height - h : p += h, s.setAttribute("transform", "translate(" + o + "," + p + ")"))
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"./D3Util": 6, d3: 1, "mvc/Collection": 34, "mvc/View": 42, "util/Util": 44}],
    8: [function (require, module, exports) {
        "use strict";
        L.Util.ajax = function (url, cb) {
            void 0 === window.XMLHttpRequest && (window.XMLHttpRequest = function () {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch (a) {
                    throw new Error("XMLHttpRequest is not supported")
                }
            });
            var response, request = new XMLHttpRequest;
            request.open("GET", url), request.onreadystatechange = function () {
                4 === request.readyState && 200 === request.status && (response = window.JSON ? JSON.parse(request.responseText) : eval("(" + request.responseText + ")"), cb(response))
            }, request.send()
        }, L.UtfGrid = L.Class.extend({
            includes: L.Mixin.Events,
            options: {
                subdomains: "abc",
                minZoom: 0,
                maxZoom: 18,
                tileSize: 256,
                resolution: 4,
                useJsonP: !0,
                pointerCursor: !0
            },
            _mouseOn: null,
            initialize: function (a, b) {
                L.Util.setOptions(this, b), this._url = a, this._cache = {};
                for (var c = 0; window["lu" + c];)c++;
                this._windowKey = "lu" + c, window[this._windowKey] = {};
                var d = this.options.subdomains;
                "string" == typeof this.options.subdomains && (this.options.subdomains = d.split(""))
            },
            onAdd: function (a) {
                this._map = a, this._container = this._map._container, this._update();
                var b = this._map.getZoom();
                b > this.options.maxZoom || b < this.options.minZoom || (a.on("click", this._click, this), a.on("mousemove", this._move, this), a.on("moveend", this._update, this))
            },
            onRemove: function () {
                var a = this._map;
                a.off("click", this._click, this), a.off("mousemove", this._move, this), a.off("moveend", this._update, this)
            },
            _click: function (a) {
                this.fire("click", this._objectForEvent(a))
            },
            _move: function (a) {
                var b = this._objectForEvent(a);
                b.data !== this._mouseOn ? (this._mouseOn && (this.fire("mouseout", {
                    latlng: a.latlng,
                    data: this._mouseOn
                }), this.options.pointerCursor && (this._container.style.cursor = "")), b.data && (this.fire("mouseover", b), this.options.pointerCursor && (this._container.style.cursor = "pointer")), this._mouseOn = b.data) : b.data && this.fire("mousemove", b)
            },
            _objectForEvent: function (a) {
                var b = this._map, c = b.project(a.latlng), d = this.options.tileSize, e = this.options.resolution, f = Math.floor(c.x / d), g = Math.floor(c.y / d), h = Math.floor((c.x - f * d) / e), i = Math.floor((c.y - g * d) / e), j = b.options.crs.scale(b.getZoom()) / d;
                f = (f + j) % j, g = (g + j) % j;
                var k = this._cache[b.getZoom() + "_" + f + "_" + g];
                if (!k)return {latlng: a.latlng, data: null};
                var l = this._utfDecode(k.grid[i].charCodeAt(h)), m = k.keys[l], n = k.data[m];
                return k.data.hasOwnProperty(m) || (n = null), {latlng: a.latlng, data: n}
            },
            _update: function () {
                var a = this._map.getPixelBounds(), b = this._map.getZoom(), c = this.options.tileSize;
                if (!(b > this.options.maxZoom || b < this.options.minZoom))for (var d = new L.Point(Math.floor(a.min.x / c), Math.floor(a.min.y / c)), e = new L.Point(Math.floor(a.max.x / c), Math.floor(a.max.y / c)), f = this._map.options.crs.scale(b) / c, g = d.x; g <= e.x; g++)for (var h = d.y; h <= e.y; h++) {
                    var i = (g + f) % f, j = (h + f) % f, k = b + "_" + i + "_" + j;
                    this._cache.hasOwnProperty(k) || (this._cache[k] = null, this.options.useJsonP ? this._loadTileP(b, i, j) : this._loadTile(b, i, j))
                }
            },
            _loadTileP: function (a, b, c) {
                var d = document.getElementsByTagName("head")[0], e = a + "_" + b + "_" + c, f = "lu_" + e, g = this._windowKey, h = this, i = L.Util.template(this._url, L.Util.extend({
                    s: L.TileLayer.prototype._getSubdomain.call(this, {
                        x: b,
                        y: c
                    }), z: a, x: b, y: c, cb: g + "." + f
                }, this.options)), j = document.createElement("script");
                j.setAttribute("type", "text/javascript"), j.setAttribute("src", i), window[g][f] = function (a) {
                    h._cache[e] = a, delete window[g][f], d.removeChild(j)
                }, d.appendChild(j)
            },
            _loadTile: function (a, b, c) {
                var d = L.Util.template(this._url, L.Util.extend({
                    s: L.TileLayer.prototype._getSubdomain.call(this, {
                        x: b,
                        y: c
                    }), z: a, x: b, y: c
                }, this.options)), e = a + "_" + b + "_" + c, f = this;
                L.Util.ajax(d, function (a) {
                    f._cache[e] = a
                })
            },
            _utfDecode: function (a) {
                return a >= 93 && a--, a >= 35 && a--, a - 32
            }
        }), L.utfGrid = function (a, b) {
            return new L.UtfGrid(a, b)
        }, module.exports = L.UtfGrid
    }, {}],
    9: [function (a, b, c) {
        "use strict";
        var d = L.Control.Layers.extend({
            _addItem: function (a) {
                var b, c, d, e, f;
                return d = document.createDocumentFragment(), f = document.createElement("label"), b = this._map.hasLayer(a.layer), a.overlay ? (e = document.createElement("input"), e.type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = b) : e = this._createRadioElement("leaflet-base-layers", b), e.layerId = L.stamp(a.layer), e.id = "leaflet-layer-control-selector-" + e.layerId, L.DomEvent.on(e, "click", this._onInputClick, this), f.innerHTML = a.name, f.setAttribute("for", e.id), d.appendChild(e), d.appendChild(f), c = a.overlay ? this._overlaysList : this._baseLayersList, c.appendChild(d), d
            }
        });
        L.Control.HazDevLayers = d, L.control.hazDevLayers = function (a, b, c) {
            return new d(a, b, c)
        }, b.exports = L.control.hazDevLayers
    }, {}],
    10: [function (a, b, c) {
        "use strict";
        var d = L.Control.extend({
            options: {
                position: "bottomright",
                separator: " : ",
                emptyString: "Unavailable",
                lngFirst: !1,
                numDigits: 3,
                lngFormatter: function (a) {
                    return [Math.abs(a).toFixed(3), "&deg;", 0 > a ? "W" : "E"].join("")
                },
                latFormatter: function (a) {
                    return [Math.abs(a).toFixed(3), "&deg;", 0 > a ? "S" : "N"].join("")
                }
            }, onAdd: function (a) {
                return this._container = L.DomUtil.create("div", "leaflet-control-background leaflet-control-mouseposition"), L.DomEvent.disableClickPropagation(this._container), a.on("mousemove", this._onMouseMove, this), this._container.innerHTML = this.options.emptyString, this._container
            }, onRemove: function (a) {
                a.off("mousemove", this._onMouseMove)
            }, _onMouseMove: function (a) {
                var b = L.Util.formatNum(a.latlng.lng, this.options.numDigits);
                b = b >= 0 ? (b + 180) % 360 - 180 : (b + 180 + 360 * Math.ceil(Math.abs(b + 180) / 360)) % 360 - 180;
                var c = L.Util.formatNum(a.latlng.lat, this.options.numDigits);
                this.options.lngFormatter && (b = this.options.lngFormatter(b)), this.options.latFormatter && (c = this.options.latFormatter(c));
                var d = this.options.lngFirst ? b + this.options.separator + c : c + this.options.separator + b;
                this._container.innerHTML = d
            }
        });
        L.Control.MousePosition = d, L.control.mousePosition = function (a) {
            return new d(a)
        }, b.exports = L.control.mousePosition
    }, {}],
    11: [function (a, b, c) {
        "use strict";
        var d = a("util/Xhr"), e = L.GeoJSON.extend({
            initialize: function (a) {
                this._url = a.url, this._data = null, L.GeoJSON.prototype.initialize.call(this, [], a)
            }, onAdd: function (a) {
                var b;
                null === this._data && (this._data = "loading", b = this, d.ajax({
                    url: this._url, success: function (a) {
                        a = "string" == typeof a ? JSON.parse(a) : a, b._data = a, b.addData(a)
                    }, error: function () {
                        b._data = null
                    }
                })), L.GeoJSON.prototype.onAdd.call(this, a)
            }
        });
        L.AsynchronousGeoJson = e, L.asynchronousGeoJSON = function (a) {
            return new e(a)
        }, b.exports = L.asynchronousGeoJson
    }, {"util/Xhr": 45}],
    12: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("leaflet/layer/TileProvider"), i = a("util/Util");
        d = "cartodb", f = "esri", g = {}, e = {provider: f}, g[d] = {
            url: "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
            options: {
                subdomains: ["server", "services"],
                attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            }
        }, g[f] = {
            url: "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.jpg",
            options: {
                subdomains: ["server", "services"],
                attribution: "Sources: Esri, DeLorme, HERE, MapmyIndia,  &copy; OpenStreetMap contributors, and the GIS community"
            }
        };
        var j = function (a) {
            try {
                return h.create(g, i.extend({}, e, a))
            } catch (b) {
                return h.create(g, e)
            }
        };
        j.CARTODB = d, j.ESRI = f, b.exports = j
    }, {"leaflet/layer/TileProvider": 19, "util/Util": 44}],
    13: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = "http://earthquake.usgs.gov/arcgis/rest/services/eq/catalog_2015/MapServer/tile/{z}/{y}/{x}", f = function (a) {
            return a = d.extend({tileUrl: e}, a), L.tileLayer(a.tileUrl, a)
        };
        b.exports = f
    }, {"util/Util": 44}],
    14: [function (a, b, c) {
        "use strict";
        var d = a("leaflet/UtfGrid"), e = a("util/Util"), f = "leaflet-mouseover-tooltip";
        L.MouseOverLayer = L.LayerGroup.extend({
            _initialized: !1, initialize: function (a) {
                this._tileLayer = new L.TileLayer(a.tileUrl, a.tileOpts), this._dataLayer = new d(a.dataUrl, a.dataOpts), "string" == typeof a.tiptext && (this._tiptext = a.tiptext, this._tooltip = L.DomUtil.create("span", f), this.on("mouseover", this._onMouseOver, this), this.on("mouseout", this._onMouseOut, this)), L.LayerGroup.prototype.initialize.call(this, []), this.addLayer(this._tileLayer), e.isMobile() || this.addLayer(this._dataLayer), this._initialized = !0
            }, on: function () {
                d.prototype.on.apply(this._dataLayer, arguments)
            }, off: function () {
                d.prototype.off.apply(this._dataLayer, arguments)
            }, onAdd: function (a) {
                L.LayerGroup.prototype.onAdd.apply(this, arguments), this._tooltip && a.getPanes().popupPane.appendChild(this._tooltip)
            }, onRemove: function () {
                L.LayerGroup.prototype.onRemove.apply(this, arguments), this._tooltip && this._tooltip.parentNode && this._tooltip.parentNode.removeChild(this._tooltip)
            }, addLayer: function () {
                if (this._initialized)try {
                    console.log("MouseOverLayer::addLayer - Immutable object")
                } catch (a) {
                } else L.LayerGroup.prototype.addLayer.apply(this, arguments)
            }, removeLayer: function () {
                if (this._initialized)try {
                    console.log("MouseOverLayer::removeLayer - Immutable object")
                } catch (a) {
                } else L.LayerGroup.prototype.removeLayer.apply(this, arguments)
            }, clearLayers: function () {
                if (this._initialized)try {
                    console.log("MouseOverLayer::clearLayers - Immutable object")
                } catch (a) {
                } else L.LayerGroup.prototype.clearLayers.apply(this, arguments)
            }, _onMouseOver: function (a) {
                this._tooltip.innerHTML = L.Util.template(this._tiptext, a.data), L.DomUtil.setPosition(this._tooltip, this._map.latLngToLayerPoint(a.latlng)), this._tooltip.style.display = "block"
            }, _onMouseOut: function () {
                this._tooltip.style.display = ""
            }
        }), L.mouseOverLayer = function (a) {
            return new L.MouseOverLayer(a)
        }, b.exports = L.mouseOverLayer
    }, {"leaflet/UtfGrid": 8, "util/Util": 44}],
    15: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("leaflet/layer/TileProvider"), i = a("util/Util");
        e = "esri", f = "mapquest", g = {}, d = {provider: e}, g[e] = {
            url: "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            options: {
                subdomains: ["server", "services"],
                attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            }
        }, g[f] = {
            url: "http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg",
            options: {
                subdomains: "1234",
                attribution: 'Data, imagery and map information provided by MapQuest, <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> and contributors, <a href="http://wiki.openstreetmap.org/wiki/Legal_FAQ#3a._I_would_like_to_use_OpenStreetMap_maps._How_should_I_credit_you.3F">ODbL</a>'
            }
        };
        var j = function (a) {
            try {
                return h.create(g, i.extend({}, d, a))
            } catch (b) {
                return h.create(g, d)
            }
        };
        j.ESRI = e, j.MAPQUEST = f, b.exports = j
    }, {"leaflet/layer/TileProvider": 19, "util/Util": 44}],
    16: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("leaflet/layer/TileProvider"), i = a("util/Util");
        e = "esri", f = "mapquest", g = {}, d = {provider: e}, g[e] = {
            url: "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
            options: {
                subdomains: ["server", "services"],
                attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
            }
        }, g[f] = {
            url: "http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg",
            options: {
                subdomains: "1234",
                attribution: 'Data, imagery and map information provided by MapQuest, <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> and contributors, <a href="http://wiki.openstreetmap.org/wiki/Legal_FAQ#3a._I_would_like_to_use_OpenStreetMap_maps._How_should_I_credit_you.3F">ODbL</a>'
            }
        };
        var j = function (a) {
            try {
                return h.create(g, i.extend({}, d, a))
            } catch (b) {
                return h.create(g, d)
            }
        };
        j.ESRI = e, j.MAPQUEST = f, b.exports = j
    }, {"leaflet/layer/TileProvider": 19, "util/Util": 44}],
    17: [function (a, b, c) {
        "use strict";
        var d = "http://earthquake.usgs.gov/basemap/tiles/plates", e = function (a) {
            return a = a || {}, L.tileLayer(d + "/{z}/{x}/{y}.png", a)
        };
        L.tectonicPlates = e, b.exports = e
    }, {}],
    18: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("leaflet/layer/TileProvider"), i = a("util/Util");
        e = "esri", f = "natgeo", g = {}, d = {provider: e}, g[e] = {
            url: "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
            options: {
                subdomains: ["server", "services"],
                attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
            }
        }, g[f] = {
            url: "//{s}.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
            options: {
                subdomains: ["server", "services"],
                attribution: "Content may not reflect National Geographic's current map policy. Sources: National Geographic, Esri, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp."
            }
        };
        var j = function (a) {
            try {
                return h.create(g, i.extend({}, d, a))
            } catch (b) {
                return h.create(g, d)
            }
        };
        j.ESRI = e, j.NATGEO = f, b.exports = j
    }, {"leaflet/layer/TileProvider": 19, "util/Util": 44}],
    19: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = {
            create: function (a, b) {
                var c, e, f;
                return f = a[b.provider], e = f.url, c = d.extend({}, f.options, b), c.hasOwnProperty("provider") && delete c.provider, L.tileLayer(e, c)
            }
        };
        b.exports = e
    }, {"util/Util": 44}],
    20: [function (a, b, c) {
        "use strict";
        var d = a("leaflet/layer/MouseOverLayer"), e = a("util/Util"), f = "http://earthquake.usgs.gov/basemap/tiles/faults", g = function (a) {
            return a = e.extend({
                tileUrl: f + "/{z}/{x}/{y}.png",
                dataUrl: f + "/{z}/{x}/{y}.grid.json?callback={cb}",
                tiptext: "{NAME}"
            }, a), d(a)
        };
        L.usFault = g, b.exports = g
    }, {"leaflet/layer/MouseOverLayer": 14, "util/Util": 44}],
    21: [function (a, b, c) {
        "use strict";
        var d = {
            computeFromCoordinates: function (a, b) {
                if ("string" != typeof a || "string" != typeof b)return d.NOT_COMPUTED;
                var c, e = a.split("."), f = b.split(".");
                return c = 1 === e.length || 1 === f.length ? 0 : Math.min(e[1].length, f[1].length), c >= 5 ? d.HIGH_CONFIDENCE : c >= 4 ? d.ABOVE_AVERAGE_CONFIDENCE : c >= 3 ? d.AVERAGE_CONFIDENCE : c >= 2 ? d.BELOW_AVERAGE_CONFIDENCE : c >= 1 ? d.LOW_CONFIDENCE : c >= 0 ? d.NO_CONFIDENCE : d.NOT_COMPUTED
            }, computeFromPoint: function (a) {
                return a > 16 ? d.HIGH_CONFIDENCE : a > 12 ? d.ABOVE_AVERAGE_CONFIDENCE : a > 8 ? d.AVERAGE_CONFIDENCE : a > 4 ? d.BELOW_AVERAGE_CONFIDENCE : d.LOW_CONFIDENCE
            }, roundLocation: function (a, b) {
                var c, e = b;
                return b === d.NOT_COMPUTED && (e = 0), c = parseFloat(a).toFixed(e), parseFloat(c)
            }, computeZoomFromConfidence: function (a) {
                return a === d.HIGH_CONFIDENCE ? 16 : a === d.ABOVE_AVERAGE_CONFIDENCE ? 13 : a === d.AVERAGE_CONFIDENCE ? 9 : a === d.BELOW_AVERAGE_CONFIDENCE ? 5 : (a === d.LOW_CONFIDENCE, 1)
            }, computeZoomFromGeocode: function (a) {
                var b = this.computeFromGeocode(a);
                return this.computeZoomFromConfidence(b)
            }, computeFromGeolocate: function (a) {
                return a > 1e5 ? d.LOW_CONFIDENCE : a > 1e4 ? d.BELOW_AVERAGE_CONFIDENCE : a > 1e3 ? d.AVERAGE_CONFIDENCE : a > 100 ? d.ABOVE_AVERAGE_CONFIDENCE : d.HIGH_CONFIDENCE
            }, computeFromGeocode: function (a) {
                var b, c, e;
                return c = a.extent, c && (e = Math.max(Math.abs(c.xmax - c.xmin), Math.abs(c.ymax - c.ymin)), .001 > e ? b = d.HIGH_CONFIDENCE : .01 > e ? b = d.ABOVE_AVERAGE_CONFIDENCE : .1 > e ? b = d.AVERAGE_CONFIDENCE : 1 > e ? b = d.BELOW_AVERAGE_CONFIDENCE : 10 > e ? b = d.LOW_CONFIDENCE : e >= 10 && (b = d.NO_CONFIDENCE)), b !== d.HIGH_CONFIDENCE && b !== d.ABOVE_AVERAGE_CONFIDENCE && b !== d.AVERAGE_CONFIDENCE && b !== d.BELOW_AVERAGE_CONFIDENCE && b !== d.LOW_CONFIDENCE && b !== d.NO_CONFIDENCE && (b = d.NOT_COMPUTED), b
            }
        };
        d.HIGH_CONFIDENCE = 5, d.ABOVE_AVERAGE_CONFIDENCE = 4, d.AVERAGE_CONFIDENCE = 3, d.BELOW_AVERAGE_CONFIDENCE = 2, d.LOW_CONFIDENCE = 1, d.NO_CONFIDENCE = 0, d.NOT_COMPUTED = -1, b.exports = d
    }, {}],
    22: [function (a, b, c) {
        "use strict";
        var d = a("locationview/ConfidenceCalculator"), e = "location-coordinate-control", f = "location-control-enabled", g = "expandable", h = "location-control-submit", i = "coordinate", j = {
            method: i,
            position: "topleft",
            defaultEnabled: !1,
            iconClass: "location-control-icon",
            helpText: "Enter Coordinates",
            infoText: "<b>Enter coordinates</b>, latitude and longitude."
        }, k = L.Control.extend({
            includes: L.Mixin.Events, initialize: function (a) {
                L.Util.setOptions(this, L.Util.extend({}, j, a))
            }, onAdd: function (a) {
                var b, c, d, f = this.options, i = L.DomEvent.stopPropagation;
                return b = document.createElement("div"), b.classList.add("location-control"), b.classList.add(e), b.innerHTML = ['<a class="', f.iconClass, '"></a>', '<span class="help">', f.helpText, "</span>", '<div class="', g, '">', '<input name="latitude" title="latitude" class="latitude" ', 'placeholder="Latitude" />', '<input name="longitude" title="longitude" class="longitude" ', 'placeholder="Longitude" />', '<button type="search" class="', h, '">Search</button>', "</div>"].join(""), c = b.querySelector("a"), d = b.querySelector("." + g), this._container = b, this._toggle = c, this._control = d, this._latitude = d.querySelector(".latitude"), this._longitude = d.querySelector(".longitude"), this._submit = b.querySelector("." + h), this._map = a, this.options.defaultEnabled && this.enable(), L.DomEvent.addListener(c, "click", this.toggle, this), L.DomEvent.addListener(this._submit, "click", this._onSubmit, this), L.DomEvent.addListener(d, "keypress", this._onKeyPress, this), L.DomEvent.addListener(b, "click", i), L.DomEvent.addListener(b, "dblclick", i), L.DomEvent.addListener(b, "keydown", i), L.DomEvent.addListener(b, "keyup", i), L.DomEvent.addListener(b, "keypress", i), L.DomEvent.addListener(b, "mousedown", i), L.DomEvent.addListener(this._longitude, "touchstart", i), L.DomEvent.addListener(this._latitude, "touchstart", i), b
            }, toggle: function () {
                L.DomUtil.hasClass(this._container, f) ? this.disable() : this.enable()
            }, enable: function () {
                L.DomUtil.addClass(this._container, f), this._latitude.focus(), this.fire("enabled")
            }, disable: function () {
                L.DomUtil.removeClass(this._container, f), this.fire("disabled")
            }, onRemove: function () {
                var a = L.DomEvent.stopPropagation, b = this._container, c = this._toggle, d = this._control;
                L.DomEvent.removeListener(c, "click", this.toggle), L.DomEvent.removeListener(this._submit, "click", this._onSubmit), L.DomEvent.removeListener(d, "keypress", this._onKeyPress), L.DomEvent.removeListener(b, "click", a), L.DomEvent.removeListener(b, "dblclick", a), L.DomEvent.removeListener(b, "keydown", a), L.DomEvent.removeListener(b, "keyup", a), L.DomEvent.removeListener(b, "keypress", a), L.DomEvent.removeListener(b, "mousedown", a), L.DomEvent.removeListener(this._longitude, "touchstart", a), L.DomEvent.removeListener(this._latitude, "touchstart", a), this._map = null, this._control = null, this._toggle = null, this._container = null, this._latitude = null, this._longitude = null, this._submit = null
            }, setLocation: function (a, b) {
                null === a ? (this._latitude.value = "", this._longitude.value = "") : (this._latitude.value = d.roundLocation(a.latitude, a.confidence), this._longitude.value = d.roundLocation(a.longitude, a.confidence)), b && b.silent || this.fire("location", {location: a})
            }, _onSubmit: function () {
                var a = this._latitude.value, b = this._longitude.value, c = this._getCoordinateLocation(a, b);
                this.setLocation(c), this._latitude.blur(), this._longitude.blur()
            }, _getCoordinateLocation: function (a, b) {
                var c = d.computeFromCoordinates(a, b);
                return {place: null, longitude: parseFloat(b), latitude: parseFloat(a), method: i, confidence: c}
            }, _onKeyPress: function (a) {
                13 === a.keyCode && this._onSubmit()
            }
        });
        k.METHOD = i, b.exports = k
    }, {"locationview/ConfidenceCalculator": 21}],
    23: [function (a, b, c) {
        "use strict";
        var d = a("locationview/Geocoder"), e = "location-geocode-control", f = "location-control-enabled", g = "expandable", h = "location-control-submit", i = "geocode", j = {
            method: i,
            position: "topleft",
            defaultLocation: null,
            defaultEnabled: !1,
            iconClass: "location-control-icon",
            helpText: "Search for Address",
            infoText: "<b>Search</b> for a location using an <b>address</b>."
        }, k = L.Control.extend({
            includes: L.Mixin.Events, initialize: function (a) {
                L.Util.setOptions(this, L.Util.extend({}, j, a)), this._geocoder = new d, this._geocodeSuccess = this._geocodeSuccess.bind(this), this._geocodeError = this._geocodeError.bind(this)
            }, setLocation: function (a, b) {
                this._location = a, a && a.hasOwnProperty("place") ? this._address.value = a.place : this._address.value = "", b && b.silent || this.fire("location", {location: a})
            }, getLocation: function () {
                return this._location
            }, onAdd: function (a) {
                var b, c, d, f = this.options, i = L.DomEvent.stopPropagation;
                return b = document.createElement("div"), b.classList.add("location-control"), b.classList.add(e), b.innerHTML = ['<a class="', f.iconClass, '"></a>', '<span class="help">', f.helpText, "</span>", '<div class="', g, '">', '<input name="address" title="address" class="address" ', 'placeholder="Address"/>', '<button type="search" class="', h, '">Search</button>', "</div>"].join(""), d = b.querySelector("a"), c = b.querySelector("." + g), this._container = b, this._toggle = d, this._control = c, this._address = c.querySelector(".address"), this._submit = b.querySelector("." + h), this._map = a, L.DomEvent.addListener(this._address, "keyup", this._onKeyUp, this), L.DomEvent.addListener(this._submit, "click", this._onSearchClick, this), L.DomEvent.addListener(d, "click", this.toggle, this), L.DomEvent.addListener(b, "click", i), L.DomEvent.addListener(b, "dblclick", i), L.DomEvent.addListener(b, "keydown", i), L.DomEvent.addListener(b, "keyup", i), L.DomEvent.addListener(b, "keypress", i), L.DomEvent.addListener(b, "mousedown", i), L.DomEvent.addListener(this._address, "touchstart", i), b
            }, onRemove: function () {
                var a = L.DomEvent.stopPropagation, b = this._container, c = this._toggle;
                L.DomEvent.removeListener(this._address, "keyup", this._onKeyUp), L.DomEvent.removeListener(this._submit, "click", this._onSearchClick), L.DomEvent.removeListener(c, "click", this.toggle), L.DomEvent.removeListener(b, "click", a), L.DomEvent.removeListener(b, "dblclick", a), L.DomEvent.removeListener(b, "keydown", a), L.DomEvent.removeListener(b, "keyup", a), L.DomEvent.removeListener(b, "keypress", a), L.DomEvent.removeListener(b, "mousedown", a), L.DomEvent.removeListener(this._address, "touchstart", a)
            }, _doGeocode: function (a) {
                this._setLoading(!0), this._geocoder.forward(a, this._geocodeSuccess, this._geocodeError)
            }, _onKeyUp: function (a) {
                13 === a.keyCode && "" !== this._address.value && this._doGeocode(this._address.value)
            }, _onSearchClick: function () {
                "" !== this._address.value && this._doGeocode(this._address.value)
            }, toggle: function () {
                L.DomUtil.hasClass(this._container, f) ? this.disable() : this.enable()
            }, enable: function () {
                L.DomUtil.addClass(this._container, f), this._address.focus(), this.fire("enabled")
            }, disable: function () {
                L.DomUtil.removeClass(this._container, f), this.fire("disabled")
            }, _geocodeSuccess: function (a) {
                this._setLoading(!1), this.setLocation(a), this._address.blur()
            }, _geocodeError: function (a, b) {
                this._setLoading(!1), this.fire("locationError", {code: a, message: b})
            }, _setLoading: function (a) {
                a ? (L.DomUtil.addClass(this._container, "loading"), this._address.disabled = !0, this._submit.disabled = !0) : (L.DomUtil.removeClass(this._container, "loading"), this._address.disabled = !1, this._submit.disabled = !1, this._address.focus())
            }
        });
        b.exports = k
    }, {"locationview/Geocoder": 24}],
    24: [function (a, b, c) {
        "use strict";
        var d = a("locationview/ConfidenceCalculator"), e = a("util/Util"), f = 0, g = "geocode", h = {
            forwardUrl: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find",
            reverseRadius: 5e3,
            reverseUrl: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode"
        }, i = function (a) {
            var b, c, i, j, k, l, m, n;
            return b = {}, c = function (a) {
                a = e.extend({}, h, a), i = a.forwardUrl, k = a.reverseUrl, j = a.reverseRadius
            }, l = function (a, b) {
                var c, e, f;
                return c = {
                    method: g,
                    place: null,
                    latitude: null,
                    longitude: null,
                    confidence: null
                }, b.location ? (f = a.address, e = b.location.split(","), c.place = f.Match_addr, c.latitude = a.location.y, c.longitude = a.location.x, c.confidence = d.computeFromCoordinates(e[1], e[0])) : (f = a.locations[0], c.place = b.text || f.name, c.latitude = f.feature.geometry.y, c.longitude = f.feature.geometry.x, c.confidence = d.computeFromGeocode(f)), c
            }, m = function (a) {
                var b;
                return b = [], a.street && b.push(a.street), a.adminArea5 && b.push(a.adminArea5), a.adminArea3 && b.push(a.adminArea3), a.postalCode && b.push(a.postalCode), b.join(", ")
            }, n = function () {
                var a = "geocode_" + (new Date).getTime() + "_" + f;
                return f += 1, a
            }, b.forward = b.geocode = function (a, c, d) {
                var e = {text: a};
                b.submitRequest(e, i, c, d)
            }, b.reverse = b.reverseGeocode = function (a, c, d, e) {
                var f = {location: "" + c + "," + a, distance: j};
                b.submitRequest(f, k, d, e)
            }, b.submitRequest = function (a, b, c, d) {
                var e = document.createElement("script"), f = document.querySelector("script"), g = ["f=pjson"], h = n(), i = null, j = null, k = !1;
                g.push("callback=" + h), g.push("f=pjson");
                for (i in a)g.push(i + "=" + a[i]);
                j = function () {
                    k || (window[h] = null, delete window[h], e.parentNode.removeChild(e), e = null, k = !0)
                }, window[h] = function (b) {
                    var e;
                    b.hasOwnProperty("locations") && 0 !== b.locations.length || b.hasOwnProperty("address") ? (c(l(b, a)), j()) : (e = b.error || {}, d(e.code || 404, e.details && e.details.length ? e.details[0] : e.message || "No location found."))
                }, e.src = b + "?" + g.join("&"), e.onLoad = j, e.onError = j, f.parentNode.insertBefore(e, f)
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"locationview/ConfidenceCalculator": 21, "util/Util": 44}],
    25: [function (a, b, c) {
        "use strict";
        var d = a("locationview/ConfidenceCalculator"), e = "location-geolocation-control", f = "geolocation", g = "location-control-enabled", h = {
            method: f,
            geolocation: navigator.geolocation,
            position: "topleft",
            iconClass: "location-control-icon",
            helpText: "Use Current Location",
            infoText: "Attempt to automatically locate my <b>current location</b>."
        }, i = L.Control.extend({
            includes: L.Mixin.Events, initialize: function (a) {
                L.Util.setOptions(this, L.Util.extend({}, h, a)), this._geolocateSuccess = this._geolocateSuccess.bind(this), this._geolocateError = this._geolocateError.bind(this)
            }, onAdd: function (a) {
                var b, c, d = this.options, f = L.DomEvent.stopPropagation;
                return b = document.createElement("div"), b.classList.add("location-control"), b.classList.add(e), b.innerHTML = ['<a class="', d.iconClass, '"></a>', '<span class="help">', d.helpText, "</span>"].join(""), c = b.querySelector("a"), this._map = a, this._container = b, this._toggle = c, L.DomEvent.addListener(c, "click", this.toggle, this), L.DomEvent.addListener(b, "click", f), L.DomEvent.addListener(b, "dblclick", f), L.DomEvent.addListener(b, "keydown", f), L.DomEvent.addListener(b, "keyup", f), L.DomEvent.addListener(b, "keypress", f), L.DomEvent.addListener(b, "mousedown", f), b
            }, onRemove: function () {
                var a = L.DomEvent.stopPropagation, b = this._container, c = this._toggle;
                L.DomEvent.removeListener(c, "click", this.toggle), L.DomEvent.removeListener(b, "click", a), L.DomEvent.removeListener(b, "dblclick", a), L.DomEvent.removeListener(b, "keydown", a), L.DomEvent.removeListener(b, "keyup", a), L.DomEvent.removeListener(b, "keypress", a), L.DomEvent.removeListener(b, "mousedown", a), this._container = null, this._toggle = null, this._map = null
            }, doGeolocate: function () {
                var a = this.options.geolocation;
                this._container.classList.add(g), a ? a.getCurrentPosition(this._geolocateSuccess, this._geolocateError) : this._geolocateError({
                    code: 0,
                    message: "Geolocation not supported"
                }), this.fire("enabled")
            }, _geolocateSuccess: function (a) {
                this._container.classList.remove(g), this.setLocation({
                    place: null,
                    latitude: a.coords.latitude,
                    longitude: a.coords.longitude,
                    method: f,
                    confidence: d.computeFromGeolocate(a.coords.accuracy)
                })
            }, _geolocateError: function (a) {
                this._container.classList.remove(g), this.fire("locationError", a)
            }, setLocation: function (a, b) {
                b && b.silent || this.fire("location", {location: a})
            }, toggle: function (a) {
                this.enable(), L.DomEvent.stop(a)
            }, enable: function () {
                this.doGeolocate()
            }, disable: function () {
            }
        });
        i.METHOD = f, b.exports = i
    }, {"locationview/ConfidenceCalculator": 21}],
    26: [function (a, b, c) {
        "use strict";
        var d = a("locationview/ConfidenceCalculator"), e = a("locationview/CoordinateControl"), f = a("locationview/GeocodeControl"), g = a("locationview/GeolocationControl"), h = a("locationview/PointControl"), i = "location-location-control", j = i + "-enabled", k = {
            location: null,
            position: "bottomleft",
            el: null,
            iconClass: i + "-icon location-control-icon",
            helpText: "Show Location Options"
        }, l = {
            place: null,
            latitude: 0,
            longitude: 0,
            method: "unspecified",
            confidence: d.NOT_COMPUTED
        }, m = L.Control.extend({
            includes: L.Mixin.Events, initialize: function (a) {
                var b;
                a = L.Util.extend({}, k, a), L.Util.setOptions(this, a), this._el = this.options.el || document.body, this._location = this.options.location, b = [], a.includeGeolocationControl && b.push(a.geolocationControl || new g), a.includeGeocodeControl && b.push(a.geocodeControl || new f), a.includeCoordinateControl && b.push(a.coordinateControl || new e), a.includePointControl && b.push(a.pointControl || new h), this._controls = b
            }, _eachControl: function (a) {
                var b, c, d, e = this._controls;
                for (c = 0, d = e.length; d > c; c++)b = e[c], a(b, c, e)
            }, onAdd: function (a) {
                var b, c, d, e = this.options, f = L.DomEvent.stopPropagation;
                return this._map = a, this._enabled = null, this._eachControl(function (b) {
                    a.addControl(b), b.on("location", this.setLocation, this), b.on("locationError", this._onLocationError, this), b.on("enabled", this._onControlEnabled, this)
                }.bind(this)), this.on("enabled", this._onControlEnabled, this), b = document.createElement("div"), b.classList.add("location-control"), b.classList.add(i), b.innerHTML = ['<a class="', e.iconClass, '">i</a>', '<span class="help">', e.helpText, "</span>"].join(""), c = b.querySelector("a"), this._container = b, this._toggle = c, this._createInformationMenu(), d = this._details, this._el.appendChild(d), L.DomEvent.addListener(c, "click", this.toggle, this), L.DomEvent.addListener(d, "click", f), L.DomEvent.addListener(d, "dblclick", f), L.DomEvent.addListener(d, "keydown", f), L.DomEvent.addListener(d, "keyup", f), L.DomEvent.addListener(d, "keypress", f), L.DomEvent.addListener(d, "mousedown", f), L.DomEvent.addListener(b, "click", f), L.DomEvent.addListener(b, "dblclick", f), L.DomEvent.addListener(b, "keydown", f), L.DomEvent.addListener(b, "keyup", f), L.DomEvent.addListener(b, "keypress", f), L.DomEvent.addListener(b, "mousedown", f), b
            }, onRemove: function (a) {
                var b = L.DomEvent.stopPropagation, c = this._container, d = this._toggle, e = this._details;
                this._eachControl(function (b) {
                    a.removeControl(b), b.off("location", this.setLocation, this), b.off("locationError", this._onLocationError, this), b.off("enabled", this._onControlEnabled, this)
                }.bind(this)), this.off("enabled", this._onControlEnabled, this), L.DomEvent.removeListener(d, "click", this.toggle), L.DomEvent.removeListener(e, "click", b), L.DomEvent.removeListener(e, "dblclick", b), L.DomEvent.removeListener(e, "keydown", b), L.DomEvent.removeListener(e, "keyup", b), L.DomEvent.removeListener(e, "keypress", b), L.DomEvent.removeListener(e, "mousedown", b), L.DomEvent.removeListener(c, "click", b), L.DomEvent.removeListener(c, "dblclick", b), L.DomEvent.removeListener(c, "keydown", b), L.DomEvent.removeListener(c, "keyup", b), L.DomEvent.removeListener(c, "keypress", b), L.DomEvent.removeListener(c, "mousedown", b), this._el.removeChild(e), this._details = null, this._container = null, this._toggle = null, this._map = null
            }, _createInformationMenu: function () {
                var a, b, c = L.DomEvent.stopPropagation;
                a = document.createElement("div"), a.classList.add("information-list-mask"), a.innerHTML = '<ul class="information-list"></ul>', b = a.querySelector(".information-list"), this._eachControl(function (a, c) {
                    var d = a.options, e = a.__infoEl;
                    e || (e = document.createElement("li"), e.setAttribute("data-index", c), e.innerHTML = ['<span title="', d.helpText, '"', ' class="location-control-icon ', d.iconClass, "-", d.method, '"></span>', "<p>", d.infoText, "</p>"].join(""), L.DomEvent.addListener(e, "click", a.enable, a), a.__infoEl = e), b.appendChild(e)
                }), this._details = a, L.DomEvent.on(a, "mousedown", c), L.DomEvent.on(a, "dblclick", c), L.DomEvent.on(a, "wheel", c)
            }, toggle: function () {
                this._el.classList.contains(j) ? this.disable() : this.enable()
            }, enable: function () {
                this._el.classList.add(j), this.fire("enabled")
            }, disable: function () {
                this._el.classList.remove(j), this.fire("disabled")
            }, _onControlEnabled: function (a) {
                var b = null;
                a && (b = a.target), this._eachControl(function (a) {
                    a !== b && a.disable()
                }), b !== this && this.disable()
            }, setLocation: function (a, b) {
                var c, e = a;
                a && "location" === a.type && (e = a.location), null !== e && (e = {
                    place: e.place || l.place,
                    latitude: e.latitude || l.latitude,
                    longitude: e.longitude || l.longitude,
                    confidence: e.confidence || l.confidence,
                    method: e.method || l.method
                }), this._location = e, this._eachControl(function (a) {
                    a.setLocation(e, {silent: !0})
                }), e ? (c = d.computeZoomFromConfidence(e.confidence), c < this._map._zoom && (c = this._map._zoom), this._centerMapOnPoint(e, c)) : this.enable(), b && b.silent || this.fire("location", {location: e})
            }, getLocation: function () {
                return this._location
            }, _centerMapOnPoint: function (a, b) {
                var c = !1, d = this._map._zoom, e = this._map.getBounds(), f = [a.latitude, a.longitude];
                return (!e.contains(f) || b > d) && (c = !0), c && this._map.setView({
                    lon: a.longitude,
                    lat: a.latitude
                }, b), c
            }, _onLocationError: function (a) {
                window.alert(a.message)
            }
        });
        b.exports = m
    }, {
        "locationview/ConfidenceCalculator": 21,
        "locationview/CoordinateControl": 22,
        "locationview/GeocodeControl": 23,
        "locationview/GeolocationControl": 25,
        "locationview/PointControl": 28
    }],
    27: [function (a, b, c) {
        "use strict";
        var d = a("locationview/LocationControl"), e = a("mvc/ModalView"), f = a("util/Util"), g = {
            autoOpen: !1,
            includePointControl: !0,
            includeCoordinateControl: !0,
            includeGeocodeControl: !0,
            includeGeolocationControl: navigator && "geolocation" in navigator,
            callback: function () {
            }
        }, h = function (a) {
            var b = "//server.arcgisonline.com/ArcGIS/rest/services/", c = "/MapServer/tile/{z}/{y}/{x}";
            return b + a + c
        }, i = function (a) {
            var b, c, i, j, k, l, m, n, o, p, q, r, s, t;
            return b = {}, c = function () {
                a = f.extend({}, g, a || {}), i = a.callback, m = a.includePointControl, l = a.includeGeolocationControl, k = a.includeGeocodeControl, j = a.includeCoordinateControl, r(), s(), a.autoOpen && b.show(), a = null
            }, r = function () {
                var a = new L.Control.Layers;
                p = document.createElement("div"), p.classList.add("locationview-map"), o = new L.Map(p, {
                    zoomControl: !f.isMobile(),
                    attributionControl: !1
                }), o.fitBounds([[70, -170], [-50, 170]]), a.addBaseLayer(new L.TileLayer(h("NatGeo_World_Map")).addTo(o), "Topography"), a.addBaseLayer(new L.TileLayer(h("Canvas/World_Light_Gray_Base")), "Grayscale"), a.addBaseLayer(new L.TileLayer(h("World_Imagery")), "Satellite"), n = new d({
                    el: p,
                    includePointControl: m,
                    includeCoordinateControl: j,
                    includeGeocodeControl: k,
                    includeGeolocationControl: l
                }), n.enable(), o.addControl(a), o.addControl(n)
            }, s = function () {
                q = new e(p, {
                    title: "Specify a Location",
                    classes: ["locationview"],
                    buttons: [{
                        text: "Use this Location", classes: ["locationview-button"], callback: function () {
                            i(n.getLocation()), q.hide()
                        }
                    }]
                }), n.on("location", t), t()
            }, t = function (a) {
                var b, c = q.el.querySelector(".locationview-button");
                a && "location" === a.type && (b = a.location), b ? (c.disabled = !1, c.innerHTML = "Use this Location", c.classList.add("locationview-button-enabled"), c.classList.remove("locationview-button-disabled")) : (c.disabled = !0, c.innerHTML = "No Location Selected", c.classList.add("locationview-button-disabled"), c.classList.remove("locationview-button-enabled"))
            }, b.hide = function () {
                q.hide()
            }, b.show = function (a) {
                q.show(), b.updateMap(a)
            }, b.updateMap = function (a) {
                a = a || {}, o.invalidateSize(), a.hasOwnProperty("location") && (n.setLocation(a.location), n.disable()), a.hasOwnProperty("extent") && o.fitBounds(a.extent)
            }, c(), b
        };
        b.exports = i
    }, {"locationview/LocationControl": 26, "mvc/ModalView": 39, "util/Util": 44}],
    28: [function (a, b, c) {
        "use strict";
        var d = a("locationview/ConfidenceCalculator"), e = "location-point-control", f = "location-control-enabled", g = e + "-active", h = "point", i = {
            method: h,
            position: "topleft",
            defaultLocation: null,
            defaultEnabled: !1,
            iconClass: "location-control-icon",
            helpText: "Drop Pin",
            infoText: "<b>Drop pin</b> on the map to specify a location."
        }, j = L.Control.extend({
            includes: L.Mixin.Events, initialize: function (a) {
                a = L.Util.extend({}, i, a), L.Util.setOptions(this, a), this._isEnabled = a.defaultEnabled, this._marker = new L.Marker([0, 0], {draggable: !0}), this._marker.bindPopup(), this.setLocation(a.defaultLocation)
            }, setLocation: function (a, b) {
                var c = this._map, d = this._marker;
                null !== a ? (d.setLatLng(new L.LatLng(a.latitude, a.longitude)), d.setPopupContent(this._formatLocation(a)), c && !d._map && d.addTo(c)) : (d.setPopupContent(""), c && d._map && c.removeLayer(d)), b && b.hasOwnProperty("silent") && b.silent || this.fire("location", {location: a})
            }, getLocation: function () {
                return this._marker._map ? this._createPointLocation(this._marker.getLatLng()) : null
            }, onAdd: function (a) {
                var b, c, d = this.options, f = L.DomEvent.stopPropagation;
                return b = document.createElement("div"), b.classList.add("location-control"), b.classList.add(e), b.innerHTML = ['<a class="', d.iconClass, '"></a>', '<span class="help">', d.helpText, "</span>"].join(""), c = b.querySelector("a"), this._map = a, this._container = b, this._toggle = c, this.options.defaultEnabled && this.enable(), L.DomEvent.addListener(c, "click", this.toggle, this), L.DomEvent.addListener(b, "click", f), L.DomEvent.addListener(b, "dblclick", f), L.DomEvent.addListener(b, "keydown", f), L.DomEvent.addListener(b, "keyup", f), L.DomEvent.addListener(b, "keypress", f), L.DomEvent.addListener(b, "mousedown", f), this._marker.on("dragend", this._onDragEnd, this), b
            }, onRemove: function (a) {
                var b = L.DomEvent.stopPropagation, c = this._container, d = this._toggle;
                this._isEnabled && this.disable(), L.DomEvent.removeListener(d, "click", this.toggle), L.DomEvent.removeListener(c, "click", b), L.DomEvent.removeListener(c, "dblclick", b), L.DomEvent.removeListener(c, "keydown", b), L.DomEvent.removeListener(c, "keyup", b), L.DomEvent.removeListener(c, "keypress", b), L.DomEvent.removeListener(c, "mousedown", b), this._marker.off("dragend", this._onDragEnd, this), a.removeLayer(this._marker), this._map = null, this._container = null, this._toggle = null
            }, _bindMapEventHandlers: function () {
                this._map.on("click", this._onClick, this), this._map.on("boxzoomstart", this._onBoxZoomStart, this)
            }, _unbindMapEventHandlers: function () {
                this._map.off("click", this._onClick, this), this._map.off("boxzoomstart", this._onBoxZoomStart, this)
            }, _onClick: function (a) {
                return this._boxZoomStarted === !0 ? void(this._boxZoomStarted = !1) : void this.setLocation(this._createPointLocation(a.latlng))
            }, _onDragEnd: function () {
                this.setLocation(this._createPointLocation(this._marker.getLatLng()))
            }, _onBoxZoomStart: function () {
                this._boxZoomStarted = !0
            }, _createPointLocation: function (a) {
                return {
                    place: null,
                    latitude: a.lat,
                    longitude: a.lng,
                    method: h,
                    confidence: this._computeConfidence()
                }
            }, _computeConfidence: function () {
                return d.computeFromPoint(this._map.getZoom())
            }, toggle: function (a) {
                this._isEnabled ? this.disable() : this.enable(), L.DomEvent.stop(a)
            }, enable: function () {
                var a = this._map.getContainer();
                L.DomUtil.addClass(this._container, f), L.DomUtil.addClass(a, g), this._bindMapEventHandlers(), this._isEnabled = !0, this._boxZoomStarted = !1, this.fire("enabled")
            }, disable: function () {
                var a = this._map ? this._map.getContainer() : null;
                L.DomUtil.removeClass(this._container, f), L.DomUtil.removeClass(a, g), this._unbindMapEventHandlers(), this._isEnabled = !1, this.fire("disabled")
            }, _formatLocation: function (a) {
                var b = a.latitude, c = a.longitude, e = a.confidence, f = a.place, g = 0 > b ? "&deg;S" : "&deg;N", h = 0 > c ? "&deg;W" : "&deg;E", i = [];
                return b = d.roundLocation(Math.abs(b), e), c = d.roundLocation(Math.abs(c), e), null !== f && i.push("<p>", f, "</p>"), i.push(b, g, ", ", c, h), i.join("")
            }
        });
        b.exports = j
    }, {"locationview/ConfidenceCalculator": 21}],
    29: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = a("mvc/View"), f = {
            label: null,
            multiSelect: !1,
            selectedAnswer: null,
            answers: null
        }, g = 0, h = function (a) {
            var b, c, h, i, j, k, l, m, n;
            return b = e(a), c = function (a) {
                var c = document.createElement("section");
                j = d.extend({}, f, a), h = [], c.classList.add("question"), c.appendChild(l()), b.setAnswers(j.selectedAnswer), b.el.innerHTML = "", b.el.appendChild(c)
            }, k = function (a, b, c) {
                var d = a.label, e = a.otherLabel, f = a.otherValue, h = a.value, i = "answer-" + ++g, k = j.multiSelect ? "checkbox" : "radio", l = document.createElement("li"), m = document.createElement("label"), n = document.createElement("input"), o = document.createTextNode(d);
                if (n.type = k, n.name = b, n.id = i, n.value = h, m.setAttribute("for", i), m.classList.add("answer"), m.appendChild(o), l.appendChild(n), l.appendChild(m), "string" == typeof e) {
                    var p = document.createElement("input");
                    p.type = "text", p.name = b + "-other", p.id = i + "-other", p.value = f, p.classList.add("question-other"), p.placeholder = e, l.appendChild(p)
                }
                c.appendChild(l)
            }, l = function () {
                var b, c, d, e, f = j.answers, l = "question-" + ++g, o = document.createElement("legend"), p = document.createElement("ul"), q = h;
                if (p.classList.add("question-answers"), i = document.createElement("fieldset"), i.name = l, o.textContent = a.label, i.appendChild(o), null !== f) {
                    for (d = 0, e = f.length; e > d; d++)k(f[d], l, p);
                    for (i.appendChild(p), d = 0, e = f.length; e > d; d++)c = f[d], q[c.value] = d;
                    for (b = i.getElementsByTagName("li"), d = 0, e = b.length; e > d; d++) {
                        var r = b[d].getElementsByTagName("input");
                        r[0].addEventListener("change", n), void 0 !== r[1] && r[1].addEventListener("blur", m)
                    }
                }
                return i
            }, m = function (a) {
                var c, d = a.target, e = j.answers, f = i.getElementsByTagName("li"), g = f.length;
                for (c = 0; g > c; c++) {
                    var h = f[c].getElementsByTagName("input");
                    if (h[1] === d) {
                        e[c].otherValue !== d.value && (e[c].otherValue = d.value, b.trigger("change", b));
                        break
                    }
                }
            }, n = function (a) {
                var c, d, e = a.target, f = i.getElementsByTagName("li"), g = f.length;
                for (c = 0; g > c; c++) {
                    var h = f[c].getElementsByTagName("input");
                    void 0 !== h[1] && (d = h[0].checked, h[1].disabled = !d, h[0] === e && d && (h[1].focus(), h[1].setSelectionRange(0, h[1].value.length)))
                }
                b.trigger("change", b)
            }, b.clearAnswers = function () {
                var a, b = i.getElementsByTagName("li"), c = b.length;
                for (a = 0; c > a; a++) {
                    var d = b[a].getElementsByTagName("input");
                    d[0].checked = !1, void 0 !== d[1] && (d[1].disabled = !0)
                }
            }, b.destroy = function () {
                var a, b = i.getElementsByTagName("li"), c = b.length;
                for (i = null, a = 0; c > a; a++) {
                    var d = b[a].getElementsByTagName("input");
                    d[0].removeEventListener("change", n), void 0 !== d[1] && d[1].removeEventListener("blur", m), d = null
                }
                b = null
            }, b.getAnswers = function () {
                var a, b, c = [], d = i.getElementsByTagName("li"), e = d.length;
                for (b = 0; e > b; b++) {
                    var f = d[b].getElementsByTagName("input");
                    f[0].checked && (a = void 0 !== f[1] ? {
                        value: f[0].value,
                        label: d[b].innerText,
                        otherValue: f[1].value,
                        otherLabel: f[1].placeholder
                    } : {value: f[0].value, label: d[b].innerText}, c.push(a))
                }
                return 0 === c.length ? null : j.multiSelect ? c : c[0]
            }, b.selectAnswers = function (a) {
                var b;
                "undefined" != typeof a && (b = a.getElementsByTagName("input"), b[0] && (b[0].checked = !0, void 0 !== b[1] && (b[1].disabled = !1)))
            }, b.setAnswers = function (a) {
                var c, d, e, f;
                if (null !== i) {
                    if (c = i.getElementsByTagName("li"), b.clearAnswers(), null === a)return;
                    if ("string" == typeof a)d = c[h[a]], b.selectAnswers(d); else for (e = 0, f = a.length; f > e; e++)d = c[h[a[e]]], b.selectAnswers(d)
                }
            }, c(a), a = null, b
        };
        b.exports = h
    }, {"mvc/View": 42, "util/Util": 44}],
    30: [function (a, b, c) {
        "use strict";
        var d = a("mvc/View"), e = a("util/Util"), f = a("util/Xhr"), g = {
            el: null,
            imageUrl: null,
            imageAlt: "",
            mapUrl: null,
            mapName: null,
            svgUrl: null,
            width: null,
            height: null,
            areas: null
        }, h = function (a, b) {
            var c, d, e, f, g = [], h = "map", i = document.createElement("div");
            if (i.innerHTML = a, b && (h += "[name='" + b + "']"), c = i.querySelector(h)) {
                for (d = c.querySelectorAll("area"), e = 0, f = d.length; f > e; e++)c = d[e], g.push({
                    shape: c.getAttribute("shape"),
                    coords: c.getAttribute("coords").split(","),
                    title: c.getAttribute("title"),
                    href: c.getAttribute("href")
                });
                d = null
            }
            return i = null, g
        }, i = function (a) {
            var b = [], c = a.shape, d = a.coords, e = a.title, f = a.href;
            if (f = null === f ? "" : ' xlink:href="' + f + '"', e = null === e ? "" : "<title>" + e + "</title>", "circle" === c)b.push("<circle", ' cx="', d[0], '"', ' cy="', d[1], '"', ' r="', d[2], '"', f, ">", e, "</circle>"); else if ("rect" === c)b.push("<rect", ' x="', d[0], '"', ' y="', d[1], '"', ' width="', d[2] - d[0], '"', ' height="', d[3] - d[1], '"', f, ">", e, "</rect>"); else if ("poly" === c) {
                for (var g = [], h = 0, i = d.length; i > h; h += 2)g.push(0 === h ? "M" : "L", d[h], ",", d[h + 1]);
                g.push("Z"), b.push("<path", ' d="', g.join(""), '"', f, ">", e, "</path>")
            }
            return b.join("")
        }, j = function (a) {
            var b, c, j, k, l, m, n, o, p, q, r, s, t, u;
            return b = Object.create(d(a)), c = function () {
                var c, d;
                a = e.extend({}, g, a), j = a.areas || [], k = a.className, m = a.height, n = a.imageAlt, o = a.imageUrl, p = a.mapName, q = a.mapUrl, r = a.svgUrl, s = a.width, l = b.el, l.classList.add("svgimagemap"), k && l.classList.add(k), d = function () {
                    b.setSize(c.naturalWidth, c.naturalHeight), c.removeEventListener("load", d), d = null
                }, c = new Image, c.addEventListener("load", d), c.setAttribute("alt", n), c.src = o, l.appendChild(c), r ? f.ajax({
                    url: r,
                    success: function (a) {
                        b.setSvg(a)
                    }
                }) : q && f.ajax({
                    url: q, success: function (a) {
                        b.setAreas(h(a, p))
                    }
                }), a = null
            }, t = b.destroy, b.destroy = function () {
                j = null, k = null, l = null, m = null, q = null, p = null, r = null, s = null, "function" == typeof t && t()
            }, b.getAreas = function () {
                return j
            }, b.setAreas = function (a) {
                j = a, b.render()
            }, b.setSize = function (a, c) {
                s = a, m = c, l && a && c && (l.setAttribute("width", a), l.setAttribute("height", c)), b.render()
            }, b.render = function () {
                var a, b, c;
                if (s && m && j && 0 !== j.length) {
                    for (a = [], a.push("<svg", ' xmlns="http://www.w3.org/2000/svg"', ' xmlns:xlink="http://www.w3.org/1999/xlink"', ' width="', s, '"', ' height="', m, '"', ' viewBox="0,0,', s, ",", m, '"', ' preserveAspectRatio="xMinYMin"', ">"), c = j.length, b = 0; c > b; b++)a.push(i(j[b]));
                    a.push("</svg>"), u(a.join(""))
                }
            }, u = function (a) {
                var b, c;
                l && (b = l.querySelector("svg"), b && l.removeChild(b), "string" == typeof a && (c = document.createElement("div"), c.innerHTML = a, a = c.children[0], c = null), a && l.appendChild(a))
            }, c(), b
        };
        j.getPath = i, j.parseMap = h, b.exports = j
    }, {"mvc/View": 42, "util/Util": 44, "util/Xhr": 45}],
    31: [function (a, b, c) {
        "use strict";
        var d = 0, e = function (a) {
            return a.title
        }, f = function (a) {
            return "function" == typeof a.content ? a.content(a) : a.content
        }, g = function (a) {
            var b, c, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
            return b = Object.create({}), c = function () {
                if (b.el = a.el || document.createElement("section"), b.el.classList.add("tablist"), a.header && (j = b.el.appendChild(document.createElement("header")), j.innerHTML = a.header), h = document.createElement("div"), h.className = "tablist-container", l = document.createElement("nav"), l.setAttribute("role", "tablist"), l.classList.add("smooth"), m = 0, n = 0, g = document.createElement("div"), g.className = "tablist-backward-button", g.innerHTML = '<div class="material-icons">chevron_left</div>', k = document.createElement("div"), k.className = "tablist-forward-button", k.innerHTML = '<div class="material-icons">chevron_right</div>', h.appendChild(l), b.el.appendChild(g), b.el.appendChild(h), b.el.appendChild(k), g.addEventListener("click", b.selectPreviousTab), k.addEventListener("click", b.selectNextTab), l.addEventListener("mousedown", x), l.addEventListener("touchstart", x), l.addEventListener("keydown", y), l.addEventListener("keyup", y), r = [], a.tabs) {
                    for (var c = 0, d = a.tabs.length; d > c; c++)b.addTab(a.tabs[c], !0);
                    u()
                }
            }, y = function (a) {
                var c = a.keyCode;
                return "keydown" === a.type ? void((38 === c || 40 === c) && a.preventDefault()) : void(37 === c || 38 === c ? b.selectPreviousTab() : (39 === c || 40 === c) && b.selectNextTab())
            }, x = function (a) {
                l.classList.remove("smooth"), "mousedown" === a.type ? (p = a.clientX, document.addEventListener("mousemove", w), document.addEventListener("mouseup", v)) : "touchstart" === a.type && (a.preventDefault(), p = a.touches[0].clientX, document.addEventListener("touchmove", w), document.addEventListener("touchend", v), document.addEventListener("touchcancel", v))
            }, v = function (a) {
                "mouseup" === a.type ? (document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", v)) : ("touchend" === a.type || "touchcancel" === a.type) && (document.removeEventListener("touchmove", w), document.removeEventListener("touchend", v), document.removeEventListener("touchcancel", v)), t(m + n), n = 0, l.classList.add("smooth")
            }, s = function () {
                var a, b = o.tabEl;
                a = -1 * b.offsetLeft, a += l.clientWidth / 2, a -= b.clientWidth / 2, a = Math.round(a), t(a)
            }, t = function (a) {
                var b = 0, c = l.clientWidth - l.scrollWidth;
                c > a ? a = c : a > b && (a = b), A(a), m = a
            }, w = function (a) {
                var b, c, d;
                d = a.type, "mousemove" === d ? b = a.clientX : "touchmove" === d && (b = a.touches[0].clientX), c = b - p, n = c, A(m + c), Math.abs(c) >= 5 && (q = !0)
            }, A = function (a) {
                l.style["-webkit-transform"] = "translate3d(" + a + "px, 0px, 0px)", l.style["-moz-transform"] = "translate3d(" + a + "px, 0px, 0px)", l.style["-ms-transform"] = "translate3d(" + a + "px, 0px, 0px)", l.style["-o-transform"] = "translate3d(" + a + "px, 0px, 0px)", l.style.transform = "translate3d(" + a + "px, 0px, 0px)"
            }, B = function () {
                var a = b.el.querySelector(".tab-position-indicator"), c = r.indexOf(o) + 1, d = r.length;
                a || (a = document.createElement("span"), b.el.appendChild(a)), a.className = "tab-position-indicator", a.innerHTML = c + " of " + d, window.setTimeout(function () {
                    a.classList.add("fade")
                }, 500)
            }, C = function () {
                for (var a, b = 0; b < r.length; b++)a = r[b].tabEl, -1 !== a.getAttribute("tabindex") && (a.setAttribute("tabindex", -1), a.setAttribute("aria-hidden", !0));
                o.tabEl.setAttribute("tabindex", 0), o.tabEl.setAttribute("aria-hidden", !1)
            }, z = function (a) {
                for (var b = o, c = 0, d = r.length; d > c; c++) {
                    var e = r[c], g = e.options, h = e.tabEl, i = e.panelEl;
                    if (e === a) {
                        if (!e.contentReady) {
                            var j = f(g);
                            "string" == typeof j ? e.panelEl.innerHTML = j : e.panelEl.appendChild(j), e.contentReady = !0
                        }
                        h.classList.add("tablist-tab-selected"), i.classList.add("tablist-panel-selected"), "function" == typeof g.onSelect && g.onSelect(), o = e, C(), s(), e.tabEl.focus(), B()
                    } else h.classList.remove("tablist-tab-selected"), i.classList.remove("tablist-panel-selected"), e === b && "function" == typeof g.onDeselect && g.onDeselect()
                }
            }, u = function () {
                var a, c = b.el.querySelector(".tablist-panel-selected");
                null === c && (a = r, a.length > 0 && a[0].select())
            }, b.addTab = function (a, c) {
                var f = ++d, g = "tablist-tab-" + f, h = "tablist-panel-" + f, i = document.createElement("section");
                i.id = g, i.className = "tablist-tab", i.setAttribute("role", "tab"), i.setAttribute("tabindex", -1), i.setAttribute("aria-controls", h);
                var j = e(a);
                "string" == typeof j ? i.innerHTML = j : i.appendChild(j);
                var k = document.createElement("section");
                k.id = h, k.className = "tablist-panel", k.setAttribute("role", "tabpanel"), k.setAttribute("aria-labelledby", g);
                var m = {
                    options: a, tabEl: i, panelEl: k, select: function () {
                        return q === !0 ? q = !1 : z(m), !1
                    }, touchend: function () {
                        return l.classList.add("smooth"), m.select(), !1
                    }, contentReady: !1
                };
                return r.push(m), i.addEventListener("click", m.select), i.addEventListener("touchend", m.touchend), a.selected === !0 ? m.select() : c !== !0 && u(), l.appendChild(i), b.el.appendChild(k), m
            }, b.destroy = function () {
                var a;
                if (l.removeEventListener("mousedown", x), l.removeEventListener("touchstart", x), l.removeEventListener("keyup", y), g.removeEventListener("click", b.selectPreviousTab), k.removeEventListener("click", b.selectNextTab), r)for (var c = 0; c < r.length; c++)a = r[c], "function" == typeof a.options.onDestroy && a.options.onDestroy(), a.tabEl.removeEventListener("click", a.select), a.tabEl.removeEventListener("touchend", a.touchend);
                w = null, x = null, v = null, y = null, b.el = null, j = null, h = null, l = null, k = null, g = null, m = null, n = null, p = null, i = null, o = null, r = null
            }, b.selectNextTab = function () {
                var a = 1, b = r.indexOf(o) + a, c = r.length - 1, d = 0;
                b > c && (b = d), r[b].select()
            }, b.selectPreviousTab = function () {
                var a = -1, b = r.indexOf(o) + a, c = r.length - 1, d = 0;
                d > b ? (b = c, l.classList.remove("smooth"), r[b].select(), l.classList.add("smooth")) : r[b].select()
            }, c(), b
        }, h = function (a) {
            var b, c, d, e, f, h = [];
            for (b = a.querySelectorAll(".panel"), d = 0, e = b.length; e > d; d++)c = b[d], h.push({
                title: c.getAttribute("data-title") || c.querySelector("header").innerHTML,
                content: c,
                selected: "true" === c.getAttribute("data-selected")
            });
            f = g({tabs: h}), a.parentNode.replaceChild(f.el, a)
        }, i = function () {
            var a, b;
            for (a = document.querySelectorAll(".tablist"), b = a.length - 1; b >= 0; b--)g.tabbifyOne(a[b])
        };
        g.tabbifyAll = i, g.tabbifyOne = h, b.exports = g
    }, {}],
    32: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h, i, j, k, l, m, n, o = a("./Vector");
        d = function (a, b, c, d) {
            var e, f = [];
            if (0 > d || d >= c)throw new Error("column " + d + " out of range [0," + c + ")");
            if (1 === c)return a;
            for (f = [], e = 0; b > e; e++)f.push(a[h(b, c, e, d)]);
            return f
        }, e = function (a, b, c) {
            var d, e = Math.min(b, c), f = [];
            for (d = 0; e > d; d++)f.push(a[h(b, c, d, d)]);
            return f
        }, f = function (a, b, c, d, e) {
            return a[h(b, c, d, e)]
        }, g = function (a) {
            var b, c, d = [];
            for (b = 0; a > b; b++)for (c = 0; a > c; c++)d.push(b === c ? 1 : 0);
            return d
        }, h = function (a, b, c, d) {
            return b * c + d
        }, i = function (a, b, c, f) {
            var h, i, j, k, l, m, n, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J;
            if (b !== c)throw new Error("Jacobi only works on symmetric, square matrices");
            f = f || 100, h = a.slice(0), u = e(a, b, c), F = g(c), D = 0;
            do for (t = !1, y = 0; c > y; y++)for (B = y + 1; c > B; B++)if (l = u[y], q = u[B], n = h[c * y + B], z = .5 * Math.atan2(2 * n, q - l), s = Math.cos(z), E = Math.sin(z), m = s * s * l - 2 * E * s * n + E * E * q, r = E * E * l + 2 * E * s * n + s * s * q, m !== l || r !== q) {
                for (t = !0, D++, u[y] = m, u[B] = r, h[c * y + B] = 0, v = 0; y > v; v++)w = c * v + y, x = c * v + B, i = h[w], j = h[x], h[w] = s * i - E * j, h[x] = s * j + E * i;
                for (v = y + 1; B > v; v++)A = c * y + v, x = c * v + B, k = h[A], j = h[x], h[A] = s * k - E * j, h[x] = s * j + E * k;
                for (v = B + 1; c > v; v++)A = c * y + v, C = c * B + v, k = h[A], p = h[C], h[A] = s * k - E * p, h[C] = s * p + E * k;
                for (v = 0; c > v; v++)w = c * v + y, x = c * v + B, I = F[w], J = F[x], F[w] = s * I - E * J, F[x] = s * J + E * I
            } while (t && f > D);
            if (t)throw new Error("failed to converge");
            for (H = [], v = 0; c > v; v++)G = o(d(F, b, c, v)), G.eigenvalue = u[v], H.push(G);
            return H
        }, j = function (a, b, c, e, f, g) {
            var h, i, j, l, m;
            if (c !== f)throw new Error("wrong combination of rows and cols");
            for (m = [], j = 0; b > j; j++)for (l = k(a, b, c, j), h = 0; g > h; h++)i = d(e, f, g, h), m.push(o.dot(l, i));
            return m
        }, k = function (a, b, c, d) {
            var e, f;
            if (0 > d || d >= b)throw new Error("row " + d + " out of range [0," + b + ")");
            for (f = [], e = 0; c > e; e++)f.push(a[h(b, c, d, e)]);
            return f
        }, l = function (a, b, c, d, e, f) {
            a[h(b, c, d, e)] = f
        }, m = function (a, b, c) {
            var d, e, f = b - 1, g = c - 1, h = [];
            for (h.push("["), d = 0; b > d; d++) {
                for (e = 0; c > e; e++)h.push(a[c * d + e], e !== g || d !== f ? ", " : "");
                d !== f && h.push("\n ")
            }
            return h.push("]"), h.join("")
        }, n = function (a, b, c) {
            var d, e, f = [];
            for (e = 0; c > e; e++)for (d = 0; b > d; d++)f.push(a[h(b, c, d, e)]);
            return f
        };
        var p = function (a, b, c) {
            var g, h, q, r, s;
            return g = {}, h = function (a, b, c) {
                if (q = a, r = b, s = c, !b || !c)if (b || c) {
                    if (b) {
                        if (!c && (s = a.length / b, s !== parseInt(s, 10)))throw new Error("wrong number of data elements")
                    } else if (r = a.length / c, r !== parseInt(r, 10))throw new Error("wrong number of data elements")
                } else {
                    var d = Math.sqrt(a.length);
                    if (d !== parseInt(d, 10))throw new Error("matrix m,n unspecified, and matrix not square");
                    r = d, s = d
                }
            }, g.add = function (a) {
                if (r !== a.m() || c !== a.n())throw new Error("matrices must be same size");
                return p(o.add(q, a.data()), r, s)
            }, g.col = function (a) {
                return d(q, r, s, a)
            }, g.data = function () {
                return q
            }, g.diagonal = function () {
                return e(q, r, s)
            }, g.get = function (a, b) {
                return f(q, r, s, a, b)
            }, g.jacobi = function (a) {
                return i(q, r, s, a)
            }, g.m = function () {
                return r
            }, g.multiply = function (a) {
                return p(j(q, r, s, a.data(), a.m(), a.n()), r, a.n())
            }, g.n = function () {
                return s
            }, g.negative = function () {
                return p(o.multiply(q, -1), r, s)
            }, g.row = function (a) {
                return k(q, r, s, a)
            }, g.set = function (a, b, c) {
                l(q, r, s, a, b, c)
            }, g.subtract = function (a) {
                if (r !== a.m() || c !== a.n())throw new Error("matrices must be same size");
                return p(o.subtract(q, a.data()), r, s)
            }, g.toString = function () {
                return m(q, r, s)
            }, g.transpose = function () {
                return p(n(q, r, s), s, r)
            }, h(a, b, c), a = null, g
        };
        p.col = d, p.diagonal = e, p.get = f, p.identity = g, p.index = h, p.jacobi = i, p.multiply = j, p.row = k, p.set = l, p.stringify = m, p.transpose = n, b.exports = p
    }, {"./Vector": 33}],
    33: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
        d = function (a, b) {
            var c, d;
            if (a.length !== b.length)throw new Error("vectors must be same length");
            for (d = [], c = 0; c < a.length; c++)d.push(a[c] + b[c]);
            return d
        }, e = function (a, b) {
            return Math.acos(h(a, b) / (j(a) * j(b)))
        }, f = function (a) {
            if (a.length < 2)throw new Error("azimuth requires at least 2 dimensions");
            return 0 === a[0] && 0 === a[1] ? 0 : Math.PI / 2 - Math.atan2(a[1], a[0])
        }, g = function (a, b) {
            if (a.length !== b.length || a.length < 3)throw new Error("cross product requires at least 3 dimensions");
            return [a[1] * b[2] - b[1] * a[2], a[2] * b[0] - b[2] * a[0], a[0] * b[1] - b[0] * a[1]]
        }, h = function (a, b) {
            var c, d;
            for (d = 0, c = 0; c < a.length; c++)d += a[c] * b[c];
            return d
        }, i = function (a, b) {
            var c;
            if (a.length !== b.length)return !1;
            for (c = 0; c < a.length; c++)if (a[c] !== b[c])return !1;
            return !0
        }, j = function (a) {
            var b, c;
            for (c = 0, b = 0; b < a.length; b++)c += a[b] * a[b];
            return Math.sqrt(c)
        }, k = function (a, b) {
            var c, d;
            for (d = [], c = 0; c < a.length; c++)d.push(a[c] * b);
            return d
        }, l = function (a) {
            if (a.length < 3)throw new Error("__azimuth: vector must have at least 3 dimensions");
            return Math.asin(a[2] / j(a))
        }, n = function (a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J;
            return d = d || [0, 0, 0], e = d[0], i = d[1], m = d[2], s = b[0], x = b[1], C = b[2], H = a[0], I = a[1], J = a[2], q = Math.cos(c), r = Math.sin(c), f = e * s, g = e * x, h = e * C, j = i * s, k = i * x, l = i * C, n = m * s, o = m * x, p = m * C, t = s * s, u = s * H, v = s * I, w = s * J, y = x * x, z = x * H, A = x * I, B = x * J, D = C * C, E = C * H, F = C * I, G = C * J, [(e * (y + D) - s * (k + p - u - A - G)) * (1 - q) + H * q + (-o + l - F + B) * r, (i * (t + D) - x * (f + p - u - A - G)) * (1 - q) + I * q + (n - h + E - w) * r, (m * (t + y) - C * (f + k - u - A - G)) * (1 - q) + J * q + (-j + g - z + v) * r]
        }, o = function (a, b) {
            var c, d;
            if (a.length !== b.length)throw new Error("__subtract: vectors must be same length");
            for (d = [], c = 0; c < a.length; c++)d.push(a[c] - b[c]);
            return d
        }, m = function (a) {
            var b = j(a);
            if (0 === b)throw new Error("__unit: cannot convert zero vector to unit vector");
            return k(a, 1 / b)
        }, p = function (a, b) {
            return "number" == typeof b && (a[0] = b), a[0]
        }, q = function (a, b) {
            return "number" == typeof b && (a[1] = b), a[1]
        }, r = function (a, b) {
            return "number" == typeof b && (a[2] = b), a[2]
        };
        var s = function (a) {
            var b, c, t;
            return a && "function" == typeof a.data && (a = a.data().slice(0)), b = {_isa_vector: !0}, c = function (a) {
                t = a
            }, b.add = function (a) {
                return a = a._isa_vector ? a.data() : a, s(d(t, a))
            }, b.angle = function (a) {
                return a = a._isa_vector ? a.data() : a, e(t, a)
            }, b.azimuth = function () {
                return f(t)
            }, b.cross = function (a) {
                return a = a._isa_vector ? a.data() : a, s(g(t, a))
            }, b.data = function () {
                return t
            }, b.dot = function (a) {
                return a = a._isa_vector ? a.data() : a, h(t, a)
            }, b.equals = function (a) {
                return a = a._isa_vector ? a.data() : a, i(t, a)
            }, b.magnitude = function () {
                return j(t)
            }, b.multiply = function (a) {
                return s(k(t, a))
            }, b.negative = function () {
                return b.multiply(-1)
            }, b.plunge = function () {
                return l(t)
            }, b.rotate = function (a, b, c) {
                return a = a._isa_vector ? a.data() : a, c = c && c._isa_vector ? c.data() : c, s(n(t, a, b, c))
            }, b.subtract = function (a) {
                return a = a._isa_vector ? a.data() : a, s(o(t, a))
            }, b.toString = function () {
                return "" + t
            }, b.unit = function () {
                return s(m(t))
            }, b.x = function (a) {
                return p(t, a)
            }, b.y = function (a) {
                return q(t, a)
            }, b.z = function (a) {
                return r(t, a)
            }, c(a), a = null, b
        };
        s.add = d, s.angle = e, s.azimuth = f, s.cross = g, s.dot = h, s.magnitude = j, s.multiply = k, s.plunge = l, s.rotate = n, s.subtract = o, s.unit = m, s.x = p, s.y = q, s.z = r, b.exports = s
    }, {}],
    34: [function (a, b, c) {
        "use strict";
        var d = a("../util/Events"), e = a("../util/Util"), f = function (a) {
            var b, c, f, g, h, i;
            return b = d(), c = function () {
                f = a || [], g = null, h = null, a = null
            }, i = function (a) {
                return a && a.silent === !0
            }, b.add = function () {
                b.addAll(Array.prototype.slice.call(arguments, 0))
            }, b.addAll = function (a, c) {
                f.push.apply(f, a), g = null, i(c) || b.trigger("add", a)
            }, b.data = function () {
                return f
            }, b.deselect = function (a) {
                if (null !== h) {
                    var c = h;
                    h = null, i(a) || b.trigger("deselect", c)
                }
            }, b.destroy = e.compose(function (a) {
                return f = null, g = null, h = null, i(a) || b.trigger("destroy"), a
            }, b.destroy), b.get = function (a) {
                var c = b.getIds();
                return c.hasOwnProperty(a) ? f[c[a]] : null
            }, b.getIds = function (a) {
                var b, c = 0, d = f.length;
                if (a || null === g)for (g = {}; d > c; c++) {
                    if (b = f[c].id, g.hasOwnProperty(b))throw'model with duplicate id "' + b + '" found in collection';
                    g[b] = c
                }
                return g
            }, b.getSelected = function () {
                return h
            }, b.remove = function () {
                b.removeAll(Array.prototype.slice.call(arguments, 0))
            }, b.removeAll = function (a, c) {
                var d, e, j = a.length, k = [], l = b.getIds();
                for (d = 0; j > d; d++) {
                    if (e = a[d], e === h && b.deselect(), !l.hasOwnProperty(e.id))throw"removing object not in collection";
                    k.push(l[e.id])
                }
                for (k.sort(function (a, b) {
                    return a - b
                }), d = k.length - 1; d >= 0; d--)f.splice(k[d], 1);
                g = null, i(c) || b.trigger("remove", a)
            }, b.reset = function (a, c) {
                var d = null;
                if (null !== h && (d = h.id), f = null, g = null, h = null, f = a || [], c && c.silent === !0 || b.trigger("reset", a), null !== d) {
                    var i = b.get(d);
                    null !== i && (c = e.extend({}, c, {reset: !0}), b.select(i, c))
                }
            }, b.select = function (a, c) {
                if (null === a)return void b.deselect();
                if (a !== h) {
                    if (null !== h && b.deselect(c), a !== b.get(a.id))throw"selecting object not in collection";
                    h = a, c && c.silent === !0 || b.trigger("select", h, c)
                }
            }, b.selectById = function (a, c) {
                var d = b.get(a);
                null !== d ? b.select(d, c) : b.deselect(c)
            }, b.sort = function (a, c) {
                f.sort(a), b.reset(f, c)
            }, b.toJSON = function () {
                var a, b, c, d = f.slice(0);
                for (b = 0, c = d.length; c > b; b++)a = d[b], "object" == typeof a && null !== a && "function" == typeof a.toJSON && (d[b] = a.toJSON());
                return d
            }, c(), b
        };
        b.exports = f
    }, {"../util/Events": 43, "../util/Util": 44}],
    35: [function (a, b, c) {
        "use strict";
        var d = a("../util/Util"), e = a("./View"), f = {
            className: "collection-selectbox",
            includeBlankOption: !1,
            blankOption: {text: "Please select&hellip;", value: "-1"},
            format: function (a) {
                return a.id
            },
            renderNow: !0
        }, g = function (a) {
            var b, c, g, h, i, j, k, l, m, n, o, p;
            return a = d.extend({}, f, a), b = e(a), c = function (a) {
                var c;
                c = b.el,
                    g = a.blankOption, h = a.collection, i = a.format, j = a.getValidOptions || n, k = a.includeBlankOption, l = "SELECT" === c.nodeName ? c : c.appendChild(document.createElement("select")), l.classList.add(a.className), h.on("add", b.render), h.on("remove", b.render), h.on("reset", b.render), h.on("select", p), h.on("deselect", p), l.addEventListener("change", o), a.renderNow && b.render()
            }, m = function () {
                return ["<option ", 'value="', g.value, '">', g.text, "</option>"].join("")
            }, n = function () {
                return h.data().map(function (a) {
                    return a.id
                })
            }, o = function () {
                var a;
                a = l.value, k && a === g.value ? h.deselect() : h.selectById(a)
            }, p = function () {
                var a, b;
                a = h.getSelected(), b = j(), a ? -1 === b.indexOf(a.id) ? h.deselect() : l.value = a.id : k && (l.value = g.value)
            }, b.destroy = d.compose(function () {
                h.off("add", b.render), h.off("remove", b.render), h.off("reset", b.render), h.off("select", p), h.off("deselect", p), l.removeEventListener("change", o), g = null, h = null, i = null, j = null, k = null, l = null, m = null, n = null, o = null, p = null, c = null, b = null
            }, b.destroy), b.render = function () {
                var a, b, c, d, e, f, g;
                for (a = h.data(), e = [], f = h.getSelected(), k === !0 && e.push(m()), g = j(), b = 0, d = a.length; d > b; b++)c = a[b].id, e.push('<option value="' + c + '"' + (f === a[b] ? ' selected="selected"' : "") + (-1 === g.indexOf(c) ? ' disabled="disabled"' : "") + ">" + i(a[b]) + "</option>");
                l.innerHTML = e.join(""), p()
            }, c(a), a = null, b
        };
        b.exports = g
    }, {"../util/Util": 44, "./View": 42}],
    36: [function (a, b, c) {
        "use strict";
        var d = a("../util/Util"), e = a("./View"), f = {
            className: "collection-table",
            clickToSelect: !1,
            columns: [],
            emptyMarkup: "No data to display",
            renderNow: !0
        }, g = function (a) {
            var b, c, g, h, i, j, k, l, m;
            return a = d.extend({}, f, a), b = e(a), c = function () {
                g = a.className, h = a.clickToSelect, i = a.collection, j = a.columns, k = a.emptyMarkup, i.on("add", b.render), i.on("remove", b.render), i.on("reset", b.render), i.on("select", m), i.on("deselect", m), h && b.el.addEventListener("click", l), a.renderNow && b.render()
            }, l = function (a) {
                var c = a.target, e = d.getParentNode(c, "TR", b.el);
                null !== e && "TBODY" === e.parentNode.nodeName.toUpperCase() && i.selectById(e.getAttribute("data-id"))
            }, m = function () {
                var a, c = b.el;
                a = c.querySelector(".selected"), a && a.classList.remove("selected"), a = i.getSelected(), a && (a = c.querySelector('[data-id="' + a.id + '"]'), a.classList.add("selected"))
            }, b.destroy = d.compose(function () {
                i.off("add", b.render), i.off("remove", b.render), i.off("reset", b.render), i.off("select", m), i.off("deselect", m), i = null, h && b.el.removeEventListener("click", l), h = null
            }, b.destroy), b.render = function () {
                var a, c, d, e, f, h, l, m, n;
                if (e = i.data(), n = [], 0 === e.length)return void(b.el.innerHTML = k);
                for (n.push('<table class="', g, '"><thead>'), a = 0, c = j.length; c > a; a++)d = j[a], n.push('<th class="' + d.className + '">' + d.title + "</th>");
                for (n.push("</thead><tbody>"), f = 0, l = e.length; l > f; f++) {
                    for (m = e[f], h = ("" + m.id).replace(/"/g, "&quot;"), n.push('<tr data-id="' + h + '">'), a = 0, c = j.length; c > a; a++)d = j[a], n.push("<" + (d.header ? 'th scope="row"' : "td") + ' class="' + d.className + '">' + d.format(m) + "</td>");
                    n.push("</tr>")
                }
                n.push("</tbody></table>"), b.el.innerHTML = n.join("")
            }, c(), b
        };
        b.exports = g
    }, {"../util/Util": 44, "./View": 42}],
    37: [function (a, b, c) {
        "use strict";
        var d = a("./CollectionTable"), e = a("./DownloadView"), f = a("./SortView"), g = a("../util/Util"), h = a("./View"), i = function (a) {
            var b, c, i, j, k, l, m, n, o, p;
            return b = h(a), c = function () {
                var c, h;
                c = b.el, c.innerHTML = '<div class="datatable-tools"></div><div class="datatable-data"></div>', c.classList.add("datatable"), h = c.querySelector(".datatable-tools"), i = a.collection, k = a.columns, n = a.sorts, n && (o = new f({
                    collection: i,
                    sorts: n,
                    defaultSort: a.defaultSort
                }), h.appendChild(o.el)), j = new d(g.extend({}, a, {el: c.querySelector(".datatable-data")})), m = new e({
                    collection: i,
                    help: a.help || "Copy then paste into a spreadsheet application",
                    format: a.formatDownload || p
                }), l = document.createElement("button"), l.innerHTML = "Download", l.className = "download", l.addEventListener("click", m.show), h.appendChild(l), a = null
            }, p = function (a) {
                var b, c, d, e, f, g, h, i, j, l;
                for (d = [], f = a.data(), l = [], b = 0, c = k.length; c > b; b++)e = k[b], l.push(e.downloadTitle || e.title);
                for (d.push(l.join("	")), h = 0, i = f.length; i > h; h++) {
                    for (j = f[h], l = [], b = 0, c = k.length; c > b; b++)e = k[b], g = e.downloadFormat || e.format, l.push(g(j));
                    d.push(l.join("	"))
                }
                return d.join("\n")
            }, b.destroy = g.compose(function () {
                o && (o.destroy(), o = null), l.removeEventListener("click", m.show), l = null, m.destroy(), m = null, j.destroy(), j = null
            }, b.destroy), c(), b
        };
        b.exports = i
    }, {"../util/Util": 44, "./CollectionTable": 36, "./DownloadView": 38, "./SortView": 41, "./View": 42}],
    38: [function (a, b, c) {
        "use strict";
        var d = a("./ModalView"), e = a("../util/Util"), f = a("./View"), g = {
            title: "Download",
            help: "",
            format: function (a) {
                return JSON.stringify(a)
            }
        }, h = function (a) {
            var b, c, h, i, j, k, l;
            return a = e.extend({}, g, a), b = f(a), c = function () {
                var c = b.el;
                h = a.collection, i = a.format, l = a.title, c.className = "download-view", c.innerHTML = '<div class="help">' + a.help + '</div><textarea class="download" readonly="readonly"></textarea>', k = c.querySelector(".download"), a = null
            }, b.destroy = e.compose(function () {
                j && (j.destroy(), j = null), h = null, i = null, k = null
            }, b.destroy), b.render = function () {
                k.value = i(h)
            }, b.show = function () {
                j || (j = new d(b.el, {title: l})), b.render(), j.show(), k.select()
            }, c(), b
        };
        b.exports = h
    }, {"../util/Util": 44, "./ModalView": 39, "./View": 42}],
    39: [function (a, b, c) {
        "use strict";
        var d = a("../util/Util"), e = a("./View"), f = !1, g = null, h = null, i = null, j = {
            closable: !0,
            destroyOnHide: !1,
            title: document.title + " Says..."
        }, k = function () {
            g = [], h = [], i = document.createElement("div"), i.classList.add("modal"), f = !0
        }, l = function (a) {
            this.info && this.info.callback && "function" == typeof this.info.callback && this.info.callback(a, this.modal || {})
        }, m = function () {
            var a;
            a = h.pop(), a && a instanceof Node && a.focus && a.focus()
        }, n = function (a, b) {
            var c, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B;
            return b = d.extend({}, j, b), c = e(b), n = function () {
                o = b.buttons, p = b.classes, q = b.closable, t = b.destroyOnHide, v = a, w = b.title, c.el.modal = c, z(), c.render(), f || k(), b = null
            }, y = function (a) {
                var b, e, f, g = document.createElement("button");
                for (f = d.extend({}, {
                    classes: [], text: "Click Me", title: "", callback: function () {
                    }
                }, a), b = 0, e = f.classes.length; e > b; b++)g.classList.add(f.classes[b]);
                return g.innerHTML = f.text, "" !== f.title && g.setAttribute("title", f.title), g.modal = c, g.info = f, f.callback && g.addEventListener("click", l), g
            }, z = function () {
                var a, b, e;
                if (d.empty(c.el), c.el.classList.add("modal-dialog"), p && p.length > 0)for (b = 0, e = p.length; e > b; b++)c.el.classList.add(p[b]);
                w ? (a = c.el.appendChild(document.createElement("header")), a.classList.add("modal-header"), x = a.appendChild(document.createElement("h3")), x.setAttribute("tabIndex", "-1"), x.classList.add("modal-title"), q && (r = a.appendChild(document.createElement("span")), r.classList.add("modal-close-link"), r.classList.add("material-icons"), r.setAttribute("title", "Close"), r.innerHTML = "close", r.addEventListener("click", c.hide))) : c.el.classList.add("no-header"), s = c.el.appendChild(document.createElement("section")), s.setAttribute("tabIndex", "-1"), s.classList.add("modal-content"), o && o.length ? (u = c.el.appendChild(document.createElement("footer")), u.classList.add("modal-footer")) : c.el.classList.add("no-footer")
            }, A = function (a) {
                27 === a.keyCode && c.hide()
            }, B = function (a) {
                "modal" === a.target.className && c.hide()
            }, c.destroy = function () {
                var a;
                if (i.removeEventListener("click", c.hide), o && o.length)for (; u.childNodes.length > 0;)a = u.firstChild, a.removeEventListener("click", l), u.removeChild(a);
                r && (r.removeEventListener("click", c.hide), r = null), delete c.el.modal, u = null, x = null, s = null, t = null, c.el = null, B = null
            }, c.hide = function (a) {
                var b;
                return b = c.el.parentNode === i, a === !0 ? (d.empty(i), g.splice(0, g.length), h.splice(1, h.length), m(), b && (c.trigger("hide", c), t && c.destroy())) : b && (c.el.parentNode.removeChild(c.el), g.length > 0 && g.pop().show(), m(), c.trigger("hide", c), t && c.destroy()), !i.firstChild && i.parentNode && (i.parentNode.removeChild(i), i.removeEventListener("click", B), document.body.classList.remove("backgroundScrollDisable"), window.removeEventListener("keydown", A)), c
            }, c.render = function (a) {
                var b, e = a || v, f = null, g = o || [], h = g.length;
                if (d.empty(s), "string" == typeof e)s.innerHTML = e; else {
                    if ("function" == typeof e)return c.render(e(c));
                    e instanceof Node && s.appendChild(e)
                }
                if (w && (x.innerHTML = w), o && o.length)for (; u.childNodes.length > 0;)f = u.firstChild, d.removeEvent(f, "click", l), u.removeChild(f);
                for (b = 0; h > b; b++)u.appendChild(y(g[b]));
                return c.trigger("render", c), c
            }, c.setMessage = function (a) {
                return v = a, c.trigger("message", c), c
            }, c.setOptions = function (b, e) {
                return e && (b = d.extend({}, {
                    buttons: o,
                    classes: p,
                    closable: q,
                    message: v,
                    title: w
                }, b)), o = b.buttons, p = b.classes, q = b.closable, v = a, w = b.title, c.trigger("options", c), c
            }, c.show = function () {
                var a = null;
                for (h.push(document.activeElement || !1); i.firstChild;)a = i.firstChild, a.modal && g.push(a.modal), i.removeChild(a);
                return i.appendChild(c.el), i.addEventListener("click", B), i.parentNode || (document.body.appendChild(i), document.body.classList.add("backgroundScrollDisable"), window.addEventListener("keydown", A)), w ? x.focus() : s.focus(), c.trigger("show", c), c
            }, n(), c
        };
        b.exports = n
    }, {"../util/Util": 44, "./View": 42}],
    40: [function (a, b, c) {
        "use strict";
        var d = a("../util/Events"), e = a("../util/Util"), f = function (a) {
            var b, c, f;
            return b = d(), c = function () {
                f = e.extend({}, a), a && a.hasOwnProperty("id") && (b.id = a.id), a = null
            }, b.get = function (a) {
                return "undefined" == typeof a ? f : f.hasOwnProperty(a) ? f[a] : null
            }, b.set = function (a, c) {
                var d, g = {}, h = !1;
                for (d in a)f.hasOwnProperty(d) && f[d] === a[d] || (g[d] = a[d], h = !0);
                if (f = e.extend(f, a), a && a.hasOwnProperty("id") && (b.id = a.id), !(c && c.hasOwnProperty("silent") && c.silent) && (h || c && c.hasOwnProperty("force") && c.force)) {
                    for (d in g)b.trigger("change:" + d, g[d]);
                    b.trigger("change", g)
                }
            }, b.toJSON = function () {
                var a, b, c = e.extend({}, f);
                for (a in c)b = c[a], "object" == typeof b && null !== b && "function" == typeof b.toJSON && (c[a] = b.toJSON());
                return c
            }, c(), b
        };
        b.exports = f
    }, {"../util/Events": 43, "../util/Util": 44}],
    41: [function (a, b, c) {
        "use strict";
        var d = a("./Collection"), e = a("./CollectionSelectBox"), f = a("../util/Util"), g = a("./View"), h = function (a) {
            var b, c, h, i, j, k, l;
            return b = g(a), c = function () {
                var c = b.el;
                h = a.collection, c.innerHTML = "<label>Sort by <select></select></label>", c.classList.add("sortview"), j = new d(a.sorts), j.on("select", l, this), a.defaultSort ? j.select(j.get(a.defaultSort)) : j.select(j.data()[0]), i = new e({
                    el: c.querySelector("select"),
                    collection: j,
                    format: function (a) {
                        return a.title
                    }
                }), a = null
            }, k = function (a, b) {
                var c = {};
                return function (d, e) {
                    var f, g = c[d.id], h = c[e.id];
                    return g || (g = c[d.id] = a(d)), h || (h = c[e.id] = a(e)), b && (f = h, h = g, g = f), h > g ? -1 : g > h ? 1 : 0
                }
            }, l = function () {
                var a, b = j.getSelected();
                b && (a = b.sort, a || (a = k(b.sortBy, b.descending)), h.sort(a))
            }, b.destroy = f.compose(function () {
                j.off("select", l, this), j = null, h = null, i.destroy()
            }, b.destroy), c(), b
        };
        b.exports = h
    }, {"../util/Util": 44, "./Collection": 34, "./CollectionSelectBox": 35, "./View": 42}],
    42: [function (a, b, c) {
        "use strict";
        var d = a("./Model"), e = a("../util/Events"), f = a("../util/Util"), g = {}, h = function (a) {
            var b, c, h;
            return b = e(), c = function (a) {
                a = f.extend({}, g, a), b.el = a && a.hasOwnProperty("el") ? a.el : document.createElement("div"), b.model = a.model, b.model || (b.model = d({}), h = !0), b.model.on("change", "render", b)
            }, b.render = function () {
            }, b.destroy = f.compose(function () {
                null !== b && (b.model.off("change", "render", b), h && b.model.destroy(), h = null, b.model = null, b.el = null, c = null, b = null)
            }, b.destroy), c(a), a = null, b
        };
        b.exports = h
    }, {"../util/Events": 43, "../util/Util": 44, "./Model": 40}],
    43: [function (a, b, c) {
        "use strict";
        var d = null, e = function (a) {
            return "string" == typeof a || a instanceof String
        }, f = function () {
            var a, b, c;
            return a = {}, b = function () {
                c = {}
            }, a.destroy = function () {
                b = null, c = null, a = null
            }, a.off = function (a, b, d) {
                var e;
                if ("undefined" == typeof a)c = null, c = {}; else {
                    if (!c.hasOwnProperty(a))return;
                    if ("undefined" == typeof b)delete c[a]; else {
                        var f = null;
                        for (e = c[a].length - 1; e >= 0 && (f = c[a][e], f.callback !== b || d && f.context !== d || (c[a].splice(e, 1), !d)); e--);
                        0 === c[a].length && delete c[a], f = null
                    }
                }
            }, a.on = function (a, b, d) {
                if (!(b || !b.apply || d && e(b) && d[b].apply))throw new Error("Callback parameter is not callable.");
                c.hasOwnProperty(a) || (c[a] = []), c[a].push({callback: b, context: d})
            }, a.trigger = function (a) {
                var b, d, f, g, h;
                if (c.hasOwnProperty(a))for (b = Array.prototype.slice.call(arguments, 1), h = c[a].slice(0), d = 0, f = h.length; f > d; d++)g = h[d], e(g.callback) ? g.context[g.callback].apply(g.context, b) : g.callback.apply(g.context, b)
            }, b(), a
        };
        d = f(), f.on = function () {
            return d.on.apply(d, arguments)
        }, f.off = function () {
            return d.off.apply(d, arguments)
        }, f.trigger = function () {
            return d.trigger.apply(d, arguments)
        };
        var g = function (a) {
            f.trigger("hashchange", a)
        };
        if ("onhashchange" in window)window.addEventListener && window.addEventListener("hashchange", g, !1); else {
            var h = document.location.hash;
            setInterval(function () {
                h !== document.location.hash && (h = document.location.hash, g({
                    type: "hashchange",
                    newURL: document.location.hash,
                    oldURL: h
                }))
            }, 300)
        }
        b.exports = f
    }, {}],
    44: [function (a, b, c) {
        "use strict";
        var d = !1, e = !1, f = function () {
        };
        f.isMobile = function () {
            return d
        }, f.supportsDateInput = function () {
            return e
        }, f.extend = function (a) {
            var b, c, d, e;
            for (b = 1, c = arguments.length; c > b; b++)if (d = arguments[b])for (e in d)a[e] = d[e];
            return a
        }, f.equals = function (a, b) {
            var c, d;
            if (a === b)return !0;
            if (null === a || null === b)return !1;
            if ("object" == typeof a && "object" == typeof b) {
                for (c in a)if (a.hasOwnProperty(c) && !b.hasOwnProperty(c))return !1;
                for (d in b)if (b.hasOwnProperty(d)) {
                    if (!a.hasOwnProperty(d))return !1;
                    if (!f.equals(a[d], b[d]))return !1
                }
                return !0
            }
            return a === b
        }, f.getEvent = function (a) {
            var b;
            return a || (a = window.event), a.target ? b = a.target : a.srcElement && (b = a.srcElement), 3 === b.nodeType && (b = b.parentNode), {
                target: b,
                originalEvent: a
            }
        }, f.getParentNode = function (a, b, c) {
            for (var d = a; d && d !== c && d.nodeName.toUpperCase() !== b.toUpperCase();)d = d.parentNode;
            return d && "nodeName" in d && d.nodeName.toUpperCase() === b.toUpperCase() ? d : null
        }, f.empty = function (a) {
            for (; a.firstChild;)a.removeChild(a.firstChild)
        }, f.detach = function (a) {
            a.parentNode && a.parentNode.removeChild(a)
        }, f.getWindowSize = function () {
            var a = {width: null, height: null};
            if ("innerWidth" in window && "innerHeight" in window)a = {
                width: window.innerWidth,
                height: window.innerHeight
            }; else {
                var b = "documentElement" in document ? document.documentElement : document.body;
                a = {width: b.offsetWidth, height: b.offsetHeight}
            }
            return a
        }, f.compose = function () {
            var a = arguments;
            return function (b) {
                var c, d, e;
                for (c = 0, e = a.length; e > c; c++)d = a[c], d && d.call && (b = d.call(this, b));
                return b
            }
        }, f.contains = function (a, b) {
            var c, d;
            for (c = 0, d = a.length; d > c; c++)if (b === a[c])return !0;
            return !1
        }, f.isArray = function (a) {
            return "function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
        }, f.loadScript = function (a, b) {
            var c, d, e, g, h;
            b = f.extend({}, {success: null, error: null, done: null}, b), c = function () {
                h.removeEventListener("load", g), h.removeEventListener("error", e), h.parentNode.removeChild(h), c = null, g = null, e = null, h = null
            }, d = function () {
                null !== b.done && b.done(), b = null
            }, e = function () {
                c(), null !== b.error && b.error.apply(null, arguments), d()
            }, g = function () {
                c(), null !== b.success && b.success.apply(null, arguments), d()
            }, h = document.createElement("script"), h.addEventListener("load", g), h.addEventListener("error", e), h.src = a, h.async = !0, document.querySelector("script").parentNode.appendChild(h)
        }, function () {
            var a = document.createElement("div"), b = document.createElement("input"), c = navigator.userAgent || navigator.vendor || window.opera;
            d = c.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i), b.setAttribute("type", "date"), e = "text" !== b.type, a = null
        }(), b.exports = f
    }, {}],
    45: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h, i = a("./Util"), j = 0, k = {
            url: null,
            success: null,
            error: null,
            done: null,
            data: null,
            callbackName: null,
            callbackParameter: "callback"
        }, l = {
            url: null,
            success: null,
            error: null,
            done: null,
            method: "GET",
            headers: null,
            data: null,
            rawdata: null
        };
        d = function (a) {
            var b, c, d, e, f;
            if (a = i.extend({}, l, a), e = a.url, a.restrictOrigin && (e = g(e)), c = a.rawdata, null !== a.data && (d = h(a.data), "GET" === a.method ? e = e + "?" + d : (c = d, null === a.headers && (a.headers = {}), a.headers["Content-Type"] = "application/x-www-form-urlencoded")), f = new XMLHttpRequest, f.onreadystatechange = function () {
                    var b, c;
                    if (4 === f.readyState) {
                        if (200 === f.status) {
                            if (null !== a.success)try {
                                b = f.response, c = f.getResponseHeader("Content-Type"), c && -1 !== c.indexOf("json") && (b = JSON.parse(b)), a.success(b, f)
                            } catch (d) {
                                null !== a.error && a.error(d, f)
                            }
                        } else a.error && a.error(f.status, f);
                        null !== a.done && a.done(f)
                    }
                }, f.open(a.method, e, !0), null !== a.headers)for (b in a.headers)f.setRequestHeader(b, a.headers[b]);
            return f.send(c), f
        }, e = function () {
            return "_xhr_callback_" + (new Date).getTime() + "_" + ++j
        }, f = function (a) {
            var b, c, d;
            a = i.extend({}, k, a), d = a.url, b = i.extend({}, a.data), c = a.callbackName || e(), b[a.callbackParameter] = c, d += (-1 === d.indexOf("?") ? "?" : "&") + h(b), window[c] = function () {
                a.success.apply(null, arguments)
            }, i.loadScript(d, {
                error: a.error, done: function () {
                    window[c] = null, delete window[c], null !== a.done && a.done()
                }
            })
        }, g = function (a) {
            var b, c;
            return b = document.createElement("a"), b.setAttribute("href", a), c = b.pathname, 0 !== a.indexOf("http") && 0 !== a.indexOf("/") || 0 === c.indexOf("/") || (c = "/" + c), c
        }, h = function (a) {
            var b, c, d, e, f, g;
            b = [];
            for (c in a)if (d = encodeURIComponent(c), e = a[c], e instanceof Array)for (f = 0, g = e.length; g > f; f++)b.push(d + "=" + encodeURIComponent(e[f])); else b.push(d + "=" + encodeURIComponent(e));
            return b.join("&")
        }, b.exports = {ajax: d, getCallbackName: e, jsonp: f, restrictOrigin: g, urlEncode: h}
    }, {"./Util": 44}],
    46: [function (a, b, c) {
        "use strict";
        var d = a("quakeml/XmlUtil"), e = a("quakeml/QuakemlEvent"), f = function (a) {
            var b, c, f, g, h;
            return b = Object.create({}), c = function (a) {
                var b, c, i, j, k = a.eventElement || "event";
                if (i = d.xmlToJson(a.xml), j = i["q:quakeml"], c = j.eventParameters, b = c[k], "undefined" == typeof b)throw new Error("Event element " + k + " not found");
                h = j, g = c.creationInfo.creationTime, f = e(Array.isArray(b) ? b[0] : b)
            }, b.getMagnitudes = function () {
                return f.getMagnitudes()
            }, b.getOrigins = function () {
                return f.getOrigins()
            }, b.getQuakemlEvent = function () {
                return f.getEvent()
            }, b.getUpdated = function () {
                return g
            }, c(a), a = null, b
        };
        b.exports = f
    }, {"quakeml/QuakemlEvent": 47, "quakeml/XmlUtil": 48}],
    47: [function (a, b, c) {
        "use strict";
        var d = function (a) {
            return Array.isArray(a) ? a : "object" == typeof a && null !== a ? [a] : []
        }, e = function (a) {
            var b, c, d;
            for (c = 1; c < arguments.length; c++)if (b = arguments[c], "object" == typeof b && null !== b)for (d in b)a[d] = b[d];
            return a
        }, f = function (a, b, c) {
            var d, e, f;
            if (c = c || {}, a)for (Array.isArray(a) || (a = [a]), d = 0, e = a.length; e > d; d++)f = a[d], c[f[b]] = f;
            return c
        }, g = function (a) {
            var b, c, g, h, i, j, k, l, m, n, o, p, q, r, s;
            return b = Object.create({}), c = function (a) {
                i = a, h = i["catalog:eventSource"], n = i.preferredOriginID || null, m = i.preferredMagnitudeID || null, l = f(i.pick, "publicID"), g = f(i.amplitude, "publicID"), o = f(i.stationMagnitude, "publicID"), k = q(d(i.origin)), j = s(d(i.magnitude)), a = null
            }, p = function (a) {
                var b, c, d = [], f = l;
                for (b = 0; b < a.length; b++)c = e({}, a[b]), "string" == typeof c.pickID ? c.pick = f[c.pickID] || null : c.pick = null, d.push(c);
                return d
            }, r = function (a) {
                var b, c, d, f = g, h = [], i = o;
                for (b = 0; b < a.length; b++)c = e({}, a[b]), d = e({}, i[c.stationMagnitudeID]), c.stationMagnitude = d, "string" == typeof d.amplitudeID && (d.amplitude = e({}, f[d.amplitudeID])), h.push(c);
                return h
            }, s = function (a) {
                var b, c, f = [], g = m;
                for (b = 0; b < a.length; b++)c = e({}, a[b]), c.isPreferred = g === c.publicID, c.contributions = r(d(c.stationMagnitudeContribution)), delete c.stationMagnitudeContribution, c.isPreferred ? f.unshift(c) : f.push(c);
                return f
            }, q = function (a) {
                var b, c, f = [], g = n;
                for (b = 0; b < a.length; b++)c = e({}, a[b]), c.isPreferred = g === c.publicID, c.arrivals = p(d(c.arrival)), delete c.arrival, c.isPreferred ? f.unshift(c) : f.push(c);
                return f
            }, b.getEvent = function () {
                return i
            }, b.getMagnitudes = function () {
                return j
            }, b.getOrigins = function () {
                return k
            }, c(a), a = null, b
        };
        b.exports = g
    }, {}],
    48: [function (a, b, c) {
        "use strict";
        var d = {
            xmlToJson: function (a) {
                var b, c, e, f, g, h, i, j, k = {}, l = [];
                if ("string" == typeof a && (a = (new DOMParser).parseFromString(a, "text/xml")), 3 === a.nodeType)return a.nodeValue;
                if (1 === a.nodeType)for (b = a.attributes, i = 0, j = b.length; j > i; i++)c = b.item(i), k[c.nodeName] = c.nodeValue;
                if (a.hasChildNodes())for (e = a.childNodes, i = 0, j = e.length; j > i; i++)f = e.item(i), g = f.nodeName, h = d.xmlToJson(f), l.push(h), "undefined" == typeof k[g] ? k[g] = h : ("undefined" == typeof k[g].push && (k[g] = [k[g]]), k[g].push(h));
                return 1 === l.length && k["#text"] && 1 === Object.keys(k).length ? k["#text"] : k
            }
        };
        b.exports = d
    }, {}],
    49: [function (a, b, c) {
        "use strict";
        var d = a("accordion/Accordion"), e = a("util/Util"), f = a("mvc/View"), g = {
            classes: "accordion-standard",
            destroyView: !0,
            expanded: !1,
            toggleElement: "h3",
            toggleText: "Show more"
        }, h = function (a) {
            var b, c, h;
            return b = f(a), c = function (a) {
                a = e.extend({}, g, a), b.model.set({
                    classes: a.classes,
                    destroyView: a.destroyView,
                    expanded: a.expanded,
                    toggleElement: a.toggleElement,
                    toggleText: a.toggleText,
                    view: a.view
                }, {silent: !0})
            }, b.destroy = e.compose(function () {
                null !== b && (h && (h.destroy(), h = null), b.model.get("destroyView") && b.model.get("view").destroy(), b.el.removeEventListener("click", b.onClick), b = null)
            }, b.destroy), b.onClick = function () {
                var a;
                a = b.model.get("view"), a.render(), b.el.removeEventListener("click", b.onClick)
            }, b.render = function () {
                var a, c, e, f, g, i;
                h && (h.destroy(), h = null, b.el.removeEventListener("click", b.onClick)), e = b.model.get(), a = e.classes, c = e.expanded, f = e.toggleElement, g = e.toggleText, i = e.view, c || (a += " accordion-closed"), h = d({
                    el: b.el,
                    accordions: [{classes: a, content: i.el, toggleElement: f, toggleText: g}]
                }), c ? i.render() : b.el.addEventListener("click", b.onClick)
            }, c(a), a = null, b
        };
        b.exports = h
    }, {"accordion/Accordion": 2, "mvc/View": 42, "util/Util": 44}],
    50: [function (a, b, c) {
        "use strict";
        var d = a("mvc/Collection"), e = a("pdl/Product"), f = a("util/Util"), g = a("util/Xhr"), h = "contributor-link", i = "contributor-list", j = "contributor-reference", k = "data-id", l = {}, m = function (a) {
            var b, c, m, n, o, p, q, r, s, t, u, v;
            return b = {}, c = function (a) {
                a = f.extend({}, l, a), m = [], n = null, o = []
            }, p = function (a) {
                var c, d, e;
                return d = null, e = null, null !== a && (a = a.toUpperCase(), c = b.getContributor(a), c && (d = c.title, e = c.url), d || (d = a)), e ? '<a href="' + e + '">' + d + "</a>" : d
            }, q = function () {
                for (var a = [], c = 0; c < m.length; c++)a.push("<li>" + b.getContributorLink(m[c]) + "</li>");
                return a.join("")
            }, r = function (a) {
                var c, d, e, f, g;
                return c = [], f = null, g = null, null !== a && (a = a.toUpperCase(), d = b.getContributor(a), d && (f = d.title, g = d.url), e = m.indexOf(a.toLowerCase()) + 1, f && c.push('<abbr title="' + f + '">'), c.push(a), e > 0 && c.push("<sup>" + e + "</sup>"), f && c.push("</abbr>")), c.join("")
            }, s = function () {
                n = d([]), u()
            }, u = function () {
                o.forEach(function (a) {
                    a()
                }), o = []
            }, t = function (a) {
                n = d(a), b.render(), u()
            }, v = function (a, c) {
                var d, e;
                return d = b.getName(a), e = b.getName(c), e > d ? -1 : d > e ? 1 : 0
            }, b.getContributor = function (a) {
                var b;
                return b = null, a = a.toLowerCase(), null !== n && (b = n.get(a)), b
            }, b.getContributors = function () {
                return m
            }, b.getContributorList = function () {
                return '<ol class="contributors ' + i + '">' + q() + "</ol>"
            }, b.getContributorLink = function (a) {
                return '<span class="' + h + '" ' + k + '="' + a + '">' + p(a) + "</span>"
            }, b.getContributorReference = function (a) {
                return '<span class="' + j + '" ' + k + '="' + a + '">' + r(a) + "</span>"
            }, b.getName = function (a) {
                var c, d;
                return c = b.getContributor(a), a = a.toUpperCase(), d = null, c && (d = c.title), d ? d + " (" + a + ")" : a
            }, b.getProductAttribution = function (a) {
                var c, d, f;
                return d = {}, f = e.getBaseType(a.get("type")), c = a.get("source"), d[c] = b.getContributorReference(c), "origin" === f || "phase-data" === f ? (c = a.getProperty("origin-source"), c = c ? c.toLowerCase() : null, c && !d.hasOwnProperty(c) && (d[c] = b.getContributorReference(c)), c = a.getProperty("magnitude-source"), c = c ? c.toLowerCase() : null, c && !d.hasOwnProperty(c) && (d[c] = b.getContributorReference(c))) : ("focal-mechanism" === f || "moment-tensor" === f) && (c = a.getProperty("beachball-source"), c = c ? c.toLowerCase() : null, c && !d.hasOwnProperty(c) && (d[c] = b.getContributorReference(c))), Object.keys(d).reduce(function (a, b) {
                    return a + d[b]
                }, "")
            }, b.setContributors = function (a) {
                var b;
                m = a.slice(0), m = a.map(function (a) {
                    return a.toLowerCase()
                }), m.sort(v), b = document.querySelector("." + i), b && (b.innerHTML = q())
            }, b.load = function (a) {
                g.ajax({url: a, error: s, success: t})
            }, b.render = function () {
                var a;
                a = Array.prototype.slice.call(document.querySelectorAll("." + h), 0), a.forEach(function (a) {
                    var b;
                    b = a.getAttribute(k), b && (a.innerHTML = p(b))
                }), a = Array.prototype.slice.call(document.querySelectorAll("." + j), 0), a.forEach(function (a) {
                    var b;
                    b = a.getAttribute(k), b && (a.innerHTML = r(b))
                })
            }, b.whenReady = function (a) {
                null === n ? o.push(a) : a()
            }, c(a), a = null, b
        };
        b.exports = m()
    }, {"mvc/Collection": 34, "pdl/Product": 118, "util/Util": 44, "util/Xhr": 45}],
    51: [function (a, b, c) {
        "use strict";
        var d = a("core/Attribution"), e = a("core/Module"), f = a("core/ProductView"), g = a("util/Util"), h = {
            module: {
                ID: "",
                TITLE: "Module Title"
            }
        }, i = function (a) {
            var b, c, i;
            return a = g.extend({}, h, a), b = f(a), c = function (a) {
                b.module = a.module || e, b.el.innerHTML = ['<article class="pin-view">', '<header class="pin-header"></header>', '<section class="pin-content"></section>', '<footer class="pin-footer"></footer>', "</article>"].join(""), b.header = b.el.querySelector(".pin-header"), b.content = b.el.querySelector(".pin-content"), b.footer = b.el.querySelector(".pin-footer"), b.header.classList.add(b.module.ID + "-pin-header"), b.content.classList.add(b.module.ID + "-pin-content"), b.footer.classList.add(b.module.ID + "-pin-footer"), b.el.addEventListener("click", i)
            }, i = function (a) {
                b.onClick(a)
            }, b.getLinkUrl = function () {
                return "#" + b.module.ID
            }, b.onClick = function (a) {
                b.redirect(b.getLinkUrl()), a && "function" == typeof a.preventDefault && a.preventDefault()
            }, b.redirect = function (a) {
                window.location = a
            }, b.destroy = g.compose(function () {
                null !== b && (b.el.removeEventListener("click", i), i = null, c = null, b = null)
            }, b.destroy), b.render = function () {
                return b.renderPinHeader(), b.renderPinContent(), b.renderPinFooter(), b
            }, b.renderPinContent = function () {
                b.content.innerHTML = "Pin Content"
            }, b.renderPinFooter = function () {
                b.footer.innerHTML = "Contributed by " + d.getProductAttribution(b.model)
            }, b.renderPinHeader = function () {
                var a;
                a = b.module.TITLE, b.header.innerHTML = ['<a href="', b.getLinkUrl(), '">', a, "</a>"].join("")
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"core/Attribution": 50, "core/Module": 58, "core/ProductView": 60, "util/Util": 44}],
    52: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = a("mvc/View"), f = a("util/Xhr"), g = function (a) {
            var b, c;
            return b = e(a), b.destroy = d.compose(function () {
                c && (c.abort(), c = null), b = null
            }, b.destroy), b.fetchData = function () {
                var a;
                a = b.model.get("bytes"), null !== a ? setTimeout(function () {
                    b && b.onSuccess(a, null)
                }, 0) : c = f.ajax({
                    url: b.model.get("url"), success: b.onSuccess, error: b.onError, done: function () {
                        c = null
                    }
                })
            }, b.onError = function (a) {
                b.el.innerHTML = a
            }, b.onSuccess = function (a) {
                b.el.innerHTML = a
            }, b.render = function () {
                b.el.innerHTML = "<p>Loading content&hellip;</p>", b.fetchData()
            }, a = null, b
        };
        b.exports = g
    }, {"mvc/View": 42, "util/Util": 44, "util/Xhr": 45}],
    53: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = {cooperator: null, el: null}, f = function (a) {
            var b, c;
            return b = {}, c = function (a) {
                var c;
                if (a = d.extend({}, e, a), c = a.el || document.querySelector(".cooperators"), !c) {
                    c = document.createElement("div"), c.classList.add("cooperators");
                    try {
                        document.querySelector(".site-header").appendChild(c)
                    } catch (f) {
                    }
                }
                b.el = c, b.setCooperator(a.cooperator)
            }, b.setCooperator = function (a) {
                var c, e, f, g, h;
                d.empty(b.el), a && a.logo && a.title && (f = a.logo, g = a.title, h = a.url, e = document.createElement("img"), e.setAttribute("src", f), e.setAttribute("alt", "in cooperation with " + g), c = e, h && (c = document.createElement("a"), c.setAttribute("href", h), c.appendChild(e)), c.classList.add("cooperator"), b.el.appendChild(c))
            }, c(a), a = null, b
        };
        b.exports = f
    }, {"util/Util": 44}],
    54: [function (a, b, c) {
        "use strict";
        var d = a("core/ContentView"), e = a("core/Formatter"), f = a("pdl/Product"), g = "No download content available.", h = function (a) {
            var b, c, h, i;
            return a = a || {}, b = d(a), c = function (a) {
                i = a.product || f(), b.el.classList.add("download-view"), h = a.formatter || e()
            }, b.onError = function () {
                b.el.innerHTML = g
            }, b.onSuccess = function (a, c) {
                try {
                    b.el.innerHTML = '<ul class="no-style">' + b.parse(c.responseXML).map(b.renderFile).join("") + "</ul>"
                } catch (d) {
                    b.onError("Failed to render content.")
                }
            }, b.parse = function (a) {
                return Array.prototype.map.call(a.querySelectorAll("contents > file"), b.parseFile)
            }, b.parseFile = function (a) {
                var b, c, d, e, f, g, h, j, k, l, m, n;
                if (a.getAttribute("refid"))throw new Error("file element with refid");
                for (k = a.getAttribute("id"), m = a.getAttribute("title"), b = a.querySelector("caption"), b = b ? b.textContent : null, g = [], e = a.querySelectorAll("format"), j = 0, l = e.length; l > j; j++) {
                    d = e[j], h = d.getAttribute("href"), n = d.getAttribute("type");
                    try {
                        f = {
                            href: h,
                            type: n,
                            url: null,
                            length: 0
                        }, c = i.getContent(h), f.url = c.get("url"), f.length = c.get("length")
                    } catch (o) {
                        console && console.log && console.log(o.stack)
                    } finally {
                        g.push(f)
                    }
                }
                return {id: k, title: m, caption: b, formats: g}
            }, b.renderFile = function (a) {
                return ['<li class="download-file">', '<span class="download-title">', a.title, "</span>", '<span class="download-caption">', a.caption, "</span>", '<ul class="download-formats">', a.formats.map(b.renderFormat).join(""), "</ul>", "</li>"].join("")
            }, b.renderFormat = function (a) {
                var b, c;
                return b = a.href.split(".").slice(-1).join("").toUpperCase(), c = h.fileSize(a.length), ['<li class="format">', '<a href="', a.url, '" ', 'title="', b, " (", a.href, ')">', b, " (", c, ")", "</a>", "</li>"].join("")
            }, c(a), a = null, b
        };
        h.NO_CONTENT_MESSAGE = g, b.exports = h
    }, {"core/ContentView": 52, "core/Formatter": 56, "pdl/Product": 118}],
    55: [function (a, b, c) {
        "use strict";
        var d = a("core/Attribution"), e = a("pdl/CatalogEvent"), f = a("core/CooperatorLogo"), g = a("dyfi/DYFIFormModule"), h = a("dyfi/DYFIModule"), i = a("util/Events"), j = a("general/ExecutiveSummaryModule"), k = a("finite-fault/FiniteFaultModule"), l = a("focal-mechanism/FocalMechanismModule"), m = a("core/Formatter"), n = a("impact/ImpactSummaryModule"), o = a("map/InteractiveMapModule"), p = a("mvc/Model"), q = a("moment-tensor/MomentTensorModule"), r = a("core/NearbySeismicity"), s = a("oaf/OafModule"), t = a("origin/OriginModule"), u = a("losspager/PAGERModule"), v = a("general/RegionalInfoModule"), w = a("scientific/ScientificSummaryModule"), x = a("shakemap/ShakeMapModule"), y = a("util/Util"), z = a("waveform/WaveformModule"), A = {
            event: null,
            config: {},
            defaultModule: j.ID,
            modules: [[j, o, v], [n, g, h, x, u], [w, t, q, l, k, z, s]],
            redirects: {
                general_summary: j.ID,
                general_map: o.ID,
                impact_summary: n.ID,
                impact_tellus: g.ID,
                impact_dyfi: h.ID,
                impact_shakemap: x.ID,
                impact_pager: u.ID,
                scientific_summary: w.ID,
                scientific_origin: t.ID,
                "scientific_moment-tensor": q.ID,
                "scientific_focal-mechanism": l.ID,
                "scientific_finite-fault": k.ID,
                scientific_waveforms: z.ID
            }
        }, B = function (a) {
            var b, c, g, h, j, k, l, n, o, q, s, t, u, v, w, x, z;
            return b = i(), c = function (a) {
                a = y.extend({}, A, a), t = a.redirects, k = a.event || e(), g = a.config || {}, g.defaultModule = g.defaultModule || a.defaultModule, g.modules = a.modules || [], l = a.formatter || m(), n = !1, b.updateContributors(), g.hasOwnProperty("ATTRIBUTION_URL") && d.load(g.ATTRIBUTION_URL), j = a.el || document.createElement("div"), s = a.nav || document.createElement("nav"), b.header = j.querySelector(".event-header") || document.createElement("div"), b.content = j.querySelector(".event-content") || document.createElement("div"), b.footer = j.querySelector(".event-footer") || document.createElement("div"), o = p({
                    event: k,
                    config: g
                }), v(), b.renderHeader(), d.whenReady(b.onAttributionReady), i.on("back", "onBack", b), i.on("hashchange", w), w()
            }, u = function (a, b) {
                var c, d;
                return b ? (d = document.createElement("header"), c = d.appendChild(document.createElement("a"))) : (d = document.createElement("a"), c = d), c.setAttribute("class", "module-" + a.ID + "-nav"), c.setAttribute("href", "#" + a.ID), c.innerHTML = a.TITLE, d
            }, v = function () {
                var a, c, d, e, f, h, i, j, l;
                for (q = {}, l = k ? Object.keys(k.getProducts()) : [], h = g.modules, i = h.length, y.empty(s), b.createMapLink(s), c = 0; i > c; c++) {
                    for (f = h[c], a = null, j = f.length, d = 0; j > d; d++)e = f[d], q[e.ID] = e, b.moduleHasContent(e, l) && (a ? a.appendChild(u(e)) : (a = document.createElement("section"), a.appendChild(u(e, !0))));
                    a && s.appendChild(a), a = null
                }
                b.createKmlLink(s), b.createSearchNearbySeismicityLink(s)
            }, b.createKmlLink = function (a) {
                var b, c;
                k && g.KML_STUB && (c = g.KML_STUB.replace("%s", k.getEventId()), b = document.createElement("a"), b.setAttribute("class", "kml-download"), b.setAttribute("href", c), b.innerHTML = "Download Event KML", a.appendChild(b))
            }, b.createMapLink = function (a) {
                var c;
                b.isScenarioMode() || (c = document.createElement("a"), c.setAttribute("class", "latest-earthquakes"), c.setAttribute("href", "/earthquakes/map/"), c.innerHTML = "Latest Earthquakes", c.classList.add("up-one-level"), a.appendChild(c))
            }, b.createSearchNearbySeismicityLink = function (a) {
                var c, d, e;
                k && !b.isScenarioMode() && (d = r(), e = d.getNearbySeismicityLink(k.getSummary()), d.destroy(), c = document.createElement("a"), c.setAttribute("class", "search-nearby-seismicity"), c.setAttribute("href", e), c.innerHTML = "Search Nearby Seismicity", a.appendChild(c))
            }, b.destroy = y.compose(function () {
                b && (i.off("back", "onBack", b), i.off("hashchange", w), h && h.destroy(), o && o.destroy(), u = null, v = null, w = null, x = null,
                    z = null, g = null, h = null, j = null, k = null, l = null, n = !1, o = null, q = null, s = null, b = null)
            }, b.destroy), b.onAttributionReady = function () {
                var a;
                a = k ? k.getPreferredOriginProduct() : null, a && f({cooperator: d.getContributor(a.get("source"))}), b.renderFooter()
            }, b.updateContributors = function () {
                var a, b, c, e, f, g, h, i;
                a = k ? k.getProducts() : {}, f = {};
                for (g in a)for (b = a[g], i = b.length, h = 0; i > h; h++)c = b[h], e = c.get("source"), e && (e = e.toLowerCase(), "admin" === e || f.hasOwnProperty(e) || (f[e] = !0)), e = c.getProperty("origin-source"), e && (e = e.toLowerCase(), f.hasOwnProperty(e) || (f[e] = e)), e = c.getProperty("magnitude-source"), e && (e = e.toLowerCase(), f.hasOwnProperty(e) || (f[e] = e)), e = c.getProperty("beachball-source"), e && (e = e.toLowerCase(), f.hasOwnProperty(e) || (f[e] = e));
                d.setContributors(Object.keys(f))
            }, b.isScenarioMode = function () {
                return g.SCENARIO_MODE === !0
            }, b.moduleHasContent = function (a, c) {
                var d, e, f, g;
                if (a.hasOwnProperty("hasContent") && "function" == typeof a.hasContent)return a.hasContent(o);
                if (a.hasOwnProperty("TYPES") && Array.isArray(a.TYPES))for (f = a.TYPES.length, e = b.isScenarioMode(), d = 0; f > d; d++)if (g = a.TYPES[d], e && (g += "-scenario"), -1 !== c.indexOf(g))return !0;
                return !1
            }, b.onBack = function () {
                n ? window.history.back() : window.location.hash = "#" + g.defaultModule
            }, w = function () {
                var a, c, d, e, f, i, j, k;
                if (d = x(window.location.hash || ""), i = d.module, j = d.params, q.hasOwnProperty(i))h && (n = !0, h.ID !== i && (a = {}, a[h.ID] = {}, o.set(a, {silent: !0}), h.destroy(), h = null)), h || (h = q[i]({
                    el: b.content,
                    formatter: l,
                    model: o
                })), j = y.extend({}, j), f = {}, f[i] = j, o.set(f), c = s.querySelector(".module-" + h.ID + "-nav"), e = s.querySelector(".current-module"), c !== e && (e && e.classList.remove("current-module"), c.classList.add("current-module")), b.trigger("render"), window.scroll(0, 0); else {
                    d = z(window.location.hash || ""), i = d.module, j = d.params, k = q.hasOwnProperty(i) ? "#" + d.redirect : "#" + g.defaultModule;
                    try {
                        window.location.replace(k)
                    } catch (m) {
                        window.location = k
                    }
                }
            }, x = function (a) {
                var b, c, d;
                return a = a.replace("#", ""), d = a.split("?"), b = d[0], c = {}, d.length > 1 && (d = d.slice(1).join("?").split("&"), d.forEach(function (a) {
                    var b, d, e;
                    d = a.split("="), b = decodeURIComponent(d[0]), e = decodeURIComponent(d.slice(1).join("=")), c[b] = e
                })), {module: b, params: c}
            }, z = function (a) {
                var b, c, d, e;
                return a = a.replace("#", ""), c = {}, d = a.split(":"), b = d[0], t.hasOwnProperty(b) && (b = t[b]), e = b, d.length > 1 && (d = d.slice(1).join(":").split("_"), d[0] && (c.source = d[0], e += "?source=" + d[0]), d[1] && (c.code = d[1], e += "&code=" + d[1])), {
                    module: b,
                    params: c,
                    redirect: e
                }
            }, b.renderFooter = function () {
                var a, c;
                a = d.getContributors(), c = [], a && 0 !== a.length && c.push("<h3>Contributors</h3>", d.getContributorList()), c.push("<h3>Additional Information</h3>", "<ul>"), b.isScenarioMode() ? c.push('<li><a href="/scenarios/">Earthquake Scenarios</a></li>') : c.push("<li>", '<a href="/data/comcat/">', "ANSS Comprehensive Earthquake Catalog (ComCat) Documentation", "</a>", "</li>"), c.push("<li>", '<a href="/data/comcat/data-eventterms.php">', "Technical terms used on event pages", "</a>", "</li>", "</ul>"), b.footer.innerHTML = c.join("")
            }, b.renderHeader = function () {
            }, c(a), a = null, b
        };
        b.exports = B
    }, {
        "core/Attribution": 50,
        "core/CooperatorLogo": 53,
        "core/Formatter": 56,
        "core/NearbySeismicity": 59,
        "dyfi/DYFIFormModule": 63,
        "dyfi/DYFIModule": 67,
        "finite-fault/FiniteFaultModule": 74,
        "focal-mechanism/FocalMechanismModule": 77,
        "general/ExecutiveSummaryModule": 80,
        "general/RegionalInfoModule": 84,
        "impact/ImpactSummaryModule": 87,
        "losspager/PAGERModule": 88,
        "map/InteractiveMapModule": 94,
        "moment-tensor/MomentTensorModule": 100,
        "mvc/Model": 40,
        "oaf/OafModule": 108,
        "origin/OriginModule": 111,
        "pdl/CatalogEvent": 116,
        "scientific/ScientificSummaryModule": 119,
        "shakemap/ShakeMapModule": 121,
        "util/Events": 43,
        "util/Util": 44,
        "waveform/WaveformModule": 125
    }],
    56: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = {
            depthDecimals: 1,
            distanceDecimals: 1,
            empty: "&ndash;",
            fileSizes: [" B", " KB", " MB", " GB"],
            locationDecimals: 3,
            magnitudeDecimals: 1
        }, f = .621371, g = ["I", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], h = ["#FFFFFF", "#FFFFFF", "#ACD8E9", "#ACD8E9", "#83D0DA", "#7BC87F", "#F9F518", "#FAC611", "#FA8A11", "#F7100C", "#C80F0A", "#C80F0A", "#C80F0A"], i = function (a) {
            var b, c, i, j, k, l, m, n;
            return b = {}, c = function (a) {
                a = d.extend({}, e, a), i = a.depthDecimals, j = a.distanceDecimals, k = a.empty, l = a.fileSizes, m = a.locationDecimals, n = a.magnitudeDecimals
            }, b.angle = function (a, b) {
                var c;
                return a || 0 === a ? (c = "number" == typeof b ? Number(a).toFixed(b) : Math.round(a), c + "&deg;") : k
            }, b.backAzimuth = function (a) {
                return a >= 180 ? a -= 180 : 180 > a && (a += 180), a
            }, b.compassWinds = function (a) {
                var b = 22.5, c = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
                return c.indexOf(a) > -1 ? a : c[Math.round(a % 360 / b)]
            }, b.date = function (a) {
                var b, c, d;
                return a && "function" == typeof a.getTime ? (b = a.getUTCFullYear(), c = a.getUTCMonth() + 1, d = a.getUTCDate(), 10 > c && (c = "0" + c), 10 > d && (d = "0" + d), b + "-" + c + "-" + d) : k
            }, b.datetime = function (a, c, d) {
                var e, f;
                return a || 0 === a ? ("function" == typeof a.getTime && (a = a.getTime()), c = c || 0, e = 60 * c * 1e3, f = new Date(a + e), b.date(f) + " " + b.time(f, d) + " (UTC" + b.timezoneOffset(c) + ")") : k
            }, b.depth = function (a, c, d) {
                return a || 0 === a ? b.number(a, i, k, c) + b.uncertainty(d, i, "") : k
            }, b.distance = function (a, c) {
                return b.number(a, j, k, c)
            }, b.dyfiLocation = function (a) {
                var b, c, d, e;
                return b = a.country, c = a.name, d = a.state, e = a.zip, '<span class="dyfi-response-location">' + c + ", " + d + "&nbsp;" + e + "<br /><small>" + b + "</small></span>"
            }, b.fileSize = function (a) {
                var b;
                if (!a && 0 !== a)return k;
                for (b = 0, a = Number(a); a >= 1024;)a /= 1024, b++;
                return a = b > 0 ? a.toFixed(1) : a.toFixed(0), a + l[b]
            }, b.intensity = function (a, c) {
                var d;
                return d = b.mmi(a), c = c || "", '<span class="mmi mmi' + d + '"><span class="roman"><strong>' + d + "</strong></span>" + c + "</span>"
            }, b.kmToMi = function (a) {
                return a ? a * f : a
            }, b.latitude = function (a) {
                var b;
                return a || 0 === a ? (b = a >= 0 ? "N" : "S", a = Math.abs(a), "number" == typeof m && (a = a.toFixed(m)), a + "&deg;" + b) : k
            }, b.leftPad = function (a, b, c) {
                var d, e, f;
                if (e = b - a.length, f = [], 1 > e)return a;
                for (d = 0; e > d; d++)f[d] = c;
                return f.join("") + a
            }, b.location = function (a, c) {
                return b.latitude(a) + "&nbsp;" + b.longitude(c)
            }, b.longitude = function (a) {
                var b;
                return a || 0 === a ? (b = a >= 0 ? "E" : "W", a = Math.abs(a), "number" == typeof m && (a = a.toFixed(m)), a + "&deg;" + b) : k
            }, b.magnitude = function (a, c, d) {
                return b.number(a, n, k, c) + b.uncertainty(d, n, "")
            }, b.mmi = function (a, b) {
                return a = Math.round(a), g[a] || b || k
            }, b.mmiColor = function (a) {
                return a = Math.round(a), h[a] || null
            }, b.number = function (a, b, c, d) {
                return a || 0 === a ? ("number" == typeof b && (a = Number(a).toFixed(b)), d && (a += " " + d), a) : c || k
            }, b.numberWithCommas = function (a, b) {
                if (!a && 0 !== a)return b || k;
                var c = a.toString().split(".");
                return c[0] = c[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), c.join(".")
            }, b.time = function (a, b) {
                var c, d, e, f;
                return a && "function" == typeof a.getTime ? (c = a.getUTCHours(), d = a.getUTCMinutes(), e = a.getUTCSeconds(), f = "", 10 > c && (c = "0" + c), 10 > d && (d = "0" + d), 10 > e && (e = "0" + e), b && (f = a.getUTCMilliseconds(), f = 10 > f ? ".00" + f : 100 > f ? ".0" + f : "." + f), c + ":" + d + ":" + e + f) : k
            }, b.timezoneOffset = function (a) {
                var b, c, d;
                return a && 0 !== a ? (0 > a ? (d = "-", a *= -1) : d = "+", b = parseInt(a / 60, 10), c = parseInt(a % 60, 10), 10 > b && (b = "0" + b), 10 > c && (c = "0" + c), d + b + ":" + c) : ""
            }, b.uncertainty = function (a, c, d, e) {
                return a || 0 === a ? (a = b.number(a, c, null, e), '<span class="uncertainty">&plusmn; ' + a + "</span>") : d
            }, c(a), a = null, b
        };
        i.MILES_PER_KILOMETER = f, b.exports = i
    }, {"util/Util": 44}],
    57: [function (a, b, c) {
        "use strict";
        var d = a("core/ProductView"), e = a("util/Util"), f = function (a) {
            var b;
            return b = d(a), b.render = function () {
                var a, c, d, f;
                c = b.model, d = c.getProperty("text"), f = c.getProperty("url"), f ? (a = document.createElement("a"), a.setAttribute("href", f)) : a = document.createElement("span"), a.classList.add(c.get("type")), d ? a.innerHTML = d : a.innerHTML = "No link text available", e.empty(b.el), b.el.appendChild(a)
            }, b
        };
        b.exports = f
    }, {"core/ProductView": 60, "util/Util": 44}],
    58: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("core/AccordionView"), i = a("core/Attribution"), j = a("core/DownloadView"), k = a("core/Formatter"), l = a("pdl/Product"), m = a("util/Util"), n = a("mvc/View");
        d = "module", e = "Default Module", f = [], g = function () {
            return !0
        };
        var o = {}, p = function (a) {
            var b, c, f, g;
            return a = m.extend({}, o, a), b = n(a), c = function (a) {
                var c;
                b.ID = d, b.TITLE = e, g = a.formatter || k(), c = b.el, c.innerHTML = '<div class="module-header"></div><div class="module-content"></div><div class="module-footer"></div>', b.header = c.querySelector(".module-header"), b.content = c.querySelector(".module-content"), b.footer = c.querySelector(".module-footer")
            }, b.destroy = m.compose(function () {
                f && (f.destroy(), f = null), g = null, c = null, b = null
            }, b.destroy), b.getProduct = function (a) {
                var c, d, e, f, g, h;
                return d = b.model.get("event"), e = b.model.get(b.ID) || {}, a = l.getFullType(a, b.model.get("config")), g = e.source || null, c = e.code || null, h = e.updateTime || null, f = null, d && null !== g && null !== c && (f = d.getProductById(a, g, c, h)), d && null === f && (f = d.getPreferredProduct(a)), f
            }, b.getProducts = function (a) {
                var c;
                return c = b.model.get("event"), a = l.getFullType(a, b.model.get("config")), c ? c.getProducts(a) : []
            }, b.getProductFooter = function (a) {
                var b, c;
                return f && (f.destroy(), f = null), b = a.product.getContent("contents.xml"), b && (c = document.createElement("div"), f = h({
                    classes: "accordion-standard accordion-page-downloads",
                    el: c,
                    toggleElement: "h3",
                    toggleText: "Downloads",
                    view: j({model: b, product: a.product, formatter: g})
                }), f.render()), c
            }, b.getProductHeader = function (a) {
                var c, d, e, f, h, j, k, l, m;
                return j = a.product, m = a.summaryModule, c = [], e = b.model.get("event"), l = a.type || j.get("type"), h = e.getPreferredProduct(j.get("type")) === j, k = j.isReviewed(), m && (f = e.getProducts(l).length, c.push('<a class="back-to-summary-link" href="#' + m.ID + '">'), f > 1 ? c.push("View alternative " + b.TITLE.toLowerCase() + "s (" + f + " total)") : c.push("Back to " + m.TITLE), c.push("</a>")), c.push('<small class="attribution">Contributed by ' + i.getProductAttribution(j) + " last updated " + g.datetime(j.get("updateTime")) + "</small>"), c.push('<ul class="quality-statements no-style">'), h ? c.push('<li class="preferred">The data below are the most preferred data available</li>') : c.push('<li class="unpreferred">The data below are <strong>NOT</strong> the most preferred data available</li>'), k === !0 ? c.push('<li class="reviewed">The data below have been reviewed by a scientist</li>') : k === !1 && c.push('<li class="unreviewed">The data below have <strong>NOT</strong> been reviewed by a scientist.</li>'), c.push("</ul>"), d = document.createElement("div"), d.classList.add("product-header"), d.innerHTML = c.join(""), d
            }, b.render = function () {
                b.header.innerHTML = "<h3>Module Header</h3>", b.content.innerHTML = "<h3>Module Content</h3>", b.footer.innerHTML = "<h3>Module Footer</h3>"
            }, c(a), a = null, b
        };
        p.ID = d, p.TITLE = e, p.TYPES = f, p.hasContent = g, b.exports = p
    }, {
        "core/AccordionView": 49,
        "core/Attribution": 50,
        "core/DownloadView": 54,
        "core/Formatter": 56,
        "mvc/View": 42,
        "pdl/Product": 118,
        "util/Util": 44
    }],
    59: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = {mapUrl: "/earthquakes/map/", radius: 250}, f = 111.12, g = function (a) {
            var b, c, g, h;
            return b = {}, c = function (a) {
                a = d.extend({}, e, a), g = a.mapUrl, h = a.radius
            }, b.destroy = function () {
                g = null, h = null, c = null, b = null
            }, b.getLatestEarthquakesLink = function (a) {
                var c, d, e, f, h, i;
                return c = a.eventid || null, f = a.params, d = c || "" + (new Date).getTime(), e = b.getMapPosition(f), h = {
                    autoUpdate: !1,
                    basemap: "terrain",
                    event: c,
                    feed: d,
                    mapposition: e,
                    search: {id: d, isSearch: !0, name: "Search Results", params: f}
                }, i = g + "#" + encodeURIComponent(JSON.stringify(h))
            }, b.getMapPosition = function (a) {
                var b, c, d, e, g, h, i, j, k;
                return e = a.maxlatitude || 85, g = a.maxlongitude || 180, i = a.minlatitude || -85, j = a.minlongitude || -180, b = a.latitude, c = a.longitude, h = a.maxradiuskm, !b && 0 !== b || !c && 0 !== c || !h && 0 !== h || (k = h / f, e = b + k, g = c + k, i = b - k, j = c - k), d = [[i, j], [e, g]]
            }, b.getNearbySeismicityLink = function (a) {
                var c;
                return c = b.getNearbySeismicityParams(a), b.getLatestEarthquakesLink({eventid: a.id, params: c})
            }, b.getNearbySeismicityParams = function (a) {
                var b, c, d, e, f, g, i, j, k;
                return c = a.latitude, d = a.longitude, e = a.magnitude, k = a.time, c && d && k ? (f = 1, null !== e && (f = Math.max(Math.floor(e) - 3, 1)), i = 18144e5, k = new Date(k).getTime(), j = new Date(k - i).toISOString(), b = new Date(k + i).toISOString(), g = {
                    endtime: b,
                    latitude: c,
                    longitude: d,
                    maxradiuskm: h,
                    minmagnitude: f,
                    starttime: j
                }) : !1
            }, c(a), a = null, b
        };
        g.KM_PER_DEGREE = f, b.exports = g
    }, {"util/Util": 44}],
    60: [function (a, b, c) {
        "use strict";
        var d = a("pdl/Product"), e = a("mvc/View"), f = function (a) {
            var b;
            return a = a || {}, a.model = a.model || d(), b = e(a), a = null, b
        };
        b.exports = f
    }, {"mvc/View": 42, "pdl/Product": 118}],
    61: [function (a, b, c) {
        "use strict";
        var d = a("core/LinkProductView"), e = a("core/Module"), f = a("pdl/Product"), g = a("core/TextProductView"), h = a("util/Util"), i = {}, j = function (a) {
            var b, c;
            return a = h.extend({}, i, a), b = e(a), c = function () {
                b.clearLinks(!0), b.clearTexts(!0)
            }, b.clearViews = function (a) {
                a && a.forEach(function (a) {
                    a.destroy()
                })
            }, b.clearLinks = function (a) {
                b.clearViews(b.linkViews), a ? b.linkViews = [] : b.linkViews = null
            }, b.clearTexts = function (a) {
                b.clearViews(b.textViews, a), a ? b.textViews = [] : b.textViews = null
            }, b.createRow = function (a) {
                var b;
                return b = document.createElement("tr"), a && b.classList.add("preferred"), b
            }, b.createSummary = function (a, b, c, d) {
                var e, f, g, h, i, j;
                return e = document.createDocumentFragment(), a.length && c.length && (f = e.appendChild(document.createElement("h3")), j = e.appendChild(document.createElement("div")), g = j.appendChild(document.createElement("table")), i = g.appendChild(document.createElement("thead")), h = g.appendChild(document.createElement("tbody")), f.innerHTML = b, j.classList.add("horizontal-scrolling"), g.classList.add("table-summary"), i.innerHTML = '<tr><th scope="col">' + c.join('</th><th scope="col">') + "</th></tr>", h.appendChild(a.reduce(function (a, b, c) {
                    return a.appendChild(d(b, c)), a
                }, document.createDocumentFragment()))), e
            }, b.destroy = h.compose(function () {
                null !== b && (b.clearLinks(), b.clearTexts(), c = null, b = null)
            }, b.destroy), b.getCatalogMarkup = function (a, b, c) {
                var d, e;
                return d = [], e = f.getBaseType(b.get("type")), c && d.push('<abbr title="Preferred ' + e + '" class="material-icons">check</abbr>'), d.push('<a href="#' + a.ID + "?source=" + b.get("source") + "&amp;code=" + b.get("code") + '">' + (b.getProperty("eventsource") || "N/A").toUpperCase() + "</a>"), d.join("")
            }, b.getLinks = function (a) {
                var c, e;
                return c = document.createDocumentFragment(), a.length && (c.appendChild(b.getLinksHeader()), e = c.appendChild(document.createElement("ul")), a.forEach(function (a) {
                    var c;
                    c = d({el: e.appendChild(document.createElement("li")), model: a}), c.render(), b.linkViews.push(c)
                })), c
            }, b.getLinksHeader = function () {
                var a;
                return a = document.createElement("h3"), a.innerHTML = "Related Links", a
            }, b.getTexts = function (a) {
                var c;
                return c = document.createDocumentFragment(), a.forEach(function (a) {
                    var d;
                    d = g({el: c.appendChild(document.createElement("div")), model: a}), d.render(), b.textViews.push(d)
                }), c
            }, c(a), a = null, b
        };
        b.exports = j
    }, {
        "core/LinkProductView": 57,
        "core/Module": 58,
        "core/TextProductView": 62,
        "pdl/Product": 118,
        "util/Util": 44
    }],
    62: [function (a, b, c) {
        "use strict";
        var d = a("core/ContentView"), e = a("core/ProductView"), f = a("util/Util"), g = {contentPath: ""}, h = function (a) {
            var b, c, h, i;
            return a = f.extend({}, g, a), b = e(a), c = function (a) {
                b.el.classList.add(b.model.get("type")), b.el.classList.add("text-product"), h = b.model.getContent(a.contentPath), h && (i = d({
                    el: b.el,
                    model: h
                }), i.onSuccess = b.onSuccess, i.onError = b.onError)
            }, b.destroy = f.compose(function () {
                i && i.destroy(), h = null, i = null, c = null, b = null
            }, b.destroy), b.onError = function () {
                b.el.innerHTML = '<p class="alert error">No text content to render.</p>'
            }, b.onSuccess = function (a) {
                b.el.innerHTML = b.replaceRelativePaths(a, b.model.get("contents").data())
            }, b.render = function () {
                b.el.innerHTML = '<p class="alert info">Loading content&hellip;</p>', i ? i.render() : b.onError()
            }, b.replaceRelativePaths = function (a, b) {
                var c, d, e;
                for (e = b.length, d = 0; e > d; d++)c = b[d].get(), "" !== c.id && (a = a.replace(new RegExp('"' + c.id + '"', "g"), '"' + c.url + '"'));
                return a
            }, c(a), a = null, b
        };
        b.exports = h
    }, {"core/ContentView": 52, "core/ProductView": 60, "util/Util": 44}],
    63: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h, i = a("dyfi/DYFIFormView"), j = a("util/Events"), k = a("mvc/ModalView"), l = a("mvc/Model"), m = a("core/Module"), n = a("util/Util"), o = a("util/Xhr");
        d = "tellus", e = "Felt Report - Tell Us!", g = function (a) {
            var b;
            return b = document.createElement("html"), b.innerHTML = a, b.querySelector("dl").outerHTML
        }, h = function (a) {
            var b, c;
            return c = a.indexOf("<dl>"), b = a.indexOf("</dl>"), -1 === c || -1 === b ? null : a.substring(c, b) + "</dl>"
        }, f = function (a) {
            var b;
            return b = a.get("config"), b.hasOwnProperty("SCENARIO_MODE") ? !b.SCENARIO_MODE : !0
        };
        var p = {DYFI_RESPONSE_URL: "/products/dyfi/response.html", FORM_VERSION: "1.5"}, q = function (a) {
            var b, c, f, q, r, s, t, u, v;
            return a = n.extend({}, p, a), b = m(a), c = function (a) {
                var c, g, h;
                b.ID = d, b.TITLE = e, g = b.model.get("config"), u = g && g.DYFI_RESPONSE_URL ? g.DYFI_RESPONSE_URL : a.DYFI_RESPONSE_URL, t = null, q = a.FORM_VERSION, b.content.addEventListener("click", b.onContentClick), c = b.model.get("event"), c && (h = c.getTime()), f = l({
                    eventTime: h ? h.toUTCString() : "",
                    language: "en"
                }), f.on("change", "onFormChange", b), v = i({model: f}), v.render(), r = k(v.el, {
                    buttons: [{
                        callback: b.onSubmit,
                        classes: ["green", "dyfi-submit-button"],
                        text: "Submit"
                    }, {callback: b.onCancel, classes: ["dyfi-cancel-button"], text: "Cancel"}], title: null
                })
            }, b.destroy = n.compose(function () {
                b.content.removeEventListener("click", b.onContentClick), f.off("change", "onFormChange", b), r.hide(), r.destroy(), v.destroy(), f.destroy(), f = null, q = null, r = null, t = null, u = null, v = null, c = null, b = null
            }, b.destroy), b.onCancel = function () {
                r.hide(), j.trigger("back")
            }, b.onContentClick = function (a) {
                a.target && a.target.classList.contains("show-form") && b.showForm()
            }, b.onFormChange = function () {
                s && (f.get("ciim_mapLat") && f.get("ciim_mapLon") && f.get("ciim_time") && f.get("fldSituation_felt") ? s.removeAttribute("disabled") : s.setAttribute("disabled", "disabled"))
            }, b.onSubmit = function () {
                var a, c;
                t = null, c = b.model.get("event"), a = n.extend({
                    eventid: c ? c.getEventId() : null,
                    form_version: q,
                    ciim_report: "Submit Form"
                }, f.get()), o.ajax({
                    method: "POST",
                    data: a,
                    error: b.onSubmitError,
                    url: u,
                    success: b.onSubmitSuccess
                }), r.hide()
            }, b.onSubmitError = function (a) {
                t = {error: a}, b.render()
            }, b.onSubmitSuccess = function (a) {
                var c;
                try {
                    c = g(a)
                } catch (d) {
                    c = h(a)
                }
                t = c ? {success: c} : {error: "Required entries not provided! Please re-submit the form after answering all required questions."}, b.render()
            }, b.render = function () {
                var a;
                a = '<button class="show-form">Show Form</button>', b.header.innerHTML = "<h3>" + b.TITLE + "</h3>", b.footer.innerHTML = "", t && (t.error || t.success) ? t.error ? b.content.innerHTML = '<p class="alert error">' + t.error + "</p>" + a : b.content.innerHTML = ["<h3>Questionnaire Complete</h3>", '<p class="alert success">', "Thank you for your contribution. ", "Your information will be processed shortly.", "</p>", t.success].join("") : (b.content.innerHTML = a, b.showForm())
            }, b.showForm = function () {
                r.show(), s = document.querySelector(".dyfi-submit-button"), b.onFormChange()
            }, c(a), a = null, b
        };
        q.ID = d, q.TITLE = e, q.hasContent = f, b.exports = q
    }, {
        "core/Module": 58,
        "dyfi/DYFIFormView": 65,
        "mvc/ModalView": 39,
        "mvc/Model": 40,
        "util/Events": 43,
        "util/Util": 44,
        "util/Xhr": 45
    }],
    64: [function (a, b, c) {
        "use strict";
        var d = a("core/BasicPinView"), e = a("dyfi/DYFIFormModule"), f = a("core/Formatter"), g = a("util/Util"), h = {module: e}, i = function (a) {
            var b, c, e;
            return a = g.extend({}, h, a), b = d(a), c = function (a) {
                e = a.formatter || f()
            }, b.destroy = g.compose(function () {
                null !== b && (e = null, c = null, b = null)
            }, b.destroy), b.renderPinContent = function () {
                var a, c, d, f, g;
                a = [], d = b.model.getProperty("num-responses") || b.model.getProperty("numResp") || "0", c = e.numberWithCommas(d), d = e.leftPad(d.toString(), 6, "0"), f = !0;
                for (var h = 0, i = d.length; i > h; h += 1)g = d.charAt(h), "0" === g && f ? a.push('<div class="responses-digit empty-digit">0</div>') : (f = !1, a.push('<div class="responses-digit">', g, "</div>"));
                b.content.innerHTML = '<div class="dyfi-responses-badge" title="Number of DYFI Responses">' + a.join("") + '</div><div class="dyfi-responses-abbr"><abbr title="' + c + ' DYFI Responses">Responses</abbr></div><small class="disclaimer">Contribute to citizen science. Please <a href="#tellus">tell us</a> about your experience.</small>'
            }, b.renderPinFooter = function () {
                b.footer.innerHTML = "Citizen Scientist Contributions"
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"core/BasicPinView": 51, "core/Formatter": 56, "dyfi/DYFIFormModule": 63, "util/Util": 44}],
    65: [function (a, b, c) {
        "use strict";
        var d = a("util/Events"), e = a("core/Formatter"), f = a("locationview/LocationView"), g = a("mvc/Model"), h = a("mvc/ModalView"), i = a("questionview/QuestionView"), j = a("dyfi/TextQuestionView"), k = a("util/Util"), l = a("mvc/View"), m = a("util/Xhr"), n = {
            eventTime: null,
            language: "en",
            url: "js/languages/"
        }, o = '<p class="alert info">This form is subject to the Privacy Act of 1974.</p><p><strong>Authority</strong><br/>The National Earthquake Hazards Reduction Program (NEHRP), which was first authorized in 1977, Public Law (PL) 95â€“124), and most recently reauthorized in 2004 (NEHRP Reauthorization Act of 2004, PL 108â€“360</p><p><strong>Principal Purpose</strong><br/>The Earthquake Hazards Program provides rapid, authoritative information on earthquakes and their impact to emergency responders, governments, facilities managers and researchers across the country.</p><p><strong>Routine Use</strong><br/>Used to allow users to report shaking intensity of earthquake events, to allow users to receive notifications of earthquake events, and to allow users to volunteer to have seismic instrumentation installed on their property.</p><p><strong>Disclosure is Voluntary</strong><br/>If the individual does not furnish the information requested, there will be no adverse consequences. However, if you do not provide contact information we may be unable to contact you for additional information to verify your responses.</p><p><strong>Privacy Act Statement</strong><br/>You are not required to provide your personal contact information inorder to submit your survey. However, if you do not provide contactinformation, we may be unable to contact you for additional informationto verify your responses. If you do provide contact information, thisinformation will only be used to initiate follow-up communications withyou. The records for this collection will be maintained in theappropriate Privacy Act System of Records identified as EarthquakeHazards Program Earthquake Information. (INTERIOR/USGS-2) publishedat 74 FR 34033 (July 14,2009).</p><p><strong>Paperwork Reduction Act Statement</strong><br/>The Paperwork Reduction Act of 1995 (44 U.S.C. 3501 et. seq.) requires us to inform you that this information is being collected to supplement instrumental data and to promote public safety through better understanding of earthquakes. Response to this request is voluntary. Public reporting for this form is estimated to average 6 minutes per response, including the time for reviewing instructions and completing the form. A Federal agency may not conduct or sponsor, and a person is not required to respond to, a collection of information unless it displays a currently valid OMB Control Number. Comments regarding this collection of information should be directed to: Bureau Clearance officer, U.S. Geological Survey, 807 National Center, Reston, VA 20192.</p>', p = function (a) {
            var b, c, p, q, r, s, t, u, v, w;
            return b = l(a), c = function (a) {
                a = k.extend({}, n, a || {}), p = {}, q = null, r = a.formatter || e(), u = null, v = {}, w = a.url, b.model.get("language") || b.model.set({language: a.language}, {silent: !0}), b.model.get("eventTime") ? b.model.set({ciim_time: b.model.get("eventTime")}, {silent: !0}) : b.model.set({eventTime: a.eventTime}, {silent: !0})
            }, b.addQuestionListeners = function () {
                for (var a in v)v[a].on("change", b.updateModel)
            }, b.createForm = function () {
                var a, c, d, e, f, g, i, j, k, l, m, n, p;
                a = b.el, j = q.baseQuestions, k = q.contactInfo, l = q.eventTime, m = q.moreQuestions, n = q.locationInfo, p = q.toggleInfo, f = a.appendChild(document.createElement("header")), f.classList.add("dyfi-form-header"), c = a.appendChild(document.createElement("div")), c.classList.add("dyfi-required-questions"), i = a.appendChild(document.createElement("div")), i.classList.add("dyfi-optional-callout"), i.classList.add("alert"), i.classList.add("info"), g = a.appendChild(document.createElement("div")), g.classList.add("dyfi-optional-questions"), d = document.createElement("div"), d.classList.add("dyfi-contact-questions"), d.classList.add("alert"), e = document.createElement("a"), f.innerHTML = '<h2 class="felt-header">Felt Report - Tell Us!</h2><div class="omb-number">OMB No. 1028-0048<br/>Expires 05/31/2018</div>', b.createLocationQuestions(n, c), null === b.model.get("eventTime") && b.createTextQuestion(l, c), b.createQuestions(j, c), b.createToggleControl(p, i), b.createQuestions(m, g), b.createTextQuestion(q.comments, g), d.innerHTML = "<legend>Contact Information <small>(optional)</small></legend>", b.createTextQuestion(k, d), g.appendChild(d), e.className = "dyfi-disclaimer", e.href = "/research/dyfi/disclaimer.php#DYFIFormDisclaimer", e.innerHTML = "PRA - Privacy Statement", e.addEventListener("click", function (a) {
                    var b = h(o, {
                        title: "PRA - Privacy Statement",
                        closable: !1,
                        buttons: [{
                            text: "OK", classes: ["green"], callback: function () {
                                b.hide(), b.destroy(), b = null
                            }
                        }]
                    });
                    b.show(), a.preventDefault()
                }), d.appendChild(e), b.synchQuestionAnswers(), b.addQuestionListeners()
            }, b.createLocationQuestions = function (a, c) {
                var e, h, i;
                i = document.createElement("section"), e = i.appendChild(document.createElement("fieldset")), h = e.appendChild(document.createElement("legend")), t = e.appendChild(document.createElement("div")), s = e.appendChild(document.createElement("button")), i.classList.add("question"), h.innerHTML = a.label, s.innerHTML = a.button, s.classList.add("location-button"), v.ciim_mapLat = d(), v.ciim_mapLat.model = g({field: "ciim_mapLat"}), v.ciim_mapLat.getAnswers = function () {
                    return {value: p.latitude}
                }, v.ciim_mapLat.setAnswers = function (a) {
                    p.latitude = a
                }, v.ciim_mapLon = d(), v.ciim_mapLon.model = g({field: "ciim_mapLon"}), v.ciim_mapLon.getAnswers = function () {
                    return {value: p.longitude}
                }, v.ciim_mapLon.setAnswers = function (a) {
                    p.longitude = a
                }, v.ciim_mapConfidence = d(), v.ciim_mapConfidence.model = g({field: "ciim_mapConfidence"}), v.ciim_mapConfidence.getAnswers = function () {
                    return {value: p.confidence}
                }, v.ciim_mapConfidence.setAnswers = function () {
                }, v.ciim_mapAddress = d(), v.ciim_mapAddress.model = g({field: "ciim_mapAddress"}), v.ciim_mapAddress.getAnswers = function () {
                    return {value: p.place}
                }, v.ciim_mapAddress.setAnswers = function () {
                }, u = f({callback: b.locationCallback}), s.addEventListener("click", function () {
                    u.show({initialLocation: p})
                }), c.appendChild(i)
            }, b.createQuestions = function (a, b) {
                var c = null, d = null;
                for (c in a)d = i(k.extend({el: document.createDocumentFragment()}, a[c], {model: g({field: c})})), v[c] = d, b.appendChild(d.el)
            }, b.createTextQuestion = function (a, b) {
                var c = null, d = null;
                for (c in a)d = j(k.extend({el: document.createDocumentFragment()}, a[c], {model: g({field: c})})), v[c] = d, b.appendChild(d.el)
            }, b.createToggleControl = function (a, b) {
                b.innerHTML = a.description
            }, b.destroy = k.compose(function () {
                null !== v && (b.destroyForm(), v = null), b = null
            }, b.destroy), b.destroyForm = function () {
                for (var a in v)v[a].off("change"), v[a].destroy()
            }, b.getQuestions = function () {
                return v
            }, b.render = function (a) {
                !a || a.hasOwnProperty("language") ? b.renderQuestions() : b.updateAnswer(a)
            }, b.locationCallback = function (a) {
                var b, c = [], d = null, e = null;
                p = a, b = -1 === p.confidence ? 0 : p.confidence, d = p.latitude, d = 0 > d ? (-1 * d).toFixed(b) + "&deg;S" : d.toFixed(b) + "&deg;N", e = p.longitude, e = 0 > e ? (-1 * e).toFixed(b) + "&deg;W" : e.toFixed(b) + "&deg;E", null !== p.place && c.push(p.place + "<br/>"), t.classList.add("location-result", "alert", "success"), t.innerHTML = '<span class="address">' + (p.place ? p.place + "</span>" : "") + '<span class="coordinates">' + d + ", " + e + (p.place ? "" : "</span>"), s.innerHTML = q.locationInfo.buttonUpdate, v.ciim_mapLat.trigger("change", v.ciim_mapLat), v.ciim_mapLon.trigger("change", v.ciim_mapLon)
            }, b.renderQuestions = function () {
                var a;
                a = b.model.get("language"), m.ajax({
                    url: w + a + ".json", success: function (a) {
                        null !== q && b.destroyForm(), q = a, b.createForm()
                    }, error: function (a) {
                        console.log(a)
                    }
                })
            }, b.updateModel = function (a) {
                var c, d;
                d = a.model.get("field"), c = a.getAnswers(), b.model.set(b.stripAnswer(d, c))
            }, b.updateAnswer = function (a) {
                var b;
                for (b in a)v[b].setAnswers(a[b])
            }, b.synchQuestionAnswers = function () {
                var a;
                for (a in v)b.model.hasOwnProperty(a) && v[a].set(b.model.get(a))
            }, b.stripAnswer = function (a, b) {
                var c, d, e;
                if (c = {}, b instanceof Array)for (c[a] = [], d = 0; d < b.length; d++)c[a].push(b[d].value); else b instanceof Object && void 0 !== b.value ? (c[a] = b.value, "_Other" === b.value && (e = a + "_Other", c[e] = b.otherValue)) : c[a] = "";
                return c
            }, c(a), a = null, b
        };
        b.exports = p
    }, {
        "core/Formatter": 56,
        "dyfi/TextQuestionView": 72,
        "locationview/LocationView": 27,
        "mvc/ModalView": 39,
        "mvc/Model": 40,
        "mvc/View": 42,
        "questionview/QuestionView": 29,
        "util/Events": 43,
        "util/Util": 44,
        "util/Xhr": 45
    }],
    66: [function (a, b, c) {
        "use strict";
        var d = a("core/ContentView"), e = a("d3"), f = a("d3/D3LineView"), g = a("d3/D3View"), h = a("dyfi/StandardDeviationLineView"), i = a("util/Util"), j = function (a) {
            var b, c;
            return b = d(a), b.buildLineView = function (a) {
                var d = f({
                    view: c,
                    showPoints: a.showPoints ? a.showPoints : !1,
                    data: b.parseDataIntoArray(a.data),
                    className: a["class"],
                    label: a.legend,
                    showLegendPoint: !1
                });
                c.views.add(d)
            }, b.buildMedianDataView = function (a) {
                var d = f({
                    view: c,
                    showLine: !1,
                    data: b.parseDataIntoArray(a.data),
                    className: a["class"],
                    label: a.legend,
                    pointRadius: 3
                });
                c.views.add(d)
            }, b.buildScatterPlotView = function (a) {
                var d = f({
                    view: c,
                    showLine: !1,
                    data: b.parseDataIntoArray(a.data),
                    className: a["class"],
                    label: a.legend,
                    pointRadius: 2
                });
                c.views.add(d)
            }, b.buildStandardDeviationLineView = function (a) {
                var d = h({
                    view: c,
                    data: b.parseDataIntoArray(a.data),
                    histogram: a.data,
                    className: a["class"],
                    label: a.legend,
                    pointRadius: 5,
                    showLine: !1
                });
                c.views.add(d)
            }, b.destroy = i.compose(function () {
                var a;
                null !== b && (c && (a = c.views.data(), c.views.reset([], {silent: !0}), a.forEach(function (a) {
                    a.destroy()
                }), c.destroy(), c = null), b = null)
            }, b.destroy), b.getLogTicks = function (a) {
                var b, c, d;
                return b = a[0], c = a[1], d = c > 5e3 ? [50, 100, 500, 1e3, 2e3, 5e3, 1e4] : [10, 20, 30, 40, 50, 100, 200, 300, 400, 500, 1e3, 2e3, 5e3], b > d[0] && (d = d.filter(function (a) {
                    return a > b
                })), c < d[d.length - 1] && (d = d.filter(function (a) {
                    return c > a
                })), d
            }, b.onSuccess = function (d) {
                var f;
                f = d.datasets, f && f.length && f.length > 0 ? (c = g(i.extend({
                    title: "Intensity vs. Distance Plot",
                    xLabel: "Hypocentral Distance (km)",
                    yLabel: "Intensity (mmi)",
                    xAxisScale: e.scale.log(),
                    xAxisFormat: function (a) {
                        return a
                    },
                    xAxisTicks: b.xAxisTicks,
                    yAxisTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    yExtent: [1, 10],
                    marginTop: 10,
                    marginLeft: 10,
                    paddingLeft: 70
                }, a)), b.el.innerHTML = "", b.el.classList.add("IntensityGraphView"), b.el.appendChild(c.el), b.parseData(f)) : b.el.innerHTML = '<p class="alert warning">Intensity vs. Distance data does not exist.</p>'
            }, b.parseData = function (a) {
                a.forEach(function (a) {
                    ("estimated1" === a["class"] || "estimated2" === a["class"]) && b.buildLineView(a), "scatterplot1" === a["class"] && b.buildScatterPlotView(a), "median" === a["class"] && b.buildMedianDataView(a), "binned" === a["class"] && b.buildStandardDeviationLineView(a)
                })
            }, b.parseDataIntoArray = function (a) {
                var b;
                return b = [], a.forEach(function (a) {
                    b.push([a.x, a.y])
                }), b
            }, b.xAxisTicks = function (a) {
                var c, d, e, f, g;
                return a.length < 1 ? null : (e = a[0], f = a[a.length - 1], c = Math.log(e) / Math.LN10, d = Math.log(f) / Math.LN10, 1 > d - c ? g = [Math.round(1e3 * e) / 1e3, Math.round(1e3 * f) / 1e3] : d - c > 1.5 ? g = b.getLogTicks(a) : null)
            }, a = null, b
        };
        b.exports = j
    }, {
        "core/ContentView": 52,
        d3: 1,
        "d3/D3LineView": 4,
        "d3/D3View": 7,
        "dyfi/StandardDeviationLineView": 71,
        "util/Util": 44
    }],
    67: [function (a, b, c) {
        "use strict";
        var d, e, f, g = a("dyfi/DYFIFormModule"), h = a("dyfi/DYFIView"), i = a("impact/ImpactSummaryModule"), j = a("core/Module"), k = a("util/Util");
        d = "dyfi", e = "Did You Feel It?", f = ["dyfi"];
        var l = {}, m = function (a) {
            var b, c, f;
            return a = k.extend({}, l, a), b = j(a), c = function () {
                b.ID = d, b.TITLE = e
            }, b.destroy = k.compose(function () {
                f && f.destroy(), f = null, c = null, b = null
            }, b.destroy), b.render = function () {
                b.renderHeader(), b.renderContent(), b.renderFooter()
            }, b.renderContent = function () {
                var a;
                a = b.getProduct("dyfi"), a ? (f && f.destroy && (f.destroy(), f = null), f = h({
                    el: b.content,
                    model: a
                }), f.render()) : b.content.innerHTML = '<p class="alert error">No DYFI Found!</p>'
            }, b.renderFooter = function () {
                var a, c;
                b.footer.innerHTML = ["<h3>For More Information</h3>", "<ul>", "<li>", '<a href="/data/dyfi/">', "Scientific Background for Did You Feel It?", "</a>", "</li>", "</ul>"].join(""), c = b.getProduct("dyfi"), c && (a = b.getProductFooter({product: c}), a && b.footer.appendChild(a))
            }, b.renderHeader = function () {
                var a;
                b.header.innerHTML = '<h3 class="dyfi-title">' + b.TITLE + '</h3><a class="tell-us-link" href="#' + g.ID + '">' + g.TITLE + "</a>", a = b.getProduct("dyfi"), a && b.header.appendChild(b.getProductHeader({
                    product: a,
                    summaryModule: i
                }))
            }, c(a), a = null, b
        };
        m.ID = d, m.TITLE = e, m.TYPES = f, b.exports = m
    }, {
        "core/Module": 58, "dyfi/DYFIFormModule": 63, "dyfi/DYFIView": 70, "impact/ImpactSummaryModule": 87,
        "util/Util": 44
    }],
    68: [function (a, b, c) {
        "use strict";
        var d = a("core/BasicPinView"), e = a("dyfi/DYFIModule"), f = a("core/Formatter"), g = a("util/Util"), h = {module: e}, i = function (a) {
            var b, c, e;
            return a = g.extend({}, h, a), b = d(a), c = function (a) {
                e = a.formatter || f()
            }, b.renderPinContent = function () {
                var a, c;
                a = b.model.get("code"), c = b.model.getContent("pin-thumbnail.png"), c || (c = b.model.getContent(a + "_ciim.jpg")), c ? b.content.innerHTML = '<img src="' + c.get("url") + '" class="dyfi-intensity-map" alt="DYFI Intensity Map"/>' : b.content.innerHTML = '<p class="alert warning">Could not load DYFI intensity map</p>'
            }, b.renderPinHeader = g.compose(b.renderPinHeader, function () {
                b.header.insertAdjacentHTML("beforeend", e.intensity(b.model.getProperty("maxmmi"), null))
            }), c(a), a = null, b
        };
        b.exports = i
    }, {"core/BasicPinView": 51, "core/Formatter": 56, "dyfi/DYFIModule": 67, "util/Util": 44}],
    69: [function (a, b, c) {
        "use strict";
        var d = a("mvc/Collection"), e = a("core/ContentView"), f = a("mvc/DataTable"), g = a("core/Formatter"), h = a("util/Util"), i = '<p class="alert error">No Responses available.</p>', j = g(), k = [{
            className: "dyfi-response-location",
            title: "Location",
            downloadTitle: "City	State/Region	Country	Zip Code",
            format: function (a) {
                return j.dyfiLocation(a)
            },
            downloadFormat: function (a) {
                var b, c, d, e;
                return b = a.country, c = a.name, d = a.state, e = a.zip, [c, d, b, e].join("	")
            }
        }, {
            className: "dyfi-response-mmi", title: "MMI", format: function (a) {
                return j.intensity(a.cdi)
            }, downloadFormat: function (a) {
                return j.mmi(a.cdi)
            }
        }, {
            className: "dyfi-response-numResp", title: "Responses", format: function (a) {
                return a.nresp
            }
        }, {
            className: "dyfi-response-distance", title: "Distance", format: function (a) {
                return a.dist + " km"
            }
        }, {
            className: "dyfi-response-latitude", title: "Latitude", format: function (a) {
                return j.latitude(a.lat)
            }, downloadFormat: function (a) {
                return a.lat
            }
        }, {
            className: "dyfi-response-longitude", title: "Longitude", format: function (a) {
                return j.longitude(a.lon)
            }, downloadFormat: function (a) {
                return a.lon
            }
        }], l = [{
            id: "city", title: "City", sortBy: function (a) {
                return a.name
            }
        }, {
            id: "country", title: "Country", sortBy: function (a) {
                return a.country
            }
        }, {
            id: "distance", title: "Distance", sortBy: function (a) {
                return a.dist
            }
        }, {
            id: "mmi", title: "MMI", sortBy: function (a) {
                return a.cdi
            }, descending: !0
        }, {
            id: "state", title: "Region / State", sortBy: function (a) {
                return a.state
            }
        }, {
            id: "numResp", title: "Responses", sortBy: function (a) {
                return a.nresp
            }, descending: !0
        }, {
            id: "zip", title: "Zip Code", sortBy: function (a) {
                return "" !== a.zip ? a.zip : a.name
            }
        }], m = function (a) {
            var b, c, j, m, n, o, p, q;
            return a = a || {}, b = e(a), c = function () {
                j = null, m = a.formatter || g(), n = a.product || null, p = null, q = null
            }, b.addToggleButton = function (a) {
                j = a.appendChild(document.createElement("button")), j.innerHTML = "See All Responses", j.className = "view-all", j.addEventListener("click", b.onToggleButtonClick), a.appendChild(j)
            }, b.buildResponsesCollection = function (a) {
                for (var b, c, e, f, g, h, i = a.getElementsByTagName("location"), j = [], k = 0; k < i.length; k++) {
                    b = i[k].getAttribute("name"), c = i[k].childNodes, e = {id: k, zip: ""};
                    for (var l = 0; l < c.length; l++)f = c[l], g = f.nodeName, h = f.textContent, "name" === g || "state" === g || "country" === g || "zip" === g ? e[g] = h : "cdi" === g || "dist" === g || "lat" === g || "lon" === g ? e[g] = parseFloat(h) : "nresp" === g && (e[g] = parseInt(h, 10));
                    5 === b.length ? (e.country = "United States of America", e.zip = b) : (b = b.split("::"), e.state = b[1], e.country = b[2]), j.push(e)
                }
                return d(j)
            }, b.destroy = h.compose(function () {
                null !== j && j.removeEventListener("click", b.onToggleButtonClick), null !== p && p.destroy(), o && o.destroy(), j = null, c = null, o = null, q = null, p = null, b = null
            }, b.destroy), b.onError = function () {
                b.el.innerHTML = i
            }, b.onSuccess = function (a, c) {
                o = b.buildResponsesCollection(c.responseXML), p = f({
                    el: b.el,
                    className: "dyfi-response-table",
                    collection: o,
                    emptyMarkup: i,
                    columns: k,
                    sorts: l,
                    defaultSort: "distance"
                }), q = b.el.querySelector(".datatable-data"), q.classList.add("horizontal-scrolling"), o.data().length > 10 && b.addToggleButton(b.el)
            }, b.onToggleButtonClick = function () {
                q.classList.contains("full-list") ? (q.classList.remove("full-list"), j.innerHTML = "Show All Responses") : (q.classList.add("full-list"), j.innerHTML = "Show Only 10 Responses")
            }, c(), a = null, b
        };
        m.NO_CONTENT_MESSAGE = i, b.exports = m
    }, {"core/ContentView": 52, "core/Formatter": 56, "mvc/Collection": 34, "mvc/DataTable": 37, "util/Util": 44}],
    70: [function (a, b, c) {
        "use strict";
        var d = a("dyfi/DYFIIntensityGraphView"), e = a("dyfi/DYFIResponsesView"), f = a("map/InteractiveMapView"), g = a("core/ProductView"), h = a("svgimagemap/SvgImageMap"), i = a("tablist/TabList"), j = a("util/Util"), k = {}, l = {
            "intensity-map": {
                title: "Intensity Map",
                suffix: "_ciim.jpg",
                usemap: "imap_base",
                href: "#map?" + f.SHAKEMAP_CONTOURS + "= false&" + f.DYFI_10K_OVERLAY + "=true&" + f.DYFI_DEFAULT_OVERLAY + "=true",
                mapSuffix: "_ciim_imap.html"
            },
            "geocode-map": {
                title: "Geocoded Map",
                suffix: "_ciim_geo.jpg",
                usemap: "imap_geo",
                mapSuffix: "_ciim_geo_imap.html"
            },
            "zoom-map": {
                title: "Zoom Map",
                suffix: "_ciim_zoom.jpg",
                usemap: "imap_zoom",
                mapSuffix: "_ciim_zoom_imap.html"
            },
            "zoom-out-map": {
                title: "Zoom Out Map",
                suffix: "_ciim_zoomout.jpg",
                usemap: "imap_zoomout",
                mapSuffix: "_ciim_zoomout_imap.html"
            },
            "intensity-distance": {
                title: "Intensity Vs. Distance",
                suffix: "_plot_atten.jpg",
                subview: d,
                subviewContent: "dyfi_plot_atten.json"
            },
            "response-time": {title: "Responses Vs. Time", suffix: "_plot_numresp.jpg"},
            "response-list": {title: "DYFI Responses", subview: e, subviewContent: "cdi_zip.xml"}
        }, m = function (a) {
            var b, c, d, e, f;
            return a = j.extend({}, k, a), b = g(a), c = function () {
                b.el.classList.add("dyfi-view"), d = j.extend({}, l, a.resources)
            }, b.createImageTab = function (a) {
                var b, c, d;
                return a.href ? (b = document.createElement("a"), b.setAttribute("href", a.href)) : b = document.createElement("div"), b.className = "dyfi-tablist-image", a.map || (c = b.appendChild(document.createElement("img")), c.setAttribute("alt", a.alt)), {
                    title: a.alt,
                    content: function () {
                        return a.map && (d = h({
                            el: b,
                            imageAlt: a.alt,
                            imageUrl: a.image,
                            mapUrl: a.map,
                            mapName: a.mapName
                        })), b
                    },
                    onDestroy: function () {
                        d && d.destroy && d.destroy()
                    },
                    onSelect: function () {
                        d && d.render ? d.render() : c && c.setAttribute("src", a.image)
                    }
                }
            }, b.createSubViewTab = function (a) {
                var c;
                return c = a.constructor({model: a.content, product: b.model}), {
                    title: a.title,
                    content: c.el,
                    onDestroy: function () {
                        c.destroy()
                    },
                    onSelect: function () {
                        c.render()
                    }
                }
            }, b.createTab = function (a) {
                var c, d, e, f, g;
                return c = b.model.get("code"), d = b.model.getContent(c + a.suffix), e = b.model.getContent(c + a.mapSuffix), f = b.model.getContent(a.subviewContent), a.subview && f ? g = b.createSubViewTab({
                    constructor: a.subview,
                    content: f,
                    title: a.title
                }) : d && (g = b.createImageTab({
                    alt: a.title,
                    href: a.href,
                    image: d.get("url"),
                    map: e ? e.get("url") : null,
                    mapName: a.usemap
                })), g
            }, b.destroy = j.compose(function () {
                e && e.destroy && e.destroy(), d = null, e = null, f = null, c = null, b = null
            }, b.destroy), b.render = function () {
                e && e.destroy && e.destroy(), e = i({
                    el: b.el,
                    tabs: []
                }), f = {}, Object.keys(d).forEach(function (a) {
                    var c, g;
                    c = d[a], g = b.createTab(c), g && (f[a] = e.addTab(g))
                })
            }, c(a), a = null, b
        };
        b.exports = m
    }, {
        "core/ProductView": 60,
        "dyfi/DYFIIntensityGraphView": 66,
        "dyfi/DYFIResponsesView": 69,
        "map/InteractiveMapView": 96,
        "svgimagemap/SvgImageMap": 30,
        "tablist/TabList": 31,
        "util/Util": 44
    }],
    71: [function (a, b, c) {
        "use strict";
        var d = a("d3"), e = a("d3/ClassList"), f = a("d3/D3LineView"), g = a("d3/D3SubView"), h = a("util/Util"), i = function (a) {
            var b, c, i, j, k, l, m, n, o, p;
            return b = g(a), c = function (a) {
                e.polyfill(b.el), b.el.classList.add("StandardDeviationLineView"), j = d.select(b.el), k = j.append("g"), n = f(h.extend({}, a, {
                    el: j.append("g").node(),
                    legend: b.legend
                })), i = a.histogram
            }, b.render = function () {
                o = b.view.model.get("xAxisScale"), p = b.view.model.get("yAxisScale"), n.render(), k.selectAll("*").remove(), 0 !== i.length && (i.forEach(function (a) {
                    var b, c, d, e, f;
                    0 !== a.stdev && (f = 6, b = k.append("path").attr("class", "standard-deviation"), e = o(a.x), c = p(a.y - a.stdev), d = p(a.y + a.stdev), b.attr("d", "M " + (e - f) + " " + c + "L " + (e + f) + " " + c + "M " + (e - f) + " " + d + "L " + (e + f) + " " + d + "M " + e + " " + c + "L " + e + " " + d))
                }), n.legend && (e.polyfill(b.legend), l = d.select(b.legend), m = l.select("path"), m.attr("d", "M 1  -3 L 24 -3M 1  -9 L 1   3M 24 -9 L 24  3").attr("class", "standard-deviation")))
            }, b.destroy = h.compose(function () {
                null !== b && (n && n.destroy(), i = null, j = null, k = null, l = null, m = null, n = null, o = null, p = null, c = null, b = null)
            }, b.destroy), c(a), a = null, b
        };
        b.exports = i
    }, {d3: 1, "d3/ClassList": 3, "d3/D3LineView": 4, "d3/D3SubView": 5, "util/Util": 44}],
    72: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = a("mvc/View"), f = {
            type: "input",
            label: null,
            placeholder: "",
            value: null
        }, g = 0, h = function (a) {
            var b, c, h, i;
            return a = d.extend({}, f, a), b = e(a), c = function (a) {
                var c, d;
                c = "text-input-" + ++g, d = document.createElement("section"), i = d.appendChild(document.createElement("label")), h = d.appendChild(document.createElement(a.type)), d.classList.add("question"), d.classList.add("text-input"), i.setAttribute("for", c), h.id = c, "input" === a.type && h.setAttribute("type", "text"), a.placeholder && h.setAttribute("placeholder", a.placeholder), i.innerHTML = a.label, h.value = a.value || "", b.el.appendChild(d), h.addEventListener("change", b.onChange)
            }, b.destroy = d.compose(function () {
                h.removeEventListener("change", b.onChange), h = null, i = null, c = null, b = null
            }, b.destroy), b.getAnswers = function () {
                return {value: h.value || null, label: i.innerHTML}
            }, b.onChange = function () {
                b.trigger("change", b)
            }, b.setAnswers = function (a) {
                h.value = a || ""
            }, c(a), a = null, b
        };
        b.exports = h
    }, {"mvc/View": 42, "util/Util": 44}],
    73: [function (a, b, c) {
        "use strict";
        var d, e, f, g = a("pdl/CatalogEvent"), h = a("dyfi/DYFIFormModule"), i = a("core/EventPage");
        e = {
            event: g(EventDetails),
            config: EventConfig,
            el: document.querySelector(".page-content"),
            nav: document.querySelector(".site-sectionnav")
        }, EventConfig.unknownEvent && (e.modules = [[h]]), d = i(e), f = OffCanvas.getOffCanvas(), d.on("render", function () {
            f.hide()
        })
    }, {"core/EventPage": 55, "dyfi/DYFIFormModule": 63, "pdl/CatalogEvent": 116}],
    74: [function (a, b, c) {
        "use strict";
        var d, e, f, g = a("finite-fault/FiniteFaultView"), h = a("core/Module"), i = a("scientific/ScientificSummaryModule"), j = a("util/Util");
        d = "finite-fault", e = "Finite Fault", f = ["finite-fault"];
        var k = function (a) {
            var b, c, f;
            return a = j.extend({}, a), b = h(a), c = function () {
                b.ID = d, b.TITLE = e
            }, b.destroy = j.compose(function () {
                f && (f.destroy(), f = null), c = null, b = null
            }, b.destroy), b.render = function () {
                var a, c;
                f && f.destroy && (f.destroy(), f = null), b.header.innerHTML = "<h3>Finite Fault</h3>", j.empty(b.content), j.empty(b.footer), c = b.getProduct("finite-fault"), c ? (b.header.appendChild(b.getProductHeader({
                    product: c,
                    summaryModule: i
                })), f = g({
                    el: b.content,
                    model: c
                }), f.render(), a = b.getProductFooter({product: c}), a && b.footer.appendChild(a)) : b.content.innerHTML = '<p class="alert warning">No Finite Fault Found</p>'
            }, c(), a = null, b
        };
        k.ID = d, k.TITLE = e, k.TYPES = f, b.exports = k
    }, {
        "core/Module": 58,
        "finite-fault/FiniteFaultView": 76,
        "scientific/ScientificSummaryModule": 119,
        "util/Util": 44
    }],
    75: [function (a, b, c) {
        "use strict";
        var d = a("core/BasicPinView"), e = a("finite-fault/FiniteFaultModule"), f = a("util/Util"), g = {module: e}, h = function (a) {
            var b;
            return a = f.extend({}, g, a), b = d(a), b.getSlipImage = function (a) {
                var b, c, d;
                return b = a.get("properties").eventsourcecode, c = a.getContent("web/" + b + "_slip2.png"), c = c || a.getContent("web1/" + b + "_slip2.png"), c = c || a.getContent("web2/" + b + "_slip2.png"), c || (d = a.get("contents"), d = d ? d.getIds() : {}, d = Object.keys(d), d.some(function (b) {
                    return -1 !== b.indexOf("slip") ? (c = a.getContent(b), !0) : void 0
                })), c
            }, b.renderPinContent = function () {
                var a, c;
                try {
                    a = b.getSlipImage(b.model), c = '<span>Cross-section of slip distribution</span><img src="' + a.get("url") + '" class="finite-fault-cross-section"  alt="Cross-section of slip distribution"/>'
                } catch (d) {
                    c = '<p class="alert error">Could not load cross-section of slip distribution</p>'
                }
                b.content.innerHTML = c
            }, a = null, b
        };
        b.exports = h
    }, {"core/BasicPinView": 51, "finite-fault/FiniteFaultModule": 74, "util/Util": 44}],
    76: [function (a, b, c) {
        "use strict";
        var d = a("core/TextProductView"), e = a("util/Util"), f = {}, g = function (a) {
            var b;
            return a = e.extend({contentPath: a.model ? a.model.getProperty("eventsourcecode") + ".html" : ""}, f, a), b = d(a), a = null, b
        };
        b.exports = g
    }, {"core/TextProductView": 62, "util/Util": 44}],
    77: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("core/Formatter"), i = a("core/Module"), j = a("focal-mechanism/FocalMechanismView"), k = a("scientific/ScientificSummaryModule"), l = a("util/Util");
        e = "focal-mechanism", f = "Focal Mechanism", g = ["focal-mechanism"], d = {formatter: null};
        var m = function (a) {
            var b, c, g, m;
            return b = i(a), c = function (a) {
                a = l.extend({}, d, a), g = a.formatter || h(), b.ID = e, b.TITLE = f
            }, b.destroy = l.compose(function () {
                m && m.destroy(), m = null, g = null, c = null, b = null
            }, b.destroy), b.render = function () {
                var a;
                a = b.getProduct("focal-mechanism"), b.renderHeader(a), b.renderContent(a), b.renderFooter(a)
            }, b.renderContent = function (a) {
                m && m.destroy && (m.destroy(), m = null), a ? (m = j({
                    el: b.content,
                    formatter: g,
                    model: a
                }), m.render()) : b.content.innerHTML = '<p class="alert error">No Focal Mechanism Found!</p>'
            }, b.renderFooter = function (a) {
                var c;
                l.empty(b.footer), a && (c = b.getProductFooter({product: a}), c && b.footer.appendChild(c))
            }, b.renderHeader = function (a) {
                var c;
                l.empty(b.header), b.header.innerHTML = "<h3>" + b.TITLE + "</h3>", a && (c = b.getProductHeader({
                    product: a,
                    summaryModule: k
                }), c && b.header.appendChild(c))
            }, c(a), a = null, b
        };
        m.ID = e, m.TITLE = f, m.TYPES = g, b.exports = m
    }, {
        "core/Formatter": 56,
        "core/Module": 58,
        "focal-mechanism/FocalMechanismView": 79,
        "scientific/ScientificSummaryModule": 119,
        "util/Util": 44
    }],
    78: [function (a, b, c) {
        "use strict";
        var d = a("focal-mechanism/FocalMechanismModule"), e = a("moment-tensor/MomentTensorPinView"), f = a("util/Util"), g = {
            className: "focal-mechanism-pin-beachball",
            fillColor: "#ffaa69",
            module: d
        }, h = function (a) {
            var b;
            return a = f.extend({}, g, a), b = e(a), a = null, b
        };
        b.exports = h
    }, {"focal-mechanism/FocalMechanismModule": 77, "moment-tensor/MomentTensorPinView": 101, "util/Util": 44}],
    79: [function (a, b, c) {
        "use strict";
        var d = a("core/Attribution"), e = a("moment-tensor/MomentTensorView"), f = a("util/Util"), g = {fillColor: "#ffaa69"}, h = function (a) {
            var b;
            return b = e(f.extend({}, g, a)), b.getAxes = function () {
                return document.createDocumentFragment()
            }, b.getInfo = function () {
                var a, c, e, f, g;
                return g = b.model, a = g.getProperty("eventsource"), c = g.get("source"), e = g.getProperty("beachball-source") || c, a = a.toUpperCase(), c = d.getContributorReference(c), e = d.getContributorReference(e), f = document.createElement("div"), f.classList.add("moment-tensor-info"), f.classList.add("horizontal-scrolling"), f.innerHTML = '<table><tbody><tr><th scope="row">Catalog</th><td>' + a + '</td></tr><tr><th scope="row">Data Source</th><td>' + e + '</td></tr><tr><th scope="row">Contributor</th><td>' + c + "</td></tr></tbody></table>", f
            }, b.getTitle = function () {
                return document.createDocumentFragment()
            }, b
        };
        b.exports = h
    }, {"core/Attribution": 50, "moment-tensor/MomentTensorView": 102, "util/Util": 44}],
    80: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("dyfi/DYFIFormPinView"), i = a("dyfi/DYFIPinView"), j = a("finite-fault/FiniteFaultPinView"), k = a("focal-mechanism/FocalMechanismPinView"), l = a("map/InteractiveMapPinView"), m = a("moment-tensor/MomentTensorPinView"), n = a("origin/OriginPinView"), o = a("losspager/PAGERPinView"), p = a("pdl/Product"), q = a("general/RegionalInfoPinView"), r = a("shakemap/ShakeMapPinView"), s = a("core/SummaryModule"), t = a("general/TsunamiPinView"), u = a("util/Util");
        d = "executive", f = "Overview", g = function (a) {
            var b;
            return b = a.get("event"), null !== b ? !0 : !1
        }, e = {};
        var v = function (a) {
            var b, c;
            return a = u.extend({}, e, a), b = s(a), c = function () {
                var a;
                a = b.el, b.ID = d, b.TITLE = f, a.classList.add("executive-summary"), b.clearPins(!0), b.clearTexts(!0), b.clearLinks(!0)
            }, b.clearPins = function (a) {
                b.clearViews(b.pinViews), a ? b.pinViews = [] : b.pinViews = null
            }, b.createPinContainer = function (a, b) {
                var c;
                return a = a || document.createDocumentFragment(), b = b || [], c = a.appendChild(document.createElement("li")), c.classList.add("executive-summary-pin"), b.forEach(function (a) {
                    c.classList.add(a)
                }), c
            }, b.destroy = u.compose(function () {
                null !== b && (b.clearPins(), c = null, b = null)
            }, b.destroy), b.getLinksHeader = function () {
                var a;
                return a = document.createElement("h3"), a.innerHTML = "For More Information", a
            }, b.getPins = function (a) {
                var c, d, e, f;
                return b.pinViews = b.pinViews || [], c = b.model.get("config") || {}, e = document.createElement("ul"), e.classList.add("executive-summary-pins"), a ? (d = a.getSummary().properties || {}, b.pinViews.push(l({
                    el: b.createPinContainer(e),
                    model: b.model
                })), b.pinViews.push(q({
                    el: b.createPinContainer(e),
                    model: a.getPreferredOriginProduct()
                })), c.SCENARIO_MODE !== !0 && (f = a.getPreferredProduct(p.getFullType("dyfi", c)), b.pinViews.push(h({
                    el: b.createPinContainer(e),
                    model: f || p()
                }))), f && b.pinViews.push(i({
                    el: b.createPinContainer(e),
                    model: f
                })), f = a.getPreferredProduct(p.getFullType("shakemap", c)), f && b.pinViews.push(r({
                    el: b.createPinContainer(e),
                    model: f
                })), f = a.getPreferredProduct(p.getFullType("losspager", c)), f && b.pinViews.push(o({
                    el: b.createPinContainer(e),
                    model: f
                })), f = a.getPreferredOriginProduct(), f && b.pinViews.push(n({
                    el: b.createPinContainer(e),
                    model: f
                })), f = a.getPreferredProduct(p.getFullType("moment-tensor", c)), f ? b.pinViews.push(m({
                    el: b.createPinContainer(e),
                    model: f
                })) : (f = a.getPreferredProduct(p.getFullType("focal-mechanism", c)), f && b.pinViews.push(k({
                    el: b.createPinContainer(e),
                    model: f
                }))), f = a.getPreferredProduct(p.getFullType("finite-fault", c)), f && b.pinViews.push(j({
                    el: b.createPinContainer(e),
                    model: f
                })), 1 === a.getSummary().properties.tsunami && b.pinViews.push(t({
                    el: b.createPinContainer(e),
                    model: a.getPreferredOriginProduct()
                })), e) : e
            }, b.isDuplicate = function (a, b) {
                var c;
                try {
                    for (c = 0; c < b.length; c++)if (b[c].get("properties").url === a.get("properties").url)return !0;
                    return !1
                } catch (d) {
                    return !1
                }
            }, b.removeDuplicateLinks = function (a) {
                var c, d, e;
                if (e = [], a.length)for (e.push(a[0]), c = 1; c < a.length; c++)d = a[c], b.isDuplicate(d, e) || e.push(d);
                return e
            }, b.render = function () {
                var a, c, d, e, f, g;
                d = b.model.get("event"), b.clearTexts(!0), b.clearLinks(!0), b.clearPins(!0), u.empty(b.header), u.empty(b.content), u.empty(b.footer), d && (a = b.model.get("config"), c = document.createDocumentFragment(), e = d.getProducts(p.getFullType("general-header"), a), g = d.getProducts(p.getFullType("general-text"), a), f = b.removeDuplicateLinks(d.getProducts(p.getFullType("general-link"), a)), b.header.appendChild(b.getTexts(e)), c.appendChild(b.getPins(d)), c.appendChild(b.getTexts(g)), c.appendChild(b.getLinks(f)), b.content.appendChild(c), b.pinViews.forEach(function (a) {
                    a.render()
                }))
            }, c(a), a = null, b
        };
        v.ID = d, v.TITLE = f, v.hasContent = g, b.exports = v
    }, {
        "core/SummaryModule": 61,
        "dyfi/DYFIFormPinView": 64,
        "dyfi/DYFIPinView": 68,
        "finite-fault/FiniteFaultPinView": 75,
        "focal-mechanism/FocalMechanismPinView": 78,
        "general/RegionalInfoPinView": 85,
        "general/TsunamiPinView": 86,
        "losspager/PAGERPinView": 89,
        "map/InteractiveMapPinView": 95,
        "moment-tensor/MomentTensorPinView": 101,
        "origin/OriginPinView": 112,
        "pdl/Product": 118,
        "shakemap/ShakeMapPinView": 122,
        "util/Util": 44
    }],
    81: [function (a, b, c) {
        "use strict";
        var d = a("core/Formatter"), e = a("general/NearbyPlacesView"), f = a("util/Util"), g = a("util/Xhr"), h = {url: "http://earthquake.usgs.gov/ws/geoserve/"}, i = function (a) {
            var b, c, i, j, k;
            return a = f.extend({}, h, a), b = e(a), c = function (a) {
                i = a.formatter || d(), j = a.url || null, b.el.classList.add("geoserve-nearby-places")
            }, b.fetchData = function () {
                k = g.ajax({
                    url: j + "places.json",
                    success: b.onSuccess,
                    error: b.onError,
                    data: {
                        latitude: b.model.getProperty("latitude"),
                        longitude: b.model.getProperty("longitude"),
                        type: "event"
                    },
                    done: function () {
                        k = null
                    }
                })
            }, b.onError = function () {
                b.el.innerHTML = "Unable to load geoserve web service, URL: " + j, b.trigger("places-error")
            }, b.onSuccess = f.compose(function (a) {
                return a.event.features.map(function (a) {
                    var b, c;
                    return b = i.backAzimuth(a.properties.azimuth), c = "US" === a.properties.country_code ? a.properties.admin1_name : a.properties.country_name, {
                        distance: a.properties.distance,
                        direction: i.compassWinds(b),
                        name: a.properties.name + ", " + c,
                        population: a.properties.population
                    }
                })
            }, b.onSuccess), b.render = function () {
                b.el.innerHTML = "Loading content&hellip;", b.fetchData()
            }, b.destroy = f.compose(function () {
                k && (k.abort(), k = null), j = null, i = null, c = null, b = null
            }, b.destroy), c(a), a = null, b
        };
        b.exports = i
    }, {"core/Formatter": 56, "general/NearbyPlacesView": 83, "util/Util": 44, "util/Xhr": 45}],
    82: [function (a, b, c) {
        "use strict";
        var d = a("core/ProductView"), e = a("util/Util"), f = a("util/Xhr"), g = {url: "http://earthquake.usgs.gov/ws/geoserve/regions.json"}, h = function (a) {
            var b, c, h, i;
            return a = e.extend({}, g, a), b = d(a), c = function (a) {
                b.el.classList.add("geoserve-region-summary"), h = a.url
            }, b.fetchData = function () {
                i = f.ajax({
                    url: h,
                    success: b.onSuccess,
                    error: b.onError,
                    data: {
                        latitude: b.model.getProperty("latitude"),
                        longitude: b.model.getProperty("longitude"),
                        type: "tectonic"
                    },
                    done: function () {
                        i = null
                    }
                })
            }, b.onError = function () {
                b.el.innerHTML = '<p class="alert error">Error loading region tectonic summary</p>'
            }, b.onSuccess = function (a) {
                var c;
                c = a.tectonic.features, c.length > 0 ? b.el.innerHTML = c[0].properties.summary : b.el.innerHTML = '<p class="alert info">No region summary available for this location</p>'
            }, b.render = function () {
                b.el.innerHTML = "<p>Loading content&hellip;</p>", b.fetchData()
            }, b.destroy = e.compose(function () {
                i && (i.abort(), i = null), h = null, c = null, b = null
            }, b.destroy), c(a), a = null, b
        };
        b.exports = h
    }, {"core/ProductView": 60, "util/Util": 44, "util/Xhr": 45}],
    83: [function (a, b, c) {
        "use strict";
        var d, e = a("core/ProductView"), f = a("core/Formatter"), g = a("util/Util"), h = a("util/Xhr");
        d = {errorMessage: "Error loading nearby places.", renderNewLayout: !1};
        var i = function (a) {
            var b, c, i, j, k, l;
            return b = e(a), c = function (a) {
                a = g.extend({}, d, a), i = a.errorMessage, j = a.formatter || f(), k = a.renderNewLayout, b.el.classList.add("nearby-places")
            }, b.destroy = g.compose(function () {
                l && (l.abort(), l = null), i = null, j = null, b = null, c = null
            }, b.destroy), b.fetchData = function () {
                var a;
                return (a = b.model.getContent("nearby-cities.json")) ? void(l = h.ajax({
                    url: a.get("url"),
                    success: b.onSuccess,
                    error: b.onError,
                    done: function () {
                        l = null
                    }
                })) : void b.onError()
            }, b.formatPlace = function (a) {
                var b;
                return b = k ? ['<li class="nearby-places-place">', '<span class="nearby-places-name">', a.name, "</span>", '<aside class="nearby-places-distance">', j.distance(a.distance, "km"), " (", j.distance(j.kmToMi(a.distance), "mi"), ") ", a.direction, "</aside>", '<aside class="nearby-places-population">Population: ', j.numberWithCommas(a.population), "</aside>", "</li>"] : ["<li>", j.distance(a.distance, "km"), " (", j.distance(j.kmToMi(a.distance), "mi"), ") ", a.direction, " of ", a.name, "</li>"], b.join("")
            }, b.onError = function () {
                b.el.innerHTML = i, b.trigger("places-error")
            }, b.onSuccess = function (a) {
                var c;
                c = a.reduce(function (a, c) {
                    return a + b.formatPlace(c)
                }, ""), b.el.innerHTML = '<ul class="no-style">' + c + "</ul>", b.trigger("places", a)
            }, b.render = function () {
                b.el.innerHTML = "Loading content&hellip;", b.fetchData()
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"core/Formatter": 56, "core/ProductView": 60, "util/Util": 44, "util/Xhr": 45}],
    84: [function (a, b, c) {
        "use strict";
        var d, e, f, g = a("leaflet/layer/Terrain"), h = a("general/GeoserveNearbyPlacesView"), i = a("general/GeoserveRegionSummaryView"), j = a("leaflet/layer/HistoricSeismicity"), k = a("map/InteractiveMapModule"), l = a("map/InteractiveMapView"), m = a("core/Module"), n = a("general/NearbyPlacesView"), o = a("pdl/Product"), p = a("util/Util"), q = a("util/Xhr");
        d = "region-info", e = "Regional Information", f = function (a) {
            var b;
            return b = a.get("event"), null !== b ? !0 : !1
        };
        var r = {formatter: null, mapRadius: 5}, s = function (a) {
            var b, c, f, s, t, u, v, w, x;
            return b = m(a), c = function (a) {
                var c, g;
                b.ID = d, b.TITLE = e, a = p.extend({}, r, a), s = a.mapRadius, g = ["#", k.ID, "?", encodeURIComponent(l.HIST_SEIS_OVERLAY), "=true&amp;", encodeURIComponent(l.POPULATION_OVERLAY), "=true&amp;", encodeURIComponent(l.SHAKEMAP_CONTOURS), "=false"].join(""), c = b.content, c.classList.add("regional-info-module"), c.innerHTML = ['<div class="row right-to-left">', '<div class="column one-of-three regions-places">', '<div class="regional-info-module-regions"></div>', '<div class="regional-info-module-places"></div>', "</div>", '<div class="column two-of-three">', '<a href="', g, '">', '<div class="regional-info-module-map"></div>', "View Interactive Map", "</a>", '<div class="regional-info-module-tectonic-summary"></div>', "</div>", "</div>"].join(""), f = c.querySelector(".regional-info-module-map"), t = c.querySelector(".regional-info-module-places"), v = c.querySelector(".regional-info-module-regions"), w = c.querySelector(".regional-info-module-tectonic-summary")
            }, b.destroy = p.compose(function () {
                null !== b && (u && (u.off("places", "onNearbyPlaces", b), u.off("places-error", "onNearbyPlaces", b), u.destroy(), u = null), x && (x.destroy(), x = null), b.map && b.map.remove(), f = null, s = null, t = null, v = null, w = null, c = null, b = null)
            }, b.destroy), b.getNearbyPlacesProduct = function (a, c) {
                var d, e, f;
                return f = null, d = a.getProducts(o.getFullType("nearby-cities"), c), e = a.getProducts(o.getFullType("origin"), c), d = d.filter(function (a) {
                    var c;
                    return c = !1, e.some(function (d) {
                        return c = b.isAutomaticNearbyCity(a, d)
                    }), !c
                }), d.length && (f = d[0]), f
            }, b.isAutomaticNearbyCity = function (a, b) {
                var c, d, e;
                return d = a.get("source"), c = a.get("code"), e = b.get("code"), "us" === d && c === e
            }, b.onNearbyPlaces = function (a) {
                var c, d, e, f, g, h;
                if (d = b.model.get("event"), d && b.map) {
                    if (a = a || [], h = a[a.length - 1] || {}, e = h.distance, f = d.getLatitude(), g = d.getLongitude(), null === f || null === g)return;
                    c = e ? e / 111.2 : s, c = Math.max(c, 1), b.map.fitBounds([[f + c, g + c], [f - c, g - c]])
                }
            }, b.onOtherRegionComplete = function (a) {
                var b, c;
                a && a.admin && (c = [], b = a.admin.features[0] || {}, b.properties ? (b = b.properties, c.push(["<h3>Administrative Region</h3>", '<dl class="no-style regional-info-module-admin vertical">', '<dt class="regional-info-module-admin-iso">', "ISO", "</dt>", "<dd>", null === b.iso ? "&ndash;" : b.iso, "</dd>", '<dt class="regional-info-module-admin-country">', "Country", "</dt>", "<dd>", null === b.country ? "&ndash;" : b.country, "</dd>", '<dt class="regional-info-module-admin-region">', "Region", "</dt>", "<dd>", null === b.region ? "&ndash;" : b.region, "</dd>", "</dl>"].join("")), v.innerHTML = c.join("")) : v.parentNode.removeChild(v))
            }, b.render = function () {
                var a;
                a = b.model.get("event"), b.renderHeader(a), b.renderMap(a), b.renderOtherRegionInfo(a), b.renderNearbyPlaces(a), b.renderTectonicSummary(a), b.renderFooter(a)
            }, b.renderFooter = function () {
                b.footer.innerHTML = ""
            }, b.renderHeader = function (a) {
                var c, d;
                p.empty(b.header), a && (d = a.getEventId(), c = a.getLatitude(), Math.abs(c) > 85 ? b.header.innerHTML = ['<p class="alert warning">', "Due to the high latitude of this", " event, the location map does not show the correct location.", " To see the actual location we recommend using", ' <a href="/earthquakes/feed/v1.0/detail/', d, '.kml">', "Google Earth KML", "</a>.", "</p>"].join("") : b.header.innerHTML = "")
            }, b.renderMap = function (a) {
                var c, d;
                b.map && (b.map.remove(), b.map = null), a && (c = a.getLatitude(), d = a.getLongitude(), null !== c && null !== d && (b.map = L.map(f, {
                    attributionControl: !1,
                    boxZoom: !1,
                    center: [c, d],
                    zoom: 1,
                    doubleClickZoom: !1,
                    dragging: !1,
                    fadeAnimation: !1,
                    keyboard: !1,
                    markerZoomAnimation: !1,
                    layers: [g({provider: g.NATGEO}), j(), L.marker([c, d], {
                        zIndexOffset: 99,
                        icon: L.icon({iconUrl: "images/star.png", iconSize: [32, 32], iconAnchor: [16, 16]})
                    })],
                    scrollWheelZoom: !1,
                    tap: !1,
                    touchZoom: !1,
                    zoomAnimation: !1,
                    zoomControl: !1
                }), L.control.scale({position: "bottomleft"}).addTo(b.map)))
            }, b.renderNearbyPlaces = function (a) {
                var c, d;
                u && (u.off("places", "onNearbyPlaces", b), u.off("places-error", "onNearbyPlaces", b), u.destroy(), u = null), p.empty(t), a && (c = b.model.get("config"), d = b.getNearbyPlacesProduct(a, c), d ? u = n({
                    model: d,
                    renderNewLayout: !0
                }) : (d = a.getPreferredOriginProduct(), u = h({
                    model: d,
                    renderNewLayout: !0,
                    url: c ? c.GEOSERVE_WS_URL : "/ws/geoserve/"
                })), u.on("places", "onNearbyPlaces", b), u.on("places-error", "onNearbyPlaces", b), t.innerHTML = "<h3>Nearby Places</h3><small>Direction data (below) indicate the position of the event relative to the place.</small>", t.appendChild(u.el), u.render())
            }, b.renderOtherRegionInfo = function (a) {
                var c, d, e;
                p.empty(v), a && (c = b.model.get("config"), d = a.getLatitude(), e = a.getLongitude(), null !== d && null !== e && q.ajax({
                    url: (c ? c.GEOSERVE_WS_URL : "/ws/geoserve/") + "regions.json",
                    data: {latitude: d, longitude: e, type: "admin,fe"},
                    success: b.onOtherRegionComplete,
                    error: b.onOtherRegionComplete
                }))
            }, b.renderTectonicSummary = function (a) {
                var b;
                x && (x.destroy(), x = null), p.empty(w), a && (b = a.getPreferredOriginProduct(), b && (x = i({
                    el: w,
                    model: b
                }), x.render()))
            }, c(a), a = null, b
        };
        s.ID = d, s.TITLE = e, s.hasContent = f, b.exports = s
    }, {
        "core/Module": 58,
        "general/GeoserveNearbyPlacesView": 81,
        "general/GeoserveRegionSummaryView": 82,
        "general/NearbyPlacesView": 83,
        "leaflet/layer/HistoricSeismicity": 13,
        "leaflet/layer/Terrain": 18,
        "map/InteractiveMapModule": 94,
        "map/InteractiveMapView": 96,
        "pdl/Product": 118,
        "util/Util": 44,
        "util/Xhr": 45
    }],
    85: [function (a, b, c) {
        "use strict";
        var d = a("core/BasicPinView"), e = a("leaflet/layer/HistoricSeismicity"), f = a("leaflet/layer/Terrain"), g = a("util/Util"), h = {
            module: {
                ID: "region-info",
                TITLE: "Regional Information"
            }
        }, i = function (a) {
            var b, c, i, j, k;
            return a = g.extend({}, h, a), b = d(a), c = function () {
                var a, c;
                i = document.createElement("div"), i.classList.add("regional-info-map"), b.content.appendChild(i), a = parseFloat(b.model.getProperty("latitude")), c = parseFloat(b.model.getProperty("longitude")), isNaN(a) || isNaN(c) || (k = L.marker([a, c], {
                    zIndexOffset: 99,
                    icon: L.icon({iconUrl: "images/star.png", iconSize: [16, 16], iconAnchor: [8, 8]})
                }), j = L.map(i, {
                    attributionControl: !1,
                    boxZoom: !1,
                    center: [0, 0],
                    zoom: 0,
                    doubleClickZoom: !1,
                    dragging: !1,
                    fadeAnimation: !1,
                    keyboard: !1,
                    markerZoomAnimation: !1,
                    layers: [f({provider: f.NATGEO}), e(), k],
                    scrollWheelZoom: !1,
                    tap: !1,
                    touchZoom: !1,
                    zoomAnimation: !1,
                    zoomControl: !1
                }))
            }, b.destroy = g.compose(function () {
                null !== b && (b.map && b.map.remove(), i = null, j = null, c = null, b = null)
            }, b.destroy), b.renderPinContent = function () {
                var a, c;
                j && (a = parseFloat(b.model.getProperty("latitude")), c = parseFloat(b.model.getProperty("longitude")), j.invalidateSize(), j.fitBounds([[a - 2, c - 2], [a + 2, c + 2]]))
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"core/BasicPinView": 51, "leaflet/layer/HistoricSeismicity": 13, "leaflet/layer/Terrain": 18, "util/Util": 44}],
    86: [function (a, b, c) {
        "use strict";
        var d, e = a("core/BasicPinView"), f = a("util/Util");
        d = {badgeImage: "images/logos/tsunami.jpg", module: {ID: "#", TITLE: "Tsunami"}};
        var g = function (a) {
            var b, c;
            return a = f.extend({}, d, a), b = e(a), c = function (a) {
                b.el.classList.add("tsunami-pin-view"), b.badgeImage = a.badgeImage
            }, b.getLinkUrl = function () {
                return "http://www.tsunami.gov/"
            }, b.renderPinContent = function () {
                b.content.innerHTML = ['<figure class="pin-badge">', '<img src="', b.badgeImage, '" alt="Tsunami Warning Center" ', 'class="tsunami-pin-logo"/>', "</figure>", '<small class="disclaimer">', "To view any current tsunami advisories for this and other events, ", 'please visit <a href="http://www.tsunami.gov/">', "http://www.tsunami.gov</a>.", "</small>"].join("")
            }, b.renderPinFooter = function () {
                b.footer.innerHTML = ['<a href="', b.getLinkUrl(), '">NOAA</a>'].join("")
            }, c(a), a = null, b
        };
        b.exports = g
    }, {"core/BasicPinView": 51, "util/Util": 44}],
    87: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h, i, j = a("core/Attribution"), k = a("core/Formatter"), l = a("core/SummaryModule"), m = a("util/Util");
        g = "impact", h = "Impact", i = ["dyfi", "shakemap", "losspager"];
        var n = {}, o = function (b) {
            var c, i, o;
            return b = m.extend({}, n, b), c = l(b), i = function (b) {
                o = b.formatter || k(), c.ID = g, c.TITLE = h, d = d || a("dyfi/DYFIModule"), e = e || a("losspager/PAGERModule"), f = f || a("shakemap/ShakeMapModule")
            }, c.destroy = m.compose(function () {
                o = null, i = null, c = null
            }, c.destroy), c.getDyfiSummary = function (a) {
                return c.createSummary(a, "Did You Feel It?", ["Catalog", '<abbr title="Community Determined Intensity">CDI</abbr>', "Responses", "Source"], c.getDyfiRow)
            }, c.getDyfiRow = function (a, b) {
                var e, f;
                return e = 0 === b, f = c.createRow(e), f.innerHTML = ['<th scope="row">', c.getCatalogMarkup(d, a, e), "</th>", "<td>", o.intensity(a.getProperty("maxmmi")), "</td>", "<td>", a.getProperty("num-responses"), "</td>", "<td>", j.getProductAttribution(a), "</td>"].join(""), f
            }, c.getLinksHeader = function () {
                var a;
                return a = document.createElement("h3"), a.innerHTML = "Impact Links", a
            }, c.getPagerSummary = function (a) {
                return c.createSummary(a, "PAGER", ["Catalog", "Alert Level", "Source"], c.getPagerRow)
            }, c.getPagerRow = function (a, b) {
                var d, f, g;
                return f = 0 === b, g = c.createRow(f), d = a.getProperty("alertlevel") || "pending", g.innerHTML = ['<th scope="row">', c.getCatalogMarkup(e, a, f), "</th>", "<td>", '<span class="mmi pager-alertlevel-', d.toLowerCase(), '">', '<strong class="roman">', d.toUpperCase(), "</strong>", "</span>", "</td>", "<td>", j.getProductAttribution(a), "</td>"].join(""), g
            }, c.getShakeMapSummary = function (a) {
                return c.createSummary(a, "ShakeMap", ["Catalog", '<abbr title="Maximum Modified Mercalli Intensity">MMI</abbr>', "Source", "Description"], c.getShakeMapRow)
            }, c.getShakeMapRow = function (a, b) {
                var d, e;
                return d = 0 === b, e = c.createRow(d), e.innerHTML = ['<th scope="row">', c.getCatalogMarkup(f, a, d), "</th>", "<td>", o.intensity(a.getProperty("maxmmi")), "</td>", "<td>", j.getProductAttribution(a), "</td>", "<td>", a.getProperty("event-description") || "&ndash;", "</td>"].join(""),
                    e
            }, c.render = function () {
                var a, b, d, e, f, g, h;
                b = document.createDocumentFragment(), c.clearTexts(!0), c.clearLinks(!0), d = c.getProducts("impact-header"), a = c.getProducts("dyfi"), g = c.getProducts("shakemap"), f = c.getProducts("losspager"), h = c.getProducts("impact-text"), e = c.getProducts("impact-link"), m.empty(c.header), c.header.appendChild(c.getTexts(d)), b.appendChild(c.getDyfiSummary(a)), b.appendChild(c.getShakeMapSummary(g)), b.appendChild(c.getPagerSummary(f)), b.appendChild(c.getTexts(h)), b.appendChild(c.getLinks(e)), m.empty(c.content), c.content.appendChild(b), c.footer.innerHTML = ""
            }, i(b), b = null, c
        };
        o.ID = g, o.TITLE = h, o.TYPES = i, b.exports = o
    }, {
        "core/Attribution": 50,
        "core/Formatter": 56,
        "core/SummaryModule": 61,
        "dyfi/DYFIModule": 67,
        "losspager/PAGERModule": 88,
        "shakemap/ShakeMapModule": 121,
        "util/Util": 44
    }],
    88: [function (a, b, c) {
        "use strict";
        var d, e, f, g = a("impact/ImpactSummaryModule"), h = a("core/Module"), i = a("losspager/PAGERView"), j = a("util/Util");
        d = "pager", e = "PAGER", f = ["losspager"];
        var k = function (a) {
            var b, c, f;
            return a = j.extend({}, a), b = h(a), c = function () {
                b.ID = d, b.TITLE = e
            }, b.destroy = j.compose(function () {
                f && f.destroy(), f = null, c = null, b = null
            }, b.destroy), b.render = function () {
                var a, c;
                b.header.innerHTML = "<h3>PAGER</h3>", c = b.getProduct("losspager"), c ? (b.header.appendChild(b.getProductHeader({
                    product: c,
                    summaryModule: g
                })), f || (f = i({
                    el: b.content,
                    model: c
                })), f.render(), a = b.getProductFooter({product: c})) : b.content.innerHTML = '<p class="alert warning">No PAGER Found</p>', b.footer.innerHTML = '<h3>For More Information</h3><ul><li><a href="/data/pager/">Scientific Background for PAGER</a></li></ul>', a && b.footer.appendChild(a)
            }, c(), a = null, b
        };
        k.ID = d, k.TITLE = e, k.TYPES = f, b.exports = k
    }, {"core/Module": 58, "impact/ImpactSummaryModule": 87, "losspager/PAGERView": 90, "util/Util": 44}],
    89: [function (a, b, c) {
        "use strict";
        var d = a("core/BasicPinView"), e = a("core/Formatter"), f = a("losspager/PAGERModule"), g = a("util/Util"), h = {module: f}, i = function (a) {
            var b, c, f;
            return a = g.extend({}, h, a), b = d(a), c = function (a) {
                f = a.formatter || e()
            }, b.renderPinContent = function () {
                var a, c, d;
                d = [], a = b.model.getContent("alertecon_smaller.png"), c = b.model.getContent("alertfatal_smaller.png"), a && d.push('<span>Estimated Economic Losses</span><img src="' + a.get("url") + '" />'), c && d.push('<span>Estimated Fatalities</span><img src="' + c.get("url") + '" />'), b.content.innerHTML = d.join("")
            }, b.renderPinHeader = g.compose(b.renderPinHeader, function () {
                var a;
                a = b.model.getProperty("alertlevel"), a && b.header.insertAdjacentHTML("beforeend", '<span class="pager-bubble bubble-border pager-alertlevel-' + a + '"><strong class="roman">' + a.toUpperCase() + "</strong></span>")
            }), c(a), a = null, b
        };
        b.exports = i
    }, {"core/BasicPinView": 51, "core/Formatter": 56, "losspager/PAGERModule": 88, "util/Util": 44}],
    90: [function (a, b, c) {
        "use strict";
        var d, e = a("losspager/PagerXmlParser"), f = a("core/ProductView"), g = a("util/Util"), h = a("util/Xhr");
        d = {errorMessage: "Error loading PAGER view"};
        var i = function (a, b, c, d, e) {
            var f, g, h;
            return h = a.appendChild(document.createElement("h3")), h.innerHTML = b, g = [], c && d ? (f = a.appendChild(document.createElement("figure")), g.push('<a href="' + c.get("url") + '">'), g.push('<img src="' + d.get("url") + '" alt=""/>'), g.push("</a>"), e && g.push("<figcaption>" + e + "</figcaption>"), f.innerHTML = g.join("")) : (f = a.appendChild(document.createElement("p")), f.innerHTML = "Alert information unavailable"), a
        }, j = function (a) {
            var b, c, j, k, l, m, n, o, p, q, r, s, t;
            return b = f(a), c = function (a) {
                a = g.extend({}, d, a || {}), l = a.errorMessage, b.createScaffolding()
            }, b.createExposureItem = function (a) {
                return '<tr><td class="exposure-mmi"><span class="roman mmi ' + a.css + '">' + a.label + '</span></td><td class="exposure-perc">' + a.perc + '</td><td class="exposure-population">' + a.populationDisplay + "</td></tr>"
            }, b.createScaffolding = function () {
                b.el.classList.add("losspager"), b.el.innerHTML = '<div class="alert-wrapper row"><div class="column one-of-one pager-pending"></div><div class="column one-of-two fatality-histogram"></div><div class="column one-of-two economic-histogram"></div></div><div class="row pager-content"><div class="column one-of-two"><h3>Estimated Population Exposure to Earthquake Shaking</h3><div class="exposure-map"></div><div class="exposure-population"></div></div><div class="column one-of-two"><div class="comment-wrapper"></div><div class="exposure-city"><h3>Selected Cities Exposed</h3><div class="horizontal-scrolling"><table class="pager-cities"></table></div><span class="pager-disclaimer">From GeoNames Database of Cities with 1,000 or more residents (k = x1,000)</span><button class="toggle">Show/Hide Full City List</button></div></div></div>', t = b.el.querySelector(".pager-pending"), r = b.el.querySelector(".fatality-histogram"), k = b.el.querySelector(".economic-histogram"), p = b.el.querySelector(".exposure-map"), q = b.el.querySelector(".exposure-population"), j = b.el.querySelector(".comment-wrapper"), m = b.el.querySelector(".exposure-city"), o = m.querySelector(".toggle"), n = m.querySelector(".pager-cities"), o.addEventListener("click", b.onCityClick)
            }, b.destroy = g.compose(function () {
                j = null, k = null, l = null, m = null, n = null, o = null, p = null, q = null, r = null, s = null, t = null, c = null, b = null
            }, b.destroy), b.fetchData = function () {
                var a;
                return (a = b.model.getContent("pager.xml")) ? void h.ajax({
                    url: a.get("url"),
                    success: b.onSuccess,
                    error: b.onError
                }) : void b.onError()
            }, b.getAlertComment = function (a) {
                var b, c, d;
                return s && s.comments && (b = s.comments.impact), b ? (2 === b.length ? "" !== b[0] ? (d = b[0], c = b[1]) : d = b[1] : d = b[0], "fatality" === a ? d : "economic" === a ? c : void 0) : ""
            }, b.onCityClick = function () {
                n.classList.toggle("show-additional")
            }, b.onError = function () {
                b.el.innerHTML = l
            }, b.onSuccess = function (a, c) {
                var d;
                d = c && c.responseXML ? c.responseXML : a, s = e.parse(d), b.renderFatalityHistogram(), b.renderEconomicHistogram(), b.renderExposures(), b.renderCities(), b.renderComments()
            }, b.render = function () {
                b.renderPending(), b.renderExposureMap(), b.fetchData()
            }, b.renderCities = function () {
                var a, b, c, d, e;
                for (e = [], a = s.cities, d = a.length, 11 >= d && (m.style.display = "none"), e.push('<thead><tr><th><abbr title="Modified Mercalli Intensity">MMI</abbr></th><th>City</th><th><abbr title="Population">Pop.</abbr></th></tr></thead>'), c = 0; d > c; c++)b = a[c], e.push('<tr class="' + (c > 10 ? "city-additional" : "") + '"><td class="cities-mmi"><span class="roman mmi ' + b.css + '">' + b.roman + "</span></td><td>" + b.name + '</td><td class="cities-population">' + b.populationDisplay + "</td></tr>");
                e.push("</tbody>"), 0 === d ? (m.parentNode.removeChild(m), m = null) : n.innerHTML = e.join("")
            }, b.renderComments = function () {
                var a = s.comments, b = [];
                a.hasOwnProperty("structure") && b.push('<div class="wrapper"><h3>Structure Information Summary</h3><p>' + a.structure + "</p></div>"), a.hasOwnProperty("effects") && b.push('<div class="wrapper"><h3>Secondary Effects</h3><p>' + a.effects + "</p></div>"), b.length ? j.innerHTML = b.join("") : (j.parentNode.removeChild(j), j = null)
            }, b.renderEconomicHistogram = function () {
                var a, c, d, e;
                return a = b.model.getProperty("alertLevel"), c = b.getAlertComment("economic"), e = b.model.getContent("alertecon_small.png") || b.model.getContent("alertecon.png"), d = b.model.getContent("alertecon.pdf"), "pending" !== a ? i(k, "Estimated Economic Losses", d, e, c) : void 0
            }, b.renderExposureMap = function () {
                var a;
                a = b.model.getContent("exposure.png"), a ? p.innerHTML = ["<figure>", '<img src="', a.get("url"), '" alt="Population Exposure Map"/>', "<figcaption>", "Population per ~1 sq. km. from LandScan", "</figcaption>", "</figure>"].join("") : p.innerHTML = "&ndash;"
            }, b.renderExposures = function () {
                var a, c, d, e, f;
                if (f = [], c = s.exposures, e = c.length, 0 === e)return q.parentNode.removeChild(q), void(q = null);
                for (f.push('<div class="horizontal-scrolling"><table class="pager-exposures"><thead><tr><th><abbr title="Modified Mercalli Intensity">MMI</abbr></th><th><abbr title="Perceived Shaking">Shaking</abbr></th><th><abbr title="Population Exposure">Pop.</abbr></th></tr></thead><tbody>'), d = 0; e > d; d++)a = c[d], f.push(b.createExposureItem(a));
                f.push('</tbody></table></div><span class="pager-disclaimer">*Estimated exposure only includes population within map area (k = x1,000)</br><a href="http://earthquake.usgs.gov/research/shakemap/#intmaps">Modified Mercalli Intensity (MMI) scale</a></span>'), q.innerHTML = f.join("")
            }, b.renderFatalityHistogram = function () {
                var a, c, d, e;
                return a = b.model.getProperty("alertLevel"), c = b.getAlertComment("fatality"), e = b.model.getContent("alertfatal_small.png") || b.model.getContent("alertfatal.png"), d = b.model.getContent("alertfatal.pdf"), "pending" !== a ? i(r, "Estimated Fatalities", d, e, c) : void 0
            }, b.renderPending = function () {
                var a;
                a = b.model.getProperty("alertLevel"), "pending" === a && (t.innerHTML = ['<p class="info alert">', "Alert information for this event is currently under review and ", "will be available soon. Thank you for your patience.", "</p>"].joing(""))
            }, b.setPagerInfo = function (a) {
                s = a
            }, c(a), a = null, b
        };
        b.exports = j
    }, {"core/ProductView": 60, "losspager/PagerXmlParser": 91, "util/Util": 44, "util/Xhr": 45}],
    91: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = "1.0", f = [{
            perc: "Not Felt",
            resist: "none",
            vuln: "none",
            roman: "I",
            label: "I",
            css: "mmiI"
        }, {perc: "Not Felt", resist: "none", vuln: "none", roman: "I", label: "I", css: "mmiI"}, {
            perc: "Weak",
            resist: "none",
            vuln: "none",
            roman: "II",
            label: "II-III",
            css: "mmiII"
        }, {perc: "Weak", resist: "none", vuln: "none", roman: "III", label: "II-III", css: "mmiIII"}, {
            perc: "Light",
            resist: "none",
            vuln: "none",
            roman: "IV",
            label: "IV",
            css: "mmiIV"
        }, {
            perc: "Moderate",
            resist: "Very Light",
            vuln: "Light",
            roman: "V",
            label: "V",
            css: "mmiV"
        }, {
            perc: "Strong",
            resist: "Light",
            vuln: "Moderate",
            roman: "VI",
            label: "VI",
            css: "mmiVI"
        }, {
            perc: "Very Strong",
            resist: "Moderate",
            vuln: "Moderate/Heavy",
            roman: "VII",
            label: "VII",
            css: "mmiVII"
        }, {
            perc: "Severe",
            resist: "Moderate/Heavy",
            vuln: "Heavy",
            roman: "VIII",
            label: "VIII",
            css: "mmiVIII"
        }, {
            perc: "Violent",
            resist: "Heavy",
            vuln: "Very Heavy",
            roman: "IX",
            label: "IX",
            css: "mmiIX"
        }, {
            perc: "Extreme",
            resist: "Very Heavy",
            vuln: "Very Heavy",
            roman: "X",
            label: "X",
            css: "mmiX"
        }, {
            perc: "Extreme",
            resist: "Very Heavy",
            vuln: "Very Heavy",
            roman: "XI",
            label: "XI",
            css: "mmiX"
        }, {
            perc: "Extreme",
            resist: "Very Heavy",
            vuln: "Very Heavy",
            roman: "XII",
            label: "XII",
            css: "mmiX"
        }], g = function (a) {
            function b(a, b) {
                return b.mmi - a.mmi
            }

            function c(a, b) {
                return b.population - a.population
            }

            function d(a, b) {
                var d = a.isCapital, e = b.isCapital;
                return d && e || !d && !e ? c(a, b) : d ? -1 : e ? 1 : c(a, b)
            }

            var e = [];
            for (a.sort(b), Array.prototype.push.apply(e, a.splice(0, 6)), a.sort(d); a.length && a[0].isCapital && e.length < 11;)e.push(a.splice(0, 1)[0]);
            for (a.sort(c); a.length && e.length < 11;)e.push(a.splice(0, 1)[0]);
            return e.sort(b).concat(a.sort(b))
        }, h = function (a, b) {
            return b = b || ",", a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, b)
        }, i = function (a) {
            return 1e3 > a ? "&lt;1 k" : h(Math.round(a / 1e3)) + " k"
        }, j = function (a, b) {
            var c = h(Math.round(a / 1e3)) + " k";
            return b && (0 === a && (c = "--"), c += "*"), c
        }, k = function (a) {
            for (var b, c, d, e, f, g, h = a.querySelectorAll("pager > alerts > alert"), i = 0, j = h.length, k = {}; j > i; i++)for (b = h[i], c = b.getAttribute("type"), k[b.getAttribute("type")] = {
                level: b.getAttribute("level"),
                units: b.getAttribute("units"),
                bins: []
            }, d = b.querySelectorAll("bin"), e = 0, f = d.length; f > e; e++)g = d[e], k[c].bins.push({
                min: g.getAttribute("min"),
                max: g.getAttribute("max"),
                prob: g.getAttribute("probability"),
                color: g.getAttribute("color")
            });
            return k
        }, l = function (a) {
            for (var b, c, e, g, h, i, k, l = a.querySelectorAll("pager > exposure"), m = 0, n = l.length, o = []; n > m; m++)b = l[m], c = parseFloat(b.getAttribute("dmin")), e = parseFloat(b.getAttribute("dmax")), g = parseInt(b.getAttribute("exposure"), 10), h = "1" === b.getAttribute("rangeInsideMap"), o.push(d.extend({}, f[Math.round(c)], {
                min: c,
                max: e,
                population: g,
                onMap: h,
                populationDisplay: j(g, !h)
            }));
            return o.sort(function (a, b) {
                return a.min - b.min
            }), o[1] && o[2] && (i = o[1].population + o[2].population, k = o[1].onMap && o[2].onMap, o.splice(1, 2, {
                min: o[1].min,
                max: o[2].max,
                population: i,
                onMap: k,
                populationDisplay: j(i, !k),
                perc: o[1].perc,
                resist: o[1].resist,
                vuln: o[1].vuln,
                label: o[1].label,
                css: o[1].css
            })), o
        }, m = function (a) {
            for (var b, c, e, h = a.querySelectorAll("pager > city"), j = 0, k = h.length, l = []; k > j; j++)b = h[j], c = parseInt(b.getAttribute("population"), 10), e = parseFloat(b.getAttribute("mmi")), l.push(d.extend({}, f[Math.round(e)], {
                name: b.getAttribute("name"),
                latitude: parseFloat(b.getAttribute("lat")),
                longitude: parseFloat(b.getAttribute("lon")),
                population: c,
                populationDisplay: i(c),
                mmi: e,
                isCapital: "1" === b.getAttribute("iscapital")
            }));
            return l = g(l)
        }, n = function (a) {
            var b, c = {};
            return b = a.querySelectorAll("pager > structcomment"), b && b.length && (c.structure = b[0].textContent.trim()), b = a.querySelectorAll("pager > secondary_effects"), b && b.length && (b = b[0].textContent.trim(), "" !== b && (c.effects = b)), b = a.querySelectorAll("pager > impact_comment"), b && b.length && (c.impact = b[0].textContent.trim().split("#").reverse(), -1 !== c.impact[0].indexOf("economic") && c.impact.reverse()), c
        }, o = {
            version: function () {
                return e
            }, parse: function (a) {
                var b;
                return "string" == typeof a && (b = new DOMParser, a = b.parseFromString(a, "application/xml")), {
                    alerts: k(a),
                    exposures: l(a),
                    cities: m(a),
                    comments: n(a)
                }
            }
        };
        b.exports = o
    }, {"util/Util": 44}],
    92: [function (a, b, c) {
        "use strict";
        var d = a("core/Formatter"), e = a("util/Util");
        a("leaflet/layer/AsynchronousGeoJson");
        var f, g;
        f = {
            clickable: !0, style: function (a) {
                return {color: a.properties.color, weight: a.properties.weight, opacity: 1}
            }, onEachFeature: function (a, b) {
                var c;
                c = g.mmi(a.properties.value), this.clickable && b.bindPopup('<div class="roman station-summary-intensity mmi' + c + '">' + c + '<br><abbr title="Modified Mercalli Intensity">mmi</abbr></div>')
            }
        }, g = d();
        var h = L.AsynchronousGeoJson.extend({
            initialize: function (a) {
                L.AsynchronousGeoJson.prototype.initialize.call(this, e.extend({}, f, a))
            }
        });
        L.ContoursLayer = h, L.contoursLayer = function (a) {
            return new h(a)
        }, b.exports = L.contoursLayer
    }, {"core/Formatter": 56, "leaflet/layer/AsynchronousGeoJson": 11, "util/Util": 44}],
    93: [function (a, b, c) {
        "use strict";
        var d = a("core/Formatter"), e = a("util/Util");
        a("leaflet/layer/AsynchronousGeoJson");
        var f = d(), g = {
            style: function (a) {
                var b = f.mmiColor(a.properties.cdi);
                return {color: "#999", fillColor: b, fillOpacity: .9, opacity: .9, weight: .5}
            }, onEachFeature: function (a, b) {
                b.bindPopup(this.formatPopup(a))
            }, formatPopup: function (a) {
                var b, c;
                return c = a.properties, b = f.mmi(c.cdi), '<div class="dyfi-popup"><h2 class="dyfi-name">' + c.name + '</h2><ul class="dyfi-summary"><li class="dyfi-summary-intensity roman mmi' + b + '">' + b + '<br/><abbr title="Community Determined Intensity">cdi</abbr></li><li class="dyfi-summary-nresp">' + f.number(c.nresp, 0, "&ndash;") + '<br/><abbr title="Number of Responses">responses</abbr></li><li class="dyfi-summary-distance">' + f.number(c.dist, 0, "&ndash;", "km") + '<br/><abbr title="Distance from Hypocenter">distance</abbr></li></ul></div>'
            }
        }, h = L.AsynchronousGeoJson.extend({
            initialize: function (a) {
                L.AsynchronousGeoJson.prototype.initialize.call(this, e.extend({}, g, a))
            }
        });
        L.DyfiUtmLayer = h, L.dyfiUtmLayer = function (a) {
            return new h(a)
        }, b.exports = L.dyfiUtmLayer
    }, {"core/Formatter": 56, "leaflet/layer/AsynchronousGeoJson": 11, "util/Util": 44}],
    94: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("util/Events"), i = a("map/InteractiveMapView"), j = a("mvc/ModalView"), k = a("core/Module"), l = a("util/Util");
        e = "map", f = "Interactive Map", g = ["origin"], d = {};
        var m = function (a) {
            var b, c, m, n, o, p;
            return a = l.extend({}, d, a), b = k(a), c = function (a) {
                var c;
                b.ID = e, b.TITLE = f, b.TYPES = g, c = b.model.get("config"), b.content.addEventListener("click", b.onContentClick), n = i({
                    formatter: a.formatter,
                    model: b.model,
                    module: b
                }), o = j(n.el, {
                    buttons: null,
                    title: null
                }), o.el.classList.add("modal-map"), b.appendCloseButton(), c && c.SCENARIO_MODE === !0 && b.appendScenarioBadge()
            }, b.appendCloseButton = function () {
                m || (m = o.el.appendChild(document.createElement("button")), m.classList.add("cancel"), m.classList.add("modal-close"), m.innerHTML = "Close Map", m.addEventListener("click", b.onCloseButtonClick))
            }, b.appendScenarioBadge = function () {
                p || (p = o.el.appendChild(document.createElement("div")), p.classList.add("scenario-badge"), p.classList.add("leaflet-control"), p.innerHTML = "Scenario")
            }, b.destroy = l.compose(function () {
                b.content.removeEventListener("click", b.onContentClick), m.removeEventListener("click", b.onCloseButtonClick), n.destroy(), o.hide(), o.destroy(), n = null, o = null, c = null, b = null
            }, b.destroy), b.onCloseButtonClick = function () {
                h.trigger("back")
            }, b.onContentClick = function (a) {
                a.target && a.target.classList.contains("show-map") && b.showMap()
            }, b.render = function () {
                b.header.innerHTML = '<a class="back-to-summary-link" href="#">Back to General Summary</a>', b.content.innerHTML = '<button class="show-map">Show Map</button>', b.footer.innerHTML = "", b.showMap()
            }, b.showMap = function () {
                o.show(), n.onDomReady()
            }, c(a), a = null, b
        };
        m.ID = e, m.TITLE = f, m.TYPES = g, b.exports = m
    }, {"core/Module": 58, "map/InteractiveMapView": 96, "mvc/ModalView": 39, "util/Events": 43, "util/Util": 44}],
    95: [function (a, b, c) {
        "use strict";
        var d = a("core/Attribution"), e = a("core/BasicPinView"), f = a("map/InteractiveMapView"), g = a("pdl/Product"), h = a("util/Util"), i = {
            module: {
                ID: "map",
                TITLE: "Interactive Map"
            }
        }, j = function (a) {
            var b, c, j;
            return a = h.extend({}, i, a), b = e(a), c = function () {
                var a, c;
                a = document.createElement("div"), a.classList.add("locationview-map"), c = b.model.get("event"), c && (b.product = c.getPreferredOriginProduct()), b.product || (b.product = g()), b.content.appendChild(a), j = f({
                    el: a,
                    interactive: !1,
                    markerSize: 16,
                    model: b.model,
                    scaleControl: !1
                })
            }, b.destroy = h.compose(function () {
                null !== b && (j.destroy(), b = null)
            }, b.destroy), b.renderPinContent = function () {
                j.onDomReady(), j.render()
            }, b.renderPinFooter = function () {
                b.footer.innerHTML = "Contributed by " + d.getProductAttribution(b.product)
            }, c(a), a = null, b
        };
        b.exports = j
    }, {
        "core/Attribution": 50,
        "core/BasicPinView": 51,
        "map/InteractiveMapView": 96,
        "pdl/Product": 118,
        "util/Util": 44
    }],
    96: [function (a, b, c) {
        "use strict";
        var d = a("map/ContoursLayer"), e = a("map/DyfiUtmLayer"), f = a("leaflet/layer/Grayscale"), g = a("leaflet/layer/Terrain"), h = a("core/Formatter"), i = a("leaflet/control/HazDevLayers"), j = a("leaflet/layer/HistoricSeismicity"), k = a("core/Module"), l = a("leaflet/control/MousePosition"), m = a("leaflet/layer/Satellite"), n = a("leaflet/layer/Street"), o = a("pdl/Product"), p = a("map/ShakeMapStationLayer"), q = a("leaflet/layer/TectonicPlates"), r = a("leaflet/layer/UsFault"), s = a("util/Util"), t = a("mvc/View"), u = "DYFI Responses 10 km", v = "DYFI Responses 1 km", w = "DYFI Responses", x = "Epicenter", y = "U.S. Faults", z = "Historical Seismicity", A = "Tectonic Plates", B = "Population Density", C = "ShakeMap MMI Contours", D = "ShakeMap Stations", E = {
            config: {baseLayer: "Terrain"},
            interactive: !0,
            markerSize: 32
        };
        E.config[x] = "true", E.config[A] = "true", E.config[y] = "true", E.config[C] = "true";
        var F = function (a, b) {
            return 50 >= a && a >= 24.6 && 65 >= b && b >= -125 || 23 >= a && a >= 23 && -154 >= b && b >= -161
        }, G = function (a) {
            var b, c, B, G, H, I, J, K, M, N, O, P, Q;
            return a = s.extend({}, E, a), b = t(a), c = function (a) {
                b.el.classList.add("interactive-map-view"), G = s.extend({}, E.config), N = a.module || k(), H = a.formatter || h(), I = a.interactive, M = a.markerSize, B = {}, O = {}, K = L.map(b.el, {
                    attributionControl: !1,
                    boxZoom: I,
                    center: [0, 0],
                    doubleClickZoom: I,
                    dragging: I,
                    scrollWheelZoom: I,
                    tap: I,
                    touchZoom: I,
                    zoom: 0,
                    zoomAnimation: !0,
                    zoomControl: I
                }), J = i(b.getAvailableBaseLayers(), {}), I && K.addControl(J), s.isMobile() || (I && (P = l(), K.addControl(P)), a.scaleControl !== !1 && (Q = L.control.scale({position: "bottomleft"}), K.addControl(Q)))
            }, b.addDyfiOverlays = function (a) {
                var b;
                if (a)return b = a.getContent("dyfi_geo_10km.geojson"), b && (O[u] = e({url: b.get("url")})), b = a.getContent("dyfi_geo_1km.geojson"), b && (O[v] = e({url: b.get("url")})), O.hasOwnProperty(u) || O.hasOwnProperty(v) || (b = a.getContent("dyfi_geo.geojson"), b && (O[w] = e({url: b.get("url")}))), O
            }, b.addShakeMapOverlays = function (a) {
                var b;
                if (a)return b = a.getContent("download/cont_mi.json"), b && (O[C] = d({
                    clickable: I,
                    url: b.get("url")
                })), b = a.getContent("download/stationlist.json"), b && (O[D] = p(b.get("url"))), O
            }, b.createEpicenterMarker = function (a, b, c) {
                var d;
                return d = L.marker([a, b], {
                    zIndexOffset: 99,
                    icon: L.icon({iconUrl: "images/star.png", iconSize: [M, M], iconAnchor: [M / 2, M / 2]})
                }), I && d.bindPopup(["Epicenter M", H.magnitude(c), "<br/>", H.location(a, b)].join("")), d
            }, b.destroy = s.compose(function () {
                P && P.removeFrom(K), Q && Q.removeFrom(K), K.remove(), B = null, G = null, H = null, J = null, K = null, M = null, N = null, O = null, P = null, Q = null, c = null, b = null
            }, b.destroy), b.getAvailableBaseLayers = function () {
                return B = {Terrain: g({provider: g.NATGEO}), Grayscale: f(), Street: n(), Satellite: m()}
            }, b.getAvailableOverlays = function () {
                var a, c, d;
                return O = {}, (a = b.model.get("event")) ? (c = a.getLatitude(), d = a.getLongitude(), null !== c && null !== d && (O[x] = b.createEpicenterMarker(c, d, a.getMagnitude())), O[A] = q(), F(c, d) && (O[y] = r()), O[z] = j(), b.getProductOverlays("dyfi", b.addDyfiOverlays), b.getProductOverlays("shakemap", b.addShakeMapOverlays), O) : O
            }, b.getProductOverlays = function (a, c) {
                var d, e, f, g, h;
                d = b.model.get("event"), d && (f = s.extend({}, G, b.model.get("map")), h = a + "Source", e = a + "Code", a = o.getFullType(a, N.model.get("config")), g = f.hasOwnProperty(h) && f.hasOwnProperty(e) ? d.getProductById(a, f[h], f[e]) : d.getPreferredProduct(a), g && c(g))
            }, b.onDomReady = function () {
                K && K.getContainer() && K.getContainer().parentNode && K.invalidateSize()
            }, b.render = function () {
                var a, c, d, e;
                c = s.extend({}, G, b.model.get("map")), Object.keys(B).forEach(function (a) {
                    var b;
                    b = B[a], b.map && b.removeFrom(K), a === c.baseLayer && b.addTo(K)
                }), b.updateOverlays(c), a = b.model.get("event"), a && (d = a.getLatitude(), e = a.getLongitude(), K.fitBounds([[d + 2, e + 2], [d - 2, e - 2]]))
            }, b.updateOverlays = function (a) {
                Object.keys(O).forEach(function (a) {
                    var b;
                    b = O[a], b._map && K.removeLayer(b), J && J._layers.hasOwnProperty(a) && J.removeLayer(b)
                }), b.getAvailableOverlays(), Object.keys(O).forEach(function (b) {
                    var c;
                    c = O[b], J && J.addOverlay(c, b), "true" === a[b] && c.addTo(K)
                })
            }, c(a), a = null, b
        };
        G.DYFI_10K_OVERLAY = u, G.DYFI_1K_OVERLAY = v, G.DYFI_DEFAULT_OVERLAY = w, G.EPICENTER_OVERLAY = x, G.FAULTS_OVERLAY = y, G.HIST_SEIS_OVERLAY = z, G.PLATES_OVERLAY = A, G.POPULATION_OVERLAY = B, G.SHAKEMAP_CONTOURS = C, G.SHAKEMAP_STATIONS = D, b.exports = G
    }, {
        "core/Formatter": 56,
        "core/Module": 58,
        "leaflet/control/HazDevLayers": 9,
        "leaflet/control/MousePosition": 10,
        "leaflet/layer/Grayscale": 12,
        "leaflet/layer/HistoricSeismicity": 13,
        "leaflet/layer/Satellite": 15,
        "leaflet/layer/Street": 16,
        "leaflet/layer/TectonicPlates": 17,
        "leaflet/layer/Terrain": 18,
        "leaflet/layer/UsFault": 20,
        "map/ContoursLayer": 92,
        "map/DyfiUtmLayer": 93,
        "map/ShakeMapStationLayer": 97,
        "mvc/View": 42,
        "pdl/Product": 118,
        "util/Util": 44
    }],
    97: [function (a, b, c) {
        "use strict";
        var d = a("core/Formatter"), e = a("util/Xhr"), f = {
            M: "Manually flagged",
            T: "Outlier",
            G: "Glitch (clipped or below noise)",
            I: "Incomplete time series",
            N: "Not in list of known stations"
        }, g = L.GeoJSON.extend({
            initialize: function (a) {
                var b = this;
                this._formatter = new d, this._layers = {}, this.stationURL = a, this.data = null, this.options = {
                    pointToLayer: function (a, c) {
                        var d = a.properties, e = b._formatter.mmi(d.intensity);
                        return "DYFI" === d.network || "INTENSITY" === d.network ? L.marker(c, {
                            icon: L.divIcon({
                                className: "dyfi-layer-icon dyfi-station-mmi" + e,
                                iconSize: [14, 14],
                                iconAnchor: [7, 7],
                                popupAnchor: [0, 0]
                            })
                        }) : L.marker(c, {
                            icon: L.divIcon({
                                className: "station-layer-icon station-mmi" + e,
                                iconSize: [14, 10],
                                iconAnchor: [7, 8],
                                popupAnchor: [0, -4]
                            })
                        })
                    }, onEachFeature: function (a, c) {
                        c.options.title = b._formatTitle(a, !0), c.bindPopup(b._generatePopupContent(a), {minWidth: 300})
                    }
                }
            }, onAdd: function (a) {
                null === this.data ? e.ajax({
                    url: this.stationURL, success: function (b) {
                        return function (c) {
                            b.data = c, b.addData(c), L.LayerGroup.prototype.onAdd.call(b, a)
                        }
                    }(this)
                }) : (this.addData(this.data), L.LayerGroup.prototype.onAdd.call(this, a))
            }, _generatePopupContent: function (a) {
                var b = a.properties, c = this._formatter.mmi(b.intensity), d = ['<div class="station-popup">', '<h2 class="station-title">', this._formatTitle(a), "</h2>", '<ul class="station-summary">', '<li class="station-summary-intensity roman mmi', c, '">', c, '<br><abbr title="Modified Mercalli Intensity">mmi</abbr></br>', "</li>", '<li class="station-summary-pga">', this._formatter.number(b.pga, 3, "&ndash;"), '<br><abbr title="Maximum Horizontal Peak Ground Velocity (%g)">pga</abbr></br>', "</li>", '<li class="station-summary-pgv">', this._formatter.number(b.pgv, 3, "&ndash;"), '<br><abbr title="Maximum Horizontal Peak Ground Velocity (cm/s)">pgv</abbr></br>', "</li>", '<li class="station-summary-distance">', this._formatter.number(b.distance, 1, "&ndash;"), " km", '<br><abbr title="Distance (km)">dist</abbr></br>', "</li>", "</ul>", '<dl class="station-metadata horizontal">', '<dt class="station-metadata-type">Type</dt>', '<dd class="station-metadata-type">', b.instrumentType || "&ndash;", "</dd>", '<dt class="station-metadata-location">Location</dt>', '<dd class="station-metadata-location">', this._formatLocation(a), "</dd>", '<dt class="station-metadata-source">Source</dt>', '<dd class="station-metadata-source">', b.source || "&ndash;", "</dd>", '<dt class="station-metadata-intensity">Intensity</dt>', '<dd class="station-metadata-intensity">', this._formatter.number(b.intensity, 1, "&ndash;"), "</dd>", "</dl>", this._createChannelTable(b.channels), "</div>"];
                return d.join("")
            }, _createChannelTable: function (a) {
                for (var b = 0, c = a.length, d = ['<table class="station-channels-map">', "<thead>", "<tr>", '<th scope="col" class="station-channels-map-name">name</th>', '<th scope="col" class="station-channels-map-pga">pga</th>', '<th scope="col" class="station-channels-map-pgv">pgv</th>', '<th scope="col" class="station-channels-map-psa03">psa03</th>', '<th scope="col" class="station-channels-map-psa10">psa10</th>', '<th scope="col" class="station-channels-map-psa30">psa30</th>', "</tr>", "</thead>", "<tbody>"]; c > b; b++)d.push(this._createChannelRow(a[b]));
                return d.push("</tbody></table>"), d.join("")
            }, _createAmplitudesObject: function (a) {
                var b, c = {}, d = a.length, e = null;
                for (b = 0; d > b; b++)e = a[b], c[e.name] = e;
                return c
            }, _createChannelRow: function (a) {
                var b = this._createAmplitudesObject(a.amplitudes);
                return ["<tr>", '<th scope="row" class="station-channel-name">', a.name, "</th>", '<td class="station-channel-pga">', this._formatComponent(b.pga), "</td>", '<td class="station-channel-pgv">', this._formatComponent(b.pgv), "</td>", '<td class="station-channel-psa03">', this._formatComponent(b.psa03), '<td class="station-channel-psa10">', this._formatComponent(b.psa10), "</td>", '<td class="station-channel-psa30">', this._formatComponent(b.psa30), "</td>", "</tr>"].join("")
            }, _formatTitle: function (a, b) {
                var c = a.properties, d = [];
                return b || d.push('<span class="station-code">'), d.push(c.code || "&ndash;"), b || d.push("</span>"), d.push(" "), b || d.push('<span class="station-name">'), d.push(c.name || "&ndash;"), b || d.push("</span>"), d.join("")
            }, _formatLocation: function (a) {
                return (a.properties.location ? a.properties.location + "<br/>" : "") + " (" + a.geometry.coordinates[1] + ", " + a.geometry.coordinates[0] + ")"
            }, _formatComponent: function (a) {
                var b, c, d = [];
                return a ? (b = a.flag, c = a.value, b && "0" !== b ? (d.push('<span class="station-flag">'), d.push(parseFloat(c, 10).toFixed(3)), f.hasOwnProperty(b) ? d.push('<abbr title="' + f[b] + '">(' + b + ")</abbr>") : d.push("(" + b + ")"), d.push("</span>")) : (d.push("<span>"), d.push(parseFloat(c, 10).toFixed(3)), d.push("</span>"))) : d.push("<span>&ndash;</span>"), d.join("")
            }
        });
        L.ShakeMapStationLayer = g, L.shakeMapStationLayer = function (a) {
            return new g(a)
        }, b.exports = L.shakeMapStationLayer
    }, {"core/Formatter": 56, "util/Xhr": 45}],
    98: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h, i, j = a("moment-tensor/Canvas"), k = a("util/Util"), l = a("mvc/View");
        d = Math.PI / 180, h = 180 / Math.PI, f = Number.EPSILON || 1e-16, g = .02, i = 85 * d, e = {
            axisSize: null,
            bgColor: "#fff",
            fillColor: "#ddd",
            height: null,
            labelAxes: !0,
            labelAxesFont: "24px Arial",
            labelPlanes: !0,
            labelPlanesFont: "14px Arial",
            lineColor: "#000",
            lineWidth: .25,
            plotAxes: !1,
            plotPlanes: !0,
            radius: null,
            size: 200,
            tensor: null,
            width: null,
            x0: null,
            y0: null
        };
        var m = function (a) {
            var b;
            for (b = 2 * Math.PI; 0 > a;)a += b;
            for (; a >= b;)a -= b;
            return a
        }, n = function (a) {
            var b, c;
            return b = Math.PI / 2 - a.azimuth(), c = a.plunge(), 0 > c && (c *= -1, b += Math.PI), b = m(b, 0, 2 * Math.PI), {
                v: a.eigenvalue,
                a: b,
                ca: Math.cos(b),
                sa: Math.sin(b),
                p: c,
                cp: Math.cos(c),
                sp: Math.sin(c)
            }
        }, o = function (a) {
            var b, c, h, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F;
            return b = l(a), c = function (a) {
                a = k.extend({}, e, a), o = a.bgColor, q = a.fillColor, s = a.labelAxes, t = a.labelAxesFont, u = a.labelPlanes, v = a.labelPlanesFont, w = a.lineColor, x = a.lineWidth, y = a.plotAxes, z = a.plotPlanes, B = a.size, C = a.tensor, A = a.radius || parseInt((B - 2) / 2, 10), h = a.axisSize || parseInt(A / 12.5, 10), r = a.height || B, D = a.width || B, E = a.x0 || D / 2, F = a.y0 || r / 2
            }, b.completePolygon = function (a) {
                var b, c, e, f, g;
                if (360 === a.x.length)return a;
                if (c = a.startAz.az, e = a.endAz.az, f = a.x, g = a.y, c - e > Math.PI && (c -= 2 * Math.PI), e - c > Math.PI && (c += 2 * Math.PI), e > c)for (b = e - d; b > c; b -= d)f.push(Math.sin(b)), g.push(Math.cos(b)); else for (b = e + d; c > b; b += d)f.push(Math.sin(b)), g.push(Math.cos(b));
                return a
            }, b.computeAzimuthLabel = function (a) {
                var c, d, e, f, g, h, i;
                return d = b.getPoint(a.azimuth, 0), h = d.x, i = d.y, c = 0 > h ? "right" : "left", f = b.measureText(a.text, a.font), e = (A + 10) / A, g = (A + 5) / A, a.align = c, a.size = f, a.tick = {
                    x: [h, h * g],
                    y: [i, i * g]
                }, a.x = h * e, a.y = i * e, 0 > i && (a.y = i * (A + 10 + Math.abs(i) * f.height / 2) / A), a
            }, b.destroy = k.compose(function () {
                b && (h = null, o = null, q = null, s = null, t = null, u = null, v = null, w = null, x = null, y = null, z = null, B = null, C = null, A = null, r = null, D = null, E = null, F = null, b = null, c = null)
            }, b.destroy), b.getPlaneLine = function (a) {
                var c, e, g, h, i, j, k, l;
                if (h = a.strike * d, c = a.dip * d, k = [], l = [], j = Math.abs(c - Math.PI / 2) < f)k.push(Math.sin(h), Math.sin(h + Math.PI)), l.push(Math.cos(h), Math.cos(h + Math.PI)); else for (i = Math.tan(c), e = 0; e <= Math.PI; e += d)c = Math.atan(i * Math.sin(e)), g = b.getPoint(h + e, c), k.push(g.x), l.push(g.y);
                return {x: k, y: l}
            }, b.getPoint = function (a, b) {
                var c, d, e;
                return 0 > b && (b *= -1, a += Math.PI), a = m(a), c = Math.sqrt(1 - Math.sin(b)), d = c * Math.sin(a), e = c * Math.cos(a), {
                    x: d,
                    y: e
                }
            }, b.getPolygons = function (a) {
                var c, e, g, h, j, k, l, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I;
                for (A = n(a.T), r = n(a.N), s = n(a.P), g = [], u = [], D = (A.v + r.v + s.v) / 3, A.v -= D, r.v -= D, s.v -= D, l = -r.v / A.v || f, q = D / A.v || f, z = !1, p = 0; 360 > p; p++)o = p * d, y = Math.sin(o), k = Math.cos(o), x = (2 + 2 * q) / (3 + (1 - 2 * l) * Math.cos(2 * o)), Math.abs(1 - x) <= f && (x = 1), x > 1 && (B = A, A = s, s = B, z = !z, l = -r.v / A.v || f, q = D / A.v || f, x = (2 + 2 * q) / (3 + (1 - 2 * l) * Math.cos(2 * o))), c = Math.asin(Math.sqrt(x)), w = Math.sin(c), j = Math.cos(c), H = j * A.sp + w * y * r.sp + w * k * s.sp, G = j * A.cp * A.ca + w * y * r.cp * r.ca + w * k * s.cp * s.ca, F = j * A.cp * A.sa + w * y * r.cp * r.sa + w * k * s.cp * s.sa, Math.abs(G) < f && Math.abs(F) < f ? (e = 0, C = 0) : (e = m(Math.atan2(F, G)), C = Math.acos(H / Math.sqrt(H * H + G * G + F * F)), C > Math.PI / 2 && (e = m(e + Math.PI), C = Math.PI - C)), g.push({
                    az: e,
                    takeoff: C
                });
                for (t = null, p = 0; p < g.length; p++)e = g[p], v = Math.SQRT2 * Math.sin(e.takeoff / 2), E = v * Math.sin(e.az), I = v * Math.cos(e.az), null !== t && (h = g[0 === p ? g.length - 1 : p - 1], Math.abs(Math.abs(e.az - h.az) - Math.PI) < 10 * d && e.takeoff > i && h.takeoff > i && null !== t && (t.endAz = h, u.push(t), t = null)), null === t && (t = {
                    x: [],
                    y: [],
                    startAz: e,
                    endAz: null
                }), t.x.push(E), t.y.push(I);
                return t.endAz = g[g.length - 1], u.push(t), u = b.mergePolygons(u), u = u.map(b.completePolygon), u.swapColors = z, u
            }, b.getVectorPoint = function (a) {
                return b.getPoint(Math.PI / 2 - a.azimuth(), a.plunge())
            }, b.measureText = function (a, c) {
                var d, e;
                return d = document.createElement("div"), d.setAttribute("style", "height:auto;position:absolute;visibility:hidden;white-space:nowrap;width:auto;font:" + c + ";"), d.innerText = a, b.el.appendChild(d), e = {
                    height: d.scrollHeight,
                    width: d.scrollWidth
                }, b.el.removeChild(d), d = null, e
            }, b.labelAxis = function (a, c) {
                var d;
                d = b.getVectorPoint(a), p.text(c, t, b.projectX(d.x), b.projectY(d.y), null, "black", "center")
            }, b.labelAzimuth = function (a) {
                var c;
                "size" in a || (a = b.computeAzimuthLabel(a)), c = a.tick, p.line(c.x.map(b.projectX), c.y.map(b.projectY), "black"), p.text(a.text, a.font, b.projectX(a.x), b.projectY(a.y), null, "black", a.align)
            }, b.makeRoomForAzimuthLabel = function (a) {
                var c, d, e, f, g, h, i;
                "size" in a || (a = b.computeAzimuthLabel(a)), h = b.projectX(a.x), i = b.projectY(a.y), f = a.size, c = 0, d = 0, e = 0, g = 0, c = i - f.height, g = i + f.height, "left" === a.align ? (d = h, e = h + f.width) : (d = h - f.width, e = h), c = 0 > c ? Math.abs(c) : 0, g > r ? g -= r : g = 0, d = 0 > d ? Math.abs(d) : 0, e > D ? e -= D : e = 0, D = D + d + e, E += d, r = r + g + c, F += g
            }, b.mergePolygons = function (a) {
                var b, c, d, e, f, h, i, j;
                if (1 === a.length)return a;
                for (b = 0; b < a.length; b++)c = b === a.length - 1 ? 0 : b + 1, d = a[b], e = d.x, f = d.y, h = a[c], i = h.x, j = h.y, Math.abs(e[e.length - 1] - i[0]) < g && Math.abs(f[f.length - 1] - j[0]) < g && (e.push.apply(e, i), f.push.apply(f, j), d.endAz = h.endAz, a.splice(c, 1));
                return a
            }, b.projectX = function (a) {
                return E + A * a
            }, b.projectY = function (a) {
                return r - (F + A * a)
            }, b.render = function () {
                var a, c, e, f, g, i;
                a = [], u && [C.NP1, C.NP2].forEach(function (b) {
                    var c, e;
                    c = b.strike * d, e = "(" + b.strike.toFixed(0) + ", " + b.dip.toFixed(0) + ", " + b.rake.toFixed(0) + ")", a.push({
                        azimuth: c,
                        font: v,
                        text: e
                    })
                }), a.forEach(b.makeRoomForAzimuthLabel), p = j({
                    height: r,
                    width: D
                }), p.context.lineWidth = x, e = b.getPolygons(C), e.swapColors && (f = o, o = q, q = f), g = b.projectX(0), i = b.projectY(0), p.circle(g, i, 2 * A, w, o), e.forEach(function (a) {
                    p.polygon(a.x.map(b.projectX), a.y.map(b.projectY), w, q);
                }), z && [C.NP1, C.NP2].forEach(function (a) {
                    var c;
                    c = b.getPlaneLine(a), p.line(c.x.map(b.projectX), c.y.map(b.projectY), w)
                }), p.circle(g, i, 2 * A, w), s ? (b.labelAxis(C.P, "P"), b.labelAxis(C.T, "T")) : y && (c = b.getVectorPoint(C.P), p.circle(c.x, c.y, h, "white", "black"), c = b.getVectorPoint(C.T), p.circle(c.x, c.y, h, "black", "white")), a.forEach(b.labelAzimuth), k.empty(b.el), b.el.appendChild(p.canvas), p.destroy(), p = null
            }, c(a), a = null, b
        };
        o.zeroToTwoPi = m, b.exports = o
    }, {"moment-tensor/Canvas": 99, "mvc/View": 42, "util/Util": 44}],
    99: [function (a, b, c) {
        "use strict";
        var d = a("util/Util"), e = {canvas: null, height: 100, width: 100}, f = function (a) {
            var b, c, f, g;
            return b = {}, c = function (a) {
                a = d.extend({}, e, a), f = a.canvas, null === f && (f = document.createElement("canvas"), f.width = a.width, f.height = a.height), g = f.getContext("2d"), b.canvas = f, b.context = g
            }, b.clear = function () {
                g.clearRect ? g.clearRect(0, 0, f.width, f.height) : f.width = f.width
            }, b.destroy = function () {
                f = null, g = null, c = null, b = null
            }, b.circle = function (a, c, d, e, f) {
                var h;
                h = g, h.beginPath(), h.arc(a, c, d / 2, 0, 2 * Math.PI, !0), h.closePath(), b._strokeAndFill(e, f)
            }, b.polygon = function (a, c, d, e) {
                var f, h, i;
                for (f = g, f.beginPath(), f.moveTo(a[0], c[0]), h = 1, i = a.length; i > h; h++)f.lineTo(a[h], c[h]);
                f.closePath(), b._strokeAndFill(d, e)
            }, b.line = function (a, b, c, d) {
                var e, f, h;
                for (e = g, e.beginPath(), e.moveTo(a[0], b[0]), f = 1, h = a.length; h > f; f++)e.lineTo(a[f], b[f]);
                this._strokeAndFill(c, d)
            }, b.measureText = function (a, b) {
                var c;
                return c = g, c.font = a, c.measureText(b)
            }, b.text = function (a, b, c, d, e, f, h) {
                var i, j;
                i = g, h = h || "left", i.font = b, "left" !== h && (j = i.measureText(a), "center" === h ? c -= j.width / 2 : "right" === h && (c -= j.width)), e && (i.strokeStyle = e, i.strokeText(a, c, d)), f && (i.fillStyle = f, i.fillText(a, c, d))
            }, b._strokeAndFill = function (a, b) {
                var c;
                c = g, a && (c.strokeStyle = a, c.stroke()), b && (c.fillStyle = b, c.fill())
            }, c(a), a = null, b
        };
        b.exports = f
    }, {"util/Util": 44}],
    100: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("core/Formatter"), i = a("core/Module"), j = a("moment-tensor/MomentTensorView"), k = a("scientific/ScientificSummaryModule"), l = a("util/Util");
        e = "moment-tensor", f = "Moment Tensor", g = ["moment-tensor"], d = {formatter: null};
        var m = function (a) {
            var b, c, g, m;
            return b = i(a), c = function (a) {
                a = l.extend({}, d, a), g = a.formatter || h(), b.ID = e, b.TITLE = f
            }, b.destroy = l.compose(function () {
                m && m.destroy(), m = null, g = null, c = null, b = null
            }, b.destroy), b.render = function () {
                var a;
                a = b.getProduct("moment-tensor"), b.renderContent(a), b.renderHeader(a), b.renderFooter(a)
            }, b.renderContent = function (a) {
                m && m.destroy && (m.destroy(), m = null), a ? (m = j({
                    el: b.content,
                    formatter: g,
                    model: a
                }), m.render()) : b.content.innerHTML = '<p class="alert error">No Moment Tensor Found!</p>'
            }, b.renderFooter = function (a) {
                var c;
                l.empty(b.footer), a && (c = b.getProductFooter({product: a}), c && b.footer.appendChild(c))
            }, b.renderHeader = function (a) {
                var c;
                l.empty(b.header), b.header.innerHTML = "<h3>" + b.TITLE + "</h3>", a && (c = b.getProductHeader({
                    product: a,
                    summaryModule: k
                }), c && b.header.appendChild(c))
            }, c(a), a = null, b
        };
        m.ID = e, m.TITLE = f, m.TYPES = g, b.exports = m
    }, {
        "core/Formatter": 56,
        "core/Module": 58,
        "moment-tensor/MomentTensorView": 102,
        "scientific/ScientificSummaryModule": 119,
        "util/Util": 44
    }],
    101: [function (a, b, c) {
        "use strict";
        var d = a("core/BasicPinView"), e = a("moment-tensor/BeachBallView"), f = a("moment-tensor/MomentTensorModule"), g = a("moment-tensor/Tensor"), h = a("util/Util"), i = {
            className: "moment-tensor-pin-beachball",
            fillColor: "#6ea8ff",
            module: f
        }, j = function (a) {
            var b, c, f, j, k, l;
            return a = h.extend({}, i, a), b = d(a), c = function (a) {
                j = a.className, k = a.fillColor, l = g.fromProduct(b.model)
            }, b.destroy = h.compose(function () {
                f && f.destroy(), f = null, j = null, k = null, l = null, c = null, b = null
            }, b.destroy), b.renderPinContent = function () {
                h.empty(b.content), f = e({
                    fillColor: k,
                    labelAxes: !1,
                    labelPlanes: !1,
                    size: 200,
                    tensor: l
                }), f.el.classList.add(j), b.content.appendChild(f.el), f.render()
            }, c(a), a = null, b
        };
        b.exports = j
    }, {
        "core/BasicPinView": 51,
        "moment-tensor/BeachBallView": 98,
        "moment-tensor/MomentTensorModule": 100,
        "moment-tensor/Tensor": 103,
        "util/Util": 44
    }],
    102: [function (a, b, c) {
        "use strict";
        var d = a("core/Attribution"), e = a("moment-tensor/BeachBallView"), f = a("core/Formatter"), g = a("core/ProductView"), h = a("moment-tensor/Tensor"), i = a("util/Util"), j = {
            empty: "&ndash;",
            fillColor: "#6ea8ff",
            formatter: null,
            tensor: null
        }, k = 180 / Math.PI, l = function (a) {
            var b, c, l, m, n, o;
            return b = g(a), c = function (a) {
                a = i.extend({}, j, a), l = a.empty, m = a.fillColor, n = a.formatter || f(), o = h.fromProduct(b.model)
            }, b.destroy = i.compose(function () {
                l = null, m = null, n = null, c = null, o = null, b = null
            }, b.destroy), b.getAxes = function (a) {
                var b, c, d;
                return c = function (b, c) {
                    var d, f, g;
                    return d = Math.PI / 2 - b.azimuth(), f = b.plunge(), g = b.eigenvalue / a.scale, 0 > f && (d += Math.PI, f = -1 * f), d = e.zeroToTwoPi(d), d = Math.round(d * k) + "&deg;", f = Math.round(f * k) + "&deg", g = g.toFixed(3) + "e+" + a.exponent + " " + a.units, '<tr><th scope="row">' + c + "</th><td>" + g + "</td><td>" + f + "</td><td>" + d + "</td></tr>"
                }, d = document.createDocumentFragment(), b = document.createElement("h4"), b.innerHTML = "Principal Axes", d.appendChild(b), b = document.createElement("div"), b.classList.add("horizontal-scrolling"), b.innerHTML = "<table><thead><tr><th>Axis</th><th>Value</th><th>Plunge</th><th>Azimuth</th></tr></thead><tbody>" + c(a.T, "T") + c(a.N, "N") + c(a.P, "P") + "</tbody></table>", d.appendChild(b), d
            }, b.getInfo = function (a) {
                var c, e, f, g, h, i, j, k, m, o;
                return o = b.model, c = o.getProperty("eventsource"), e = o.get("source"), f = o.getProperty("beachball-source") || e, g = n.depth(a.depth, "km"), i = o.getProperty("sourcetime-duration"), i = i ? i / 2 + " s" : l, j = n.magnitude(a.magnitude, o.getProperty("derived-magnitude-type") || ""), k = (a.moment / a.scale).toFixed(3) + "e+" + a.exponent + " " + a.units, m = Math.round(100 * a.percentDC) + " %", c = c.toUpperCase(), e = d.getContributorReference(e), f = d.getContributorReference(f), h = document.createElement("div"), h.classList.add("moment-tensor-info"), h.classList.add("horizontal-scrolling"), h.innerHTML = '<table><tbody><tr><th scope="row">Moment</th></th><td>' + k + '</td></tr><tr><th scope="row">Magnitude</th><td>' + j + '</td></tr><tr><th scope="row">Depth</th><td>' + g + '</td></tr><tr><th scope="row">Percent <abbr title="Double Couple">DC</abbr></th><td>' + m + '</td></tr><tr><th scope="row">Half Duration</th><td>' + i + '</td></tr><tr><th scope="row">Catalog</th><td>' + c + '</td></tr><tr><th scope="row">Data Source</th><td>' + f + '</td></tr><tr><th scope="row">Contributor</th><td>' + e + "</td></tr></tbody></table>", h
            }, b.getPlanes = function (a) {
                var b, c, d;
                return c = function (a, b) {
                    var c, d, e;
                    return c = Math.round(a.dip) + "&deg;", d = Math.round(a.rake) + "&deg;", e = Math.round(a.strike) + "&deg", '<tr><th scope="row">' + b + "</th><td>" + e + "</td><td>" + c + "</td><td>" + d + "</td></tr>"
                }, d = document.createDocumentFragment(), b = document.createElement("h4"), b.innerHTML = "Nodal Planes", d.appendChild(b), b = document.createElement("div"), b.classList.add("horizontal-scrolling"), b.innerHTML = "<table><thead><tr><th>Plane</th><th>Strike</th><th>Dip</th><th>Rake</th></tr></thead><tbody>" + c(a.NP1, "NP1") + c(a.NP2, "NP2") + "</tbody></table>", d.appendChild(b), d
            }, b.getTitle = function (a) {
                var b, c, d;
                return d = a.type, null !== d && (d = d.toUpperCase(), "MWW" === d ? c = "W-phase Moment Tensor (Mww)" : "MWC" === d ? c = "Centroid Moment Tensor (Mwc)" : "MWB" === d ? c = "Body-wave Moment Tensor (Mwb)" : "MWR" === d && (c = "Regional Moment Tensor (Mwr)")), c || (c = null !== d ? "Moment Tensor (" + a.type + ")" : "Moment Tensor"), b = document.createElement("h3"), b.innerHTML = c, b
            }, b.render = function () {
                var a, c, d, f;
                a = b.el, a.innerHTML = '<section class="moment-tensor-view"><header class="title"></header><div class="row"><div class="column one-of-two"></div><div class="column one-of-two"></div></div></section>', f = a.querySelector(".title"), d = a.querySelector(".column"), c = a.querySelector(".column + .column"), f.appendChild(b.getTitle(o)), d.appendChild(b.getInfo(o)), d.appendChild(b.getPlanes(o)), d.appendChild(b.getAxes(o)), c = e({
                    el: c,
                    fillColor: m,
                    size: 320,
                    tensor: o
                }), c.render(), c.destroy(), c = null
            }, c(a), a = null, b
        };
        b.exports = l
    }, {
        "core/Attribution": 50,
        "core/Formatter": 56,
        "core/ProductView": 60,
        "moment-tensor/BeachBallView": 98,
        "moment-tensor/Tensor": 103,
        "util/Util": 44
    }],
    103: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h, i, j, k, l, m = a("math/Matrix");
        d = {
            "smi:ci.anss.org/momentTensor/TMTS": "TMTS",
            "smi:nc.anss.org/momentTensor/TMTS": "TMTS",
            "smi:nc.anss.org/momentTensor/TMTS-ISO": "TMTS-ISO",
            "smi:uu.anss.org/momentTensor/TDMT": "TDMT"
        }, e = Math.PI / 180, f = 180 / Math.PI, g = function (a, b) {
            return a = a.unit(), b = b.unit(), a.z() > 0 && (a = a.multiply(-1), b = b.multiply(-1)), {
                strike: j(Math.atan2(-a.x(), a.y()), 0, 2 * Math.PI) * f,
                dip: Math.acos(-a.z()) * f,
                rake: Math.atan2(-b.z(), b.cross(a).z()) * f
            }
        }, h = function (a) {
            var b, c, e, f;
            return f = null, e = a.get("type"), c = a.get("properties") || {}, "focal-mechanism" === e ? f = i(Number(c["nodal-plane-1-strike"]), Number(c["nodal-plane-1-dip"]), Number(c["nodal-plane-1-rake"] || c["nodal-plane-1-slip"] || 0), Number(c["scalar-moment"] || Math.SQRT2)) : "moment-tensor" === e && (f = l({
                mrr: Number(c["tensor-mrr"]),
                mtt: Number(c["tensor-mtt"]),
                mpp: Number(c["tensor-mpp"]),
                mrt: Number(c["tensor-mrt"]),
                mrp: Number(c["tensor-mrp"]),
                mtp: Number(c["tensor-mtp"])
            }), b = a.getProperty("derived-depth"), null === b && (b = a.getProperty("depth")), f.depth = b), f && (e = a.getProperty("derived-magnitude-type"), e || (e = a.getProperty("beachball-type"), e && d.hasOwnProperty(e) && (e = d[e])), e && (f.type = e)), f
        }, i = function (a, b, c, d) {
            var f, g, h, i, j, k, m, n, o, p, q, r, s, t, u, v, w, x, y;
            return t = a * e, y = Math.sin(t), j = Math.cos(t), v = Math.sin(2 * t), g = Math.cos(2 * t), k = b * e, w = Math.sin(k), h = Math.cos(k), u = Math.sin(2 * k), f = Math.cos(2 * k), s = (c % 90 !== 0 ? c : c + 1e-15) * e, x = Math.sin(s), i = Math.cos(s), m = -1 * (w * i * v + u * x * y * y), n = w * i * g + u * x * v * .5, o = -1 * (h * i * j + f * x * y), p = w * i * v - u * x * j * j, q = -1 * (h * i * y - f * x * j), r = u * x, l({
                mrr: r * d,
                mtt: m * d,
                mpp: p * d,
                mtp: -n * d,
                mrp: -q * d,
                mrt: o * d
            })
        }, j = function (a, b, c) {
            for (var d = c - b; b > a;)a += d;
            for (; a >= c;)a -= d;
            return a
        }, k = function (a, b) {
            var c, d;
            return c = a.eigenvalue, d = b.eigenvalue, d > c ? 1 : c > d ? -1 : 0
        }, l = function (a) {
            var b, c;
            return b = {}, c = function (a) {
                var c, d, e, f, h, i, j, l, n, o, p, q, r, s;
                b.mtt = p = a.mtt || a.mxx || 0, b.mpp = i = a.mpp || a.myy || 0, b.mrr = j = a.mrr || a.mzz || 0, b.mrt = l = a.mrt || a.mxz || 0, b.mrp = n = a.mrp || -a.myz || 0, b.mtp = o = a.mtp || -a.mxy || 0, b.units = "N-m", b.moment = f = Math.sqrt(.5 * (j * j + p * p + i * i + 2 * (l * l + n * n + o * o))), b.moment_log10 = h = Math.log(f) / Math.LN10, b.exponent = d = parseInt(h, 10), b.scale = Math.pow(10, d), b.magnitude = 2 / 3 * (h - 9.1), b.matrix = m([p, -o, l, -o, i, -n, l, -n, j], 3, 3), c = b.matrix.jacobi(), c.sort(k), b.T = s = c[0], b.N = q = c[1], b.P = r = c[2], b.fCLVD = q.eigenvalue / Math.max(Math.abs(s.eigenvalue), Math.abs(r.eigenvalue)), b.percentDC = Math.abs(1 - Math.abs(b.fCLVD) / .5), b.forceThrust = Math.pow(Math.sin(s.plunge()), 2), b.forceStrikeSlip = Math.pow(Math.sin(q.plunge()), 2), b.forceNormal = Math.pow(Math.sin(r.plunge()), 2), e = s.subtract(r).unit(), q = s.add(r).unit(), b.NP1 = g(e, q), b.NP2 = g(q, e)
            }, c(a), a = null, b
        }, l.calculatePlane = g, l.fromProduct = h, l.fromStrikeDipRake = i, b.exports = l
    }, {"math/Matrix": 32}],
    104: [function (a, b, c) {
        "use strict";
        var d = a("oaf/ForecastView"), e = a("core/Formatter"), f = a("util/Util"), g = {}, h = function (a) {
            var b, c, h;
            return a = f.extend({}, g, a), b = d(a), c = function (a) {
                b.el.classList.add("oaf-forecast-table-view"), h = a.formatter || e()
            }, b.destroy = f.compose(function () {
                b.el.classList.remove("oaf-forecast-table-view"), h = null, c = null, b = null
            }, b.destroy), b.getRowHeader = function (a) {
                var b;
                return b = document.createElement("th"), b.setAttribute("scope", "row"), b.setAttribute("rowspan", a.bins.length), b.innerHTML = ["<strong>", a.label, "</strong>", "<br/>", h.datetime(new Date(a.timeStart)), "<br/>through<br/>", h.datetime(new Date(a.timeEnd))].join(""), b
            }, b.getTable = function (a) {
                var c, d;
                return d = document.createElement("div"), d.classList.add("horizontal-scrolling"), c = d.appendChild(document.createElement("table")), c.innerHTML = ["<thead>", "<tr>", '<th scope="col">', "Time Window for Analysis", "</th>", '<th scope="col">', "Magnitude (M) range of aftershocks considered", "</th>", '<th scope="col">', "Most likely number of aftershocks (95 % condidence)", "</th>", '<th scope="col">', "Probability of one or more aftershocks", "</th>", "</tr>", "</thead>"].join(""), c.appendChild(b.getTableBody(a)), d
            }, b.getTableBody = function (a) {
                var c;
                return c = document.createElement("tbody"), a.forecast.forEach(function (a) {
                    c.appendChild(b.getTableRow(a))
                }), c
            }, b.getTableRow = function (a) {
                var c, d;
                return c = document.createDocumentFragment(), d = c.appendChild(document.createElement("tr")), d.classList.add("separator"), d.appendChild(b.getRowHeader(a)), a.bins.forEach(function (a, e) {
                    var f;
                    f = 0 === e ? d : c.appendChild(document.createElement("tr")), f.appendChild(b.getTableRowDetails(a))
                }), c
            }, b.getTableRowDetails = function (a) {
                var b, c, d, e;
                return e = document.createDocumentFragment(), c = e.appendChild(document.createElement("td")), c.innerHTML = "M &ge; " + a.magnitude, d = e.appendChild(document.createElement("td")), a.p95minimum + a.p95maximum ? d.innerHTML = a.p95minimum + " to " + a.p95maximum : d.innerHTML = "*", b = e.appendChild(document.createElement("td")), a.probability < .01 ? b.innerHTML = "&lt; 1 %" : a.probability < 1 ? b.innerHTML = h.number(100 * a.probability, 0, "&ndash", "%") : b.innerHTML = "&gt; 99 %", e
            }, b.renderForecast = function () {
                var a, c;
                b.el.innerHTML = "", c = b.el.appendChild(document.createElement("p")), c.classList.add("alert"), c.innerHTML = ["Note: The expected rate of earthquakes continues to decline throughout ", "the time windows. The probabilities in the longer time windows are ", "higher only because the rates are being summed over a longer time ", "period. These longer periods may be useful when planning recovery ", "and rebuliding projects."].join(""), b.el.appendChild(b.getTable(b.forecast || {forecast: []})), a = b.el.appendChild(document.createElement("small")), a.innerHTML = "* Earthquake possible but with a low probability."
            }, c(a), a = null, b
        };
        b.exports = h
    }, {"core/Formatter": 56, "oaf/ForecastView": 106, "util/Util": 44}],
    105: [function (a, b, c) {
        "use strict";
        var d = a("oaf/ForecastView"), e = a("core/Formatter"), f = a("pdl/Product"), g = a("util/Util"), h = {}, i = function (a) {
            var b, c, i, j, k;
            return a = g.extend({}, h, a), b = d(a), c = function (a) {
                b.el.classList.add("oaf-forecast-text-view"), i = a.catalogEvent, j = a.formatter || e(), k = a.product || f()
            }, b.getCommentary = function (a) {
                var c, d, e, f, g, h, l, m, n, o, p, q, r, s, t, u;
                return i ? (r = i.getSummary() || {properties: {}}, o = i.getMagnitude(), e = o >= 6 ? "the next year or longer" : "the next month or longer", p = o >= 6 ? "the first few weeks" : "the first few days", n = j.magnitude(o), q = r.properties.place, s = j.distance(2 * k.getProperty("wcradius"), "km"), c = o >= 6 ? "the coming months" : "the coming weeks", t = j.datetime(6048e5 + k.get("updateTime") || 0), u = a.forecast[1], g = b.getProbAndExp(u.bins[0]), h = b.getProbAndExp(u.bins[1]), l = b.getProbAndExp(u.bins[2]), m = b.getProbAndExp(u.bins[3]), f = o >= 6 ? "next month and next year" : "next week and next month") : (e = "the next month or longer", p = "the first few days", q = "&ndash;", s = "&ndash;", c = "the coming weeks", t = j.datetime(6048e5 + (new Date).getTime()), g = {
                    expectation: "&ndash;",
                    probability: "&ndash;"
                }, h = {expectation: "&ndash;", probability: "&ndash;"}, l = {
                    expectation: "&ndash;",
                    probability: "&ndash;"
                }, m = {
                    expectation: "&ndash;",
                    probability: "&ndash;"
                }, f = "next week and next month"), d = document.createElement("article"), d.innerHTML = ["<h2>What to Expect</h2>", "<p>", "It is normal for an earthquake of this size to cause an ", "increase in the number of earthquakes (called aftershocks) ", "in the area within ", e, ". ", "Most of these aftershocks will likely occur within ", p, " ", "and the number of aftershocks will drop off over time, but a ", "large aftershock can increase the numbers again, temporarily.", "</p>", "<p>", "The aftershocks will occur mostly in the area affected by the ", "magnitude ", n, " ", q, " ", "earthquake, approximately within ", s, " of ", q, ".", "</p>", "<p>", "When there are more earthquakes, the chance of a large ", "earthquake is greater and the chance of damage is greater. ", "The USGS advises everyone to remain aware of the possibility ", "of aftershocks in ", c, ", ", "especially when in or around vulnerable structures such as ", "unreinforced masonry buildings.", "</p>", "<p>", "No one can predict the exact time or place of any earthquake, ", "including aftershocks. The USGS can forecast how many ", "earthquakes to expect, or the chance of having an earthquake ", "within a given time period.", "</p>", "<h2>Current Aftershock Forecast</h2>", "<p>", "The USGS estimates the chance of more aftershocks as follows.<br/>", "Within the next week until ", t, "</p>", "<ul>", "<li>", "the chance of an earthquake large enough to feel ", "(magnitude 3 or higher) is ", g.probability, ", and ", g.expectation, ".", "</li>", "<li>", "the chance of an earthquake of magnitude 5 or higher is ", h.probability, ", and ", h.expectation, ".", "</li>", "<li>", "the chance of an earthquake of magnitude 6 or higher is ", l.probability, ", and ", l.expectation, ".", "</li>", "<li>", "the chance of an earthquake of magnitude 7 or higher is ", m.probability, ", and ", m.expectation, ".", "</li>", "</ul>", "<p>", "The chance of earthquakes large enough to be felt or to cause ", "damage remains elevated for the ", f, ".", "</p>", "<p>", "The USGS calculates this earthquake forecast using a statistical ", "analysis based on past earthquakes and the aftershocks recorded ", "for this sequence. The forecast changes as time passes due to ", "the decay in the frequency of aftershocks, larger aftershocks ", "that may trigger further earthquakes, and changes in forecast ", "modeling based on the earthquake data collected.", "</p>"].join(""), d
            }, b.getProbAndExp = function (a) {
                var b, c;
                return c = a.probability <= .01 ? "1 in 100" : a.probability < 1 ? j.number(100 * a.probability, 0, "&ndash", "%") : "&gt; 99 %", b = a.p95minimum + a.p95maximum ? "it is most likely that " + a.p95minimum + " to " + a.p95maximum + " such earthquakes may occur" : "such an earthquake is possible, but with low probability", {
                    expectation: b,
                    probability: c
                }
            }, b.destroy = g.compose(function () {
                b.el.classList.remove("oaf-forcast-text-view"), i = null, j = null, k = null, c = null, b = null
            }, b.destroy), b.renderForecast = function () {
                b.el.innerHTML = "", b.el.appendChild(b.getCommentary(b.forecast))
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"core/Formatter": 56, "oaf/ForecastView": 106, "pdl/Product": 118, "util/Util": 44}],
    106: [function (a, b, c) {
        "use strict";
        var d = a("core/ContentView"), e = a("util/Util"), f = {}, g = function (a) {
            var b, c;
            return a = e.extend({}, f, a), b = d(a), c = function () {
            }, b.destroy = e.compose(function () {
                c = null, b = null
            }, b.destroy), b.onError = function () {
                b.el.innerHTML = '<p class="alert error">Failed to load forecast data.</p>'
            }, b.onSuccess = function (a) {
                b.forecast = a, b.render(), b.trigger("forecast", b.forecast)
            }, b.render = function () {
                b.forecast ? b.renderForecast() : (b.el.innerHTML = "<p>Loading content&hellip;</p>", b.fetchData())
            }, b.renderForecast = function () {
                b.el.innerHTML = JSON.stringify(b.forecast)
            }, b.setForecast = function (a) {
                b.forecast = a
            }, c(a), a = null, b
        };
        b.exports = g
    }, {"core/ContentView": 52, "util/Util": 44}],
    107: [function (a, b, c) {
        "use strict";
        var d = a("oaf/ForecastView"), e = a("util/Util"), f = {}, g = function (a) {
            var b, c;
            return a = e.extend({}, f, a), b = d(a), c = function () {
            }, b.destroy = e.compose(function () {
                c = null, b = null
            }, b.destroy), b.renderForecast = function () {
                var a;
                a = b.forecast.model, b.el.innerHTML = ["<h3>", a.name, "</h3>", "<p>", "Reference Link: ", '<a href="', a.reference, '">', a.reference, "</a>", "</p>", '<table class="oaf-model-parameters">', "<tbody>", Object.keys(a.parameters).reduce(function (b, c) {
                    return b.push('<tr><th scope="row">' + c + "</th><td>" + a.parameters[c] + "</td></tr>"), b
                }, []).join(""), "</tbody>", "</table>"].join("")
            }, c(a), a = null, b
        };
        b.exports = g
    }, {"oaf/ForecastView": 106, "util/Util": 44}],
    108: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("core/Formatter"), i = a("core/LinkProductView"), j = a("oaf/OafView"), k = a("scientific/ScientificSummaryModule"), l = a("core/TextProductView"), m = a("util/Util"), n = a("core/Module");
        e = "oaf", f = "Aftershock Forecast", g = ["oaf"], d = {};
        var o = function (a) {
            var b, c, g, o, p;
            return a = m.extend({}, d, a), b = n(a), c = function (a) {
                b.ID = e, b.TITLE = f, g = a.formatter || h(), p = []
            }, b.destroy = m.compose(function () {
                b.destroyViews(), g = null, c = null, b = null
            }, b.destroy), b.destroyViews = function () {
                o && o.destroy && o.destroy(), p && p.forEach(function (a) {
                    if (a && a.destroy)try {
                        a.destroy()
                    } catch (b) {
                    }
                }), o = null, p = null
            }, b.getOafLinkViews = function () {
                var a, c, d, e;
                return e = document.createDocumentFragment(), c = b.getProducts("oaf-link"), c.length && (a = e.appendChild(document.createElement("h3")), d = e.appendChild(document.createElement("ul")), a.innerHTML = "More Aftershock Information", c.forEach(function (a) {
                    var b;
                    b = i({
                        el: d.appendChild(document.createElement("li")),
                        formatter: g,
                        model: a
                    }), b.render(), p.push(b)
                })), e
            }, b.getOafTextViews = function () {
                var a, c;
                return a = document.createDocumentFragment(), c = b.getProducts("oaf-header"), c.forEach(function (b) {
                    var c;
                    c = l({model: b, el: a.appendChild(document.createElement("div"))}), c.render(), p.push(c)
                }), a
            }, b.render = function () {
                var a;
                b.destroyViews(), p = [], b.header.innerHTML = "", b.content.innerHTML = "", b.footer.innerHTML = "", a = b.getProduct("oaf"), a ? (b.renderHeader(a), b.renderContent(a), b.renderFooter(a)) : b.content.innerHTML = '<p class="alert info">No aftershock forecast is available for this event.</p>'
            }, b.renderContent = function (a) {
                a && (o = j({catalogEvent: b.model.get("event"), el: b.content, model: a}), o.render())
            }, b.renderFooter = function (a) {
                var c;
                a && (c = b.footer.appendChild(document.createElement("small")), c.innerHTML = ["This advisory will be updated on or before: ", g.datetime(new Date(6048e5 + a.get("updateTime")))].join("")), b.footer.appendChild(b.getOafLinkViews()), a && b.footer.appendChild(b.getProductFooter({product: a}))
            }, b.renderHeader = function (a) {
                b.header.innerHTML = "<h3>" + b.TITLE + "</h3>", a && b.header.appendChild(b.getProductHeader({
                    product: a,
                    summaryModule: k
                })), b.header.appendChild(b.getOafTextViews())
            }, c(a), a = null, b
        };
        o.ID = e, o.TITLE = f, o.TYPES = g, b.exports = o
    }, {
        "core/Formatter": 56,
        "core/LinkProductView": 57,
        "core/Module": 58,
        "core/TextProductView": 62,
        "oaf/OafView": 109,
        "scientific/ScientificSummaryModule": 119,
        "util/Util": 44
    }],
    109: [function (a, b, c) {
        "use strict";
        var d, e, f = a("oaf/ForecastTableView"), g = a("oaf/ForecastTextView"), h = a("oaf/ModelDetailsView"), i = a("core/ProductView"), j = a("tablist/TabList"), k = a("util/Util");
        d = {}, e = {
            "forecast-text": {title: "Commentary", content: "forecast.json", subview: g},
            "forecast-table": {title: "Forecast Probabilities", content: "forecast.json", subview: f},
            "forecast-model": {title: "Model Details", content: "forecast.json", subview: h}
        };
        var l = function (a) {
            var b, c, f, g, h, l, m;
            return a = k.extend({}, d, a), b = i(a), c = function (a) {
                b.el.classList.add("oaf-view"), f = a.catalogEvent, g = k.extend({}, e, a.resources)
            }, b.createTab = function (a) {
                var c, d, e;
                return c = b.model.getContent(a.content), c && a.subview && (d = a.subview({
                    catalogEvent: f,
                    model: c,
                    product: b.model
                }), d.on("forecast", "setSubviewForecast", b), h.push(d), e = {
                    title: a.title,
                    content: d.el,
                    onDestroy: function () {
                        try {
                            d.destroy()
                        } catch (a) {
                        }
                    },
                    onSelect: function () {
                        d.render()
                    }
                }), e
            }, b.destroy = k.compose(function () {
                b.el.classList.remove("oaf-view"), b.destroyTabList(), g = null, l = null, m = null, c = null, b = null
            }, b.destroy), b.destroyTabList = function () {
                l && l.destroy && l.destroy(), h = null, l = null, m = null
            }, b.render = function () {
                b.destroyTabList(), l = j({el: b.el, tabs: []}), h = [], m = {}, Object.keys(g).forEach(function (a) {
                    var c, d;
                    c = g[a], d = b.createTab(c), d && (m[a] = l.addTab(d))
                })
            }, b.setSubviewForecast = function (a) {
                h.forEach(function (b) {
                    b && "function" == typeof b.setForecast && b.setForecast(a)
                })
            }, c(a), a = null, b
        };
        b.exports = l
    }, {
        "core/ProductView": 60,
        "oaf/ForecastTableView": 104,
        "oaf/ForecastTextView": 105,
        "oaf/ModelDetailsView": 107,
        "tablist/TabList": 31,
        "util/Util": 44
    }],
    110: [function (a, b, c) {
        "use strict";
        var d = a("accordion/Accordion"), e = a("core/Attribution"), f = a("origin/QuakemlView"), g = a("util/Util"), h = {}, i = "&ndash;", j = function (a) {
            var b, c, j;
            return a = g.extend({}, h, a), b = f(a), c = function () {
                j = d({el: b.el})
            }, b.destroy = g.compose(function () {
                j.destroy(), j = null, c = null, b = null
            }, b.destroy), b.getContributionsMarkup = function (a) {
                return a && 0 !== a.length ? ['<div class="horizontal-scrolling">', '<table class="magnitude-stations">', "<thead>", b.getStationTableHeaderRow(), "</thead>", "<tbody>", a.reduce(function (a, c) {
                    return a.push(b.getStationTableRow(c)), a
                }, []).join(""), "</tbody>", "</table>", "</div>"].join("") : '<p class="alert info">No amplitudes contributed for this magnitude.</p>'
            }, b.getStationTableHeaderRow = function () {
                return ["<tr>", '<th scope="col">', '<abbr title="Network Station Channel Location">Channel</abbr>', "</th>", '<th scope="col">Type</th>', '<th scope="col">Amplitude</th>', '<th scope="col">Period</th>', '<th scope="col">Status</th>', '<th scope="col">Magnitude</th>', '<th scope="col">Weight</th>', "</tr>"].join("")
            }, b.getStationTableRow = function (a) {
                var b, c, d, e, f, g, h, j, k;
                return g = a.stationMagnitude, c = g.amplitude || {}, f = g.waveformID || c.waveformID, b = i, d = g.mag.value || i, e = i, h = c.evaluationMode || g.status || "automatic", j = g.type, k = a.weight || i, c.genericAmplitude && (b = c.genericAmplitude.value + "&nbsp;" + (c.unit || "")), c.period && (e = c.period.value + " s"), e === i && "s" === c.unit && (e = b, b = i), ["<tr>", '<th scope="row">', f.networkCode, " ", f.stationCode, " ", f.channelCode, " ", f.locationCode, "</th>", '<td class="type">', j, "</td>", '<td class="amplitude">', b, "</td>", '<td class="period">', e, "</td>", '<td class="status">', h, "</td>", '<td class="magnitude">', d, "</td>", '<td class="weight">', k, "</td>", "</tr>"].join("")
            }, b.getErrorMarkup = function (a) {
                return ["<li>", '<span class="bubble">', "<span>", a, "</span>", '<abbr title="Magnitude Error">Error</abbr>', "</span>", "</li>"].join("")
            }, b.getMagnitudeMarkup = function (a) {
                var c, d, e, f, g, h, j, k;
                return a = a || {}, e = a.mag || {}, g = a.creationInfo ? a.creationInfo.agencyID : b.product.get("source"), c = a.contributions || [], j = a.type || i, k = e.value || i, d = e.uncertainty || i, h = a.stationCount || i, f = this.product.getProperty("magnitude-type") || "", ['<section class="accordion accordion-closed magnitude-view-item">', f.toLowerCase() === j.toLowerCase() ? '<h3 class="preferred">' : "<h3>", j, "</h3>", '<ul class="magnitude-summary">', b.getValueMarkup(k), b.getErrorMarkup(d), b.getStationsMarkup(h), b.getSourceMarkup(g), "</ul>", '<a href="javascript:void(null);" class="accordion-toggle">Details</a>', '<div class="accordion-content">', b.getContributionsMarkup(c), "</div>", "</section>"].join("")
            }, b.getMagnitudesMarkup = function (a) {
                return a = a || [], a.reduce(function (a, c) {
                    return a.push(b.getMagnitudeMarkup(c)), a
                }, []).join("")
            }, b.getSourceMarkup = function (a) {
                return ["<li>", '<span class="bubble">', e.getContributorReference(a), '<abbr title="Magnitude Data Source">Source</abbr>', "</span>", "</li>"].join("")
            }, b.getStationsMarkup = function (a) {
                return ["<li>", '<span class="bubble">', "<span>", a, "</span>", '<abbr title="Number of Stations">Stations</abbr>', "</span>", "</li>"].join("")
            }, b.getValueMarkup = function (a) {
                return ["<li>", '<span class="bubble bubble-border">', "<span><strong>", a, "</strong></span>", '<abbr title="Magnitude">Mag</abbr>', "</span>", "</li>"].join("")
            }, b.renderQuakeml = function () {
                var a;
                b.quakeml && (a = b.quakeml.getMagnitudes(), a.length ? b.el.innerHTML = b.getMagnitudesMarkup(a) : b.el.innerHTML = '<p class="alert info">No magnitude data available.</p>')
            }, c(a), a = null, b
        };
        b.exports = j
    }, {"accordion/Accordion": 2, "core/Attribution": 50, "origin/QuakemlView": 115, "util/Util": 44}],
    111: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("core/Formatter"), i = a("core/Module"), j = a("origin/OriginView"), k = a("scientific/ScientificSummaryModule"), l = a("util/Util");
        e = "origin", f = "Origin", g = ["origin", "phase-data"], d = {};
        var m = function (a) {
            var b, c, g, m;
            return b = i(a), c = function (a) {
                a = l.extend({}, d, a), g = a.formatter || h, b.ID = e, b.TITLE = f
            }, b.destroy = l.compose(function () {
                m && m.destroy && m.destroy(), g = null, m = null, c = null, b = null
            }, b.destroy), b.getOriginProduct = function () {
                var a, c, d, e;
                return c = b.getProduct("origin"), c && (a = b.model.get("event"), d = a.getProductById("phase-data", c.get("source"), c.get("code"))), e = d ? d : c
            }, b.render = function () {
                var a;
                a = b.getOriginProduct(), b.renderHeader(a), b.renderContent(a), b.renderFooter(a)
            }, b.renderContent = function (a) {
                var c, d;
                m && m.destroy && (m.destroy(), m = null, l.empty(b.content)), c = b.model.get("config"), a ? (d = b.getProduct("geoserve"), m = j({
                    el: b.content,
                    formatter: g,
                    model: a,
                    geoserve: d,
                    url: c ? c.GEOSERVE_WS_URL : null
                }), m.render()) : b.content.innerHTML = '<p class="alert error">No origin found!</p>'
            }, b.renderFooter = function (a) {
                var c;
                l.empty(b.footer), a && (c = b.getProductFooter({product: a}), c && b.footer.appendChild(c))
            }, b.renderHeader = function (a) {
                var c;
                l.empty(b.header), b.header.innerHTML = "<h3>" + b.TITLE + "</h3>", a && (c = b.getProductHeader({
                    product: a,
                    summaryModule: k,
                    type: "origin"
                }), c && b.header.appendChild(c))
            }, c(a), a = null, b
        };
        m.ID = e, m.TITLE = f, m.TYPES = g, b.exports = m
    }, {
        "core/Formatter": 56,
        "core/Module": 58,
        "origin/OriginView": 113,
        "scientific/ScientificSummaryModule": 119,
        "util/Util": 44
    }],
    112: [function (a, b, c) {
        "use strict";
        var d = a("core/BasicPinView"), e = a("core/Formatter"), f = a("origin/OriginModule"), g = a("util/Util"), h = {module: f}, i = function (a) {
            var b, c, f;
            return a = g.extend({}, h, a), b = d(a), c = function (a) {
                f = a.formatter || e()
            }, b.destroy = g.compose(function () {
                f = null, c = null, b = null
            }, b.destroy), b.renderPinContent = function () {
                var a, c, d, e, g, h;
                e = b.model, a = e.getProperty("depth"), c = e.getProperty("magnitude"), d = e.getProperty("magnitude-type"), g = e.getProperty("review-status"), h = e.getProperty("eventtime"), a = f.depth(a, "km"), c = f.magnitude(c, d), g = null === g ? "&ndash;" : g.toUpperCase(), h = null === h ? "&ndash;" : '<time datetime="' + h + '">' + h.replace("T", "<br />").replace("Z", " (UTC)") + "</time>", b.content.innerHTML = '<dl class="no-style origin-pin-view"><dt>Review Status</dt><dd class="origin-pin-review-status">' + g + '</dd><dt>Magnitude</dt><dd class="origin-pin-magnitude">' + c + '</dd><dt>Depth</dt><dd class="origin-pin-depth">' + a + '</dd><dt>Time</dt><dd class="origin-pin-time">' + h + "</dd></dl>"
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"core/BasicPinView": 51, "core/Formatter": 56, "origin/OriginModule": 111, "util/Util": 44}],
    113: [function (a, b, c) {
        "use strict";
        var d = a("core/Attribution"), e = a("core/Formatter"), f = a("origin/MagnitudesView"), g = a("mvc/Model"), h = a("origin/PhasesView"), i = a("core/ProductView"), j = a("tablist/TabList"), k = a("util/Util"), l = a("util/Xhr"), m = {url: "http://earthquake.usgs.gov/ws/geoserve/"}, n = "&ndash;", o = function (a) {
            var b, c, o, p, q, r, s, t, u;
            return a = k.extend({}, m, a), b = i(a), c = function (a) {
                o = a.formatter || e(), p = a.geoserve || null, u = a.url, q = g(), q.on("change:regions", "buildFeRegionView", b)
            }, b.destroy = k.compose(function () {
                q.off("change:regions", "buildFeRegionView", b), t && t.destroy && (t.destroy(), t = null), o = null, p = null, r = null, s = null, q = null, u = null, c = null, b = null
            }, b.destroy), b.buildFeRegionView = function () {
                var a, c, d, e;
                c = b.el.querySelector(".fe-info");
                try {
                    a = q.get("regions").fe.features[0].properties, d = a.name.toUpperCase(), e = a.number, c.innerHTML = e ? d + " (" + e + ")" : d
                } catch (f) {
                    c.innerHTML = n
                }
            }, b.getCatalogDetail = function (a) {
                var b, c, d;
                return c = a.getProperty("eventsource"), d = a.getProperty("eventsourcecode"), b = "", c ? (b = (c + d).toLowerCase(), c.toUpperCase() + " <small>(" + b + ")</small>") : n
            }, b.getFeRegion = function () {
                var a, c;
                c = b, p && (a = p.getContent("geoserve.json")), a ? l.ajax({
                    url: a.get("url"), success: function (a) {
                        c.formatFeRegion(a.fe)
                    }, error: function () {
                        c.formatFeRegion(null)
                    }
                }) : b.getGeoserveFeRegion()
            }, b.getGeoserveFeRegion = function () {
                var a, c;
                a = b.model.getProperty("latitude"), c = b.model.getProperty("longitude"), null !== a && null !== c && l.ajax({
                    url: u + "regions.json",
                    data: {latitude: a, longitude: c, type: "fe"},
                    success: function (a) {
                        q.set({regions: a})
                    },
                    error: function () {
                        throw new Error("Geoserve web service not found")
                    }
                })
            }, b.getOriginDetailTable = function (a) {
                var c, e, f, g, h, i, j, k, l, m, p, q, r, s, t, u, v, w;
                return e = [], j = a.getProperty("latitude"), k = a.getProperty("longitude"), h = a.getProperty("eventtime"), l = a.getProperty("magnitude"), q = a.getProperty("magnitude-type"), m = a.getProperty("magnitude-error"), i = a.getProperty("horizontal-error"), f = a.getProperty("depth"), g = a.getProperty("vertical-error"), t = a.getProperty("num-stations-used"), s = a.getProperty("num-phases-used"), r = a.getProperty("minimum-distance"), w = a.getProperty("standard-error"), c = a.getProperty("azimuthal-gap"), v = a.getProperty("review-status") || "automatic", u = a.getProperty("origin-source") || a.get("source"), p = a.getProperty("magnitude-source") || a.get("source"), e.push('<div class="horizontal-scrolling">', '<table class="origin-detail"><tbody>'), e.push('<tr><th scope="row">Magnitude', m ? '<span class="uncertainty">uncertainty</span>' : "", "</th><td>", o.magnitude(l, q, m), "</td></tr>"), e.push('<tr><th scope="row">Location', i ? '<span class="uncertainty">uncertainty</span>' : "", "</th><td>", o.location(j, k), o.uncertainty(i, 1, n, "km"), "</td></tr>"), e.push('<tr><th scope="row">Depth', g ? '<span class="uncertainty">uncertainty</span>' : "", "</th><td>", o.depth(f, "km", g) + "</td></tr>"), e.push('<tr><th scope="row">Origin Time</th><td>', "string" == typeof h ? '<time datetime="' + h + '">' + h.replace("T", " ").replace("Z", " UTC") + "</time>" : "", "</td></tr>"), e.push('<tr><th scope="row">Number of Stations</th><td>', null === t ? n : t, "</td></tr>"),
                    e.push('<tr><th scope="row">Number of Phases</th><td>', null === s ? n : s, "</td></tr>"), e.push('<tr><th scope="row">Minimum Distance</th><td>', o.distance(.0174532925 * r * 6378.1, "km"), " (", o.angle(r, 2), ")", "</td></tr>"), e.push('<tr><th scope="row">Travel Time Residual</th><td>', null === w ? n : w + " s", "</td></tr>"), e.push('<tr><th scope="row">Azimuthal Gap</th><td>', o.angle(c), "</td></tr>"), e.push("<tr>", '<th scope="row">', '<abbr title="Flinn Engdahl">FE</abbr> Region', "</th>", '<td class="fe-info">' + b.getFeRegion() + "</td></tr>"), e.push('<tr><th scope="row">Review Status</th><td>', v.toUpperCase(), "</td></tr>"), e.push('<tr><th scope="row">Catalog</th><td>', b.getCatalogDetail(a), "</td></tr>", '<tr><th scope="row">Location Source</th><td>', d.getContributorReference(u), "</td></tr>", '<tr><th scope="row">Magnitude Source</th><td>', d.getContributorReference(p), "</td></tr>", '<tr><th scope="row">Contributor</th><td>', d.getContributorReference(a.get("source")), "</td></tr>"), e.push("</tbody></table></div>"), e.join("")
            }, b.formatFeRegion = function (a) {
                a && q.set({regions: {fe: {features: [{properties: {name: a.longName, number: a.number}}]}}})
            }, b.render = function () {
                var a, c, d;
                t && t.destroy && t.destroy(), t = j({
                    el: b.el,
                    tabs: []
                }), c = b.model, c ? (a = b.getOriginDetailTable(c), t.addTab({
                    title: "Origin Detail",
                    content: a
                }), "phase-data" === c.get("type") && (d = c.getContent("quakeml.xml"), s = h({
                    el: document.createElement("div"),
                    model: d,
                    product: c
                }), t.addTab({
                    title: "Phases", content: s.el, onDestroy: function () {
                        s.destroy()
                    }, onSelect: function () {
                        s.render()
                    }
                }), r = f({el: document.createElement("div"), model: d, product: c}), t.addTab({
                    title: "Magnitudes",
                    content: r.el,
                    onDestroy: function () {
                        r.destroy()
                    },
                    onSelect: function () {
                        r.render()
                    }
                }))) : a = '<p class="alert error">No Origin product exists.</p>'
            }, c(a), a = null, b
        };
        b.exports = o
    }, {
        "core/Attribution": 50,
        "core/Formatter": 56,
        "core/ProductView": 60,
        "mvc/Model": 40,
        "origin/MagnitudesView": 110,
        "origin/PhasesView": 114,
        "tablist/TabList": 31,
        "util/Util": 44,
        "util/Xhr": 45
    }],
    114: [function (a, b, c) {
        "use strict";
        var d, e, f, g = a("mvc/Collection"), h = a("mvc/DataTable"), i = a("origin/QuakemlView"), j = a("util/Util");
        d = {}, e = [{
            className: "channel", title: "Channel", format: function (a) {
                var b = a.pick.waveformID;
                return b.networkCode + " " + b.stationCode + (b.channelCode ? " " + b.channelCode + (b.locationCode ? " " + b.locationCode : "") : "")
            }, header: !0
        }, {
            className: "distance", title: "Distance", format: function (a) {
                return parseFloat(a.distance).toFixed(2) + "&deg;"
            }, downloadFormat: function (a) {
                return a.distance
            }
        }, {
            className: "azimuth", title: "Azimuth", format: function (a) {
                return parseFloat(a.azimuth).toFixed(2) + "&deg;"
            }, downloadFormat: function (a) {
                return a.azimuth
            }
        }, {
            className: "phase", title: "Phase", format: function (a) {
                return a.phase
            }
        }, {
            className: "time", title: "Arrival Time", format: function (a) {
                var b, c = a.pick;
                return b = c.time.value.split("T")[1].split("Z")[0].split(":"), b[2] = parseFloat(b[2]).toFixed(2), b[2] < 10 && (b[2] = "0" + b[2]), b = b.join(":")
            }, downloadFormat: function (a) {
                return a.pick.time.value
            }
        }, {
            className: "status", title: "Status", format: function (a) {
                return a.pick.evaluationMode
            }
        }, {
            className: "residual", title: "Residual", format: function (a) {
                return parseFloat(a.timeResidual).toFixed(2)
            }, downloadFormat: function (a) {
                return a.timeResidual
            }
        }, {
            className: "weight", title: "Weight", format: function (a) {
                return parseFloat(a.timeWeight).toFixed(2)
            }, downloadFormat: function (a) {
                return a.timeWeight
            }
        }], f = [{
            id: "channel", title: "Channel", sortBy: function (a) {
                var b = a.pick.waveformID;
                return b.networkCode + " " + b.stationCode + " " + b.channelCode + " " + b.locationCode
            }
        }, {
            id: "distance", title: "Distance", sortBy: function (a) {
                return parseFloat(a.distance)
            }
        }, {
            id: "azimuth", title: "Azimuth", sortBy: function (a) {
                return parseFloat(a.azimuth)
            }
        }, {
            id: "phase", title: "Phase", sortBy: function (a) {
                return a.phase
            }
        }, {
            id: "time", title: "Arrival Time", sortBy: function (a) {
                return a.pick.time.value
            }
        }, {
            id: "residual", title: "Residual", sortBy: function (a) {
                return parseFloat(a.timeResidual)
            }
        }, {
            id: "weight", title: "Weight", sortBy: function (a) {
                return parseFloat(a.timeWeight)
            }
        }];
        var k = function (a) {
            var b, c;
            return a = j.extend({}, d, a), b = i(a), b.destroy = j.compose(function () {
                c && c.destroy && c.destroy(), c = null, b = null
            }, b.destroy), b.getPreferredOrigin = function (a) {
                var b;
                return a = a || [], b = null, a.some(function (a) {
                    return a.isPreferred ? (b = a, !0) : void 0
                }), b
            }, b.renderNoPreferred = function (a) {
                a.innerHTML = '<p class="error alert">No Phase Data Exists</p>'
            }, b.renderPreferred = function (a, b) {
                var d;
                a = a || {}, d = a.arrivals, d.map(function (a, b) {
                    return a.id = b, a
                }), c = h({
                    el: b,
                    className: "hypocenter-phase",
                    collection: g(d),
                    emptyMarkup: '<p class="error alert">No Phase Data Exists</p>',
                    columns: e,
                    sorts: f,
                    defaultSort: "distance"
                }), b.querySelector(".datatable-data").classList.add("horizontal-scrolling")
            }, b.renderQuakeml = function () {
                var a, c, d;
                b.el.innerHTML = '<section class="hypocenter-phase"><header><h3>Phase Arrival Times</h3></header><div class="datatable"></div></section>', a = b.el.querySelector(".datatable"), b.quakeml && (c = b.quakeml.getOrigins(), d = b.getPreferredOrigin(c), d && d.arrivals ? b.renderPreferred(d, a) : b.renderNoPreferred(a))
            }, a = null, b
        };
        b.exports = k
    }, {"mvc/Collection": 34, "mvc/DataTable": 37, "origin/QuakemlView": 115, "util/Util": 44}],
    115: [function (a, b, c) {
        "use strict";
        var d = a("core/ContentView"), e = a("pdl/Product"), f = a("quakeml/Quakeml"), g = a("util/Util"), h = {}, i = function (a) {
            var b, c;
            return a = g.extend({}, h, a), b = d(a), c = function (a) {
                b.product = a.product || e()
            }, b.destroy = g.compose(function () {
                c = null, b = null
            }, b.destroy), b.onError = function () {
                b.el.innerHTML = '<p class="alert error">Failed to load quakeml data.</p>'
            }, b.onSuccess = function (a) {
                try {
                    b.quakeml = f({xml: a}), b.render(), b.trigger("quakeml", b.quakeml)
                } catch (c) {
                    console.log(c.stack)
                }
            }, b.render = function () {
                b.quakeml ? b.renderQuakeml() : (b.el.innerHTML = "<p>Loading content&hellip;</p>", b.fetchData())
            }, b.renderQuakeml = function () {
                b.el.innerHTML = JSON.stringify(b.quakeml)
            }, b.setQuakeml = function (a) {
                b.quakeml = a
            }, c(a), a = null, b
        };
        b.exports = i
    }, {"core/ContentView": 52, "pdl/Product": 118, "quakeml/Quakeml": 46, "util/Util": 44}],
    116: [function (a, b, c) {
        "use strict";
        var d = a("pdl/Product"), e = a("util/Util"), f = {config: {}}, g = function (a) {
            var b, c = [];
            for (b in a)c.push.apply(c, a[b]);
            return c
        }, h = function (a) {
            var b, c = {};
            a.forEach(function (a) {
                var b, d;
                b = a.get("source") + "_" + a.get("type") + "_" + a.get("code"), d = -1, c.hasOwnProperty(b) && (d = c[b].get("updateTime")), d < a.get("updateTime") && (c[b] = a)
            }), b = [];
            for (var d in c)b.push(c[d]);
            return b
        }, i = function (a) {
            var b = [];
            return a.forEach(function (a) {
                a.isDeleted() || b.push(a)
            }), b
        }, j = function (a) {
            var b = a.splice(0);
            return b.sort(function (a, b) {
                var c;
                return c = b.get("preferredWeight") - a.get("preferredWeight"), 0 !== c ? c : (c = b.get("updateTime") - a.get("updateTime"), 0 !== c ? c : a.id > b.id ? 1 : -1)
            }), b
        }, k = function (a) {
            var b = a.get("properties");
            return b.hasOwnProperty("eventsource") && b.hasOwnProperty("eventsourcecode") && b.hasOwnProperty("latitude") && b.hasOwnProperty("longitude") && b.hasOwnProperty("eventtime") ? !0 : !1
        }, l = function (a) {
            var b, c;
            for (a = j(a), b = 0; b < a.length; b++)if (c = a[b], k(c))return c;
            return null
        }, m = function (a) {
            var b, c;
            for (a = j(a), b = 0; b < a.length; b++)if (c = a[b].get("properties"), c.hasOwnProperty("eventsource") && c.hasOwnProperty("eventsourcecode"))return a[b];
            return null
        }, n = function (a, b) {
            var c, o, p, q, r, s;
            return c = Object.create({}), o = function (a, b) {
                var c;
                b = e.extend({}, f, b), p = b.config, q = {}, r = {}, a && a.properties && (q = e.extend({}, a.properties.products), r = e.extend({}, a.properties, {products: null}));
                for (c in q)q[c] = q[c].map(d);
                s = null
            }, c.addProduct = function (a) {
                var b;
                b = a.get("type"), q.hasOwnProperty(b) || (q[b] = []), q[b].push(a), s = null
            }, c.removeProduct = function (a) {
                var b, c, d;
                b = a.get("type"), q.hasOwnProperty(b) && (c = q[b], d = c.indexOf(a), d >= 0 && (c.splice(d, 1), 0 === c.length ? delete q[b] : q[b] = c, s = null))
            }, c.destroy = function () {
                var a;
                if (null !== c) {
                    for (a in q)q[a].map(function (a) {
                        a.destroy()
                    });
                    o = null, q = null, r = null, s = null, c = null
                }
            }, c.getProducts = function (a) {
                return a ? q[a] || [] : q
            }, c.getPreferredProduct = function (a) {
                var b;
                return b = c.getProducts(a), b = j(h(b)), b.length > 0 ? b[0] : null
            }, c.getAllProductVersions = function (a, b, c) {
                var d;
                return d = q.hasOwnProperty(a) ? q[a].filter(function (a) {
                    return a.get("source") === b && a.get("code") === c
                }) : [], d.sort(function (a, b) {
                    return b.get("updateTime") - a.get("updateTime")
                }), d
            }, c.getProductById = function (a, b, d, e) {
                var f, g, h, i;
                if (h = null, i = c.getAllProductVersions(a, b, d), g = i.length, "undefined" != typeof e && null !== e) {
                    for (f = 0; g > f; f++)if (i[f].get("updateTime") === e) {
                        h = i[f];
                        break
                    }
                } else g && (h = i[0]);
                return h
            }, c.getEventId = function () {
                var a, b = c.getEventIdProduct();
                return null !== b ? (a = b.get("properties"), a.eventsource + a.eventsourcecode) : null
            }, c.getSource = function () {
                var a = c.getEventIdProduct();
                return null !== a ? a.getProperty("eventsource") : null
            }, c.getSourceCode = function () {
                var a = c.getEventIdProduct();
                return null !== a ? a.getProperty("eventsourcecode") : null
            }, c.getTime = function () {
                var a = c.getProductWithOriginProperties();
                return null !== a ? new Date(a.getProperty("eventtime")) : null
            }, c.getLatitude = function () {
                var a = c.getProductWithOriginProperties();
                return null !== a ? Number(a.getProperty("latitude")) : null
            }, c.getLongitude = function () {
                var a = c.getProductWithOriginProperties();
                return null !== a ? Number(a.getProperty("longitude")) : null
            }, c.getDepth = function () {
                var a, b = c.getProductWithOriginProperties();
                return null !== b ? (a = b.get("properties"), a.hasOwnProperty("depth") ? Number(a.depth) : null) : null
            }, c.getMagnitude = function () {
                var a, b = c.getPreferredMagnitudeProduct();
                return null === b && (b = c.getProductWithOriginProperties()), null !== b ? (a = b.get("properties"), a.hasOwnProperty("magnitude") ? Number(a.magnitude) : null) : null
            }, c.isDeleted = function () {
                var a = c.getPreferredOriginProduct();
                return null !== a && !a.isDeleted() && k(a) ? !1 : !0
            }, c.getEventIdProduct = function () {
                var a = c.getPreferredOriginProduct();
                return null === a && (a = c.getProductWithOriginProperties()), a
            }, c.getProductWithOriginProperties = function () {
                var a, b;
                if (a = d.getFullType("origin", p), q.hasOwnProperty(a)) {
                    if (b = l(i(h(q[a]))), null !== b)return b;
                    if (b = l(h(i(q[a]))), null !== b)return b
                }
                return b = l(i(h(g(q)))), null !== b ? b : b = l(h(i(g(q))))
            }, c.getPreferredOriginProduct = function () {
                var a, b;
                return a = d.getFullType("origin", p), q.hasOwnProperty(a) ? (b = l(i(h(q[a]))), null !== b ? b : (b = m(h(q[a])), null !== b ? b : null)) : (b = l(i(h(g(q)))), null !== b ? b : (b = m(h(g(q))), null !== b ? b : b = m(h(i(g(q))))))
            }, c.getPreferredMagnitudeProduct = function () {
                return c.getPreferredOriginProduct()
            }, c.getSubEvents = function () {
                var a, b, d, e, f;
                return b = c.getEventId(), a = n(), d = {}, e = {}, e[b] = a, f = h(g(q)), f.forEach(function (b) {
                    var c, f, g, h, i;
                    c = b.get("source") + "_" + b.get("type") + "_" + b.get("code"), g = b.getProperty("eventsource"), f = b.getProperty("eventsourcecode"), null === g || null === f ? h = a : (i = g + f, e.hasOwnProperty(i) || (e[i] = n()), h = e[i]), h.addProduct(b), d[c] = h
                }), g(q).forEach(function (a) {
                    var b;
                    -1 === f.indexOf(a) && (b = a.get("source") + "_" + a.get("type") + "_" + a.get("code"), d[b].addProduct(a))
                }), e
            }, c.getAllEventCodes = function (a) {
                var b, d, e, f, g, h, i = {};
                g = c.getSubEvents();
                for (d in g)h = g[d], (a || !h.isDeleted()) && (e = h.getSource(), f = h.getSourceCode(), e in i || (i[e] = []), b = i[e], -1 === b.indexOf(f) && b.push(f));
                return i
            }, c.getSummary = function () {
                var a, b, d, e;
                return null !== s ? s : (s = {
                    depth: null,
                    eventCodes: null,
                    id: null,
                    isDeleted: null,
                    latitude: null,
                    longitude: null,
                    magnitude: null,
                    properties: null,
                    source: null,
                    sourceCode: null,
                    time: null,
                    eventIdProduct: null,
                    originProduct: null,
                    magnitudeProduct: null
                }, s.isDeleted = c.isDeleted(), a = c.getEventIdProduct(), null !== a && (e = a.get("properties"), s.id = e.eventsource + e.eventsourcecode, s.source = e.eventsource, s.sourceCode = e.eventsourcecode, s.eventIdProduct = a), b = c.getProductWithOriginProperties(), null !== b && (e = b.get("properties"), s.depth = Number(e.depth), s.latitude = Number(e.latitude), s.longitude = Number(e.longitude), s.time = new Date(e.eventtime), s.originProduct = b), d = c.getPreferredMagnitudeProduct(), null !== d && (s.magnitude = Number(d.getProperty("magnitude")), s.magnitudeProduct = d), s.eventCodes = c.getAllEventCodes(), s.properties = r, s)
            }, o(a, b), a = null, b = null, c
        };
        n.productMapToList = g, n.getWithoutDeleted = i, n.getWithoutSuperseded = h, n.getSortedMostPreferredFirst = j, n.productHasOriginProperties = k, b.exports = n
    }, {"pdl/Product": 118, "util/Util": 44}],
    117: [function (a, b, c) {
        "use strict";
        var d = a("mvc/Model"), e = a("util/Util"), f = function (a, b) {
            var c;
            return a.hasOwnProperty(b) && (c = a[b], null !== c && "undefined" != typeof c) ? !0 : !1
        }, g = function (a) {
            var b, c;
            return b = d(e.extend({
                bytes: null,
                contentType: "text/plain",
                id: null,
                lastModified: (new Date).getTime(),
                length: 0,
                url: null
            }, a)), c = function () {
                var a = b.get("bytes"), c = b.get("url");
                if (null === a && null === c)throw new Error("Invalid product contents. Must have one of bytes or url.");
                null !== a && a.length !== b.get("length") && console.log("Invalid product contents. Actual length and claimed length differ.")
            }, b.set = e.compose(function (a) {
                var b, c;
                return b = a.hasOwnProperty("bytes"), c = a.hasOwnProperty("url"), c && null !== a.url ? a.bytes = null : b && null !== a.bytes && (a.url = null), a
            }, b.set), b.validate = function () {
                var a;
                if (a = b.get(), !f(a, "id"))throw new Error("Product content must have a valid id");
                if (!f(a, "url") && !f(a, "bytes"))throw new Error("Product content must have content")
            }, c(a), a = null, b
        };
        b.exports = g
    }, {"mvc/Model": 40, "util/Util": 44}],
    118: [function (a, b, c) {
        "use strict";
        var d, e, f = a("mvc/Collection"), g = a("pdl/Content"), h = a("mvc/Model"), i = a("util/Util"), j = "UPDATE", k = "DELETE";
        d = function (a) {
            var b;
            return b = a, b && b.match(/^internal-/) && (b = b.replace("internal-", "")), b && b.match(/-scenario$/) && (b = b.replace("-scenario", "")), b
        }, e = function (a, b) {
            var c;
            return b = b || {}, c = a, b.INTERNAL_MODE && (c = "internal-" + c), b.SCENARIO_MODE && (c += "-scenario"), c
        };
        var l = function (a) {
            var b, c;
            return b = h(i.extend({
                code: null,
                contents: null,
                id: null,
                indexid: null,
                indexTime: null,
                links: {},
                preferredWeight: null,
                properties: {},
                source: null,
                status: j,
                type: null,
                updateTime: null
            }, a)), c = function () {
                var a, c;
                a = b.get("contents") || [], c = b.get("properties") || [], Array.isArray(a) ? (a = a.map(function (a) {
                    return a.get || (a = g(a)), a
                }), a = f(a)) : a.hasOwnProperty("get") && a.hasOwnProperty("add") || (a = Object.keys(a).map(function (b) {
                    return g(i.extend({id: b}, a[b]))
                }), a = f(a)), b.set({contents: a, properties: c})
            }, b.getContent = function (a) {
                var c;
                return c = b.get("contents"), c.get(a)
            }, b.getProperty = function (a) {
                var c;
                return c = b.get("properties"), c.hasOwnProperty(a) ? c[a] : null
            }, b.isDeleted = function () {
                var a;
                return a = this.get("status").toUpperCase(), a === l.STATUS_DELETE ? !0 : !1
            }, b.isReviewed = function () {
                var a;
                return a = b.getProperty("review-status"), null !== a ? "REVIEWED" === a.toUpperCase() : null
            }, b.setProperty = function (a) {
                var c, d;
                d = b.get("properties"), c = [], Object.keys(a).forEach(function (b) {
                    var e;
                    e = a[b], d[b] !== e && (c.push(b), d[b] = e)
                }), c.forEach(function (a) {
                    b.trigger("change:property:" + a)
                }), b.trigger("change:property"), b.trigger("change")
            }, b.toJSON = i.compose(b.toJSON, function (a) {
                var b = {};
                return a.contents.forEach(function (a) {
                    var c;
                    c = a.id, b[c] = {
                        contentType: a.contentType,
                        length: a.length,
                        lastModified: a.lastModified
                    }, a.hasOwnProperty("url") && null !== a.url ? b[c].url = a.url : a.hasOwnProperty("bytes") && null !== a.bytes && (b[c].bytes = a.bytes)
                }), a.contents = b, a
            }), c(a), a = null, b
        };
        l.getBaseType = d, l.getFullType = e, l.STATUS_UPDATE = j, l.STATUS_DELETE = k, b.exports = l
    }, {"mvc/Collection": 34, "mvc/Model": 40, "pdl/Content": 117, "util/Util": 44}],
    119: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h, i, j, k, l = a("core/Attribution"), m = a("moment-tensor/BeachBallView"), n = a("core/Formatter"), o = a("pdl/Product"), p = a("core/SummaryModule"), q = a("moment-tensor/Tensor"), r = a("util/Util");
        i = "scientific", j = "Technical", k = ["origin", "phase-data", "moment-tensor", "focal-mechanism", "finite-fault", "scitech-link"], h = {
            mtFillColor: "#6ea8ff",
            fmFillColor: "#ffaa69"
        };
        var s = function (b) {
            var c, k, s, t, u;
            return b = r.extend({}, h, b), c = p(b), k = function (b) {
                c.ID = i, c.TITLE = j, t = b.formatter || n(), u = b.mtFillColor, s = b.fmFillColor, d = d || a("finite-fault/FiniteFaultModule"), e = e || a("focal-mechanism/FocalMechanismModule"), f = f || a("moment-tensor/MomentTensorModule"), g = g || a("origin/OriginModule")
            }, c.destroy = r.compose(function () {
                s = null, t = null, u = null, k = null, c = null
            }, c.destroy), c.getFiniteFaultSummary = function (a) {
                return c.createSummary(a, "Finite Fault", ["Catalog", "Preview", "Source"], c.getFiniteFaultRow)
            }, c.getFiniteFaultRow = function (a, b) {
                var e, f, g;
                return e = a.getContent("basemap.png"), f = 0 === b, g = c.createRow(f), g.innerHTML = ['<th scope="row">', c.getCatalogMarkup(d, a, f), "</th>", "<td>", '<img src="', e.get("url"), '" class="image" alt="Finite Fault"/>', "</td>", "<td>", l.getProductAttribution(a), "</td>"].join(""), g
            }, c.getFocalMechanismSummary = function (a) {
                return c.createSummary(a, "Focal Mechanism", ["Catalog", "Mechanism", "Nodal Plan 1<br/><small>Strike, Dip, Rake</small>", "Nodal Plan 1<br/><small>Strike, Dip, Rake</small>", "Source"], c.getFocalMechanismRow)
            }, c.getFocalMechanismRow = function (a, b) {
                var d, f, g, h, i, j;
                return h = 0 === b, i = c.createRow(h), j = q.fromProduct(a), f = j.NP1, g = j.NP2, i.innerHTML = ['<th scope="row">', c.getCatalogMarkup(e, a, h), "</th>", '<td class="beachball"></td>', "<td>(", t.angle(f.strike), ", ", t.angle(f.dip), ", ", t.angle(f.rake), ")</td>", "<td>(", t.angle(g.strike), ", ", t.angle(g.dip), ", ", t.angle(g.rake), ")</td>", "<td>", l.getProductAttribution(a), "</td>"].join(""), d = m({
                    el: i.querySelector(".beachball"),
                    fillColor: s,
                    labelAxes: !1,
                    labelPlanes: !1,
                    size: 30,
                    tensor: j
                }), d.render(), d.destroy(), d = null, i
            }, c.getLinksHeader = function () {
                var a;
                return a = document.createElement("h3"), a.innerHTML = "Scientific and Technical Links", a
            }, c.getMomentTensorSummary = function (a) {
                return c.createSummary(a, "Moment Tensor", ["Catalog", "Tensor", "Magnitude", "Depth", '% <abbr title="Double Couple">DC</abbr>', "Source"], c.getMomentTensorRow)
            }, c.getMomentTensorRow = function (a, b) {
                var d, e, g, h;
                return h = q.fromProduct(a), e = 0 === b, g = c.createRow(e), g.innerHTML = ['<th scope="row">', c.getCatalogMarkup(f, a, e), "</th>", '<td class="beachball"></td>', "<td>", t.magnitude(h.magnitude, a.getProperty("derived-magnitude-type") || "Mw"), "</td>", "<td>", t.depth(h.depth, "km"), "</td>", "<td>", Math.round(100 * h.percentDC) + " %", "</td>", "<td>", l.getProductAttribution(a), "</td>"].join(""), d = m({
                    el: g.querySelector(".beachball"),
                    fillColor: u,
                    labelAxes: !1,
                    labelPlanes: !1,
                    size: 30,
                    tensor: h
                }), d.render(), d.destroy(), d = null, g
            }, c.getOriginProducts = function (a) {
                var b, d;
                return b = c.model.get("config"), d = a ? a.getProducts(o.getFullType("origin", b)).map(function (c) {
                    var d;
                    return d = a.getProductById(o.getFullType("phase-data", b), c.get("source"), c.get("code")), d && d.get("updateTime") >= c.get("updateTime") ? d : c
                }) : []
            }, c.getOriginSummary = function (a) {
                return c.createSummary(a, "Origin", ["Catalog", '<abbr title="Magnitude">Mag</abbr>', "Time", "Depth", "Review Status", "Location", "Source"], c.getOriginRow)
            }, c.getOriginRow = function (a, b) {
                var d, e, f, h;
                return d = new Date(a.getProperty("eventtime")), e = 0 === b, h = c.createRow(e), f = a.getProperty("review-status") || "automatic", h.innerHTML = ['<th scope="row">', c.getCatalogMarkup(g, a, e), "</th>", "<td>", t.magnitude(a.getProperty("magnitude"), a.getProperty("magnitude-type")), "</td>", "<td>", '<abbr title="', t.datetime(d, 0), '">', t.time(d), "</abbr>", "</td>", "<td>", t.depth(a.getProperty("depth")), "</td>", "<td>", f.toUpperCase(), "</td>", "<td>", t.location(a.getProperty("latitude"), a.getProperty("longitude")), "</td>", "<td>", l.getProductAttribution(a), "</td>"].join(""), h
            }, c.render = function () {
                var a, b, d, e, f, g, h, i;
                b = document.createDocumentFragment(), c.clearLinks(!0), c.clearTexts(!0), a = c.getProducts("finite-fault"), d = c.getProducts("scitech-header"), e = c.getProducts("scitech-link"), f = c.getProducts("focal-mechanism"), g = c.getOriginProducts(c.model.get("event")), h = c.getProducts("moment-tensor"), i = c.getProducts("scitech-text"), r.empty(c.header), c.header.appendChild(c.getTexts(d)), b.appendChild(c.getOriginSummary(g)), b.appendChild(c.getMomentTensorSummary(h)), b.appendChild(c.getFiniteFaultSummary(a)), b.appendChild(c.getFocalMechanismSummary(f)), b.appendChild(c.getTexts(i)), b.appendChild(c.getLinks(e)), r.empty(c.content), c.content.appendChild(b), c.footer.innerHTML = ""
            }, k(b), b = null, c
        };
        s.ID = i, s.TITLE = j, s.TYPES = k, b.exports = s
    }, {
        "core/Attribution": 50,
        "core/Formatter": 56,
        "core/SummaryModule": 61,
        "finite-fault/FiniteFaultModule": 74,
        "focal-mechanism/FocalMechanismModule": 77,
        "moment-tensor/BeachBallView": 98,
        "moment-tensor/MomentTensorModule": 100,
        "moment-tensor/Tensor": 103,
        "origin/OriginModule": 111,
        "pdl/Product": 118,
        "util/Util": 44
    }],
    120: [function (a, b, c) {
        "use strict";
        var d = a("core/ContentView"), e = a("core/Formatter"), f = a("util/Util"), g = {
            empty: "&ndash;",
            formatter: null
        }, h = function (a) {
            var b, c, h, i;
            return b = d(a), c = function (a) {
                a = f.extend({}, g, a), h = a.empty, i = a.formatter || e()
            }, b.formatGroundMotion = function (a, b) {
                var c;
                return c = a.units, '<tr><th scope="row">' + b + "</th><td>" + a.max_grid + " " + c + "</td><td>" + a.max + " " + c + "</td><td>" + a.bias + "</td></tr>"
            }, b.formatOutputGroundMotions = function (a) {
                var c, d;
                return c = [], c.push("<h3>Ground Motion/Intensity Information</h3>"), c.push('<div class="horizontal-scrolling"><table><thead><tr><th scope="col">Type</th><th scope="col">Max value in grid</th><th scope="col">Max value on land</th><th scope="col">Bias</th></tr></thead><tbody>'), d = {
                    intensity: "Intensity",
                    pga: '<abbr title="Peak Ground Acceleration">PGA</abbr>',
                    pgv: '<abbr title="Peak Ground Velocity">PGV</abbr>',
                    psa03: '<abbr title="Pseudo Spectral Acceleration 0.3 s">PSA03</abbr>',
                    psa10: '<abbr title="Pseudo Spectral Acceleration 1.0 s">PSA10</abbr>',
                    psa30: '<abbr title="Pseudo Spectral Acceleration 3.0 s">PSA30</abbr>'
                }, Object.keys(d).forEach(function (e) {
                    e in a && c.push(b.formatGroundMotion(a[e], d[e]))
                }), Object.keys(a).forEach(function (e) {
                    e in d || c.push(b.formatGroundMotion(a[e], e))
                }), c.push("</tbody></table></div>"), c.join("")
            }, b.formatOutputMapInformation = function (a) {
                var b, c, d, e, f;
                return b = a.grid_points, c = a.grid_span, d = a.grid_spacing, e = a.max, f = a.min, '<h3>Map Information</h3><div class="horizontal-scrolling"><table><thead><tr><th scope="col">Type</th><th scope="col">Latitude</th><th scope="col">Longitude</th></tr></thead><tbody><tr><th scope="row">Span</th><td>' + c.latitude + "&deg;</td><td>" + c.longitude + '&deg;</td></tr><tr><th scope="row">Grid Spacing</th><td>' + d.latitude + " km</td><td>" + d.longitude + ' km</td></tr><tr><th scope="row">Number of points</th><td>' + b.latitude + "</td><td>" + b.longitude + '</td></tr><tr><th scope="row">Min</th><td>' + i.latitude(f.latitude) + "</td><td>" + i.longitude(f.longitude) + '</td></tr><tr><th scope="row">Max</th><td>' + i.latitude(e.latitude) + "</td><td>" + i.longitude(e.longitude) + "</td></tr></tbody></table></div>"
            }, b.formatProcessingGroundMotions = function (a) {
                var b, c, d;
                return b = [], b.push("<h3>Ground Motion/Intensity Information</h3>"), b.push('<div class="horizontal-scrolling"><table><thead><tr><th scope="col">Type</th><th scope="col">Module</th><th scope="col">Reference</th></tr></thead><tbody>'), d = function (a, b) {
                    var c;
                    return c = a.units, '<tr><th scope="row">' + b + "</th><td>" + a.module + "</td><td>" + a.reference + "</td></tr>"
                }, c = {
                    gmpe: '<abbr title="Ground Motion Prediction Equation">GMPE</abbr>',
                    ipe: '<abbr title="Intensity Prediction Equation">IPE</abbr>',
                    mi2pgm: '<abbr title="Ground Motion Intensity Conversion Equation">GMICE</abbr>',
                    pgm2mi: '<abbr title="Inverse Ground Motion Intensity Conversion Equation">IGMICE</abbr>',
                    directivity: "Directivity",
                    basin_correction: "Basin"
                }, Object.keys(c).forEach(function (e) {
                    e in a && b.push(d(a[e], c[e]))
                }), Object.keys(a).forEach(function (e) {
                    e in c || b.push(d(a[e], e))
                }), b.push("</tbody></table></div>"), b.join("")
            }, b.formatProcessingRois = function (a) {
                var b, c;
                return b = a.gm, c = a.intensity, '<h3>ROI</h3><div class="horizontal-scrolling"><table><thead><tr><th scope="col">Type</th><th scope="col">ROI</th><th scope="col">Observation Decay</th></tr></thead><tbody><tr><th scope="row">Ground Motion</th><td>' + b.roi + " km</td><td>" + b.decay + '</td></tr><tr><th scope="row">Intensity</th><td>' + c.roi + " km</td><td>" + c.decay + "</td></tr></tbody></table></div>"
            }, b.onError = function () {
                b.el.innerHTML = '<p class="alert error">Unable to load ShakeMap information</p>'
            }, b.onSuccess = function (a) {
                var c = b.el;
                c.innerHTML = '<div class="row"><div class="one-of-two column shakemapinfo-input"></div><div class="one-of-two column shakemapinfo-output"></div></div><div class="shakemapinfo-processing"></div>', b.renderInput(a, c.querySelector(".shakemapinfo-input")), b.renderProcessing(a, c.querySelector(".shakemapinfo-processing")), b.renderOutput(a, c.querySelector(".shakemapinfo-output"))
            }, b.renderInput = function (a, b) {
                var c, d, e;
                e = a.input, c = [], c.push("<h2>Input</h2>"), d = e.event_information, c.push('<h3>Event Information</h3><div class="horizontal-scrolling"><table><tbody><tr><th scope="row">Description</th><td>' + d.event_description + '</td></tr><tr><th scope="row">ID</th><td>' + d.event_id + '</td></tr><tr><th scope="row">Magnitude</th><td>' + i.magnitude(d.magnitude) + '</td></tr><tr><th scope="row">Depth</th><td>' + i.depth(d.depth, "km") + '</td></tr><tr><th scope="row">Longitude</th><td>' + i.longitude(d.longitude) + '</td></tr><tr><th scope="row">Latitude</th><td>' + i.latitude(d.latitude) + '</td></tr><tr><th scope="row">Origin Time</th><td>' + d.origin_time + '</td></tr><tr><th scope="row">Mechanism</th><td>' + (d.src_mech || h) + '</td></tr><tr><th scope="row">Mechanism source</th><td>' + (d.mech_src || h) + '</td></tr><tr><th scope="row">Location</th><td>' + d.location + '</td></tr><tr><th scope="row">Flinn Engdahl region</th><td>' + d.feregion + '</td></tr><tr><th scope="row">Fault file(s)</th><td>' + (d.faultfiles || h) + '</td></tr><tr><th scope="row">Fault reference(s)</th><td>' + (d.fault_ref || h) + '</td></tr><tr><th scope="row">Tectonic regime</th><td>' + (d.tectonic_regime || h) + '</td></tr><tr><th scope="row">Number of seismic stations</th><td>' + d.seismic_stations + '</td></tr><tr><th scope="row">Number of DYFI stations</th><td>' + d.intensity_observations + "</td></tr></tbody></table></div>"), b.innerHTML = c.join("")
            }, b.renderOutput = function (a, c) {
                var d, e, f;
                e = a.output, d = [], d.push("<h2>Output</h2>"), d.push(b.formatOutputGroundMotions(e.ground_motions)), d.push(b.formatOutputMapInformation(e.map_information)), f = e.uncertainty, d.push('<h3>Uncertainty</h3><div class="horizontal-scrolling"><table><tbody><tr><th scope="row">Mean of map uncertainty</th><td>' + f.mean_uncertainty_ratio + '</td></tr><tr><th scope="row">Emperical ShakeMap grade</th><td>' + f.grade + '</td></tr><tr><th scope="row">Flagged seismic stations</th><td>' + f.total_flagged_pgm + '</td></tr><tr><th scope="row">Flagged DYFI stations</th><td>' + f.total_flagged_mi + "</td></tr></tbody></table></div>"), c.innerHTML = d.join("")
            }, b.renderProcessing = function (a, c) {
                var d, e, f, g, j;
                f = a.processing, d = [], d.push('<h2>Processing</h2><div class="row">'), d.push('<div class="one-of-two column">' + b.formatProcessingGroundMotions(f.ground_motion_modules) + "</div>"), e = f.miscellaneous, d.push('<div class="one-of-two column"><h3>Miscellaneous</h3><div class="horizontal-scrolling"><table><tbody><tr><th scope="row">Used log amp to compute bias?</th><td>' + e.bias_log_amp + '</td></tr><tr><th scope="row">Maximum distance to include station in bias</th><td>' + i.distance(e.bias_max_range, "km") + '</td></tr><tr><th scope="row">Max magnitude to compute bias</th><td>' + i.magnitude(e.bias_max_mag) + '</td></tr><tr><th scope="row">Min allowed bias</th><td>' + (e.bias_min_bias || h) + '</td></tr><tr><th scope="row">Maximum magnitude to flag outliers</th><td>' + i.magnitude(e.outlier_max_mag) + '</td></tr><tr><th scope="row">Norm of the bias</th><td>' + (e.bias_norm || h) + '</td></tr><tr><th scope="row">Min # of stations necessary to compute bias</th><td>' + (e.bias_min_stations || h) + '</td></tr><tr><th scope="row">Max allowed bias</th><td>' + (e.bias_max_bias || h) + '</td></tr><tr><th scope="row">Outlier level (# of std dev)</th><td>' + (e.outlier_deviation_level || h) + '</td></tr><tr><th scope="row">Median distance used</th><td>' + e.median_dist + "</td></tr></tbody></table></div></div>"), j = f.shakemap_versions, d.push('<div class="one-of-two column"><h3>ShakeMap Versions</h3><div class="horizontal-scrolling"><table><tbody><tr><th scope="row">Code</th><td>' + j.shakemap_revision + '</td></tr><tr><th scope="row">Map</th><td>' + j.map_version + '</td></tr><tr><th scope="row">Date</th><td>' + j.process_time + "</td></tr></tbody></table></div></div>"), g = f.site_response, d.push('<div class="one-of-two column"><h3>Site Response</h3><div class="horizontal-scrolling"><table><tbody><tr><th scope="row">Reference rock Vs30</th><td>' + g.vs30default + ' m/s</td></tr><tr><th scope="row">Site correction applied</th><td>' + g.site_correction + "</td></tr></tbody></table></div></div>"), d.push('<div class="one-of-two column">' + b.formatProcessingRois(f.roi) + "</div>"), d.push("</div>"), c.innerHTML = d.join("")
            }, c(a), a = null, b
        };
        b.exports = h
    }, {"core/ContentView": 52, "core/Formatter": 56, "util/Util": 44}],
    121: [function (a, b, c) {
        "use strict";
        var d, e, f, g = a("impact/ImpactSummaryModule"), h = a("core/Module"), i = a("shakemap/ShakeMapView"), j = a("util/Util");
        d = "shakemap", e = "ShakeMap", f = ["shakemap"];
        var k = {}, l = function (a) {
            var b, c, f;
            return a = j.extend({}, k, a), b = h(a), c = function () {
                b.ID = d, b.TITLE = e
            }, b.destroy = j.compose(function () {
                f && f.destroy(), f = null, c = null, b = null
            }, b.destroy), b.render = function () {
                var a, c;
                b.header.innerHTML = "<h3>ShakeMap</h3>", c = b.getProduct("shakemap"), c ? (b.header.appendChild(b.getProductHeader({
                    product: c,
                    summaryModule: g
                })), a = b.getProductFooter({product: c}), f = i({
                    el: b.content,
                    model: c
                }), f.render()) : b.content.innerHTML = '<p class="alert warning">No ShakeMap Found</p>', b.footer.innerHTML = '<h3>For More Information</h3><ul><li><a href="http://usgs.github.io/shakemap">ShakeMap Manual</a></li></ul>', a && b.footer.appendChild(a)
            }, c(a), a = null, b
        };
        l.ID = d, l.TITLE = e, l.TYPES = f, b.exports = l
    }, {"core/Module": 58, "impact/ImpactSummaryModule": 87, "shakemap/ShakeMapView": 124, "util/Util": 44}],
    122: [function (a, b, c) {
        "use strict";
        var d = a("core/BasicPinView"), e = a("core/Formatter"), f = a("shakemap/ShakeMapModule"), g = a("util/Util"), h = {module: f}, i = function (a) {
            var b, c, f;
            return a = g.extend({}, h, a), b = d(a), c = function (a) {
                f = a.formatter || e()
            }, b.destroy = g.compose(function () {
                f = null, c = null, b = null
            }, b.destroy), b.renderPinContent = function () {
                var a, c;
                a = b.model.getContent("pin-thumbnail.png"), a || (a = b.model.getContent("download/tvmap.jpg")), c = a ? '<div class="shakemap-tvmap"><img src="' + a.get("url") + '" alt="Intensity Map"/></div>' : '<p class="alert warning">Map not available</p>', b.content.innerHTML = c
            }, b.renderPinHeader = g.compose(b.renderPinHeader, function () {
                b.header.insertAdjacentHTML("beforeend", f.intensity(b.model.getProperty("maxmmi"), null))
            }), c(a), a = null, b
        };
        b.exports = i
    }, {"core/BasicPinView": 51, "core/Formatter": 56, "shakemap/ShakeMapModule": 121, "util/Util": 44}],
    123: [function (a, b, c) {
        "use strict";
        var d = a("accordion/Accordion"), e = a("core/ContentView"), f = a("core/Formatter"), g = a("util/Util"), h = "No stations list available.", i = {
            M: "Manually flagged",
            T: "Outlier",
            G: "Glitch (clipped or below noise)",
            I: "Incomplete time series",
            N: "Not in list of known stations"
        }, j = function (a) {
            var b, c, j, k;
            return a = a || {}, b = e(a), c = function (a) {
                b.el.classList.add("shakemap-stations"), k = a.formatter || f()
            }, b.buildStationList = function (a) {
                var c, d, e, f, g, h, i, j;
                if (a = a.features, 0 === a.length)return "<p>No station data available at this time.</p>";
                for (a.sort(b.sortByDistance), h = [], d = 0; d < a.length; d++)i = a[d], g = i.properties, e = g.pga, f = g.pgv, f = k.number(f, 3), e = k.number(e, 3), c = k.number(g.distance, 1), j = -1 === g.name.indexOf("ZIP Code") ? g.code + "<small>" + g.name + "</small>" : g.name, h.push(['<div class="accordion accordion-section accordion-closed station">', "<h3>", j, "</h3>", '<ul class="station-summary">', "<li>", k.intensity(g.intensity, '<abbr title="Modified Mercalli Intensity">mmi</abbr>'), "</li>", "<li>", "<span>", e, " %g</span>", '<abbr title="Maximum Horizontal Peak Ground Acceleration">', "pga", "</abbr>", "</li>", "<li>", "<span>", f, " cm/s</span>", '<abbr title="Maximum Horizontal Peak Ground Velocity">', "pgv", "</abbr>", "</li>", "<li>", "<span>", c, " km", "</span>", '<abbr title="Distance (km)">dist</abbr>', "</li>", "</ul>", '<a class="accordion-toggle" data-id="', d, '">Details</a>', b.buildStationDetails(i), "</div>"].join(""));
                return h.join("")
            }, b.buildStationDetails = function (a) {
                var c;
                return c = a.properties, ['<div class="accordion-content">', '<dl class="station-metadata vertical">', '<dt class="station-metadata-type">Type</dt>', '<dd class="station-metadata-type">', c.instrumentType || "&ndash;", "</dd>", '<dt class="station-metadata-location">Location</dt>', '<dd class="station-metadata-location">', b.formatLocation(a), "</dd>", '<dt class="station-metadata-source">Source</dt>', '<dd class="station-metadata-source">', c.source || "&ndash;", "</dd>", '<dt class="station-metadata-intensity">Intensity</dt>', '<dd class="station-metadata-intensity">', k.number(c.intensity, 1, "&ndash;"), "</dd>", "</dl>", b.createChannelTable(c.channels), "</div>"].join("");
            }, b.createAmplitudesObject = function (a) {
                var b, c, d, e;
                for (b = {}, e = a.length, d = 0; e > d; d++)c = a[d], b[c.name] = c;
                return b
            }, b.createChannelTable = function (a) {
                var c, d, e = ['<div class="horizontal-scrolling">', '<table class="station-channels-list">', "<thead>", "<tr>", '<th scope="col" class="station-channels-list-name">name</th>', '<th scope="col" class="station-channels-list-pga">pga</th>', '<th scope="col" class="station-channels-list-pgv">pgv</th>', '<th scope="col" class="station-channels-list-psa03">psa03</th>', '<th scope="col" class="station-channels-list-psa10">psa10</th>', '<th scope="col" class="station-channels-list-psa30">psa30</th>', "</tr>", "</thead>", "<tbody>"];
                for (d = a.length, c = 0; d > c; c++)e.push(b.createChannelRow(a[c]));
                return e.push("</tbody></table></div>"), e.join("")
            }, b.createChannelRow = function (a) {
                var c;
                return c = b.createAmplitudesObject(a.amplitudes), ["<tr>", '<th scope="row" class="station-channel-name">', a.name, "</th>", '<td class="station-channel-pga">', b.formatComponent(c.pga), "</td>", '<td class="station-channel-pgv">', b.formatComponent(c.pgv), "</td>", '<td class="station-channel-psa03">', b.formatComponent(c.psa03), "</td>", '<td class="station-channel-psa10">', b.formatComponent(c.psa10), "</td>", '<td class="station-channel-psa30">', b.formatComponent(c.psa30), "</td>", "</tr>"].join("")
            }, b.destroy = g.compose(function () {
                j && j.destroy(), j = null, k = null, c = null, b = null
            }, b.destroy), b.formatComponent = function (a) {
                var b, c, d, e;
                return b = [], a ? (c = a.flag, d = a.value, e = a.units, c && "0" !== c ? (b.push('<span class="station-flag">'), b.push(parseFloat(d, 10).toFixed(3)), i.hasOwnProperty(c) ? b.push('<abbr title="' + i[c] + '">(' + c + ")</abbr>") : b.push("(" + c + ")"), b.push("</span>")) : (b.push("<span>"), b.push(parseFloat(d, 10).toFixed(3)), b.push("&nbsp;" + e), b.push("</span>"))) : b.push("<span>&ndash;</span>"), b.join("")
            }, b.formatLocation = function (a) {
                var b, c;
                return b = a.geometry.coordinates[1], c = a.geometry.coordinates[0], (a.properties.location ? a.properties.location + "<br/>" : "") + k.location(b, c)
            }, b.onError = function () {
                b.el.innerHTML = h
            }, b.onSuccess = function (a) {
                b.el.innerHTML = b.buildStationList(a), j = d({el: b.el})
            }, b.sortByDistance = function (a, b) {
                return parseFloat(a.properties.distance) - parseFloat(b.properties.distance)
            }, c(a), a = null, b
        };
        j.NO_CONTENT_MESSAGE = h, b.exports = j
    }, {"accordion/Accordion": 2, "core/ContentView": 52, "core/Formatter": 56, "util/Util": 44}],
    124: [function (a, b, c) {
        "use strict";
        var d = a("map/InteractiveMapView"), e = a("core/ProductView"), f = a("shakemap/ShakeMapInfoView"), g = a("shakemap/ShakeMapStationListView"), h = a("tablist/TabList"), i = a("util/Util"), j = function (a) {
            var b, c, j, k, l;
            return b = e(a), c = function () {
                b.el.classList.add("shakemap")
            }, b.createPSATabListImages = function (a) {
                var c, d, e, f, g;
                return c = [], d = [], e = a.getContent("download/psa03.jpg"), f = a.getContent("download/psa10.jpg"), g = a.getContent("download/psa30.jpg"), e && (c.push("0.3 s"), d.push(b.createTabListImage(e, "ShakeMap Peak Spectral Acceleration 0.3 s image"))), f && (c.push("1.0 s"), d.push(b.createTabListImage(f, "ShakeMap Peak Spectral Acceleration 1.0 s image"))), g && (c.push("3.0 s"), d.push(b.createTabListImage(g, "ShakeMap Peak Spectral Acceleration 3.0 s image"))), "<h3>Peak Spectral Acceleration (%g) for " + c.join(", ") + "</h3>" + d.join("")
            }, b.createTabListData = function (a) {
                var c, d, e, h, i, m;
                c = a.getContent("download/intensity.jpg"), c && l.addTab({
                    title: "Intensity",
                    content: b.createTabListImage(c, "ShakeMap Intensity image")
                }), d = a.getContent("download/pga.jpg"), d && l.addTab({
                    title: '<abbr title="Peak Ground Acceleration">PGA</abbr>',
                    content: b.createTabListImage(d, "ShakeMap Peak Ground Acceleration image")
                }), e = a.getContent("download/pgv.jpg"), e && l.addTab({
                    title: '<abbr title="Peak Ground Velocity">PGV</abbr>',
                    content: b.createTabListImage(e, "ShakeMap Peak Ground Velocity image")
                }), i = a.getContent("download/stationlist.json"), i && (k = g({
                    el: document.createElement("div"),
                    model: i
                }), l.addTab({
                    title: "Station List", content: function () {
                        return k.render(), k.el
                    }
                })), h = a.getContent("download/info.json"), h && (j = f({
                    el: document.createElement("div"),
                    model: h
                }), l.addTab({
                    title: "Metadata", content: function () {
                        return j.render(), j.el
                    }
                })), m = a.getContent("download/sd.jpg"), m && l.addTab({
                    title: "Uncertainty",
                    content: b.createTabListImage(m, "ShakeMap Uncertainty image")
                }), (a.getContent("download/psa03.jpg") || a.getContent("download/psa10.jpg") || a.getContent("download/psa30.jpg")) && l.addTab({
                    title: '<abbr title="Peak Spectral Acceleration">PSA</abbr>',
                    content: b.createPSATabListImages(a)
                })
            }, b.createTabListImage = function (a, c) {
                var e;
                return a.get("url") ? e = '<a href="#map?' + d.SHAKEMAP_STATIONS + "=true&shakemapSource=" + b.model.get("source") + "&shakemapCode=" + b.model.get("code") + '"><img class="shakemap-tablist-image"  src="' + a.get("url") + '" alt="' + c + '"/></a>' : ""
            }, b.destroy = i.compose(function () {
                l && (l.destroy(), l = null), j && (j.destroy(), j = null), k && (k.destroy(), k = null), c = null, b = null
            }, b.destroy), b.render = function () {
                var a, c;
                a = b.el, c = b.model, c.isDeleted() ? a.innerHTML = '<p class="alert info">Product Deleted</p>' : (l = new h({
                    el: a,
                    tabPosition: "top",
                    tabs: []
                }), b.createTabListData(c))
            }, c(), a = null, b
        };
        b.exports = j
    }, {
        "core/ProductView": 60,
        "map/InteractiveMapView": 96,
        "shakemap/ShakeMapInfoView": 120,
        "shakemap/ShakeMapStationListView": 123,
        "tablist/TabList": 31,
        "util/Util": 44
    }],
    125: [function (a, b, c) {
        "use strict";
        var d, e, f, g, h = a("core/Module"), i = a("scientific/ScientificSummaryModule"), j = a("util/Util"), k = a("util/Xhr");
        d = {
            irisServiceUrl: "http://service.iris.edu/fdsnws/event/1/query",
            irisSpudUrl: "http://www.iris.edu/spud/event/",
            irisWilberUrl: "http://www.iris.edu/wilber3/find_stations/",
            errorMessage: '<p class="alert error">Error finding waveform data</p>'
        }, e = "waveform", f = "Waveforms", g = function (a) {
            var b;
            return b = a.get("config"), b.hasOwnProperty("SCENARIO_MODE") ? !b.SCENARIO_MODE : !0
        };
        var l = function (a) {
            var b, c, g, l, m, n, o, p;
            return a = j.extend({}, d, a), b = h(a), c = function () {
                b.ID = e, b.TITLE = f, g = a.errorMessage, m = a.irisServiceUrl, n = a.irisSpudUrl, o = a.irisWilberUrl, b.el.classList.add("wave-form")
            }, b.destroy = j.compose(function () {
                c = null, b = null, p = null, o = null, n = null, m = null, l = null, g = null
            }, b.destroy), b.fetchData = function (a) {
                k.ajax({url: m, data: a, success: b.onSuccess, error: b.onError})
            }, b.getSearch = function () {
                var a, c, d, e, f, g;
                return a = b.model.get("event"), e = null, a && (f = a.getSummary(), c = f.latitude, d = f.longitude, g = Number(f.time.getTime()), e = {
                    starttime: new Date(g - 16e3).toISOString().replace("Z", ""),
                    endtime: new Date(g + 16e3).toISOString().replace("Z", ""),
                    latitude: c,
                    longitude: d,
                    maxradius: 1,
                    format: "text"
                }), e
            }, b.onError = function () {
                b.el.innerHTML = g
            }, b.onSuccess = function (a) {
                var c;
                return (c = b.parseIrisEventId(a)) ? void b.renderContent(c) : void b.onError()
            }, b.parseIrisEventId = function (a) {
                return a.split("\n")[1].split("|")[0]
            }, b.render = function () {
                var a;
                b.header.innerHTML = '<h3>Waveforms</h3><a class="back-to-summary-link" href="#' + i.ID + '">Back to ' + i.TITLE + "</a>", a = b.getSearch(), null === a ? b.onError() : b.fetchData(a)
            }, b.renderContent = function (a) {
                b.content.innerHTML = ['<dl class="iris-products vertical">', "<dt>", '<a href="', o, a, '" target="_blank">', "IRIS Seismic Waveform Data (Wilber 3)", "</a>", "</dt>", "<dd>", "Wilber 3 locates stations in operation at the time of the event,", " allows users to filter stations, preview waveform data, and", " view record section plots. Data can be downloaded in a", ' number of formats including <abbr title="Seismic Analysis', ' Code">SAC</abbr>, <abbr title="Standard for the Exchange of', ' Earthquake Data">SEED</abbr>, miniSEED and ASCII.', "</dd>", "<dt>", '<a href="', n, a, '" target="_blank">', "IRIS Searchable Product Depository (SPUD) Event Page", "</a>", "</dt>", "<dd>", "SPUD is the IRIS DMC&rsquo;s primary data product management system.", " Complementing the DMC&rsquo;s SEED and assembled data archives,", " which contain time series recordings, the SPUD system", " primarily contains derivative data products of other types", " (images, movies, etc.) created either at the DMC or by members", " of the community.", "</dd>", "</dl>"].join("")
            }, c(a), a = null, b
        };
        l.ID = e, l.TITLE = f, l.hasContent = g, b.exports = l
    }, {"core/Module": 58, "scientific/ScientificSummaryModule": 119, "util/Util": 44, "util/Xhr": 45}]
}, {}, [73]);