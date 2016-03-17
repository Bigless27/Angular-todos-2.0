//fix routing and include file
nameApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      controller: "MainController",
      templateUrl: 'views/index_view.html'
    })
    .when('/name/:taskName',
    {
      controller: 'TaskNameController',
      templateUrl: "views/View1.html"
    })
    .otherwise({redirectTo: '/'});
})

