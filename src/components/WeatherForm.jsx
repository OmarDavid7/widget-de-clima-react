import { useState } from "react"
import './weatherform.css'

export default function WeatherForm({onChangeCity}){
    const [city,setCity] = useState('')

    const onchange = (e)=>{
      
        const value = e.target.value;
        if(value !== ""){
            setCity(value)
        }
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onChangeCity(city)
    }
    
    return(
        <>
        <form onSubmit={handleSubmit} className="container">
            <input type="text" onChange={onchange} className="input" />
        </form>
        </>
    )
}