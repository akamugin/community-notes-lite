import React from 'react';

type NoteProps = {
    postId: number;
}

const Note = (props: NoteProps) => {
    
    return (
        <div>
           {`Note for Post #${props.postId}: This is a helpful explanation.`}
        </div>
    )
}