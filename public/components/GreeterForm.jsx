var React = require('react');

// this is a child component. It is presentational
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};

        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
        
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name"/><br/>
                    <textarea ref="message"/><br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
});

// think of this as a function return
module.exports = GreeterForm;