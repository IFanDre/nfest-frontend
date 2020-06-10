import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import logo from '../logo.gif';

const useStyles = makeStyles({
    root: {
        width: '60%',
        margin: "auto",
        background: "azure",

    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('logo');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction component={Link} label="Home" value='logo' to={'/'} />
            <BottomNavigationAction component={Link} label="About" value="about" to={'/about'} showLabel/>
            <BottomNavigationAction component={Link} label="Contact" value="contact" to={'/contact'} showLabel/>
            <BottomNavigationAction component={Link} label="Login" value="login" to={'/auth'} showLabel/>
            <BottomNavigationAction component={Link} label="Edition" value="edition" to={'/edition'} showLabel/>
        </BottomNavigation>
    );
}
