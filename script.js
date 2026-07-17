/* Snaphaus — small, dependency-free interactions */
(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  /* Mobile menu open/close */
  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("open"));
    });
  }

  /* Close the menu after tapping a link */
  if (nav) {
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setMenu(false);
    });
  }

  /* Close on Escape */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* Sticky header shadow after a little scroll */
  var lastKnown = 0, ticking = false;
  function onScroll() {
    if (header) header.classList.toggle("scrolled", lastKnown > 8);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    lastKnown = window.scrollY || window.pageYOffset;
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* Reveal-on-scroll — respects reduced-motion */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* Current year in footer */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
