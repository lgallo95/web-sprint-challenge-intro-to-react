// Write your Character component here
import React from 'react';
import styled from "styled-components";

const Design2 = styled.div`
flex-direction: row;
padding: 5%;
font-size: 200%;
`
const Design3 = styled.div`
justify-content: flex-end;
`

const Character = props => {
    // const { info } = props; --> Could also see it this way
    // This just means one doesn't have to keep on typing 'props' everywhere
    // like a lunatic, and can instead just refer to info as...info.
    return (
        <div className='character'>
            <Design3>
            <Design2>
            {props.info.name}
            </Design2>
            <button onClick={() => props.openDetails(props.info.id)}>  More Info </button>
            </Design3>
        </div>
  )
}

export default Character;