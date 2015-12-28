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
				<div id="headerShiny">
					<h1>shinyVideo</h1>
				</div>
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