let express = require("express") // 1
let app = express() // 1
let multer = require("multer") // 1
let upload = multer({ // 2
  dest: __dirname + '/uploads/' // 2
}) // 2
app.use('/images', express.static(__dirname + '/uploads')) // 3
let posts = [] // 4

let h = (element, children) => { // 5
  return '<' + element + '>' + children.join('\n') + '</' + element.split().pop() + '>' // 5
} // 5

let makePage = () => { // 6
  let postElements = posts.map(post => { // 7
    return h('div', [ // 7
      h('img src="' + post.path + '" height="100px"', [])]) // 7
  }) // 7
  return h('html', [ // 8
    h('body', [ // 8
      h('div', postElements), // 10
      h('form action="/image" method="POST" enctype="multipart/form-data"', [ // 8
        h('input type="file" name="funny-image"', []),  // 9
        h('input type="text" name="title"', []),  // 8
        h('input type="submit"', [])])])]) // 8
} // 6
app.get("/", (req, res) => { // 11
  console.log("Request to / endpoint") // 11
  res.send(makePage()) // 11
}) // 11
app.post("/image", upload.single('funny-image'), (req, res) => { // 12
  let file = req.file // 13
  console.log("uploaded file", file) // 13
  let frontendPath = '/images/' + file.filename // 14
  posts.push({ // 15
    path: frontendPath, // 15
    title: req.body.title // 15
  }) // 15
  res.send(makePage()) // 12
}) // 12
app.listen(4000, () => { // 1
  console.log("server started") // 1
}) // 1

/* meta
({
  text: {
    1: `Similar to the previous workshop, we import the libraries that we need and we start the server on port 4000. The second argument passed
    to the function call is a function that gets called once the server has started. It's optional.`,
    2: `Since we're going to let the users upload files, we need to tell multer where to put those files. To do this,
    we pass an argument to multer. The argument is an object. The object has one property called dest. The value of that
    property is the location`,
    3: `In later steps will be giving the user the ability to upload images to the uploads/ subdirectory. The purpose of uploading an image
    is so that it can be retrieved at a later time. This line gives every file in the uploads/ directory its
    own GET endpoint. If a file is called uploads/thefilename.png, then the endpoint will be /images/thefilename.png`,
    4: `We create a new empty array. The variable posts refers to that array. The elements of the array will be objects.
    Each object will contain a property path. The value of this property is the path of the endpoint generated
    by an image file. For example: if there is a file called uploads/cat.png, then there is an enpoint /images/cat.png
    and so {path: '/images/cat.png'} will be an element of the array.`,
    5: `The h function, which stands for html, is an easy way to generate HTML formatted strings. Examples:

\`\`\`javascript
h('div') // "<div></div>"
h('div', ['hello world']) // "<div>hello world</div>"
h('form',[h('input',[])]) // "<form><input></input></form>"
\`\`\`

It takes two arguments. The first argument is what goes inside the HTML element. The second argument is an array of strings,
 each string represents a child. The h function returns a string. The \`element.split().pop()\` part of the function is used to extract
 the tag from the body of the HTML element. For example, if element = \`img src="/cat.jpg"\`, then \`element.split().pop()\` would be \`"img"\`
    `,
    6: `The makePage function is what will generate the HTML formatted string that is sent to the browser.
    It needs to be a function because it returns a webpage that depends on the posts array. The page is dynamic. `,
    7: `We declare a variable called postElements. This variable refers to an array. Each element
    of the array is a string. The strings are all HTML formatted. They all represent an img element inside a div element.
    For example, if todoItems = \`[{path:"/images/cat.png"}, {path:"/images/dog.jpg"}]\`, then
     postElements = \`["<div><img src="/images/cat.png" height="100px"/></div>","<div><img src="/images/cat.png" height="100px"/></div>"]\``,



     8: `Our HTML formatted string always contains a form`,
     9: `The form contains an input element, but this is different than the ones you've seen before. It has a
     a type of file. Please remember the name "funny-image", it will be used below.`,
     10: `We add the dynamic part of the page in a div that's the first child of the body. It contains all the divs we generated with
     the img elements.`,
     11: `Our / endpoint simply sends back the generated page`,
     12: `Our /image POST endpoint receives the HTTP request from a form submission, so we have to use multer. The upload variable
     which is defined at the start of the file can be used to specify if a file is expected by the endpoint.
     upload.single expects a single argument. The argument is a string.
     It represents the name attribute of the input file element, which is "funny-image".
     The endpoint sends back the generated page
     `,
     13: `As a convenience, I create a new variable called file. It refers to req.file. This refers to an object
     that was created by multer and that contains information about the file uploaded by the user. We use
     three properties from the object:
- originalname, which contains the name of the file on the uploader's computer.
- filename, which contains the name of the file on our computer. Multer generates a new random name for every file.
- path, which is the full path (as in file location) on our computer, including the filename`,
     14: `From the perspective of the user, they will request the image by using a path that starts with /images/ (see the express.static line above).
     We store this string in a variable called frontendPath`,
     15: `We store the frontendPath and the title in an object. The title was received in the HTTP request
     generated by the form. The title in req.body.title comes from the name attribute of the text input. We don't
     use the title anywhere at the moment. You'll be using it in one of your exercises. this object is added to our posts array.`,
  }
})
*/