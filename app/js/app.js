var app = angular.module('AdminApp',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
               when("/", {templateUrl : "partials/login.html"}).
               when("/users", {templateUrl : "partials/users.html", controller: "usersController"}).
               when("/user/:id", {templateUrl : "partials/userDetails.html", controller: "userController"}).
               when("/create/", {templateUrl : "partials/create.html"}).
               otherwise({redirectTo : '/users.html'});
    }).run(function ($rootScope, $location, $http) {
            console.log('Auth Token :: ' + sessionStorage.getItem("auth_token"));
            $rootScope.allowedURLtoPass = false;
            
});       