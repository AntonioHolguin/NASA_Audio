'use-strict';

var AlexaSDK = require('alexa-sdk');
var handlers = require('./handlers');

exports.handler = (event, context, callback) => {
	var alexa = AlexaSDK.handler(event, context, callback);

// TO DO: add appId
	alexa.appId = '';

	alexa.registerHandlers( 
		handlers
	);

	alexa.execute();


}