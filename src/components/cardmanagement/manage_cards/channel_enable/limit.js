import React from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  withStyles,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import MaterialTable from "material-table";
import CheckboxLabels from "../../../checkbox/index1";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Hidden } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import axios from "axios";
import config from "../../../../config";
import Fab from "@material-ui/core/Fab";

import Fade from "@material-ui/core/Fade";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from "@material-ui/core/CircularProgress";
import { EdittablesContext } from "../../../../contexts/index";
import moment from "moment";

const styles = (theme) => ({
  root: {
    background: theme.palette.mainbackground.default,
  },
  table: {
    // border: "2px solid red",
    [theme.breakpoints.only("xs")]: {
      margin: 0,
    },
    margin: "0px 30px",

    // display:"none",
    // background: "rgb(244, 245, 248)",
    // padding: 2,
    // width: "100%",
    // borderRadius: 4,
    // border: "1px solid rgba(224, 224, 224, 1)",
    "& td": {
      height: "64px",
    },

    "& .MuiTableCell-root": {
      border: "none",
      margin: "0px !important",
    },
    // "& table": {
    //     border: "2px solid red"
    // },
    background: theme.palette.mainbackground.default,
    color: theme.palette.secondary.main,
    boxShadow: "none",
    "& .MuiToolbar-regular": {
      width: "100%",
      // display: "none"
    },
    "& .MuiTab-wrapper": {
      textTransform: "capitalize",
    },
    "& span": {
      background: "unset",
    },
    "& .MuiPaper-elevation2": {
      boxShadow: "none",
      position: "unset !important",
      // border: "1px solid #c9caca30"
    },
    "& .MTableToolbar-root-35": {
      borderBottom: "1px solid #c9caca30",
    },
    "& .MuiInput-root": {
      border: "1px solid #c9caca59",
      borderRadius: 6,
      padding: 10,
    },
    "& .MuiInput-underline:before,.MuiInput-underline:hover:not(.Mui-disabled):before,.MuiInput-underline:after":
    {
      borderBottom: "unset",
    },
  },
  card: {
    background: theme.palette.background.paper,
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: 16,
    opacity: 1,
    margin: "20px 0px",
    "& .MuiTableCell-head ": {
      zIndex: "0",
      top: "0",
      padding: "0px",
    },
    "& .MuiTableCell-root": {
      padding: "12px !important",
      // borderLeft: "1px solid rgba(224, 224, 224, 1);",
      textAlign: "left",
    },
    "& .MuiTableRow-root": {
      height: "65px !important",
    },

    "& .MTableToolbar-root-41": {
      marginBottom: 0,
      display: "none",
    },
    "& .MuiTableCell-footer": {
      display: "none",
    },
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

class Limit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedG: true,
      // errdata: " ",
      firstName: " ",
      midname: " ",
      lastname: "",
      email: "",
      OTPNumber: "",
      phone: "",
      mobile: "",
      dob: null,
      existlimit: "",
      setnew: "",
      total1: "",
      total2: "",
      mobnumber: "",
      disabled: true,
      existlimit: "",
      setnew: "",
      total1: "",
      error: {},
      datal: {},
      date: {},
      total2: "",
      // validate: ["OTPNumber"],
      data: [
        {
          AccountNumber: "42362242652353",
          cardNo: "XXXXXXXXXXX2345",

          cardStatus: "Active",
          BranchCode: "DR3425",
          ProductType: "Credit Card",
          ProductName: "Insta",
          ExpirationDate: "23/09/2020",
        },
      ],
      data1: [
        {
          EnableDisableChannels: <CheckboxLabels />,
          ChannelNames: "Domestic ATM",
        },

        {
          EnableDisableChannels: "",
          ChannelNames: "Domestic POS",
        },
      ],

      data2: [
        {
          Daily: "10,000",
          Weekly: "10,000",
          Monthly: "10,000",
        },
        {
          Daily: "10,000",
          Weekly: "10,000",
          Monthly: "10,000",
        },
        {
          Daily: "10,000",
          Weekly: "10,000",
          Monthly: "10,000",
        },
        {
          Daily: "10,000",
          Weekly: "10,000",
          Monthly: "10,000",
        },
        {
          Daily: "10,000",
          Weekly: "10,000",
          Monthly: "10,000",
        },
        {
          Daily: "10,000",
          Weekly: "10,000",
          Monthly: "10,000",
        },
        {
          Daily: "10,000",
          Weekly: "10,000",
          Monthly: "10,000",
        },
      ],

      data3: [
        {
          Daily: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Weekly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Monthly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
        },
        {
          Daily: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Weekly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Monthly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
        },
        {
          Daily: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Weekly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Monthly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
        },
        {
          Daily: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Weekly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Monthly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
        },
        {
          Daily: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Weekly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Monthly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
        },
        {
          Daily: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Weekly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Monthly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
        },
        {
          Daily: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Weekly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
          Monthly: (
            <TextField
              noWrap
              placeholder="Enter Amount"
              id="standard-size-small"
              variant="outlined"
              size="small"
            />
          ),
        },
      ],

      query: "",
      disableVal: true,
      reSend: true,
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      checked7: true,
      checked8: true,

    };
  }

  handleChange = (v, n) => {
    const state = this.state;
    state.error[v] = false;
    this.setState({
      ...state,
      [v]: n,
    });
  };

  handleBack = () => { };

  handleClear = () => {
    debugger
    this.setState({
      OTPNumber: "",
      // mobile: "",
      errdata: false,
      query: "",
      isSend: false
      // errdata:""
    })
  }
  txtFieldChange = (e) => {
    if ((e.which >= 48 && e.which <= 57) || e.which === 45) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  };
  validate = () => {
    debugger;
    var valerrlist;
    if (!this.state.temporary_block) {
      valerrlist = ["mobnumber"];
    } else {
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
            this.setState({ errdata: false, query: "success", disableVal: false })
          }
        }
        else if (n === "submit") {
          if (res.data?.respCode === "904") {
            this.setState({ errdatas: res.data?.respMsg })
            return
          } else {
            this.props.history.push("/success");
          }
        }
      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
  };

  channels = async () => {
    debugger
    const val = this.context.channel?.customerEnquiryRes?.custDetailsResp?.[0] || this.context.channel?.customerEnquiryRes?.custDetailsResp?.[0];
    await axios
      .post('https://iasuat.fisglobal.com/cardholderservice/api/v1/enquiry/carddetails', {
        "instCode": loginUser?.[0]?.instCode,
        "pFlas": "S",
        "reqMsgId": "",
        "vpan": this.context.channel?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan
        // "ER00000000005541"
        // this.context.channel?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan
      })
      .then((res) => {
        debugger
        const val = res.data?.cardFetchRes?.limitEnquiryResp?.[0]?.cardProductLimits
        const vals = res.data?.cardFetchRes?.limitEnquiryResp?.[0]?.linkedLimits
        // const vada = val?.cardFetchRes?.limitEnquiryResp?.[0]?.cardProductLimits?.map(v => {
        //   return {
        //     domAtmLimit: v?.domAtmLimit ?? "980"
        //   }
        // })
        this.setState({
          ...this.state,
          datal: val,
          datals: res.data,
          domEcomLimit: this.state?.checked3 === true ? vals?.domEcomLimit : this.state?.domEcomLimit,
          domPosLimit: this.state?.checked2 === true ? vals?.domPosLimit : this.state?.domPosLimit,
          // domAtmLimit: vals?.domAtmLimit :"",
          domAtmLimit: this.state?.checked1 === true ? vals?.domAtmLimit : this.state?.domAtmLimit,
          intlConlessLimit: this.state?.checked1 === true ? vals?.intlConlessLimit : this.state?.intlConlessLimit,
          domConlessLimit: this.state?.checked4 === true ? vals?.domConlessLimit : this.state?.domConlessLimit,
          intlAtmLimit: this.state?.checked5 === true ? vals?.intlAtmLimit : this.state?.intlAtmLimit,
          intlPosLimit: this.state?.checked6 === true ? vals?.intlPosLimit : this.state?.intlPosLimit,
          intlEcomLimit: this.state?.checked7 === true ? vals?.intlEcomLimit : this.state?.intlEcomLimit,
          intlConlessLimit: this.state?.checked8 === true ? vals?.intlConlessLimit : this.state?.intlConlessLimit,
        })
        // console.log(val)
      })
  }

  handleOtp = async (n) => {
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
      // this.setState({ query: "progress" });
      if (this.state?.resCode !== "00") {
        this.setState({ query: "success" });
      } else {
        this.setState({ query: "progress" });
      }
    }
  };
  componentDidMount = async () => {
    debugger;
    //  firstName: " ",
    //   midname: " ",
    //   lastname: "",
    //   email: "",
    //   phone: "",
    //   mobile: "",
    await this.channels();
    const state = this.state;

    const val = this.context.channel?.customerEnquiryRes?.custDetailsResp?.[0] || this.context.channel;
    const tab = val?.accountDetailsResp?.map((v) => {
      v.AccountNumber = v.accNo;
      v.cardNo = v.cardDetailsResp?.[0]?.vpan;
      v.cardStatus = v.cardDetailsResp?.[0]?.cardStatus;
      v.BranchCode = v.branchCode;
      v.ProductType = v.cardDetailsResp?.[0]?.cardProduct;
      v.ProductName = v.cardDetailsResp?.[0]?.cardProductDesc;
      v.ExpirationDate = v.cardDetailsResp?.[0]?.expDate;
      return v;
    });
    this.setState({
      dob: moment(val?.dateOfBirth).format("MM/DD/YYYY") ?? "",
      cardNO: val?.cardNo,
      cardstatus: val?.cardStatus,
      cardType: "",
      cardProd: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardProduct,
      mobnumber: val?.mobNo,
      firstName: val?.firstName,
      lastname: val?.lastName,
      mobile: val?.mobNo,
      email: val?.emailId,
      phone: val?.workTel,
      data: tab,
      checked1: this.state?.datals?.cardFetchRes?.limitEnquiryResp?.[0]?.domAtm === "Y" ? true : false,
      checked2: this.state?.datals?.cardFetchRes?.limitEnquiryResp?.[0]?.domPos === "Y" ? true : false,
      checked3: this.state?.datals?.cardFetchRes?.limitEnquiryResp?.[0]?.domEcom === "Y" ? true : false,
      checked4: this.state?.datals?.cardFetchRes?.limitEnquiryResp?.[0]?.domConless === "Y" ? true : false,
      checked6: this.state?.datals?.cardFetchRes?.limitEnquiryResp?.[0]?.intlPos === "Y" ? true : false,
      checked7: this.state?.datals?.cardFetchRes?.limitEnquiryResp?.[0]?.intlEcom === "Y" ? true : false,
      checked8: this.state?.datals?.cardFetchRes?.limitEnquiryResp?.[0]?.intlConless === "Y" ? true : false,
      checked5: this.state?.datals?.cardFetchRes?.limitEnquiryResp?.[0]?.intlAtm === "Y" ? true : false,
    });
    const body = {
      instCode: loginUser?.[0]?.instCode,
      pan: "",
      pflag: "s",
      reqMsgId: "",
      vpan: val?.accountDetailsResp?.[0]?.cardNo,
    };
    await this.apiFetchEdit("api/v1/enquiry/carddetails", body);
  };
  handlesubmit = async () => {
    debugger
    // if (this.validate()) {
    const state = this.state;

    const body = {
      instCode: loginUser?.[0]?.instCode,
      reqMsgId: "",
      vpan: this.context.channel?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan ?? "",
      limitDetails: {
        domAtmLimit: this.state?.checked1 === true ? this.state?.domAtmLimit : "",
        domPosLimit: this.state?.checked2 === true ? this.state?.domPosLimit : "",
        domEcomLimit: this.state?.checked3 === true ? this.state?.domEcomLimit : "",
        domConlessLimit: this.state?.checked4 === true ? this.state?.domConlessLimit : "",
        intlPosLimit: this.state?.checked6 === true ? this.state?.intlPosLimit : "",
        intlEcomLimit: this.state?.checked7 === true ? this.state?.intlEcomLimit : "",
        intlConlessLimit: this.state?.checked8 === true ? this.state?.intlConlessLimit : "",
        intlAtmLimit: this.state?.checked8 === true ? this.state?.intlAtmLimit : ""
      },
      channelAccessDetails: {
        domAtm: this.state?.checked1 === true ? "Y" : "N",
        domPos: this.state?.checked2 === true ? "Y" : "N",
        domEcom: this.state?.checked3 === true ? "Y" : "N",
        domConless: this.state?.checked4 === true ? "Y" : "N",
        intlPos: this.state?.checked6 === true ? "Y" : "N",
        intlEcom: this.state?.checked7 === true ? "Y" : "N",
        intlConless: this.state?.checked8 === true ? "Y" : "N"
      }
    }
    await this.apiFetchEdit("api/v1/cardlimitandchannel", body, "submit");
    // }
  };

  handledata = () => { };
  handlechange = (n, v) => {
    debugger
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

  handlecheckbox = (e, key) => {
    debugger
    const state = this.state;
    this.setState({
      ...this.state,
      [key]: e.target.checked
    })
  }

  render() {
    const { classes, mobnumber } = this.props;
    const { query, error, OTPNumber } = this.state;

    return (
      <div className={classes.root}>
        <Container>
          <Card className={classes.card}>
            <Container>
              <div className={classes.body}>
                <CardContent className={classes.card_title}>
                  Cardholder Details
                </CardContent>
                <Grid container spacing={4} style={{ marginTop: "20px" }}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      First Name
                    </Typography>
                    <TextField
                      value={this.state.firstName}
                      name="firstName"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("firstName", e.target.value)
                      }
                      variant="outlined"
                      placeholder=""
                      className={classes.TextField}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Middle Name
                    </Typography>
                    <TextField
                      value={this.state.midname}
                      name="midname"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("midname", e.target.value)
                      }
                      variant="outlined"
                      placeholder=""
                      className={classes.TextField}
                    />
                  </Grid> */}
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Last Name
                    </Typography>
                    <TextField
                      value={this.state.lastname}
                      name="lastname"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("lastname", e.target.value)
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
                      Email Address
                    </Typography>
                    <TextField
                      value={this.state.email}
                      name="email"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("email", e.target.value)
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
                      Phone Number
                    </Typography>
                    <TextField
                      value={this.state.phone}
                      name="phone"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange("phone", e.target.value)
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
                      Mobile Number
                    </Typography>
                    <TextField
                      value={this.state.mobile}
                      name=" Mobile"
                      size="small"
                      disabled
                      onChange={(e) =>
                        this.handlechange(" mobile", e.target.value)
                      }
                      variant="outlined"
                      placeholder=""
                      className={classes.TextField}
                    />
                  </Grid>
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
                        disabled
                        // disabled={checkerDisabled ? true : false}
                        value={this.state.dob}
                        name="dob"
                        maxDate={new Date()}
                        onChange={(e) => this.handlechange("dob", e)}
                        placeholder="Date of Birth"
                        onKeyPress={(e) => this.dateval(e)}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                        size="small"
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                </Grid>

                <div style={{ marginTop: "20px" }}>
                  <CardContent className={classes.card_title}>
                    Card Details
                  </CardContent>

                  <MaterialTable
                    // title="Search Results"
                    title={false}
                    options={{
                      search: false,
                      sorting: true,
                      pageSize: 1,
                      pageSizeOptions: [5, 10, 50, 100, 200],
                      actionsColumnIndex: -1,
                      rowStyle: (rowData) => ({
                        backgroundColor:
                          rowData.tableData.id % 2 === 0 && "#F8F8FA",
                      }),
                    }}
                    columns={[
                      {
                        field: "AccountNumber",
                        title: "Account Number",
                      },
                      {
                        field: "cardNo",
                        title: "Card Number",
                      },
                      {
                        field: "cardStatus",
                        title: "Card Status",
                      },

                      {
                        field: "BranchCode",
                        title: "Branch Code",
                      },
                      {
                        field: "ProductType",
                        title: "Product Type",
                      },
                      {
                        field: "ProductName",
                        title: "Product Name",
                      },
                      {
                        field: "ExpirationDate",
                        title: "Expiration Date",
                      },
                    ]}
                    data={this.state.data}
                  // actions={[
                  //   (rowData) => ({
                  //     icon: () => (
                  //       <VisibilityIcon
                  //         onClick={() => this.handledata()}
                  //         fontSize="small"
                  //         style={{ color: "#728691" }}
                  //       />
                  //     ),

                  //     tooltip: "View",
                  //   }),
                  // ]}
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <CardContent className={classes.card_title}>
                    Channel Enablement and Limit Management
                  </CardContent>

                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={2}
                      lg={3}
                      xl={3}
                      style={{ width: "50%", marginTop: "20px" }}
                    ></Grid>

                    {/* <Grid
                      item
                      xs={12}
                      sm={12}
                      md={9}
                      lg={9}
                      xl={9}
                      style={{ display: "flex", paddingLeft: "42px" }}
                    >
                      <Grid item xs={12} sm={5} spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <Typography
                            variant="subtitle2"
                            className={classes.text_title}
                          >
                            Existing Limit
                          </Typography>
                          <TextField
                            value={this.state.existlimit}
                            name="existlimit"
                            size="small"
                            style={{ width: "90%" }}
                            disabled
                            onKeyPress={(e) => {
                              this.txtFieldChange(e);
                            }}
                            onChange={(e) =>
                              this.handlechange("existlimit", e.target.value)
                            }
                            variant="outlined"
                            placeholder="50,000"
                            className={classes.TextField}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          style={{ width: "90%", marginTop: "40px" }}
                        ></Grid>
                      </Grid>
                      <Grid item xs={12} sm={7}>
                        <Grid item xs={12} sm={12} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            className={classes.text_title}
                          >
                            Set New Limit
                          </Typography>
                          <TextField
                            value={this.state.setnew}
                            name="setnew"
                            size="small"
                            style={{ width: "70%" }}
                            onKeyPress={(e) => {
                              this.txtFieldChange(e);
                            }}
                            onChange={(e) =>
                              this.handlechange("setnew", e.target.value)
                            }
                            variant="outlined"
                            placeholder=""
                            className={classes.TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            style={{ width: "90%", marginTop: "40px" }}
                          ></Grid>
                        </Grid>
                      </Grid>
                    </Grid> */}

                    <Grid item xs={12} sm={12} spacing={2}>
                      <MaterialTable
                        // title="Search Results"
                        title={false}
                        options={{
                          search: false,
                          sorting: true,
                          pageSize: 8,

                          actionsColumnIndex: -1,
                          rowStyle: (rowData) => ({
                            backgroundColor:
                              rowData.tableData.id % 2 === 0 && "#F8F8FA",
                          }),
                        }}
                        columns={[
                          {
                            field: "EnableDisableChannels",
                            title: "Enable/Disable",
                          },
                          {
                            field: "ChannelNames",
                            title: "Channels",
                          },
                          {
                            field: "Daily",
                            title: " Maximum Limit",
                          },
                          // {
                          //   field: "Weekly",
                          //   title: "Weekly",
                          // },
                          // {
                          //   field: "Monthly",
                          //   title: "Monthly",
                          // },
                          {
                            field: "DailyEd",
                            title: "Current/New Limit",
                          },
                          // {
                          //   field: "WeeklyEd",
                          //   title: "Weekly",
                          // },
                          // {
                          //   field: "MonthlyEd",
                          //   title: "Monthly",
                          // },
                        ]}
                        data={[
                          {
                            EnableDisableChannels: <CheckboxLabels checked={this.state?.checked1} handlecheckbox={(e) => this.handlecheckbox(e, 'checked1')} />,
                            ChannelNames: "Domestic ATM",
                            Daily: this.state?.datal?.domAtmLimit,
                            Weekly: "10,000",
                            Monthly: "10,000",
                            DailyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                                disabled={this.state?.checked1 === true ? false : true}
                                value={this.state?.checked1 === true ? this.state?.domAtmLimit : ""}
                                onKeyPress={(e) => this.txtFieldChange(e)}
                                onChange={(e) =>
                                  this.handleChange("domAtmLimit", e.target.value)
                                }
                              />
                            ),
                            WeeklyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                            MonthlyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                          },
                          {
                            EnableDisableChannels: <CheckboxLabels checked={this.state?.checked2} handlecheckbox={(e) => this.handlecheckbox(e, 'checked2')} />,
                            ChannelNames: "Domestic POS",
                            Daily: this.state?.datal?.domPosLimit ?? '',
                            Weekly: "10,000",
                            Monthly: "10,000",
                            DailyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                                disabled={this.state?.checked2 === true ? false : true}
                                value={this.state?.checked2 === true ? this.state?.domPosLimit : ""}
                                onKeyPress={(e) => this.txtFieldChange(e)}
                                onChange={(e) =>
                                  this.handleChange("domPosLimit", e.target.value)
                                }
                              />
                            ),
                            WeeklyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                            MonthlyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                          },
                          {
                            EnableDisableChannels: <CheckboxLabels checked={this.state?.checked3} handlecheckbox={(e) => this.handlecheckbox(e, 'checked3')} />,
                            ChannelNames: "Domestic eCommerce",
                            Daily: this.state?.datal?.domEcomLimit || '',
                            Weekly: "10,000",
                            Monthly: "10,000",
                            DailyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                                disabled={this.state?.checked3 === true ? false : true}
                                value={this.state?.checked3 === true ? this.state?.domEcomLimit : ""}
                                onKeyPress={(e) => this.txtFieldChange(e)}
                                onChange={(e) =>
                                  this.handleChange("domEcomLimit", e.target.value)
                                }
                              />
                            ),
                            WeeklyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                            MonthlyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                          },
                          {
                            EnableDisableChannels: <CheckboxLabels checked={this.state?.checked4} handlecheckbox={(e) => this.handlecheckbox(e, 'checked4')} />,
                            ChannelNames: "Domestic Contactless",
                            Daily: this.state?.datal?.domConlessLimit,
                            Weekly: "10,000",
                            Monthly: "10,000",
                            DailyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                disabled={this.state?.checked4 === true ? false : true}
                                size="small"
                                value={this.state?.checked4 === true ? this.state?.domConlessLimit : ""}
                                onKeyPress={(e) => this.txtFieldChange(e)}
                                onChange={(e) =>
                                  this.handleChange("domConlessLimit", e.target.value)
                                }
                              />
                            ),
                            WeeklyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                            MonthlyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                          },
                          {
                            EnableDisableChannels: <CheckboxLabels checked={this.state?.checked5} handlecheckbox={(e) => this.handlecheckbox(e, 'checked5')} />,
                            ChannelNames: "International ATM",
                            Daily: this.state?.datal?.intlAtmLimit,
                            Weekly: "10,000",
                            Monthly: "10,000",
                            DailyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                                disabled={this.state?.checked5 === true ? false : true}
                                value={this.state?.checked5 ? this.state?.intlAtmLimit : ""}
                                onKeyPress={(e) => this.txtFieldChange(e)}
                                onChange={(e) =>
                                  this.handleChange("intlAtmLimit", e.target.value)
                                }
                              />
                            ),
                            WeeklyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                            MonthlyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                          },
                          {
                            EnableDisableChannels: <CheckboxLabels checked={this.state?.checked6} handlecheckbox={(e) => this.handlecheckbox(e, 'checked6')} />,
                            ChannelNames: "International POS",
                            Daily: this.state?.datal?.intlPosLimit,
                            Weekly: "10,000",
                            Monthly: "10,000",
                            DailyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                                disabled={this.state?.checked6 === true ? false : true}
                                value={this.state?.checked6 ? this.state?.intlPosLimit : ""}
                                onKeyPress={(e) => this.txtFieldChange(e)}
                                onChange={(e) =>
                                  this.handleChange("intlPosLimit", e.target.value)
                                }
                              />
                            ),
                            WeeklyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                            MonthlyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                          },
                          {
                            EnableDisableChannels: <CheckboxLabels checked={this.state?.checked7} handlecheckbox={(e) => this.handlecheckbox(e, 'checked7')} />,
                            ChannelNames: "International eCommerce",
                            Daily: this.state?.datal?.intlEcomLimit,
                            Weekly: "10,000",
                            Monthly: "10,000",
                            DailyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                                disabled={this.state?.checked7 === true ? false : true}
                                value={this.state?.checked7 ? this.state?.intlEcomLimit : ""}
                                onKeyPress={(e) => this.txtFieldChange(e)}
                                onChange={(e) =>
                                  this.handleChange("intlEcomLimit", e.target.value)
                                }
                              />
                            ),
                            WeeklyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                            MonthlyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                          },
                          {
                            EnableDisableChannels: <CheckboxLabels checked={this.state?.checked8} handlecheckbox={(e) => this.handlecheckbox(e, 'checked8')} />,
                            ChannelNames: "International Contactless",
                            Daily: this.state?.datal?.intlConlessLimit,
                            Weekly: "10,000",
                            Monthly: "10,000",
                            DailyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                                disabled={this.state?.checked8 === true ? false : true}
                                value={this.state?.checked8 ? this.state?.intlConlessLimit : ""}
                                onKeyPress={(e) => this.txtFieldChange(e)}
                                onChange={(e) =>
                                  this.handleChange("intlConlessLimit", e.target.value)
                                }
                              />
                            ),
                            WeeklyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                            MonthlyEd: (
                              <TextField
                                noWrap
                                placeholder="Enter Amount"
                                id="standard-size-small"
                                variant="outlined"
                                size="small"
                              />
                            ),
                          },
                        ]}
                      />
                    </Grid>
                  </Grid>

                  {/* <Grid container>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={2}
                      lg={3}
                      xl={3}
                      style={{ width: "50%", marginTop: "125px" }}
                    >
                      <MaterialTable
                            // title="Search Results"
                            title={false}
                            options={{
                              search: false,
                              sorting: true,
                              pageSize: 6,
                              pageSizeOptions: [5, 10, 50, 100, 200],
                              actionsColumnIndex: -1,
                              rowStyle: (rowData) => ({
                                backgroundColor:
                                  rowData.tableData.id % 2 === 0 && "#F8F8FA",
                              }),
                            }}
                            columns={[
                                {
                                    field: 'EnableDisableChannels',
                                    title: 'Enable/Disable Channels'
                                  },
                              {
                                field: 'ChannelNames',
                                title: 'Channel Names'
                              },
                             
                              
                            ]}
                             
                            data={this.state.data1}
                            
                           
                          /> 
                      
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={9}
                      lg={9}
                      xl={9}
                      style={{ display: "flex", paddingLeft: "42px" }}
                    >
                      <Grid item xs={12} sm={5} spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <Typography
                            variant="subtitle2"
                            className={classes.text_title}
                          >
                            Total
                          </Typography>
                          <TextField
                            value={this.state.total1}
                            name="total1"
                            size="small"
                            style={{ width: "90%" }}
                            disabled
                            onKeyPress={(e) => {
                              this.txtFieldChange(e);
                            }}
                            onChange={(e) =>
                              this.handlechange("total1", e.target.value)
                            }
                            variant="outlined"
                            placeholder="50,000"
                            className={classes.TextField}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={7}>
                        <Grid item xs={12} sm={12} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            className={classes.text_title}
                          >
                            Total
                          </Typography>
                          <TextField
                            value={this.state.total2}
                            name="total2"
                            size="small"
                            style={{ width: "70%" }}
                            disabled
                            onKeyPress={(e) => {
                              this.txtFieldChange(e);
                            }}
                            onChange={(e) =>
                              this.handlechange("total2", e.target.value)
                            }
                            variant="outlined"
                            placeholder="51,000"
                            className={classes.TextField}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid> */}
                </div>

                <Grid container spacing={4} style={{ marginTop: "30px" }}>
                  <Grid item container xs={12} sm={6} spacing={4}>
                    <Grid item xs={12} sm={12} md={7} lg={10}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Mobile number
                      </Typography>
                      <TextField
                        value={this.state.mobile}
                        size="small"
                        variant="outlined"
                        disabled
                        placeholder=""
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
                        inputProps={{
                          maxLength: 6
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
                      style={{ textAlign: "end", marginRight: "50px" }}
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
                    {this.state.errdatas ? <Button
                      size='small'
                      style={{
                        marginTop: "10px",
                        backgroundColor: "green",
                        color: "white"
                      }}
                    >{this.state?.errdatas}</Button> : ''}
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
              onClick={() => this.props.history.push("/channel_enablement")}
            >
              <KeyboardBackspaceIcon /> Back
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}
Limit.contextType = EdittablesContext;
export default withStyles(styles)(withRouter(Limit));
