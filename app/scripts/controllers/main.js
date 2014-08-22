'use strict';

angular.module('androidtoolboxApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.list = [{"name":"Estimote Android SDK","category":"Sensors","link":"https://github.com/Estimote/Android-SDK"},
    {"name":"Picasso","category":"Images","link":"https://github.com/square/picasso"},
    {"name":"StandOut","category":"Services","link":"https://github.com/pingpongboss/StandOut"},
    {"name":"GSON","category":"Data","link":"https://code.google.com/p/google-gson"},
    {"name":"Retrofit","category":"Data","link":"http://square.github.io/retrofit/"},
    {"name":"Otto","category":"Optimization","link":"https://github.com/square/otto"},
    {"name":"Android-Beacon-Library","category":"Sensors","link":"https://github.com/AltBeacon/android-beacon-library"}];
    // $http.get("./libraries.json").success(function (data) {
    //     $scope.list = data;
    // });
  });
