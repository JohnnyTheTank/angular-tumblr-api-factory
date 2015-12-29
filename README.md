**angular-tumblr-api-factory** is an angularjs module with a tumblr api factory.

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

## Usage

1. Install via [bower](http://bower.io/) :
    1. `bower install --save angular-tumblr-api-factory`
2. Add `jtt_tumblr` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:

    ```html
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-tumblr-api-factory/src/angular-tumblr-api-factory.js"></script>
    ```

4. Use the factory `tumblrFactory`


### factory methods

#### getPosts

```js
tumblrFactory.getPostsFromPage({
    page:"<PAGE_NAME>",
    limit:"<LIMIT>", // (optional) valid values: 0-100 | default: 25
}).success(function (_data) {
    //on success
}).error(function (_data) {
    //on error
});
```

## Tumblr Graph JSON API

* docs: https://www.tumblr.com/docs/en/api/v2
* official api console: https://api.tumblr.com/console/calls/user/info
* unofficial api console: https://apigee.com/console/tumblr


## License

MIT