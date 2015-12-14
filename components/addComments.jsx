require('../css/main.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

var AddComments = React.createClass({
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

module.exports = AddComments;