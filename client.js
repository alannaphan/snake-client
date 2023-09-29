const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });
  // interpret incoming data as text

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: STH");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 100);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 150);
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect: connect};
