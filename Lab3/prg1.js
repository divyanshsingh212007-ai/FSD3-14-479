import http from "http";

const server = http.createServer((req, res) => {
  console.log("Welcome to Node JS");
  console.log(req.url);
  console.log("Request Method:");
  console.log(req.method);
  console.log("Request Header:");
  console.log(req.headers);

  res.end("Hello");
});

server.listen(4444, () => {
  console.log("Server is Running");
});
