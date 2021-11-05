import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Character from './components/Character'
// import Details from './components/Details';
import styled from "styled-components";


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
  const [currentPersonId, setCurrentPersonId] = useState(null);

  const openDetails = id => {
    setCurrentPersonId(id)
  }

  const closeDetails = () => {
    setCurrentPersonId(null)
  }

  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res =>{
        console.log(res.data)
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
      {person.map(info => ( 
        <Character info={info} key={info.id} openDetails={openDetails} />)
      )}
      </MainStyle>
      {/* {
        setCurrentPersonId && <Details personId={currentPersonId} close={closeDetails} />
      } */}
    </div>
  );
}

export default App;
