import Data from "./data"
import { useState, useEffect } from "react"

export default function Base(){
 const [data, setData] = useState(null);
// console.log(time.dataseries[0].weather, 'testing')
async function handleData(){
   

    try {
        const foundData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.10&longitude=-94.58&hourly=temperature_2m,precipitation,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto');
        const weatherData = await foundData.json()
        console.log(weatherData)
        setData(weatherData.dataseries)
    } catch(err){
        console.log(err)
    }
}
useEffect(() => {
    handleData();
}, []);



// array.map((array,index) => {
//     return (
//         <div>
//             <h1>{array.temp2m}</h1>
//         </div>
//     )
// })

    return (
        <div>
            
        </div>
        
    )
}