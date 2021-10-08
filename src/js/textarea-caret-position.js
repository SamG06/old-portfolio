
/* THIS CODE IS FROM https://github.com/component/textarea-caret-position

The MIT License (MIT)

Copyright (c) 2015 Jonathan Ong me@jongleberry.com
 */

!(function () {
  var p = [
      "direction",
      "boxSizing",
      "width",
      "height",
      "overflowX",
      "overflowY",
      "borderTopWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderStyle",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "fontStyle",
      "fontVariant",
      "fontWeight",
      "fontStretch",
      "fontSize",
      "fontSizeAdjust",
      "lineHeight",
      "fontFamily",
      "textAlign",
      "textTransform",
      "textIndent",
      "textDecoration",
      "letterSpacing",
      "wordSpacing",
      "tabSize",
      "MozTabSize",
    ],
    l = "undefined" != typeof window,
    h = l && null != window.mozInnerScreenX;
  function e(e, t, o) {
    if (!l)
      throw new Error(
        "textarea-caret-position#getCaretCoordinates should only be called in a browser"
      );
    var i = (o && o.debug) || !1;
    !i ||
      ((a = document.querySelector(
        "#input-textarea-caret-position-mirror-div"
      )) &&
        a.parentNode.removeChild(a));
    o = document.createElement("div");
    (o.id = "input-textarea-caret-position-mirror-div"),
      document.body.appendChild(o);
    var n = o.style,
      r = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle,
      d = "INPUT" === e.nodeName;
    (n.whiteSpace = "pre-wrap"),
      d || (n.wordWrap = "break-word"),
      (n.position = "absolute"),
      i || (n.visibility = "hidden"),
      p.forEach(function (e) {
        var t, o, i;
        d && "lineHeight" === e
          ? "border-box" === r.boxSizing
            ? ((t = parseInt(r.height)),
              (i =
                (o =
                  parseInt(r.paddingTop) +
                  parseInt(r.paddingBottom) +
                  parseInt(r.borderTopWidth) +
                  parseInt(r.borderBottomWidth)) + parseInt(r.lineHeight)),
              (n.lineHeight =
                i < t ? t - o + "px" : t === i ? r.lineHeight : 0))
            : (n.lineHeight = r.height)
          : (n[e] = r[e]);
      }),
      h
        ? e.scrollHeight > parseInt(r.height) && (n.overflowY = "scroll")
        : (n.overflow = "hidden"),
      (o.textContent = e.value.substring(0, t)),
      d && (o.textContent = o.textContent.replace(/\s/g, " "));
    var a = document.createElement("span");
    (a.textContent = e.value.substring(t) || "."), o.appendChild(a);
    t = {
      top: a.offsetTop + parseInt(r.borderTopWidth),
      left: a.offsetLeft + parseInt(r.borderLeftWidth),
      height: parseInt(r.lineHeight),
    };
    return (
      i ? (a.style.backgroundColor = "#aaa") : document.body.removeChild(o), t
    );
  }
  "undefined" != typeof module && void 0 !== module.exports
    ? (module.exports = e)
    : l && (window.getCaretCoordinates = e);
})();
