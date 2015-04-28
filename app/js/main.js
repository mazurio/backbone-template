require.config({
    paths: {
        app : 'js/app',
        jquery : '/js/module/jquery/dist/jquery',
        underscore : '/js/module/underscore/underscore',
        backbone : '/js/module/backbone/backbone'
    }
});

require(['jquery', 'underscore', 'backbone', 'app'], function($, _, Backbone, App) {
    var app = new App();
});