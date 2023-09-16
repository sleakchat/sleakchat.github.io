function getClientId() {
  const sleakbotScriptTag = document.querySelector("#sleakbot");
  const clientId = sleakbotScriptTag.getAttribute("user-id");
  const btnColor = sleakbotScriptTag.getAttribute("btn-color");
  return { clientId, btnColor };
}

// Set the background color of #sleak-btn-container to the value of the 'btn-color' attribute
var sleakBtnContainer = document.querySelector("#sleak-btn-container");
var btnColor = getClientId().btnColor;
var sleakButtonWrap = document.querySelector("#sleak-buttonwrap");
sleakBtnContainer.style.backgroundColor = btnColor;
sleakButtonWrap.style.opacity = "0"; // Set initial opacity to 0
sleakButtonWrap.style.transition = "opacity 0.2s ease"; // Add transition effect

// Delay setting the opacity to 1 to trigger the fade-in effect
setTimeout(function () {
  sleakButtonWrap.style.opacity = "1";
}, 500);

function generateUniqueId() {
  var visitorId = localStorage.getItem("visitorId");
  if (!visitorId) {
    visitorId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    localStorage.setItem("visitorId", visitorId);
  }
  return visitorId;
}

var iframe2 = document.getElementById("sleak-popup-iframe");
var iframe = document.getElementById("sleak-widget-iframe");
var clientId = getClientId().clientId;
var visitorId = generateUniqueId();
iframe2.src = `https://app.sleak.chat/popup/?id=${clientId}&visitorId=${visitorId}`;
const iframeDelayed = `https://app.sleak.chat/?id=${clientId}&visitorId=${visitorId}`;

// Change element visibility on button click
// Get references to the elements
const sleakClosedWidget = document.querySelector("#sleak-widget-closed");
const sleakOpenWidget = document.querySelector("#sleak-widget-open");
const sleakEmbeddedWidget = document.querySelector("#sleak-body-embed");
const sleakBgOverlay = document.querySelector("#sleak-bgoverlay");
const sleakEmbeddedPopup = document.querySelector("#sleak-popup-embed");
const sleakNotification = document.querySelector("#sleak-btn-notification");
const sleakPopupClose = document.querySelector("#sleak-popup-close");
const sleakMobileClose = document.querySelector("#sleak-widget-close");
const sleakLoading = document.querySelector("#sleak-loadingwrap");
const sleakIframe = document.querySelector("#sleak-widget-iframe");

let firstButtonClick = true; // Flag to track the first button click

// Define the function to handle widget opening
function openSleakWidget() {
  if (firstButtonClick) {
    // Render the iframe
    iframe.src = iframeDelayed;

    // Set the display properties of the elements
    sleakClosedWidget.style.display = "none";
    sleakOpenWidget.style.display = "block";
    sleakEmbeddedWidget.style.display = "flex";
    sleakBgOverlay.style.display = "block";
    sleakEmbeddedPopup.style.display = "none";
    sleakEmbeddedWidget.style.opacity = "0"; // Set initial opacity to 0
    sleakEmbeddedWidget.style.transition = "opacity 0.2s ease"; // Add transition effect
    // Delay setting the opacity to 1 to trigger the fade-in effect
    setTimeout(function () {
      sleakEmbeddedWidget.style.opacity = "1";
    }, 50);

    // Delay showing the iframe
    setTimeout(function () {
      // Hide loading wrap
      sleakIframe.style.display = "block";
      sleakIframe.style.opacity = "0"; // Set initial opacity to 0
      sleakIframe.style.transition = "opacity 0.2s ease"; // Add transition effect
      setTimeout(function () {
        sleakIframe.style.opacity = "1";
      }, 500);
    }, 1000);

    firstButtonClick = false; // Update the flag
  } else {
    // If it's not the first click, open immediately
    sleakClosedWidget.style.display = "none";
    sleakOpenWidget.style.display = "block";
    sleakEmbeddedWidget.style.display = "flex";
    sleakBgOverlay.style.display = "block";
    sleakEmbeddedPopup.style.display = "none";
    sleakEmbeddedWidget.style.opacity = "0"; // Set initial opacity to 0
    sleakEmbeddedWidget.style.transition = "opacity 0.2s ease"; // Add transition effect

    // Delay setting the opacity to 1 to trigger the fade-in effect
    setTimeout(function () {
      sleakEmbeddedWidget.style.opacity = "1";
    }, 50);
  }
}

// Add click event listener to the closed widget
sleakClosedWidget.addEventListener("click", openSleakWidget);

// Add click event listener to the popup
sleakEmbeddedPopup.addEventListener("click", openSleakWidget);

