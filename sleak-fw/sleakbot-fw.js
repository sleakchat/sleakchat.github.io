function getClientId() {
    const sleakbotScriptTag = document.querySelector('#sleakbot');
    const clientId = sleakbotScriptTag.getAttribute('user-id');
    return { clientId };
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

  function addFwStyles() {
    document.addEventListener('DOMContentLoaded', function() {
      const sleakEmbeddedWidget = document.querySelector('#sleak-body-embed');
      const sleakWidgetWrap = document.querySelector('#sleak-widgetwrap');
      const sleakWidgetClose = document.querySelector('#sleak-widget-close');
      sleakEmbeddedWidget.style.display = 'unset !imoprtant';
      sleakWidgetWrap.style.position = 'unset !important';
      sleakWidgetClose.style.visibility = 'hidden !important';
      
    });
  }
  
  addFwStyles();
