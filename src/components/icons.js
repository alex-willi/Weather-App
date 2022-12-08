import { useEffect, useState } from "react";


export default function Icon(){

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
   

const icons = new Array();
//Clear
icons[0] = 'http://www.7timer.info/img/misc/about_two_clear.png';
//Partly Cloudy
icons[1] = 'http://www.7timer.info/img/misc/about_two_pcloudy.png';
//Cloudy
icons[2] = 'http://www.7timer.info/img/misc/about_two_cloudy.png';
//Rain
icons[3] = 'http://www.7timer.info/img/misc/about_two_rain.png';
//Snow
icons[4] = 'http://www.7timer.info/img/misc/about_two_snow.png';
//Thunderstorm
icons[5] = 'http://www.7timer.info/img/misc/about_two_ts.png';
// Thunderstorm with rain
icons[6] = 'http://www.7timer.info/img/misc/about_two_tsrain.png';



 if (data[5] = 'clearday'){
    document.getElementById('icon').innerHTML = '<img src="'+icons[0]+'"/>';
 }



}