import React, { Component } from 'react';
import bloodlogo from '../images/logosmall.png';
 class signupDetails extends Component {
     continue = e =>{
         e.preventDefault();
         this.props.nextStep();
     }
    render() {
        const {values, handleChange}=this.props;
        return (
            <div className="signupform1">
                  <div>
                <img className="welcomeblood" src={bloodlogo}/>
                <h2><span>Blood</span> Donation</h2>
                <p className="signup-paragraph">Provide your real name for your identity. Your name will be used for search.</p>
                </div>  
                <div >
                <h2 className="signup">Let Us Know</h2>
                <h2>About You</h2>

                <label>Username</label> <br/>
                <input type="text" defaultValue={values.username} onChange={handleChange('username')} placeholder="johndoe"></input><br/>

                <label>Email</label><br/>
                <input type="email" defaultValue={values.email}  onChange={handleChange('email')} placeholder="johndoe@gmail.com"></input><br/>

                <label>Password</label><br/>
                <input type="password"  defaultValue={values.password}  onChange={handleChange('password')}placeholder="* * * * "></input><br/>
                <button class="signup-next" onClick={this.continue}>Next</button>
                </div>
            </div>
        )
    }
}

export default signupDetails
