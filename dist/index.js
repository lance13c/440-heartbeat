/**
 * Created by Lance on 4/9/2017.
 */

const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const shelljs = require('shelljs');
const fork = require('child_process').fork;

let sockets = [];

app.use(express.static(__dirname + '/js'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', function(iosocket) {
	console.log ('Server Running');
	//console.log('socket', iosocket);
	sockets.push(iosocket);
});

io.on('gamedata', function(data){
	// Save the game data
});

// Heart Beat
let heartbeatIndex = 0;

setInterval(() => {
	heartbeatIndex ++;
	console.log('In Interval');
	
	let genid = {
		getID: () => {
			return Math.sqrt(heartbeatIndex) * 382 / 26.4;
		}
	};
	
	if (heartbeatIndex == 8) {
		genid.getID = undefined;
	}
	
	if (sockets.length != 0) {
		
		sockets.forEach((socket) => {
			socket.emit('heartbeat', {
				status: 'connected',
				id: genid.getID()
			});
		});
		console.log('Sent Heartbeat');
	}
	
}, 1000);


server.listen(8080);