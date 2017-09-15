document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    if (document.getElementsByTagName('article').length > 0) {
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
              shareFB.innerHTML = '<div class="fb-share-button" data-href="https://quiplrr.herokuapp.com/quiplrr/' + resp.url + '" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fquiplrr.herokuapp.com%2F&amp;src=sdkpreparse">Share</a></div>'
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
      if(document.getElementsByTagName('article')[0].matches('.gameindex')) {
        document.getElementById('game').style.display = 'inline-block'
        var el = document.getElementById('play-button')
        score = 0
        corrected = 0
        notCorrected = 0

        var loadingButtonPrevent = function(){
          var elementTrue = document.getElementById("source-field-true")
          var elementFalse = document.getElementById("source-field-false")
          elementTrue.disabled = true;
          elementFalse.disabled = true;
          document.getElementById('quote-field').textContent = null
          setTimeout(function(){
            elementTrue.disabled = false;
            elementFalse.disabled = false;
          }, 1000);
        }

        var requestSentence = function() {
          loadingButtonPrevent()
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
              var answer_clean = document.getElementById('temp-field').textContent = null
              var realSentenceButton = document.getElementById('source-field-true')
              var wrongSentenceButton = document.getElementById('source-field-false')
              var correctnessCheck = document.getElementById('correctness-check')
              var scoreBoard = document.getElementById('game-score')
              var shareFB = document.getElementById('share-fb')
              var finishtab = document.getElementById('finish-button')
              var play_button = document.getElementById('play-button')
              var truetab = document.getElementById('source-field-true')
              var falsetab = document.getElementById('source-field-false')
              var list_quote = resp.quote + " - it was " + ((isRealSentence == true) ? "real" : "fake") + " sentence\r\n"
              var correctnessDiv = document.getElementById('correctness-section')

              document.getElementById('loader').style.display = 'none'
              correctnessDiv.style.display = 'block'
              play_button.style.display = 'none'
              document.getElementById('game-form-section').style.display = 'none'
              correctnessCheck.style.display = 'none'
              finishTab.style.display = 'inline-block'
              truetab.addEventListener('click', requestCorrectnessForTrueTab);
              falsetab.addEventListener('click', requestCorrectnessForFalseTab);
              answer.textContent = resp.quote
              wrongSentenceButton.textContent = data

              if(data === 'shakesplrr') {
                realSentenceButton.textContent = "shakespear"
              } else {
                realSentenceButton.textContent = "trump"
              }
              scoreBoard.textContent = "Your Score: " + score
            }
          };
          request.onerror = function() {
            // There was a connection error of some sort
          };
          request.send();
        }
        addEventListener('DOMContentLoaded', requestSentence())
        el.addEventListener('click', requestSentence)
        var requestCorrectnessForTrueTab = function(event) {
          var scoreBoard = document.getElementById('game-score')
          if (isRealSentence == true){
            score += 100
            scoreBoard.textContent = "Your Score: " + score
            corrected ++;
          }
          else{
            scoreBoard.textContent = "Your Score: " + score
            notCorrected++;
          }
          document.getElementById('loader').style.display = 'block'
          requestSentence()
        }
        var requestCorrectnessForFalseTab = function() {
          var scoreBoard = document.getElementById('game-score')
          if (isRealSentence == false){
            score += 100
            scoreBoard.textContent = "Your Score: " + score
            corrected ++;
          }
          else{
            scoreBoard.textContent = "Your Score: " + score
            notCorrected++;
          }
          document.getElementById('loader').style.display = 'block'
          requestSentence()
        }
        var showSummary = function(){
          var summary = document.getElementById('quote-field')
          summary.textContent = "Your answered: " + corrected + " right questions,"
          var summary1 = document.getElementById('temp-field')
          summary1.textContent = "And " + notCorrected + " wrong questions"

          var play_button = document.getElementById('play-button')
          play_button.style.display = 'inline-block'
          play_button.textContent = "Play Again!"
          var finishTab = document.getElementById('finish-button')
          finishTab.style.display = 'none'
          var correctnessDiv = document.getElementById('correctness-section')
          correctnessDiv.style.display = 'none'
          score = 0
          corrected = 0
          notCorrected = 0
          document.getElementById('game-form-section').style.display = 'block'
        }

        var finishTab = document.getElementById('finish-button')
        finishTab.addEventListener('click', showSummary)
      }
    }
  }
}
