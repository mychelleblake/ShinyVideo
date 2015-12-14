var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var backbone = require('backbone');
var HomeView = require ("../components/homeView.jsx");
var Documentation = require ("../components/documentation.jsx");
var MenuView = require ("../components/menuView.jsx");
var VideoPlayer = require ("../components/videoPlayer.jsx");
var Nav = require("../components/nav.jsx");

var Layout = React.createClass ({
	render: function () {
		return (
			<div><Nav/>
				<div>{this.props.children}
				</div>
			</div>
		)
	}
})

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var routes = (
	<Router> 
	<Route component={Layout}>
		<Route component={HomeView} path="/"></Route>
		<Route component={MenuView} path="/MenuView"></Route>
		<Route component={VideoPlayer} path="/VideoPlayer/:objectId"></Route>
		<Route component={Documentation} path="/Library"></Route>
	</Route>
	</Router>
)



module.exports = routes;
