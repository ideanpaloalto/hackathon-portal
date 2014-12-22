'use strict';

angular.module('apiDocumentationController', [])

/**
 * @ngdoc object
 * @name ApiDocumentationCtrl
 * @description
 *
 * Controller for the API Documentation page.
 */
.controller('ApiDocumentationCtrl', function ($scope, $state) {
  var url =  $state.current.url;
  var children = ['/know-driver', '/know-car', '/control-car'];
  var i = children.indexOf(url);
  $scope.isSelected;

  if( url === children[i] ){
    if( children.indexOf(url) >= 0 ){
      $scope.isSelected = true;
    } else {
      $scope.isSelected = false;
    }

    // console.log(children.indexOf(url) >= 0);
    // console.log('$scope.isSelected:', $scope.isSelected);
  }
});
