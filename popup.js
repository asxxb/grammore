// popup.js
document.getElementById('checkGrammar').addEventListener('click', function() {
    // Send a message to the content script to check grammar
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'checkGrammar' });
    });
  });
  