var nameApp = angular.module('nameApp',['ngRoute']);
//fix routing and include file
nameApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      controller: "IndexController",
      templateUrl: 'index.html'
    })
    .when('/:taskName',
    {
      controller: '<h1> Hello </h1>',
      templateUrl: "views/View1.html"
    })
    .otherwise({redirectTo: '/'});
})

nameApp.controller('IndexController', function($scope, $http){
  console.log("hello")
})