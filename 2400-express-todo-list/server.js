let express = require("express") // 1
let app = express() // 1
let multer = require("multer") // 1
let upload = multer() // 1
let todoItems = [] // 2
let makePage = () => { // 3
  let lified = todoItems.map(item => { // 4
    return "<li>" + item + "</li>" // 4
  }) //4
  let asString = lified.join("\n") // 5
  return "<html><body> " + // 6
    "<ul>" + // 6
    asString + // 7
    "</ul>" + // 6
    '<form action="/item" method="POST" enctype="multipart/form-data">' + // 6
    '<input type="text" name="todo"></input>' + // 6
    '<input type="submit"></input>' + // 6
    '</form>' + // 6
    '</body></html>' // 6
} // 3
app.get("/", (req, res) => { // 8
  res.send(makePage()) // 8
}) // 8
app.post("/item", upload.none(), (req, res) => { // 9
  let newTodo = req.body.todo // 10
  todoItems.push(newTodo) // 11
  res.send(makePage()) // 12
}) // 9
app.listen(4000, () => { // 1
  console.log("the server has started") // 1
}) // 1

/* meta
({
  text: {
    1: `Similar to the previous workshop, we import the libraries that we need and we start the server on port 4000.
    We also create a variable upload that refers to an object that will give
    our endpoints the capability of receiving HTTP requests from a form submission.`,
    2: `We create an empty array and a variable called todoItems that refers to that array. `,
    3: `We declare a new function makePage that will generate an HTML formatted string. 
    The purpose is to display every element of todoItems `,
    4: `We declare a variable called lified. This variable refers to an array. Each element
    of the array is a string. The strings are all HTML formatted. They all represent li elements. The 
    For example, if todoItems = \`["buy milk", "job"]\`, then lified = \`["<li>buy milk</li>","<li>jog</li>"]\``,
    5: `"\n" represents a string that contains the newline character. We take the array of string and join them and 
    we store the result in a variable called asString.
    For example, if lified = ["<li>buy milk</li>","<li>jog</li>"],
     then asString = ["<li> buy milk</li>\n<li>job</li>"]`,
     6: `This is the part of the webpage that never changes. It contains a form that, when submitted, sends
     an HTTP POST request to the /item endpoint. The form contains one text input element and a submit input
     element. The name attribute is arbitrarily called todo`,
     7: `We add the contents of the asString variable inside the <ul>. Therefore, makePage returns somethign
     different depending on what is in todoItems.`,
     8: `The / endpoint sends back to the user what the makePage() function call returns`,
     9: `We have an item endpoint. This is the endpoint that receivest he HTTP requests in the form submission because
     the path of the endpoint matches the action of the form and the method of the endpoint matches the method of the form.
     To receive the body of the HTTP request, we use the upload variable that refers to an object
     from the multer library.`,
     10: `The HTTP request body is parsed into an object by multer. The object has a todo property because
     the form has an text input with a name attribute of todo. This variable declaration is for convenience
     and readibility.`,
     11: `We add the todo item to the array referred to by todoItems`,
     12: `makePage generates an HTML formatted string. Looking at the makePage function
     definition we see that it uses the todoItems array to generate this string.
      The generated string is sent back to the user using res.send. The "/item" endpoint and 
     the "/" endpoint both use the makePage function to generate the HTML formatted string, so they
     send back very similar pages. The main difference is thath /item sends back an updated version of the HTML
     that contains the new item.`
  }
})
*/