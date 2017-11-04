app.factory('BrdFactory',function ($http,BASE_URL) {
  var header = {
    'Accept':'application/json',
    'authorization':'bearer '+localStorage.getItem('token')
  };
  return{
    getPosts:function () {

      console.log(header);

      return $http.get(BASE_URL+'/posts',{headers:header});
    },

    createPosts:function (post) {
      console.log(post);
      return $http.post(BASE_URL+'/posts',post,{headers:header});
    },
    putPosts: function (post,postId) {
      return $http.put(BASE_URL+'/posts/'+postId,post,{headers:header});
    },

    delPosts: function (list) {
      console.log(list);
      for(var i=0;i<list.length;i++){
        $http.delete(BASE_URL+/posts/+list[i],{headers:header});
      };

    }
  }
});
