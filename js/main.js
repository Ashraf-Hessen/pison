$(document).ready(function () {
  $(".collections-list.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.3,
        nav: false,
      },
      1000: {
        items: 2.3,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
      },
    },
  });

  $(".filter.owl-carousel").owlCarousel({
    loop: false,
    margin: 5,
    responsiveClass: true,
    responsive: {
      0: {
        items: 4,
        nav: false,
      },
      678: {
        items: 6,
        nav: false,
      },
      1000: {
        items: 11,
        nav: false,
      },
    },
  });
});
