'use strict';

/* Controllers */
angular.module('tsaClient.controllers', ['tsaClient.services']).
    controller('ToDoListCtrl', function($scope, $http, ToDoService) {
        ToDoService.getToDos(function(data) {
            $scope.todos = data;
        });

        $scope.addToDo = function() {
            var newToDo = {id:$scope.todos.length, description:$scope.todoText, done:false, date:new Date()};
            $scope.todos.push(newToDo);
            ToDoService.createToDo({todo: newToDo});
            $scope.todoText = '';
        }

        $scope.updateToDo = function(todo) {
            ToDoService.updateToDo({todo: todo});
        }

        $scope.deleteToDo = function(todo) {
            delete $scope.todos[$scope.todos.indexOf(todo)];
            ToDoService.deleteToDo({id: todo.id});
        }
});