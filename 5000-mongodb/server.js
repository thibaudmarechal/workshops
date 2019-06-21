let express = require('express') // 1
let app = express() // 1
let MongoClient = require('mongodb').MongoClient; // 3
let ObjectID = require('mongodb').ObjectID // 3
let reloadMagic = require('./reload-magic.js') // 1
let multer = require('multer') // 2
let upload = multer({ dest: __dirname + '/uploads/' }) // 2

reloadMagic(app) // 1

app.use('/', express.static('build')); // 1
app.use('/uploads', express.static('uploads')); // 2

let dbo = undefined // 4
let url = "YOUR_OWN_PERSONAL_URL_STRING_WILL_GO_HERE" // 4
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => { // 4
    dbo = db.db("media-board") // 4
}) // 4

app.get("/all-posts", (req, res) => { // 5
    console.log("request to /all-posts") // 5
    dbo.collection('posts').find({}).toArray((err, ps) => { // 5
        if (err) { // 6
            console.log("error", err) // 6
            res.send("fail") // 6
            return // 6
        } // 6
        console.log("posts", ps) // 7
        res.send(JSON.stringify(ps)) // 7
    }) // 5
}) // 5

app.post('/login', upload.none(), (req, res) => { // 8
    console.log("login", req.body) // 8
    let name = req.body.username // 8
    let pwd = req.body.password // 8

    dbo.collection('users').findOne({ username: name }, (err, user) => { // 9
        if (err) { // 10
            console.log("/login error", err) // 10
            res.send(JSON.stringify({ success: false })) // 10   
            return // 10
        } // 10
        if (user === null) { // 11
            res.send(JSON.stringify({ success: false })) // 11    
        } // 11
        if (user.password === pwd) { // 11
            res.send(JSON.stringify({ success: true })) // 11
            return // 11
        } // 11
        res.send(JSON.stringify({ success: false })) // 11
    }) // 9
}) // 8

app.post('/new-post', upload.single("img"), (req, res) => { // 12
    console.log("request to /new-post. body: ", req.body) // 12
    let description = req.body.description // 13
    let file = req.file // 13
    let frontendPath = '/uploads/' + file.filename // 13
    dbo.collection('posts').insertOne({ description: description, frontendPath: frontendPath }) // 14
    res.send(JSON.stringify({ success: true })) // 14
}) // 12

app.post('/update', upload.none(), (req, res) => { // 15
    console.log("request to /update") // 15
    let id = req.body.id.toString() // 16
    let desc = req.body.description // 16
    console.log("sent from client", desc, id) // 16
    dbo.collection('posts').updateOne( // 17
        { "_id": ObjectID(id) }, // 17
        { $set: { description: desc } }) // 17
    res.send("success") // 17
}) // 15

app.all('/*', (req, res, next) => { // 1
    res.sendFile(__dirname + '/build/index.html'); // 1
}) // 1

app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") }) // 1

/* meta
  ({
    text:
    {
      1: `This is part of the boilerplate. The reload magic is a module that reloads the frontend
      automatically whenever the server restarts or the frontend files are modified.`,
      2: `We're going to use multer because we'll be uploading images. Multer is going to place the files
      in the uploads directory. Each of those files will become endpoints because of express.static.`,
      3: `We'll be using the mongodb library to communicate with mongodb. The mongodb module is an object.
      The two interesting properties of that object are MongoClient, which is used to initiate the connection,
      and ObjectID, which is used to convert a string to a Mongo id (you will see
        it in action in later slides)`,
      4: `dbo is an object that will get populated once the connection to the
      database has been initiated. We're calling our database media-board, but you can use any
      name. If it doesn't exist, it is automatially created. There is a document
      that explains how to get the url string.`,
      5: `The all-posts endpoint returns all the posts in the posts collection. We use the find
      method. By passing the empty object to the find method, we are retrieving everything
      in that collection. We need to use the toArray method, which lets use
      manipulate the result as an array.`,
      6: `There might be an error. For example, the database connection might have
      been interrupted. In that case, console log it.`,
      7: `For debugging purposes, console log the posts and then send back the result
      to the client. Since we're sending back an array, we first have to stringify it.`,
      8: `The login endpoint sees if the username and password provided match what's in the database. As a convenience, we declare some variables.`,
      9: `We use findOne to find a single document whose username property matches the username sent by the client.
      findOne, as opposed to find, only gets a single document. `,
      10: `An error might have occurred. If so, print it to the console.`,
      11: `If no user was found, then the user variable will refer to null. In that case, console log the error.
         Otherwise, check if the password in the database matches the password supplied by the user`,
      12: `This endpoint is used for creating new posts. The console log is for debugging purposes. Posts have files
      and you see that the "img" string is used in the corresponding fetch request (see frontend)`,
      13: `We get the description and the file. The file object has a filename property, which is the name inside the uploads directory.
      Because of the express.static located above, each file in that directory has an endpoint that starts with
      /uploads. We store that path in the database.`,
      14: `We insert the document in the posts collection in our MongoDB server using the insertOne method.
     MongoDB will automatically add a _id property
      to the object to uniquely identify it.
      We send back a response to the frontend. It doesn't really matter what
      we send back since it's not processed (see frontend) `,
      15: `This endpoint is used to update an existing post`,
      16: `We create variables as a convenience`,
      17: `We update one document in the collection. We want to update the one with an _id that matches the
      id supplied by the frontend. The frontend sends the id as a string, so we need to convert
      it to a mongo id using the ObjectID function imported above. The second argument
      of updateOne describes how we want to modify the document. More precisely, we're telling it
      to set the description property of the document to the contents of the desc variable defined above.`
    }

  })
  */