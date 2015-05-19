angular.module('timeblocker').controller('AuthController', function ($scope, $http, $rootScope) {

	$scope.cards = [];
	$scope.fullName = '';
	$scope.loadingCards = false;

	$scope.logout = function () {
	    Trello.deauthorize();
	};
	$scope.login = function () {
	    alert('logging in');
	    Trello.authorize({
	        type: "popup",
	        success: onAuthorize
	    });
	};

	$scope.$watch(function () {
	    return Trello.authorized();
	}, function (val) {
	    $scope.isLoggedIn = val;
	});

	function onAuthorize() {

	    Trello.members.get("me", function (member) {
	        $scope.fullName = member.fullName;

	        $scope.loadingCards = true;
	        // Output a list of all of the cards that the member 
	        // is assigned to
	        Trello.get("members/me/cards", function (cards) {

	            $scope.cards.length = 0;
	            angular.extend($scope.cards, cards);
	            $scope.loadingCards = false;
	        });
	    });

	};

	Trello.authorize({
	    interactive: false,
	    success: onAuthorize
	});

	}
	
	// $scope.onAuthorize = function ($scope) {
	// 	console.log("loading");
	//     updateLoggedIn();
	//     $("#output").empty();
	    
	//     Trello.members.get("me", function(member, $scope){		        
	        
	//         $rootScope.$apply(function(){
	//             $rootScope.membername = member.fullName;
	//         });

	       
	//         // is assigned to
	//         Trello.get("members/me/boards?filter=open", function(boards) {
	//         	$rootScope.$apply(function(){
	//             	$rootScope.boards = boards;
	//             });
	//         });
	//         $rootScope.getcards = function(boardid){
	//         	// console.log(boardid);
	//         	var cardspath = "/boards/"+boardid+"/cards/";
	//         	Trello.get(cardspath, function(card) {
	//         	// console.log(card)
	//         		$rootScope.$apply(function(){
	//         	    	$rootScope.cards = card;
	//         	    });
	//         	});

	//         }
	//     });

	// };

	// var updateLoggedIn = function() {
	//     var isLoggedIn = Trello.authorized();
	//     $("#loggedout").toggle(!isLoggedIn);
	//     $("#loggedin").toggle(isLoggedIn);        
	// };
	    
	// $scope.trelloDeauth = function() {
	//     Trello.deauthorize();
	//     updateLoggedIn();
	// };
	// Trello.authorize({
	//     interactive:false,
	//     success: $scope.onAuthorize
	// });

	// $scope.trelloAuth = function(){
	//     Trello.authorize({
	//         type: "popup",
	//         success: $scope.onAuthorize()
	//     });
	// };


});