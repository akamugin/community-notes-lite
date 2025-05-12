import React from "react";
import { Post } from "../components/Post"

export const Home = () => {
    return (
    <div>
        <Post
            id={1}
            title="Example Post"
            content="This is the content of the example post"
        />
    </div>
    )
}
