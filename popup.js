const toggle = document.getElementById("darkToggle");
const toggleContainer = document.getElementById("toggleContainer");
const iframeContainer = document.getElementById("iframeContainer");

// Detect current page
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	const tab = tabs[0];
	const isFast = tab.url.includes("fast.com");

	if (isFast) {
		toggleContainer.style.display = "block";
		iframeContainer.style.display = "none";

		// Load saved state
		chrome.storage.sync.get("darkModeEnabled", (data) => {
			toggle.checked = data.darkModeEnabled || false;
		});

		// Handle toggle changes
		toggle.addEventListener("change", async () => {
			const enabled = toggle.checked;
			chrome.storage.sync.set({ darkModeEnabled: enabled });

			if (enabled) {
				chrome.scripting.insertCSS({
					target: { tabId: tab.id },
					files: ["dark.css"],
				});
			} else {
				chrome.scripting.removeCSS({
					target: { tabId: tab.id },
					files: ["dark.css"],
				});
			}
		});
	} else {
		toggleContainer.style.display = "none";
		iframeContainer.style.display = "block";
	}
});
