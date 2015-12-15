var React = require("react");
var ReactDOM = require("react-dom");
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


var PopcornPlayer = React.createClass({
	componentDidMount: function() {
		var pop = Popcorn("#theVideoPlayer");
		console.log(pop);
		pop.controls(true);
		pop.loop(false);
		pop.autoplay(false);
		pop.on("timeupdate", function() {
    		console.log(this.currentTime() );
	})
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
				<div>
					<div id="videoPlayer">
						<div id="playerVideo">
							<PopcornPlayer src={playingVideo.videolink} />
						</div>
					</div>
				</div>
			)
		}
	}
});

//This is where I'm at 
//Steps - 1. person inputs a comment in AddBox - computer checks for events and logs time and comments into object
//2. sends to scrollbox (not sure that's in here)
//3. saves to parse (figuring that out)

var AddBox = React.createClass({
	getInitialState: function() {
		$("#addCommentsForm").on("submit", handler) {
  		event.preventDefault();
  		}
	}
}),
componentDidMount: function () {
	this.setState({
		time: this.props.currentTime,
		comment: this.props.comment
	})
},
_handleChange: function(e) {
	var timeComments = this.props.comments;
	this.setState({
		time: this.props.currentTime,
		comment: this.props.comment
	});
},
_changeScroll: function (e) {
	e.preventDefault();
	this.setState({
		$(ScrollBox).scrollTop()
	})
},
	// keyVideos[].set({
	// time: $("#time").val(),
	// comments: $("#comments").val(),
	// objectId: $("#objectId").val()
	// })
	// $("#time").val("");
	// $("#comments").val("");
	// $("#objectId").val("");
	// keyVideos.save(null, {
	// success: function(resp){
	// },error: function(err){
	// console.log("error ", err);
	return {
		keyVideos: [],
			<div>
				<div id="addCommentsDiv">
					<form id="addCommentsForm" action=""> //what would the action be?
						<input type="hidden" id="objectID"/>
						<input type="textarea" className="addComments" placeholder="Add comments here" id="addCommentBox" value={this.props.comments}/>
						<input type="submit" value="submit">
					</form>
				</div>
			</div>
		}
	}
});


//Not done yet

var ScrollBox = React.createClass({
	getInitialState: function() {
		return {
			keyVideos: [],
				<div>
					<div id="scrollingCommentsDiv">
						<ul>
							<li>scrolling data goes here</li>
						</ul>
				</div>
		}
	}
});
	




			
var GraphBox = React.createClass ({
	render: function () {
		return (
			<div>
				<div id="graphDiv">
					<p>Coming soon...</p>			
				</div>
			</div>
		)
	}
});
					

module.exports = VideoPlayer;


//Steps:
//1. Make compments
//2. Get count time 
//3. Save to parse (componentDidMount)
//4. Check every 1/2 second
//5. Set scroll position (componentwillreceiveprops)

//The scroll div will change state - pass props - change propos - look at React state

//use underscore extend method - compares two objects

// componentWillReceiveProps: function (newProps) {
// 	this.props
// 	newProps
// }





// var plot = $("#graphDiv").plot(data, options).data("plot"); //https://github.com/flot/flot/blob/master/API.md
