let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    conn.write("Move: up");
  }
  if (key === "a") {
    conn.write("Move: left");
  }
  if (key === "s") {
    conn.write("Move: down");
  }
  if (key === "d") {
    conn.write("Move: right");
  }
  if (key === "1") {
    conn.write("Say: hey snek!")
  }
  
}

const setupInput = (conn) => {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = {setupInput: setupInput};