import React from 'react';
import '../styles/main.css';
import {mockForecastData} from "../components/WeatherChannel";

class Forecast extends React.Component{
    constructor(props){
        super(props)
        // this.state({isC:true})
    }

   handleSwitch(){
   }
    render(){
        return(
             <section class="weather-forecast">
            <div className="forecast__switch">
                <div className="forecast__switch button">
                    <div className="forecast__switch button.switch-active">
                        <div className="button.forecast__switch_0">
                            <button>5 items</button>
                        </div>
                        <div className="button.forecast__switch_1">
                            <button>10 items</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-forecast__row">
                    <div className="weather-forecast__day">{
                        mockForecastData.map((element)=>{
                            return <div className="weather-forecast__day">{element.weekday}</div> 
                        })
                    }
                    </div>
                    
                    <div className="weather-forecast__icon">{
                        mockForecastData.map((element)=>{
                            return <div className="weather-forecast__icon">{element.time}</div> 
                        })
                    }
                    </div>
                    <div className="weather-forecast__high">
                        {
                            mockForecastData.map((element)=>{
                                return <div className="weather-forecast__high">{element.high.C} C</div> 
                            })
                        }
                    </div>
                    <div className="weather-forecast__low">
                        {
                            mockForecastData.map((element)=>{
                                return <div className="weather-forecast__low">{element.low.C} C</div> 
                            })
                        }
                    </div>
            </div>
        </section>
        )
    }
}       

export default Forecast;