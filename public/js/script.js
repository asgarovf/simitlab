$("#nav-collapse-button").click(() => {
  if ($("#nav-collapse-button").hasClass("nav-active")) {
    $("#nav-collapse-button").removeClass("nav-active");
    $("#collapse-navbar").removeClass("visible").addClass("not-visible");
    $("#bars").removeClass("fa-times").addClass("fa-bars");
    $("#body").removeClass("overflow-hidden").addClass("overflow-auto");
  } else {
    $("#nav-collapse-button").addClass("nav-active");
    $("#collapse-navbar").removeClass("not-visible").addClass("visible");
    $("#bars").removeClass("fa-bars").addClass("fa-times");
    $("#body").addClass("overflow-hidden").removeClass("overflow-auto");
  }
});

$(document).ready(function () {
  $(this).scrollTop(0);
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 50) {
      $("#navbar").addClass("navbar-scroll");
    } else {
      $("#navbar").removeClass("navbar-scroll");
    }
  });
});

//OWL

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});
