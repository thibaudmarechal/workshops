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
  if (password === "") {
    res.send(
      "<html><body><div>Password cannot be empty!</div><div><a href='/'>Try to sign up again.</a></div></body></hmtl>"
    );
    return;
  }

  passwordsAssoc[username] = password;
  console.log("Your new username is: ", username);
  console.log("Your new password is: ", passwordsAssoc[username]);
  console.log(passwordsAssoc);
  res.send(
    "<html><body><div>Sign up successful!</div><div><a href='/'>Now go log in!</a></div></body></hmtl>"
  );
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
  console.log("This is user: ", sessions[sid]);
  res.cookie("sid", sid);
  res.sendFile(__dirname + "/public/chat.html");
});

app.post("/set/username", upload.none(), (req, res) => {
  const sessionId = req.cookies.sid;
  const currentUsername = sessions[sessionId];
  const newUsername = req.body.username;
  passwordsAssoc[newUsername] = passwordsAssoc[currentUsername];
  delete passwordsAssoc[currentUsername];
  sessions[sessionId] = newUsername;
  messages.forEach(message => {
    if (message.user === currentUsername) message.user = newUsername;
  });
  console.log("New username is: ", newUsername);
  res.send(
    "<html><body>Succesfully changed username to: " +
      newUsername +
      "</body></hmtl>"
  );
});

app.post("/messages", upload.none(), (req, res) => {
  console.log("POST messages", req.body);
  let newMessage = {
    msg: req.body.message,
    user: sessions[req.cookies["sid"]]
  };
  messages.push(newMessage);
  console.log("messages are the following: ", messages);
  res.sendFile(__dirname + "/public/chat.html");
});

app.get("/messages", (req, res) => {
  console.log("sending back messages", messages);
  res.send(JSON.stringify(messages));
});

app.listen(4000, () => {
  console.log("server listen on port 4000");
});
