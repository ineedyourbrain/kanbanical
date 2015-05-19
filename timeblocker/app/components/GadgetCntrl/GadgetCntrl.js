angular.module('timeblocker').controller('GadgetCntrl', function ($scope) {
	$scope.cardselect = false;
	$scope.selectedItems =[];
	$scope.setCards = function (item) {
		console.log(item);
		$scope.cardselect = true;
		$scope.selectedItems.push(item);

		
	}
});