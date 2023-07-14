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


      const sleakEmbeddedWidget = document.querySelector('#sleak-body-embed');
      const sleakWidgetWrap = document.querySelector('#sleak-widgetwrap');
      const sleakWidgetClose = document.querySelector('#sleak-widget-close');
      sleakWidgetWrap.style.position = 'unset !important';
      sleakWidgetClose.style.visibility = 'hidden !important';
      sleakEmbeddedWidget.style.display = 'unset !important';
      console.log('Styles applied');

