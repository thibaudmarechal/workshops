let express = require("express") 
let app = express() 
let multer = require("multer") 
let upload = multer({ 
  dest: __dirname + '/uploads/' 
}) 
app.use('/images', express.static(__dirname + '/uploads')) 
let posts = [] 
let h = (element, children) => { 
  return '<' + element + '>' + children.join('\n') + '</' + element.split().pop() + '>' 
} 
let makePage = () => { 
  let postElements = posts.map(post => { 
    return h('div', [ 
      h('img src="' + post.path + '" height="100px"', [])]) 
  }) 
  return h('html', [ 
    h('body', [ 
      h('div', postElements), 
      h('form action="/image" method="POST" enctype="multipart/form-data"', [ 
        h('input type="file" name="funny-image"', []),  
        h('input type="text" name="title"', []),  
        h('input type="submit"', [])])])]) 
} 
app.get("/", (req, res) => { 
  console.log("Request to / endpoint") 
  res.send(makePage()) 
}) 
app.post("/image", upload.single('funny-image'), (req, res) => { 
  let file = req.file 
  console.log("uploaded file", file) 
  let frontendPath = '/images/' + file.filename 
  posts.push({ 
    path: frontendPath, 
    title: req.body.title 
  }) 
  res.send(makePage()) 
}) 
app.listen(4000, () => { 
  console.log("server started") 
}) 