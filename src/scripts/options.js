var promise_load = new Promise(function(resolve) {
	document.addEventListener('DOMContentLoaded', resolve);
});

Promise.all(
	SettingsStorage.get(),
	promise_load
).then(function(settings) {
	//http://frbrz-kumo.appspot.com/reddit-trial/api/busts.json
})

function save_options() {
	var color = document.getElementById('color').value;
	var likesColor = document.getElementById('like').checked;
	chrome.storage.sync.set({
		favoriteColor: color,
		likesColor: likesColor
	}, function () {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function () {
			status.textContent = '';
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	// Use default value color = 'red' and likesColor = true.
	chrome.storage.sync.get({
		favoriteColor: 'red',
		likesColor: true
	}, function (items) {
		document.getElementById('color').value = items.favoriteColor;
		document.getElementById('like').checked = items.likesColor;
	});
}

document.getElementById('save').addEventListener('click', save_options);