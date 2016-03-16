var nameApp = angular.module('nameApp',['ngRoute']);

nameApp.config(function($routeProvider){
  $routeProvider.
    .when('/',{
      controller: "MainController",
      templateUrl: 'index.html'
    })
    .when('/:taskName',
    {
      controller: 'MainController',
      templateUrl: "views/View1.html"
    })
    .otherwise({redirectTo: '/'});
})
