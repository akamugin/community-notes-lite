import React from 'react';
import { useState } from 'react';

export const VoteButtons = () => {
    const [votes, setVotes] = useState(0);
    const buttonIncrease = () => {
        setVotes(votes + 1)
    }
    const buttonDecrease = () => {
        if (votes > 0) {setVotes(votes - 1)}
    }

    return (
        <div>
            <button onClick={buttonIncrease}>⬆️</button>
            <span>{votes}</span>
            <button onClick={buttonDecrease}>⬇️</button>
        </div>
    )
}

