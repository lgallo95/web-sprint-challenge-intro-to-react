import React, { useState, useEffect } from 'react'
import styled from "styled-components";


const MainStyle2 = styled.div`
  padding: 5%;
`




const Character = (props) => {
    const [open, setOpen] = useState(false);
        
    function myFunction() {
            var x = document.getElementById("infoP");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
    
    return (
        <div>
            <MainStyle2>
            <h3> {props.person.name} </h3>
            <button onclick="toggleInfo()"> More Info </button>
            <p id="infoP">{props.person.height}</p>
            <p id="infoP">{props.person.mass}</p>
            <p id="infoP">{props.person.hair_color}</p>
            <p id="infoP">{props.person.skin_color}</p>
            </MainStyle2>
        </div>
    )
}

export default Character;

