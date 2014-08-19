'use strict';

angular.module('androidtoolboxApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.list = [{"name":"Estimote Android SDK","category":"Sensors","link":"https://github.com/Estimote/Android-SDK"},
    {"name":"Picasso","category":"Images","link":"https://github.com/square/picasso"}];

    // $http.get("./libraries.json").success(function (data) {
    //     $scope.list = data;
    // });
  });
