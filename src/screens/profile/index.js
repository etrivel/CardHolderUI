import React from 'react';
import { Typography } from '@material-ui/core';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'You are in profile page.'
        }
    }

    render(){

        const {
            message
        } = this.state;

        return <Typography>
            {message}
        </Typography>
    }
}

export default Profile;