var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var router = require("../js/routes.jsx");

var Link = ReactRouter.Link;

var TheFooter = React.createClass({
	render: function () {
		return (
			<div>
			<div id="theFooter">
					<p><a href="http://www.mychelleblake.com" target="_blank">Website by Bhean Madra Communications - 2016 </a></p>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/MenuView">Video Menu</Link></li>
						<li><Link to="/Library">Library</Link></li>
					</ul>
			</div>
			</div>
		);
	}
});


module.exports = TheFooter;