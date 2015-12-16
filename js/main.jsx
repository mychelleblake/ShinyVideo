var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
var parseCred = require('./backbone-parse');
var routes = require("./routes.jsx");


ReactDOM.render(routes, document.getElementById("container"));





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