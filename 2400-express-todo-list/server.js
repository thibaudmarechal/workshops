let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();

let todoItems = [];
let newHeader = [];
let todoLists = [];
let todoListCount = 0;

let itemEnd = "/item";
let newHeaderEnd = "/newHeader";
let deleteTodoEnd = "/deleteTodo";

let h = (element, children) => {
  return (
    "<" +
    element +
    ">" +
    children.join("\n") +
    "</" +
    element.split(" ").shift() +
    ">"
  );
};
let helpText = [
  "This is a todo list that lets you add new items to it. Simply select the input field, write what you want to add to the list and hit submit. It will be added to the list of todo items."
];

let makePage = () => {
  let lified = todoItems.map(item => {
    return h("li", [item]);
  });
  return h("html", [
    h("body", [
      h("h1", [newHeader]),
      h(
        "form action='/newHeader" +
          todoListCount +
          "'" +
          " method='POST' enctype='multipart/form-data'",
        [
          h("input type='text' name='heading'", []),
          h("button type='submit'", ["Change Header"])
        ]
      ),
      h("div", helpText),
      h("ul style='list-style-type: square'", lified),
      h(
        "form action='/item" +
          todoListCount +
          "'" +
          " method='POST' enctype='multipart/form-data'",
        [
          h("input type='text' name='todo'", []),
          h("button type='submit'", ["Add Item"])
        ]
      ),
      h(
        "form action='/deleteTodo" +
          todoListCount +
          "'" +
          "' method='POST' enctype='multipart/form-data'",
        [h("button type='submit' ", ["Delete Todo List"])]
      )
    ])
  ]);
};

let makeTodoList = () => {
  todoListCount++;
  itemEnd = "/item";
  newHeaderEnd = "/newHeader";
  deleteTodoEnd = "/deleteTodo";
  itemEnd += todoListCount;
  newHeaderEnd += todoListCount;
  deleteTodoEnd += todoListCount;
  return makePage();
};

app.get("/", (req, res) => {
  res.send(makeTodoList());
});

app.post("'" + deleteTodoEnd + "'", upload.none(), (req, res) => {
  let clearTodo = [];
  todoItems = clearTodo;
  res.send(makeTodoList());
});

app.post("/item1", upload.none(), (req, res) => {
  let newTodo = req.body.todo;
  todoItems.push(newTodo);
  res.send(makeTodoList());
});

app.post("'" + newHeaderEnd + "'", upload.none(), (req, res) => {
  newHeader = req.body.heading;
  res.send(makeTodoList());
});

let port = 4000;
app.listen(port, () => {
  console.log("server is running on port " + port);
});
