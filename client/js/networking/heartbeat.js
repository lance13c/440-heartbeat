/**
 * Created by Lance on 4/9/2017.
 */


const socket = io('http://localhost:8080');
socket.on('connect', function() {
	console.log('Is connected');
	Vue.set(app, 'isConnected', true)
});


socket.on('event', function(data){});
socket.on('disconnect', function() {
	Vue.set(app, 'isConnected', false)
});

let timeout = undefined;

socket.on('heartbeat', function() {
	console.log('heartbeat');
	if (timeout) {
		clearTimeout(timeout);
	}
	timeout = setTimeout(() => {
		console.log('No longer connected');
		Vue.set(app, 'isConnected', false);
	}, 2000)
});