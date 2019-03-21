let gameEngine = new Engine(document.getElementById("app")) // 1
let keydownHandler = event => { // 2
    if (event.code === "ArrowLeft") { // 3
        gameEngine.player.moveLeft() // 3
    } // 3
    if (event.code === "ArrowRight") { // 4
        gameEngine.player.moveRight() // 4
    } // 4
} // 2
document.addEventListener("keydown", keydownHandler) // 5
gameEngine.gameLoop() // 6
/* meta
({
    text: {
        1: `We create an instance of the Engine class. Looking at our index.html, we see that it has
        a div with an id of \`"app"\`  `,
        2: `keydownHandler is a variable that refers to a function. The function has one parameter
        (does the parameter name matter?) which is called event. As we will see below, this function
        will be called every time the user presses a key. The argument of the function call will be an object.
         The object will contain information about the key press, such as which key was pressed. `,
        3: `\`event.code\` contains a string. The string represents which key was press. If the
         key is left, then we call the moveLeft method of \`gameEngine.player\` (where is this method defined?)`,
        4: `If \`event.code\` is the string that represents a right arrow keypress, then move our hamburger
        to the right  `,
        5: `We add an event listener to document. document the ancestor of all DOM nodes in the DOM. All events
        bubble up to document. \`document.addEventListener\` refers to a function. The function takes two arguments.
        The first argument is a string that represents an event. For a complete list of all events, please refer to
        [this page](https://www.w3schools.com/jsref/dom_obj_event.asp)

        The second argument is a function that will get called every time a user interaction occurs that matches the
        type of the first argument. The function gets called with an object. The object contains information about
        the user interaction.
        `,
        6: `We call the gameLoop method to start the game`
    }
})
*/