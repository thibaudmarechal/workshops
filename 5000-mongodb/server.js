let express = require("express");
let app = express();
let MongoDB = require("mongodb");
let MongoClient = MongoDB.MongoClient;
let ObjectId = MongoDB.ObjectId;
let reloadMagic = require("./reload-magic.js");
reloadMagic(app);
let multer = require("multer");
let upload = multer({ dest: __dirname + "/uploads/" });
app.use("/", express.static("build"));
app.use("/uploads", express.static("uploads"));

let dbo = undefined;
let url =
  "mongodb+srv://bob:bobsue@cluster0-md5qo.azure.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  dbo = client.db("media-board");
});
String.prototype.hashCode = function() {
  var hash = 0;
  if (this.length == 0) {
    return hash;
  }
  for (var i = 0; i < this.length; i++) {
    var char = this.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};
app.get("/remove-all", (req, res) => {
  console.log("req from client to /remove-all endpoint");
  dbo.collection("posts").remove({});
  res.send(JSON.stringify({ success: true }));
});
app.get("/all-posts", (req, res) => {
  console.log("request to /all-posts endpoint received by client");
  dbo
    .collection("posts")
    .find({})
    .toArray((err, ps) => {
      if (err) {
        console.log("error", err);
        res.send(JSON.stringify({ success: false }));
        return;
      }
      console.log("posts", ps);
      res.send(JSON.stringify(ps));
    });
});
app.post("/signup", upload.none(), (req, res) => {
  console.log("signup endpoint", req.body);
  let name = req.body.username;
  let pwd = req.body.password;
  if (name === "" || pwd === "") {
    console.log("username or pwd can't be empty");
    res.send(
      JSON.stringify({
        success: false,
        message: "Username or password can't be empty."
      })
    );
    return;
  }
  if (name === pwd) {
    console.log("pwd and username must be different");
    res.send(
      JSON.stringify({
        success: false,
        message: "Password and username must be different"
      })
    );
    return;
  }
  dbo.collection("users").findOne({ username: name }, (err, user) => {
    if (err) {
      console.log("signup error", err);
      res.send(JSON.stringify({ success: false, message: "signup error" }));
      return;
    }
    if (user === null) {
      console.log("sign up successful for:", name);
      console.log("plain password", pwd);
      pwd = pwd.hashCode();
      console.log("hashed password", pwd);
      dbo.collection("users").insertOne({ username: name, password: pwd });
      res.send(JSON.stringify({ success: true }));
      return;
    }
    if ((user.username = name)) {
      console.log("user already exists");
      res.send(
        JSON.stringify({
          success: false,
          message: "User already exists. Log in instead!",
          auth: "login"
        })
      );
    }
  });
});
app.post("/login", upload.none(), (req, res) => {
  console.log("login", req.body);
  let name = req.body.username;
  let pwd = req.body.password;
  if (name === "" || pwd === "") {
    console.log("username or pwd can't be empty");
    res.send(
      JSON.stringify({
        success: false,
        message: "Username or password can't be empty."
      })
    );
    return;
  }
  dbo.collection("users").findOne({ username: name }, (err, user) => {
    if (err) {
      console.log("login error", err);
      res.send(JSON.stringify({ success: false, message: "login error" }));
      return;
    }
    if (user === null) {
      res.send(
        JSON.stringify({
          success: false,
          message: "No such username. Want to sign up instead?",
          auth: "signup"
        })
      );
      return;
    }
    if (user.password === pwd.hashCode()) {
      console.log("successfully logged in");
      res.send(JSON.stringify({ success: true, message: "Login successful!" }));
      return;
    }
    console.log("passwords don't match");
    res.send(
      JSON.stringify({ success: false, message: "passwords don't match!" })
    );
  });
});
const uploadPost = upload.fields([
  { name: "img", maxCount: 1 },
  { name: "audio", maxCount: 1 }
]);
app.post("/new-post", uploadPost, (req, res) => {
  console.log("request to /new-post endpoint", req.body);
  let files = req.files["img"];
  console.log("files", files);
  let audios = req.files["audio"];
  let description = req.body.description;
  let username = req.body.username;
  let frontEndPathImg = "";
  let frontEndPathAudio = "";
  if (files !== undefined) {
    frontEndPathImg = "/uploads/" + files[0].filename;
  }
  if (audios !== undefined) {
    frontEndPathAudio = "/uploads/" + audios[0].filename;
  }
  dbo.collection("posts").insertOne({
    description: description,
    username: username,
    frontEndPathImg: frontEndPathImg,
    frontEndPathAudio: frontEndPathAudio
  });
  res.send(JSON.stringify({ success: true }));
});
app.post("/deletepost", upload.none(), (req, res) => {
  console.log("request to /deletepost endpoint from client");
  let id = req.body.id;
  console.log("id from post", id);
  dbo.collection("posts").deleteOne({ _id: ObjectId(id) });
  res.send(JSON.stringify({ success: true }));
});

app.post("/update", uploadPost, (req, res) => {
  console.log("request to /update endpoint");
  let id = req.body.id;
  let desc = req.body.description;
  let imgs = req.files["img"];
  console.log("files", imgs);
  let frontEndPathImg = "";
  if (imgs !== undefined) {
    frontEndPathImg = "/uploads/" + imgs[0].filename;
  }
  dbo
    .collection("posts")
    .update(
      { _id: ObjectId(id) },
      { $set: { description: desc, frontEndPathImg: frontEndPathImg } }
    );
  res.send(JSON.stringify({ success: true }));
});
app.all("/*", (req, res, next) => {
  res.sendFile(__dirname + "/build/index.html");
});
app.listen(4000, "0.0.0.0", () => {
  console.log("server is running on port 4000");
});
