import { useEffect, useState } from "react";




export default function Data(){
    
    
     const [data, setData] = useState(null);

    async function handleData(){
        try {
            const foundData = await fetch('http://www.7timer.info/bin/api.pl?lon=77.4977&lat=27.2044&product=civil&output=json');
            const weatherData = await foundData.json()
            setData(weatherData.dataseries)
            console.log(weatherData)
        } catch(err){
            console.log(err)
        }
    }
   
   useEffect(() => {
        handleData();
    }, []);

    if (data == null){
        return <h1>Loading...</h1>
    }
    
    
    return (
        <div className="data">
        {/* <h1>{data.init}</h1>    */}
       
        <p>{data[0].timepoint}</p>
        {data.slice(0,8).map((data,index)=>{
            return(
                <p key={index}>{data.temp2m}</p>
                
            )
        })}

        {/* <p>{data.slice(0,8).forEach.temp2m}</p> */}
        </div>
    )

}