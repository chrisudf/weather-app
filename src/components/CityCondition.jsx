import React from 'react';
// import '../index.css'
import '../styles/main.css';
import umbrella from '../images/icon-umberella.png'; 
import wind from '../images/icon-wind.png'; 
import compass from '../images/icon-compass.png'; 
import {mockConditionData} from "../components/WeatherChannel";


class CityCondition extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
             <section class="weather-condition">
                <div className="weather-condition__location ">
                    <p>{mockConditionData[1].city}</p>
                </div>
                <div className="weather-condition__temp">
                    <p>{this.props.temp}</p>
                </div>
                <div className="weather-condition__desc">
                    <p>{mockConditionData[1].weather}</p>              
                </div>
                <div className="weather-condition__desc">
                    <div>
                        <img src={umbrella} alt="umbrella"/>
                        <div className="citem">
                            <p>{mockConditionData[1].humidity}%</p>
                        </div>
                    </div>
                    <div>
                        <img src={wind} alt="wind"/>
                        <div className="citem">
                            <p>{mockConditionData[1].windSpeed}km/h</p>
                        </div>
                    </div>
                    <div>
                    <img src={compass} alt="compass"/>
                        <div className="citem">
                            <p>{mockConditionData[1].windDirection}</p>
                        </div>
                    </div>
                </div>    
        </section>
        )
    }
}

export default CityCondition;
