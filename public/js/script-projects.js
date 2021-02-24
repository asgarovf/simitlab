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

$("#plus1").click(() => {
  if ($("#plus1").hasClass("p-active")) {
    $("#plus1").removeClass("p-active");
    $("#proj1").slideUp();
  } else {
    $("#plus1").addClass("p-active");
    $("#proj1").slideDown();
  }
});

$("#plus2").click(() => {
  if ($("#plus2").hasClass("p-active")) {
    $("#plus2").removeClass("p-active");
    $("#proj2").slideUp();
  } else {
    $("#plus2").addClass("p-active");
    $("#proj2").slideDown();
  }
});

$("#plus3").click(() => {
  if ($("#plus3").hasClass("p-active")) {
    $("#plus3").removeClass("p-active");
    $("#proj3").slideUp();
  } else {
    $("#plus3").addClass("p-active");
    $("#proj3").slideDown();
  }
});

$("#pastPlus1").click(() => {
  if ($("#pastPlus1").hasClass("p-active")) {
    $("#pastPlus1").removeClass("p-active");
    $("#pastProj1").slideUp();
  } else {
    $("#pastPlus1").addClass("p-active");
    $("#pastProj1").slideDown();
  }
});

$("#pastPlus2").click(() => {
  if ($("#pastPlus2").hasClass("p-active")) {
    $("#pastPlus2").removeClass("p-active");
    $("#pastProj2").slideUp();
  } else {
    $("#pastPlus2").addClass("p-active");
    $("#pastProj2").slideDown();
  }
});

$("#pastPlus3").click(() => {
  if ($("#pastPlus3").hasClass("p-active")) {
    $("#pastPlus3").removeClass("p-active");
    $("#pastProj3").slideUp();
  } else {
    $("#pastPlus3").addClass("p-active");
    $("#pastProj3").slideDown();
  }
});

$("#pastPlus4").click(() => {
  if ($("#pastPlus4").hasClass("p-active")) {
    $("#pastPlus4").removeClass("p-active");
    $("#pastProj4").slideUp();
  } else {
    $("#pastPlus4").addClass("p-active");
    $("#pastProj4").slideDown();
  }
});

$("#pastPlus5").click(() => {
  if ($("#pastPlus5").hasClass("p-active")) {
    $("#pastPlus5").removeClass("p-active");
    $("#pastProj5").slideUp();
  } else {
    $("#pastPlus5").addClass("p-active");
    $("#pastProj5").slideDown();
  }
});

$("#pastPlus6").click(() => {
  if ($("#pastPlus6").hasClass("p-active")) {
    $("#pastPlus6").removeClass("p-active");
    $("#pastProj6").slideUp();
  } else {
    $("#pastPlus6").addClass("p-active");
    $("#pastProj6").slideDown();
  }
});
$("#pastPlus7").click(() => {
  if ($("#pastPlus7").hasClass("p-active")) {
    $("#pastPlus7").removeClass("p-active");
    $("#pastProj7").slideUp();
  } else {
    $("#pastPlus7").addClass("p-active");
    $("#pastProj7").slideDown();
  }
});
$("#pastPlus8").click(() => {
  if ($("#pastPlus8").hasClass("p-active")) {
    $("#pastPlus8").removeClass("p-active");
    $("#pastProj8").slideUp();
  } else {
    $("#pastPlus8").addClass("p-active");
    $("#pastProj8").slideDown();
  }
});
$("#pastPlus9").click(() => {
  if ($("#pastPlus9").hasClass("p-active")) {
    $("#pastPlus9").removeClass("p-active");
    $("#pastProj9").slideUp();
  } else {
    $("#pastPlus9").addClass("p-active");
    $("#pastProj9").slideDown();
  }
});
$("#pastPlus10").click(() => {
  if ($("#pastPlus10").hasClass("p-active")) {
    $("#pastPlus10").removeClass("p-active");
    $("#pastProj10").slideUp();
  } else {
    $("#pastPlus10").addClass("p-active");
    $("#pastProj10").slideDown();
  }
});
$("#pastPlus11").click(() => {
  if ($("#pastPlus11").hasClass("p-active")) {
    $("#pastPlus11").removeClass("p-active");
    $("#pastProj11").slideUp();
  } else {
    $("#pastPlus11").addClass("p-active");
    $("#pastProj11").slideDown();
  }
});
$("#pastPlus12").click(() => {
  if ($("#pastPlus12").hasClass("p-active")) {
    $("#pastPlus12").removeClass("p-active");
    $("#pastProj12").slideUp();
  } else {
    $("#pastPlus12").addClass("p-active");
    $("#pastProj12").slideDown();
  }
});
$("#pastPlus13").click(() => {
  if ($("#pastPlus13").hasClass("p-active")) {
    $("#pastPlus13").removeClass("p-active");
    $("#pastProj13").slideUp();
  } else {
    $("#pastPlus13").addClass("p-active");
    $("#pastProj13").slideDown();
  }
});

$("#current").click(() => {
  $("#past").removeClass("active-right");
  $("#current").addClass("active-left");
  $("#currentSection").removeClass("d-none").addClass("#active-left");
  $("#pastSection").addClass("d-none").removeClass("#active-right");
});

$("#past").click(() => {
  $("#past").addClass("active-right");
  $("#current").removeClass("active-left");
  $("#pastSection").removeClass("d-none");
  $("#currentSection").addClass("d-none").removeClass("#active-left");
});

$("#join").click(() => {
  $("#collapse-join").addClass("visible").removeClass("not-visible");
  $("#body").removeClass("overflow-auto").addClass("overflow-hidden");
});

$("#close").click(() => {
  $("#collapse-join").removeClass("visible").addClass("not-visible");
  $("#body").removeClass("overflow-hidden").addClass("overflow-auto");
});

$(document).ready(function () {
  $(this).scrollTop(0);
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 80) {
      $("#navbar").addClass("navbar-scroll");
    } else {
      $("#navbar").removeClass("navbar-scroll");
    }
  });
});
