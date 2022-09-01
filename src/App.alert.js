import React from 'react';
import { Alert } from './components';
import { alertProps } from './utils';
import { AlertContext } from './contexts';

class AppAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            severity: alertProps.severity.success,
            msg: '',
            vertical: alertProps.vertical.top,
            horizontal: alertProps.horizontal.center,
        }
    }

    close = () => {
        this.setState({
            open: false,
            severity: alertProps.severity.success,
            msg: '',
            vertical: alertProps.vertical.top,
            horizontal: alertProps.horizontal.center,
        })
    }

    set = (props) => {
        this.setState({ ...props })
    }

    render() {
        return (
            <AlertContext.Provider value={{
                ...this.state, onclose: this.close,
                setSnack: this.set
            }} >
                {this.state.open ? <Alert {...this.state} onclose={this.close} /> : ''}
                {this.props.children}
            </AlertContext.Provider>
        )
    }
}

export default AppAlert;