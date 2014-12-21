'use strict';

angular.module('androidtoolboxApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get("../../libraries.json").success(function (data) {
        $scope.list = data;
        console.log(data);
    });
  });
