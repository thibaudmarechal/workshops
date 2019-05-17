let nextEnemySpot = enemies => { // 1
        let enemySpots = GAME_WIDTH / ENEMY_WIDTH // 2
        let spotsTaken = [false, false, false, false, false] // 3
        enemies.forEach(enemy => { // 3
                spotsTaken[enemy.spot] = true // 3
        }) // 3
        let candidate = undefined // 4
        while (candidate === undefined || spotsTaken[candidate]) {
                /* 5 */
                candidate = Math.floor(Math.random() * enemySpots) /* 5 */
        } /* 5 */
        return candidate /* 6 */
} // 1
let addBackground = root => {
        /* 7 */
        let bg = document.createElement("img") // 8
        bg.src = "images/stars.png" // 9
        bg.style.height = GAME_HEIGHT + "px" // 9
        bg.style.width = GAME_WIDTH + "px" // 9
        root.append(bg) // 10

        let whiteBox = document.createElement("div") /* 11 */
        whiteBox.style.zIndex = 100 /* 12 */
        whiteBox.style.position = "absolute" /* 12 */
        whiteBox.style.top = GAME_HEIGHT + "px" /* 12 */
        whiteBox.style.height = ENEMY_HEIGHT + "px" /* 12 */
        whiteBox.style.width = GAME_WIDTH + "px" /* 12 */
        whiteBox.style.background = "#fff" /* 12 */
        root.append(whiteBox) /* 13 */
} // 7

/* meta
({
    text: {
        1: `In this file we have functions that will be used in the Engine.js file. I put these functions
        in a separate file for pedagogical purposes.

        nextEnemySpot is a variable that refers to a function. The function has one parameter,
        which we called enemies. enemies will refer to an array. The array will contain instances of the
        Enemy class. To get more information about the argument that will get passed to this function,
        please see the Engine.js file.

        The purpose of this function is to determine in which slot to place our next enemy. The possibilities
        are 0, 1, 2, 3 or 4
        `,
        2: `enemySpots will refer to the number of spots available (can you calculate it?)  `,
        3: `To find out where to place an enemy, we first need to find out which are the spots available.
        We don't want to place two enemies in the same lane. To accomplish this, we first create an
        array with 5 elements (why 5?) and each element is false.

        We then use forEach to iterate through all the enemies. The argument to forEach is a function and
        the parameter of that function is \`enemy\`. This function will be called once for each enemy in the game
        and each time the function is called, \`enemy\` will refer to a different instance of the \`Enemy\` class.

        If you look at the constructor of the \`Enemy\` class, you can see that every instance will have a \`spot\` property.
        We can use this property to modify the \`spotsTaken\` array.

        For example, if

\`\`\`javascript
        enemies = [{spot: 1}, {spot: 3}]
\`\`\`

        then \`spotsTaken\` will be

\`\`\`javascript
            [false, true, false, true, false]
\`\`\`

        Which indicates to use that only indices 0, 2 and 4 are available (what is different about these indices?)`,

        4: `We are now in a position to find out position. We declare a variable candidate that is initially undefined.
        candidate represents a potential spot.
        The variable will be repeatedly assigned different numbers.
        We will randomly try different spots until we find out that is available  `,
        5: `candidate is assigned a random number between 0 and enemySpots (not including enemySpots). (what number is enemySpots?) `,
        6: `When the while loop is finished, we are assured that we have a number that corresponds to a free spot, so we return it.`,
        7: `addBackground contains all the logic to display the starry background of the game.
        It is a variable that refers to a function.
        The function takes one parameter
        The parameter represents the DOM node to which we will add the background
           `,
        8: `We create a new img DOM node.  `,
        9: `we set its src attribute and the height and width CSS attributes`,
        10: `We add it to the root DOM node `,
        11: `We don't want the enemies to go beyond the lower edge of the image so we place a white div to hide the enemies after
        they reach the bottom. To see what it does, you can comment out all the remaining lines in the function to see the effect. `,
        12: `We modify the CSS attributes of the DOM element
- zIndex: We put a high z-index so that the div is placed over all other DOM nodes
- position: "absolute" is needed otherwise we can't set the z index
- top: the distance of the top of the div to the top of the viewport
- height: the height of the div
- width: the width of the div
- background: the background color of the div (white)
        `,
        13: `Finally we append the white div to the root element   `



    }
})
*/