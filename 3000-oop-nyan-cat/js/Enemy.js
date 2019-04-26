class Enemy { // 1
        update(timeDiff) { // 9
                this.y = this.y + timeDiff * this.speed // 10
                this.domElement.style.top = this.y + "px" // 10
                if (this.y > GAME_HEIGHT) { // 11
                        this.root.removeChild(this.domElement) // 11
                        this.destroyed = true // 11
                } // 11
        } // 9
        constructor(theRoot, enemySpot) { // 2
                this.root = theRoot // 3
                this.spot = enemySpot // 3
                this.x = enemySpot * ENEMY_WIDTH /* 4 */
                this.y = -ENEMY_HEIGHT /* 5 */
                this.destroyed = false // 5
                this.domElement = document.createElement("img") // 6
                this.domElement.src = "images/enemy.png" // 6
                this.domElement.style.position = "absolute" // 6
                this.domElement.style.left = this.x + "px" // 6
                this.domElement.style.top = this.y + "px" // 6
                this.domElement.style.zIndex = 5 // 6
                theRoot.appendChild(this.domElement) // 7
                this.speed = Math.random() / 2 + 0.25 // 8
        } // 2
} // 1

/* meta
({
    text: {
        1: `The Enemy class will contain information about the enemy such as its position on screen. It will
        also provide methods for updating and destroying the enemy`,
        2: `The constructor takes 2 arguments. I gave them funny names so that you can easily see that they
        are parameters to the constructor. Usually we would just call them root, enemySpot and gameHeight.

- theRoot will refer to the parent DOM element. 
We need a way to add the DOM element we create in this constructor to our DOM.
- enemySpot is the position of the enemy (either 0, 1, 2, 3 or 4)


        Since the constructor takes 2 parameters
        and the 2 parameters provide important information, we must supply 2 arguments to \`new\` every time we
        create an instance of this class. For example
\`\`\`javascript
        new Enemy(root, 3)
\`\`\`

        or 

\`\`\`javascript
        new Enemy(someRoot, 0)
\`\`\`


        `,
        3: `When we create an Enemy instance, for example: 
        
\`\`\`javascript
        new Enemy(someRoot, 3)
\`\`\`

        A new object is created and the constructor of the Enemy class is called. The context (the \`this\` keyword) is going
        to be the new object. In these lines of code we see how to add 2 properties to this object: spot, root and gameHeight.

        We do this because we want to access this data in the other methods of the class.

- We need the root DOM element so that we can remove the enemy when it is no longer needed. This will be done at a later time.
- We need to keep track of the enemy spot so that we don't place two enemies in the same spot.

        

        `,
        4: `The x position of the enemy is determined by its width and its spot. We need this information for the lifetime
        of the instance, so we make it a property of the instance. (Why is this information needed for the lifetime of the instance?)`,
        5: `The y position is initially less than 0 so that the enemies fall from the top. This data is stored as a property
        of the instance since it is needed throughout its lifetime. The destroyed property will indicate whether this enemy is still in play. It is set to true whenever the enemy goes past the bottom of the screen. It is used in the Engine to determine whether or not an enemy is in a particular column.`,
        6: `We create a new DOM element. The tag of this DOM element is img. It is the DOM node that will display the enemy image
        to the user. When the enemy is no longer needed, we will use a reference to this DOM node to remove it from the game. This
        is why we create a property that refers to it.
        
        We give it a src attribute to specify which image to display

        We modify the CSS style of the DOM node
- position: "absolute" means that the DOM node is positioned according to the top left of the browser window according to its \`left\` and \`top\` 
css properties (see below)
- left: the distance from the left margin of the browser. Since we write px it is measured in pixels
- top: the distance from the top margin of the browser. Since we write px it is measured in pixels
- zIndex: this property is needed to make sure that the enemy is not hidden behind another DOM node
        `,
        7: `Show that the user can actually see the img DOM node, we append it to the root DOM node.`,
        8: `We set the speed property of the enemy. This determines how fast it moves down the screen. 
        To make sure that every enemy has a different speed, we use \`Math.random\` `,
        9: `this method will be called on the enemy instance every few milliseconds. The parameter
        \`timeDiff\` refers to the number of milliseconds since the last update was called. `,
        10: `We update the \`y\` property of the instance in proportion of the amount of time
        since the last call to update. We also update the \`top\` css property so that the image
        is updated on screen`,
        11: `If the y position of the DOM element is greater than the GAME_HEIGHT then the enemy is at the bottom
        of the screen and should be removed. We remove the DOM element from the root DOM element and we set
        the \`destroyed\` property to indicate that the enemy should no longer be in play `,
      


    }
})
*/