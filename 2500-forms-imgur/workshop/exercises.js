({
  desc: "Extend the program you created",
  questions: [
    `Add a delete button to delete all the posts`,
    `We ask the user to submit a title but then we don't do anything with it.
    For every image, place the title above the image`,
    `Right now we ask the user to submit an image and a title. Add a third piece of information: a description.
    Place the description below the image`,
    `Instead of uploading an image, give the user the ability to submit a url of an image.
    (hint: add an input text element to your form. You'll need to check if req.file is undefined in your /image endpoint)`,
    `(Advanced keener question) give the user the ability to upload two files. You'll need to read and
     understand the multer npm documentation. You can google multer npm.`
  ]
})