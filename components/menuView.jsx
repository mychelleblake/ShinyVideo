var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var underscore = require("underscore");

var Link = ReactRouter.Link;


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




var MenuView = React.createClass({
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
					return obj;
					console.log("here it is ", mapData);
				})
				self.setState ({keyVideos: mapData})
			}, error: function(err) {
						console.log("error: ", err);
			}
		});
	},
	render: function () {
		var groups = underscore.groupBy (this.state.keyVideos,"category");
		var alphaGroups = underscore.keys (groups).sort();
			console.log(alphaGroups);
			return (
				<div>
					<div id="menuViewDiv">
						<div id="instructions">
							<h2>Demo Instructions</h2>
							<p>shinyVideo provides a Javascript library that allows you to comment on a video in play and play back the comments in sync to the video. Multiple users may comment and identify themselves with their names. To view a demo, click on any thumbnail image below to be taken to the video player page. Videos are arranged below by video category.</p>
							</div>
						{
							underscore.map(alphaGroups, function(key) {
								return this.renderCategory(groups[key], key);
							},this)
						}

					</div>
				</div>
			)
	},
		renderCategory: function (catVideos, category) {
		return (
			<div>
			<h4 id="catHeading">{category}</h4>
			<ul id="thumbView">			
				{
					catVideos.map(this.renderThumb)
				}
			</ul>
			</div>)
	},
	renderThumb: function (menuData) {
		return (
		<li><div id="thumbOne">
				<Link to={"/VideoPlayer/" + menuData.objectId}><img src={menuData.imageURL}/>
				</Link>
			</div>
			<div id="thumbTwo">
				<h3>{menuData.title}</h3><br/>
				{menuData.videoInfo}<br/>
				<span id="menu3">Video length: {menuData.timeLength}</span><br/>
				<span id="menu4">Date uploaded: {menuData.dateLoaded}</span>		
			</div>
				<hr id="line-separator"></hr>
			</li>)

	}
});



module.exports = MenuView;