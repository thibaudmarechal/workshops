import React, { Component } from 'react' 
class Video extends Component { 
    render() { 
        return ( 
            <div> 
                <iframe src={"https://player.vimeo.com/video/" + this.props.videoId} 
                    width="640" height="360" frameBorder="0" /> 
            </div>) 
    } 
} 
export default Video 