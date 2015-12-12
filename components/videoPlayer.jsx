require("../css/main.css");
require("../css/normalize.css");
require("../css/video.css");
var React = require("react");
var ReactDOM = require("react-dom");
var router = require("../js/routes.jsx");



//Adds Video Player

var VideoPlayer = React.createClass({
	render: function () {
		return (
			<div id="videoPlayer">
			 	
    			<div id="playerVideo">
					<video id="videoP"> 			
					<source src="../assets/Untitled.mp4"></source>
					</video>
				</div>
			</div>
		)
	}
});



//Adds Comments Box

var AddComments = React.createClass({
	getDefaultProps: function () {
		return {
			data: {
				objectID: "",
				videoURL: "",
				imageURL: "",
				description: "",
				comments: ""
			}
		}
	},
	render: function () {
		return (
			<div id="addCommentsDiv">
				<form id="addCommentsForm">
					<input type="hidden" id="objectID" value={this.props.data.objectId}/>
					<input type="textarea" className="addComments" placeholder="Add comments here" id="addCommentBox" defaultValue={this.props.data.comments}/>
				</form>
			</div>
		)
	}
});

//Scrolling Comments Box
/*
var ScrollingComments = React.createClass({
	getDefaultProps: function () {
		return {
			data: {
				objectId: "",
				comments: ""
			}
		}
	}
render: function () {
	return (
		<div id="scrollingCommentsDiv">
			<ul>
				<li>{this.props.data.comments}</li>
			</ul>
		</div>
});

//Graph Box

var GraphBox = React.createClass ({
	getDefaultProps: function () {
		return {
			data: {
				objectId: "",
				comments: ""
			}
		}
	}
render: function () {
	return (
		<div id="graphDiv">
			var plot = $("#graphDiv").plot(data, options).data("plot"); //https://github.com/flot/flot/blob/master/API.md
		</div>
});



*/
module.exports = VideoPlayer;


