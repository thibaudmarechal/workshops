let express = require('express') 
let app = express() 
let MongoClient = require('mongodb').MongoClient; 
let ObjectID = require('mongodb').ObjectID 
let reloadMagic = require('./reload-magic.js') 
let multer = require('multer') 
let upload = multer({ dest: __dirname + '/uploads/' }) 
reloadMagic(app) 
app.use('/', express.static('build')); 
app.use('/uploads', express.static('uploads')); 
let dbo = undefined 
let url = "YOUR_OWN_PERSONAL_URL_STRING_WILL_GO_HERE" 
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => { 
    dbo = db.db("media-board") 
}) 
app.get("/all-posts", (req, res) => { 
    console.log("request to /all-posts") 
    dbo.collection('posts').find({}).toArray((err, ps) => { 
        if (err) { 
            console.log("error", err) 
            res.send("fail") 
            return 
        } 
        console.log("posts", ps) 
        res.send(JSON.stringify(ps)) 
    }) 
}) 
app.post('/login', upload.none(), (req, res) => { 
    console.log("login", req.body) 
    let name = req.body.username 
    let pwd = req.body.password 
    dbo.collection('users').findOne({ username: name }, (err, user) => { 
        if (err) { 
            console.log("/login error", err) 
            res.send(JSON.stringify({ success: false })) 
            return 
        } 
        if (user === null) { 
            res.send(JSON.stringify({ success: false })) 
        } 
        if (user.password === pwd) { 
            res.send(JSON.stringify({ success: true })) 
            return 
        } 
        res.send(JSON.stringify({ success: false })) 
    }) 
}) 
app.post('/new-post', upload.single("img"), (req, res) => { 
    console.log("request to /new-post. body: ", req.body) 
    let description = req.body.description 
    let file = req.file 
    let frontendPath = '/uploads/' + file.filename 
    dbo.collection('posts').insertOne({ description: description, frontendPath: frontendPath }) 
    res.send(JSON.stringify({ success: true })) 
}) 
app.post('/update', upload.none(), (req, res) => { 
    console.log("request to /update") 
    let id = req.body.id.toString() 
    let desc = req.body.description 
    console.log("sent from client", desc, id) 
    dbo.collection('posts').updateOne( 
        { "_id": ObjectID(id) }, 
        { $set: { description: desc } }) 
    res.send("success") 
}) 
app.all('/*', (req, res, next) => { 
    res.sendFile(__dirname + '/build/index.html'); 
}) 
app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") }) 