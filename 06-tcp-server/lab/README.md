## Lab 6 : TCP Chat Server

#### Author: 
Trevor Stam
#### Course:
401 Javascript @ Code Fellows

### Feature Tasks:
For this assignment, you will be building a TCP chatroom. Clients should be able to connect to the chatroom through the use of telnet. Clients should also be able to run special commands to exit the chatroom, list all users, reset their nickname, and send direct messages. You may add as many features to this application as you would like. Do not use any third party libraries and testing is not required.

### Minimum Requirements:

- Create a TCP Server using the NodeJS net module
    - Create a Client constructor that models an individual connection
    - Each client instance should contain (at least) id, nickname, and socket properties
    - Clients should be able to send messages to all other clients by sending it to the server
    - Clients should be able to run special commands by sending messages that start with a command name
        - The client should send @quit to disconnect
        - The client should send @list to list all connected users
        - The client should send @nickname <new-name> to change their nickname
        - The client should send @dm <to-username> <message> to send a message directly to another user by their nickname
    - Connected clients should be maintained in an in-memory collection (array) called the clientPool
        - When a socket emits the close event, the socket should be removed from the client pool
        - When a socket emits the data event, the data should be logged on the server and the commands below should be implemented


#### Modules required:
net, events, uuid, dotenv, eslint
#### Architecture:
Node.js, Putty

#### Resources:
Node.js docs, MDN, Allie Grampa, JB Tellez


