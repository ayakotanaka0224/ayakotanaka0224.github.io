window.onload = function () {
  $(".menu").on("click", function () {
    if ($("header .component").hasClass("open")) {
      $("header .component").removeClass("open");
      $("header .component").addClass("close");
    } else if ($("header .component").hasClass("close")) {
      $("header .component").addClass("open");
      $("header .component").removeClass("close");
    } else {
      $("header .component").addClass("open");
    }
  });
};
