// This will serve as your main file through which you will launch the game client.
// This is the client's side

const net = require("net");
const { IP, PORT, name} = require('./constants')

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
    name: name
  });

  // once the connection is successful, client recieves a message and then sends their name to server.
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ' + name);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //handle incoming data from the server and console.log it for the player.
  conn.on("data", (data) => {
    console.log('Server says: ', data);
  });

  ////The conn object that Node returned to you represents the connection that you have with the server.
  return conn;
};




// should only connect function
module.exports = { connect };