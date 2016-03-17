//fix routing and include file
nameApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      controller: "MainController",
      templateUrl: 'views/index_view.html'
    })
    .when('/Get%20some%20sleep',
    {
      controller: 'IndexController',
      templateUrl: "views/View1.html"
    })
    .otherwise({redirectTo: '/'});
})

nameApp.controller('IndexController', function($scope, $http){
  console.log("hello")
})