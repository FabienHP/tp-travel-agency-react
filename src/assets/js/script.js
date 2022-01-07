import $ from "jquery";

$(function() {

  // Menu

  if ( $( ".header__nav__burger--open" ).length ) {

    $(".header__nav__burger--open, .header__nav__burger--close").click(function() {
      $(".header__nav").toggleClass("header__nav--open");
    })

  }

  // Gallery

  if ( $( ".holiday__gallery" ).length ) {

    $(".holiday__gallery-image:gt(0)").click(function() {
      var img = $(this).find("img").attr("src");
      $(".holiday__gallery-image .holiday__gallery-overlay").removeClass("holiday__gallery-overlay--active");
      $(this).find(".holiday__gallery-overlay").addClass("holiday__gallery-overlay--active");
      $(".holiday__gallery-image:eq(0) img").attr("src", img);
    })

  }

});
