import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Characters from './components/Characters'
import styled from "styled-components";
import { BASE_URL } from './components/urls';


const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #658b6c;
  margin: 0 20%;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res =>{
        setPerson(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  
  
  
  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <MainStyle> 
      <Characters person={person} />
      </MainStyle> 
    </div>
  );
}

export default App;
