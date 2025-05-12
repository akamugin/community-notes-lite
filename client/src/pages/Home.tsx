import React from "react";
import { Post } from "../components/Post"
import { useEffect, useState } from 'react';
import { getPosts } from '../api';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(setPosts);
      }, []);
      
      return (
        <div>
          {posts.map(post => (
            <Post 
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      );
      
}
