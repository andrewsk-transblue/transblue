import React, {useState} from 'react';
import Captcha from '../captcha/captcha';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Clear } from '@mui/icons-material';
import {withStyles} from '@mui/styles';
init("user_iLZ3jXyTzXi5zQFlgf5DG");

//declare the const and add the material UI style
const CssTextField = withStyles({
    root: {
      '&.Mui-focused label': {
        color: '#ed6a22',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#0b56a4',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#0b56a4',
        },
        '&.MuiInputLabel-outlined': {
            color: '#ed6a22'
        },
      },
    },
  })(TextField);

  const InputLabelProps = {
    style: {
        color: '#d9d9d6',
        fontFamily: 'Raleway',
        letterSpacing: '.03em'
    }
  }

  const InputProps = {
    style: {
        color: '#e6e6e3'
    }
  }

function Form(props) {
    const { setDisplayForm } = props;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitEnabled, setSubmitEnabled] = useState(false);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        zipcode: '',
        leadSource: ''
    });

    function handleChange(e) {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    };

    function submit(e) {
        e.preventDefault();

        setIsSubmitted(true);

        //send message to incomingleads@transblue.org or franchises email address
        let to_email;
        props.email ? to_email = props.email : to_email = 'incomingleads@transblue.org';

        let website;
        props.location ? website = `GC Website - ${props.location}` : website = 'GC Website'

        let templateParams = {
            website: 'GC Website',
            from_name: `${formValues.firstName} ${formValues.lastName}`,
            to_email: 'carters@transblue.org', //CHANGE THIS TO props.email or incoming leads
            reply_to: formValues.email,
            phone: formValues.phone,
            message: formValues.message,
            zipcode: formValues.zipcode,
            leadSource: formValues.leadSource
        }

        emailjs.send(
        'service_gekurtf',
        'template_dqy1grk', //CONTACT TEMPLATE
            templateParams,
            process.env.REACT_APP_REACTJS_USER
        )

        // reset state of component
        setDisplayForm(false);
        setSubmitEnabled(false);
        setIsSubmitted(false);
        setFormValues({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            zipcode: '',
            leadSource: ''
        })
    }

    return (
        // <ThemeProvider theme={theme}>
        // <CssBaseline />
            <Box
                sx={{
                    width: '350px',
                    paddingBottom: '16px',
                    paddingTop: '16px',
                    backgroundColor: 'rgba(0,0,0,.65)',
                    backdropFilter: 'blur(5px)',
                    position: 'fixed',
                    right: '0px',
                    top: '15vh',
                    borderRadius: '4px 0px 0px 4px',
                    zIndex: 50,
                    maxHeight: '100vh',
                    overflowY: 'auto',
                    maxWidth: '100vw',
                    overflowY: 'auto',
                    maxHeight: '80vh'
                }}
            >
                <Grid
                    container
                    direction='row'
                    spacing={1}
                >
                    <Grid item>
                        <Button
                            onClick={() => setDisplayForm(false)}
                        >
                            <Clear sx={{color: 'white'}} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' sx={{color: 'white'}}>SEND US A MESSAGE</Typography>
                    </Grid>
                </Grid>

                <Grid container p={2} spacing={1}>
                    <Grid item xs={6}>
                        <CssTextField
                            label='First Name'
                            id='firstName'
                            onChange={handleChange}
                            size='small'
                            fullWidth
                            variant='outlined'
                            value={formValues.firstName}
                            InputLabelProps={InputLabelProps}
                            InputProps={InputProps}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <CssTextField
                            id='lastName'
                            value={formValues.lastName}
                            onChange={handleChange}
                            fullWidth
                            size='small'
                            label='Last Name'
                            variant='outlined'
                            sx={{zIndex: 12}}
                            InputLabelProps={InputLabelProps}
                            InputProps={InputProps}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField
                            id='zipcode'
                            value={formValues.zipcode}
                            onChange={handleChange}
                            fullWidth
                            size='small'
                            label='Zip Code'
                            variant='outlined'
                            sx={{zIndex: 12}}
                            InputLabelProps={InputLabelProps}
                            InputProps={InputProps}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField
                            id='email'
                            value={formValues.email}
                            onChange={handleChange}
                            fullWidth
                            size='small'
                            label='Email'
                            variant='outlined'
                            sx={{zIndex: 12}}
                            InputLabelProps={InputLabelProps}
                            InputProps={InputProps}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField
                            id='phone'
                            value={formValues.phone}
                            onChange={handleChange}
                            fullWidth
                            size='small'
                            label='Phone'
                            variant='outlined'
                            sx={{zIndex: 12}}
                            InputLabelProps={InputLabelProps}
                            InputProps={InputProps}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField
                            id='leadSource'
                            value={formValues.leadSource}
                            onChange={handleChange}
                            fullWidth
                            size='small'
                            label='How did you hear about us?'
                            variant='outlined'
                            sx={{zIndex: 12}}
                            InputLabelProps={InputLabelProps}
                            InputProps={InputProps}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CssTextField
                            id='message'
                            value={formValues.message}
                            onChange={handleChange}
                            fullWidth
                            size='small'
                            label='Write us a message!'
                            multiline
                            minRows={3}
                            variant='outlined'
                            sx={{zIndex: 12}}
                            InputLabelProps={InputLabelProps}
                            InputProps={InputProps}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {!isSubmitted && 
                            <Captcha onChange={() => setSubmitEnabled(true)} />
                        }
                        <Button
                            fullWidth
                            sx={{bgcolor: '#ed6a22', color: 'white', mt: 2}}
                            variant='contained'
                            onClick={submit}
                            disabled={!submitEnabled}
                        >
                            send message
                        </Button>
                    </Grid>
                </Grid>
                
            </Box>
        // </ThemeProvider>
    )
}

export default Form;