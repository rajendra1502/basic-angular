app.controller('userAuthController', function($scope, phpAPIservice, $location, AlertService) {
    console.info('sdfsd', $scope); 
    $scope.sendForm = function($event,form) {
     console.info('test',$event);   
   }; 
  });