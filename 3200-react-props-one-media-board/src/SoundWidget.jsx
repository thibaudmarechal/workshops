import React, { Component } from 'react' // 1
class SoundWidget extends Component { // 1
    render() { // 1
        return (<audio controls> {/* 1 */}
            <source src={this.props.url} />  {/* 2 */}
        </audio>) // 1
    } // 1
} // 1
export default SoundWidget // 1

/* meta
    ({
        text: {
            1: `You'll be using this component to play sound. It uses the audio tag, which
            is the tag you use when you want to play sound.`,
            2: `It uses a single prop called url. Every time you use this component, you need
            to give it the prop called url. This prop determines the sound location. If you don't
            give this component a url prop when you use it in your jsx, the value of \`this.props.url\` is going to be
            undefined and you won't be able to play any sound.`
        }
    })
    */