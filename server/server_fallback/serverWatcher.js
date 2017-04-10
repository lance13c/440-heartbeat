/**
 * Created by Lance on 4/10/2017.
 */
// Backup node server
// Checks if the current node server is still running.
// If it isn't it will restart the original server.

const socket = require('socket.io-client')('http://localhost:8080');
const shelljs = require('shelljs');

console.log('ServerWatcher Running');

socket.on('connect', function() {
	console.log('ServerWatcher Connected');
});
socket.on('event', function(data) {});
socket.on('disconnect', function() {
	console.log('ServerWatcher Recognizes Failure');
	console.log('Attempting to restart server');
	
	shelljs.exec('node ./dist/index.js false', {async: true});
});



socket.on('heartbeat', function() {
	//console.log('ServerWatcher Recognizes Failure');
	//console.log('Attempting to restart server');
});

console.log('Worked');