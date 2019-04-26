import './main.css' // 1
import React, { Component } from 'react'  // 1
import { videos } from './Data.jsx' // 2
import Video from './Video.jsx' // 2

class App extends Component { // 3
    render() { // 4
        return (<div>  {/* 5 */}
            {videos.map( // 6
                vd => { // 6
                    return (<Video /* 6 */
                        header={vd.name} /* 6 */
                        videoId={vd.id} /* 6 */
                        footer={vd.caption} />) /* 6 */
                })} {/* 6 */}
        </div>) // 5
    } // 4
} // 3
export default App // 7

/* meta
    ({
        text: {
            1: `We are going to implement a component so we import the libraries as well as
         the css for that component`,
            2: `Our component is going to display videos, so we import the data needed for the
         videos as well as the component that will display the videos`,
            3: `We define our component. It is best practice to have the component name match the filename`,
            4: `It only has a render method`,
            5: `It returns a div`,
            6: `Inside the div we have several Video virtual DOM elements, one for each array element in videos.
            The function we pass to map will get called once for each array element. Each time it is called,
            The variable vd will refer to that element. Looking at Data.jsx, we see that the videos array
            contains objects and each of these objects has three properties: name, id and caption. In this function
            we make use of these three properties. Do you see where? Each Video virtual DOM element has a prop that is passed to it.
            The name of that prop is videoId. The value of that prop is \`vd.id\`. If you look in the Video.jsx file, you will
            see where the videoId prop is used`,
            7: `We export the component so that we can use it in index.jsx`

        }
    })
    */