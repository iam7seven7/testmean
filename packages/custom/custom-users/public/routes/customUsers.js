'use strict';

angular.module('mean.custom-users').config(['$stateProvider', '$viewPathProvider',
  function($stateProvider, $viewPathProvider) {
  	$viewPathProvider.override('auth/views/login.html', 'custom-users/views/index.html');
    $stateProvider.state('customUsers example page', {
      url: '/customUsers/example',
      templateUrl: 'custom-users/views/index.html'
    });
  }
]);
