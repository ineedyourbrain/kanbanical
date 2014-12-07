function compose(project,phase, offering) { 
	var location=project,phase, offering;
	var eventData = { 
		title: 'bob', 
		details: 'Merry Bob to you!', 
		location: 'My house', 
		allDay: true, 
		startTime: {year: 2009, month: 12, date: 25}, 
		endTime: {year: 2009, month: 12, date: 26}, 
		attendees: [ {email: 'davem.gadgets@gmail.com'} ], 
		rrule: 'RRULE:FREQ=YEARLY' }; 
	google.calendar.composeEvent(eventData); 
} 