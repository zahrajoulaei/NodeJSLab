const http = require("http");

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    switch (req.url) {
      case "/":
        res.write("Hello World");
        break;
      case "/test":
        res.write("You've reached the test endpoint.");
        break;
      default:
        res.statusCode = 404;
        res.write("Error: 404 Not Found");
        break;
    }

    res.end();
  })
  .listen(3000, () => {
    console.log(`Server running.`);
  });