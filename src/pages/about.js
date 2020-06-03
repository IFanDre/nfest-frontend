import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button, Typography } from '@material-ui/core';

const styles = makeStyles ((theme) => ({
    root: {
        display: 'flex',
        // backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    title: {
        marginBottom: theme.spacing(14),
    },
    image: {
        height: 120,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
        opacity: 0.7,
    },
    button: {
        marginTop: theme.spacing(8),
    },
}));

export default function About(props) {
    const classes = styles();

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <img
                    src="/static/themes/onepirate/productCurvyLines.png"
                    className={classes.curvyLines}
                    alt="curvy lines"
                />
                <Typography variant="h4" marked="center" className={classes.title} component="h2">
                    About
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <img
                                    src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80"
                                    alt="suitcase"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="justify">
                                    Un festival inedit care se pregăteşte cu pasiune şi
                                    răbdare, un festival al liniştii, al naturii, unde acordurile
                                    fine de chitară eclipsează convorbirile noastre la telefon,
                                    vizionările de videoclipuri sau audiţii comerciale.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <img
                                    src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80"
                                    alt="graph"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="justify">
                                    În caz că o să veniţi cu copiii, aceştia vor avea un moderator
                                    care se preocupă ca voi să puteţi purta discuţii sau să vizionaţi programul nostru.
                                    Astfel unii copii vor cunoaşte pe copiii colegilor părinţilor lor.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <img
                                    src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80"
                                    alt="clock"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="justify">
                                    Nu avem wireless sau curent, însă voluntarii noştrii au creat sisteme
                                    de iluminat originale pe care le puteţi avea şi dumneavoastră acasă.
                                    Totuşi într-o locaţie la câteva minute distanţă puteţi să încărcaţi telefoanele,
                                    să folosiţi wireless-ul, să vizionaţi tv sau să savuraţi o cafea/ceai la umbra
                                    naturală a viţei de vie.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    className={classes.button}
                    component="a"
                    href="/premium-themes/onepirate/sign-up/"
                >
                    Get started
                </Button>
            </Container>
        </section>
    );
}
