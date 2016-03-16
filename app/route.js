var nameApp = angular.module('nameApp',['ngRoute']);
//fix routing and include file
nameApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      controller: "MainController",
      templateUrl: 'index.html'
    })
    .when('/:taskName',
    {
      controller: 'SimpleController',
      templateUrl: "views/View1.html"
    })
    .otherwise({redirectTo: '/'});
})
