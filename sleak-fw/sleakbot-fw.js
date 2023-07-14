function getClientIdFw() {
    const sleakbotScriptTagFw = document.querySelector('#sleak-fw-script');
    const clientIdFw = sleakbotScriptTagFw.getAttribute('user-id');
    return { clientIdFw };
  }
  
  function generateUniqueIdFw() {
    var visitorIdFw = localStorage.getItem('visitorIdFw');
    if (!visitorIdFw) {
      visitorIdFw = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('visitorIdFw', visitorIdFw);
    }
    return visitorIdFw;
  }
  
  var iframe = document.getElementById('sleak-fw-widget');
  var clientIdFw = getClientIdFw().clientIdFw;
  var visitorIdFw = generateUniqueIdFw();
  iframe.src = `https://app.sleak.chat/index-mobile/?id=${clientIdFw}&visitorId=${visitorIdFw}`;