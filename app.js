const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const rStream = fs.createReadStream(`${__dirname}/data.txt`);
  rStream.pipe(res);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("listen on port 3000");
});
