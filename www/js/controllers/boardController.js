'use strict';
app.controller('BrdCtrl', function ($scope, $state, BrdFactory, $ionicPlatform, $ionicLoading) {


  var list = [];


  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;


  // 상세정보 보기
  $scope.goDetail = function (post) {
    $state.go('main.board.detail', {id: post.id, post: JSON.stringify(post)});

  };

  //로딩중 화면
  $ionicPlatform.ready(function () {

    $ionicLoading.show({
      template: '<ion-spinner icon="ios"></ion-spinner>'
    });
    BrdFactory.getPosts()
      .then(function (response) {
        // console.log(response.data);
        $scope.posts = response.data;
        $ionicLoading.hide();
      });


  });

  // write 버튼 클릭
  $scope.createBrd = function () {
    console.log("hello");
    $state.go('main.write');
  };

  //
  // $scope.onItemDelete = function(post) {
  //   console.log($scope.posts.indexOf(post));
  //   // $scope.posts.splice($scope.posts.indexOf(post), 1);
  // };


  //삭제버튼 이미지 나오기
  $scope.showDelete = function () {

    $scope.shouldShowDelete = !$scope.shouldShowDelete;
    $scope.shouldShowReorder = !$scope.shouldShowReorder;

  };

  //삭제기능
  $scope.delPost = function ($index,id) {
    list.push(id);
    $scope.posts.splice($index, 1);
  };

  //삭제완료
  $scope.delOk = function () {
    $scope.shouldShowDelete = !$scope.shouldShowDelete;
    $scope.shouldShowReorder = !$scope.shouldShowReorder;

    BrdFactory.delPosts(list);


  };


});

app.controller('detailCtrl', function ($scope, $state,$ionicPopup,BrdFactory,$ionicPlatform,$ionicLoading) {

  $scope.post = JSON.parse($state.params.post);

  var post = {};
  var postId;
  $scope.submit = function () {

    post.title = $scope.post.title;
    post.body = $scope.post.body;
    post.base64 = $scope.post.base64;
    postId = $scope.post.id;


    $ionicPlatform.ready(function () {

      $ionicLoading.show({
        template: '<ion-spinner icon="ios"></ion-spinner>'
      });
      BrdFactory.putPosts(post,postId)
        .then(function () {

          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: '알림',
            template: '게시글 편집 완료'
          });

          alertPopup.then(function () {
            $state.go('main.board.list');
          });

        });


    });






  };
  // console.log($state.params);
  // console.log($state.current);


});

app.controller('writeCtrl', function ($scope, $state, $ionicPopup,$ionicPlatform,$ionicLoading, BrdFactory) {


  $scope.board = {};

  $scope.submit = function () {

    $ionicPlatform.ready(function () {

      $ionicLoading.show({
        template: '<ion-spinner icon="ios"></ion-spinner>'
      });
      BrdFactory.createPosts($scope.board)
        .then(function () {

          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: '알림',
            template: '게시글 등록 완료'
          });

          alertPopup.then(function () {
            $state.go('main.board.list');
          });

        });


    });

  };
});





