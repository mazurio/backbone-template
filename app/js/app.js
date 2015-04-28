define(['backbone'], function(Backbone) {

    var ItemView = Backbone.View.extend({
        tagName: 'li',

        initialize: function() {
            _.bindAll(this, 'render');
        },

        render: function() {
            $(this.el).html('<span>'+this.model.get('id')+' '+this.model.get('title')+'</span>');

            return this;
        }
    });

    var Item = Backbone.Model.extend({
        defaults: {
            id: 0,
            title: "title"
        }
    });

    var List = Backbone.Collection.extend({
        model: Item
    });

    var ListView = Backbone.View.extend({
        el: $('body'),

        events: {
            'click button#add': 'addItem'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'addItem', 'appendItem');

            this.collection = new List();
            this.collection.bind('add', this.appendItem);

            this.counter = 0;
            this.render();
        },

        render: function() {
            $(this.el).append("<button id='add'>Add list item</button>");
            $(this.el).append("<ul></ul>");
        },

        addItem: function() {
            var item = new Item();
            item.set({
                id: this.counter,
                title: item.get('title') + this.counter
            });

            this.collection.add(item);
            this.counter++;
        },

        appendItem: function(item) {
            var itemView = new ItemView({
                model: item
            });

            $('ul', this.el).append(itemView.render().el);
        }
    });

    return function() {
        var listView = new ListView();

        console.log("Initializing listView.");
    };
});