import React from 'react';
import { CssBaseline, Button, TextField, Grid, Typography, Container } from '@material-ui/core';
// import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Location from '../components/map';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Typography align="left" component="h1" variant="h5">
                Contact
            </Typography>
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                             <TextField
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                name="message"
                                label="Message"
                                type="string"
                                id="message"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </Container>
            <Location />
        </div>
    );
}
