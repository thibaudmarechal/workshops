import ReactDOM from 'react-dom' 
import './main.css' 
import App from './App.jsx' 
import React from 'react' 
import reloadMagic from './reload-magic-client.js' 
reloadMagic() 
ReactDOM.render(<App />, document.getElementById("root")) 