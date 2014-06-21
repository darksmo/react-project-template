var React = require("../../vendor/react/js/react");


var HelpPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>The help page</h1>
                <ul>
                    <li>Go to <a href="#">Index</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = HelpPage;
