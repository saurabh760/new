import React from 'react'
import {Formik , Form} from 'formik';
import { Textfield } from './TextField';
import Button from "@material-ui/core/Button";
import { Box } from '@material-ui/core';
import * as Yup from 'yup';

/**
* @author
* @function LogIn
**/

export const LogIn = (props) => {
  const validation = Yup.object().shape({
  
    email: Yup.string()
    .email("Email is Invalid")
    .required("Email is required"),
  
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  
 
    });
 return(
  <Formik initialValues={{
    email : '',
    password : ''
  
                       }}
      validationSchema = {validation}
       >
   {formik =>(
        <div className="container mt-3">
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-3"> 
           <h2 className="h2.my-4.font-weight-bold-display-4">
              
       Sign In
       </h2>
      
       <Form>
        
         <Textfield label ="Email" name="email" type="email" />
         <Textfield label ="Password" name="password" type="password" />
        
         <Box mt={4} ml={13}>
         <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  
                >
                 Sign In
                </Button>
             </Box>   
             <Box mt={2} ml={12}>
         {/* <Button
                  variant="contained"
                  color="primary"
                  ml={6}
                  style={{backgroundColor:"primary"}}
                  size="large"
                  
                >
                    <Link style={{ textDecoration: "none", color: "white" }} to="/">Sign Up</Link>
                
                </Button>      */}
                <a href="/forgetPassword" class="continue"><h6>Forget password?</h6></a>
         </Box>
       </Form>
  
       </div>
       </div></div>
   )}
</Formik>
)

}
