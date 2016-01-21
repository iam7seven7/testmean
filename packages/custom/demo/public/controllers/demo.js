'use strict';

/* jshint -W098 */
angular.module('mean.demo').controller('DemoController', ['$scope', 'Global', 'Demo',
  function($scope, Global, Demo) {
    $scope.global = Global;
    $scope.package = {
      name: 'demo'
    };
  }
]);

angular.module('mean.demo').controller('SearchController', ['$scope', 'Global', 'Demo',
  function($scope, Global, Demo) {
    $scope.global = Global;
    $scope.package = {
      name: 'search'
    };
  }
]);

angular.module('mean.demo').controller('ListController', ['$scope', 'Global', 'Demo',
  function($scope, Global, Demo) {
    $scope.global = Global;
    $scope.package = {
      name: 'list'
    };
    $scope.items = [
    	{ name: '十仙康壽', description: '十仙康壽是人類文化瑰寶', image_url: ''},
    	{ name: 'Item B', description: 'Item B is great!'}
    ];
  }
]);
