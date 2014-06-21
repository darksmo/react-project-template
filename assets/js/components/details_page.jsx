var React = require("../../vendor/react/js/react");

var Fluxxor = require("../../vendor/fluxxor/fluxxor.min"),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var DetailsPage = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("SquareStore")],
    getStateFromFlux: function () {
        var flux = this.getFlux();

        return {
            square: flux.store("SquareStore").getSquare(this.props.squareId)
        }
    },
    render: function () {
        console.log(this.state);
        return (
            <div>
                <h1>Showing details for square { this.state.square.id }</h1>
                <ul>
                    <li>Name: {this.state.square.name}</li>
                    <li><a href="#">Go back to index</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = DetailsPage;
