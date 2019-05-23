import React , {Component} from 'react';

import Toolbar from './Toolbar';
import CityCondition from './CityCondition';
import Forecast from './Forecast';

const mockConditionData = [{
    city: 'Sydney, Australia',
    weather: 'sunny',
    temp: {C:29, F:70},
    humidity: 29,
    windSpeed: 5,
    windDirection:'NE',
 },{
    city: 'Brisbane, Australia',
    weather: 'sunny',
    temp: {C:29, F:70},
    humidity: 29,
    windSpeed: 5,
    windDirection:'NE',
 }];
 
 const mockForecastData = [
    {weekday:'Tue', time:'10:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'WED', time:'11:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'12:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'13:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'14:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'15:00', high:{C:29, F:70}, low:{C:28, F:68}},
    {weekday:'Tue', time:'16:00', high:{C:29, F:70}, low:{C:28, F:68}},
 ];
 
export default class WeatherChannel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tempSwitch: 'C',
            temp:mockConditionData[1].temp.C+' C',   
            mockForecastData:mockForecastData                    
        }
    }

    swapCF = ()=>{
        if(this.state.tempSwitch==='C') {
            this.setState({tempSwitch: 'F'});
        } else {
            this.setState({tempSwitch: 'C'});
        }
    }

    handleTempState=()=>{
        //use 
        if (this.state.tempSwitch==='C'){
            this.setState({temp:mockConditionData[1].temp.F + ' F'})
            console.log(this.state.temp)
        }
        else{
            this.setState(
                {temp:mockConditionData[1].temp.C + ' C'}
            )
        }       
    }
   

    // forecastSwap=()=>{
    //     console.log('ffswap')
    //     // if (this.state.tempSwitch==='C'){
    //     //     this.setState(mockForecastData.map((element)=>{
    //     //             return {
    //     //                 weekday:element.weekday,
    //     //                 time: element.time,
    //     //                 high: element.high.F + ' f',
    //     //                 low: element.low.F + ' f'
    //     //             }
    //     //         }))
    //     // }
    //     if (this.state.tempSwitch==='C'){
    //         mockForecastData.map((element)=>{
    //             this.setState({
    //                 weekday:element.weekday,
    //                 time: element.time,
    //                 high: element.high.F + ' F',
    //                 low: element.low.F + ' F'}
    //                 )
    //             })
    //     }
    //     if (this.state.tempSwitch==='F'){
    //         return mockForecastData.map((element)=>{
    //             return this.setState({
    //                 weekday:element.weekday,
    //                 time: element.time,
    //                 high: element.high.C + ' C',
    //                 low: element.low.C + ' C'}
    //                 )
    //             })
    //     }
    // }
  
    render(){
        return(
            <main>
                <Toolbar tempSwitch={this.state.tempSwitch} swapCF={this.swapCF} handleTempState={this.handleTempState}
                forecastSwap={this.forecastSwap}/>
                <CityCondition tempSwitch={this.state.tempSwitch} temp={this.state.temp}/>
                <Forecast tempSwitch={this.state.tempSwitch} mockForecastData={this.state.mockForecastData}/>
            </main>
        );
    }
}

export {mockConditionData};
// export {mockForecastData};
