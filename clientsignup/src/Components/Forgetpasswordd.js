import React from 'react'
import {Formik , Form} from 'formik';
import { Textfield } from './TextField';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


/**
* @author
* @function ForgetPassword
**/
export const ForgetPassword = (props) => {
 
    const validation = Yup.object().shape({
  
        email: Yup.string()
        .email("Email is Invalid")
        .required("Email is required"),
        
      
        });
     return(
      <Formik initialValues={{
        email : ''
                           }}
          validationSchema = {validation}
           >
       {formik =>(
            <div className="container mt-3">
            <div className="row">
          
              <div className="col-md-7 "></div>
              
              <div className="col-md-3"> 
               <h2 className="h2.my-4.font-weight-bold-display-4">
                  
           Forget Password
           </h2>
          
           <Form>
            
             <Textfield label ="Email" name="email" type="email" />
           
             <Box mt={2} ml={13}>
             <Button
        variant="contained"
        color="primary"
        size="large"
          >
        
                           <Link style={{ textDecoration: "none", color: "white" }} to="/resetPassword">Send</Link>
                    
                    </Button>
                 </Box>   
           </Form>
      
           </div>
           </div>
           </div>
       )}
    </Formik>
    )
    
    }
    