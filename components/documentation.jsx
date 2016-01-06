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
						        <h3 onClick={()=>this.setState({activePane:1})}>What is shinyVideo.js?</h3>
								<div className="libraryText">
									<p>shinyVideo.js is a library that allows you to easily create online interactions with video. Users can comment on videos played on the screen and have them played back in sync with the video time code, as well as print or save a transcript of the “discussion.” The shinyVideo site provides examples on the Video Menu page.</p>

									<p>shinyVideo.js combines HTML, CSS3, <a href="http://www.popcornjs.org/" target="_blank">Popcorn.js</a> (a media player) and <a href="https://facebook.github.io/react/" target="_blank">React.js</a>.</p>

									<p>shinyVideo.js was created as part of a class final project in the Front End Engineering program at the Iron Yard Las Vegas.</p><br/><br/><p className="rightImg"><img src="/assets/film.png"/></p>
								</div>
							</li>
							<li className={this.state.activePane === 2 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:2})}>What do I need to use shinyVideo.js?</h3>
								<div className="libraryText">
									<ul>
										<li>You will need to use React.js so a basic knowledge of React, including components, state and routers is important. </li><br/>
										<li>Some knowledge of Javascript ECMAScript6 arrow functions will also be useful. </li><br/>
										<li>shinyVideo.js uses the Popcorn video player, although you can customize the player with other options such as Video.js if you wish. Documentation for Popcorn.js can be found <a href="http://popcornjs.org/documentation" target="_blank">here</a> and the API reference is <a href="http://popcornjs.org/popcorn-docs/" target="_blank">here</a>.</li><br/>
										<li>You will also need a place to host your videos. The shinyVideo.js site hosts video files (mp4) on the site and all other information is accessed from an online database site <a href="http://www.parse.com" target="_blank">(parse.com)</a>.</li><br/>
										<li>The ability to save and update comments will require a backend, either one that you specifically provide or a third-party site such as Parse.</li>
									</ul>
								<p className="rightImg"><img src="/assets/film.png"/></p>
								</div>
							</li>
							<li className={this.state.activePane === 3 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:3})}>What type of data can be used?</h3>
								<div className="libraryText2"><p>shinyVideo.js is configured to take data in JSON form. (Screenshot: Example of Parse Database)</p>
								<img src="/assets/parseshot.jpg"/>

								<p className="rightImg1"><img src="/assets/film.png"/></p>
								</div>
							</li>
							<li className={this.state.activePane === 4 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:4})}>Where can I see examples?</h3>
								<div className="libraryText">
									<p>Visit the Video Menu page on the shinyVideo.js site. A wide variety of videos are provided for examples. Videos with “EXAMPLE” in the description already have comments added. If you click on a thumbnail, you will be taken to the Video Player page.  For EXAMPLE videos, press play on the video player and you will see the comments scroll along the box on the right. For other videos, you can try out the process by typing comments in the Name and Comments boxes underneath the video player (and don’t forget to hit submit!) Press play on the video to replay and you will see the comments scroll in the box on the right (please note, you might need to refresh the screen and/or wait for a few seconds of delay as the data comes back to the site from Parse.)</p>

										<p>If you wish to save or print the transcript, press the Print button underneath the scrolling comment box which will take you to a print window.  </p><br/><p className="rightImg"><img src="/assets/film.png"/></p></div>
							</li>

							<li className={this.state.activePane === 5 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:5})}>What are the components on the Video Player page?</h3>
								<div className="libraryText3"><img src="/assets/playershot.jpg"/></div>
							</li>

							<li className={this.state.activePane === 6 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:6})}>What dependencies does shinyVideo.js use?</h3>
								<div className="libraryText">shinyVideo.js uses the following dependencies installed via <a href="http://npmjs.com" target="_blank">npm</a>:
									<ul>
										<li>Backbone</li>
										<li>CSS-loader</li>
										<li>JSON-loader</li>
										<li>JSX-loader</li>
										<li>React</li>
										<li>React-dom</li>
										<li>React-hot-loader</li>
										<li>React-router</li>
										<li>Style-loader</li>
										<li>Underscore</li>
										<li>Webpack</li>
										<li>Webpack-dev-server</li>										
									</ul>
								<p className="rightImg"><img src="/assets/film.png"/></p></div>
							</li>

							<li className={this.state.activePane === 7 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:7})}>Contact</h3>
								<div className="libraryText">For further information, contact Mychelle Blake at <a href="mailto:mychelle.blake@gmail.com">mychelle.blake@gmail.com</a>, <a href="http://www.twitter.com/mychelleblake" target="_blank">@mychelleblake</a> or <a href="http://www.mychelleblake.com" target="_blank">www.mychelleblake.com.</a><br/><br/><br/><p className="rightImg"><img src="/assets/film.png"/></p></div>
							</li>
						</ul>

						</div>
				</div>
			</div>
		);
	}
});


module.exports = Documentation;

