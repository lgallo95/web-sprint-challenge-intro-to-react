// Write your Character component here
import React from 'react';

const Character = props => {
    // const { info } = props; --> Could also see it this way
    // This just means one doesn't have to keep on typing 'props' everywhere
    // like a lunatic, and can instead just refer to info as...info.
    return (
        <div className='character'>
            {props.info.name}
            <button onClick={() => props.openDetails(props.info.id)}>
                More Info
            </button>
        </div>
  )
}

export default Character;