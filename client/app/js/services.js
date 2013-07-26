'use strict';

/* Services */
angular.module('tsaClient.services', [])
    .factory('ToDoService', function($resource) {
    return $resource('http://localhost\\:8080/tsa-server/todos/:id',
        {apiServer: 'http://localhost', port: '8080'}, {
        createToDo: {method: 'POST'},
        getToDos: {method: 'GET', isArray: true},
        getToDo: {method: 'GET', params: {id: '@id'}},
        updateToDo: {method: 'PUT', params: {id: '@id'}},
        deleteToDo: {method: 'DELETE', params: {id: '@id'}}
    });
});