'use strict';

/* jshint -W098 */
angular.module('mean.music-archive').controller('MusicArchiveController', ['$scope', 'Global', 'MusicArchive',
  function($scope, Global, MusicArchive) {
    $scope.global = Global;
    $scope.package = {
      name: 'music-archive'
    };
  }
]);
