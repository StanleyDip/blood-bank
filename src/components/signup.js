import React, { Component } from 'react'
import bloodlogo from '../images/logo.png';
import l50 from '../images/L50.png';
import g50 from '../images/G50.png';
import male from '../images/boy.png';
import female from '../images/girl.png';
import upload from '../images/upload.png';
import Profile from './profile';
 class signup extends Component {
    continue = e =>{
        e.preventDefault();
        this.nextStep();
    }
    constructor(){
        super()
        this.state={
            step:1,
            // username:"",
            // // email:"",
            // password:"",
            // phoneNumber:'',
            // altPhoneNumber:'',
            // social:'',
            // bloodtype:'',
            weight:'',
            gender:'',
            // address:'',
            // city:'',
            // postalCode:'',
            dateOfBirth:'',
            // picture:''

        }
    }
    //for next button state
    nextStep =() =>{
        const {step}=this.state;
        this.setState({
            step:step+1
        });

    }
    //for previous button state
    prevStep =() =>{
        const {step}=this.state;
        this.setState({
            step:step-1
        });

    }
    //handle field changes
     handleChange= input => e =>{
        this.setState({[input]:e.target.value});
    }
    // handleImage= ()=>{
    //     values.weight
    //     this.handleChange('weight')
    // }
    
 
    render() {
       
        const {step}=this.state;
        const {username,email,password,phoneNumber,altPhoneNumber,social,bloodtype,weight,gender,address,city,postalCode,age,picture}=this.state;
        const values={username,email,password,phoneNumber,altPhoneNumber,social,bloodtype,weight,gender,address,city,postalCode,age,picture};
        switch(step){
            
            case 1:
                return (
                    <div className="signupform1">
                          <div className="signupform1-child">
                        <img className="welcomeblood" src={bloodlogo}/>
                        <h2><span>Blood</span> Donation</h2>
                        <p className="signup-paragraph">Provide your real name for your identity. Your name will be used for search.</p>
                        </div>  
                        <div className="signupform1-child">
                        <h2 className="signup">Let Us Know</h2>
                        <h2>About You</h2>
        
                        <label>Username</label> <br/>
                        <input type="text" defaultValue={values.username} onChange={this.handleChange('username')} placeholder="johndoe"></input><br/>
        
                        <label>Email</label><br/>
                        <input type="email" defaultValue={values.email}  onChange={this.handleChange('email')} placeholder="johndoe@gmail.com"></input><br/>
        
                        <label>Password</label><br/>
                        <input type="password"  defaultValue={values.password}  onChange={this.handleChange('password')}placeholder="* * * * "></input><br/>
                        <button class="signup-next" onClick={this.continue}>Next</button>
                        </div>
                    </div>
                )
            
            case 2:
                return(
                    <div className="signupform1">
                    <div  className="signupform1-child">
                  <img className="welcomeblood" src={bloodlogo}/>
                  <h2><span>Blood</span> Donation</h2>
                  <p className="signup-paragraph">Provide your real name for your identity. Your name will be used for search.</p>
                  </div>  
                  <div >
                  <h2 className="signup">Contact</h2>
                  <h2>Information</h2>
  
                  <label>Phone No</label> <br/>
                  <input type="tel" defaultValue={values.phoneNumber} onChange={this.handleChange('phoneNumber')} placeholder="018"></input><br/>
  
                  <label>Alternative Phone No</label><br/>
                  <input type="tel" defaultValue={values.altPhoneNumber}  onChange={this.handleChange('altPhoneNumber')} placeholder="017"></input><br/>
  
                  <label>Social(Optional)</label><br/>
                  <input type="text"  defaultValue={values.social}  onChange={this.handleChange('social')}placeholder="https:/ "></input><br/>
                  <button class="signup-next" onClick={this.continue}>Next</button>
                  </div>
              </div>
                )
            case 3:
                return(
                    <div className="signupform1">
                    <div className="signupform1-child">
                        <img className="welcomeblood" src={bloodlogo}/>
                        <h2><span>Blood</span> Donation</h2>
                    <p className="signup-paragraph">Your blood group need to be accurate. If you don't know about it please contact nearest clinic</p>
                  </div>
                  <div className="signupform1-child">
                    <h2 className="signup">What is Your</h2>
                        <h2>Blood Group</h2>
                    <button className="selectbloodtype" value="A+" onClick={this.handleChange('bloodtype')}>A+</button>
                    <button className="selectbloodtype"value="A-" onClick={this.handleChange('bloodtype')}>A-</button>
                    <button className="selectbloodtype"value="B+" onClick={this.handleChange('bloodtype')}>B+</button><br/>
                    <button className="selectbloodtype"value="B-" onClick={this.handleChange('bloodtype')}>B-</button>
                    <button className="selectbloodtype"value="O+" onClick={this.handleChange('bloodtype')}>O+</button>
                    <button className="selectbloodtype"value="O-" onClick={this.handleChange('bloodtype')}>O-</button><br/>
                    <button className="selectbloodtype"value="AB+" onClick={this.handleChange('bloodtype')}>AB+</button>
                    <button className="selectbloodtype"value="AB+" onClick={this.handleChange('bloodtype')}>AB-</button> <br/>
                    <button class="signup-next" onClick={this.continue}>Next</button>
                    </div>
                     </div>
                    )
            case 4:
                return(
                    <div className="signupform1">
                        <div className="signupform1-child">
                  <img className="welcomeblood" src={bloodlogo}/>
                  <h2><span>Blood</span> Donation</h2>
                  <p className="signup-paragraph">Note: you can not donate blood if you're under weight.<br></br>Minimum weight for donation required 50KG</p>
                  </div>
                  <div className="signupform1-child">
                  <h2 className="signup">How Much Do </h2>
                        <h2>You Weight</h2>
                        <div className="weight-image-parent">
                            <div   className="weight-image" >
                                <img   onClick={this.handleWeight =()=>{this.state.weight="lesser";}}   className="weight-image"src={l50}></img>
                            </div>
                            <div className="weight-image" >
                            <img  onClick={this.handleWeight =()=>{this.state.weight="greater";}} className="weight-image"src={g50}></img>
                            </div>
                        </div>
                        
                        <button class="signup-next" onClick={this.continue}>Next</button>
                        </div>
                    </div>
                    )
            case 5:
                return(
                    <div className="signupform1">
                        <div className="signupform1-child">
                  <img className="welcomeblood" src={bloodlogo}/>
                  <h2><span>Blood</span> Donation</h2>
                  <p className="signup-paragraph">Defining gender will let us know brining new features for mothers health care.</p>
                  </div>
                  <div className="signupform1-child">
                  <h2 className="signup">What is </h2>
                        <h2>You're Gender</h2>
                        <div className="weight-image-parent">
                            <div className="weight-image">
                                <img  onClick={this.handleGender =()=>{this.state.gender="male";}} className="weight-image"src={male}></img>
                            </div>
                            <div className="weight-image">
                            <img  onClick={this.handleGender =()=>{this.state.gender="female";}} className="weight-image"src={female}></img>
                            </div>
                        </div>
                        
                        <button class="signup-next" onClick={this.continue}>Next</button>
                        </div>
                    </div>
                    )
            case 6:
                return(
                    <div className="signupform1">
                    <div  className="signupform1-child">
                  <img className="welcomeblood" src={bloodlogo}/>
                  <h2><span>Blood</span> Donation</h2>
                  <p className="signup-paragraph">Provide your real name for your identity. Your name will be used for search.</p>
                  </div>  
                  <div >
                  <h2 className="signup">Where Do</h2>
                  <h2>You Live?</h2>
  
                  <label>Street Address</label> <br/>
                  <input type="text" defaultValue={values.address} onChange={this.handleChange('address')} placeholder="123/4, Saint Road"></input><br/>
  
                  <label>City</label><br/>
                  <input type="text" defaultValue={values.city}  onChange={this.handleChange('city')} placeholder="Dhaka"></input><br/>
  
                  <label>Postal Code</label><br/>
                  <input type="number"  defaultValue={values.postalCode}  onChange={this.handleChange('postalCode')}placeholder="X X X X"></input><br/>
                  <button class="signup-next" onClick={this.continue}>Next</button>
                  </div>
              </div>
                    )
            case 7:
                return(
                    <div className="signupform1">
                    <div  className="signupform1-child">
                  <img className="welcomeblood" src={bloodlogo}/>
                  <h2><span>Blood</span> Donation</h2>
                  <p className="signup-paragraph">Correct birthdate gives you best experience with the community.Don't hide it.</p>
                  </div>  
                  <div >
                  <h2 className="signup">How Old Are</h2>
                  <h2>You?</h2>
                  <h6>Select Your Birthdate</h6>
                  <input type="date" defaultValue={values.dateOfBirth}  onChange={this.handleChange('dateOfBirth')}></input>
                  <br/>
                  <button class="signup-next" onClick={this.continue}>Next</button>
                  </div>
              </div>
                    )
            case 8:
                return(
                    <div className="signupform1">
                    <div  className="signupform1-child">
                  <img className="welcomeblood" src={bloodlogo}/>
                  <h2><span>Blood</span> Donation</h2>
                  <p className="signup-paragraph">Please do not use a model or doll avata. Please Keep faith on yourself you're beautiful too.</p>
                  </div>  
                  <div >
                  <h2 className="signup">You're almost done</h2>
                   <img  className="weight-image-upload"src={upload}></img> 
                  <button class="start-journey-1" onClick={this.continue}>Start Journey</button>
                  </div>
              </div>
                    )
                    case 9:
                return (
                    <div className="signupform1">
                          <div className="signupform">
                        <img className="welcomeblood" src={bloodlogo}/>
                        <h2><span>Blood</span> Donation</h2>
                        <button class="start-journey" onClick={this.continue}>Start Journey</button>
                        </div >
                        
                        </div>
                        )
                    case 10:
                    return(
                        <Profile/>
                    )

        }
   
}
 }



export default signup;
