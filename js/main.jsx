require('../css/main.css');
require('../css/video.css');
require('../css/normalize.css');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var parseCred = require('./backbone-parse');
// var homeView = require ("../components/homeView.jsx");
// var documentation = require ("../components/documentation.jsx");
// var menuView = require ("../components/menuView.jsx");
// var videoPlayer = require ("../components/videoPlayer.jsx");
// var nav = require("../components/nav.jsx");
var Router = require("./routes.jsx");



// p.exec( time, callback )
// Bind a callback function to a time in miliseconds (New Popcorn.js method)
// Returns the Popcorn instance object

// p.trigger( type, data )
// Trigger an event (New Popcorn.js method)
// Returns the Popcorn instance object

// p.listen( eventtype, callback )
// Bind to an event (New Popcorn.js method)
// Returns the Popcorn instance object

// p.unlisten( eventtype, 'callbackbackname' )
// Unbind an event listen (New Popcorn.js method)er
// Returns the Popcorn instance object

// p.removeTrackEvent( id )
// Remove a track event (New Popcorn.js method)
// Returns undefined

// p.getTrackEvents()
// Get the track events (New Popcorn.js method)
// Returns the track events