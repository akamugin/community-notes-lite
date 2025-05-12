import React from 'react';
import { Note } from './Note';
import { VoteButtons } from './VoteButtons';

type PostProps = {
    id: number,
    title: string,
    content: string
}

export const Post = (props: PostProps) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <Note postId={props.id} />
            <VoteButtons />
        </div>
    )
}