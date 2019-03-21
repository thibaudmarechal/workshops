({
  desc: "Extend the program you created",
  questions: [
    `Display the user's username on the top left of the screen after they've logged in`,
    `Anyone can change your password by signing up with your username. Fix this .`,
    `Use postman to send a POST request to /post with an invalid sessionid so that
    you can get a post by a user called undefined. In other words,
    it is possible to post without login in. Fix this issue.`,
    `Right now a person has to relogin if they close the page and reopen it again.
    Change this: if they are logged in and they refresh the page, they are still logged in
    (hint: check the cookie in the '/' endpoint)`,
    `Make it so you can post not just text but also an image`,
    `(super advanced keener question) Add likes. In other words, anyone can like a post
    (hint: each post will have its own form. You can use the hidden input type)`
  ]
})