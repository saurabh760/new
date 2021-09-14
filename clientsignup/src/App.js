
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
// import signUp_Image from './assets/signUpImg.jpg';
import { SignUp } from './Components/SignUp';
import {LogIn} from './Components/LoginPage'
import { ForgetPassword } from './Components/Forgetpasswordd';
import {ResetPassword} from './Components/Resetpassword'

function App() {
  return (
    // <div className="container mt-3">
    //   <div className="row">
    //     <div className="col-md-5"> 
       <>
        <Router>
        <Switch>
          
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/forgetPassword" component={ForgetPassword} />
          <Route exact path="/resetPassword" component={ResetPassword} />
          </Switch>
          </Router>
        {/* // </div> */}
        {/* <div className="col-md-7">
          <img className="img-fluid w-100" src={signUp_Image}  alt="" />
        </div> */}
    {/* //   </div> */}
    
    {/* // </div> */}
    </>
  );
}

export default App;
