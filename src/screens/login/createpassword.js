import React from "react";
import { withRouter } from "react-router-dom";
import {
    Container,
    Card,
    CardContent,
    Typography,
    withStyles,
    TextField,
    Grid,
    Button,
    Breadcrumbs,
    // Link,
    Dialog,
    DialogTitle,
    DialogContent,
} from "@material-ui/core";
import DialogComponent from "../../components/dialog/index";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import config from "../../config";
const valerrlist = ["currentpass", "pass", "newpass"];
// style
const styles = (theme) => ({
    root: {
        width: "100%",
        background: theme.palette.mainbackground.default,
        opacity: 1,
        padding: "30px 0px",
    },
    titledetails: {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#012834",
        margin: "14px 0px",
        opacity: 0.9,
    },
    para: {
        margin: "14px 0px",
        fontSize: "14px",
        fontWeight: 500,
        marginLeft: "20px",
        opacity: 0.8,
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
        },
    },
    det: {
        padding: "16px 80px",
        [theme.breakpoints.down("sm")]: {
            padding: "16px",
        },
    },
    li: {
        opacity: 0.8,
        fontSize: "14px",
        fontWeight: 500,
        margin: "14px 0px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
        },
    },
    formGrid: {
        textAlign: "center",
    },
    formHeader: {
        textAlign: "center",
        marginBottom: 40,
        [theme.breakpoints.down("sm")]: {
            marginBottom: 40,
        },
    },
    formInputs: {
        margin: "10px 0px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
            borderRadius: 10,
        },
    },
    userHelpGrid: {
        margin: "10px 0px",
    },
    rememberMe: {
        color: theme.palette.error.main,
        fontSize: 14,
        fontWeight: 500,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 6,
        },
    },
    forgotPassword: {
        color: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "flex-end",
        margin: "auto",
        "& a": {
            cursor: "unset",
            textDecoration: "none",
        },
        "& .MuiTypography-body1": {
            fontSize: "0.8rem !important",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: "flex-start",
            margin: "auto",
        },
    },
    star: {
        color: theme.palette.error.main,
    },
    text_title_policy: {
        fontSize: "0.8rem",
        fontWeight: "bold",
        color: "#012834",
        textDecoration: "underline",
        letterSpacing: 1,
        cursor: "pointer",
        [theme.breakpoints.up("sm")]: {
            marginTop: "52px",
        },
    },

    title: {
        fontSize: 16,
        fontWeight: 600,
    },
    card: {
        background: theme.palette.background.paper,
        boxShadow: "0px 5px 10px #00000014",
        borderRadius: 16,
        opacity: 1,
        margin: "20px 0px",
    },
    card_title: {
        borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
        fontWeight: "bold",
        fontSize: 14,
        [theme.breakpoints.only("xs")]: {
            height: "20px",
        },
    },
    text_title: {
        padding: "6px 0px",
        opacity: 0.9,
    },
    body: {
        padding: "30px 0px",
    },
    btns: {
        margin: "20px 0px",
    },
    clear: {
        boxShadow: "0px 3px 6px #0049903D",
        border: `1px solid ${theme.palette.primary.main}`,
        opacity: 0.9,
        fontSize: 12,
        borderRadius: 8,
        marginRight: 12,
        fontWeight: 600,
    },
    submit: {
        border: `2px solid ${theme.palette.primary.main}`,
        background: theme.palette.primary.main,
        boxShadow: "0px 3px 6px #0049903D",
        borderRadius: 8,
        fontSize: 12,
        opacity: 0.9,
        "&:hover": {
            background: theme.palette.primary.main,
        },
    },
    d_icon: {
        margin: "auto",
        width: "100%",
        cursor: "pointer",
        textAlign: "center",
        color: theme.palette.primary.main,
        fontSize: 50,
    },
    d_title: {
        fontSize: 16,
        fontWeight: 600,
        textAlign: "center",
        color: theme.palette.secondary.main,
        opacity: 0.8,
        letterSpacing: 1,
        paddingBottom: "12px",
    },
    dialog: {
        opacity: 0.8,
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        "& h2": {
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            color: "#012834",
            fontWeight: 600,
            fontSize: "16px",
        },
    },
    dialogmain: {
        "& .MuiDialog-paperWidthSm": {
            maxWidth: "100%",
        },
    },
    //  submit: {
    //     border: `2px solid ${theme.palette.primary.main}`,
    //     background: theme.palette.primary.main,
    //     boxShadow: "0px 3px 6px #0049903D",
    //     borderRadius: 4,
    //     fontSize: 10,
    //     float: "right",
    //     opacity: 0.9,
    //     "&:hover": {
    //         background: theme.palette.primary.main,
    //     },
    //     [theme.breakpoints.only('xs')]: {
    //         fontSize: 9,
    //     }
    // },
    d_btn: {
        textAlign: "center",
        margin: "auto",
        display: "flex",
        height: "40px",
        color: theme.palette.secondary.contrastText,
        fontSize: 16,
        textTransform: "capitalize",
        fontWeight: 600,
        boxShadow: "0px 10px 15px #70707028",
        background: theme.palette.primary.main,
        transition: "0.5s",
        "& button": {
            padding: 8,
        },
        "&:hover": {
            transition: "0.5s",
            background: theme.palette.primary.main,
            boxShadow: "0px 10px 15px #70707028",
            opacity: 0.9,
        },
    },
    input: {
        width: "50%",
        [theme.breakpoints.only("xs")]: {
            width: "100%",
        },
    }, err: {
        margin: "20px 0px",
        padding: "6px 8px",
        color: theme.palette.secondary.main,
        textTransform: "none",
        fontWeight: 600,
        boxShadow: "0px 10px 15px #70707028",
        fontSize: "13px",
        background: "#FF000012 0% 0% no-repeat padding-box",
        border: " 1px solid #FF0000",
        borderRadius: "8px",
        opacity: 1,
        float: "left",
        "&:hover": {
            background: "#FF000012 0% 0% no-repeat padding-box",
        },
    },
});
// end

