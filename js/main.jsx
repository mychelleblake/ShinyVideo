var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
var parseCred = require('./backbone-parse');
var routes = require("./routes.jsx");


ReactDOM.render(routes, document.getElementById("container"));



