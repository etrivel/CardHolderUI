import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { EdittablesContext, BalancePayloadContext } from './contexts/index'



const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
}));

const MainApp = (props) => {
    let [data, setData] = useState(null);
    let [payload, setPayload] = useState(null);
    const classes = useStyles();
    return (
        <EdittablesContext.Provider value={{ ...data, setData }}>
            <BalancePayloadContext.Provider value={{ ...payload, setPayload }}>
                <div className={classes.root}> {props.children} </div>
            </BalancePayloadContext.Provider>
        </EdittablesContext.Provider>
    )
}

export default MainApp;