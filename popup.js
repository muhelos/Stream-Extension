document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){	
	var currurl = tabs[0].url;
	var substring = 'https://www.reddit';
	if (currurl.startsWith(substring)){
		document.getElementById('status').textContent = 'valid';
		var newurl = currurl.replace("reddit", "reddit-stream");
		}
	else
		{
		document.getElementById('status').textContent = 'invalid';
		document.getElementById('buttonCurrent').style.display='none';
		document.getElementById('buttonNew').style.display='none';
		}
    document.getElementById("buttonCurrent").addEventListener('click',function ()
		{
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var tab = tabs[0];
			chrome.tabs.update(tab.id, {url: newurl});
			});
		}); 
    document.getElementById("buttonNew").addEventListener('click',function ()
		{
		chrome.tabs.create({'url':newurl});
		}); 
	});
});
	
	
	
	
	
	
	
