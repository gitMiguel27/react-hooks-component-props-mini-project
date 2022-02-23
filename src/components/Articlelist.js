import React from "react";
import Article from "./Article";

function Articlelist(props) {
    return (
        <main>
            {props.posts.map(post => {
                return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
            })}
        </main>
    )
}

export default Articlelist