console.log("Start fetch script");

const sleak_htmlUrl = "https://dev.sleak.chat/sleakbot.html";
const sleak_jsUrl = "https://dev.sleak.chat/sleakbot.js";

// Function to append the Sleak HTML document to the body
function appendSleakHtmlToBody(sleak_html) {
  const sleak_parser = new DOMParser();
  const sleak_htmlDoc = sleak_parser.parseFromString(sleak_html, "text/html");
  document.body.appendChild(sleak_htmlDoc.documentElement);
}

// Function to append the Sleak JS script to the body
function appendSleakJsToBody() {
  const sleak_script = document.createElement("script");
  sleak_script.src = sleak_jsUrl;
  document.body.appendChild(sleak_script);
}

// Function to fetch the Sleak HTML document and append it to the DOM
function fetchAndAppendHtml() {
  return fetch(sleak_htmlUrl)
    .then((sleak_response) => sleak_response.text())
    .then((sleak_html) => {
      appendSleakHtmlToBody(sleak_html);
    });
}

// Wait for the DOM content to load and then append the JS script
document.addEventListener("DOMContentLoaded", () => {
  fetchAndAppendHtml()
    .then(() => {
      appendSleakJsToBody();
      console.log("Sleak initialized");
    })
    .catch((error) => {
      console.error("Error occurred while loading resources:", error);
    });
});
