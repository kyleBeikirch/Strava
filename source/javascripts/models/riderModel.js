window.Rider = Backbone.Model.extend({
    urlRoot:"../api/rider",
    defaults:{
        "id":null,
        "stravaID": "",
        "name":"",
        "location":"",
        "picture":""
    }
});

window.Riders = Backbone.Collection.extend({
    model:Rider,
    url:"../api/rider"
});