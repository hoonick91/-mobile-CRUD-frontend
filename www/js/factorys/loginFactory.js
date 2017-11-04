app.factory('LoginFactory',function ($http,BASE_URL) {
  return{
    Login:function (user) {
      var url = BASE_URL + '/login';
      console.log(user);
      return $http.post(url,user);
    }
  }

});
