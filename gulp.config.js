/**
 * Created by fr0609 on 6/28/15.
 */
module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var server = 'src/server'
    var temp = './tmp/';
    var config = {
        // all js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        client: client,
        css: temp + 'styles.css',
        index: client + 'index.html',
        js: [
            clientApp + '/**/*.module.js',
            clientApp + '/**/*.js',
            '!' + clientApp + '/**/*.spec.js'

        ],
        less: client + 'styles/styles.less',
        server : server,
        temp: temp,
        bower: {
            json : require('./bower.json'),
            directory: './bower_components/',
            ignorePath : '../..'
        },
        browserReloadDelay : 1000,
        /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'
    };
    config.getWiredepDefaultOptions = function () {

        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath

        };

        return options;
    };



    return config;
}
