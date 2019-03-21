let express = require('express') 
let app = express() 
app.use('/static', express.static(__dirname + '/public')) 
app.listen(4000) 