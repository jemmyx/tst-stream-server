const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  const rStream = fs.createReadStream(`${__dirname}/nastyneighbors.mp4`);
  rStream.pipe(res);
});

server.listen(3003, "127.0.0.1", () => {
  console.log("listen on port 3003");
});
