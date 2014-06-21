var React = require("../vendor/react/js/react"),
    Fluxxor = require("../vendor/fluxxor/fluxxor.min");

var Application = require("./components/application.jsx"),
    SquareStore = require("./stores/square_store"),
    router = require("./router"),
    actions = require("./actions");

var stores = {
    SquareStore: new SquareStore()
};

var flux = new Fluxxor.Flux(stores, actions);

React.renderComponent(<Application router={router} flux={flux} />, $('#app')[0]);
