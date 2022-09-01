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
    Tooltip

    // Link
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import { Hidden } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import axios from "axios";
import moment from "moment";
import config from "../../config";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// style
const styles = (theme) => ({
    root: {
        background: theme.palette.mainbackground.default,

        height: "100vh",

        width: "100%",

        opacity: 1,
        padding: "30px 0px",
        [theme.breakpoints.down("md")]: {
            height: "140vh",
        },
        [theme.breakpoints.down("lg")]: {
            height: "115vh",
        },

        [theme.breakpoints.down("sm")]: {
            height: "131vh",
        },
        [theme.breakpoints.down("xs")]: {
            height: "190vh",
        },
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        // color: "#012834"
    },
    divavatars: {
        margin: "auto 14px",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            margin: "10px 0px",
        },
    },

    avatars: {
        width: "30px",
        height: "30px",
        [theme.breakpoints.down("xs")]: {
            margin: "auto",
        },
        borderRadius: 8,
    },
    card: {
        background: theme.palette.background.paper,
        boxShadow: "0px 5px 10px #00000014",
        borderRadius: 16,
        opacity: 1,
        margin: "20px 0px",
        padding: "30px",
    },
    card_title: {
        borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
        fontWeight: "bold",
        background: "#F4F5F8 0% 0% no-repeat padding-box;",
        fontSize: 16,
        padding: "20px",
        borderRadius: "10px",
        [theme.breakpoints.only("xs")]: {
            height: "20px",
        },
    },
    text_title: {
        padding: "6px 0px",
        opacity: 0.9,
    },
    hint_title: {
        marginBottom: "10px",
    },
    body: {
        padding: "30px 0px",
    },
    btns: {
        margin: "20px 0px",
    },
    btn: {
        margin: theme.spacing(1),
        color: "black",
        backgroundColor: "white",
        boxShadow: "0px 5px 10px #00000014",
        border: "2px solid #EAEAEA",
        borderRadius: "8px",
        opacity: "1",
        marginBottom: "20px",
        "&:hover": {
            color: "white",
        },
    },
    hint_title2: {
        marginLeft: "14px",
        cursor: "pointer",
        color: "#4BCD3E",
        marginTop: "0px",
        "&.MuiButton-root:hover": {
            backgroundColor: 'white'
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "0px",
            marginTop: "0px !important",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "-40px",
        },
    },

    clear1: {
        boxShadow: "0px 3px 6px #0049903D",
        border: `1px solid #4BCD3E`,
        opacity: 0.9,
        fontSize: 12,
        borderRadius: 8,
        fontWeight: 600,
        marginLeft: 0,
        padding: "7px 16px",
        marginTop: "35px",
        [theme.breakpoints.only("xs")]: {
            width: "95px",
            marginLeft: 0,
            marginTop: "20px",
        },
        [theme.breakpoints.only("sm")]: {
            width: "95px",
            marginLeft: 10,
            marginTop: "0px",
        },
    },
    err: {
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
    clear2: {
        boxShadow: "0px 3px 6px #0049903D",
        border: `1px solid #4BCD3E`,
        opacity: 0.9,
        fontSize: 12,
        borderRadius: 8,
        fontWeight: 600,
        marginLeft: 12,
        padding: "7px 16px",
        marginTop: "35px",
        [theme.breakpoints.only("xs")]: {
            width: "95px",
            marginLeft: 0,
            marginTop: "0px",
        },
    },
    submit: {
        marginTop: "35px",
        background: "#4BCD3E",
        boxShadow: "0px 3px 6px #0049903D",
        borderRadius: 8,
        fontSize: 12,
        opacity: 0.9,
        marginLeft: "20px",
        color: "#2A2A2A",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "0px",
            marginTop: "75px",
            marginRight: "20px",
        },
    },
    submit1: {
        marginTop: "35px",
        background: "#4BCD3E",
        boxShadow: "0px 3px 6px #0049903D",
        borderRadius: 8,
        fontSize: 12,
        opacity: 0.9,
        marginLeft: "20px",
        color: "#2A2A2A",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "0px",
            marginTop: "0px !important",
            marginRight: "20px",
        },
    },
    submit2: {
        marginTop: "35px",
        background: "#4BCD3E",
        boxShadow: "0px 3px 6px #0049903D",
        borderRadius: 8,
        fontSize: 12,
        opacity: 0.9,
        marginLeft: "20px",
        color: "#2A2A2A",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "0px",
            marginTop: "0px !important",
            marginRight: "20px",
        },
    },
    clear: {
        boxShadow: "0px 3px 6px #0049903D",
        border: `1px solid #4BCD3E`,
        opacity: 0.9,
        fontSize: 12,
        borderRadius: 8,
        fontWeight: 600,
        marginLeft: -7,
        padding: "7px 16px",
        marginTop: "15px",
        [theme.breakpoints.only("xs")]: {
            width: "95px",
            marginLeft: 0,
            marginTop: "0px",
        },
        [theme.breakpoints.only("sm")]: {
            width: "95px",
            marginLeft: 0,
            marginTop: "0px",
        },
    },
    clear3: {
        boxShadow: "0px 3px 6px #0049903D",
        border: `1px solid #4BCD3E`,
        opacity: 0.9,
        fontSize: 12,
        borderRadius: 8,
        fontWeight: 600,
        marginLeft: 12,
        padding: "7px 16px",
        marginTop: "35px",
        [theme.breakpoints.only("xs")]: {
            width: "55px",
            marginLeft: 0,
            marginTop: "0px",
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

    header: {
        height: "74px",
        minHeight: "50px",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
        "& img": {
            display: "none",
        },
        [theme.breakpoints.down("xs")]: {
            height: "auto",
            fontSize: "1.5rem",
            "& img": {
                width: 80,
                display: "block",
                margin: "auto",
            },
        },
    },

    hint_title2: {
        color: "#4BCD3E",
        marginTop: "0px",
        textAlign: "end",
        position: "relative",
        left: "30px",
        cursor: "pointer",

        [theme.breakpoints.down("xs")]: {
            marginLeft: "0px",
            marginTop: "0px !important",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "-40px",
            textAlign: "left",
            left: "0px",
        },
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
    input: {
        width: "100%",
    },
    hint_1: {
        paddingTop: "0px",
    },

    d_iconss: {
        marginBottom: 4,
        flexGrow: 1,
    },
    enterOTP: {
        [theme.breakpoints.down("sm")]: {
            marginTop: "20px",
            marginLeft: "10px",
        },

        [theme.breakpoints.down("xs")]: {
            padding: "0px !important",
            marginTop: "0px",
            marginLeft: "0px",
        },
    },
    enterOTP1: {
        [theme.breakpoints.down("xs")]: {
            padding: "0px !important",
        },
    },
    profile: {
        borderBottom: `3px solid ${theme.palette.primary.main}`,
        background: theme.palette.background.paper,
        boxShadow: "0px 5px 10px #00000014",
        borderRadius: 8,
        width: "50%",
        margin: "auto",
        textAlign: "center",
        height: "50px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: 15,
        opacity: 0.8,
        [theme.breakpoints.only("xs")]: {
            width: "97%",
            height: "auto",
            padding: 6,
        },
    },
    buttons: {
        marginTop: "20px",
        [theme.breakpoints.only("md")]: {
            marginTop: "20px",
        },
        [theme.breakpoints.only("xs")]: {
            marginTop: "0px",
            marginLeft: "0px",
        },
        [theme.breakpoints.only("sm")]: {
            marginTop: "-25px",
            marginLeft: "0px",
        },
    },
    otpbox: {
        marginLeft: "8px",
        [theme.breakpoints.only("md")]: {
            marginTop: "18px",
        },
        [theme.breakpoints.only("xs")]: {
            marginTop: "0px",
            marginLeft: "0px",
            padding: "0px",
        },
    },
    phn: {
        color: theme.palette.primary.main,
        marginRight: 8,
        marginLeft: 6,
        [theme.breakpoints.only("xs")]: {
            marginTop: -12,
        },
    },
    submitbotton: {
        [theme.breakpoints.only("xs")]: {
            marginRight: "0px !important",
        },
        [theme.breakpoints.only("sm")]: {
            marginRight: "0px !important",
        },
    },
    validthr: {
        marginTop: "33px",
        [theme.breakpoints.only("xs")]: {
            marginTop: "0px",
        },
        [theme.breakpoints.only("md")]: {
            marginTop: "0px",
            width: "120px",
        },
    },
    validthro: {
        marginTop: "33px",
        [theme.breakpoints.only("xs")]: {
            marginTop: "0px",
        },
        [theme.breakpoints.only("md")]: {
            marginTop: "33px",
            width: "120px",
        },
        [theme.breakpoints.only("sm")]: {
            marginTop: "33px",
            width: "120px",
            marginLeft: "35px",
        },
        [theme.breakpoints.only("xs")]: {
            marginTop: "33px",
            width: "120px",
        },
    },
});
// end
const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};

