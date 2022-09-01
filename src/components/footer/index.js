import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    Grid,
    Typography,
    withStyles,
} from '@material-ui/core';

// footer list of data
const footerlists = [
    {
        name: "About FIS",
        path: "/"
    },
    {
        name: "Privacy Policy",
        path: "/"
    },
    {
        name: "Terms & Conditions",
        path: "/"
    },
    {
        name: "FAQs",
        path: "/"
    }
];
// end

// style
const styles = theme => ({
    root: {
        background: theme.palette.secondary.main,
        padding: "20px 0px 10px",
        textAlign: "center",
        border: "1px solid #707070",
        [theme.breakpoints.only('xs')]: {
            textAlign: "left",
        }
    },
    list: {
        padding: "0px 20px",
        color: "#3BCFF0",
        fontSize: 13,
        cursor: "pointer",
        opacity: 0.9,
        lineHeight: 3
    },
    copyright: {
        padding: "20px 0px 20px",
        color: theme.palette.background.paper,
        textAlign: "center",
        fontSize: 12,
        opacity: 0.9,
    }
})
// end

class Footer extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {}
    }
    // end

    render() {

        const {
            classes
        } = this.props;

        return <div className={classes.root}>
            {/* footer Component */}
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {footerlists.map(l => {
                    return <Grid key={l.name} item xs={6} sm={3} md={2}><Typography variant="subtitle2" className={classes.list}>{l.name}</Typography></Grid>
                })}
            </Grid>
            <Typography variant="subtitle2" className={classes.copyright}>© 2020 FIS and / or its subsidiaries. All rights reserved.</Typography>
            {/* end */}
        </div>
    }
}

export default withStyles(styles)(withRouter(Footer));