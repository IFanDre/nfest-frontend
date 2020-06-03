import React from 'react';
import PropTypes from 'prop-types';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import WifiOffOutlinedIcon from '@material-ui/icons/WifiOffOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Grid xs={6} >
                    <Typography align="justify" display="inline">{children}</Typography>
                </Grid>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: "auto",
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
            >
                <Tab icon={<MotorcycleOutlinedIcon />} {...a11yProps(0)} />
                <Tab icon={< PhoneIcon />} {...a11yProps(1)} />
                <Tab icon={<WifiOffOutlinedIcon />} {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0} >
                Un festival inedit care se pregăteşte cu pasiune şi răbdare, un festival al liniştii, al naturii, unde acordurile fine de chitară eclipsează convorbirile noastre la telefon, vizionările de videoclipuri sau audiţii comerciale.
            </TabPanel>
            <TabPanel value={value} index={1}>
                În caz că o să veniţi cu copiii, aceştia vor avea un moderator care se preocupă ca voi să puteţi purta discuţii sau să vizionaţi programul nostru. Astfel unii copii vor cunoaşte pe copiii colegilor părinţilor lor.
            </TabPanel>
            <TabPanel value={value} index={2}>
                Nu avem wireless sau curent, însă voluntarii noştrii au creat sisteme de iluminat originale pe care le puteţi avea şi dumneavoastră acasă. Totuşi într-o locaţie la câteva minute distanţă puteţi să încărcaţi telefoanele, să folosiţi wireless-ul, să vizionaţi tv sau să savuraţi o cafea/ceai la umbra naturală a viţei de vie.
            </TabPanel>
        </div>
    );
}


