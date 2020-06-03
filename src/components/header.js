import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Tabs, Tab, Box, IconButton, Grid } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Menu from "./menu";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    button: {

    }
});
export default function Header() {
    return (
            <Menu/>
    );
}
