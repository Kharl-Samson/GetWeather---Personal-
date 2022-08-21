import React, { useEffect, useState } from 'react';
import "../Styles/styles.css";
import sunny_icon from "../Assets/sunny_icon.svg";
import search_icon from "../Assets/search_icon.svg";

import sample_icon from "../Assets/sample_icon.png";

//Chart Js
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function MainPage(){

//Chart settings
const weatherData_array = [
    {
     infoTitle: "Min Temp.",
    },
    {
     infoTitle: "Max Temp.",
    },
    {
     infoTitle: "Pressure",
    },
    {
     infoTitle: "Humidity",
    },
]
const myArray = ["83.12","84.2","1008","77"];

const [weatherData, setweatherData] = useState({
  labels: weatherData_array.map((res) => res.infoTitle),
  datasets: [
    {
      label: "Weather Description",
      data: myArray,
      backgroundColor: [
        "#199afb","#fec860","#1be5a1","#df7970"
      ],
    },
  ],
});

return(
<div className="main_container rainy_container">
    <div className="main_container_dark_effect">
        <div className="left">

            <div className='top'>
                <p>GetWeather</p>
                <div className='input_container'>
                    <div className='img_container'><img alt='' src={search_icon}/></div>
                    <input type="text"/>
                    <div className='img_container'><span>Go</span></div>
                </div>
            </div>

            <div className='bottom'>
                <div className='upper'>
                    <div className='left_upper'>
                        <p>32°C</p>
                    </div>
                    <div className='right_upper'>
                        <img alt='' src={sample_icon}/>
                        <p className='desc'>Today is rainy day</p>
                        <p className='tips'>Don’t forget an umbrella</p>
                    </div>
                </div>

                <div className='lower'>
                    <div className='time_date'>
                        <p>2:22 PM - Monday, August 20, 2022</p>
                    </div>

                    <div className='location'>
                        <p>Manila, Ph</p>
                        <div className='btn'><span>Change</span></div>
                    </div>
                </div>
            </div>

        </div>

        <div className="right">

            <div>
                <div className="box one">
                    <div className="left_box">
                        <p>Current Location</p>
                        <p className="rainy_color">Manila, <span>PH</span></p>
                    </div>
                    <div className="right_box">
                        <img alt="" src={sunny_icon}/>
                    </div>
                </div>
    
                <div className="box two">
                    <p className="title rainy_color">Weather Details</p>
                    <div className="content">
                        <div className="left_content">
                            <p>Temperature</p>
                            <p>Description</p>
                            <p>Wind Speed</p>
                            <p>Wind Degree</p>
                        </div>
                        <div className="right_content">
                            <p>32°C</p>
                            <p>Broken Clouds</p>
                            <p>8.05 MPH</p>
                            <p>280°</p>
                        </div>
                    </div>
                </div>
    
                <div className="box three">
                    <p className="title rainy_color">Graph Report</p>
    
                    <div className="graph_container">
                        <Line data={weatherData} height={170}/>
                    </div>
                    
                </div>
            </div>

            <div className="four rainy_color_bg">
                <p>Kharl Samson © 2022</p>
                <p>This site was developed by Kharl Samson. It cannot and should not be reproduced in any forms or by any means without the consent from him.</p>
            </div>

        </div>
    </div>
</div>
)
}