require("../css/main.css");
require("../css/normalize.css");
require("../css/video.css");
var React = require("react");
var ReactDOM = require("react-dom");
var router = require("../js/routes.jsx");



//Adds Video Player


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


var PopcornPlayer = React.createClass({
	componentDidMount: function() {
		var pop = Popcorn("#theVideoPlayer");
		console.log(pop);
		pop.controls(true);
		pop.loop(false);
		pop.autoplay(false);

	},

	render: function() {
		return (
			<div>
				<video id="theVideoPlayer">
				<source src={this.props.src}></source>
				</video>
			</div>
		);
	}
})

var VideoPlayer = React.createClass({
	getInitialState: function() {
		return {
			keyVideos: [],
		}
	},
	componentDidMount: function() {
		var self = this;
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
				self.setState ({keyVideos: mapData})
			}, error: function(err) {
						console.log("error: ", err);
			}
		});
	},




	render: function () {
		if (this.state.keyVideos.length==0)
		{
			return <div id="blankVideo"></div>
		}
		else {
			var self=this;
			var playingVideo = _.find (this.state.keyVideos, function(video) {
				return video.objectId==self.props.params.objectId
			})
			return (
			<div id="videoPlayer">
			 	
    			<div id="playerVideo">
    				<PopcornPlayer src={playingVideo.videolink} />
				</div>
			</div>
		)
		}

	}
});





module.exports = VideoPlayer;


