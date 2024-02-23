async function sleakScript() {
  function getClientId() {
    const sleakbotScriptTag = document.querySelector("#sleakbot");
    const clientId = sleakbotScriptTag.getAttribute("user-id");
    const btnColor = sleakbotScriptTag.getAttribute("btn-color");
    const btnImage = sleakbotScriptTag.getAttribute("btn-image");
    return { clientId, btnColor, btnImage };
  }

  const { btnImage } = getClientId();

  // Set image when attribute present
  if (btnImage) {
    var btnImages = document.querySelectorAll("#sleak-btn-openclosed img");
    var btnImageURL = btnImage;
    btnImages.forEach(function (image) {
      image.src = btnImageURL;
    });
  }

  // Set btn bg color and show btn
  var sleakBtnContainer = document.querySelector("#sleak-btn-container");
  var btnColor = getClientId().btnColor;

  var sleakButtonWrap = document.querySelector("#sleak-buttonwrap");
  sleakBtnContainer.style.backgroundColor = btnColor;
  sleakButtonWrap.style.opacity = "0";
  sleakButtonWrap.style.transition = "opacity 0.2s ease";

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

  let firstButtonClick = true;

  // Handle widget opening
  function openSleakWidget() {
    if (firstButtonClick) {
      iframe.src = iframeDelayed;

      sleakClosedWidget.style.display = "none";
      sleakOpenWidget.style.display = "block";
      sleakEmbeddedWidget.style.display = "flex";
      sleakBgOverlay.style.display = "block";
      sleakEmbeddedPopup.style.display = "none";
      sleakEmbeddedWidget.style.opacity = "0";
      sleakEmbeddedWidget.style.transition = "opacity 0.2s ease";
      setTimeout(function () {
        sleakEmbeddedWidget.style.opacity = "1";
      }, 50);

      // Delay showing iframe
      setTimeout(function () {
        sleakIframe.style.display = "block";
        sleakIframe.style.opacity = "0";
        sleakIframe.style.transition = "opacity 0.2s ease";
        setTimeout(function () {
          sleakIframe.style.opacity = "1";
        }, 500);
      }, 1000);

      firstButtonClick = false;
    } else {
      sleakClosedWidget.style.display = "none";
      sleakOpenWidget.style.display = "block";
      sleakEmbeddedWidget.style.display = "flex";
      sleakBgOverlay.style.display = "block";
      sleakEmbeddedPopup.style.display = "none";
      sleakEmbeddedWidget.style.opacity = "0";
      sleakEmbeddedWidget.style.transition = "opacity 0.2s ease";

      setTimeout(function () {
        sleakEmbeddedWidget.style.opacity = "1";
      }, 50);
    }
  }

  // Click event listeners
  sleakClosedWidget.addEventListener("click", openSleakWidget);
  sleakEmbeddedPopup.addEventListener("click", openSleakWidget);

  // Click event listener to widget open btn
  sleakOpenWidget.addEventListener("click", function () {
    sleakClosedWidget.style.display = "block";
    sleakOpenWidget.style.display = "none";
    sleakEmbeddedWidget.style.display = "none";
    sleakBgOverlay.style.display = "none";
    sleakEmbeddedPopup.style.display = "none";
  });

  // Click event listener to popup close btn
  sleakPopupClose.addEventListener("click", function (sleakCloseBtnEvent) {
    // stop event from propagating
    sleakCloseBtnEvent.stopPropagation();

    sleakEmbeddedPopup.style.display = "none";
  });

  // Add click event listener to widget close btn
  sleakMobileClose.addEventListener("click", function (sleakCloseMobileEvent) {
    // stop event from propagating
    sleakCloseMobileEvent.stopPropagation();

    sleakEmbeddedWidget.style.display = "none";
    sleakOpenWidget.style.display = "none";
    sleakClosedWidget.style.display = "block";
    sleakBgOverlay.style.display = "none";
  });

  // Chime
  function playChime() {
    var sleakChime = document.getElementById("sleak-chime");
    if (sleakChime) {
      sleakChime.play();
    }
  }

  // Disable popup/chime after first page
  var sessionStorageKey = clientId + "_sleakPopupTriggered";
  var hasPopupBeenTriggered = sessionStorage.getItem(sessionStorageKey);

  if (!hasPopupBeenTriggered) {
    setTimeout(function () {
      var sleakBodyEmbed = document.getElementById("sleak-body-embed");
      var sleakPopupOpen = document.getElementById("sleak-popup-embed");
      var sleakChime = document.getElementById("sleak-chime");

      if (sleakBodyEmbed && sleakPopupOpen) {
        if (sleakBodyEmbed.style.display !== "flex") {
          sleakPopupOpen.style.display = "flex";
          playChime();

          sleakPopupOpen.style.opacity = "0";
          sleakPopupOpen.style.transform = "translateY(20px)";
          sleakPopupOpen.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

          setTimeout(function () {
            sleakPopupOpen.style.opacity = "1";
            sleakPopupOpen.style.transform = "translateY(0)";
          }, 50);

          sessionStorage.setItem(sessionStorageKey, "true");
        }
      }
    }, 6000);
  }

  // Background overlay on mobile
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

  // GTM events event listener for child window

  (function (window) {
    function isValidJSON(str) {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    }

    window.addEventListener("message", function (message) {
      var data;

      if (typeof message.data !== "string" || !isValidJSON(message.data)) {
        return;
      }

      data = JSON.parse(message.data);

      var validEvents = ["sleakChatInitiated", "sleakLeadGenerated"];

      if (!data.event || validEvents.indexOf(data.event) === -1) {
        return;
      }

      console.log("Received message:", data);
      var dataLayer = window.dataLayer || (window.dataLayer = []);
      if (data.event) {
        dataLayer.push({
          event: data.event,
          postMessageData: data,
        });
        console.log("Pushed to dataLayer:", data);
      }
    });
  })(window);
}

sleakScript();
