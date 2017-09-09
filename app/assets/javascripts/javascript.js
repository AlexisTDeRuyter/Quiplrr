document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      var el = document.getElementById('ask-button')

      var requestSentence = function() {
        var request = new XMLHttpRequest();
        request.open('GET', '/quiplr', true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            resp = JSON.parse(resp)
            var quote = resp.quote + '\n -' + resp.source
            console.log(quote)
            var answer = document.getElementById('quote-field')
            var source = document.getElementById('source-field')
            var shareFB = document.getElementById('share-fb')
            console.log(shareFB)
            answer.textContent = resp.quote
            source.textContent = '-' + resp.source
            shareFB.innerHTML = `<div class="fb-share-button" data-href="http://www.quiplrr.com/quiplr/${resp.url}" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.quiplrr.com%2F&amp;src=sdkpreparse">Share</a></div>`
            FB.XFBML.parse(shareFB)
          }
        };

        request.onerror = function() {
          // There was a connection error of some sort
        };

        request.send();
      }

      el.addEventListener('click', requestSentence);
    }
}
