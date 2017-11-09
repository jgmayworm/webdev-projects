import React from 'react';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.title = props.title;
        this.content = props.content;
        this.sign = props.sign;
    }
    render() {
        return React.createElement("div",null,
                                [React.createElement("li",null,this.title),
                                 React.createElement("li",null,this.content),
                                 React.createElement("li",null,this.sign),
                                ]
                                )
    }
}
