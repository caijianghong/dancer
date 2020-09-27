(function () {
  'use strict';
  $('div.playlist').on('click', function () {
    $('div.playlist').hide().next().show();
  });
  $('.foldlist div').on('click', 'img', function () {
    $('.foldlist').hide().prev().show();
  });
  $('.title p').on('click', function () {
    $(".videomask").show();
    // document.documentElement.style.overflow='hidden';
    $("html").css("overflow", "hidden");
    $("video").fadeIn(2000);
  });
}());