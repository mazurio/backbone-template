define(['backbone'], function(Backbone) {
    var AppView = Backbone.View.extend({
        el: '#element',

        initialize: function(){
            this.render();
        },

        render: function(){
            this.$el.html("Hello World");
        }
    });

    var App = function() {
        var view = new AppView;

        console.log("New app?");
    };

    App.prototype = {

    };

    return App;
});