class Createpassword extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            open1: false,
            currentpass: "",
            pass: "",
            newpass: "",
            error: {},
            errdata: "",
            open: false,
            data: [
                "Have 15 or more characters.",
                "Contain three of the following four types:",
                "English uppercase character(A - Z)",
                "English lowercase character(a - z)",
                "Numeric(0 - 9)",
                "Special character(!, ., ;, $, #, @)",
                "Not contain your user name(employee id) or your first or last name.",
            ],
            data2: [
                "Select a phrase that's easy for you to remember, and then add complexity by using spaces, numbers",
                "and/or special characters.",
                "Leverage dictionary words (except for words used in common passwords, like 'password').",
                "Consider misspelling words to add complexity (for example, kidz for kids).",
                "Avoid adjacent keyboard characters, like 'qwerty'.",
                "Avoid using personal details, such as your social security number or birthdate.",
                "Don't use your FNFIS password for other applications and websites, including consumer sites.",
                "Examples (Do not use these as they are known by all employees):",
            ],
        };
    }
    // end
    Clear = () => {
        this.setState({
            submit: false,
            open: false,
            currentpass: "",
            pass: "",
            newpass: "",
            errdata: "",
            error: {},
        });
    };
    validate = () => {
        const error = {};
        let isValidate = true;
        valerrlist.map((val) => {
            if (!this.state[val]) {
                error[val] = true;
                isValidate = false;
                if (this.state[val] === 0) {
                    error[val] = false;
                    isValidate = true;
                }
            } else {
                error[val] = false;
            }
            return error;
        });
        this.setState({ error: { ...error } });
        return isValidate;
    };
    // handle submit funcy
    handlesubmit = async () => {
        const state = this.state;
        if (this.validate()) {
            if (state.newpass !== state.pass) {
                state.error["mismatch"] = true;
                this.setState({ ...state });
                return false;
            } else {
                // setTimeout(() => {
                //     this.setState({ submit: false });
                //     this.props.history.push("/welcome");
                // }, 3000);
                const body = {
                    "firstName": "kabilan",
                    "lastName": "p",
                    "emailAddress": "kabilan.p@fisglobal.com",
                    "loginName": "SAMPLEIDP",
                    "mobile": "9876545667",
                    "forcePasswordChange": true,
                    "autoGeneratePassword": true,
                    "sendPasswordEmailNotification": true,
                    "sendEmailNotification": true,
                    "role": "0",
                    "loginRole": "Regular Login",
                    "departments": [
                        {
                            "departmentName": "SMYNT",
                            "primaryDept": 1
                        }
                    ],
                    "profileRegToLogins": [
                        {
                            "profileRegistryName": "SMYNT OTP Regular",
                            "exclusion": 0
                        },
                        {
                            "profileRegistryName": "SMYNT User Access Profile",
                            "exclusion": 0
                        }
                    ]
                }

                await axios
                    .post(`${config.api_url}${'/api/v1/users/registerCHPUser'}`, body)
                    .then((res) => {
                        this.setState({ ...state, submit: true, open: true });
                        this.setState({ submit: false });
                        this.props.history.push("/welcome");
                    })
                    .catch((error) => {
                        this.setState({
                            errdata: error.message,
                        });
                    });
            }
        }
    };
    // end
    handleChange = (n, v) => {
        const state = this.state;
        state.error[n] = false;
        this.setState({
            ...state,
            [n]: v,
        });
    };
    handlecls = () => {
        const state = this.state;
        this.setState({
            ...state,
            open1: !this.state.open1,
        });
    };
    render() {
        const { classes } = this.props;

        const {
            open,
            submit,
            error,
            newpass,
            pass,
            currentpass,
            open1,
            data,
            data2,
            errdata
        } = this.state;

        return (
            <div className={classes.root}>
                <Container>
                    {/* dialogbox component */}
                    {submit && (
                        <DialogComponent
                            open={open}
                            handleClose={this.handleClose}
                            component={
                                <div>
                                    <CheckCircleOutlineIcon className={classes.d_icon} />
                                    <Typography variant="subtitle2" className={classes.d_title}>
                                        {" "}
                                        User password has been successfully modified.{" "}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disableElevation
                                        className={classes.d_btn}
                                        onClick={() => this.props.history.push("/welcome")}
                                    >
                                        Ok
                                    </Button>
                                </div>
                            }
                        />
                    )}
                    {/* end */}
                    <Dialog
                        open={open1}
                        onClose={() => this.handlecls()}
                        className={classes.dialogmain}
                    >
                        <DialogTitle className={classes.dialog}>
                            Password Policy{" "}
                            <CloseIcon
                                style={{ color: "#0000007A", cursor: "pointer" }}
                                onClick={() => this.handlecls()}
                            />
                        </DialogTitle>
                        <DialogContent className={classes.det}>
                            <Typography className={classes.titledetails}>
                                Rules - Your password must:
                            </Typography>
                            {data.map((v) => {
                                return <li className={classes.li}>{v}</li>;
                            })}
                            <Typography className={classes.titledetails}>
                                Guidance - Use a complex yet practicable password:
                            </Typography>
                            {data2.map((v) => {
                                return <li className={classes.li}>{v}</li>;
                            })}
                            <p className={classes.para}>My Kidz Like 2 Swim</p>
                            <p className={classes.para}>@IloveAlaska-intheSummer</p>
                            <p className={classes.para}>Why would u do that!</p>
                            <p className={classes.para}>
                                If you have any questions or issues, you may contact Employee
                                Support at: http://employeesupport.fnfis.com
                            </p>
                            <Typography className={classes.titledetails}>
                                For assistance:
                            </Typography>
                            <p className={classes.para}>
                                FIS Employees - Employee Support: 800.448.8625 (US);
                                856.470.2445 (Outside the US)
                            </p>
                            <Button
                                variant="contained"
                                className={classes.submit}
                                onClick={() => this.handlecls()}
                            >
                                {"Close"}
                            </Button>
                        </DialogContent>
                    </Dialog>
                    {/* card component */}
                    {/* <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <Typography className={classes.title}>My Account </Typography>
            <Typography color="textPrimary" className={classes.title}>
              Change Password{" "}
            </Typography>
          </Breadcrumbs> */}
                    {/* end */}

                    {/* card component */}
                    <Card className={classes.card} variant="outlined">
                        <CardContent className={classes.card_title}>
                            Create Login ID and Password
                        </CardContent>

                        <Container>
                            <div className={classes.body}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography
                                            variant="subtitle2"
                                            className={classes.text_title}
                                        >
                                            Login ID <span className={classes.star}>*</span>
                                        </Typography>
                                        <TextField
                                            onChange={(e) =>
                                                this.handleChange("currentpass", e.target.value)
                                            }
                                            value={currentpass}
                                            fullWidth={true}
                                            style={{ width: "100%" }}
                                            helperText={
                                                error.currentpass &&
                                                "Please enter your login id"
                                            }
                                            error={error.currentpass && true}
                                            type="password"
                                            size="small"
                                            variant="outlined"
                                            placeholder="Login ID"
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography
                                            onClick={() => this.handlecls()}
                                            variant="subtitle2"
                                            className={classes.text_title_policy}
                                        >
                                            Password Policy ?
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography
                                            variant="subtitle2"
                                            className={classes.text_title}
                                        >
                                            New Password <span className={classes.star}>*</span>
                                        </Typography>
                                        <TextField
                                            helperText={
                                                error.pass && "Please enter your new password"
                                            }
                                            onChange={(e) =>
                                                this.handleChange("pass", e.target.value)
                                            }
                                            value={pass}
                                            error={error.pass && true}
                                            type="password"
                                            size="small"
                                            variant="outlined"
                                            placeholder="New Password"
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography
                                            variant="subtitle2"
                                            className={classes.text_title}
                                        >
                                            Confirm New Password{" "}
                                            <span className={classes.star}>*</span>
                                        </Typography>
                                        <TextField
                                            helperText={
                                                this.state.error.mismatch
                                                    ? "The confirm new password is mismatched with new password"
                                                    : error.newpass &&
                                                    "Please enter your confirm password"
                                            }
                                            error={
                                                (error.newpass || this.state.error.mismatch) && true
                                            }
                                            onChange={(e) =>
                                                this.handleChange("newpass", e.target.value)
                                            }
                                            value={newpass}
                                            type="password"
                                            size="small"
                                            variant="outlined"
                                            placeholder="Confirm New Password"
                                            className={classes.input}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                    className={classes.btns}
                                >
                                    <Grid item>
                                        {errdata ? (
                                            <Button className={classes.err}>{errdata}</Button>
                                        ) : (
                                            ""
                                        )}
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            className={classes.clear}
                                            onClick={() => this.Clear()}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className={classes.submit}
                                            onClick={() => this.handlesubmit()}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </Card>
                    {/* end */}
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(Createpassword));
