angular.module('timeblocker').controller('GadgetCntrl', function ($scope, GoogleCalService) {
	$scope.cardselect = false;
	$scope.selectedItems =[];
	$scope.setCards = function (item) {
		// console.log(item);
		$scope.cardselect = true;
		$scope.selectedItems.push(item);		
	}

	$scope.getBoardCards = function () {
		Trello.get("boards/"+this.board.id +"/cards", function (cards) {
			$scope.cards.length = 0;
			angular.extend($scope.cards, cards);
			$scope.loadingCards = false;
			$scope.$apply();
		});
		
	}

	$scope.addToCalendar = function (cal, newCalItem) {
		console.log(cal, newCalItem);
		GoogleCalService.addEvent(cal, newCalItem);
	}	
});