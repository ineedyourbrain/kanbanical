 
    'use strict';

 /* Services */

    angular.module('brickApp.services.calendar', [])
        .service('calendarService', ['$http', '$rootScope', '$q', 
            function($http, $rootScope, $q) { 
                var clientId = '2vh1npmu17p3pk8o0jjsfem4r9qr05p0',
                    apiKey = 'AIzaSyDVPG-1O8-Nd_cP7nywnOk_uPGmOey9IzY',
                    scopes = 'https://www.googleapis.com/auth/calendar',
                
                    deferred = $q.defer();
                return{
                    
         
            login: function (clientId,scopes,apiKey ) {
                gapi.auth.authorize({ 
                    client_id: clientId, 
                    scope: scopes, 
                    immediate: false
               
                }, this.handleAuthResult);
 
                
            },
 
            handleClientLoad: function (clientId,scopes,apiKey) {
                gapi.client.setApiKey(apiKey);
                gapi.auth.init(function () { });
                window.setTimeout(this.checkAuth, 1);
            },
 
            checkAuth: function(clientId,scopes,apiKey) {
                gapi.auth.authorize({ 
                    client_id: '2vh1npmu17p3pk8o0jjsfem4r9qr05p0', 
                    scope: 'https://www.googleapis.com/auth/calendar', 
                    immediate: true, 
                 
                }, this.handleAuthResult);
            },
 
            handleAuthResult: function(authResult) {
                var authorizeButton = document.getElementById('authorize-button');
                    if (authResult && !authResult.error) {
                      authorizeButton.style.visibility = 'hidden';
                      $scope.makeApiCall();
                    } else {
                      authorizeButton.style.visibility = '';
                      authorizeButton.onclick = $scope.handleAuthClick;
                    }
                
            },
 
            handleAuthClick: function(event,clientId,scopes,apiKey) {
                gapi.auth.authorize({ 
                    client_id: '2vh1npmu17p3pk8o0jjsfem4r9qr05p0', 
                    scope: 'https://www.googleapis.com/auth/calendar', 
                    immediate: false
                  
                }, this.handleAuthResult);
               
            },
            makeApiCall: function() {
               gapi.client.load('calendar', 'v3', function() {
                 var request =  gapi.client.calendar.events.list({
                      'calendarId': 'primary'
                    });

                request.execute(function(resp) {

                    return resp.items;
                    
                 });
               });
             }
            }
        }]);



