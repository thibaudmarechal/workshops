let express = require("express") // 1
let cors = require("cors") // 3
let multer = require("multer") // 1
let upload = multer() // 1
let app = express() // 1
let cookieParser = require('cookie-parser') // 2
app.use(cookieParser()); // 2
app.use(cors({ credentials: true, origin: "http://localhost:3000" })) /* 3 */

let passwords = {} // 5
let sessions = {} // 6
let messages = [] // 4

app.get("/messages", function (req, res) { // 26
  res.send(JSON.stringify(messages)) // 26
}) // 26

app.post("/newmessage", upload.none(), (req, res) => { // 21
  console.log("*** inside new message") // 21 
  console.log("body", req.body) // 21
  let sessionId = req.cookies.sid // 22
  let username = sessions[sessionId] // 22
  console.log("username", username) // 22
  let msg = req.body.msg // 23
  let newMsg = { username: username, message: msg } // 24
  console.log("new message", newMsg) // 24
  messages = messages.concat(newMsg) // 24
  console.log("updated messages", messages) // 24
  res.send(JSON.stringify({ success: true })) // 25
}) // 21

app.post("/login", upload.none(), (req, res) => { // 12
  console.log("**** I'm in the login endpoint") // 12
  console.log("this is the parsed body", req.body) // 12
  let username = req.body.username // 13
  let enteredPassword = req.body.password // 13
  let expectedPassword = passwords[username] // 14
  console.log("expected password", expectedPassword) // 14
  if (enteredPassword === expectedPassword) { // 15
    console.log("password matches") // 15
    let sessionId = generateId() // 16
    console.log("generated id", sessionId) // 16
    sessions[sessionId] = username // 16
    res.cookie('sid', sessionId); // 17
    res.send(JSON.stringify({ success: true })) // 18
    return // 19
  } // 15
  res.send(JSON.stringify({ success: false })) // 20
})// 12

let generateId = () => { // 7
  return "" + Math.floor(Math.random() * 100000000) // 7
} // 7

app.post("/signup", upload.none(), (req, res) => { // 8
  console.log("**** I'm in the signup endpoint") // 8
  console.log("this is the body", req.body) // 8
  let username = req.body.username // 9
  let enteredPassword = req.body.password // 9
  passwords[username] = enteredPassword // 10
  console.log("passwords object", passwords) // 10
  res.send(JSON.stringify({ success: true })) // 11
}) // 8


app.listen(4000) // 1

/* meta
  ({
    text:
    {
      1: `Our backend is going to use express and multer. It will run on port 4000`,
      2: `It's also going to use cookie-parser so that the
server can give the user a session id and the user can reuse at every HTTP request`,
      3: `Since the react server is separate from the express server, we need to use the cors module
otherwise the users browser would refuse to receive HTTP responses from the express server. This is done for
security reasons. We need to specify the url of the frontend server when we use the cors library. Our frontend server
is running on http://localhost:3000`,
      4: `This array stores all the chat messages`,
      5: `This object associates usernames with passwords. It is used in the /login and /signup endpoints`,
      6: `This object associates session ids with usernames. It is used in the /login and /newmessage endpoint`,
      7: `This function generates random session ids. It is used in /signup`,
      8: `The signup endpoint associates a username with a password. Right now, we don't even check if the username already exists. You'll need to fix this later.`,
      9: `As a convenience, we declare some variables`,
      10: `We make the association between the username and the password in the passwords object. We console.log the passwords object for debugging purposes.`,
      11: `This endpoint always responds with a success message in the HTTP response body`,
      12: `The login endpoint receives fetch requests and verifies that the password supplied matches the password used during signup. The console logs are for debugging purposes.`,
      13: `We declare some variables as a convenience`,
      14: `We get the password that was used during signup. The console.log is for debugging purposes`,
      15: `We check to see if the password supplied matches the one used during signup`,
      16: `If the password is correct, we generate a new session id and we associate the session id with the
      username supplied in the sessions object`,
      17: `We set the 'sid' cookie with a value of \`sessionId\` so that we can identify the user every time
      they send an HTTP request to the server. This is used in the /newmessage endpoint`,
      18: `We send back a success message since the password was correct`,
      19: `We return. Is this return necessary?`,
      20: `We can only get to the line if the password was incorrect (why?), so we send a message to indicate that the login did not succeed`,
      21: `The /newmessage endpoint receives an HTTP request every time the user sends a message to the chat`,
      22: `We need to get the username of the person who sent the message. We do this by first getting the session id and then using the session id
       to get the username using the sessions object which is populated in the /login endpoint`,
      23: `The message is in the msg property. There is a reference to \`msg\` in the ChatForm component on the frontend`,
      24: `Now that we have the username and the message, we can create a new object with those two pieces of information and then add that object to the messages array.`,
      25: `We send a message to the client notifying that the process was successful.`,
      26: `The /messages endpoint always sends back all the messages. Since it is an array, we need to convert it to a string before sending it.`

    }

  })
  */