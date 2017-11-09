import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.jsx"

var mainComponent = React.createElement(App) //React.createElement("h1",null,"texto")

ReactDOM.render( mainComponent,
    document.getElementById('reactApp'))
