var app = angular.module('timeblocker');

app.controller('authcontroller', function ($scope, $http, $rootScope) {
	
	$scope.onAuthorize = function ($scope) {
		console.log("loading");
	    updateLoggedIn();
	    $("#output").empty();
	    
	    Trello.members.get("me", function(member, $scope){		        
	        
	        $rootScope.$apply(function(){
	            $rootScope.membername = member.fullName;
	        });

	       
	        // is assigned to
	        Trello.get("members/me/boards?filter=open", function(boards) {
	        	$rootScope.$apply(function(){
	            	$rootScope.boards = boards;
	            });
	        });
	        $rootScope.getcards = function(boardid){
	        	// console.log(boardid);
	        	var cardspath = "/boards/"+boardid+"/cards/";
	        	Trello.get(cardspath, function(card) {
	        	console.log(card)
	        		$rootScope.$apply(function(){
	        	    	$rootScope.cards = card;
	        	    });
	        	});

	        }
	    });

	};

	var updateLoggedIn = function() {
	    var isLoggedIn = Trello.authorized();
	    $("#loggedout").toggle(!isLoggedIn);
	    $("#loggedin").toggle(isLoggedIn);        
	};
	    
	$scope.trelloDeauth = function() {
	    Trello.deauthorize();
	    updateLoggedIn();
	};
	Trello.authorize({
	    interactive:false,
	    success: $scope.onAuthorize
	});

	$scope.trelloAuth = function(){
	    Trello.authorize({
	        type: "popup",
	        success: $scope.onAuthorize()
	    });
	};


});