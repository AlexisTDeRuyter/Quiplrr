document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    if(document.getElementsByTagName('article')[0].matches('.index')) {
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
    }
    if(document.getElementsByTagName('article')[0].matches('.gameindex')) {
      var el = document.getElementById('play-button')

      score = 100
      var requestSentence = function() {
        var request = new XMLHttpRequest();
        var select = document.getElementById('selector')
        var data = select.options[select.selectedIndex].value
        request.open('GET', '/quiplrr/games/generate?source=' + data, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            resp = JSON.parse(resp)
            isRealSentence = resp.is_real_sentence
            var quote = resp.quote + '\n -' + resp.source
            var answer = document.getElementById('quote-field')
            var realSentenceButton = document.getElementById('source-field-true')
            var wrongSentenceButton = document.getElementById('source-field-false')
            var correctnessCheck = document.getElementById('correctness-check')
            var scoreBoard = document.getElementById('score-board')
            var shareFB = document.getElementById('share-fb')
            correctnessCheck.style.display = 'none'
            wrongSentenceButton.style.display = 'block'
            realSentenceButton.style.display = 'block'
            truetab.addEventListener('click', requestCorrectnessForTrueTab);
            falsetab.addEventListener('click', requestCorrectnessForFalseTab);
            answer.textContent = resp.quote
            realSentenceButton.textContent = "it is real sentence"
            wrongSentenceButton.textContent = "it is not real sentence"
            scoreBoard.textContent = score
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
        };
        request.onerror = function() {
          // There was a connection error of some sort
        };
        request.send();
      }
      el.addEventListener('click', requestSentence);

      var requestCorrectnessForTrueTab = function(event) {
        var correctnessCheck = document.getElementById('correctness-check')
        var wrongSentenceButton = document.getElementById('source-field-false')
        var realSentenceButton = document.getElementById('source-field-true')
        var scoreBoard = document.getElementById('score-board')
        if (isRealSentence == true){
          correctnessCheck.style.display = 'block'
          correctnessCheck.textContent = "correct!"
          score += 10
          scoreBoard.textContent = score
        }
        else{
          correctnessCheck.style.display = 'block'
          correctnessCheck.textContent = "wrong!"
          score -= 5
          scoreBoard.textContent = score
        }
        wrongSentenceButton.style.display = 'none'
        realSentenceButton.style.display = 'none'
        truetab.removeEventListener('click', requestCorrectnessForTrueTab);
        falsetab.removeEventListener('click', requestCorrectnessForFalseTab);
      }

      var requestCorrectnessForFalseTab = function() {
        var correctnessCheck = document.getElementById('correctness-check')
        var wrongSentenceButton = document.getElementById('source-field-false')
        var realSentenceButton = document.getElementById('source-field-true')
        var scoreBoard = document.getElementById('score-board')
        if (isRealSentence == false){
          correctnessCheck.style.display = 'block'
          correctnessCheck.textContent = "correct!"
          score += 10
          scoreBoard.textContent = score
        }
        else{
          correctnessCheck.style.display = 'block'
          correctnessCheck.textContent = "wrong!"
          score -= 5
          scoreBoard.textContent = score
        }
        wrongSentenceButton.style.display = 'none'
        realSentenceButton.style.display = 'none'
        truetab.removeEventListener('click', requestCorrectnessForTrueTab);
        falsetab.removeEventListener('click', requestCorrectnessForFalseTab);
      }

      var truetab = document.getElementById('source-field-true')
      var falsetab = document.getElementById('source-field-false')
      truetab.addEventListener('click', requestCorrectnessForTrueTab);
      falsetab.addEventListener('click', requestCorrectnessForFalseTab);

      addEventListener('DOMContentLoaded', function() {
        document.getElementById('selector').onchange=twitterHandleEntry;
      },false);
    }
  }
}


