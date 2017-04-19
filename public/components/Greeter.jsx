var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

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

module.exports = Greeter;