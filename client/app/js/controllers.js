'use strict';

/* Controllers */
angular.module('tsaClient.controllers', ['tsaClient.services']).
    controller('ToDoListCtrl', function($scope, $http, ToDoService) {
        ToDoService.getToDos(function(data) {
            $scope.todos = data;
        });
//        $http.get('/tsa-server/todos').success(function(data) {
//            $scope.todos = data;
//        });

        $scope.addToDo = function() {
            var newToDo = {id:$scope.todos.length, description:$scope.todoText, done:false, date:new Date()};
            $scope.todos.push(newToDo);
            $scope.todoText = '';
            $http.post('/tsa-server/todos', newToDo);
        }

        $scope.updateToDo = function(todo) {
            $http.put('/tsa-server/todos/' + todo.id, todo);
        }

        $scope.deleteToDo = function(todo) {
            delete $scope.todos[$scope.todos.indexOf(todo)];
            $http.delete('/tsa-server/todos/' + todo.id);
        }
});