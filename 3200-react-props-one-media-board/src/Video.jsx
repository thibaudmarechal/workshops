import React, { Component } from 'react' // 1
class Video extends Component { // 2
    render() { // 3
        return ( // 4
            <div> {/* 4 */}
                <iframe src={"https://player.vimeo.com/video/" + this.props.videoId} /* 4 */
                    width="640" height="360" frameborder="0" /* 4 */
                    webkitallowfullscreen mozallowfullscreen allowfullscreen>  {/* 4 */}
                </iframe> {/* 4 */}
            </div>) /* 4 */
    } // 3
} // 2
export default Video // 5

/* meta
    ({
        text: {
            1: `We will be defining a component to display a video from
        the Vimeo website, so we first import React and Component from the react library`,
            2: `To create a component, we extend the Component class`,
            3: `It is a very simple component with just a render method`,
            4: `The render method returns an iframe that contains the video. Notice that the src attribute
        of the iframe is dynamic and depends on the videoId prop. Every time you use this component,
        you will need to supply a videoId prop. If you forget to supply a videoId prop, then the value
        of \`this.props.videoId\` is going to be undefined and the src attribute of the iframe
        is going to be \`https://player.vimeo.com/video/undefined\` `,
            5: `We export the component so that it can be used in App.jsx`
        }
    })
*/