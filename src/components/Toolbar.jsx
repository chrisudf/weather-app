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
            <div className="search-input">
                <input type="text"/>
            </div>
            <div className="search-btn">
                <button>enter</button>
            </div>
            <div className="temp-switch">
                {/* <button onClick= {this.handleOnclick}>{this.state.temp}</button>              */}
                <button onClick= {this.handleOnclick}>{this.props.tempSwitch}</button>             
            </div>
        </nav>)
    }
}
export default Toolbar;