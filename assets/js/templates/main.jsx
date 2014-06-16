/**
 * @jsx React.DOM
 */

var App = React.createClass({
    render: function () {
        return (
            <h1>HelloWorld</h1>
        );
    }
});

React.renderComponent(
    <App />,
    $('#app')[0]
);
