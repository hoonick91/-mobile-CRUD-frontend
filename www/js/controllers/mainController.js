app.controller('MainCtrl',function ($scope,$state,$ionicHistory) {
  $scope.back = function () {

    $ionicHistory.goBack();
  };

  $scope.writeBrd = function () {
    console.log('click write');
    $state.go('main.write');
  };


});
