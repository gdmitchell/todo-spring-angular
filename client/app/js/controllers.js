'use strict';

/* Controllers */
angular.module('tsaClient.controllers', ['tsaClient.services']).
    controller('ToDoListCtrl', function($scope, ToDoService) {
        ToDoService.query(function(data) {
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
        };

        $scope.updateToDo = function(todo) {
            ToDoService.update(todo);
        };

        $scope.deleteToDo = function(todo) {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
            ToDoService.delete(todo);
        };

        $scope.addToDoToList = function(todo) {
            $scope.todos.add(todo);
        };

        $scope.isSaveDisabled = function() {
            return $scope.existingToDoForm.$invalid;
        }
}).controller('AddToDoCtrl', function($scope, ToDoService) {
        $scope.addToDo = function() {
            var newToDo = {id:$scope.getNextId(), description:$scope.todoText, done:false, date:new Date()};
            $scope.todos.push(newToDo);
            ToDoService.save(newToDo);
            $scope.todoText = '';
        };

        $scope.isAddDisabled = function() {
            return $scope.addToDoForm.$invalid;
        }
    });