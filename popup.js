document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');

    chrome.storage.sync.get('isEnabled', function (data) {
        toggleButton.textContent = data.isEnabled ? 'Turn Off' : 'Turn On';
    });

    toggleButton.addEventListener('click', function () {
        chrome.storage.sync.get('isEnabled', function (data) {
            const newState = !data.isEnabled;
            chrome.storage.sync.set({ isEnabled: newState }, function () {
                toggleButton.textContent = newState ? 'Turn Off' : 'Turn On';
                chrome.runtime.sendMessage({ toggle: true, reload: true }, function (response) {
                    if (response.success) {
                        chrome.tabs.reload();
                    }
                });
            });
        });
    });
});
