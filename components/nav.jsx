require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var router = require("../js/routes.jsx");

var Link = ReactRouter.Link;

var Nav = React.createClass({
	render: function () {
		return (
			<div>
			<div id="navMenu">
				<h1>ShinyVideo</h1>
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


module.exports = Nav;