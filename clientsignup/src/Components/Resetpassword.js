import React from 'react'
import {Formik , Form} from 'formik';
import { Textfield } from './TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
/**
* @author
* @function ResetPassword
**/
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }))
export const ResetPassword = (props) => {
    const classes = useStyles();
    const validation = Yup.object().shape({
  
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

      
      
       
     return(
      <Formik initialValues={{
        email : '',
        password :'',
        confirmPassword :''
                           }}
          validationSchema = {validation}
           >
       {formik =>(
            <div className="container mt-3">
            <div className="row">
          
              <div className="col-md-7 "></div>
              
              <div className="col-md-3"> 
               <h2 className="h2.my-4.font-weight-bold-display-4">
                  
           Reset your Password
           </h2>
          
           <Form>
            
             <Textfield label ="Email" name="email" type="email" />
             <Textfield label ="Password" name="password" type="password" />
             <Textfield label ="Confirm Password" name="confirmPassword" type="password" />
           
             <Box mt={2} ml={10}>
             <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
                           <Link style={{ textDecoration: "none", color: "white" }} to="/login">Save </Link>
                    
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
    