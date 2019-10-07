// let express = require("express");
// let app = express();
// let multer = require("multer");
// let upload = multer();
// let todoItems1 = [];
// let todoItems2 = [];
// let newHeader1 = [];
// let newHeader2 = [];
// let todoLists = [];
// let todoListCount = 0;

// let makeTodoList = () => {
//   todoListCount++;
// };

// let h = (element, children) => {
//   return (
//     "<" +
//     element +
//     ">" +
//     children.join("\n") +
//     "</" +
//     element.split(" ").shift() +
//     ">"
//   );
// };
// let helpText = [
//   "This is a todo list that lets you add new items to it. Simply select the input field, write what you want to add to the list and hit submit. It will be added to the list of todo items."
// ];

// let makePage = () => {
//   let lified1 = todoItems1.map(item => {
//     return h("li", [item]);
//   });
//   let lified2 = todoItems2.map(item => {
//     return h("li", [item]);
//   });
//   return h("html", [
//     h("body", [
//       h("h1", [newHeader1]),
//       h(
//         "form action='/newHeader" +
//           todoListCount +
//           "'" +
//           " method='POST' enctype='multipart/form-data'",
//         [
//           h("input type='text' name='heading'", []),
//           h("button type='submit'", ["Change Header"])
//         ]
//       ),
//       h("div", helpText),
//       h("ul style='list-style-type: square'", lified1),
//       h("form action='/item1' method='POST' enctype='multipart/form-data'", [
//         h("input type='text' name='todo'", []),
//         h("button type='submit'", ["Add Item"])
//       ]),
//       h(
//         "form action='/deleteTodo1' method='POST' enctype='multipart/form-data'",
//         [h("button type='submit' ", ["Delete Todo List"])]
//       ),
//       h("h1", [newHeader2]),
//       h(
//         "form action='/newHeader2' method='POST' enctype='multipart/form-data'",
//         [
//           h("input type='text' name='heading'", []),
//           h("button type='submit'", ["Change Header"])
//         ]
//       ),
//       h("div", helpText),
//       h("ul style='list-style-type: square'", lified2),
//       h("form action='/item2' method='POST' enctype='multipart/form-data'", [
//         h("input type='text' name='todo'", []),
//         h("button type='submit'", ["Add Item"])
//       ]),
//       h(
//         "form action='/deleteTodo2' method='POST' enctype='multipart/form-data'",
//         [h("button type='submit' ", ["Delete Todo List"])]
//       )
//     ])
//   ]);
// };

// app.get("/", (req, res) => {
//   res.send(makePage());
// });

// app.post("/deleteTodo1", upload.none(), (req, res) => {
//   let clearTodo = [];
//   todoItems1 = clearTodo;
//   res.send(makePage());
// });

// app.post("/deleteTodo2", upload.none(), (req, res) => {
//   let clearTodo = [];
//   todoItems2 = clearTodo;
//   res.send(makePage());
// });

// app.post("/item1", upload.none(), (req, res) => {
//   let newTodo = req.body.todo;
//   todoItems1.push(newTodo);
//   res.send(makePage());
// });

// app.post("/item2", upload.none(), (req, res) => {
//   let newTodo = req.body.todo;
//   todoItems2.push(newTodo);
//   res.send(makePage());
// });

// app.post("/newHeader1", upload.none(), (req, res) => {
//   newHeader1 = req.body.heading;
//   res.send(makePage());
// });

// app.post("/newHeader2", upload.none(), (req, res) => {
//   newHeader2 = req.body.heading;
//   res.send(makePage());
// });

// let port = 4000;
// app.listen(port, () => {
//   console.log("server is running on port " + port);
// });
