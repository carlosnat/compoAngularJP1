var app = angular.module('directiveApp', ['ngRoute']);

 app
.config(function($routeProvider) {
 
  $routeProvider
    .when('/', {
      controller:'controller1Ctrl',
      templateUrl:'pantalla1/pantalla1.html'
    })
    .when('/pantalla2', {
      controller:'controller2Ctrl',
      templateUrl:'pantalla2/pantalla2.html'
    })
    .when('/pantalla3', {
      controller:'controller3Ctrl',
      templateUrl:'pantalla3/pantalla3.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})