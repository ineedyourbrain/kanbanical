angular.module('timeblocker').service('GoogleCalService', [ '$http' , function ($http) {
	
	this.addEvent = function ( calendar, card ) {
		console.log( calendar, card );
		// var location_add= card.name;
		// var title_add= card.name;
		// var eventData = { 
		// 	title: title_add, 
		// 	details: 'details_add', 
		// 	location: location_add, 
		// 	allDay: false,
		// 	calendar: "coding"
		// 	};
		// var url = 'https://www.googleapis.com/calendar/v3/calendars/5d55qhcfvnieg6fjd9kli61u6s%40group.calendar.google.com/events?key=key=AIzaSyCFj15TpkchL4OUhLD1Q2zgxQnMb7v3XaM',
		// request = {end: {date: "2015-05-22"}, start: {date: "2015-05-22"}}

		// $http.post(url, request).error(
		// 		function (msg) {console.log(msg)}
		// 	)	
		// google.calendar.composeEvent(eventData);
		gapi.client.load('calendar', 'v3', function() {  
		    var request = gapi.client.calendar.events.insert({
		        'calendarId': calendar.id,
			 	'resource': {end: {date: "2015-05-22"}, start: {date: "2015-05-22"}}
		    });
		    request.execute(function(resp) {
		       console.log(resp);
			   if (resp.id){
			   	 
			   }
			   else{
			   	
			   }
		       
		    });
		});
	}; 
	
	

}]);


	