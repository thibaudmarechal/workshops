_ = {
    desc: `You need to be familiar with the following pieces of information
    to be able to make sense of this tutorial`,
    elements: [{
            term: `express.static`,
            desc: `This is used to serve files from the HTTP server. 
    It is taught in a previous workshop`
        },
        {
            term: `setTimeout`,
            desc: `setTimeout is a global variable that refers to a function. This function
        takes two argument. The first argument is a function. The second argument
        is a number that represents the number of milliseconds until that function is called
        by the event loop.`,
            examples: [`setTimeout(() => console.log("hi"), 1000)`]
        },
        {
            term: `document.querySelector`,
            desc: `document is a global variable that refers to an object with a querySelector
        property. This property refers to a function. This function takes a string as an argument.
        The string represents a css selector. The function returns the first DOM node that matches
        the selection criteria determined by the string. Example: querySelector`,
            examples: [`let node = document.querySelector("#someid")`]
        }, {
            term: `domNode.addEventListener`,
            desc: `After you've selected a node using querySelector, you can
        put an event handler on that node. addEventListener takes two arguments: a string that
        represents the type of event that triggers a function call to the second argument`,
            examples: [`
let node = document.querySelector('#some-button-id')
node.addEventListener('click', () => { console.log('button was clicked')})`]

        }, {
            term: 'event bubbling',
            desc: `when an event is triggered on a DOM node, the event
        potentially triggers an event listener and then it propagates to the parent, 
        where it might trigger another event listener and then it propagates to the
        grandparent. It keeps propagating until it propagates to the html element
        and then document element, which is the ancestor of all the elements in your DOM.`
        }
    ]
}