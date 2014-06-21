var Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "help" : "help",
        "details/:squareId": "details"
    },
    help: function () {
        this.currentPage = { 
            name: "help"
        };
    },
    details: function (squareId) {
        this.currentPage = {
            name: "details",
            squareId: squareId
        };
    },
    index: function () {
        this.currentPage = {
            name: "index"
        };
    }
});

var router = new Router();

Backbone.history.start();

module.exports = router;
