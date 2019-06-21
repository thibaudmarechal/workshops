let express = require('express') // 1
let app = express() // 1
app.use('/', express.static(__dirname + '/public')) // 1
app.listen(4000) // 1

/* meta
({
    text: {
    1: `Our express server will be very minimal. The only purpose is to
    send back the HTML and Javascript files. To receive
    the files in /public, the requests will have to be made to
    endpoints that start with /static/`,
    }
})
*/