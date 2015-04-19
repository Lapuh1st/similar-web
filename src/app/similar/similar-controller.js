angular
  .module('ciklum.similar')
  .controller('SimilarCtrl', ['$scope', '$window', '$sce', 'dataFactory', function ($scope, $window, $sce, dataFactory) {
    'use strict';

    var activeSite = $scope.activeSite = 'ebay.com';
    $scope.iframeSrc = $sce.trustAsResourceUrl('http://makeup.com.ua');

    var getActiveSiteData = function (activeSite){
      dataFactory.getActiveSiteData(activeSite).then(function(data){
        $scope.site = data;
      });
    };

    getActiveSiteData(activeSite);
    $scope.setActiveSiteUrl = function (siteurl) {
      var iframeUrl = 'http://' + siteurl;
      activeSite = siteurl || $scope.resultSite[0].Url;
      $scope.search = '';
      $scope.activeSite = activeSite;
      getActiveSiteData(activeSite);
      $scope.iframeSrc = $sce.trustAsResourceUrl(iframeUrl);
    };

  }]);



