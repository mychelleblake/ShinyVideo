require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require ("routes.jsx");

var Nav = React.createClass({
	render: function () {
		return (
			<div>
				<h1>ShinyVideo</h1>
					<ul>
						<li id="homeLI"><button>Home</button></li>
						<li id="videoMenuLI"><button>Video Menu</button></li>
						<li id="videoPlayerLI"><button>Video Player</button></li>
						<li id="documentationLI"><button>Documentation</button></li>
					</ul>
			</div>
		)
	}
	ReactDOM.(<nav />), document.getElementById("navMenu"));
});

module.exports = Nav;