Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

    initialize:function () {
        console.log("Router initialized");
    },

    routes:{
        "":"start",
        "rider/:id":"showFriends"
    },

    start:function () {
        app.showView('#content', new StartView());
    },

    wineDetails:function (id) {
        this.before(function () {
            var wine = app.wineList.get(id);
            
        });
    },

    showView:function (selector, view) {
        if (this.currentView)
            this.currentView.close();
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    }

});

tpl.loadTemplates(['start'], function () {
    app = new AppRouter();
    Backbone.history.start();
});
