let body = document.querySelector('body') // 1
let lost = false // 2
let won = false // 2
let clicked = [false, false] // 3

let first = document.createElement('button') // 4
first.innerText = "one" // 5
first.addEventListener('click', () => { // 6
    if (won || lost) return // 7
    clicked[0] = true // 8
    if (clicked[0] && clicked[1]) { // 9
        won = true // 10
        document.getElementById('status').innerText = "you won!" // 11
    } // 9
}) // 6
body.appendChild(first) // 12

let second = document.createElement('button') // 13
second.innerText = "two" // 13
second.addEventListener('click', () => { // 13
    if (won || lost) return // 13
    clicked[1] = true // 14
    if (clicked[0] && clicked[1]) { // 13
        won = true // 13
        document.getElementById('status').innerText = "you won!" // 13
    } // 13
}) // 13
body.appendChild(second) // 13
setTimeout(() => { // 15
    if (won || lost) return // 16
    lost = true // 17
    document.getElementById('status').innerText = "You lost!" // 17
}, 1000) // 15

/* meta
({
    text: {
        1: `We select the body element of the DOM because we will be adding children
    to this element.`,
        2: `We keep track if the user has won or lost`,
        3: `There are going to be two buttons and we need to keep track of which one was clicked`,
        4: `We create the first button. It hasn't been placed in the DOM yet.`,
        5: `We set the text on the button`,
        6: `We add an event listener to the button which is triggered when the button is clicked`,
        7: `We check if the game is over`,
        8: `We update the clicked array to reflect the fact that the first button is clicked`,
        9: `We check if both buttons are clicked`,
        10: `If both buttons are clicked, we update the won variable`,
        11: `And we also modify the text in the div with the id of status`,
        12: `Finally, we add the button to the DOM so that the user can see it and click on it`,
        13: `We add another button. There is one difference between this button and the other button which we will see in the next slide`,
        14: `We update the clicked array. Do you see the difference from the previous button? Can you explain this difference?`,
        15: `A second after the webpage is loaded, an action will take place.`,
        16: `If the game is over, the action will end immediately`,
        17: `At this point we know that the user has not clicked on both buttons (why?) and that a second has elapsed (why?)
    so we update the lost variable and we inform the user that they have lost.`
    }
})
*/