import {useState} from "react";
import Forecast3 from "./Three";
import Forecast7 from "./Seven"
import Today from "./Today";
import DateTime from "./DateTime";

    export default function Data(){
    const [threeDay, setThreeDay] = useState(false);

    const handleClick = () =>{
      setThreeDay(current => !current);
        
    };
    const [sevenDay, setSevenDay] = useState(false);

    const handleDay = () =>{
      setSevenDay(current => !current);
        
    };
    const [currentDay, setCurrentDay] = useState(true);

    const handleToday = () =>{
        setCurrentDay(current => !current);
    };


    return (
        <div>
        <div className='dataWrap' style={{border: '1px solid black'}}>
        <div className='time' style={{border: '1px solid black'}}>
   <DateTime />
</div>
    {threeDay && <Forecast3 />}

        {currentDay && <Today />}

        {sevenDay && <Forecast7 />}
        
        </div>
        <div className='btnWrap' style={{border: '1px solid black'}}>
        <button className='three' onClick={() =>{
    handleClick();
    setSevenDay(false);
    setCurrentDay(false)}} disabled={threeDay ? true : false}>3 Day</button>

    <button className='seven' onClick={() =>{
    handleDay();
    setThreeDay(false);
    setCurrentDay(false)}} disabled={sevenDay ? true : false}>1 Week</button>
    <button className='todayBtn' onClick={() =>{
    handleToday();
    setSevenDay(false);
    setThreeDay(false);
    }} disabled={currentDay ? true : false}>Today</button>
    </div>
    </div>
    )
 }
