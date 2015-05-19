

var app = angular.module('timeblocker');

app.controller('trelloUI', function ($scope) {
	$scope.cardselect = false;
	$scope.selectedItems =[];
	$scope.setCards =function (item) {
		$scope.cardselect = true;
		$scope.selectedItems.push(item);
		console.log($scope.selectedItems);
		$scope.event = function() { 
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


	}
	};
});