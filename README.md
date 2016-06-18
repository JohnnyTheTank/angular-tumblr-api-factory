**angular-tumblr-api-factory** is an angularjs module with a tumblr api factory.

[![npm version](https://badge.fury.io/js/angular-tumblr-api-factory.svg)](https://badge.fury.io/js/angular-tumblr-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-tumblr-api-factory.svg)](https://badge.fury.io/bo/angular-tumblr-api-factory)

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-tumblr-api-factory`
    2. `npm install --save angular-tumblr-api-factory`
    3. download [angular-tumblr-api-factory.zip](https://github.com/JohnnyTheTank/angular-tumblr-api-factory/zipball/master)
2. Add `jtt_tumblr` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-tumblr-api-factory/dist/angular-tumblr-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-tumblr-api-factory/dist/angular-tumblr-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-tumblr-api-factory.min.js"></script>
    ```
4. Use the factory `tumblrFactory`


### factory methods

#### getInfo

```js
tumblrFactory.getInfoFromPage({
    page:"<PAGE_NAME>",
    api_key:"<YOUR_TUMBLR_API_KEY>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getAvatar

```js
tumblrFactory.getAvatarFromPage({
    page:"<PAGE_NAME>",
    size:"<AVATAR_SIZE>", // (optional) Valid values: 16, 24, 30, 40, 48, 64, 96, 128, 512
    api_key:"<YOUR_TUMBLR_API_KEY>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

#### getPosts
Get all parameters [here](https://www.tumblr.com/docs/en/api/v2#posts)
```js
// all parameters: https://www.tumblr.com/docs/en/api/v2#posts
tumblrFactory.getPostsFromPage({
    page:"<PAGE_NAME>",
    limit:"<LIMIT>", // (optional) valid values: 0-20 | default: 20
    type:"<POST_TYPE>", // (optional) valid values: text, quote, link, answer, video, audio, photo, chat
    api_key:"<YOUR_TUMBLR_API_KEY>",
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```

## Tumblr JSON API

* docs: https://www.tumblr.com/docs/en/api/v2
* official api console: https://api.tumblr.com/console/calls/user/info
* unofficial api console: https://apigee.com/console/tumblr


## License

MIT