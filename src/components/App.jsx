import React from 'react';
import Posts from './Posts.jsx';

export default class App extends React.Component {
    render() {
        return React.createElement("div",null,
                    React.createElement(Posts,null,null)
                                  )
    }
}
