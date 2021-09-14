import React from 'react'
 import signUp_Image from '../assets/signUpImg.jpg';
import {Formik , Form} from 'formik';
import { Textfield } from './TextField';
import Button from "@material-ui/core/Button";
import { Box } from '@material-ui/core';
import * as Yup from 'yup';
// import { Link } from "react-router-dom";
/**
* @author
* @function SignUp
**/

 export const SignUp = (props) => {
    const validation = Yup.object().shape({
        firstName: Yup.string()
          .min(3, "Firstname is Too Short!")
          .max(20, "Firstname is Too Long!")
          .required("First Name is required"),
      
        lastName: Yup.string()
          .min(3, "Last Name is Too Short!")
          .max(20, "Last Name is Too Long!")
          .required("Last Name is required"),
      
      
        email: Yup.string()
        .email("Email is Invalid")
        .required("Email is required"),
      
        password: Yup.string()
          .required("Password is required")
          .min(6, "Password is too short - should be 6 chars minimum"),
      
         confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null],"Password Must Match")
          .required("Confirm password is required"),
        });

  {  
  return(
    <Formik initialValues={{
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confirmPassword : ''
                           }}
          validationSchema = {validation}
           >
       {formik =>(
            <div className="container mt-3">
            <div className="row">
              <div className="col-md-8"></div>
              <div className="col-md-7">
          <img className="img-fluid  w-70"  src={signUp_Image}  alt="" />
              </div> 
              <div className="col-md-3"> 
               <h2 className="h2.my-4.font-weight-bold-display-4">
                   {/* {console.log(formik)} */}
           Sign Up
           </h2>
          
           <Form>
             <Textfield label ="First Name" name="firstName" type="text" />
             <Textfield label ="Last Name" name="lastName" type="text" />
             <Textfield label ="Email" name="email" type="email" />
             <Textfield label ="Password" name="password" type="password" />
             <Textfield label ="Confirm Password" name="confirmPassword" type="password" />

             <Box mt={4} ml={12}>
         <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  
                >
                 Sign In
                </Button>
             </Box>   
             <Box mt={2} ml={13}>
         {/* <Button
                  variant="contained"
                  color="primary"
                  ml={6}
                  style={{backgroundColor:"primary"}}
                  size="large"
                  
                >
                    <Link style={{ textDecoration: "none", color: "white" }} to="/">Sign Up</Link>
                
                </Button>      */}
                <a href="/login" style={{color:"green"}} class="continue"><h6>Log in here!</h6></a>  
             </Box>
           </Form>
      
           </div>
           </div></div>
       )}
    </Formik>
   )

 }
 } 
