import React from "react";
import {
    Button,
    Grid,
    Typography,
    TextField,
    Checkbox,
    FormControlLabel,
    Dialog,
    DialogTitle,
    DialogContent
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";
import CloseIcon from '@material-ui/icons/Close';
class Forgetpassword extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            data: [
                "Have 15 or more characters.",
                "Contain three of the following four types:",
                "English uppercase character(A - Z)",
                "English lowercase character(a - z)",
                "Numeric(0 - 9)",
                "Special character(!, ., ;, $, #, @)",
                "Not contain your user name(employee id) or your first or last name."],
            data2: [
                "Select a phrase that's easy for you to remember, and then add complexity by using spaces, numbers",
                "and/or special characters.",
                "Leverage dictionary words (except for words used in common passwords, like 'password').",
                "Consider misspelling words to add complexity (for example, kidz for kids).",
                "Avoid adjacent keyboard characters, like 'qwerty'.",
                "Avoid using personal details, such as your social security number or birthdate.",
                "Don't use your FNFIS password for other applications and websites, including consumer sites.",
                "Examples (Do not use these as they are known by all employees):",
            ]
        };
    }
    handleClose = () => {
        this.setState({ open: !this.state.open })
    }
    // end
    render() {
        const { classes, handlechange } = this.props;
        const { open, data, data2 } = this.state;

        return (
            <div>

                {/* Signing title */}
                <Grid item xs={12} className={classes.formHeader}>
                    <Typography
                        variant="h2"
                        component="h2"
                        className={classes.mainHeading}
                    >Problems Signing in to your account <span onClick={() => this.handleClose()}> <img
                        src="/assets/information.svg"
                        alt="fis logo"
                        width="20px"
                        style={{ marginBottom: "-1px", cursor: "pointer" }}
                    /></span></Typography>
                </Grid>
                {/* end */}
                <Dialog open={open} onClose={() => this.handleClose()} className={classes.dialogmain}>
                    <DialogTitle className={classes.dialog}>
                        Password Policy <CloseIcon style={{ color: "#0000007A", cursor: "pointer" }} onClick={() => this.handleClose()} />
                    </DialogTitle>
                    <DialogContent className={classes.det}>
                        <Typography
                            className={classes.titledetails}
                        >Rules - Your password must:</Typography>
                        {data.map(v => {
                            return <li className={classes.li}>{v}</li>
                        })}
                        <Typography
                            className={classes.titledetails}
                        >Guidance - Use a complex yet practicable password:</Typography>
                        {data2.map(v => {
                            return <li className={classes.li}>{v}</li>
                        })}
                        <p className={classes.para}>My Kidz Like 2 Swim</p>
                        <p className={classes.para}>@IloveAlaska-intheSummer</p>
                        <p className={classes.para}>Why would u do that!</p>
                        <p className={classes.para}>If you have any questions or issues, you may contact Employee Support at: http://employeesupport.fnfis.com</p>
                        <Typography
                            className={classes.titledetails}
                        >For assistance:</Typography>
                        <p className={classes.para}>FIS Employees - Employee Support: 800.448.8625 (US); 856.470.2445 (Outside the US)</p>
                        <Button variant="contained" className={classes.submit}
                            onClick={() => this.handleClose()}>
                            {"Close"}</Button>
                    </DialogContent>
                </Dialog>
                {/* reset your password form */}
                <Grid container item xs={12} justify="center">
                    <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                        <Grid item xs={12} className={classes.form}>
                            <Typography variant="subtitle2" className={classes.for_newuser}>Please select your issue : </Typography>
                            <Grid item xs={12} >
                                <FormControlLabel
                                    className={classes.for_checkbox}
                                    control={
                                        <Checkbox
                                            checked
                                            //   checked={this.state.isChecked}
                                            //     onChange={this.handleRememberPassword}
                                            name="forgot_password"
                                            color="primary"
                                        />
                                    }
                                    label="I forgot my password"
                                />
                                <FormControlLabel
                                    className={classes.for_checkbox}
                                    control={
                                        <Checkbox
                                            name="login_id"
                                            color="primary"
                                        />
                                    }
                                    label="I forgot my login ID"
                                />

                                <FormControlLabel
                                    className={classes.for_checkbox}
                                    control={
                                        <Checkbox
                                            name="account"
                                            color="primary"
                                        />
                                    }
                                    label="I think my account is locked"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            className={classes.userHelpGrid}
                        >
                            <Typography variant="body1" component="div"
                                className={`${classes.for_newuser} ${classes.for_resetuser}`}
                            >
                                To reset your password, enter your user email address, username or alias.
                           </Typography>
                        </Grid>
                        <TextField
                            className={classes.formInputs}
                            //   error
                            //   helperText="Incorrect entry."
                            label="Enter your username, email ID or alias"
                            variant="outlined"
                        />
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                disableElevation
                                className={classes.proceedButton}
                                onClick={this.handleLogin}
                            >Proceed</Button>

                            <Button
                                variant="outlined"
                                color="primary"
                                disableElevation
                                className={classes.backButton}
                                onClick={() => handlechange()}
                            >Back to Sign in</Button>
                        </Grid>
                    </Grid>
                </Grid>
                {/* end */}
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(Forgetpassword));