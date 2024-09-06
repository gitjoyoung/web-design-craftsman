$(function () {
  var t = 0;
  function slide() {
    if (t < 2) {
      t++;
    } else {
      t = 0;
    }
    $(".slide ul").animate({ top: t * 300 * -1 + "px" }, 1000);
  }
  setInterval(slide, 2000);
});
