import React from 'react';
// import PropTypes from 'prop-types';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 3,
        // padding: `${theme.spacing.unit * 2}px 0`,
        position: 'absolute',
        width: '100%',
        // bottom: '0',
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit,
        position: 'relative',

    },
}));
function getYear() {
    return new Date().getFullYear();
}
export default function Footer() {
    const classes = useStyles();


    return (
        <div className={classes.footer}>
            <Paper className={classes.root} elevation={1}>

                {/*<Typography variant="h5" component="h3">*/}
                {/*    Footer text*/}
                {/*</Typography>*/}
                <Typography component="p" alignCenter>
                    &copy; All right reserved. 2016 - {getYear()}
                </Typography>
            </Paper>
        </div>
    );
}
//
// Footer.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

