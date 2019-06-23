import React, { Component } from 'react' 
class App extends Component { 
    constructor() { 
        super() 
        console.log("Instantiating") 
        this.state = { 
            listName: undefined, 
            allTodos: [], 
            userInput: "" 
        } 
    } 
    componentDidMount() { 
        console.log("After the first render") 
        let nameEntered = window.prompt("What is the name of the list?") 
        console.log("This is what the user entered", nameEntered) 
        this.setState({ listName: nameEntered }) 
    } 
    onChangeHandler = event => { 
        console.log("New string in input box ", event.target.value) 
        this.setState({ userInput: event.target.value }) 
    } 
    submitHandler = event => { 
        console.log("Form submitted") 
        event.preventDefault() 
        this.setState({ 
            userInput: "", 
            allTodos: this.state.allTodos.concat(this.state.userInput) 
        }) 
    } 
    render() { 
        console.log("Rendering with state", this.state) 
        if (!this.state.listName) { 
            return (<div> loading ... </div>) 
        } 
        return (<div> 
            <h1>{this.state.listName}</h1> 
            <ul> 
                {this.state.allTodos.map(x => (<li>{x}</li>))} 
            </ul> 
            <form onSubmit={this.submitHandler}> 
                <input type="text" 
                    onChange={this.onChangeHandler} 
                    value={this.state.userInput} /> 
                <input type="submit"></input> 
            </form> 
        </div>) 
    } 
} 
export default App 