// Add click event listener to the button (when widget open)
sleakOpenWidget.addEventListener("click", function () {
  // Set the display properties of the elements
  sleakClosedWidget.style.display = "block";
  sleakOpenWidget.style.display = "none";
  sleakEmbeddedWidget.style.display = "none";
  sleakBgOverlay.style.display = "none";
  sleakEmbeddedPopup.style.display = "none";
});

// Add click event listener to popup close btn
sleakPopupClose.addEventListener("click", function (sleakCloseBtnEvent) {
  // stop event from propagating
  sleakCloseBtnEvent.stopPropagation();
  // Set the display properties of the elements
  sleakEmbeddedPopup.style.display = "none";
});

// Add click event listener to widget close btn
sleakMobileClose.addEventListener("click", function (sleakCloseMobileEvent) {
  // stop event from propagating
  sleakCloseMobileEvent.stopPropagation();
  // Set the display properties of the elements
  sleakEmbeddedWidget.style.display = "none";
  sleakOpenWidget.style.display = "none";
  sleakClosedWidget.style.display = "block";
  sleakBgOverlay.style.display = "none";
});

// function for playing chime
function playChime() {
  var sleakChime = document.getElementById("sleak-chime");
  if (sleakChime) {
    sleakChime.play();
  }
}

// show popup 6 secs after page load
window.onload = function () {
  setTimeout(function () {
    var sleakBodyEmbed = document.getElementById("sleak-body-embed");
    var sleakPopupOpen = document.getElementById("sleak-popup-embed");
    var sleakChime = document.getElementById("sleak-chime");

    if (sleakBodyEmbed && sleakPopupOpen) {
      if (sleakBodyEmbed.style.display !== "flex") {
        sleakPopupOpen.style.display = "flex";
        playChime();

        sleakPopupOpen.style.opacity = "0"; // Set initial opacity to 0
        sleakPopupOpen.style.transform = "translateY(20px)";
        sleakPopupOpen.style.transition =
          "opacity 0.5s ease, transform 0.5s ease";

        // Delay setting the opacity and transform to 1 to trigger the fade-in-up effect
        setTimeout(function () {
          sleakPopupOpen.style.opacity = "1";
          sleakPopupOpen.style.transform = "translateY(0)";
        }, 50);
      }
    }
  }, 6000);
};

// script for showing and hiding background overlay on mobile
var sleakWidgetOpened = document.getElementById("sleak-widget-close");
var sleakWidgetClosed = document.getElementById("sleak-widget-closed");

if (window.matchMedia("(max-width: 768px)").matches) {
  sleakWidgetOpened.addEventListener("click", function () {
    document.body.style.overflow = "auto";
  });
  sleakWidgetClosed.addEventListener("click", function () {
    document.body.style.overflow = "hidden";
  });
}

const sleakIframeWidget = document.querySelector("sleak-widget-iframe");

if (sleakIframeWidget) {
  sleakIframeWidget.onload = function () {
    // Now it's safe to access contentWindow and postMessage
    const sleakIframeWindow = this.contentWindow;
    sleakIframeWindow.postMessage({ windowWidth: window.innerWidth }, "*");
    console.log(
      "After iframe src set & content loaded: Sent window width to iframe:",
      window.innerWidth
    );
  };
} else {
  console.log("Could not find the 'sleak-widget-iframe'.");
}

window.addEventListener("resize", function () {
  const sleakIframeWindow = document.querySelector(
    "sleak-widget-iframe"
  ).contentWindow;
  sleakIframeWindow.postMessage({ windowWidth: window.innerWidth }, "*");
});

window.onload = function () {
  const iframeWindow = document.querySelector(
    "sleak-widget-iframe"
  ).contentWindow;
  iframeWindow.postMessage({ windowWidth: window.innerWidth }, "*");
};

// event listener for child window
(function (window) {
  window.addEventListener("message", function (message) {
    var validEvents = ["sleakChatInitiated", "sleakLeadGenerated"];

    // Check if the raw message string contains any of the valid event names
    var isExpectedMessage = false;

    if (typeof message.data === "string") {
      isExpectedMessage = validEvents.some(function (eventName) {
        return message.data.includes(eventName);
      });
    }

    if (!isExpectedMessage) {
      return; // Ignore messages that don't contain one of the expected event names
    }

    // Now attempt to parse the message
    var data;
    try {
      data = JSON.parse(message.data);
    } catch (e) {
      console.warn("Failed to parse message:", message.data);
      return;
    }

    console.log("Received message:", data); // Log the received message
    var dataLayer = window.dataLayer || (window.dataLayer = []);
    if (data.event) {
      dataLayer.push({
        event: data.event,
        postMessageData: data,
      });
      console.log("Pushed data to dataLayer:", data);
    }
  });
})(window);
