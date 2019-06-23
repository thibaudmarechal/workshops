import ReactDOM from "react-dom" 
import React, { 
  Component 
} from "react" 
class DissapearingButton extends Component { 
  constructor() { 
    super() 
    this.state = { 
      clicked: false 
    } 
  } 
  render() { 
    if (this.state.clicked) return "nothing here" 
    return (<button onClick={() => 
      this.setState({ 
        clicked: true 
      })}>click me!</button>) 
  }
} 
ReactDOM.render(<DissapearingButton />, document.getElementById("root")) 