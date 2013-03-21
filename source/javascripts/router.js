Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    this.fadeOut('fast', function()
    {
        this.remove();
        this.unbind();
    })
    
};

var AppRouter = Backbone.Router.extend({

    initialize:function () {
        console.log("Router initialized");
    },

    routes:{
        "":"start",
        "rider/:id":"showRiders"
    },

    start:function () {
        app.showView('#content', new StartView());
    },

    showRiders:function (id) {
        app.showView('#content', new RidersView({model:id}));
    },
    showView:function (selector, view) {
        if (this.currentView)
            this.currentView.close();
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    }
    
});

tpl.loadTemplates(['start', ['riders']], function () {
    app = new AppRouter();
    Backbone.history.start();
});
