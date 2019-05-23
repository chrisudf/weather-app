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
                {/* <p>{mockConditionData[1].temp.C} C</p> */}
                <p>{this.props.temp}</p>
                {/* <p>{this.handleTempState}</p> */}
            </div>
            <div className="weather-condition__desc">
                <p>{mockConditionData[1].weather}</p>              
            </div>
           
            <div className="weather-condition__desc img">
                <img src={umbrella} alt="umbrella"/>
                <div className="weather-condition__desc .citem">
                    <p>{mockConditionData[1].humidity}%</p>
                    {/* <p>{this.temp}</p> */}
                </div>
                <img src={wind} alt="wind"/>
                <div className="weather-condition__desc .citem">
                    <p>{mockConditionData[1].windSpeed}km/h</p>
                </div>
                <img src={compass} alt="compass"/>
                <div className="weather-condition__desc .citem">
                    <p>{mockConditionData[1].windDirection}</p>
                </div>
            </div>
            
        </section>
        )
    }
}

// const Forecast = (props) => {
//     return (
//         <section class="weather-condition">
//             <div className="weather-condition__location ">
//                 <p>{mockConditionData[1].city}</p>
//             </div>
//             <div className="weather-condition__desc">
//                 <p>{mockConditionData[1].weather}</p>              
//             </div>
//             <div className="weather-condition__temp">
//                 <p>{mockConditionData[1].temp.C} C</p>
//                 }
//             </div>
//             <div className="weather-condition__desc img">
//                 <img src={umbrella} alt="umbrella"/>
//                 <div className="weather-condition__desc .citem">
//                     <p>{mockConditionData[1].humidity}%</p>
//                 </div>
//                 <img src={wind} alt="wind"/>
//                 <div className="weather-condition__desc .citem">
//                     <p>{mockConditionData[1].windSpeed}km/h</p>
//                 </div>
//                 <img src={compass} alt="compass"/>
//                 <div className="weather-condition__desc .citem">
//                     <p>{mockConditionData[1].windDirection}</p>
//                 </div>
//             </div>
            
//         </section>
//     );
// }

export default CityCondition;
