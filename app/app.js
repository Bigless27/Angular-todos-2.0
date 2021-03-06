nameApp.controller("MainController",[
  '$scope', '$http', function($scope, http){

    http.get('tasks.json').success(function(data){
      $scope.tasks = data;
    });
    $scope.sortField = 'country'


    $scope.addTask = function(){
      $scope.tasks.push($scope.enteredTask);
    };

    $scope.removeTask = function(task){
      var i = $scope.tasks.indexOf(task);
      $scope.tasks.splice(i, 1)
    }
}])

nameApp.controller("TaskNameController",["$scope",'$routeParams',function($scope, $routeParams){
  // console.log($routeParams)
  $scope.task = $routeParams
}])

