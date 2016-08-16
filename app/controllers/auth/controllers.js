app.controller('userAuthController', function($scope, phpAPIservice, $location, AlertService) {
    console.info('sdfsd', $scope); 
    
    $scope.$watch('login', function () {
       console.info('watch');
    });
    
    $scope.checkUser = function() {
     console.info('test',$scope.auth);
     
     if ($scope.auth.email !== undefined && $scope.auth.password !== undefined) {
         
     }
   }; 
  });