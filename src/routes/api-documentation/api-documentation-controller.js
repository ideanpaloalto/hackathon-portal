'use strict';

angular.module('apiDocumentationController', [])

/**
 * @ngdoc object
 * @name ApiDocumentationCtrl
 * @description
 *
 * Controller for the API Documentation page.
 */
.controller('ApiDocumentationCtrl', function ($scope, $state, $rootScope) {
  var url =  $state.current.url;
  var children = ['/know-driver', '/know-car', '/control-car'];

  if( children.indexOf(url) >= 0 || $rootScope.isSelected === true ){
    $scope.isSelected = true;
  } else {
    $scope.isSelected = false;
  }
});
