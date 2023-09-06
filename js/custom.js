/* ============================================================
 * bootstrap-portfilter.js for Bootstrap v2.3.1
 * ============================================================*/
!function (d) { var c = "portfilter"; var b = function (e) { this.$element = d(e); this.stuff = d("[data-tag]"); this.target = this.$element.data("target") || "" }; b.prototype.filter = function (g) { var e = [], f = this.target; this.stuff.fadeOut("fast").promise().done(function () { d(this).each(function () { if (d(this).data("tag") == f || f == "all") { e.push(this) } }); d(e).show() }) }; var a = d.fn[c]; d.fn[c] = function (e) { return this.each(function () { var g = d(this), f = g.data(c); if (!f) { g.data(c, (f = new b(this))) } if (e == "filter") { f.filter() } }) }; d.fn[c].defaults = {}; d.fn[c].Constructor = b; d.fn[c].noConflict = function () { d.fn[c] = a; return this }; d(document).on("click.portfilter.data-api", "[data-toggle^=portfilter]", function (f) { d(this).portfilter("filter") }) }(window.jQuery);

/* ============================================================
   When the user clicks anywhere outside of the modal, close it
 * ============================================================*/

/* ============================================================
   Sidenav
 * ============================================================*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).on('click', function (e) {
  if ($(e.target).closest("#mySidenav, .slide-menu").length === 0) {
    document.getElementById("mySidenav").style.width = "0";
  }
});
/* ============================================================
   Onscroll
 * ============================================================*/
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// javascript Onscroll Start
/* ============================================================
   Top-Onscroll
 * ============================================================*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
    $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000"); return false }) })


/* ============================================================
   animation
 * ============================================================*/
if (screen.width > 1024) {
  AOS.init({
    easing: 'ease-in-out-sine'
  });
}
