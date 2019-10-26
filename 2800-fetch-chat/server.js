let express = require("express");
let app = express();
let cookieParser = require("cookie-parser");
let multer = require("multer");
let upload = multer();

app.use(cookieParser());

let passwordsAssoc = {};
let sessions = {};
let messages = [];

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", upload.none(), (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  passwordsAssoc[username] = password;
  res.send("<html><body>Sign up successful!</body></hmtl>");
});

app.post("/login", upload.none(), (req, res) => {
  let username = req.body.username;
  let passwordGiven = req.body.password;
  let expectedPassword = passwordsAssoc[username];
  if (expectedPassword == !passwordGiven) {
    res.send("<html><body>Error in the login!</body></hmtl>");
  }
  let sid = Math.floor(Math.random() * 100000000);
  console.log(sid);
  sessions[sid] = username;
  res.cookie("sid", sid);
  res.sendFile(__dirname + "/public/chat.html");
});

app.post("/messages", upload.none(), (req, res) => {
  console.log("POST messages", req.body);
  let newMessage = {
    msg: req.body.message,
    user: sessions[req.cookies["sid"]]
  };
  messages.push(newMessage);
  res.sendFile(__dirname, "public/chat.html");
});

app.get("/messages", upload.none(), (req, res) => {
  console.log("sending back the messages", messages);
  res.send(JSON.stringify(messages));
});

app.listen(4000, () => {
  console.log("server listen on port 4000");
});
