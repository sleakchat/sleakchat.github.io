function getClientId() {
    const sleakbotScriptTag = document.querySelector('#sleakbot');
    const clientId = sleakbotScriptTag.getAttribute('user-id');
    return { clientId, btnColor };
  }
  
  function generateUniqueId() {
    var visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
      visitorId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('visitorId', visitorId);
    }
    return visitorId;
  }
  
  var iframe = document.getElementById('sleak-widget-iframe');
  var clientId = getClientId().clientId;
  var visitorId = generateUniqueId();
  iframe.src = `https://app.sleak.chat/index-mobile/?id=${clientId}&visitorId=${visitorId}`;

  function showIframeOnLoad() {
    document.addEventListener('DOMContentLoaded', function() {
      const sleakEmbeddedWidget = document.querySelector('#sleak-body-embed');
      sleakEmbeddedWidget.style.display = 'block';
    });
  }
  
  