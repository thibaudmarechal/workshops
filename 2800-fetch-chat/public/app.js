let fetchAndUpdate = () => { // 8
    fetch('/messages') // 9
        .then(response => response.text()) // 10
        .then(responseBody => { // 11
            let parsed = JSON.parse(responseBody) // 12
            let msgListUL = document.getElementById('msg-list') // 13
            msgListUL.innerHTML = "" // 14
            parsed.forEach(elem => { // 15
                let li = document.createElement("li") // 16
                li.innerText = elem.user + ": " + elem.msg // 16
                msgListUL.append(li) // 17
            }) // 15
        }) // 11
} // 8

setInterval(fetchAndUpdate, 500) // 8

let form = document.getElementById('chat-form') // 1
form.addEventListener("submit", event => { // 2
    event.preventDefault() // 3
    let userInput = document.getElementById("user-input").value // 4
    let formData = new FormData(); // 5
    formData.append('message', userInput); // 6
    fetch('/messages', { // 7
        method: "POST", // 7
        body: formData // 7
    }) // 7
}) // 2
/* meta
({
    text: {

        1: `We get a reference to the form DOM node (where does "chat-form" come from?)  `,
        2: `When the form is submitted, we're going to call a function.
        The function will send the form information to the server   `,
        3: `This line prevents the default behaviour of form submission from
        taking place, which is to send an HTTP request and then load a new page.  `,

        4: `We get the value of the input box in the form (where does "user-input" come from?)  `,
        5: `We create a FormData object. You can just memorize this line for now. FormData is 
        provided by the browser. It is used to store data in an HTTP request body`,
        6: `We add some data to the form data. Namely, the message the user has entered. We label
        it "message" so that the backend can use this label to retrieve the information `,
        7: `We make a POST HTTP request to /messages. The HTTP request body will contain
        the user's message.  `,
        8: `We call a function every 500ms. This function will fetch data from the backend
        and update the user interface.  `,
        9: `We make a GET HTTP request to /messages  `,
        10: `fetch will not give us the response body immediately. To get the response
        body, we need to call .text(). text is a property of the object that fetch
        returns.  `,
        11: `This callback will process the response body.`,
        12: `Looking at the backend (server.js), we see that the GET /messages HTTP
        response is a JSON formatted string. So the first thing we do is convert
        the string to a javascript object
        `,
        13: `We will be updating the ul in our chat.html, so we need a reference to the DOM node  `,
        14: `We clear the DOM node (this is the simplest way) `,
        15: `For each message returned for the server, we'll be adding a new li DOM node to our ul  `,
        16: `We first create a li DOM node and give it an innerText   `,
        17: `Then we make the li DOM node a child of our UL DOM node`



    }
})
*/