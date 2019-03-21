class Text { // 1
    constructor(root, xPos, yPos) { // 2
        let div = document.createElement("div") // 3
        div.style.position = "absolute" // 3
        div.style.left = xPos // 3
        div.style.top = yPos // 3
        div.style.color = "white" // 3
        div.style.font = "bold 30px Impact" // 3
        div.style.zIndex = 2000 // 3
        root.appendChild(div) // 3
        this.domElement = div // 3
    } // 2
    update(txt) { // 4
        this.domElement.innerText = txt // 4
    } // 4
} // 1
/* meta
({
    text: {
        1: `This class is not used in the project yet. You will use it in one of the
        homework questions  `,
        2: `The constructor has three parameters. Here is an example of how you would create an instance
        of this class
        
\`\`\`javascript
        new Text(theRoot, 200, 200)
\`\`\`
        `,
        3: `We create a DOM element, set its CSS attributes then append it to the parent DOM element. We also
        set the \`domElement\` property of the instance to the newly created DOM element so we can update it later `,
        4: `This method is used to update the text displayed in the DOM element`

    }
})
*/