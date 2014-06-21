var React = require("../../vendor/react/js/react");

var Fluxxor = require("../../vendor/fluxxor/fluxxor.min"),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var IndexPage = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("SquareStore")],

    // Required by StoreWatchMixin
    getStateFromFlux: function () {
        var flux = this.getFlux();
        return {
            squares: flux.store("SquareStore").getState()
        }
    },
    render: function () {
        var squares = [];
        var i, sq;
        for (i=0; sq = this.state.squares.squares[i++];) {
            squares.push(<li><a href={ '#details/' + sq.id }>{ sq.name }</a></li>);
        }
        return (
            <div>
                <h1>This is the index page</h1>
                <h2>{this.state.squares.squares.length} existing squares:</h2>
                <ul>
                { squares }
                </ul>
                <h2>Add a square</h2>
                <input id="myText" type="text"></input>
                <button onClick={this.handleClick}>Add</button>
                <ul>
                    <li>Go to the <a href="#help">help</a> page.</li>
                </ul>
            </div>
        );
        
    },
    handleClick: function () {
        var text = $(this.getDOMNode()).find("#myText").val();
        this.getFlux().actions.addSquare(text);
    }
});

module.exports = IndexPage;
