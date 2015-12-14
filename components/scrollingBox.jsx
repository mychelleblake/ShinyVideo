require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

var ScrollingComments = React.createClass({
	render: function () {
		return (
			<div id="scrollingCommentsDiv">
				<ul>
					<li>data here</li>
				</ul>
			</div>
		)
	}
});

module.exports = ScrollingBox;