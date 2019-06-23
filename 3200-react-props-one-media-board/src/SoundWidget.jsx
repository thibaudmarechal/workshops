import React, { Component } from 'react' 
class SoundWidget extends Component { 
    render() { 
        return (<audio controls> 
            <source src={this.props.url} />  
        </audio>) 
    } 
} 
export default SoundWidget 