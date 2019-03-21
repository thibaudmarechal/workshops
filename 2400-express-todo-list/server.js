let express = require("express") 
let app = express() 
let multer = require("multer") 
app.use(multer().none()) 
let todoItems = [] 
let makePage = () => { 
  let lified = todoItems.map(item => { 
    return "<li>" + item + "</li>" 
  }) 
  let asString = lified.join("\n") 
  return "<html><body> " + 
    "<ul>" + 
    asString + 
    "</ul>" + 
    '<form action="/item" method="POST" enctype="multipart/form-data">' + 
    '<input type="text" name="todo"></input>' + 
    '<input type="submit"></input>' + 
    '</form>' + 
    '</body></html>' 
} 
app.get("/", (req, res) => { 
  res.send(makePage()) 
}) 
app.post("/item", (req, res) => { 
  let newTodo = req.body.todo 
  todoItems.push(newTodo) 
  res.send(makePage()) 
}) 
app.listen(4000) 