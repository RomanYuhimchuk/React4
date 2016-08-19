var React = require('react');

var Counter = React.createClass({
    render: function(){
        return (
            <div className="counter">{this.props.count}</div>
        );
    },
});

module.exports = Counter;