/**
 * Created by Lance on 4/9/2017.
 */
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const shelljs = require('shelljs');
let socket = undefined;

app.use(express.static(__dirname + '/js'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', function(iosocket){
	console.log ('data');
	socket = iosocket;
});

io.on('gamedata', function(data){
	// Save the game data
});




// Heart Beat

let heartbeatIndex = 0;

setInterval(() => {
	heartbeatIndex ++;
	console.log('Sent Heartbeat');
	
	let genid = {
		getID: () => {
			return Math.sqrt(heartbeatIndex) * 382 / 26.4;
		}
	};
	
	if (heartbeatIndex == 8) {
		genid.getID = undefined;
	}
	
	if (socket) {
		socket.emit('heartbeat', {
			status: 'connected',
			id: genid.getID()
		});
	}
}, 1000);


// Start serverWatcher
const doNotRunServerWatcher = process.argv[2];
if (!doNotRunServerWatcher) {
	shelljs.exec('npm run start-server-watcher', {async: true});
}

server.listen(8080);