/** @jsx React.DOM */
var Property = React.createClass({
    render: function() {
        return (
            <div className="property">
                <span>{this.props.score}</span>
                <h1>{this.props.title}({this.props.bedroomcount} rooms)</h1>
                <p>{this.props.description}</p>
                <ul><li>{this.props.lon}</li><li>{this.props.lat}</li></ul>
            </div>
            );
    }
});

module.exports = Property;