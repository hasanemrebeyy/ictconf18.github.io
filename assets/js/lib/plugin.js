/*!
Theme Name: Trendy
Theme URI: http://themeforest.net/user/Medhati/portfolio
Author: Medhati
Author URI: http://themeforest.net/user/Medhati
Description: Trendy Multipurpose Coming Soon template
*/
/*! Modernizr */
;
window.Modernizr = function(a, b, c) {
        function B(a) {
            j.cssText = a
        }

        function C(a, b) {
            return B(n.join(a + ";") + (b || ""))
        }

        function D(a, b) {
            return typeof a === b
        }

        function E(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function F(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!E(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function G(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : D(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function H(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + p.join(d + " ") + d).split(" ");
            return D(b, "string") || D(b, "undefined") ? F(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), G(e, b, c))
        }

        function I() {
            e.input = function(c) {
                for (var d = 0, e = c.length; d < e; d++) t[c[d]] = c[d] in k;
                return t.list && (t.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), t
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
                for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), s[a[d]] = !!e;
                return s
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k = b.createElement("input"),
            l = ":)",
            m = {}.toString,
            n = " -webkit- -moz- -o- -ms- ".split(" "),
            o = "Webkit Moz O ms",
            p = o.split(" "),
            q = o.toLowerCase().split(" "),
            r = {},
            s = {},
            t = {},
            u = [],
            v = u.slice,
            w, x = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            y = function() {
                function d(d, e) {
                    e = e || b.createElement(a[d] || "div"), d = "on" + d;
                    var f = d in e;
                    return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = D(e[d], "function"), D(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
                }
                var a = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return d
            }(),
            z = {}.hasOwnProperty,
            A;
        !D(z, "undefined") && !D(z.call, "undefined") ? A = function(a, b) {
            return z.call(a, b)
        } : A = function(a, b) {
            return b in a && D(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = v.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(v.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(v.call(arguments)))
                };
            return e
        }), r.flexbox = function() {
            return H("flexWrap")
        }, r.flexboxlegacy = function() {
            return H("boxDirection")
        }, r.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, r.canvastext = function() {
            return !!e.canvas && !!D(b.createElement("canvas").getContext("2d").fillText, "function")
        }, r.postmessage = function() {
            return !!a.postMessage
        }, r.websqldatabase = function() {
            return !!a.openDatabase
        }, r.indexedDB = function() {
            return !!H("indexedDB", a)
        }, r.hashchange = function() {
            return y("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, r.history = function() {
            return !!a.history && !!history.pushState
        }, r.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, r.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a
        }, r.rgba = function() {
            return B("background-color:rgba(150,255,150,.5)"), E(j.backgroundColor, "rgba")
        }, r.hsla = function() {
            return B("background-color:hsla(120,40%,100%,.5)"), E(j.backgroundColor, "rgba") || E(j.backgroundColor, "hsla")
        }, r.multiplebgs = function() {
            return B("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
        }, r.backgroundsize = function() {
            return H("backgroundSize")
        }, r.borderimage = function() {
            return H("borderImage")
        }, r.borderradius = function() {
            return H("borderRadius")
        }, r.boxshadow = function() {
            return H("boxShadow")
        }, r.textshadow = function() {
            return b.createElement("div").style.textShadow === ""
        }, r.opacity = function() {
            return C("opacity:.55"), /^0.55$/.test(j.opacity)
        }, r.cssanimations = function() {
            return H("animationName")
        }, r.csscolumns = function() {
            return H("columnCount")
        }, r.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return B((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), E(j.backgroundImage, "gradient")
        }, r.cssreflections = function() {
            return H("boxReflect")
        }, r.csstransforms = function() {
            return !!H("transform")
        }, r.csstransforms3d = function() {
            var a = !!H("perspective");
            return a && "webkitPerspective" in g.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }), a
        }, r.csstransitions = function() {
            return H("transition")
        }, r.fontface = function() {
            var a;
            return x('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }), a
        }, r.generatedcontent = function() {
            var a;
            return x(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, r.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (d) {}
            return c
        }, r.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
            } catch (d) {}
            return c
        }, r.localstorage = function() {
            try {
                return localStorage.setItem(h, h), localStorage.removeItem(h), !0
            } catch (a) {
                return !1
            }
        }, r.sessionstorage = function() {
            try {
                return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
            } catch (a) {
                return !1
            }
        }, r.webworkers = function() {
            return !!a.Worker
        }, r.applicationcache = function() {
            return !!a.applicationCache
        };
        for (var J in r) A(r, J) && (w = J.toLowerCase(), e[w] = r[J](), u.push((e[w] ? "" : "no-") + w));
        return e.input || I(), e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) A(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, B(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = y, e.testProp = function(a) {
                return F([a])
            }, e.testAllProps = H, e.testStyles = x, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
/*! ease jquery */
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, o, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, o, r)
        },
        easeInQuad: function(e, t, n, o, r) {
            return o * (t /= r) * t + n
        },
        easeOutQuad: function(e, t, n, o, r) {
            return -o * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, o, r) {
            return 1 > (t /= r / 2) ? o / 2 * t * t + n : -o / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, o, r) {
            return o * (t /= r) * t * t + n
        },
        easeOutCubic: function(e, t, n, o, r) {
            return o * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, o, r) {
            return 1 > (t /= r / 2) ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, o, r) {
            return o * (t /= r) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, o, r) {
            return -o * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, o, r) {
            return 1 > (t /= r / 2) ? o / 2 * t * t * t * t + n : -o / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, o, r) {
            return o * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, o, r) {
            return o * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, o, r) {
            return 1 > (t /= r / 2) ? o / 2 * t * t * t * t * t + n : o / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, o, r) {
            return -o * Math.cos(t / r * (Math.PI / 2)) + o + n
        },
        easeOutSine: function(e, t, n, o, r) {
            return o * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, o, r) {
            return -o / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function(e, t, n, o, r) {
            return 0 == t ? n : o * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function(e, t, n, o, r) {
            return t == r ? n + o : o * (-Math.pow(2, -10 * t / r) + 1) + n
        },
        easeInOutExpo: function(e, t, n, o, r) {
            return 0 == t ? n : t == r ? n + o : 1 > (t /= r / 2) ? o / 2 * Math.pow(2, 10 * (t - 1)) + n : o / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, o, r) {
            return -o * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, o, r) {
            return o * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, o, r) {
            return 1 > (t /= r / 2) ? -o / 2 * (Math.sqrt(1 - t * t) - 1) + n : o / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, o, r) {
            var i = 1.70158,
                s = 0,
                a = o;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + o;
            if (s || (s = .3 * r), Math.abs(o) > a) {
                a = o;
                var i = s / 4
            } else var i = s / (2 * Math.PI) * Math.asin(o / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - i) * 2 * Math.PI / s)) + n
        },
        easeOutElastic: function(e, t, n, o, r) {
            var i = 1.70158,
                s = 0,
                a = o;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + o;
            if (s || (s = .3 * r), Math.abs(o) > a) {
                a = o;
                var i = s / 4
            } else var i = s / (2 * Math.PI) * Math.asin(o / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * r - i) * 2 * Math.PI / s) + o + n
        },
        easeInOutElastic: function(e, t, n, o, r) {
            var i = 1.70158,
                s = 0,
                a = o;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + o;
            if (s || (s = r * .3 * 1.5), Math.abs(o) > a) {
                a = o;
                var i = s / 4
            } else var i = s / (2 * Math.PI) * Math.asin(o / a);
            return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - i) * 2 * Math.PI / s) + n : .5 * a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - i) * 2 * Math.PI / s) + o + n
        },
        easeInBack: function(e, t, n, o, r, i) {
            return void 0 == i && (i = 1.70158), o * (t /= r) * t * ((i + 1) * t - i) + n
        },
        easeOutBack: function(e, t, n, o, r, i) {
            return void 0 == i && (i = 1.70158), o * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + n
        },
        easeInOutBack: function(e, t, n, o, r, i) {
            return void 0 == i && (i = 1.70158), 1 > (t /= r / 2) ? o / 2 * t * t * (((i *= 1.525) + 1) * t - i) + n : o / 2 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2) + n
        },
        easeInBounce: function(e, t, n, o, r) {
            return o - jQuery.easing.easeOutBounce(e, r - t, 0, o, r) + n
        },
        easeOutBounce: function(e, t, n, o, r) {
            return 1 / 2.75 > (t /= r) ? o * 7.5625 * t * t + n : 2 / 2.75 > t ? o * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? o * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : o * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, o, r) {
            return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, o, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, o, r) + .5 * o + n
        }
    }),
    function(e, t, n, o) {
        function r(t, n) {
            this.element = t, this.options = e.extend({}, f, n), this._defaults = f, this._name = h, this.init()
        }

        function i() {
            var e, r = n.createElement("p"),
                i = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            n.body.insertBefore(r, null);
            for (var s in i) r.style[s] !== o && (r.style[s] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(r).getPropertyValue(i[s]));
            return n.body.removeChild(r), e !== o && e.length > 0 && "none" !== e
        }

        function s(e, t) {
            var n = e.indexOf(t);
            return -1 !== n ? !0 : !1
        }

        function a(e) {
            return e === !0
        }

        function l(e) {
            return "number" == typeof e
        }

        function c(e) {
            return "function" == typeof e
        }

        function u(e) {
            return "object" == typeof e
        }
        var h = "pofloor",
            f = {
                pofloorFloorName: !1,
                childType: "div",
                windowsOn: 0,
                direction: "y",
                loop: !1,
                width: "100%",
                height: "100%",
                time: 250,
                easing: "linear",
                keyNavigation: !0,
                queued: !1,
                jump: !1,
                ready: !1,
                swipeNavigation: "mobile-only",
                swipeVelocity: .7
            };
        Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
            var t = this.length >>> 0,
                n = Number(arguments[1]) || 0;
            for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += t); t > n; n++)
                if (n in this && this[n] === e) return n;
            return -1
        }), r.prototype = {
            init: function() {
                return this.AXIS_X = 1, this.AXIS_Y = 0, this.dataAttributeMap = {
                    next: "pofloor-next",
                    prev: "pofloor-prev",
                    down: "pofloor-down",
                    up: "pofloor-up",
                    left: "pofloor-left",
                    right: "pofloor-right"
                }, this.node = e(this.element), this.nodeChildren = this.node.children(this.options.childType), this.floorActive = l(this._getFloorFromHash()) ? this._getFloorFromHash() : this.options.windowsOn, this.NH = this.node.height(), this.NW = this.node.width(), this.directionIsArray = u(this.options.direction), this.supportTransform = i(), u(this.options.pofloorFloorName) && this.options.pofloorFloorName.length < this.nodeChildren.length ? this._emitConsoleMessage("error", "floors total (" + this.nodeChildren.length + ") & floor name array length (" + this.options.pofloorFloorName.length + ") don't match") : this.directionIsArray && this.options.direction.length < this.nodeChildren.length ? this._emitConsoleMessage("error", "floors total (" + this.nodeChildren.length + ") & direction array lenght (" + this.options.direction.length + ") don't match") : (this.setup(), o)
            },
            setup: function() {
                this._positionElement(), this._bindEvents(), this.scrollToFloor(this.floorActive), u(this.options.pofloorFloorName) && this._updateHash(this.floorActive), c(this.options.ready) && this.options.ready()
            },
            _bindEvents: function() {
                var r = this;
                if (this.node.on("scrollToDirection", function(e, t) {
                        r.scrollToDirection(t)
                    }), this.node.on("scrollToStage", function(t, n) {
                        if ("string" == typeof n) {
                            var o = e.inArray(n, r.options.pofloorFloorName); - 1 !== o && r.scrollToFloor(o)
                        } else if ("number" == typeof n) {
                            if (n > r.nodeChildren.length) return;
                            r.scrollToFloor(n)
                        }
                    }), this.node.on("next", function() {
                        var e = r.nodeChildren.eq(r.floorActive).data(r.dataAttributeMap.next);
                        return e ? r.scrollToFloor(e) : (r.next(), o)
                    }), this.node.on("prev", function() {
                        var e = r.nodeChildren.eq(r.floorActive).data(r.dataAttributeMap.prev);
                        return e ? r.scrollToFloor(e) : (r.prev(), o)
                    }), this.node.on("refresh", function() {
                        r.refresh()
                    }), this.node.on("remove", function() {
                        r.destroy()
                    }), e(t).on("resize.pofloor", function() {
                        r.scrollToFloor(r.floorActive, !1)
                    }), u(this.options.pofloorFloorName) && e(t).on("hashchange.pofloor", function(e) {
                        r._hashchangeHandler(e)
                    }), t.DeviceOrientationEvent && e(t).on("orientationchange.pofloor", function() {
                        r.scrollToFloor(r.floorActive)
                    }), this.options.keyNavigation && e(n).on("keydown.pofloor", function(e) {
                        r._keypressHandler(e)
                    }), this.options.swipeNavigation) {
                    var i = "touchstart.pofloor touchend.pofloor";
                    "mobile-only" !== this.options.swipeNavigation && (i += " mousedown.pofloor mouseup.pofloor"), this.node.on(i, function(e) {
                        r._handleTouchEvent(e)
                    })
                }
            },
            refresh: function() {
                this.nodeChildren = this.node.children(this.options.childType), this._positionElement()
            },
            destroy: function() {
                this.node.off("scrollToDirection scrollToStage next prev refresh remove touchstart.pofloor touchend.pofloor mousedown.pofloor mouseup.pofloor"), e(t).off("resize.pofloor hashchange.pofloor orientationchange.pofloor"), e(n).off("keydown.pofloor"), this.node.css({
                    position: "",
                    overflow: "",
                    top: "",
                    left: "",
                    width: "",
                    height: ""
                }), this.nodeChildren.css({
                    position: "",
                    overflow: "",
                    top: "",
                    left: "",
                    width: "",
                    height: "",
                    transform: ""
                }), this.node.removeData()
            },
            _handleTouchEvent: function(e) {
                switch (e.type) {
                    case "touchstart":
                    case "mousedown":
                        this.touchStartTime = (new Date).getTime(), this.touchStartX = "touchstart" == e.type ? e.originalEvent.touches[0].pageX : e.pageX, this.touchStartY = "touchstart" == e.type ? e.originalEvent.touches[0].pageY : e.pageY;
                        break;
                    case "touchend":
                    case "mouseup":
                        this.touchEndTime = (new Date).getTime(), this.touchEndX = "touchend" == e.type ? e.originalEvent.changedTouches[0].pageX : e.pageX, this.touchEndY = "touchend" == e.type ? e.originalEvent.changedTouches[0].pageY : e.pageY;
                        var t = this.touchStartX - this.touchEndX,
                            n = this.touchStartY - this.touchEndY,
                            o = this.touchEndTime - this.touchStartTime,
                            r = Math.abs(t) / o,
                            i = Math.abs(n) / o;
                        r > this.options.swipeVelocity && Math.abs(t) > Math.abs(n) && 0 > t && this.scrollToDirection("left"), r > this.options.swipeVelocity && Math.abs(t) > Math.abs(n) && t > 0 && this.scrollToDirection("right"), i > this.options.swipeVelocity && Math.abs(t) < Math.abs(n) && 0 > n && this.scrollToDirection("up"), i > this.options.swipeVelocity && Math.abs(t) < Math.abs(n) && n > 0 && this.scrollToDirection("down")
                }
            },
            _positionElement: function() {
                var t = this;
                this.directionIsArray && this._generateFloorMap(), this.node.css({
                    position: "absolute",
                    overflow: "hidden",
                    top: "0",
                    left: "0",
                    width: this.options.width,
                    height: this.options.height
                }), this.nodeChildren.css({
                    position: "absolute",
                    overflow: "auto",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%"
                }), this.nodeChildren.each(function(n) {
                    t.supportTransform ? e(this).css({
                        transform: function() {
                            return "y" === t.options.direction ? "translateY(" + 100 * n + "%)" : "x" === t.options.direction ? "translateX(" + 100 * n + "%)" : t.directionIsArray ? "translateY(" + 100 * t.options.direction[n][t.AXIS_Y] + "%) translateX(" + 100 * t.options.direction[n][t.AXIS_X] + "%)" : o
                        }
                    }) : e(this).css({
                        top: function() {
                            return "y" === t.options.direction ? 100 * n + "%" : t.directionIsArray ? 100 * t.options.direction[n][t.AXIS_Y] + "%" : o
                        },
                        left: function() {
                            return "x" === t.options.direction ? 100 * n + "%" : t.directionIsArray ? 100 * t.options.direction[n][t.AXIS_X] + "%" : o
                        }
                    })
                })
            },
            _getFloorFromHash: function() {
                return this._getHash() && this.options.pofloorFloorName && s(this.options.pofloorFloorName, this._getHash()) ? this.options.pofloorFloorName.indexOf(this._getHash()) : !1
            },
            _getHash: function() {
                if (t.location.hash) {
                    var e = t.location.hash.split("#").pop();
                    return e
                }
                return !1
            },
            _hashchangeHandler: function() {
                l(this._getFloorFromHash()) && this._getFloorFromHash() !== this.floorActive && !this.node.is(":animated") && this.scrollToFloor(this._getFloorFromHash())
            },
            _updateHash: function(e) {
                u(this.options.pofloorFloorName) && this._getHash() !== this.options.pofloorFloorName[e] && t.location.replace(("" + t.location).split("#")[0] + "#" + this.options.pofloorFloorName[e])
            },
            _emitEvent: function(e, t, n) {
                this.node.trigger(e, floor = {
                    from: t,
                    to: n
                })
            },
            _emitConsoleMessage: function(e, t) {
                "error" == e && console.error("pofloor.js: " + t), "warn" == e && console.warn("pofloor.js: " + t)
            },
            _keypressHandler: function(t) {
                var n = this,
                    o = t.keyCode || t.which;
                if (!e("input, textarea, button").is(":focus")) switch (o) {
                    case 40:
                    case 83:
                        n.scrollToDirection("down");
                        break;
                    case 38:
                    case 87:
                        n.scrollToDirection("up");
                        break;
                    case 37:
                    case 65:
                        n.scrollToDirection("left");
                        break;
                    case 39:
                    case 68:
                        n.scrollToDirection("right")
                }
            },
            scrollToFloor: function(e) {
                var t = this,
                    n = e === this.floorActive ? !1 : !0;
                this.NW !== this.node.width() && (this.NW = this.node.width()), this.NH !== this.node.height() && (this.NH = this.node.height());
                var o = this._getAnimationSettings(e);
                n ? (this._emitEvent("scrollStart", t.floorActive, e), this.node.stop().animate(o.property, t.options.time, t.options.easing, o.callback)) : this.node.stop().scrollTop(o.defaults.scrollTop).scrollLeft(o.defaults.scrollLeft), this.floorActive = e, this.node.data("current-floor", this.floorActive)
            },
            prev: function() {
                var e = this.floorActive - 1;
                if (0 > e) {
                    if (!this.options.loop) return;
                    e = this.nodeChildren.length - 1
                }
                this.scrollToFloor(e)
            },
            next: function() {
                var e = this.floorActive + 1;
                if (e > this.nodeChildren.length - 1) {
                    if (!this.options.loop) return;
                    e = 0
                }
                this.scrollToFloor(e)
            },
            _getAnimationSettings: function(e) {
                var t = this,
                    n = {
                        property: {},
                        callback: function() {
                            t._emitEvent("scrollEnd", t.floorActive, e), t._updateHash(e)
                        },
                        defaults: {}
                    },
                    o = {
                        property: {},
                        callback: function() {
                            t._emitEvent("scrollEnd", t.floorActive, e), t._updateHash(e)
                        }
                    };
                if (n.defaults.scrollTop = e * t.NH, n.defaults.scrollLeft = e * t.NW, "y" === t.options.direction) return n.property.scrollTop = e * t.NH, n;
                if ("x" === t.options.direction) return n.property.scrollLeft = e * t.NW, n;
                if (t.directionIsArray) {
                    var r = t.options.direction[e][t.AXIS_Y] * t.NH,
                        i = t.options.direction[e][t.AXIS_X] * t.NW;
                    if (n.defaults.scrollTop = r, n.defaults.scrollLeft = i, t.options.queued) {
                        {
                            var s = this.node.scrollLeft() === i;
                            this.node.scrollTop() === r
                        }
                        return "x" === t.options.queued && s ? (n.property.scrollTop = r, n) : (n.property.scrollLeft = i, o.property.scrollTop = r, n.callback = function() {
                            t.node.stop().animate(o.property, t.options.time, t.options.easing, o.callback)
                        }, n)
                    }
                    return n.property.scrollTop = r, n.property.scrollLeft = i, n
                }
                return n
            },
            scrollToDirection: function(e) {
                var t = this,
                    n = this.nodeChildren.eq(this.floorActive).data(this.dataAttributeMap[e]);
                if (n) return t.scrollToFloor(n);
                var o = "right" == e || "left" == e,
                    r = "down" == e || "up" == e;
                if (!("y" == t.options.direction && o || "x" == t.options.direction && r)) {
                    if ("y" == t.options.direction && "down" == e || "x" == t.options.direction && "right" == e) return t.next();
                    if ("y" == t.options.direction && "up" == e || "x" == t.options.direction && "left" == e) return t.prev();
                    if (t.directionIsArray) {
                        var i = t.floorMap[t.floorActive],
                            s = i[e];
                        if (l(s)) return t.scrollToFloor(s);
                        var c = i.closest[e];
                        if (a(t.options.jump) && l(c)) return t.scrollToFloor(c);
                        var u = i.furthest[e];
                        if (l(u) && (a(t.options.loop) || o && "loop-x" == t.options.loop || r && "loop-y" == t.options.loop)) return t.scrollToFloor(u);
                        var h = i.increment[e];
                        if (l(h) && ("increment" == t.options.loop || r && "increment-y" == t.options.loop || o && "increment-x" == t.options.loop)) return t.scrollToFloor(h);
                        if ("increment-x" == t.options.loop && o || "increment" == t.options.loop) {
                            if (t.floorActive == t.floorMap.furthest_x) return t.scrollToFloor(t.floorMap.closest_x);
                            if (t.floorActive == t.floorMap.closest_x) return t.scrollToFloor(t.floorMap.furthest_x)
                        }
                        if ("increment-y" == t.options.loop && r || "increment" == t.options.loop) {
                            if (t.floorActive == t.floorMap.furthest_y) return t.scrollToFloor(t.floorMap.closest_y);
                            if (t.floorActive == t.floorMap.closest_y) return t.scrollToFloor(t.floorMap.furthest_y)
                        }
                    }
                }
            },
            _getDirectFloorIndex: function(t, n, r) {
                var i = this,
                    s = [this.options.direction[n][this.AXIS_Y], this.options.direction[n][this.AXIS_X]];
                "right" == r && (s[this.AXIS_X] += 1), "left" == r && (s[this.AXIS_X] -= 1), "up" == r && (s[this.AXIS_Y] -= 1), "down" == r && (s[this.AXIS_Y] += 1);
                var a = !1;
                return e.each(t, function(e, t) {
                    return t[i.AXIS_Y] == s[i.AXIS_Y] && t[i.AXIS_X] == s[i.AXIS_X] ? (a = e, !1) : o
                }), a
            },
            _getAxisFromDirection: function(e) {
                var t, n = this;
                switch (e) {
                    case "up":
                    case "down":
                        t = n.AXIS_Y;
                        break;
                    case "left":
                    case "right":
                        t = n.AXIS_X
                }
                return t
            },
            _getClosestFloorIndex: function(t, n, o, r) {
                r = r || 0;
                var i = this._getAxisFromDirection(o),
                    s = t[n][i],
                    a = i == this.AXIS_Y ? this.AXIS_X : this.AXIS_Y,
                    l = !1,
                    c = !1;
                return e.each(t, function(e, u) {
                    u[a] == t[n][a] + r && (("right" == o || "down" == o) && u[i] > s || ("left" == o || "up" == o) && s > u[i]) && (!c || Math.abs(u[i] - s) < Math.abs(c[i])) && (l = e, c = u)
                }), l
            },
            _getFurthestFloorIndex: function(t, n, o, r) {
                r = r || 0;
                var i = this._getAxisFromDirection(o),
                    s = t[n][i],
                    a = i == this.AXIS_Y ? this.AXIS_X : this.AXIS_Y,
                    l = !1,
                    c = !1;
                return e.each(t, function(e, o) {
                    o[a] == t[n][a] + r && (!l || Math.abs(o[i] - s) > Math.abs(l[i] - s)) && (l = o, c = e)
                }), c
            },
            _generateFloorMap: function() {
                function t(e, t) {
                    var n = !1;
                    return jQuery.each(e, function(e, o) {
                        (n === !1 || n[t] < o[t]) && (n = o)
                    }), n
                }

                function n(e, t) {
                    var n = !1;
                    return jQuery.each(e, function(e, o) {
                        (n === !1 || n[t] > o[t]) && (n = o)
                    }), n
                }

                function o(e, t) {
                    return jQuery.grep(i, function(n) {
                        var o = n[t] == e[t];
                        return o
                    })
                }
                var r = this;
                this.floorMap = [];
                var i = jQuery.grep(r.options.direction, function(e, t) {
                    return r.nodeChildren.length > t
                });
                e.each(i, function(e) {
                    r.floorMap[e] = {
                        down: r._getDirectFloorIndex(i, e, "down"),
                        up: r._getDirectFloorIndex(i, e, "up"),
                        right: r._getDirectFloorIndex(i, e, "right"),
                        left: r._getDirectFloorIndex(i, e, "left"),
                        increment: {
                            down: r._getFurthestFloorIndex(i, e, "down", 1),
                            up: r._getFurthestFloorIndex(i, e, "up", -1),
                            right: r._getFurthestFloorIndex(i, e, "right", 1),
                            left: r._getFurthestFloorIndex(i, e, "left", -1)
                        },
                        closest: {
                            down: r._getClosestFloorIndex(i, e, "down"),
                            up: r._getClosestFloorIndex(i, e, "up"),
                            right: r._getClosestFloorIndex(i, e, "right"),
                            left: r._getClosestFloorIndex(i, e, "left")
                        },
                        furthest: {
                            down: r._getFurthestFloorIndex(i, e, "down"),
                            up: r._getFurthestFloorIndex(i, e, "up"),
                            right: r._getFurthestFloorIndex(i, e, "right"),
                            left: r._getFurthestFloorIndex(i, e, "left")
                        }
                    }
                });
                var s = t(i, r.AXIS_X),
                    a = o(s, r.AXIS_X),
                    l = t(a, r.AXIS_Y),
                    c = t(i, r.AXIS_Y),
                    u = o(c, r.AXIS_Y),
                    h = t(u, r.AXIS_X);
                r.floorMap.furthest_x = i.indexOf(h), r.floorMap.furthest_y = i.indexOf(l);
                var f = n(i, r.AXIS_X),
                    p = o(f, r.AXIS_X),
                    d = n(p, r.AXIS_Y),
                    g = n(i, r.AXIS_Y),
                    m = o(g, r.AXIS_Y),
                    v = n(m, r.AXIS_X);
                r.floorMap.closest_x = i.indexOf(v), r.floorMap.closest_y = i.indexOf(d)
            }
        }, e.fn[h] = function(t) {
            return this.each(function() {
                e.data(this, h) || e.data(this, h, new r(this, t))
            }), this
        }
    }(jQuery, window, document), window.PR_SHOULD_USE_CONTINUATION = !0, window.PR_TAB_WIDTH = 8, window.PR_normalizedHtml = window.PR = window.prettyPrintOne = window.prettyPrint = void 0, window._pr_isIE6 = function() {
        var e = navigator && navigator.userAgent && navigator.userAgent.match(/\bMSIE ([678])\./);
        return e = e ? +e[1] : !1, window._pr_isIE6 = function() {
            return e
        }, e
    },
    function() {
        function e(e) {
            return e.replace(_, "&amp;").replace(x, "&lt;").replace(A, "&gt;")
        }

        function t(n, o, r) {
            switch (n.nodeType) {
                case 1:
                    var i = n.tagName.toLowerCase();
                    o.push("<", i);
                    var s = n.attributes,
                        a = s.length;
                    if (a) {
                        if (r) {
                            for (var l = [], c = a; --c >= 0;) l[c] = s[c];
                            l.sort(function(e, t) {
                                return e.name < t.name ? -1 : e.name === t.name ? 0 : 1
                            }), s = l
                        }
                        for (c = 0; a > c; ++c) l = s[c], l.specified && o.push(" ", l.name.toLowerCase(), '="', l.value.replace(_, "&amp;").replace(x, "&lt;").replace(A, "&gt;").replace(I, "&quot;"), '"')
                    }
                    for (o.push(">"), s = n.firstChild; s; s = s.nextSibling) t(s, o, r);
                    (n.firstChild || !/^(?:br|link|img)$/.test(i)) && o.push("</", i, ">");
                    break;
                case 3:
                case 4:
                    o.push(e(n.nodeValue))
            }
        }

        function n(e) {
            function t(e) {
                if ("\\" !== e.charAt(0)) return e.charCodeAt(0);
                switch (e.charAt(1)) {
                    case "b":
                        return 8;
                    case "t":
                        return 9;
                    case "n":
                        return 10;
                    case "v":
                        return 11;
                    case "f":
                        return 12;
                    case "r":
                        return 13;
                    case "u":
                    case "x":
                        return parseInt(e.substring(2), 16) || e.charCodeAt(1);
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                        return parseInt(e.substring(1), 8);
                    default:
                        return e.charCodeAt(1)
                }
            }

            function n(e) {
                return 32 > e ? (16 > e ? "\\x0" : "\\x") + e.toString(16) : (e = String.fromCharCode(e), ("\\" === e || "-" === e || "[" === e || "]" === e) && (e = "\\" + e), e)
            }

            function o(e) {
                var o = e.substring(1, e.length - 1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g"));
                e = [];
                for (var r = [], i = "^" === o[0], s = i ? 1 : 0, a = o.length; a > s; ++s) {
                    var l = o[s];
                    switch (l) {
                        case "\\B":
                        case "\\b":
                        case "\\D":
                        case "\\d":
                        case "\\S":
                        case "\\s":
                        case "\\W":
                        case "\\w":
                            e.push(l);
                            continue
                    }
                    l = t(l);
                    var c;
                    a > s + 2 && "-" === o[s + 1] ? (c = t(o[s + 2]), s += 2) : c = l, r.push([l, c]), 65 > c || l > 122 || (65 > c || l > 90 || r.push([32 | Math.max(65, l), 32 | Math.min(c, 90)]), 97 > c || l > 122 || r.push([-33 & Math.max(97, l), -33 & Math.min(c, 122)]))
                }
                for (r.sort(function(e, t) {
                        return e[0] - t[0] || t[1] - e[1]
                    }), o = [], l = [0 / 0, 0 / 0], s = 0; r.length > s; ++s) a = r[s], a[0] <= l[1] + 1 ? l[1] = Math.max(l[1], a[1]) : o.push(l = a);
                for (r = ["["], i && r.push("^"), r.push.apply(r, e), s = 0; o.length > s; ++s) a = o[s], r.push(n(a[0])), a[1] > a[0] && (a[1] + 1 > a[0] && r.push("-"), r.push(n(a[1])));
                return r.push("]"), r.join("")
            }

            function r(e) {
                for (var t = e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), n = t.length, r = [], a = 0, l = 0; n > a; ++a) {
                    var c = t[a];
                    "(" === c ? ++l : "\\" === c.charAt(0) && (c = +c.substring(1)) && l >= c && (r[c] = -1)
                }
                for (a = 1; r.length > a; ++a) - 1 === r[a] && (r[a] = ++i);
                for (l = a = 0; n > a; ++a) c = t[a], "(" === c ? (++l, void 0 === r[l] && (t[a] = "(?:")) : "\\" === c.charAt(0) && (c = +c.substring(1)) && l >= c && (t[a] = "\\" + r[l]);
                for (l = a = 0; n > a; ++a) "^" === t[a] && "^" !== t[a + 1] && (t[a] = "");
                if (e.ignoreCase && s)
                    for (a = 0; n > a; ++a) c = t[a], e = c.charAt(0), c.length >= 2 && "[" === e ? t[a] = o(c) : "\\" !== e && (t[a] = c.replace(/[a-zA-Z]/g, function(e) {
                        return e = e.charCodeAt(0), "[" + String.fromCharCode(-33 & e, 32 | e) + "]"
                    }));
                return t.join("")
            }
            for (var i = 0, s = !1, a = !1, l = 0, c = e.length; c > l; ++l) {
                var u = e[l];
                if (u.ignoreCase) a = !0;
                else if (/[a-z]/i.test(u.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                    s = !0, a = !1;
                    break
                }
            }
            var h = [];
            for (l = 0, c = e.length; c > l; ++l) {
                if (u = e[l], u.global || u.multiline) throw Error("" + u);
                h.push("(?:" + r(u) + ")")
            }
            return RegExp(h.join("|"), a ? "gi" : "g")
        }

        function o(e) {
            var t = 0;
            return function(n) {
                for (var o = null, r = 0, i = 0, s = n.length; s > i; ++i) switch (n.charAt(i)) {
                    case "	":
                        for (o || (o = []), o.push(n.substring(r, i)), r = e - t % e, t += r; r >= 0; r -= 16) o.push("                ".substring(0, r));
                        r = i + 1;
                        break;
                    case "\n":
                        t = 0;
                        break;
                    default:
                        ++t
                }
                return o ? (o.push(n.substring(r)), o.join("")) : n
            }
        }

        function r(e, t, n, o) {
            t && (e = {
                source: t,
                c: e
            }, n(e), o.push.apply(o, e.d))
        }

        function i(e, t) {
            function o(e) {
                for (var n = e.c, l = [n, v], u = 0, h = e.source.match(i) || [], f = {}, p = 0, d = h.length; d > p; ++p) {
                    var g, m = h[p],
                        y = f[m],
                        b = void 0;
                    if ("string" == typeof y) g = !1;
                    else {
                        var _ = s[m.charAt(0)];
                        if (_) b = m.match(_[1]), y = _[0];
                        else {
                            for (g = 0; a > g; ++g)
                                if (_ = t[g], b = m.match(_[1])) {
                                    y = _[0];
                                    break
                                }
                            b || (y = v)
                        }!(g = y.length >= 5 && "lang-" === y.substring(0, 5)) || b && "string" == typeof b[1] || (g = !1, y = w), g || (f[m] = y)
                    }
                    if (_ = u, u += m.length, g) {
                        g = b[1];
                        var x = m.indexOf(g),
                            A = x + g.length;
                        b[2] && (A = m.length - b[2].length, x = A - g.length), y = y.substring(5), r(n + _, m.substring(0, x), o, l), r(n + _ + x, g, c(y, g), l), r(n + _ + A, m.substring(A), o, l)
                    } else l.push(n + _, y)
                }
                e.d = l
            }
            var i, s = {};
            (function() {
                for (var o = e.concat(t), r = [], a = {}, l = 0, c = o.length; c > l; ++l) {
                    var u = o[l],
                        h = u[3];
                    if (h)
                        for (var f = h.length; --f >= 0;) s[h.charAt(f)] = u;
                    u = u[1], h = "" + u, a.hasOwnProperty(h) || (r.push(u), a[h] = null)
                }
                r.push(/[\0-\uffff]/), i = n(r)
            })();
            var a = t.length;
            return o
        }

        function s(e) {
            var t = [],
                n = [];
            return e.tripleQuotedStrings ? t.push([h, /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : e.multiLineStrings ? t.push([h, /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : t.push([h, /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]), e.verbatimStrings && n.push([h, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]), e.hashComments && (e.cStyleComments ? (t.push([p, /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), n.push([h, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, null])) : t.push([p, /^#[^\r\n]*/, null, "#"])), e.cStyleComments && (n.push([p, /^\/\/[^\r\n]*/, null]), n.push([p, /^\/\*[\s\S]*?(?:\*\/|$)/, null])), e.regexLiterals && n.push(["lang-regex", RegExp("^" + b + "(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]), e = e.keywords.replace(/^\s+|\s+$/g, ""), e.length && n.push([f, RegExp("^(?:" + e.replace(/\s+/g, "|") + ")\\b"), null]), t.push([v, /^\s+/, null, " \r\n	 "]), n.push([g, /^@[a-z_$][a-z_$@0-9]*/i, null], [d, /^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/, null], [v, /^[a-z_$][a-z_$@0-9]*/i, null], [g, /^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i, null, "0123456789"], [m, /^.[^\s\w\.$@\'\"\`\/\#]*/, null]), i(t, n)
        }

        function a(t) {
            function n(t) {
                if (t > l) {
                    c && c !== u && (a.push("</span>"), c = null), !c && u && (c = u, a.push('<span class="', c, '">'));
                    var n = e(p(r.substring(l, t))).replace(w ? g : d, "$1&#160;");
                    w = v.test(n), a.push(n.replace(m, b)), l = t
                }
            }
            var r = t.source,
                i = t.g,
                s = t.d,
                a = [],
                l = 0,
                c = null,
                u = null,
                h = 0,
                f = 0,
                p = o(window.PR_TAB_WIDTH),
                d = /([\r\n ]) /g,
                g = /(^| ) /gm,
                m = /\r\n?|\n/g,
                v = /[ \r\n]$/,
                w = !0,
                y = window._pr_isIE6();
            y = y ? "PRE" === t.b.tagName ? 6 === y ? "&#160;\r\n" : 7 === y ? "&#160;<br>\r" : "&#160;\r" : "&#160;<br />" : "<br />";
            var b, _ = t.b.className.match(/\blinenums\b(?::(\d+))?/);
            if (_) {
                for (var x = [], A = 0; 10 > A; ++A) x[A] = y + '</li><li class="L' + A + '">';
                var I = _[1] && _[1].length ? _[1] - 1 : 0;
                a.push('<ol class="linenums"><li class="L', I % 10, '"'), I && a.push(' value="', I + 1, '"'), a.push(">"), b = function() {
                    var e = x[++I % 10];
                    return c ? "</span>" + e + '<span class="' + c + '">' : e
                }
            } else b = y;
            for (;;)
                if (i.length > h ? s.length > f ? i[h] <= s[f] : !0 : !1) n(i[h]), c && (a.push("</span>"), c = null), a.push(i[h + 1]), h += 2;
                else {
                    if (!(s.length > f)) break;
                    n(s[f]), u = s[f + 1], f += 2
                }
            n(r.length), c && a.push("</span>"), _ && a.push("</li></ol>"), t.a = a.join("")
        }

        function l(e, t) {
            for (var n = t.length; --n >= 0;) {
                var o = t[n];
                R.hasOwnProperty(o) ? "console" in window && console.warn("cannot override language handler %s", o) : R[o] = e
            }
        }

        function c(e, t) {
            return e && R.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), R[e]
        }

        function u(e) {
            var t = e.f,
                n = e.e;
            e.a = t;
            try {
                var o, r = t.match(X);
                t = [];
                var i = 0,
                    s = [];
                if (r)
                    for (var l = 0, u = r.length; u > l; ++l) {
                        var h = r[l];
                        if (h.length > 1 && "<" === h.charAt(0)) {
                            if (!O.test(h))
                                if (P.test(h)) t.push(h.substring(9, h.length - 3)), i += h.length - 12;
                                else if (D.test(h)) t.push("\n"), ++i;
                            else if (h.indexOf(y) >= 0 && h.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g, ' $1="$2$3$4"').match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/)) {
                                var f, p = h.match($)[2],
                                    d = 1;
                                f = l + 1;
                                e: for (; u > f; ++f) {
                                    var g = r[f].match($);
                                    if (g && g[2] === p)
                                        if ("/" === g[1]) {
                                            if (0 === --d) break e
                                        } else ++d
                                }
                                u > f ? (s.push(i, r.slice(l, f + 1).join("")), l = f) : s.push(i, h)
                            } else s.push(i, h)
                        } else {
                            var m;
                            d = h;
                            var v = d.indexOf("&");
                            if (0 > v) m = d;
                            else {
                                for (--v;
                                    (v = d.indexOf("&#", v + 1)) >= 0;) {
                                    var w = d.indexOf(";", v);
                                    if (w >= 0) {
                                        var b = d.substring(v + 3, w),
                                            _ = 10;
                                        b && "x" === b.charAt(0) && (b = b.substring(1), _ = 16);
                                        var x = parseInt(b, _);
                                        isNaN(x) || (d = d.substring(0, v) + String.fromCharCode(x) + d.substring(w + 1))
                                    }
                                }
                                m = d.replace(S, "<").replace(T, ">").replace(M, "'").replace(C, '"').replace(N, " ").replace(k, "&")
                            }
                            t.push(m), i += m.length
                        }
                    }
                o = {
                    source: t.join(""),
                    h: s
                };
                var A = o.source;
                e.source = A, e.c = 0, e.g = o.h, c(n, A)(e), a(e)
            } catch (I) {
                "console" in window && console.log(I && I.stack ? I.stack : I)
            }
        }
        var h = "str",
            f = "kwd",
            p = "com",
            d = "typ",
            g = "lit",
            m = "pun",
            v = "pln",
            w = "src",
            y = "nocode",
            b = function() {
                for (var e = ["!", "!=", "!==", "#", "%", "%=", "&", "&&", "&&=", "&=", "(", "*", "*=", "+=", ",", "-=", "->", "/", "/=", ":", "::", ";", "<", "<<", "<<=", "<=", "=", "==", "===", ">", ">=", ">>", ">>=", ">>>", ">>>=", "?", "@", "[", "^", "^=", "^^", "^^=", "{", "|", "|=", "||", "||=", "~", "break", "case", "continue", "delete", "do", "else", "finally", "instanceof", "return", "throw", "try", "typeof"], t = "(?:^^|[+-]", n = 0; e.length > n; ++n) t += "|" + e[n].replace(/([^=<>:&a-z])/g, "\\$1");
                return t += ")\\s*"
            }(),
            _ = /&/g,
            x = /</g,
            A = />/g,
            I = /\"/g,
            S = /&lt;/g,
            T = /&gt;/g,
            M = /&apos;/g,
            C = /&quot;/g,
            k = /&amp;/g,
            N = /&nbsp;/g,
            F = /[\r\n]/g,
            E = null,
            X = RegExp("[^<]+|<!--[\\s\\S]*?-->|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>|</?[a-zA-Z](?:[^>\"']|'[^']*'|\"[^\"]*\")*>|<", "g"),
            O = /^<\!--/,
            P = /^<!\[CDATA\[/,
            D = /^<br\b/i,
            $ = /^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/,
            L = s({
                keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp Luxury synchronized throws transient as base by checked decimal delegate descending event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self Luxury then true undef unless until when yield BEGIN END break continue do else for if return while case done elif esac eval fi function in local set then until ",
                hashComments: !0,
                cStyleComments: !0,
                multiLineStrings: !0,
                regexLiterals: !0
            }),
            R = {};
        l(L, ["default-code"]), l(i([], [
            [v, /^[^<?]+/],
            ["dec", /^<!\w[^>]*(?:>|$)/],
            [p, /^<\!--[\s\S]*?(?:-\->|$)/],
            ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/],
            ["lang-", /^<%([\s\S]+?)(?:%>|$)/],
            [m, /^(?:<[%?]|[%?]>)/],
            ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
            ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
            ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
            ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
        ]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), l(i([
            [v, /^[\s]+/, null, " 	\r\n"],
            ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]
        ], [
            ["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
            ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
            ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
            [m, /^[=<>\/]+/],
            ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i],
            ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i],
            ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i],
            ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i],
            ["lang-css", /^style\s*=\s*\'([^\']+)\'/i],
            ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]
        ]), ["in.tag"]), l(i([], [
            ["atv", /^[\s\S]+/]
        ]), ["uq.val"]), l(s({
            keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where ",
            hashComments: !0,
            cStyleComments: !0
        }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), l(s({
            keywords: "null true false"
        }), ["json"]), l(s({
            keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp Luxury synchronized throws transient as base by checked decimal delegate descending event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",
            hashComments: !0,
            cStyleComments: !0,
            verbatimStrings: !0
        }), ["cs"]), l(s({
            keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp Luxury synchronized throws transient ",
            cStyleComments: !0
        }), ["java"]), l(s({
            keywords: "break continue do else for if return while case done elif esac eval fi function in local set then until ",
            hashComments: !0,
            multiLineStrings: !0
        }), ["bsh", "csh", "sh"]), l(s({
            keywords: "break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",
            hashComments: !0,
            multiLineStrings: !0,
            tripleQuotedStrings: !0
        }), ["cv", "py"]), l(s({
            keywords: "caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["perl", "pl", "pm"]), l(s({
            keywords: "break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self Luxury then true undef unless until when yield BEGIN END ",
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["rb"]), l(s({
            keywords: "break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN ",
            cStyleComments: !0,
            regexLiterals: !0
        }), ["js"]), l(i([], [
            [h, /^[\s\S]+/]
        ]), ["regex"]), window.PR_normalizedHtml = t, window.prettyPrintOne = function(e, t) {
            var n = {
                f: e,
                e: t
            };
            return u(n), n.a
        }, window.prettyPrint = function(n) {
            function o() {
                for (var r = window.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : 1 / 0; i.length > f && r > c.now(); f++) {
                    var s = i[f];
                    if (s.className && s.className.indexOf("prettyprint") >= 0) {
                        var a = s.className.match(/\blang-(\w+)\b/);
                        a && (a = a[1]);
                        for (var l = !1, p = s.parentNode; p; p = p.parentNode)
                            if (("pre" === p.tagName || "code" === p.tagName || "xmp" === p.tagName) && p.className && p.className.indexOf("prettyprint") >= 0) {
                                l = !0;
                                break
                            }
                        if (!l) {
                            if (p = s, null === E && (l = document.createElement("PRE"), l.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />')), E = !/</.test(l.innerHTML)), E) {
                                if (l = p.innerHTML, "XMP" === p.tagName) l = e(l);
                                else {
                                    if (p = p, "PRE" === p.tagName) p = !0;
                                    else if (F.test(l)) {
                                        var d = "";
                                        p.currentStyle ? d = p.currentStyle.whiteSpace : window.getComputedStyle && (d = window.getComputedStyle(p, null).whiteSpace), p = !d || "pre" === d
                                    } else p = !0;
                                    p || (l = l.replace(/(<br\s*\/?>)[\r\n]+/g, "$1").replace(/(?:[\r\n]+[ \t]*)+/g, " "))
                                }
                                l = l
                            } else {
                                for (l = [], p = p.firstChild; p; p = p.nextSibling) t(p, l);
                                l = l.join("")
                            }
                            if (l = l.replace(/(?:\r\n?|\n)$/, ""), h = {
                                    f: l,
                                    e: a,
                                    b: s
                                }, u(h), s = h.a)
                                if (a = h.b, "XMP" === a.tagName) {
                                    for (l = document.createElement("PRE"), p = 0; a.attributes.length > p; ++p) d = a.attributes[p], d.specified && ("class" === d.name.toLowerCase() ? l.className = d.value : l.setAttribute(d.name, d.value));
                                    l.innerHTML = s, a.parentNode.replaceChild(l, a)
                                } else a.innerHTML = s
                        }
                    }
                }
                i.length > f ? setTimeout(o, 250) : n && n()
            }
            for (var r = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], i = [], s = 0; r.length > s; ++s)
                for (var a = 0, l = r[s].length; l > a; ++a) i.push(r[s][a]);
            r = null;
            var c = Date;
            c.now || (c = {
                now: function() {
                    return (new Date).getTime()
                }
            });
            var h, f = 0;
            o()
        }, window.PR = {
            combinePrefixPatterns: n,
            createSimpleLexer: i,
            registerLangHandler: l,
            sourceDecorator: s,
            PR_ATTRIB_NAME: "atn",
            PR_ATTRIB_VALUE: "atv",
            PR_COMMENT: p,
            PR_DECLARATION: "dec",
            PR_KEYWORD: f,
            PR_LITERAL: g,
            PR_NOCODE: y,
            PR_PLAIN: v,
            PR_PUNCTUATION: m,
            PR_SOURCE: w,
            PR_STRING: h,
            PR_TAG: "tag",
            PR_TYPE: d
        }
    }();
(function($) {
    "use strict";
    $.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        },
        translations: {
            en: null
        },
        init: function(selector, options) {
            $(selector).ajaxChimp(options)
        }
    };
    $.fn.ajaxChimp = function(options) {
        $(this).each(function(i, elem) {
            var form = $(elem);
            var email = form.find("input[type=email]");
            var label = form.find("label[for=" + email.attr("id") + "]");
            var settings = $.extend({
                url: form.attr("action"),
                language: "en"
            }, options);
            var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
            form.attr("novalidate", "true");
            email.attr("name", "EMAIL");
            form.submit(function() {
                var msg;

                function successCallback(resp) {
                    if (resp.result === "success") {
                        msg = "We have sent you a confirmation email";
                        label.removeClass("error").addClass("valid");
                        email.removeClass("error").addClass("valid")
                    } else {
                        email.removeClass("valid").addClass("error");
                        label.removeClass("valid").addClass("error");
                        var index = -1;
                        try {
                            var parts = resp.msg.split(" - ", 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1]
                                } else {
                                    index = -1;
                                    msg = resp.msg
                                }
                            }
                        } catch (e) {
                            index = -1;
                            msg = resp.msg
                        }
                    }
                    if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    }
                    label.html(msg);
                    label.show(2e3);
                    if (settings.callback) {
                        settings.callback(resp)
                    }
                }
                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function(index, item) {
                    data[item.name] = item.value
                });
                $.ajax({
                    url: url,
                    data: data,
                    success: successCallback,
                    dataType: "jsonp",
                    error: function(resp, text) {
                        console.log("mailchimp ajax submit error: " + text)
                    }
                });
                var submitMsg = "Submitting...";
                if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
                    submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
                }
                label.html(submitMsg).show(2e3);
                return false
            })
        });
        return this
    }
})(jQuery);
/*! form */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else {
        factory((typeof(jQuery) != "undefined") ? jQuery : window.Zepto)
    }
}(function($) {
    var feature = {};
    feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
    feature.formdata = window.FormData !== undefined;
    var hasProp = !!$.fn.prop;
    $.fn.attr2 = function() {
        if (!hasProp) {
            return this.attr.apply(this, arguments)
        }
        var val = this.prop.apply(this, arguments);
        if ((val && val.jquery) || typeof val === "string") {
            return val
        }
        return this.attr.apply(this, arguments)
    };
    $.fn.ajaxSubmit = function(options) {
        if (!this.length) {
            log("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        var method, action, url, $form = this;
        if (typeof options == "function") {
            options = {
                success: options
            }
        } else {
            if (options === undefined) {
                options = {}
            }
        }
        method = options.type || this.attr2("method");
        action = options.url || this.attr2("action");
        url = (typeof action === "string") ? $.trim(action) : "";
        url = url || window.location.href || "";
        if (url) {
            url = (url.match(/^([^#]+)/) || [])[1]
        }
        options = $.extend(true, {
            url: url,
            success: $.ajaxSettings.success,
            type: method || $.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, options);
        var veto = {};
        this.trigger("form-pre-serialize", [this, options, veto]);
        if (veto.veto) {
            log("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
            log("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var traditional = options.traditional;
        if (traditional === undefined) {
            traditional = $.ajaxSettings.traditional
        }
        var elements = [];
        var qx, a = this.formToArray(options.semantic, elements);
        if (options.data) {
            options.extraData = options.data;
            qx = $.param(options.data, traditional)
        }
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
            log("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [a, this, options, veto]);
        if (veto.veto) {
            log("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var q = $.param(a, traditional);
        if (qx) {
            q = (q ? (q + "&" + qx) : qx)
        }
        if (options.type.toUpperCase() == "GET") {
            options.url += (options.url.indexOf("?") >= 0 ? "&" : "?") + q;
            options.data = null
        } else {
            options.data = q
        }
        var callbacks = [];
        if (options.resetForm) {
            callbacks.push(function() {
                $form.resetForm()
            })
        }
        if (options.clearForm) {
            callbacks.push(function() {
                $form.clearForm(options.includeHidden)
            })
        }
        if (!options.dataType && options.target) {
            var oldSuccess = options.success || function() {};
            callbacks.push(function(data) {
                var fn = options.replaceTarget ? "replaceWith" : "html";
                $(options.target)[fn](data).each(oldSuccess, arguments)
            })
        } else {
            if (options.success) {
                callbacks.push(options.success)
            }
        }
        options.success = function(data, status, xhr) {
            var context = options.context || this;
            for (var i = 0, max = callbacks.length; i < max; i++) {
                callbacks[i].apply(context, [data, status, xhr || $form, $form])
            }
        };
        if (options.error) {
            var oldError = options.error;
            options.error = function(xhr, status, error) {
                var context = options.context || this;
                oldError.apply(context, [xhr, status, error, $form])
            }
        }
        if (options.complete) {
            var oldComplete = options.complete;
            options.complete = function(xhr, status) {
                var context = options.context || this;
                oldComplete.apply(context, [xhr, status, $form])
            }
        }
        var fileInputs = $("input[type=file]:enabled", this).filter(function() {
            return $(this).val() !== ""
        });
        var hasFileInputs = fileInputs.length > 0;
        var mp = "multipart/form-data";
        var multipart = ($form.attr("enctype") == mp || $form.attr("encoding") == mp);
        var fileAPI = feature.fileapi && feature.formdata;
        log("fileAPI :" + fileAPI);
        var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;
        var jqxhr;
        if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
            if (options.closeKeepAlive) {
                $.get(options.closeKeepAlive, function() {
                    jqxhr = fileUploadIframe(a)
                })
            } else {
                jqxhr = fileUploadIframe(a)
            }
        } else {
            if ((hasFileInputs || multipart) && fileAPI) {
                jqxhr = fileUploadXhr(a)
            } else {
                jqxhr = $.ajax(options)
            }
        }
        $form.removeData("jqxhr").data("jqxhr", jqxhr);
        for (var k = 0; k < elements.length; k++) {
            elements[k] = null
        }
        this.trigger("form-submit-notify", [this, options]);
        return this;

        function deepSerialize(extraData) {
            var serialized = $.param(extraData, options.traditional).split("&");
            var len = serialized.length;
            var result = [];
            var i, part;
            for (i = 0; i < len; i++) {
                serialized[i] = serialized[i].replace(/\+/g, " ");
                part = serialized[i].split("=");
                result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])])
            }
            return result
        }

        function fileUploadXhr(a) {
            var formdata = new FormData();
            for (var i = 0; i < a.length; i++) {
                formdata.append(a[i].name, a[i].value)
            }
            if (options.extraData) {
                var serializedData = deepSerialize(options.extraData);
                for (i = 0; i < serializedData.length; i++) {
                    if (serializedData[i]) {
                        formdata.append(serializedData[i][0], serializedData[i][1])
                    }
                }
            }
            options.data = null;
            var s = $.extend(true, {}, $.ajaxSettings, options, {
                contentType: false,
                processData: false,
                cache: false,
                type: method || "POST"
            });
            if (options.uploadProgress) {
                s.xhr = function() {
                    var xhr = $.ajaxSettings.xhr();
                    if (xhr.upload) {
                        xhr.upload.addEventListener("progress", function(event) {
                            var percent = 0;
                            var position = event.loaded || event.position;
                            var total = event.total;
                            if (event.lengthComputable) {
                                percent = Math.ceil(position / total * 100)
                            }
                            options.uploadProgress(event, position, total, percent)
                        }, false)
                    }
                    return xhr
                }
            }
            s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                if (options.formData) {
                    o.data = options.formData
                } else {
                    o.data = formdata
                }
                if (beforeSend) {
                    beforeSend.call(this, xhr, o)
                }
            };
            return $.ajax(s)
        }

        function fileUploadIframe(a) {
            var form = $form[0],
                el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
            var deferred = $.Deferred();
            deferred.abort = function(status) {
                xhr.abort(status)
            };
            if (a) {
                for (i = 0; i < elements.length; i++) {
                    el = $(elements[i]);
                    if (hasProp) {
                        el.prop("disabled", false)
                    } else {
                        el.removeAttr("disabled")
                    }
                }
            }
            s = $.extend(true, {}, $.ajaxSettings, options);
            s.context = s.context || s;
            id = "jqFormIO" + (new Date().getTime());
            if (s.iframeTarget) {
                $io = $(s.iframeTarget);
                n = $io.attr2("name");
                if (!n) {
                    $io.attr2("name", id)
                } else {
                    id = n
                }
            } else {
                $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />');
                $io.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })
            }
            io = $io[0];
            xhr = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(status) {
                    var e = (status === "timeout" ? "timeout" : "aborted");
                    log("aborting upload... " + e);
                    this.aborted = 1;
                    try {
                        if (io.contentWindow.document.execCommand) {
                            io.contentWindow.document.execCommand("Stop")
                        }
                    } catch (ignore) {}
                    $io.attr("src", s.iframeSrc);
                    xhr.error = e;
                    if (s.error) {
                        s.error.call(s.context, xhr, e, status)
                    }
                    if (g) {
                        $.event.trigger("ajaxError", [xhr, s, e])
                    }
                    if (s.complete) {
                        s.complete.call(s.context, xhr, e)
                    }
                }
            };
            g = s.global;
            if (g && 0 === $.active++) {
                $.event.trigger("ajaxStart")
            }
            if (g) {
                $.event.trigger("ajaxSend", [xhr, s])
            }
            if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
                if (s.global) {
                    $.active--
                }
                deferred.reject();
                return deferred
            }
            if (xhr.aborted) {
                deferred.reject();
                return deferred
            }
            sub = form.clk;
            if (sub) {
                n = sub.name;
                if (n && !sub.disabled) {
                    s.extraData = s.extraData || {};
                    s.extraData[n] = sub.value;
                    if (sub.type == "image") {
                        s.extraData[n + ".x"] = form.clk_x;
                        s.extraData[n + ".y"] = form.clk_y
                    }
                }
            }
            var CLIENT_TIMEOUT_ABORT = 1;
            var SERVER_ABORT = 2;

            function getDoc(frame) {
                var doc = null;
                try {
                    if (frame.contentWindow) {
                        doc = frame.contentWindow.document
                    }
                } catch (err) {
                    log("cannot get iframe.contentWindow document: " + err)
                }
                if (doc) {
                    return doc
                }
                try {
                    doc = frame.contentDocument ? frame.contentDocument : frame.document
                } catch (err) {
                    log("cannot get iframe.contentDocument: " + err);
                    doc = frame.document
                }
                return doc
            }
            var csrf_token = $("meta[name=csrf-token]").attr("content");
            var csrf_param = $("meta[name=csrf-param]").attr("content");
            if (csrf_param && csrf_token) {
                s.extraData = s.extraData || {};
                s.extraData[csrf_param] = csrf_token
            }

            function doSubmit() {
                var t = $form.attr2("target"),
                    a = $form.attr2("action"),
                    mp = "multipart/form-data",
                    et = $form.attr("enctype") || $form.attr("encoding") || mp;
                form.setAttribute("target", id);
                if (!method || /post/i.test(method)) {
                    form.setAttribute("method", "POST")
                }
                if (a != s.url) {
                    form.setAttribute("action", s.url)
                }
                if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
                    $form.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    })
                }
                if (s.timeout) {
                    timeoutHandle = setTimeout(function() {
                        timedOut = true;
                        cb(CLIENT_TIMEOUT_ABORT)
                    }, s.timeout)
                }

                function checkState() {
                    try {
                        var state = getDoc(io).readyState;
                        log("state = " + state);
                        if (state && state.toLowerCase() == "uninitialized") {
                            setTimeout(checkState, 50)
                        }
                    } catch (e) {
                        log("Server abort: ", e, " (", e.name, ")");
                        cb(SERVER_ABORT);
                        if (timeoutHandle) {
                            clearTimeout(timeoutHandle)
                        }
                        timeoutHandle = undefined
                    }
                }
                var extraInputs = [];
                try {
                    if (s.extraData) {
                        for (var n in s.extraData) {
                            if (s.extraData.hasOwnProperty(n)) {
                                if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty("name") && s.extraData[n].hasOwnProperty("value")) {
                                    extraInputs.push($('<input type="hidden" name="' + s.extraData[n].name + '">').val(s.extraData[n].value).appendTo(form)[0])
                                } else {
                                    extraInputs.push($('<input type="hidden" name="' + n + '">').val(s.extraData[n]).appendTo(form)[0])
                                }
                            }
                        }
                    }
                    if (!s.iframeTarget) {
                        $io.appendTo("body")
                    }
                    if (io.attachEvent) {
                        io.attachEvent("onload", cb)
                    } else {
                        io.addEventListener("load", cb, false)
                    }
                    setTimeout(checkState, 15);
                    try {
                        form.submit()
                    } catch (err) {
                        var submitFn = document.createElement("form").submit;
                        submitFn.apply(form)
                    }
                } finally {
                    form.setAttribute("action", a);
                    form.setAttribute("enctype", et);
                    if (t) {
                        form.setAttribute("target", t)
                    } else {
                        $form.removeAttr("target")
                    }
                    $(extraInputs).remove()
                }
            }
            if (s.forceSync) {
                doSubmit()
            } else {
                setTimeout(doSubmit, 10)
            }
            var data, doc, domCheckCount = 50,
                callbackProcessed;

            function cb(e) {
                if (xhr.aborted || callbackProcessed) {
                    return
                }
                doc = getDoc(io);
                if (!doc) {
                    log("cannot access response document");
                    e = SERVER_ABORT
                }
                if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                    xhr.abort("timeout");
                    deferred.reject(xhr, "timeout");
                    return
                } else {
                    if (e == SERVER_ABORT && xhr) {
                        xhr.abort("server abort");
                        deferred.reject(xhr, "error", "server abort");
                        return
                    }
                }
                if (!doc || doc.location.href == s.iframeSrc) {
                    if (!timedOut) {
                        return
                    }
                }
                if (io.detachEvent) {
                    io.detachEvent("onload", cb)
                } else {
                    io.removeEventListener("load", cb, false)
                }
                var status = "success",
                    errMsg;
                try {
                    if (timedOut) {
                        throw "timeout"
                    }
                    var isXml = s.dataType == "xml" || doc.XMLDocument || $.isXMLDoc(doc);
                    log("isXml=" + isXml);
                    if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                        if (--domCheckCount) {
                            log("requeing onLoad callback, DOM not available");
                            setTimeout(cb, 250);
                            return
                        }
                    }
                    var docRoot = doc.body ? doc.body : doc.documentElement;
                    xhr.responseText = docRoot ? docRoot.innerHTML : null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                    if (isXml) {
                        s.dataType = "xml"
                    }
                    xhr.getResponseHeader = function(header) {
                        var headers = {
                            "content-type": s.dataType
                        };
                        return headers[header.toLowerCase()]
                    };
                    if (docRoot) {
                        xhr.status = Number(docRoot.getAttribute("status")) || xhr.status;
                        xhr.statusText = docRoot.getAttribute("statusText") || xhr.statusText
                    }
                    var dt = (s.dataType || "").toLowerCase();
                    var scr = /(json|script|text)/.test(dt);
                    if (scr || s.textarea) {
                        var ta = doc.getElementsByTagName("textarea")[0];
                        if (ta) {
                            xhr.responseText = ta.value;
                            xhr.status = Number(ta.getAttribute("status")) || xhr.status;
                            xhr.statusText = ta.getAttribute("statusText") || xhr.statusText
                        } else {
                            if (scr) {
                                var pre = doc.getElementsByTagName("pre")[0];
                                var b = doc.getElementsByTagName("body")[0];
                                if (pre) {
                                    xhr.responseText = pre.textContent ? pre.textContent : pre.innerText
                                } else {
                                    if (b) {
                                        xhr.responseText = b.textContent ? b.textContent : b.innerText
                                    }
                                }
                            }
                        }
                    } else {
                        if (dt == "xml" && !xhr.responseXML && xhr.responseText) {
                            xhr.responseXML = toXml(xhr.responseText)
                        }
                    }
                    try {
                        data = httpData(xhr, dt, s)
                    } catch (err) {
                        status = "parsererror";
                        xhr.error = errMsg = (err || status)
                    }
                } catch (err) {
                    log("error caught: ", err);
                    status = "error";
                    xhr.error = errMsg = (err || status)
                }
                if (xhr.aborted) {
                    log("upload aborted");
                    status = null
                }
                if (xhr.status) {
                    status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? "success" : "error"
                }
                if (status === "success") {
                    if (s.success) {
                        s.success.call(s.context, data, "success", xhr)
                    }
                    deferred.resolve(xhr.responseText, "success", xhr);
                    if (g) {
                        $.event.trigger("ajaxSuccess", [xhr, s])
                    }
                } else {
                    if (status) {
                        if (errMsg === undefined) {
                            errMsg = xhr.statusText
                        }
                        if (s.error) {
                            s.error.call(s.context, xhr, status, errMsg)
                        }
                        deferred.reject(xhr, "error", errMsg);
                        if (g) {
                            $.event.trigger("ajaxError", [xhr, s, errMsg])
                        }
                    }
                }
                if (g) {
                    $.event.trigger("ajaxComplete", [xhr, s])
                }
                if (g && !--$.active) {
                    $.event.trigger("ajaxStop")
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, status)
                }
                callbackProcessed = true;
                if (s.timeout) {
                    clearTimeout(timeoutHandle)
                }
                setTimeout(function() {
                    if (!s.iframeTarget) {
                        $io.remove()
                    } else {
                        $io.attr("src", s.iframeSrc)
                    }
                    xhr.responseXML = null
                }, 100)
            }
            var toXml = $.parseXML || function(s, doc) {
                if (window.ActiveXObject) {
                    doc = new ActiveXObject("Microsoft.XMLDOM");
                    doc.async = "false";
                    doc.loadXML(s)
                } else {
                    doc = (new DOMParser()).parseFromString(s, "text/xml")
                }
                return (doc && doc.documentElement && doc.documentElement.nodeName != "parsererror") ? doc : null
            };
            var parseJSON = $.parseJSON || function(s) {
                return window["eval"]("(" + s + ")")
            };
            var httpData = function(xhr, type, s) {
                var ct = xhr.getResponseHeader("content-type") || "",
                    xml = type === "xml" || !type && ct.indexOf("xml") >= 0,
                    data = xml ? xhr.responseXML : xhr.responseText;
                if (xml && data.documentElement.nodeName === "parsererror") {
                    if ($.error) {
                        $.error("parsererror")
                    }
                }
                if (s && s.dataFilter) {
                    data = s.dataFilter(data, type)
                }
                if (typeof data === "string") {
                    if (type === "json" || !type && ct.indexOf("json") >= 0) {
                        data = parseJSON(data)
                    } else {
                        if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                            $.globalEval(data)
                        }
                    }
                }
                return data
            };
            return deferred
        }
    };
    $.fn.ajaxForm = function(options) {
        options = options || {};
        options.delegation = options.delegation && $.isFunction($.fn.on);
        if (!options.delegation && this.length === 0) {
            var o = {
                s: this.selector,
                c: this.context
            };
            if (!$.isReady && o.s) {
                log("DOM not ready, queuing ajaxForm");
                $(function() {
                    $(o.s, o.c).ajaxForm(options)
                });
                return this
            }
            log("terminating; zero elements found by selector" + ($.isReady ? "" : " (DOM not ready)"));
            return this
        }
        if (options.delegation) {
            $(document).off("submit.form-plugin", this.selector, doAjaxSubmit).off("click.form-plugin", this.selector, captureSubmittingElement).on("submit.form-plugin", this.selector, options, doAjaxSubmit).on("click.form-plugin", this.selector, options, captureSubmittingElement);
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", options, doAjaxSubmit).bind("click.form-plugin", options, captureSubmittingElement)
    };

    function doAjaxSubmit(e) {
        var options = e.data;
        if (!e.isDefaultPrevented()) {
            e.preventDefault();
            $(e.target).ajaxSubmit(options)
        }
    }

    function captureSubmittingElement(e) {
        var target = e.target;
        var $el = $(target);
        if (!($el.is("[type=submit],[type=image]"))) {
            var t = $el.closest("[type=submit]");
            if (t.length === 0) {
                return
            }
            target = t[0]
        }
        var form = this;
        form.clk = target;
        if (target.type == "image") {
            if (e.offsetX !== undefined) {
                form.clk_x = e.offsetX;
                form.clk_y = e.offsetY
            } else {
                if (typeof $.fn.offset == "function") {
                    var offset = $el.offset();
                    form.clk_x = e.pageX - offset.left;
                    form.clk_y = e.pageY - offset.top
                } else {
                    form.clk_x = e.pageX - target.offsetLeft;
                    form.clk_y = e.pageY - target.offsetTop
                }
            }
        }
        setTimeout(function() {
            form.clk = form.clk_x = form.clk_y = null
        }, 100)
    }
    $.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    $.fn.formToArray = function(semantic, elements) {
        var a = [];
        if (this.length === 0) {
            return a
        }
        var form = this[0];
        var formId = this.attr("id");
        var els = semantic ? form.getElementsByTagName("*") : form.elements;
        var els2;
        if (els && !/MSIE [678]/.test(navigator.userAgent)) {
            els = $(els).get()
        }
        if (formId) {
            els2 = $(":input[form=" + formId + "]").get();
            if (els2.length) {
                els = (els || []).concat(els2)
            }
        }
        if (!els || !els.length) {
            return a
        }
        var i, j, n, v, el, max, jmax;
        for (i = 0, max = els.length; i < max; i++) {
            el = els[i];
            n = el.name;
            if (!n || el.disabled) {
                continue
            }
            if (semantic && form.clk && el.type == "image") {
                if (form.clk == el) {
                    a.push({
                        name: n,
                        value: $(el).val(),
                        type: el.type
                    });
                    a.push({
                        name: n + ".x",
                        value: form.clk_x
                    }, {
                        name: n + ".y",
                        value: form.clk_y
                    })
                }
                continue
            }
            v = $.fieldValue(el, true);
            if (v && v.constructor == Array) {
                if (elements) {
                    elements.push(el)
                }
                for (j = 0, jmax = v.length; j < jmax; j++) {
                    a.push({
                        name: n,
                        value: v[j]
                    })
                }
            } else {
                if (feature.fileapi && el.type == "file") {
                    if (elements) {
                        elements.push(el)
                    }
                    var files = el.files;
                    if (files.length) {
                        for (j = 0; j < files.length; j++) {
                            a.push({
                                name: n,
                                value: files[j],
                                type: el.type
                            })
                        }
                    } else {
                        a.push({
                            name: n,
                            value: "",
                            type: el.type
                        })
                    }
                } else {
                    if (v !== null && typeof v != "undefined") {
                        if (elements) {
                            elements.push(el)
                        }
                        a.push({
                            name: n,
                            value: v,
                            type: el.type,
                            required: el.required
                        })
                    }
                }
            }
        }
        if (!semantic && form.clk) {
            var $input = $(form.clk),
                input = $input[0];
            n = input.name;
            if (n && !input.disabled && input.type == "image") {
                a.push({
                    name: n,
                    value: $input.val()
                });
                a.push({
                    name: n + ".x",
                    value: form.clk_x
                }, {
                    name: n + ".y",
                    value: form.clk_y
                })
            }
        }
        return a
    };
    $.fn.formSerialize = function(semantic) {
        return $.param(this.formToArray(semantic))
    };
    $.fn.fieldSerialize = function(successful) {
        var a = [];
        this.each(function() {
            var n = this.name;
            if (!n) {
                return
            }
            var v = $.fieldValue(this, successful);
            if (v && v.constructor == Array) {
                for (var i = 0, max = v.length; i < max; i++) {
                    a.push({
                        name: n,
                        value: v[i]
                    })
                }
            } else {
                if (v !== null && typeof v != "undefined") {
                    a.push({
                        name: this.name,
                        value: v
                    })
                }
            }
        });
        return $.param(a)
    };
    $.fn.fieldValue = function(successful) {
        for (var val = [], i = 0, max = this.length; i < max; i++) {
            var el = this[i];
            var v = $.fieldValue(el, successful);
            if (v === null || typeof v == "undefined" || (v.constructor == Array && !v.length)) {
                continue
            }
            if (v.constructor == Array) {
                $.merge(val, v)
            } else {
                val.push(v)
            }
        }
        return val
    };
    $.fieldValue = function(el, successful) {
        var n = el.name,
            t = el.type,
            tag = el.tagName.toLowerCase();
        if (successful === undefined) {
            successful = true
        }
        if (successful && (!n || el.disabled || t == "reset" || t == "button" || (t == "checkbox" || t == "radio") && !el.checked || (t == "submit" || t == "image") && el.form && el.form.clk != el || tag == "select" && el.selectedIndex == -1)) {
            return null
        }
        if (tag == "select") {
            var index = el.selectedIndex;
            if (index < 0) {
                return null
            }
            var a = [],
                ops = el.options;
            var one = (t == "select-one");
            var max = (one ? index + 1 : ops.length);
            for (var i = (one ? index : 0); i < max; i++) {
                var op = ops[i];
                if (op.selected) {
                    var v = op.value;
                    if (!v) {
                        v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value
                    }
                    if (one) {
                        return v
                    }
                    a.push(v)
                }
            }
            return a
        }
        return $(el).val()
    };
    $.fn.clearForm = function(includeHidden) {
        return this.each(function() {
            $("input,select,textarea", this).clearFields(includeHidden)
        })
    };
    $.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
        var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var t = this.type,
                tag = this.tagName.toLowerCase();
            if (re.test(t) || tag == "textarea") {
                this.value = ""
            } else {
                if (t == "checkbox" || t == "radio") {
                    this.checked = false
                } else {
                    if (tag == "select") {
                        this.selectedIndex = -1
                    } else {
                        if (t == "file") {
                            if (/MSIE/.test(navigator.userAgent)) {
                                $(this).replaceWith($(this).clone(true))
                            } else {
                                $(this).val("")
                            }
                        } else {
                            if (includeHidden) {
                                if ((includeHidden === true && /hidden/.test(t)) || (typeof includeHidden == "string" && $(this).is(includeHidden))) {
                                    this.value = ""
                                }
                            }
                        }
                    }
                }
            }
        })
    };
    $.fn.resetForm = function() {
        return this.each(function() {
            if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) {
                this.reset()
            }
        })
    };
    $.fn.enable = function(b) {
        if (b === undefined) {
            b = true
        }
        return this.each(function() {
            this.disabled = !b
        })
    };
    $.fn.selected = function(select) {
        if (select === undefined) {
            select = true
        }
        return this.each(function() {
            var t = this.type;
            if (t == "checkbox" || t == "radio") {
                this.checked = select
            } else {
                if (this.tagName.toLowerCase() == "option") {
                    var $sel = $(this).parent("select");
                    if (select && $sel[0] && $sel[0].type == "select-one") {
                        $sel.find("option").selected(false)
                    }
                    this.selected = select
                }
            }
        })
    };
    $.fn.ajaxSubmit.debug = false;

    function log() {
        if (!$.fn.ajaxSubmit.debug) {
            return
        }
        var msg = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        if (window.console && window.console.log) {
            window.console.log(msg)
        } else {
            if (window.opera && window.opera.postError) {
                window.opera.postError(msg)
            }
        }
    }
}));
/*! validator */
! function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.submit(function(b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            var b, c;
            return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function() {
                b = c.element(this) && b
            })), b
        },
        removeAttrs: function(b) {
            var c = {},
                d = this;
            return a.each(b.split(/\s/), function(a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                case "add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;
                case "remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                        i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                    }), i) : (delete e[j.name], f)
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                required: h
            }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                remote: h
            })), g
        }
    }), a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this[0].form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c = this.clean(b),
                    d = this.validationTargetFor(c),
                    e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) c++;
                return c
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d = a(b),
                    e = d.attr("type");
                return "radio" === e || "checkbox" === e ? a("input[name='" + d.attr("name") + "']:checked").val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function(a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c[0].toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a];
                return void 0
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function(b, c) {
                var d = this.defaultMessage(b, c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d = this.errorsFor(b);
                d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
            },
            errorsFor: function(b) {
                var c = this.idOrName(b);
                return this.errors().filter(function() {
                    return a(this).attr("for") === c
                })
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        attributeRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b);
            for (c in a.validator.methods) d = f.data("rule" + c[0].toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0,
                    f = 0,
                    g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                return e % 10 === 0
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function(b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
                    url: d
                } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function(d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    }), a.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    }
}(jQuery),
function(a) {
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    })
}(jQuery),
function(a) {
    a.extend(a.fn, {
        validateDelegate: function(b, c, d) {
            return this.bind(c, function(c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
}(jQuery);
/*! countdown */
! function(e) {
    function t(t, a) {
        this.element = t, this.settings = e.extend({}, s, a), this._defaults = s, this._name = n, this.targetDate = null, this.days = null, this.hours = null, this.minutes = null, this.seconds = null, this.milliseconds = null, this.deciseconds = null, this.intervalId = null, this.dim = 864e5, this.him = 36e5, this.iim = 6e4, this.seim = 1e3, this.deim = 100, this.wrapsExists = new Array, this.oldValues = new Array, this.changed = !1, this.init()
    }
    var n = "countEverest",
        s = {
            day: 19,
            month: 1,
            year: 2038,
            hour: 3,
            minute: 14,
            second: 8,
            millisecond: 0,
            daysWrapper: ".ce-days",
            hoursWrapper: ".ce-hours",
            minutesWrapper: ".ce-minutes",
            secondsWrapper: ".ce-seconds",
            decisecondsWrapper: ".ce-dseconds",
            millisecondsWrapper: ".ce-mseconds",
            daysLabelWrapper: ".ce-days-label",
            hoursLabelWrapper: ".ce-hours-label",
            minutesLabelWrapper: ".ce-minutes-label",
            secondsLabelWrapper: ".ce-seconds-label",
            decisecondsLabelWrapper: ".ce-dseconds-label",
            millisecondsLabelWrapper: ".ce-mseconds-label",
            daysLabel: "Days",
            dayLabel: "Day",
            hoursLabel: "Hours",
            hourLabel: "Hour",
            minutesLabel: "Minutes",
            minuteLabel: "Minute",
            secondsLabel: "Seconds",
            secondLabel: "Second",
            decisecondsLabel: "Deciseconds",
            decisecondLabel: "Decisecond",
            millisecondsLabel: "Milliseconds",
            millisecondLabel: "Millisecond",
            timeout: 1e3,
            highspeedTimeout: 4,
            leftHandZeros: !0,
            wrapDigits: !0,
            onInit: null,
            beforeCalculation: null,
            afterCalculation: null,
            onCalculation: null,
            onChange: null,
            onComplete: null
        };
    t.prototype = {
        init: function() {
            var t = this,
                n = t.element,
                s = t.settings;
            t.setTargetDate(new Date(s.year, s.month - 1, s.day, s.hour, s.minute, s.second)), (e(n).find(s.decisecondsWrapper).length > 0 || e(n).find(s.millisecondsWrapper).length > 0) && (s.timeout = s.highspeedTimeout), e.isFunction(s.onInit) && s.onInit.call(t), t.intervalId = setInterval(function() {
                t.calculate()
            }, t.timeout), t.calculate()
        },
        calculate: function() {
            var t = this,
                n = t.settings,
                s = t.getCurrentDate(),
                a = t.getTargetDate(),
                i = a - s,
                l = i,
                r = !1;
            e.isFunction(n.beforeCalculation) && n.beforeCalculation.call(t), t.changed = !1;
            var o = Math.floor(l / t.dim);
            l %= t.dim;
            var c = Math.floor(l / t.him);
            l %= t.him;
            var u = Math.floor(l / t.iim);
            l %= t.iim;
            var d = Math.floor(l / t.seim),
                m = l % t.seim,
                h = Math.floor(m / t.deim);
            o = t.naturalNum(o), c = t.naturalNum(c), u = t.naturalNum(u), d = t.naturalNum(d), m = t.naturalNum(m), h = t.naturalNum(h), t.days = o, t.hours = c, t.minutes = u, t.seconds = d, t.milliseconds = m, t.deciseconds = h, t.output(), Math.floor(i / n.timeout) <= 0 && (r = !0, (null != n.millisecondsWrapper || null != n.decisecondsWrapper) && (r = 0 >= i ? !0 : !1)), 1 == r && (e.isFunction(n.onComplete) && n.onComplete.call(t), clearInterval(t.intervalId)), e.isFunction(n.onCalculation) && n.onCalculation.call(t), e.isFunction(n.afterCalculation) && n.afterCalculation.call(t)
        },
        output: function() {
            var t = this,
                n = t.element,
                s = (e(n), t.settings),
                a = t.days,
                i = t.hours,
                l = t.minutes,
                r = t.seconds,
                o = t.deciseconds,
                c = t.milliseconds,
                u = s.dayLabel,
                d = s.hourLabel,
                m = s.minuteLabel,
                h = s.secondLabel,
                p = s.decisecondLabel,
                b = s.millisecondsLabel,
                g = 1 == a && null !== u ? u : s.daysLabel,
                f = 1 == i && null !== d ? d : s.hoursLabel,
                L = 1 == l && null !== m ? m : s.minutesLabel,
                w = 1 == r && null !== h ? h : s.secondsLabel,
                D = 1 == o && null !== p ? p : s.decisecondsLabel,
                W = 1 == c && null !== b ? b : s.millisecondsLabel;
            t.writeToDom(s.daysLabelWrapper, g), t.writeToDom(s.hoursLabelWrapper, f), t.writeToDom(s.minutesLabelWrapper, L), t.writeToDom(s.secondsLabelWrapper, w), t.writeToDom(s.decisecondsLabelWrapper, D), t.writeToDom(s.millisecondsLabelWrapper, W), 1 == s.leftHandZeros && (i = t.strPad(i, 2), l = t.strPad(l, 2), r = t.strPad(r, 2), c = t.strPad(c, 3)), 1 == s.wrapDigits && (a = t.wrapChars(a, "ce-days-digit"), i = t.wrapChars(i, "ce-hours-digit"), l = t.wrapChars(l, "ce-minutes-digit"), r = t.wrapChars(r, "ce-seconds-digit"), o = t.wrapChars(o, "ce-dseconds-digit"), c = t.wrapChars(c, "ce-mseconds-digit")), t.writeToDom(s.daysWrapper, a), t.writeToDom(s.hoursWrapper, i), t.writeToDom(s.minutesWrapper, l), t.writeToDom(s.secondsWrapper, r), t.writeToDom(s.decisecondsWrapper, o), t.writeToDom(s.millisecondsWrapper, c), e.isFunction(s.onChange) && 1 == t.changed && s.onChange.call(t)
        },
        setTargetDate: function(e) {
            this.targetDate = e
        },
        getTargetDate: function() {
            return this.targetDate
        },
        getCurrentDate: function() {
            return new Date
        },
        getOptions: function() {
            return this.settings
        },
        naturalNum: function(e) {
            return 0 > e ? 0 : e
        },
        strPad: function(e, t, n) {
            var s = e.toString();
            for (n || (n = "0"); s.length < t;) s = n + s;
            return s
        },
        wrapChars: function(e, t) {
            var n = "";
            e = e.toString();
            for (var s = 0; s < e.length; s++) n += '<span class="' + t + '">' + e[s] + "</span>";
            return n
        },
        writeToDom: function(t, n) {
            var s = this,
                a = e(s.element);
            s.settings, null == s.wrapsExists[t] && (s.wrapsExists[t] = a.find(t).length > 0 ? !0 : !1), s.oldValues[t] != n && s.wrapsExists[t] && (s.oldValues[t] = n, a.find(t).html(n), s.changed = !0)
        }
    }, e.fn[n] = function(s) {
        return this.each(function() {
            var a = "plugin_";
            e.data(this, a + n) || e.data(this, a + n, new t(this, s))
        })
    }
}(jQuery, window, document);
/*! slider */
(function(window, $) {
    var Luxuryslides, plugin = 'Luxuryslides';
    Luxuryslides = function(el, options) {
        this.options = $.extend({
            play: false,
            animation_speed: 600,
            animation_easing: 'swing',
            animation: 'slide',
            inherit_width_from: window,
            inherit_height_from: window,
            usekeyboard: true,
            pagination: true,
            hashchange: false,
            scrollable: true,
            elements: {
                preserve: '.preserve',
                nav: '.slides-navigation',
                container: '.slides-container',
                pagination: '.slides-pagination'
            }
        }, options);
        var that = this,
            $control = $('<div>', {
                "class": 'slides-control'
            }),
            multiplier = 1;
        this.$el = $(el);
        this.$container = this.$el.find(this.options.elements.container);
        var initialize = function() {
            multiplier = that._findMultiplier();
            that.$el.on('click', that.options.elements.nav + " a", function(e) {
                e.preventDefault();
                that.stop();
                if ($(this).hasClass('next')) {
                    that.animate('next', function() {
                        that.start();
                    });
                } else {
                    that.animate('prev', function() {
                        that.start();
                    });
                }
            });
            $(document).on('keyup', function(e) {
                if (that.options.usekeyboard) {
                    if (e.keyCode === 37) {
                        that.animate('prev');
                    }
                    if (e.keyCode === 39) {
                        that.animate('next');
                    }
                }
            });
            $(window).on('resize', function() {
                setTimeout(function() {
                    var $children = that.$container.children();
                    that.width = that._findWidth();
                    that.height = that._findHeight();
                    $children.css({
                        width: that.width,
                        left: that.width
                    });
                    that.css.containers();
                    that.css.images();
                }, 10);
            });
            if (that.options.hashchange) {
                $(window).on('hashchange', function() {
                    var hash = that._parseHash(),
                        index;
                    index = that._upcomingSlide(hash);
                    if (index >= 0 && index !== that.current) {
                        that.animate(index);
                    }
                });
            }
            that.pagination._events();
            that.start();
            return that;
        };
        var css = {
            containers: function() {
                if (that.init) {
                    that.$el.css({
                        height: that.height
                    });
                    that.$control.css({
                        width: that.width * multiplier,
                        left: -that.width
                    });
                    that.$container.css({});
                } else {
                    $('body').css({
                        margin: 0
                    });
                    that.$el.css({
                        position: 'relative',
                        overflow: 'hidden',
                        width: '100%',
                        height: that.height
                    });
                    that.$control.css({
                        position: 'relative',
                        transform: 'translate3d(0)',
                        height: '100%',
                        width: that.width * multiplier,
                        left: -that.width
                    });
                    that.$container.css({
                        display: 'none',
                        margin: '0',
                        padding: '0',
                        listStyle: 'none',
                        position: 'relative',
                        height: '100%'
                    });
                }
                if (that.size() === 1) {
                    that.$el.find(that.options.elements.nav).hide();
                }
            },
            images: function() {
                var $images = that.$container.find('img').not(that.options.elements.preserve)
                $images.removeAttr('width').removeAttr('height').css({
                    "-webkit-backface-visibility": 'hidden',
                    "-ms-interpolation-mode": 'bicubic',
                    "position": 'absolute',
                    "left": '0',
                    "top": '0',
                    "z-index": '-1',
                    "max-width": 'none'
                });
                $images.each(function() {
                    var image_aspect_ratio = that.image._aspectRatio(this),
                        image = this;
                    if (!$.data(this, 'processed')) {
                        var img = new Image();
                        img.onload = function() {
                            that.image._scale(image, image_aspect_ratio);
                            that.image._center(image, image_aspect_ratio);
                            $.data(image, 'processed', true);
                        };
                        img.src = this.src;
                    } else {
                        that.image._scale(image, image_aspect_ratio);
                        that.image._center(image, image_aspect_ratio);
                    }
                });
            },
            children: function() {
                var $children = that.$container.children();
                if ($children.is('img')) {
                    $children.each(function() {
                        if ($(this).is('img')) {
                            $(this).wrap('<div>');
                            var id = $(this).attr('id');
                            $(this).removeAttr('id');
                            $(this).parent().attr('id', id);
                        }
                    });
                    $children = that.$container.children();
                }
                if (!that.init) {
                    $children.css({
                        display: 'none',
                        left: that.width * 2
                    });
                }
                $children.css({
                    position: 'absolute',
                    overflow: 'hidden',
                    height: '100%',
                    width: that.width,
                    top: 0,
                    zIndex: 0
                });
            }
        }
        var fx = {
            slide: function(orientation, complete) {
                var $children = that.$container.children(),
                    $target = $children.eq(orientation.upcoming_slide);
                $target.css({
                    left: orientation.upcoming_position,
                    display: 'block'
                });
                that.$control.animate({
                    left: orientation.offset
                }, that.options.animation_speed, that.options.animation_easing, function() {
                    if (that.size() > 1) {
                        that.$control.css({
                            left: -that.width
                        });
                        $children.eq(orientation.upcoming_slide).css({
                            left: that.width,
                            zIndex: 2
                        });
                        if (orientation.outgoing_slide >= 0) {
                            $children.eq(orientation.outgoing_slide).css({
                                left: that.width,
                                display: 'none',
                                zIndex: 0
                            });
                        }
                    }
                    complete();
                });
            },
            fade: function(orientation, complete) {
                var that = this,
                    $children = that.$container.children(),
                    $outgoing = $children.eq(orientation.outgoing_slide),
                    $target = $children.eq(orientation.upcoming_slide);
                $target.css({
                    left: this.width,
                    opacity: 0,
                    display: 'block'
                }).animate({
                    opacity: 1
                }, that.options.animation_speed, that.options.animation_easing);
                if (orientation.outgoing_slide >= 0) {
                    $outgoing.animate({
                        opacity: 0
                    }, that.options.animation_speed, that.options.animation_easing, function() {
                        if (that.size() > 1) {
                            $children.eq(orientation.upcoming_slide).css({
                                zIndex: 2
                            });
                            if (orientation.outgoing_slide >= 0) {
                                $children.eq(orientation.outgoing_slide).css({
                                    opacity: 1,
                                    display: 'none',
                                    zIndex: 0
                                });
                            }
                        }
                        complete();
                    });
                } else {
                    $target.css({
                        zIndex: 2
                    });
                    complete();
                }
            }
        };
        fx = $.extend(fx, $.fn.Luxuryslides.fx);
        var image = {
            _centerY: function(image) {
                var $img = $(image);
                $img.css({
                    top: (that.height - $img.height()) / 2
                });
            },
            _centerX: function(image) {
                var $img = $(image);
                $img.css({
                    left: (that.width - $img.width()) / 2
                });
            },
            _center: function(image) {
                that.image._centerX(image);
                that.image._centerY(image);
            },
            _aspectRatio: function(image) {
                if (!image.naturalHeight && !image.naturalWidth) {
                    var img = new Image();
                    img.src = image.src;
                    image.naturalHeight = img.height;
                    image.naturalWidth = img.width;
                }
                return image.naturalHeight / image.naturalWidth;
            },
            _scale: function(image, image_aspect_ratio) {
                image_aspect_ratio = image_aspect_ratio || that.image._aspectRatio(image);
                var container_aspect_ratio = that.height / that.width,
                    $img = $(image);
                if (container_aspect_ratio > image_aspect_ratio) {
                    $img.css({
                        height: that.height,
                        width: that.height / image_aspect_ratio
                    });
                } else {
                    $img.css({
                        height: that.width * image_aspect_ratio,
                        width: that.width
                    });
                }
            }
        };
        var pagination = {
            _setCurrent: function(i) {
                if (!that.$pagination) {
                    return;
                }
                var $pagination_children = that.$pagination.children();
                $pagination_children.removeClass('current');
                $pagination_children.eq(i).addClass('current');
            },
            _addItem: function(i) {
                var slide_number = i + 1,
                    href = slide_number,
                    $slide = that.$container.children().eq(i),
                    slide_id = $slide.attr('id');
                if (slide_id) {
                    href = slide_id;
                }
                var $item = $("<a>", {
                    'href': "#" + href,
                    'text': href
                });
                $item.appendTo(that.$pagination);
            },
            _setup: function() {
                if (!that.options.pagination || that.size() === 1) {
                    return;
                }
                var $pagination = $("<nav>", {
                    'class': that.options.elements.pagination.replace(/^\./, '')
                });
                that.$pagination = $pagination.appendTo(that.$el);
                for (var i = 0; i < that.size(); i++) {
                    that.pagination._addItem(i);
                }
            },
            _events: function() {
                that.$el.on('click', that.options.elements.pagination + ' a', function(e) {
                    e.preventDefault();
                    var hash = that._parseHash(this.hash),
                        index;
                    index = that._upcomingSlide(hash, true);
                    if (index !== that.current) {
                        that.animate(index, function() {
                            that.start();
                        });
                    }
                });
            }
        };
        this.css = css;
        this.image = image;
        this.pagination = pagination;
        this.fx = fx;
        this.animation = this.fx[this.options.animation];
        this.$control = this.$container.wrap($control).parent('.slides-control');
        that._findPositions();
        that.width = that._findWidth();
        that.height = that._findHeight();
        this.css.children();
        this.css.containers();
        this.css.images();
        this.pagination._setup();
        return initialize();
    };
    Luxuryslides.prototype = {
        _findWidth: function() {
            return $(this.options.inherit_width_from).width();
        },
        _findHeight: function() {
            return $(this.options.inherit_height_from).height();
        },
        _findMultiplier: function() {
            return this.size() === 1 ? 1 : 3;
        },
        _upcomingSlide: function(direction, from_hash_change) {
            if (from_hash_change && !isNaN(direction)) {
                direction = direction - 1;
            }
            if ((/next/).test(direction)) {
                return this._nextInDom();
            } else if ((/prev/).test(direction)) {
                return this._prevInDom();
            } else if ((/\d/).test(direction)) {
                return +direction;
            } else if (direction && (/\w/).test(direction)) {
                var index = this._findSlideById(direction);
                if (index >= 0) {
                    return index;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        },
        _findSlideById: function(id) {
            return this.$container.find('#' + id).index();
        },
        _findPositions: function(current, thisRef) {
            thisRef = thisRef || this;
            if (current === undefined) {
                current = -1;
            }
            thisRef.current = current;
            thisRef.next = thisRef._nextInDom();
            thisRef.prev = thisRef._prevInDom();
        },
        _nextInDom: function() {
            var index = this.current + 1;
            if (index === this.size()) {
                index = 0;
            }
            return index;
        },
        _prevInDom: function() {
            var index = this.current - 1;
            if (index < 0) {
                index = this.size() - 1;
            }
            return index;
        },
        _parseHash: function(hash) {
            hash = hash || window.location.hash;
            hash = hash.replace(/^#/, '');
            if (hash && !isNaN(+hash)) {
                hash = +hash;
            }
            return hash;
        },
        size: function() {
            return this.$container.children().length;
        },
        destroy: function() {
            return this.$el.removeData();
        },
        update: function() {
            this.css.children();
            this.css.containers();
            this.css.images();
            this.pagination._addItem(this.size())
            this._findPositions(this.current);
            this.$el.trigger('updated.slides');
        },
        stop: function() {
            clearInterval(this.play_id);
            delete this.play_id;
            this.$el.trigger('stopped.slides');
        },
        start: function() {
            var that = this;
            if (that.options.hashchange) {
                $(window).trigger('hashchange');
            } else {
                this.animate();
            }
            if (this.options.play) {
                if (this.play_id) {
                    this.stop();
                }
                this.play_id = setInterval(function() {
                    that.animate();
                }, this.options.play);
            }
            this.$el.trigger('started.slides');
        },
        animate: function(direction, userCallback) {
            var that = this,
                orientation = {};
            if (this.animating) {
                return;
            }
            this.animating = true;
            if (direction === undefined) {
                direction = 'next';
            }
            orientation.upcoming_slide = this._upcomingSlide(direction);
            if (orientation.upcoming_slide >= this.size()) {
                return;
            }
            orientation.outgoing_slide = this.current;
            orientation.upcoming_position = this.width * 2;
            orientation.offset = -orientation.upcoming_position;
            if (direction === 'prev' || direction < orientation.outgoing_slide) {
                orientation.upcoming_position = 0;
                orientation.offset = 0;
            }
            if (that.size() > 1) {
                that.pagination._setCurrent(orientation.upcoming_slide);
            }
            if (that.options.hashchange) {
                var hash = orientation.upcoming_slide + 1,
                    id = that.$container.children(':eq(' + orientation.upcoming_slide + ')').attr('id');
                if (id) {
                    window.location.hash = id;
                } else {
                    window.location.hash = hash;
                }
            }
            if (that.size() === 1) {
                that.stop();
                that.options.play = 0;
                that.options.animation_speed = 0;
                orientation.upcoming_slide = 0;
                orientation.outgoing_slide = -1;
            }
            that.$el.trigger('animating.slides', [orientation]);
            that.animation(orientation, function() {
                that._findPositions(orientation.upcoming_slide, that);
                if (typeof userCallback === 'function') {
                    userCallback();
                }
                that.animating = false;
                that.$el.trigger('animated.slides');
                if (!that.init) {
                    that.$el.trigger('init.slides');
                    that.init = true;
                    that.$container.fadeIn('fast');
                }
            });
        }
    };
    $.fn[plugin] = function(option, args) {
        var result = [];
        this.each(function() {
            var $this, data, options;
            $this = $(this);
            data = $this.data(plugin);
            options = typeof option === 'object' && option;
            if (!data) {
                result = $this.data(plugin, (data = new Luxuryslides(this, options)));
            }
            if (typeof option === "string") {
                result = data[option];
                if (typeof result === 'function') {
                    return result = result.call(data, args);
                }
            }
        });
        return result;
    };
    $.fn[plugin].fx = {};
})(this, jQuery);
/*! slider2 */
(function($) {
    "use strict";
    if (!$) return;
    var Phoenix = function() {
        var _ = this;
        this.setup = function(element, options) {
            this.element = $(element);
            this.options = options;
            this.interval = null;
            this.ashes = this.element.children("div");
            this.total = this.ashes.length;
            this._static = this.ashes.length == 1;
            this.current = this.ashes.length - 1;
            this.elevation = null;
            this._defaults = {
                delay: 10000,
                speed: 400,
                height: null,
                fullscreen: true,
                dots: true,
                keys: true,
                complete: function(index, currentElement, prevElement) {}
            };
            this.init();
        };
        this.init = function() {
            var originalMethod = jQuery.fn.transition || jQuery.fn.animate;
            jQuery.fn.spitFire = function() {
                return originalMethod.apply(this, arguments);
            }
            this._defaults = $.extend(this._defaults, this.options);
            var ash, pic;
            $(window).on('resize', function() {
                _.resize();
            }).trigger('resize');
            this._defaults.dots && !_._static && this.dots();
            this._defaults.keys && !_._static && $(document).keydown(this.keys);
            this.ashes.each(function(index) {
                ash = $(this);
                pic = ash.children("img");
                ash.css({
                    'background-image': 'url(' + pic.attr('src') + ')',
                });
                if (index == 0) ash.css('z-index', 4);
                pic.remove();
            });
            !_._static && $().swiperight && $().swipeleft && _.element.swipeleft(_.next) && _.element.swiperight(_.prev);
            this.next();
            !_._static && this.play();
        };
        this.resize = function() {
            this.computeTallness();
            this.element.css({
                'height': (this._defaults.fullscreen === true ? $(window).height() : _.elevation) + 'px'
            });
        };
        this.computeTallness = function() {
            if (this._defaults.fullscreen === true) {
                _.elevation = $(window).height();
            } else {
                if ((typeof _._defaults.height).toLowerCase() === 'string') {
                    if (_._defaults.height.slice(-1) === '%') {
                        _.elevation = $(window).height() * (_._defaults.height.substr(0, _._defaults.height.length - 1) / 100);
                    }
                } else if ((typeof _._defaults.height).toLowerCase() === 'number') {
                    _.elevation = _._defaults.height;
                } else {
                    _.elevation = _.element.height() == 0 ? $(window).height() : _.element.height();
                }
            }
        };
        this.dots = function() {
            var html = '<div class="container-dots-wrapper"><div class="container-dots-inner"><ol class="dots">';
            $.each(this.ashes, function(index) {
                html += '<li class="dot' + (index < 1 ? ' active' : '') + '">' + (index + 1) + '</li>';
            });
            html += '</ol></div></div>';
            this.element.append(html).find('.dot').click(function() {
                _.move($(this).index(), true);
            });
        }
        this.index = function() {
            return _.current;
        }
        this.destroy = function() {
            this.element.removeData();
        };
        this.play = function() {
            _.interval = setInterval(function() {
                _.next();
            }, _._defaults.delay);
            return _;
        };
        this.stop = function() {
            _.interval = clearInterval(_.interval);
            return _;
        };
        this.keys = function(e) {
            var key = e.which;
            var map = {
                37: _.prev,
                39: _.next,
            };
            if ($.isFunction(map[key])) {
                map[key](true);
            }
        };
        this.next = function(f) {
            return _.move(_.current + 1, f);
        };
        this.prev = function(f) {
            return _.move(_.current - 1, f);
        };
        this.move = function(index, f) {
            if (index == _.current) return;
            var newIndex, oldIndex, oldIndex = _.current,
                oldElement = this.ashes.eq(_.current),
                newElement;
            if (!this.ashes.eq(index).length) index = 0;
            if (index < 0) index = (this.ashes.length - 1);
            _.current = index;
            newIndex = _.current;
            newElement = this.ashes.eq(newIndex);
            newElement.css('opacity', 1);
            if (_._static) return;
            _.element.find('.dot:eq(' + index + ')').addClass('active').siblings().removeClass('active');
            oldElement.spitFire({
                'opacity': 0,
                'duration': this._defaults.speed
            }, function() {
                oldElement.css('z-index', 'auto');
                newElement.css('z-index', 4);
                if (f) _.stop().play();
                if (typeof(_._defaults.complete) === 'function') _._defaults.complete(newIndex, newElement, oldElement);
            });
        }
        this.getRandomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };
    return $.fn.phoenix = function(o) {
        var len = this.length;
        return $(this.each(function(index) {
            var me = $(this),
                instance = (new Phoenix).setup(me, o);
            me.data('phoenix' + (len > 1 ? '-' + (index + 1) : ''), instance);
        })).data('phoenix');
    };
})(jQuery);
/*! kenburn */
! function(e) {
    function t(e) {
        var t = e.length,
            r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e, t)
        };
        $.isWindow = function(e) {
            return null != e && e == e.window
        }, $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }, $.isArray = Array.isArray || function(e) {
            return "array" === $.type(e)
        }, $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            for (t in e);
            return void 0 === t || n.call(e, t)
        }, $.each = function(e, r, a) {
            var n, o = 0,
                i = e.length,
                s = t(e);
            if (a) {
                if (s)
                    for (; i > o && (n = r.apply(e[o], a), n !== !1); o++);
                else
                    for (o in e)
                        if (n = r.apply(e[o], a), n === !1) break
            } else if (s)
                for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++);
            else
                for (o in e)
                    if (n = r.call(e[o], o, e[o]), n === !1) break;
            return e
        }, $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando],
                    o = n && r[n];
                if (void 0 === t) return o;
                if (o && t in o) return o[t]
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a
            }
        }, $.removeData = function(e, t) {
            var a = e[$.expando],
                n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t]
            })
        }, $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), s === l && (i = this, s--); l > s; s++)
                if (null != (n = arguments[s]))
                    for (a in n) e = i[a], r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i
        }, $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? ! function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a;) e[n++] = t[a++];
                    if (r !== r)
                        for (; void 0 !== t[a];) e[n++] = t[a++];
                    return e.length = n, e
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || []
            }
        }, $.dequeue = function(e, t) {
            $.each(e.nodeType ? [e] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t),
                    n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), n.call(r, function() {
                    $.dequeue(r, t)
                }))
            })
        }, $.fn = $.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    r = this.offset(),
                    a = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: r.top - a.top,
                    left: r.left - a.left
                }
            }
        };
        var r = {};
        $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {
            Utilities: $
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];
                n && a.push(n)
            }
            return a
        }

        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
        }

        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t
        }

        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function i(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e
            }

            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t)
            }

            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o
                }
                return r
            }

            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a)
            }

            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i
            }

            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]),
                    s = r + i * x,
                    l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x)
            }

            function g() {
                V = !0, (e != r || a != n) && p()
            }
            var m = 4,
                y = .001,
                h = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P)
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b),
                V = !1,
                C = function(t) {
                    return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n)
                };
            C.getControlPoints = function() {
                return [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                }]
            };
            var T = "generateBezier(" + [e, r, a, n] + ")";
            return C.toString = function() {
                return T
            }, C
        }

        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r
        }

        function c(e) {
            if (e)
                for (var t = (new Date).getTime(), r = 0, n = v.State.calls.length; n > r; r++)
                    if (v.State.calls[r]) {
                        var o = v.State.calls[r],
                            s = o[0],
                            l = o[2],
                            u = o[3],
                            f = !!u;
                        u || (u = v.State.calls[r][3] = t - 16);
                        for (var d = Math.min((t - u) / l.duration, 1), m = 0, y = s.length; y > m; m++) {
                            var h = s[m],
                                b = h.element;
                            if (i(b)) {
                                var S = !1;
                                if (l.display !== a && null !== l.display && "none" !== l.display) {
                                    if ("flex" === l.display) {
                                        var w = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        $.each(w, function(e, t) {
                                            x.setPropertyValue(b, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(b, "display", l.display)
                                }
                                l.visibility !== a && "hidden" !== l.visibility && x.setPropertyValue(b, "visibility", l.visibility);
                                for (var V in h)
                                    if ("element" !== V) {
                                        var C = h[V],
                                            T, k = g.isString(C.easing) ? v.Easings[C.easing] : C.easing;
                                        if (1 === d) T = C.endValue;
                                        else if (T = C.startValue + (C.endValue - C.startValue) * k(d), !f && T === C.currentValue) continue;
                                        if (C.currentValue = T, x.Hooks.registered[V]) {
                                            var A = x.Hooks.getRoot(V),
                                                F = i(b).rootPropertyValueCache[A];
                                            F && (C.rootPropertyValue = F)
                                        }
                                        var E = x.setPropertyValue(b, V, C.currentValue + (0 === parseFloat(T) ? "" : C.unitType), C.rootPropertyValue, C.scrollData);
                                        x.Hooks.registered[V] && (i(b).rootPropertyValueCache[A] = x.Normalizations.registered[A] ? x.Normalizations.registered[A]("extract", null, E[1]) : E[1]), "transform" === E[0] && (S = !0)
                                    }
                                l.mobileHA && i(b).transformCache.translate3d === a && (i(b).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && x.flushTransformCache(b)
                            }
                        }
                        l.display !== a && "none" !== l.display && (v.State.calls[r][2].display = !1), l.visibility !== a && "hidden" !== l.visibility && (v.State.calls[r][2].visibility = !1), l.progress && l.progress.call(o[1], o[1], d, Math.max(0, u + l.duration - t), u), 1 === d && p(r)
                    }
            v.State.isTicking && P(c)
        }

        function p(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, delete i(p).transformCache[t])
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), x.Values.removeClass(p, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n)
                } catch (d) {
                    setTimeout(function() {
                        throw d
                    }, 1)
                }
                s && o.loop !== !0 && s(n), o.loop !== !0 || t || ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360)
                }), v(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && $.dequeue(p, o.queue)
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++)
                if (v.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }
        var f = function() {
                if (r.documentMode) return r.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = r.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return a
            }(),
            d = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var r = (new Date).getTime(),
                        a;
                    return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                        t(r + a)
                    }, a)
                }
            }(),
            g = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            $, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400,
            h = "swing",
            v = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: r.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: $,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: y,
                    easing: h,
                    begin: a,
                    complete: a,
                    progress: a,
                    display: a,
                    visibility: a,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    $.data(e, "velocity", {
                        isSVG: g.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 1,
                    patch: 0
                },
                debug: !1
            };
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                }
            }

            function r(r, a) {
                var n = {
                        dx: r.v,
                        dv: e(r)
                    },
                    o = t(r, .5 * a, n),
                    i = t(r, .5 * a, o),
                    s = t(r, a, i),
                    l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
                    u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r
            }
            return function a(e, t, n) {
                var o = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    i = [0],
                    s = 0,
                    l = 1e-4,
                    u = .016,
                    c, p, f;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u;;)
                    if (f = r(f || o, p), i.push(1 + f.x), s += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l)) break;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0]
                } : s
            }
        }();
        v.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, $.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = v.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, a, n;
                    if (f)
                        for (r in x.Hooks.templates) {
                            a = x.Hooks.templates[r], n = a[0].split(" ");
                            var o = a[1].match(x.RegEx.valueSplit);
                            "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [n.join(" "), o.join(" ")])
                        }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e],
                                s = e;
                            x.Hooks.registered[i] = [r, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                },
                extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0],
                            n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                },
                injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var n = a[0],
                            o = a[1],
                            i, s;
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), i[o] = t, s = i.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var a;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                            case "inject":
                                return "rect(" + r + ")"
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                            case "name":
                                return "-webkit-filter";
                            case "extract":
                                var a = parseFloat(r);
                                if (!a && 0 !== a) {
                                    var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    a = n ? n[1] : 0
                                }
                                return a;
                            case "inject":
                                return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= f) switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = a ? a[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return r;
                            case "inject":
                                return r
                        }
                    }
                },
                register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                            break;
                                        case "scal":
                                        case "scale":
                                            v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                            break;
                                        case "skew":
                                            o = !/(deg|\d)$/i.test(n);
                                            break;
                                        case "rotate":
                                            o = !/(deg|\d)$/i.test(n)
                                    }
                                    return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;
                                    else {
                                        var i, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                case "inject":
                                    return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                },
                prefixCheck: function(e) {
                    if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, [n, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        a;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a
                    }), a = r.exec(e), a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= f) l = $.css(e, r);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), (f || v.State.isFirefox) && "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], ("" === l || null === l) && (l = e.style[r]), n()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r,
                        c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), l = x.Hooks.extractValue(u, n)
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), l = x.Normalizations.registered[r]("extract", e, d)
                }
                return /^[\d-]/.test(l) || (l = i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? /^(height|width)$/i.test(r) ? e.getBBox()[r] : e.getAttribute(r) : s(e, x.Names.prefixCheck(r)[0])), x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), l
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
                else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
                else {
                    if (x.Hooks.registered[r]) {
                        var l = r,
                            u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
                        e.style[s] = a
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]")
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a)
                }
                return [s, a]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e])
                    })
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "))
                    }), o && (r = "perspective" + o + " " + r)
                }
                x.setPropertyValue(e, "transform", r)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function(e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t));
                else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s
                }
            }), n
        };
        var S = function() {
            function e() {
                return f ? k.promise || null : d
            }

            function s() {
                function e(e) {
                    function f(e, t) {
                        var r = a,
                            n = a,
                            i = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? i = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), g.isFunction(r) && (r = r.call(o, V, w)), g.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i]
                    }

                    function d(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, ""
                        }), r || (r = x.Values.getUnitType(e)), [a, r]
                    }

                    function m() {
                        var e = {
                                myParent: o.parentNode || r.body,
                                position: x.getPropertyValue(o, "position"),
                                fontSize: x.getPropertyValue(o, "fontSize")
                            },
                            a = e.position === L.lastPosition && e.myParent === L.lastParent,
                            n = e.fontSize === L.lastFontSize;
                        L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                        var s = 100,
                            l = {};
                        if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
                        else {
                            var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden")
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%")
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                        }
                        return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                    }
                    if (s.begin && 0 === V) try {
                        s.begin.call(h, h)
                    } catch (y) {
                        setTimeout(function() {
                            throw y
                        }, 1)
                    }
                    if ("scroll" === A) {
                        var S = /^x$/i.test(s.axis) ? "Left" : "Top",
                            C = parseFloat(s.offset) || 0,
                            T, F, E;
                        s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, T = s.container["scroll" + S], E = T + $(o).position()[S.toLowerCase()] + C) : s.container = null : (T = v.State.scrollAnchor[v.State["scrollProperty" + S]], F = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], E = $(o).offset()[S.toLowerCase()] + C), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: T,
                                currentValue: T,
                                endValue: E,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: S,
                                    alternateValue: F
                                }
                            },
                            element: o
                        }, v.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                    } else if ("reverse" === A) {
                        if (!i(o).tweensContainer) return void $.dequeue(o, s.queue);
                        "none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, P.easing || delete s.easing, P.duration || delete s.duration, s = $.extend({}, i(o).opts, s);
                        var j = $.extend(!0, {}, i(o).tweensContainer);
                        for (var H in j)
                            if ("element" !== H) {
                                var N = j[H].startValue;
                                j[H].startValue = j[H].currentValue = j[H].endValue, j[H].endValue = N, g.isEmptyObject(P) || (j[H].easing = s.easing), v.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(j[H]), o)
                            }
                        l = j
                    } else if ("start" === A) {
                        var j;
                        i(o).tweensContainer && i(o).isAnimating === !0 && (j = i(o).tweensContainer), $.each(b, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = f(t, !0),
                                    n = r[0],
                                    o = r[1],
                                    i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var p = [l[c]];
                                        o && p.push(o), u !== a && p.push(u[c]), b[e + s[c]] = p
                                    }
                                    delete b[e]
                                }
                            }
                        });
                        for (var O in b) {
                            var z = f(b[O]),
                                q = z[0],
                                M = z[1],
                                I = z[2];
                            O = x.Names.camelCase(O);
                            var B = x.Hooks.getRoot(O),
                                W = !1;
                            if (i(o).isSVG || x.Names.prefixCheck(B)[1] !== !1 || x.Normalizations.registered[B] !== a) {
                                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(O) && !I && 0 !== q && (I = 0), s._cacheValues && j && j[O] ? (I === a && (I = j[O].endValue + j[O].unitType), W = i(o).rootPropertyValueCache[B]) : x.Hooks.registered[O] ? I === a ? (W = x.getPropertyValue(o, B), I = x.getPropertyValue(o, O, W)) : W = x.Hooks.templates[B][1] : I === a && (I = x.getPropertyValue(o, O));
                                var G, D, X, Y = !1;
                                if (G = d(O, I), I = G[0], X = G[1], G = d(O, q), q = G[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return Y = t, ""
                                    }), D = G[1], I = parseFloat(I) || 0, q = parseFloat(q) || 0, "%" === D && (/^(fontSize|lineHeight)$/.test(O) ? (q /= 100, D = "em") : /^scale/.test(O) ? (q /= 100, D = "") : /(Red|Green|Blue)$/i.test(O) && (q = q / 100 * 255, D = "")), /[\/*]/.test(Y)) D = X;
                                else if (X !== D && 0 !== I)
                                    if (0 === q) D = X;
                                    else {
                                        p = p || m();
                                        var Q = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                                        switch (X) {
                                            case "%":
                                                I *= "x" === Q ? p.percentToPxWidth : p.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                I *= p[X + "ToPx"]
                                        }
                                        switch (D) {
                                            case "%":
                                                I *= 1 / ("x" === Q ? p.percentToPxWidth : p.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                I *= 1 / p[D + "ToPx"]
                                        }
                                    }
                                switch (Y) {
                                    case "+":
                                        q = I + q;
                                        break;
                                    case "-":
                                        q = I - q;
                                        break;
                                    case "*":
                                        q = I * q;
                                        break;
                                    case "/":
                                        q = I / q
                                }
                                l[O] = {
                                    rootPropertyValue: W,
                                    startValue: I,
                                    currentValue: I,
                                    endValue: q,
                                    unitType: D,
                                    easing: M
                                }, v.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(l[O]), o)
                            } else v.debug && console.log("Skipping [" + B + "] due to a lack of browser support.")
                        }
                        l.element = o
                    }
                    l.element && (x.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (v.State.calls.length > 1e4 && (v.State.calls = n(v.State.calls)), v.State.calls.push([R, h, s, null, k.resolver]), v.State.isTicking === !1 && (v.State.isTicking = !0, c())) : V++)
                }
                var o = this,
                    s = $.extend({}, v.defaults, P),
                    l = {},
                    p;
                switch (i(o) === a && v.init(o), parseFloat(s.delay) && s.queue !== !1 && $.queue(o, s.queue, function(e) {
                    v.velocityQueueEntryFlag = !0, i(o).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(s.delay)),
                        next: e
                    }
                }), s.duration.toString().toLowerCase()) {
                    case "fast":
                        s.duration = 200;
                        break;
                    case "normal":
                        s.duration = y;
                        break;
                    case "slow":
                        s.duration = 600;
                        break;
                    default:
                        s.duration = parseFloat(s.duration) || 1
                }
                v.mock !== !1 && (v.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(v.mock) || 1, s.delay *= parseFloat(v.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = v.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && v.State.isMobile && !v.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : $.queue(o, s.queue, function(t, r) {
                    return r === !0 ? (k.promise && k.resolver(h), !0) : (v.velocityQueueEntryFlag = !0, void e(t))
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === $.queue(o)[0] || $.dequeue(o)
            }
            var l = arguments[0] && ($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties)),
                f, d, m, h, b, P;
            if (g.isWrapped(this) ? (f = !1, m = 0, h = this, d = this) : (f = !0, m = 1, h = l ? arguments[0].elements : arguments[0]), h = o(h)) {
                l ? (b = arguments[0].properties, P = arguments[0].options) : (b = arguments[m], P = arguments[m + 1]);
                var w = h.length,
                    V = 0;
                if ("stop" !== b && !$.isPlainObject(P)) {
                    var C = m + 1;
                    P = {};
                    for (var T = C; T < arguments.length; T++) g.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? g.isString(arguments[T]) || g.isArray(arguments[T]) ? P.easing = arguments[T] : g.isFunction(arguments[T]) && (P.complete = arguments[T]) : P.duration = arguments[T]
                }
                var k = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                f && v.Promise && (k.promise = new v.Promise(function(e, t) {
                    k.resolver = e, k.rejecter = t
                }));
                var A;
                switch (b) {
                    case "scroll":
                        A = "scroll";
                        break;
                    case "reverse":
                        A = "reverse";
                        break;
                    case "stop":
                        $.each(h, function(e, t) {
                            i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer)
                        });
                        var F = [];
                        return $.each(v.State.calls, function(e, t) {
                            t && $.each(t[1], function(r, n) {
                                var o = g.isString(P) ? P : "";
                                return P !== a && t[2].queue !== o ? !0 : void $.each(h, function(t, r) {
                                    r === n && (P !== a && ($.each($.queue(r, o), function(e, t) {
                                        g.isFunction(t) && t(null, !0)
                                    }), $.queue(r, o, [])), i(r) && "" === o && $.each(i(r).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }), F.push(e))
                                })
                            })
                        }), $.each(F, function(e, t) {
                            p(t, !0)
                        }), k.promise && k.resolver(h), e();
                    default:
                        if (!$.isPlainObject(b) || g.isEmptyObject(b)) {
                            if (g.isString(b) && v.Redirects[b]) {
                                var E = $.extend({}, P),
                                    j = E.duration,
                                    H = E.delay || 0;
                                return E.backwards === !0 && (h = $.extend(!0, [], h).reverse()), $.each(h, function(e, t) {
                                    parseFloat(E.stagger) ? E.delay = H + parseFloat(E.stagger) * e : g.isFunction(E.stagger) && (E.delay = H + E.stagger.call(t, e, w)), E.drag && (E.duration = parseFloat(j) || (/^(callout|transition)/.test(b) ? 1e3 : y), E.duration = Math.max(E.duration * (E.backwards ? 1 - e / w : (e + 1) / w), .75 * E.duration, 200)), v.Redirects[b].call(t, t, E || {}, e, w, h, k.promise ? k : a)
                                }), e()
                            }
                            var N = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return k.promise ? k.rejecter(new Error(N)) : console.log(N), e()
                        }
                        A = "start"
                }
                var L = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    R = [];
                $.each(h, function(e, t) {
                    g.isNode(t) && s.call(t)
                });
                var E = $.extend({}, v.defaults, P),
                    O;
                if (E.loop = parseInt(E.loop), O = 2 * E.loop - 1, E.loop)
                    for (var z = 0; O > z; z++) {
                        var q = {
                            delay: E.delay,
                            progress: E.progress
                        };
                        z === O - 1 && (q.display = E.display, q.visibility = E.visibility, q.complete = E.complete), S(h, "reverse", q)
                    }
                return e()
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }, c()) : P = t.requestAnimationFrame || d
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), $.each(["Down", "Up"], function(e, t) {
            v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [a, 0] : [0, a]
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var t in f) e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i)
                }, v(e, p, l)
            }
        }), $.each(["In", "Out"], function(e, t) {
            v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r),
                    u = {
                        opacity: "In" === t ? 1 : 0
                    },
                    c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i)
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l)
            }
        }), v
    }(window.jQuery || window.Zepto || window, window, document)
});
! function(t, e, n) {
    function i(e, n) {
        this.el = e, this.$el = t(e), this.settings = t.extend({}, r, n), this._defaults = r, this._name = s, this._slides = [], this.currentIndex = 0, this.init()
    }
    var s = "kenburnsy",
        r = {
            fullscreen: !1,
            duration: 9e3,
            fadeInDuration: 1500,
            height: null
        },
        o = {
            zoomOut: function(e, n) {
                t(e).velocity({
                    rotateZ: "3deg",
                    scale: "1.1"
                }, 0).velocity({
                    translateZ: 0,
                    rotateZ: "0deg",
                    scale: "1"
                }, n)
            },
            zoomIn: function(e, n) {
                t(e).velocity({
                    rotateZ: "0deg",
                    scale: "1"
                }, 0).velocity({
                    translateZ: 0,
                    rotateZ: "3deg",
                    scale: "1.1"
                }, n)
            }
        },
        a = function(e) {
            var n = function(t) {
                function n() {
                    s(), setTimeout(function() {
                        t.resolve(r)
                    })
                }

                function i() {
                    s(), t.rejectWith(r)
                }

                function s() {
                    r.onload = null, r.onerror = null, r.onabort = null
                }
                var r = new Image;
                r.onload = n, r.onerror = i, r.onabort = i, r.src = e
            };
            return t.Deferred(n).promise()
        };
    Object.keys || (Object.keys = function(t) {
        if (t !== Object(t)) throw new TypeError("Object.keys called on a non-object");
        var e, n = [];
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
        return n
    }), t.extend(i.prototype, {
        init: function() {
            var e, n = this.settings,
                i = this;
            e = this.$el.children().map(function(t, e) {
                return e.src
            }), this.$el.addClass(function() {
                var t = [s];
                return n.fullscreen && t.push("fullscreen"), t.join(" ")
            }), t.when.apply(t, t.map(e, a)).done(function() {
                var t = Array.prototype.slice.call(arguments);
                i.buildScene(t)
            })
        },
        reveal: function(e) {
            var n = this._slides[e],
                i = this.$el;
            t(n).velocity({
                opacity: 0
            }, 0, function() {
                t(this).appendTo(i)
            }).velocity({
                opacity: 1,
                translateZ: 0
            }, {
                duration: this.settings.fadeInDuration,
                queue: !1
            })
        },
        animate: function(t) {
            var e = Object.keys(o),
                n = o[e[Math.floor(e.length * Math.random())]],
                i = this.settings.duration,
                s = this._slides[t];
            n(s, i)
        },
        show: function(t) {
            this.reveal(t), this.animate(t)
        },
        next: function() {
            this.currentIndex = 0 === this.currentIndex ? this._slides.length - 1 : this.currentIndex - 1, this.show(this.currentIndex)
        },
        addSlides: function(e) {
            var i = this.el;
            return t.map(e.reverse(), function(t) {
                var e = n.createElement("div");
                return e.style.backgroundImage = "url(" + t.src + ")", e.className = "slide", i.appendChild(e), e
            })
        },
        buildScene: function(t) {
            var e = this,
                n = this.settings;
            this.el.innerHTML = "", this._slides = this.addSlides(t), this.currentIndex = t.length - 1, n.fullscreen || (this.el.style.height = this.settings.height || t[this.currentIndex].height + "px"), this.animate(this.currentIndex), setInterval(function() {
                e.next()
            }, n.duration - n.fadeInDuration)
        }
    }), t.fn[s] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new i(this, e))
        }), this
    }
}(jQuery, window, document);
/*! animate */
(function(e) {
    function t(t) {
        this.htmlElement = t;
        this.animations = e(this.htmlElement).attr("data-an").split(",");
        this.animationIndex = 0;
        this.lastAnimation = "";
        if (e(this.htmlElement).attr("data-an-duration") !== undefined) {
            this.animationDuration = e(this.htmlElement).attr("data-an-duration").split(",")
        }
        if (e(this.htmlElement).attr("data-an-delay") !== undefined) {
            this.animationDelay = e(this.htmlElement).attr("data-an-delay").split(",")
        }
    }

    function n() {
        this.elements = [];
        this.animateWhenVisible = false;
        this.isPerformingAnimation = false;
        this.resetWhenOffscreen = false;
        this.repeat = false;
        this.isReset = true
    }

    function r() {
        this.onVisbileGroups = [];
        this.map = [];
        e(".an-start").addClass("animated");
        e.each(e(".an-start"), function(r, i) {
            var s = new t(i);
            var o = e(i).attr("data-animation-group");
            if (o === undefined) {
                o = "_" + r;
                e(i).attr("data-animation-group", o)
            }
            if (this.map[o] === undefined) {
                this.map[o] = new n
            }
            var u = e(i).attr("data-animation-when-visible");
            if (u !== undefined) {
                this.map[o].animateWhenVisible = true
            }
            var a = e(i).attr("data-animation-reset-offscreen");
            if (a !== undefined) {
                this.map[o].resetWhenOffscreen = true
            }
            var f = e(i).attr("data-animation-repeat");
            if (f !== undefined) {
                this.map[o].repeat = true
            }
            var l = this.map[o].elements;
            var c = e(i).attr("data-animation-order");
            var h = c !== undefined;
            if (h) {
                var p = c.split(",")
            }
            var d = e(i).attr("data-an").split(",");
            for (var v = 0; v < d.length; v++) {
                var m = v + 1;
                if (h) {
                    m = p[v]
                }
                if (l[m] === undefined) {
                    l[m] = []
                }
                l[m].push(s)
            }
        }.bind(this));
        e(window).on("scroll", function() {
            this.checkOnVisibleGroups()
        }.bind(this));
        e(window).on("resize", function() {
            this.checkOnVisibleGroups()
        }.bind(this));
        e(document).ready(function() {
            this.checkOnVisibleGroups()
        }.bind(this));
        this.isElementVisible = function(t) {
            var n = e(window).scrollTop();
            var r = e(window).height() + n;
            var i = e(t).offset().top;
            var s = e(t).height() + i;
            return r >= i && n <= s
        };
        this.checkOnVisibleGroups = function() {
            for (var e = 0; e < this.onVisbileGroups.length; e++) {
                var t = this.map[this.onVisbileGroups[e]];
                for (var n = 1; n < t.elements.length; n++) {
                    var r = t.elements[n];
                    for (var i = 0; i < r.length; i++) {
                        var s = r[i].htmlElement;
                        if (this.isElementVisible(s) && !t.isPerformingAnimation) {
                            t.animate(1)
                        }
                        if (!this.isElementVisible(s) && !t.isPerformingAnimation && t.resetWhenOffscreen) {
                            t.reset()
                        }
                    }
                }
            }
        }
    }
    jQuery.fn.redraw = function() {
        return this.hide(0, function() {
            e(this).show()
        })
    };
    jQuery.fn.restartAnimation = function() {
        var t = e(this).attr("data-animation-group");
        var n = r.getInstance().getMap()[t];
        n.restart()
    };
    t.prototype.doNextAnimation = function(t) {
        if (this.animationIndex >= this.animations.length) {
            t();
            return
        }
        var n;
        var r;
        e(this.htmlElement).removeClass(this.lastAnimation);
        this.lastAnimation = this.animations[this.animationIndex];
        e(this.htmlElement).css("animation-duration", "").css("-webkit-animation-duration", "").css("-moz-animation-duration", "").css("-ms-animation-duration", "").css("-o-animation-duration", "");
        if (this.animationDuration !== undefined && this.animationDuration[this.animationIndex] !== undefined) {
            n = this.animationDuration[this.animationIndex];
            e(this.htmlElement).css("animation-duration", n).css("-webkit-animation-duration", n).css("-moz-animation-duration", n).css("-ms-animation-duration", n).css("-o-animation-duration", n)
        }
        e(this.htmlElement).css("animation-delay", "").css("-webkit-animation-delay", "").css("-moz-animation-delay", "").css("-ms-animation-delay", "").css("-o-animation-delay", "");
        if (this.animationDelay !== undefined && this.animationDelay[this.animationIndex] !== undefined) {
            r = this.animationDelay[this.animationIndex];
            e(this.htmlElement).css("animation-delay", r).css("-webkit-animation-delay", r).css("-moz-animation-delay", r).css("-ms-animation-delay", r).css("-o-animation-delay", r)
        }
        this.animationIndex++;
        e(this.htmlElement).redraw();
        e(this.htmlElement).addClass(this.lastAnimation).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", t)
    };
    n.prototype.reset = function() {
        if (!this.isReset) {
            for (var t = 1; t < this.elements.length; t++) {
                for (var n = 0; n < this.elements[t].length; n++) {
                    this.elements[t][n].animationIndex = 0;
                    e(this.elements[t][n].htmlElement).removeClass(this.elements[t][n].lastAnimation)
                }
            }
            this.isReset = true
        }
    };
    n.prototype.animate = function(e) {
        var t = 0;
        var n = this.elements[e];
        if (n === undefined) {
            if (this.repeat) {
                this.reset();
                this.animate(1)
            } else {
                this.isPerformingAnimation = false
            }
            return
        }
        this.isPerformingAnimation = true;
        this.isReset = false;
        for (var r = 0; r < n.length; r++) {
            n[r].doNextAnimation(function() {
                t++;
                if (t == n.length) {
                    this.animate(++e)
                }
            }.bind(this))
        }
    };
    n.prototype.restart = function() {
        if (!this.isPerformingAnimation) {
            this.reset();
            this.animate(1)
        }
    };
    r.prototype.start = function() {
        for (var e in this.map) {
            if (this.map[e].animateWhenVisible) {
                this.registerOnVisbileMap(e)
            } else {
                this.map[e].animate(1)
            }
        }
    };
    r.prototype.registerOnVisbileMap = function(e) {
        this.onVisbileGroups.push(e)
    };
    r.prototype.getMap = function() {
        return this.map
    };
    r.instance = null;
    r.getInstance = function() {
        if (r.instance === null) {
            r.instance = new r
        }
        return r.instance
    };
    e(document).ready(function() {
        r.getInstance().start()
    })
})(jQuery);
/*! Timer */
! function(e) {
    "use strict";

    function t(t, l) {
        this.$element = t, this.settings = e.extend({}, s, l), this._defaults = s, this._name = n, this._serverDate = null, this._javaScriptDate = null, this.currentDate = null, this.targetDate = null, this.days = null, this.hours = null, this.minutes = null, this.seconds = null, this.deciseconds = null, this.milliseconds = null, this.daysLabel = null, this.hoursLabel = null, this.minutesLabel = null, this.secondsLabel = null, this.decisecondsLabel = null, this.millisecondsLabel = null, this._intervalId = null, this._wrapsExists = {}, this._oldValues = {}, this._changed = !1, this.init()
    }
    var n = "countdown",
        s = {
            day: 27,
            month: 09,
            year: 2018,
            hour: 9,
            minute: 0,
            second: 0,
            millisecond: 0,
            timeZone: null,
            countUp: !1,
            currentDateTime: null,
            daysWrapper: ".days",
            hoursWrapper: ".hours",
            minutesWrapper: ".minutes",
            secondsWrapper: ".seconds",
            decisecondsWrapper: ".dseconds",
            millisecondsWrapper: ".mseconds",
            daysLabelWrapper: ".days-label",
            hoursLabelWrapper: ".hours-label",
            minutesLabelWrapper: ".minutes-label",
            secondsLabelWrapper: ".seconds-label",
            decisecondsLabelWrapper: ".dseconds-label",
            millisecondsLabelWrapper: ".mseconds-label",
            singularLabels: !1,
            daysLabel: "Days",
            dayLabel: "Day",
            hoursLabel: "Hours",
            hourLabel: "Hour",
            minutesLabel: "Minutes",
            minuteLabel: "Minute",
            secondsLabel: "Seconds",
            secondLabel: "Second",
            decisecondsLabel: "Deciseconds",
            decisecondLabel: "Decisecond",
            millisecondsLabel: "Milliseconds",
            millisecondLabel: "Millisecond",
            timeout: 1e3,
            highspeedTimeout: 4,
            leftHandZeros: !0,
            wrapDigits: !0,
            wrapDigitsTag: "span",
            dayInMilliseconds: 864e5,
            hourInMilliseconds: 36e5,
            minuteInMilliseconds: 6e4,
            secondInMilliseconds: 1e3,
            decisecondInMilliseconds: 100,
            onInit: null,
            beforeCalculation: null,
            afterCalculation: null,
            onChange: null,
            onComplete: null
        };
    t.prototype = {
        init: function() {
            var t = this,
                n = t.$element,
                s = t.settings;
            (e(n).find(s.decisecondsWrapper).length > 0 || e(n).find(s.millisecondsWrapper).length > 0) && (s.timeout = s.highspeedTimeout), null != s.currentDateTime && t.setCurrentDate(s.currentDateTime), e.isFunction(s.onInit) && s.onInit.call(t), t._intervalId = setInterval(function() {
                t.calculate()
            }, s.timeout), t.calculate()
        },
        calculate: function() {
            var t = this,
                n = t.settings,
                s = n.dayInMilliseconds,
                l = n.hourInMilliseconds,
                i = n.minuteInMilliseconds,
                a = n.secondInMilliseconds,
                r = n.decisecondInMilliseconds,
                o = !1;
            t._changed = !1, t.setTargetDate(new Date(n.year, n.month - 1, n.day, n.hour, n.minute, n.second)), e.isFunction(n.beforeCalculation) && n.beforeCalculation.call(t);
            var u = t.getCurrentDate(),
                c = t.getTargetDate(),
                d = u.getTime(),
                h = null === n.timeZone ? 0 : (c.getTimezoneOffset() / 60 + n.timeZone) * n.hourInMilliseconds,
                m = c.getTime() - h,
                p = m - d,
                g = p;
            t.currentDate = u;
            var b = t.round(g / s);
            g %= s;
            var f = t.round(g / l);
            g %= l;
            var L = t.round(g / i);
            g %= i;
            var D = t.round(g / a),
                v = g % a,
                _ = t.round(v / r);
            0 == n.countUp ? (b = t.naturalNum(b), f = t.naturalNum(f), L = t.naturalNum(L), D = t.naturalNum(D), v = t.naturalNum(v), _ = t.naturalNum(_)) : (b = -1 * b, f = -1 * f, L = -1 * L, D = -1 * D, v = -1 * v, _ = -1 * _), t.days = b, t.hours = f, t.minutes = L, t.seconds = D, t.milliseconds = v, t.deciseconds = _, t.format(), t.output(), Math.floor(p / n.timeout) <= 0 && 0 == n.countUp && (o = !0, (null != n.millisecondsWrapper || null != n.decisecondsWrapper) && (o = 0 >= p ? !0 : !1)), 1 == o && (e.isFunction(n.onComplete) && n.onComplete.call(t), clearInterval(t._intervalId)), e.isFunction(n.afterCalculation) && n.afterCalculation.call(t)
        },
        format: function() {
            var e = this,
                t = e.settings,
                n = t.singularLabels,
                s = e.days,
                l = e.hours,
                i = e.minutes,
                a = e.seconds,
                r = e.deciseconds,
                o = e.milliseconds,
                u = t.dayLabel,
                c = t.hourLabel,
                d = t.minuteLabel,
                h = t.secondLabel,
                m = t.decisecondLabel,
                p = t.millisecondsLabel;
            1 == t.leftHandZeros && (e.days = e.strPad(s, 2), e.hours = e.strPad(l, 2), e.minutes = e.strPad(i, 2), e.seconds = e.strPad(a, 2), e.milliseconds = e.strPad(o, 3)), e.daysLabel = 1 == s && null !== u && 1 == n ? u : t.daysLabel, e.hoursLabel = 1 == l && null !== c && 1 == n ? c : t.hoursLabel, e.minutesLabel = 1 == i && null !== d && 1 == n ? d : t.minutesLabel, e.secondsLabel = 1 == a && null !== h && 1 == n ? h : t.secondsLabel, e.decisecondsLabel = 1 == r && null !== m && 1 == n ? m : t.decisecondsLabel, e.millisecondsLabel = 1 == o && null !== p && 1 == n ? p : t.millisecondsLabel
        },
        output: function() {
            var t = this,
                n = t.settings;
            t.writeLabelToDom(n.daysLabelWrapper, t.daysLabel), t.writeLabelToDom(n.hoursLabelWrapper, t.hoursLabel), t.writeLabelToDom(n.minutesLabelWrapper, t.minutesLabel), t.writeLabelToDom(n.secondsLabelWrapper, t.secondsLabel), t.writeLabelToDom(n.decisecondsLabelWrapper, t.decisecondsLabel), t.writeLabelToDom(n.millisecondsLabelWrapper, t.millisecondsLabel), t.writeDigitsToDom(n.daysWrapper, t.days, "days-digit"), t.writeDigitsToDom(n.hoursWrapper, t.hours, "hours-digit"), t.writeDigitsToDom(n.minutesWrapper, t.minutes, "minutes-digit"), t.writeDigitsToDom(n.secondsWrapper, t.seconds, "seconds-digit"), t.writeDigitsToDom(n.decisecondsWrapper, t.deciseconds, "dseconds-digit"), t.writeDigitsToDom(n.millisecondsWrapper, t.milliseconds, "mseconds-digit"), e.isFunction(n.onChange) && 1 == t._changed && n.onChange.call(t)
        },
        pause: function() {
            var e = this,
                t = e._intervalId;
            t && clearInterval(t)
        },
        resume: function() {
            var e = this,
                t = e.settings;
            e._intervalId = setInterval(function() {
                e.calculate()
            }, t.timeout)
        },
        destroy: function() {
            var e = this,
                t = e._intervalId;
            t && clearInterval(t)
        },
        getOption: function(e) {
            return this.settings[e]
        },
        setOption: function(e, t) {
            this.settings[e] = t, "currentDateTime" == e && this.setCurrentDate(t)
        },
        setTargetDate: function(e) {
            this.targetDate = e
        },
        getTargetDate: function() {
            return this.targetDate
        },
        setCurrentDate: function(e) {
            this._serverDate = new Date(e), this._javaScriptDate = new Date
        },
        getCurrentDate: function() {
            var e, t, n = this,
                s = n.settings;
            return null != s.currentDateTime ? (e = n._serverDate - n._javaScriptDate, t = (new Date).getTime(), new Date(t + e)) : new Date
        },
        round: function(e) {
            return 0 == this.settings.countUp ? Math.floor(e) : Math.ceil(e)
        },
        naturalNum: function(e) {
            return 0 > e ? 0 : e
        },
        strPad: function(e, t, n) {
            var s = e.toString();
            for (n || (n = "0"); s.length < t;) s = n + s;
            return s
        },
        writeLabelToDom: function(t, n) {
            var s = this,
                l = e(s.$element);
            null == s._wrapsExists[t] && (s._wrapsExists[t] = l.find(t).length > 0 ? !0 : !1), s._oldValues[t] != n && s._wrapsExists[t] && (s._oldValues[t] = n, l.find(t).text(n), s._changed = !0)
        },
        writeDigitsToDom: function(t, n, s) {
            var l, i, a = this,
                r = a.settings,
                o = r.wrapDigitsTag,
                u = e(a.$element),
                c = u.find(t),
                n = n.toString(),
                d = [];
            if (null == a._wrapsExists[t] && (a._wrapsExists[t] = c.length > 0 ? !0 : !1), 0 == a._wrapsExists[t]) return !1;
            if (1 == r.wrapDigits)
                for (var h = 0; h < n.length; h++) d[h] = n[h];
            else d[0] = n;
            if ("undefined" == typeof a._oldValues[t] && (a._oldValues[t] = []), a._oldValues[t].length > d.length) {
                i = a._oldValues[t].length - d.length, l = c.find(o), l.slice(0, i).remove(), l = c.find(o);
                for (var h = 0; h < d.length; h++) l.eq(h).text(d[h]);
                a._changed = !0
            }
            if (a._oldValues[t].length < d.length) {
                if (0 == r.wrapDigits) c.text(d[0]);
                else {
                    0 == a._oldValues[t].length && c.text("");
                    for (var m = "", h = 0; h < d.length; h++) i = d.length - a._oldValues[t].length, i > h ? m += "<" + o + ' class="' + s + '">' + d[h] + "</" + o + ">" : (l = c.find(o), l.eq(h - i).text(d[h]));
                    c.prepend(m)
                }
                a._changed = !0
            }
            if (a._oldValues[t].length == d.length)
                if (0 == r.wrapDigits) a._oldValues[t][0] != d[0] && (c.text(d[0]), a._changed = !0);
                else
                    for (var h = 0; h < d.length; h++) a._oldValues[t][h] != d[h] && (l = c.find(o), l.eq(h).text(d[h]), a._changed = !0);
            a._oldValues[t] = [];
            for (var h = 0; h < d.length; h++) a._oldValues[t][h] = d[h]
        }
    }, e.fn[n] = function(s, l, i) {
        var a = null,
            r = this.each(function() {
                var r = null;
                if (e.data(this, n)) {
                    if (r = e.data(this, n), "destroy" === s) return r.destroy(), e.data(this, n, null), void 0;
                    var o = r[s];
                    return "function" == typeof o && (a = o.call(r, l, i)), !1
                }
                r = new t(this, s), e.data(this, n, r)
            });
        return a ? a : r
    }
}(jQuery, window, document);
/*! Parallax */
! function(t, i, e, s) {
    "use strict";

    function o(i, e) {
        this.element = i, this.$context = t(i).data("api", this), this.$layers = this.$context.find(".layer");
        var s = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var o in s) null === s[o] && delete s[o];
        t.extend(this, r, e, s), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var n = "parallax",
        a = 30,
        r = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    o.prototype.transformSupport = function(t) {
        for (var o = e.createElement("div"), n = !1, a = null, r = !1, h = null, l = null, p = 0, c = this.vendors.length; c > p; p++)
            if (null !== this.vendors[p] ? (h = this.vendors[p][0] + "transform", l = this.vendors[p][1] + "Transform") : (h = "transform", l = "transform"), o.style[l] !== s) {
                n = !0;
                break
            }
        switch (t) {
            case "2D":
                r = n;
                break;
            case "3D":
                if (n) {
                    var m = e.body || e.createElement("body"),
                        u = e.documentElement,
                        y = u.style.overflow;
                    e.body || (u.style.overflow = "hidden", u.appendChild(m), m.style.overflow = "hidden", m.style.background = ""), m.appendChild(o), o.style[l] = "translate3d(1px,1px,1px)", a = i.getComputedStyle(o).getPropertyValue(h), r = a !== s && a.length > 0 && "none" !== a, u.style.overflow = y, m.removeChild(o)
                }
        }
        return r
    }, o.prototype.ww = null, o.prototype.wh = null, o.prototype.wcx = null, o.prototype.wcy = null, o.prototype.wrx = null, o.prototype.wry = null, o.prototype.portrait = null, o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], o.prototype.motionSupport = !!i.DeviceMotionEvent, o.prototype.orientationSupport = !!i.DeviceOrientationEvent, o.prototype.orientationStatus = 0, o.prototype.transform2DSupport = o.prototype.transformSupport("2D"), o.prototype.transform3DSupport = o.prototype.transformSupport("3D"), o.prototype.propertyCache = {}, o.prototype.initialise = function() {
        "static" === this.$context.css("position") && this.$context.css({
            position: "relative"
        }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, o.prototype.updateLayers = function() {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({
            position: "relative"
        }), this.accelerate(this.$layers), this.$layers.each(t.proxy(function(i, e) {
            this.depths.push(t(e).data("depth") || 0)
        }, this))
    }, o.prototype.updateDimensions = function() {
        this.ww = i.innerWidth, this.wh = i.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, o.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, o.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, o.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, i.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, i.addEventListener("mousemove", this.onMouseMove)), i.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, o.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? i.removeEventListener("deviceorientation", this.onDeviceOrientation) : i.removeEventListener("mousemove", this.onMouseMove), i.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, o.prototype.calibrate = function(t, i) {
        this.calibrateX = t === s ? this.calibrateX : t, this.calibrateY = i === s ? this.calibrateY : i
    }, o.prototype.invert = function(t, i) {
        this.invertX = t === s ? this.invertX : t, this.invertY = i === s ? this.invertY : i
    }, o.prototype.friction = function(t, i) {
        this.frictionX = t === s ? this.frictionX : t, this.frictionY = i === s ? this.frictionY : i
    }, o.prototype.scalar = function(t, i) {
        this.scalarX = t === s ? this.scalarX : t, this.scalarY = i === s ? this.scalarY : i
    }, o.prototype.limit = function(t, i) {
        this.limitX = t === s ? this.limitX : t, this.limitY = i === s ? this.limitY : i
    }, o.prototype.origin = function(t, i) {
        this.originX = t === s ? this.originX : t, this.originY = i === s ? this.originY : i
    }, o.prototype.clamp = function(t, i, e) {
        return t = Math.max(t, i), t = Math.min(t, e)
    }, o.prototype.css = function(i, e, o) {
        var n = this.propertyCache[e];
        if (!n)
            for (var a = 0, r = this.vendors.length; r > a; a++)
                if (n = null !== this.vendors[a] ? t.camelCase(this.vendors[a][1] + "-" + e) : e, i.style[n] !== s) {
                    this.propertyCache[e] = n;
                    break
                }
        i.style[n] = o
    }, o.prototype.accelerate = function(t) {
        for (var i = 0, e = t.length; e > i; i++) {
            var s = t[i];
            this.css(s, "transform", "translate3d(0,0,0)"), this.css(s, "transform-style", "preserve-3d"), this.css(s, "backface-visibility", "hidden")
        }
    }, o.prototype.setPosition = function(t, i, e) {
        i += "px", e += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + i + "," + e + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + i + "," + e + ")") : (t.style.left = i, t.style.top = e)
    }, o.prototype.onOrientationTimer = function() {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, o.prototype.onCalibrationTimer = function() {
        this.calibrationFlag = !0
    }, o.prototype.onWindowResize = function() {
        this.updateDimensions()
    }, o.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
            i = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(i) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? i : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? i : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var e = 0, s = this.$layers.length; s > e; e++) {
            var o = this.depths[e],
                n = this.$layers[e],
                a = this.vx * o * (this.invertX ? -1 : 1),
                r = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(n, a, r)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, o.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var e = (t.beta || 0) / a,
                s = (t.gamma || 0) / a,
                o = i.innerHeight > i.innerWidth;
            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = e, this.cy = s), this.ix = e, this.iy = s
        }
    }, o.prototype.onMouseMove = function(t) {
        var i = t.clientX,
            e = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (i = Math.max(i, this.ex), i = Math.min(i, this.ex + this.ew), e = Math.max(e, this.ey), e = Math.min(e, this.ey + this.eh)), this.ix = (i - this.ex - this.ecx) / this.erx, this.iy = (e - this.ey - this.ecy) / this.ery) : (this.ix = (i - this.wcx) / this.wrx, this.iy = (e - this.wcy) / this.wry)
    };
    var h = {
        enable: o.prototype.enable,
        disable: o.prototype.disable,
        updateLayers: o.prototype.updateLayers,
        calibrate: o.prototype.calibrate,
        friction: o.prototype.friction,
        invert: o.prototype.invert,
        scalar: o.prototype.scalar,
        limit: o.prototype.limit,
        origin: o.prototype.origin
    };
    t.fn[n] = function(i) {
        var e = arguments;
        return this.each(function() {
            var s = t(this),
                a = s.data(n);
            a || (a = new o(this, i), s.data(n, a)), h[i] && a[i].apply(a, Array.prototype.slice.call(e, 1))
        })
    }
}(window.jQuery || window.Zepto, window, document),
function() {
    for (var t = 0, i = ["ms", "moz", "webkit", "o"], e = 0; e < i.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[i[e] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(i) {
        var e = (new Date).getTime(),
            s = Math.max(0, 16 - (e - t)),
            o = window.setTimeout(function() {
                i(e + s)
            }, s);
        return t = e + s, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}();
/*! Lightbox */
(function(e, t, n, r) {
    function o(t, n) {
        this.el = t;
        this.$el = e(this.el);
        this.options = e.extend({}, s, n);
        this._defaults = s;
        this._name = i;
        this.init()
    }
    var i = "nivoLightbox",
        s = {
            effect: "fade",
            theme: "default",
            keyboardNav: true,
            clickOverlayToClose: true,
            onInit: function() {},
            beforeShowLightbox: function() {},
            afterShowLightbox: function(e) {},
            beforeHideLightbox: function() {},
            afterHideLightbox: function() {},
            onPrev: function(e) {},
            onNext: function(e) {},
            errorMessage: "The requested content cannot be loaded. Please try again later."
        };
    o.prototype = {
        init: function() {
            var t = this;
            if (!e("html").hasClass("nivo-lightbox-notouch")) e("html").addClass("nivo-lightbox-notouch");
            if ("ontouchstart" in n) e("html").removeClass("nivo-lightbox-notouch");
            this.$el.on("click", function(e) {
                t.showLightbox(e)
            });
            if (this.options.keyboardNav) {
                e("body").off("keyup").on("keyup", function(n) {
                    var r = n.keyCode ? n.keyCode : n.which;
                    if (r == 27) t.destructLightbox();
                    if (r == 37) e(".nivo-lightbox-prev").trigger("click");
                    if (r == 39) e(".nivo-lightbox-next").trigger("click")
                })
            }
            this.options.onInit.call(this)
        },
        showLightbox: function(t) {
            var n = this,
                r = this.$el;
            var i = this.checkContent(r);
            if (!i) return;
            t.preventDefault();
            this.options.beforeShowLightbox.call(this);
            var s = this.constructLightbox();
            if (!s) return;
            var o = s.find(".nivo-lightbox-content");
            if (!o) return;
            e("body").addClass("nivo-lightbox-body-effect-" + this.options.effect);
            this.processContent(o, r);
            if (this.$el.attr("data-lightbox-gallery")) {
                var u = e('[data-lightbox-gallery="' + this.$el.attr("data-lightbox-gallery") + '"]');
                e(".nivo-lightbox-nav").show();
                e(".nivo-lightbox-prev").off("click").on("click", function(t) {
                    t.preventDefault();
                    var i = u.index(r);
                    r = u.eq(i - 1);
                    if (!e(r).length) r = u.last();
                    n.processContent(o, r);
                    n.options.onPrev.call(this, [r])
                });
                e(".nivo-lightbox-next").off("click").on("click", function(t) {
                    t.preventDefault();
                    var i = u.index(r);
                    r = u.eq(i + 1);
                    if (!e(r).length) r = u.first();
                    n.processContent(o, r);
                    n.options.onNext.call(this, [r])
                })
            }
            setTimeout(function() {
                s.addClass("nivo-lightbox-open");
                n.options.afterShowLightbox.call(this, [s])
            }, 1)
        },
        checkContent: function(e) {
            var t = this,
                n = e.attr("href"),
                r = n.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);
            if (n.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
                return true
            } else if (r) {
                return true
            } else if (e.attr("data-lightbox-type") == "ajax") {
                return true
            } else if (n.substring(0, 1) == "#" && e.attr("data-lightbox-type") == "inline") {
                return true
            } else if (e.attr("data-lightbox-type") == "iframe") {
                return true
            }
            return false
        },
        processContent: function(n, r) {
            var i = this,
                s = r.attr("href"),
                o = s.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);
            n.html("").addClass("nivo-lightbox-loading");
            if (this.isHidpi() && r.attr("data-lightbox-hidpi")) {
                s = r.attr("data-lightbox-hidpi")
            }
            if (s.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
                var u = e("<img>", {
                    src: s
                });
                u.one("load", function() {
                    var r = e('<div class="nivo-lightbox-image" />');
                    r.append(u);
                    n.html(r).removeClass("nivo-lightbox-loading");
                    r.css({
                        "line-height": e(".nivo-lightbox-content").height() + "px",
                        height: e(".nivo-lightbox-content").height() + "px"
                    });
                    e(t).resize(function() {
                        r.css({
                            "line-height": e(".nivo-lightbox-content").height() + "px",
                            height: e(".nivo-lightbox-content").height() + "px"
                        })
                    })
                }).each(function() {
                    if (this.complete) e(this).load()
                });
                u.error(function() {
                    var t = e('<div class="nivo-lightbox-error"><p>' + i.options.errorMessage + "</p></div>");
                    n.html(t).removeClass("nivo-lightbox-loading")
                })
            } else if (o) {
                var a = "",
                    f = "nivo-lightbox-video";
                if (o[1] == "youtube") {
                    a = "http://www.youtube.com/embed/" + o[4];
                    f = "nivo-lightbox-youtube"
                }
                if (o[1] == "youtu") {
                    a = "http://www.youtube.com/embed/" + o[3];
                    f = "nivo-lightbox-youtube"
                }
                if (o[1] == "vimeo") {
                    a = "http://player.vimeo.com/video/" + o[3];
                    f = "nivo-lightbox-vimeo"
                }
                if (a) {
                    var l = e("<iframe>", {
                        src: a,
                        "class": f,
                        frameborder: 0,
                        vspace: 0,
                        hspace: 0,
                        scrolling: "auto"
                    });
                    n.html(l);
                    l.load(function() {
                        n.removeClass("nivo-lightbox-loading")
                    })
                }
            } else if (r.attr("data-lightbox-type") == "ajax") {
                e.ajax({
                    url: s,
                    cache: false,
                    success: function(r) {
                        var i = e('<div class="nivo-lightbox-ajax" />');
                        i.append(r);
                        n.html(i).removeClass("nivo-lightbox-loading");
                        if (i.outerHeight() < n.height()) {
                            i.css({
                                position: "relative",
                                top: "50%",
                                "margin-top": -(i.outerHeight() / 2) + "px"
                            })
                        }
                        e(t).resize(function() {
                            if (i.outerHeight() < n.height()) {
                                i.css({
                                    position: "relative",
                                    top: "50%",
                                    "margin-top": -(i.outerHeight() / 2) + "px"
                                })
                            }
                        })
                    },
                    error: function() {
                        var t = e('<div class="nivo-lightbox-error"><p>' + i.options.errorMessage + "</p></div>");
                        n.html(t).removeClass("nivo-lightbox-loading")
                    }
                })
            } else if (s.substring(0, 1) == "#" && r.attr("data-lightbox-type") == "inline") {
                if (e(s).length) {
                    var c = e('<div class="nivo-lightbox-inline" />');
                    c.append(e(s).clone().show());
                    n.html(c).removeClass("nivo-lightbox-loading");
                    if (c.outerHeight() < n.height()) {
                        c.css({
                            position: "relative",
                            top: "50%",
                            "margin-top": -(c.outerHeight() / 2) + "px"
                        })
                    }
                    e(t).resize(function() {
                        if (c.outerHeight() < n.height()) {
                            c.css({
                                position: "relative",
                                top: "50%",
                                "margin-top": -(c.outerHeight() / 2) + "px"
                            })
                        }
                    })
                } else {
                    var h = e('<div class="nivo-lightbox-error"><p>' + i.options.errorMessage + "</p></div>");
                    n.html(h).removeClass("nivo-lightbox-loading")
                }
            } else if (r.attr("data-lightbox-type") == "iframe") {
                var p = e("<iframe>", {
                    src: s,
                    "class": "nivo-lightbox-item",
                    frameborder: 0,
                    vspace: 0,
                    hspace: 0,
                    scrolling: "auto"
                });
                n.html(p);
                p.load(function() {
                    n.removeClass("nivo-lightbox-loading")
                })
            } else {
                return false
            }
            if (r.attr("title")) {
                var d = e("<span>", {
                    "class": "nivo-lightbox-title"
                });
                d.text(r.attr("title"));
                e(".nivo-lightbox-title-wrap").html(d)
            } else {
                e(".nivo-lightbox-title-wrap").html("")
            }
        },
        constructLightbox: function() {
            if (e(".nivo-lightbox-overlay").length) return e(".nivo-lightbox-overlay");
            var t = e("<div>", {
                "class": "nivo-lightbox-overlay nivo-lightbox-theme-" + this.options.theme + " nivo-lightbox-effect-" + this.options.effect
            });
            var n = e("<div>", {
                "class": "nivo-lightbox-wrap"
            });
            var r = e("<div>", {
                "class": "nivo-lightbox-content"
            });
            var i = e('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');
            var s = e('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>');
            var o = e("<div>", {
                "class": "nivo-lightbox-title-wrap"
            });
            var u = 0;
            if (u) t.addClass("nivo-lightbox-ie");
            n.append(r);
            n.append(o);
            t.append(n);
            t.append(i);
            t.append(s);
            e("body").append(t);
            var a = this;
            if (a.options.clickOverlayToClose) {
                t.on("click", function(t) {
                    if (t.target === this || e(t.target).hasClass("nivo-lightbox-content") || e(t.target).hasClass("nivo-lightbox-image")) {
                        a.destructLightbox()
                    }
                })
            }
            s.on("click", function(e) {
                e.preventDefault();
                a.destructLightbox()
            });
            return t
        },
        destructLightbox: function() {
            var t = this;
            this.options.beforeHideLightbox.call(this);
            e(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open");
            e(".nivo-lightbox-nav").hide();
            e("body").removeClass("nivo-lightbox-body-effect-" + t.options.effect);
            var n = 0;
            if (n) {
                e(".nivo-lightbox-overlay iframe").attr("src", " ");
                e(".nivo-lightbox-overlay iframe").remove()
            }
            e(".nivo-lightbox-prev").off("click");
            e(".nivo-lightbox-next").off("click");
            e(".nivo-lightbox-content").empty();
            this.options.afterHideLightbox.call(this)
        },
        isHidpi: function() {
            var e = "(-webkit-min-device-pixel-ratio: 1.5),                              (min--moz-device-pixel-ratio: 1.5),                              (-o-min-device-pixel-ratio: 3/2),                              (min-resolution: 1.5dppx)";
            if (t.devicePixelRatio > 1) return true;
            if (t.matchMedia && t.matchMedia(e).matches) return true;
            return false
        }
    };
    e.fn[i] = function(t) {
        return this.each(function() {
            if (!e.data(this, i)) {
                e.data(this, i, new o(this, t))
            }
        })
    }
})(jQuery, window, document);
/*! Scrollbar */
function ssc_init() {
    if (document.body) {
        var e = document.body,
            s = document.documentElement,
            c = window.innerHeight,
            t = e.scrollHeight;
        if (ssc_root = document.compatMode.indexOf("CSS") >= 0 ? s : e, ssc_activeElement = e, ssc_initdone = !0, top != self) ssc_frame = !0;
        else if (t > c && (e.offsetHeight <= c || s.offsetHeight <= c) && (ssc_root.style.height = "auto", ssc_root.offsetHeight <= c)) {
            var o = document.createElement("div");
            o.style.clear = "both", e.appendChild(o)
        }
        ssc_fixedback || (e.style.backgroundAttachment = "scroll", s.style.backgroundAttachment = "scroll"), ssc_keyboardsupport && ssc_addEvent("keydown", ssc_keydown)
    }
}

function ssc_scrollArray(e, s, c, t) {
    if (t || (t = 1e3), ssc_directionCheck(s, c), ssc_que.push({
            x: s,
            y: c,
            lastX: 0 > s ? .99 : -.99,
            lastY: 0 > c ? .99 : -.99,
            start: +new Date
        }), !ssc_pending) {
        var o = function() {
            for (var r = +new Date, n = 0, a = 0, i = 0; i < ssc_que.length; i++) {
                var l = ssc_que[i],
                    _ = r - l.start,
                    u = _ >= ssc_animtime,
                    d = u ? 1 : _ / ssc_animtime;
                ssc_pulseAlgorithm && (d = ssc_pulse(d));
                var f = l.x * d - l.lastX >> 0,
                    m = l.y * d - l.lastY >> 0;
                n += f, a += m, l.lastX += f, l.lastY += m, u && (ssc_que.splice(i, 1), i--)
            }
            if (s) {
                var h = e.scrollLeft;
                e.scrollLeft += n, n && e.scrollLeft === h && (s = 0)
            }
            if (c) {
                var p = e.scrollTop;
                e.scrollTop += a, a && e.scrollTop === p && (c = 0)
            }
            s || c || (ssc_que = []), ssc_que.length ? setTimeout(o, t / ssc_framerate + 1) : ssc_pending = !1
        };
        setTimeout(o, 0), ssc_pending = !0
    }
}

function ssc_wheel(e) {
    ssc_initdone || ssc_init();
    var s = e.target,
        c = ssc_overflowingAncestor(s);
    if (!c || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(s, "embed") && /\.pdf/i.test(s.src)) return !0;
    var t = e.wheelDeltaX || 0,
        o = e.wheelDeltaY || 0;
    t || o || (o = e.wheelDelta || 0), Math.abs(t) > 1.2 && (t *= ssc_stepsize / 120), Math.abs(o) > 1.2 && (o *= ssc_stepsize / 120), ssc_scrollArray(c, -t, -o), e.preventDefault()
}

function ssc_keydown(e) {
    var s = e.target,
        c = e.ctrlKey || e.altKey || e.metaKey;
    if (/input|textarea|embed/i.test(s.nodeName) || s.isContentEditable || e.defaultPrevented || c) return !0;
    if (ssc_isNodeName(s, "button") && e.keyCode === ssc_key.spacebar) return !0;
    var t, o = 0,
        r = 0,
        n = ssc_overflowingAncestor(ssc_activeElement),
        a = n.clientHeight;
    switch (n == document.body && (a = window.innerHeight), e.keyCode) {
        case ssc_key.up:
            r = -ssc_arrowscroll;
            break;
        case ssc_key.down:
            r = ssc_arrowscroll;
            break;
        case ssc_key.spacebar:
            t = e.shiftKey ? 1 : -1, r = -t * a * .9;
            break;
        case ssc_key.pageup:
            r = .9 * -a;
            break;
        case ssc_key.pagedown:
            r = .9 * a;
            break;
        case ssc_key.home:
            r = -n.scrollTop;
            break;
        case ssc_key.end:
            var i = n.scrollHeight - n.scrollTop - a;
            r = i > 0 ? i + 10 : 0;
            break;
        case ssc_key.left:
            o = -ssc_arrowscroll;
            break;
        case ssc_key.right:
            o = ssc_arrowscroll;
            break;
        default:
            return !0
    }
    ssc_scrollArray(n, o, r), e.preventDefault()
}

function ssc_mousedown(e) {
    ssc_activeElement = e.target
}

function ssc_setCache(e, s) {
    for (var c = e.length; c--;) ssc_cache[ssc_uniqueID(e[c])] = s;
    return s
}

function ssc_overflowingAncestor(e) {
    var s = [],
        c = ssc_root.scrollHeight;
    do {
        var t = ssc_cache[ssc_uniqueID(e)];
        if (t) return ssc_setCache(s, t);
        if (s.push(e), c === e.scrollHeight) {
            if (!ssc_frame || ssc_root.clientHeight + 10 < c) return ssc_setCache(s, document.body)
        } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow"), "scroll" === overflow || "auto" === overflow)) return ssc_setCache(s, e)
    } while (e = e.parentNode)
}

function ssc_addEvent(e, s, c) {
    window.addEventListener(e, s, c || !1)
}

function ssc_removeEvent(e, s, c) {
    window.removeEventListener(e, s, c || !1)
}

function ssc_isNodeName(e, s) {
    return e.nodeName.toLowerCase() === s.toLowerCase()
}

function ssc_directionCheck(e, s) {
    e = e > 0 ? 1 : -1, s = s > 0 ? 1 : -1, (ssc_direction.x !== e || ssc_direction.y !== s) && (ssc_direction.x = e, ssc_direction.y = s, ssc_que = [])
}

function ssc_pulse_(e) {
    var s, c, t;
    return e *= ssc_pulseScale, 1 > e ? s = e - (1 - Math.exp(-e)) : (c = Math.exp(-1), e -= 1, t = 1 - Math.exp(-e), s = c + t * (1 - c)), s * ssc_pulseNormalize
}

function ssc_pulse(e) {
    return e >= 1 ? 1 : 0 >= e ? 0 : (1 == ssc_pulseNormalize && (ssc_pulseNormalize /= ssc_pulse_(1)), ssc_pulse_(e))
}
var ssc_framerate = 150,
    ssc_animtime = 500,
    ssc_stepsize = 150,
    ssc_pulseAlgorithm = !0,
    ssc_pulseScale = 6,
    ssc_pulseNormalize = 1,
    ssc_keyboardsupport = !0,
    ssc_arrowscroll = 50,
    ssc_frame = !1,
    ssc_direction = {
        x: 0,
        y: 0
    },
    ssc_initdone = !1,
    ssc_fixedback = !0,
    ssc_root = document.documentElement,
    ssc_activeElement, ssc_key = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    },
    ssc_que = [],
    ssc_pending = !1,
    ssc_cache = {};
setInterval(function() {
    ssc_cache = {}
}, 1e4);
var ssc_uniqueID = function() {
        var e = 0;
        return function(s) {
            return s.ssc_uniqueID || (s.ssc_uniqueID = e++)
        }
    }(),
    ischrome = /chrome/.test(navigator.userAgent.toLowerCase());
ischrome && (ssc_addEvent("mousedown", ssc_mousedown), ssc_addEvent("mousewheel", ssc_wheel), ssc_addEvent("load", ssc_init));
/*! Medhati 3D */
"use strict";
! function(t) {
    t.fn.m3d = function(s) {
        var i = function() {
                this.ticking || (requestAnimationFrame(g.bind(this)), this.ticking = !0)
            },
            e = function() {
                t(this).on("mousemove", r), t(this).on("mouseenter", n), this.settings.reset && t(this).on("mouseleave", l)
            },
            a = function() {
                var s = this;
                void 0 !== this.timeout && clearTimeout(this.timeout), t(this).css({
                    transition: this.settings.speed + "ms " + this.settings.easing
                }), this.settings.glare && this.glareElement.css({
                    transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
                }), this.timeout = setTimeout(function() {
                    t(s).css({
                        transition: ""
                    }), s.settings.glare && s.glareElement.css({
                        transition: ""
                    })
                }, this.settings.speed)
            },
            n = function(s) {
                this.ticking = !1, t(this).css({
                    "will-change": "transform"
                }), a.call(this), t(this).trigger("m3d.mouseEnter")
            },
            h = function(s) {
                return "undefined" == typeof s && (s = {
                    pageX: t(this).offset().left + t(this).outerWidth() / 2,
                    pageY: t(this).offset().top + t(this).outerHeight() / 2
                }), {
                    x: s.pageX,
                    y: s.pageY
                }
            },
            r = function(t) {
                this.mousePositions = h(t), i.call(this)
            },
            l = function() {
                a.call(this), this.reset = !0, i.call(this), t(this).trigger("m3d.mouseLeave")
            },
            o = function() {
                var s = t(this).width(),
                    i = t(this).height(),
                    e = t(this).offset().left,
                    a = t(this).offset().top,
                    n = (this.mousePositions.x - e) / s,
                    h = (this.mousePositions.y - a) / i,
                    r = (this.settings.maxm3d / 2 - n * this.settings.maxm3d).toFixed(2),
                    l = (h * this.settings.maxm3d - this.settings.maxm3d / 2).toFixed(2),
                    o = Math.atan2(this.mousePositions.x - (e + s / 2), -(this.mousePositions.y - (a + i / 2))) * (180 / Math.PI);
                return {
                    m3dX: r,
                    m3dY: l,
                    percentageX: 100 * n,
                    percentageY: 100 * h,
                    angle: o
                }
            },
            g = function() {
                return this.transforms = o.call(this), this.reset ? (this.reset = !1, t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"), void(this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) scale(1.75)"), this.glareElement.css("opacity", "" + this.settings.maxGlare / 4)))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : this.transforms.m3dY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : this.transforms.m3dX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"), this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) scale(1.75)"), this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)), t(this).trigger("change", [this.transforms]), void(this.ticking = !1))
            },
            c = function() {
                if (!this.settings.glarePrerender) {
                    t(this).append('<div class="js-m3d-glare"><div class="js-m3d-glare-inner"></div></div>'), this.glareElementWrapper = t(this).find(".js-m3d-glare"), this.glareElement = t(this).find(".js-m3d-glare-inner");
                    var s = {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    };
                    this.glareElementWrapper.css(s).css({
                        overflow: "hidden"
                    }), this.glareElement.css(s).css({
                        "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                        opacity: "" + this.settings.maxGlare / 2,
                        transform: "rotate(180deg) scale(1.75)"
                    })
                }
            };
        return t.fn.m3d.destroy = function() {
            t(this).each(function() {
                t(this).find(".js-m3d-glare").remove(), t(this).css({
                    "will-change": "",
                    transform: ""
                }), t(this).off("mousemove mouseenter mouseleave")
            })
        }, t.fn.m3d.getValues = function() {
            var s = [];
            return t(this).each(function() {
                this.mousePositions = h.call(this), s.push(o.call(this))
            }), s
        }, t.fn.m3d.reset = function() {
            t(this).each(function() {
                var s = this;
                this.mousePositions = h.call(this), this.settings = t(this).data("settings"), l.call(this), setTimeout(function() {
                    s.reset = !1
                }, this.settings.transition)
            })
        }, this.each(function() {
            var i = this;
            this.settings = t.extend({
                maxm3d: t(this).is("[data-m3d-max]") ? t(this).data("m3d-max") : 20,
                perspective: t(this).is("[data-m3d-perspective]") ? t(this).data("m3d-perspective") : 300,
                easing: t(this).is("[data-m3d-easing]") ? t(this).data("m3d-easing") : "cubic-bezier(.03,.98,.52,.99)",
                scale: t(this).is("[data-m3d-scale]") ? t(this).data("m3d-scale") : "1",
                speed: t(this).is("[data-m3d-speed]") ? t(this).data("m3d-speed") : "400",
                transition: !t(this).is("[data-m3d-transition]") || t(this).data("m3d-transition"),
                axis: t(this).is("[data-m3d-axis]") ? t(this).data("m3d-axis") : null,
                reset: !t(this).is("[data-m3d-reset]") || t(this).data("m3d-reset"),
                glare: !!t(this).is("[data-m3d-glare]") && t(this).data("m3d-glare"),
                maxGlare: t(this).is("[data-m3d-maxglare]") ? t(this).data("m3d-maxglare") : 1
            }, s), this.init = function() {
                t(i).data("settings", i.settings), i.settings.glare && c.call(i), e.call(i)
            }, this.init()
        })
    }, t("[data-m3d]").m3d()
}(jQuery);
/*! Scroll */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    ! function(t) {
        var o = "function" == typeof define && define.amd,
            a = "undefined" != typeof module && module.exports,
            n = "https:" == document.location.protocol ? "https:" : "http:",
            i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t()
    }(function() {
        var t, o = "mCustomScrollbar",
            a = "mCS",
            n = ".mCustomScrollbar",
            i = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            r = 0,
            l = {},
            s = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = {
                init: function(t) {
                    var t = e.extend(!0, {}, i, t),
                        o = f.call(this);
                    if (t.live) {
                        var s = t.liveSelector || this.selector || n,
                            c = e(s);
                        if ("off" === t.live) return void m(s);
                        l[s] = setTimeout(function() {
                            c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
                        }, 500)
                    } else m(s);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function() {
                        var o = e(this);
                        if (!o.data(a)) {
                            o.data(a, {
                                idx: ++r,
                                opt: t,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: o.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var n = o.data(a),
                                i = n.opt,
                                l = o.data("mcs-axis"),
                                s = o.data("mcs-scrollbar-position"),
                                c = o.data("mcs-theme");
                            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
                        }
                    })
                },
                update: function(t, o) {
                    var n = t || f.call(this);
                    return e(n).each(function() {
                        var t = e(this);
                        if (t.data(a)) {
                            var n = t.data(a),
                                i = n.opt,
                                r = e("#mCSB_" + n.idx + "_container"),
                                l = e("#mCSB_" + n.idx),
                                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                            if (!r.length) return;
                            n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
                            var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                            "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this)
                        }
                    })
                },
                scrollTo: function(t, o) {
                    if ("undefined" != typeof t && null != t) {
                        var n = f.call(this);
                        return e(n).each(function() {
                            var n = e(this);
                            if (n.data(a)) {
                                var i = n.data(a),
                                    r = i.opt,
                                    l = {
                                        trigger: "external",
                                        scrollInertia: r.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    s = e.extend(!0, {}, l, o),
                                    c = Y.call(this, t),
                                    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function() {
                                    null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s))
                                }, s.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var t = e(this);
                        t.data(a) && Q(t)
                    })
                },
                disable: function(t) {
                    var o = f.call(this);
                    return e(o).each(function() {
                        var o = e(this);
                        if (o.data(a)) {
                            o.data(a);
                            N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3])
                        }
                    })
                },
                destroy: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a),
                                r = i.opt,
                                l = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                c = e(".mCSB_" + i.idx + "_scrollbar");
                            r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                        }
                    })
                }
            },
            f = function() {
                return "object" != typeof e(this) || e(this).length < 1 ? n : this
            },
            h = function(t) {
                var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    n = ["minimal", "minimal-dark"],
                    i = ["minimal", "minimal-dark"],
                    r = ["minimal", "minimal-dark"];
                t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
            },
            m = function(e) {
                l[e] && (clearTimeout(l[e]), $(l, e))
            },
            p = function(e) {
                return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
            },
            g = function(e) {
                return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
            },
            v = function() {
                var t = e(this),
                    n = t.data(a),
                    i = n.opt,
                    r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                    u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = i.autoHideScrollbar ? " " + d[6] : "",
                    h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
                i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
                var m = e("#mCSB_" + n.idx),
                    p = e("#mCSB_" + n.idx + "_container");
                "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
                var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
            },
            x = function(t) {
                var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                        return e(this).outerWidth(!0)
                    }).get())],
                    a = t.parent().width();
                return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
            },
            _ = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx + "_container");
                if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                    i.css({
                        width: "auto",
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var r = Math.ceil(i[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                        width: r,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : i.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap()
                }
            },
            w = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e(".mCSB_" + o.idx + "_scrollbar:first"),
                    r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
                    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
                n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
            },
            S = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                    c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
                    d = s && c[1] < c[0] ? c[0] : c[1],
                    u = s && c[3] < c[2] ? c[2] : c[3];
                r[0].css({
                    height: d,
                    "max-height": r[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": c[0] + "px"
                }), r[1].css({
                    width: u,
                    "max-width": r[1].parent().width() - 10
                })
            },
            b = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                o.scrollRatio = {
                    y: s[0],
                    x: s[1]
                }
            },
            C = function(e, t, o) {
                var a = o ? d[0] + "_expanded" : "",
                    n = e.closest(".mCSB_scrollTools");
                "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])))
            },
            y = function() {
                var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                    l = null == o.overflowed ? i.width() : i.outerWidth(!1),
                    s = i[0].scrollHeight,
                    c = i[0].scrollWidth;
                return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()]
            },
            B = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx),
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                    var s = dx = 0;
                    "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX")
                }
            },
            T = function() {
                function t() {
                    r = setTimeout(function() {
                        e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t()
                    }, 100)
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt;
                if (!n.bindEvents) {
                    if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
                        var r;
                        t()
                    }
                    P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0
                }
            },
            k = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = ".mCSB_" + o.idx + "_scrollbar",
                    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                    s = e("#mCSB_" + o.idx + "_container");
                n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function() {
                    e(this).unbind("." + i)
                }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1)
            },
            M = function(t) {
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = e("#mCSB_" + n.idx + "_container_wrapper"),
                    l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
                "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
            },
            O = function(t) {
                var o = t.type,
                    a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                    n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                switch (o) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                            r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                        return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                    default:
                        return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
                }
            },
            I = function() {
                function t(e, t, a, n) {
                    if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
                        s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                    else var i = "y",
                        s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                    G(r, s.toString(), {
                        dir: i,
                        drag: !0
                    })
                }
                var o, n, i, r = e(this),
                    l = r.data(a),
                    d = l.opt,
                    u = a + "_" + l.idx,
                    f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                    h = e("#mCSB_" + l.idx + "_container"),
                    m = e("#" + f[0] + ",#" + f[1]),
                    p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
                    g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
                m.bind("contextmenu." + u, function(e) {
                    e.preventDefault()
                }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
                    if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
                        c = !0, s && (document.onselectstart = function() {
                            return !1
                        }), L.call(h, !1), Q(r), o = e(this);
                        var a = o.offset(),
                            l = O(t)[0] - a.top,
                            u = O(t)[1] - a.left,
                            f = o.height() + a.top,
                            m = o.width() + a.left;
                        f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar)
                    }
                }).bind("touchmove." + u, function(e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var a = o.offset(),
                        r = O(e)[0] - a.top,
                        l = O(e)[1] - a.left;
                    t(n, i, r, l)
                }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
                    if (o) {
                        var a = o.offset(),
                            r = O(e)[0] - a.top,
                            l = O(e)[1] - a.left;
                        if (n === r && i === l) return;
                        t(n, i, r, l)
                    }
                }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function(e) {
                    o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0)
                })
            },
            D = function() {
                function o(e) {
                    if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
                    var o = I.offset();
                    u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]]
                }

                function n(e) {
                    if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
                        g = K();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left,
                            n = "mcsLinearOut";
                        if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
                            r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
                        if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
                            h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                        r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0)
                    }
                }

                function i(e) {
                    if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), Q(y), p = K();
                    var o = M.offset();
                    h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = []
                }

                function r(e) {
                    if (te(e) && !c && !O(e)[2]) {
                        d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K();
                        var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left;
                        if (!(v - g > 30)) {
                            _ = 1e3 / (v - p);
                            var n = "mcsEaseOut",
                                i = 2.5 > _,
                                r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                            x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                            var u = [Math.abs(x[0]), Math.abs(x[1])];
                            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                            var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                            w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                            var y = parseInt(T.contentTouchScroll) || 0;
                            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1)
                        }
                    }
                }

                function l(e, t) {
                    var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
                }

                function s(e, t, o, a, n, i) {
                    e && G(y, e.toString(), {
                        dur: t,
                        scrollEasing: o,
                        dir: a,
                        overwrite: n,
                        drag: i
                    })
                }
                var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this),
                    B = y.data(a),
                    T = B.opt,
                    k = a + "_" + B.idx,
                    M = e("#mCSB_" + B.idx),
                    I = e("#mCSB_" + B.idx + "_container"),
                    D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
                    E = [],
                    W = [],
                    R = 0,
                    L = "yx" === T.axis ? "none" : "all",
                    z = [],
                    P = I.find("iframe"),
                    H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                    U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                I.bind(H[0], function(e) {
                    o(e)
                }).bind(H[1], function(e) {
                    n(e)
                }), M.bind(H[0], function(e) {
                    i(e)
                }).bind(H[2], function(e) {
                    r(e)
                }), P.length && P.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
                            o(e), i(e)
                        }).bind(H[1], function(e) {
                            n(e)
                        }).bind(H[2], function(e) {
                            r(e)
                        })
                    })
                })
            },
            E = function() {
                function o() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                }

                function n(e, t, o) {
                    d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null)
                }
                var i, r = e(this),
                    l = r.data(a),
                    s = l.opt,
                    d = l.sequential,
                    u = a + "_" + l.idx,
                    f = e("#mCSB_" + l.idx + "_container"),
                    h = f.parent();
                f.bind("mousedown." + u, function(e) {
                    t || i || (i = 1, c = !0)
                }).add(document).bind("mousemove." + u, function(e) {
                    if (!t && i && o()) {
                        var a = f.offset(),
                            r = O(e)[0] - a.top + f[0].offsetTop,
                            c = O(e)[1] - a.left + f[0].offsetLeft;
                        r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                    }
                }).bind("mouseup." + u + " dragend." + u, function(e) {
                    t || (i && (i = 0, n("off", null)), c = !1)
                })
            },
            W = function() {
                function t(t, a) {
                    if (Q(o), !z(o, t.target)) {
                        var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                            d = i.scrollInertia;
                        if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
                            f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                            p = c[1][0].offsetLeft,
                            g = c[1].parent().width() - c[1].width(),
                            v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                        else var u = "y",
                            f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                            p = c[0][0].offsetTop,
                            g = c[0].parent().height() - c[0].height(),
                            v = t.deltaY || a;
                        "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), {
                            dir: u,
                            dur: d
                        }))
                    }
                }
                if (e(this).data(a)) {
                    var o = e(this),
                        n = o.data(a),
                        i = n.opt,
                        r = a + "_" + n.idx,
                        l = e("#mCSB_" + n.idx),
                        c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + n.idx + "_container").find("iframe");
                    d.length && d.each(function() {
                        e(this).bind("load", function() {
                            A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                                t(e, o)
                            })
                        })
                    }), l.bind("mousewheel." + r, function(e, o) {
                        t(e, o)
                    })
                }
            },
            R = new Object,
            A = function(t) {
                var o = !1,
                    a = !1,
                    n = null;
                if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a];
                if (t) {
                    try {
                        var i = t.contentDocument || t.contentWindow.document;
                        n = i.body.innerHTML
                    } catch (r) {}
                    o = null !== n
                } else {
                    try {
                        var i = top.document;
                        n = i.body.innerHTML
                    } catch (r) {}
                    o = null !== n
                }
                return a !== !1 && (R[a] = o), o
            },
            L = function(e) {
                var t = this.find("iframe");
                if (t.length) {
                    var o = e ? "auto" : "none";
                    t.css("pointer-events", o)
                }
            },
            z = function(t, o) {
                var n = o.nodeName.toLowerCase(),
                    i = t.data(a).opt.mouseWheel.disableOver,
                    r = ["select", "textarea"];
                return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
            },
            P = function() {
                var t, o = e(this),
                    n = o.data(a),
                    i = a + "_" + n.idx,
                    r = e("#mCSB_" + n.idx + "_container"),
                    l = r.parent(),
                    s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
                s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) {
                    c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1)
                }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function(e) {
                    c = !1
                }).bind("click." + i, function(a) {
                    if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                        Q(o);
                        var i = e(this),
                            s = i.find(".mCSB_dragger");
                        if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!n.overflowed[1]) return;
                            var c = "x",
                                u = a.pageX > s.offset().left ? -1 : 1,
                                f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                        } else {
                            if (!n.overflowed[0]) return;
                            var c = "y",
                                u = a.pageY > s.offset().top ? -1 : 1,
                                f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                        }
                        G(o, f.toString(), {
                            dir: c,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            H = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = r.parent();
                r.bind("focusin." + i, function(o) {
                    var a = e(document.activeElement),
                        i = r.find(".mCustomScrollBox").length,
                        s = 0;
                    a.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? (s + 17) * i : 0, t[0]._focusTimeout = setTimeout(function() {
                        var e = [ae(a)[0], ae(a)[1]],
                            o = [r[0].offsetTop, r[0].offsetLeft],
                            i = [o[0] + e[0] >= 0 && o[0] + e[0] < l.height() - a.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < l.width() - a.outerWidth(!1)],
                            c = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
                        "x" === n.axis || i[0] || G(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: s
                        }), "y" === n.axis || i[1] || G(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: s
                        })
                    }, t[0]._focusTimer))
                })
            },
            U = function() {
                var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e("#mCSB_" + o.idx + "_container").parent();
                i.bind("scroll." + n, function(t) {
                    (0 !== i.scrollTop() || 0 !== i.scrollLeft()) && e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            F = function() {
                var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = o.sequential,
                    r = a + "_" + o.idx,
                    l = ".mCSB_" + o.idx + "_scrollbar",
                    s = e(l + ">a");
                s.bind("contextmenu." + r, function(e) {
                    e.preventDefault()
                }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                    function r(e, o) {
                        i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o)
                    }
                    if (a.preventDefault(), ee(a)) {
                        var l = e(this).attr("class");
                        switch (i.type = n.scrollButtons.scrollType, a.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === i.type) return;
                                c = !0, o.tweenRunning = !1, r("on", l);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === i.type) return;
                                c = !1, i.dir && r("off", l);
                                break;
                            case "click":
                                if ("stepped" !== i.type || o.tweenRunning) return;
                                r("on", l)
                        }
                    }
                })
            },
            q = function() {
                function t(t) {
                    function a(e, t) {
                        r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t)
                    }
                    switch (t.type) {
                        case "blur":
                            n.tweenRunning && r.dir && a("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var l = t.keyCode ? t.keyCode : t.which,
                                s = "on";
                            if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                                if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l))
                            } else if (33 === l || 34 === l) {
                                if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    Q(o);
                                    var f = 34 === l ? -1 : 1;
                                    if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                        m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                                    else var h = "y",
                                        m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                                    G(o, m.toString(), {
                                        dir: h,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                else var h = "y",
                                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                G(o, m.toString(), {
                                    dir: h,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                    }
                }
                var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = n.sequential,
                    l = a + "_" + n.idx,
                    s = e("#mCSB_" + n.idx),
                    c = e("#mCSB_" + n.idx + "_container"),
                    d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    h = ["blur." + l + " keydown." + l + " keyup." + l];
                f.length && f.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                            t(e)
                        })
                    })
                }), s.attr("tabindex", "0").bind(h[0], function(e) {
                    t(e)
                })
            },
            j = function(t, o, n, i, r) {
                function l(e) {
                    u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                    var o = "stepped" !== f.type,
                        a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
                        n = e ? o ? 7.5 : 40 : 2.5,
                        s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
                        v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                        x = "auto" !== f.scrollAmount ? v : m,
                        _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        w = e ? !0 : !1;
                    return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), {
                        dir: f.dir[0],
                        scrollEasing: _,
                        dur: a,
                        onComplete: w
                    }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() {
                        l()
                    }, a)))
                }

                function s() {
                    clearTimeout(f.step), $(f, "step"), Q(t)
                }
                var c = t.data(a),
                    u = c.opt,
                    f = c.sequential,
                    h = e("#mCSB_" + c.idx + "_container"),
                    m = "stepped" === f.type ? !0 : !1,
                    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                switch (o) {
                    case "on":
                        if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;
                        l(m);
                        break;
                    case "off":
                        s(), (m || c.tweenRunning && f.dir) && l(!0)
                }
            },
            Y = function(t) {
                var o = e(this).data(a).opt,
                    n = [];
                return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
            },
            X = function(t, o) {
                if (null != t && "undefined" != typeof t) {
                    var n = e(this),
                        i = n.data(a),
                        r = i.opt,
                        l = e("#mCSB_" + i.idx + "_container"),
                        s = l.parent(),
                        c = typeof t;
                    o || (o = "x" === r.axis ? "x" : "y");
                    var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
                        f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                        h = "x" === o ? "left" : "top";
                    switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var m = t.jquery ? t : e(t);
                            if (!m.length) return;
                            return "x" === o ? ae(m)[1] : ae(m)[0];
                        case "string":
                        case "number":
                            if (oe(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var p = f + parseInt(t.split("+=")[1]);
                                return p >= 0 ? 0 : Math.abs(p)
                            }
                            if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || "left" === t) return 0;
                            if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                            if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var m = l.find(":" + t);
                                return "x" === o ? ae(m)[1] : ae(m)[0]
                            }
                            return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]))
                    }
                }
            },
            N = function(t) {
                function o() {
                    return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(f[0].autoUpdate = setTimeout(function() {
                        return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function() {
                            n(this)
                        }))
                    }, c.advanced.autoUpdateTimeout))
                }

                function n(t) {
                    function o(e, t) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }

                    function a() {
                        this.onload = null, e(t).addClass(d[2]), r(2)
                    }
                    if (e(t).hasClass(d[2])) return void r();
                    var n = new Image;
                    n.onload = o(n, a), n.src = t.src
                }

                function i() {
                    c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                    var e = 0,
                        t = f.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                        e += this.offsetHeight + this.offsetWidth
                    }), e
                }

                function r(e) {
                    clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e)
                }
                var l = e(this),
                    s = l.data(a),
                    c = s.opt,
                    f = e("#mCSB_" + s.idx + "_container");
                return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o()
            },
            V = function(e, t, o) {
                return Math.round(e / t) * t - o
            },
            Q = function(t) {
                var o = t.data(a),
                    n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
                n.each(function() {
                    Z.call(this)
                })
            },
            G = function(t, o, n) {
                function i(e) {
                    return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
                }

                function r() {
                    return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w]
                }

                function l() {
                    var e = [h[0].offsetTop, h[0].offsetLeft],
                        o = [x[0].offsetTop, x[0].offsetLeft],
                        a = [h.outerHeight(!1), h.outerWidth(!1)],
                        i = [f.height(), f.width()];
                    t[0].mcs = {
                        content: h,
                        top: e[0],
                        left: e[1],
                        draggerTop: o[0],
                        draggerLeft: o[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                        direction: n.dir
                    }
                }
                var s = t.data(a),
                    c = s.opt,
                    d = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    n = e.extend(d, n),
                    u = [n.dur, n.drag ? 0 : n.dur],
                    f = e("#mCSB_" + s.idx),
                    h = e("#mCSB_" + s.idx + "_container"),
                    m = h.parent(),
                    p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (s.trigger = n.trigger, (0 !== m.scrollTop() || 0 !== m.scrollLeft()) && (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                    if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
                        var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                        o = V(o, v, c.snapOffset)
                    }
                    switch (n.dir) {
                        case "x":
                            var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                                _ = "left",
                                w = h[0].offsetLeft,
                                S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                                y = p[1],
                                B = g[1],
                                T = y > 0 ? y / s.scrollRatio.x : 0,
                                k = B > 0 ? B / s.scrollRatio.x : 0;
                            break;
                        case "y":
                            var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                                _ = "top",
                                w = h[0].offsetTop,
                                S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                                y = p[0],
                                B = g[0],
                                T = y > 0 ? y / s.scrollRatio.y : 0,
                                k = B > 0 ? B / s.scrollRatio.y : 0
                    }
                    b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), (s.tweenRunning || !(0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0])) && J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                        onStart: function() {
                            n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r())
                        },
                        onUpdate: function() {
                            n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]))
                        },
                        onComplete: function() {
                            if (n.callbacks && n.onComplete) {
                                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                                var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function() {
                                    i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide")
                                }, e)
                            }
                        }
                    })
                }
            },
            J = function(e, t, o, a, n, i, r) {
                function l() {
                    S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call())
                }

                function s() {
                    a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call()
                }

                function c() {
                    f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                        return s(), setTimeout(e, .01)
                    }, S.id = h(l)
                }

                function d() {
                    null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null)
                }

                function u(e, t, o, a, n) {
                    switch (n) {
                        case "linear":
                        case "mcsLinear":
                            return o * e / a + t;
                        case "mcsLinearOut":
                            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= a, e--, -o * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var i = (e /= a) * e,
                                r = i * e;
                            return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                    }
                }
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                var f, h, r = r || {},
                    m = r.onStart || function() {},
                    p = r.onUpdate || function() {},
                    g = r.onComplete || function() {},
                    v = K(),
                    x = 0,
                    _ = e.offsetTop,
                    w = e.style,
                    S = e._mTween[t];
                "left" === t && (_ = e.offsetLeft);
                var b = o - _;
                S.stop = 0, "none" !== i && d(), c()
            },
            K = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            Z = function() {
                var e = this;
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                    var a = t[o];
                    e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
                }
            },
            $ = function(e, t) {
                try {
                    delete e[t]
                } catch (o) {
                    e[t] = null
                }
            },
            ee = function(e) {
                return !(e.which && 1 !== e.which)
            },
            te = function(e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t)
            },
            oe = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            ae = function(e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
            },
            ne = function() {
                function e() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
                var t = e();
                return t ? document[t] : !1
            };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function() {
            e(n)[o](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t),
                        i = n.parents(".mCSB_container");
                    if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                },
                mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                    var n, i, r, l, s = e(t),
                        c = s.parents(".mCSB_container"),
                        d = "exact" === a[3] ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [.9, .1],
                            [.6, .4]
                        ];
                    if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o) return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});

// Generated by CoffeeScript 1.6.2
