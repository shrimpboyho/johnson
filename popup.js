function click(e) {
  var value = document.querySelectorAll('input')[0].value;
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + value + "'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelectorAll('button')[0];
  button.addEventListener('click', click);
});
