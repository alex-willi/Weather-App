import logo from './logo.svg';
import './App.css';
import Data from './components/data';
import { useEffect, useState } from "react";
import Base from './components/base';
import CityData from './Citydata';

function App() {
  
  return (
    <div className="App">
      
    





            <div className="wrapper">
        <div className="base" style={{border: '1px solid black'}}>


    <Data />

    </div>
     </div>
      <CityData /> 
      
         <button className="button">3 Days</button>
        <button className="button">1 Week</button>
        <button className="button">2 Weeks</button> 
        
     

    </div>
  );
}

export default App;
