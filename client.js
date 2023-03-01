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

  // handling data received from server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log('Connecting...')
connectToServer();


module.exports = {
  connectToServer
};

