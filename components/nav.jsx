require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require("../js/routes.jsx");

var Nav = React.createClass({
	render: function () {
		return (
			<div>
			<div id="navMenu">
				<h1>ShinyVideo</h1>
					<ul>
						<li><button id="homeLI">Home</button></li>
						<li><button id="videoMenuLI">Video Menu</button></li>
						<li><button id="videoPlayerLI">Video Player</button></li>
						<li><button id="documentationLI">Documentation</button></li>
					</ul>
			</div>
			</div>
		);
	}
});


ReactDOM.render(<Nav />, document.getElementById("headerNav"));

module.exports = Nav;