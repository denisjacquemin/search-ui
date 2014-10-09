/** @jsx React.DOM */
var Property = require('./property.jsx');

var Properties = React.createClass({
    render: function() {
        var propertyNodes = this.props.data.map(function (property) {
            var p = property._source.property;
            return (
                <Property title={p.title}
                description={p.description}
                bedroomcount={p.bedroomcount}
                lon={p.location.lon}
                lat={p.location.lat}
                score={property._score} ></Property>
                );
        });
        return (
            <div className="properties">
              {propertyNodes}
            </div>
            );
    }
});

module.exports = Properties;
