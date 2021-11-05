import React, { useState, useEffect } from 'react'
import styled from "styled-components";


const MainStyle2 = styled.div`
  padding: 5%;
`




const Character = (props) => {
    const [open, setOpen] = useState(false);

    const toggleInfo = () => {
        <p> {props.person.name} </p>
        setOpen(open);
        
        };
    
    return (
        <div>
            <MainStyle2>
            <h3> {props.person.name} </h3>
            <button onclick="toggleInfo()"> More Info </button>
            </MainStyle2>
        </div>
    )
}

export default Character;

