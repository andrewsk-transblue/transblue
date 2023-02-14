import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import * as emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_iLZ3jXyTzXi5zQFlgf5DG");

const styles = {
    "& label": {
        "&.Mui-focused": {
            color: 'white'
        }
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        borderColor: "orange"
    }
}

const InputLabelProps = {
    style: {
        color: '#ed6a22'
    }
}

const InputProps = {
    style: {
        color: 'white'
    }
}

function Contact() {
    const [submitEnabled, setSubmitEnabled] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({});
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();

        setIsSubmitted(true);

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
        setSubmitEnabled(false);
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
            <Box sx={{width: '100%', bgcolor: 'rgb(39, 39, 39)', py: 5}}>
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}><Typography variant='h2' sx={{color: 'white'}}>SEND US A MESSAGE</Typography></Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    variant='standard'
                                    label='Your Name'
                                    fullWidth
                                    sx={{
                                        mb: 2, 
                                        borderBottom: '2px solid white', 
                                        ...styles
                                    }}
                                    InputProps={InputProps}
                                    InputLabelProps={InputLabelProps}
                                    onChange={handleChange}
                                    id='firstName'
                                    value={formValues.firstName}
                                />
                                <TextField
                                    variant='standard'
                                    label='Email'
                                    fullWidth
                                    sx={{mb: 2, borderBottom: '2px solid white', ...styles}}
                                    InputProps={InputProps}
                                    InputLabelProps={InputLabelProps}
                                    onChange={handleChange}
                                    id='email'
                                    value={formValues.email}
                                />
                                <TextField
                                    variant='standard'
                                    label='Phone Number'
                                    fullWidth
                                    sx={{mb: 2, borderBottom: '2px solid white', ...styles}}
                                    InputProps={InputProps}
                                    InputLabelProps={InputLabelProps}
                                    onChange={handleChange}
                                    id='phone'
                                    value={formValues.phone}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    multiline
                                    label='Write a Message'
                                    fullWidth
                                    sx={{mb: 2, border: '2px solid white', ...styles}}
                                    InputProps={InputProps}
                                    InputLabelProps={InputLabelProps}
                                    minRows={4}
                                    onChange={handleChange}
                                    id='message'
                                    value={formValues.message}
                                />
                                <Button
                                    variant='contained'
                                    sx={{bgcolor: '#ed6a22'}}
                                    fullWidth
                                    onClick={submit}
                                    disabled={
                                        !formValues.firstName || formValues.firstName?.length === 0 ||
                                        !formValues.email || formValues.email?.length === 0 ||
                                        !formValues.message || formValues.message?.length === 0 ||
                                        !formValues.phone || formValues.phone?.length === 0
                                    }
                                >
                                    send message
                                </Button>
                                {isSubmitted &&
                                    <Typography variant='body2' sx={{color: 'white'}}>Thank you! We will get back to you shortly</Typography>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    )
}

export default Contact;