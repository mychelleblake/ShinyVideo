var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

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
			return (
				<div>
					<div id="menuViewDiv">
						<ul id="thumbView">
						{
							this.state.keyVideos.map(this.renderThumb)
						}
							<li><a href={this.props.videolink}><img src={this.props.imageURL}/></a></li>
							<li>{this.props.videoInfo}</li>
						</ul>
					</div>
				</div>
			)
	},
	renderThumb: function (menuData) {
		return (
		<li><div id="thumbOne"><Link to={"/VideoPlayer/" + menuData.objectId}><img src={menuData.imageURL}/></Link></div>
		<div id="thumbTwo">{menuData.videoInfo}</div></li>)

	}
});



module.exports = MenuView;