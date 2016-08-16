app.controller('usersController', function($scope, phpAPIservice, AlertService) {
    $scope.nameFilter = null;
    $scope.usersList = [];
    $scope.searchFilter = function (user) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(user.name);
    };

    phpAPIservice.getUsers().success(function (response) {
        $scope.usersList = response;
    });
    
    if (AlertService.hasAlert()) {
    $scope.success = AlertService.getSuccess();
    AlertService.reset();
    } 
    
    $scope.deleteUser = function(id) {
    console.log('asdasd', id); 
     phpAPIservice.deleteUser($scope.id).success(function (response) {
        console.info('response',response);
        $scope.user = response; 
    }); 
    }
  }).controller('userController', function($scope, $routeParams, phpAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;
    phpAPIservice.getUserDetails($scope.id).success(function (response) {
        console.info('response',response);
        $scope.user = response; 
    });

  }).controller('saveUserController', function($scope, phpAPIservice, $location, AlertService) {
    $scope.saveform = function() {
     phpAPIservice.saveUserDetails($scope.user).success(function (response) {
        console.info('response',response);
        if(response){
          AlertService.setSuccess({ show: true, msg: ' user created successfully.' });  
          $location.path("/users");  
        }
    });
    
   }; 
  });