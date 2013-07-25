'use strict';

/* Controllers */

function ToDoListCtrl($scope, $http) {
    $http.get('http://localhost:8080/tsa-server/todos').success(function(data) {
        $scope.todos = data;
    });

    $scope.addToDo = function() {
        var newToDo = {id:$scope.todos.length, description:$scope.todoText, done:false, date:new Date()};
        $scope.todos.push(newToDo);
        $scope.todoText = '';
        $http.post('http://localhost:8080/tsa-server/todos/add', newToDo);
    }

    $scope.updateToDo = function(todo) {
        $http.put('http://localhost:8080/tsa-server/todos/' + todo.id, todo);
    }

    $scope.deleteToDo = function(todo) {
        $scope.todos.remove(todo.id);
        $http.delete('http://localhost:8080/tsa-server/todos/' + todo.id);
    }
}