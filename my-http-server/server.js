const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const VIEWS_DIR = path.join(__dirname, "views");

function renderPage(fileName, response, statusCode) {
  const filePath = path.join(VIEWS_DIR, fileName);
  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Internal Server Error</h1>");
      return;
    }
    response.writeHead(statusCode, { "Content-Type": "text/html" });
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/") {
    renderPage("home.html", response, 200);
  } else if (request.method === "GET" && request.url === "/about") {
    renderPage("about.html", response, 200);
  } else if (request.method === "GET" && request.url === "/contact") {
    renderPage("contact.html", response, 200);
  } else {
    renderPage("404.html", response, 404);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
