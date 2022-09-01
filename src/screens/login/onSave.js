import React from "react";
import {
    Grid,
    Container,
    Typography,
    Button,
    Breadcrumbs,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import axios from "axios";

// import { EdittablesContext } from "../../../contexts/index";

// style
const styles = (theme) => ({
    root: {
        width: "100%",
        background: theme.palette.mainbackground.default,
        [theme.breakpoints.down("xs")]: {
            paddingBottom: "40px",
        },
    },
    rootCard: {
        // backgroundImage: `url("../assets/Mask Group 2.png")`,
        // backgroundImage: `url("/assets/business-woman-hand-typing-laptop-keyboard-with-financial-cha.png")`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        marginBottom: 40,
        borderRadius: 16,
        boxShadow: "0px 35px 50px #70707028 !important",
        padding: "86px 40px",
        // margin: "40px",
        background: "#fff",
        [theme.breakpoints.down("xs")]: {
            margin: "0px",
            padding: "60px 40px",
        },
    },
    illustrator: {
        textAlign: "center",
        // background: "#FFFFFF 0% 0% no-repeat padding-box",
        // boxShadow: "0px 5px 10px #00000029",
        borderRadius: "16px",
        padding: 60,
        [theme.breakpoints.down("xs")]: {
            padding: "30px 20px",
        },
    },
    illustratorGrid: {
        // borderRight: `1px solid ${theme.palette.mainbackground.default}`,
    },
    mainContent: {
        display: "flex",
        alignItems: "center",
    },
    Welcome: {
        color: theme.palette.primary.main,
        fontSize: 22,
        fontWeight: 600,
    },
    username: {
        opacity: 0.9,
        fontWeight: 600,
    },
    userid: {
        fontSize: 16,
        opacity: 0.8,
        marginTop: 8,
    },
    img: {
        width: "100%",
        height: "100%",
        [theme.breakpoints.down("xs")]: {
            marginTop: 40,
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
    title: {
        fontSize: 16,
        fontWeight: 600,
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
        },
        // color: "#012834"
    },
});
// end

class RegSuccusUser extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {};
    }
    // end

    componentDidMount = async () => {
        await axios
            .get('https://iasuat.fisglobal.com/cardholderservice/api/v1/idpurlgenerate')
            .then((res) => {
                if (res.data) {
                    const valData = res?.data;
                    this.setState({
                        login: valData,
                    })
                    // console.log(valData)
                }
            })
    }

    render() {
        const { classes } = this.props;
        const data = {
            bread: this.props.location?.state?.update === true ?
                [
                    "My Account",
                    "Modify Details",
                    "Success",
                ] : this.props.location?.state?.isCard === true ?
                    [
                        "Card Information",
                        "Register New Card",
                        "Success",
                    ] :
                    [
                        "My Account",
                        "Change Password",
                        "Success",
                    ],
            path: "/welcome",
        };
        return (
            <div>
                <Grid container className={classes.root}>
                    <Container maxWidth="lg" style={{ margin: "auto" }}>
                        {/* Breadcrumbs Component */}
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            style={{ padding: "20px 10px" }}
                        >
                            {data?.bread?.map((v, i) => {
                                return (
                                    <Typography
                                        color={data?.bread?.length - 1 === i ? "textPrimary" : ""}
                                        className={classes.title}
                                    >
                                        {v}
                                    </Typography>
                                );
                            })}
                        </Breadcrumbs>
                        {/* end */}
                        {/* Card Component in welcome page*/}
                        <Card className={classes.rootCard}>
                            <Grid container item xs={12} className={classes.mainContent}>
                                <Grid item xs={12} sm={12} className={classes.illustratorGrid}>
                                    <Grid item xs={12} className={classes.illustrator}>
                                        <CheckCircleOutlineIcon className={classes.d_icon} />
                                        <Typography variant="subtitle2" className={classes.d_title}>
                                            {this.props.location?.state?.update === true ? "Successfully submited the request." : this.props.location?.state?.isCard === true ? "Card Registration Successfull." : ` Hi ${this.props.location?.state?.userID} your registration is successfull, your temperory password has been sent to your registered email.`}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disableElevation
                                            className={classes.d_btn}
                                            onClick={() => {
                                                this.props.location?.state?.update === true ? this.props.history.push('/welcome') :
                                                    window.location.href = this.state.login
                                            }
                                            }
                                        >
                                            Ok
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Card>
                        {/* end */}
                    </Container>
                </Grid>
            </div>
        );
    }
}
// RegSuccusUser.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(RegSuccusUser));