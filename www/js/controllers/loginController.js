'use strict';
app.controller('LoginCtrl',function ($scope,$state,$ionicPlatform,$ionicLoading,LoginFactory) {

  $scope.user = {
    email : '',
    password : ''
  };

  $scope.login = function () {
    console.log($scope.user.email);
    console.log($scope.user.password);

    $ionicPlatform.ready(function () {

      $ionicLoading.show({
        template: '<ion-spinner icon="ios"></ion-spinner>'
      });

      LoginFactory.Login($scope.user)
        .then(function (response) {
          // console.log(response);
          $ionicLoading.hide();

          localStorage.setItem('token',response.data.token);
          // return $state.go('main.board.list');
          return $state.go('main.board.list');
        });



    })


  };



});
