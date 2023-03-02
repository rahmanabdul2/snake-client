// input module which will focus on managing the user input
const { moveDownKey, moveLeftKey, moveUpKey, moveRightKey, message } = require('./constants');

//stores the current TCP connection
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = key => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === moveUpKey) {
      conn.write('Move: up');
    } else if (key === moveLeftKey) {
      conn.write('Move: left');
    } else if (key === moveDownKey) {
      conn.write('Move: down');
    } else if (key === moveRightKey) {
      conn.write('Move: right');
    } else if (key === message[key]) {
      conn.write(message[key]);
    }
  };
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};






module.exports = { setupInput };