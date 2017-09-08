document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      var el = document.getElementById('ask-button')

      var requestSentence = function() {
        console.log('triggered')
        var request = new XMLHttpRequest();
        request.open('GET', '/quiplr', true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            var resp = request.responseText;
            var answer = document.getElementById('output-field')
            answer.textContent = resp
          } else {
            // We reached our target server, but it returned an error

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
