const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");

const handleUserInput = () => {
  if (key === '\u0003') {
    process.exit();
  }
}

// const setupInput = () => {
//   const stdin = process.stdin;
//   stdin,setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput(key));
//   return stdin;
// };


connect();
