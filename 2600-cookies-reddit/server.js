let express = require("express") 
let app = express() 
let multer = require("multer") 
let upload = multer() 
let cookieParser = require('cookie-parser') 
app.use(cookieParser()); 
let threads = [] 
let passwordsAssoc = {} 
let sessions = {} 
let h = (element, children) => { 
  return '<' + element + '>' + children.join('\n') + '</' + element.split(' ').shift() + '>' 
} 
let makePage = () => { 
  let threadElements = threads.map(post => { 
    return '<div><h2>' + post.desc + '</h2><h4>' + post.user + '</h4></div>' 
  }) 
  return h('html', [ 
    h('body', [ 
      h('div', threadElements), 
      h('form action="/thread" method="POST" enctype="multipart/form-data"', [ 
        h('input type="text" name="description"', []), 
        h('input type="submit"', [])])])]) 
} 
app.post("/thread", upload.none(), (req, res) => { 
  console.log("creating a new thread", req.body) 
  let sessionId = req.cookies.sid 
  let username = sessions[sessionId] 
  threads.push({ 
    user: username, 
    desc: req.body.description 
  }) 
  res.send(makePage()) 
}) 
app.post("/login", upload.none(), (req, res) => { 
  console.log("request to /login", req.body) 
  if (passwordsAssoc[req.body.username] !== req.body.password) { 
    res.send("<html><body> invalid username or password </body></html>") 
    return 
  } 
  let sessionId = '' + Math.floor(Math.random() * 1000000) 
  sessions[sessionId] = req.body.username 
  res.cookie('sid', sessionId); 
  res.send(makePage()) 
}) 
app.post("/signup", upload.none(), (req, res) => { 
  console.log("request to /signup", req.body) 
  passwordsAssoc[req.body.username] = req.body.password 
  res.send("<html><body> signup successful </body></html>") 
}) 
app.get("/", (req, res) => { 
  res.sendFile(__dirname + "/public/index.html") 
}) 
app.listen(4000, () => { 
  console.log("server started") 
}) 