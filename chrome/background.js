let index = 0;
let tabs = null;
let timeout_id = 0;

function reset() {
	index = 0;
	tabs = null;
	timeout_id = 0;
}

chrome.action.onClicked.addListener(async function() {
	if (!tabs) {
		tabs = await chrome.tabs.query({});
		tabs.sort(function descending(a, b) {
			// lastAccessed is undefined for unloaded tabs in Chrome.
			let delta = (b.lastAccessed || 0) - (a.lastAccessed || 0);
			if (delta) {
				return delta;
			}
			// Fallback to selecting the last opened tab.
			return b.id - a.id;
		});
	}
	index++;
	let prev = tabs[index];
	if (prev?.id > 0) {
		chrome.tabs.update(prev.id, {active: true});
	}
	if (timeout_id) {
		clearTimeout(timeout_id);
	}
	timeout_id = setTimeout(reset, 1500);
});
