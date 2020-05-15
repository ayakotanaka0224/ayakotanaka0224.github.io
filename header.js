$(function () {
  $(".menu").on("click", function () {
    if ($(".menu-wrapper .component").hasClass("open")) {
      $(".menu-wrapper .component").removeClass("open");
      $(".menu-wrapper .component").addClass("close");
    } else if ($(".menu-wrapper .component").hasClass("close")) {
      $(".menu-wrapper .component").addClass("open");
      $(".menu-wrapper .component").removeClass("close");
    } else {
      $(".menu-wrapper .component").addClass("open");
      $(".menu-wrapper .component").addClass("second");
    }
  });
});
