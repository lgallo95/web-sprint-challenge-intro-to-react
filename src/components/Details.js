import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Details = (props) =>{
  
  const { DetailInfo } = props;
  return(
    <p> Height: {DetailInfo.height} </p>
  );
};

export default Details;