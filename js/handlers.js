'use-strict';

var AlexaSDK = require('alexa-sdk');
var audioData = require('./audioData');

var handlers = {

	'LaunchRequest' : function() {
		var audioinfo = audioData[0];
			var title = audioinfo.title;
			var message = audioinfo.message1 + " <audio src='" + audioinfo.audioURL + "' /> " + audioinfo.message2;
			var reprompt = "Did you say something?";
			var imageURL = audioinfo.img;

			this.response.cardRenderer(title, message); //, imageURL);
			this.response.speak(message).listen(reprompt);
			this.emit(':responseReady');
	}, 
	'PlayAudioIntent' : function() {
		// add in the audioData file information here
		var message = "This is the play audio intent";
		this.response.speak(message).listen(message);
		this.emit(':responseReady');
	},
	'Unhandled' : function() {
		var message = "I didn't quite get that.";
		this.response.speak(message).listen(message);
		this.emit(':responseReady');
	}

	
};


module.exports = handlers;