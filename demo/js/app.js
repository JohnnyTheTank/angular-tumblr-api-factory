var app = angular.module("app", ['jtt_tumblr']);
app.controller('controller', ['$scope', 'tumblrFactory', function($scope, tumblrFactory) {

    var _api_key = '<YOUR_TUMBLR_ACCESS_TOKEN>';

    tumblrFactory.getPostsFromPage({
        page:"namikamusik",
        limit:20,
        api_key:_api_key,
    }).success(function(_data){
        console.log("posts");
        console.log(_data);
    });


}]);
