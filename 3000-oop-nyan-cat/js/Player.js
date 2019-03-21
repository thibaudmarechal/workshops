class Player { // 1
    constructor(root) { // 2
        this.x = 2 * PLAYER_WIDTH // 3
        let y = GAME_HEIGHT - PLAYER_HEIGHT - 10 // 4
        this.domElement = document.createElement("img") // 5
        this.domElement.src = "images/player.png" // 6
        this.domElement.style.position = "absolute" // 6
        this.domElement.style.left = this.x + "px" // 6
        this.domElement.style.top = y + "px" // 6
        this.domElement.style.zIndex = "10" // 6
        root.appendChild(this.domElement) // 7
    } // 2
    moveLeft() { // 8
        if (this.x > 0) { // 9
            this.x = this.x - PLAYER_WIDTH // 9
        } // 9
        this.domElement.style.left = this.x + "px" // 10
    } // 8
    moveRight() { // 11
        if (this.x + PLAYER_WIDTH < GAME_WIDTH) { // 11
            this.x = this.x + PLAYER_WIDTH // 11
        } // 11
        this.domElement.style.left = this.x + "px" // 11
    } // 11
} // 1

/* meta
({
    text: {
        1: `There will only be one instance of this class. This instance will contain the
        data and methods related to the burger that moves at the bottom of your screen `,
        2: `The constructor takes one parameter. This parameter refers to the parent DOM node. We will be
        adding a DOM element to this parent DOM node. Here is an example of how we create an instance of this class:
        
\`\`\`javascript
        new Player(theRoot)
\`\`\`
        `,
        3: `The x position starts off in the middle of the screen. Since this data is needed every time we move the player, we
        store the data in a property of the instance. It represents the distance from the left margin of the browsing area to
        the leftmost x position of the image.`,
        4: `The y position never changes, so we don't need to store it in a property. It represents the y position of the top of the
        hamburger. The y position is the distance from the top margin of the browsing area.`,
        5: `We create a DOM node. We will be updating the DOM node every time we move the player, so we store a reference to the
         DOM node in a property.`,
        6: `
         We give it a src attribute to specify which image to display

        We modify the CSS style of the DOM node
- position: "absolute" means that the DOM node is positioned according to the top left of the browser window according to its \`left\` and \`top\` 
css properties (see below)
- left: the distance from the left margin of the browser. Since we write px it is measured in pixels
- top: the distance from the top margin of the browser. Since we write px it is measured in pixels
- zIndex: this property is needed to make sure that the image is not hidden behind another DOM node
        
         `,
        7: `Show that the user can actually see the img DOM node, we append it to the root DOM node.`,
        8: `This method will be called when the user presses the left key. See in Engine.js
        how we relate the key presses to this method  `,
        9: `If leftmost x position of the player is greater than 0 then
        we change the x property of the player   `,
        10: `We modify the DOM element to reflect the new x position   `,
        11: `We do the same thing for the right key. See Engine.js to see when this happens.`,
        


    }
})
*/