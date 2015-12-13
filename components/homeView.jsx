require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require("../js/routes.jsx");



var HomeView = React.createClass({
	render: function () {
		return (
			<div>
				<div id="headerVideo">
					<video id="video"> 			
					<source src="../assets/Untitled.mp4"></source>
					</video>
				</div>
			</div>
		)
	}
	
});

// ReactDOM.render(<homeView />, document.getElementById("container"));

module.exports = HomeView;