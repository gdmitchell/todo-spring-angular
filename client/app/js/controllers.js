'use strict';

/* Controllers */
angular.module('tsaClient.controllers', ['tsaClient.services']).
    controller('ToDoListCtrl', function($scope, ToDoService) {
        ToDoService.query(
            function(data) {
                $scope.todos = data;
            },

            function(error) {
                $scope.error = error;
            }
        );

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

        $scope.isSaveDisabled = function() {
            return $scope.existingToDoForm.$invalid;
        };
}).controller('AddToDoCtrl', function($scope, ToDoService) {
        $scope.addToDo = function() {
            var newToDo = {id:$scope.getNextId(), description:$scope.todoText, done:false, date:new Date()};
            ToDoService.save(newToDo, function () {
                $scope.todos.push(newToDo);
            }, function(errorData) {
                $scope.errors.push("this is an error message");
            });
            $scope.todoText = '';
        };

        $scope.isAddDisabled = function() {
            return $scope.addToDoForm.$invalid;
        };
    });