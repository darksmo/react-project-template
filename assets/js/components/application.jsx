var React = require("../../vendor/react/js/react");
/*
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
*/

var HelpPage = require('./help_page.jsx'),
    DetailsPage = require('./details_page.jsx'),
    IndexPage = require('./index_page.jsx');

var Application = React.createClass({
    componentWillMount: function () {
        this.routeCallback = (function () {
            this.forceUpdate();
        }).bind(this);

        this.props.router.on("route", this.routeCallback);
    },
    componentWillUnmount: function () {
        this.props.router.off("route", this.routeCallback);
    },
    render: function () {
        if (this.props.router.currentPage.name === "help") {
            return (<HelpPage flux={this.props.flux} />);
        }
        if (this.props.router.currentPage.name === "details") {
            return (<DetailsPage flux={this.props.flux} 
                squareId={this.props.router.currentPage.squareId}
            />);
        }
        else {
            return (<IndexPage flux={this.props.flux} />);
        }
    }
});

module.exports = Application;
