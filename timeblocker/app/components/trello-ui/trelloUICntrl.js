

var app = angular.module('timeblocker');

app.controller('trelloUI', function ($scope) {
	$scope.cardselect = false;
	$scope.selectedItems =[];
	$scope.setCards =function (item) {
		$scope.cardselect = true;
		$scope.selectedItems.push(item);
	};
});