import { useState, useEffect } from "react"
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import './weatherapp.css'
import Loading from "./Loading";

export default function WeatherApp(){

    const [weather,setWeather] = useState(null);

    useEffect(()=>{
        loadInfo();
    },[])

    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ''}`
    },[weather])

   async function loadInfo(city = "london"){
        try {
            const resultado = await fetch(`http://api.weatherapi.com/v1/current.json?key=56367485d36d4d6197254457230407&q=${city}`)
                const data =  await resultado.json();
                console.log(data);

                setTimeout(() => {
                    setWeather(data)
                }, 2000);

        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeCity = (city)=>{
        setWeather(null);
        loadInfo(city)
    }

    return(
        <>
            <div className="weathercontainer">
                <WeatherForm onChangeCity={handleChangeCity}/>
                {weather ? <WeatherMainInfo weather={weather}/> : <Loading/>}
                
            </div>
        </>
    )
}