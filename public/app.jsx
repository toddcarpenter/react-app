// to see JSX's output see http://babeljs.io/repl/

// this is a child component. It is presentational
var GreeterMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>h1 tag</h1>
                <p>p tag</p>
            </div>
        );
    }
});

// this is a child component. It is presentational
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var name = this.refs.name.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name"/>
                    <input type="submit"/>
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
            name: 'React',
            message: 'This is from a component!'
        };
    },
    // returns an object with inital state from property provided
    // then you retrieve it with this.state.name below
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    // when setting up a parent to handle the property/state, you start it with "handle"
    handleNewName: function (name) {
        this.setState({
            name: name
        });
    },
    // the render method is the only method required for a component
    render: function() {
        var name = this.state.name;
        var message = this.props.message;

        return (//open parenthesis are used so return respects the line-break. otherwise <div> would have to start on this line
            // you can only render one root element
            // multiple root elems will throw an error
            <div>
                {/*this is a JS expression. you can add any JS you like in here*/}

                <h1>hello {name}</h1>
                <p>p tag</p>

                {/* a nested componnents */}
                <GreeterMessage/>

                {/* when setting up a child to pass the property/state, you start it with "on" */}
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});

var firstName = 'Todd',
newMessage = 'This is from a prop!';

ReactDOM.render(
    <Greeter name={firstName} message={newMessage}/>,
    document.getElementById('app')
);