'use strict';

/* Services */
angular.module('tsaClient.services', [])
    .factory('ToDoService', function($resource) {
    return $resource('http://localhost\\:8080/tsa-server/todos/:id', {}, {
        update: {method: 'PUT', params: {id: '@id'}}
    });
});