window.RidersView = Backbone.View.extend({

    initialize:function () {

        this.template = _.template(tpl.get('riders'));
        this.model.bind("change", this.render, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    },

    events:{
        "submit form#idSubmit": "change",
    },

    change:function (event) {
        event.preventDefault();
        var stravaID = this.$('input[name=stravaID]').val();
 
        Backbone.history.navigate('rider/:' + stravaID, true);
    }

});