function jsWebhook(webhookData, webhookURL) {
  if (document.location.href.search('gtm-msr.appspot.com') == -1) {
    var request = new XMLHttpRequest();
    request.open("POST", webhookURL);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(webhookData));
  }
}
