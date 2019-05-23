import React from 'react';
import '../styles/main.css';
// import {mockForecastData} from "../components/WeatherChannel";

class Forecast extends React.Component{
    constructor(props){
        super(props)
        // var a 
        this.state={
            mockData: this.props.mockForecastData
        }
    }
    // a = this.props.tempSwitch
    switch5=(e)=>{
        this.setState(()=>{
            return {mockData: this.props.mockForecastData.slice(0,5)}
        })
        console.log(this.state.mockData)
    }
    switch10=(e)=>{
        this.setState((preState)=>{
            return{mockData:this.props.mockForecastData}
        })
        console.log(this.state.mockData)
    }
    render(){
        return(
            <section class="weather-forecast">
            <div className="forecast__switch">
                <div className="forecast__switch button">
                    <div className="forecast__switch button.switch-active">
                        <div className="button.forecast__switch_0">
                            <button onClick={this.switch5}>5 items</button>
                        </div>
                        <div className="button.forecast__switch_1">
                            <button onClick={this.switch10}>10 items</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-forecast__row">
                    <div className="weather-forecast__day">{
                        this.state.mockData.map((element)=>{
                        {/* mockForecastData.map((element)=>{ */}
                            return <div className="weather-forecast__day">{element.weekday}</div> 
                        })
                    }
                    </div>
                    
                    <div className="weather-forecast__icon">{
                        this.state.mockData.map((element)=>{
                        {/* mockForecastData.map((element)=>{ */}
                            return <div className="weather-forecast__icon">{element.time}</div> 
                        })
                    }
                    </div>
                    <div className="weather-forecast__high">
                        {
                            this.state.mockData.map((element)=>{
                            {/* mockForecastData.map((element)=>{ */}
                                return <div className="weather-forecast__high">{element.high.C} {this.props.tempSwitch}</div> 
                            })
                        }
                    </div>
                    <div className="weather-forecast__low">
                        {
                            this.state.mockData.map((element)=>{
                            {/* mockForecastData.map((element)=>{ */}
                                return <div className="weather-forecast__low">{element.low.C} {this.props.tempSwitch}</div> 
                            })
                        }
                    </div>
            </div>
        </section>
        )
    }
}       
export default Forecast;