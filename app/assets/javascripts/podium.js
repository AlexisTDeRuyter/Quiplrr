$(document).ready(function () {
  function podiumAnimate() {
      $('.bronze .podium').animate({
          "height": "62px"
      }, 1500);
      $('.gold .podium').animate({
          "height": "165px"
      }, 1500);
      $('.silver .podium').animate({
          "height": "106px"
      }, 1500);
      $('.competition-container .name').delay(1000).animate({
          "opacity": "1"
      }, 500);
  }
  podiumAnimate();
});
