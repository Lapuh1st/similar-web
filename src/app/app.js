
angular.module('ciklum', [
  'ngRoute',
  'ciklum.similar'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/similar', {
      controller: 'SimilarCtrl',
      templateUrl: '/ciklum/similar/similar.html'
    })
    .otherwise({
      redirectTo: '/similar'
    });
});
