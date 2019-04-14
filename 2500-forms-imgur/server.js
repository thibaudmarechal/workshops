let express = require("express") 
let app = express() 
let fs = require('fs') 
let multer = require("multer") 
let upload = multer({ 
  dest: __dirname + '/uploads/' 
}) 
app.use('/images', express.static(__dirname + '/uploads')) 
let posts = [] 
let makePage = () => { 
  let postElements = posts.map(post => { 
    return '<div><img src="' + post.path + '" height="100px"/></div>' 
  }) 
  let asString = postElements.join("\n") 
  return "<html><body> " + 
    asString + 
    '<form action="/image" method="POST" enctype="multipart/form-data">' + 
    '<input type="file" name="funny-image"></input>' + 
    '<input type="text" name="title"></input>' + 
    '<input type="submit"></input>' + 
    '</form></body></html>' 
} 
app.get("/", (req, res) => { 
  console.log("Request to / endpoint") 
  res.send(makePage()) 
}) 
app.post("/image", upload.single('funny-image'), (req, res) => { 
  let file = req.file 
  console.log("uploaded file", file) 
  let ext = file.originalname.split('.').pop() 
  let newFileName = file.filename + '.' + ext 
  fs.renameSync(file.path, __dirname + '/uploads/' + newFileName) 
  let frontendPath = '/images/' + newFileName 
  posts.push({ 
    path: frontendPath, 
    title: req.body.title 
  }) 
  res.send(makePage()) 
}) 
app.listen(4000, () => { 
  console.log("server started") 
}) 