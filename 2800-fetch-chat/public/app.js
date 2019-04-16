let fetchAndUpdate = () => { // 1
    fetch('/messages') // 2
        .then(response => { // 3
            return response.text() // 3
        }) // 3
        .then(responseBody => { // 4
            let parsed = JSON.parse(responseBody) // 5
            let msgListUL = document.getElementById('msg-list') // 6
            msgListUL.innerHTML = "" // 7
            parsed.forEach(elem => { // 8
                let li = document.createElement("li") // 9
                li.innerText = elem.user + ": " + elem.msg // 9
                msgListUL.append(li) // 10
            }) // 8
        }) // 4
} // 1

setInterval(fetchAndUpdate, 500) // 1

/* meta
({
    text: {
        1: `We call a function every 500ms. This function will fetch data from the backend
        and update the user interface.  `,
        2: `We make a GET HTTP request to /messages  `,
        3: `fetch will not give us the response body immediately. To get the response
        body, we need to call .text(). text is a property of the object that fetch
        returns.  `,
        4: `This callback will process the response body.`,
        5: `Looking at the backend (server.js), we see that the GET /messages HTTP
        response is a JSON formatted string. So the first thing we do is convert
        the string to a javascript object
        `,
        6: `We will be updating the ul in our chat.html, so we need a reference to the DOM node  `,
        7: `We remove all the children from the DOM node (this is the simplest way) `,
        8: `For each message returned for the server, we'll be adding a new li DOM node to our ul  `,
        9: `We first create a li DOM node and give it an innerText   `,
        10: `Then we make the li DOM node a child of our UL DOM node`



    }
})
*/