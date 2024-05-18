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
        // Handle toggle message if needed
        sendResponse({ success: true });
    }
});
