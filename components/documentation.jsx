var React = require('react');
var ReactDOM = require('react-dom');

var Documentation = React.createClass({
	getInitialState: function () {
		return {activePane: null}
	},

	render: function () {
		return (
			<div>
				<div id="documentationDiv">
					<h1>Documentation</h1>
						<div className="verticalAccordion">
						<ul>
							<li className={this.state.activePane === 1 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:1})}>Information for Developers</h3>
								<div className="libraryText">shinyVideo is a library that allows comments to be timed to a video and played back in sync. It combines HTML, CSS3, <a href="http://www.popcornjs.org" target="_blank">Popcorn.js</a> (a media player) and <a href="https://facebook.github.io/react/" target="_blank">React.js</a>.
								<br/><br/><br/><p><img src="/assets/film.png"/></p>
								</div>
							</li>
							<li className={this.state.activePane === 2 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:2})}>Popcorn.js</h3>
								<div className="libraryText">Documentation for Popcorn.js can be found <a href="http://popcornjs.org/documentation" target="_blank">here</a> and the API reference is <a href="http://popcornjs.org/popcorn-docs/" target="_blank">here</a>.
								<br/><br/><br/><br/><p><img src="/assets/film.png"/></p>
								</div>
							</li>
							<li className={this.state.activePane === 3 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:3})}>Code</h3>
								<div className="libraryText">The information for the library is available at:
									<ul id="code">
										<li><a href="https://github.com/mychelleblake/ShinyVideo/blob/master/package.json">Package JSON file</a></li>
										<li><a href="https://github.com/mychelleblake/ShinyVideo">Github Repository</a></li>
										<li><a href="https://github.com/mychelleblake/ShinyVideo/blob/master/README.md">README.md file</a></li>
									</ul>
								<p><img src="/assets/film.png"/></p>
								</div>
							</li>
							<li className={this.state.activePane === 4 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:4})}>Contact</h3>
								<div className="libraryText">For further information, contact Mychelle Blake at <a href="mailto:mychelle.blake@gmail.com">mychelle.blake@gmail.com</a>, <a href="http://www.twitter.com/mychelleblake" target="_blank">@mychelleblake</a> or <a href="http://www.mychelleblake.com" target="_blank">www.mychelleblake.com.</a><br/><br/><br/><p><img src="/assets/film.png"/></p></div>
							</li>
						</ul>

						</div>
				</div>
			</div>
		);
	}
});


module.exports = Documentation;

