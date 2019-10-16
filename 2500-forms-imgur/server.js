let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer({ dest: __dirname + "/uploads" });

let titles = [];
let posts = [];

app.use("/images", express.static(__dirname + "/uploads"));

let h = (element, children) => {
  return (
    "<" +
    element +
    ">" +
    children.join("\n") +
    "</" +
    element.split(" ").shift() +
    ">"
  );
};

let makePage = () => {
  let postElements = posts.map(post => {
    let imgElements = post.paths.map(path => {
      return h('img src="' + path + '" height="200px"', []);
    });
    return h("div", [
      h("h1", [post.title]),
      h("div", [imgElements]),
      h("p", [post.description])
    ]);
  });

  return h("html", [
    h("body", [
      h("div", postElements),
      h('form action="/image" method="POST" enctype="multipart/form-data"', [
        h('input type="file" name="weird-imgs" multiple', []),
        h('input type="text" name="imgUrl" placeholder="Enter a URL"', []),
        h('input type="text" name="title" placeholder="Enter a title"', []),
        h(
          'input type="text" name="description" placeholder="Enter a description"',
          []
        ),
        h('input type="submit"', [])
      ]),
      h('form action="/delete" method="POST" enctype="multipart/form-data"', [
        h('input type="submit" value="Delete Files"', [])
      ])
    ])
  ]);
};

app.get("/", (req, res) => {
  console.log("Request to / endpoint");
  res.send(makePage());
});

app.post("/image", upload.array("weird-imgs"), (req, res) => {
  let files = req.files;
  let url = req.body.imgUrl;
  let frontEndPaths;
  if (files.length === 0) {
    frontEndPaths = [req.body.imgUrl];
  } else {
    frontEndPaths = files.map(file => {
      return "/images/" + file.filename;
    });
  }
  posts.push({
    paths: frontEndPaths,
    title: req.body.title,
    description: req.body.description
  });
  res.send(makePage());
});

app.post("/delete", (req, res) => {
  posts = [];
  res.send(makePage());
});

app.listen(4000, () => {
  console.log("server is started on post 4000");
});
