/**
 * Created by Lance on 4/10/2017.
 */
// Backup node server
// Checks if the current node server is still running.
// If it isn't it will restart the original server.

const fork = require('child_process').fork;
console.log('ServerWatcher Running');
fork('./dist/index.js', [false], {detached: true});


const socket = require('socket.io-client')('http://localhost:8080');


socket.on('connect', function() {
	console.log('ServerWatcher Connected');
	
});

socket.on('event', function(data) {});


socket.on('disconnect', function() {

});


let timeout = undefined;
socket.on('heartbeat', function() {
	
	if (timeout) {
		clearTimeout(timeout);
	}
	
	timeout = setTimeout(() => {
		// console.log('ServerWatcher Recognizes Failure');
		// console.log('Attempting to restart server');
		// fork('./dist/index.js', [false], {detached: true});
		// clearTimeout(timeout);
		console.log('ServerWatcher disconnected');
		console.log('ServerWatcher Recognizes Failure');
		console.log('Attempting to restart server');
		fork('./dist/index.js', [false], {detached: true});
	}, 2000);
	console.log('Received Heartbeat');
	
});