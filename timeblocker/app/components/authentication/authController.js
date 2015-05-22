angular.module('timeblocker').controller('AuthController', function ($scope, $http, $rootScope) {

	$scope.cards = [];
	$scope.boards = [];
	$scope.fullName = '';
	$scope.loadingCards = false;
	$scope.loadingBoards = false;
	$scope.googleAuth = false;
	$scope.trelloAuth = false;
	$scope.calendars;

	$scope.connectAll = function () {
		$scope.googleAuthClick();
		$scope.trelloAuthClick();
	}

	$scope.trelloLogout = function () {
		Trello.deauthorize();
	};
	$scope.trelloAuthClick = function () {
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
			$scope.trelloAuth = true;
			$scope.loadingCards = true;
			// Output a list of all of the cards that the member 
			// is assigned to
			Trello.get("members/me/cards", function (cards) {
				$scope.cards.length = 0;
				angular.extend($scope.cards, cards);
				$scope.loadingCards = false;
				$scope.$apply();
			});

			Trello.get("members/me/boards?filter=open", function (boards) {
				$scope.boards.length = 0;
				angular.extend($scope.boards, boards);
				$scope.loadingBoards = false;
				$scope.$apply();
			});

		});

	};

	// Trello.authorize({
	// 	interactive: false,
	// 	success: onAuthorize
	// });


	// Auth Google
	var CLIENT_ID = '378961809224-2vh1npmu17p3pk8o0jjsfem4r9qr05p0.apps.googleusercontent.com';

	var SCOPES = ['https://www.googleapis.com/auth/calendar'];

	$scope.checkAuth = function () {
		if(gapi.auth){
			gapi.auth.authorize(
			{
				'client_id': CLIENT_ID,
				'scope': SCOPES,
				'immediate': true
			}, handleAuthResult);
		}
	}

	function handleAuthResult(authResult) {
		if (authResult && !authResult.error) {
			$scope.googleAuth = true;
			$scope.$apply()
			loadCalendarApi();
		}
	}

	$scope.googleAuthClick = function (event) {
		gapi.auth.authorize(
			{client_id: CLIENT_ID, scope: SCOPES, immediate: false},
			handleAuthResult);
		return false;
	}

	function loadCalendarApi() {
		gapi.client.load('calendar', 'v3', getCalendars);
	}

	function getCalendars() {
		var request = gapi.client.calendar.calendarList.list();
		request.execute(function (data) {
			$scope.calendars = data.items;
			$scope.$apply();
		})		
	}

	var url = 'https://apis.google.com/js/client.js';
	$scope.isMyScriptLoaded = function (url) {
	    
	    var scripts = document.getElementsByTagName('script');
	    for (var i = scripts.length; i--;) {
	        if (scripts[i].src == url) 
	        	{
	        		console.log('true')
	        		return true
	        	};
	    }
	    return false;
	}
	$scope.isMyScriptLoaded(url);
	$scope.$watch('isMyScriptLoaded', function (newVal) {
		console.log(newVal);
	})

});