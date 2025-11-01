chrome.commands.onCommand.addListener(async (command) => {
	if (command === "toggle-dark-mode") {
		const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
		if (!tab || !tab.url.includes("fast.com")) return;

		chrome.storage.sync.get("darkModeEnabled", (data) => {
			const enabled = !data.darkModeEnabled;
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
	}
});
