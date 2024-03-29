<!-- Call the function to inject Sleak -->

  window.$memberstackDom.getCurrentMember().then(({ data: member }) => {
    setIframeSourceDashboard(member);
  });
  
// Set the background color of #sleak-btn-container to the value of the 'btn-color' attribute
var sleakBtnContainer = document.querySelector('#sleak-btn-container');
var sleakButtonWrap = document.querySelector('#sleak-buttonwrap');
sleakBtnContainer.style.backgroundColor = '#242424';
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

let iframeDelayed = ''; // Using let to allow reassignment


function setIframeSourceDashboard() {
  
var clientIdDashboard = document.getElementById('client-ms-id').value;
  var iframe2 = document.getElementById('sleak-popup-iframe');
  var visitorId = generateUniqueId();
  iframe2.src = `https://app.sleak.chat/popup/?id=mem_clj5juz9o0nt20shqfcoo74kw&visitorId=${clientIdDashboard}${visitorId}`;
  iframeDelayed = `https://app.sleak.chat/?id=mem_clj5juz9o0nt20shqfcoo74kw&visitorId=${clientIdDashboard}${visitorId}`; 
};


// Change element visibility on button click
  // Get references to the elements
  const sleakClosedWidget = document.querySelector('#sleak-widget-closed');
  const sleakOpenWidget = document.querySelector('#sleak-widget-open');
  const sleakEmbeddedWidget = document.querySelector('#sleak-body-embed');
  const sleakBgOverlay = document.querySelector('#sleak-bgoverlay');
  const sleakEmbeddedPopup = document.querySelector('#sleak-popup-embed');
  const sleakNotification = document.querySelector('#sleak-btn-notification');
  const sleakPopupClose = document.querySelector('#sleak-popup-close');
  const sleakMobileClose = document.querySelector('#sleak-widget-close');
  var iframe = document.getElementById('sleak-widget-iframe');
  const sleakIframe = document.querySelector('#sleak-widget-iframe');


let firstButtonClick = true; // Flag to track the first button click

// Define the function to handle widget opening
function openSleakWidget() {
  if (firstButtonClick) {

    // Render the iframe
    iframe.src = iframeDelayed;

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
    
    // Delay showing the iframe
    setTimeout(function() {
    // Hide loading wrap
    sleakIframe.style.display = 'block';
    sleakIframe.style.opacity = '0'; // Set initial opacity to 0
    sleakIframe.style.transition = 'opacity 0.2s ease'; // Add transition effect
    setTimeout(function() {
  sleakIframe.style.opacity = '1';
}, 500);
    
    }, 1000);
    
    firstButtonClick = false; // Update the flag
  } else {

    // If it's not the first click, open immediately
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
    
  }
}

// Add click event listener to the closed widget
sleakClosedWidget.addEventListener('click', (openSleakWidget));

// Add click event listener to the popup
sleakEmbeddedPopup.addEventListener('click', (openSleakWidget));


  // Add click event listener to the button (when widget open)
  sleakOpenWidget.addEventListener('click', function() {
    // Set the display properties of the elements
    sleakClosedWidget.style.display = 'block';
    sleakOpenWidget.style.display = 'none';
    sleakEmbeddedWidget.style.display = 'none';
    sleakBgOverlay.style.display = 'none';
    sleakEmbeddedPopup.style.display = 'none';
  });

// Add click event listener to popup close btn
  sleakPopupClose.addEventListener('click', function(sleakCloseBtnEvent) {
    // stop event from propagating
    sleakCloseBtnEvent.stopPropagation();
      // Set the display properties of the elements
      sleakEmbeddedPopup.style.display = 'none';
  });

// Add click event listener to widget close btn
sleakMobileClose.addEventListener('click', function(sleakCloseMobileEvent) {
    // stop event from propagating
    sleakCloseMobileEvent.stopPropagation();
      // Set the display properties of the elements
      sleakEmbeddedWidget.style.display = 'none';
      sleakOpenWidget.style.display = 'none';
      sleakClosedWidget.style.display = 'block';
      sleakBgOverlay.style.display = 'none';
  });

// show popup 6 secs after page load
window.onload = function() {
  setTimeout(function() {
    var sleakBodyEmbed = document.getElementById("sleak-body-embed");
    var sleakPopupOpen = document.getElementById("sleak-popup-embed");

    if (sleakBodyEmbed && sleakPopupOpen) {
      if (sleakBodyEmbed.style.display !== "flex") {
        sleakPopupOpen.style.display = "flex";
        console.log("Popup display changed to flex");

        sleakPopupOpen.style.opacity = '0'; // Set initial opacity to 0
        sleakPopupOpen.style.transform = 'translateY(20px)'; // Initial vertical translation
        sleakPopupOpen.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Add transition effects

        // Delay setting the opacity and transform to 1 to trigger the fade-in-up effect
        setTimeout(function() {
          sleakPopupOpen.style.opacity = '1';
          sleakPopupOpen.style.transform = 'translateY(0)';
          console.log("Popup opacity changed to 1, transform applied");
        }, 50);

      } else {
        console.log("Popup cannot open when sleak-body-embed is displayed");
      }
    }
  }, 6000);
};