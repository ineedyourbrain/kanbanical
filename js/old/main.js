// window.onload = function() {
//     handleClientLoad();
// }
// 	var clientId = '98366225719-pijue4iq7oua2b4t7sr7d0nntd529nm5';
// 	var apiKey = 'AIzaSyB8NZI7E2X02Pi8fcymK68GV0kB2D8zQd4';
// 	var scopes = 'https://www.googleapis.com/auth/calendar';

// 	function handleClientLoad() {

// 	        gapi.client.setApiKey(apiKey);
// 	        window.setTimeout(checkAuth,1);
// 	      }
// 	function checkAuth() {
// 	        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
// 	      }

// 	function handleAuthResult(authResult) {
// 	var authorizeButton = document.getElementById('authorize-button');
// 		if (authResult && !authResult.error) {
// 		  authorizeButton.style.visibility = 'hidden';
// 		  makeApiCall();
// 		} else {
// 		  authorizeButton.style.visibility = '';
// 		  authorizeButton.onclick = handleAuthClick;
// 		}
// 	}
// 	function handleAuthClick(event) {
// 	    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
// 	    return false;
// 	}

// 	function makeApiCall() {
// 	       gapi.client.load('calendar', 'v3', function() {
// 	         var request = gapi.client.calendars.get({
// 	           'userId': 'me'
// 	         });
// 	         request.execute(function(resp) {
// 	           var heading = document.createElement('h4');
// 	           heading.appendChild(document.createTextNode(resp.displayName));

// 	           document.getElementById('content').appendChild("bob");
// 	         });
// 	       });
// 	     }

