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
		var dataObj = resp.toJSON();
			console.log("success: ", resp);	
		var	mapData = dataObj.results.map(function(obj){
			return {
				"objectId": obj.objectId,
				"videolink": obj.videolink,
				"imageURL": obj.imageURL,
				"description": obj.description,
				"comments": obj.comments
			}
		})
	}, error: function(err) {
				console.log("error: ", err);
	}
});


var MenuView = React.createClass({
	render: function () {
		var theData = this.props.data.map(function(obj) {
			return (
				<div>
					<div id="menuViewDiv">
						<div id="thumbs"><a href="{obj.videolink}"><img src="{imageURL}"/></a></div>
						<div id="description"><p>{obj.description}</p></div>
					</div>
				</div>
			)
		})
		return(<div id="menuViewContainer">{theData}</div>)
	}
});

ReactDOM.render(<MenuView data={theData}/>, document.getElementById("menuViewContainer"));

module.exports = MenuView;