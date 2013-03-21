window.StartView = Backbone.View.extend({

    initialize:function () {

        this.template = _.template(tpl.get('start'));
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