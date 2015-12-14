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
		videoInfo: null,
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
		var	mapData = dataObj.map(function(obj){
			return {
				objectId: obj.objectId,
				videolink: obj.videolink,
				imageURL: obj.imageURL,
				videoInfo: obj.videoInfo,
				comments: obj.comments
			}
			console.log("here it is ", mapData);
		})
	}, error: function(err) {
				console.log("error: ", err);
	}
});


var MenuView = React.createClass({
	render: function () {
			return (
				<div>
					<div id="menuViewDiv">
						<ul id="thumbView">
							<li><a href="{this.props.videolink}"><img src="{this.props.imageURL}"/></a></li>
							<li>{this.props.videoInfo}</li>
						</ul>
					</div>
				</div>
			)
	}
});

ReactDOM.render(<MenuView />, document.getElementById("menuViewContainer"));

module.exports = MenuView;