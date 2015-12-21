var React = require("react");
var ReactDOM = require("react-dom");
var router = require("../js/routes.jsx");
var $ = require('jquery');

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
		
		pop.controls(true);
		pop.loop(false);
		pop.autoplay(false);

		pop.on("timeupdate", () => {
    		if (this.props.handleTimeUpdate) {
    			this.props.handleTimeUpdate(pop);
    		}
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
			currentTime: 0
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
	handleTimeUpdate: function(pop) {
		this.setState({ currentTime: pop.currentTime() });
	},
	render: function () {
		if (this.state.keyVideos.length==0)
		{
			return <div id="blankVideo"></div>
		}
		else {
			var self = this;
			var playingVideo = _.find(this.state.keyVideos, function(video) {
				return video.objectId == self.props.params.objectId
			})
			return (
				<div id="videoPage">
					<div id="videoPlayer">
						<div id="playerVideo" className="left-pane">
							<PopcornPlayer src={playingVideo.videolink} handleTimeUpdate={self.handleTimeUpdate} />
						</div>
						
							<div className="right-pane">
								<ScrollBox comments={playingVideo.comments} currentTime={self.state.currentTime} />
							</div>	
							
							<div className="left-panel">
								<AddBox currentTime={self.state.currentTime} playingVideo={playingVideo} />
							</div>
					</div>
				</div>
			)
		}
	}
});

//Steps - 1. person inputs a comment in AddBox - computer checks for events and logs time and comments into object
//2. sends to scrollbox (not sure that's in here)
//3. saves to parse (figuring that out)

var AddBox = React.createClass({
getInitialState: function() {
	/* $("#addCommentsForm").on("submit", handler) {
		event.preventDefault();
		}  */
	return {
		/* commentData: {
			objectId: obj.objectId, //also objectId is videoId in the relational database...
			comments: obj.comments,
			currentTime: obj.currentTime
		},
		_parse_class_name: "time",  //this seems funky - how do I get it know which database to go in?
		idAttribute: "objectId" */
	}
},
componentDidMount: function () {
	/* this.setState({
		time: this.props.currentTime,
		comment: this.props.comment
	}) */
},
_handleChange: function(e) {
	/* var timeComments = this.props.comments;
	this.setState({
		time: this.props.currentTime,
		comment: this.props.comment
	}); */
},
_changeScroll: function (e) {
	e.preventDefault();
	/* this.setState({
		$(ScrollBox).scrollTop() //but how do I SEND the text to ScrollBox?
	}) */
},
handleCommentsChange: function(e) {
	this.setState({comments: e.target.value});
},
handleFormSubmit: function(e) {
	e.preventDefault();
	var newComments;
	var comment = {
		message: this.state.comments,
		time: Math.round(this.props.currentTime),
		name: "Mychelle"
	};

	var video = new VideoLink(this.props.playingVideo);
	if(!video.get('comments')){
		video.set('comments', [comment]);
	} else {
		newComments = video.get('comments');
		newComments.push(comment);
		video.set('comments', newComments);
	}

	video.save();
	this.setState( {
		comments: ""
	})
},

render: function(){
	return (
		<div id="addDiv">
			<div id="addCommentsDiv">
				<form id="addCommentsForm" action="" onSubmit={this.handleFormSubmit}> 
					<input type="hidden" id="objectID"/>
					<input type="textarea" className="addComments" placeholder="Add comments here" id="addCommentBox" value={this.state.comments} onChange={this.handleCommentsChange} />
				</form>
			</div>
		</div>
	)
}
});



var ScrollBox = React.createClass({
	getInitialState: function() {
		return {
			lastCommentIndex: -1,
			didChangeIndex: false
		}
	},
	componentWillReceiveProps: function(newProps) {
		var oldIndex = this.state.lastCommentIndex;
		var newIndex = this.state.lastCommentIndex;

		if(newProps.currentTime < this.props.currentTime){
			oldIndex = -1;
			newIndex = -1;
			console.log('old, new', oldIndex, newIndex);
		}

		newProps.comments.forEach((comment, i) => {
			if(comment.time <= newProps.currentTime && this.state.lastCommentIndex < i){
				newIndex = i;
			}
		});

		if(oldIndex != newIndex){
			this.setState({lastCommentIndex: newIndex, didChangeIndex: true});
		} else {
			this.setState({lastCommentIndex: newIndex, didChangeIndex: false});
		}
	},
	componentDidUpdate: function(){
		if(this.state.didChangeIndex){
			var scrollTo = $("#comment-" + this.state.lastCommentIndex).offset().top - $("#scrollingCommentsDiv").offset().top - 15;
			console.log('scrolling to', scrollTo);
			$('#scrollingCommentsDiv').animate({
			   scrollTop: scrollTo
			});
		}
	},
	formatTime: function(theTime) {
		var minutes = Math.floor(theTime/60);
		var seconds = (theTime%60);
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
		return minutes + ":" + seconds;
	},

	render: function() {
		var comments = !this.props.comments ? [] : this.props.comments
			.sort(function (a, b) {
				if (a.time < b.time) {
					return -1;   //one on the left comes first
				}
				else if (a.time > b.time) {
					return 1;    // one on the right comes first
				}
				else if (a.name < b.name) {
					return -1;
				}
				else if (a.name > b.name) {
					return 1;
				}
				else if (a.message < b.message) {
					return -1;
				}
				else if (a.message > b.message) {
					return 1;
				}
				else {
					return 0;  // doesn't matter cause they're equal
				}
			})
			.map((comment, i) => {
				var commentClass = 'comment';
				
				if(i === this.state.lastCommentIndex){
					commentClass += ' current-comment';
				}

				return (
					<li id={'comment-'+i} key={i} className={commentClass}><strong>{comment.name}</strong> ({this.formatTime(comment.time)}): <p>{comment.message}</p></li>
				);
			});

		return (
			<div id="scrollDiv">
				<div id="scrollingCommentsDiv">
					<ul ref="list">
						{comments}
					</ul>
				</div>
			</div>
		)
	}
});
	
			
// var GraphBox = React.createClass ({
// 	render: function () {
// 		return (
// 			<div>
// 				<div id="graphDiv">
// 					<p>Coming soon...</p>			
// 				</div>
// 			</div>
// 		)
// 	}
// });
					
module.exports = VideoPlayer;


//Steps:
//1. Make compments
//2. Get count time 
//3. Save to parse (componentDidMount)
//4. Check every 1/2 second
//5. Set scroll position (componentwillreceiveprops)

//The scroll div will change state - pass props - change propos - look at React state

// componentWillReceiveProps: function (newProps) {
// 	this.props
// 	newProps
// }


// var plot = $("#graphDiv").plot(data, options).data("plot"); //https://github.com/flot/flot/blob/master/API.md
