var React = require('react');
var ReactDOM = require('react-dom');
var router = require("../js/routes.jsx");



var HomeView = React.createClass({
	componentDidMount: function() {
 		var pop = Popcorn("#video");
		pop.controls(false);
		pop.loop(true);
 		pop.autoplay(true);
	},
	render: function () {
		return (
			<div>
				<div id="headerVideo">
					<video id="video"> 			
					<source src="../assets/shinyVideoNew.mp4"></source>
					</video>
				</div>
			</div>
		)
	}
	
});


module.exports = HomeView;