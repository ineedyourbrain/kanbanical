angular.module('timeblocker').controller('GadgetCntrl', function ($scope, GoogleCalService) {
	$scope.cardselect = false;
	$scope.selectedItems =[];
	$scope.setCards = function (item) {
		// console.log(item);
		
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
		if (newCalItem) {
			GoogleCalService.addEvent(cal, newCalItem);
		}
		else if ($scope.selectedItems.length > 0) {
			_.each($scope.selectedItems, function (event) {
				GoogleCalService.addEvent(cal, event.name);
			});
			$scope.selectedItems = [];
		}
		else {alert('please select a card or add an item')}
		
		
	}	
});