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

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { Hidden } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import axios from "axios";
import config from "../../../config";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";

import CircularProgress from "@material-ui/core/CircularProgress";
import { EdittablesContext } from "../../../contexts/index";
const styles = (theme) => ({
  root: {
    background: theme.palette.mainbackground.default,
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
    marginTop: "30px",
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
  text_title1: {
    padding: "0px 0px 4px 0px",
    opacity: 0.9,
    color: "#4BCD3E",
    width: "90px",
  },
  otpbox: {
    marginLeft: "18px",
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
    marginTop: "26px",
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
  hint_title2: {
    textAlign: "end",
    color: "#4BCD3E",
    marginTop: "0px",
    cursor: 'pointer',
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginTop: "0px !important",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: 'white'
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
let arr = [];
class ChangepinStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNo: "",
      cardstatus: "",
      cardType: "",
      CardProduct: "",
      existpin: "",
      Newpin: "",
      ReNewpin: "",
      OTPNumber: "",
      mobnumber: "",
      disabled: true,
      query: "",
      disableVal: true,
      resCode: "",
      vpan: "",
      error: {},
      reSend: true
    };
  }
  handledata = () => {
    debugger;
    this.context.setData({
      ...this.context,
      forgotpin: this.context.changepin,
    });
    this.props.history.push("/forgot_pin");
  };

  handleClear = () => {
    this.setState({
      OTPNumber: "",
      mobile: "",
      cardNo: "",
      // cardstatus: "",
      existpin: "",
      Newpin: "",
      ReNewpin: "",
      errdata: false,
      isSend: false,
      query: false,
      error: {},
      errMsg: ""
    })
  }

  handleBack = () => { this.props.history.push("/changepin_table") };

  handlechange = (n, v) => {
    const state = this.state;
    state.error[n] = false;
    this.setState({
      ...state,
      [n]: v,
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
        if (n === "otp") {
          this.setState({
            disabled: false,
            OTPNumber: res.data?.otp,
            otpId: res.data?.otpId,
            isSend: true
          });
        } else if (n === "resend") {
          this.setState({
            errdata: false,
            disabled: false,
            OTPNumber: res.data?.otp,
            otpId: res.data?.otpId,
            query: false,
            disableVal: true,
            reSend: true
          });
        } else if (n === "validate") {
          if (res.data === "01" || this.state.errdata) {
            this.setState({ errdata: true, disableVal: true, reSend: false })
          } else {
            this.setState({ errdata: false, query: "success", disableVal: false, reSend: true })
          }
        } else if (n === "submit") {
          if (res.data.respCode === "000") {
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
    const valerrlist = ["cardNo"]
    const errMsg = {
      "cardNo": 'Please enter your 16 digits card number'
    }
    const error = {};
    let isValidate = true;
    valerrlist.map((val) => {
      if (!this.state[val]) {
        error[val] = errMsg[val];
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

  handlesubmit = async () => {
    debugger
    const state = this.state;
    const instCode = localStorage.getItem("CH_instCode");
    const val = this.context.changepin;
    var card = state.cardNo?.slice(12);
    var subcard = val?.cardNo?.slice(12);
    if (this.validate()) {
      if (card !== subcard) {
        if (card?.length < 4) {
          state.error.cardNo = "Please enter your 16 digits card number"
          this.setState({ ...state })
          return
        }
        state.error.cardNo = "The card number is mismatched"
        this.setState({ ...state })
        return
      } else {
        const body = {
          afe: "",
          expDate: "",
          instCode: loginUser?.[0]?.instCode ?? "",
          keyReferenceCode: "LOCAL",
          localDate: "",
          newPinBlock: state.ReNewpin ? state.ReNewpin : "",
          oldPinBlock: state.existpin ? state.existpin : "",
          pan: state?.cardNo,
          pinBlockFormat: "1",
          reqId: "",
          termSeq: "",
        };
        await this.apiFetchEdit("api/v1/pin/change", body, "submit");
      }
    }
  };

  handleOtp = async (n) => {
    const body = {
      // cardNumber: {
      //   length: 0,
      // },
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
  };
  handleOtpvalidate = async () => {
    const state = this.state;
    if (this.validate()) {
      if (state.cardNo === "") {
        state.error.cardNo = "Please enter your 16 digits card number"
        this.setState({ ...state })
        return
      } else {
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
          refId: "",
          referenceNumber: "",
        };

        await this.apiFetchEdit("api/v1/otp/validate", body, "validate");
      }
      if (this.state?.resCode !== "00") {
        this.setState({ query: "success" });
      } else {
        this.setState({ query: "progress" });
      }
    }
  };
  getprod = async () => {
    debugger
    const val = this.context.changepin;

    await axios.post(`https://iasuat.fisglobal.com/bbo/api/v1/getProductDetails`, {
      "instCode": "ERUT",
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
    await this.getprod()
    const val = this.context.changepin?.customerEnquiryRes?.custDetailsResp?.[0];
    this.setState({
      // cardNo: this.context.changepin?.cardNo || val?.cardNo,
      cardstatus: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardStatus || val?.cardStatus,
      cardType: arr?.[0],
      CardProduct: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardProduct,
      mobnumber: val?.mobNo,
      vpan: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan ?? ""
    });
  };

  handleDownload = () => {
    const state = this.state;
    this.setState({
      ...state,
      download: !state.download,
    });
  };

  render() {
    const { classes } = this.props;
    const { query, error, reSend } = this.state;
    return (
      <div className={classes.root}>
        <Container>
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
                      value={this.state.cardNo}
                      name="cardNo"
                      size="small"
                      // disabled
                      onChange={(e) =>
                        this.handlechange("cardNo", e.target.value)
                      }
                      inputProps={{
                        maxLength: 16
                      }}
                      helperText={error?.cardNo}
                      error={error?.cardNo ? true : false}
                      variant="outlined"
                      placeholder="cardNo"
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
                      name="cardNo"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("cardNO", e.target.value)
                      }
                      variant="outlined"
                      placeholder="Card Status"
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
                      placeholder="CardType"
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
                      value={this.state.CardProduct}
                      name="cardProduct"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("cardproduct", e.target.value)
                      }
                      variant="outlined"
                      placeholder="Card Product"
                      className={classes.TextField}
                    />
                  </Grid>
                </Grid>

                <div>
                  <Divider className={classes.dividers} />
                  <CardContent className={classes.card_title}>
                    Reset PIN
                  </CardContent>

                  <Grid
                    container
                    spacing={4}
                    style={{ marginTop: "30px", display: "flex" }}
                  >
                    <Grid
                      container
                      spacing={4}
                      style={{ marginTop: "0px", display: "flex" }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{
                          paddingLeft: "33px",
                          position: "relative",
                          marginTop: "-30px",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          className={classes.text_title}
                        >
                          Enter Existing PIN
                        </Typography>
                        <TextField
                          value={this.state.existpin}
                          name="existpin"
                          size="small"
                          style={{ width: "100%" }}
                          onKeyPress={(e) => {
                            this.txtFieldChange(e);
                          }}
                          onChange={(e) =>
                            this.handlechange("existpin", e.target.value)
                          }
                          inputProps={{
                            maxLength: 4
                          }}
                          type="password"
                          variant="outlined"
                          placeholder=" "
                          className={classes.TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} style={{ paddingLeft: "20px" }}>
                        <Typography
                          variant="subtitle2"
                          className={classes.text_title}
                          style={{ display: "flex", marginTop: "15px" }}
                        >
                          Don't Remember Existing PIN? &nbsp;&nbsp;&nbsp;
                          <Typography
                            style={{ cursor: "pointer" }}
                            onClick={() => this.handledata()}
                            className={classes.text_title1}
                          >
                            Click here
                          </Typography>
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={6} style={{ paddingLeft: "33px" }}>
                        <Typography
                          variant="subtitle2"
                          className={classes.text_title}
                        >
                          Enter New PIN
                        </Typography>
                        <TextField
                          value={this.state.Newpin}
                          name="Newpin"
                          size="small"
                          style={{ width: "100%" }}
                          onKeyPress={(e) => {
                            this.txtFieldChange(e);
                          }}
                          onChange={(e) =>
                            this.handlechange("Newpin", e.target.value)
                          }
                          inputProps={{
                            maxLength: 4
                          }}
                          type="password"
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
                          Re-Enter New PIN
                        </Typography>
                        <TextField
                          value={this.state.ReNewpin}
                          name="ReNewpin"
                          size="small"
                          style={{ width: "97%" }}
                          onKeyPress={(e) => {
                            this.txtFieldChange(e);
                          }}
                          onChange={(e) =>
                            this.handlechange("ReNewpin", e.target.value)
                          }
                          inputProps={{
                            maxLength: 4
                          }}
                          type="password"
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
                      spacing={2}
                      style={{ display: "flex" }}
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
                          disabled
                          placeholder=""
                          value={this.state.mobnumber}
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
                        lg={9}
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
                          style={{ width: "100%" }}
                          placeholder="OTP Number"
                          className={classes.input}
                          onKeyPress={(e) => {
                            this.txtFieldChange(e);
                          }}
                          helperText={error?.OTPNumber && "Please enter otp"}
                          error={error?.OTPNumber && true}
                          onChange={(e) => {
                            this.handlechange("OTPNumber", e.target.value);
                          }}
                          inputProps={{
                            maxLength: 6
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
        </Container>
      </div>
    );
  }
}
ChangepinStatus.contextType = EdittablesContext;
export default withStyles(styles)(withRouter(ChangepinStatus));
