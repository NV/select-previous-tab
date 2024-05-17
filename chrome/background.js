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
			return b.lastAccessed - a.lastAccessed;
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
