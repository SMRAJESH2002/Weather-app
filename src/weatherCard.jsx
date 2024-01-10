import React, { useEffect, useState } from "react";
import "./card.css";
import { FaSearch } from "react-icons/fa";
import { TiWeatherDownpour } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { GiWindsock } from "react-icons/gi";

export default function WeatherCard(){
    let apikey = "e6898124f3c574b57148b39516e7ab31";
    const [wea,setWea]=useState();
    const [loc,setLoc]= useState("chennai");
    useEffect(()=>{
        const apiCall=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`);
        const data=apiCall.then((res)=>res.json());
        
        data.then((item)=>{
            console.log(item);
            setWea(item)});

    },[loc])
    const handleSubmit=(data)=>{
    data.preventDefault();
    console.log(data.target[0].value);
    setLoc(data.target[0].value);
    

    }
    return(
        <div className="box">
            <h1> Weather Card</h1>
            <form className="box1" onSubmit={(e)=>handleSubmit(e)}>
        
        <input id="ic" type="text" placeholder="Enter the city"/>
        <label for="ic" ><button className="icon1" type="submit"><FaSearch /></button> </label>
        <h2> {loc}</h2>
        <p className="icon2"><TiWeatherDownpour/></p>
<p>{wea?.weather[0].main}</p>
<h2 className="h1">Humidity</h2>
<p className="icon3"> <WiHumidity />{wea?.main.humidity}</p>
<h2 className="h2"> WindSpeed</h2>
<p className="icon4"> <GiWindsock />{wea?.wind.speed}</p>
        </form>

        </div>
    );
}