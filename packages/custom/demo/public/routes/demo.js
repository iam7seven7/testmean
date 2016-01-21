'use strict';

angular.module('mean.demo').config(['$stateProvider','$viewPathProvider',
  function($stateProvider,$viewPathProvider) {
	$viewPathProvider.override('system/views/index.html','demo/views/index.html');
	// $viewPathProvider.override('articles/views/list.html','demo/views/index.html');
	// $viewPathProvider.override('articles/views/create.html','demo/views/index.html');

    $stateProvider.state('demo example page', {
      url: '/demo/example',
      templateUrl: 'demo/views/index.html'
    });
    $stateProvider.state('demo example page 2', {
      url: '/demo/test',
      templateUrl: 'demo/views/test.html'
    });
  }
]);
