// This file contains the JavaScript logic for the options page. It handles user input and saves settings to Chrome's storage.

document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save');
    const downloadLimitInput = document.getElementById('downloadLimit');

    // Load saved settings from Chrome storage
    chrome.storage.sync.get(['downloadLimit'], function(data) {
        if (data.downloadLimit) {
            downloadLimitInput.value = data.downloadLimit;
        }
    });

    // Save settings when the save button is clicked
    saveButton.addEventListener('click', function() {
        const downloadLimit = downloadLimitInput.value;
        chrome.storage.sync.set({ downloadLimit: downloadLimit }, function() {
            alert('Settings saved!');
        });
    });
});