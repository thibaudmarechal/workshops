import './main.css' 
import React, { Component } from 'react'  
import { videos } from './Data.jsx' 
import Video from './Video.jsx' 
class App extends Component { 
    render() { 
        return (<div>  
            {videos.map( 
                vd => { 
                    return (<Video 
                        header={vd.name} 
                        videoId={vd.id} 
                        footer={vd.caption} />) 
                })} 
        </div>) 
    } 
} 
export default App 