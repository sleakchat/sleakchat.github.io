function getClientId() {
  const sleakbotScriptTag = document.querySelector('#sleakbot');
  const clientId = sleakbotScriptTag.getAttribute('user-id');
  const btnColor = sleakbotScriptTag.getAttribute('btn-color');
  return { clientId, btnColor };
}

// Set the background color of #sleak-btn-container to the value of the 'btn-color' attribute
var sleakBtnContainer = document.querySelector('#sleak-btn-container');
var btnColor = getClientId().btnColor;
var sleakButtonWrap = document.querySelector('#sleak-buttonwrap');
sleakBtnContainer.style.backgroundColor = btnColor;
sleakButtonWrap.style.opacity = '0'; // Set initial opacity to 0
sleakButtonWrap.style.transition = 'opacity 0.2s ease'; // Add transition effect

// Delay setting the opacity to 1 to trigger the fade-in effect
setTimeout(function() {
  sleakButtonWrap.style.opacity = '1';
}, 500);

function generateUniqueId() {
  var visitorId = localStorage.getItem('visitorId');
  if (!visitorId) {
    visitorId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('visitorId', visitorId);
  }
  return visitorId;
}

var iframe = document.getElementById('sleak-widget-iframe');
var iframe2 = document.getElementById('sleak-popup-iframe');
var clientId = getClientId().clientId;
var visitorId = generateUniqueId();
iframe.src = `https://app.sleak.chat/?id=${clientId}&visitorId=${visitorId}`;
iframe2.src = `https://app.sleak.chat/popup/?id=${clientId}&visitorId=${visitorId}`;

// Change element visibility on button click
  // Get references to the elements
  const sleakClosedWidget = document.querySelector('#sleak-widget-closed');
  const sleakOpenWidget = document.querySelector('#sleak-widget-open');
  const sleakEmbeddedWidget = document.querySelector('#sleak-body-embed');
  const sleakBgOverlay = document.querySelector('#sleak-bgoverlay');
  const sleakEmbeddedPopup = document.querySelector('#sleak-popup-embed');
  const sleakNotification = document.querySelector('#sleak-btn-notification');

  // Add a click event listener to the closed widget
  sleakClosedWidget.addEventListener('click', function() {
    // Set the display properties of the elements
    sleakClosedWidget.style.display = 'none';
    sleakOpenWidget.style.display = 'block';
    sleakEmbeddedWidget.style.display = 'flex';
    sleakBgOverlay.style.display = 'block';
    sleakEmbeddedPopup.style.display = 'none';
      sleakEmbeddedWidget.style.opacity = '0'; // Set initial opacity to 0
      sleakEmbeddedWidget.style.transition = 'opacity 0.2s ease'; // Add transition effect
      // Delay setting the opacity to 1 to trigger the fade-in effect
      setTimeout(function() {
        sleakEmbeddedWidget.style.opacity = '1';
      }, 50);
  });

  // Add a click event listener to the open widget
  sleakOpenWidget.addEventListener('click', function() {
    // Set the display properties of the elements
    sleakClosedWidget.style.display = 'block';
    sleakOpenWidget.style.display = 'none';
    sleakEmbeddedWidget.style.display = 'none';
    sleakBgOverlay.style.display = 'none';
    sleakEmbeddedPopup.style.display = 'none';
  });

    // Add a click event listener to the open widget
  sleakEmbeddedPopup.addEventListener('click', function() {
    sleakClosedWidget.style.display = 'none';
    sleakOpenWidget.style.display = 'block';
    sleakEmbeddedWidget.style.display = 'flex';
    sleakBgOverlay.style.display = 'block';
    sleakEmbeddedPopup.style.display = 'none';
      sleakEmbeddedWidget.style.opacity = '0'; // Set initial opacity to 0
      sleakEmbeddedWidget.style.transition = 'opacity 0.2s ease'; // Add transition effect
      // Delay setting the opacity to 1 to trigger the fade-in effect
      setTimeout(function() {
        sleakEmbeddedWidget.style.opacity = '1';
      }, 50);
    });

  // function for playing chime
  function playChime() {
    var sleakChime = document.getElementById("sleak-chime");
    if (sleakChime) {
      sleakChime.play();
    }

  }

  // show popup 6 secs after page load
  window.onload = function() {
  setTimeout(function() {
    var sleakBodyEmbed = document.getElementById("sleak-body-embed");
    var sleakPopupOpen = document.getElementById("sleak-popup-embed");
    var sleakChime = document.getElementById("sleak-chime");
    
    if (sleakBodyEmbed && sleakPopupOpen) {
      if (sleakBodyEmbed.style.display !== "flex") {
        sleakPopupOpen.style.display = "flex";
        console.log("Popup display changed to flex");
        playChime();

        sleakPopupOpen.style.opacity = '0'; // Set initial opacity to 0
        sleakPopupOpen.style.transform = 'translateY(20px)'; // Initial vertical translation
        sleakPopupOpen.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Add transition effects

        // Delay setting the opacity and transform to 1 to trigger the fade-in-up effect
        setTimeout(function() {
          sleakPopupOpen.style.opacity = '1';
          sleakPopupOpen.style.transform = 'translateY(0)';
        }, 50);

      } else {
        console.log("Popup cannot open when sleak-body-embed is displayed");
      }
    }
  }, 6000);
};

    // script for showing and hiding background overlay on mobile
    var sleakWidgetOpened = document.getElementById("sleak-widget-open");
    var sleakWidgetClosed = document.getElementById("sleak-widget-closed");

    if (window.matchMedia("(max-width: 768px)").matches) {
      sleakWidgetOpened.addEventListener("click", function() {
        document.body.style.overflow = "auto";
        console.log("Body overflow set to hidden.");
      });
      sleakWidgetClosed.addEventListener("click", function() {
        document.body.style.overflow = "hidden";
        console.log("Body overflow set to auto.");
  });
}