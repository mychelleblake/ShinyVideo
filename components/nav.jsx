require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require("../js/routes.jsx");

var Nav = React.createClass({
	render: function () {
		return (
			<div>
				<h1>ShinyVideo</h1>
					<ul>
						<li><button id="homeLI">Home</button></li>
						<li><button id="videoMenuLI">Video Menu</button></li>
						<li><button id="videoPlayerLI">Video Player</button></li>
						<li><button id="documentationLI">Documentation</button></li>
					</ul>
			</div>
		)
	},
});


ReactDOM.render(<nav />, document.getElementById("navMenu"));

module.exports = Nav;