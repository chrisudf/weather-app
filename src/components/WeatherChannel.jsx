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
    render(){
        return(
            <main>
                <Toolbar />
                <CityCondition />
                <Forecast />
            </main>
        );
    }
}

export {mockConditionData};
export {mockForecastData};
