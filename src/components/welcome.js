import React, { Component } from 'react'
import bloodlogo from '../images/logosmall.png';
import Signup from './signup';
class welcome extends Component {
    constructor(){
        super()
        
         this.state={first: true};
    }
    handleNext(){
       this.setState({first: false});
    }
    

    
    render() {
        return (
            <div className="welcome">
            <img className="welcomeblood" src={bloodlogo}/>
            <h2><span>Blood</span> Donation</h2>
             <button onClick={this.handleNext.bind(this)}className="startjourney">Start Journey</button>
             {this.state.first == true && <Signup/>}
        </div>
        )
    }
}

export default welcome