/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(
                    ck);
                if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f
                    .support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(
                    o(c)))
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && f.type(b) === "object")
            for (var e in b) b_(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bS,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c
            .dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[
                    h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border")
                for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ?
                    d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] +
                        "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (bt.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c)
            for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d +=
                parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f
                .css(a, c + bx[e])) || 0);
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a
            .getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a
            .querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a),
            c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a
            .type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c ===
        "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a
            .text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a
            .value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute(
            "_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)
                    for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument
            .createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(
                        d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }

    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }

            var e = function (a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function (a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(
                            a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(
                                    a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr
                                    .call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e
                                    .buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j
                                    .fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return F.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this
                        .context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") +
                        c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function (a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e
                    .isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e
                                .isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e
                                .extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                return i
            }, e.extend({
                noConflict: function (b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a
                            .addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {
                            }
                            c.documentElement.doScroll && b && J()
                        }
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function (a) {
                    return e.type(a) === "array"
                },
                isWindow: function (a) {
                    return a != null && a == a.window
                },
                isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function (a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor
                            .prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a) ;
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw new Error(a)
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function(
                        "return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c) {
                    if (typeof c != "string" || !c) return null;
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d =
                            new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }
                    (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e
                        .error("Invalid XML: " + c);
                    return d
                },
                noop: function () {
                },
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1) break
                        } else
                            for (; g < h;)
                                if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1) break
                    } else
                        for (; g < h;)
                            if (c.call(a[g], g, a[g++]) === !1) break;
                    return a
                },
                trim: G ? function (a) {
                    return a == null ? "" : G.call(a)
                } : function (a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e
                            .isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (H) return H.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j -
                        1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = F.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function (a, c, d, f, g, h, i) {
                    var j, k = d == null,
                        l = 0,
                        m = a.length;
                    if (d && typeof d == "object") {
                        for (l in d) e.access(a, c, l, d[l], 1, h, f);
                        g = 1
                    } else if (f !== b) {
                        j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                            return j.call(e(a), c)
                        }) : (c.call(a, f), c = null));
                        if (c)
                            for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                        g = 1
                    }
                    return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u
                        .exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }

                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn
                        .constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e
                .browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h =
                e(c), c.addEventListener ? B = function () {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m, n = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? n(g) : h ===
                    "function" && (!a.unique || !p.has(g)) && c.push(g)
            },
            o = function (b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
                for (; c && m < l; m++)
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(),
                    p.fireWith(e[0], e[1])))
            },
            p = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function () {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                                    if (a.unique) break
                                }
                    }
                    return this
                },
                has: function (a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++)
                            if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function () {
                    c = [];
                    return this
                },
                disable: function () {
                    c = d = e = b;
                    return this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    d = b, (!e || e === !0) && p.disable();
                    return this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (b, c) {
                    d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                    return this
                },
                fire: function () {
                    p.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f
                                        .isFunction(g.promise) ? g.promise()
                                        .then(d.resolve, d.reject, d
                                            .notify) : d[e + "With"](this ===
                                    i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (a == null) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j,
                        b)
                }
            }

            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise()
                    .then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
            q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML =
            "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
            d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName(
            "input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i
            .cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i
            .setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked",
            "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j
            .appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b
            .appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent)
            for (n in {
                submit: 1,
                change: 1,
                focusin: 1
            }) m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"),
                b[n + "Bubbles"] = o;
        j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r =
                "position:absolute;top:0;left:0;width:1px;height:1px;", s = t +
                "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n +
                "display:block;'><div style='" + t +
                "0;display:block;overflow:hidden;'></div></div>" + "<table " + n +
                "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c
                .createElement("div"), d.style.cssText = s +
                "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u
                .firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML =
                "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p
                .getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "",
                k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0,
            a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width =
                "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b
                .reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p
                .innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p
                .style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b
                .inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p
                .style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b
                .shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML =
                q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild,
                j = {
                    doesNotAddBorder: g.offsetTop !== 5,
                    doesAddBorderForTableAndCells: i.offsetTop === 5
                }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g
                .offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e
                .style.overflow = "hidden", e.style.position = "relative", j
                .subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j
                .doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p
                .style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom =
                1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f
                    .noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n]
                    .data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(
                    c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b =
                            b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support
                    .deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] =
                    null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h, i, j = this[0],
                k = 0,
                m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") === 0 && (h = f
                            .camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") return this.each(function () {
                f.data(this, a)
            });
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function (c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(
                        j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function () {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b
                        .triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a,
                    b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(
                a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) return f.queue(this[0], a);
            return c === b ? this : this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }

            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) &&
                    f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u =
            /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g +=
                                b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" :
                        "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this,
                    "__className__", this.className), this.className = this.className ||
                a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(
                    b) > -1) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, g = this[0];
            {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this),
                            h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" :
                                typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h,
                                    function (a) {
                                        return a == null ? "" : a + ""
                                    })), c = f.valHooks[this.type] || f.valHooks[this.nodeName
                                .toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this
                                .value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute(
                            "disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e
                            .parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(
                    c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a,
                    e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g &&
                "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a
                        .nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ?
                c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c,
                c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0,
        coords: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio",
        "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function (
            a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[
                3] || b[3].test((c["class"] || {}).value))
        },
        I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h
                    .events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event
                        .dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event
                        .special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[
                        m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a
                            .addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r
                        .delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
                h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] ||
                        [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join(
                        "\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s
                        .guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d ===
                        "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p
                        .remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f
                        .removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events",
                    "handle"
                ], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split(
                    "."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type =
                    h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c
                    .namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h
                    .indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !
                        0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c),
                    p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [
                    [e, p.bindType || h]
                ];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1],
                    q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d),
                    q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e
                    .ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f
                    .acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target
                    .offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event
                    .triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = f.event.special[c.type] || {},
                j = [],
                k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this), n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this)
                        if (m.disabled !== !0) {
                            p = {}, r = [], n[0] = m;
                            for (k = 0; k < e; k++) s = d[k], t = s.selector, p[t] === b && (p[t] = s
                                .quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                            r.length && j.push({
                                elem: m,
                                matches: r
                            })
                        }
                }
                d.length > e && j.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k], c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s
                            .namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s
                            .origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c
                            .result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
            .split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
                .split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button,
                    i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e
                    .documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g
                    .scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d
                    .clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g
                    .clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ?
                    d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ?
                    2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
                h = f.event.fixHooks[a.type] || {},
                i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target
                .parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c
                .preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a
            .defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K :
            J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f
            .expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c = this,
                    d = a.relatedTarget,
                    e = a.handleObj,
                    g = e.selector,
                    h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(
                    this, arguments), a.type = b;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event
                .simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this,
                    "propertychange._change",
                    function (a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event
                        .simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change",
                    function (a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && f.event
                            .simulate("change", this.parentNode, a, !0)
                    }), b._change_attached = !0)
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !==
                "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var d = 0,
            e = function (a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d,
                d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J;
            else if (!e) return this;
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e
                    .selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            d === !1 && (d = J);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
            .split(" "),
        function (a, b) {
            f.fn[b] = function (a, c) {
                c == null && (c = a, a = null);
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D
                .test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function () {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c, j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            var a =
                    /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = "sizcache" + (Math.random() + "").replace(".", ""),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function () {
                i = !1;
                return 0
            });
            var m = function (b, d, e, f) {
                e = e || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) return [];
                if (!b || typeof b != "string") return e;
                var i, j, k, l, n, q, r, t, u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), i = a.exec(x);
                    if (i) {
                        x = i[3], w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b))
                    if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
                    else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                    }
                else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[
                    w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n
                        .set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d
                            .parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n
                            .set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null &&
                        (r = d), o.relative[q](k, r, v)
                    } else k = w = []
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]")
                    if (!u) e.push.apply(e, k);
                    else if (d && d.nodeType === 1)
                        for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d,
                            k[t])) && e.push(j[t]);
                    else
                        for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
                else s(k, e);
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function (a) {
                if (u) {
                    h = i, a.sort(u);
                    if (h)
                        for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }, m.matches = function (a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function (a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function (a, b, c) {
                var d, e, f, g, h, i;
                if (!a) return [];
                for (e = 0, f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1], g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }, m.filter = function (a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a,
                    r = [],
                    s = c,
                    t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter)
                        if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                            k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                            if (l.substr(l.length - 1) === "\\") continue;
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f) g = i = !0;
                                else if (f === !0) continue
                            }
                            if (f)
                                for (n = 0;
                                     (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i !=
                                null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                            if (i !== b) {
                                d || (s = r), a = a.replace(o.match[h], "");
                                if (!g) return [];
                                break
                            }
                        }
                    if (a === q)
                        if (g == null) m.error(a);
                        else break;
                    q = a
                }
                return s
            }, m.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function (a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (d === 1 || d === 9 || d === 11) {
                            if (typeof a.textContent == "string") return a.textContent;
                            if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                            for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                        } else if (d === 3 || d === 4) return a.nodeValue
                    } else
                        for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function (a) {
                            return a.getAttribute("href")
                        },
                        type: function (a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function (a, b) {
                            var c = typeof b == "string",
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++)
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h.nodeType !== 1) ;
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                }
                            e && m.filter(b, a, !0)
                        },
                        ">": function (a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode ===
                                    b);
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function (a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g(
                                "parentNode", b, f, a, d, c)
                        },
                        "~": function (a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g(
                                "previousSibling", b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function (a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function (a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] &&
                                c.push(d[e]);
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function (a, b) {
                            if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[
                                1])
                        }
                    },
                    preFilter: {
                        CLASS: function (a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f) return a;
                            for (var g = 0, h;
                                 (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ")
                                .replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[
                                g] = !1));
                            return !1
                        },
                        ID: function (a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function (a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function (a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] ===
                                    "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            a[0] = e++;
                            return a
                        },
                        ATTR: function (a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j,
                                ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function (b, c, d, e, f) {
                            if (b[1] === "not")
                                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null,
                                    null, c);
                                else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                }
                            else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                            return b
                        },
                        POS: function (a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function (a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function (a) {
                            return a.disabled === !0
                        },
                        checked: function (a) {
                            return a.checked === !0
                        },
                        selected: function (a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function (a) {
                            return !!a.firstChild
                        },
                        empty: function (a) {
                            return !a.firstChild
                        },
                        has: function (a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function (a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function (a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b ===
                                null)
                        },
                        radio: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                        },
                        checkbox: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                        },
                        file: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "file" === a.type
                        },
                        password: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "password" === a.type
                        },
                        submit: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "submit" === a.type
                        },
                        image: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "image" === a.type
                        },
                        reset: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "reset" === a.type
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type || b === "button"
                        },
                        input: function (a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function (a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (a, b) {
                            return b === 0
                        },
                        last: function (a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function (a, b) {
                            return b % 2 === 0
                        },
                        odd: function (a, b) {
                            return b % 2 === 1
                        },
                        lt: function (a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function (a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function (a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function (a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function (a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(
                                b[3]) >= 0;
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function (a, b) {
                            var c, e, f, g, h, i, j, k = b[1],
                                l = a;
                            switch (k) {
                                case "only":
                                case "first":
                                    while (l = l.previousSibling)
                                        if (l.nodeType === 1) return !1;
                                    if (k === "first") return !0;
                                    l = a;
                                case "last":
                                    while (l = l.nextSibling)
                                        if (l.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    c = b[2], e = b[3];
                                    if (c === 1 && e === 0) return !0;
                                    f = b[0], g = a.parentNode;
                                    if (g && (g[d] !== f || !a.nodeIndex)) {
                                        i = 0;
                                        for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l
                                            .nodeIndex = ++i);
                                        g[d] = f
                                    }
                                    j = a.nodeIndex - e;
                                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                            }
                        },
                        ID: function (a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function (a, b) {
                            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() ===
                                b
                        },
                        CLASS: function (a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function (a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] !=
                                null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g :
                                f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 :
                                    g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e
                                        .substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g
                                        .length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function (a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) return f(a, c, b, d)
                        }
                    }
                },
                p = o.match.POS,
                q = function (a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o
                .leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            o.match.globalPOS = p;
            var s = function (a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function (a, b) {
                    var c = 0,
                        d = b || [];
                    if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function (a, b) {
                if (a === b) {
                    h = !0;
                    return 0
                }
                if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ?
                    -1 : 1;
                return a.compareDocumentPosition(b) & 4 ? -1 : 1
            } : (u = function (a, b) {
                if (a === b) {
                    h = !0;
                    return 0
                }
                if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                var c, d, e = [],
                    f = [],
                    g = a.parentNode,
                    i = b.parentNode,
                    j = g;
                if (g === i) return v(a, b);
                if (!g) return -1;
                if (!i) return 1;
                while (j) e.unshift(j), j = j.parentNode;
                j = i;
                while (j) f.unshift(j), j = j.parentNode;
                c = e.length, d = f.length;
                for (var k = 0; k < c && k < d; k++)
                    if (e[k] !== f[k]) return v(e[k], f[k]);
                return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
            }, v = function (a, b, c) {
                if (a === b) return c;
                var d = a.nextSibling;
                while (d) {
                    if (d === b) return -1;
                    d = d.nextSibling
                }
                return 1
            }),
                function () {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (
                        o.find.ID = function (a, c, d) {
                            if (typeof c.getElementById != "undefined" && !d) {
                                var e = c.getElementById(a[1]);
                                return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e
                                    .getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                            }
                        }, o.filter.ID = function (a, b) {
                            var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                            return a.nodeType === 1 && c && c.nodeValue === b
                        }), e.removeChild(a), e = a = null
                }(),
                function () {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG =
                        function (a, b) {
                            var c = b.getElementsByTagName(a[1]);
                            if (a[1] === "*") {
                                var d = [];
                                for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                                c = d
                            }
                            return c
                        }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild
                        .getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle
                        .href = function (a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), c.querySelectorAll && function () {
                var a = m,
                    b = c.createElement("div"),
                    d = "__sizzle__";
                b.innerHTML = "<p class='TEST'></p>";
                if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                    m = function (b, e, f, g) {
                        e = e || c;
                        if (!g && !m.isXML(e)) {
                            var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                            if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                if (h[1]) return s(e.getElementsByTagName(b), f);
                                if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e
                                    .getElementsByClassName(h[2]), f)
                            }
                            if (e.nodeType === 9) {
                                if (b === "body" && e.body) return s([e.body], f);
                                if (h && h[3]) {
                                    var i = e.getElementById(h[3]);
                                    if (!i || !i.parentNode) return s([], f);
                                    if (i.id === h[3]) return s([i], f)
                                }
                                try {
                                    return s(e.querySelectorAll(b), f)
                                } catch (j) {
                                }
                            } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var k = e,
                                    l = e.getAttribute("id"),
                                    n = l || d,
                                    p = e.parentNode,
                                    q = /^\s*[+~]/.test(b);
                                l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e
                                    .parentNode);
                                try {
                                    if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                } catch (r) {
                                } finally {
                                    l || k.removeAttribute("id")
                                }
                            }
                        }
                        return a(b, e, f, g)
                    };
                    for (var e in a) m[e] = a[e];
                    b = null
                }
            }(),
                function () {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a
                            .msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function (a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!m.isXML(a)) try {
                                if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                    var f = b.call(a, c);
                                    if (f || !d || a.document && a.document.nodeType !== 11) return f
                                }
                            } catch (g) {
                            }
                            return m(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function () {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1) return;
                        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                            if (typeof b.getElementsByClassName != "undefined" && !c) return b
                                .getElementsByClassName(a[1])
                        }, a = null
                    }
                }(), c.documentElement.contains ? m.contains = function (a, b) {
                return a !== b && (a.contains ? a.contains(b) : !0)
            } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            } : m.contains = function () {
                return !1
            }, m.isXML = function (a) {
                var b = (a ? a.ownerDocument || a : 0).documentElement;
                return b ? b.nodeName !== "HTML" : !1
            };
            var y = function (a, b, c) {
                var d, e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr
                .filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
        }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f
                .filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return f.sibling(a.firstChild)
        },
        contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f
                .makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length >
            1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e
                .reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType ===
            1 && e.push(g), g = g[c];
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support
        .htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            return f.access(this, function (a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0]
                    .ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f
                    .clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
                 (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d
                    .getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode
                    .removeChild(d);
            return this
        },
        empty: function () {
            for (var a = 0, b;
                 (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        },
        html: function (a) {
            return f.access(this, function (a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X
                    .test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c
                            .getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (g) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function (b) {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))
                return this.each(function () {
                    f(this).domManip(a, c, d, !0)
                });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes
                    .length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g =
                    h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) :
                        this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, function (a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "")
                        .replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 &&
        typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f
            .support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f
            .fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e,
            d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ?
                a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a
                .nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function (a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0]
                .ownerDocument || c);
            for (var k = 0, l;
                 (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string")
                    if (!_.test(l)) l = b.createTextNode(l);
                    else {
                        l = l.replace(Y, "<$1></$2>");
                        var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                            n = bg[m] || bg._default,
                            o = n[0],
                            p = b.createElement("div"),
                            q = bh.childNodes,
                            r;
                        b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[
                            2];
                        while (o--) p = p.lastChild;
                        if (!f.support.tbody) {
                            var s = $.test(l),
                                t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[
                                    1] === "<table>" && !s ? p.childNodes : [];
                            for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i]
                                .childNodes.length && t[i].parentNode.removeChild(t[i])
                        }
                        !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X
                            .exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode
                            .removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r
                            .parentNode && r.parentNode.removeChild(r)))
                    }
                var u;
                if (!f.support.appendChecked)
                    if (l[0] && typeof (u = l.length) == "number")
                        for (i = 0; i < u; i++) bn(l[i]);
                    else bn(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h
                        .parentNode ? h.parentNode.removeChild(h) : h);
                    else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },
        cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                 (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b
                            .handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando),
                        delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i,
        bq = /opacity=([^)]*)/,
        br = /([A-Z]|^ms)/g,
        bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        bu = /^([\-+])=([\-+.\de]+)/,
        bv = /^margin/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bx = ["Top", "Right", "Bottom", "Left"],
        by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] +
                    parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c =
                "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (by) return by(a, c)
        },
        swap: function (a, b, c) {
            var d = {},
                e, f;
            for (f in b) d[f] = a.style[f], a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d
            .getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a
            .ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e &&
        bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a
            .runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b ===
        "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                    return bB(a, b, d)
                })
            },
            set: function (a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ?
                parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                return f.swap(a, {
                    display: "inline-block"
                }, function () {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f
            .css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }), f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        f.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var bC = /%20/g,
        bD = /\[\]$/,
        bE = /\r?\n/g,
        bF = /#.*$/,
        bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bH =
            /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bJ = /^(?:GET|HEAD)$/,
        bK = /^\/\//,
        bL = /\?/,
        bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bN = /^(?:select|textarea)/i,
        bO = /\s+/,
        bP = /([?&])_=[^&]*/,
        bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bR = f.fn.load,
        bS = {},
        bT = {},
        bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bR) return bR.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f
                .ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) :
                        c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) ||
                    bH.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bE, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bE, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? ca(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try {
                            r = cb(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h
                        .rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ?
                        "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g
                        .trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode =
                function (a) {
                    if (a) {
                        var b;
                        if (s < 2)
                            for (b in a) j[b] = [j[b], a[b]];
                        else b = a[v.status], v.then(b, b)
                    }
                    return this
                }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes =
                f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ
                .exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[
                2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ?
                80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d
                .data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f
                .active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader(
                "Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[
                k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v
                .setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d
                .dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d
                .dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
            p = bZ(bT, d, c, v);
            if (!p) w(-1, "No Transport");
            else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q =
                    setTimeout(function () {
                        v.abort("timeout")
                    }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z);
                    else throw z
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" +
                        encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (var g in a) b_(g, a[g], c, e);
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
        cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b
                    .jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data ===
            k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[
                h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a
                        .scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (
                        a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d
                            .onreadystatechange = null, e && d.parentNode && e.removeChild(d), d =
                            b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function () {
            for (var a in cg) cg[a](0, 1)
        } : !1,
        cf = 0,
        cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ch() || ci()
    } : ch,
        function (a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type,
                        c.url, c.async);
                    if (c.xhrFields)
                        for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c
                        .crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] =
                        "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h
                                        .responseXML, n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {
                                    }
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 :
                                        j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a)
                        .unload(ce)), cg[i] = d), h.onreadystatechange = d)
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cj = {},
        ck, cl, cm = /^(?:toggle|show|hide)$/,
        cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        co, cp = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cq;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !
                f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" &&
                f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement,
                    d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f
                ._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ?
                this.each(function () {
                    var b = d ? a : f(this).is(":hidden");
                    f(this)[b ? "show" : "hide"]()
                }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b
                        .animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing ||
                        "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this
                        .style.overflowX, this.style.overflowY
                    ], f.css(this, "display") === "inline" && f.css(this, "float") === "none" &&
                    (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this
                        .style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this,
                    "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(
                    this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn
                    .exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ?
                    "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o ||
                    1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] ===
                "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }

            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }

                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(
                        this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue ===
                    a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx
                .speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !==
                    !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (a) {
                return a
            },
            swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] ||
                f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }

            var e = this,
                g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0,
                this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options
                .queue, h.elem = this.elem, h.saveState = function () {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" +
                    e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e
                    .end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        },
        show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !==
            b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop ===
            "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem,
                this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b, c, d, e = cq || cr(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this
                    .prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a,
                                                                                                          b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" +
                            b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration,
                this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration),
                this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(co), co = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a
                    .elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        var g = b.body,
            h = cy(b),
            i = c.clientTop || g.clientTop || 0,
            j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
            m = d.top + k - i,
            n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    } : cv = function (a, b, c) {
        var d, e = a.offsetParent,
            g = a,
            h = b.body,
            i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k = a.offsetTop,
            l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a ===
            e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support
                .doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d
                .borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a
                .offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !==
            "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0),
                j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math
            .max(c.scrollLeft, h.scrollLeft));
        return {
            top: k,
            left: l
        }
    }, f.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0],
            d = c && c.ownerDocument;
        if (!d) return null;
        if (c === d.body) return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c +=
                parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) ||
                0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(
                k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a,
                "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d
                .left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a
                    .offsetParent;
                return a
            })
        }
    }), f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = cy(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document
                    .documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        var d = "client" + a,
            e = "scroll" + a,
            g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery",
        [], function () {
            return f
        })
})(window);
/*jquery.json.2.3.min.js*/
(function ($) {
    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };
    $.toJSON = typeof JSON === 'object' && JSON.stringify ? JSON.stringify : function (o) {
        if (o === null) {
            return 'null';
        }
        var type = typeof o;
        if (type === 'undefined') {
            return undefined;
        }
        if (type === 'number' || type === 'boolean') {
            return '' + o;
        }
        if (type === 'string') {
            return $.quoteString(o);
        }
        if (type === 'object') {
            if (typeof o.toJSON === 'function') {
                return $.toJSON(o.toJSON());
            }
            if (o.constructor === Date) {
                var month = o.getUTCMonth() + 1,
                    day = o.getUTCDate(),
                    year = o.getUTCFullYear(),
                    hours = o.getUTCHours(),
                    minutes = o.getUTCMinutes(),
                    seconds = o.getUTCSeconds(),
                    milli = o.getUTCMilliseconds();
                if (month < 10) {
                    month = '0' + month;
                }
                if (day < 10) {
                    day = '0' + day;
                }
                if (hours < 10) {
                    hours = '0' + hours;
                }
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                if (milli < 100) {
                    milli = '0' + milli;
                }
                if (milli < 10) {
                    milli = '0' + milli;
                }
                return '"' + year + '-' + month + '-' + day + 'T' +
                    hours + ':' + minutes + ':' + seconds + '.' + milli + 'Z"';
            }
            if (o.constructor === Array) {
                var ret = [];
                for (var i = 0; i < o.length; i++) {
                    ret.push($.toJSON(o[i]) || 'null');
                }
                return '[' + ret.join(',') + ']';
            }
            var name, val, pairs = [];
            for (var k in o) {
                type = typeof k;
                if (type === 'number') {
                    name = '"' + k + '"';
                } else if (type === 'string') {
                    name = $.quoteString(k);
                } else {
                    continue;
                }
                type = typeof o[k];
                if (type === 'function' || type === 'undefined') {
                    continue;
                }
                val = $.toJSON(o[k]);
                pairs.push(name + ':' + val);
            }
            return '{' + pairs.join(',') + '}';
        }
    };
    $.evalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (src) {
        return eval('(' + src + ')');
    };
    $.secureEvalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (src) {
        var filtered = src.replace(/\\["\\\/bfnrtu]/g, '@').replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(
            /(?:^|:|,)(?:\s*\[)+/g, '');
        if (/^[\],:{}\s]*$/.test(filtered)) {
            return eval('(' + src + ')');
        } else {
            throw new SyntaxError('Error parsing JSON, source is not valid.');
        }
    };
    $.quoteString = function (string) {
        if (string.match(escapeable)) {
            return '"' + string.replace(escapeable, function (a) {
                var c = meta[a];
                if (typeof c === 'string') {
                    return c;
                }
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    };
})(jQuery);

/* jquery.scrollLoading.js*/
(function ($) {
    $.fn.scrollLoading = function (options) {
        var defaults = {
            attr: "data-url",
            container: $(window),
            callback: $.noop
        };
        var params = $.extend({}, defaults, options || {});
        params.cache = [];
        $(this).each(function () {
            var node = this.nodeName.toLowerCase(),
                url = $(this).attr(params["attr"]);
            //重组
            var data = {
                obj: $(this),
                tag: node,
                url: url
            };
            params.cache.push(data);
        });

        var callback = function (call) {
            if ($.isFunction(params.callback)) {
                params.callback.call(call.get(0));
            }
        };
        //动态显示数据
        var loading = function () {

            var contHeight = params.container.height();
            if ($(window).get(0) === window) {
                contop = $(window).scrollTop();
            } else {
                contop = params.container.offset().top;
            }

            $.each(params.cache, function (i, data) {
                var o = data.obj,
                    tag = data.tag,
                    url = data.url,
                    post, posb;

                if (o) {
                    post = o.offset().top - contop, post + o.height();

                    if ((post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
                        if (url) {
                            //在浏览器窗口内
                            if (tag === "img") {
                                //图片，改变src
                                callback(o.attr("src", url));
                            } else {
                                o.load(url, {}, function () {
                                    callback(o);
                                });
                            }
                        } else {
                            // 无地址，直接触发回调
                            callback(o);
                        }
                        data.obj = null;
                    }
                }
            });
        };

        //事件触发
        //加载完毕即执行
        loading();
        //滚动执行
        params.container.bind("scroll", loading);
    };
})(jQuery);
/*jSmart*/
(function () {
    function B(a, b) {
        for (var c = 1; c < arguments.length; ++c)
            for (var d in arguments[c]) a[d] = arguments[c][d];
        return a
    }

    function O(a) {
        var b = 0,
            c;
        for (c in a) a.hasOwnProperty(c) && b++;
        return b
    }

    function y(a, b) {
        if (Array.prototype.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; ++c)
            if (a[c] === b) return c;
        return -1
    }

    function G(a) {
        return a.replace(/\\t/, "\t").replace(/\\n/, "\n").replace(/\\(['"\\])/g, "$1")
    }

    function w(a) {
        return G(a.replace(/^['"](.*)['"]$/, "$1")).replace(/^\s+|\s+$/g, "")
    }

    function t(a, b) {
        for (var c =
            0, d = 0, e = jSmart.prototype.left_delimiter, f = jSmart.prototype.right_delimiter, g = jSmart
            .prototype.auto_literal, h = /^\s*(.+)\s*$/i, h = a ? RegExp("^\\s*(" + a + ")\\s*$", "i") : h, i =
            0; i < b.length; ++i)
            if (b.substr(i, e.length) == e) {
                if (!g || !(i + 1 < b.length && b.substr(i + 1, 1).match(/\s/))) c || (b = b.slice(i), d +=
                    parseInt(i), i = 0), ++c
            } else if (b.substr(i, f.length) == f && (!g || !(0 <= i - 1 && b.substr(i - 1, 1).match(/\s/)))) {
                if (!--c) {
                    var k = b.slice(e.length, i).replace(/[\r\n]/g, " ").match(h);
                    if (k) return k[0] = b.slice(0, i + f.length), k.index = d, k
                }
                0 >
                c && (c = 0)
            }
        return null
    }

    function H(a, b, c) {
        var d = "",
            e = null,
            f = null,
            g = 0;
        do {
            e && (g += e[0].length);
            e = t(a, c);
            if (!e) throw Error("Unclosed {" + b + "}");
            d += c.slice(0, e.index);
            g += e.index;
            c = c.slice(e.index + e[0].length);
            (f = t(b, d)) && (d = d.slice(f.index + f[0].length))
        } while (f);
        e.index = g;
        return e
    }

    function C(a, b, c, d) {
        for (var e = 0, f = t(c, d); f; f = t(c, d)) {
            var g = t(a, d);
            if (!g || g.index > f.index) return f.index += e, f;
            d = d.slice(g.index + g[0].length);
            e += g.index + g[0].length;
            f = H(b, a, d);
            d = d.slice(f.index + f[0].length);
            e += f.index + f[0].length
        }
        return null
    }

    function I(a, b) {
        if ("string" == typeof a) with ({
            __code: a
        }) with (z) with (b) try {
            return eval(__code)
        } catch (c) {
            throw Error(c.message + " in \n" + a);
        }
        return a
    }

    function o(a, b, c) {
        a.match(/\[\]$/) ? c[a.replace(/\[\]$/, "")].push(b) : c[a] = b
    }

    function j(a, b) {
        for (var c = t("", a); c; c = t("", a)) {
            c.index && l(a.slice(0, c.index), b);
            var a = a.slice(c.index + c[0].length),
                d = c[1].match(/^\s*(\w+)(.*)$/);
            if (d) {
                var e = d[1],
                    d = 2 < d.length ? d[2].replace(/^\s+|\s+$/g, "") : "";
                if (e in x) {
                    var f = x[e],
                        d = ("parseParams" in f ? f.parseParams : q)(d);
                    "block" ==
                    f.type ? (a = a.replace(/^\n/, ""), c = H("/" + e, e + " +[^}]*", a), f.parse(d, b, a.slice(0, c
                        .index)), a = a.slice(c.index + c[0].length)) : (f.parse(d, b), "extends" == e && (
                        b = []));
                    a = a.replace(/^\n/, "")
                } else if (e in r) {
                    if (c = r[e], "block" == c.type ? (c = H("/" + e, e + " +[^}]*", a), d = q(d), f = a.slice(0, c
                        .index), b.push({
                        type: "plugin",
                        name: e,
                        params: d,
                        subTree: j(f, [])
                    }), a = a.slice(c.index + c[0].length)) : "function" == c.type && (c = q(d), b.push({
                        type: "plugin",
                        name: e,
                        params: c
                    })), "append" == e || "assign" == e || "capture" == e || "eval" == e || "include" == e) a =
                        a.replace(/^\n/,
                            "")
                } else x.expression.parse(c[1], b)
            } else e = x.expression.parse(c[1], b), "build-in" == e.type && "operator" == e.name && "=" == e.op && (
                a = a.replace(/^\n/, ""))
        }
        a && l(a, b);
        return b
    }

    function l(a, b) {
        if (l.parseEmbeddedVars)
            for (var c = /([$][\w@]+)|`([^`]*)`/, d = a.match(c); d; d = a.match(c)) b.push({
                type: "text",
                data: a.slice(0, d.index)
            }), b.push(A(d[1] ? d[1] : d[2]).tree), a = a.slice(d.index + d[0].length);
        b.push({
            type: "text",
            data: a
        });
        return b
    }

    function P(a, b, c) {
        b.__parsed.name = l(a, [])[0];
        c.push({
            type: "plugin",
            name: "__func",
            params: b
        });
        return c
    }

    function m(a, b, c, d) {
        d.push({
            type: "build-in",
            name: "operator",
            op: a,
            optype: b,
            precedence: c,
            params: {}
        })
    }

    function J(a, b, c) {
        for (var d = b.token, c = [{
            type: "text",
            data: c.replace(/^(\w+)@(index|iteration|first|last|show|total)/gi, "$1__$2")
        }], e = /^(?:\.|\s*->\s*|\[\s*)/, f = a.match(e); f; f = a.match(e)) {
            b.token += f[0];
            var a = a.slice(f[0].length),
                g = {
                    value: "",
                    tree: []
                };
            if (f[0].match(/\[/)) {
                if (g = A(a)) b.token += g.value, c.push(g.tree), a = a.slice(g.value.length);
                if (f = a.match(/\s*\]/)) b.token += f[0], a = a.slice(f[0].length)
            } else {
                f =
                    n.stop;
                n.stop = !0;
                if (K(a, g)) {
                    b.token += g.value;
                    var h = g.tree[0];
                    "plugin" == h.type && "__func" == h.name && (h.hasOwner = !0);
                    c.push(h);
                    a = a.slice(g.value.length)
                } else g = !1;
                n.stop = f
            }
            g || c.push({
                type: "text",
                data: ""
            })
        }
        b.tree.push({
            type: "var",
            parts: c
        });
        b.value += b.token.substr(d.length);
        L(b.token);
        return a
    }

    function L() {
    }

    function n(a, b) {
        if (!n.stop) {
            var c = a.match(/^\|(\w+)/);
            if (c) {
                b.value += c[0];
                var d = "default" == c[1] ? "defaultValue" : c[1],
                    a = a.slice(c[0].length).replace(/^\s+/, "");
                n.stop = !0;
                for (var c = [], e = a.match(/^\s*:\s*/); e; e =
                    a.match(/^\s*:\s*/)) b.value += a.slice(0, e[0].length), a = a.slice(e[0].length), e = {
                    value: "",
                    tree: []
                }, K(a, e) ? (b.value += e.value, c.push(e.tree[0]), a = a.slice(e.value.length)) : l("", c);
                n.stop = !1;
                c.unshift(b.tree.pop());
                b.tree.push(P(d, {
                    __parsed: c
                }, [])[0]);
                n(a, b)
            }
        }
    }

    function K(a, b) {
        if (!a) return !1;
        if (a.substr(0, jSmart.prototype.left_delimiter.length) == jSmart.prototype.left_delimiter) {
            var c = t("", a);
            if (c) return b.token = c[0], b.value += c[0], j(c[0], b.tree), n(a.slice(b.value.length), b), !0
        }
        for (c = 0; c < D.length; ++c)
            if (a.match(D[c].re)) return b.token =
                RegExp.lastMatch, b.value += RegExp.lastMatch, D[c].parse(b, a.slice(b.token.length)), !0;
        return !1
    }

    function Q(a, b, c) {
        var d = b[a];
        if ("operator" == d.name && d.precedence == c && !d.params.__parsed) {
            if ("binary" == d.optype) return d.params.__parsed = [b[a - 1], b[a + 1]], b.splice(a - 1, 3, d), !0;
            if ("post-unary" == d.optype) return d.params.__parsed = [b[a - 1]], b.splice(a - 1, 2, d), !0;
            d.params.__parsed = [b[a + 1]];
            b.splice(a, 2, d)
        }
        return !1
    }

    function R(a) {
        for (var b = 0, b = 0; b < a.length; ++b) a[b] instanceof Array && (a[b] = R(a[b]));
        for (var c = 1; 14 > c; ++c)
            if (2 ==
                c || 10 == c)
                for (b = a.length; 0 < b; --b) b -= Q(b - 1, a, c);
            else
                for (b = 0; b < a.length; ++b) b -= Q(b, a, c);
        return a[0]
    }

    function A(a) {
        for (var b = {
            value: "",
            tree: []
        }; K(a.slice(b.value.length), b);) ;
        if (!b.tree.length) return !1;
        b.tree = R(b.tree);
        return b
    }

    function q(a, b, c) {
        var d = a.replace(/\n/g, " ").replace(/^\s+|\s+$/g, ""),
            e = [];
        e.__parsed = [];
        a = "";
        if (!d) return e;
        b || (b = /^\s+/, c = /^(\w+)\s*=\s*/);
        for (; d;) {
            var f = null;
            if (c) {
                var g = d.match(c);
                g && (f = w(g[1]), a += d.slice(0, g[0].length), d = d.slice(g[0].length))
            }
            g = A(d);
            if (!g) break;
            f ? (e[f] = g.value,
                e.__parsed[f] = g.tree) : (e.push(g.value), e.__parsed.push(g.tree));
            a += d.slice(0, g.value.length);
            d = d.slice(g.value.length);
            if (f = d.match(b)) a += d.slice(0, f[0].length), d = d.slice(f[0].length);
            else break
        }
        e.toString = function () {
            return a
        };
        return e
    }

    function p(a, b) {
        var c = [],
            d;
        for (d in a.__parsed)
            if (a.__parsed.hasOwnProperty(d)) {
                var e = k([a.__parsed[d]], b);
                "string" == typeof e && e.match(/^[1-9]\d{0,14}$/) && !isNaN(e) && (e = parseInt(e, 10));
                c[d] = e
            }
        c.__get = function (a, b, d) {
            if (a in c && "undefined" != typeof c[a]) return c[a];
            if ("undefined" !=
                typeof d && "undefined" != typeof c[d]) return c[d];
            if (null === b) throw Error("The required attribute '" + a + "' is missing");
            return b
        };
        return c
    }

    function u(a, b, c) {
        for (var d = b, e = "", f = 0; f < a.parts.length; ++f) {
            var g = a.parts[f];
            if ("plugin" == g.type && "__func" == g.name && g.hasOwner) b.__owner = d, d = k([a.parts[f]], b),
                delete b.__owner;
            else {
                e = k([g], b);
                e in b.smarty.section && "text" == g.type && "smarty" != k([a.parts[0]], b) && (e = b.smarty
                    .section[e].index);
                !e && "undefined" != typeof c && d instanceof Array && (e = d.length);
                "undefined" != typeof c &&
                f == a.parts.length - 1 && (d[e] = c);
                if (!("object" == typeof d && null !== d && e in d)) {
                    if ("undefined" == typeof c) return "";
                    d[e] = {}
                }
                d = d[e]
            }
        }
        return d
    }

    function k(a, b) {
        for (var c = "", d = 0; d < a.length; ++d) {
            var e = "",
                f = a[d];
            if ("text" == f.type) e = f.data;
            else if ("var" == f.type) e = u(f, b);
            else if ("build-in" == f.type) e = x[f.name].process(f, b);
            else if ("plugin" == f.type) {
                var g = r[f.name];
                if ("block" == g.type) {
                    var h = {
                        value: !0
                    };
                    for (g.process(p(f.params, b), "", b, h); h.value;) h.value = !1, e += g.process(p(f.params, b),
                        k(f.subTree, b), b, h)
                } else "function" ==
                g.type && (e = g.process(p(f.params, b), b))
            }
            "boolean" == typeof e && (e = e ? "1" : "");
            if (1 == a.length) return e;
            c += e;
            if (b.smarty["continue"] || b.smarty["break"]) break
        }
        return c
    }

    function S(a, b, c) {
        if (c || !(a in M)) {
            c = jSmart.prototype.getTemplate(a);
            if ("string" != typeof c) throw Error("No template for " + a);
            j(E(jSmart.prototype.filters_global.pre, T(c.replace(/\r\n/g, "\n"))), b);
            M[a] = b
        } else b = M[a];
        return b
    }

    function T(a) {
        for (var b = "", c = a.match(/{\*/); c; c = a.match(/{\*/)) {
            b += a.slice(0, c.index);
            a = a.slice(c.index + c[0].length);
            c = a.match(/\*}/);
            if (!c) throw Error("Unclosed {*");
            a = a.slice(c.index + c[0].length)
        }
        return b + a
    }

    function E(a, b) {
        for (var c = 0; c < a.length; ++c) b = a[c](b);
        return b
    }

    var x = {
            expression: {
                parse: function (a, b) {
                    var c = A(a);
                    b.push({
                        type: "build-in",
                        name: "expression",
                        expression: c.tree,
                        params: q(a.slice(c.value.length).replace(/^\s+|\s+$/g, ""))
                    });
                    return c.tree
                },
                process: function (a, b) {
                    var c = p(a.params, b),
                        d = k([a.expression], b);
                    if (0 > y(c, "nofilter")) {
                        for (c = 0; c < default_modifiers.length; ++c) {
                            var e = default_modifiers[c];
                            e.params.__parsed[0] = {
                                type: "text",
                                data: d
                            };
                            d = k([e], b)
                        }
                        escape_html && (d = z.escape(d));
                        d = E(varFilters, d);
                        F.length && (__t = function () {
                            return d
                        }, d = k(F, b))
                    }
                    return d
                }
            },
            operator: {
                process: function (a, b) {
                    var c = p(a.params, b),
                        d = c[0];
                    if ("binary" == a.optype) {
                        c = c[1];
                        if ("=" == a.op) return u(a.params.__parsed[0], b, c), "";
                        if (a.op.match(/(\+=|-=|\*=|\/=|%=)/)) {
                            d = u(a.params.__parsed[0], b);
                            switch (a.op) {
                                case "+=":
                                    d += c;
                                    break;
                                case "-=":
                                    d -= c;
                                    break;
                                case "*=":
                                    d *= c;
                                    break;
                                case "/=":
                                    d /= c;
                                    break;
                                case "%=":
                                    d %= c
                            }
                            return u(a.params.__parsed[0], b, d)
                        }
                        if (a.op.match(/div/)) return "div" !=
                            a.op ^ 0 == d % c;
                        if (a.op.match(/even/)) return "even" != a.op ^ 0 == d / c % 2;
                        if (a.op.match(/xor/)) return (d || c) && !(d && c);
                        switch (a.op) {
                            case "==":
                                return d == c;
                            case "!=":
                                return d != c;
                            case "+":
                                return d + c;
                            case "-":
                                return d - c;
                            case "*":
                                return d * c;
                            case "/":
                                return d / c;
                            case "%":
                                return d % c;
                            case "&&":
                                return d && c;
                            case "||":
                                return d || c;
                            case "<":
                                return d < c;
                            case "<=":
                                return d <= c;
                            case ">":
                                return d > c;
                            case ">=":
                                return d >= c;
                            case "===":
                                return d === c;
                            case "!==":
                                return d !== c
                        }
                    } else {
                        if ("!" == a.op) return !d;
                        (c = "var" == a.params.__parsed[0].type) &&
                        (d = u(a.params.__parsed[0], b));
                        var e = d;
                        if ("pre-unary" == a.optype) {
                            switch (a.op) {
                                case "-":
                                    e = -d;
                                    break;
                                case "++":
                                    e = ++d;
                                    break;
                                case "--":
                                    e = --d
                            }
                            c && u(a.params.__parsed[0], b, d)
                        } else {
                            switch (a.op) {
                                case "++":
                                    d++;
                                    break;
                                case "--":
                                    d--
                            }
                            u(a.params.__parsed[0], b, d)
                        }
                        return e
                    }
                }
            },
            section: {
                type: "block",
                parse: function (a, b, c) {
                    var d = [],
                        e = [];
                    b.push({
                        type: "build-in",
                        name: "section",
                        params: a,
                        subTree: d,
                        subTreeElse: e
                    });
                    (a = C("section [^}]+", "/section", "sectionelse", c)) ? (j(c.slice(0, a.index), d), j(c
                        .slice(a.index + a[0].length).replace(/^[\r\n]/,
                            ""), e)) : j(c, d)
                },
                process: function (a, b) {
                    var c = p(a.params, b),
                        d = {};
                    b.smarty.section[c.__get("name", null, 0)] = d;
                    var e = c.__get("show", !0);
                    d.show = e;
                    if (!e) return k(a.subTreeElse, b);
                    var e = parseInt(c.__get("start", 0)),
                        f = c.loop instanceof Object ? O(c.loop) : isNaN(c.loop) ? 0 : parseInt(c.loop),
                        g = parseInt(c.__get("step", 1)),
                        c = parseInt(c.__get("max"));
                    isNaN(c) && (c = Number.MAX_VALUE);
                    0 > e ? (e += f, 0 > e && (e = 0)) : e >= f && (e = f ? f - 1 : 0);
                    for (var h = 0, i = e; 0 <= i && i < f && h < c; i += g, ++h) ;
                    d.total = h;
                    d.loop = h;
                    for (var h = 0, j = "", i = e; 0 <= i && i < f && h < c &&
                    !b.smarty["break"]; i += g, ++h) d.first = i == e, d.last = 0 > i + g || i + g >= f, d
                        .index = i, d.index_prev = i - g, d.index_next = i + g, d.iteration = d.rownum = h + 1,
                        j += k(a.subTree, b), b.smarty["continue"] = !1;
                    b.smarty["break"] = !1;
                    return h ? j : k(a.subTreeElse, b)
                }
            },
            setfilter: {
                type: "block",
                parseParams: function (a) {
                    return [A("__t()|" + a).tree]
                },
                parse: function (a, b, c) {
                    b.push({
                        type: "build-in",
                        name: "setfilter",
                        params: a,
                        subTree: j(c, [])
                    })
                },
                process: function (a, b) {
                    F = a.params;
                    var c = k(a.subTree, b);
                    F = [];
                    return c
                }
            },
            "for": {
                type: "block",
                parseParams: function (a) {
                    var b =
                        a.match(/^\s*\$(\w+)\s*=\s*([^\s]+)\s*to\s*([^\s]+)\s*(?:step\s*([^\s]+))?\s*(.*)$/);
                    if (!b) throw Error("Invalid {for} parameters: " + a);
                    return q("varName='" + b[1] + "' from=" + b[2] + " to=" + b[3] + " step=" + (b[4] ? b[4] :
                        "1") + " " + b[5])
                },
                parse: function (a, b, c) {
                    var d = [],
                        e = [];
                    b.push({
                        type: "build-in",
                        name: "for",
                        params: a,
                        subTree: d,
                        subTreeElse: e
                    });
                    (a = C("for\\s[^}]+", "/for", "forelse", c)) ? (j(c.slice(0, a.index), d), j(c.slice(a
                        .index + a[0].length), e)) : j(c, d)
                },
                process: function (a, b) {
                    var c = p(a.params, b),
                        d = parseInt(c.__get("from")),
                        e = parseInt(c.__get("to")),
                        f = parseInt(c.__get("step"));
                    isNaN(f) && (f = 1);
                    var g = parseInt(c.__get("max"));
                    isNaN(g) && (g = Number.MAX_VALUE);
                    for (var h = 0, i = "", d = Math.min(Math.ceil(((0 < f ? e - d : d - e) + 1) / Math.abs(f)),
                        g), e = parseInt(c.from); h < d && !b.smarty["break"]; e += f, ++h) b[c.varName] =
                        e, i += k(a.subTree, b), b.smarty["continue"] = !1;
                    b.smarty["break"] = !1;
                    h || (i = k(a.subTreeElse, b));
                    return i
                }
            },
            "if": {
                type: "block",
                parse: function (a, b, c) {
                    var d = [],
                        e = [];
                    b.push({
                        type: "build-in",
                        name: "if",
                        params: a,
                        subTreeIf: d,
                        subTreeElse: e
                    });
                    (a = C("if\\s+[^}]+",
                        "/if", "else[^}]*", c)) ? (j(c.slice(0, a.index), d), c = c.slice(a.index + a[0]
                        .length), (d = a[1].match(/^elseif(.*)/)) ? x["if"].parse(q(d[1]), e, c.replace(/^\n/,
                        "")) : j(c.replace(/^\n/, ""), e)) : j(c, d)
                },
                process: function (a, b) {
                    return p(a.params, b)[0] ? k(a.subTreeIf, b) : k(a.subTreeElse, b)
                }
            },
            foreach: {
                type: "block",
                parseParams: function (a) {
                    var b = a.match(/^\s*([$].+)\s*as\s*[$](\w+)\s*(=>\s*[$](\w+))?\s*$/i);
                    b && (a = "from=" + b[1] + " item=" + (b[4] || b[2]), b[4] && (a += " key=" + b[2]));
                    return q(a)
                },
                parse: function (a, b, c) {
                    var d = [],
                        e = [];
                    b.push({
                        type: "build-in",
                        name: "foreach",
                        params: a,
                        subTree: d,
                        subTreeElse: e
                    });
                    (a = C("foreach\\s[^}]+", "/foreach", "foreachelse", c)) ? (j(c.slice(0, a.index), d), j(c
                        .slice(a.index + a[0].length).replace(/^[\r\n]/, ""), e)) : j(c, d)
                },
                process: function (a, b) {
                    var c = p(a.params, b),
                        d = c.from;
                    d instanceof Object || (d = [d]);
                    var e = O(d);
                    b[c.item + "__total"] = e;
                    "name" in c && (b.smarty.foreach[c.name] = {}, b.smarty.foreach[c.name].total = e);
                    var f = "",
                        g = 0,
                        h;
                    for (h in d)
                        if (d.hasOwnProperty(h)) {
                            if (b.smarty["break"]) break;
                            b[c.item + "__key"] = isNaN(h) ?
                                h : parseInt(h);
                            "key" in c && (b[c.key] = b[c.item + "__key"]);
                            b[c.item] = d[h];
                            b[c.item + "__index"] = parseInt(g);
                            b[c.item + "__iteration"] = parseInt(g + 1);
                            b[c.item + "__first"] = 0 === g;
                            b[c.item + "__last"] = g == e - 1;
                            "name" in c && (b.smarty.foreach[c.name].index = parseInt(g), b.smarty.foreach[c
                                .name].iteration = parseInt(g + 1), b.smarty.foreach[c.name].first =
                                0 === g ? 1 : "", b.smarty.foreach[c.name].last = g == e - 1 ? 1 : "");
                            ++g;
                            f += k(a.subTree, b);
                            b.smarty["continue"] = !1
                        }
                    b.smarty["break"] = !1;
                    b[c.item + "__show"] = 0 < g;
                    c.name && (b.smarty.foreach[c.name].show =
                        0 < g ? 1 : "");
                    return 0 < g ? f : k(a.subTreeElse, b)
                }
            },
            "function": {
                type: "block",
                parse: function (a, b, c) {
                    b = [];
                    r[w(a.name ? a.name : a[0])] = {
                        type: "function",
                        subTree: b,
                        defautParams: a,
                        process: function (a, b) {
                            var c = p(this.defautParams, b);
                            delete c.name;
                            return k(this.subTree, B({}, b, c, a))
                        }
                    };
                    j(c, b)
                }
            },
            php: {
                type: "block",
                parse: function () {
                }
            },
            "extends": {
                type: "function",
                parse: function (a, b) {
                    b.splice(0, b.length);
                    S(w(a.file ? a.file : a[0]), b)
                }
            },
            block: {
                type: "block",
                parse: function (a, b, c) {
                    b.push({
                        type: "build-in",
                        name: "block",
                        params: a
                    });
                    a.append =
                        0 <= y(a, "append");
                    a.prepend = 0 <= y(a, "prepend");
                    a.hide = 0 <= y(a, "hide");
                    a.hasChild = a.hasParent = !1;
                    L = function (b) {
                        b.match(/^\s*[$]smarty.block.child\s*$/) && (a.hasChild = !0);
                        b.match(/^\s*[$]smarty.block.parent\s*$/) && (a.hasParent = !0)
                    };
                    b = j(c, []);
                    L = function () {
                    };
                    c = w(a.name ? a.name : a[0]);
                    c in v || (v[c] = []);
                    v[c].push({
                        tree: b,
                        params: a
                    })
                },
                process: function (a, b) {
                    b.smarty.block.parent = b.smarty.block.child = "";
                    var c = w(a.params.name ? a.params.name : a.params[0]);
                    this.processBlocks(v[c], v[c].length - 1, b);
                    return b.smarty.block.child
                },
                processBlocks: function (a, b, c) {
                    if (!b && a[b].params.hide) c.smarty.block.child = "";
                    else
                        for (var d = !0, e = !1; 0 <= b; --b) {
                            if (a[b].params.hasParent) {
                                var f = c.smarty.block.child;
                                c.smarty.block.child = "";
                                this.processBlocks(a, b - 1, c);
                                c.smarty.block.parent = c.smarty.block.child;
                                c.smarty.block.child = f
                            }
                            var f = c.smarty.block.child,
                                g = k(a[b].tree, c);
                            c.smarty.block.child = f;
                            a[b].params.hasChild ? c.smarty.block.child = g : d ? c.smarty.block.child = g + c
                                .smarty.block.child : e && (c.smarty.block.child += g);
                            d = a[b].params.append;
                            e = a[b].params.prepend
                        }
                }
            },
            strip: {
                type: "block",
                parse: function (a, b, c) {
                    j(c.replace(/[ \t]*[\r\n]+[ \t]*/g, ""), b)
                }
            },
            literal: {
                type: "block",
                parse: function (a, b, c) {
                    l(c, b)
                }
            },
            ldelim: {
                type: "function",
                parse: function (a, b) {
                    l(jSmart.prototype.left_delimiter, b)
                }
            },
            rdelim: {
                type: "function",
                parse: function (a, b) {
                    l(jSmart.prototype.right_delimiter, b)
                }
            },
            "while": {
                type: "block",
                parse: function (a, b, c) {
                    b.push({
                        type: "build-in",
                        name: "while",
                        params: a,
                        subTree: j(c, [])
                    })
                },
                process: function (a, b) {
                    for (var c = ""; p(a.params, b)[0] && !b.smarty["break"];) c += k(a.subTree,
                        b), b.smarty["continue"] = !1;
                    b.smarty["break"] = !1;
                    return c
                }
            }
        },
        r = {},
        z = {},
        M = {},
        v = null,
        N = null,
        F = [],
        D = [{
            re: /^\$([\w@]+)/,
            parse: function (a, b) {
                n(J(b, a, RegExp.$1), a)
            }
        }, {
            re: /^(true|false)/i,
            parse: function (a) {
                l(a.token.match(/true/i) ? "1" : "", a.tree)
            }
        }, {
            re: /^'([^'\\]*(?:\\.[^'\\]*)*)'/,
            parse: function (a, b) {
                l(G(RegExp.$1), a.tree);
                n(b, a)
            }
        }, {
            re: /^"([^"\\]*(?:\\.[^"\\]*)*)"/,
            parse: function (a, b) {
                var c = G(RegExp.$1),
                    d = c.match(D[0].re);
                if (d) {
                    var e = {
                        token: d[0],
                        tree: []
                    };
                    J(c, e, d[1]);
                    if (e.token.length == c.length) {
                        a.tree.push(e.tree[0]);
                        return
                    }
                }
                l.parseEmbeddedVars = !0;
                a.tree.push({
                    type: "plugin",
                    name: "__quoted",
                    params: {
                        __parsed: j(c, [])
                    }
                });
                l.parseEmbeddedVars = !1;
                n(b, a)
            }
        }, {
            re: /^(\w+)\s*[(]([)]?)/,
            parse: function (a, b) {
                var c = RegExp.$1,
                    d = q(RegExp.$2 ? "" : b, /^\s*,\s*/);
                P(c, d, a.tree);
                a.value += d.toString();
                n(b.slice(d.toString().length), a)
            }
        }, {
            re: /^\s*\(\s*/,
            parse: function (a) {
                var b = [];
                a.tree.push(b);
                b.parent = a.tree;
                a.tree = b
            }
        }, {
            re: /^\s*\)\s*/,
            parse: function (a) {
                a.tree.parent && (a.tree = a.tree.parent)
            }
        }, {
            re: /^\s*(\+\+|--)\s*/,
            parse: function (a) {
                a.tree.length &&
                "var" == a.tree[a.tree.length - 1].type ? m(RegExp.$1, "post-unary", 1, a.tree) : m(
                    RegExp.$1, "pre-unary", 1, a.tree)
            }
        }, {
            re: /^\s*(==|!=|===|!==)\s*/,
            parse: function (a) {
                m(RegExp.$1, "binary", 6, a.tree)
            }
        }, {
            re: /^\s+(eq|ne|neq)\s+/i,
            parse: function (a) {
                var b = RegExp.$1.replace(/ne(q)?/, "!=").replace(/eq/, "==");
                m(b, "binary", 6, a.tree)
            }
        }, {
            re: /^\s*!\s*/,
            parse: function (a) {
                m("!", "pre-unary", 2, a.tree)
            }
        }, {
            re: /^\s+not\s+/i,
            parse: function (a) {
                m("!", "pre-unary", 2, a.tree)
            }
        }, {
            re: /^\s*(=|\+=|-=|\*=|\/=|%=)\s*/,
            parse: function (a) {
                m(RegExp.$1,
                    "binary", 10, a.tree)
            }
        }, {
            re: /^\s*(\*|\/|%)\s*/,
            parse: function (a) {
                m(RegExp.$1, "binary", 3, a.tree)
            }
        }, {
            re: /^\s+mod\s+/i,
            parse: function (a) {
                m("%", "binary", 3, a.tree)
            }
        }, {
            re: /^\s*(\+|-)\s*/,
            parse: function (a) {
                !a.tree.length || "operator" == a.tree[a.tree.length - 1].name ? m(RegExp.$1, "pre-unary",
                    4, a.tree) : m(RegExp.$1, "binary", 4, a.tree)
            }
        }, {
            re: /^\s*(<=|>=|<>|<|>)\s*/,
            parse: function (a) {
                m(RegExp.$1.replace(/<>/, "!="), "binary", 5, a.tree)
            }
        }, {
            re: /^\s+(lt|lte|le|gt|gte|ge)\s+/i,
            parse: function (a) {
                var b = RegExp.$1.replace(/lt/,
                    "<").replace(/l(t)?e/, "<=").replace(/gt/, ">").replace(/g(t)?e/, ">=");
                m(b, "binary", 5, a.tree)
            }
        }, {
            re: /^\s+(is\s+(not\s+)?div\s+by)\s+/i,
            parse: function (a) {
                m(RegExp.$2 ? "div_not" : "div", "binary", 7, a.tree)
            }
        }, {
            re: /^\s+is\s+(not\s+)?(even|odd)(\s+by\s+)?\s*/i,
            parse: function (a) {
                m(RegExp.$1 ? "odd" == RegExp.$2 ? "even" : "even_not" : "odd" == RegExp.$2 ? "even_not" :
                    "even", "binary", 7, a.tree);
                RegExp.$3 || l("1", a.tree)
            }
        }, {
            re: /^\s*(&&)\s*/,
            parse: function (a) {
                m(RegExp.$1, "binary", 8, a.tree)
            }
        }, {
            re: /^\s*(\|\|)\s*/,
            parse: function (a) {
                m(RegExp.$1,
                    "binary", 9, a.tree)
            }
        }, {
            re: /^\s+and\s+/i,
            parse: function (a) {
                m("&&", "binary", 11, a.tree)
            }
        }, {
            re: /^\s+xor\s+/i,
            parse: function (a) {
                m("xor", "binary", 12, a.tree)
            }
        }, {
            re: /^\s+or\s+/i,
            parse: function (a) {
                m("||", "binary", 13, a.tree)
            }
        }, {
            re: /^#(\w+)#/,
            parse: function (a, b) {
                var c = {
                    token: "$smarty",
                    tree: []
                };
                J(".config." + RegExp.$1, c, "smarty");
                a.tree.push(c.tree[0]);
                n(b, a)
            }
        }, {
            re: /^\s*\[\s*/,
            parse: function (a, b) {
                var c = q(b, /^\s*,\s*/,
                    /^('[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*"|\w+)\s*=>\s*/);
                a.tree.push({
                    type: "plugin",
                    name: "__array",
                    params: c
                });
                a.value += c.toString();
                if (c = b.slice(c.toString().length).match(/\s*\]/)) a.value += c[0]
            }
        }, {
            re: /^[\d.]+/,
            parse: function (a, b) {
                l(a.token, a.tree);
                n(b, a)
            }
        }, {
            re: /^\w+/,
            parse: function (a, b) {
                l(a.token, a.tree);
                n(b, a)
            }
        }];
    jSmart = function (a) {
        this.tree = [];
        this.tree.blocks = {};
        this.scripts = {};
        this.default_modifiers = [];
        this.filters = {
            variable: [],
            post: []
        };
        this.smarty = {
            smarty: {
                block: {},
                "break": !1,
                capture: {},
                "continue": !1,
                counter: {},
                cycle: {},
                foreach: {},
                section: {},
                now: Math.floor((new Date).getTime() /
                    1E3),
                "const": {},
                config: {},
                current_dir: "/",
                template: "",
                ldelim: jSmart.prototype.left_delimiter,
                rdelim: jSmart.prototype.right_delimiter,
                version: "2.9"
            }
        };
        v = this.tree.blocks;
        j(E(jSmart.prototype.filters_global.pre, T((new String(a ? a : "")).replace(/\r\n/g, "\n"))), this.tree)
    };
    jSmart.prototype.fetch = function (a) {
        v = this.tree.blocks;
        N = this.scripts;
        escape_html = this.escape_html;
        default_modifiers = jSmart.prototype.default_modifiers_global.concat(this.default_modifiers);
        this.data = B("object" == typeof a ? a : {}, this.smarty);
        varFilters = jSmart.prototype.filters_global.variable.concat(this.filters.variable);
        a = k(this.tree, this.data);
        jSmart.prototype.debugging && r.debug.process([], this.data);
        return E(jSmart.prototype.filters_global.post.concat(this.filters.post), a)
    };
    jSmart.prototype.escape_html = !1;
    jSmart.prototype.registerPlugin = function (a, b, c) {
        "modifier" == a ? z[b] = c : r[b] = {
            type: a,
            process: c
        }
    };
    jSmart.prototype.registerFilter = function (a, b) {
        (this.tree ? this.filters : jSmart.prototype.filters_global)["output" == a ? "post" : a].push(b)
    };
    jSmart.prototype.filters_global = {
        pre: [],
        variable: [],
        post: []
    };
    jSmart.prototype.configLoad = function (a, b, c) {
        for (var c = c ? c : this.data, a = a.replace(/\r\n/g, "\n").replace(/^\s+|\s+$/g, ""), d =
                /^\s*(?:\[([^\]]+)\]|(?:(\w+)[ \t]*=[ \t]*("""|'[^'\\\n]*(?:\\.[^'\\\n]*)*'|"[^"\\\n]*(?:\\.[^"\\\n]*)*"|[^\n]*)))/m,
                 e = "", f = a.match(d); f; f = a.match(d)) {
            a = a.slice(f.index + f[0].length);
            if (f[1]) e = f[1];
            else if ((!e || e == b) && "." != e.substr(0, 1))
                if ('"""' == f[3]) {
                    var g = a.match(/"""/);
                    g && (c.smarty.config[f[2]] = a.slice(0, g.index), a =
                        a.slice(g.index + g[0].length))
                } else c.smarty.config[f[2]] = w(f[3]);
            if (f = a.match(/\n+/)) a = a.slice(f.index + f[0].length);
            else break
        }
    };
    jSmart.prototype.clearConfig = function (a) {
        a ? delete this.data.smarty.config[a] : this.data.smarty.config = {}
    };
    jSmart.prototype.addDefaultModifier = function (a) {
        a instanceof Array || (a = [a]);
        for (var b = 0; b < a.length; ++b) {
            var c = {
                value: "",
                tree: [0]
            };
            n("|" + a[b], c);
            (this.tree ? this.default_modifiers : this.default_modifiers_global).push(c.tree[0])
        }
    };
    jSmart.prototype.default_modifiers_global = [];
    jSmart.prototype.getTemplate = function (a) {
        throw Error("No template for " + a);
    };
    jSmart.prototype.getFile = function (a) {
        throw Error("No file for " + a);
    };
    jSmart.prototype.getJavascript = function (a) {
        throw Error("No Javascript for " + a);
    };
    jSmart.prototype.getConfig = function (a) {
        throw Error("No config for " + a);
    };
    jSmart.prototype.auto_literal = !0;
    jSmart.prototype.left_delimiter = "{";
    jSmart.prototype.right_delimiter = "}";
    jSmart.prototype.debugging = !1;
    jSmart.prototype.PHPJS = function (a, b) {
        if ("function" == eval("typeof " +
            a)) return "object" == typeof window ? window : global;
        if ("function" == typeof PHP_JS) return new PHP_JS;
        throw Error("Modifier '" + b + "' uses JavaScript port of PHP function '" + a +
            "'. You can find one at http://phpjs.org");
    };
    jSmart.prototype.makeTimeStamp = function (a) {
        if (!a) return Math.floor((new Date).getTime() / 1E3);
        if (isNaN(a)) return a = jSmart.prototype.PHPJS("strtotime", "date_format").strtotime(a), -1 == a || !
            1 === a ? Math.floor((new Date).getTime() / 1E3) : a;
        a = new String(a);
        return 14 == a.length ? Math.floor((new Date(a.substr(0,
            4), a.substr(4, 2) - 1, a.substr(6, 2), a.substr(8, 2), a.substr(10, 2))).getTime() / 1E3) :
            parseInt(a)
    };
    jSmart.prototype.registerPlugin("function", "__array", function (a) {
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && a[c] && "function" != typeof a[c] && (b[c] = a[c]);
        return b
    });
    jSmart.prototype.registerPlugin("function", "__func", function (a, b) {
        for (var c = [], d = {}, e = 0; e < a.length; ++e) c.push(a.name + "__p" + e), d[a.name + "__p" +
        e] = a[e];
        return I(("__owner" in b && a.name in b.__owner ? "__owner." + a.name : a.name) + "(" + c.join(
            ",") + ")", B({}, b,
            d))
    });
    jSmart.prototype.registerPlugin("function", "__quoted", function (a) {
        return a.join("")
    });
    jSmart.prototype.registerPlugin("function", "append", function (a, b) {
        var c = a.__get("var", null, 0);
        if (!(c in b) || !(b[c] instanceof Array)) b[c] = [];
        var d = a.__get("index", !1),
            e = a.__get("value", null, 1);
        !1 === d ? b[c].push(e) : b[c][d] = e;
        return ""
    });
    jSmart.prototype.registerPlugin("function", "assign", function (a, b) {
        o(a.__get("var", null, 0), a.__get("value", null, 1), b);
        return ""
    });
    jSmart.prototype.registerPlugin("function", "break",
        function (a, b) {
            b.smarty["break"] = !0;
            return ""
        });
    jSmart.prototype.registerPlugin("function", "call", function (a, b) {
        var c = a.__get("name", null, 0);
        delete a.name;
        var d = a.__get("assign", !1);
        delete a.assign;
        c = r[c].process(a, b);
        return d ? (o(d, c, b), "") : c
    });
    jSmart.prototype.registerPlugin("block", "capture", function (a, b, c) {
        b && (b = b.replace(/^\n/, ""), c.smarty.capture[a.__get("name", "default", 0)] = b, "assign" in
        a && o(a.assign, b, c), (a = a.__get("append", !1)) && (a in c ? c[a] instanceof Array && c[
            a].push(b) : c[a] = [b]));
        return ""
    });
    jSmart.prototype.registerPlugin("function", "continue", function (a, b) {
        b.smarty["continue"] = !0;
        return ""
    });
    jSmart.prototype.registerPlugin("function", "counter", function (a, b) {
        var c = a.__get("name", "default");
        if (c in b.smarty.counter) {
            var d = b.smarty.counter[c];
            "start" in a ? d.value = parseInt(a.start) : (d.value = parseInt(d.value), d.skip = parseInt(d
                .skip), d.value = "down" == d.direction ? d.value - d.skip : d.value + d.skip);
            d.skip = a.__get("skip", d.skip);
            d.direction = a.__get("direction", d.direction);
            d.assign = a.__get("assign",
                d.assign)
        } else b.smarty.counter[c] = {
            value: parseInt(a.__get("start", 1)),
            skip: parseInt(a.__get("skip", 1)),
            direction: a.__get("direction", "up"),
            assign: a.__get("assign", !1)
        };
        return b.smarty.counter[c].assign ? (b[b.smarty.counter[c].assign] = b.smarty.counter[c].value,
            "") : a.__get("print", !0) ? b.smarty.counter[c].value : ""
    });
    jSmart.prototype.registerPlugin("function", "cycle", function (a, b) {
        var c = a.__get("name", "default"),
            d = a.__get("reset", !1);
        c in b.smarty.cycle || (b.smarty.cycle[c] = {
            arr: [""],
            delimiter: a.__get("delimiter",
                ","),
            index: 0
        }, d = !0);
        a.__get("delimiter", !1) && (b.smarty.cycle[c].delimiter = a.delimiter);
        var e = a.__get("values", !1);
        if (e) {
            var f = [];
            if (e instanceof Object)
                for (nm in e) f.push(e[nm]);
            else f = e.split(b.smarty.cycle[c].delimiter);
            if (f.length != b.smarty.cycle[c].arr.length || f[0] != b.smarty.cycle[c].arr[0]) b.smarty
                .cycle[c].arr = f, b.smarty.cycle[c].index = 0, d = !0
        }
        a.__get("advance", "true") && (b.smarty.cycle[c].index += 1);
        if (b.smarty.cycle[c].index >= b.smarty.cycle[c].arr.length || d) b.smarty.cycle[c].index = 0;
        return a.__get("assign",
            !1) ? (o(a.assign, b.smarty.cycle[c].arr[b.smarty.cycle[c].index], b), "") : a.__get(
            "print", !0) ? b.smarty.cycle[c].arr[b.smarty.cycle[c].index] : ""
    });
    jSmart.prototype.print_r = function (a, b) {
        if (a instanceof Object) {
            var c = (a instanceof Array ? "Array[" + a.length + "]" : "Object") + "<br>",
                d;
            for (d in a) a.hasOwnProperty(d) && (c += b + "&nbsp;&nbsp;<strong>" + d + "</strong> : " + jSmart
                .prototype.print_r(a[d], b + "&nbsp;&nbsp;&nbsp;") + "<br>");
            return c
        }
        return a
    };
    jSmart.prototype.registerPlugin("function", "debug", function (a, b) {
        "undefined" !=
        typeof dbgWnd && dbgWnd.close();
        dbgWnd = window.open("", "", "width=680,height=600,resizable,scrollbars=yes");
        var c = "",
            d = 0,
            e;
        for (e in b) c += "<tr class=" + (++d % 2 ? "odd" : "even") + "><td><strong>" + e +
            "</strong></td><td>" + jSmart.prototype.print_r(b[e], "") + "</td></tr>";
        dbgWnd.document.write(
            "                <html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en'>                <head> \t\t            <title>jSmart Debug Console</title>                   <style type='text/css'>                      table {width: 100%;}                      td {vertical-align:top;width: 50%;}                      .even td {background-color: #fafafa;}                   </style>                </head>                <body>                   <h1>jSmart Debug Console</h1>                   <h2>assigned template variables</h2>                   <table>" +
            c + "</table>                </body>                </html>             ");
        return ""
    });
    jSmart.prototype.registerPlugin("function", "eval", function (a, b) {
        var c = [];
        j(a.__get("var", "", 0), c);
        c = k(c, b);
        return "assign" in a ? (o(a.assign, c, b), "") : c
    });
    jSmart.prototype.registerPlugin("function", "fetch", function (a, b) {
        var c = jSmart.prototype.getFile(a.__get("file", null, 0));
        return "assign" in a ? (o(a.assign, c, b), "") : c
    });
    jSmart.prototype.registerPlugin("function", "html_checkboxes", function (a, b) {
        var c = a.__get("type", "checkbox"),
            d = a.__get("name", c);
        "checkbox" == c && (d += "[]");
        var e = a.__get("values", a.options),
            f = a.__get("options", []),
            g = "options" in a,
            h;
        if (!g)
            for (h in a.output) f.push(a.output[h]);
        var i = a.__get("selected", !1),
            k = a.__get("separator", ""),
            j = Boolean(a.__get("labels", !0)),
            m = [],
            n = 0,
            l = "";
        for (h in e)
            if (e.hasOwnProperty(h)) {
                l = j ? "<label>" : "";
                l += '<input type="' + c + '" name="' + d + '" value="' + (g ? h : e[h]) + '" ';
                if (i == (g ? h : e[h])) l += 'checked="checked" ';
                l += "/>" + f[g ? h : n++];
                l += j ? "</label>" : "";
                l += k;
                m.push(l)
            }
        return "assign" in a ? (o(a.assign,
            m, b), "") : m.join("\n")
    });
    jSmart.prototype.registerPlugin("function", "html_image", function (a) {
        var b = a.__get("file", null),
            c = a.__get("width", !1),
            d = a.__get("height", !1),
            e = a.__get("alt", ""),
            f = a.__get("href", !1),
            g = {
                file: 1,
                width: 1,
                height: 1,
                alt: 1,
                href: 1,
                basedir: 1,
                path_prefix: 1
            },
            b = '<img src="' + a.__get("path_prefix", "") + b + '" alt="' + e + '"' + (c ? ' width="' + c +
                '"' : "") + (d ? ' height="' + d + '"' : ""),
            h;
        for (h in a) a.hasOwnProperty(h) && "string" == typeof a[h] && (h in g || (b += " " + h + '="' + a[
            h] + '"'));
        b += " />";
        return f ? '<a href="' + f +
            '">' + b + "</a>" : b
    });
    jSmart.prototype.registerPlugin("function", "html_options", function (a) {
        var b = a.__get("values", a.options),
            c = a.__get("options", []),
            d = "options" in a,
            e;
        if (!d)
            for (e in a.output) c.push(a.output[e]);
        var f = a.__get("selected", !1),
            g = [],
            h = "",
            i = 0;
        for (e in b)
            if (b.hasOwnProperty(e)) {
                h = '<option value="' + (d ? e : b[e]) + '"';
                if (f == (d ? e : b[e])) h += ' selected="selected"';
                h += ">" + c[d ? e : i++] + "</option>";
                g.push(h)
            }
        a = a.__get("name", !1);
        return (a ? '<select name="' + a + '">\n' + g.join("\n") + "\n</select>" : g.join("\n")) +
            "\n"
    });
    jSmart.prototype.registerPlugin("function", "html_radios", function (a, b) {
        a.type = "radio";
        return r.html_checkboxes.process(a, b)
    });
    jSmart.prototype.registerPlugin("function", "html_select_date", function (a) {
        var a = a.__get("prefix", "Date_"),
            b = "January,February,March,April,May,June,July,August,September,October,November,December"
                .split(","),
            c;
        c = "" + ('<select name="' + a + 'Month">\n');
        for (var d = 0, d = 0; d < b.length; ++d) c += '<option value="' + d + '">' + b[d] + "</option>\n";
        c = c + "</select>\n" + ('<select name="' + a + 'Day">\n');
        for (d = 0; 31 > d; ++d) c += '<option value="' + d + '">' + d + "</option>\n";
        return c + "</select>\n"
    });
    jSmart.prototype.registerPlugin("function", "html_table", function (a) {
        var b = [],
            c;
        if (a.loop instanceof Array) b = a.loop;
        else
            for (c in a.loop) a.loop.hasOwnProperty(c) && b.push(a.loop[c]);
        var d = a.__get("rows", !1),
            e = a.__get("cols", !1);
        e || (e = d ? Math.ceil(b.length / d) : 3);
        var f = [];
        if (isNaN(e)) {
            if ("object" == typeof e)
                for (c in e) e.hasOwnProperty(c) && f.push(e[c]);
            else f = e.split(/\s*,\s*/);
            e = f.length
        }
        var d = d ? d : Math.ceil(b.length / e),
            g = a.__get("inner", "cols");
        c = a.__get("caption", "");
        var h = a.__get("table_attr", 'border="1"'),
            i = a.__get("th_attr", !1);
        i && "object" != typeof i && (i = [i]);
        var k = a.__get("tr_attr", !1);
        k && "object" != typeof k && (k = [k]);
        var j = a.__get("td_attr", !1);
        j && "object" != typeof j && (j = [j]);
        for (var l = a.__get("trailpad", "&nbsp;"), m = a.__get("hdir", "right"), n = a.__get("vdir",
            "down"), a = "", o = 0; o < d; ++o) {
            for (var a = a + ("<tr" + (k ? " " + k[o % k.length] : "") + ">\n"), p = 0; p < e; ++p) var q =
                    "cols" == g ? ("down" == n ? o : d - 1 - o) * e + ("right" == m ? p : e - 1 - p) : (
                        "right" ==
                        m ? p : e - 1 - p) * d + ("down" == n ? o : d - 1 - o),
                a = a + ("<td" + (j ? " " + j[p % j.length] : "") + ">" + (q < b.length ? b[q] : l) +
                    "</td>\n");
            a += "</tr>\n"
        }
        b = "";
        if (f.length) {
            b = "\n<thead><tr>";
            for (d = 0; d < f.length; ++d) b += "\n<th" + (i ? " " + i[d % i.length] : "") + ">" + f[
                "right" == m ? d : f.length - 1 - d] + "</th>";
            b += "\n</tr></thead>"
        }
        return "<table " + h + ">" + (c ? "\n<caption>" + c + "</caption>" : "") + b + "\n<tbody>\n" + a +
            "</tbody>\n</table>\n"
    });
    jSmart.prototype.registerPlugin("function", "include", function (a, b) {
        var c = a.__get("file", null, 0),
            d = B({}, b, a);
        d.smarty.template =
            c;
        c = k(S(c, [], 0 <= y(a, "nocache")), d);
        return "assign" in a ? (o(a.assign, c, b), "") : c
    });
    jSmart.prototype.registerPlugin("function", "include_javascript", function (a, b) {
        var c = a.__get("file", null, 0);
        if (a.__get("once", !0) && c in N) return "";
        N[c] = !0;
        c = I(jSmart.prototype.getJavascript(c), {
            $this: b
        });
        return "assign" in a ? (o(a.assign, c, b), "") : c
    });
    jSmart.prototype.registerPlugin("function", "include_php", function (a, b) {
        return r.include_javascript.process(a, b)
    });
    jSmart.prototype.registerPlugin("function", "insert", function (a,
                                                                    b) {
        var c = {},
            d;
        for (d in a) a.hasOwnProperty(d) && isNaN(d) && a[d] && "string" == typeof a[d] && "name" != d &&
        "assign" != d && "script" != d && (c[d] = a[d]);
        d = "insert_";
        "script" in a && (eval(jSmart.prototype.getJavascript(a.script)), d = "smarty_insert_");
        c = eval(d + a.__get("name", null, 0))(c, b);
        return "assign" in a ? (o(a.assign, c, b), "") : c
    });
    jSmart.prototype.registerPlugin("block", "javascript", function (a, b, c) {
        c.$this = c;
        I(b, c);
        delete c.$this;
        return ""
    });
    jSmart.prototype.registerPlugin("function", "config_load", function (a, b) {
        jSmart.prototype.configLoad(jSmart.prototype.getConfig(a.__get("file",
            null, 0)), a.__get("section", "", 1), b);
        return ""
    });
    jSmart.prototype.registerPlugin("function", "mailto", function (a) {
        var b = a.__get("address", null),
            c = a.__get("encode", "none"),
            d = a.__get("text", b),
            e = jSmart.prototype.PHPJS("rawurlencode", "mailto").rawurlencode(a.__get("cc", "")).replace(
                "%40", "@"),
            f = jSmart.prototype.PHPJS("rawurlencode", "mailto").rawurlencode(a.__get("bcc", "")).replace(
                "%40", "@"),
            g = jSmart.prototype.PHPJS("rawurlencode", "mailto").rawurlencode(a.__get("followupto", ""))
                .replace("%40", "@"),
            h = jSmart.prototype.PHPJS("rawurlencode",
                "mailto").rawurlencode(a.__get("subject", "")),
            i = jSmart.prototype.PHPJS("rawurlencode", "mailto").rawurlencode(a.__get("newsgroups", "")),
            a = a.__get("extra", ""),
            b = b + (e ? "?cc=" + e : "") + (f ? (e ? "&" : "?") + "bcc=" + f : "") + (h ? (e || f ? "&" :
                "?") + "subject=" + h : "") + (i ? (e || f || h ? "&" : "?") + "newsgroups=" + i : "") + (
                g ? (e || f || h || i ? "&" : "?") + "followupto=" + g : "");
        s = '<a href="mailto:' + b + '" ' + a + ">" + d + "</a>";
        if ("javascript" == c) {
            s = "document.write('" + s + "');";
            d = "";
            for (c = 0; c < s.length; ++c) d += "%" + jSmart.prototype.PHPJS("bin2hex", "mailto").bin2hex(s
                .substr(c,
                    1));
            return '<script type="text/javascript">eval(unescape(\'' + d + "'))<\/script>"
        }
        if ("javascript_charcode" == c) {
            d = [];
            for (c = 0; c < s.length; ++c) d.push(jSmart.prototype.PHPJS("ord", "mailto").ord(s.substr(c,
                1)));
            return '<script type="text/javascript" language="javascript">\n<\!--\n{document.write(String.fromCharCode(' +
                d.join(",") + "))}\n//--\>\n<\/script>\n"
        }
        if ("hex" == c) {
            if (b.match(/^.+\?.+$/)) throw Error(
                "mailto: hex encoding does not work with extra attributes. Try javascript.");
            e = "";
            for (c = 0; c < b.length; ++c) e =
                b.substr(c, 1).match(/\w/) ? e + ("%" + jSmart.prototype.PHPJS("bin2hex", "mailto").bin2hex(
                    b.substr(c, 1))) : e + b.substr(c, 1);
            b = "";
            for (c = 0; c < d.length; ++c) b += "&#x" + jSmart.prototype.PHPJS("bin2hex", "mailto").bin2hex(
                d.substr(c, 1)) + ";";
            return '<a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;' + e + '" ' + a + ">" + b + "</a>"
        }
        return s
    });
    jSmart.prototype.registerPlugin("function", "math", function (a, b) {
        with (Math) with (a) var c = eval(a.__get("equation", null).replace(/pi\(\s*\)/g, "PI"));
        "format" in a && (c = jSmart.prototype.PHPJS("sprintf",
            "math").sprintf(a.format, c));
        return "assign" in a ? (o(a.assign, c, b), "") : c
    });
    jSmart.prototype.registerPlugin("block", "nocache", function (a, b) {
        return b
    });
    jSmart.prototype.registerPlugin("block", "textformat", function (a, b, c) {
        if (!b) return "";
        var d = a.__get("wrap", 80),
            e = a.__get("wrap_char", "\n"),
            f = a.__get("wrap_cut", !1),
            g = a.__get("indent_char", " "),
            h = a.__get("indent", 0),
            i = Array(h + 1).join(g),
            k = a.__get("indent_first", 0),
            g = Array(k + 1).join(g);
        "email" == a.__get("style", "") && (d = 72);
        for (var b = b.split("\n"), j = 0; j < b.length; ++j) {
            var l =
                b[j];
            l && (l = l.replace(/^\s+|\s+$/, "").replace(/\s+/g, " "), k && (l = g + l), l = z.wordwrap(l,
                d - h, e, f), h && (l = l.replace(/^/mg, i)), b[j] = l)
        }
        d = b.join(e + e);
        return "assign" in a ? (o(a.assign, d, c), "") : d
    });
    jSmart.prototype.registerPlugin("modifier", "capitalize", function (a, b) {
        for (var c = RegExp(b ? "[\\W\\d]+" : "\\W+"), d = null, e = "", d = a.match(c); d; d = a.match(c))
             var f = a.slice(0, d.index),
                 e = f.match(/\d/) ? e + f : e + (f.charAt(0).toUpperCase() + f.slice(1)),
                 e = e + a.slice(d.index, d.index + d[0].length),
                 a = a.slice(d.index + d[0].length);
        return a.match(/\d/) ?
            e + a : e + a.charAt(0).toUpperCase() + a.slice(1)
    });
    jSmart.prototype.registerPlugin("modifier", "cat", function (a, b) {
        return a + (b ? b : "")
    });
    jSmart.prototype.registerPlugin("modifier", "count", function (a, b) {
        if (null === a || "undefined" === typeof a) return 0;
        if (a.constructor !== Array && a.constructor !== Object) return 1;
        var b = Boolean(b),
            c, d = 0;
        for (c in a)
            if (a.hasOwnProperty(c) && (d++, b && a[c] && (a[c].constructor === Array || a[c]
                .constructor === Object))) d += z.count(a[c], !0);
        return d
    });
    jSmart.prototype.registerPlugin("modifier", "count_characters",
        function (a, b) {
            return b ? a.length : a.replace(/\s/g, "").length
        });
    jSmart.prototype.registerPlugin("modifier", "count_paragraphs", function (a) {
        return (a = a.match(/\n+/g)) ? a.length + 1 : 1
    });
    jSmart.prototype.registerPlugin("modifier", "count_sentences", function (a) {
        return (a = a.match(/[^\s]\.(?!\w)/g)) ? a.length : 0
    });
    jSmart.prototype.registerPlugin("modifier", "count_words", function (a) {
        return (a = a.match(/\w+/g)) ? a.length : 0
    });
    jSmart.prototype.registerPlugin("modifier", "date_format", function (a, b, c) {
        return jSmart.prototype.PHPJS("strftime",
            "date_format").strftime(b ? b : "%b %e, %Y", jSmart.prototype.makeTimeStamp(a ? a : c))
    });
    jSmart.prototype.registerPlugin("modifier", "defaultValue", function (a, b) {
        return a && "null" != a && "undefined" != a ? a : b ? b : ""
    });
    jSmart.prototype.registerPlugin("modifier", "escape", function (a, b, c, d) {
        a = new String(a);
        c = c || "UTF-8";
        d = "undefined" != typeof d ? Boolean(d) : !0;
        switch (b || "html") {
            case "html":
                return d && (a = a.replace(/&/g, "&amp;")), a.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    .replace(/'/g, "&#039;").replace(/"/g, "&quot;");
            case "htmlall":
                return jSmart.prototype.PHPJS("htmlentities",
                    "escape").htmlentities(a, 3, c);
            case "url":
                return jSmart.prototype.PHPJS("rawurlencode", "escape").rawurlencode(a);
            case "urlpathinfo":
                return jSmart.prototype.PHPJS("rawurlencode", "escape").rawurlencode(a).replace(/%2F/g,
                    "/");
            case "quotes":
                return a.replace(/(^|[^\\])'/g, "$1\\'");
            case "hex":
                b = "";
                for (c = 0; c < a.length; ++c) b += "%" + jSmart.prototype.PHPJS("bin2hex", "escape")
                    .bin2hex(a.substr(c, 1));
                return b;
            case "hexentity":
                b = "";
                for (c = 0; c < a.length; ++c) b += "&#x" + jSmart.prototype.PHPJS("bin2hex", "escape")
                    .bin2hex(a.substr(c,
                        1)).toUpperCase() + ";";
                return b;
            case "decentity":
                b = "";
                for (c = 0; c < a.length; ++c) b += "&#" + jSmart.prototype.PHPJS("ord", "escape").ord(a
                    .substr(c, 1)) + ";";
                return b;
            case "mail":
                return a.replace(/@/g, " [AT] ").replace(/[.]/g, " [DOT] ");
            case "nonstd":
                b = "";
                for (c = 0; c < a.length; ++c) d = jSmart.prototype.PHPJS("ord", "escape").ord(a.substr(c,
                    1)), b = 126 <= d ? b + ("&#" + d + ";") : b + a.substr(c, 1);
                return b;
            case "javascript":
                return a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\r/g,
                    "\\r").replace(/\n/g, "\\n").replace(/<\//g,
                    "</")
        }
        return a
    });
    jSmart.prototype.registerPlugin("modifier", "indent", function (a, b, c) {
        for (var b = b ? b : 4, c = c ? c : " ", d = ""; b--;) d += c;
        b = a.match(/\n+$/);
        return d + a.replace(/\n+$/, "").replace(/\n/g, "\n" + d) + (b ? b[0] : "")
    });
    jSmart.prototype.registerPlugin("modifier", "lower", function (a) {
        return a.toLowerCase()
    });
    jSmart.prototype.registerPlugin("modifier", "nl2br", function (a) {
        return a.replace(/\n/g, "<br />\n")
    });
    jSmart.prototype.registerPlugin("modifier", "regex_replace", function (a, b, c) {
        b = b.match(/^ *\/(.*)\/(.*) *$/);
        return (new String(a)).replace(RegExp(b[1], "g" + (1 < b.length ? b[2] : "")), c)
    });
    jSmart.prototype.registerPlugin("modifier", "replace", function (a, b, c) {
        if (!b) return a;
        for (var a = new String(a), b = new String(b), c = new String(c), d = "", e = -1, e = a.indexOf(
            b); 0 <= e; e = a.indexOf(b)) d += a.slice(0, e) + c, e += b.length, a = a.slice(e);
        return d + a
    });
    jSmart.prototype.registerPlugin("modifier", "spacify", function (a, b) {
        b || (b = " ");
        return a.replace(/(\n|.)(?!$)/g, "$1" + b)
    });
    jSmart.prototype.registerPlugin("modifier", "string_format", function (a,
                                                                           b) {
        return jSmart.prototype.PHPJS("sprintf", "string_format").sprintf(b, a)
    });
    jSmart.prototype.registerPlugin("modifier", "strip", function (a, b) {
        return (new String(a)).replace(/[\s]+/g, b ? b : " ")
    });
    jSmart.prototype.registerPlugin("modifier", "strip_tags", function (a, b) {
        b = null == b ? !0 : b;
        return (new String(a)).replace(/<[^>]*?>/g, b ? " " : "")
    });
    jSmart.prototype.registerPlugin("modifier", "truncate", function (a, b, c, d, e) {
        b = b ? b : 80;
        c = null != c ? c : "...";
        if (a.length <= b) return a;
        b -= Math.min(b, c.length);
        if (e) return a.slice(0, Math.floor(b /
            2)) + c + a.slice(a.length - Math.floor(b / 2));
        d || (a = a.slice(0, b + 1).replace(/\s+?(\S+)?$/, ""));
        return a.slice(0, b) + c
    });
    jSmart.prototype.registerPlugin("modifier", "upper", function (a) {
        return a.toUpperCase()
    });
    jSmart.prototype.registerPlugin("modifier", "wordwrap", function (a, b, c, d) {
        for (var b = b || 80, c = c || "\n", a = a.split("\n"), e = 0; e < a.length; ++e) {
            for (var f = a[e], g = ""; f.length > b;) {
                for (var h = 0, i = f.slice(h).match(/\s+/); i && h + i.index <= b; i = f.slice(h).match(
                    /\s+/)) h += i.index + i[0].length;
                h = h || (d ? b : i ? i.index + i[0].length :
                    f.length);
                g += f.slice(0, h).replace(/\s+$/, "");
                h < f.length && (g += c);
                f = f.slice(h)
            }
            a[e] = g + f
        }
        return a.join("\n")
    });
    String.prototype.fetch = function (a) {
        return (new jSmart(this)).fetch(a)
    }
})();
/* artDialog 4.1.6*/
(function (g, k, c) {
    g.noop = g.noop || function () {
    };
    var l, f, m, n, o = 0,
        a = g(k),
        d = g(document),
        h = g("html"),
        r = document.documentElement,
        i = k.VBArray && !k.XMLHttpRequest,
        p = "createTouch" in document && !("onmousemove" in r) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent),
        q = "artDialog" + +new Date;
    var b = function (e, t, w) {
        e = e || {};
        if (typeof e === "string" || e.nodeType === 1) {
            e = {
                content: e,
                fixed: !p
            }
        }
        var u, x = b.defaults,
            v = e.follow = this.nodeType === 1 && this || e.follow;
        for (var s in x) {
            if (e[s] === c) {
                e[s] = x[s]
            }
        }
        g.each({
            ok: "yesFn",
            cancel: "noFn",
            close: "closeFn",
            init: "initFn",
            okVal: "yesText",
            cancelVal: "noText"
        }, function (y, z) {
            e[y] = e[y] !== c ? e[y] : e[z]
        });
        if (typeof v === "string") {
            v = g(v)[0]
        }
        e.id = v && v[q + "follow"] || e.id || q + o;
        u = b.list[e.id];
        if (v && u) {
            return u.follow(v).zIndex().focus()
        }
        if (u) {
            return u.zIndex().focus()
        }
        if (p) {
            e.fixed = false
        }
        if (!g.isArray(e.button)) {
            e.button = e.button ? [e.button] : []
        }
        if (t !== c) {
            e.ok = t
        }
        if (w !== c) {
            e.cancel = w
        }
        e.ok && e.button.push({
            name: e.okVal,
            callback: e.ok,
            focus: true
        });
        e.cancel && e.button.push({
            name: e.cancelVal,
            callback: e.cancel
        });
        b.defaults.zIndex = e.zIndex;
        o++;
        return b.list[e.id] = l ? l._init(e) : new b.fn._init(e)
    };
    b.fn = b.prototype = {
        version: "4.1.6",
        closed: true,
        _init: function (e) {
            var u = this,
                t, s = e.icon,
                v = s && ({
                    backgroundImage: "url('" + e.path + "/skins/icons/" + s + ".png')"
                });
            u.closed = false;
            u.config = e;
            u.DOM = t = u.DOM || u._getDOM();
            t.wrap.addClass(e.skin);
            t.close[e.cancel === false ? "hide" : "show"]();
            t.icon[0].style.display = s ? "" : "none";
            t.iconBg.css(v || {
                background: "none"
            });
            t.se.css("cursor", e.resize ? "se-resize" : "auto");
            t.title.css("cursor", e.drag ? "move" : "auto");
            t.content.css("padding", e.padding);
            u[e.show ? "show" : "hide"](true);
            u.button(e.button).title(e.title).content(e.content, true).size(e.width, e.height).time(e.time);
            e.follow ? u.follow(e.follow) : u.position(e.left, e.top);
            u.zIndex().focus();
            e.lock && u.lock();
            u._addEvent();
            u._ie6PngFix();
            l = null;
            e.init && e.init.call(u, k);
            return u
        },
        content: function (u) {
            var w, x, D, A, y = this,
                F = y.DOM,
                t = F.wrap[0],
                s = t.offsetWidth,
                E = t.offsetHeight,
                v = parseInt(t.style.left),
                B = parseInt(t.style.top),
                C = t.style.width,
                e = F.content,
                z = e[0];
            y._elemBack && y._elemBack();
            t.style.width = "auto";
            if (u === c) {
                return z
            }
            if (typeof u === "string") {
                e.html(u)
            } else {
                if (u && u.nodeType === 1) {
                    A = u.style.display;
                    w = u.previousSibling;
                    x = u.nextSibling;
                    D = u.parentNode;
                    y._elemBack = function () {
                        if (w && w.parentNode) {
                            w.parentNode.insertBefore(u, w.nextSibling)
                        } else {
                            if (x && x.parentNode) {
                                x.parentNode.insertBefore(u, x)
                            } else {
                                if (D) {
                                    D.appendChild(u)
                                }
                            }
                        }
                        u.style.display = A;
                        y._elemBack = null
                    };
                    e.html("");
                    z.appendChild(u);
                    u.style.display = "block"
                }
            }
            if (!arguments[1]) {
                if (y.config.follow) {
                    y.follow(y.config.follow)
                } else {
                    s = t.offsetWidth - s;
                    E = t.offsetHeight - E;
                    v = v - s / 2;
                    B = B - E / 2;
                    t.style.left = Math.max(v, 0) + "px";
                    t.style.top = Math.max(B, 0) + "px"
                }
                if (C && C !== "auto") {
                    t.style.width = t.offsetWidth + "px"
                }
                y._autoPositionType()
            }
            y._ie6SelectFix();
            y._runScript(z);
            return y
        },
        title: function (v) {
            var t = this.DOM,
                s = t.wrap,
                u = t.title,
                e = "aui_state_noTitle";
            if (v === c) {
                return u[0]
            }
            if (v === false) {
                u.hide().html("");
                s.addClass(e)
            } else {
                u.show().html(v || "");
                s.removeClass(e)
            }
            return this
        },
        position: function (y, E) {
            var D = this,
                w = D.config,
                t = D.DOM.wrap[0],
                z = i ? false : w.fixed,
                C = i && D.config.fixed,
                x = d.scrollLeft(),
                G = d.scrollTop(),
                B = z ? 0 : x,
                u = z ? 0 : G,
                A = a.width(),
                s = a.height(),
                v = t.offsetWidth,
                F = t.offsetHeight,
                e = t.style;
            if (y || y === 0) {
                D._left = y.toString().indexOf("%") !== -1 ? y : null;
                y = D._toNumber(y, A - v);
                if (typeof y === "number") {
                    y = C ? (y += x) : y + B;
                    e.left = Math.max(y, B) + "px"
                } else {
                    if (typeof y === "string") {
                        e.left = y
                    }
                }
            }
            if (E || E === 0) {
                D._top = E.toString().indexOf("%") !== -1 ? E : null;
                E = D._toNumber(E, s - F);
                if (typeof E === "number") {
                    E = C ? (E += G) : E + u;
                    e.top = Math.max(E, u) + "px"
                } else {
                    if (typeof E === "string") {
                        e.top = E
                    }
                }
            }
            if (y !== c && E !== c) {
                D._follow = null;
                D._autoPositionType()
            }
            return D
        },
        size: function (u, B) {
            var z, A, e, D, x = this,
                v = x.config,
                C = x.DOM,
                t = C.wrap,
                w = C.main,
                y = t[0].style,
                s = w[0].style;
            if (u) {
                x._width = u.toString().indexOf("%") !== -1 ? u : null;
                z = a.width() - t[0].offsetWidth + w[0].offsetWidth;
                e = x._toNumber(u, z);
                u = e;
                if (typeof u === "number") {
                    y.width = "auto";
                    s.width = Math.max(x.config.minWidth, u) + "px";
                    y.width = t[0].offsetWidth + "px"
                } else {
                    if (typeof u === "string") {
                        s.width = u;
                        u === "auto" && t.css("width", "auto")
                    }
                }
            }
            if (B) {
                x._height = B.toString().indexOf("%") !== -1 ? B : null;
                A = a.height() - t[0].offsetHeight + w[0].offsetHeight;
                D = x._toNumber(B, A);
                B = D;
                if (typeof B === "number") {
                    s.height = Math.max(x.config.minHeight, B) + "px"
                } else {
                    if (typeof B === "string") {
                        s.height = B
                    }
                }
            }
            x._ie6SelectFix();
            return x
        },
        follow: function (M) {
            var e, A = this,
                N = A.config;
            if (typeof M === "string" || M && M.nodeType === 1) {
                e = g(M);
                M = e[0]
            }
            if (!M || !M.offsetWidth && !M.offsetHeight) {
                return A.position(A._left, A._top)
            }
            var y = q + "follow",
                D = a.width(),
                t = a.height(),
                v = d.scrollLeft(),
                x = d.scrollTop(),
                w = e.offset(),
                I = M.offsetWidth,
                H = M.offsetHeight,
                z = i ? false : N.fixed,
                u = z ? w.left - v : w.left,
                F = z ? w.top - x : w.top,
                B = A.DOM.wrap[0],
                L = B.style,
                s = B.offsetWidth,
                K = B.offsetHeight,
                C = u - (s - I) / 2,
                G = F + H,
                J = z ? 0 : v,
                E = z ? 0 : x;
            C = C < J ? u : (C + s > D) && (u - s > J) ? u - s + I : C;
            G = (G + K > t + E) && (F - K > E) ? F - K : G;
            L.left = C + "px";
            L.top = G + "px";
            A._follow && A._follow.removeAttribute(y);
            A._follow = M;
            M[y] = N.id;
            A._autoPositionType();
            return A
        },
        button: function () {
            var w = this,
                y = arguments,
                v = w.DOM,
                u = v.buttons,
                t = u[0],
                s = "aui_state_highlight",
                e = w._listeners = w._listeners || {},
                x = g.isArray(y[0]) ? y[0] : [].slice.call(y);
            if (y[0] === c) {
                return t
            }
            g.each(x, function (B, D) {
                var z = D.name,
                    C = !e[z],
                    A = !C ? e[z].elem : document.createElement("button");
                if (!e[z]) {
                    e[z] = {}
                }
                if (D.callback) {
                    e[z].callback = D.callback
                }
                if (D.className) {
                    A.className = D.className
                }
                if (D.focus) {
                    w._focus && w._focus.removeClass(s);
                    w._focus = g(A).addClass(s);
                    w.focus()
                }
                A.setAttribute("type", "button");
                A[q + "callback"] = z;
                A.disabled = !!D.disabled;
                if (C) {
                    A.innerHTML = z;
                    e[z].elem = A;
                    t.appendChild(A)
                }
            });
            u[0].style.display = x.length ? "" : "none";
            w._ie6SelectFix();
            return w
        },
        show: function () {
            this.DOM.wrap.show();
            !arguments[0] && this._lockMaskWrap && this._lockMaskWrap.show();
            return this
        },
        hide: function () {
            this.DOM.wrap.hide();
            !arguments[0] && this._lockMaskWrap && this._lockMaskWrap.hide();
            return this
        },
        close: function () {
            if (this.closed) {
                return this
            }
            var w = this,
                v = w.DOM,
                u = v.wrap,
                x = b.list,
                t = w.config.close,
                e = w.config.follow;
            w.time();
            if (typeof t === "function" && t.call(w, k) === false) {
                return w
            }
            w.unlock();
            w._elemBack && w._elemBack();
            u[0].className = u[0].style.cssText = "";
            v.title.html("");
            v.content.html("");
            v.buttons.html("");
            if (b.focus === w) {
                b.focus = null
            }
            if (e) {
                e.removeAttribute(q + "follow")
            }
            delete x[w.config.id];
            w._removeEvent();
            w.hide(true)._setAbsolute();
            for (var s in w) {
                if (w.hasOwnProperty(s) && s !== "DOM") {
                    delete w[s]
                }
            }
            l ? u.remove() : l = w;
            return w
        },
        time: function (e) {
            var t = this,
                s = t.config.cancelVal,
                u = t._timer;
            u && clearTimeout(u);
            if (e) {
                t._timer = setTimeout(function () {
                    t._click(s)
                }, 1000 * e)
            }
            return t
        },
        focus: function () {
            try {
                var s = this._focus && this._focus[0] || this.DOM.close[0];
                s && s.focus()
            } catch (t) {
            }
            return this
        },
        zIndex: function () {
            var u = this,
                t = u.DOM,
                s = t.wrap,
                v = b.focus,
                e = b.defaults.zIndex++;
            s.css("zIndex", e);
            u._lockMask && u._lockMask.css("zIndex", e - 1);
            v && v.DOM.wrap.removeClass("aui_state_focus");
            b.focus = u;
            s.addClass("aui_state_focus");
            return u
        },
        lock: function () {
            if (this._lock) {
                return this
            }
            var w = this,
                x = b.defaults.zIndex - 1,
                t = w.DOM.wrap,
                v = w.config,
                y = d.width(),
                B = d.height(),
                z = w._lockMaskWrap || g(document.body.appendChild(document.createElement("div"))),
                u = w._lockMask || g(z[0].appendChild(document.createElement("div"))),
                s = "(document).documentElement",
                e = p ? "width:" + y + "px;height:" + B + "px" : "width:100%;height:100%",
                A = i ? "position:absolute;left:expression(" + s + ".scrollLeft);top:expression(" + s +
                    ".scrollTop);width:expression(" + s + ".clientWidth);height:expression(" + s +
                    ".clientHeight)" : "";
            w.zIndex();
            t.addClass("aui_state_lock");
            z[0].style.cssText = e + ";position:fixed;z-index:" + x + ";top:0;left:0;overflow:hidden;" + A;
            u[0].style.cssText = "height:100%;background:" + v.background +
                ";filter:alpha(opacity=0);opacity:0";
            if (i) {
                u.html(
                    '<iframe src="about:blank" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>')
            }
            u.stop();
            u.bind("click", function () {
                w._reset()
            }).bind("dblclick", function () {
                w._click(w.config.cancelVal)
            });
            if (v.duration === 0) {
                u.css({
                    opacity: v.opacity
                })
            } else {
                u.animate({
                    opacity: v.opacity
                }, v.duration)
            }
            w._lockMaskWrap = z;
            w._lockMask = u;
            w._lock = true;
            return w
        },
        unlock: function () {
            var v = this,
                t = v._lockMaskWrap,
                e = v._lockMask;
            if (!v._lock) {
                return v
            }
            var u = t[0].style;
            var s = function () {
                if (i) {
                    u.removeExpression("width");
                    u.removeExpression("height");
                    u.removeExpression("left");
                    u.removeExpression("top")
                }
                u.cssText = "display:none";
                l && t.remove()
            };
            e.stop().unbind();
            v.DOM.wrap.removeClass("aui_state_lock");
            if (!v.config.duration) {
                s()
            } else {
                e.animate({
                    opacity: 0
                }, v.config.duration, s)
            }
            v._lock = false;
            return v
        },
        _getDOM: function () {
            var w = document.createElement("div"),
                e = document.body;
            w.style.cssText = "position:absolute;left:0;top:0";
            w.innerHTML = b._templates;
            e.insertBefore(w, e.firstChild);
            var t, v = 0,
                x = {
                    wrap: g(w)
                },
                u = w.getElementsByTagName("*"),
                s = u.length;
            for (; v < s; v++) {
                t = u[v].className.split("aui_")[1];
                if (t) {
                    x[t] = g(u[v])
                }
            }
            return x
        },
        _toNumber: function (e, t) {
            if (!e && e !== 0 || typeof e === "number") {
                return e
            }
            var s = e.length - 1;
            if (e.lastIndexOf("px") === s) {
                e = parseInt(e)
            } else {
                if (e.lastIndexOf("%") === s) {
                    e = parseInt(t * e.split("%")[0] / 100)
                }
            }
            return e
        },
        _ie6PngFix: i ? function () {
            var s = 0,
                u, x, t, e, w = b.defaults.path + "/skins/",
                v = this.DOM.wrap[0].getElementsByTagName("*");
            for (; s < v.length; s++) {
                u = v[s];
                x = u.currentStyle.png;
                if (x) {
                    t = w + x;
                    e = u.runtimeStyle;
                    e.backgroundImage = "none";
                    e.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + t +
                        "',sizingMethod='crop')"
                }
            }
        } : g.noop,
        _ie6SelectFix: i ? function () {
            var s = this.DOM.wrap,
                v = s[0],
                w = q + "iframeMask",
                u = s[w],
                t = v.offsetWidth,
                e = v.offsetHeight;
            t = t + "px";
            e = e + "px";
            if (u) {
                u.style.width = t;
                u.style.height = e
            } else {
                u = v.appendChild(document.createElement("iframe"));
                s[w] = u;
                u.src = "about:blank";
                u.style.cssText =
                    "position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:" + t +
                    ";height:" + e
            }
        } : g.noop,
        _runScript: function (w) {
            var e, u = 0,
                x = 0,
                t = w.getElementsByTagName("script"),
                v = t.length,
                s = [];
            for (; u < v; u++) {
                if (t[u].type === "text/dialog") {
                    s[x] = t[u].innerHTML;
                    x++
                }
            }
            if (s.length) {
                s = s.join("");
                e = new Function(s);
                e.call(this)
            }
        },
        _autoPositionType: function () {
            this[this.config.fixed ? "_setFixed" : "_setAbsolute"]()
        },
        _setFixed: (function () {
            i && g(function () {
                var e = "backgroundAttachment";
                if (h.css(e) !== "fixed" && g("body").css(e) !== "fixed") {
                    h.css({
                        zoom: 1,
                        backgroundImage: "url(about:blank)",
                        backgroundAttachment: "fixed"
                    })
                }
            });
            return function () {
                var u = this.DOM.wrap,
                    v = u[0].style;
                if (i) {
                    var x = parseInt(u.css("left")),
                        w = parseInt(u.css("top")),
                        t = d.scrollLeft(),
                        s = d.scrollTop(),
                        e = "(document.documentElement)";
                    this._setAbsolute();
                    v.setExpression("left", "eval(" + e + ".scrollLeft + " + (x - t) + ') + "px"');
                    v.setExpression("top", "eval(" + e + ".scrollTop + " + (w - s) + ') + "px"')
                } else {
                    v.position = "fixed"
                }
            }
        }()),
        _setAbsolute: function () {
            var e = this.DOM.wrap[0].style;
            if (i) {
                e.removeExpression("left");
                e.removeExpression("top")
            }
            e.position = "absolute"
        },
        _click: function (e) {
            var t = this,
                s = t._listeners[e] && t._listeners[e].callback;
            return typeof s !== "function" || s.call(t, k) !== false ? t.close() : t
        },
        _reset: function (x) {
            var w, v = this,
                e = v._winSize || a.width() * a.height(),
                u = v._follow,
                s = v._width,
                z = v._height,
                t = v._left,
                y = v._top;
            if (x) {
                w = v._winSize = a.width() * a.height();
                if (e === w) {
                    return
                }
            }
            if (s || z) {
                v.size(s, z)
            }
            if (u) {
                v.follow(u)
            } else {
                if (t || y) {
                    v.position(t, y)
                }
            }
        },
        _addEvent: function () {
            var e, v = this,
                s = v.config,
                t = "CollectGarbage" in k,
                u = v.DOM;
            v._winResize = function () {
                e && clearTimeout(e);
                e = setTimeout(function () {
                    v._reset(t)
                }, 40)
            };
            a.bind("resize", v._winResize);
            u.wrap.bind("click", function (x) {
                var y = x.target,
                    w;
                if (y.disabled) {
                    return false
                }
                if (y === u.close[0]) {
                    v._click(s.cancelVal);
                    return false
                } else {
                    w = y[q + "callback"];
                    w && v._click(w)
                }
                v._ie6SelectFix()
            }).bind("mousedown", function () {
                v.zIndex()
            })
        },
        _removeEvent: function () {
            var s = this,
                e = s.DOM;
            e.wrap.unbind();
            a.unbind("resize", s._winResize)
        }
    };
    b.fn._init.prototype = b.fn;
    g.fn.dialog = g.fn.artDialog = function () {
        var e = arguments;
        this[this.live ? "live" : "bind"]("click", function () {
            b.apply(this, e);
            return false
        });
        return this
    };
    b.focus = null;
    b.get = function (e) {
        return e === c ? b.list : b.list[e]
    };
    b.list = {};
    d.bind("keydown", function (t) {
        var v = t.target,
            w = v.nodeName,
            e = /^INPUT|TEXTAREA$/,
            s = b.focus,
            u = t.keyCode;
        if (!s || !s.config.esc || e.test(w)) {
            return
        }
        u === 27 && s._click(s.config.cancelVal)
    });
    a.bind("load", function () {
        setTimeout(function () {
            if (o) {
                return
            }
            b({
                left: "-9999em",
                time: 9,
                fixed: false,
                lock: false,
                focus: false
            })
        }, 150)
    });
    try {
        document.execCommand("BackgroundImageCache", false, true)
    } catch (j) {
    }
    b._templates =
        '<div class="aui_outer"><table class="aui_border"><tbody><tr><td class="aui_nw"></td><td class="aui_n"></td><td class="aui_ne"></td></tr><tr><td class="aui_w"></td><td class="aui_c"><div class="aui_inner"><table class="aui_dialog"><tbody><tr><td colspan="2" class="aui_header"><div class="aui_titleBar"><div class="aui_title"></div><a class="aui_close">\xd7</a></div></td></tr><tr><td class="aui_icon"><div class="aui_iconBg"></div></td><td class="aui_main"><div class="aui_content"></div></td></tr><tr><td colspan="2" class="aui_footer"><div class="aui_buttons"></div></td></tr></tbody></table></div></td><td class="aui_e"></td></tr><tr><td class="aui_sw"></td><td class="aui_s"></td><td class="aui_se"></td></tr></tbody></table></div>';
    b.defaults = {
        content: '<div class="aui_loading"><span>loading..</span></div>',
        title: "\u6d88\u606f",
        button: null,
        ok: null,
        cancel: null,
        init: null,
        close: null,
        okVal: "\u786E\u5B9A",
        cancelVal: "\u53D6\u6D88",
        width: "auto",
        height: "auto",
        minWidth: 96,
        minHeight: 32,
        padding: "20px 25px",
        skin: "",
        icon: null,
        time: null,
        esc: true,
        focus: true,
        show: true,
        follow: null,
        path: "http://www.sharesmile.cn/public/system",
        lock: false,
        background: "#000",
        opacity: 0.7,
        duration: 300,
        fixed: false,
        left: "50%",
        top: "38.2%",
        zIndex: 1987,
        resize: true,
        drag: true
    };
    k.artDialog = g.dialog = g.artDialog = b
}(this.art || this.jQuery && (this.art = jQuery), this));
(function (e) {
    var h, b, a = e(window),
        d = e(document),
        i = document.documentElement,
        f = !("minWidth" in i.style),
        g = "onlosecapture" in i,
        c = "setCapture" in i;
    artDialog.dragEvent = function () {
        var k = this,
            j = function (l) {
                var m = k[l];
                k[l] = function () {
                    return m.apply(k, arguments)
                }
            };
        j("start");
        j("move");
        j("end")
    };
    artDialog.dragEvent.prototype = {
        onstart: e.noop,
        start: function (j) {
            d.bind("mousemove", this.move).bind("mouseup", this.end);
            this._sClientX = j.clientX;
            this._sClientY = j.clientY;
            this.onstart(j.clientX, j.clientY);
            return false
        },
        onmove: e.noop,
        move: function (j) {
            this._mClientX = j.clientX;
            this._mClientY = j.clientY;
            this.onmove(j.clientX - this._sClientX, j.clientY - this._sClientY);
            return false
        },
        onend: e.noop,
        end: function (j) {
            d.unbind("mousemove", this.move).unbind("mouseup", this.end);
            this.onend(j.clientX, j.clientY);
            return false
        }
    };
    b = function (j) {
        var n, o, u, l, q, s, p = artDialog.focus,
            v = p.DOM,
            k = v.wrap,
            r = v.title,
            m = v.main;
        var t = "getSelection" in window ? function () {
            window.getSelection().removeAllRanges()
        } : function () {
            try {
                document.selection.empty()
            } catch (w) {
            }
        };
        h.onstart = function (w, z) {
            if (s) {
                o = m[0].offsetWidth;
                u = m[0].offsetHeight
            } else {
                l = k[0].offsetLeft;
                q = k[0].offsetTop
            }
            d.bind("dblclick", h.end);
            !f && g ? r.bind("losecapture", h.end) : a.bind("blur", h.end);
            c && r[0].setCapture();
            k.addClass("aui_state_drag");
            p.focus()
        };
        h.onmove = function (z, F) {
            if (s) {
                var C = k[0].style,
                    B = m[0].style,
                    A = z + o,
                    w = F + u;
                C.width = "auto";
                B.width = Math.max(0, A) + "px";
                C.width = k[0].offsetWidth + "px";
                B.height = Math.max(0, w) + "px"
            } else {
                var B = k[0].style,
                    E = Math.max(n.minX, Math.min(n.maxX, z + l)),
                    D = Math.max(n.minY, Math.min(n.maxY, F + q));
                B.left = E + "px";
                B.top = D + "px"
            }
            t();
            p._ie6SelectFix()
        };
        h.onend = function (w, z) {
            d.unbind("dblclick", h.end);
            !f && g ? r.unbind("losecapture", h.end) : a.unbind("blur", h.end);
            c && r[0].releaseCapture();
            f && !p.closed && p._autoPositionType();
            k.removeClass("aui_state_drag")
        };
        s = j.target === v.se[0] ? true : false;
        n = (function () {
            var x, w, z = p.DOM.wrap[0],
                C = z.style.position === "fixed",
                B = z.offsetWidth,
                F = z.offsetHeight,
                D = a.width(),
                y = a.height(),
                E = C ? 0 : d.scrollLeft(),
                A = C ? 0 : d.scrollTop(),
                x = D - B + E;
            w = y - F + A;
            return {
                minX: E,
                minY: A,
                maxX: x,
                maxY: w
            }
        })();
        h.start(j)
    };
    d.bind("mousedown", function (m) {
        var k = artDialog.focus;
        if (!k) {
            return
        }
        var n = m.target,
            j = k.config,
            l = k.DOM;
        if (j.drag !== false && n === l.title[0] || j.resize !== false && n === l.se[0]) {
            h = h || new artDialog.dragEvent();
            b(m);
            return false
        }
    })
})(this.art || this.jQuery && (this.art = jQuery));
/*artDialog iframeTools */
(function (g, k, a, f) {
    var l, i, d, b = "@ARTDIALOG.DATA",
        c = "@ARTDIALOG.OPEN",
        e = "@ARTDIALOG.OPENER",
        h = k.name = k.name || "@ARTDIALOG.WINNAME" + +new Date,
        j = k.VBArray && !k.XMLHttpRequest;
    g(function () {
        !k.jQuery && document.compatMode === "BackCompat" && alert(
            'artDialog Error: document.compatMode === "BackCompat"')
    });
    var m = a.top = function () {
        var n = k,
            o = function (p) {
                try {
                    var r = k[p].document;
                    r.getElementsByTagName
                } catch (q) {
                    return false
                }
                return k[p].artDialog && r.getElementsByTagName("frameset").length === 0
            };
        if (o("top")) {
            n = k.top
        } else {
            if (o("parent")) {
                n = k.parent
            }
        }
        return n
    }();
    a.parent = m;
    l = m.artDialog;
    d = function () {
        return l.defaults.zIndex
    };
    a.data = function (o, p) {
        var q = a.top,
            n = q[b] || {};
        q[b] = n;
        if (p !== f) {
            n[o] = p
        } else {
            return n[o]
        }
        return n
    };
    a.removeData = function (o) {
        var n = a.top[b];
        if (n && n[o]) {
            delete n[o]
        }
    };
    a.through = i = function () {
        var n = l.apply(this, arguments);
        if (m !== k) {
            a.list[n.config.id] = n
        }
        return n
    };
    m !== k && g(k).bind("unload", function () {
        var p = a.list,
            n;
        for (var o in p) {
            if (p[o]) {
                n = p[o].config;
                if (n) {
                    n.duration = 0
                }
                p[o].close()
            }
        }
    });
    a.open = function (r, p, y) {
        p = p || {};
        var x, D, q, v, u, w, C, E, s, z = a.top,
            o = "position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent",
            A = "width:100%;height:100%;border:none 0";
        if (y === false) {
            var n = +new Date,
                G = r.replace(/([?&])_=[^&]*/, "$1_=" + n);
            r = G + ((G === r) ? (/\?/.test(r) ? "&" : "?") + "_=" + n : "")
        }
        var t = function () {
            var I, K, L = D.content.find(".aui_loading"),
                H = x.config;
            q.addClass("aui_state_full");
            L && L.hide();
            try {
                E = u.contentWindow;
                C = g(E.document);
                s = E.document.body
            } catch (J) {
                u.style.cssText = A;
                H.follow ? x.follow(H.follow) : x.position(H.left, H.top);
                p.init && p.init.call(x, E, z);
                p.init = null;
                return
            }
            I = H.width === "auto" ? C.width() + (j ? 0 : parseInt(g(s).css("marginLeft"))) : H.width;
            K = H.height === "auto" ? C.height() : H.height;
            setTimeout(function () {
                u.style.cssText = A
            }, 0);
            x.size(I, K);
            H.follow ? x.follow(H.follow) : x.position(H.left, H.top);
            p.init && p.init.call(x, E, z);
            p.init = null
        };
        var F = {
            zIndex: d(),
            init: function () {
                x = this;
                D = x.DOM;
                v = D.main;
                q = D.content;
                u = x.iframe = z.document.createElement("iframe");
                u.src = r;
                u.name = "Open" + x.config.id;
                u.style.cssText = o;
                u.setAttribute("frameborder", 0, 0);
                u.setAttribute("allowTransparency", true);
                w = g(u);
                x.content().appendChild(u);
                E = u.contentWindow;
                try {
                    E.name = u.name;
                    a.data(u.name + c, x);
                    a.data(u.name + e, k)
                } catch (H) {
                }
                w.bind("load", t)
            },
            close: function () {
                w.css("display", "none").unbind("load", t);
                if (p.close && p.close.call(this, u.contentWindow, z) === false) {
                    return false
                }
                q.removeClass("aui_state_full");
                w[0].src = "about:blank";
                w.remove();
                try {
                    a.removeData(u.name + c);
                    a.removeData(u.name + e)
                } catch (H) {
                }
            }
        };
        if (typeof p.ok === "function") {
            F.ok = function () {
                return p.ok.call(x, u.contentWindow, z)
            }
        }
        if (typeof p.cancel === "function") {
            F.cancel = function () {
                return p.cancel.call(x, u.contentWindow, z)
            }
        }
        delete p.content;
        for (var B in p) {
            if (F[B] === f) {
                F[B] = p[B]
            }
        }
        return i(F)
    };
    a.open.api = a.data(h + c);
    a.opener = a.data(h + e) || k;
    a.open.origin = a.opener;
    a.close = function () {
        var n = a.data(h + c);
        n && n.close();
        return false
    };
    m != k && g(document).bind("mousedown", function () {
        var n = a.open.api;
        n && n.zIndex()
    });
    a.load = function (q, p, n) {
        n = n || false;
        var s = p || {};
        var o = {
            zIndex: d(),
            init: function (u) {
                var v = this,
                    t = v.config;
                g.ajax({
                    url: q,
                    success: function (w) {
                        v.content(w);
                        s.init && s.init.call(v, u)
                    },
                    cache: n
                })
            }
        };
        delete p.content;
        for (var r in s) {
            if (o[r] === f) {
                o[r] = s[r]
            }
        }
        return i(o)
    };
    a.alert = function (n, o) {
        return i({
            id: "Alert",
            zIndex: d(),
            icon: "warning",
            fixed: true,
            lock: true,
            content: n,
            ok: true,
            close: o
        })
    };
    a.confirm = function (n, p, o) {
        return i({
            id: "Confirm",
            zIndex: d(),
            icon: "question",
            fixed: true,
            lock: true,
            opacity: 0.1,
            content: n,
            ok: function (q) {
                return p.call(this, q)
            },
            cancel: function (q) {
                return o && o.call(this, q)
            }
        })
    };
    a.prompt = function (o, q, p) {
        p = p || "";
        var n;
        return i({
            id: "Prompt",
            zIndex: d(),
            icon: "question",
            fixed: true,
            lock: true,
            opacity: 0.1,
            content: ['<div style="margin-bottom:5px;font-size:12px">', o, "</div>", "<div>",
                '<input value="', p, '" style="width:18em;padding:6px 4px" />', "</div>"
            ].join(""),
            init: function () {
                n = this.DOM.content.find("input")[0];
                n.select();
                n.focus()
            },
            ok: function (r) {
                return q && q.call(this, n.value, r)
            },
            cancel: true
        })
    };
    a.tips = function (n, o) {
        return i({
            id: "Tips",
            zIndex: d(),
            title: false,
            cancel: false,
            fixed: true,
            lock: false
        }).content('<div style="padding: 0 1em;">' + n + "</div>").time(o || 1.5)
    };
    a.notice = function (w) {
        var p = w || {},
            u, n, t, o, v, r = 800;
        var q = {
            id: "Notice",
            left: "100%",
            top: "100%",
            fixed: true,
            drag: false,
            resize: false,
            follow: null,
            lock: false,
            init: function (x) {
                u = this;
                n = u.config;
                o = u.DOM.wrap;
                v = parseInt(o[0].style.top);
                t = v + o[0].offsetHeight;
                o.css("top", t + "px").animate({
                    top: v + "px"
                }, r, function () {
                    p.init && p.init.call(u, x)
                })
            },
            close: function (x) {
                o.animate({
                    top: t + "px"
                }, r, function () {
                    p.close && p.close.call(this, x);
                    n.close = g.noop;
                    u.close()
                });
                return false
            }
        };
        for (var s in p) {
            if (q[s] === f) {
                q[s] = p[s]
            }
        }
        return a(q)
    };
    g(function () {
        var p = a.dragEvent;
        if (!p) {
            return
        }
        var s = g(k),
            r = g(document),
            t = j ? "absolute" : "fixed",
            q = p.prototype,
            n = document.createElement("div"),
            o = n.style;
        o.cssText = "display:none;position:" + t +
            ";left:0;top:0;width:100%;height:100%;cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF";
        document.body.appendChild(n);
        q._start = q.start;
        q._end = q.end;
        q.start = function () {
            var w = a.focus.DOM,
                u = w.main[0],
                v = w.content[0].getElementsByTagName("iframe")[0];
            q._start.apply(this, arguments);
            o.display = "block";
            o.zIndex = a.defaults.zIndex + 3;
            if (t === "absolute") {
                o.width = s.width() + "px";
                o.height = s.height() + "px";
                o.left = r.scrollLeft() + "px";
                o.top = r.scrollTop() + "px"
            }
            if (v && u.offsetWidth * u.offsetHeight > 307200) {
                u.style.visibility = "hidden"
            }
        };
        q.end = function () {
            var u = a.focus;
            q._end.apply(this, arguments);
            o.display = "none";
            if (u) {
                u.DOM.main[0].style.visibility = "visible"
            }
        }
    })
})(this.art || this.jQuery, this, this.artDialog);
