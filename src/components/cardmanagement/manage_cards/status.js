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
import Autocomplete from "@material-ui/lab/Autocomplete";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CheckboxLabels from "../../checkbox/index";
import { Hidden } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import axios from "axios";
import config from "../../../config";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";
import { EdittablesContext } from "../../../contexts/index";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  star: {
    color: theme.palette.error.main,
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
    marginLeft: "15px",
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
    marginLeft: 12,
    padding: "7px 16px",
    marginTop: "26px",
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

var reasons = {
  STOLEN: {
    actions: ["block"],
  },
  LOST: {
    actions: ["block"],
  },
  DAMAGED: {
    actions: ["block"],
  },
  // TEMPBLOCK: {
  //   actions: ["block"],
  // },
};
const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};
let arr = [];

class Managecardstatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temporary_block: false,
      cardNO: "",
      cardstatus: "",
      cardType: "",
      cardProd: "",
      cardSelect: "",
      resonSel: "",
      reson: "",
      OTPNumber: "",
      validate: ["OTPNumber"],
      error: {},
      mobnumber: "",
      query: "",
      disabled: true,
      disableVal: true,
      reSend: true,
      resons: "",
      isErr: false
    };
  }
  getprod = async () => {
    debugger
    const val = this.context.cardstatus;

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

    await this.getprod();

    const val = this.context.cardstatus;
    this.setState({
      cardNO: val?.cardNo,
      cardstatus: val?.cardStatus,
      cardType: arr?.[0],
      cardProd: val?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardProduct || val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardProduct,
      mobnumber: val?.customerEnquiryRes?.custDetailsResp[0]?.mobNo || val?.mobNo,
      accNo: val?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.accNo
    });
  };

  handleBlock = () => {
    debugger;
    const val = this.context.cardstatus;
    if (val?.cardStatus === "06") {
      this.setState({
        ...this.state,
        temporary_block: !this.state.temporary_block,
      });
    } else {
      this.setState({
        ...this.state,
        temporary_block: !this.state.temporary_block,
      });
    }

  };

  handleBack = () => {
    this.props.history.push("/Manage_cardinfo_table")
  };

  validate = () => {
    const val = this.context.cardstatus;
    var valerrlist;
    if (val?.cardStatus === "06" ? false : !this.state.temporary_block) {
      valerrlist = ["reson"];
    } else {
      valerrlist = ["OTPNumber", this.state?.cardSelect ? "" : "resons"];
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

  apiFetchEdit = async (api, playod, n) => {
    debugger
    await axios
      .post(`${config.api_url}${api}`, playod)
      .then((res) => {
        if (n === "otp") {
          debugger
          this.setState({
            disabled: false,
            OTPNumber: res.data?.otp,
            otpId: res.data?.otpId,
            isSent: true
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
            this.setState({ errdata: false, query: "success", disableVal: false, isSent: true })
          }
        } else if (n === "submit") {
          if (this.state?.cardstatus === "00" || this.state?.cardstatus === "06") {
            this.props.history.push("/success");
          } else {
            this.setState({
              isErr: true
            })
          }
        }
      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
  };
  handlesubmit = async () => {
    debugger
    if (this.validate()) {
      const state = this.state;
      const val = this.context.cardstatus;
      const body = {
        approverId: "",
        cardStatusChangeReq: [
          {
            actionCode: "E",
            reason: state.reson ? state.reson : "",
            resons: state.resons ? state.resons : "",
            reqId: "",
            statusDesc: val?.cardStatus === "06" ? "TEMPUNBLOCK" : state.cardSelect ? state.cardSelect : val?.cardStatus === "00" ? "TEMPBLOCK" : "",
            // state.temporary_block === true ? "TEMPBLOCK" : state.cardSelect ? state.cardSelect : val?.cardStatus === "06" ? "TEMPUNBLOCK" : '',
            vpan: val.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan,
          },
        ],
        checkerId: "",
        flag: "S",
        instCode: loginUser?.[0]?.instCode,
        makerId: "",
        reqMsgId: "",
      };
      // console.log(body)
      // return
      await this.apiFetchEdit("api/v1/card/statuschange", body, "submit");
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

  handleOtpvalidate = async (n) => {
    debugger
    const val = this.context.cardstatus;
    const state = this.state;
    if (this.validate(n)) {
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
      if (this.state?.resCode !== "00") {
        this.setState({ query: "success" });
        const body = {
          approverId: "",
          cardStatusChangeReq: [
            {
              actionCode: "V",
              reason: state.reson ? state.reson : "",
              reqId: "",
              statusDesc: state.cardSelect ? state.cardSelect : "",
              vpan: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan,
            },
          ],
          checkerId: "",
          flag: "s",
          instCode: loginUser?.[0]?.instCode,
          makerId: "",
          reqMsgId: "",
        };
        console.log(body)
        // await this.apiFetchEdit("api/v1/card/statuschange", body, "submit");
      } else {
        this.setState({ query: "progress" });
      }
    }
  };
  handledata = () => { };

  handleClear = () => {
    const val = this.context.cardstatus;
    if (val?.cardStatus === "06") {
      this.setState({
        OTPNumber: "",
        mobile: "",
        errdata: false,
        query: "",
        cardSelect: "",
        resonSel: "",
        reson: "",
        isSent: false,
        isErr: false,
        // mobnumber: "",
        // errdata:""
        error: {}
      })
    } else {
      this.setState({
        OTPNumber: "",
        mobile: "",
        errdata: false,
        query: "",
        cardSelect: "",
        resonSel: "",
        reson: "",
        isSent: false,
        isErr: false,
        temporary_block: false,
        resons: "",
        error: {}
        // mobnumber: "",
        // errdata:""
      })
    }
  }

  handleChange = (n, v) => {
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
    const { error, mobnumber } = this.state;
    const { query } = this.state;
    const val = this.context.cardstatus;

    return (
      <div className={classes.root}>
        <Container>
          <Card className={classes.card}>
            <Container>
              <div className={classes.body}>
                <CardContent className={classes.card_title}>
                  Card Details
                </CardContent>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Card Number
                    </Typography>
                    <TextField
                      value={this.state.cardNO}
                      name="firstName"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("firstName", e.target.value)
                      }
                      variant="outlined"
                      placeholder="Cardholder's Name"
                      className={classes.TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Account Number
                    </Typography>
                    <TextField
                      value={this.state.accNo}
                      name="accNo"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("accNo", e.target.value)
                      }
                      variant="outlined"
                      placeholder="Account Number"
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
                        this.handlechange("cardStatus", e.target.value)
                      }
                      variant="outlined"
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
                      value={this.state.cardProd}
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
                    Change Card Status
                  </CardContent>
                  <Grid container spacing={2} style={{ marginTop: "20px" }}>
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
                        <Grid item container sm={12}>
                          <Grid item xs={12} sm={12} md={12}>
                            <Typography
                              variant="subtitle2"
                              className={classes.text_title}
                            >
                              Select Reason for Card Status Change
                            </Typography>
                          </Grid>
                          <Autocomplete
                            disabled={val?.cardStatus === "06" ? true : this.state.temporary_block}
                            fullWidth={false}
                            size="small"
                            style={{
                              width: "80%",
                              position: "relative",
                              marginBottom: "48px",
                              marginTop: '4px'
                            }}
                            value={this.state.cardSelect}
                            name="cardSelect"
                            options={Object.keys(reasons)}
                            getOptionLabel={(option) => option}
                            onChange={(e, v) =>
                              this.handleChange("cardSelect", v)
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
                                placeholder=""
                                className={classes.TextField}
                              />
                            )}
                          />
                        </Grid>

                        <Grid item container xs={12} sm={6}>
                          <Autocomplete
                            disabled={val?.cardStatus === "06" ? true : this.state.temporary_block}
                            fullWidth={false}
                            size="small"
                            style={{ width: "80%", marginTop: "50px" }}
                            value={this.state.resonSel}
                            name="reson"
                            options={
                              this.state.cardSelect !== ""
                                ? reasons[this.state.cardSelect]?.actions
                                : []
                            }
                            getOptionLabel={(option) => option}
                            onChange={(e, v) =>
                              this.handleChange("resonSel", v)
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
                                placeholder=""
                                className={classes.TextField}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          disabled={this.state.temporary_block}
                          variant="subtitle2"
                          className={classes.text_title}
                        >
                          Reason
                          <span className={classes.star}>*</span>
                        </Typography>
                        <TextField
                          disabled={val?.cardStatus === "06" ? true : this.state.temporary_block}
                          value={this.state.reson}
                          name="cardNo"
                          style={{ marginTop: "0px" }}
                          helperText={
                            error?.reson && "Please Specify the reason"
                          }
                          error={error?.reson && true}
                          onChange={(e) =>
                            this.handleChange("reson", e.target.value)
                          }
                          variant="outlined"
                          placeholder="Write Reason"
                          className={classes.TextField}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </div>

                <div>
                  <Divider className={classes.dividers} />
                  <CardContent className={classes.card_title}>
                    Temporary Block your Card
                  </CardContent>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    style={{ padding: "20px 0px 20px 0px" }}
                  >
                    <CheckboxLabels
                      disabled={this.state.cardSelect ? true : false}
                      checked={val?.cardStatus === "06" ? !this.state.temporary_block : this.state.temporary_block}
                      handleChange={this.handleBlock}
                    />
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <Typography
                        disabled={!this.state.temporary_block}
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Reason
                        <span className={classes.star}>*</span>
                      </Typography>
                      <TextField
                        disabled={this.state.cardSelect ? true : false}
                        // disabled={this.state.temporary_block}
                        value={this.state.resons}
                        name="cardNo"
                        style={{ marginTop: "0px" }}
                        helperText={
                          this.state.cardSelect ? false : error?.resons && "Please Specify the reason"
                        }
                        error={this.state.cardSelect ? false : error?.resons && true}
                        onChange={(e) =>
                          this.handleChange("resons", e.target.value)
                        }
                        variant="outlined"
                        placeholder="Write Reason"
                        className={classes.TextField}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={4}>
                    <Grid item container xs={12} sm={6} spacing={4}>
                      <Grid item xs={12} sm={12} md={7}>
                        <Typography
                          variant="subtitle2"
                          className={classes.text_title}
                        >
                          Mobile number
                        </Typography>
                        <TextField
                          value={mobnumber}
                          size="small"
                          disabled
                          variant="outlined"
                          placeholder=""
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
                        className={classes.buttons}
                      >
                        <Button
                          // disabled={!this.state.temporary_block}
                          className={classes.clear}
                          onClick={() => this.handleOtp("otp")}
                          disabled={this.state.isSent}
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
                        className={classes.enterOTP}
                      >
                        <Typography
                          variant="subtitle2"
                          className={classes.text_title}
                        >
                          Enter OTP Number
                        </Typography>
                        <TextField
                          // disabled={!this.state.temporary_block}
                          size="small"
                          variant="outlined"
                          onKeyPress={(e) => {
                            this.txtFieldChange(e);
                          }}
                          inputProps={{
                            maxLength: 6
                          }}
                          placeholder="  OTP Number"
                          className={classes.input}
                          helperText={error?.OTPNumber && "Please enter otp"}
                          error={error?.OTPNumber && true}
                          onChange={(e) => {
                            this.handleChange("OTPNumber", e.target.value);
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
                        )
                        }
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
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
                          disabled={this.state.disableVal}
                          variant="contained"
                          className={classes.submit1}
                          onClick={() => this.handlesubmit()}
                        >
                          SUBMIT
                        </Button>
                        <Button
                          // disabled={!this.state.temporary_block}
                          className={classes.clear2}
                          onClick={() => this.handleClear()}
                        >
                          CLEAR
                        </Button>
                      </Grid>
                      {this.state.isErr ? <Button
                        size='small'
                        style={{
                          marginTop: "10px",
                          backgroundColor: "green",
                          color: "white"
                        }}
                      >{"This card status should be not changeable."}</Button> : ""}
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
Managecardstatus.contextType = EdittablesContext;
export default withStyles(styles)(withRouter(Managecardstatus));
