import React from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  withStyles,
  Grid,
  Divider,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Autocomplete from "@material-ui/lab/Autocomplete";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { Hidden } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";
import { EdittablesContext } from "../../../contexts/index";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import config from "../../../config";
import BreadcrumbsCom from "../../breadcrumbs/breadcrumbs";


const styles = (theme) => ({
  root: {
    background: "#F4F5F8",
  },
  card: {
    background: theme.palette.background.paper,
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: 16,
    opacity: 1,
    margin: "20px 0px",
  },
  text_title: {
    color: "#2A2A2A",
    padding: "6px 0px",
    opacity: 1,
    fontSize: 14,
    margin: "6px 0px",
  },
  card_title: {
    borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
    fontWeight: "bold",
    fontSize: 18,
    padding: "20px 0px 20px 0px",
    [theme.breakpoints.only("xs")]: {
      height: "20px",
    },
  },
  body: {
    padding: "30px 30px",
    paddingBottom: "50px",
  },

  dividers: {
    margin: "30px 6px 6px",
    width: "100%",
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
  tableedit: {
    "& .MuiPaper-root": {
      "& .MTableToolbar-root-42": {
        display: "none",
      },
    },
  },
  TextField: {
    width: "100%",
  },
  uploadlistall: {
    marginTop: 14,
    "& span": {
      paddingLeft: 20,
      fontSize: 15,
      fontWeight: 500,
    },
  },
  export: {
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #4BCD3E",
    borderRadius: 30,
    // opacity: 0.9,
    display: "flex",
    padding: "4px 16px",
    fontSize: 15,
    cursor: "pointer",
    width: 60,
    float: "right",
    [theme.breakpoints.only("xs")]: {
      marginTop: 20,
    },
  },

  input: {
    width: "100%",
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
    marginLeft: "25px",
    [theme.breakpoints.only("md")]: {
      marginTop: "18px",
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "0px",
      marginLeft: "0px",
      padding: "0px",
    },
  },
  clear: {
    boxShadow: "0px 3px 6px #0049903D",
    border: `1px solid #4BCD3E`,
    opacity: 0.9,
    fontSize: 12,
    borderRadius: 8,
    fontWeight: 600,
    marginLeft: 0,
    padding: "7px 16px",
    marginTop: "25px",
    width: "95px",
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
  clear1: {
    boxShadow: "0px 3px 6px #0049903D",
    border: `1px solid #4BCD3E`,
    opacity: 0.9,
    fontSize: 12,
    borderRadius: 8,
    fontWeight: 600,
    marginLeft: 12,
    padding: "7px 16px",
    marginTop: "45px",
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
  btns: {
    margin: "20px 0px",
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
  enterOTP1: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px !important",
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
  clear112: {
    boxShadow: "0px 3px 6px #0049903D",
    border: `1px solid #4BCD3E`,
    opacity: 0.9,
    fontSize: 12,
    borderRadius: 8,
    fontWeight: 600,
    marginLeft: 15,
    width: "130px",
    padding: "7px 16px",
    marginTop: "55px",
    [theme.breakpoints.only("xs")]: {
      width: "95px",
      marginLeft: 0,
      marginTop: "0px",
    },
  },
  hint_title2: {
    textAlign: "end",
    color: "#4BCD3E",
    marginTop: "0px",
    cursor: 'pointer',
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

  submitbotton: {
    [theme.breakpoints.only("xs")]: {
      marginRight: "0px !important",
    },
    [theme.breakpoints.only("sm")]: {
      marginRight: "0px !important",
    },
  },
  menus: {
    float: "right",
    backgroundColor: theme.palette.mainbackground.default,
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: 8,
    marginTop: 30,
    marginLeft: -17,
    position: "absolute",
    width: "100px",
    zIndex: 100,
    "& a": {
      color: "#000",
      textDecoration: "unset",
    },
  },
});

const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};
let arr = []
class SetpinStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNO: "",
      cardstatus: "",
      cardType: "",
      cardProduct: "",
      dob: null,
      cvv: "",
      validthr: "",
      validthro: "",
      newpin: "",
      renewpin: "",
      OTPNumber: "",
      mobnumber: "",
      error: {},
      disabled: true,
      disableVal: true,
      query: "",
      resCode: "",
      vpan: "",
      disableVal: true,
      pinDisabled: true,
      reSend: true,
      validthrdate: {},
      validthryear: {},
      isSent: false
    };
  }

  handleBack = () => { this.props.history.push("/setpin_table") };

  handleClear = () => {
    debugger
    this.setState({
      ...this.state,
      OTPNumber: "",
      mobile: "",
      cardNo: "",
      // cardstatus: "",
      existpin: "",
      Newpin: "",
      errdata: false,
      ReNewpin: "",
      isSent: false,
      query: false,
      // validthrdate: "",
      // validthryear: "",
      cvv: "",
      validthrdate: { value: "" },
      validthryear: { value: "" },
      resErr: "",
      errMsg: "",
      error: {}
    })
  }
  breadcrumbsdata = () => {
    const location = window.location.pathname;

    if (location === "/cardholder/newcard") {
      return [
        {
          title: "Card Information",
          url: "",
        },
        {
          title: "Register New Card",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/cardinfotable") {
      return [
        {
          title: "Card Information",
          url: "",
        },
        {
          title: "View Registered Card & Card Activation",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/balanceinfo") {
      return [
        {
          title: "Balance Information",
          url: "",
        },
        {
          title: "View Account Balance",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/Transaction_table"
    ) {
      return [
        {
          title: "Transaction History",
          url: "",
        },
        {
          title: "View Transaction Details",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/Transaction_filter"
    ) {
      return [
        {
          title: "Transaction History",
          url: "",
        },
        {
          title: "View Transaction Details",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/Transaction_filter_details"
    ) {
      return [
        {
          title: "Transaction History",
          url: "",
        },
        {
          title: "View Transaction Details",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/Manage_cardinfo_table"
    ) {
      return [
        {
          title: "Manage Card",
          url: "",
        },
        {
          title: "Card Status",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/card_status") {
      return [
        {
          title: "Manage Card",
          url: "",
        },
        {
          title: "Card Status",
          url: "/Manage_cardinfo_table",
        },
        {
          title: "Card Details",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/channel_enablement"
    ) {
      return [
        {
          title: "Manage Card",
          url: "",
        },

        {
          title:
            "Channel Enablement & Limit Management (Domestic And International)",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/limit_Management"
    ) {
      return [
        {
          title: "Manage Card",
          url: "",
        },

        {
          title:
            "Channel Enablement & Limit Management (Domestic And International)",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/setpin_table") {
      return [
        {
          title: "Pin Management",
          url: "",
        },

        {
          title: "Select Card Details",
          url: "",
          active: true,
        },
      ];
    }
    // else if (location === "/cardholder/setpin_status") {
    //   return [
    //     {
    //       title: "Pin Management",
    //       url: "",
    //     },

    //     {
    //       title: "Select Card Details",
    //       url: "/setpin_table",
    //     },
    //     {
    //       title: "Set Pin",
    //       url: "",
    //       active: true,
    //     },
    //   ];
    // } else if (location === "/cardholder/changepin_table") {
    //   return [
    //     {
    //       title: "Pin Management",
    //       url: "",
    //     },

    //     {
    //       title: "Select Card Details",
    //       url: "",
    //       active: true,
    //     },
    //   ];
    // }
    else if (
      location === "/cardholder/changepin_status"
    ) {
      return [
        {
          title: "Pin Management",
          url: "",
        },

        {
          title: "Select Card Details",
          url: "/changepin_table",
        },
        {
          title: "Change Pin",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/forgot_pin") {
      return [
        {
          title: "Pin Management",
          url: "",
        },

        {
          title: "Select Card Details",
          url: "/changepin_table",
        },
        {
          title: "Change Pin",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/home") {
      return [
        {
          title: "View Profile",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/edit_profile") {
      return [
        {
          title: "View Profile",
          url: "/home",
        },
        {
          title: "Modify Profile",
          url: "",
          active: true,
        },
      ];
    }
  };

  apiFetchEdit = async (api, playod, n) => {
    debugger
    await axios
      .post(`${config.api_url}${api}`, playod)
      .then((res) => {
        if (n === "otp") {
          this.setState({
            disabled: false,
            OTPNumber: res.data?.otp,
            otpId: res.data?.otpId,
            isSent: true
          });
        } else if (n === 'cvv') {
          if (res.data?.verifyCvvRes?.verifyCvvResp?.[0]?.respCode === "00") {
            this.setState({
              pinDisabled: false
            });
          } else {
            this.setState({
              resErr: res.data?.respMsg
            });
            return
          }
        } else if (n === "resend") {
          this.setState({
            errdata: false,
            disabled: false,
            OTPNumber: res.data?.otp,
            otpId: res.data?.otpId,
            query: false,
            disableVal: true,
            reSend: true,
          });
        } else if (n === "validate") {
          if (res.data === "01" || this.state.errdata) {
            this.setState({ errdata: true, disableVal: true, reSend: false })
          } else {
            this.setState({ errdata: false, query: "success", disableVal: false })
          }
        } else if (n === "submit") {
          debugger
          if (res.data.respCode === "00") {
            this.props.history.push("/success");
          } else {
            this.setState({
              resErr: res.data.respMsg,
              query: false
            });
            return
          }
        }
      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
  };

  validate = () => {
    const valerrlist = ["cardNO", "cvv", "validthryear", "validthrdate"];
    const errMsg = {
      "cardNO": 'Please enter your 16 digits card number'
    }
    const error = {};
    let isValidate = true;
    valerrlist.map((val) => {
      if (!this.state[val]) {
        error[val] = errMsg[val] ? errMsg[val] : true;
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

  handleCvv = async (n) => {
    debugger
    const state = this.state;
    const val = this.context.setPin;
    var card = state.cardNO?.slice(12);
    var subcard = val?.cardNo?.slice(12);
    if (this.validate()) {
      const instCode = localStorage.getItem("CH_instCode");
      if (card !== subcard) {
        if (card?.length < 4) {
          state.error.cardNO = "Please enter your 16 digits card number"
          this.setState({ ...state })
          return
        }
        state.error.cardNO = "The card number is mismatched"
        this.setState({ ...state })
        return
      } else {
        const body = {
          flag: "s",
          instCode: loginUser?.[0]?.instCode ?? "",
          reqMsgId: "",
          verifyCvvReq: [
            {
              cvv2: state.cvv ? state.cvv : '',
              // state.cvv ? state.cvv :
              expDate: state.validthrdate
                ? state.validthryear.value?.slice(2) + state.validthrdate.value
                : "",
              pan: "",
              reqId: "",
              // vpan: val?.cardNo,
              vpan: state?.vpan
            },
          ],
        }
        await this.apiFetchEdit("api/v1/verify/cvv", body, n);
      }
    }
  };
  getprod = async () => {
    debugger
    const val = this.context.setPin;

    await axios.post(`https://iasuat.fisglobal.com/bbo/api/v1/getProductDetails`, {
      "instCode": loginUser?.[0]?.instCode ?? "",
      "flag": "S"
    })
      // if (v?.points1 === "1") {
      // const val = res_?.filter(l => (l?.productCode === val?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardProduct) && arr?.push("Prepaid"))

      // }
      .then(res => {
        // if (this.checPread()) {
        const rese = res?.data;
        const res__ = rese?.productDetailsRes?.productDetailsResp?.filter(v => {
          if (v?.points1 === "1") {
            const res_ = rese?.productDetailsRes?.productDetailsResp?.filter(l =>
              (l?.productCode === val?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardProduct) && arr?.push("Prepaid"))
          } else {
            const res_ = rese?.productDetailsRes?.productDetailsResp?.filter(l =>
              (l?.productCode === val?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardProduct) && arr?.push("Debit"))
          }
        })

      });
  }
  componentDidMount = async () => {
    debugger;
    await this.getprod();
    const val = this.context.setPin?.customerEnquiryRes?.custDetailsResp?.[0];
    this.setState({
      // cardNO: this.context.setPin?.cardNo || val?.cardNO,
      cardstatus: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardStatus,
      cardType: arr?.[0],
      cardProduct: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardProduct,
      mobnumber: val?.mobNo,
      vpan: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan ?? ""
    });
  };

  handlesubmit = async (n) => {
    debugger
    // if (this.validate()) {
    const state = this.state;
    const val_ = this.context.setPin?.customerEnquiryRes?.custDetailsResp?.[0];
    const val = this.context.setPin;
    const instCode = localStorage.getItem("CH_instCode");
    if (state.newpin?.length < 4 && state.renewpin?.length < 4) {
      state.error.newpin = "Please enter the four digits"
      state.error.renewpin = "Please enter the four digits"
      this.setState({ ...state })
      return
    }
    if (state.newpin !== state.renewpin) {
      state.error.renewpin = "The New pin is mismatched with Re-Enter newpin"
      this.setState({ ...state })
      return
    } else {
      const body = {
        encryptedPin: this.state.newpin ?? "",
        instCode: loginUser?.[0]?.instCode ?? "",
        keyRef: "LOCAL",
        // keyType: "",
        pan: state.cardNO ?? "",
        pinBlockFormat: "1",
         pinSetType: "1",
        // reqId: "",
        seqNo: "0",
        // terminalId: "",
        // tmkUlmk: "",
        // tpkUlmk: "",
        vpan: val_?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan ?? "",
        // val?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan
      };
      await this.apiFetchEdit("api/v1/setpin", body, n);
      // }
    }
  };
  handleOtp = async (n) => {
    debugger
    const body = {
      cardNumber: "",
      cbsCardNum: "",
      cbsErrorMsg: "",
      cbsMobNum: "",
      channelId: "",
      code: "",
      institutionId: "",
      mobileNumber: "",
      otac: "",
      otp: "",
      otpId: "",
    };
    await this.apiFetchEdit("api/v1/otp/generate", body, n);
    // await this.apiFetchEdit("api/v1/otp/generate", body, "resendotp");
  };
  handleOtpvalidate = async () => {
    debugger
    const state = this.state;
    if (this.validate()) {
      const body = {
        cardNumber: state.vpan ? state.vpan : "",
        channelId: "",
        code: "",
        customerId: "",
        institutionId: "",
        mobileNumber: state.mobnumber ? state.mobnumber : "",
        otac: "",
        otp: state.OTPNumber ? state.OTPNumber : "",
        otpId: state.otpId ? state.otpId : "",
        // otpId: "",
        refId: "",
        referenceNumber: "",
      };

      await this.apiFetchEdit("api/v1/otp/validate", body, "validate");
      if (this.state?.resCode !== "00") {
        this.setState({ query: "success", disableVal: false });
      } else {
        this.setState({ query: "progress" });
      }
    }
  };
  handledata = () => { };
  handlechange = (n, v) => {
    debugger;
    const state = this.state;
    state.error[n] = false;
    this.setState({
      ...state,
      [n]: v,
    });
  };
  handleDownload = () => {
    const state = this.state;
    this.setState({
      ...state,
      download: !state.download,
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
  render() {
    const { classes } = this.props;
    const { query, error, disableVal, pinDisabled, reSend, isSent } = this.state;

    return (
      <div className={classes.root}>
        <Container>
          <BreadcrumbsCom data={this.breadcrumbsdata()} />
          <Card className={classes.card}>
            <Container>
              <div className={classes.body}>
                <CardContent className={classes.card_title}>
                  Card Details
                </CardContent>
                <Grid container spacing={4} style={{ marginTop: "20px" }}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Card Number
                    </Typography>
                    <TextField
                      value={this.state.cardNO}
                      name="cardNO"
                      size="small"
                      // disabled
                      onChange={(e) =>
                        this.handlechange("cardNO", e.target.value)
                      }
                      helperText={error?.cardNO}
                      error={error?.cardNO ? true : false}
                      variant="outlined"
                      placeholder=" "
                      className={classes.TextField}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Card Status
                    </Typography>
                    <TextField
                      value={this.state.cardstatus}
                      name="CardStatus"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("cardstatus", e.target.value)
                      }
                      variant="outlined"
                      placeholder=""
                      className={classes.TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Card Type
                    </Typography>
                    <TextField
                      value={this.state.cardType}
                      name="cardType"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("cardType", e.target.value)
                      }
                      variant="outlined"
                      placeholder=""
                      className={classes.TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Card Product
                    </Typography>
                    <TextField
                      value={this.state.cardProduct}
                      name="cardProduct"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("cardProduct", e.target.value)
                      }
                      variant="outlined"
                      placeholder=" "
                      className={classes.TextField}
                    />
                  </Grid>
                </Grid>

                <div>
                  <Divider className={classes.dividers} />
                  <CardContent className={classes.card_title}>
                    Set New PIN
                  </CardContent>
                  <Grid container spacing={4} style={{ marginTop: "20px" }}>
                    <Grid item xs={12} sm={6}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Typography
                          variant="subtitle2"
                          className={classes.text_title}
                        >
                          Date of Birth
                        </Typography>
                        <KeyboardDatePicker
                          style={{ width: "100%", margin: 0 }}
                          inputVariant="outlined"
                          margin="normal"
                          format="MM/dd/yyyy"
                          // disabled={checkerDisabled ? true : false}
                          // value={dob}
                          name="dob"
                          maxDate={new Date()}
                          onChange={(e) => this.handlechange("dob", e)}
                          placeholder="Date of Birth"
                          onKeyPress={(e) => this.dateval(e)}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                          size="small"
                          value={this.state.dob}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Enter CVV
                      </Typography>
                      <TextField
                        value={this.state.cvv}
                        name="cvv"
                        size="small"
                        onKeyPress={(e) => {
                          this.txtFieldChange(e);
                        }}
                        helperText={error?.cvv && "Please enter your Cvv"}
                        error={error?.cvv && true}
                        onChange={(e) =>
                          this.handlechange("cvv", e.target.value)
                        }
                        variant="outlined"
                        placeholder=" "
                        className={classes.TextField}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} style={{ marginTop: "30px" }}>
                    <Grid
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
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
                          item
                          container
                          sm={6}
                          style={{ marginLeft: "8px" }}
                        >
                          <Grid item xs={12} sm={12} md={12}>
                            <Typography
                              variant="subtitle2"
                              className={classes.text_title}
                            >
                              Expiration Date
                            </Typography>
                          </Grid>
                          <Autocomplete
                            fullWidth={false}
                            size="small"
                            style={{
                              width: "90%",
                              position: "relative",
                              marginBottom: "0px",
                              marginTop: "10px",
                            }}
                            value={this.state.validthrdate ?? ""}
                            name="validthrou"
                            options={[{ value: "01", }, { value: "02" }, { value: "03" }, { value: "04" }, { value: "05" }, { value: "06" },
                            { value: "07" }, { value: "08" }, { value: "09" }, { value: "10" }, { value: "11" }, { value: "12" }]}
                            getOptionLabel={(option) => option.value}
                            onChange={(e, v) =>
                              this.handlechange("validthrdate", v)
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                // helperText={
                                //   props.error?.mCountry &&
                                //   "Please enter your country Code"
                                // }
                                // error={props.error?.mCountry}
                                variant="outlined"
                                placeholder="month  "
                                className={classes.TextField}
                              />
                            )}
                          />
                        </Grid>

                        <Grid item container xs={12} sm={6}>
                          <Autocomplete
                            fullWidth={false}
                            size="small"
                            style={{ width: "95%", marginTop: "55px" }}
                            value={this.state.validthryear}
                            name="year"
                            options={[{ value: "2021" }, { value: "2022" }, { value: "2023" }, { value: "2024" }, { value: "2025" }]}
                            getOptionLabel={(option) => option.value}
                            onChange={(e, v) =>
                              this.handlechange("validthryear", v)
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                // helperText={
                                //   props.error?.mCountry &&
                                //   "Please enter your country Code"
                                // }
                                // error={props.error?.mCountry}
                                variant="outlined"
                                placeholder="year"
                                className={classes.TextField}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Button
                          className={classes.clear112}
                          onClick={() => this.handleCvv('cvv')}
                        >
                          VALIDATE
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>

                <Grid container spacing={4} style={{ marginTop: "30px" }}>
                  <Grid container spacing={4} style={{ marginTop: "0px" }}>
                    <Grid item xs={12} sm={6} style={{ paddingLeft: "33px" }}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Enter New PIN
                      </Typography>
                      <TextField
                        value={this.state.newpin}
                        name="newpin"
                        size="small"
                        style={{ width: "100%" }}
                        onKeyPress={(e) => {
                          this.txtFieldChange(e);
                        }}
                        type="password"
                        helperText={
                          this.state.error.newpin
                        }
                        inputProps={{
                          maxLength: 4
                        }}
                        onChange={(e) =>
                          this.handlechange("newpin", e.target.value)
                        }
                        error={
                          this.state.error.newpin ? true : false
                        }
                        disabled={pinDisabled}
                        variant="outlined"
                        placeholder=" "
                        className={classes.TextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Re-Enter New PIN
                      </Typography>
                      <TextField
                        value={this.state.renewpin}
                        name="renewpin"
                        size="small"
                        style={{ width: "95%" }}
                        onKeyPress={(e) => {
                          this.txtFieldChange(e);
                        }}
                        helperText={
                          this.state.error.renewpin
                        }
                        type="password"
                        inputProps={{
                          maxLength: 4
                        }}
                        disabled={pinDisabled}
                        onChange={(e) =>
                          this.handlechange("renewpin", e.target.value)
                        }
                        error={
                          this.state.error.renewpin ? true : false
                        }
                        variant="outlined"
                        placeholder=" "
                        className={classes.TextField}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    sm={6}
                    spacing={4}
                    style={{ marginTop: "30px" }}
                  >
                    <Grid item xs={12} sm={12} md={7} lg={10}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Mobile number
                      </Typography>
                      <TextField
                        value={this.state.mobnumber}
                        size="small"
                        variant="outlined"
                        placeholder=""
                        disabled
                        //   value={usertype}
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
                        onClick={() => this.handleOtp("otp")}
                        disabled={isSent}
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
                      lg={9}
                      className={classes.enterOTP}
                      style={{ marginTop: "48px" }}
                    >
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Enter OTP Number
                      </Typography>
                      <TextField
                        className={classes.otp}
                        size="small"
                        variant="outlined"
                        style={{ width: "100%" }}
                        inputProps={{
                          maxLength: 6,
                        }}
                        placeholder="  OTP Number"
                        onKeyPress={(e) => {
                          this.txtFieldChange(e);
                        }}
                        helperText={error?.OTPNumber && "Please enter otp"}
                        error={error?.OTPNumber && true}
                        onChange={(e) => {
                          this.handlechange("OTPNumber", e.target.value);
                        }}
                        value={this.state.OTPNumber}
                      />
                      {this.state.errdata ? <Button
                        size='small'
                        style={{
                          marginTop: "10px",
                          backgroundColor: "green",
                          color: "white"
                        }}
                      >Invaild OTP number</Button> : "" || query === "success" ? (
                        <>
                          <Fab aria-label="save" size="small" color="primary">
                            <CheckIcon />
                          </Fab>
                          OTP verfied successfully!
                        </>
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

                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={3}
                      className={classes.enterOTP1}
                      style={{ marginTop: "48px" }}
                    >
                      <Button
                        disabled={this.state.disabled}
                        className={classes.clear1}
                        onClick={() => this.handleOtpvalidate()}
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
                        onClick={() => this.handleOtp("resend")}
                        // variant="subtitle2"
                        className={classes.hint_title2}
                        variant='text'
                        disabled={reSend}
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
                    alignItems="end"
                    className={classes.btns}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      className={classes.submitbotton}
                      style={{ textAlign: "end", marginRight: "190px" }}
                    >
                      <Button
                        variant="contained"
                        disabled={this.state.disableVal}
                        className={classes.submit1}
                        onClick={() => this.handlesubmit('submit')}
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
                    {this.state.resErr ? <Button
                      size='small'
                      style={{
                        marginTop: "10px",
                        backgroundColor: "green",
                        color: "white"
                      }}
                    >{this.state.resErr}</Button> : ''}
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Card>
          <div style={{ float: "right" }}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.btn}
              onClick={() => this.handleBack()}
            >
              <KeyboardBackspaceIcon /> Back
            </Button>
          </div>
        </Container >
      </div >
    );
  }
}
SetpinStatus.contextType = EdittablesContext;
export default withStyles(styles)(withRouter(SetpinStatus));
