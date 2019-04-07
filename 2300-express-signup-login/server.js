let express = require("express") 
let app = express() 
let fs = require("fs") 
let multer = require("multer") 
let upload = multer() 
app.use(multer().none()) 
let passwordsAssoc = {} 
app.use('/', express.static(__dirname + '/public')) 
app.post("/signup", upload.none(), (req, res) => { 
  console.log("/signup hit", req.body) 
  let username = req.body.username 
  let password = req.body.password 
  passwordsAssoc[username] = password 
  res.send("<html><body> signup successful </body></html>") 
}) 
app.post("/login", upload.none(), (req, res) => { 
  console.log("/login hit", req.body) 
  let username = req.body.username 
  let passwordGiven = req.body.password 
  let expectedPassword = passwordsAssoc[username] 
  if (expectedPassword !== passwordGiven) { 
    res.send("<html><body> invalid username or password </body></html>") 
    return 
  } 
  res.send("<html><body> login successful </body></html>") 
}) 
app.listen(4000) 