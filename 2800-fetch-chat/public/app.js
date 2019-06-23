let fetchAndUpdate = async () => { 
    let response = await fetch('/messages') 
    let responseBody = await response.text() 
    let parsed = JSON.parse(responseBody) 
    let msgListUL = document.getElementById('msg-list') 
    msgListUL.innerHTML = "" 
    parsed.forEach(elem => { 
        let li = document.createElement("li") 
        li.innerText = elem.user + ": " + elem.msg 
        msgListUL.append(li) 
    }) 
} 
fetchAndUpdate() 
setInterval(fetchAndUpdate, 500) 