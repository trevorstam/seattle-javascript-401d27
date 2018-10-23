//1 require first party modules
const events = require('events');
const net = require('net');

//2 environment vars
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//3 create clients to access internal files
const Client = require('./model/client');

//4 new server
const server = net.createServer();

//8 create an instance of the event emitter
const evEm = new events();

//7 set up the user pool
const userPool = [];
//5 setup of connection event
server.on('connection', (socket) => {
  const client = new Client(socket);
  userPool.push(client);
  client.socket.write('Entrez le chat!\n');
  client.socket.write('Parlez avec autres chats!\n');

  socket.on('data', (data) => {
    const command = data.toString().split(' ').shift().trim();

    if (command.startsWith('@')) {
      const restOfCommand = data.toString().split(' ').splice(1).join(' ');
      evEm.emit(command, client, restOfCommand);
      return;
    }
    //still working on dm
    // if (command.startsWith('@dm')) {

    // }

    //default behaviour
    evEm.emit('default', client);
  });

});

//register event listeners
evEm.on('@all', (client, message) => {
  userPool.forEach((user) => {
    user.socket.write(`${client.nickname}: ${message}`);
  });
});

evEm.on('@list', (client) => {
  client.socket.write('ces chats sont dans la litière:\r\n');
  userPool.forEach((user) => {
    client.socket.write(`${user.nickname}\n`);
  });
});

evEm.on('@dm', (sender, receiver, message) => { //still working on this one

});

evEm.on('@nickname', (client, string) => {
  client.nickname = string;
  client.socket.write(`Your nickname has been changed to ${string}`);
});

evEm.on('@quit', (client) => {
  client.socket.write(`Au revoir mon chat ${client.nickname}!`);
  //I still need to end the socket (not destroy) and remove the user from the user pool.
  // could use filter on the user pool to filter out where user's nickname is not the client nickname
});

evEm.on('default', (client) => {
  client.socket.write('Please start all commands with @\n');
});

//6 server listening
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});