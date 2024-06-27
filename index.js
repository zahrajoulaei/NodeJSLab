const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    switch (req.url) {
      case "/":
        res.write('<h1 style="color: green">Hello World!</h1>');
        res.write("<p>I wonder what else we can send...</p>");
        console.log("maybe some console logs!!");

        break;
      case "/test":
        res.write("You've reached the test endpoint.");
        break;
      default:
        res.statusCode = 404;
        res.write('<h1 style="color:red">Error: 404 Not Found</h1>');
        break;
    }

    res.end();
  })

  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
