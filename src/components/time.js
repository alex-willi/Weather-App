import React, {useState, useEffect} from "react";



  export const DateTime = () => {
        const [date,setDate] = useState(new Date());
        useEffect(() => {
            let timer = setInterval(()=>setDate(new Date()),1000)
            return function cleanup(){
                clearInterval(timer)
            }
        });
        const [data, setData] = useState(null);

    async function handleData(){
        try {
            const foundData = await fetch('http://www.7timer.info/bin/api.pl?lon=77.4977&lat=27.2044&product=civil&output=json');
            const weatherData = await foundData.json()
            setData(weatherData.dataseries)
            console.log(weatherData);
            time();
        } catch(err){
            console.log(err)
        }
    }
   useEffect(() => {
        handleData();
    }, []);

function time(){
let i = 0;
let hours = date.getHours();
// console.log(hours)
const currentHour = hours;
const timepoint = data[i].timepoint;
if(currentHour > timepoint + 6){
    i++
 };
}
    //   const currentTime = (date.getHours)+=3;
// console.log(date.getHours())
// timer increments get hours and compare it to the timpoint of the dataseries
// console.log(currentTime, 'time')
    return(
        <div>
            <p></p>
            <p className="time"> Time : {date.toLocaleTimeString()}</p>
            {/* <p>{hours}</p> */}
        </div>
    )
}
    export default DateTime