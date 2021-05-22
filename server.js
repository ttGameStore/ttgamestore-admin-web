const express = require("express");
const session = require("express-session");
const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const { parse } = require("url");
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(
    session({
      secret: "ttgamestore-admin",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    })
  );

  // pretty url

  server.get("/", (req, res) => {
    app.render(req, res, "/");
  });

  server.get("/card-list", (req, res) => {
    app.render(req, res, "/manageCard/manageCardListScreen");
  });

  server.get("/card-add", (req, res) => {
    app.render(req, res, "/manageCard/manageCardAddScreen");
  });

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const accessToken = req.session;

    // console.log("pathname", pathname);
    // console.log("accessToken", accessToken);

    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
