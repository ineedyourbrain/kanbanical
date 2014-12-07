function calendarCntrl($scope) {
							  $scope.offerings = [
							 	{name:'Meeting', value:"0"},
							 	{name:'Documentation', value:"1"},
							 	{name:'Interface Design', value:"2"},
							 	{name:'Visual Deisgn', value:"3"},
							    
							  ];

							  $scope.phases = [
							  	{name:'Admin', value:"0"},
							  	{name:'RFP', value:"1"},
							  	{name:'Inception', value:"2"},
							  	{name:'Implementation', value:"3"},
							  	{name:'Follow Up', value:"4"}
							     
							   ];
							   $scope.projects = [
							   	{name:'Ampliseq', value:"324"},
							   	{name:'LUX', value:"312"},
							   	{name:'USP', value:"313"},
							   	{name:'Marketing', value:"277"}
							      
							    ];
							   $scope.event = function(phase, offering, project) { 
								var location_add= project.value +"."+phase.value + offering.value;
								var title_add= project.value+"-"+project.name +": "+phase.name +" "+offering.name;
								var eventData = { 
									title: title_add, 
									details: 'details_add', 
									location: location_add, 
									allDay: false
									};
									
								google.calendar.composeEvent(eventData); 


								}
							 
							
							}