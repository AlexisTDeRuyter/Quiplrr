document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      var el = document.getElementById('ask-button')

      var requestSentence = function() {
        var request = new XMLHttpRequest();
        request.open('GET', '/quiplr', true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            var answer = document.getElementById('output-field')
            answer.textContent = resp
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
