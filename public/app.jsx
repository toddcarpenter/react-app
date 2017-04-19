// to see JSX's output see http://babeljs.io/repl/

// these were installed with npm & need ot be explicitly required since we can't assume react is global
var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Todd',
newMessage = 'New message from container component.';

ReactDOM.render(
    <Greeter name={firstName} message={newMessage}/>,
    document.getElementById('app')
);