var React = require("../../vendor/react/js/react"),
    Fluxxor = require("../../vendor/fluxxor/fluxxor.min"),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Application = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("SquareStore")],

    // Required by StoreWatchMixin
    getStateFromFlux: function () {
        var flux = this.getFlux();

        return {
            squares: flux.store("SquareStore").getState()
        }
    },
    render: function () {
        return (
            <div>
                <h1>Hello!</h1>
                <p>There are { this.state.squares.squares.length } squares in the square store</p>
                <button onClick={ this.handleClick } type="button">Add a Square</button>
            </div>
        );
    },
    handleClick: function (e) {
        this.getFlux().actions.addSquare('SomeSquare');
    }
});

module.exports = Application;
