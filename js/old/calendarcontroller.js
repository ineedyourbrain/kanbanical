'use strict';
 
angular.module('brickApp.controllers.calendar', [])
    .controller('EventCtrl', ['$scope',  '$location', 'calendarService',
    function($scope, $location) {
        var clientId = '98366225719-pijue4iq7oua2b4t7sr7d0nntd529nm5';
        var apiKey = 'AIzaSyB8NZI7E2X02Pi8fcymK68GV0kB2D8zQd4';
        var scopes = 'https://www.googleapis.com/auth/calendar';
            $scope.brick_events = [];
             $scope.covertToUnixTime =function(yourDate) {
              console.log(yourDate)
                return new Date(yourDate)
            };
            $scope.handleClientLoad = function () {
                gapi.client.setApiKey('AIzaSyB8NZI7E2X02Pi8fcymK68GV0kB2D8zQd4');
                window.setTimeout($scope.checkAuth,1);
             
            };

            $scope.checkAuth = function () {
               gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, $scope.handleAuthResult);


            };  
            $scope.handleAuthResult = function (authResult) {
                
               var authorizeButton = document.getElementById('authorize-button');
                    if (authResult && !authResult.error) {
                      authorizeButton.style.visibility = 'hidden';
                      $scope.makeApiCall();
                    } else {
                      authorizeButton.style.visibility = '';
                      authorizeButton.onclick = $scope.handleAuthClick;
                    }
                };
            

            $scope.handleAuthClick = function (event) {
              gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, $scope.handleAuthResult);
                    return false;
            };          
            

            $scope.makeApiCall = function() {
              gapi.client.load('calendar', 'v3', function() {

                var request =  gapi.client.calendar.events.list({
                    'calendarId': '5amsolutions.com_ono0m8esm0the8vlpf1maffc0g@group.calendar.google.com'
                  });

                request.execute(function(resp) {
                  
                  if(!resp.error) {
                    
                    for(var j = 0; j < resp.items.length; j++) {
                      var mydate1=
                      Date.parse(resp.items[j].start)

                      
                      

    
                      
                      //var mydate1a = mydate1.dateTime
                      var mydate2 = resp.items[j].end;
                   $scope.brick_events.push({respons:resp.items[j],date1:mydate1, my_index:j//, summary1:resp.items[j].summary, ,date2:mydate2 
                  });
                };
                $scope.$apply();
                // console.log($scope.brick_events)
                  }

                  else {
                    
                  };

                 });
               });
             };
             $scope.handleClientLoad();


  

 
        }]);
