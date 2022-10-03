(() => {
  var e = {
      225: (e) => {
        function t() {}
        (t.prototype.result = function (e) {
          document.getElementById(e).style.display = "block";
        }),
          (t.prototype.success = function () {
            this.result("result-ok"), this.hide();
          }),
          (t.prototype.hide = function () {
            setTimeout(function () {
              window.close();
            }, 3e3);
          }),
          (e.exports = t);
      },
      296: (e) => {
        function t() {}
        (t.prototype.escapeString = function (e) {
          return (
            ["[", "]", "(", ")", "_"].forEach((t) => {
              e = e.replaceAll(t, "\\" + t);
            }),
            e
          );
        }),
          (t.prototype.collapseString = function (e) {
            return (e = e.replace(/(\r\n|\n|\r)/gm, " ")).replace(/\s+/g, " ");
          }),
          (t.prototype.link = function (e, t) {
            return (
              "[" + this.escapeString(e) + "](" + this.escapeString(t) + ")"
            );
          }),
          (t.prototype.quote = function (e) {
            return "> " + this.escapeString(this.collapseString(e));
          }),
          (t.prototype.quoteLink = function (e, t, r) {
            return this.quote(e) + " - " + this.link(t, r);
          }),
          (e.exports = t);
      },
    },
    t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var c = (t[o] = { exports: {} });
    return e[o](c, c.exports, r), c.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var o in t)
        r.o(t, o) &&
          !r.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = r(296),
        t = r.n(e),
        o = r(225),
        n = r.n(o);
      const c = new (t())(),
        i = new (n())();
      let l = { title: "", url: "", selectedText: "" };
      function u() {
        return window.getSelection().toString();
      }
      async function s(e) {
        l.selectedText = e[0].result;
        let t = "";
        t =
          "" === l.selectedText ||
          void 0 === l.selectedText ||
          null === l.selectedText
            ? c.link(l.title, l.url)
            : c.quoteLink(l.selectedText, l.title, l.url);
        try {
          await navigator.clipboard.writeText(t), i.success();
        } catch (e) {
          console.log("Clipboard error (will try legacy)", e),
            (function (e) {
              var t = document.createElement("textarea");
              (t.value = e),
                document.body.appendChild(t),
                t.focus(),
                t.select();
              try {
                var r = document.execCommand("copy");
                document.body.removeChild(t),
                  r ? i.success() : i.result("error-copy");
              } catch (e) {
                i.result("error-copy"),
                  console.error("Legacy clipboard error", e);
              }
            })(t);
        }
      }
      window.onload = function () {
        !(async function () {
          let [e] = await chrome.tabs.query({ active: !0, currentWindow: !0 });
          if (
            ((l.title = e.title),
            (l.url = e.url),
            "http" !== e.url.substr(0, 4))
          )
            return (
              i.result("error-denied"),
              void console.error("http and https only")
            );
          await chrome.scripting.executeScript(
            { target: { tabId: e.id }, func: u },
            s
          );
        })();
      };
    })();
})();
