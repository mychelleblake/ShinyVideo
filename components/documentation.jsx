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

									<p>shinyVideo.js was created as part of a class final project in the Front End Engineering program at the Iron Yard Las Vegas.</p>

									<p>The information for the library is available for download at this &nbsp;<a href="https://github.com/mychelleblake/ShinyVideo" target="_blank">Github Repository</a>.</p>

									<p>For further information, contact Mychelle Blake at <a href="mailto:mychelle.blake@gmail.com">mychelle.blake@gmail.com</a>, <a href="http://www.twitter.com/mychelleblake" target="_blank">@mychelleblake</a> or <a href="http://www.mychelleblake.com" target="_blank">www.mychelleblake.com.</a></p>

									<br/><p className="rightImg"><img src="/assets/film.png"/></p>
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
								<br/><br/><br/><p className="rightImg"><img src="/assets/film.png"/></p>
								</div>
							</li>
							<li className={this.state.activePane === 3 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:3})}>What type of data can be used?</h3>
								<div className="libraryText2"><p>shinyVideo.js is configured to take data in JSON form. (Screenshot: Example of Parse Database)</p><br/>
								<img src="/assets/parseshot.jpg"/>

								<br/><br/><br/><br/><p className="rightImg1"><img src="/assets/film.png"/></p>
								</div>
							</li>
							<li className={this.state.activePane === 4 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:4})}>Where can I see examples?</h3>
								<div className="libraryText">
									<p>Visit the Video Menu page on the shinyVideo.js site. A wide variety of videos are provided for examples. Videos with “EXAMPLE” in the description already have comments added. If you click on a thumbnail, you will be taken to the Video Player page.  For EXAMPLE videos, press play on the video player and you will see the comments scroll along the box on the right. For other videos, you can try out the process by typing comments in the Name and Comments boxes underneath the video player (and don’t forget to hit submit!) Press play on the video to replay and you will see the comments scroll in the box on the right (please note, you might need to refresh the screen and/or wait for a few seconds of delay as the data comes back to the site from Parse.)</p>

										<p>If you wish to save or print the transcript, press the Print button underneath the scrolling comment box which will take you to a print window.  </p><br/><br/><br/><br/><p className="rightImg"><img src="/assets/film.png"/></p></div>
							</li>

							<li className={this.state.activePane === 5 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:5})}>What are the components on the Video Player page?</h3>
								<div className="libraryText3"><img src="/assets/playershot.jpg"/></div>
							</li>

							<li className={this.state.activePane === 6 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:6})}>What dependencies does shinyVideo.js use?</h3>
								<div className="libraryText">shinyVideo.js uses the following dependencies installed via <a href="http://npmjs.com" target="_blank">npm</a>:<br/><br/>
									<ul className="docUL">
										<li>Backbone</li><br/>
										<li>CSS-loader</li><br/>
										<li>JSON-loader</li><br/>
										<li>JSX-loader</li><br/>
										<li>React, React-dom and React-router</li><br/>
										<li>Style-loader</li><br/>
										<li>Underscore</li><br/>
										<li>Webpack</li><br/>										
									</ul>
								<img className="imageFtRgt" src="/assets/film.png"/></div>
							</li>

							<li className={this.state.activePane === 7 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:7})}>What is the file structure available on Github?</h3>
								<div className="libraryText">
									<p id="sourceCode">
									&nbsp;&nbsp;|-- components<br/>
									&nbsp;&nbsp;|------ documentation.jsx (this is for information only, not required for your project files)<br/>
									&nbsp;&nbsp;|------ homeView.jsx<br/>
									&nbsp;&nbsp;|------ menuView.jsx<br/>
									&nbsp;&nbsp;|------ nav.jsx<br/>
									&nbsp;&nbsp;|------ videoPlayer.jsx<br/>
									&nbsp;&nbsp;|-- css<br/>
									&nbsp;&nbsp;|------ main.css (covers css for all components except videoPlayer.jsx)<br/>
									&nbsp;&nbsp;|------ video.css (covers css for videoPlayer.jsx component)<br/>
									&nbsp;&nbsp;|-- js<br/>
									&nbsp;&nbsp;|------ backbone-parse.js	(update/use/delete based on your backend configuration)<br/>
									&nbsp;&nbsp;|------ main.jsx<br/>
									&nbsp;&nbsp;|------ parse-credentials.json (update/use/delete  based on your backend configuration)<br/>
									&nbsp;&nbsp;|------ routes.jsx<br/>
									&nbsp;&nbsp;index.html<br/>
									&nbsp;&nbsp;package.json<br/>
									&nbsp;&nbsp;README.md<br/>
									<img className="imageFtRgt" src="/assets/film.png"/></p></div>
							</li>

							<li className={this.state.activePane === 8 ? "active": ""}>
						        <h3 onClick={()=>this.setState({activePane:8})}>Can I customize shinyVideo.js?</h3>
								<div className="libraryText"> Of course! All of the jsx files can be customized to your site and all code in the jsx files is commented to assist you with implementation. The component files cover:<br/><br/>
									<ul>
										<li><span className="jsxTitle">homeView.jsx </span>- the home page for this site - this does not need to be included in your project.</li><br/>
										<li><span className="jsxTitle">menuView.jsx </span>- this is the “access point” for the videoPlayer page with examples of videos you can try to see shinyVideo.js in action. It is not required for your project but you will need to create a component that provides a method for videos to load to the player, either as individual pages or as a menu.</li><br/>
										<li><span className="jsxTitle">nav.jsx </span>- this is the navigation for the shinyVideo.js site and does not need to be included.</li><br/>
										<li><span className="jsxTitle">videoPlayer.jsx</span> - this is the main component file you will need. Each of the components can be moved and styled as you wish on your video page. See comments in the code for detailed information on each section.</li><br/>
									</ul>
										Two other important jsx files you will need in your js directory are <span className="jsxTitle">main.jsx</span> and <span className="jsxTitle">routes.jsx</span>. You will either need to implement both files or update them if you already have a main entry point and routing file created. 
									<p className="rightImg"><img src="/assets/film.png"/></p>
								</div>
							</li>
						
						</ul>

						</div>
				</div>
			</div>
		);
	}
});


module.exports = Documentation;

