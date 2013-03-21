window.StartView = Backbone.View.extend({

    initialize:function () {

        this.template = _.template(tpl.get('start'));
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    },

    events:{
        "submit form#idSubmit": "getRider",
    },

    getRider:function (event) {
        event.preventDefault();
        var stravaID = this.$('input[name=stravaID]').val();
        var self = this;
        app.Riders.create(this.model, {
                success:function () {
                    app.navigate('wines/' + self.model.id, false);
                }
            });

        return false;
 
        Backbone.history.navigate('rider/:' + stravaID, true);
    }

});