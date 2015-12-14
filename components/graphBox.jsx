require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;


var GraphBox = React.createClass ({
	render: function () {
		return (
			<div id="graphDiv">
				// var plot = $("#graphDiv").plot(data, options).data("plot"); //https://github.com/flot/flot/blob/master/API.md
			</div>
		)
	}
});

module.exports = GraphBox;