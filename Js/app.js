$(document).ready(function () {
  // HERO SLIDER
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: true,
      },
      768: {
        nav: true,
      },
    },
  });
  // PROJECT SLIDER
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    margin: 24,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
        dots: true,
      },
    },
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 800,
  });
});
