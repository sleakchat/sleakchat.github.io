const sleak_htmlUrl = 'https://cdn.jsdelivr.net/gh/sleakchat/Sleak-repository@main/sleakbotv2.1.html';
const sleak_jsUrl = 'https://cdn.jsdelivr.net/gh/sleakchat/Sleak-repository@main/sleakbotv2.1.js';

// Function to append the Sleak HTML document to the body
function appendSleakHtmlToBody(sleak_html) {
  const sleak_parser = new DOMParser();
  const sleak_htmlDoc = sleak_parser.parseFromString(sleak_html, 'text/html');
  document.body.appendChild(sleak_htmlDoc.documentElement);
}

// Function to append the Sleak JS script to the body
function appendSleakJsToBody() {
  const sleak_script = document.createElement('script');
  sleak_script.src = sleak_jsUrl;
  document.body.appendChild(sleak_script);
}

// Function to fetch the Sleak HTML document and the JS script
function fetchResources() {
  const htmlPromise = fetch(sleak_htmlUrl)
    .then(sleak_response => sleak_response.text())
    .then(sleak_html => {
      appendSleakHtmlToBody(sleak_html);
    });

  const jsPromise = fetch(sleak_jsUrl)
    .then(() => {
      appendSleakJsToBody();
    });

  // Wait for both promises to resolve
  return Promise.all([htmlPromise, jsPromise]);
}

// Call the fetchResources function to fetch and append the resources
fetchResources()
  .then(() => {
    // Resources have finished loading and have been appended, perform any necessary actions here
    // You can add your code here that relies on the Sleak HTML and JS being loaded
    console.log('Sleak resources have been loaded and appended to the body.');
  })
  .catch(error => {
    console.error('Error occurred while loading resources:', error);
  });