import { useState, useEffect } from "react";
export default function Forecast3(){
   

 
    const [data, setData] = useState(null);
        async function handleData(){
            try {
                const foundData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.10&longitude=-94.58&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto');
                const weatherData = await foundData.json()
                setData(weatherData)
                console.log(data)
            
            } catch(err){
                console.log(err)
            }
        }

       useEffect(() => {
            handleData();
        }, []);
    
        if (data == null){
            return (
                <h1>Loading...</h1>
            )
        }
    
        return (
            <div className="threeData">
    
            <div className="dayOne" style={{border: '1px solid black',borderColor: 'rgba(0, 0, 0, .2)'}}>
                <p> Date Today {data.daily.time[0].slice(5)} Low: {data.daily.temperature_2m_min[0]}F - High: {data.daily.temperature_2m_max[0]}F  - Inches of rain: {data.daily.precipitation_sum[0]}"</p>
            </div>
    
            <div className="dayTwo" style={{border: '1px solid black',borderColor: 'rgba(0, 0, 0, .2)'}}>
                <p> Date {data.daily.time[1].slice(5)} Low: {data.daily.temperature_2m_min[1]}F - High: {data.daily.temperature_2m_max[1]}F - Inches of rain: {data.daily.precipitation_sum[1]}"</p>
            </div>
    
            <div className="dayThree" style={{border: '1px solid black',borderColor: 'rgba(0, 0, 0, .2)'}}>
                <p> Date {data.daily.time[2].slice(5)} Low: {data.daily.temperature_2m_min[2]}F - High: {data.daily.temperature_2m_max[2]}F - Inches of rain: {data.daily.precipitation_sum[2]}"</p>
            </div>
            
                </div>
        )
        } 