import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
    const { personId, close } = props;
    const [details, setDetails] = useState([]);

    useEffect(() => {
      const sillyListener = () => {
        console.log(`Random number fun!: ${Math.random()}`);
      }
      document.addEventListener('click', sillyListener);
  
      return () => {
        document.removeEventListener('click', sillyListener);
      }
    }, [])
  
  
    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then(res => {
        console.log(res.data)
          setDetails(res.data)
        })
        .catch(err => {
          console.error(err)
        })
    }, [personId])
  
    return (
      <div className='container'>
        <h2>Who Am I?</h2>
        {
          details &&
          <>
            <p>{details.name} is {details.age}</p>
            <ul>
              {details.map(info => <li key={info}>{info}</li>)}
            </ul>
          </>
        }
        <button onClick={close}>Close</button>
      </div>
    )
  }