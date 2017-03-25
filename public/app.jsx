var Greeter = React.createClass({
    // the render method is the only method required for a component
    render: function() {
        return (//open parenthesis are used so return respects the line-breal. otherwise <div> would have to start on this line
            <div>
                <h1>Hello React!</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);