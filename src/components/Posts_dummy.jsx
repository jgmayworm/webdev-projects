import React from 'react';

export default class Posts extends React.Component {
    render() {
        var posts = [{title:"ML"},{title:"IG"},{title:"ST"}];
        return React.createElement("ul",null,
                                  React.createElement("li",null,"post11")
                                  )
    }
}
