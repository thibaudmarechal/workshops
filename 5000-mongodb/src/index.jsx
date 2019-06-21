import ReactDOM from 'react-dom' // 1
import './main.css' // 1
import App from './App.jsx' // 1
import React from 'react' // 1

import reloadMagic from './reload-magic-client.js' // 1
reloadMagic() // 1

ReactDOM.render(<App />, document.getElementById("root")) // 1

/* meta
  ({
    text:
    {
      1: `Boilerplate stuff. The reloadMagic is what makes the page reload when the backend changes`
    }
  })
  */