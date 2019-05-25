import React from 'react';
import '../index.css'
import '../styles/main.css';
// import CityCondition from './CityCondition';

class Toolbar extends React.Component{
    constructor(props){
        super(props)
        // this.state={temp:'C'}
    }
    
    // swapCF=()=>{
    //     if (this.state.temp==='C'){
    //         this.setState(
    //             {temp:'F'})
    //     }
    //     if (this.state.temp==='F'){
    //         this.setState(
    //             {temp:'C'})
    //     }
        
    // }

    handleOnclick=()=>{
        this.props.swapCF()
        this.props.handleTempState()
        // this.props.forecastSwap()
        console.log('ok')
    }
    render(){
        return( <nav>
            <form className="search-input" action=""></form>
            <button className="temp-switch" onClick= {this.handleOnclick}>{this.props.tempSwitch}</button>
        </nav>)
    }
}
export default Toolbar;