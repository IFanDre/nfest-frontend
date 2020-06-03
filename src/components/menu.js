import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Tabs, Tab, Box, IconButton, Grid } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import logo from '../logo.gif';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    button: {

    }
});
export default function Menu() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>

            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                centered
            >
                <Link to={'/'} >
                    <img width='50px' height='50px' src={logo}  alt="logo" />
                </Link>
                <Link to={'/about'}><Tab label="About" /></ Link>
                <Link to={'/contact'}><Tab label="Contact" /></ Link>
                <Link to={'/auth'}><Tab label="Login" /></ Link>
                <Link to={'/edition'}><Tab label="Edition" /></ Link>

            </Tabs>
        </Paper>
    );
}
