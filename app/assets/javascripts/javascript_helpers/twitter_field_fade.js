function fadeIn(el) {
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
  var last = +new Date();
  var tick = function() {
    el.style.opacity = el.style.opacity - (new Date() - last) / 400;
    last = +new Date();

    if (-el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

function twitterHandleEntry(event) {
  if (event.target.value == "twitter-handle") {
    fadeIn(document.getElementById("twitter-handle-hook"))
  } else {
    fadeOut(document.getElementById("twitter-handle-hook"))
  }
}

