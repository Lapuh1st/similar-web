angular
  .module('ciklum.similar')
  .factory('dataFactory', function($http){
    'use strict';

    var activeSiteData = function(activeSite) {
      return $http.get('http://api.similarweb.com/site/' + activeSite + '/rankoverview?userkey=a6fd04d833f2c28ce7c30dc957bf481e&format=json').then(function (response) {
        return response.data;
      });
    };

    return {
      getActiveSiteData: function (siteurl){
        return activeSiteData(siteurl);
      }
    };
  });
