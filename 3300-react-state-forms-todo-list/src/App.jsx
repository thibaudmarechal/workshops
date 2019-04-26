import React, { Component } from 'react' // 1
class App extends Component { // 1
    constructor() { // 2
        super() // 2
        console.log("Instantiating") // 2
        this.state = { // 3
            listName: undefined, // 4
            allTodos: [], // 4
            userInput: "" // 4
        } // 3
    } // 2
    componentDidMount() { // 5
        console.log("After the first render") // 5
        let nameEntered = window.prompt("What is the name of the list?") // 6
        console.log("This is what the user entered", nameEntered) // 6
        this.setState({ listName: nameEntered }) // 7
    } // 5
    onChangeHandler = event => { // 10
        console.log("New string in input box ", event.target.value) // 11
        this.setState({ userInput: event.target.value }) // 12
    } // 10
    submitHandler = event => { // 13
        console.log("Form submitted") // 13
        event.preventDefault() // 14
        this.setState({ // 15
            userInput: "", // 15
            allTodos: this.state.allTodos.concat(this.state.userInput) // 15
        }) // 15
    } // 13
    render() { // 8
        console.log("Rendering with state", this.state) // 8
        if (!this.state.listName) { // 9
            return (<div> loading ... </div>) // 9
        } // 9
        return (<div> {/*16*/}
            <h1>{this.state.listName}</h1> {/* 17 */}
            <ul> {/* 18 */}
                {this.state.allTodos.map(x => (<li>{x}</li>))} {/* 18 */}
            </ul> {/* 18 */}
            <form onSubmit={this.submitHandler}> {/* 19 */}
                <input type="text" /* 20 */
                    onChange={this.onChangeHandler} /* 20 */
                    value={this.state.userInput} /> {/* 20 */}
                <input type="submit"></input> {/* 19 */}
            </form> {/* 19 */}
        </div>) // 16
    } // 8
} // 1
export default App // 1

/* meta
    ({
        text: {
            1: `We start by importing the react libraries and by declaring our component.
We only have one component in our whole project, so the component name isn't
important.`,
            2: `We defined a constructor for our class. This constructor will get called for
every instance of the class. The class will be instantiated every time the component
appears in the virtual DOM. We add a console.log to make debugging easier`,
            3: `We add a property to the instance called state. This is a special property name
because, as we will see later, there is a method in the Component superclass that modified this property`,
            4: `Initially the state property of the instance refers to an object with three properties:
- listName: The name chosen by the user for his todo list. Initially it is undefined
- allTodos: An array that contains all the todo items in the list.
- userInput: The user will enter their todo item in an input box. This property keepstrack of what the user is entering`,
            5: `The component has a componentDidMount method. This method has a special name. It is called
after the first render. We put a console.log for debugging purposes`  ,
            6: `We ask the user for the name of the list. The window.prompt function makes
a popup appear. It returns whatever the user entered in the popup. The console.log is for debugging purposes`,
            7: `Once we have the name of the list we can use setState to set the listName property
of the object referred to by the state property of the current instance. We never modify the state property
directly. Instead we use the setState method that we inherited from the Component class.
Only the userInput property is modified. The other properties of state remain the same.
setState modifies the state at some time in the future. After setState is called,
the virtual DOM element is rerendered.`,
            8: `The render method has a console.log which will help us debug`,
            9: `Initially the listName property of the state is undefined, so we display
            a loading message until the user gives the list a name`,

            10: `We picked onChangeHandler as the name of the method to handle every time the user modifies the input box. We will see later
            where this method is referenced.`,
            11: `We console.log for debugging purposes. We picked event as the name of the parameter. This method is going to be called
with an object that contains information about the user interaction related to the modification of the input box`,
            12: `Here we call setState again to modify the userInput property of the state. All the other properties
remain the same. The new value of this property is \`event.target.value\` . \`onChangeHandler\` was called with an object with a target value
which represents the DOM node that was modified. This DOM node has a property called \`value\` which contains
a string that represents the contents of the input box. I imagine that the object that event refers to looks something like
this:
\`\`\`javascript
{..., target: {..., value: "Buy groceries"}}
\`\`\`
You have no control
over this object since it is constructed by the browser.`,
            13: `We chose submitHandler as the name of the method that handles form submission, which is
            when the user adds an element to the todo list. We chose event
            as the name of the parameter of the method. The console.log is for debugging purposes`,
            14: `When the browser calls submitHandler, it passes an object with a preventDefault property.
            This property refers to an object. Calling this function stops the browser
            from reloading the page. Reloading the page would wipe the state clean, which
            is undesirable.`,
            15: `We update two properties of the state: userInput and allTodos.
- userInput becomes the empty string
- allTodos will now refer to a new array which has one more element than its current value. The new element is the userInput`,
            16: `If the listName is not undefined, we return a div that will contain
            all the elements of the user interface`,
            17: `First we display the listName`,
            18: `Then we display every element of the todo list, which are located in the allTodos property
            of the state. We use map to create an array of \`li\` elements`,
            19: `We start defining a form that will contain an input box and a submit button. The onSubmit
            prop of the form will be called when we click on the submit input. It is a very
            common mistake to forget to give the form an onSubmit`,
            20: `The input box has onChange prop to which we give our onChangeHandler method. This method
            will get called every time we modify the input box. There is also a value prop. The reason we give it
            a value prop is that if ever we modify the userInput property of the state, we want this modification
            to be reflected in the input box. For example, we modify the \`userInput\` property of the state
            in \`submitHandler\` to clear the input box. `



        }
    })
    */