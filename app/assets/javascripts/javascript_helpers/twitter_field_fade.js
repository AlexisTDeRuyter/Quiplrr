function fadeIn(el) {
  el.style.display = 'inline-block'
  el.style.opacity = 0;
  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

function fadeOut(el) {
  if (el.style.display === 'inline-block' ) {
    var last = +new Date();
    var tick = function() {
      el.style.opacity = el.style.opacity - (new Date() - last) / 400;
      last = +new Date();

      if (-el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };

    tick();
    setTimeout(function (){ el.style.display = 'none' }, 1000)
  }
}

function twitterHandleEntry(event) {
  if (event.target.value == "twitter-handle") {
    fadeIn(document.getElementById("twitter-handle-hook"))
  } else {
    fadeOut(document.getElementById("twitter-handle-hook"))
  }
}

