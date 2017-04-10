




# Networking
SocketIO -> Connect client and server in real time

# Structure

Server: Server is the server instance that will be responsible for creating, hosting, and managing games.

Client: Is the web interface that will allow the players to play the game.


# Error
we try to change the id generator after a certain amount of heartbeats. It goes undefined and errors the server.
Server crashes.



#Run
You will need nodeJS

Then run

        run npm install
        gulp
        node dist\index.js
        
        
Should serve it up on port 8080

Should fail after about 8 seconds.

You can see it in the status is connected.