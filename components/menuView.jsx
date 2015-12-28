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
					return {
						objectId: obj.objectId,
						videolink: obj.videolink,
						imageURL: obj.imageURL,
						videoInfo: obj.videoInfo,
						comments: obj.comments,
						title: obj.title,
						timeLength: obj.timeLength,
						dateLoaded: obj.dateLoaded,
						category: obj.category
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
		var groups = underscore.groupBy (this.state.keyVideos,"category");
			console.log(groups);
			return (
				<div>
					<div id="menuViewDiv">
						<div id="instructions">hjkhjkgjfhddkytdkuyflu</div>
						{
							underscore.map(groups, this.renderCategory)
						}

					</div>
				</div>
			)
	},
		renderCategory: function (catVideos, category) {
		return (
			<div>
			<h3 id="catHeading">{category}</h3>
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
				<h4>{menuData.title}</h4><br/>
				{menuData.videoInfo}<br/>
				<span id="menu3">Video length: {menuData.timeLength}</span>
				<span id="menu4">Date uploaded: {menuData.dateLoaded}</span>
				<hr id="line-separator"></hr>
			</div>
			</li>)

	}
});



module.exports = MenuView;