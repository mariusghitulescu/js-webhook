function jsWebhook(webhookData, webhookURL) {
  if (document.location.href.search('gtm-msr.appspot.com') == -1) {
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })
    .then(response => {
      if (!response.ok) {
        console.error('Webhook request failed with status:', response.status, response.statusText);
      }
      // You might want to handle the response further if needed
    })
    .catch(error => {
      console.error('Error sending webhook request:', error);
    });
  }
}
