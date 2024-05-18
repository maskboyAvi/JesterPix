# JesterPix

JesterPix is a fun and quirky Chrome extension that replaces all the images on any webpage with hilarious photos of The Simpsons cartoon characters. Made for a Scaffathon as a fun project, this extension boasts a super complex code that's a delight to comprehend.

<img src="https://github.com/maskboyAvi/JesterPix/assets/123640350/af26a3f4-e199-49d2-b626-45f3c1137697" width="800px" height="400px" alt="Balance Beats Preview">

## Features

- **Replace Images**: Automatically replaces all images on a webpage with random funny photos of The Simpsons.
- **Dynamic Content Handling**: Ensures that newly loaded images (e.g., on scroll or via "show more" buttons) are also replaced.
- **Toggle On/Off**: Easy-to-use popup interface to enable or disable the extension.
- **Persistent State**: Remembers the last state (on or off) even after closing the browser.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded the extension.

## Usage

1. After installing the extension, click on the JesterPix icon in the Chrome toolbar.
2. Toggle the extension on or off using the button in the popup.
3. Enjoy the hilarious transformation of images on your web pages!

## Development

This project was developed with a lot of creativity and a sprinkle of humor. Here’s a brief overview of the files included:

- **manifest.json**: The configuration file for the Chrome extension.
- **background.js**: Manages the extension's background processes, including state persistence and tab reloading.
- **content.js**: Handles the image replacement logic and observes DOM changes to replace dynamically loaded images.
- **popup.js**: Controls the popup interface for toggling the extension on and off.
- **popup.html**: The HTML file for the popup interface.

## Code Overview

### manifest.json
```json
{
   "manifest_version": 3,
   "name": "JesterPix",
   "version": "1.0.0",
   "permissions": [
      "storage",
      "activeTab",
      "scripting"
   ],
   "background": {
      "service_worker": "background.js"
   },
   "content_scripts": [
      {
         "matches": ["<all_urls>"],
         "js": ["content.js"]
      }
   ],
   "action": {
      "default_popup": "popup.html",
      "default_title": "JesterPix",
      "icon": {
         "16": "icons/icon16.png",
         "48": "icons/icon48.png",
         "128": "icons/icon128.png"
      }
   },
   "web_accessible_resources": [{
      "resources": ["popup.js"],
      "matches": ["<all_urls>"]
   }]
}
```
### background.js

```js
{
   let isEnabled = false;

chrome.runtime.onInstalled.addListener(() => {
   chrome.storage.sync.set({ isEnabled });
});

chrome.action.onClicked.addListener((tab) => {
   chrome.storage.sync.get("isEnabled", (data) => {
      isEnabled = !data.isEnabled;
      chrome.storage.sync.set({ isEnabled });
      if (isEnabled) {
         chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"]
         });
      } else {
         chrome.tabs.reload(tab.id);
      }
   });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.toggle) {
        sendResponse({ success: true });
    }
});

```
### content.js
```js
{
function fetchRandomFunnyImage() {
    const unsplashAccessKey = 'YOUR_UNSPLASH_ACCESS_KEY';
    const unsplashApiUrl = `https://api.unsplash.com/photos/random?query=funny&client_id=${unsplashAccessKey}`;

    fetch(unsplashApiUrl)
        .then(response => response.json())
        .then(data => {
            const randomImageSrc = data.urls.regular;
            replaceImagesWithRandomImage(randomImageSrc);
        })
        .catch(error => console.error('Error fetching image:', error));
}

function replaceImagesWithRandomImage(imageSrc) {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].src = imageSrc;
    }
}

function observeDOMChanges() {
    const observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof Element) {
                        if (node.tagName === 'IMG' || node.querySelectorAll('img').length > 0) {
                            fetchRandomFunnyImage();
                        }
                    }
                });
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

chrome.storage.sync.get("isEnabled", (data) => {
    if (data.isEnabled) {
        fetchRandomFunnyImage();
        observeDOMChanges();
    } else {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.reload) {
                location.reload();
            }
        });
    }
});

```
## License
This project is licensed under the MIT License. See the LICENSE file for more details.

Enjoy the laughs with JesterPix! 🎉
