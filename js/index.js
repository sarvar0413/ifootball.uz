if (function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t)
    } : e(t)
  }("undefined" != typeof window ? window : this, function (D, t) {
    "use strict";
    var e = [],
      k = D.document,
      i = Object.getPrototypeOf,
      o = e.slice,
      m = e.concat,
      l = e.push,
      s = e.indexOf,
      n = {},
      r = n.toString,
      g = n.hasOwnProperty,
      a = g.toString,
      u = a.call(Object),
      v = {},
      y = function (t) {
        return "function" == typeof t && "number" != typeof t.nodeType
      },
      b = function (t) {
        return null != t && t === t.window
      },
      c = {
        type: !0,
        src: !0,
        noModule: !0
      };

    function w(t, e, n) {
      var i, s = (e = e || k).createElement("script");
      if (s.text = t, n)
        for (i in c) n[i] && (s[i] = n[i]);
      e.head.appendChild(s).parentNode.removeChild(s)
    }

    function x(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[r.call(t)] || "object" : typeof t
    }
    var d = "3.3.1",
      T = function (t, e) {
        return new T.fn.init(t, e)
      },
      h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function f(t) {
      var e = !!t && "length" in t && t.length,
        n = x(t);
      return !y(t) && !b(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    T.fn = T.prototype = {
      jquery: d,
      constructor: T,
      length: 0,
      toArray: function () {
        return o.call(this)
      },
      get: function (t) {
        return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
      },
      pushStack: function (t) {
        var e = T.merge(this.constructor(), t);
        return e.prevObject = this, e
      },
      each: function (t) {
        return T.each(this, t)
      },
      map: function (n) {
        return this.pushStack(T.map(this, function (t, e) {
          return n.call(t, e, t)
        }))
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0);
        return this.pushStack(0 <= n && n < e ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: l,
      sort: e.sort,
      splice: e.splice
    }, T.extend = T.fn.extend = function () {
      var t, e, n, i, s, r, a = arguments[0] || {},
        o = 1,
        l = arguments.length,
        u = !1;
      for ("boolean" == typeof a && (u = a, a = arguments[o] || {}, o++), "object" == typeof a || y(a) || (a = {}), o === l && (a = this, o--); o < l; o++)
        if (null != (t = arguments[o]))
          for (e in t) n = a[e], a !== (i = t[e]) && (u && i && (T.isPlainObject(i) || (s = Array.isArray(i))) ? (r = s ? (s = !1, n && Array.isArray(n) ? n : []) : n && T.isPlainObject(n) ? n : {}, a[e] = T.extend(u, r, i)) : void 0 !== i && (a[e] = i));
      return a
    }, T.extend({
      expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t)
      },
      noop: function () {},
      isPlainObject: function (t) {
        var e, n;
        return !(!t || "[object Object]" !== r.call(t)) && (!(e = i(t)) || "function" == typeof (n = g.call(e, "constructor") && e.constructor) && a.call(n) === u)
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0
      },
      globalEval: function (t) {
        w(t)
      },
      each: function (t, e) {
        var n, i = 0;
        if (f(t))
          for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
        else
          for (i in t)
            if (!1 === e.call(t[i], i, t[i])) break;
        return t
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(h, "")
      },
      makeArray: function (t, e) {
        var n = e || [];
        return null != t && (f(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
      },
      inArray: function (t, e, n) {
        return null == e ? -1 : s.call(e, t, n)
      },
      merge: function (t, e) {
        for (var n = +e.length, i = 0, s = t.length; i < n; i++) t[s++] = e[i];
        return t.length = s, t
      },
      grep: function (t, e, n) {
        for (var i = [], s = 0, r = t.length, a = !n; s < r; s++) !e(t[s], s) !== a && i.push(t[s]);
        return i
      },
      map: function (t, e, n) {
        var i, s, r = 0,
          a = [];
        if (f(t))
          for (i = t.length; r < i; r++) null != (s = e(t[r], r, n)) && a.push(s);
        else
          for (r in t) null != (s = e(t[r], r, n)) && a.push(s);
        return m.apply([], a)
      },
      guid: 1,
      support: v
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
      n["[object " + e + "]"] = e.toLowerCase()
    });
    var p = function (n) {
      var t, f, w, r, s, p, d, m, x, l, u, _, D, a, k, g, o, c, v, T = "sizzle" + 1 * new Date,
        y = n.document,
        C = 0,
        i = 0,
        h = at(),
        b = at(),
        S = at(),
        M = function (t, e) {
          return t === e && (u = !0), 0
        },
        $ = {}.hasOwnProperty,
        e = [],
        A = e.pop,
        E = e.push,
        O = e.push,
        N = e.slice,
        j = function (t, e) {
          for (var n = 0, i = t.length; n < i; n++)
            if (t[n] === e) return n;
          return -1
        },
        Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        I = "[\\x20\\t\\r\\n\\f]",
        U = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        P = "\\[" + I + "*(" + U + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + U + "))|)" + I + "*\\]",
        F = ":(" + U + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
        L = new RegExp(I + "+", "g"),
        R = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
        W = new RegExp("^" + I + "*," + I + "*"),
        H = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
        V = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
        q = new RegExp(F),
        z = new RegExp("^" + U + "$"),
        B = {
          ID: new RegExp("^#(" + U + ")"),
          CLASS: new RegExp("^\\.(" + U + ")"),
          TAG: new RegExp("^(" + U + "|[*])"),
          ATTR: new RegExp("^" + P),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Y + ")$", "i"),
          needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
        },
        G = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        K = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
        tt = function (t, e, n) {
          var i = "0x" + e - 65536;
          return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        nt = function (t, e) {
          return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        },
        it = function () {
          _()
        },
        st = yt(function (t) {
          return !0 === t.disabled && ("form" in t || "label" in t)
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        O.apply(e = N.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
      } catch (t) {
        O = {
          apply: e.length ? function (t, e) {
            E.apply(t, N.call(e))
          } : function (t, e) {
            for (var n = t.length, i = 0; t[n++] = e[i++];);
            t.length = n - 1
          }
        }
      }

      function rt(t, e, n, i) {
        var s, r, a, o, l, u, c, d = e && e.ownerDocument,
          h = e ? e.nodeType : 9;
        if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;
        if (!i && ((e ? e.ownerDocument || e : y) !== D && _(e), e = e || D, k)) {
          if (11 !== h && (l = X.exec(t)))
            if (s = l[1]) {
              if (9 === h) {
                if (!(a = e.getElementById(s))) return n;
                if (a.id === s) return n.push(a), n
              } else if (d && (a = d.getElementById(s)) && v(e, a) && a.id === s) return n.push(a), n
            } else {
              if (l[2]) return O.apply(n, e.getElementsByTagName(t)), n;
              if ((s = l[3]) && f.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(s)), n
            } if (f.qsa && !S[t + " "] && (!g || !g.test(t))) {
            if (1 !== h) d = e, c = t;
            else if ("object" !== e.nodeName.toLowerCase()) {
              for ((o = e.getAttribute("id")) ? o = o.replace(et, nt) : e.setAttribute("id", o = T), r = (u = p(t)).length; r--;) u[r] = "#" + o + " " + vt(u[r]);
              c = u.join(","), d = J.test(t) && mt(e.parentNode) || e
            }
            if (c) try {
              return O.apply(n, d.querySelectorAll(c)), n
            } catch (t) {} finally {
              o === T && e.removeAttribute("id")
            }
          }
        }
        return m(t.replace(R, "$1"), e, n, i)
      }

      function at() {
        var i = [];
        return function t(e, n) {
          return i.push(e + " ") > w.cacheLength && delete t[i.shift()], t[e + " "] = n
        }
      }

      function ot(t) {
        return t[T] = !0, t
      }

      function lt(t) {
        var e = D.createElement("fieldset");
        try {
          return !!t(e)
        } catch (t) {
          return !1
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null
        }
      }

      function ut(t, e) {
        for (var n = t.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = e
      }

      function ct(t, e) {
        var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === e) return -1;
        return t ? 1 : -1
      }

      function dt(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }

      function ht(n) {
        return function (t) {
          var e = t.nodeName.toLowerCase();
          return ("input" === e || "button" === e) && t.type === n
        }
      }

      function ft(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && st(t) === e : t.disabled === e : "label" in t && t.disabled === e
        }
      }

      function pt(a) {
        return ot(function (r) {
          return r = +r, ot(function (t, e) {
            for (var n, i = a([], t.length, r), s = i.length; s--;) t[n = i[s]] && (t[n] = !(e[n] = t[n]))
          })
        })
      }

      function mt(t) {
        return t && void 0 !== t.getElementsByTagName && t
      }
      for (t in f = rt.support = {}, s = rt.isXML = function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName
        }, _ = rt.setDocument = function (t) {
          var e, n, i = t ? t.ownerDocument || t : y;
          return i !== D && 9 === i.nodeType && i.documentElement && (a = (D = i).documentElement, k = !s(D), y !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", it, !1) : n.attachEvent && n.attachEvent("onunload", it)), f.attributes = lt(function (t) {
            return t.className = "i", !t.getAttribute("className")
          }), f.getElementsByTagName = lt(function (t) {
            return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
          }), f.getElementsByClassName = Z.test(D.getElementsByClassName), f.getById = lt(function (t) {
            return a.appendChild(t).id = T, !D.getElementsByName || !D.getElementsByName(T).length
          }), f.getById ? (w.filter.ID = function (t) {
            var e = t.replace(K, tt);
            return function (t) {
              return t.getAttribute("id") === e
            }
          }, w.find.ID = function (t, e) {
            if (void 0 !== e.getElementById && k) {
              var n = e.getElementById(t);
              return n ? [n] : []
            }
          }) : (w.filter.ID = function (t) {
            var n = t.replace(K, tt);
            return function (t) {
              var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
              return e && e.value === n
            }
          }, w.find.ID = function (t, e) {
            if (void 0 !== e.getElementById && k) {
              var n, i, s, r = e.getElementById(t);
              if (r) {
                if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                for (s = e.getElementsByName(t), i = 0; r = s[i++];)
                  if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
              }
              return []
            }
          }), w.find.TAG = f.getElementsByTagName ? function (t, e) {
            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
          } : function (t, e) {
            var n, i = [],
              s = 0,
              r = e.getElementsByTagName(t);
            if ("*" !== t) return r;
            for (; n = r[s++];) 1 === n.nodeType && i.push(n);
            return i
          }, w.find.CLASS = f.getElementsByClassName && function (t, e) {
            if (void 0 !== e.getElementsByClassName && k) return e.getElementsByClassName(t)
          }, o = [], g = [], (f.qsa = Z.test(D.querySelectorAll)) && (lt(function (t) {
            a.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + Y + ")"), t.querySelectorAll("[id~=" + T + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || g.push(".#.+[+~]")
          }), lt(function (t) {
            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var e = D.createElement("input");
            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
          })), (f.matchesSelector = Z.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && lt(function (t) {
            f.disconnectedMatch = c.call(t, "*"), c.call(t, "[s!='']:x"), o.push("!=", F)
          }), g = g.length && new RegExp(g.join("|")), o = o.length && new RegExp(o.join("|")), e = Z.test(a.compareDocumentPosition), v = e || Z.test(a.contains) ? function (t, e) {
            var n = 9 === t.nodeType ? t.documentElement : t,
              i = e && e.parentNode;
            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
          } : function (t, e) {
            if (e)
              for (; e = e.parentNode;)
                if (e === t) return !0;
            return !1
          }, M = e ? function (t, e) {
            if (t === e) return u = !0, 0;
            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
            return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === y && v(y, t) ? -1 : e === D || e.ownerDocument === y && v(y, e) ? 1 : l ? j(l, t) - j(l, e) : 0 : 4 & n ? -1 : 1)
          } : function (t, e) {
            if (t === e) return u = !0, 0;
            var n, i = 0,
              s = t.parentNode,
              r = e.parentNode,
              a = [t],
              o = [e];
            if (!s || !r) return t === D ? -1 : e === D ? 1 : s ? -1 : r ? 1 : l ? j(l, t) - j(l, e) : 0;
            if (s === r) return ct(t, e);
            for (n = t; n = n.parentNode;) a.unshift(n);
            for (n = e; n = n.parentNode;) o.unshift(n);
            for (; a[i] === o[i];) i++;
            return i ? ct(a[i], o[i]) : a[i] === y ? -1 : o[i] === y ? 1 : 0
          }), D
        }, rt.matches = function (t, e) {
          return rt(t, null, null, e)
        }, rt.matchesSelector = function (t, e) {
          if ((t.ownerDocument || t) !== D && _(t), e = e.replace(V, "='$1']"), f.matchesSelector && k && !S[e + " "] && (!o || !o.test(e)) && (!g || !g.test(e))) try {
            var n = c.call(t, e);
            if (n || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
          } catch (t) {}
          return 0 < rt(e, D, null, [t]).length
        }, rt.contains = function (t, e) {
          return (t.ownerDocument || t) !== D && _(t), v(t, e)
        }, rt.attr = function (t, e) {
          (t.ownerDocument || t) !== D && _(t);
          var n = w.attrHandle[e.toLowerCase()],
            i = n && $.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !k) : void 0;
          return void 0 !== i ? i : f.attributes || !k ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, rt.escape = function (t) {
          return (t + "").replace(et, nt)
        }, rt.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t)
        }, rt.uniqueSort = function (t) {
          var e, n = [],
            i = 0,
            s = 0;
          if (u = !f.detectDuplicates, l = !f.sortStable && t.slice(0), t.sort(M), u) {
            for (; e = t[s++];) e === t[s] && (i = n.push(s));
            for (; i--;) t.splice(n[i], 1)
          }
          return l = null, t
        }, r = rt.getText = function (t) {
          var e, n = "",
            i = 0,
            s = t.nodeType;
          if (s) {
            if (1 === s || 9 === s || 11 === s) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
            } else if (3 === s || 4 === s) return t.nodeValue
          } else
            for (; e = t[i++];) n += r(e);
          return n
        }, (w = rt.selectors = {
          cacheLength: 50,
          createPseudo: ot,
          match: B,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function (t) {
              return t[1] = t[1].replace(K, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(K, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
            },
            CHILD: function (t) {
              return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
            },
            PSEUDO: function (t) {
              var e, n = !t[6] && t[2];
              return B.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && q.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
            }
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(K, tt).toLowerCase();
              return "*" === t ? function () {
                return !0
              } : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e
              }
            },
            CLASS: function (t) {
              var e = h[t + " "];
              return e || (e = new RegExp("(^|" + I + ")" + t + "(" + I + "|$)")) && h(t, function (t) {
                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
              })
            },
            ATTR: function (n, i, s) {
              return function (t) {
                var e = rt.attr(t, n);
                return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === s : "!=" === i ? e !== s : "^=" === i ? s && 0 === e.indexOf(s) : "*=" === i ? s && -1 < e.indexOf(s) : "$=" === i ? s && e.slice(-s.length) === s : "~=" === i ? -1 < (" " + e.replace(L, " ") + " ").indexOf(s) : "|=" === i && (e === s || e.slice(0, s.length + 1) === s + "-"))
              }
            },
            CHILD: function (p, t, e, m, g) {
              var v = "nth" !== p.slice(0, 3),
                y = "last" !== p.slice(-4),
                b = "of-type" === t;
              return 1 === m && 0 === g ? function (t) {
                return !!t.parentNode
              } : function (t, e, n) {
                var i, s, r, a, o, l, u = v !== y ? "nextSibling" : "previousSibling",
                  c = t.parentNode,
                  d = b && t.nodeName.toLowerCase(),
                  h = !n && !b,
                  f = !1;
                if (c) {
                  if (v) {
                    for (; u;) {
                      for (a = t; a = a[u];)
                        if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                      l = u = "only" === p && !l && "nextSibling"
                    }
                    return !0
                  }
                  if (l = [y ? c.firstChild : c.lastChild], y && h) {
                    for (f = (o = (i = (s = (r = (a = c)[T] || (a[T] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === C && i[1]) && i[2], a = o && c.childNodes[o]; a = ++o && a && a[u] || (f = o = 0) || l.pop();)
                      if (1 === a.nodeType && ++f && a === t) {
                        s[p] = [C, o, f];
                        break
                      }
                  } else if (h && (f = o = (i = (s = (r = (a = t)[T] || (a[T] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === C && i[1]), !1 === f)
                    for (;
                      (a = ++o && a && a[u] || (f = o = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++f || (h && ((s = (r = a[T] || (a[T] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] = [C, f]), a !== t)););
                  return (f -= g) === m || f % m == 0 && 0 <= f / m
                }
              }
            },
            PSEUDO: function (t, r) {
              var e, a = w.pseudos[t] || w.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
              return a[T] ? a(r) : 1 < a.length ? (e = [t, t, "", r], w.setFilters.hasOwnProperty(t.toLowerCase()) ? ot(function (t, e) {
                for (var n, i = a(t, r), s = i.length; s--;) t[n = j(t, i[s])] = !(e[n] = i[s])
              }) : function (t) {
                return a(t, 0, e)
              }) : a
            }
          },
          pseudos: {
            not: ot(function (t) {
              var i = [],
                s = [],
                o = d(t.replace(R, "$1"));
              return o[T] ? ot(function (t, e, n, i) {
                for (var s, r = o(t, null, i, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
              }) : function (t, e, n) {
                return i[0] = t, o(i, null, n, s), i[0] = null, !s.pop()
              }
            }),
            has: ot(function (e) {
              return function (t) {
                return 0 < rt(e, t).length
              }
            }),
            contains: ot(function (e) {
              return e = e.replace(K, tt),
                function (t) {
                  return -1 < (t.textContent || t.innerText || r(t)).indexOf(e)
                }
            }),
            lang: ot(function (n) {
              return z.test(n || "") || rt.error("unsupported lang: " + n), n = n.replace(K, tt).toLowerCase(),
                function (t) {
                  var e;
                  do {
                    if (e = k ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            }),
            target: function (t) {
              var e = n.location && n.location.hash;
              return e && e.slice(1) === t.id
            },
            root: function (t) {
              return t === a
            },
            focus: function (t) {
              return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
            },
            enabled: ft(!1),
            disabled: ft(!0),
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && !!t.checked || "option" === e && !!t.selected
            },
            selected: function (t) {
              return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0
            },
            parent: function (t) {
              return !w.pseudos.empty(t)
            },
            header: function (t) {
              return Q.test(t.nodeName)
            },
            input: function (t) {
              return G.test(t.nodeName)
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && "button" === t.type || "button" === e
            },
            text: function (t) {
              var e;
              return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: pt(function () {
              return [0]
            }),
            last: pt(function (t, e) {
              return [e - 1]
            }),
            eq: pt(function (t, e, n) {
              return [n < 0 ? n + e : n]
            }),
            even: pt(function (t, e) {
              for (var n = 0; n < e; n += 2) t.push(n);
              return t
            }),
            odd: pt(function (t, e) {
              for (var n = 1; n < e; n += 2) t.push(n);
              return t
            }),
            lt: pt(function (t, e, n) {
              for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
              return t
            }),
            gt: pt(function (t, e, n) {
              for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
              return t
            })
          }
        }).pseudos.nth = w.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) w.pseudos[t] = dt(t);
      for (t in {
          submit: !0,
          reset: !0
        }) w.pseudos[t] = ht(t);

      function gt() {}

      function vt(t) {
        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
        return i
      }

      function yt(o, t, e) {
        var l = t.dir,
          u = t.next,
          c = u || l,
          d = e && "parentNode" === c,
          h = i++;
        return t.first ? function (t, e, n) {
          for (; t = t[l];)
            if (1 === t.nodeType || d) return o(t, e, n);
          return !1
        } : function (t, e, n) {
          var i, s, r, a = [C, h];
          if (n) {
            for (; t = t[l];)
              if ((1 === t.nodeType || d) && o(t, e, n)) return !0
          } else
            for (; t = t[l];)
              if (1 === t.nodeType || d)
                if (s = (r = t[T] || (t[T] = {}))[t.uniqueID] || (r[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[l] || t;
                else {
                  if ((i = s[c]) && i[0] === C && i[1] === h) return a[2] = i[2];
                  if ((s[c] = a)[2] = o(t, e, n)) return !0
                } return !1
        }
      }

      function bt(s) {
        return 1 < s.length ? function (t, e, n) {
          for (var i = s.length; i--;)
            if (!s[i](t, e, n)) return !1;
          return !0
        } : s[0]
      }

      function wt(t, e, n, i, s) {
        for (var r, a = [], o = 0, l = t.length, u = null != e; o < l; o++)(r = t[o]) && (n && !n(r, i, s) || (a.push(r), u && e.push(o)));
        return a
      }

      function xt(f, p, m, g, v, t) {
        return g && !g[T] && (g = xt(g)), v && !v[T] && (v = xt(v, t)), ot(function (t, e, n, i) {
          var s, r, a, o = [],
            l = [],
            u = e.length,
            c = t || function (t, e, n) {
              for (var i = 0, s = e.length; i < s; i++) rt(t, e[i], n);
              return n
            }(p || "*", n.nodeType ? [n] : n, []),
            d = !f || !t && p ? c : wt(c, o, f, n, i),
            h = m ? v || (t ? f : u || g) ? [] : e : d;
          if (m && m(d, h, n, i), g)
            for (s = wt(h, l), g(s, [], n, i), r = s.length; r--;)(a = s[r]) && (h[l[r]] = !(d[l[r]] = a));
          if (t) {
            if (v || f) {
              if (v) {
                for (s = [], r = h.length; r--;)(a = h[r]) && s.push(d[r] = a);
                v(null, h = [], s, i)
              }
              for (r = h.length; r--;)(a = h[r]) && -1 < (s = v ? j(t, a) : o[r]) && (t[s] = !(e[s] = a))
            }
          } else h = wt(h === e ? h.splice(u, h.length) : h), v ? v(null, e, h, i) : O.apply(e, h)
        })
      }

      function _t(t) {
        for (var s, e, n, i = t.length, r = w.relative[t[0].type], a = r || w.relative[" "], o = r ? 1 : 0, l = yt(function (t) {
            return t === s
          }, a, !0), u = yt(function (t) {
            return -1 < j(s, t)
          }, a, !0), c = [function (t, e, n) {
            var i = !r && (n || e !== x) || ((s = e).nodeType ? l(t, e, n) : u(t, e, n));
            return s = null, i
          }]; o < i; o++)
          if (e = w.relative[t[o].type]) c = [yt(bt(c), e)];
          else {
            if ((e = w.filter[t[o].type].apply(null, t[o].matches))[T]) {
              for (n = ++o; n < i && !w.relative[t[n].type]; n++);
              return xt(1 < o && bt(c), 1 < o && vt(t.slice(0, o - 1).concat({
                value: " " === t[o - 2].type ? "*" : ""
              })).replace(R, "$1"), e, o < n && _t(t.slice(o, n)), n < i && _t(t = t.slice(n)), n < i && vt(t))
            }
            c.push(e)
          } return bt(c)
      }
      return gt.prototype = w.filters = w.pseudos, w.setFilters = new gt, p = rt.tokenize = function (t, e) {
        var n, i, s, r, a, o, l, u = b[t + " "];
        if (u) return e ? 0 : u.slice(0);
        for (a = t, o = [], l = w.preFilter; a;) {
          for (r in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a), o.push(s = [])), n = !1, (i = H.exec(a)) && (n = i.shift(), s.push({
              value: n,
              type: i[0].replace(R, " ")
            }), a = a.slice(n.length)), w.filter) !(i = B[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(), s.push({
            value: n,
            type: r,
            matches: i
          }), a = a.slice(n.length));
          if (!n) break
        }
        return e ? a.length : a ? rt.error(t) : b(t, o).slice(0)
      }, d = rt.compile = function (t, e) {
        var n, g, v, y, b, i, s = [],
          r = [],
          a = S[t + " "];
        if (!a) {
          for (e || (e = p(t)), n = e.length; n--;)(a = _t(e[n]))[T] ? s.push(a) : r.push(a);
          (a = S(t, (g = r, y = 0 < (v = s).length, b = 0 < g.length, i = function (t, e, n, i, s) {
            var r, a, o, l = 0,
              u = "0",
              c = t && [],
              d = [],
              h = x,
              f = t || b && w.find.TAG("*", s),
              p = C += null == h ? 1 : Math.random() || .1,
              m = f.length;
            for (s && (x = e === D || e || s); u !== m && null != (r = f[u]); u++) {
              if (b && r) {
                for (a = 0, e || r.ownerDocument === D || (_(r), n = !k); o = g[a++];)
                  if (o(r, e || D, n)) {
                    i.push(r);
                    break
                  } s && (C = p)
              }
              y && ((r = !o && r) && l--, t && c.push(r))
            }
            if (l += u, y && u !== l) {
              for (a = 0; o = v[a++];) o(c, d, e, n);
              if (t) {
                if (0 < l)
                  for (; u--;) c[u] || d[u] || (d[u] = A.call(i));
                d = wt(d)
              }
              O.apply(i, d), s && !t && 0 < d.length && 1 < l + v.length && rt.uniqueSort(i)
            }
            return s && (C = p, x = h), c
          }, y ? ot(i) : i))).selector = t
        }
        return a
      }, m = rt.select = function (t, e, n, i) {
        var s, r, a, o, l, u = "function" == typeof t && t,
          c = !i && p(t = u.selector || t);
        if (n = n || [], 1 === c.length) {
          if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (a = r[0]).type && 9 === e.nodeType && k && w.relative[r[1].type]) {
            if (!(e = (w.find.ID(a.matches[0].replace(K, tt), e) || [])[0])) return n;
            u && (e = e.parentNode), t = t.slice(r.shift().value.length)
          }
          for (s = B.needsContext.test(t) ? 0 : r.length; s-- && (a = r[s], !w.relative[o = a.type]);)
            if ((l = w.find[o]) && (i = l(a.matches[0].replace(K, tt), J.test(r[0].type) && mt(e.parentNode) || e))) {
              if (r.splice(s, 1), !(t = i.length && vt(r))) return O.apply(n, i), n;
              break
            }
        }
        return (u || d(t, c))(i, e, !k, n, !e || J.test(t) && mt(e.parentNode) || e), n
      }, f.sortStable = T.split("").sort(M).join("") === T, f.detectDuplicates = !!u, _(), f.sortDetached = lt(function (t) {
        return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
      }), lt(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || ut("type|href|height|width", function (t, e, n) {
        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), f.attributes && lt(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || ut("value", function (t, e, n) {
        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
      }), lt(function (t) {
        return null == t.getAttribute("disabled")
      }) || ut(Y, function (t, e, n) {
        var i;
        if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }), rt
    }(D);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;
    var _ = function (t, e, n) {
        for (var i = [], s = void 0 !== n;
          (t = t[e]) && 9 !== t.nodeType;)
          if (1 === t.nodeType) {
            if (s && T(t).is(n)) break;
            i.push(t)
          } return i
      },
      C = function (t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
      },
      S = T.expr.match.needsContext;

    function M(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(t, n, i) {
      return y(n) ? T.grep(t, function (t, e) {
        return !!n.call(t, e, t) !== i
      }) : n.nodeType ? T.grep(t, function (t) {
        return t === n !== i
      }) : "string" != typeof n ? T.grep(t, function (t) {
        return -1 < s.call(n, t) !== i
      }) : T.filter(n, t, i)
    }
    T.filter = function (t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, function (t) {
        return 1 === t.nodeType
      }))
    }, T.fn.extend({
      find: function (t) {
        var e, n, i = this.length,
          s = this;
        if ("string" != typeof t) return this.pushStack(T(t).filter(function () {
          for (e = 0; e < i; e++)
            if (T.contains(s[e], this)) return !0
        }));
        for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, s[e], n);
        return 1 < i ? T.uniqueSort(n) : n
      },
      filter: function (t) {
        return this.pushStack(A(this, t || [], !1))
      },
      not: function (t) {
        return this.pushStack(A(this, t || [], !0))
      },
      is: function (t) {
        return !!A(this, "string" == typeof t && S.test(t) ? T(t) : t || [], !1).length
      }
    });
    var E, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function (t, e, n) {
      var i, s;
      if (!t) return this;
      if (n = n || E, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this);
      if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : O.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
      if (i[1]) {
        if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : k, !0)), $.test(i[1]) && T.isPlainObject(e))
          for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
        return this
      }
      return (s = k.getElementById(i[2])) && (this[0] = s, this.length = 1), this
    }).prototype = T.fn, E = T(k);
    var N = /^(?:parents|prev(?:Until|All))/,
      j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function Y(t, e) {
      for (;
        (t = t[e]) && 1 !== t.nodeType;);
      return t
    }
    T.fn.extend({
      has: function (t) {
        var e = T(t, this),
          n = e.length;
        return this.filter(function () {
          for (var t = 0; t < n; t++)
            if (T.contains(this, e[t])) return !0
        })
      },
      closest: function (t, e) {
        var n, i = 0,
          s = this.length,
          r = [],
          a = "string" != typeof t && T(t);
        if (!S.test(t))
          for (; i < s; i++)
            for (n = this[i]; n && n !== e; n = n.parentNode)
              if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                r.push(n);
                break
              } return this.pushStack(1 < r.length ? T.uniqueSort(r) : r)
      },
      index: function (t) {
        return t ? "string" == typeof t ? s.call(T(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (t, e) {
        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
      },
      addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
    }), T.each({
      parent: function (t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
      },
      parents: function (t) {
        return _(t, "parentNode")
      },
      parentsUntil: function (t, e, n) {
        return _(t, "parentNode", n)
      },
      next: function (t) {
        return Y(t, "nextSibling")
      },
      prev: function (t) {
        return Y(t, "previousSibling")
      },
      nextAll: function (t) {
        return _(t, "nextSibling")
      },
      prevAll: function (t) {
        return _(t, "previousSibling")
      },
      nextUntil: function (t, e, n) {
        return _(t, "nextSibling", n)
      },
      prevUntil: function (t, e, n) {
        return _(t, "previousSibling", n)
      },
      siblings: function (t) {
        return C((t.parentNode || {}).firstChild, t)
      },
      children: function (t) {
        return C(t.firstChild)
      },
      contents: function (t) {
        return M(t, "iframe") ? t.contentDocument : (M(t, "template") && (t = t.content || t), T.merge([], t.childNodes))
      }
    }, function (i, s) {
      T.fn[i] = function (t, e) {
        var n = T.map(this, s, t);
        return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = T.filter(e, n)), 1 < this.length && (j[i] || T.uniqueSort(n), N.test(i) && n.reverse()), this.pushStack(n)
      }
    });
    var I = /[^\x20\t\r\n\f]+/g;

    function U(t) {
      return t
    }

    function P(t) {
      throw t
    }

    function F(t, e, n, i) {
      var s;
      try {
        t && y(s = t.promise) ? s.call(t).done(e).fail(n) : t && y(s = t.then) ? s.call(t, e, n) : e.apply(void 0, [t].slice(i))
      } catch (t) {
        n.apply(void 0, [t])
      }
    }
    T.Callbacks = function (i) {
      var t, n;
      i = "string" == typeof i ? (t = i, n = {}, T.each(t.match(I) || [], function (t, e) {
        n[e] = !0
      }), n) : T.extend({}, i);
      var s, e, r, a, o = [],
        l = [],
        u = -1,
        c = function () {
          for (a = a || i.once, r = s = !0; l.length; u = -1)
            for (e = l.shift(); ++u < o.length;) !1 === o[u].apply(e[0], e[1]) && i.stopOnFalse && (u = o.length, e = !1);
          i.memory || (e = !1), s = !1, a && (o = e ? [] : "")
        },
        d = {
          add: function () {
            return o && (e && !s && (u = o.length - 1, l.push(e)), function n(t) {
              T.each(t, function (t, e) {
                y(e) ? i.unique && d.has(e) || o.push(e) : e && e.length && "string" !== x(e) && n(e)
              })
            }(arguments), e && !s && c()), this
          },
          remove: function () {
            return T.each(arguments, function (t, e) {
              for (var n; - 1 < (n = T.inArray(e, o, n));) o.splice(n, 1), n <= u && u--
            }), this
          },
          has: function (t) {
            return t ? -1 < T.inArray(t, o) : 0 < o.length
          },
          empty: function () {
            return o && (o = []), this
          },
          disable: function () {
            return a = l = [], o = e = "", this
          },
          disabled: function () {
            return !o
          },
          lock: function () {
            return a = l = [], e || s || (o = e = ""), this
          },
          locked: function () {
            return !!a
          },
          fireWith: function (t, e) {
            return a || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), s || c()), this
          },
          fire: function () {
            return d.fireWith(this, arguments), this
          },
          fired: function () {
            return !!r
          }
        };
      return d
    }, T.extend({
      Deferred: function (t) {
        var r = [
            ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
            ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
          ],
          s = "pending",
          a = {
            state: function () {
              return s
            },
            always: function () {
              return o.done(arguments).fail(arguments), this
            },
            catch: function (t) {
              return a.then(null, t)
            },
            pipe: function () {
              var s = arguments;
              return T.Deferred(function (i) {
                T.each(r, function (t, e) {
                  var n = y(s[e[4]]) && s[e[4]];
                  o[e[1]](function () {
                    var t = n && n.apply(this, arguments);
                    t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
                  })
                }), s = null
              }).promise()
            },
            then: function (e, n, i) {
              var l = 0;

              function u(s, r, a, o) {
                return function () {
                  var n = this,
                    i = arguments,
                    t = function () {
                      var t, e;
                      if (!(s < l)) {
                        if ((t = a.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                        e = t && ("object" == typeof t || "function" == typeof t) && t.then, y(e) ? o ? e.call(t, u(l, r, U, o), u(l, r, P, o)) : (l++, e.call(t, u(l, r, U, o), u(l, r, P, o), u(l, r, U, r.notifyWith))) : (a !== U && (n = void 0, i = [t]), (o || r.resolveWith)(n, i))
                      }
                    },
                    e = o ? t : function () {
                      try {
                        t()
                      } catch (t) {
                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace), l <= s + 1 && (a !== P && (n = void 0, i = [t]), r.rejectWith(n, i))
                      }
                    };
                  s ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()), D.setTimeout(e))
                }
              }
              return T.Deferred(function (t) {
                r[0][3].add(u(0, t, y(i) ? i : U, t.notifyWith)), r[1][3].add(u(0, t, y(e) ? e : U)), r[2][3].add(u(0, t, y(n) ? n : P))
              }).promise()
            },
            promise: function (t) {
              return null != t ? T.extend(t, a) : a
            }
          },
          o = {};
        return T.each(r, function (t, e) {
          var n = e[2],
            i = e[5];
          a[e[1]] = n.add, i && n.add(function () {
            s = i
          }, r[3 - t][2].disable, r[3 - t][3].disable, r[0][2].lock, r[0][3].lock), n.add(e[3].fire), o[e[0]] = function () {
            return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
          }, o[e[0] + "With"] = n.fireWith
        }), a.promise(o), t && t.call(o, o), o
      },
      when: function (t) {
        var n = arguments.length,
          e = n,
          i = Array(e),
          s = o.call(arguments),
          r = T.Deferred(),
          a = function (e) {
            return function (t) {
              i[e] = this, s[e] = 1 < arguments.length ? o.call(arguments) : t, --n || r.resolveWith(i, s)
            }
          };
        if (n <= 1 && (F(t, r.done(a(e)).resolve, r.reject, !n), "pending" === r.state() || y(s[e] && s[e].then))) return r.then();
        for (; e--;) F(s[e], a(e), r.reject);
        return r.promise()
      }
    });
    var L = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function (t, e) {
      D.console && D.console.warn && t && L.test(t.name) && D.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, T.readyException = function (t) {
      D.setTimeout(function () {
        throw t
      })
    };
    var R = T.Deferred();

    function W() {
      k.removeEventListener("DOMContentLoaded", W), D.removeEventListener("load", W), T.ready()
    }
    T.fn.ready = function (t) {
      return R.then(t).catch(function (t) {
        T.readyException(t)
      }), this
    }, T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0) !== t && 0 < --T.readyWait || R.resolveWith(k, [T])
      }
    }), T.ready.then = R.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? D.setTimeout(T.ready) : (k.addEventListener("DOMContentLoaded", W), D.addEventListener("load", W));
    var H = function (t, e, n, i, s, r, a) {
        var o = 0,
          l = t.length,
          u = null == n;
        if ("object" === x(n))
          for (o in s = !0, n) H(t, e, o, n[o], !0, r, a);
        else if (void 0 !== i && (s = !0, y(i) || (a = !0), u && (e = a ? (e.call(t, i), null) : (u = e, function (t, e, n) {
            return u.call(T(t), n)
          })), e))
          for (; o < l; o++) e(t[o], n, a ? i : i.call(t[o], o, e(t[o], n)));
        return s ? t : u ? e.call(t) : l ? e(t[0], n) : r
      },
      V = /^-ms-/,
      q = /-([a-z])/g;

    function z(t, e) {
      return e.toUpperCase()
    }

    function B(t) {
      return t.replace(V, "ms-").replace(q, z)
    }
    var G = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function Q() {
      this.expando = T.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
          value: e,
          configurable: !0
        }))), e
      },
      set: function (t, e, n) {
        var i, s = this.cache(t);
        if ("string" == typeof e) s[B(e)] = n;
        else
          for (i in e) s[B(i)] = e[i];
        return s
      },
      get: function (t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][B(e)]
      },
      access: function (t, e, n) {
        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
      },
      remove: function (t, e) {
        var n, i = t[this.expando];
        if (void 0 !== i) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e) ? e.map(B) : (e = B(e)) in i ? [e] : e.match(I) || []).length;
            for (; n--;) delete i[e[n]]
          }(void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !T.isEmptyObject(e)
      }
    };
    var Z = new Q,
      X = new Q,
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

    function tt(t, e, n) {
      var i, s;
      if (void 0 === n && 1 === t.nodeType)
        if (i = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
          try {
            n = "true" === (s = n) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : J.test(s) ? JSON.parse(s) : s)
          } catch (t) {}
          X.set(t, e, n)
        } else n = void 0;
      return n
    }
    T.extend({
      hasData: function (t) {
        return X.hasData(t) || Z.hasData(t)
      },
      data: function (t, e, n) {
        return X.access(t, e, n)
      },
      removeData: function (t, e) {
        X.remove(t, e)
      },
      _data: function (t, e, n) {
        return Z.access(t, e, n)
      },
      _removeData: function (t, e) {
        Z.remove(t, e)
      }
    }), T.fn.extend({
      data: function (n, t) {
        var e, i, s, r = this[0],
          a = r && r.attributes;
        if (void 0 !== n) return "object" == typeof n ? this.each(function () {
          X.set(this, n)
        }) : H(this, function (t) {
          var e;
          if (r && void 0 === t) return void 0 !== (e = X.get(r, n)) ? e : void 0 !== (e = tt(r, n)) ? e : void 0;
          this.each(function () {
            X.set(this, n, t)
          })
        }, null, t, 1 < arguments.length, null, !0);
        if (this.length && (s = X.get(r), 1 === r.nodeType && !Z.get(r, "hasDataAttrs"))) {
          for (e = a.length; e--;) a[e] && 0 === (i = a[e].name).indexOf("data-") && (i = B(i.slice(5)), tt(r, i, s[i]));
          Z.set(r, "hasDataAttrs", !0)
        }
        return s
      },
      removeData: function (t) {
        return this.each(function () {
          X.remove(this, t)
        })
      }
    }), T.extend({
      queue: function (t, e, n) {
        var i;
        if (t) return e = (e || "fx") + "queue", i = Z.get(t, e), n && (!i || Array.isArray(n) ? i = Z.access(t, e, T.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = T.queue(t, e),
          i = n.length,
          s = n.shift(),
          r = T._queueHooks(t, e);
        "inprogress" === s && (s = n.shift(), i--), s && ("fx" === e && n.unshift("inprogress"), delete r.stop, s.call(t, function () {
          T.dequeue(t, e)
        }, r)), !i && r && r.empty.fire()
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return Z.get(t, n) || Z.access(t, n, {
          empty: T.Callbacks("once memory").add(function () {
            Z.remove(t, [e + "queue", n])
          })
        })
      }
    }), T.fn.extend({
      queue: function (e, n) {
        var t = 2;
        return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === n ? this : this.each(function () {
          var t = T.queue(this, e, n);
          T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e)
        })
      },
      dequeue: function (t) {
        return this.each(function () {
          T.dequeue(this, t)
        })
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", [])
      },
      promise: function (t, e) {
        var n, i = 1,
          s = T.Deferred(),
          r = this,
          a = this.length,
          o = function () {
            --i || s.resolveWith(r, [r])
          };
        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = Z.get(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(o));
        return o(), s.promise(e)
      }
    });
    var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
      it = ["Top", "Right", "Bottom", "Left"],
      st = function (t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && T.contains(t.ownerDocument, t) && "none" === T.css(t, "display")
      },
      rt = function (t, e, n, i) {
        var s, r, a = {};
        for (r in e) a[r] = t.style[r], t.style[r] = e[r];
        for (r in s = n.apply(t, i || []), e) t.style[r] = a[r];
        return s
      };

    function at(t, e, n, i) {
      var s, r, a = 20,
        o = i ? function () {
          return i.cur()
        } : function () {
          return T.css(t, e, "")
        },
        l = o(),
        u = n && n[3] || (T.cssNumber[e] ? "" : "px"),
        c = (T.cssNumber[e] || "px" !== u && +l) && nt.exec(T.css(t, e));
      if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; a--;) T.style(t, e, c + u), (1 - r) * (1 - (r = o() / l || .5)) <= 0 && (a = 0), c /= r;
        c *= 2, T.style(t, e, c + u), n = n || []
      }
      return n && (c = +c || +l || 0, s = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = s)), s
    }
    var ot = {};

    function lt(t, e) {
      for (var n, i, s, r, a, o, l, u = [], c = 0, d = t.length; c < d; c++)(i = t[c]).style && (n = i.style.display, e ? ("none" === n && (u[c] = Z.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && st(i) && (u[c] = (l = a = r = void 0, a = (s = i).ownerDocument, o = s.nodeName, (l = ot[o]) || (r = a.body.appendChild(a.createElement(o)), l = T.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), ot[o] = l)))) : "none" !== n && (u[c] = "none", Z.set(i, "display", n)));
      for (c = 0; c < d; c++) null != u[c] && (t[c].style.display = u[c]);
      return t
    }
    T.fn.extend({
      show: function () {
        return lt(this, !0)
      },
      hide: function () {
        return lt(this)
      },
      toggle: function (t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
          st(this) ? T(this).show() : T(this).hide()
        })
      }
    });
    var ut = /^(?:checkbox|radio)$/i,
      ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      dt = /^$|^module$|\/(?:java|ecma)script/i,
      ht = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function ft(t, e) {
      var n;
      return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && M(t, e) ? T.merge([t], n) : n
    }

    function pt(t, e) {
      for (var n = 0, i = t.length; n < i; n++) Z.set(t[n], "globalEval", !e || Z.get(e[n], "globalEval"))
    }
    ht.optgroup = ht.option, ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead, ht.th = ht.td;
    var mt, gt, vt = /<|&#?\w+;/;

    function yt(t, e, n, i, s) {
      for (var r, a, o, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
        if ((r = t[f]) || 0 === r)
          if ("object" === x(r)) T.merge(h, r.nodeType ? [r] : r);
          else if (vt.test(r)) {
        for (a = a || d.appendChild(e.createElement("div")), o = (ct.exec(r) || ["", ""])[1].toLowerCase(), l = ht[o] || ht._default, a.innerHTML = l[1] + T.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
        T.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
      } else h.push(e.createTextNode(r));
      for (d.textContent = "", f = 0; r = h[f++];)
        if (i && -1 < T.inArray(r, i)) s && s.push(r);
        else if (u = T.contains(r.ownerDocument, r), a = ft(d.appendChild(r), "script"), u && pt(a), n)
        for (c = 0; r = a[c++];) dt.test(r.type || "") && n.push(r);
      return d
    }
    mt = k.createDocumentFragment().appendChild(k.createElement("div")), (gt = k.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), mt.appendChild(gt), v.checkClone = mt.cloneNode(!0).cloneNode(!0).lastChild.checked, mt.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!mt.cloneNode(!0).lastChild.defaultValue;
    var bt = k.documentElement,
      wt = /^key/,
      xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      _t = /^([^.]*)(?:\.(.+)|)/;

    function Dt() {
      return !0
    }

    function kt() {
      return !1
    }

    function Tt() {
      try {
        return k.activeElement
      } catch (t) {}
    }

    function Ct(t, e, n, i, s, r) {
      var a, o;
      if ("object" == typeof e) {
        for (o in "string" != typeof n && (i = i || n, n = void 0), e) Ct(t, o, n, i, e[o], r);
        return t
      }
      if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = kt;
      else if (!s) return t;
      return 1 === r && (a = s, (s = function (t) {
        return T().off(t), a.apply(this, arguments)
      }).guid = a.guid || (a.guid = T.guid++)), t.each(function () {
        T.event.add(this, e, s, i, n)
      })
    }
    T.event = {
      global: {},
      add: function (e, t, n, i, s) {
        var r, a, o, l, u, c, d, h, f, p, m, g = Z.get(e);
        if (g)
          for (n.handler && (n = (r = n).handler, s = r.selector), s && T.find.matchesSelector(bt, s), n.guid || (n.guid = T.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
              return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
            }), u = (t = (t || "").match(I) || [""]).length; u--;) f = m = (o = _t.exec(t[u]) || [])[1], p = (o[2] || "").split(".").sort(), f && (d = T.event.special[f] || {}, f = (s ? d.delegateType : d.bindType) || f, d = T.event.special[f] || {}, c = T.extend({
            type: f,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: s,
            needsContext: s && T.expr.match.needsContext.test(s),
            namespace: p.join(".")
          }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), s ? h.splice(h.delegateCount++, 0, c) : h.push(c), T.event.global[f] = !0)
      },
      remove: function (t, e, n, i, s) {
        var r, a, o, l, u, c, d, h, f, p, m, g = Z.hasData(t) && Z.get(t);
        if (g && (l = g.events)) {
          for (u = (e = (e || "").match(I) || [""]).length; u--;)
            if (f = m = (o = _t.exec(e[u]) || [])[1], p = (o[2] || "").split(".").sort(), f) {
              for (d = T.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) c = h[r], !s && m !== c.origType || n && n.guid !== c.guid || o && !o.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(r, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
              a && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || T.removeEvent(t, f, g.handle), delete l[f])
            } else
              for (f in l) T.event.remove(t, f + e[u], n, i, !0);
          T.isEmptyObject(l) && Z.remove(t, "handle events")
        }
      },
      dispatch: function (t) {
        var e, n, i, s, r, a, o = T.event.fix(t),
          l = new Array(arguments.length),
          u = (Z.get(this, "events") || {})[o.type] || [],
          c = T.event.special[o.type] || {};
        for (l[0] = o, e = 1; e < arguments.length; e++) l[e] = arguments[e];
        if (o.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, o)) {
          for (a = T.event.handlers.call(this, o, u), e = 0;
            (s = a[e++]) && !o.isPropagationStopped();)
            for (o.currentTarget = s.elem, n = 0;
              (r = s.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r, o.data = r.data, void 0 !== (i = ((T.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), o.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, o), o.result
        }
      },
      handlers: function (t, e) {
        var n, i, s, r, a, o = [],
          l = e.delegateCount,
          u = t.target;
        if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
          for (; u !== this; u = u.parentNode || this)
            if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
              for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[s = (i = e[n]).selector + " "] && (a[s] = i.needsContext ? -1 < T(s, this).index(u) : T.find(s, this, null, [u]).length), a[s] && r.push(i);
              r.length && o.push({
                elem: u,
                handlers: r
              })
            } return u = this, l < e.length && o.push({
          elem: u,
          handlers: e.slice(l)
        }), o
      },
      addProp: function (e, t) {
        Object.defineProperty(T.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: y(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent)
          } : function () {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            })
          }
        })
      },
      fix: function (t) {
        return t[T.expando] ? t : new T.Event(t)
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function () {
            if (this !== Tt() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function () {
            if (this === Tt() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && M(this, "input")) return this.click(), !1
          },
          _default: function (t) {
            return M(t.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
          }
        }
      }
    }, T.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n)
    }, T.Event = function (t, e) {
      if (!(this instanceof T.Event)) return new T.Event(t, e);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Dt : kt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0
    }, T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: kt,
      isPropagationStopped: kt,
      isImmediatePropagationStopped: kt,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        this.isDefaultPrevented = Dt, t && !this.isSimulated && t.preventDefault()
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        this.isPropagationStopped = Dt, t && !this.isSimulated && t.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = Dt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
      }
    }, T.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (t) {
        var e = t.button;
        return null == t.which && wt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && xt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
      }
    }, T.event.addProp), T.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (t, s) {
      T.event.special[t] = {
        delegateType: s,
        bindType: s,
        handle: function (t) {
          var e, n = t.relatedTarget,
            i = t.handleObj;
          return n && (n === this || T.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = s), e
        }
      }
    }), T.fn.extend({
      on: function (t, e, n, i) {
        return Ct(this, t, e, n, i)
      },
      one: function (t, e, n, i) {
        return Ct(this, t, e, n, i, 1)
      },
      off: function (t, e, n) {
        var i, s;
        if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = kt), this.each(function () {
          T.event.remove(this, t, n, e)
        });
        for (s in t) this.off(s, e, t[s]);
        return this
      }
    });
    var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Mt = /<script|<style|<link/i,
      $t = /checked\s*(?:[^=]|=\s*.checked.)/i,
      At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Et(t, e) {
      return M(t, "table") && M(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
    }

    function Ot(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Nt(t) {
      return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function jt(t, e) {
      var n, i, s, r, a, o, l, u;
      if (1 === e.nodeType) {
        if (Z.hasData(t) && (r = Z.access(t), a = Z.set(e, r), u = r.events))
          for (s in delete a.handle, a.events = {}, u)
            for (n = 0, i = u[s].length; n < i; n++) T.event.add(e, s, u[s][n]);
        X.hasData(t) && (o = X.access(t), l = T.extend({}, o), X.set(e, l))
      }
    }

    function Yt(n, i, s, r) {
      i = m.apply([], i);
      var t, e, a, o, l, u, c = 0,
        d = n.length,
        h = d - 1,
        f = i[0],
        p = y(f);
      if (p || 1 < d && "string" == typeof f && !v.checkClone && $t.test(f)) return n.each(function (t) {
        var e = n.eq(t);
        p && (i[0] = f.call(this, t, e.html())), Yt(e, i, s, r)
      });
      if (d && (e = (t = yt(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === t.childNodes.length && (t = e), e || r)) {
        for (o = (a = T.map(ft(t, "script"), Ot)).length; c < d; c++) l = t, c !== h && (l = T.clone(l, !0, !0), o && T.merge(a, ft(l, "script"))), s.call(n[c], l, c);
        if (o)
          for (u = a[a.length - 1].ownerDocument, T.map(a, Nt), c = 0; c < o; c++) l = a[c], dt.test(l.type || "") && !Z.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : w(l.textContent.replace(At, ""), u, l))
      }
      return n
    }

    function It(t, e, n) {
      for (var i, s = e ? T.filter(e, t) : t, r = 0; null != (i = s[r]); r++) n || 1 !== i.nodeType || T.cleanData(ft(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && pt(ft(i, "script")), i.parentNode.removeChild(i));
      return t
    }
    T.extend({
      htmlPrefilter: function (t) {
        return t.replace(St, "<$1></$2>")
      },
      clone: function (t, e, n) {
        var i, s, r, a, o, l, u, c = t.cloneNode(!0),
          d = T.contains(t.ownerDocument, t);
        if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
          for (a = ft(c), i = 0, s = (r = ft(t)).length; i < s; i++) o = r[i], l = a[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && ut.test(o.type) ? l.checked = o.checked : "input" !== u && "textarea" !== u || (l.defaultValue = o.defaultValue);
        if (e)
          if (n)
            for (r = r || ft(t), a = a || ft(c), i = 0, s = r.length; i < s; i++) jt(r[i], a[i]);
          else jt(t, c);
        return 0 < (a = ft(c, "script")).length && pt(a, !d && ft(t, "script")), c
      },
      cleanData: function (t) {
        for (var e, n, i, s = T.event.special, r = 0; void 0 !== (n = t[r]); r++)
          if (G(n)) {
            if (e = n[Z.expando]) {
              if (e.events)
                for (i in e.events) s[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
              n[Z.expando] = void 0
            }
            n[X.expando] && (n[X.expando] = void 0)
          }
      }
    }), T.fn.extend({
      detach: function (t) {
        return It(this, t, !0)
      },
      remove: function (t) {
        return It(this, t)
      },
      text: function (t) {
        return H(this, function (t) {
          return void 0 === t ? T.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
          })
        }, null, t, arguments.length)
      },
      append: function () {
        return Yt(this, arguments, function (t) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Et(this, t).appendChild(t)
        })
      },
      prepend: function () {
        return Yt(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = Et(this, t);
            e.insertBefore(t, e.firstChild)
          }
        })
      },
      before: function () {
        return Yt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this)
        })
      },
      after: function () {
        return Yt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(ft(t, !1)), t.textContent = "");
        return this
      },
      clone: function (t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function () {
          return T.clone(this, t, e)
        })
      },
      html: function (t) {
        return H(this, function (t) {
          var e = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
          if ("string" == typeof t && !Mt.test(t) && !ht[(ct.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = T.htmlPrefilter(t);
            try {
              for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(ft(e, !1)), e.innerHTML = t);
              e = 0
            } catch (t) {}
          }
          e && this.empty().append(t)
        }, null, t, arguments.length)
      },
      replaceWith: function () {
        var n = [];
        return Yt(this, arguments, function (t) {
          var e = this.parentNode;
          T.inArray(this, n) < 0 && (T.cleanData(ft(this)), e && e.replaceChild(t, this))
        }, n)
      }
    }), T.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (t, a) {
      T.fn[t] = function (t) {
        for (var e, n = [], i = T(t), s = i.length - 1, r = 0; r <= s; r++) e = r === s ? this : this.clone(!0), T(i[r])[a](e), l.apply(n, e.get());
        return this.pushStack(n)
      }
    });
    var Ut = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
      Pt = function (t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = D), e.getComputedStyle(t)
      },
      Ft = new RegExp(it.join("|"), "i");

    function Lt(t, e, n) {
      var i, s, r, a, o = t.style;
      return (n = n || Pt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || T.contains(t.ownerDocument, t) || (a = T.style(t, e)), !v.pixelBoxStyles() && Ut.test(a) && Ft.test(e) && (i = o.width, s = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = i, o.minWidth = s, o.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function Rt(t, e) {
      return {
        get: function () {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get
        }
      }
    }! function () {
      function t() {
        if (l) {
          o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", bt.appendChild(o).appendChild(l);
          var t = D.getComputedStyle(l);
          n = "1%" !== t.top, a = 12 === e(t.marginLeft), l.style.right = "60%", r = 36 === e(t.right), i = 36 === e(t.width), l.style.position = "absolute", s = 36 === l.offsetWidth || "absolute", bt.removeChild(o), l = null
        }
      }

      function e(t) {
        return Math.round(parseFloat(t))
      }
      var n, i, s, r, a, o = k.createElement("div"),
        l = k.createElement("div");
      l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(v, {
        boxSizingReliable: function () {
          return t(), i
        },
        pixelBoxStyles: function () {
          return t(), r
        },
        pixelPosition: function () {
          return t(), n
        },
        reliableMarginLeft: function () {
          return t(), a
        },
        scrollboxSize: function () {
          return t(), s
        }
      }))
    }();
    var Wt = /^(none|table(?!-c[ea]).+)/,
      Ht = /^--/,
      Vt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      qt = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      zt = ["Webkit", "Moz", "ms"],
      Bt = k.createElement("div").style;

    function Gt(t) {
      var e = T.cssProps[t];
      return e || (e = T.cssProps[t] = function (t) {
        if (t in Bt) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--;)
          if ((t = zt[n] + e) in Bt) return t
      }(t) || t), e
    }

    function Qt(t, e, n) {
      var i = nt.exec(e);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Zt(t, e, n, i, s, r) {
      var a = "width" === e ? 1 : 0,
        o = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (l += T.css(t, n + it[a], !0, s)), i ? ("content" === n && (l -= T.css(t, "padding" + it[a], !0, s)), "margin" !== n && (l -= T.css(t, "border" + it[a] + "Width", !0, s))) : (l += T.css(t, "padding" + it[a], !0, s), "padding" !== n ? l += T.css(t, "border" + it[a] + "Width", !0, s) : o += T.css(t, "border" + it[a] + "Width", !0, s));
      return !i && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - o - .5))), l
    }

    function Xt(t, e, n) {
      var i = Pt(t),
        s = Lt(t, e, i),
        r = "border-box" === T.css(t, "boxSizing", !1, i),
        a = r;
      if (Ut.test(s)) {
        if (!n) return s;
        s = "auto"
      }
      return a = a && (v.boxSizingReliable() || s === t.style[e]), ("auto" === s || !parseFloat(s) && "inline" === T.css(t, "display", !1, i)) && (s = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (s = parseFloat(s) || 0) + Zt(t, e, n || (r ? "border" : "content"), a, i, s) + "px"
    }

    function Jt(t, e, n, i, s) {
      return new Jt.prototype.init(t, e, n, i, s)
    }
    T.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = Lt(t, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var s, r, a, o = B(e),
            l = Ht.test(e),
            u = t.style;
          if (l || (e = Gt(o)), a = T.cssHooks[e] || T.cssHooks[o], void 0 === n) return a && "get" in a && void 0 !== (s = a.get(t, !1, i)) ? s : u[e];
          "string" === (r = typeof n) && (s = nt.exec(n)) && s[1] && (n = at(t, e, s), r = "number"), null != n && n == n && ("number" === r && (n += s && s[3] || (T.cssNumber[o] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
        }
      },
      css: function (t, e, n, i) {
        var s, r, a, o = B(e);
        return Ht.test(e) || (e = Gt(o)), (a = T.cssHooks[e] || T.cssHooks[o]) && "get" in a && (s = a.get(t, !0, n)), void 0 === s && (s = Lt(t, e, i)), "normal" === s && e in qt && (s = qt[e]), "" === n || n ? (r = parseFloat(s), !0 === n || isFinite(r) ? r || 0 : s) : s
      }
    }), T.each(["height", "width"], function (t, o) {
      T.cssHooks[o] = {
        get: function (t, e, n) {
          if (e) return !Wt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Xt(t, o, n) : rt(t, Vt, function () {
            return Xt(t, o, n)
          })
        },
        set: function (t, e, n) {
          var i, s = Pt(t),
            r = "border-box" === T.css(t, "boxSizing", !1, s),
            a = n && Zt(t, o, n, r, s);
          return r && v.scrollboxSize() === s.position && (a -= Math.ceil(t["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(s[o]) - Zt(t, o, "border", !1, s) - .5)), a && (i = nt.exec(e)) && "px" !== (i[3] || "px") && (t.style[o] = e, e = T.css(t, o)), Qt(0, e, a)
        }
      }
    }), T.cssHooks.marginLeft = Rt(v.reliableMarginLeft, function (t, e) {
      if (e) return (parseFloat(Lt(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, {
        marginLeft: 0
      }, function () {
        return t.getBoundingClientRect().left
      })) + "px"
    }), T.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (s, r) {
      T.cssHooks[s + r] = {
        expand: function (t) {
          for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[s + it[e] + r] = i[e] || i[e - 2] || i[0];
          return n
        }
      }, "margin" !== s && (T.cssHooks[s + r].set = Qt)
    }), T.fn.extend({
      css: function (t, e) {
        return H(this, function (t, e, n) {
          var i, s, r = {},
            a = 0;
          if (Array.isArray(e)) {
            for (i = Pt(t), s = e.length; a < s; a++) r[e[a]] = T.css(t, e[a], !1, i);
            return r
          }
          return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
        }, t, e, 1 < arguments.length)
      }
    }), ((T.Tween = Jt).prototype = {
      constructor: Jt,
      init: function (t, e, n, i, s, r) {
        this.elem = t, this.prop = n, this.easing = s || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (T.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var t = Jt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Jt.propHooks._default.get(this)
      },
      run: function (t) {
        var e, n = Jt.propHooks[this.prop];
        return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Jt.propHooks._default.set(this), this
      }
    }).init.prototype = Jt.prototype, (Jt.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
        },
        set: function (t) {
          T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[T.cssProps[t.prop]] && !T.cssHooks[t.prop] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
        }
      }
    }).scrollTop = Jt.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
    }, T.easing = {
      linear: function (t) {
        return t
      },
      swing: function (t) {
        return .5 - Math.cos(t * Math.PI) / 2
      },
      _default: "swing"
    }, T.fx = Jt.prototype.init, T.fx.step = {};
    var Kt, te, ee, ne, ie = /^(?:toggle|show|hide)$/,
      se = /queueHooks$/;

    function re() {
      te && (!1 === k.hidden && D.requestAnimationFrame ? D.requestAnimationFrame(re) : D.setTimeout(re, T.fx.interval), T.fx.tick())
    }

    function ae() {
      return D.setTimeout(function () {
        Kt = void 0
      }), Kt = Date.now()
    }

    function oe(t, e) {
      var n, i = 0,
        s = {
          height: t
        };
      for (e = e ? 1 : 0; i < 4; i += 2 - e) s["margin" + (n = it[i])] = s["padding" + n] = t;
      return e && (s.opacity = s.width = t), s
    }

    function le(t, e, n) {
      for (var i, s = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), r = 0, a = s.length; r < a; r++)
        if (i = s[r].call(n, e, t)) return i
    }

    function ue(r, t, e) {
      var n, a, i = 0,
        s = ue.prefilters.length,
        o = T.Deferred().always(function () {
          delete l.elem
        }),
        l = function () {
          if (a) return !1;
          for (var t = Kt || ae(), e = Math.max(0, u.startTime + u.duration - t), n = 1 - (e / u.duration || 0), i = 0, s = u.tweens.length; i < s; i++) u.tweens[i].run(n);
          return o.notifyWith(r, [u, n, e]), n < 1 && s ? e : (s || o.notifyWith(r, [u, 1, 0]), o.resolveWith(r, [u]), !1)
        },
        u = o.promise({
          elem: r,
          props: T.extend({}, t),
          opts: T.extend(!0, {
            specialEasing: {},
            easing: T.easing._default
          }, e),
          originalProperties: t,
          originalOptions: e,
          startTime: Kt || ae(),
          duration: e.duration,
          tweens: [],
          createTween: function (t, e) {
            var n = T.Tween(r, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(n), n
          },
          stop: function (t) {
            var e = 0,
              n = t ? u.tweens.length : 0;
            if (a) return this;
            for (a = !0; e < n; e++) u.tweens[e].run(1);
            return t ? (o.notifyWith(r, [u, 1, 0]), o.resolveWith(r, [u, t])) : o.rejectWith(r, [u, t]), this
          }
        }),
        c = u.props;
      for (! function (t, e) {
          var n, i, s, r, a;
          for (n in t)
            if (s = e[i = B(n)], r = t[n], Array.isArray(r) && (s = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = T.cssHooks[i]) && "expand" in a)
              for (n in r = a.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = s);
            else e[i] = s
        }(c, u.opts.specialEasing); i < s; i++)
        if (n = ue.prefilters[i].call(u, r, c, u.opts)) return y(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
      return T.map(c, le, u), y(u.opts.start) && u.opts.start.call(r, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
        elem: r,
        anim: u,
        queue: u.opts.queue
      })), u
    }
    T.Animation = T.extend(ue, {
      tweeners: {
        "*": [function (t, e) {
          var n = this.createTween(t, e);
          return at(n.elem, t, nt.exec(e), n), n
        }]
      },
      tweener: function (t, e) {
        for (var n, i = 0, s = (t = y(t) ? (e = t, ["*"]) : t.match(I)).length; i < s; i++) n = t[i], ue.tweeners[n] = ue.tweeners[n] || [], ue.tweeners[n].unshift(e)
      },
      prefilters: [function (t, e, n) {
        var i, s, r, a, o, l, u, c, d = "width" in e || "height" in e,
          h = this,
          f = {},
          p = t.style,
          m = t.nodeType && st(t),
          g = Z.get(t, "fxshow");
        for (i in n.queue || (null == (a = T._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function () {
            a.unqueued || o()
          }), a.unqueued++, h.always(function () {
            h.always(function () {
              a.unqueued--, T.queue(t, "fx").length || a.empty.fire()
            })
          })), e)
          if (s = e[i], ie.test(s)) {
            if (delete e[i], r = r || "toggle" === s, s === (m ? "hide" : "show")) {
              if ("show" !== s || !g || void 0 === g[i]) continue;
              m = !0
            }
            f[i] = g && g[i] || T.style(t, i)
          } if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(f))
          for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = Z.get(t, "display")), "none" === (c = T.css(t, "display")) && (u ? c = u : (lt([t], !0), u = t.style.display || u, c = T.css(t, "display"), lt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(t, "float") && (l || (h.done(function () {
              p.display = u
            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
              p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = Z.access(t, "fxshow", {
            display: u
          }), r && (g.hidden = !m), m && lt([t], !0), h.done(function () {
            for (i in m || lt([t]), Z.remove(t, "fxshow"), f) T.style(t, i, f[i])
          })), l = le(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
      }],
      prefilter: function (t, e) {
        e ? ue.prefilters.unshift(t) : ue.prefilters.push(t)
      }
    }), T.speed = function (t, e, n) {
      var i = t && "object" == typeof t ? T.extend({}, t) : {
        complete: n || !n && e || y(t) && t,
        duration: t,
        easing: n && e || e && !y(e) && e
      };
      return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
      }, i
    }, T.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(st).css("opacity", 0).show().end().animate({
          opacity: e
        }, t, n, i)
      },
      animate: function (e, t, n, i) {
        var s = T.isEmptyObject(e),
          r = T.speed(t, n, i),
          a = function () {
            var t = ue(this, T.extend({}, e), r);
            (s || Z.get(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
      },
      stop: function (s, t, r) {
        var a = function (t) {
          var e = t.stop;
          delete t.stop, e(r)
        };
        return "string" != typeof s && (r = t, t = s, s = void 0), t && !1 !== s && this.queue(s || "fx", []), this.each(function () {
          var t = !0,
            e = null != s && s + "queueHooks",
            n = T.timers,
            i = Z.get(this);
          if (e) i[e] && i[e].stop && a(i[e]);
          else
            for (e in i) i[e] && i[e].stop && se.test(e) && a(i[e]);
          for (e = n.length; e--;) n[e].elem !== this || null != s && n[e].queue !== s || (n[e].anim.stop(r), t = !1, n.splice(e, 1));
          !t && r || T.dequeue(this, s)
        })
      },
      finish: function (a) {
        return !1 !== a && (a = a || "fx"), this.each(function () {
          var t, e = Z.get(this),
            n = e[a + "queue"],
            i = e[a + "queueHooks"],
            s = T.timers,
            r = n ? n.length : 0;
          for (e.finish = !0, T.queue(this, a, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === a && (s[t].anim.stop(!0), s.splice(t, 1));
          for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
          delete e.finish
        })
      }
    }), T.each(["toggle", "show", "hide"], function (t, i) {
      var s = T.fn[i];
      T.fn[i] = function (t, e, n) {
        return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(oe(i, !0), t, e, n)
      }
    }), T.each({
      slideDown: oe("show"),
      slideUp: oe("hide"),
      slideToggle: oe("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (t, i) {
      T.fn[t] = function (t, e, n) {
        return this.animate(i, t, e, n)
      }
    }), T.timers = [], T.fx.tick = function () {
      var t, e = 0,
        n = T.timers;
      for (Kt = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || T.fx.stop(), Kt = void 0
    }, T.fx.timer = function (t) {
      T.timers.push(t), T.fx.start()
    }, T.fx.interval = 13, T.fx.start = function () {
      te || (te = !0, re())
    }, T.fx.stop = function () {
      te = null
    }, T.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, T.fn.delay = function (i, t) {
      return i = T.fx && T.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
        var n = D.setTimeout(t, i);
        e.stop = function () {
          D.clearTimeout(n)
        }
      })
    }, ee = k.createElement("input"), ne = k.createElement("select").appendChild(k.createElement("option")), ee.type = "checkbox", v.checkOn = "" !== ee.value, v.optSelected = ne.selected, (ee = k.createElement("input")).value = "t", ee.type = "radio", v.radioValue = "t" === ee.value;
    var ce, de = T.expr.attrHandle;
    T.fn.extend({
      attr: function (t, e) {
        return H(this, T.attr, t, e, 1 < arguments.length)
      },
      removeAttr: function (t) {
        return this.each(function () {
          T.removeAttr(this, t)
        })
      }
    }), T.extend({
      attr: function (t, e, n) {
        var i, s, r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === r && T.isXMLDoc(t) || (s = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ce : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : s && "get" in s && null !== (i = s.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i)
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!v.radioValue && "radio" === e && M(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e
            }
          }
        }
      },
      removeAttr: function (t, e) {
        var n, i = 0,
          s = e && e.match(I);
        if (s && 1 === t.nodeType)
          for (; n = s[i++];) t.removeAttribute(n)
      }
    }), ce = {
      set: function (t, e, n) {
        return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n
      }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var a = de[e] || T.find.attr;
      de[e] = function (t, e, n) {
        var i, s, r = e.toLowerCase();
        return n || (s = de[r], de[r] = i, i = null != a(t, e, n) ? r : null, de[r] = s), i
      }
    });
    var he = /^(?:input|select|textarea|button)$/i,
      fe = /^(?:a|area)$/i;

    function pe(t) {
      return (t.match(I) || []).join(" ")
    }

    function me(t) {
      return t.getAttribute && t.getAttribute("class") || ""
    }

    function ge(t) {
      return Array.isArray(t) ? t : "string" == typeof t && t.match(I) || []
    }
    T.fn.extend({
      prop: function (t, e) {
        return H(this, T.prop, t, e, 1 < arguments.length)
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[T.propFix[t] || t]
        })
      }
    }), T.extend({
      prop: function (t, e, n) {
        var i, s, r = t.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && T.isXMLDoc(t) || (e = T.propFix[e] || e, s = T.propHooks[e]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : t[e] = n : s && "get" in s && null !== (i = s.get(t, e)) ? i : t[e]
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = T.find.attr(t, "tabindex");
            return e ? parseInt(e, 10) : he.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), v.optSelected || (T.propHooks.selected = {
      get: function (t) {
        var e = t.parentNode;
        return e && e.parentNode && e.parentNode.selectedIndex, null
      },
      set: function (t) {
        var e = t.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
      }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
      addClass: function (e) {
        var t, n, i, s, r, a, o, l = 0;
        if (y(e)) return this.each(function (t) {
          T(this).addClass(e.call(this, t, me(this)))
        });
        if ((t = ge(e)).length)
          for (; n = this[l++];)
            if (s = me(n), i = 1 === n.nodeType && " " + pe(s) + " ") {
              for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              s !== (o = pe(i)) && n.setAttribute("class", o)
            } return this
      },
      removeClass: function (e) {
        var t, n, i, s, r, a, o, l = 0;
        if (y(e)) return this.each(function (t) {
          T(this).removeClass(e.call(this, t, me(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = ge(e)).length)
          for (; n = this[l++];)
            if (s = me(n), i = 1 === n.nodeType && " " + pe(s) + " ") {
              for (a = 0; r = t[a++];)
                for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
              s !== (o = pe(i)) && n.setAttribute("class", o)
            } return this
      },
      toggleClass: function (s, e) {
        var r = typeof s,
          a = "string" === r || Array.isArray(s);
        return "boolean" == typeof e && a ? e ? this.addClass(s) : this.removeClass(s) : y(s) ? this.each(function (t) {
          T(this).toggleClass(s.call(this, t, me(this), e), e)
        }) : this.each(function () {
          var t, e, n, i;
          if (a)
            for (e = 0, n = T(this), i = ge(s); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
          else void 0 !== s && "boolean" !== r || ((t = me(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === s ? "" : Z.get(this, "__className__") || ""))
        })
      },
      hasClass: function (t) {
        var e, n, i = 0;
        for (e = " " + t + " "; n = this[i++];)
          if (1 === n.nodeType && -1 < (" " + pe(me(n)) + " ").indexOf(e)) return !0;
        return !1
      }
    });
    var ve = /\r/g;
    T.fn.extend({
      val: function (n) {
        var i, t, s, e = this[0];
        return arguments.length ? (s = y(n), this.each(function (t) {
          var e;
          1 === this.nodeType && (null == (e = s ? n.call(this, t, T(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function (t) {
            return null == t ? "" : t + ""
          })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
        })) : e ? (i = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(ve, "") : null == t ? "" : t : void 0
      }
    }), T.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = T.find.attr(t, "value");
            return null != e ? e : pe(T.text(t))
          }
        },
        select: {
          get: function (t) {
            var e, n, i, s = t.options,
              r = t.selectedIndex,
              a = "select-one" === t.type,
              o = a ? null : [],
              l = a ? r + 1 : s.length;
            for (i = r < 0 ? l : a ? r : 0; i < l; i++)
              if (((n = s[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
                if (e = T(n).val(), a) return e;
                o.push(e)
              } return o
          },
          set: function (t, e) {
            for (var n, i, s = t.options, r = T.makeArray(e), a = s.length; a--;)((i = s[a]).selected = -1 < T.inArray(T.valHooks.option.get(i), r)) && (n = !0);
            return n || (t.selectedIndex = -1), r
          }
        }
      }
    }), T.each(["radio", "checkbox"], function () {
      T.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e)) return t.checked = -1 < T.inArray(T(t).val(), e)
        }
      }, v.checkOn || (T.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value
      })
    }), v.focusin = "onfocusin" in D;
    var ye = /^(?:focusinfocus|focusoutblur)$/,
      be = function (t) {
        t.stopPropagation()
      };
    T.extend(T.event, {
      trigger: function (t, e, n, i) {
        var s, r, a, o, l, u, c, d, h = [n || k],
          f = g.call(t, "type") ? t.type : t,
          p = g.call(t, "namespace") ? t.namespace.split(".") : [];
        if (r = d = a = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !ye.test(f + T.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, (t = t[T.expando] ? t : new T.Event(f, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), c = T.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
          if (!i && !c.noBubble && !b(n)) {
            for (o = c.delegateType || f, ye.test(o + f) || (r = r.parentNode); r; r = r.parentNode) h.push(r), a = r;
            a === (n.ownerDocument || k) && h.push(a.defaultView || a.parentWindow || D)
          }
          for (s = 0;
            (r = h[s++]) && !t.isPropagationStopped();) d = r, t.type = 1 < s ? o : c.bindType || f, (u = (Z.get(r, "events") || {})[t.type] && Z.get(r, "handle")) && u.apply(r, e), (u = l && r[l]) && u.apply && G(r) && (t.result = u.apply(r, e), !1 === t.result && t.preventDefault());
          return t.type = f, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), e) || !G(n) || l && y(n[f]) && !b(n) && ((a = n[l]) && (n[l] = null), T.event.triggered = f, t.isPropagationStopped() && d.addEventListener(f, be), n[f](), t.isPropagationStopped() && d.removeEventListener(f, be), T.event.triggered = void 0, a && (n[l] = a)), t.result
        }
      },
      simulate: function (t, e, n) {
        var i = T.extend(new T.Event, n, {
          type: t,
          isSimulated: !0
        });
        T.event.trigger(i, null, e)
      }
    }), T.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          T.event.trigger(t, e, this)
        })
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        if (n) return T.event.trigger(t, e, n, !0)
      }
    }), v.focusin || T.each({
      focus: "focusin",
      blur: "focusout"
    }, function (n, i) {
      var s = function (t) {
        T.event.simulate(i, t.target, T.event.fix(t))
      };
      T.event.special[i] = {
        setup: function () {
          var t = this.ownerDocument || this,
            e = Z.access(t, i);
          e || t.addEventListener(n, s, !0), Z.access(t, i, (e || 0) + 1)
        },
        teardown: function () {
          var t = this.ownerDocument || this,
            e = Z.access(t, i) - 1;
          e ? Z.access(t, i, e) : (t.removeEventListener(n, s, !0), Z.remove(t, i))
        }
      }
    });
    var we = D.location,
      xe = Date.now(),
      _e = /\?/;
    T.parseXML = function (t) {
      var e;
      if (!t || "string" != typeof t) return null;
      try {
        e = (new D.DOMParser).parseFromString(t, "text/xml")
      } catch (t) {
        e = void 0
      }
      return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
    };
    var De = /\[\]$/,
      ke = /\r?\n/g,
      Te = /^(?:submit|button|image|reset|file)$/i,
      Ce = /^(?:input|select|textarea|keygen)/i;

    function Se(n, t, i, s) {
      var e;
      if (Array.isArray(t)) T.each(t, function (t, e) {
        i || De.test(n) ? s(n, e) : Se(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, s)
      });
      else if (i || "object" !== x(t)) s(n, t);
      else
        for (e in t) Se(n + "[" + e + "]", t[e], i, s)
    }
    T.param = function (t, e) {
      var n, i = [],
        s = function (t, e) {
          var n = y(e) ? e() : e;
          i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function () {
        s(this.name, this.value)
      });
      else
        for (n in t) Se(n, t[n], e, s);
      return i.join("&")
    }, T.fn.extend({
      serialize: function () {
        return T.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var t = T.prop(this, "elements");
          return t ? T.makeArray(t) : this
        }).filter(function () {
          var t = this.type;
          return this.name && !T(this).is(":disabled") && Ce.test(this.nodeName) && !Te.test(t) && (this.checked || !ut.test(t))
        }).map(function (t, e) {
          var n = T(this).val();
          return null == n ? null : Array.isArray(n) ? T.map(n, function (t) {
            return {
              name: e.name,
              value: t.replace(ke, "\r\n")
            }
          }) : {
            name: e.name,
            value: n.replace(ke, "\r\n")
          }
        }).get()
      }
    });
    var Me = /%20/g,
      $e = /#.*$/,
      Ae = /([?&])_=[^&]*/,
      Ee = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Oe = /^(?:GET|HEAD)$/,
      Ne = /^\/\//,
      je = {},
      Ye = {},
      Ie = "*/".concat("*"),
      Ue = k.createElement("a");

    function Pe(r) {
      return function (t, e) {
        "string" != typeof t && (e = t, t = "*");
        var n, i = 0,
          s = t.toLowerCase().match(I) || [];
        if (y(e))
          for (; n = s[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(e)) : (r[n] = r[n] || []).push(e)
      }
    }

    function Fe(e, s, r, a) {
      var o = {},
        l = e === Ye;

      function u(t) {
        var i;
        return o[t] = !0, T.each(e[t] || [], function (t, e) {
          var n = e(s, r, a);
          return "string" != typeof n || l || o[n] ? l ? !(i = n) : void 0 : (s.dataTypes.unshift(n), u(n), !1)
        }), i
      }
      return u(s.dataTypes[0]) || !o["*"] && u("*")
    }

    function Le(t, e) {
      var n, i, s = T.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
      return i && T.extend(!0, t, i), t
    }
    Ue.href = we.href, T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: we.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ie,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (t, e) {
        return e ? Le(Le(t, T.ajaxSettings), e) : Le(T.ajaxSettings, t)
      },
      ajaxPrefilter: Pe(je),
      ajaxTransport: Pe(Ye),
      ajax: function (t, e) {
        "object" == typeof t && (e = t, t = void 0), e = e || {};
        var c, d, h, n, f, i, p, m, s, r, g = T.ajaxSetup({}, e),
          v = g.context || g,
          y = g.context && (v.nodeType || v.jquery) ? T(v) : T.event,
          b = T.Deferred(),
          w = T.Callbacks("once memory"),
          x = g.statusCode || {},
          a = {},
          o = {},
          l = "canceled",
          _ = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (p) {
                if (!n)
                  for (n = {}; e = Ee.exec(h);) n[e[1].toLowerCase()] = e[2];
                e = n[t.toLowerCase()]
              }
              return null == e ? null : e
            },
            getAllResponseHeaders: function () {
              return p ? h : null
            },
            setRequestHeader: function (t, e) {
              return null == p && (t = o[t.toLowerCase()] = o[t.toLowerCase()] || t, a[t] = e), this
            },
            overrideMimeType: function (t) {
              return null == p && (g.mimeType = t), this
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (p) _.always(t[_.status]);
                else
                  for (e in t) x[e] = [x[e], t[e]];
              return this
            },
            abort: function (t) {
              var e = t || l;
              return c && c.abort(e), u(0, e), this
            }
          };
        if (b.promise(_), g.url = ((t || g.url || we.href) + "").replace(Ne, we.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(I) || [""], null == g.crossDomain) {
          i = k.createElement("a");
          try {
            i.href = g.url, i.href = i.href, g.crossDomain = Ue.protocol + "//" + Ue.host != i.protocol + "//" + i.host
          } catch (t) {
            g.crossDomain = !0
          }
        }
        if (g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), Fe(je, g, e, _), p) return _;
        for (s in (m = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Oe.test(g.type), d = g.url.replace($e, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Me, "+")) : (r = g.url.slice(d.length), g.data && (g.processData || "string" == typeof g.data) && (d += (_e.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (d = d.replace(Ae, "$1"), r = (_e.test(d) ? "&" : "?") + "_=" + xe++ + r), g.url = d + r), g.ifModified && (T.lastModified[d] && _.setRequestHeader("If-Modified-Since", T.lastModified[d]), T.etag[d] && _.setRequestHeader("If-None-Match", T.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && _.setRequestHeader("Content-Type", g.contentType), _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ie + "; q=0.01" : "") : g.accepts["*"]), g.headers) _.setRequestHeader(s, g.headers[s]);
        if (g.beforeSend && (!1 === g.beforeSend.call(v, _, g) || p)) return _.abort();
        if (l = "abort", w.add(g.complete), _.done(g.success), _.fail(g.error), c = Fe(Ye, g, e, _)) {
          if (_.readyState = 1, m && y.trigger("ajaxSend", [_, g]), p) return _;
          g.async && 0 < g.timeout && (f = D.setTimeout(function () {
            _.abort("timeout")
          }, g.timeout));
          try {
            p = !1, c.send(a, u)
          } catch (t) {
            if (p) throw t;
            u(-1, t)
          }
        } else u(-1, "No Transport");

        function u(t, e, n, i) {
          var s, r, a, o, l, u = e;
          p || (p = !0, f && D.clearTimeout(f), c = void 0, h = i || "", _.readyState = 0 < t ? 4 : 0, s = 200 <= t && t < 300 || 304 === t, n && (o = function (t, e, n) {
            for (var i, s, r, a, o = t.contents, l = t.dataTypes;
              "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
              for (s in o)
                if (o[s] && o[s].test(i)) {
                  l.unshift(s);
                  break
                } if (l[0] in n) r = l[0];
            else {
              for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                  r = s;
                  break
                }
                a || (a = s)
              }
              r = r || a
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
          }(g, _, n)), o = function (t, e, n, i) {
            var s, r, a, o, l, u = {},
              c = t.dataTypes.slice();
            if (c[1])
              for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
            for (r = c.shift(); r;)
              if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
              if (!(a = u[l + " " + r] || u["* " + r]))
                for (s in u)
                  if ((o = s.split(" "))[1] === r && (a = u[l + " " + o[0]] || u["* " + o[0]])) {
                    !0 === a ? a = u[s] : !0 !== u[s] && (r = o[0], c.unshift(o[1]));
                    break
                  } if (!0 !== a)
                if (a && t.throws) e = a(e);
                else try {
                  e = a(e)
                } catch (t) {
                  return {
                    state: "parsererror",
                    error: a ? t : "No conversion from " + l + " to " + r
                  }
                }
            }
            return {
              state: "success",
              data: e
            }
          }(g, o, _, s), s ? (g.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (T.lastModified[d] = l), (l = _.getResponseHeader("etag")) && (T.etag[d] = l)), 204 === t || "HEAD" === g.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = o.state, r = o.data, s = !(a = o.error))) : (a = u, !t && u || (u = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || u) + "", s ? b.resolveWith(v, [r, u, _]) : b.rejectWith(v, [_, u, a]), _.statusCode(x), x = void 0, m && y.trigger(s ? "ajaxSuccess" : "ajaxError", [_, g, s ? r : a]), w.fireWith(v, [_, u]), m && (y.trigger("ajaxComplete", [_, g]), --T.active || T.event.trigger("ajaxStop")))
        }
        return _
      },
      getJSON: function (t, e, n) {
        return T.get(t, e, n, "json")
      },
      getScript: function (t, e) {
        return T.get(t, void 0, e, "script")
      }
    }), T.each(["get", "post"], function (t, s) {
      T[s] = function (t, e, n, i) {
        return y(e) && (i = i || n, n = e, e = void 0), T.ajax(T.extend({
          url: t,
          type: s,
          dataType: i,
          data: e,
          success: n
        }, T.isPlainObject(t) && t))
      }
    }), T._evalUrl = function (t) {
      return T.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }, T.fn.extend({
      wrapAll: function (t) {
        var e;
        return this[0] && (y(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
          for (var t = this; t.firstElementChild;) t = t.firstElementChild;
          return t
        }).append(this)), this
      },
      wrapInner: function (n) {
        return y(n) ? this.each(function (t) {
          T(this).wrapInner(n.call(this, t))
        }) : this.each(function () {
          var t = T(this),
            e = t.contents();
          e.length ? e.wrapAll(n) : t.append(n)
        })
      },
      wrap: function (e) {
        var n = y(e);
        return this.each(function (t) {
          T(this).wrapAll(n ? e.call(this, t) : e)
        })
      },
      unwrap: function (t) {
        return this.parent(t).not("body").each(function () {
          T(this).replaceWith(this.childNodes)
        }), this
      }
    }), T.expr.pseudos.hidden = function (t) {
      return !T.expr.pseudos.visible(t)
    }, T.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, T.ajaxSettings.xhr = function () {
      try {
        return new D.XMLHttpRequest
      } catch (t) {}
    };
    var Re = {
        0: 200,
        1223: 204
      },
      We = T.ajaxSettings.xhr();
    v.cors = !!We && "withCredentials" in We, v.ajax = We = !!We, T.ajaxTransport(function (s) {
      var r, a;
      if (v.cors || We && !s.crossDomain) return {
        send: function (t, e) {
          var n, i = s.xhr();
          if (i.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
            for (n in s.xhrFields) i[n] = s.xhrFields[n];
          for (n in s.mimeType && i.overrideMimeType && i.overrideMimeType(s.mimeType), s.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
          r = function (t) {
            return function () {
              r && (r = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Re[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                binary: i.response
              } : {
                text: i.responseText
              }, i.getAllResponseHeaders()))
            }
          }, i.onload = r(), a = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function () {
            4 === i.readyState && D.setTimeout(function () {
              r && a()
            })
          }, r = r("abort");
          try {
            i.send(s.hasContent && s.data || null)
          } catch (t) {
            if (r) throw t
          }
        },
        abort: function () {
          r && r()
        }
      }
    }), T.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1)
    }), T.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (t) {
          return T.globalEval(t), t
        }
      }
    }), T.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), T.ajaxTransport("script", function (n) {
      var i, s;
      if (n.crossDomain) return {
        send: function (t, e) {
          i = T("<script>").prop({
            charset: n.scriptCharset,
            src: n.url
          }).on("load error", s = function (t) {
            i.remove(), s = null, t && e("error" === t.type ? 404 : 200, t.type)
          }), k.head.appendChild(i[0])
        },
        abort: function () {
          s && s()
        }
      }
    });
    var He, Ve = [],
      qe = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = Ve.pop() || T.expando + "_" + xe++;
        return this[t] = !0, t
      }
    }), T.ajaxPrefilter("json jsonp", function (t, e, n) {
      var i, s, r, a = !1 !== t.jsonp && (qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qe.test(t.data) && "data");
      if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(qe, "$1" + i) : !1 !== t.jsonp && (t.url += (_e.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
        return r || T.error(i + " was not called"), r[0]
      }, t.dataTypes[0] = "json", s = D[i], D[i] = function () {
        r = arguments
      }, n.always(function () {
        void 0 === s ? T(D).removeProp(i) : D[i] = s, t[i] && (t.jsonpCallback = e.jsonpCallback, Ve.push(i)), r && y(s) && s(r[0]), r = s = void 0
      }), "script"
    }), v.createHTMLDocument = ((He = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === He.childNodes.length), T.parseHTML = function (t, e, n) {
      return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((i = (e = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, e.head.appendChild(i)) : e = k), r = !n && [], (s = $.exec(t)) ? [e.createElement(s[1])] : (s = yt([t], e, r), r && r.length && T(r).remove(), T.merge([], s.childNodes)));
      var i, s, r
    }, T.fn.load = function (t, e, n) {
      var i, s, r, a = this,
        o = t.indexOf(" ");
      return -1 < o && (i = pe(t.slice(o)), t = t.slice(0, o)), y(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < a.length && T.ajax({
        url: t,
        type: s || "GET",
        dataType: "html",
        data: e
      }).done(function (t) {
        r = arguments, a.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t)
      }).always(n && function (t, e) {
        a.each(function () {
          n.apply(this, r || [t.responseText, e, t])
        })
      }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      T.fn[e] = function (t) {
        return this.on(e, t)
      }
    }), T.expr.pseudos.animated = function (e) {
      return T.grep(T.timers, function (t) {
        return e === t.elem
      }).length
    }, T.offset = {
      setOffset: function (t, e, n) {
        var i, s, r, a, o, l, u = T.css(t, "position"),
          c = T(t),
          d = {};
        "static" === u && (t.style.position = "relative"), o = c.offset(), r = T.css(t, "top"), l = T.css(t, "left"), s = ("absolute" === u || "fixed" === u) && -1 < (r + l).indexOf("auto") ? (a = (i = c.position()).top, i.left) : (a = parseFloat(r) || 0, parseFloat(l) || 0), y(e) && (e = e.call(t, n, T.extend({}, o))), null != e.top && (d.top = e.top - o.top + a), null != e.left && (d.left = e.left - o.left + s), "using" in e ? e.using.call(t, d) : c.css(d)
      }
    }, T.fn.extend({
      offset: function (e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          T.offset.setOffset(this, e, t)
        });
        var t, n, i = this[0];
        return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function () {
        if (this[0]) {
          var t, e, n, i = this[0],
            s = {
              top: 0,
              left: 0
            };
          if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();
          else {
            for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;
            t && t !== i && 1 === t.nodeType && ((s = T(t).offset()).top += T.css(t, "borderTopWidth", !0), s.left += T.css(t, "borderLeftWidth", !0))
          }
          return {
            top: e.top - s.top - T.css(i, "marginTop", !0),
            left: e.left - s.left - T.css(i, "marginLeft", !0)
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;
          return t || bt
        })
      }
    }), T.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, s) {
      var r = "pageYOffset" === s;
      T.fn[e] = function (t) {
        return H(this, function (t, e, n) {
          var i;
          if (b(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[s] : t[e];
          i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : t[e] = n
        }, e, t, arguments.length)
      }
    }), T.each(["top", "left"], function (t, n) {
      T.cssHooks[n] = Rt(v.pixelPosition, function (t, e) {
        if (e) return e = Lt(t, n), Ut.test(e) ? T(t).position()[n] + "px" : e
      })
    }), T.each({
      Height: "height",
      Width: "width"
    }, function (a, o) {
      T.each({
        padding: "inner" + a,
        content: o,
        "": "outer" + a
      }, function (i, r) {
        T.fn[r] = function (t, e) {
          var n = arguments.length && (i || "boolean" != typeof t),
            s = i || (!0 === t || !0 === e ? "margin" : "border");
          return H(this, function (t, e, n) {
            var i;
            return b(t) ? 0 === r.indexOf("outer") ? t["inner" + a] : t.document.documentElement["client" + a] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + a], i["scroll" + a], t.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? T.css(t, e, s) : T.style(t, e, n, s)
          }, o, n ? t : void 0, n)
        }
      })
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
      T.fn[n] = function (t, e) {
        return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
      }
    }), T.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
      }
    }), T.fn.extend({
      bind: function (t, e, n) {
        return this.on(t, null, e, n)
      },
      unbind: function (t, e) {
        return this.off(t, null, e)
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i)
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
      }
    }), T.proxy = function (t, e) {
      var n, i, s;
      if ("string" == typeof e && (n = t[e], e = t, t = n), y(t)) return i = o.call(arguments, 2), (s = function () {
        return t.apply(e || this, i.concat(o.call(arguments)))
      }).guid = t.guid = t.guid || T.guid++, s
    }, T.holdReady = function (t) {
      t ? T.readyWait++ : T.ready(!0)
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = M, T.isFunction = y, T.isWindow = b, T.camelCase = B, T.type = x, T.now = Date.now, T.isNumeric = function (t) {
      var e = T.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
      return T
    });
    var ze = D.jQuery,
      Be = D.$;
    return T.noConflict = function (t) {
      return D.$ === T && (D.$ = Be), t && D.jQuery === T && (D.jQuery = ze), T
    }, t || (D.jQuery = D.$ = T), T
  }), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
  }(function (r) {
    var i = {
      element: "body",
      position: null,
      type: "info",
      allow_dismiss: !0,
      newest_on_top: !1,
      showProgressbar: !1,
      placement: {
        from: "top",
        align: "right"
      },
      offset: 20,
      spacing: 10,
      z_index: 1031,
      delay: 5e3,
      timer: 1e3,
      url_target: "_blank",
      mouse_over: null,
      animate: {
        enter: "animated fadeInDown",
        exit: "animated fadeOutUp"
      },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      icon_type: "class",
      template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };

    function n(t, e, n) {
      e = {
        content: {
          message: "object" == typeof e ? e.message : e,
          title: e.title ? e.title : "",
          icon: e.icon ? e.icon : "",
          url: e.url ? e.url : "#",
          target: e.target ? e.target : "-"
        }
      };
      n = r.extend(!0, {}, e, n), this.settings = r.extend(!0, {}, i, n), this._defaults = i, "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
        start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
        end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
      }, "number" == typeof this.settings.offset && (this.settings.offset = {
        x: this.settings.offset,
        y: this.settings.offset
      }), this.init()
    }
    String.format = function () {
      for (var t = arguments[0], e = 1; e < arguments.length; e++) t = t.replace(RegExp("\\{" + (e - 1) + "\\}", "gm"), arguments[e]);
      return t
    }, r.extend(n.prototype, {
      init: function () {
        var a = this;
        this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
          $ele: this.$ele,
          update: function (t, e) {
            var n = {};
            for (var t in "string" == typeof t ? n[t] = e : n = t, n) switch (t) {
              case "type":
                this.$ele.removeClass("alert-" + a.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + a.settings.type), a.settings.type = n[t], this.$ele.addClass("alert-" + n[t]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + n[t]);
                break;
              case "icon":
                var i = this.$ele.find('[data-notify="icon"]');
                "class" == a.settings.icon_type.toLowerCase() ? i.removeClass(a.settings.content.icon).addClass(n[t]) : (i.is("img") || i.find("img"), i.attr("src", n[t]));
                break;
              case "progress":
                var s = a.settings.delay - a.settings.delay * (n[t] / 100);
                this.$ele.data("notify-delay", s), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", n[t]).css("width", n[t] + "%");
                break;
              case "url":
                this.$ele.find('[data-notify="url"]').attr("href", n[t]);
                break;
              case "target":
                this.$ele.find('[data-notify="url"]').attr("target", n[t]);
                break;
              default:
                this.$ele.find('[data-notify="' + t + '"]').html(n[t])
            }
            var r = this.$ele.outerHeight() + parseInt(a.settings.spacing) + parseInt(a.settings.offset.y);
            a.reposition(r)
          },
          close: function () {
            a.close()
          }
        }
      },
      buildNotify: function () {
        var t = this.settings.content;
        this.$ele = r(String.format(this.settings.template, this.settings.type, t.title, t.message, t.url, t.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
      },
      setIcon: function () {
        "class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
      },
      styleDismiss: function () {
        this.$ele.find('[data-notify="dismiss"]').css({
          position: "absolute",
          right: "10px",
          top: "5px",
          zIndex: this.settings.z_index + 2
        })
      },
      styleURL: function () {
        this.$ele.find('[data-notify="url"]').css({
          backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
          height: "100%",
          left: "0px",
          position: "absolute",
          top: "0px",
          width: "100%",
          zIndex: this.settings.z_index + 1
        })
      },
      placement: function () {
        var n = this,
          t = this.settings.offset.y,
          e = {
            display: "inline-block",
            margin: "0px auto",
            position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
            transition: "all .5s ease-in-out",
            zIndex: this.settings.z_index
          },
          i = !1,
          s = this.settings;
        switch (r('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
          return t = Math.max(t, parseInt(r(this).css(s.placement.from)) + parseInt(r(this).outerHeight()) + parseInt(s.spacing))
        }), 1 == this.settings.newest_on_top && (t = this.settings.offset.y), e[this.settings.placement.from] = t + "px", this.settings.placement.align) {
          case "left":
          case "right":
            e[this.settings.placement.align] = this.settings.offset.x + "px";
            break;
          case "center":
            e.left = 0, e.right = 0
        }
        this.$ele.css(e).addClass(this.settings.animate.enter), r.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (t, e) {
          n.$ele[0].style[e + "AnimationIterationCount"] = 1
        }), r(this.settings.element).append(this.$ele), 1 == this.settings.newest_on_top && (t = parseInt(t) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(t)), r.isFunction(n.settings.onShow) && n.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function (t) {
          i = !0
        }).one(this.animations.end, function (t) {
          r.isFunction(n.settings.onShown) && n.settings.onShown.call(this)
        }), setTimeout(function () {
          i || r.isFunction(n.settings.onShown) && n.settings.onShown.call(this)
        }, 600)
      },
      bind: function () {
        var n = this;
        if (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
            n.close()
          }), this.$ele.mouseover(function (t) {
            r(this).data("data-hover", "true")
          }).mouseout(function (t) {
            r(this).data("data-hover", "false")
          }), this.$ele.data("data-hover", "false"), 0 < this.settings.delay) {
          n.$ele.data("notify-delay", n.settings.delay);
          var i = setInterval(function () {
            var t = parseInt(n.$ele.data("notify-delay")) - n.settings.timer;
            if ("false" === n.$ele.data("data-hover") && "pause" == n.settings.mouse_over || "pause" != n.settings.mouse_over) {
              var e = (n.settings.delay - t) / n.settings.delay * 100;
              n.$ele.data("notify-delay", t), n.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", e).css("width", e + "%")
            }
            t <= -n.settings.timer && (clearInterval(i), n.close())
          }, n.settings.timer)
        }
      },
      close: function () {
        var e = this,
          t = parseInt(this.$ele.css(this.settings.placement.from)),
          n = !1;
        this.$ele.data("closing", "true").addClass(this.settings.animate.exit), e.reposition(t), r.isFunction(e.settings.onClose) && e.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function (t) {
          n = !0
        }).one(this.animations.end, function (t) {
          r(this).remove(), r.isFunction(e.settings.onClosed) && e.settings.onClosed.call(this)
        }), setTimeout(function () {
          n || (e.$ele.remove(), e.settings.onClosed && e.settings.onClosed(e.$ele))
        }, 600)
      },
      reposition: function (t) {
        var e = this,
          n = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
          i = this.$ele.nextAll(n);
        1 == this.settings.newest_on_top && (i = this.$ele.prevAll(n)), i.each(function () {
          r(this).css(e.settings.placement.from, t), t = parseInt(t) + parseInt(e.settings.spacing) + r(this).outerHeight()
        })
      }
    }), r.notify = function (t, e) {
      return new n(this, t, e).notify
    }, r.notifyDefaults = function (t) {
      return i = r.extend(!0, {}, i, t)
    }, r.notifyClose = function (t) {
      void 0 === t || "all" == t ? r("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : r('[data-notify-position="' + t + '"]').find('[data-notify="dismiss"]').trigger("click")
    }
  }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
    var e = 16 * Math.random() | 0;
    return ("x" == t ? e : 3 & e | 8).toString(16)
  })
}! function (t) {
  "use strict";
  var e = jQuery.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function (i) {
  "use strict";
  i.fn.emulateTransitionEnd = function (t) {
    var e = !1,
      n = this;
    i(this).one("bsTransitionEnd", function () {
      e = !0
    });
    return setTimeout(function () {
      e || i(n).trigger(i.support.transition.end)
    }, t), this
  }, i(function () {
    i.support.transition = function () {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var n in e)
        if (void 0 !== t.style[n]) return {
          end: e[n]
        };
      return !1
    }(), i.support.transition && (i.event.special.bsTransitionEnd = {
      bindType: i.support.transition.end,
      delegateType: i.support.transition.end,
      handle: function (t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery),
function (r) {
  "use strict";
  var e = '[data-dismiss="alert"]',
    a = function (t) {
      r(t).on("click", e, this.close)
    };
  a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.close = function (t) {
    var e = r(this),
      n = e.attr("data-target");
    n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = r("#" === n ? [] : n);

    function s() {
      i.detach().trigger("closed.bs.alert").remove()
    }
    t && t.preventDefault(), i.length || (i = e.closest(".alert")), i.trigger(t = r.Event("close.bs.alert")), t.isDefaultPrevented() || (i.removeClass("in"), r.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s())
  };
  var t = r.fn.alert;
  r.fn.alert = function (n) {
    return this.each(function () {
      var t = r(this),
        e = t.data("bs.alert");
      e || t.data("bs.alert", e = new a(this)), "string" == typeof n && e[n].call(t)
    })
  }, r.fn.alert.Constructor = a, r.fn.alert.noConflict = function () {
    return r.fn.alert = t, this
  }, r(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function (r) {
  "use strict";
  var s = function (t, e) {
    this.$element = r(t), this.options = r.extend({}, s.DEFAULTS, e), this.isLoading = !1
  };

  function n(i) {
    return this.each(function () {
      var t = r(this),
        e = t.data("bs.button"),
        n = "object" == typeof i && i;
      e || t.data("bs.button", e = new s(this, n)), "toggle" == i ? e.toggle() : i && e.setState(i)
    })
  }
  s.VERSION = "3.3.7", s.DEFAULTS = {
    loadingText: "loading..."
  }, s.prototype.setState = function (t) {
    var e = "disabled",
      n = this.$element,
      i = n.is("input") ? "val" : "html",
      s = n.data();
    t += "Text", null == s.resetText && n.data("resetText", n[i]()), setTimeout(r.proxy(function () {
      n[i](null == s[t] ? this.options[t] : s[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(e).removeAttr(e).prop(e, !1))
    }, this), 0)
  }, s.prototype.toggle = function () {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var n = this.$element.find("input");
      "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var t = r.fn.button;
  r.fn.button = n, r.fn.button.Constructor = s, r.fn.button.noConflict = function () {
    return r.fn.button = t, this
  }, r(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var e = r(t.target).closest(".btn");
    n.call(e, "toggle"), r(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    r(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
  })
}(jQuery),
function (d) {
  "use strict";
  var h = function (t, e) {
    this.$element = d(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", d.proxy(this.pause, this)).on("mouseleave.bs.carousel", d.proxy(this.cycle, this))
  };

  function a(s) {
    return this.each(function () {
      var t = d(this),
        e = t.data("bs.carousel"),
        n = d.extend({}, h.DEFAULTS, t.data(), "object" == typeof s && s),
        i = "string" == typeof s ? s : n.slide;
      e || t.data("bs.carousel", e = new h(this, n)), "number" == typeof s ? e.to(s) : i ? e[i]() : n.interval && e.pause().cycle()
    })
  }
  h.VERSION = "3.3.7", h.TRANSITION_DURATION = 600, h.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, h.prototype.keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      t.preventDefault()
    }
  }, h.prototype.cycle = function (t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(d.proxy(this.next, this), this.options.interval)), this
  }, h.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, h.prototype.getItemForDirection = function (t, e) {
    var n = this.getItemIndex(e);
    if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
    var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
    return this.$items.eq(i)
  }, h.prototype.to = function (t) {
    var e = this,
      n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      e.to(t)
    }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
  }, h.prototype.pause = function (t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && d.support.transition && (this.$element.trigger(d.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, h.prototype.next = function () {
    if (!this.sliding) return this.slide("next")
  }, h.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev")
  }, h.prototype.slide = function (t, e) {
    var n = this.$element.find(".item.active"),
      i = e || this.getItemForDirection(t, n),
      s = this.interval,
      r = "next" == t ? "left" : "right",
      a = this;
    if (i.hasClass("active")) return this.sliding = !1;
    var o = i[0],
      l = d.Event("slide.bs.carousel", {
        relatedTarget: o,
        direction: r
      });
    if (this.$element.trigger(l), !l.isDefaultPrevented()) {
      if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var u = d(this.$indicators.children()[this.getItemIndex(i)]);
        u && u.addClass("active")
      }
      var c = d.Event("slid.bs.carousel", {
        relatedTarget: o,
        direction: r
      });
      return d.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), i[0].offsetWidth, n.addClass(r), i.addClass(r), n.one("bsTransitionEnd", function () {
        i.removeClass([t, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), a.sliding = !1, setTimeout(function () {
          a.$element.trigger(c)
        }, 0)
      }).emulateTransitionEnd(h.TRANSITION_DURATION)) : (n.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(c)), s && this.cycle(), this
    }
  };
  var t = d.fn.carousel;
  d.fn.carousel = a, d.fn.carousel.Constructor = h, d.fn.carousel.noConflict = function () {
    return d.fn.carousel = t, this
  };
  var e = function (t) {
    var e, n = d(this),
      i = d(n.attr("data-target") || (e = n.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
    if (i.hasClass("carousel")) {
      var s = d.extend({}, i.data(), n.data()),
        r = n.attr("data-slide-to");
      r && (s.interval = !1), a.call(i, s), r && i.data("bs.carousel").to(r), t.preventDefault()
    }
  };
  d(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), d(window).on("load", function () {
    d('[data-ride="carousel"]').each(function () {
      var t = d(this);
      a.call(t, t.data())
    })
  })
}(jQuery),
function (a) {
  "use strict";
  var o = function (t, e) {
    this.$element = a(t), this.options = a.extend({}, o.DEFAULTS, e), this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };

  function s(t) {
    var e, n = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
    return a(n)
  }

  function l(i) {
    return this.each(function () {
      var t = a(this),
        e = t.data("bs.collapse"),
        n = a.extend({}, o.DEFAULTS, t.data(), "object" == typeof i && i);
      !e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || t.data("bs.collapse", e = new o(this, n)), "string" == typeof i && e[i]()
    })
  }
  o.VERSION = "3.3.7", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
    toggle: !0
  }, o.prototype.dimension = function () {
    return this.$element.hasClass("width") ? "width" : "height"
  }, o.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
        var n = a.Event("show.bs.collapse");
        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
          e && e.length && (l.call(e, "hide"), t || e.data("bs.collapse", null));
          var i = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var s = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!a.support.transition) return s.call(this);
          var r = a.camelCase(["scroll", i].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(s, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[i](this.$element[0][r])
        }
      }
    }
  }, o.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var t = a.Event("hide.bs.collapse");
      if (this.$element.trigger(t), !t.isDefaultPrevented()) {
        var e = this.dimension();
        this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var n = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        if (!a.support.transition) return n.call(this);
        this.$element[e](0).one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION)
      }
    }
  }, o.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, o.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (t, e) {
      var n = a(e);
      this.addAriaAndCollapsedClass(s(n), n)
    }, this)).end()
  }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
    var n = t.hasClass("in");
    t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
  };
  var t = a.fn.collapse;
  a.fn.collapse = l, a.fn.collapse.Constructor = o, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = t, this
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
    var e = a(this);
    e.attr("data-target") || t.preventDefault();
    var n = s(e),
      i = n.data("bs.collapse") ? "toggle" : e.data();
    l.call(n, i)
  })
}(jQuery),
function (a) {
  "use strict";
  var o = '[data-toggle="dropdown"]',
    i = function (t) {
      a(t).on("click.bs.dropdown", this.toggle)
    };

  function l(t) {
    var e = t.attr("data-target");
    e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
    var n = e && a(e);
    return n && n.length ? n : t.parent()
  }

  function r(i) {
    i && 3 === i.which || (a(".dropdown-backdrop").remove(), a(o).each(function () {
      var t = a(this),
        e = l(t),
        n = {
          relatedTarget: this
        };
      e.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && a.contains(e[0], i.target) || (e.trigger(i = a.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", n)))))
    }))
  }
  i.VERSION = "3.3.7", i.prototype.toggle = function (t) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var n = l(e),
        i = n.hasClass("open");
      if (r(), !i) {
        "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", r);
        var s = {
          relatedTarget: this
        };
        if (n.trigger(t = a.Event("show.bs.dropdown", s)), t.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(a.Event("shown.bs.dropdown", s))
      }
      return !1
    }
  }, i.prototype.keydown = function (t) {
    if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
      var e = a(this);
      if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
        var n = l(e),
          i = n.hasClass("open");
        if (!i && 27 != t.which || i && 27 == t.which) return 27 == t.which && n.find(o).trigger("focus"), e.trigger("click");
        var s = n.find(".dropdown-menu li:not(.disabled):visible a");
        if (s.length) {
          var r = s.index(t.target);
          38 == t.which && 0 < r && r--, 40 == t.which && r < s.length - 1 && r++, ~r || (r = 0), s.eq(r).trigger("focus")
        }
      }
    }
  };
  var t = a.fn.dropdown;
  a.fn.dropdown = function (n) {
    return this.each(function () {
      var t = a(this),
        e = t.data("bs.dropdown");
      e || t.data("bs.dropdown", e = new i(this)), "string" == typeof n && e[n].call(t)
    })
  }, a.fn.dropdown.Constructor = i, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = t, this
  }, a(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation()
  }).on("click.bs.dropdown.data-api", o, i.prototype.toggle).on("keydown.bs.dropdown.data-api", o, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function (r) {
  "use strict";
  var a = function (t, e) {
    this.options = e, this.$body = r(document.body), this.$element = r(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, r.proxy(function () {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };

  function o(i, s) {
    return this.each(function () {
      var t = r(this),
        e = t.data("bs.modal"),
        n = r.extend({}, a.DEFAULTS, t.data(), "object" == typeof i && i);
      e || t.data("bs.modal", e = new a(this, n)), "string" == typeof i ? e[i](s) : n.show && e.show(s)
    })
  }
  a.VERSION = "3.3.7", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, a.prototype.toggle = function (t) {
    return this.isShown ? this.hide() : this.show(t)
  }, a.prototype.show = function (n) {
    var i = this,
      t = r.Event("show.bs.modal", {
        relatedTarget: n
      });
    this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', r.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      i.$element.one("mouseup.dismiss.bs.modal", function (t) {
        r(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function () {
      var t = r.support.transition && i.$element.hasClass("fade");
      i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), t && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
      var e = r.Event("shown.bs.modal", {
        relatedTarget: n
      });
      t ? i.$dialog.one("bsTransitionEnd", function () {
        i.$element.trigger("focus").trigger(e)
      }).emulateTransitionEnd(a.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(e)
    }))
  }, a.prototype.hide = function (t) {
    t && t.preventDefault(), t = r.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), r(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), r.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", r.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
  }, a.prototype.enforceFocus = function () {
    r(document).off("focusin.bs.modal").on("focusin.bs.modal", r.proxy(function (t) {
      document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
  }, a.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", r.proxy(function (t) {
      27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, a.prototype.resize = function () {
    this.isShown ? r(window).on("resize.bs.modal", r.proxy(this.handleUpdate, this)) : r(window).off("resize.bs.modal")
  }, a.prototype.hideModal = function () {
    var t = this;
    this.$element.hide(), this.backdrop(function () {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
  }, a.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, a.prototype.backdrop = function (t) {
    var e = this,
      n = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var i = r.support.transition && n;
      if (this.$backdrop = r(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", r.proxy(function (t) {
          this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
        }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
      i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : t()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var s = function () {
        e.removeBackdrop(), t && t()
      };
      r.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : s()
    } else t && t()
  }, a.prototype.handleUpdate = function () {
    this.adjustDialog()
  }, a.prototype.adjustDialog = function () {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
  }, a.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, a.prototype.checkScrollbar = function () {
    var t = window.innerWidth;
    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
  }, a.prototype.setScrollbar = function () {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
  }, a.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad)
  }, a.prototype.measureScrollbar = function () {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var t = r.fn.modal;
  r.fn.modal = o, r.fn.modal.Constructor = a, r.fn.modal.noConflict = function () {
    return r.fn.modal = t, this
  }, r(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
    var e = r(this),
      n = e.attr("href"),
      i = r(e.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
      s = i.data("bs.modal") ? "toggle" : r.extend({
        remote: !/#/.test(n) && n
      }, i.data(), e.data());
    e.is("a") && t.preventDefault(), i.one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || i.one("hidden.bs.modal", function () {
        e.is(":visible") && e.trigger("focus")
      })
    }), o.call(i, s, this)
  })
}(jQuery),
function (m) {
  "use strict";
  var g = function (t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
  };
  g.VERSION = "3.3.7", g.TRANSITION_DURATION = 150, g.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, g.prototype.init = function (t, e, n) {
    if (this.enabled = !0, this.type = t, this.$element = m(e), this.options = this.getOptions(n), this.$viewport = this.options.viewport && m(m.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
      var r = i[s];
      if ("click" == r) this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this));
      else if ("manual" != r) {
        var a = "hover" == r ? "mouseenter" : "focusin",
          o = "hover" == r ? "mouseleave" : "focusout";
        this.$element.on(a + "." + this.type, this.options.selector, m.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, m.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = m.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, g.prototype.getDefaults = function () {
    return g.DEFAULTS
  }, g.prototype.getOptions = function (t) {
    return (t = m.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), t
  }, g.prototype.getDelegateOptions = function () {
    var n = {},
      i = this.getDefaults();
    return this._options && m.each(this._options, function (t, e) {
      i[t] != e && (n[t] = e)
    }), n
  }, g.prototype.enter = function (t) {
    var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
    if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), t instanceof m.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in";
    else {
      if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
      e.timeout = setTimeout(function () {
        "in" == e.hoverState && e.show()
      }, e.options.delay.show)
    }
  }, g.prototype.isInStateTrue = function () {
    for (var t in this.inState)
      if (this.inState[t]) return !0;
    return !1
  }, g.prototype.leave = function (t) {
    var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
    if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), t instanceof m.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
      if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
      e.timeout = setTimeout(function () {
        "out" == e.hoverState && e.hide()
      }, e.options.delay.hide)
    }
  }, g.prototype.show = function () {
    var t = m.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(t);
      var e = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (t.isDefaultPrevented() || !e) return;
      var n = this,
        i = this.tip(),
        s = this.getUID(this.type);
      this.setContent(), i.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && i.addClass("fade");
      var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
        a = /\s?auto?\s?/i,
        o = a.test(r);
      o && (r = r.replace(a, "") || "top"), i.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(r).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var l = this.getPosition(),
        u = i[0].offsetWidth,
        c = i[0].offsetHeight;
      if (o) {
        var d = r,
          h = this.getPosition(this.$viewport);
        r = "bottom" == r && l.bottom + c > h.bottom ? "top" : "top" == r && l.top - c < h.top ? "bottom" : "right" == r && l.right + u > h.width ? "left" : "left" == r && l.left - u < h.left ? "right" : r, i.removeClass(d).addClass(r)
      }
      var f = this.getCalculatedOffset(r, l, u, c);
      this.applyPlacement(f, r);
      var p = function () {
        var t = n.hoverState;
        n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
      };
      m.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", p).emulateTransitionEnd(g.TRANSITION_DURATION) : p()
    }
  }, g.prototype.applyPlacement = function (t, e) {
    var n = this.tip(),
      i = n[0].offsetWidth,
      s = n[0].offsetHeight,
      r = parseInt(n.css("margin-top"), 10),
      a = parseInt(n.css("margin-left"), 10);
    isNaN(r) && (r = 0), isNaN(a) && (a = 0), t.top += r, t.left += a, m.offset.setOffset(n[0], m.extend({
      using: function (t) {
        n.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        })
      }
    }, t), 0), n.addClass("in");
    var o = n[0].offsetWidth,
      l = n[0].offsetHeight;
    "top" == e && l != s && (t.top = t.top + s - l);
    var u = this.getViewportAdjustedDelta(e, t, o, l);
    u.left ? t.left += u.left : t.top += u.top;
    var c = /top|bottom/.test(e),
      d = c ? 2 * u.left - i + o : 2 * u.top - s + l,
      h = c ? "offsetWidth" : "offsetHeight";
    n.offset(t), this.replaceArrow(d, n[0][h], c)
  }, g.prototype.replaceArrow = function (t, e, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
  }, g.prototype.setContent = function () {
    var t = this.tip(),
      e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
  }, g.prototype.hide = function (t) {
    var e = this,
      n = m(this.$tip),
      i = m.Event("hide.bs." + this.type);

    function s() {
      "in" != e.hoverState && n.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), t && t()
    }
    if (this.$element.trigger(i), !i.isDefaultPrevented()) return n.removeClass("in"), m.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", s).emulateTransitionEnd(g.TRANSITION_DURATION) : s(), this.hoverState = null, this
  }, g.prototype.fixTitle = function () {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }, g.prototype.hasContent = function () {
    return this.getTitle()
  }, g.prototype.getPosition = function (t) {
    var e = (t = t || this.$element)[0],
      n = "BODY" == e.tagName,
      i = e.getBoundingClientRect();
    null == i.width && (i = m.extend({}, i, {
      width: i.right - i.left,
      height: i.bottom - i.top
    }));
    var s = window.SVGElement && e instanceof window.SVGElement,
      r = n ? {
        top: 0,
        left: 0
      } : s ? null : t.offset(),
      a = {
        scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
      },
      o = n ? {
        width: m(window).width(),
        height: m(window).height()
      } : null;
    return m.extend({}, i, a, o, r)
  }, g.prototype.getCalculatedOffset = function (t, e, n, i) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - n / 2
    } : "top" == t ? {
      top: e.top - i,
      left: e.left + e.width / 2 - n / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - i / 2,
      left: e.left - n
    } : {
      top: e.top + e.height / 2 - i / 2,
      left: e.left + e.width
    }
  }, g.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
    var s = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return s;
    var r = this.options.viewport && this.options.viewport.padding || 0,
      a = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var o = e.top - r - a.scroll,
        l = e.top + r - a.scroll + i;
      o < a.top ? s.top = a.top - o : l > a.top + a.height && (s.top = a.top + a.height - l)
    } else {
      var u = e.left - r,
        c = e.left + r + n;
      u < a.left ? s.left = a.left - u : c > a.right && (s.left = a.left + a.width - c)
    }
    return s
  }, g.prototype.getTitle = function () {
    var t = this.$element,
      e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
  }, g.prototype.getUID = function (t) {
    for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
    return t
  }, g.prototype.tip = function () {
    if (!this.$tip && (this.$tip = m(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, g.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, g.prototype.enable = function () {
    this.enabled = !0
  }, g.prototype.disable = function () {
    this.enabled = !1
  }, g.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }, g.prototype.toggle = function (t) {
    var e = this;
    t && ((e = m(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
  }, g.prototype.destroy = function () {
    var t = this;
    clearTimeout(this.timeout), this.hide(function () {
      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
    })
  };
  var t = m.fn.tooltip;
  m.fn.tooltip = function (i) {
    return this.each(function () {
      var t = m(this),
        e = t.data("bs.tooltip"),
        n = "object" == typeof i && i;
      !e && /destroy|hide/.test(i) || (e || t.data("bs.tooltip", e = new g(this, n)), "string" == typeof i && e[i]())
    })
  }, m.fn.tooltip.Constructor = g, m.fn.tooltip.noConflict = function () {
    return m.fn.tooltip = t, this
  }
}(jQuery),
function (s) {
  "use strict";
  var r = function (t, e) {
    this.init("popover", t, e)
  };
  if (!s.fn.tooltip) throw new Error("Popover requires tooltip.js");
  r.VERSION = "3.3.7", r.DEFAULTS = s.extend({}, s.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), ((r.prototype = s.extend({}, s.fn.tooltip.Constructor.prototype)).constructor = r).prototype.getDefaults = function () {
    return r.DEFAULTS
  }, r.prototype.setContent = function () {
    var t = this.tip(),
      e = this.getTitle(),
      n = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
  }, r.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }, r.prototype.getContent = function () {
    var t = this.$element,
      e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }, r.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var t = s.fn.popover;
  s.fn.popover = function (i) {
    return this.each(function () {
      var t = s(this),
        e = t.data("bs.popover"),
        n = "object" == typeof i && i;
      !e && /destroy|hide/.test(i) || (e || t.data("bs.popover", e = new r(this, n)), "string" == typeof i && e[i]())
    })
  }, s.fn.popover.Constructor = r, s.fn.popover.noConflict = function () {
    return s.fn.popover = t, this
  }
}(jQuery),
function (r) {
  "use strict";

  function s(t, e) {
    this.$body = r(document.body), this.$scrollElement = r(t).is(document.body) ? r(window) : r(t), this.options = r.extend({}, s.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r.proxy(this.process, this)), this.refresh(), this.process()
  }

  function e(i) {
    return this.each(function () {
      var t = r(this),
        e = t.data("bs.scrollspy"),
        n = "object" == typeof i && i;
      e || t.data("bs.scrollspy", e = new s(this, n)), "string" == typeof i && e[i]()
    })
  }
  s.VERSION = "3.3.7", s.DEFAULTS = {
    offset: 10
  }, s.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, s.prototype.refresh = function () {
    var t = this,
      i = "offset",
      s = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), r.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var t = r(this),
        e = t.data("target") || t.attr("href"),
        n = /^#./.test(e) && r(e);
      return n && n.length && n.is(":visible") && [
        [n[i]().top + s, e]
      ] || null
    }).sort(function (t, e) {
      return t[0] - e[0]
    }).each(function () {
      t.offsets.push(this[0]), t.targets.push(this[1])
    })
  }, s.prototype.process = function () {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
      n = this.getScrollHeight(),
      i = this.options.offset + n - this.$scrollElement.height(),
      s = this.offsets,
      r = this.targets,
      a = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), i <= e) return a != (t = r[r.length - 1]) && this.activate(t);
    if (a && e < s[0]) return this.activeTarget = null, this.clear();
    for (t = s.length; t--;) a != r[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(r[t])
  }, s.prototype.activate = function (t) {
    this.activeTarget = t, this.clear();
    var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
      n = r(e).parents("li").addClass("active");
    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
  }, s.prototype.clear = function () {
    r(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var t = r.fn.scrollspy;
  r.fn.scrollspy = e, r.fn.scrollspy.Constructor = s, r.fn.scrollspy.noConflict = function () {
    return r.fn.scrollspy = t, this
  }, r(window).on("load.bs.scrollspy.data-api", function () {
    r('[data-spy="scroll"]').each(function () {
      var t = r(this);
      e.call(t, t.data())
    })
  })
}(jQuery),
function (o) {
  "use strict";
  var a = function (t) {
    this.element = o(t)
  };

  function e(n) {
    return this.each(function () {
      var t = o(this),
        e = t.data("bs.tab");
      e || t.data("bs.tab", e = new a(this)), "string" == typeof n && e[n]()
    })
  }
  a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.show = function () {
    var t = this.element,
      e = t.closest("ul:not(.dropdown-menu)"),
      n = t.data("target");
    if (n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
      var i = e.find(".active:last a"),
        s = o.Event("hide.bs.tab", {
          relatedTarget: t[0]
        }),
        r = o.Event("show.bs.tab", {
          relatedTarget: i[0]
        });
      if (i.trigger(s), t.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
        var a = o(n);
        this.activate(t.closest("li"), e), this.activate(a, a.parent(), function () {
          i.trigger({
            type: "hidden.bs.tab",
            relatedTarget: t[0]
          }), t.trigger({
            type: "shown.bs.tab",
            relatedTarget: i[0]
          })
        })
      }
    }
  }, a.prototype.activate = function (t, e, n) {
    var i = e.find("> .active"),
      s = n && o.support.transition && (i.length && i.hasClass("fade") || !!e.find("> .fade").length);

    function r() {
      i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
    }
    i.length && s ? i.one("bsTransitionEnd", r).emulateTransitionEnd(a.TRANSITION_DURATION) : r(), i.removeClass("in")
  };
  var t = o.fn.tab;
  o.fn.tab = e, o.fn.tab.Constructor = a, o.fn.tab.noConflict = function () {
    return o.fn.tab = t, this
  };
  var n = function (t) {
    t.preventDefault(), e.call(o(this), "show")
  };
  o(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function (l) {
  "use strict";
  var u = function (t, e) {
    this.options = l.extend({}, u.DEFAULTS, e), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };

  function n(i) {
    return this.each(function () {
      var t = l(this),
        e = t.data("bs.affix"),
        n = "object" == typeof i && i;
      e || t.data("bs.affix", e = new u(this, n)), "string" == typeof i && e[i]()
    })
  }
  u.VERSION = "3.3.7", u.RESET = "affix affix-top affix-bottom", u.DEFAULTS = {
    offset: 0,
    target: window
  }, u.prototype.getState = function (t, e, n, i) {
    var s = this.$target.scrollTop(),
      r = this.$element.offset(),
      a = this.$target.height();
    if (null != n && "top" == this.affixed) return s < n && "top";
    if ("bottom" == this.affixed) return null != n ? !(s + this.unpin <= r.top) && "bottom" : !(s + a <= t - i) && "bottom";
    var o = null == this.affixed,
      l = o ? s : r.top;
    return null != n && s <= n ? "top" : null != i && t - i <= l + (o ? a : e) && "bottom"
  }, u.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(u.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
      e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, u.prototype.checkPositionWithEventLoop = function () {
    setTimeout(l.proxy(this.checkPosition, this), 1)
  }, u.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var t = this.$element.height(),
        e = this.options.offset,
        n = e.top,
        i = e.bottom,
        s = Math.max(l(document).height(), l(document.body).height());
      "object" != typeof e && (i = n = e), "function" == typeof n && (n = e.top(this.$element)), "function" == typeof i && (i = e.bottom(this.$element));
      var r = this.getState(s, t, n, i);
      if (this.affixed != r) {
        null != this.unpin && this.$element.css("top", "");
        var a = "affix" + (r ? "-" + r : ""),
          o = l.Event(a + ".bs.affix");
        if (this.$element.trigger(o), o.isDefaultPrevented()) return;
        this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(u.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == r && this.$element.offset({
        top: s - t - i
      })
    }
  };
  var t = l.fn.affix;
  l.fn.affix = n, l.fn.affix.Constructor = u, l.fn.affix.noConflict = function () {
    return l.fn.affix = t, this
  }, l(window).on("load", function () {
    l('[data-spy="affix"]').each(function () {
      var t = l(this),
        e = t.data();
      e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), n.call(t, e)
    })
  })
}(jQuery),
function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function (C, S) {
  function M() {
    return new Date(Date.UTC.apply(Date, arguments))
  }

  function x() {
    var t = new Date;
    return M(t.getFullYear(), t.getMonth(), t.getDate())
  }

  function r(t, e) {
    return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
  }

  function t(t, e) {
    return function () {
      return e !== S && C.fn.datepicker.deprecated(e), this[t].apply(this, arguments)
    }
  }
  var e, n = (e = {
      get: function (t) {
        return this.slice(t)[0]
      },
      contains: function (t) {
        for (var e = t && t.valueOf(), n = 0, i = this.length; n < i; n++)
          if (0 <= this[n].valueOf() - e && this[n].valueOf() - e < 864e5) return n;
        return -1
      },
      remove: function (t) {
        this.splice(t, 1)
      },
      replace: function (t) {
        t && (C.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
      },
      clear: function () {
        this.length = 0
      },
      copy: function () {
        var t = new n;
        return t.replace(this), t
      }
    }, function () {
      var t = [];
      return t.push.apply(t, arguments), C.extend(t, e), t
    }),
    _ = function (t, e) {
      C.data(t, "datepicker", this), this._process_options(e), this.dates = new n, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = C(t), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = C(A.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (t, e) {
        return Number(e) + 1
      }), this._process_options({
        startDate: this._o.startDate,
        endDate: this._o.endDate,
        daysOfWeekDisabled: this.o.daysOfWeekDisabled,
        daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
        datesDisabled: this.o.datesDisabled
      }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show()
    };
  _.prototype = {
    constructor: _,
    _resolveViewName: function (n) {
      return C.each(A.viewModes, function (t, e) {
        if (n === t || -1 !== C.inArray(n, e.names)) return n = t, !1
      }), n
    },
    _resolveDaysOfWeek: function (t) {
      return C.isArray(t) || (t = t.split(/[,\s]*/)), C.map(t, Number)
    },
    _check_template: function (t) {
      try {
        return t !== S && "" !== t && ((t.match(/[<>]/g) || []).length <= 0 || 0 < C(t).length)
      } catch (t) {
        return !1
      }
    },
    _process_options: function (t) {
      this._o = C.extend({}, this._o, t);
      var e = this.o = C.extend({}, this._o),
        n = e.language;
      $[n] || (n = n.split("-")[0], $[n] || (n = c.language)), e.language = n, e.startView = this._resolveViewName(e.startView), e.minViewMode = this._resolveViewName(e.minViewMode), e.maxViewMode = this._resolveViewName(e.maxViewMode), e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)), !0 !== e.multidate && (e.multidate = Number(e.multidate) || !1, !1 !== e.multidate && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
      var i = A.parseFormat(e.format);
      e.startDate !== -1 / 0 && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = A.parseDate(e.startDate, i, e.language, e.assumeNearbyYear) : e.startDate = -1 / 0), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = A.parseDate(e.endDate, i, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []), e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []), e.datesDisabled = e.datesDisabled || [], C.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")), e.datesDisabled = C.map(e.datesDisabled, function (t) {
        return A.parseDate(t, i, e.language, e.assumeNearbyYear)
      });
      var s = String(e.orientation).toLowerCase().split(/\s+/g),
        r = e.orientation.toLowerCase();
      if (s = C.grep(s, function (t) {
          return /^auto|left|right|top|bottom$/.test(t)
        }), e.orientation = {
          x: "auto",
          y: "auto"
        }, r && "auto" !== r)
        if (1 === s.length) switch (s[0]) {
          case "top":
          case "bottom":
            e.orientation.y = s[0];
            break;
          case "left":
          case "right":
            e.orientation.x = s[0]
        } else r = C.grep(s, function (t) {
          return /^left|right$/.test(t)
        }), e.orientation.x = r[0] || "auto", r = C.grep(s, function (t) {
          return /^top|bottom$/.test(t)
        }), e.orientation.y = r[0] || "auto";
        else;
      if (e.defaultViewDate instanceof Date || "string" == typeof e.defaultViewDate) e.defaultViewDate = A.parseDate(e.defaultViewDate, i, e.language, e.assumeNearbyYear);
      else if (e.defaultViewDate) {
        var a = e.defaultViewDate.year || (new Date).getFullYear(),
          o = e.defaultViewDate.month || 0,
          l = e.defaultViewDate.day || 1;
        e.defaultViewDate = M(a, o, l)
      } else e.defaultViewDate = x()
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function (t) {
      for (var e, n, i, s = 0; s < t.length; s++) e = t[s][0], 2 === t[s].length ? (n = S, i = t[s][1]) : 3 === t[s].length && (n = t[s][1], i = t[s][2]), e.on(i, n)
    },
    _unapplyEvents: function (t) {
      for (var e, n, i, s = 0; s < t.length; s++) e = t[s][0], 2 === t[s].length ? (i = S, n = t[s][1]) : 3 === t[s].length && (i = t[s][1], n = t[s][2]), e.off(n, i)
    },
    _buildEvents: function () {
      var t = {
        keyup: C.proxy(function (t) {
          -1 === C.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
        }, this),
        keydown: C.proxy(this.keydown, this),
        paste: C.proxy(this.paste, this)
      };
      !0 === this.o.showOnFocus && (t.focus = C.proxy(this.show, this)), this.isInput ? this._events = [
        [this.element, t]
      ] : this.component && this.inputField.length ? this._events = [
        [this.inputField, t],
        [this.component, {
          click: C.proxy(this.show, this)
        }]
      ] : this._events = [
        [this.element, {
          click: C.proxy(this.show, this),
          keydown: C.proxy(this.keydown, this)
        }]
      ], this._events.push([this.element, "*", {
        blur: C.proxy(function (t) {
          this._focused_from = t.target
        }, this)
      }], [this.element, {
        blur: C.proxy(function (t) {
          this._focused_from = t.target
        }, this)
      }]), this.o.immediateUpdates && this._events.push([this.element, {
        "changeYear changeMonth": C.proxy(function (t) {
          this.update(t.date)
        }, this)
      }]), this._secondaryEvents = [
        [this.picker, {
          click: C.proxy(this.click, this)
        }],
        [this.picker, ".prev, .next", {
          click: C.proxy(this.navArrowsClick, this)
        }],
        [this.picker, ".day:not(.disabled)", {
          click: C.proxy(this.dayCellClick, this)
        }],
        [C(window), {
          resize: C.proxy(this.place, this)
        }],
        [C(document), {
          "mousedown touchstart": C.proxy(function (t) {
            this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide()
          }, this)
        }]
      ]
    },
    _attachEvents: function () {
      this._detachEvents(), this._applyEvents(this._events)
    },
    _detachEvents: function () {
      this._unapplyEvents(this._events)
    },
    _attachSecondaryEvents: function () {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
    },
    _detachSecondaryEvents: function () {
      this._unapplyEvents(this._secondaryEvents)
    },
    _trigger: function (t, e) {
      var n = e || this.dates.get(-1),
        i = this._utc_to_local(n);
      this.element.trigger({
        type: t,
        date: i,
        viewMode: this.viewMode,
        dates: C.map(this.dates, this._utc_to_local),
        format: C.proxy(function (t, e) {
          0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
          var n = this.dates.get(t);
          return A.formatDate(n, e, this.o.language)
        }, this)
      })
    },
    show: function () {
      if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && C(this.element).blur(), this
    },
    hide: function () {
      return this.isInline || !this.picker.is(":visible") || (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide")), this
    },
    destroy: function () {
      return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
    },
    paste: function (t) {
      var e;
      if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && -1 !== C.inArray("text/plain", t.originalEvent.clipboardData.types)) e = t.originalEvent.clipboardData.getData("text/plain");
      else {
        if (!window.clipboardData) return;
        e = window.clipboardData.getData("Text")
      }
      this.setDate(e), this.update(), t.preventDefault()
    },
    _utc_to_local: function (t) {
      if (!t) return t;
      var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
      return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())), e
    },
    _local_to_utc: function (t) {
      return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
    },
    _zero_time: function (t) {
      return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
    },
    _zero_utc_time: function (t) {
      return t && M(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
    },
    getDates: function () {
      return C.map(this.dates, this._utc_to_local)
    },
    getUTCDates: function () {
      return C.map(this.dates, function (t) {
        return new Date(t)
      })
    },
    getDate: function () {
      return this._utc_to_local(this.getUTCDate())
    },
    getUTCDate: function () {
      var t = this.dates.get(-1);
      return t !== S ? new Date(t) : null
    },
    clearDates: function () {
      this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
    },
    setDates: function () {
      var t = C.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
    },
    setUTCDates: function () {
      var t = C.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.setDates.apply(this, C.map(t, this._utc_to_local)), this
    },
    setDate: t("setDates"),
    setUTCDate: t("setUTCDates"),
    remove: t("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
    setValue: function () {
      var t = this.getFormattedDate();
      return this.inputField.val(t), this
    },
    getFormattedDate: function (e) {
      e === S && (e = this.o.format);
      var n = this.o.language;
      return C.map(this.dates, function (t) {
        return A.formatDate(t, e, n)
      }).join(this.o.multidateSeparator)
    },
    getStartDate: function () {
      return this.o.startDate
    },
    setStartDate: function (t) {
      return this._process_options({
        startDate: t
      }), this.update(), this.updateNavArrows(), this
    },
    getEndDate: function () {
      return this.o.endDate
    },
    setEndDate: function (t) {
      return this._process_options({
        endDate: t
      }), this.update(), this.updateNavArrows(), this
    },
    setDaysOfWeekDisabled: function (t) {
      return this._process_options({
        daysOfWeekDisabled: t
      }), this.update(), this
    },
    setDaysOfWeekHighlighted: function (t) {
      return this._process_options({
        daysOfWeekHighlighted: t
      }), this.update(), this
    },
    setDatesDisabled: function (t) {
      return this._process_options({
        datesDisabled: t
      }), this.update(), this
    },
    place: function () {
      if (this.isInline) return this;
      var t = this.picker.outerWidth(),
        e = this.picker.outerHeight(),
        n = C(this.o.container),
        i = n.width(),
        s = "body" === this.o.container ? C(document).scrollTop() : n.scrollTop(),
        r = n.offset(),
        a = [0];
      this.element.parents().each(function () {
        var t = C(this).css("z-index");
        "auto" !== t && 0 !== Number(t) && a.push(Number(t))
      });
      var o = Math.max.apply(Math, a) + this.o.zIndexOffset,
        l = this.component ? this.component.parent().offset() : this.element.offset(),
        u = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
        c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
        d = l.left - r.left,
        h = l.top - r.top;
      "body" !== this.o.container && (h += s), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (d -= t - c)) : l.left < 0 ? (this.picker.addClass("datepicker-orient-left"), d -= l.left - 10) : i < d + t ? (this.picker.addClass("datepicker-orient-right"), d += c - t) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
      var f = this.o.orientation.y;
      if ("auto" === f && (f = -s + h - e < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + f), "top" === f ? h -= e + parseInt(this.picker.css("padding-top")) : h += u, this.o.rtl) {
        var p = i - (d + c);
        this.picker.css({
          top: h,
          right: p,
          zIndex: o
        })
      } else this.picker.css({
        top: h,
        left: d,
        zIndex: o
      });
      return this
    },
    _allow_update: !0,
    update: function () {
      if (!this._allow_update) return this;
      var t = this.dates.copy(),
        n = [],
        e = !1;
      return arguments.length ? (C.each(arguments, C.proxy(function (t, e) {
        e instanceof Date && (e = this._local_to_utc(e)), n.push(e)
      }, this)), e = !0) : (n = (n = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = C.map(n, C.proxy(function (t) {
        return A.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear)
      }, this)), n = C.grep(n, C.proxy(function (t) {
        return !this.dateWithinRange(t) || !t
      }, this), !0), this.dates.replace(n), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), e ? (this.setValue(), this.element.change()) : this.dates.length && String(t) !== String(this.dates) && e && (this._trigger("changeDate"), this.element.change()), !this.dates.length && t.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this
    },
    fillDow: function () {
      if (this.o.showWeekDays) {
        var t = this.o.weekStart,
          e = "<tr>";
        for (this.o.calendarWeeks && (e += '<th class="cw">&#160;</th>'); t < this.o.weekStart + 7;) e += '<th class="dow', -1 !== C.inArray(t, this.o.daysOfWeekDisabled) && (e += " disabled"), e += '">' + $[this.o.language].daysMin[t++ % 7] + "</th>";
        e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
      }
    },
    fillMonths: function () {
      for (var t = this._utc_to_local(this.viewDate), e = "", n = 0; n < 12; n++) e += '<span class="month' + (t && t.getMonth() === n ? " focused" : "") + '">' + $[this.o.language].monthsShort[n] + "</span>";
      this.picker.find(".datepicker-months td").html(e)
    },
    setRange: function (t) {
      t && t.length ? this.range = C.map(t, function (t) {
        return t.valueOf()
      }) : delete this.range, this.fill()
    },
    getClassNames: function (t) {
      var e = [],
        n = this.viewDate.getUTCFullYear(),
        i = this.viewDate.getUTCMonth(),
        s = x();
      return t.getUTCFullYear() < n || t.getUTCFullYear() === n && t.getUTCMonth() < i ? e.push("old") : (t.getUTCFullYear() > n || t.getUTCFullYear() === n && t.getUTCMonth() > i) && e.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && e.push("focused"), this.o.todayHighlight && r(t, s) && e.push("today"), -1 !== this.dates.contains(t) && e.push("active"), this.dateWithinRange(t) || e.push("disabled"), this.dateIsDisabled(t) && e.push("disabled", "disabled-date"), -1 !== C.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) && e.push("highlighted"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && e.push("range"), -1 !== C.inArray(t.valueOf(), this.range) && e.push("selected"), t.valueOf() === this.range[0] && e.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && e.push("range-end")), e
    },
    _fill_yearsView: function (t, e, n, i, s, r, a) {
      for (var o, l, u, c = "", d = n / 10, h = this.picker.find(t), f = Math.floor(i / n) * n, p = f + 9 * d, m = Math.floor(this.viewDate.getFullYear() / d) * d, g = C.map(this.dates, function (t) {
          return Math.floor(t.getUTCFullYear() / d) * d
        }), v = f - d; v <= p + d; v += d) o = [e], l = null, v === f - d ? o.push("old") : v === p + d && o.push("new"), -1 !== C.inArray(v, g) && o.push("active"), (v < s || r < v) && o.push("disabled"), v === m && o.push("focused"), a !== C.noop && ((u = a(new Date(v, 0, 1))) === S ? u = {} : "boolean" == typeof u ? u = {
        enabled: u
      } : "string" == typeof u && (u = {
        classes: u
      }), !1 === u.enabled && o.push("disabled"), u.classes && (o = o.concat(u.classes.split(/\s+/))), u.tooltip && (l = u.tooltip)), c += '<span class="' + o.join(" ") + '"' + (l ? ' title="' + l + '"' : "") + ">" + v + "</span>";
      h.find(".datepicker-switch").text(f + "-" + p), h.find("td").html(c)
    },
    fill: function () {
      var t, e, n = new Date(this.viewDate),
        s = n.getUTCFullYear(),
        i = n.getUTCMonth(),
        r = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
        a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
        o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
        l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
        u = $[this.o.language].today || $.en.today || "",
        c = $[this.o.language].clear || $.en.clear || "",
        d = $[this.o.language].titleFormat || $.en.titleFormat;
      if (!isNaN(s) && !isNaN(i)) {
        this.picker.find(".datepicker-days .datepicker-switch").text(A.formatDate(n, d, this.o.language)), this.picker.find("tfoot .today").text(u).css("display", !0 === this.o.todayBtn || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(c).css("display", !0 === this.o.clearBtn ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
        var h = M(s, i, 0),
          f = h.getUTCDate();
        h.setUTCDate(f - (h.getUTCDay() - this.o.weekStart + 7) % 7);
        var p = new Date(h);
        h.getUTCFullYear() < 100 && p.setUTCFullYear(h.getUTCFullYear()), p.setUTCDate(p.getUTCDate() + 42), p = p.valueOf();
        for (var m, g, v = []; h.valueOf() < p;) {
          if ((m = h.getUTCDay()) === this.o.weekStart && (v.push("<tr>"), this.o.calendarWeeks)) {
            var y = new Date(+h + (this.o.weekStart - m - 7) % 7 * 864e5),
              b = new Date(Number(y) + (11 - y.getUTCDay()) % 7 * 864e5),
              w = new Date(Number(w = M(b.getUTCFullYear(), 0, 1)) + (11 - w.getUTCDay()) % 7 * 864e5),
              x = (b - w) / 864e5 / 7 + 1;
            v.push('<td class="cw">' + x + "</td>")
          }(g = this.getClassNames(h)).push("day");
          var _ = h.getUTCDate();
          this.o.beforeShowDay !== C.noop && ((e = this.o.beforeShowDay(this._utc_to_local(h))) === S ? e = {} : "boolean" == typeof e ? e = {
            enabled: e
          } : "string" == typeof e && (e = {
            classes: e
          }), !1 === e.enabled && g.push("disabled"), e.classes && (g = g.concat(e.classes.split(/\s+/))), e.tooltip && (t = e.tooltip), e.content && (_ = e.content)), g = C.isFunction(C.uniqueSort) ? C.uniqueSort(g) : C.unique(g), v.push('<td class="' + g.join(" ") + '"' + (t ? ' title="' + t + '"' : "") + ' data-date="' + h.getTime().toString() + '">' + _ + "</td>"), t = null, m === this.o.weekEnd && v.push("</tr>"), h.setUTCDate(h.getUTCDate() + 1)
        }
        this.picker.find(".datepicker-days tbody").html(v.join(""));
        var D = $[this.o.language].monthsTitle || $.en.monthsTitle || "Months",
          k = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? D : s).end().find("tbody span").removeClass("active");
        if (C.each(this.dates, function (t, e) {
            e.getUTCFullYear() === s && k.eq(e.getUTCMonth()).addClass("active")
          }), (s < r || o < s) && k.addClass("disabled"), s === r && k.slice(0, a).addClass("disabled"), s === o && k.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== C.noop) {
          var T = this;
          C.each(k, function (t, e) {
            var n = new Date(s, t, 1),
              i = T.o.beforeShowMonth(n);
            i === S ? i = {} : "boolean" == typeof i ? i = {
              enabled: i
            } : "string" == typeof i && (i = {
              classes: i
            }), !1 !== i.enabled || C(e).hasClass("disabled") || C(e).addClass("disabled"), i.classes && C(e).addClass(i.classes), i.tooltip && C(e).prop("title", i.tooltip)
          })
        }
        this._fill_yearsView(".datepicker-years", "year", 10, s, r, o, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, s, r, o, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, s, r, o, this.o.beforeShowCentury)
      }
    },
    updateNavArrows: function () {
      if (this._allow_update) {
        var t, e, n = new Date(this.viewDate),
          i = n.getUTCFullYear(),
          s = n.getUTCMonth(),
          r = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
          a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
          o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          u = 1;
        switch (this.viewMode) {
          case 4:
            u *= 10;
          case 3:
            u *= 10;
          case 2:
            u *= 10;
          case 1:
            t = Math.floor(i / u) * u < r, e = Math.floor(i / u) * u + u > o;
            break;
          case 0:
            t = i <= r && s < a, e = o <= i && l < s
        }
        this.picker.find(".prev").toggleClass("disabled", t), this.picker.find(".next").toggleClass("disabled", e)
      }
    },
    click: function (t) {
      var e, n, i;
      t.preventDefault(), t.stopPropagation(), (e = C(t.target)).hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0), this._setDate(x(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), 1 === this.viewMode ? (i = e.parent().find("span").index(e), n = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(i)) : (i = 0, n = Number(e.text()), this.viewDate.setUTCFullYear(n)), this._trigger(A.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(M(n, i, 1)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from
    },
    dayCellClick: function (t) {
      var e = C(t.currentTarget).data("date"),
        n = new Date(e);
      this.o.updateViewDate && (n.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), n.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(n)
    },
    navArrowsClick: function (t) {
      var e = C(t.currentTarget).hasClass("prev") ? -1 : 1;
      0 !== this.viewMode && (e *= 12 * A.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, e), this._trigger(A.viewModes[this.viewMode].e, this.viewDate), this.fill()
    },
    _toggle_multidate: function (t) {
      var e = this.dates.contains(t);
      if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || 1 < this.o.multidate || this.o.toggleActive) && this.dates.remove(e) : (!1 === this.o.multidate && this.dates.clear(), this.dates.push(t)), "number" == typeof this.o.multidate)
        for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
    },
    _setDate: function (t, e) {
      e && "date" !== e || this._toggle_multidate(t && new Date(t)), (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || e && "date" !== e || this.hide()
    },
    moveDay: function (t, e) {
      var n = new Date(t);
      return n.setUTCDate(t.getUTCDate() + e), n
    },
    moveWeek: function (t, e) {
      return this.moveDay(t, 7 * e)
    },
    moveMonth: function (t, e) {
      if (!(n = t) || isNaN(n.getTime())) return this.o.defaultViewDate;
      var n;
      if (!e) return t;
      var i, s, r = new Date(t.valueOf()),
        a = r.getUTCDate(),
        o = r.getUTCMonth(),
        l = Math.abs(e);
      if (e = 0 < e ? 1 : -1, 1 === l) s = -1 === e ? function () {
        return r.getUTCMonth() === o
      } : function () {
        return r.getUTCMonth() !== i
      }, i = o + e, r.setUTCMonth(i), i = (i + 12) % 12;
      else {
        for (var u = 0; u < l; u++) r = this.moveMonth(r, e);
        i = r.getUTCMonth(), r.setUTCDate(a), s = function () {
          return i !== r.getUTCMonth()
        }
      }
      for (; s();) r.setUTCDate(--a), r.setUTCMonth(i);
      return r
    },
    moveYear: function (t, e) {
      return this.moveMonth(t, 12 * e)
    },
    moveAvailableDate: function (t, e, n) {
      do {
        if (t = this[n](t, e), !this.dateWithinRange(t)) return !1;
        n = "moveDay"
      } while (this.dateIsDisabled(t));
      return t
    },
    weekOfDateIsDisabled: function (t) {
      return -1 !== C.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)
    },
    dateIsDisabled: function (e) {
      return this.weekOfDateIsDisabled(e) || 0 < C.grep(this.o.datesDisabled, function (t) {
        return r(e, t)
      }).length
    },
    dateWithinRange: function (t) {
      return t >= this.o.startDate && t <= this.o.endDate
    },
    keydown: function (t) {
      if (this.picker.is(":visible")) {
        var e, n, i = !1,
          s = this.focusDate || this.viewDate;
        switch (t.keyCode) {
          case 27:
            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
            break;
          case 37:
          case 38:
          case 39:
          case 40:
            if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
            e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (n = this.moveAvailableDate(s, e, "moveYear")) && this._trigger("changeYear", this.viewDate) : t.shiftKey ? (n = this.moveAvailableDate(s, e, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === t.keyCode || 39 === t.keyCode ? n = this.moveAvailableDate(s, e, "moveDay") : this.weekOfDateIsDisabled(s) || (n = this.moveAvailableDate(s, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(s, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(s, e, "moveYear")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), t.preventDefault());
            break;
          case 13:
            if (!this.o.forceParse) break;
            s = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(s), i = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
            break;
          case 9:
            this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
        }
        i && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"))
      } else 40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation())
    },
    setViewMode: function (t) {
      this.viewMode = t, this.picker.children("div").hide().filter(".datepicker-" + A.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate))
    }
  };
  var u = function (t, e) {
    C.data(t, "datepicker", this), this.element = C(t), this.inputs = C.map(e.inputs, function (t) {
      return t.jquery ? t[0] : t
    }), delete e.inputs, this.keepEmptyValues = e.keepEmptyValues, delete e.keepEmptyValues, s.call(C(this.inputs), e).on("changeDate", C.proxy(this.dateUpdated, this)), this.pickers = C.map(this.inputs, function (t) {
      return C.data(t, "datepicker")
    }), this.updateDates()
  };
  u.prototype = {
    updateDates: function () {
      this.dates = C.map(this.pickers, function (t) {
        return t.getUTCDate()
      }), this.updateRanges()
    },
    updateRanges: function () {
      var n = C.map(this.dates, function (t) {
        return t.valueOf()
      });
      C.each(this.pickers, function (t, e) {
        e.setRange(n)
      })
    },
    clearDates: function () {
      C.each(this.pickers, function (t, e) {
        e.clearDates()
      })
    },
    dateUpdated: function (t) {
      if (!this.updating) {
        this.updating = !0;
        var n = C.data(t.target, "datepicker");
        if (n !== S) {
          var i = n.getUTCDate(),
            s = this.keepEmptyValues,
            e = C.inArray(t.target, this.inputs),
            r = e - 1,
            a = e + 1,
            o = this.inputs.length;
          if (-1 !== e) {
            if (C.each(this.pickers, function (t, e) {
                e.getUTCDate() || e !== n && s || e.setUTCDate(i)
              }), i < this.dates[r])
              for (; 0 <= r && i < this.dates[r];) this.pickers[r--].setUTCDate(i);
            else if (i > this.dates[a])
              for (; a < o && i > this.dates[a];) this.pickers[a++].setUTCDate(i);
            this.updateDates(), delete this.updating
          }
        }
      }
    },
    destroy: function () {
      C.map(this.pickers, function (t) {
        t.destroy()
      }), C(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker
    },
    remove: t("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
  };
  var i = C.fn.datepicker,
    s = function (a) {
      var o, l = Array.apply(null, arguments);
      if (l.shift(), this.each(function () {
          var t = C(this),
            e = t.data("datepicker"),
            n = "object" == typeof a && a;
          if (!e) {
            var i = function (t, e) {
                var n = C(t).data(),
                  i = {},
                  s = new RegExp("^" + e.toLowerCase() + "([A-Z])");

                function r(t, e) {
                  return e.toLowerCase()
                }
                for (var a in e = new RegExp("^" + e.toLowerCase()), n) e.test(a) && (i[a.replace(s, r)] = n[a]);
                return i
              }(this, "date"),
              s = function (t) {
                var n = {};
                if ($[t] || (t = t.split("-")[0], $[t])) {
                  var i = $[t];
                  return C.each(d, function (t, e) {
                    e in i && (n[e] = i[e])
                  }), n
                }
              }(C.extend({}, c, i, n).language),
              r = C.extend({}, c, s, i, n);
            e = t.hasClass("input-daterange") || r.inputs ? (C.extend(r, {
              inputs: r.inputs || t.find("input").toArray()
            }), new u(this, r)) : new _(this, r), t.data("datepicker", e)
          }
          "string" == typeof a && "function" == typeof e[a] && (o = e[a].apply(e, l))
        }), o === S || o instanceof _ || o instanceof u) return this;
      if (1 < this.length) throw new Error("Using only allowed for the collection of a single element (" + a + " function)");
      return o
    };
  C.fn.datepicker = s;
  var c = C.fn.datepicker.defaults = {
      assumeNearbyYear: !1,
      autoclose: !1,
      beforeShowDay: C.noop,
      beforeShowMonth: C.noop,
      beforeShowYear: C.noop,
      beforeShowDecade: C.noop,
      beforeShowCentury: C.noop,
      calendarWeeks: !1,
      clearBtn: !1,
      toggleActive: !1,
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      datesDisabled: [],
      endDate: 1 / 0,
      forceParse: !0,
      format: "mm/dd/yyyy",
      keepEmptyValues: !1,
      keyboardNavigation: !0,
      language: "en",
      minViewMode: 0,
      maxViewMode: 4,
      multidate: !1,
      multidateSeparator: ",",
      orientation: "auto",
      rtl: !1,
      startDate: -1 / 0,
      startView: 0,
      todayBtn: !1,
      todayHighlight: !1,
      updateViewDate: !0,
      weekStart: 0,
      disableTouchKeyboard: !1,
      enableOnReadonly: !0,
      showOnFocus: !0,
      zIndexOffset: 10,
      container: "body",
      immediateUpdates: !1,
      title: "",
      templates: {
        leftArrow: "&#x00AB;",
        rightArrow: "&#x00BB;"
      },
      showWeekDays: !0
    },
    d = C.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  C.fn.datepicker.Constructor = _;
  var $ = C.fn.datepicker.dates = {
      en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear",
        titleFormat: "MM yyyy"
      }
    },
    A = {
      viewModes: [{
        names: ["days", "month"],
        clsName: "days",
        e: "changeMonth"
      }, {
        names: ["months", "year"],
        clsName: "months",
        e: "changeYear",
        navStep: 1
      }, {
        names: ["years", "decade"],
        clsName: "years",
        e: "changeDecade",
        navStep: 10
      }, {
        names: ["decades", "century"],
        clsName: "decades",
        e: "changeCentury",
        navStep: 100
      }, {
        names: ["centuries", "millennium"],
        clsName: "centuries",
        e: "changeMillennium",
        navStep: 1e3
      }],
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
      parseFormat: function (t) {
        if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
        var e = t.replace(this.validParts, "\0").split("\0"),
          n = t.match(this.validParts);
        if (!e || !e.length || !n || 0 === n.length) throw new Error("Invalid date format.");
        return {
          separators: e,
          parts: n
        }
      },
      parseDate: function (t, e, n, s) {
        if (!t) return S;
        if (t instanceof Date) return t;
        if ("string" == typeof e && (e = A.parseFormat(e)), e.toValue) return e.toValue(t, e, n);
        var i, r, a, o, l, u = {
            d: "moveDay",
            m: "moveMonth",
            w: "moveWeek",
            y: "moveYear"
          },
          c = {
            yesterday: "-1d",
            today: "+0d",
            tomorrow: "+1d"
          };
        if (t in c && (t = c[t]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(t)) {
          for (i = t.match(/([\-+]\d+)([dmwy])/gi), t = new Date, o = 0; o < i.length; o++) r = i[o].match(/([\-+]\d+)([dmwy])/i), a = Number(r[1]), l = u[r[2].toLowerCase()], t = _.prototype[l](t, a);
          return _.prototype._zero_utc_time(t)
        }
        i = t && t.match(this.nonpunctuation) || [];
        var d, h, f = {},
          p = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          m = {
            yyyy: function (t, e) {
              return t.setUTCFullYear(s ? (!0 === (i = s) && (i = 10), (n = e) < 100 && (n += 2e3) > (new Date).getFullYear() + i && (n -= 100), n) : e);
              var n, i
            },
            m: function (t, e) {
              if (isNaN(t)) return t;
              for (e -= 1; e < 0;) e += 12;
              for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
              return t
            },
            d: function (t, e) {
              return t.setUTCDate(e)
            }
          };
        m.yy = m.yyyy, m.M = m.MM = m.mm = m.m, m.dd = m.d, t = x();
        var g = e.parts.slice();

        function v() {
          var t = this.slice(0, i[o].length),
            e = i[o].slice(0, t.length);
          return t.toLowerCase() === e.toLowerCase()
        }
        if (i.length !== g.length && (g = C(g).filter(function (t, e) {
            return -1 !== C.inArray(e, p)
          }).toArray()), i.length === g.length) {
          var y, b, w;
          for (o = 0, y = g.length; o < y; o++) {
            if (d = parseInt(i[o], 10), r = g[o], isNaN(d)) switch (r) {
              case "MM":
                h = C($[n].months).filter(v), d = C.inArray(h[0], $[n].months) + 1;
                break;
              case "M":
                h = C($[n].monthsShort).filter(v), d = C.inArray(h[0], $[n].monthsShort) + 1
            }
            f[r] = d
          }
          for (o = 0; o < p.length; o++)(w = p[o]) in f && !isNaN(f[w]) && (b = new Date(t), m[w](b, f[w]), isNaN(b) || (t = b))
        }
        return t
      },
      formatDate: function (t, e, n) {
        if (!t) return "";
        if ("string" == typeof e && (e = A.parseFormat(e)), e.toDisplay) return e.toDisplay(t, e, n);
        var i = {
          d: t.getUTCDate(),
          D: $[n].daysShort[t.getUTCDay()],
          DD: $[n].days[t.getUTCDay()],
          m: t.getUTCMonth() + 1,
          M: $[n].monthsShort[t.getUTCMonth()],
          MM: $[n].months[t.getUTCMonth()],
          yy: t.getUTCFullYear().toString().substring(2),
          yyyy: t.getUTCFullYear()
        };
        i.dd = (i.d < 10 ? "0" : "") + i.d, i.mm = (i.m < 10 ? "0" : "") + i.m, t = [];
        for (var s = C.extend([], e.separators), r = 0, a = e.parts.length; r <= a; r++) s.length && t.push(s.shift()), t.push(i[e.parts[r]]);
        return t.join("")
      },
      headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + c.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + c.templates.rightArrow + "</th></tr></thead>",
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
  A.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + A.headTemplate + "<tbody></tbody>" + A.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + A.headTemplate + A.contTemplate + A.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + A.headTemplate + A.contTemplate + A.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + A.headTemplate + A.contTemplate + A.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + A.headTemplate + A.contTemplate + A.footTemplate + "</table></div></div>", C.fn.datepicker.DPGlobal = A, C.fn.datepicker.noConflict = function () {
    return C.fn.datepicker = i, this
  }, C.fn.datepicker.version = "1.8.0", C.fn.datepicker.deprecated = function (t) {
    var e = window.console;
    e && e.warn && e.warn("DEPRECATED: " + t)
  }, C(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
    var e = C(this);
    e.data("datepicker") || (t.preventDefault(), s.call(e, "show"))
  }), C(function () {
    s.call(C('[data-provide="datepicker-inline"]'))
  })
}), jQuery.fn.datepicker.dates.ru = {
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: "Сегодня",
    clear: "Очистить",
    format: "dd.mm.yyyy",
    weekStart: 1,
    monthsTitle: "Месяцы"
  },
  function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
  }(this, function () {
    "use strict";
    var t, s;

    function y() {
      return t.apply(null, arguments)
    }

    function o(t) {
      return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function l(t) {
      return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function u(t) {
      return void 0 === t
    }

    function c(t) {
      return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
    }

    function d(t) {
      return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function h(t, e) {
      var n, i = [];
      for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
      return i
    }

    function b(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }

    function f(t, e) {
      for (var n in e) b(e, n) && (t[n] = e[n]);
      return b(e, "toString") && (t.toString = e.toString), b(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function p(t, e, n, i) {
      return ke(t, e, n, i, !0).utc()
    }

    function w(t) {
      return null == t._pf && (t._pf = {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
      }), t._pf
    }

    function m(t) {
      if (null == t._isValid) {
        var e = w(t),
          n = s.call(e.parsedDateParts, function (t) {
            return null != t
          }),
          i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
        if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
        t._isValid = i
      }
      return t._isValid
    }

    function g(t) {
      var e = p(NaN);
      return null != t ? f(w(e), t) : w(e).userInvalidated = !0, e
    }
    s = Array.prototype.some ? Array.prototype.some : function (t) {
      for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
        if (i in e && t.call(this, e[i], i, e)) return !0;
      return !1
    };
    var r = y.momentProperties = [];

    function v(t, e) {
      var n, i, s;
      if (u(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), u(e._i) || (t._i = e._i), u(e._f) || (t._f = e._f), u(e._l) || (t._l = e._l), u(e._strict) || (t._strict = e._strict), u(e._tzm) || (t._tzm = e._tzm), u(e._isUTC) || (t._isUTC = e._isUTC), u(e._offset) || (t._offset = e._offset), u(e._pf) || (t._pf = w(e)), u(e._locale) || (t._locale = e._locale), 0 < r.length)
        for (n = 0; n < r.length; n++) u(s = e[i = r[n]]) || (t[i] = s);
      return t
    }
    var e = !1;

    function x(t) {
      v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === e && (e = !0, y.updateOffset(this), e = !1)
    }

    function _(t) {
      return t instanceof x || null != t && null != t._isAMomentObject
    }

    function D(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function k(t) {
      var e = +t,
        n = 0;
      return 0 !== e && isFinite(e) && (n = D(e)), n
    }

    function a(t, e, n) {
      var i, s = Math.min(t.length, e.length),
        r = Math.abs(t.length - e.length),
        a = 0;
      for (i = 0; i < s; i++)(n && t[i] !== e[i] || !n && k(t[i]) !== k(e[i])) && a++;
      return a + r
    }

    function T(t) {
      !1 === y.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }

    function n(s, r) {
      var a = !0;
      return f(function () {
        if (null != y.deprecationHandler && y.deprecationHandler(null, s), a) {
          for (var t, e = [], n = 0; n < arguments.length; n++) {
            if (t = "", "object" == typeof arguments[n]) {
              for (var i in t += "\n[" + n + "] ", arguments[0]) t += i + ": " + arguments[0][i] + ", ";
              t = t.slice(0, -2)
            } else t = arguments[n];
            e.push(t)
          }
          T(s + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack), a = !1
        }
        return r.apply(this, arguments)
      }, r)
    }
    var i, C = {};

    function S(t, e) {
      null != y.deprecationHandler && y.deprecationHandler(t, e), C[t] || (T(e), C[t] = !0)
    }

    function M(t) {
      return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function $(t, e) {
      var n, i = f({}, t);
      for (n in e) b(e, n) && (l(t[n]) && l(e[n]) ? (i[n] = {}, f(i[n], t[n]), f(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
      for (n in t) b(t, n) && !b(e, n) && l(t[n]) && (i[n] = f({}, i[n]));
      return i
    }

    function A(t) {
      null != t && this.set(t)
    }
    y.suppressDeprecationWarnings = !1, y.deprecationHandler = null, i = Object.keys ? Object.keys : function (t) {
      var e, n = [];
      for (e in t) b(t, e) && n.push(e);
      return n
    };
    var E = {};

    function O(t, e) {
      var n = t.toLowerCase();
      E[n] = E[n + "s"] = E[e] = t
    }

    function N(t) {
      return "string" == typeof t ? E[t] || E[t.toLowerCase()] : void 0
    }

    function j(t) {
      var e, n, i = {};
      for (n in t) b(t, n) && (e = N(n)) && (i[e] = t[n]);
      return i
    }
    var Y = {};

    function I(t, e) {
      Y[t] = e
    }

    function U(t, e, n) {
      var i = "" + Math.abs(t),
        s = e - i.length;
      return (0 <= t ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + i
    }
    var P = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      F = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      L = {},
      R = {};

    function W(t, e, n, i) {
      var s = i;
      "string" == typeof i && (s = function () {
        return this[i]()
      }), t && (R[t] = s), e && (R[e[0]] = function () {
        return U(s.apply(this, arguments), e[1], e[2])
      }), n && (R[n] = function () {
        return this.localeData().ordinal(s.apply(this, arguments), t)
      })
    }

    function H(t, e) {
      return t.isValid() ? (e = V(e, t.localeData()), L[e] = L[e] || function (i) {
        var t, s, e, r = i.match(P);
        for (t = 0, s = r.length; t < s; t++) R[r[t]] ? r[t] = R[r[t]] : r[t] = (e = r[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
        return function (t) {
          var e, n = "";
          for (e = 0; e < s; e++) n += M(r[e]) ? r[e].call(t, i) : r[e];
          return n
        }
      }(e), L[e](t)) : t.localeData().invalidDate()
    }

    function V(t, e) {
      var n = 5;

      function i(t) {
        return e.longDateFormat(t) || t
      }
      for (F.lastIndex = 0; 0 <= n && F.test(t);) t = t.replace(F, i), F.lastIndex = 0, n -= 1;
      return t
    }
    var q = /\d/,
      z = /\d\d/,
      B = /\d{3}/,
      G = /\d{4}/,
      Q = /[+-]?\d{6}/,
      Z = /\d\d?/,
      X = /\d\d\d\d?/,
      J = /\d\d\d\d\d\d?/,
      K = /\d{1,3}/,
      tt = /\d{1,4}/,
      et = /[+-]?\d{1,6}/,
      nt = /\d+/,
      it = /[+-]?\d+/,
      st = /Z|[+-]\d\d:?\d\d/gi,
      rt = /Z|[+-]\d\d(?::?\d\d)?/gi,
      at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      ot = {};

    function lt(t, n, i) {
      ot[t] = M(n) ? n : function (t, e) {
        return t && i ? i : n
      }
    }

    function ut(t) {
      return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var ct = {};

    function dt(t, n) {
      var e, i = n;
      for ("string" == typeof t && (t = [t]), c(n) && (i = function (t, e) {
          e[n] = k(t)
        }), e = 0; e < t.length; e++) ct[t[e]] = i
    }

    function ht(t, s) {
      dt(t, function (t, e, n, i) {
        n._w = n._w || {}, s(t, n._w, n, i)
      })
    }
    var ft = 0,
      pt = 1,
      mt = 2,
      gt = 3,
      vt = 4,
      yt = 5,
      bt = 6,
      wt = 7,
      xt = 8;

    function _t(t) {
      return Dt(t) ? 366 : 365
    }

    function Dt(t) {
      return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }
    W("Y", 0, 0, function () {
      var t = this.year();
      return t <= 9999 ? "" + t : "+" + t
    }), W(0, ["YY", 2], 0, function () {
      return this.year() % 100
    }), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), I("year", 1), lt("Y", it), lt("YY", Z, z), lt("YYYY", tt, G), lt("YYYYY", et, Q), lt("YYYYYY", et, Q), dt(["YYYYY", "YYYYYY"], ft), dt("YYYY", function (t, e) {
      e[ft] = 2 === t.length ? y.parseTwoDigitYear(t) : k(t)
    }), dt("YY", function (t, e) {
      e[ft] = y.parseTwoDigitYear(t)
    }), dt("Y", function (t, e) {
      e[ft] = parseInt(t, 10)
    }), y.parseTwoDigitYear = function (t) {
      return k(t) + (68 < k(t) ? 1900 : 2e3)
    };
    var kt, Tt = Ct("FullYear", !0);

    function Ct(e, n) {
      return function (t) {
        return null != t ? (Mt(this, e, t), y.updateOffset(this, n), this) : St(this, e)
      }
    }

    function St(t, e) {
      return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function Mt(t, e, n) {
      t.isValid() && !isNaN(n) && ("FullYear" === e && Dt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), $t(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
    }

    function $t(t, e) {
      if (isNaN(t) || isNaN(e)) return NaN;
      var n = (e % 12 + 12) % 12;
      return t += (e - n) / 12, 1 === n ? Dt(t) ? 29 : 28 : 31 - n % 7 % 2
    }
    kt = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
      var e;
      for (e = 0; e < this.length; ++e)
        if (this[e] === t) return e;
      return -1
    }, W("M", ["MM", 2], "Mo", function () {
      return this.month() + 1
    }), W("MMM", 0, 0, function (t) {
      return this.localeData().monthsShort(this, t)
    }), W("MMMM", 0, 0, function (t) {
      return this.localeData().months(this, t)
    }), O("month", "M"), I("month", 8), lt("M", Z), lt("MM", Z, z), lt("MMM", function (t, e) {
      return e.monthsShortRegex(t)
    }), lt("MMMM", function (t, e) {
      return e.monthsRegex(t)
    }), dt(["M", "MM"], function (t, e) {
      e[pt] = k(t) - 1
    }), dt(["MMM", "MMMM"], function (t, e, n, i) {
      var s = n._locale.monthsParse(t, i, n._strict);
      null != s ? e[pt] = s : w(n).invalidMonth = t
    });
    var At = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      Et = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      Ot = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Nt(t, e) {
      var n;
      if (!t.isValid()) return t;
      if ("string" == typeof e)
        if (/^\d+$/.test(e)) e = k(e);
        else if (!c(e = t.localeData().monthsParse(e))) return t;
      return n = Math.min(t.date(), $t(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
    }

    function jt(t) {
      return null != t ? (Nt(this, t), y.updateOffset(this, !0), this) : St(this, "Month")
    }
    var Yt = at,
      It = at;

    function Ut() {
      function t(t, e) {
        return e.length - t.length
      }
      var e, n, i = [],
        s = [],
        r = [];
      for (e = 0; e < 12; e++) n = p([2e3, e]), i.push(this.monthsShort(n, "")), s.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
      for (i.sort(t), s.sort(t), r.sort(t), e = 0; e < 12; e++) i[e] = ut(i[e]), s[e] = ut(s[e]);
      for (e = 0; e < 24; e++) r[e] = ut(r[e]);
      this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function Pt(t) {
      var e = new Date(Date.UTC.apply(null, arguments));
      return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function Ft(t, e, n) {
      var i = 7 + e - n;
      return -(7 + Pt(t, 0, i).getUTCDay() - e) % 7 + i - 1
    }

    function Lt(t, e, n, i, s) {
      var r, a, o = 1 + 7 * (e - 1) + (7 + n - i) % 7 + Ft(t, i, s);
      return a = o <= 0 ? _t(r = t - 1) + o : o > _t(t) ? (r = t + 1, o - _t(t)) : (r = t, o), {
        year: r,
        dayOfYear: a
      }
    }

    function Rt(t, e, n) {
      var i, s, r = Ft(t.year(), e, n),
        a = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
      return a < 1 ? i = a + Wt(s = t.year() - 1, e, n) : a > Wt(t.year(), e, n) ? (i = a - Wt(t.year(), e, n), s = t.year() + 1) : (s = t.year(), i = a), {
        week: i,
        year: s
      }
    }

    function Wt(t, e, n) {
      var i = Ft(t, e, n),
        s = Ft(t + 1, e, n);
      return (_t(t) - i + s) / 7
    }
    W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), I("week", 5), I("isoWeek", 5), lt("w", Z), lt("ww", Z, z), lt("W", Z), lt("WW", Z, z), ht(["w", "ww", "W", "WW"], function (t, e, n, i) {
      e[i.substr(0, 1)] = k(t)
    }), W("d", 0, "do", "day"), W("dd", 0, 0, function (t) {
      return this.localeData().weekdaysMin(this, t)
    }), W("ddd", 0, 0, function (t) {
      return this.localeData().weekdaysShort(this, t)
    }), W("dddd", 0, 0, function (t) {
      return this.localeData().weekdays(this, t)
    }), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), I("day", 11), I("weekday", 11), I("isoWeekday", 11), lt("d", Z), lt("e", Z), lt("E", Z), lt("dd", function (t, e) {
      return e.weekdaysMinRegex(t)
    }), lt("ddd", function (t, e) {
      return e.weekdaysShortRegex(t)
    }), lt("dddd", function (t, e) {
      return e.weekdaysRegex(t)
    }), ht(["dd", "ddd", "dddd"], function (t, e, n, i) {
      var s = n._locale.weekdaysParse(t, i, n._strict);
      null != s ? e.d = s : w(n).invalidWeekday = t
    }), ht(["d", "e", "E"], function (t, e, n, i) {
      e[i] = k(t)
    });
    var Ht = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      Vt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      qt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      zt = at,
      Bt = at,
      Gt = at;

    function Qt() {
      function t(t, e) {
        return e.length - t.length
      }
      var e, n, i, s, r, a = [],
        o = [],
        l = [],
        u = [];
      for (e = 0; e < 7; e++) n = p([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(i), o.push(s), l.push(r), u.push(i), u.push(s), u.push(r);
      for (a.sort(t), o.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) o[e] = ut(o[e]), l[e] = ut(l[e]), u[e] = ut(u[e]);
      this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }

    function Zt() {
      return this.hours() % 12 || 12
    }

    function Xt(t, e) {
      W(t, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), e)
      })
    }

    function Jt(t, e) {
      return e._meridiemParse
    }
    W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, Zt), W("k", ["kk", 2], 0, function () {
      return this.hours() || 24
    }), W("hmm", 0, 0, function () {
      return "" + Zt.apply(this) + U(this.minutes(), 2)
    }), W("hmmss", 0, 0, function () {
      return "" + Zt.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2)
    }), W("Hmm", 0, 0, function () {
      return "" + this.hours() + U(this.minutes(), 2)
    }), W("Hmmss", 0, 0, function () {
      return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2)
    }), Xt("a", !0), Xt("A", !1), O("hour", "h"), I("hour", 13), lt("a", Jt), lt("A", Jt), lt("H", Z), lt("h", Z), lt("k", Z), lt("HH", Z, z), lt("hh", Z, z), lt("kk", Z, z), lt("hmm", X), lt("hmmss", J), lt("Hmm", X), lt("Hmmss", J), dt(["H", "HH"], gt), dt(["k", "kk"], function (t, e, n) {
      var i = k(t);
      e[gt] = 24 === i ? 0 : i
    }), dt(["a", "A"], function (t, e, n) {
      n._isPm = n._locale.isPM(t), n._meridiem = t
    }), dt(["h", "hh"], function (t, e, n) {
      e[gt] = k(t), w(n).bigHour = !0
    }), dt("hmm", function (t, e, n) {
      var i = t.length - 2;
      e[gt] = k(t.substr(0, i)), e[vt] = k(t.substr(i)), w(n).bigHour = !0
    }), dt("hmmss", function (t, e, n) {
      var i = t.length - 4,
        s = t.length - 2;
      e[gt] = k(t.substr(0, i)), e[vt] = k(t.substr(i, 2)), e[yt] = k(t.substr(s)), w(n).bigHour = !0
    }), dt("Hmm", function (t, e, n) {
      var i = t.length - 2;
      e[gt] = k(t.substr(0, i)), e[vt] = k(t.substr(i))
    }), dt("Hmmss", function (t, e, n) {
      var i = t.length - 4,
        s = t.length - 2;
      e[gt] = k(t.substr(0, i)), e[vt] = k(t.substr(i, 2)), e[yt] = k(t.substr(s))
    });
    var Kt, te = Ct("Hours", !0),
      ee = {
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        longDateFormat: {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        months: Et,
        monthsShort: Ot,
        week: {
          dow: 0,
          doy: 6
        },
        weekdays: Ht,
        weekdaysMin: qt,
        weekdaysShort: Vt,
        meridiemParse: /[ap]\.?m?\.?/i
      },
      ne = {},
      ie = {};

    function se(t) {
      return t ? t.toLowerCase().replace("_", "-") : t
    }

    function re(t) {
      var e = null;
      if (!ne[t] && "undefined" != typeof module && module && module.exports) try {
        e = Kt._abbr, require("./locale/" + t), ae(e)
      } catch (t) {}
      return ne[t]
    }

    function ae(t, e) {
      var n;
      return t && ((n = u(e) ? le(t) : oe(t, e)) ? Kt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Kt._abbr
    }

    function oe(t, e) {
      if (null === e) return delete ne[t], null;
      var n, i = ee;
      if (e.abbr = t, null != ne[t]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = ne[t]._config;
      else if (null != e.parentLocale)
        if (null != ne[e.parentLocale]) i = ne[e.parentLocale]._config;
        else {
          if (null == (n = re(e.parentLocale))) return ie[e.parentLocale] || (ie[e.parentLocale] = []), ie[e.parentLocale].push({
            name: t,
            config: e
          }), null;
          i = n._config
        } return ne[t] = new A($(i, e)), ie[t] && ie[t].forEach(function (t) {
        oe(t.name, t.config)
      }), ae(t), ne[t]
    }

    function le(t) {
      var e;
      if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Kt;
      if (!o(t)) {
        if (e = re(t)) return e;
        t = [t]
      }
      return function (t) {
        for (var e, n, i, s, r = 0; r < t.length;) {
          for (e = (s = se(t[r]).split("-")).length, n = (n = se(t[r + 1])) ? n.split("-") : null; 0 < e;) {
            if (i = re(s.slice(0, e).join("-"))) return i;
            if (n && n.length >= e && a(s, n, !0) >= e - 1) break;
            e--
          }
          r++
        }
        return Kt
      }(t)
    }

    function ue(t) {
      var e, n = t._a;
      return n && -2 === w(t).overflow && (e = n[pt] < 0 || 11 < n[pt] ? pt : n[mt] < 1 || n[mt] > $t(n[ft], n[pt]) ? mt : n[gt] < 0 || 24 < n[gt] || 24 === n[gt] && (0 !== n[vt] || 0 !== n[yt] || 0 !== n[bt]) ? gt : n[vt] < 0 || 59 < n[vt] ? vt : n[yt] < 0 || 59 < n[yt] ? yt : n[bt] < 0 || 999 < n[bt] ? bt : -1, w(t)._overflowDayOfYear && (e < ft || mt < e) && (e = mt), w(t)._overflowWeeks && -1 === e && (e = wt), w(t)._overflowWeekday && -1 === e && (e = xt), w(t).overflow = e), t
    }

    function ce(t, e, n) {
      return null != t ? t : null != e ? e : n
    }

    function de(t) {
      var e, n, i, s, r, a = [];
      if (!t._d) {
        var o, l;
        for (o = t, l = new Date(y.now()), i = o._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], t._w && null == t._a[mt] && null == t._a[pt] && function (t) {
            var e, n, i, s, r, a, o, l;
            if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, a = 4, n = ce(e.GG, t._a[ft], Rt(Te(), 1, 4).year), i = ce(e.W, 1), ((s = ce(e.E, 1)) < 1 || 7 < s) && (l = !0);
            else {
              r = t._locale._week.dow, a = t._locale._week.doy;
              var u = Rt(Te(), r, a);
              n = ce(e.gg, t._a[ft], u.year), i = ce(e.w, u.week), null != e.d ? ((s = e.d) < 0 || 6 < s) && (l = !0) : null != e.e ? (s = e.e + r, (e.e < 0 || 6 < e.e) && (l = !0)) : s = r
            }
            i < 1 || i > Wt(n, r, a) ? w(t)._overflowWeeks = !0 : null != l ? w(t)._overflowWeekday = !0 : (o = Lt(n, i, s, r, a), t._a[ft] = o.year, t._dayOfYear = o.dayOfYear)
          }(t), null != t._dayOfYear && (r = ce(t._a[ft], i[ft]), (t._dayOfYear > _t(r) || 0 === t._dayOfYear) && (w(t)._overflowDayOfYear = !0), n = Pt(r, 0, t._dayOfYear), t._a[pt] = n.getUTCMonth(), t._a[mt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = i[e];
        for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
        24 === t._a[gt] && 0 === t._a[vt] && 0 === t._a[yt] && 0 === t._a[bt] && (t._nextDay = !0, t._a[gt] = 0), t._d = (t._useUTC ? Pt : function (t, e, n, i, s, r, a) {
          var o = new Date(t, e, n, i, s, r, a);
          return t < 100 && 0 <= t && isFinite(o.getFullYear()) && o.setFullYear(t), o
        }).apply(null, a), s = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[gt] = 24), t._w && void 0 !== t._w.d && t._w.d !== s && (w(t).weekdayMismatch = !0)
      }
    }
    var he = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      fe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      pe = /Z|[+-]\d\d(?::?\d\d)?/,
      me = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/]
      ],
      ge = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ],
      ve = /^\/?Date\((\-?\d+)/i;

    function ye(t) {
      var e, n, i, s, r, a, o = t._i,
        l = he.exec(o) || fe.exec(o);
      if (l) {
        for (w(t).iso = !0, e = 0, n = me.length; e < n; e++)
          if (me[e][1].exec(l[1])) {
            s = me[e][0], i = !1 !== me[e][2];
            break
          } if (null == s) return void(t._isValid = !1);
        if (l[3]) {
          for (e = 0, n = ge.length; e < n; e++)
            if (ge[e][1].exec(l[3])) {
              r = (l[2] || " ") + ge[e][0];
              break
            } if (null == r) return void(t._isValid = !1)
        }
        if (!i && null != r) return void(t._isValid = !1);
        if (l[4]) {
          if (!pe.exec(l[4])) return void(t._isValid = !1);
          a = "Z"
        }
        t._f = s + (r || "") + (a || ""), _e(t)
      } else t._isValid = !1
    }
    var be = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    var we = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480
    };

    function xe(t) {
      var e, n, i, s, r, a, o, l, u, c, d, h = be.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
      if (h) {
        var f = (s = h[4], r = h[3], a = h[2], o = h[5], l = h[6], u = h[7], d = [(c = parseInt(s, 10), c <= 49 ? 2e3 + c : c <= 999 ? 1900 + c : c), Ot.indexOf(r), parseInt(a, 10), parseInt(o, 10), parseInt(l, 10)], u && d.push(parseInt(u, 10)), d);
        if (n = f, i = t, (e = h[1]) && Vt.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay() && (w(i).weekdayMismatch = !0, !(i._isValid = !1))) return;
        t._a = f, t._tzm = function (t, e, n) {
          if (t) return we[t];
          if (e) return 0;
          var i = parseInt(n, 10),
            s = i % 100;
          return (i - s) / 100 * 60 + s
        }(h[8], h[9], h[10]), t._d = Pt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), w(t).rfc2822 = !0
      } else t._isValid = !1
    }

    function _e(t) {
      if (t._f !== y.ISO_8601)
        if (t._f !== y.RFC_2822) {
          t._a = [], w(t).empty = !0;
          var e, n, i, s, r, a, o, l, u = "" + t._i,
            c = u.length,
            d = 0;
          for (i = V(t._f, t._locale).match(P) || [], e = 0; e < i.length; e++) s = i[e], (n = (u.match((g = s, v = t, b(ot, g) ? ot[g](v._strict, v._locale) : new RegExp(ut(g.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, s) {
            return e || n || i || s
          }))))) || [])[0]) && (0 < (r = u.substr(0, u.indexOf(n))).length && w(t).unusedInput.push(r), u = u.slice(u.indexOf(n) + n.length), d += n.length), R[s] ? (n ? w(t).empty = !1 : w(t).unusedTokens.push(s), a = s, l = t, null != (o = n) && b(ct, a) && ct[a](o, l._a, l, a)) : t._strict && !n && w(t).unusedTokens.push(s);
          w(t).charsLeftOver = c - d, 0 < u.length && w(t).unusedInput.push(u), t._a[gt] <= 12 && !0 === w(t).bigHour && 0 < t._a[gt] && (w(t).bigHour = void 0), w(t).parsedDateParts = t._a.slice(0), w(t).meridiem = t._meridiem, t._a[gt] = (h = t._locale, f = t._a[gt], null == (p = t._meridiem) ? f : null != h.meridiemHour ? h.meridiemHour(f, p) : (null != h.isPM && ((m = h.isPM(p)) && f < 12 && (f += 12), m || 12 !== f || (f = 0)), f)), de(t), ue(t)
        } else xe(t);
      else ye(t);
      var h, f, p, m, g, v
    }

    function De(t) {
      var e, n, i, s, r = t._i,
        a = t._f;
      return t._locale = t._locale || le(t._l), null === r || void 0 === a && "" === r ? g({
        nullInput: !0
      }) : ("string" == typeof r && (t._i = r = t._locale.preparse(r)), _(r) ? new x(ue(r)) : (d(r) ? t._d = r : o(a) ? function (t) {
        var e, n, i, s, r;
        if (0 === t._f.length) return w(t).invalidFormat = !0, t._d = new Date(NaN);
        for (s = 0; s < t._f.length; s++) r = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], _e(e), m(e) && (r += w(e).charsLeftOver, r += 10 * w(e).unusedTokens.length, w(e).score = r, (null == i || r < i) && (i = r, n = e));
        f(t, n || e)
      }(t) : a ? _e(t) : u(n = (e = t)._i) ? e._d = new Date(y.now()) : d(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? (i = e, null === (s = ve.exec(i._i)) ? (ye(i), !1 === i._isValid && (delete i._isValid, xe(i), !1 === i._isValid && (delete i._isValid, y.createFromInputFallback(i)))) : i._d = new Date(+s[1])) : o(n) ? (e._a = h(n.slice(0), function (t) {
        return parseInt(t, 10)
      }), de(e)) : l(n) ? function (t) {
        if (!t._d) {
          var e = j(t._i);
          t._a = h([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
            return t && parseInt(t, 10)
          }), de(t)
        }
      }(e) : c(n) ? e._d = new Date(n) : y.createFromInputFallback(e), m(t) || (t._d = null), t))
    }

    function ke(t, e, n, i, s) {
      var r, a = {};
      return !0 !== n && !1 !== n || (i = n, n = void 0), (l(t) && function (t) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
        var e;
        for (e in t)
          if (t.hasOwnProperty(e)) return !1;
        return !0
      }(t) || o(t) && 0 === t.length) && (t = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = s, a._l = n, a._i = t, a._f = e, a._strict = i, (r = new x(ue(De(a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
    }

    function Te(t, e, n, i) {
      return ke(t, e, n, i, !1)
    }
    y.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
      t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), y.ISO_8601 = function () {}, y.RFC_2822 = function () {};
    var Ce = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var t = Te.apply(null, arguments);
        return this.isValid() && t.isValid() ? t < this ? this : t : g()
      }),
      Se = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var t = Te.apply(null, arguments);
        return this.isValid() && t.isValid() ? this < t ? this : t : g()
      });

    function Me(t, e) {
      var n, i;
      if (1 === e.length && o(e[0]) && (e = e[0]), !e.length) return Te();
      for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
      return n
    }
    var $e = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ae(t) {
      var e = j(t),
        n = e.year || 0,
        i = e.quarter || 0,
        s = e.month || 0,
        r = e.week || 0,
        a = e.day || 0,
        o = e.hour || 0,
        l = e.minute || 0,
        u = e.second || 0,
        c = e.millisecond || 0;
      this._isValid = function (t) {
        for (var e in t)
          if (-1 === kt.call($e, e) || null != t[e] && isNaN(t[e])) return !1;
        for (var n = !1, i = 0; i < $e.length; ++i)
          if (t[$e[i]]) {
            if (n) return !1;
            parseFloat(t[$e[i]]) !== k(t[$e[i]]) && (n = !0)
          } return !0
      }(e), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +s + 3 * i + 12 * n, this._data = {}, this._locale = le(), this._bubble()
    }

    function Ee(t) {
      return t instanceof Ae
    }

    function Oe(t) {
      return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function Ne(t, n) {
      W(t, 0, 0, function () {
        var t = this.utcOffset(),
          e = "+";
        return t < 0 && (t = -t, e = "-"), e + U(~~(t / 60), 2) + n + U(~~t % 60, 2)
      })
    }
    Ne("Z", ":"), Ne("ZZ", ""), lt("Z", rt), lt("ZZ", rt), dt(["Z", "ZZ"], function (t, e, n) {
      n._useUTC = !0, n._tzm = Ye(rt, t)
    });
    var je = /([\+\-]|\d\d)/gi;

    function Ye(t, e) {
      var n = (e || "").match(t);
      if (null === n) return null;
      var i = ((n[n.length - 1] || []) + "").match(je) || ["-", 0, 0],
        s = 60 * i[1] + k(i[2]);
      return 0 === s ? 0 : "+" === i[0] ? s : -s
    }

    function Ie(t, e) {
      var n, i;
      return e._isUTC ? (n = e.clone(), i = (_(t) || d(t) ? t.valueOf() : Te(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), y.updateOffset(n, !1), n) : Te(t).local()
    }

    function Ue(t) {
      return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function Pe() {
      return !!this.isValid() && this._isUTC && 0 === this._offset
    }
    y.updateOffset = function () {};
    var Fe = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Le = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function Re(t, e) {
      var n, i, s, r, a, o, l = t,
        u = null;
      return Ee(t) ? l = {
        ms: t._milliseconds,
        d: t._days,
        M: t._months
      } : c(t) ? (l = {}, e ? l[e] = t : l.milliseconds = t) : (u = Fe.exec(t)) ? (n = "-" === u[1] ? -1 : 1, l = {
        y: 0,
        d: k(u[mt]) * n,
        h: k(u[gt]) * n,
        m: k(u[vt]) * n,
        s: k(u[yt]) * n,
        ms: k(Oe(1e3 * u[bt])) * n
      }) : (u = Le.exec(t)) ? (n = "-" === u[1] ? -1 : (u[1], 1), l = {
        y: We(u[2], n),
        M: We(u[3], n),
        w: We(u[4], n),
        d: We(u[5], n),
        h: We(u[6], n),
        m: We(u[7], n),
        s: We(u[8], n)
      }) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (r = Te(l.from), a = Te(l.to), s = r.isValid() && a.isValid() ? (a = Ie(a, r), r.isBefore(a) ? o = He(r, a) : ((o = He(a, r)).milliseconds = -o.milliseconds, o.months = -o.months), o) : {
        milliseconds: 0,
        months: 0
      }, (l = {}).ms = s.milliseconds, l.M = s.months), i = new Ae(l), Ee(t) && b(t, "_locale") && (i._locale = t._locale), i
    }

    function We(t, e) {
      var n = t && parseFloat(t.replace(",", "."));
      return (isNaN(n) ? 0 : n) * e
    }

    function He(t, e) {
      var n = {
        milliseconds: 0,
        months: 0
      };
      return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function Ve(i, s) {
      return function (t, e) {
        var n;
        return null === e || isNaN(+e) || (S(s, "moment()." + s + "(period, number) is deprecated. Please use moment()." + s + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = t, t = e, e = n), qe(this, Re(t = "string" == typeof t ? +t : t, e), i), this
      }
    }

    function qe(t, e, n, i) {
      var s = e._milliseconds,
        r = Oe(e._days),
        a = Oe(e._months);
      t.isValid() && (i = null == i || i, a && Nt(t, St(t, "Month") + a * n), r && Mt(t, "Date", St(t, "Date") + r * n), s && t._d.setTime(t._d.valueOf() + s * n), i && y.updateOffset(t, r || a))
    }
    Re.fn = Ae.prototype, Re.invalid = function () {
      return Re(NaN)
    };
    var ze = Ve(1, "add"),
      Be = Ve(-1, "subtract");

    function Ge(t, e) {
      var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
        i = t.clone().add(n, "months");
      return -(n + (e - i < 0 ? (e - i) / (i - t.clone().add(n - 1, "months")) : (e - i) / (t.clone().add(n + 1, "months") - i))) || 0
    }

    function Qe(t) {
      var e;
      return void 0 === t ? this._locale._abbr : (null != (e = le(t)) && (this._locale = e), this)
    }
    y.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", y.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Ze = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
      return void 0 === t ? this.localeData() : this.locale(t)
    });

    function Xe() {
      return this._locale
    }

    function Je(t, e) {
      W(0, [t, t.length], 0, e)
    }

    function Ke(t, e, n, i, s) {
      var r;
      return null == t ? Rt(this, i, s).year : ((r = Wt(t, i, s)) < e && (e = r), function (t, e, n, i, s) {
        var r = Lt(t, e, n, i, s),
          a = Pt(r.year, 0, r.dayOfYear);
        return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
      }.call(this, t, e, n, i, s))
    }
    W(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100
    }), W(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100
    }), Je("gggg", "weekYear"), Je("ggggg", "weekYear"), Je("GGGG", "isoWeekYear"), Je("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), lt("G", it), lt("g", it), lt("GG", Z, z), lt("gg", Z, z), lt("GGGG", tt, G), lt("gggg", tt, G), lt("GGGGG", et, Q), lt("ggggg", et, Q), ht(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
      e[i.substr(0, 2)] = k(t)
    }), ht(["gg", "GG"], function (t, e, n, i) {
      e[i] = y.parseTwoDigitYear(t)
    }), W("Q", 0, "Qo", "quarter"), O("quarter", "Q"), I("quarter", 7), lt("Q", q), dt("Q", function (t, e) {
      e[pt] = 3 * (k(t) - 1)
    }), W("D", ["DD", 2], "Do", "date"), O("date", "D"), I("date", 9), lt("D", Z), lt("DD", Z, z), lt("Do", function (t, e) {
      return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    }), dt(["D", "DD"], mt), dt("Do", function (t, e) {
      e[mt] = k(t.match(Z)[0])
    });
    var tn = Ct("Date", !0);
    W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), I("dayOfYear", 4), lt("DDD", K), lt("DDDD", B), dt(["DDD", "DDDD"], function (t, e, n) {
      n._dayOfYear = k(t)
    }), W("m", ["mm", 2], 0, "minute"), O("minute", "m"), I("minute", 14), lt("m", Z), lt("mm", Z, z), dt(["m", "mm"], vt);
    var en = Ct("Minutes", !1);
    W("s", ["ss", 2], 0, "second"), O("second", "s"), I("second", 15), lt("s", Z), lt("ss", Z, z), dt(["s", "ss"], yt);
    var nn, sn = Ct("Seconds", !1);
    for (W("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
      }), W(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
      }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
      }), W(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
      }), W(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
      }), W(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
      }), W(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
      }), W(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
      }), O("millisecond", "ms"), I("millisecond", 16), lt("S", K, q), lt("SS", K, z), lt("SSS", K, B), nn = "SSSS"; nn.length <= 9; nn += "S") lt(nn, nt);

    function rn(t, e) {
      e[bt] = k(1e3 * ("0." + t))
    }
    for (nn = "S"; nn.length <= 9; nn += "S") dt(nn, rn);
    var an = Ct("Milliseconds", !1);
    W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
    var on = x.prototype;

    function ln(t) {
      return t
    }
    on.add = ze, on.calendar = function (t, e) {
      var n = t || Te(),
        i = Ie(n, this).startOf("day"),
        s = y.calendarFormat(this, i) || "sameElse",
        r = e && (M(e[s]) ? e[s].call(this, n) : e[s]);
      return this.format(r || this.localeData().calendar(s, this, Te(n)))
    }, on.clone = function () {
      return new x(this)
    }, on.diff = function (t, e, n) {
      var i, s, r;
      if (!this.isValid()) return NaN;
      if (!(i = Ie(t, this)).isValid()) return NaN;
      switch (s = 6e4 * (i.utcOffset() - this.utcOffset()), e = N(e)) {
        case "year":
          r = Ge(this, i) / 12;
          break;
        case "month":
          r = Ge(this, i);
          break;
        case "quarter":
          r = Ge(this, i) / 3;
          break;
        case "second":
          r = (this - i) / 1e3;
          break;
        case "minute":
          r = (this - i) / 6e4;
          break;
        case "hour":
          r = (this - i) / 36e5;
          break;
        case "day":
          r = (this - i - s) / 864e5;
          break;
        case "week":
          r = (this - i - s) / 6048e5;
          break;
        default:
          r = this - i
      }
      return n ? r : D(r)
    }, on.endOf = function (t) {
      return void 0 === (t = N(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }, on.format = function (t) {
      t || (t = this.isUtc() ? y.defaultFormatUtc : y.defaultFormat);
      var e = H(this, t);
      return this.localeData().postformat(e)
    }, on.from = function (t, e) {
      return this.isValid() && (_(t) && t.isValid() || Te(t).isValid()) ? Re({
        to: this,
        from: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, on.fromNow = function (t) {
      return this.from(Te(), t)
    }, on.to = function (t, e) {
      return this.isValid() && (_(t) && t.isValid() || Te(t).isValid()) ? Re({
        from: this,
        to: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, on.toNow = function (t) {
      return this.to(Te(), t)
    }, on.get = function (t) {
      return M(this[t = N(t)]) ? this[t]() : this
    }, on.invalidAt = function () {
      return w(this).overflow
    }, on.isAfter = function (t, e) {
      var n = _(t) ? t : Te(t);
      return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(u(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
    }, on.isBefore = function (t, e) {
      var n = _(t) ? t : Te(t);
      return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(u(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
    }, on.isBetween = function (t, e, n, i) {
      return ("(" === (i = i || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
    }, on.isSame = function (t, e) {
      var n, i = _(t) ? t : Te(t);
      return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = N(e || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
    }, on.isSameOrAfter = function (t, e) {
      return this.isSame(t, e) || this.isAfter(t, e)
    }, on.isSameOrBefore = function (t, e) {
      return this.isSame(t, e) || this.isBefore(t, e)
    }, on.isValid = function () {
      return m(this)
    }, on.lang = Ze, on.locale = Qe, on.localeData = Xe, on.max = Se, on.min = Ce, on.parsingFlags = function () {
      return f({}, w(this))
    }, on.set = function (t, e) {
      if ("object" == typeof t)
        for (var n = function (t) {
            var e = [];
            for (var n in t) e.push({
              unit: n,
              priority: Y[n]
            });
            return e.sort(function (t, e) {
              return t.priority - e.priority
            }), e
          }(t = j(t)), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit]);
      else if (M(this[t = N(t)])) return this[t](e);
      return this
    }, on.startOf = function (t) {
      switch (t = N(t)) {
        case "year":
          this.month(0);
        case "quarter":
        case "month":
          this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
          this.hours(0);
        case "hour":
          this.minutes(0);
        case "minute":
          this.seconds(0);
        case "second":
          this.milliseconds(0)
      }
      return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }, on.subtract = Be, on.toArray = function () {
      var t = this;
      return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }, on.toObject = function () {
      var t = this;
      return {
        years: t.year(),
        months: t.month(),
        date: t.date(),
        hours: t.hours(),
        minutes: t.minutes(),
        seconds: t.seconds(),
        milliseconds: t.milliseconds()
      }
    }, on.toDate = function () {
      return new Date(this.valueOf())
    }, on.toISOString = function (t) {
      if (!this.isValid()) return null;
      var e = !0 !== t,
        n = e ? this.clone().utc() : this;
      return n.year() < 0 || 9999 < n.year() ? H(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : M(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", H(n, "Z")) : H(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, on.inspect = function () {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var t = "moment",
        e = "";
      this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
      var n = "[" + t + '("]',
        i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        s = e + '[")]';
      return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + s)
    }, on.toJSON = function () {
      return this.isValid() ? this.toISOString() : null
    }, on.toString = function () {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, on.unix = function () {
      return Math.floor(this.valueOf() / 1e3)
    }, on.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, on.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      }
    }, on.year = Tt, on.isLeapYear = function () {
      return Dt(this.year())
    }, on.weekYear = function (t) {
      return Ke.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, on.isoWeekYear = function (t) {
      return Ke.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, on.quarter = on.quarters = function (t) {
      return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }, on.month = jt, on.daysInMonth = function () {
      return $t(this.year(), this.month())
    }, on.week = on.weeks = function (t) {
      var e = this.localeData().week(this);
      return null == t ? e : this.add(7 * (t - e), "d")
    }, on.isoWeek = on.isoWeeks = function (t) {
      var e = Rt(this, 1, 4).week;
      return null == t ? e : this.add(7 * (t - e), "d")
    }, on.weeksInYear = function () {
      var t = this.localeData()._week;
      return Wt(this.year(), t.dow, t.doy)
    }, on.isoWeeksInYear = function () {
      return Wt(this.year(), 1, 4)
    }, on.date = tn, on.day = on.days = function (t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != t ? (e = t, n = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = n.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - i, "d")) : i
    }, on.weekday = function (t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == t ? e : this.add(t - e, "d")
    }, on.isoWeekday = function (t) {
      if (!this.isValid()) return null != t ? this : NaN;
      if (null == t) return this.day() || 7;
      var e, n, i = (e = t, n = this.localeData(), "string" == typeof e ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
      return this.day(this.day() % 7 ? i : i - 7)
    }, on.dayOfYear = function (t) {
      var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
      return null == t ? e : this.add(t - e, "d")
    }, on.hour = on.hours = te, on.minute = on.minutes = en, on.second = on.seconds = sn, on.millisecond = on.milliseconds = an, on.utcOffset = function (t, e, n) {
      var i, s = this._offset || 0;
      if (!this.isValid()) return null != t ? this : NaN;
      if (null == t) return this._isUTC ? s : Ue(this);
      if ("string" == typeof t) {
        if (null === (t = Ye(rt, t))) return this
      } else Math.abs(t) < 16 && !n && (t *= 60);
      return !this._isUTC && e && (i = Ue(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), s !== t && (!e || this._changeInProgress ? qe(this, Re(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, y.updateOffset(this, !0), this._changeInProgress = null)), this
    }, on.utc = function (t) {
      return this.utcOffset(0, t)
    }, on.local = function (t) {
      return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ue(this), "m")), this
    }, on.parseZone = function () {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
      else if ("string" == typeof this._i) {
        var t = Ye(st, this._i);
        null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
      }
      return this
    }, on.hasAlignedHourOffset = function (t) {
      return !!this.isValid() && (t = t ? Te(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }, on.isDST = function () {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, on.isLocal = function () {
      return !!this.isValid() && !this._isUTC
    }, on.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC
    }, on.isUtc = Pe, on.isUTC = Pe, on.zoneAbbr = function () {
      return this._isUTC ? "UTC" : ""
    }, on.zoneName = function () {
      return this._isUTC ? "Coordinated Universal Time" : ""
    }, on.dates = n("dates accessor is deprecated. Use date instead.", tn), on.months = n("months accessor is deprecated. Use month instead", jt), on.years = n("years accessor is deprecated. Use year instead", Tt), on.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
      return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }), on.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
      if (!u(this._isDSTShifted)) return this._isDSTShifted;
      var t = {};
      if (v(t, this), (t = De(t))._a) {
        var e = t._isUTC ? p(t._a) : Te(t._a);
        this._isDSTShifted = this.isValid() && 0 < a(t._a, e.toArray())
      } else this._isDSTShifted = !1;
      return this._isDSTShifted
    });
    var un = A.prototype;

    function cn(t, e, n, i) {
      var s = le(),
        r = p().set(i, e);
      return s[n](r, t)
    }

    function dn(t, e, n) {
      if (c(t) && (e = t, t = void 0), t = t || "", null != e) return cn(t, e, n, "month");
      var i, s = [];
      for (i = 0; i < 12; i++) s[i] = cn(t, i, n, "month");
      return s
    }

    function hn(t, e, n, i) {
      "boolean" == typeof t ? c(e) && (n = e, e = void 0) : (e = t, t = !1, c(n = e) && (n = e, e = void 0)), e = e || "";
      var s, r = le(),
        a = t ? r._week.dow : 0;
      if (null != n) return cn(e, (n + a) % 7, i, "day");
      var o = [];
      for (s = 0; s < 7; s++) o[s] = cn(e, (s + a) % 7, i, "day");
      return o
    }
    un.calendar = function (t, e, n) {
      var i = this._calendar[t] || this._calendar.sameElse;
      return M(i) ? i.call(e, n) : i
    }, un.longDateFormat = function (t) {
      var e = this._longDateFormat[t],
        n = this._longDateFormat[t.toUpperCase()];
      return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
        return t.slice(1)
      }), this._longDateFormat[t])
    }, un.invalidDate = function () {
      return this._invalidDate
    }, un.ordinal = function (t) {
      return this._ordinal.replace("%d", t)
    }, un.preparse = ln, un.postformat = ln, un.relativeTime = function (t, e, n, i) {
      var s = this._relativeTime[n];
      return M(s) ? s(t, e, n, i) : s.replace(/%d/i, t)
    }, un.pastFuture = function (t, e) {
      var n = this._relativeTime[0 < t ? "future" : "past"];
      return M(n) ? n(e) : n.replace(/%s/i, e)
    }, un.set = function (t) {
      var e, n;
      for (n in t) M(e = t[n]) ? this[n] = e : this["_" + n] = e;
      this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, un.months = function (t, e) {
      return t ? o(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || At).test(e) ? "format" : "standalone"][t.month()] : o(this._months) ? this._months : this._months.standalone
    }, un.monthsShort = function (t, e) {
      return t ? o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[At.test(e) ? "format" : "standalone"][t.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, un.monthsParse = function (t, e, n) {
      var i, s, r;
      if (this._monthsParseExact) return function (t, e, n) {
        var i, s, r, a = t.toLocaleLowerCase();
        if (!this._monthsParse)
          for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) r = p([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
        return n ? "MMM" === e ? -1 !== (s = kt.call(this._shortMonthsParse, a)) ? s : null : -1 !== (s = kt.call(this._longMonthsParse, a)) ? s : null : "MMM" === e ? -1 !== (s = kt.call(this._shortMonthsParse, a)) ? s : -1 !== (s = kt.call(this._longMonthsParse, a)) ? s : null : -1 !== (s = kt.call(this._longMonthsParse, a)) ? s : -1 !== (s = kt.call(this._shortMonthsParse, a)) ? s : null
      }.call(this, t, e, n);
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
        if (s = p([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
        if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
        if (!n && this._monthsParse[i].test(t)) return i
      }
    }, un.monthsRegex = function (t) {
      return this._monthsParseExact ? (b(this, "_monthsRegex") || Ut.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (b(this, "_monthsRegex") || (this._monthsRegex = It), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }, un.monthsShortRegex = function (t) {
      return this._monthsParseExact ? (b(this, "_monthsRegex") || Ut.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (b(this, "_monthsShortRegex") || (this._monthsShortRegex = Yt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, un.week = function (t) {
      return Rt(t, this._week.dow, this._week.doy).week
    }, un.firstDayOfYear = function () {
      return this._week.doy
    }, un.firstDayOfWeek = function () {
      return this._week.dow
    }, un.weekdays = function (t, e) {
      return t ? o(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : o(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }, un.weekdaysMin = function (t) {
      return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }, un.weekdaysShort = function (t) {
      return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }, un.weekdaysParse = function (t, e, n) {
      var i, s, r;
      if (this._weekdaysParseExact) return function (t, e, n) {
        var i, s, r, a = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) r = p([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
        return n ? "dddd" === e ? -1 !== (s = kt.call(this._weekdaysParse, a)) ? s : null : "ddd" === e ? -1 !== (s = kt.call(this._shortWeekdaysParse, a)) ? s : null : -1 !== (s = kt.call(this._minWeekdaysParse, a)) ? s : null : "dddd" === e ? -1 !== (s = kt.call(this._weekdaysParse, a)) ? s : -1 !== (s = kt.call(this._shortWeekdaysParse, a)) ? s : -1 !== (s = kt.call(this._minWeekdaysParse, a)) ? s : null : "ddd" === e ? -1 !== (s = kt.call(this._shortWeekdaysParse, a)) ? s : -1 !== (s = kt.call(this._weekdaysParse, a)) ? s : -1 !== (s = kt.call(this._minWeekdaysParse, a)) ? s : null : -1 !== (s = kt.call(this._minWeekdaysParse, a)) ? s : -1 !== (s = kt.call(this._weekdaysParse, a)) ? s : -1 !== (s = kt.call(this._shortWeekdaysParse, a)) ? s : null
      }.call(this, t, e, n);
      for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
        if (s = p([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
        if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
        if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
        if (!n && this._weekdaysParse[i].test(t)) return i
      }
    }, un.weekdaysRegex = function (t) {
      return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (b(this, "_weekdaysRegex") || (this._weekdaysRegex = zt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, un.weekdaysShortRegex = function (t) {
      return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (b(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Bt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, un.weekdaysMinRegex = function (t) {
      return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (b(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Gt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, un.isPM = function (t) {
      return "p" === (t + "").toLowerCase().charAt(0)
    }, un.meridiem = function (t, e, n) {
      return 11 < t ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, ae("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (t) {
        var e = t % 10;
        return t + (1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
      }
    }), y.lang = n("moment.lang is deprecated. Use moment.locale instead.", ae), y.langData = n("moment.langData is deprecated. Use moment.localeData instead.", le);
    var fn = Math.abs;

    function pn(t, e, n, i) {
      var s = Re(e, n);
      return t._milliseconds += i * s._milliseconds, t._days += i * s._days, t._months += i * s._months, t._bubble()
    }

    function mn(t) {
      return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function gn(t) {
      return 4800 * t / 146097
    }

    function vn(t) {
      return 146097 * t / 4800
    }

    function yn(t) {
      return function () {
        return this.as(t)
      }
    }
    var bn = yn("ms"),
      wn = yn("s"),
      xn = yn("m"),
      _n = yn("h"),
      Dn = yn("d"),
      kn = yn("w"),
      Tn = yn("M"),
      Cn = yn("y");

    function Sn(t) {
      return function () {
        return this.isValid() ? this._data[t] : NaN
      }
    }
    var Mn = Sn("milliseconds"),
      $n = Sn("seconds"),
      An = Sn("minutes"),
      En = Sn("hours"),
      On = Sn("days"),
      Nn = Sn("months"),
      jn = Sn("years"),
      Yn = Math.round,
      In = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
      },
      Un = Math.abs;

    function Pn(t) {
      return (0 < t) - (t < 0) || +t
    }

    function Fn() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t, e, n = Un(this._milliseconds) / 1e3,
        i = Un(this._days),
        s = Un(this._months);
      e = D((t = D(n / 60)) / 60), n %= 60, t %= 60;
      var r = D(s / 12),
        a = s %= 12,
        o = i,
        l = e,
        u = t,
        c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        d = this.asSeconds();
      if (!d) return "P0D";
      var h = d < 0 ? "-" : "",
        f = Pn(this._months) !== Pn(d) ? "-" : "",
        p = Pn(this._days) !== Pn(d) ? "-" : "",
        m = Pn(this._milliseconds) !== Pn(d) ? "-" : "";
      return h + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? p + o + "D" : "") + (l || u || c ? "T" : "") + (l ? m + l + "H" : "") + (u ? m + u + "M" : "") + (c ? m + c + "S" : "")
    }
    var Ln = Ae.prototype;
    return Ln.isValid = function () {
      return this._isValid
    }, Ln.abs = function () {
      var t = this._data;
      return this._milliseconds = fn(this._milliseconds), this._days = fn(this._days), this._months = fn(this._months), t.milliseconds = fn(t.milliseconds), t.seconds = fn(t.seconds), t.minutes = fn(t.minutes), t.hours = fn(t.hours), t.months = fn(t.months), t.years = fn(t.years), this
    }, Ln.add = function (t, e) {
      return pn(this, t, e, 1)
    }, Ln.subtract = function (t, e) {
      return pn(this, t, e, -1)
    }, Ln.as = function (t) {
      if (!this.isValid()) return NaN;
      var e, n, i = this._milliseconds;
      if ("month" === (t = N(t)) || "year" === t) return e = this._days + i / 864e5, n = this._months + gn(e), "month" === t ? n : n / 12;
      switch (e = this._days + Math.round(vn(this._months)), t) {
        case "week":
          return e / 7 + i / 6048e5;
        case "day":
          return e + i / 864e5;
        case "hour":
          return 24 * e + i / 36e5;
        case "minute":
          return 1440 * e + i / 6e4;
        case "second":
          return 86400 * e + i / 1e3;
        case "millisecond":
          return Math.floor(864e5 * e) + i;
        default:
          throw new Error("Unknown unit " + t)
      }
    }, Ln.asMilliseconds = bn, Ln.asSeconds = wn, Ln.asMinutes = xn, Ln.asHours = _n, Ln.asDays = Dn, Ln.asWeeks = kn, Ln.asMonths = Tn, Ln.asYears = Cn, Ln.valueOf = function () {
      return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
    }, Ln._bubble = function () {
      var t, e, n, i, s, r = this._milliseconds,
        a = this._days,
        o = this._months,
        l = this._data;
      return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * mn(vn(o) + a), o = a = 0), l.milliseconds = r % 1e3, t = D(r / 1e3), l.seconds = t % 60, e = D(t / 60), l.minutes = e % 60, n = D(e / 60), l.hours = n % 24, o += s = D(gn(a += D(n / 24))), a -= mn(vn(s)), i = D(o / 12), o %= 12, l.days = a, l.months = o, l.years = i, this
    }, Ln.clone = function () {
      return Re(this)
    }, Ln.get = function (t) {
      return t = N(t), this.isValid() ? this[t + "s"]() : NaN
    }, Ln.milliseconds = Mn, Ln.seconds = $n, Ln.minutes = An, Ln.hours = En, Ln.days = On, Ln.weeks = function () {
      return D(this.days() / 7)
    }, Ln.months = Nn, Ln.years = jn, Ln.humanize = function (t) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var e, n, i, s, r, a, o, l, u, c, d = this.localeData(),
        h = (e = !t, n = d, i = Re(this).abs(), s = Yn(i.as("s")), r = Yn(i.as("m")), a = Yn(i.as("h")), o = Yn(i.as("d")), l = Yn(i.as("M")), u = Yn(i.as("y")), (c = s <= In.ss && ["s", s] || s < In.s && ["ss", s] || r <= 1 && ["m"] || r < In.m && ["mm", r] || a <= 1 && ["h"] || a < In.h && ["hh", a] || o <= 1 && ["d"] || o < In.d && ["dd", o] || l <= 1 && ["M"] || l < In.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u])[2] = e, c[3] = 0 < +this, c[4] = n, function (t, e, n, i, s) {
          return s.relativeTime(e || 1, !!n, t, i)
        }.apply(null, c));
      return t && (h = d.pastFuture(+this, h)), d.postformat(h)
    }, Ln.toISOString = Fn, Ln.toString = Fn, Ln.toJSON = Fn, Ln.locale = Qe, Ln.localeData = Xe, Ln.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Fn), Ln.lang = Ze, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), lt("x", it), lt("X", /[+-]?\d+(\.\d{1,3})?/), dt("X", function (t, e, n) {
      n._d = new Date(1e3 * parseFloat(t, 10))
    }), dt("x", function (t, e, n) {
      n._d = new Date(k(t))
    }), y.version = "2.22.2", t = Te, y.fn = on, y.min = function () {
      return Me("isBefore", [].slice.call(arguments, 0))
    }, y.max = function () {
      return Me("isAfter", [].slice.call(arguments, 0))
    }, y.now = function () {
      return Date.now ? Date.now() : +new Date
    }, y.utc = p, y.unix = function (t) {
      return Te(1e3 * t)
    }, y.months = function (t, e) {
      return dn(t, e, "months")
    }, y.isDate = d, y.locale = ae, y.invalid = g, y.duration = Re, y.isMoment = _, y.weekdays = function (t, e, n) {
      return hn(t, e, n, "weekdays")
    }, y.parseZone = function () {
      return Te.apply(null, arguments).parseZone()
    }, y.localeData = le, y.isDuration = Ee, y.monthsShort = function (t, e) {
      return dn(t, e, "monthsShort")
    }, y.weekdaysMin = function (t, e, n) {
      return hn(t, e, n, "weekdaysMin")
    }, y.defineLocale = oe, y.updateLocale = function (t, e) {
      if (null != e) {
        var n, i, s = ee;
        null != (i = re(t)) && (s = i._config), (n = new A(e = $(s, e))).parentLocale = ne[t], ne[t] = n, ae(t)
      } else null != ne[t] && (null != ne[t].parentLocale ? ne[t] = ne[t].parentLocale : null != ne[t] && delete ne[t]);
      return ne[t]
    }, y.locales = function () {
      return i(ne)
    }, y.weekdaysShort = function (t, e, n) {
      return hn(t, e, n, "weekdaysShort")
    }, y.normalizeUnits = N, y.relativeTimeRounding = function (t) {
      return void 0 === t ? Yn : "function" == typeof t && (Yn = t, !0)
    }, y.relativeTimeThreshold = function (t, e) {
      return void 0 !== In[t] && (void 0 === e ? In[t] : (In[t] = e, "s" === t && (In.ss = e - 1), !0))
    }, y.calendarFormat = function (t, e) {
      var n = t.diff(e, "days", !0);
      return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }, y.prototype = on, y.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      DATE: "YYYY-MM-DD",
      TIME: "HH:mm",
      TIME_SECONDS: "HH:mm:ss",
      TIME_MS: "HH:mm:ss.SSS",
      WEEK: "YYYY-[W]WW",
      MONTH: "YYYY-MM"
    }, y
  }),
  function (r) {
    r.fn.stupidtable = function (e) {
      return this.each(function () {
        var t = r(this);
        e = e || {}, e = r.extend({}, r.fn.stupidtable.default_sort_fns, e), t.data("sortFns", e), t.stupidtable_build(), t.on("click.stupidtable", "thead th", function () {
          r(this).stupidsort()
        }), t.find("th[data-sort-onload=yes]").eq(0).stupidsort()
      })
    }, r.fn.stupidtable.default_settings = {
      should_redraw: function (t) {
        return !0
      },
      will_manually_build_table: !1
    }, r.fn.stupidtable.dir = {
      ASC: "asc",
      DESC: "desc"
    }, r.fn.stupidtable.default_sort_fns = {
      int: function (t, e) {
        return parseInt(t, 10) - parseInt(e, 10)
      },
      float: function (t, e) {
        return parseFloat(t) - parseFloat(e)
      },
      string: function (t, e) {
        return t.toString().localeCompare(e.toString())
      },
      "string-ins": function (t, e) {
        return t = t.toString().toLocaleLowerCase(), e = e.toString().toLocaleLowerCase(), t.localeCompare(e)
      }
    }, r.fn.stupidtable_settings = function (n) {
      return this.each(function () {
        var t = r(this),
          e = r.extend({}, r.fn.stupidtable.default_settings, n);
        t.stupidtable.settings = e
      })
    }, r.fn.stupidsort = function (t) {
      var n = r(this),
        e = n.data("sort") || null;
      if (null !== e) {
        r.fn.stupidtable.dir;
        var i = n.closest("table"),
          s = {
            $th: n,
            $table: i,
            datatype: e
          };
        return i.stupidtable.settings || (i.stupidtable.settings = r.extend({}, r.fn.stupidtable.default_settings)), s.compare_fn = i.data("sortFns")[e], s.th_index = c(s), s.sort_dir = u(t, s), n.data("sort-dir", s.sort_dir), i.trigger("beforetablesort", {
          column: s.th_index,
          direction: s.sort_dir,
          $th: n
        }), i.css("display"), setTimeout(function () {
          i.stupidtable.settings.will_manually_build_table || i.stupidtable_build();
          var t = a(s),
            e = o(t, s);
          i.stupidtable.settings.should_redraw(s) && (i.children("tbody").append(e), l(s), i.trigger("aftertablesort", {
            column: s.th_index,
            direction: s.sort_dir,
            $th: n
          }), i.css("display"))
        }, 10), n
      }
    }, r.fn.updateSortVal = function (t) {
      var e = r(this);
      return e.is("[data-sort-value]") && e.attr("data-sort-value", t), e.data("sort-value", t), e
    }, r.fn.stupidtable_build = function () {
      return this.each(function () {
        var t = r(this),
          n = [];
        t.children("tbody").children("tr").each(function (t, e) {
          var s = {
            $tr: r(e),
            columns: [],
            index: t
          };
          r(e).children("td").each(function (t, e) {
            var n = r(e).data("sort-value");
            if (void 0 === n) {
              var i = r(e).text();
              r(e).data("sort-value", i), n = i
            }
            s.columns.push(n)
          }), n.push(s)
        }), t.data("stupidsort_internaltable", n)
      })
    };
    var a = function (a) {
        var t, e = a.$table.data("stupidsort_internaltable"),
          o = a.th_index,
          n = a.$th.data("sort-multicolumn");
        t = n ? n.split(",") : [];
        var l = r.map(t, function (t, e) {
          return i(a.$table, t)
        });
        return e.sort(function (t, e) {
          for (var n = l.slice(0), i = a.compare_fn(t.columns[o], e.columns[o]); 0 === i && n.length;) {
            var s = n[0],
              r = s.$e.data("sort");
            i = (0, a.$table.data("sortFns")[r])(t.columns[s.index], e.columns[s.index]), n.shift()
          }
          return 0 === i ? t.index - e.index : i
        }), a.sort_dir != r.fn.stupidtable.dir.ASC && e.reverse(), e
      },
      i = function (t, e) {
        var n, i = t.find("th"),
          s = parseInt(e, 10);
        return s || 0 === s ? n = i.eq(s) : (n = i.siblings("#" + e), s = i.index(n)), {
          index: s,
          $e: n
        }
      },
      o = function (t, n) {
        var e = r.map(t, function (t, e) {
          return [
            [t.columns[n.th_index], t.$tr, e]
          ]
        });
        return n.column = e, r.map(t, function (t) {
          return t.$tr
        })
      },
      l = function (t) {
        var e = t.$table,
          n = t.$th,
          i = n.data("sort-dir");
        t.th_index;
        e.find("th").data("sort-dir", null).removeClass("sorting-desc sorting-asc"), n.data("sort-dir", i).addClass("sorting-" + i)
      },
      u = function (t, e) {
        var n, i = e.$th,
          s = r.fn.stupidtable.dir;
        return t ? n = t : (n = t || i.data("sort-default") || s.ASC, i.data("sort-dir") && (n = i.data("sort-dir") === s.ASC ? s.DESC : s.ASC)), n
      },
      c = function (t) {
        var e = 0,
          n = t.$th.index();
        return t.$th.parents("tr").find("th").slice(0, n).each(function () {
          var t = r(this).attr("colspan") || 1;
          e += parseInt(t, 10)
        }), e
      }
  }(jQuery), window.yii = function (y) {
    var b = {
      reloadableScripts: [],
      clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
      changeableSelector: "select, input, textarea",
      getCsrfParam: function () {
        return y("meta[name=csrf-param]").attr("content")
      },
      getCsrfToken: function () {
        return y("meta[name=csrf-token]").attr("content")
      },
      setCsrfToken: function (t, e) {
        y("meta[name=csrf-param]").attr("content", t), y("meta[name=csrf-token]").attr("content", e)
      },
      refreshCsrfToken: function () {
        var t = b.getCsrfToken();
        t && y('form input[name="' + b.getCsrfParam() + '"]').val(t)
      },
      confirm: function (t, e, n) {
        window.confirm(t) ? !e || e() : !n || n()
      },
      handleAction: function (t, e) {
        var n, i = t.attr("data-form") ? y("#" + t.attr("data-form")) : t.closest("form"),
          s = !t.data("method") && i ? i.attr("method") : t.data("method"),
          r = t.attr("href"),
          a = r && "#" !== r,
          o = t.data("params"),
          l = o && y.isPlainObject(o),
          u = t.data("pjax"),
          c = void 0 !== u && 0 !== u && y.support.pjax,
          d = {};
        if (c && (void 0 !== (n = t.data("pjax-container")) && n.length || (n = t.closest("[data-pjax-container]").attr("id") ? "#" + t.closest("[data-pjax-container]").attr("id") : ""), n.length || (n = "body"), d = {
            container: n,
            push: !!t.data("pjax-push-state"),
            replace: !!t.data("pjax-replace-state"),
            scrollTo: t.data("pjax-scrollto"),
            pushRedirect: t.data("pjax-push-redirect"),
            replaceRedirect: t.data("pjax-replace-redirect"),
            skipOuterContainers: t.data("pjax-skip-outer-containers"),
            timeout: t.data("pjax-timeout"),
            originalEvent: e,
            originalTarget: t
          }), void 0 !== s) {
          var h, f, p = !i.length;
          if (p) {
            a || (r = b.getCurrentUrl()), i = y("<form/>", {
              method: s,
              action: r
            });
            var m = t.attr("target");
            if (m && i.attr("target", m), /(get|post)/i.test(s) || (i.append(y("<input/>", {
                name: "_method",
                value: s,
                type: "hidden"
              })), s = "post", i.attr("method", s)), /post/i.test(s)) {
              var g = b.getCsrfParam();
              g && i.append(y("<input/>", {
                name: g,
                value: b.getCsrfToken(),
                type: "hidden"
              }))
            }
            i.hide().appendTo("body")
          } else h = i.attr("method"), i.attr("method", s), a && (f = i.attr("action"), i.attr("action", r));
          var v = i.data("yiiActiveForm");
          v && (v.submitObject = t), l && y.each(o, function (t, e) {
            i.append(y("<input/>").attr({
              name: t,
              value: e,
              type: "hidden"
            }))
          }), c && i.on("submit", function (t) {
            y.pjax.submit(t, d)
          }), i.trigger("submit"), y.when(i.data("yiiSubmitFinalizePromise")).done(function () {
            p ? i.remove() : (void 0 !== f && i.attr("action", f), i.attr("method", h), l && y.each(o, function (t) {
              y('input[name="' + t + '"]', i).remove()
            }))
          })
        } else a ? c ? y.pjax.click(e, d) : window.location.assign(r) : t.is(":submit") && i.length && (c && i.on("submit", function (t) {
          y.pjax.submit(t, d)
        }), i.trigger("submit"))
      },
      getQueryParams: function (t) {
        var e = t.indexOf("?");
        if (e < 0) return {};
        for (var n = y.grep(t.substring(e + 1).split("#")[0].split("&"), function (t) {
            return "" !== t
          }), i = {}, s = 0, r = n.length; s < r; s++) {
          var a = n[s].split("="),
            o = decodeURIComponent(a[0].replace(/\+/g, "%20")),
            l = decodeURIComponent(a[1].replace(/\+/g, "%20"));
          o.length && (void 0 === i[o] ? i[o] = l || "" : (y.isArray(i[o]) || (i[o] = [i[o]]), i[o].push(l || "")))
        }
        return i
      },
      initModule: function (t) {
        (void 0 === t.isActive || t.isActive) && (y.isFunction(t.init) && t.init(), y.each(t, function () {
          y.isPlainObject(this) && b.initModule(this)
        }))
      },
      init: function () {
        var a, t;
        y.ajaxPrefilter(function (t, e, n) {
          !t.crossDomain && b.getCsrfParam() && n.setRequestHeader("X-CSRF-Token", b.getCsrfToken())
        }), b.refreshCsrfToken(), y(document).ajaxComplete(function (t, e) {
          var n = e && e.getResponseHeader("X-Redirect");
          n && window.location.assign(n)
        }), a = {}, y("script[src]").each(function () {
          var t = l(this.src);
          a[t] = !0
        }), y.ajaxPrefilter("script", function (t, e, n) {
          if ("jsonp" != t.dataType) {
            var i = l(t.url),
              s = !0 === a[i] && !o(i),
              r = void 0 !== a[i] && !0 === a[i].xhrDone;
            s || r ? n.abort() : (void 0 !== a[i] && !0 !== a[i] || (a[i] = {
              xhrList: [],
              xhrDone: !1
            }), n.done(function (t, e, n) {
              if (!0 !== a[n.yiiUrl].xhrDone) {
                a[n.yiiUrl].xhrDone = !0;
                for (var i = 0, s = a[n.yiiUrl].xhrList.length; i < s; i++) {
                  var r = a[n.yiiUrl].xhrList[i];
                  r && r.readyState !== XMLHttpRequest.DONE && r.abort()
                }
                a[n.yiiUrl] = !0
              }
            }).fail(function (t, e) {
              if ("abort" !== e) {
                delete a[t.yiiUrl].xhrList[t.yiiIndex];
                for (var n = !0, i = 0, s = a[t.yiiUrl].xhrList.length; i < s; i++) a[t.yiiUrl].xhrList[i] && (n = !1);
                n && delete a[t.yiiUrl]
              }
            }), n.yiiIndex = a[i].xhrList.length, n.yiiUrl = i, a[i].xhrList[n.yiiIndex] = n)
          }
        }), y(document).ajaxComplete(function () {
          var e = [];
          y("link[rel=stylesheet]").each(function () {
            var t = l(this.href);
            o(t) || (-1 === y.inArray(t, e) ? e.push(t) : y(this).remove())
          })
        }), t = function (t) {
          var e = y(this),
            n = e.data("method"),
            i = e.data("confirm"),
            s = e.data("form");
          return void 0 === n && void 0 === i && void 0 === s || (void 0 !== i ? y.proxy(b.confirm, this)(i, function () {
            b.handleAction(e, t)
          }) : b.handleAction(e, t), t.stopImmediatePropagation(), !1)
        }, y(document).on("click.yii", b.clickableSelector, t).on("change.yii", b.changeableSelector, t)
      },
      getBaseCurrentUrl: function () {
        return window.location.protocol + "//" + window.location.host
      },
      getCurrentUrl: function () {
        return window.location.href
      }
    };

    function o(t) {
      for (var e = 0; e < b.reloadableScripts.length; e++) {
        var n = l(b.reloadableScripts[e]);
        if (!0 === new RegExp("^" + (i = n, i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")).split("\\*").join(".+") + "$").test(t)) return !0
      }
      var i;
      return !1
    }

    function l(t) {
      return "/" === t.charAt(0) ? b.getBaseCurrentUrl() + t : t
    }
    return b
  }(window.jQuery), window.jQuery(function () {
    window.yii.initModule(window.yii)
  }),
  function (u) {
    u.fn.yiiActiveForm = function (t) {
      return v[t] ? v[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (u.error("Method " + t + " does not exist on jQuery.yiiActiveForm"), !1) : v.init.apply(this, arguments)
    };
    var s, l = "beforeValidate",
      o = "afterValidate",
      c = "beforeValidateAttribute",
      d = "afterValidateAttribute",
      r = "beforeSubmit",
      h = "ajaxBeforeSend",
      f = "ajaxComplete",
      a = "afterInit",
      p = {
        encodeErrorSummary: !0,
        errorSummary: ".error-summary",
        validateOnSubmit: !0,
        errorCssClass: "has-error",
        successCssClass: "has-success",
        validatingCssClass: "validating",
        ajaxParam: "ajax",
        ajaxDataType: "json",
        validationUrl: void 0,
        scrollToError: !0,
        scrollToErrorOffset: 0,
        validationStateOn: "container"
      },
      m = {
        id: void 0,
        name: void 0,
        container: void 0,
        input: void 0,
        error: ".help-block",
        encodeError: !0,
        validateOnChange: !0,
        validateOnBlur: !0,
        validateOnType: !1,
        validationDelay: 500,
        enableAjaxValidation: !1,
        validate: void 0,
        status: 0,
        cancelled: !1,
        value: void 0,
        updateAriaInvalid: !0
      },
      g = function (t) {
        s && (s.resolve(), s = void 0, t.removeData("yiiSubmitFinalizePromise"))
      },
      v = {
        init: function (i, s) {
          return this.each(function () {
            var e = u(this);
            if (!e.data("yiiActiveForm")) {
              var t = u.extend({}, p, s || {});
              void 0 === t.validationUrl && (t.validationUrl = e.attr("action")), u.each(i, function (t) {
                i[t] = u.extend({
                  value: S(e, this)
                }, m, this), y(e, i[t])
              }), e.data("yiiActiveForm", {
                settings: t,
                attributes: i,
                submitting: !1,
                validated: !1,
                options: _(e)
              }), e.on("reset.yiiActiveForm", v.resetForm), t.validateOnSubmit && (e.on("mouseup.yiiActiveForm keyup.yiiActiveForm", ":submit", function () {
                e.data("yiiActiveForm").submitObject = u(this)
              }), e.on("submit.yiiActiveForm", v.submitForm));
              var n = u.Event(a);
              e.trigger(n)
            }
          })
        },
        add: function (t) {
          var e = u(this);
          t = u.extend({
            value: S(e, t)
          }, m, t), e.data("yiiActiveForm").attributes.push(t), y(e, t)
        },
        remove: function (e) {
          var t = u(this),
            n = t.data("yiiActiveForm").attributes,
            i = -1,
            s = void 0;
          return u.each(n, function (t) {
            if (n[t].id == e) return s = n[i = t], !1
          }), 0 <= i && (n.splice(i, 1), b(t, s)), s
        },
        validateAttribute: function (t) {
          var e = v.find.call(this, t);
          null != e && i(u(this), e, !0)
        },
        find: function (e) {
          var n = u(this).data("yiiActiveForm").attributes,
            i = void 0;
          return u.each(n, function (t) {
            if (n[t].id == e) return i = n[t], !1
          }), i
        },
        destroy: function () {
          return this.each(function () {
            u(this).off(".yiiActiveForm"), u(this).removeData("yiiActiveForm")
          })
        },
        data: function () {
          return this.data("yiiActiveForm")
        },
        validate: function (t) {
          t && (u(this).data("yiiActiveForm").submitting = !0);
          var i = u(this),
            s = i.data("yiiActiveForm"),
            r = !1,
            a = {},
            n = w(),
            o = s.submitting;
          if (o) {
            var e = u.Event(l);
            if (i.trigger(e, [a, n]), !1 === e.result) return s.submitting = !1, void g(i)
          }
          u.each(s.attributes, function () {
            if (this.$form = i, !u(this.input).is(":disabled") && (this.cancelled = !1, s.submitting || 2 === this.status || 3 === this.status)) {
              var t = a[this.id];
              void 0 === t && (t = [], a[this.id] = t);
              var e = u.Event(c);
              i.trigger(e, [this, t, n]), !1 !== e.result ? (this.validate && this.validate(this, S(i, this), t, n, i), this.enableAjaxValidation && (r = !0)) : this.cancelled = !0
            }
          }), u.when.apply(this, n).always(function () {
            for (var t in a) 0 === a[t].length && delete a[t];
            if (r && (u.isEmptyObject(a) || s.submitting)) {
              var e = s.submitObject,
                n = "&" + s.settings.ajaxParam + "=" + i.attr("id");
              e && e.length && e.attr("name") && (n += "&" + e.attr("name") + "=" + e.attr("value")), u.ajax({
                url: s.settings.validationUrl,
                type: i.attr("method"),
                data: i.serialize() + n,
                dataType: s.settings.ajaxDataType,
                complete: function (t, e) {
                  i.trigger(f, [t, e])
                },
                beforeSend: function (t, e) {
                  i.trigger(h, [t, e])
                },
                success: function (t) {
                  null !== t && "object" == typeof t ? (u.each(s.attributes, function () {
                    this.enableAjaxValidation && !this.cancelled || delete t[this.id]
                  }), D(i, u.extend(a, t), o)) : D(i, a, o)
                },
                error: function () {
                  s.submitting = !1, g(i)
                }
              })
            } else s.submitting ? window.setTimeout(function () {
              D(i, a, o)
            }, 200) : D(i, a, o)
          })
        },
        submitForm: function () {
          var t, e = u(this),
            n = e.data("yiiActiveForm");
          if (n.validated) {
            n.submitting = !1;
            var i = u.Event(r);
            return e.trigger(i), !1 === i.result ? (n.validated = !1, g(e), !1) : (k(e), !0)
          }
          return t = e, s = u.Deferred(), t.data("yiiSubmitFinalizePromise", s.promise()), void 0 !== n.settings.timer && clearTimeout(n.settings.timer), n.submitting = !0, v.validate.call(e), !1
        },
        resetForm: function () {
          var n = u(this),
            i = n.data("yiiActiveForm");
          window.setTimeout(function () {
            u.each(i.attributes, function () {
              this.value = S(n, this), this.status = 0;
              var t = n.find(this.container),
                e = M(n, this);
              ("input" === i.settings.validationStateOn ? e : t).removeClass(i.settings.validatingCssClass + " " + i.settings.errorCssClass + " " + i.settings.successCssClass), t.find(this.error).html("")
            }), n.find(i.settings.errorSummary).hide().find("ul").html("")
          }, 1)
        },
        updateMessages: function (t, e) {
          var n = u(this),
            i = n.data("yiiActiveForm");
          u.each(i.attributes, function () {
            T(n, this, t)
          }), e && C(n, t)
        },
        updateAttribute: function (t, e) {
          var n = v.find.call(this, t);
          if (null != n) {
            var i = {};
            i[t] = e, T(u(this), n, i)
          }
        }
      },
      y = function (e, n) {
        var t = M(e, n);
        n.validateOnChange && t.on("change.yiiActiveForm", function () {
          i(e, n, !1)
        }), n.validateOnBlur && t.on("blur.yiiActiveForm", function () {
          0 != n.status && 1 != n.status || i(e, n, !0)
        }), n.validateOnType && t.on("keyup.yiiActiveForm", function (t) {
          -1 === u.inArray(t.which, [16, 17, 18, 37, 38, 39, 40]) && n.value !== S(e, n) && i(e, n, !1, n.validationDelay)
        })
      },
      b = function (t, e) {
        M(t, e).off(".yiiActiveForm")
      },
      i = function (t, e, n, i) {
        var s = t.data("yiiActiveForm");
        n && (e.status = 2), u.each(s.attributes, function () {
          this.value !== S(t, this) && (this.status = 2, n = !0)
        }), n && (void 0 !== s.settings.timer && clearTimeout(s.settings.timer), s.settings.timer = window.setTimeout(function () {
          s.submitting || t.is(":hidden") || (u.each(s.attributes, function () {
            2 === this.status && (this.status = 3, t.find(this.container).addClass(s.settings.validatingCssClass))
          }), v.validate.call(t))
        }, i || 200))
      },
      w = function () {
        var t = [];
        return t.add = function (t) {
          this.push(new u.Deferred(t))
        }, t
      },
      x = ["action", "target", "method", "enctype"],
      _ = function (t) {
        for (var e = {}, n = 0; n < x.length; n++) e[x[n]] = t.attr(x[n]);
        return e
      },
      D = function (t, e, n) {
        var i = t.data("yiiActiveForm");
        if (void 0 === i) return !1;
        if (n) {
          var s = [];
          if (u.each(i.attributes, function () {
              u(this.input).is(":disabled") || this.cancelled || !T(t, this, e) || s.push(this)
            }), t.trigger(o, [e, s]), C(t, e), s.length) {
            if (i.settings.scrollToError) {
              var r = t.find(u.map(s, function (t) {
                return t.input
              }).join(",")).first().closest(":visible").offset().top - i.settings.scrollToErrorOffset;
              r < 0 ? r = 0 : r > u(document).height() && (r = u(document).height());
              var a = u(window).scrollTop();
              (r < a || r > a + u(window).height()) && u(window).scrollTop(r)
            }
            i.submitting = !1
          } else i.validated = !0, i.submitObject && function (t, e) {
            for (var n = 0; n < x.length; n++) {
              var i = e.attr("form" + x[n]);
              i && t.attr(x[n], i)
            }
          }(t, i.submitObject), t.submit(), i.submitObject && function (t) {
            for (var e = t.data("yiiActiveForm"), n = 0; n < x.length; n++) t.attr(x[n], e.options[x[n]] || null)
          }(t)
        } else u.each(i.attributes, function () {
          this.cancelled || 2 !== this.status && 3 !== this.status || T(t, this, e)
        });
        g(t)
      },
      k = function (t) {
        var e = t.data("yiiActiveForm").submitObject || t.find(":submit:first");
        if (e.length && "submit" == e.attr("type") && e.attr("name")) {
          var n = u('input[type="hidden"][name="' + e.attr("name") + '"]', t);
          n.length ? n.attr("value", e.attr("value")) : u("<input>").attr({
            type: "hidden",
            name: e.attr("name"),
            value: e.attr("value")
          }).appendTo(t)
        }
      },
      T = function (t, e, n) {
        var i = t.data("yiiActiveForm"),
          s = M(t, e),
          r = !1;
        if (u.isArray(n[e.id]) || (n[e.id] = []), e.status = 1, s.length) {
          r = 0 < n[e.id].length;
          var a = t.find(e.container),
            o = a.find(e.error);
          $(t, e, r);
          var l = "input" === i.settings.validationStateOn ? s : a;
          r ? (e.encodeError ? o.text(n[e.id][0]) : o.html(n[e.id][0]), l.removeClass(i.settings.validatingCssClass + " " + i.settings.successCssClass).addClass(i.settings.errorCssClass)) : (o.empty(), l.removeClass(i.settings.validatingCssClass + " " + i.settings.errorCssClass + " ").addClass(i.settings.successCssClass)), e.value = S(t, e)
        }
        return t.trigger(d, [e, n[e.id]]), r
      },
      C = function (t, e) {
        var n = t.data("yiiActiveForm"),
          i = t.find(n.settings.errorSummary),
          s = i.find("ul").empty();
        i.length && e && (u.each(n.attributes, function () {
          if (u.isArray(e[this.id]) && e[this.id].length) {
            var t = u("<li/>");
            n.settings.encodeErrorSummary ? t.text(e[this.id][0]) : t.html(e[this.id][0]), s.append(t)
          }
        }), i.toggle(0 < s.find("li").length))
      },
      S = function (t, e) {
        var n = M(t, e),
          i = n.attr("type");
        if ("checkbox" !== i && "radio" !== i) return n.val();
        var s = n.filter(":checked");
        return s.length || (s = t.find('input[type=hidden][name="' + n.attr("name") + '"]')), s.val()
      },
      M = function (t, e) {
        var n = t.find(e.input);
        return n.length && "div" === n[0].tagName.toLowerCase() ? n.find("input") : n
      },
      $ = function (t, e, n) {
        e.updateAriaInvalid && t.find(e.input).attr("aria-invalid", n ? "true" : "false")
      }
  }(window.jQuery), Storage = {
    available: !1,
    init: function (t) {
      this.available = this._storageAvailable("localStorage"), t && this.available && localStorage.clear()
    },
    _storageAvailable: function (t) {
      try {
        var e = window[t],
          n = "__storage_test__";
        return e.setItem(n, n), e.removeItem(n), !0
      } catch (t) {
        return t instanceof DOMException && (22 === t.code || 1014 === t.code || "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && 0 !== e.length
      }
    },
    push: function (t, e) {
      return !!this.available && (localStorage.setItem(t, JSON.stringify(e)), !0)
    },
    get: function (t) {
      return this.available ? JSON.parse(localStorage.getItem(t)) : void 0
    }
  }, Storage.init(), Notify = {
    show: function (t) {
      $.notify({
        message: t.message
      }, {
        type: t.type || "danger"
      })
    }
  },
  function () {
    "use strict";
    var s = "news.rating";
    $(document).on("click", ".rating-controls .control", function () {
      var e = $(this).closest(".comment-item"),
        t = $(this).data("value"),
        n = e.data("commentId"),
        i = Storage.get(s);
      void 0 !== i && ((i = i || {})[n] ? Notify.show({
        message: "Вы уже оценивали этот комментарий"
      }) : (i[n] = 1, Storage.push(s, i) && $.post("/site/rate", {
        comment: n,
        value: t
      }, function (t) {
        e.find(".value").text(t.rating), Notify.show(t)
      }, "json")))
    })
  }(), window.initTooltips = function () {
    return $("[data-toggle=tooltip]").tooltip(), $("[data-toggle=ajax-tooltip]").tooltip({
      html: !0,
      trigger: "manual",
      container: ".online"
    }).on({
      mouseenter: function () {
        var e = $(this);
        void 0 === e.data("fetched") ? (e.data("fetched", !0), e.attr("data-original-title", "Loading...").tooltip("show"), $.ajax({
          url: e.data("href"),
          success: function (t) {
            e.attr("data-original-title", t), $("#" + e.attr("aria-describedby")).is(":visible") && e.tooltip("show")
          },
          dataType: "html"
        })) : $(this).tooltip("show")
      },
      mouseleave: function () {
        $(this).tooltip("hide")
      }
    }), window
  }, window.initSortableTable = function () {
    return $(".table-sortable").stupidtable(), window
  }, window.updatePageElements = function () {
    return $("[data-on-load]").each(function () {
      var e = $(this),
        n = $.extend({
          method: "post",
          dataType: "json"
        }, e.data()),
        t = window.location.hash.split(/^#([a-z-_]+)\/([\d-]+)$/g);
      4 === t.length && (n.data = {
        competition: t[1],
        season: t[2]
      }), $.ajax(n).done(function (t) {
        "json" == n.dataType && "success" == t.result ? (e.html(t.content), window.initTooltips().initSortableTable()) : "html" == n.dataType && e.html(t)
      })
    }), window
  }, $(document).ready(function () {
    window.updatePageElements().initTooltips().initSortableTable()
  }).on("click", "#comment-next", function (t) {
    t.stopPropagation();
    var e = $(this);
    return $.get($(this).attr("href"), function (t) {
      e.parent().replaceWith(t)
    }), !1
  }).on("click", ".team-tabs li a", function (t) {
    t.preventDefault(), $(this).tab("show")
  }).on("mouseenter", ".navbar-nav .dropdown", function () {
    768 < $(window).width() && $(this).addClass("open")
  }).on("mouseleave", ".navbar-nav .dropdown", function () {
    768 < $(window).width() && $(this).removeClass("open").find("a").blur()
  }).on("click", '[data-toggle="popover"]', function () {
    $(this).popover("show")
  }).on("click", ".smiles-container img", function () {
    var t = $(this).closest("form").find("textarea"),
      e = t.prop("selectionStart"),
      n = t.prop("selectionEnd");
    console.log(e, n);
    var i = t.val();
    t.val(i.substring(0, e) + $(this).data("code") + i.substring(n))
  }).on("click", ".comment-delete", function () {
    0 != $("meta[name=user]").length && $.ajax({
      sync: !0,
      data: $(this).closest(".comment-item").data(),
      type: "POST",
      url: "/site/commentdelete",
      cache: !1,
      dataType: "script"
    })
  }).on("click", ".comment-reply", function () {
    if (0 == $("meta[name=user]").length) $("#register").modal();
    else {
      var t = $(this).closest(".comment-item").data(),
        e = $("#comment-form").html();
      $(".comment-footer + .comment-form").remove(), $(this).closest(".comment-footer").after(e), $(".comment-footer + .comment-form input[name=parent_id]").val(t.commentId)
    }
  }).on("submit", ".comment-form", function (t) {
    t.preventDefault();
    var e = $(this).serialize();
    $.ajax({
      sync: !0,
      data: e,
      type: "POST",
      url: $(this).attr("action"),
      cache: !1,
      dataType: "script"
    })
  }).on("beforeSubmit", "#registration-form", function (t, e, n) {
    var i = $(this),
      s = i.serialize();
    return $.ajax({
      url: i.attr("action"),
      type: "POST",
      data: s,
      dataType: "json",
      success: function (t) {
        i.addClass(t.success).html(t.message), i[0].reset()
      },
      error: function (t, e) {
        alert(e)
      }
    }), !1
  }), $(window).on("hashchange", function () {
    window.updatePageElements()
  }),
  function () {
    var n = {
      selector: "nav.navbar",
      state: 0,
      navContainer: null,
      navContainerWidth: null,
      init: function () {
        var t = $(this.selector);
        return this.navContainer = t.parent(), this.navContainerWidth = this.navContainer.css("width"), this.navContainer.css({
          "padding-top": t.css("height"),
          position: "relative"
        }), t.css({
          position: "absolute",
          left: 0,
          top: 0,
          width: this.navContainer.css("width"),
          margin: 0
        }), this
      },
      apply: function (t) {
        switch (this.state = t) {
          case 0:
            $(this.selector).css({
              position: "absolute",
              left: 0
            });
            break;
          case 1:
            $(this.selector).css({
              position: "fixed",
              left: this.navContainer.offset().left + "px"
            })
        }
      },
      traceScroll: function () {
        var t = document.body.scrollTop || document.documentElement.scrollTop,
          e = n.navContainer.offset().top;
        0 == n.state && e < t ? n.apply(1) : 1 == n.state && t < e && n.apply(0)
      },
      traceSize: function () {
        n.navContainerWidth != n.navContainer.css("width") && (n.navContainerWidth = n.navContainer.css("width"), $(n.selector).css("width", n.navContainerWidth))
      }
    };
    n.init().traceScroll(), window.onscroll = n.traceScroll, $(window).on("resize", n.traceSize)
  }(), $(".match-stat-table .item").each(function (t, e) {
    var n = $(e),
      i = n.data(),
      s = i.left + i.right;
    if (s) {
      var r = 100 * i.left / s + "%",
        a = 100 * i.right / s + "%";
      document.styleSheets[0].insertRule(".match-stat-table .item:nth-child(" + (1 + t) + "):before{width:" + r + " !important}", 0), document.styleSheets[0].insertRule(".match-stat-table .item:nth-child(" + (1 + t) + "):after{width:" + a + "  !important}", 0), n.append('<span class="left-data">' + i.left + "</span>"), n.append('<span class="right-data">' + i.right + "</span>")
    }
  }),
  function () {
    var n = {
      container: ".online-pagination",
      currentActiveTab: null,
      section: null,
      loadUrl: "/ajax/online",
      init: function () {
        this.section = $(this.container).closest("section"), $(this.container + " [data-toggle=datepicker]").datepicker({
          autoclose: !0,
          orientation: "bottom right",
          todayHighlight: !0,
          language: "ru"
        }).on("changeDate", function (t) {
          n.selectTab($(this));
          var e = moment($(this).datepicker("getDate")).format("YYYY-MM-DD");
          n.load(e)
        }), $(this.container + " a").on("click", function (t) {
          t.preventDefault();
          var e = $(t.target);
          n.selectTab(e), n.load(e.data("date"))
        })
      },
      selectTab: function (t) {
        $(this.container + ">.pill-button").removeClass("active"), t.addClass("active")
      },
      load: function (t) {
        this.section.addClass("loading"), $.get(this.loadUrl, {
          date: t,
          advert: this.section.data("advert"),
          logo: this.section.data("logo")
        }, function (t) {
          t.result && ($("section.online .online-results").replaceWith(t.html), window.initTooltips())
        }, "json").always(function () {
          n.section.removeClass("loading")
        })
      }
    };
    n.init()
  }(),
  function () {
    var i = {
      container: ".frontpage-table-menu",
      flagSelector: ".js-country-selector",
      champSelector: ".js-champ-select",
      country: null,
      competition: null,
      section: null,
      loadUrl: "/ajax/champtable",
      attachEvents: function () {
        $(this.container + " " + this.flagSelector + " a").on("click", function (t) {
          return i.country = $(this).attr("href"), i.competition = null, i.load(), $(i.container + " " + i.flagSelector).dropdown("toggle"), $(i.container + " .dropdown-toggle i").attr("class", $(this).find("i").attr("class")), !1
        }), $(document).on("change", this.container + " " + this.champSelector, function () {
          i.competition = $(this).val(), i.load()
        })
      },
      init: function () {
        this.country = $(this.container + " " + this.flagSelector + " a:eq(0)").attr("href"), this.competition = $(this.container + " " + this.champSelector + " option:eq(0)").val()
      },
      load: function (t) {
        $(i.container).addClass("loading"), $.post(this.loadUrl, {
          country: this.country,
          competition: this.competition
        }, function (t) {
          if (t.competitions) {
            var e = [];
            for (var n in t.competitions) e.push('<option value="' + n + '">' + t.competitions[n] + "</option>");
            $(i.container + " " + i.champSelector).html(e.join(""))
          }
          t.html && $(i.container + " .competition-table").replaceWith($(t.html).find(".competition-table")), i.init()
        }, "json").always(function () {
          $(i.container).removeClass("loading")
        })
      }
    };
    i.init(), i.attachEvents()
  }(),
  function () {
    "use strict";
    $("[data-toggler=control]").each(function () {
      $(this).on("click", function (t) {
        t.preventDefault();
        var e = $(this).parent("[data-toggler=container]");
        !0 === e.hasClass("opened") ? e.removeClass("opened") : e.addClass("opened")
      })
    });
    $("[data-toggle=tooltip]").tooltip();
    var t = $(".shedule-table-container");
    0 == $(".shedule-table-container").find(".tour:not(.hidden)").find(".match[data-ended=1]").length && t.find(".tour.hidden").last().removeClass("hidden");
    t.find(".tour");
    var e = t.find(".tour.hidden");
    e.length && ($(e[e.length - 1]).removeClass("hidden"), t.css({
      position: "relative"
    }), t.prepend('<a class="black fakeLink more-matches">Все матчи турнира</a>'), t.append('<a class="black fakeLink more-matches">Все матчи турнира</a>'), $(document).on("click", ".more-matches", function (t) {
      t.preventDefault(), e.removeClass("hidden"), $(".shedule-table-container").find(".more-matches").remove()
    }))
  }();