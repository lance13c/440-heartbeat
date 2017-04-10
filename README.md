




# Networking
SocketIO -> Connect client and server in real time

# Structure

Server: Server is the server instance that will be responsible for creating, hosting, and managing games.

Client: Is the web interface that will allow the players to play the game.


# Error
we try to change the id generator after a certain amount of heartbeats. It goes undefined and errors the server.
Server crashes.

# Failure Recovery
We created a serverWatcher which watches the servers. If a server goes down it will
reboot the server. All data on the server is saves and clients will be updated in real time.


#Run
You will need nodeJS

Then run

        run npm install
        gulp
        npm start
        
        
Should serve it up on port 8080

Should fail after about 8 seconds.

You can see it in the status is connected.