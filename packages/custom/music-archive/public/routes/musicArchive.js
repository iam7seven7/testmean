'use strict';

angular.module('mean.music-archive').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('musicArchive example page', {
      url: '/musicArchive/example',
      templateUrl: 'music-archive/views/index.html'
    });
  }
]);
