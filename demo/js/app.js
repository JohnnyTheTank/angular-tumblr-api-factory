var app = angular.module("app", ['jtt_tumblr']);
app.controller('controller', ['$scope', 'tumblrFactory', function($scope, tumblrFactory) {

    var _api_key = '<YOUR_TUMBLR_API_KEY>';

    tumblrFactory.getPostsFromPage({
        page:"namikamusik",
        limit:20,
        api_key:_api_key,
    }).then(function(_data){
        console.log("posts from page");
        console.log(_data);
    });

    tumblrFactory.getInfoFromPage({
        page:"namikamusik",
        api_key:_api_key,
    }).then(function(_data){
        console.log("info from page");
        console.log(_data);
    });

    tumblrFactory.getAvatarFromPage({
        page:"namikamusik",
        size:512,
        api_key:_api_key,
    }).then(function(_data){
        console.log("avatar from page");
        console.log(_data);
    });


}]);
