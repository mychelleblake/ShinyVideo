require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require("../js/routes.jsx");



var HomeView = React.createClass({
	render: function () {
		document.addEventListener("DOMContentLoaded", function () {
 			var pop = Popcorn("#video");
				pop.controls(false);
				pop.loop(true);
 				pop.autoplay(true);
			}, false);
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

module.exports = HomeView;