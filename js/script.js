$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $("header").addClass("sticky");
      $(".goto").fadeIn();
    } else {
      $("header").removeClass("sticky");
      $(".goto").fadeOut();
    }
  });
  $(".goto").click(function () {
    scroll(0, 0);
  });
  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $("nav").toggleClass("active");
  });
  $(".works").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });
});