class Registration extends React.Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            cardno: "",
            validthrdate: '',
            validthryear: "",
            OTPNumber: "",
            disabled: true,
            disableVal: true,
            disabledvalidate: true,
            errdata: "",
            error: {},
            query: "",
            mobnumber: "",
            reglastnum: "",
            userID: "",
            exdate: "",
            sendotp: true,
            mobnumber_auto: '',
            selectbank: [],
            otpId: "",
            lastName: "",
            firstName: "",
            email: "",
            custCode: "",
            submit: true,
            vpan: "",
            panDisplay: "",
            cardStatus: "",
            reSend: true,
            errdatares: "",
            cvvError: false,
            isVali: false
        };
    }

    handleChanges = (n, v) => {
        debugger;
        const state = this.state;
        state.error[n] = false;
        if (v?.length < 16) {
            this.setState({
                ...state,
                [n]: v,
            });
            state.error[n] = "Please enter 16 characters of Card Number";
        } else {
            state.error[n] = "";
            this.setState({
                ...state,
                [n]: v,
            });
        }

    };

    handleChange = (n, v) => {
        const state = this.state;
        state.error[n] = false;
        this.setState({
            ...state,
            [n]: v,
        });
    };
    handleClose = () => {
        const state = this.state;
        this.setState({
            ...state,
            open: !state.open,
        });
    };
    Clear = () => {
        this.setState({
            cardno: "",
            validthrdate: '',
            validthryear: "",
            OTPNumber: "",
            exdate: "",
            otpId: "",
            lastName: "",
            firstName: "",
            custCode: "",
            email: "",
            error: {},
            query: "",
            errdata: ""
        });
    };
    handlesubmit = () => {
        debugger
        const state = this.state;
        const payload = {
            "instCode": state.validthryear?.label ?? '',
            "firstName": state?.firstName ?? '',
            "lastName": state?.lastName ?? '',
            "emailAddress": state?.email ?? '',
            "loginName": state?.userID ?? '',
            "mobile": state?.mobnumber_auto ?? "",
            "custCode": state?.custCode ?? '',
            "clearPan": state.cardno ? state.cardno : "",
            "vpan": state?.vpan ?? "",
            "panDisplay": state?.panDisplay ?? "",
            "cardStatus": state?.cardStatus ?? ""
        };
        if (this.state.userID) {
            axios
                .post(
                    `${config.api_url}api/v1/users/registration/registerCHPUser`,
                    payload
                )
                .then((res) => {
                    if (res.data !== this.state.userID) {
                        return this.setState({ errdata: res?.data?.message });
                    }
                    this.setState({ submit: false });
                    this.props.history.push({
                        pathname: "/passwordSuccess",
                        state: {
                            userID: this.state.userID
                        }
                    });
                })
                .catch((err) => {
                    this.setState({
                        errdata: err.response.data
                    })
                    // console.log("registration user submit", err);
                });
        }
        // this.handleformsubmit()
        // return;
    };

    handleClear = () => {
        this.setState({
            cardno: "",
            validthrdate: '',
            validthryear: "",
            OTPNumber: "",
            exdate: "",
            error: {},
            reglastnum: "",
            mobnumber_auto: "",
            userID: "",
            query: "",
            errdata: "",
            submit: true,
            disabledvalidate: true
        });
    };

    txtFieldChange = (e) => {
        if ((e.which >= 48 && e.which <= 57) || e.which === 45) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    };

    apiFetchEdit = async (api, playod, n) => {
        debugger
        const state = this.state;
        await axios
            .post(`${config.api_url}${api}`, playod)
            .then(async (res) => {
                if (res?.data?.respCode && res?.data?.respCode !== "00") {
                    return this.setState({ errdata: res?.data?.message, });
                } else {
                    // if (!this.state.cvvError) {
                    if (n === "check") {
                        await this.cvvfun(res);
                        if (!this.state.cvvError) {
                            return this.setState({
                                ...state,
                                sendotp: false,
                                mobnumber_auto: res.data?.cardVerifyResp?.phoneNo,
                                // otpId: res.data?.cardVerifyResp?.otpId,
                                firstName: res.data?.cardVerifyResp?.firstName,
                                lastName: res.data?.cardVerifyResp?.lastName,
                                email: res.data?.cardVerifyResp?.email,
                                custCode: res.data?.cardVerifyResp?.custCode,
                                vpan: res.data?.cardVerifyResp?.vpan ?? "",
                                panDisplay: res.data?.cardVerifyResp?.panDisplay ?? "",
                                cardStatus: res.data?.cardVerifyResp?.cardStatus ?? ""

                            });
                        }
                    }
                    else if (n === "otp") {
                        return this.setState({
                            ...state,
                            sendotp: true,
                            disabledvalidate: false,
                            OTPNumber: res.data?.otp,
                            // cardNumber: res.data?.cardNumber,
                            // channelId: res.data?.channelId,
                            // institutionId: res.data?.institutionId,
                            // mobnumber_auto: res.data?.mobileNumber,
                            otpId: res.data?.otpId

                        });
                    }

                    else if (n === "resendotp") {
                        debugger
                        return this.setState({
                            ...state,
                            disabledvalidate: false,
                            OTPNumber: res.data?.otp,
                            // cardNumber: res.data?.cardNumber,
                            // channelId: res.data?.channelId,
                            // institutionId: res.data?.institutionId,
                            // mobnumber_auto: res.data?.mobileNumber,
                            otpId: res.data?.otpId,
                            submit: true,
                            disableVal: true,
                            query: false,
                            reSend: true,
                            isVali: false

                        });
                    } else if (n === "validate") {
                        if (res?.data === "01") {
                            this.setState({
                                reSend: false,
                                disableVal: true,
                                isVali: true
                            })
                        } else {
                            this.setState({
                                ...state,
                                disabledvalidate: false,
                                disableVal: false,
                                submit: false,
                                query: "success"
                                // OTPNumber: res.data?.otp,
                                // cardNumber: res.data?.cardNumber,
                                // channelId: res.data?.channelId,
                                // institutionId: res.data?.institutionId,
                                // mobnumber_auto: res.data?.mobileNumber,
                                // otpId: res.data?.otpId

                            });
                        }
                        // this.setState({ query: "success", disableVal: false });
                    } else if (n === "submit") {
                        return this.handlesubmit();
                    }
                    // }
                }
            })
            .catch((error) => {
                this.setState({
                    disabled: true, errdata: error.message,
                });
            });

    };

    Otp = async (api, playod) => {
        await axios
            .post(`${config.api_url}${api}`, playod)
            .then((res) => { })
            .catch((error) => {
                this.setState({
                    errdata: error.message,
                });
            });
    };

    validate = (n) => {
        debugger
        var valerrlist;
        if (n === "check") {
            valerrlist = ["cardno", "exdate", "validthryear", "reglastnum"];
        } else if (n === "otp" || n === "resendotp") {
            valerrlist = ["mobnumber_auto"];
        }
        else if (n === "validate" || n === "resend") {
            valerrlist = ["OTPNumber"];
        }
        else {
            valerrlist = [];
        }
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

    handleOtps = async (n) => {
        debugger
        const state = this.state;
        const body = {
            "cardNumber": state.cardno ?? '',
            "channelId": "SMS",
            // "otpId": b + JSON.parse(inc?.slice(-1)) + 1,
            "institutionId": state.validthryear?.label ?? '',
            "mobileNumber": state?.mobnumber_auto ?? "",
        };
        await this.apiFetchEdit("api/v1/otp/generate", body, n);
        // await this.apiFetchEdit("api/v1/otp/generate", body, "resendotp");
    };

    cvvfun = async (res) => {
        debugger
        const state = this.state;
        const body = {
            flag: "s",
            instCode: state?.validthryear.label,
            reqMsgId: "",
            // "clearPan": state.cardno ? state.cardno : "",
            // expDate: state.validthrdate
            // ? state.validthrdate.value + state.validthryear.value
            // : "",
            // // "instCode": state.validthryear?.label ?? '',
            // "mobileNo": state.mobnumber?.slice(6) ?? '',
            verifyCvvReq: [
                {
                    cvv2: "",
                    expDate: state?.exdate ?? '',
                    pan: "",
                    reqId: "",
                    vpan: res.data?.cardVerifyResp?.vpan,
                },
            ],
        };
        // await this.apiFetchEdit("api/v1/verify/cvv", body, n);
        await axios
            .post(`${config.api_url}api/v1/verify/cvv`, body)
            .then((res) => {
                const valData = res.data
                debugger;
                if (valData?.respCode === '901') {
                    this.setState({
                        ...valData,
                        cvvError: false
                    })
                    return false
                } else {
                    this.setState({
                        errdatares: res?.data?.respMsg,
                        cvvError: true
                    })
                    return true;
                }
            })
            .catch((res) => {
                this.setState({ errdata: res.message, cvvError: true })
                return true
            })
    }

    handleOtp = async (n) => {
        const state = this.state;
        // const cvvApi = await this.cvvfun();
        debugger
        // if (!this.state.cvvError) {
        if (this.validate(n)) {
            if (n === "otp") {
                // const inc = state?.otpId;
                // let b = inc.substring(0, inc?.length - 1);
                const body = {
                    "cardNumber": state.cardno ?? '',
                    "channelId": "SMS",
                    // "otpId": b + JSON.parse(inc?.slice(-1)) + 1,
                    "institutionId": state.validthryear?.label ?? '',
                    "mobileNumber": state?.mobnumber_auto ?? "",
                };
                await this.apiFetchEdit("api/v1/otp/generate", body, n);
            } else if (n === "resendotp") {
                const body = {
                    "cardNumber": state.cardno ?? '',
                    "channelId": "SMS",
                    // "otpId": b + JSON.parse(inc?.slice(-1)) + 1,
                    "institutionId": state.validthryear?.label ?? '',
                    "mobileNumber": state?.mobnumber_auto ?? "",
                };
                await this.apiFetchEdit("api/v1/otp/generate", body, n);
            } else if (n === "validate") {
                debugger
                // const inc = state?.otpId;
                // let b = inc.substring(0, inc?.length - 1);
                const body = {
                    "cardNumber": state.cardno ?? '',
                    "channelId": "SMS",
                    "institutionId": state.validthryear?.label ?? '',
                    "mobileNumber": state?.mobnumber_auto ?? "",
                    "otpId": state?.otpId ?? "",
                    "otp": state?.OTPNumber ?? '',

                    // "channelId": state.channelId ?? '',
                    // "otpId": state.otpId ?? '',
                    // "custCode": state?.custCode ?? '',
                    // "firstName": state?.firstName ?? '',
                    // "lastName": state?.lastName ?? '',
                    // "email": state.email ?? ''
                    // 934611
                };
                await this.apiFetchEdit("api/v1/otp/validate", body, n);
                // if (this.state?.resCode !== "00") {
                //     this.setState({ query: "success" });
                // } else {
                //     this.setState({ query: "progress" });
                // }
            } else {
                const state = this.state;
                const body = {
                    "clearPan": state.cardno ? state.cardno : "",
                    "expiryDate": state?.exdate ?? '',
                    "instCode": state.validthryear?.label ?? '',
                    "mobileNo": state.reglastnum ?? ''
                };
                await this.apiFetchEdit("api/v1/users/registration/verifyCardDetailsForRegistration", body, n);
            }
            // }
        }
    };

    // /cardholderservice/api/v1/users/registration/getInstituionList ---> onload loading Institution in dropdown

    // handleformsubmit = () => {
    //     this.handleClose();
    //     this.props.history.push("/welcome");
    // };


    dateval = (e) => {
        var keycode = e.which ? e.which : e.keyCode;
        if (keycode <= 48 && keycode >= 57) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    };

    componentDidMount() {
        debugger
        axios.get(`${config.api_url}${'api/v1/users/registration/getInstituionList'}`)
            .then((res) => {
                let arr = [];
                const data = res.data?.map(v => {
                    return arr.push({
                        label: v?.instcode,
                        value: v?.instId
                    })
                })

                this.setState({ ...this.state, selectbank: arr });
            })
            .catch((error) => { });
    }

    nameValidation = (e) => {
        var keycode = e.which ? e.which : e.keyCode;
        if (
            !(
                (keycode >= 65 && keycode <= 90) ||
                (keycode >= 97 && keycode <= 122) || (keycode >= 48 && keycode <= 57) ||
                keycode === 32
            )
        ) {
            // if (((keycode >= 48 && keycode <= 57))) {
            return e.preventDefault();
        }
    };

    render() {
        const { classes } = this.props;
        const {
            cardno,
            query,
            exdate,
            error,
            validthryear,
            OTPNumber,
            errdata,
            disableVal,
            mobnumber,
            reglastnum,
            userID,
            disabledvalidate,
            sendotp,
            mobnumber_auto,
            selectbank,
            submit,
            vpan,
            panDisplay,
            cardStatus
        } = this.state;

        return (
            <Grid container className={classes.root}>
                <Container maxWidth="xl" className={classes.divs}>
                    <Container>
                        {/* end */}

                        {/* Breadcrumbs component */}

                        {/* end */}

                        {/* card component one*/}
                        <Card className={classes.card} variant="outlined">
                            <CardContent className={classes.card_title}>
                                New User Registration
                            </CardContent>

                            <Container>
                                <div className={classes.body}>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography
                                                variant="subtitle2"
                                                className={classes.text_title}
                                            >
                                                Enter Card Number
                                            </Typography>
                                            <TextField
                                                size="small"
                                                variant="outlined"
                                                placeholder=" Card Number"
                                                className={classes.input}
                                                onKeyPress={(e) => {
                                                    this.txtFieldChange(e);
                                                }}
                                                onPaste={(e) => {
                                                    e.preventDefault();
                                                    return false;
                                                }}
                                                inputProps={{
                                                    maxLength: 16
                                                }}
                                                onCopy={(e) => {
                                                    e.preventDefault();
                                                    return false;
                                                }}
                                                onChange={(e) => {
                                                    this.handleChanges("cardno", e.target.value);
                                                }}
                                                helperText={error.cardno && "Please enter your 16 digits card number"}
                                                error={error.cardno ? true : false}
                                                value={cardno}
                                            />
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={6}
                                            lg={6}
                                            xl={6}
                                            spacing={2}
                                            style={{ width: "100%", display: "flex" }}
                                        >
                                            <Grid
                                                item container sm={6}>
                                                <Grid
                                                    item xs={12} sm={12} md={12}>
                                                    <Typography
                                                        variant="subtitle2"
                                                        className={classes.text_title}
                                                    >
                                                        Expiry Date (MMYY)
                                                    </Typography>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",

                                                        }}
                                                    >
                                                        <TextField
                                                            style={{ width: "90%", margin: 0 }}
                                                            helperText={
                                                                error?.exdate && "Please choose expiry date"
                                                            }
                                                            error={error?.exdate}
                                                            variant="outlined"
                                                            margin="normal"
                                                            value={exdate}
                                                            inputProps={{ maxLength: 4 }}
                                                            name="number"
                                                            // maxDate={new Date()}
                                                            onChange={(e, v) =>
                                                                this.handleChange("exdate", e.target.value)
                                                            }
                                                            placeholder="MMYY"
                                                            // onKeyPress={(e) => this.dateval(e)}
                                                            KeyboardButtonProps={{
                                                                "aria-label": "change date",
                                                            }}
                                                            size="small"
                                                        />
                                                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <KeyboardDatePicker
                                                                style={{ width: "90%", margin: 0 }}
                                                                helperText={
                                                                    error?.validthrdate && "Please choose date"
                                                                }
                                                                error={error?.validthrdate}
                                                                inputVariant="outlined"
                                                                margin="normal"
                                                                format="MM/dd/yyyy"
                                                                // disabled={checkerDisabled ? true : false}
                                                                value={validthrdate}
                                                                name="date"
                                                                // maxDate={new Date()}
                                                                onChange={(e, v) =>
                                                                    this.handleChange("validthrdate", moment(e).format('DD/MM/YYYY'))
                                                                }
                                                                placeholder="Date"
                                                                name="validthrou"
                                                                onKeyPress={(e) => this.dateval(e)}
                                                                KeyboardButtonProps={{
                                                                    "aria-label": "change date",
                                                                }}
                                                                size="small"
                                                            />
                                                        </MuiPickersUtilsProvider> */}
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid item container xs={12} sm={6}>
                                                <Typography
                                                    variant="subtitle2"
                                                    className={classes.text_title}
                                                >
                                                    Select Bank
                                                </Typography>
                                                <Autocomplete
                                                    fullWidth={false}
                                                    size="small"
                                                    style={{ width: "100%" }}
                                                    value={validthryear}
                                                    name="validyear"
                                                    options={selectbank ?? []}
                                                    getOptionLabel={(option) => option.label}
                                                    onChange={(e, v) =>
                                                        this.handleChange("validthryear", v)
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            helperText={
                                                                error?.validthryear && "Please select bank"
                                                            }
                                                            error={error?.validthryear}
                                                            variant="outlined"
                                                            placeholder="Select Bank"
                                                            className={classes.TextField}
                                                        />
                                                    )}
                                                />


                                                {/* <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="Select Bank"
                                                    // disabled
                                                    style={{ width: "95%" }}
                                                    value={validthryear}
                                                    onChange={(e) =>
                                                        this.handleChange("validthryear", e.target.value)
                                                    }
                                                    onKeyPress={(e) => {
                                                        this.txtFieldChange(e);
                                                    }}
                                                    helperText={
                                                        error?.validthryear && "Please Choose year"
                                                    }
                                                    error={error?.validthryear}
                                                    className={classes.input}
                                                /> */}
                                            </Grid>
                                        </Grid>

                                        <Grid item container xs={12} sm={6} spacing={2}>
                                            <Grid item xs={12} sm={12} md={7} lg={10}>
                                                <Typography
                                                    variant="subtitle2"
                                                    className={classes.text_title}
                                                >
                                                    Mobile number (Last four digits of registered Number)
                                                </Typography>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="Last four digits of registered Number"
                                                    // disabled
                                                    style={{ width: "95%" }}
                                                    value={reglastnum}
                                                    inputProps={{
                                                        maxLength: 4,
                                                    }}
                                                    onChange={(e) =>
                                                        this.handleChange("reglastnum", e.target.value)
                                                    }
                                                    helperText={
                                                        error?.reglastnum && "Please enter your Last four digits Number"
                                                    }
                                                    onKeyPress={(e) => {
                                                        this.txtFieldChange(e);
                                                    }}
                                                    error={error?.reglastnum}
                                                    className={classes.input}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={6}
                                                md={5}
                                                lg={2}
                                                className={classes.buttons}
                                            >
                                                <Button
                                                    className={classes.clear}
                                                    style={{
                                                        width: "95px",
                                                        marginTop: '38px'
                                                    }}
                                                    onClick={() => this.handleOtp("check")}
                                                >
                                                    Verify
                                                </Button>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={6}
                                                lg={10}
                                                className={classes.enterOTP}
                                                style={{ marginTop: "25px" }}
                                            >
                                                <Typography
                                                    variant="subtitle2"
                                                    className={classes.text_title}
                                                >
                                                    Enter OTP Number
                                                </Typography>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="OTP Number"
                                                    className={classes.input}
                                                    onKeyPress={(e) => {
                                                        this.txtFieldChange(e);
                                                    }}
                                                    inputProps={{
                                                        maxLength: 6
                                                    }}
                                                    helperText={error?.OTPNumber && "Please Enter otp"}
                                                    error={error?.OTPNumber}
                                                    onChange={(e) => {
                                                        this.handleChange("OTPNumber", e.target.value);
                                                    }}
                                                    value={OTPNumber}
                                                />
                                                {query === "success" ? (
                                                    <>
                                                        <Fab aria-label="save" size="small" color="primary">
                                                            <CheckIcon />
                                                        </Fab>
                                                        OTP verfied successfully
                                                    </>
                                                ) : (
                                                    errdata &&
                                                    <>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                justifyContent: 'start'
                                                            }}>
                                                            <ErrorOutlineOutlinedIcon />
                                                            <p style={{ marginTop: "0px" }}>
                                                                Not verify
                                                            </p>
                                                        </div>
                                                    </>
                                                    //  <Fade
                                                    //     in={query === "progress"}
                                                    //     style={{
                                                    //         transitionDelay:
                                                    //             query === "progress" ? "800ms" : "0ms",
                                                    //     }}
                                                    //     unmountOnExit
                                                    // >
                                                    //     <CircularProgress size="2rem" />
                                                    // </Fade>
                                                )}
                                            </Grid>
                                            {/* <Grid
                        style={{ marginTop: "auto" }}
                        item
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                      >
                        {query === "success" ? (
                          <Fab aria-label="save" size="small" color="primary">
                            <CheckIcon />
                          </Fab>
                        ) : (
                          <Fade
                            in={query === "progress"}
                            style={{
                              transitionDelay:
                                query === "progress" ? "800ms" : "0ms",
                            }}
                            unmountOnExit
                          >
                            <CircularProgress size="2rem" />
                          </Fade>
                        )}
                      </Grid> */}

                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={6}
                                                lg={2}
                                                className={classes.enterOTP1}
                                                style={{ marginTop: "25px" }}

                                            >
                                                <Button
                                                    className={classes.clear1}
                                                    // disabled={disableVal}
                                                    disabled={disabledvalidate}
                                                    onClick={() => this.handleOtp("validate")}
                                                >
                                                    validate
                                                </Button>
                                            </Grid>

                                            <Grid item xs={12} sm={6} style={{ paddingTop: "0px" }}>
                                                <Hidden xsUp>Enter OTP Number</Hidden>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={6}
                                                className={classes.enterOTP1}
                                                style={{ paddingTop: "0px" }}
                                            >
                                                <Button
                                                    onClick={() => this.handleOtps("resendotp")}
                                                    // variant="subtitle2"
                                                    className={classes.hint_title2}
                                                    variant='text'
                                                    disabled={this.state.reSend}
                                                >
                                                    Resend OTP
                                                    <ArrowRightIcon
                                                        style={{ position: "relative" }}
                                                    />
                                                </Button>
                                            </Grid>

                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            xs={12}
                                            sm={6}
                                            spacing={2}
                                            className={classes.otpbox}
                                        >

                                            <Grid item xs={12} sm={12} md={7} lg={10}>
                                                <Typography
                                                    variant="subtitle2"
                                                    className={classes.text_title}
                                                >
                                                    Mobile number
                                                </Typography>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="Mobile number"
                                                    disabled
                                                    style={{ width: "95%" }}
                                                    value={mobnumber_auto}
                                                    inputProps={{
                                                        maxLength: 10,
                                                    }}
                                                    onChange={(e) =>
                                                        this.handleChange("mobnumber_auto", e.target.value)
                                                    }
                                                    helperText={
                                                        error?.mobnumber_auto && "Please enter your mobile number"
                                                    }
                                                    onKeyPress={(e) => {
                                                        this.txtFieldChange(e);
                                                    }}
                                                    error={error?.mobnumber_auto}
                                                    className={classes.input}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={6}
                                                md={5}
                                                lg={2}
                                                className={classes.buttons}
                                            >
                                                <Button
                                                    className={classes.clear}
                                                    style={{ width: "95px" }}
                                                    disabled={sendotp}
                                                    onClick={() => this.handleOtp("otp")}
                                                >
                                                    Send OTP
                                                </Button>
                                            </Grid>

                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={6}
                                                lg={10}
                                                className={classes.enterOTP}
                                                style={{ marginTop: "-10px" }}
                                            >
                                                <Typography
                                                    variant="subtitle2"
                                                    className={classes.text_title}
                                                >
                                                    User ID
                                                </Typography>

                                                <Tooltip title="User Id can be Alphanumeric and upper case 
                                                No Special character and Lower case is allowed Only Numeric can be allowed"
                                                >
                                                    <TextField
                                                        size="small"
                                                        variant="outlined"
                                                        placeholder="please enter the User ID"
                                                        className={classes.input}
                                                        disabled={disableVal}
                                                        onKeyPress={(e) => {
                                                            this.nameValidation(e);
                                                        }}
                                                        helperText={error?.userID && "Please User ID"}
                                                        error={error?.userID}
                                                        onChange={(e) => {
                                                            this.handleChange("userID", e.target.value.toUpperCase());
                                                        }}
                                                        value={userID}
                                                    />
                                                </Tooltip>
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
                                                {this.state.errdatares ?
                                                    <Button className={classes.err}>{this.state.errdatares}</Button>
                                                    : ""}
                                                {this.state.isVali && <Button className={classes.err}>{"Invalid OTP number"}</Button>}
                                            </Grid>
                                            <Grid
                                                item
                                                className={classes.submitbotton}
                                                style={{ textAlign: "end", marginRight: "20px" }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    className={classes.submit1}
                                                    disabled={submit}
                                                    onClick={() => this.handlesubmit()}
                                                >
                                                    SUBMIT
                                                </Button>
                                                <Button
                                                    className={classes.clear2}
                                                    onClick={() => this.handleClear()}
                                                >
                                                    CLEAR
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Container>
                        </Card>
                        {/* end */}

                        {/* card component two*/}

                        {/* end */}

                        {/* PhoneInTalkIcon section */}

                        {/* end */}
                    </Container>
                    <div style={{ float: "right" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            className={classes.btn}
                            onClick={() => this.props.history.push("/login")}
                        >
                            <KeyboardBackspaceIcon /> Back
                        </Button>
                    </div>
                </Container >
            </Grid >
        );
    }
}

export default withStyles(styles)(withRouter(Registration));