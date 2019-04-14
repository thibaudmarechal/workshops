let fetchAndUpdate = () => { 
    fetch('/messages') 
        .then(response => { 
            return response.text() 
        }) 
        .then(responseBody => { 
            let parsed = JSON.parse(responseBody) 
            let msgListUL = document.getElementById('msg-list') 
            msgListUL.innerHTML = "" 
            parsed.forEach(elem => { 
                let li = document.createElement("li") 
                li.innerText = elem.user + ": " + elem.msg 
                msgListUL.append(li) 
            }) 
        }) 
} 
setInterval(fetchAndUpdate, 500) 