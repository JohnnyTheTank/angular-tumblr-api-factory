/**
    @name: angular-tumblr-api-factory 
    @version: 0.5.0 (22-02-2016) 
    @author: Jonathan Hornung 
    @url: https://github.com/JohnnyTheTank/angular-tumblr-api-factory#readme 
    @license: MIT
*/
"use strict";

/**
 @author Jonathan Hornung (https://github.com/JohnnyTheTank)
 @url https://github.com/JohnnyTheTank/angular-tumblr-api-factory
 @licence MIT
 */

angular.module("jtt_tumblr", [])
    .factory('tumblrFactory', ['$http', 'tumblrSearchDataService', function ($http, tumblrSearchDataService) {

        var tumblrFactory = {};

        tumblrFactory.getPostsFromPage = function (_params) {
            var tumblrSearchData = tumblrSearchDataService.getNew("postsFromPage", _params);

            return $http.jsonp(
                tumblrSearchData.url,
                {
                    method: 'GET',
                    params: tumblrSearchData.object,
                }
            );
        };

        tumblrFactory.getInfoFromPage = function (_params) {
            var tumblrSearchData = tumblrSearchDataService.getNew("infoFromPage", _params);

            return $http.jsonp(
                tumblrSearchData.url,
                {
                    method: 'GET',
                    params: tumblrSearchData.object,
                }
            );
        };

        tumblrFactory.getAvatarFromPage = function (_params) {
            var tumblrSearchData = tumblrSearchDataService.getNew("avatarFromPage", _params);

            return $http.jsonp(
                tumblrSearchData.url,
                {
                    method: 'GET',
                    params: tumblrSearchData.object,
                }
            );
        };

        return tumblrFactory;
    }])
    .service('tumblrSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            var version;

            if(_params && angular.isDefined(_params.version)) {
                version = _params.version+"/";
            } else {
                version = "v2/";
            }
            return 'https://api.tumblr.com/'+version+'blog/';
        };

        this.fillDataInObjectByList = function(_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if(angular.isDefined(_params[value])) {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {

            var tumblrSearchData = {
                object: {
                    api_key:_params.api_key || undefined,
                    callback: "JSON_CALLBACK"
                },
                url: "",
            };

            if (angular.isDefined(_params.limit)) {
                tumblrSearchData.object.limit = _params.limit;
            }

            switch (_type) {
                case "postsFromPage":
                    tumblrSearchData = this.fillDataInObjectByList(tumblrSearchData, _params, [
                        'type', 'id', 'tag', 'offset', 'reblog_info', 'notes_info', 'filter'
                    ]);

                    tumblrSearchData.url = this.getApiBaseUrl()+_params.page+".tumblr.com/posts";
                    break;

                case "infoFromPage":
                    tumblrSearchData.object.limit = undefined;

                    tumblrSearchData.url = this.getApiBaseUrl()+_params.page+".tumblr.com/info";
                    break;

                case "avatarFromPage":
                    tumblrSearchData.object.limit = undefined;

                    var size = "";

                    if (angular.isDefined(_params.size)) {
                        size = "/"+_params.size;
                    }

                    tumblrSearchData.url = this.getApiBaseUrl()+_params.page+".tumblr.com/avatar"+size;
                    break;

            }

            return tumblrSearchData;
        };
    });