let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let passwordsAssoc = {};
let attemptCounts = {};
app.use("/", express.static(__dirname + "/public"));
app.post("/signup", upload.none(), (req, res) => {
  console.log("/signup hit", req.body);
  let username = req.body.username;
  let password = req.body.password;
  if (passwordsAssoc[username] !== undefined) {
    return res.send(
      '<html><body> <div>This username is already taken.</div><div><a href="/">Go back to the Sign Up page</a></div> </body></html>'
    );
  }
  passwordsAssoc[username] = password;
  attemptCounts[username] = 0;
  res.send(
    '<html><body> <div>signup successful</div><div><a href="/">Go back home</a></div> </body></html>'
  );
});

let loginForm = `
  <html>
    <body>
    <form action="/login" method="POST" enctype="multipart/form-data">        
            <div>Username</div>        
            <input type="text" name="username"></input>        
            <div>Password</div>        
            <input type="text" name="password"></input>        
            <input type="submit" value="log me in!"></input>        
        </form> 
    </body>
  </html>
`;

app.post("/login", upload.none(), (req, res) => {
  console.log("/login hit", req.body);
  let username = req.body.username;
  let passwordGiven = req.body.password;
  let expectedPassword = passwordsAssoc[username];
  attemptCounts[username]++;
  if (attemptCounts[username] >= 3) {
    res.send("<html> <body><div>Account Disabled!</div> </body></html>");
    return;
  }
  if (expectedPassword !== passwordGiven) {
    res.send(
      '<html><body><div>invalid username or password</div><div><a href="/login.html">Try to Login Again</a></div><div><a href="/signup.html">No account? Sign Up!</a></div> </body></html>'
    );
    return;
  }

  res.send("<html><body> login successful </body></html>");
});
let port = 4000;
app.listen(port, () => {
  console.log("server started, listening on port " + port);
});
