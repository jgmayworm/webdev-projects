import React from 'react';
import Post from './Post.jsx';
export default class Posts extends React.Component {
    render() {
        var dataPosts = [{title:"ML",content:"cores é demais",sign:"bernardinho"},
                        {title:"IG",content:"mayworm nao compila",sign:"mayworm"},
                        {title:"ST",content:"quero café",sign:"rafael com ph"}];
        return React.createElement("ul",null,
    dataPosts.map( dataPost => React.createElement(Post,dataPost,null) )
                                  )
    }
}
