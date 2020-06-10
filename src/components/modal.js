import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageGrid from './modalGallery';
import {Typography} from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import imgs from './images';

export default function SimpleModal(props) {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{
            width: props.image.width,

        }}>
            {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>*/}
            {/*    Open max-width dialog*/}
            {/*</Button>*/}
            <ButtonBase
                key={props.image.title}
                className={props.classes.imageWrapper}
                style={{
                    width: '100%',

                }}
                onClick={handleClickOpen}
            >

                <div
                    className={props.classes.imageSrc}
                    style={{
                        backgroundImage: `url(${props.image.url})`,
                    }}
                />
                <div className={props.classes.imageBackdrop}/>
                <div className={props.classes.imageButton}>
                    <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        className={props.classes.imageTitle}
                    >
                        {props.image.title}
                        <div className={props.classes.imageMarked}/>
                    </Typography>
                </div>
            </ButtonBase>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">Category</DialogTitle>
                <DialogContent>
                    <ImageGrid images={imgs.filter(img => img.title == props.title)}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
