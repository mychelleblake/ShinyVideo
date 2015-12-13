require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require("../js/routes.jsx");



var VideoLink = Backbone.Model.extend ({
	initialize: function () {		
	},
	defaults: {
		objectId: null,
		videolink: null,
		imageURL: null,
		description: null,
		comments: null
	},
	_parse_class_name: "videolink",
	idAttribute: "objectId"
});

var Videos = Backbone.Collection.extend ({
	model: VideoLink,
	_parse_class_name: "videolink",
})

var VideosCollection = new Videos ();

	VideosCollection.fetch({
		success: function(resp) {
			var dataObj = {"data": resp.toJSON()};
			console.log("success: ", resp);	
			// ReactDOM.render(<MenuView />, document.getElementById("container"));		
		}, error: function(err) {
			console.log("error: ", err);
		}
});


var MenuView = React.createClass({
	render: function () {
		return (
			<div>
			<div id="menuViewDiv">
				<div id="thumbs"></div>
				<div id="description"></div>
			</div>
			</div>
		)
	}
});

module.exports = MenuView;