angular.module('timeblocker').service('GoogleCalService', [ '$http' , function ($http) {
	
	this.addEvent = function ( calendar, card ) {
		var d = new Date(),
		todaysDate = d.getTime(),
		timetoSaturday = (6 - d.getDay()) * 24 * 60 * 60 * 1000 ;
		d.setTime(todaysDate + timetoSaturday),
		test = '2015-05-23T18:25:43.511Z';
		var saturdayYear = d.getFullYear(), satMonth = (d.getMonth() + 1), satDay = d.getDate(), timeZone = d.getTimezoneOffset();
		// endtime = saturdayDate + (30 * 60 * 1000);
		console.log(saturdayYear, satMonth, satDay)
		dateConcat = saturdayYear.toString() + '-' + satMonth.toString() + '-' + satDay.toString() + "T" + d.getHours(),
		eStart =  dateConcat + ":00:00."+ timeZone +"Z",
		eEnd = dateConcat + ":30:00."+ timeZone +"Z";
		gapi.client.load('calendar', 'v3', function() {  
		    var request = gapi.client.calendar.events.quickAdd({
		        'calendarId': calendar.id,
			 	'text': card
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


	