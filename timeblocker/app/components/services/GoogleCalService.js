angular.module('timeblocker').service('GoogleCalService', [ '$http' , function ($http) {
	console.log("file");
	this.addEvent = function ( calendar, card ) {
		var location_add= board.name +"."+card.name;
		var title_add= board.name +": "+card.name;
		var eventData = { 
			title: title_add, 
			details: 'details_add', 
			location: location_add, 
			allDay: false,
			calendar: "coding"
			};
			
		google.calendar.composeEvent(eventData);
	}; 
	
	

}]);


	