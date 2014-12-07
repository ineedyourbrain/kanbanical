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

            // date selecter and filter
            $scope.selectedMonth = [];
            $scope.months = [
                  {id : "01", name : 'January'},
                  {id : "02", name : 'February'},
                  {id : "03", name : 'March'},
                  {id : "04", name : 'April'},
                  {id : "05", name : 'May'},
                  {id : "06", name : 'June' },
                  {id : "07", name : 'July' },
                  {id : "08", name : 'August' },
                  {id : "09", name : 'September' },
                  {id : "10", name : 'October' }, 
                  {id : "11", name : 'November' }, 
                  {id : "12", name : 'December' }
                ];
            $scope.setSelectedMonths = function () {
                    var id = this.month.id;
                    if (_.contains($scope.selectedMonth, id)) {
                        $scope.selectedMonth = _.without($scope.selectedMonth, id);
                    } else {
                        $scope.selectedMonth.push(id);
                    }
                    return false;
                };

            $scope.isChecked = function (id) {
                if (_.contains($scope.selectedMonth, id)) {
                    return 'icon-ok pull-right';
                }
                return false;
            };

            $scope.checkAll = function () {
                $scope.selectedMonth = _.pluck($scope.months, 'id');
            };
            
            
                    
            // date  calculations
            $scope.duration=function(date1,date2){ 
              var d1 = new Date(date1);
              var d2 = new Date(date2);
              var milli1 = Date.parse(d1);
              var milli2 = Date.parse(d2);
              var duration = parseInt(milli1)-parseInt(milli2)
              var dhm=duration/(1000*60*60);
              return dhm;

            };
            $scope.monthId=function(date){
              var d = new Date(date);
              var m = d.getMonth()+1;
              return m

            };
            //need to figure out how to write this better
            // project parser
            $scope.parseProject=function(location){
              if(location !=null){
                var split = location.split('.');
                var project = split[0];
                return project;
              }
            };
            $scope.parsePhase=function(location){
              if(location !=null){
                var split = location.split('.');
                var phase = split[1];
                return phase[0];
              }
            };
            $scope.parseTask=function(location){
              if(location !=null){
                var split = location.split('.');
                var task = split[1];
                return task[1];
              }
            };

            //timecard
            $scope.clientSplit = function(summary){
              if(summary !=null){
                var split = summary.split(':');
                var client = split[0];
                return client;
              }
            };

            // $scope.clientTime=function(){

            // }


            // get calendar data
            $scope.makeApiCall = function() {
              gapi.client.load('calendar', 'v3', function() {

                var request =  gapi.client.calendar.events.list({
                    'calendarId': '5amsolutions.com_ono0m8esm0the8vlpf1maffc0g@group.calendar.google.com'
                  });

                request.execute(function(resp) {
                  
                  if(!resp.error) {
                    
                    for(var j = 0; j < resp.items.length; j++) {
                      var data=resp.items[j]; 
                      var hours="judt";
                     
                    if(data.created!=null ){$scope.brick_events.push({respons:data});}
                };
                $scope.$apply();
                // console.log($scope.brick_events)
                  }

                  

                 });
               });
             };
             $scope.handleClientLoad();


  

 
        }]);

