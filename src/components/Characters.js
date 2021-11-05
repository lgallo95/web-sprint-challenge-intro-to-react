import React from 'react';
import Character from './Character'

const Characters = (props) => {
    return (
        <>
        {props.person.map(person => (
            <Character person={person} key={person} />
        ))}
        </>
    )
}

export default Characters;