// to see JSX's output see http://babeljs.io/repl/

var Greeter = React.createClass({

    // sets defaults for properties if noone are set on the Component
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is from a component!'
        }
    },
    // returns an object with inital state from property provided
    // then you retrieve it with this.state.name below
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    onButtonClick: function (e) {
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;

        // remove entered text in field
        nameRef.value = '';

        if ( typeof name === 'string' && name.length > 0 ) {
            this.setState({
                name: name
            });
        }
    },
    // the render method is the only method required for a component
    render: function() {
        var name = this.state.name;
        var message = this.props.message;

        return (//open parenthesis are used so return respects the line-break. otherwise <div> would have to start on this line
            // you can only render one root element
            // multiple root elems will throw an error
            <div>
                <h1>Hello {name}!</h1>

                {/*this is a JS expression. you can add any JS you like in here*/}
                <p>{message}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <input type="submit"/>
                </form>
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