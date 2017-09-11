document.onreadystatechange = function () {
  if(document.getElementsByTagName('article')[0].matches('.index')) {
    if (document.readyState == "interactive") {
      var el = document.getElementById('ask-button')

      var requestSentence = function() {
        var request = new XMLHttpRequest();
        var select = document.getElementById('selector')
        var data = select.options[select.selectedIndex].value
        if (data == 'twitter-handle') {
          var handle = document.getElementById('twitter-handle-field').value
          request.open('GET', '/quiplrr?source=' + data + '&handle=' + handle, true)
        } else { request.open('GET', '/quiplrr?source=' + data, true); }
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            resp = JSON.parse(resp)
            var quote = resp.quote + '\n -' + resp.source
            var answer = document.getElementById('quote-field')
            var source = document.getElementById('source-field')
            var shareFB = document.getElementById('share-fb')
            answer.textContent = resp.quote
            source.textContent = '-' + resp.source
            shareFB.innerHTML = '<div class="fb-share-button" data-href="http://www.quiplrr.com/quiplrr/' + resp.url + '" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.quiplrr.com%2F&amp;src=sdkpreparse">Share</a></div>'
            FB.XFBML.parse(shareFB)

            document.getElementById('share-tw').innerHTML = ""
            twttr.widgets.createShareButton(
              '/quiplrr/' + resp.url,
              document.getElementById('share-tw'),
              {
                text: resp.quote + ' - ' + resp.source,
                size: "large",
                via: 'quiplrr',
                hashtags: 'quiplrr'
              }
            );
          }
        if (request.status === 422) {
          var resp = request.responseText;
          resp = JSON.parse(resp)
          alert(resp.error)
        }
        };

        request.onerror = function() {
        };

        request.send();
      }

      el.addEventListener('click', requestSentence);

      addEventListener('DOMContentLoaded', function() {
        document.getElementById('selector').onchange=twitterHandleEntry;
      },false);
    }
  }
}


