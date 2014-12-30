module.exports = function (config) {
  
  var rewirePlugin = require('rewire-webpack');

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    
    /**
     * Either target the testindex.js file to get one
     * big webpack bundle full of tests, which are then
     * run.  Or else, target individual test files
     * directly, in which case you get a webpack bundleOptions
     * for each test file.
     * https://github.com/webpack/karma-webpack
     */
    
    //    individual test bundles
    //files: [
    //  'test/**/*-test.js'
    //],

    //    single test bundle
    files: [
      'test/testindex.js'
    ],
    exclude: [],

    //    individual test bundles
    //preprocessors: {
    //  'test/**/*-test.js': ['webpack']
    //},

    //    single test bundle
    preprocessors: {
      'test/testindex.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
          {test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css"},
          {test: /\.useable\.css$/, loader: "style/useable!css"},
          {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
          {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/octet-stream"
          },
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=image/svg+xml"
          },
          {test: /\.js$/, loader: 'jsx-loader'}
        ]
      },
      plugins: [
        new rewirePlugin()
      ]
    },

    webpackServer: {
      stats: {
        colors: true
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'junit'],

    junitReporter: {
      outputFile: 'reports/karma-test-results.xml',
      suite: ''
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Firefox'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true

    //plugins: [
    //  require('karma-webpack'),
    //  require('karma-jasmine'),
    //  require('karma-chrome-launcher'),
    //  require('karma-firefox-launcher'),
    //  require('karma-junit-reporter')
    //]
  });
};
