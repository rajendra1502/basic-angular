  app.factory('phpAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getUsers = function() {
      return $http({
        method: 'JSON', 
        url: 'http://localhost/admin/apis/apis.php?api=users'
      });
    }

    ergastAPI.getUserDetails = function(id) {
      return $http({
        method: 'JSON', 
        url: 'http://localhost/admin/apis/apis.php?api=user&uid='+id
      });
    }
    
    ergastAPI.saveUserDetails = function(userData) {
      return $http({
        method: 'JSON', 
        url: 'http://localhost/admin/apis/apis.php?api=saveUser&data='+JSON.stringify(userData)
      });
    }
    return ergastAPI;
  });