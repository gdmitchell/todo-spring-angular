'use strict';

/* Controllers */
angular.module('tsaClient.controllers', ['tsaClient.services']).
    controller('ToDoListCtrl', function($scope, $http, ToDoService) {
        ToDoService.getToDos(function(data) {
            $scope.todos = data;
        });

        $scope.getNextId = function() {
            var maxId = 0;
            for (var i = 0; i < $scope.todos.length; i++) {
                var todoId = $scope.todos[i].id;
                if (todoId > maxId) {
                    maxId = todoId;
                }
            }
            return ++maxId;
        }

        $scope.addToDo = function() {
            var newToDo = {id:$scope.getNextId(), description:$scope.todoText, done:false, date:new Date()};
            $scope.todos.push(newToDo);
            ToDoService.createToDo(newToDo);
            $scope.todoText = '';
        }

        $scope.updateToDo = function(todo) {
            ToDoService.updateToDo(todo, {id: todo.id});
        }

        $scope.deleteToDo = function(todo) {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
            ToDoService.deleteToDo({id: todo.id});
        }
});