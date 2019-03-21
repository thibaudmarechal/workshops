let express = require('express') 
let app = express() 
let page = "<html><body>Hello world</body></html>" 
app.get('/index.html', (req, res) => { 
    res.send(page) 
}) 
app.get('/otherpage', (req, res) => { 
    let contents = fs.readFileSync(__dirname + '/public/anotherpage').toString() 
    res.send(contents) 
}) 
app.use('/static', express.static(__dirname + '/public')) 
app.listen(4000) 