
angular.module('brickApp.filters', []).filter('dateFilter', [function () {
    return function (brick_events, selectedMonth) {
      
        if (!angular.isUndefined(brick_events) && !angular.isUndefined(selectedMonth) && selectedMonth.length > 0) {
            var tempBrick_events = [];
            angular.forEach(selectedMonth, function (id) {
                angular.forEach(brick_events, function (brick_event) {
                    
                    var eventMonth = new Array(brick_event.respons.start)
                    angular.forEach(brick_event.respons.start, function(eventStart){
                        var eventMonth = eventStart.split("-")[1];
                        console.log("id:"+id);
                        console.log("event:"+eventMonth);

                        
                    
                    
                    
                    if (angular.equals(eventMonth, id)) {
                        tempBrick_events.push(brick_event);
                    }});
                });
            });
            return tempBrick_events;
        } else {
            return brick_events;
        }
    };
}]);


	// $scope.filterOptions = {
 //                stores: [
 //                  {id : 1, name : 'January'},
 //                  {id : 2, name : 'February'},
 //                  {id : 3, name : 'March'},
 //                  {id : 4, name : 'April'},
 //                  {id : 5, name : 'May'},
 //                  {id : 6, name : 'June' },
 //                  {id : 7, name : 'July' },
 //                  {id : 8, name : 'August' },
 //                  {id : 9, name : 'September' },
 //                  {id : 10, name : 'October' }, 
 //                  {id : 11, name : 'November' }, 
 //                  {id : 12, name : 'December' }, 
 //                ]
 //              }; 
 //            $scope.filterItem = {
 //                store: $scope.filterOptions.stores[0]
 //              }  
 //            $scope.dateFilter = function (data) {
 //               if (data.id === $scope.filterItem.store.id) {
 //                 return true;
 //               } else if ($scope.filterItem.store.rating === 6) {
 //                 return true;
 //               } else {
 //                 return false;
 //               }
 //             }; 

