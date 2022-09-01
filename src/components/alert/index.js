import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alerts = (props) => {

    const [open, setOpen] = React.useState(props.open);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            id="main_alert_snackbar"
            anchorOrigin={{
                vertical: props.vertical,
                horizontal: props.horizontal
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            >
            <Alert
                id="main_alert" 
                severity={props.severity}
                onClose={handleClose} 
                >
                {props.msg}
            </Alert>
        </Snackbar>
    );
}


export default Alerts;