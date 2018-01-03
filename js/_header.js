// This is just a sample script. Paste your real code (javascript or HTML) here.
! function(e) {
    "use strict";
    var a = e("body"),
        s = e(".main_site_header");
    dh.page.model.fixed_header_container && (s = e(dh.page.model.fixed_header_container)), dh.page.model.scrollable_content && (a = e(dh.page.model.scrollable_content));
    var o, d, r = function() {
            a.removeClass("_header-stick").css("padding-top", 0);
            var e = s.height();
            a.addClass("_header-stick").css("padding-top", e), o = !1
        },
        l = 0,
        t = function(s) {
            var o = e(window).scrollTop();
            o <= 0 ? a.addClass("at-top").removeClass("has-scrolled") : o < l ? a.removeClass("has-scrolled at-top") : a.addClass("has-scrolled").removeClass("at-top"), l = o
        };
    e(window).bind("header-adjust", r).bind("resize scroll", t).bind("resize", function() {
        o || (clearTimeout(d), d = setTimeout(r, 100))
    }), r(), t()
}(window.jQuery);