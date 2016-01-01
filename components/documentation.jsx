var React = require('react');
var ReactDOM = require('react-dom');

var Documentation = React.createClass({
	render: function () {
		return (
			<div>
				<div id="documentationDiv">
					<h1>Library</h1>


<div className="verticalaccordion">
<ul>
	<li>
        <h2>Instructions for Installation and Configuration</h2>
		<div>Content For Panel 1.</div>
	</li>
	<li>
        <h2>Package JSON File</h2>
		<div>Content For Panel 2.</div>
	</li>
	<li>
        <h2>GitHub Repository</h2>
		<div>Content For Panel 3.</div>
	</li>
	<li>
        <h2>Contact</h2>
		<div>Content For Panel 4</div>
	</li>
</ul>
</div>








				</div>
			</div>
		);
	}
});


module.exports = Documentation;

