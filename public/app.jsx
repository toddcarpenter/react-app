// to see JSX's output see http://babeljs.io/repl/

// these were installed with npm & need ot be explicitly required since we can't assume react is global
var React = require('react');
var ReactDOM = require('react-dom');

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

// this is the container componnet. It maintains State
var Greeter = React.createClass({

    // sets defaults for properties if noone are set on the Component
    getDefaultProps: function() {
        return {
            name: 'Default',
            message: 'Default message from container component.'
        };
    },
    // returns an object with inital state from property provided
    // then you retrieve it with this.state.name below
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    // when setting up a parent to handle the property/state, you start it with "handle"
    handleNewData: function (updates) {
        console.dir(updates);
        this.setState(updates);

        // if ( update.name ) {
        //     this.setState({
        //         name: update.name
        //     });
        // }

        // if ( update.message ) {
        //     this.setState({
        //         message: update.message
        //     });
        // }
    },
    // the render method is the only method required for a component
    render: function() {
        var name = this.state.name;
        var message = this.state.message;

        return (//open parenthesis are used so return respects the line-break. otherwise <div> would have to start on this line
            // you can only render one root element. multiple root elems will throw an error
            <div>
                {/*this is a JS expression. you can add any JS you like in here*/}

                {/* a nested componnents */}
                <GreeterMessage name={name} message={message} />

                {/* when setting up a child to pass the property/state, you start it with "on" */}
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

var firstName = 'Todd',
newMessage = 'New message from container component.';

ReactDOM.render(
    <Greeter name={firstName} message={newMessage}/>,
    document.getElementById('app')
);