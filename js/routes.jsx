// require('../css/main.css');
// require('../css/video.css');
// require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var backbone = require('backbone');

var HomeView = require ("../components/homeView.jsx");
var Documentation = require ("../components/documentation.jsx");
var MenuView = require ("../components/menuView.jsx");
var VideoPlayer = require ("../components/videoPlayer.jsx");
var Nav = require("../components/nav.jsx");

var Router = Backbone.Router.extend({
	initialize: function() {
		Backbone.history.start({pushState: true});
	},
	routes: {
		"videoPlayer": "videoPlayer",
		"menuView": "menuView",
		"documentation": "documentation",
		"": ":index"
	},
});

ReactDOM.render(<HomeView />, document.getElementById("container"));

var router = new Router ();

// router.on("route:videoPlayer", function() {
// 	$("#homeView").hide();
// 	$("documentation").hide();
// 	$("menuView").hide();
// 	$("#videoPlayer").show();
// 	ReactDOM.render(<videoPlayer />, document.getElementById("container"));	
// });

// router.on("route:menuView", function() {
// 	$("homeView").hide();
// 	$("videoPlayer").hide();
// 	$("documentation").hide();
// 	$("menuView").show();
// 	ReactDOM.render(<menuView />, document.getElementById("container"));
// });

// router.on("route:documentation", function() {
// 	$("homeView").hide();
// 	$("videoPlayer").hide();
// 	$("menuView").hide();
// 	$("documentation").show();
// 	ReactDOM.render(<documentation />, document.getElementById("container"));
// });



module.exports = Router;
