'use strict';

/* jshint -W098 */
angular.module('mean.custom-users').controller('CustomUsersController', ['$scope', 'Global', 'CustomUsers',
  function($scope, Global, CustomUsers) {
    $scope.global = Global;
    $scope.package = {
      name: 'custom-users'
    };
  }
]);
