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

  // Link
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { Hidden } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import moment from "moment";
import config from "../../../config";
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

class Cardnewinfo extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      cardno: "",
      validthrdate: "",
      validthryear: "",
      OTPNumber: "",
      disabled: true,
      disableVal: true,
      errdata: "",
      error: {},
      query: false,
      mobnumber: "",
      resCode: "",
      reSend: true
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
    debugger;
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
      validthrdate: "",
      validthryear: "",
      OTPNumber: "",
      query: false,
      error: {}
    });
  };
  handlesubmit = async () => {
    debugger
    const state = this.state;
    const body = {
      "instCode": loginUser?.[0]?.instCode ?? "",
      "firstName": loginUser?.[0]?.firstName ?? '',
      "lastName": loginUser?.[0]?.lastName ?? '',
      "emailAddress": this.state?.data?.email ?? '',
      "loginName": loginUser?.[0]?.userId ?? "",
      "mobile": this.state?.data?.phoneNo ?? "",
      "custCode": this.state?.data?.custCode ?? '',
      "clearPan": this.state?.data?.clearPan ?? "",
      "vpan": this.state?.data?.vpan ?? "",
      "panDisplay": this.state?.data?.panDisplay ?? "",
      "cardStatus": this.state?.data?.cardStatus ?? ""
    };
    await this.apiFetchEdit("api/v1/users/get/registration/registerCHPUser", body, "submit");

    // if (this.state.userID) {
    //   axios
    //     .post(
    //       `${config.api_url}api/v1/users/registration/registerCHPUser`,
    //       payload
    //     )
    //     .then((res) => {
    //       if (res.data !== this.state.userID) {
    //         return this.setState({ errdata: res?.data?.message });
    //       }
    //       this.setState({ submit: false });
    //       this.props.history.push({
    //         pathname: "/passwordSuccess",
    //         state: {
    //           userID: this.state.userID
    //         }
    //       });
    //     })
    //     .catch((err) => {
    //       console.log("registration user submit", err);
    //     });
    // }
    //if (this.validate()) {
    // if (!state.data.length > 0) {
    this.setState({
      ...state,
      open: true,
      errdata: this.state.errdata ? "Card already exist!" : "New card register successfully!"
      //errorsubmit: {
      //error: true,
      //msg: 'Please choose file'
      //}
    });
    // return;
  };

  handleClear = () => {
    this.setState({
      cardno: "",
      validthrdate: "",
      validthryear: "",
      OTPNumber: "",
      mobnumber: "",
      query: "",
      errdata: "",
      disableVal: true,
      disabled: true,
      isSend: false,
      erros: false,
      error: {}
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
    await axios
      .post(`${config.api_url}${api}`, playod)
      .then((res) => {
        const val_ = res.data;
        if (val_?.respCode === '904') {
          this.setState({
            errdata: val_?.respMsg
          })
          return
        } else if (n === "otp") {
          if (res?.data?.respCode === '901') {
            const body = {
              instCode: loginUser?.[0]?.instCode,
              clearPan: this.state.cardno ?? "",
              expiryDate: this.state.validthrdate
                ? this.state.validthrdate.value + this.state.validthryear.value : "",
              mobileNo: this.state.mobnumber ? this.state.mobnumber : "",
            };
            const api = "api/v1/users/CardVerification"
            axios
              .post(`${config.api_url}${api}`, body)
              .then((res) => {
                const valData = res.data
                if (valData?.respCode === '00') {
                  this.setState({
                    ...this.state,
                    valDatas: valData,
                    errdata: valData.message,
                    OTPNumber: valData?.otp,
                    otpId: valData?.otpId,
                    disabled: false,
                    isSend: true
                  })
                } else {
                  this.setState({
                    errdata: res?.data?.message
                  })
                }

              })
              .catch((res) => {
                this.setState({ errdata: res.message })
              })
          } else {
            this.setState({
              errdata: res?.data?.respMsg
            })
            return
          }
          // this.Otp(", body);
        } else if (n === "resendotp") {
          this.setState({
            query: false,
            errdata: false,
            disabled: false,
            OTPNumber: res.data?.otp,
            otpId: res.data?.otpId,
            disableVal: true,
            erros: false,
            reSend: true
          })
        }
        else if (n === "validate") {
          debugger
          if (res.data === "00") {
            this.setState({ query: "success", errdata: false, disableVal: false, erros: false });
          } else {
            this.setState({ errdata: false, erros: true, query: false, reSend: false });
          }
          const state = this.state;
          const body = {
            instCode: loginUser?.[0]?.instCode,
            clearPan: state.cardno ?? "",
            expiryDate: state.validthrdate
              ? state.validthrdate.value + state.validthryear.value
              : "",
            mobileNo: state.mobnumber?.slice(6) ?? '',
          }
          const api = "api/v1/users/registration/verifyCardDetailsForRegistration"
          axios
            .post(`${config.api_url}${api}`, body)
            .then((res) => {
              const valData = res.data.cardVerifyResp
              this.setState({
                ...this.state,
                data: valData
              })
            })
            .catch((res) => { })
        } else if (n === "submit") {
          this.setState({ ...this.state, resCode: res?.data });
          this.props.history.push({
            pathname: "/passwordSuccess",
            state: {
              isCard: true
            }
          });
        }
      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
  };
  Otp = async (api, playod) => {
    await axios
      .post(`${config.api_url}${api}`, playod)
      .then((res) => {
        this.setState({
          OTPNumber: res.data?.otp,
          otpId: res.data?.otpId

        });
      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
  };


  validate = (n) => {
    var valerrlist;

    if (n === "otp") {
      valerrlist = ["cardno", "validthrdate", "validthryear", "mobnumber"];
    } else if (n === "validate") {
      valerrlist = ["OTPNumber"];
    } else if (n === "resendotp") {
      valerrlist = ["OTPNumber"];
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
    const state = this.state;
    const body = {
      instCode: loginUser?.[0]?.instCode,
      clearPan: this.state.cardno ?? "",
      expiryDate: state.validthrdate
        ? state.validthrdate.value + state.validthryear.value
        : "",
      mobileNo: this.state.mobnumber ? this.state.mobnumber : "",
    };
    await this.apiFetchEdit("api/v1/users/CardVerification", body, n);
    // await this.apiFetchEdit("api/v1/otp/generate", body, "resendotp");
  };

  cardvalidate = async () => {
    const state = this.state;
    const bodys = {
      instCode: loginUser?.[0]?.instCode,
      clearPan: this.state.cardno ?? "",
      expiryDate: state.validthrdate
        ? state.validthrdate.value + state.validthryear.value
        : "",
      mobileNo: this.state.mobnumber ? this.state.mobnumber : "",
    };
    const api = "api/v1/users/CardVerification"
    await axios
      .post(`${config.api_url}${api}`, bodys)
      .then((res) => {
        const valData = res.data
        if (valData?.respCode === "00") {
          this.setState({
            ...this.state,
            OTPNumber: valData?.otp,
            isSend: true,
            disabled: false,
            valData_: valData,
          })
        } else {
          this.setState({
            // ...this.state,
            errdata: valData?.message
            // valData_: valData,
          })
        }
      })
      .catch((res) => {
        this.setState({ errdata: res?.error.message })
      })
  }
  handleOtp = async (n) => {
    debugger
    var arr = [];
    if (this.validate(n)) {
      await this.cardvalidate();
      const state = this.state;
      // const body = {
      //   flag: "s",
      //   instCode: loginUser?.[0]?.instCode ?? "",
      //   reqMsgId: "",
      //   // "clearPan": state.cardno ? state.cardno : "",
      //   // expDate: state.validthrdate
      //   // ? state.validthrdate.value + state.validthryear.value
      //   // : "",
      //   // // "instCode": state.validthryear?.label ?? '',
      //   // "mobileNo": state.mobnumber?.slice(6) ?? '',
      //   verifyCvvReq: [
      //     {
      //       cvv2: "",
      //       expDate: state.validthrdate
      //         ? state.validthrdate.value + state.validthryear.value
      //         : "",
      //       pan: "",
      //       reqId: "",
      //       vpan: state.valData_?.cardVerifyResp?.vpan ? state.valData_?.cardVerifyResp?.vpan : "",
      //     },
      //   ],
      // };

      // await this.apiFetchEdit("api/v1/verify/cvv", body, n);
    }
  };

  handleformsubmit = () => {
    this.handleClose();
    this.props.history.push("/changepassword");
  };

  handleOtpvalidate = async (n) => {
    debugger
    const state = this.state;
    if (this.validate(n)) {
      const body = {
        channelId: "SMS",
        code: "",
        customerId: "",
        clearPan: state.cardno ? state.cardno : "",
        // expDate: state.validthrdate
        //   ? state.validthrdate.value + state.validthryear.value
        //   : "",
        // "instCode": state.validthryear?.label ?? '',
        // mobileNo: state.mobnumber?.slice(6) ?? '',
        institutionId: loginUser?.[0]?.instCode ?? "",
        // cardno: "",
        mobileNumber: state.mobnumber ? state.mobnumber : "",
        // otac: "",
        otp: state.OTPNumber ? state.OTPNumber : "",
        otpId: state?.otpId ? state?.otpId : state?.valData_?.otpId,
        refId: "",
        referenceNumber: "",
      };

      await this.apiFetchEdit("api/v1/otp/validate", body, n);
      // await this.apiFetchEdit("api/v1/users/registration/verifyCardDetailsForRegistration", body);
      // if (this.state?.resCode === "00") {
      //   this.setState({ query: "success" });
      // } else {
      //   this.setState({ query: "progress" });
      // }
    }
  };

  render() {
    const { classes } = this.props;
    const {
      cardno,
      query,
      validthrdate,
      error,
      validthryear,
      OTPNumber,
      disabled,
      errdata,
      errdataval,
      disableVal,
      mobnumber,
    } = this.state;
    const { usertype } = this.state;

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
                Register your new card
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
                      <Grid item container sm={6}>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography
                            variant="subtitle2"
                            className={classes.text_title}
                          >
                            Valid Thru
                          </Typography>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Autocomplete
                              fullWidth={false}
                              size="small"
                              value={validthrdate}
                              style={{ width: "90%" }}
                              name="validthrou"
                              options={[
                                { value: "01" },
                                { value: "02" },
                                { value: "03" },
                                { value: "04" },
                                { value: "05" },
                                { value: "06" },
                                { value: "07" },
                                { value: "08" },
                                { value: "09" },
                                { value: "10" },
                                { value: "11" },
                                { value: "12" },
                              ]}
                              getOptionLabel={(option) => option.value}
                              onChange={(e, v) =>
                                this.handleChange("validthrdate", v)
                              }
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  helperText={
                                    error?.validthrdate && "Please choose date"
                                  }
                                  error={error?.validthrdate}
                                  variant="outlined"
                                  placeholder="08"
                                  className={classes.TextField}
                                />
                              )}
                            />
                          </div>
                        </Grid>
                      </Grid>

                      <Grid item container xs={12} sm={6}>
                        <Autocomplete
                          fullWidth={false}
                          size="small"
                          style={{ width: "100%", marginTop: "32px" }}
                          value={validthryear}
                          name="validyear"
                          options={[
                            { value: "21" },
                            { value: "22" },
                            { value: "23" },
                            { value: "24" },
                            { value: "25" },
                          ]}
                          getOptionLabel={(option) => option.value}
                          onChange={(e, v) =>
                            this.handleChange("validthryear", v)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              helperText={
                                error?.validthryear && "Please Choose year"
                              }
                              error={error?.validthryear}
                              variant="outlined"
                              placeholder="22"
                              className={classes.TextField}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>

                    <Grid item container xs={12} sm={6} spacing={2}>
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
                          placeholder=""
                          // disabled
                          style={{ width: "95%" }}
                          inputProps={{
                            maxLength: 10
                          }}
                          helperText={error.mobnumber && "Please enter your mobile number"}
                          error={error.mobnumber ? true : false}
                          value={mobnumber}
                          onChange={(e) =>
                            this.handleChange("mobnumber", e.target.value)
                          }
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
                          onClick={() => this.handleOtp("otp")}
                          disabled={this.state.isSend}
                        >
                          Send OTP
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
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={10}
                        className={classes.enterOTP}
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
                        {query === "success" ?
                          <>
                            <Fab aria-label="save" size="small" color="primary">
                              <CheckIcon />
                            </Fab>OTP verfied successfully</>
                          :
                          <>
                            {this.state.erros && < Button className={classes.clear2}>{"Invaild OTP number"}</Button>}

                            {/* <div
                              style={{
                                display: 'flex',
                                justifyContent: 'start'
                              }}>
                              <ErrorOutlineOutlinedIcon />
                              <p style={{ marginTop: "0px" }}>
                                Not verify
                              </p>
                      </div> */}
                          </>
                        }
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
                      >
                        <Button
                          className={classes.clear1}
                          // disabled={disableVal}
                          disabled={disabled}
                          onClick={() => this.handleOtpvalidate("validate")}
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
                          onClick={() => this.handleOtps('resendotp')}
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
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      className={classes.btns}
                    >

                      <Grid item>
                        {errdata ? (
                          <Button className={classes.clear2}>{errdata}</Button>
                        ) : (
                          ""
                        )}
                      </Grid>
                      <Grid
                        item
                        className={classes.submitbotton}
                        style={{ textAlign: "end", marginRight: "20px" }}
                      >
                        <Button
                          variant="contained"
                          className={classes.submit1}
                          disabled={disableVal}
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
              onClick={() => this.props.history.push("/welcome")}
            >
              <KeyboardBackspaceIcon /> Back
            </Button>
          </div>
        </Container >
      </Grid >
    );
  }
}

export default withStyles(styles)(withRouter(Cardnewinfo));
