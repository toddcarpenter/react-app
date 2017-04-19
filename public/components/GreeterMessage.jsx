var React = require('react');

// this is a child component. It is presentational
var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

// think of this as a function return
module.exports = GreeterMessage;