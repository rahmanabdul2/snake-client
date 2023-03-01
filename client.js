// This will serve as our main file through which we will launch the game client
const net = require("net");

// establishes a connection with the game server
const connectToServer = () => {
  const conn = net.createConnection({
    host: '172.31.42.213',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // register a handler for the connect event
  conn.on("connect", () => {
    console.log("Successfully Connected To Server");
    // set a username and send to the server to start the game
    conn.write("Name: AFG");
  });

  // handling data received from server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log('Connecting...');
connectToServer();


module.exports = {
  connectToServer
};

