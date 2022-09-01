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
  Hidden,
  Checkbox
  // Link
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DialogComponent from "../../components/dialog/index";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckboxLabels from "../../components/checkbox/index2";
import DateFnsUtils from "@date-io/date-fns";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fab from "@material-ui/core/Fab";
import Fade from "@material-ui/core/Fade";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from "@material-ui/core/CircularProgress";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// import { EdittablesContext } from "../../../../contexts/index";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import axios from "axios";
import moment from "moment";
import config from "../../config";
import { validate } from "graphql";
// style
const styles = (theme) => ({
  root: {
    width: "100%",
    background: theme.palette.mainbackground.default,
    opacity: 1,
    padding: "30px 0px",
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    // color: "#012834"
  },
  card: {
    background: theme.palette.background.paper,
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: 16,
    opacity: 1,
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
  card_title: {
    borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
    fontWeight: "bold",
    fontSize: 14,
    [theme.breakpoints.only("xs")]: {
      height: "20px",
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
    marginTop: "15px",
    width: "100px",
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
  clear2: {
    marginLeft: "10px",
    boxShadow: "0px 3px 6px #0049903D",
    border: `1px solid ${theme.palette.primary.main}`,
    opacity: 0.9,
    fontSize: 12,
    borderRadius: 8,
    marginRight: 12,
    fontWeight: 600,
  },
  textfield: {
    width: "100px",
    "& .MuiInputBase-root.Mui-disabled": {
      color: "black",
      background: "#70707014 0% 0% no-repeat padding-box",
      opacity: "100%",
    },
  },
  clear112: {
    boxShadow: "0px 3px 6px #0049903D",
    border: `1px solid #4BCD3E`,
    opacity: 0.9,
    fontSize: 12,
    borderRadius: 8,
    fontWeight: 600,
    marginLeft: 22,
    padding: "10px 16px",
    marginBottom: "0px",
    marginTop: "30px",

    [theme.breakpoints.only("md")]: {
      width: "200px",
      marginLeft: 0,
      marginTop: "30px",
    },
  },

  clear1: {
    boxShadow: "0px 3px 6px #0049903D",
    border: `1px solid #4BCD3E`,
    opacity: 0.9,
    fontSize: 12,
    borderRadius: 8,
    fontWeight: 600,
    marginLeft: 22,
    padding: "10px 16px",
    marginBottom: "0px",
    marginTop: "30px",

    [theme.breakpoints.only("xs")]: {
      width: "95px",
      marginLeft: 0,
      marginTop: "20px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "95px",
      marginLeft: 0,
      marginTop: "0px",
    },
    [theme.breakpoints.only("md")]: {
      width: "95px",
      marginLeft: 0,
      marginTop: "30px",
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
  submit11: {
    "&.MuiButton-contained:hover": {
      background: "#4BCD3E"
    },
    background: "#4BCD3E",
    boxShadow: "0px 3px 6px #0049903D",
    borderRadius: 8,
    fontSize: 12,
    opacity: 0.9,
    marginLeft: "20px",
    color: "#2A2A2A",
  },
  submit: {
    border: `2px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.main,
    boxShadow: "0px 3px 6px #0049903D",
    borderRadius: 8,
    fontSize: 12,
    opacity: 0.9,
    marginRight: 12,
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
  submitbotton: {
    [theme.breakpoints.only("xs")]: {
      marginRight: "0px !important",
    },
    [theme.breakpoints.only("sm")]: {
      marginRight: "0px !important",
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

  otpbox: {
    marginLeft: "18px",
    [theme.breakpoints.only("md")]: {
      marginTop: "-8px",
      position: "relative",
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "0px",
      marginLeft: "0px",
      padding: "0px",
    },
  },
  enterOTP12: {
    position: "relative",
    left: "46px",

    [theme.breakpoints.only("sm")]: {
      left: "0px",
      position: "relative",
    },
  },
  input: {
    width: "100%",
  },
  otpdd: {
    [theme.breakpoints.only("md")]: {
      left: "30px",
      position: "relative",
    },
  },
  buttons: {
    marginTop: "30px",
    [theme.breakpoints.only("md")]: {
      marginTop: "35px",
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
  hint_title2: {
    textAlign: "end",
    color: "#4BCD3E",
    marginTop: "0px",
    "&.MuiButton-root:hover": {
      backgroundColor: 'white'
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      textAlign: "left",
      marginTop: "0px !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-50px",
      position: "relative",
      right: "40px",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      marginLeft: "0px",
      marginTop: "0px !important",
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
});
// end

class MyaccountEditComponent extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      open: false,
      firstName: "",
      lastName: null,
      usertype: null,
      userId: null,
      activationDate: new Date(),
      expirationDate: null,
      addressLine1: null,
      addressLine2: null,
      city: null,
      statevalue: null,
      pincode: null,
      Country: null,
      phoneNumber: null,
      countrycode: "+91",
      areacode: "",
      officeNumber: null,
      emailId: "",
      workAddRLine1: "",
      workAddRLine2: "",
      workCity: "",
      statevalue1: "",
      workPostCode: "",
      workCountry: "",
      mothername: "",
      // workcountry: "",
      workPostCode: "",
      homeCity: "",
      middleName: "",
      mobilenum: null,
      otpdsiabled: true,
      isValidate: true,
      isUpdate: true,
      reSend: true,
      married: "",
      gender: "",
      gen: "",
      update: false,
      isSubmit: true,
      workstate: null,
      error: {}
    };
  }
  // end

  Clear = () => {
    this.setState({
      // submit: false,
      // open: false,
      firstName: "",
      lastName: "",
      usertype: "",
      userId: "",
      activationDate: new Date(),
      // expirationDate: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      statevalue: "",
      pincode: "",
      workstate: "",
      Country: "",
      phoneNumber: "",
      countrycode: "",
      areacode: "",
      officeNumber: "",
      emailId: "",
      workAddRLine1: "",
      workAddRLine2: "",
      workCity: "",
      statevalue1: "",
      workPostCode: "",
      workCountry: "",
      mothername: "",
      // workcountry: "",
      workPostCode: "",
      homeCity: "",
      middleName: "",
      mobilenum: "",
      // otpdsiabled: true,
      // isValidate: true,
      // isUpdate: true,
      // reSend: true,
      // married: "",
      // gender: "",
      gen: "",
      error: {}
      // update: false,
      // isSubmit: true
    })
  }
  handleClears = async () => {
    debugger
    const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};
    const data = this.props.location?.state?.val_
    const gen = {
      Single: "S",
      Married: "M"
    }
    const gen_ = {
      Male: "M",
      Female: "F"
    }
    const p_ = {
      INDIA: "91"
    }
    await axios
      .post(`${config.api_url}api/v1/users/modifyDetails`, {
        approverId: "",
        checkerId: "",
        custUpdateReq: [{
          reqId: "",
          actionCode: "E",
          custCode: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.custCode ?? "",
          title: "",
          accNo: this.state.accNo ?? "",
          firstName: this.state.firstName ?? "",
          // officeNumber: this.state.officeNumber ?? '',
          workTel: this.state.areacode + " " + this.state.officeNumber,
          lastName: this.state.lastName ?? "",
          dateOfBirth: this.state.expirationDate ? moment(this.state.expirationDate).format("YYYY/MM/DD").replaceAll("/", "") : "",
          gender: gen_[this.state?.gender?.value] ?? "",
          married: gen[this.state?.married?.value] ?? "",
          emailId: this.state.emailId ?? "",
          addressLine0: this.state.addressLine0 ?? "",
          addressLine1: this.state.addressLine1 ?? "",
          addressLine2: this.state.addressLine2 ?? "",
          // institutionName: loginUser?.[0]?.instCode ?? "",
          addressLine3: this.state.addressLine3 ?? "",
          homeCity: this.state?.city?.label ?? "",
          homeCountry: this.state.statevalue?.label ?? "",
          homeCountyCode: p_[this.state.Country?.label] ?? "",
          homeTel: this.state.homeTel ?? "",
          // homeCountryCode: this.state.statevalue /?? "",
          homePostCode: this.state?.pincode ?? "",
          pobox: this.state.pobox ?? "",
          workAddRLine1: this.state.workAddRLine1 ?? "",
          workAddRLine2: this.state.workAddRLine2 ?? "",
          workAddRLine3: this.state.workAddRLine3 ?? "",
          // workstate: this.state.workstate ?? "",
          workCity: this.state.workCity?.label ?? "",
          workCountry: this.state.workstate?.label ?? "",
          workCountyCode: this.state.workCountry?.value ?? "",
          // workTel: this.state.workTel ?? "",
          // Country: this.state?.Country ?? "",
          workPostCode: this.state?.workPostCode ?? "",
          idNumber: this.state.idNumber ?? "",
          nationalId: this.state.nationalId ?? "",
          mobNo: this.state.phoneNumber ?? "",
          title: this.state.gen.value ?? "",
          // mothername: this.state.mothername ?? "",
          // middleName: this.state.middleName ?? "",
          kycTypeId: "1",
          idNumber: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.idNumber,
          nationalId: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.nationalId,
          // reqId: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.reqId,
          kycTypeId: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.kycTypeId,

        }],
        flag: "s",
        instCode: loginUser?.[0]?.instCode ?? "",
        makerId: "",
        remarks: "",
        reqMsgId: ""
      })
      .then((res) => {
        if (res.data) {
          const data = res.data;
          this.setState({
            ...data,
            isSubmit: false
          });
        }
      })
      .catch((err) => {
        console.log("Profile details", err);
      });
  }
  handleOtps = async (n) => {
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
  handleCheckbox = (e) => {
    this.setState({
      addresschecked: !this.state.addresschecked,
      // primarychecked: !this.state.primarychecked,
    });
    if (e && e.target.checked) {
      this.setState({
        addressLine1: this.state.workAddRLine1,
        addressLine2: this.state.workAddRLine2,
        city: this.state.workCity,
        pincode: this.state.workPostCode,
        Country: this.state.workCountry,
        statevalue: this.state.workstate,
      });
    } else {
      this.setState({
        addressLine1: "",
        addressLine2: "",
        city: "",
        statevalue: "",
        pincode: "",
        country: "",
      });
    }
  };
  handleClear = (n) => {
    debugger
    const state = this.state;
    if (state.mobilenum.length < 10) {
      state.error.mobilenum = true;
      this.setState({ ...state })
      return
    } else if (state.phoneNumber.length < 10) {
      state.error.phoneNumber = true;
      this.setState({ ...state })
      return
    } else {
      axios
        .post(`${config.api_url}api/v1/otp/generate`, {
          "cardNumber": '',
          "channelId": "SMS",
          "institutionId": '',
          "mobileNumber": this.state?.mobilenum
        })
        .then((res) => {
          if (res.data) {
            const data = res.data;
            if (n === "otp") {
              this.setState({
                ...data,
                OTPNumber: data?.otp ?? "",
                otpdsiabled: false,
                isValidate: false,
                isSent: true,
                error: false
              });
            } else if (n === "resend") {
              this.setState({
                errdata: false,
                disabled: false,
                OTPNumber: res.data?.otp,
                otpId: res.data?.otpId,
                query: false,
                isUpdate: true,
                disableVal: true,
                reSend: true,
                error: false
              });
            }
          }
        })
        .catch((err) => {
          console.log("Profile details", err);
        });
    }
  }
  //validation part 

  validate = () => {
    debugger
    var valerrlist = ["city", "statevalue", "Country", "workCity", "workstate", "workCountry", "phoneNumber"];

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
  //end

  //validate button

  handlevalidation = () => {
    debugger
    const state = this.state;
    if (this.validate()) {
      axios
        .post(`${config.api_url}api/v1/otp/validate`, {
          institutionId: "",
          cardno: "",
          mobilenum: this.state.mobilenum ? this.state.mobilenum : "",
          // otac: "",
          otp: this.state.OTPNumber ? this.state.OTPNumber : "",
          otpId: this.state.otpId ?? '',
          refId: "",
          referenceNumber: "",
        })
        .then((res) => {
          if (res.data) {
            const data = res.data;
            if (res.data === "01" || this.state.errdata) {
              this.setState({ errdata: true, isUpdate: true, reSend: false })
            } else {
              this.setState({
                ...data,
                query: "success",
                isUpdate: false,
                OTPNumber: this.state.OTPNumber ? this.state.OTPNumber : "",
              });
            }

          }
        })
        .catch((err) => {
          console.log("Profile details", err);
        });
    }
  }

  //end

  componentDidMount() {
    debugger
    const valData = {
      F: "Female",
      M: "Male"
    }
    const marriedStatusd = {
      S: "Single",
      M: "Married"
    };
    const cuty = {
      91: "INDIA"
    };
    const data = this.props.location?.state?.val_
    this.setState({
      ...data,
      gen: { value: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.title, label: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.title },
      married: { value: marriedStatusd[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.married], label: marriedStatusd[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.married] },
      gender: { value: valData[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.gender], label: valData[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.gender] },
      statevalue: { label: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.homeCountry },
      // emailId: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.email,
      areacode: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0].workTel?.slice(0, 3) ?? "",
      usertype: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0].userType?.type,
      firstName: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.firstName ?? "",
      lastName: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.lastName ?? "",
      addressLine1: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.addressLine1 ?? '',
      addressLine2: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.addressLine2 ?? "",
      addressLine3: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.addressLine3 ?? "",
      city: { label: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.homeCity } ?? "",
      pincode: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.homePostCode ?? "",
      Country: { label: cuty[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.homeCountryCode?.replace(" ", "")] } ?? "",
      phoneNumber: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.mobNo ?? "",
      officeNumber: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workTel?.slice(5) ?? "",
      emailId: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.emailId ?? "",
      // activationDate: moment(data.activationDate).format("MM/DD/YYYY"),
      expirationDate: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.dateOfBirth ? moment(data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.dateOfBirth).format("MM/DD/YYYY") : null,
      workCountry: { label: cuty[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workCountyCode?.replace(" ", "")] } ?? "",
      workAddRLine1: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0].workAddRLine1 ?? "",
      workAddRLine2: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0].workAddRLine2 ?? "",
      workCity: { label: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0].workCity },
      workstate: { label: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0].workCountry },
      workPostCode: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0].workPostCode ?? "",
      mobilenum: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.mobNo ? data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.mobNo : "",
    })
  }
  handleChange = (n, v) => {
    const state = this.state;
    state.error.[n] = false;
    this.setState({
      ...state,
      [n]: v,
    });
  };
  // handle submit funcy
  // handlesubmit = () => {
  //     const state = this.state;
  //     this.setState({ ...state, submit: true, open: true })
  //     setTimeout(() => {
  //         this.setState({ submit: false });
  //         this.props.history.push("/home")
  //     }, 3000);
  // }
  // end

  txtFieldchange = (e) => {
    if (e.which >= 48 && e.which <= 57) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  }

  render() {
    const { classes } = this.props;

    const {
      open,
      submit,
      firstName,
      lastName,
      usertype,
      mothername,
      userId,
      expirationDate,
      addressLine1,
      addressLine2,
      homeCity,
      homePostCode,
      city,
      statevalue,
      workAddRLine1,
      workAddRLine2,
      workcountry,
      workCity,
      workstate,
      workPostCode,
      married,
      pincode,
      Country,
      gender,
      phoneNumber,
      areacode,
      countrycode,
      officeNumber,
      emailId,
      middleName,
      query,
      mobilenum,
      isSubmit,
      error
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
                    User profile has been successfully modified.{" "}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.d_btn}
                    onClick={() => this.props.history.push("/home")}
                  >
                    Ok
                  </Button>
                </div>
              }
            />
          )}
          {/* end */}

          {/* Breadcrumbs component */}

          {/* end */}

          {/* card component one*/}
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.card_title}>
              Cardholder Details
            </CardContent>
            <CardContent className={classes.card_title}>Personal</CardContent>

            <Container>
              <div className={classes.body}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      First Name
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={4} sm={3}>
                        <Autocomplete
                          size="small"
                          name="gen"
                          value={this.state.gen}
                          options={[
                            { value: "Mr" },
                            { value: "Ms" },
                            { value: "Mrs" },
                          ]}
                          getOptionLabel={(option) => option.value}
                          onChange={(e, v) => this.handleChange("gen", v)}
                          className={classes.textfield}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Mr"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={8} sm={9}>
                        <TextField
                          type="text"
                          size="small"
                          variant="outlined"
                          placeholder="First Name"
                          className={classes.input}
                          onChange={(e) =>
                            this.handleChange("firstName", e.target.value)
                          }
                          value={firstName}
                          inputProps={{
                            maxLength: 50
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Middle Name
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="Middle Name"
                      onChange={(e) =>
                        this.handleChange("middleName", e.target.value)
                      }

                      value={middleName}
                      className={classes.input}
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
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) =>
                        this.handleChange("lastName", e.target.value)
                      }
                      inputProps={{
                        maxLength: 50
                      }}
                      className={classes.input}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Father/Husband's Name
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="Father Name"
                      onChange={(e) =>
                        this.handleChange("userId", e.target.value)
                      }

                      value={userId}
                      className={classes.input}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Mother's Maiden Name
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="Mother Name"
                      value={mothername}
                      onChange={(e) =>
                        this.handleChange("mothername", e.target.value)
                      }

                      className={classes.input}
                    />
                  </Grid> */}

                  <Grid item container xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Martial status
                    </Typography>
                    <Autocomplete
                      fullWidth={false}
                      size="small"
                      style={{ width: "100%" }}
                      value={this.state.married}
                      name="reson"
                      options={[{ value: "Married", label: "M" }, { value: "Single", label: "S" }]}
                      getOptionLabel={(option) => option.value}
                      onChange={(e, v) => this.handleChange("married", v)}
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

                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Gender
                    </Typography>
                    <Autocomplete
                      fullWidth={false}
                      size="small"
                      style={{ width: "100%" }}
                      value={gender}
                      name="reson"
                      options={[{ value: "Male", label: "M" }, { value: "Female", label: "F" }]}
                      getOptionLabel={(option) => option.value}
                      onChange={(e, v) => this.handleChange("gender", v)}
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
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Email ID
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="Email ID"
                      inputProps={{
                        maxLength: 64
                      }}
                      value={emailId}
                      onChange={(e) =>
                        this.handleChange("emailId", e.target.value)
                      }
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item container xs={12} sm={6} spacing={2}>
                    <Grid item xs={6}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Mobile Number
                      </Typography>
                      <Grid
                        item
                        container
                        xs={12}
                        sm={12}
                        spacing={0}
                        style={{ justifyContent: "space-between" }}
                      >
                        <Grid item xs={12} sm={3}>
                          <TextField
                            type="text"
                            size="small"
                            variant="outlined"
                            placeholder="country Code"
                            onKeyPress={(e) => this.txtFieldchange(e)}
                            value={countrycode}
                            onChange={(e) =>
                              this.handleChange("countrycode", e.target.value)
                            }
                            className={classes.input}
                          />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <TextField
                            type="text"
                            size="small"
                            variant="outlined"
                            placeholder="Mobile Number"
                            inputProps={{
                              maxLength: 10
                            }}
                            helperText={error.phoneNumber && "Fill the Mobile number"}
                            error={error.phoneNumber && true}
                            onKeyPress={(e) => this.txtFieldchange(e)}
                            value={phoneNumber}
                            onChange={(e) =>
                              this.handleChange("phoneNumber", e.target.value)
                            }
                            className={classes.input}
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Office Number
                      </Typography>
                      <Grid
                        item
                        container
                        xs={12}
                        sm={12}
                        style={{ justifyContent: "space-between" }}
                      >
                        <Grid item xs={12} sm={3}>
                          <TextField
                            type="text"
                            size="small"
                            variant="outlined"
                            placeholder="Area Code"
                            inputProps={{
                              maxLength: 4
                            }}
                            onKeyPress={(e) => this.txtFieldchange(e)}
                            value={areacode}
                            onChange={(e) =>
                              this.handleChange("areacode", e.target.value)
                            }
                            className={classes.input}
                          />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <TextField
                            type="text"
                            size="small"
                            variant="outlined"
                            placeholder="Office Number"
                            inputProps={{
                              maxLength: 7
                            }}
                            onKeyPress={(e) => this.txtFieldchange(e)}
                            value={officeNumber}
                            onChange={(e) =>
                              this.handleChange("officeNumber", e.target.value)
                            }
                            className={classes.input}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6} style={{ marginLeft: "14px" }}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        {" "}
                        Date of Birth
                      </Typography>
                      <KeyboardDatePicker
                        disabled
                        style={{ width: "100%", margin: 0 }}
                        inputVariant="outlined"
                        margin="normal"
                        format="MM/dd/yyyy"
                        value={expirationDate}
                        onChange={(date) =>
                          this.handleChange("expirationDate", date)
                        }
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                        size="small"
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                </Grid>

                <div>
                  <CardContent className={classes.card_title}>
                    Mailing Address
                  </CardContent>
                </div>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Address Line 1
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="Address Line 1"
                      inputProps={{
                        maxLength: 75
                      }}
                      value={workAddRLine1}
                      onChange={(e) =>
                        this.handleChange("workAddRLine1", e.target.value)
                      }
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Address Line 2
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="Address Line 2"
                      inputProps={{
                        maxLength: 35
                      }}
                      value={workAddRLine2}
                      onChange={(e) =>
                        this.handleChange("workAddRLine2", e.target.value)
                      }
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      City <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <Autocomplete
                      type="text"
                      size="small"
                      options={[
                        { value: "CH", label: "Chennai" }
                      ]}
                      getOptionLabel={(option) => option.label}
                      inputProps={{
                        maxLength: 40
                      }}
                      value={workCity}
                      onChange={(e, v) =>
                        this.handleChange("workCity", v)
                      }
                      renderInput={(params) =>
                        <TextField {...params}
                          placeholder="City"
                          className={classes.input}
                          helperText={error.workCity && "Please select the City"}
                          error={error.workCity ? true : false}
                          variant="outlined" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      State <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <Autocomplete
                      type="text"
                      size="small"
                      options={[
                        { value: "TN", label: "Tamil Nadu" }
                      ]}
                      getOptionLabel={(option) => option.label}
                      inputProps={{
                        maxLength: 40
                      }}
                      value={workstate}
                      onChange={(e, v) =>
                        this.handleChange("workstate", v)
                      }
                      renderInput={(params) =>
                        <TextField {...params}
                          placeholder="State"
                          helperText={error.workstate && "Please select the state"}
                          error={error.workstate ? true : false}
                          className={classes.input}
                          variant="outlined" />}

                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      PIN Code
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="PIN Code"
                      inputProps={{
                        maxLength: 10
                      }}
                      onKeyPress={(e) => this.txtFieldchange(e)}
                      value={workPostCode}
                      onChange={(e) =>
                        this.handleChange("workPostCode", e.target.value)
                      }
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Country <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <Autocomplete
                      type="text"
                      size="small"
                      options={[
                        { value: "91", label: "INDIA" }
                      ]}
                      getOptionLabel={(option) => option.label}

                      value={this.state.workCountry}
                      onChange={(e, v) =>
                        this.handleChange("workCountry", v)
                      }
                      renderInput={(params) =>
                        <TextField {...params}
                          helperText={error.workCountry && "Please select the country"}
                          error={error.workCountry && true}
                          placeholder="Country"
                          variant="outlined" />}

                      className={classes.input}
                    />
                  </Grid>

                  <div>
                    <CardContent className={classes.card_title}>
                      Permanent Address
                    </CardContent>{" "}
                    {/* <CheckboxLabels style={{ marginTop: "100px" }} /> */}
                    <div>
                      <FormGroup row>
                        <FormControlLabel
                          className={classes.Checkbox}
                          control={
                            <Checkbox
                              name="addresschecked"
                              checked={this.state.addresschecked}
                              onChange={(e) => this.handleCheckbox(e)}
                              color="primary"
                            />
                          }
                          label="Click if same with mailing address"
                        />
                      </FormGroup>
                    </div>
                  </div>

                  <Grid container spacing={2} style={{ marginTop: "0px" }}>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Address Line 1
                      </Typography>
                      <TextField
                        type="text"
                        size="small"
                        variant="outlined"
                        placeholder="Address Line 1"
                        inputProps={{
                          maxLength: 75
                        }}
                        value={addressLine1}
                        onChange={(e) =>
                          this.handleChange("addressLine1", e.target.value)
                        }
                        className={classes.input}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Address Line 2
                      </Typography>
                      <TextField
                        type="text"
                        size="small"
                        variant="outlined"
                        placeholder="Address Line 2"
                        inputProps={{
                          maxLength: 35
                        }}
                        value={addressLine2}
                        onChange={(e) =>
                          this.handleChange("addressLine2", e.target.value)
                        }
                        className={classes.input}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        City <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Autocomplete
                        type="text"
                        size="small"
                        options={[
                          { value: "CH", label: "Chennai" }
                        ]}
                        getOptionLabel={(option) => option.label}
                        inputProps={{
                          maxLength: 40
                        }}
                        value={city}
                        onChange={(e, v) =>
                          this.handleChange("city", v)
                        }
                        renderInput={(params) =>
                          <TextField {...params}
                            placeholder="City"
                            helperText={error.city && "Please select the City"}
                            error={error.city && true}
                            className={classes.input}
                            variant="outlined" />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        State <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Autocomplete
                        type="text"
                        size="small"
                        options={[
                          { value: "TN", label: "Tamil Nadu" }
                        ]}
                        getOptionLabel={(option) => option.label}
                        inputProps={{
                          maxLength: 40
                        }}
                        value={statevalue}
                        onChange={(e, v) =>
                          this.handleChange("statevalue", v)
                        }
                        renderInput={(params) =>
                          <TextField {...params}
                            placeholder="State"
                            helperText={error.statevalue && "Please select the state"}
                            error={error.statevalue && true}
                            className={classes.input}
                            variant="outlined" />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        PIN Code
                      </Typography>
                      <TextField
                        type="text"
                        size="small"
                        variant="outlined"
                        placeholder="PIN Code"
                        inputProps={{
                          maxLength: 10
                        }}
                        onKeyPress={(e) => this.txtFieldchange(e)}
                        value={pincode}
                        onChange={(e) =>
                          this.handleChange("pincode", e.target.value)
                        }
                        className={classes.input}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Country <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Autocomplete
                        type="text"
                        size="small"
                        options={[
                          { value: "91", label: "INDIA" }
                        ]}
                        getOptionLabel={(option) => option.label}
                        value={Country}
                        onChange={(e, v) =>
                          this.handleChange("Country", v)
                        }
                        renderInput={(params) =>
                          <TextField {...params}
                            placeholder="Country"
                            helperText={error.Country && "Plaese select the country"}
                            error={error.Country && true}
                            variant="outlined" />}

                        className={classes.input}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12} style={{ textAlign: "end" }}>
                  <Button
                    className={classes.clear112}
                    onClick={() => this.handleClears()}
                    disabled={this.state.isUpdate}
                  >
                    Update Information
                  </Button>
                </Grid>

                <Grid container spacing={4} style={{ marginTop: "10px" }}>
                  <Grid item container xs={12} sm={6} spacing={4}>
                    <Grid item xs={12} sm={12} md={10} lg={10}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Enter registered mobile number
                      </Typography>
                      <TextField
                        type="number"
                        size="small"
                        variant="outlined"
                        placeholder="Mobile Number"
                        helperText={error.mobilenum && "Fill the Mobile number"}
                        error={error.mobilenum ? true : false}
                        disabled
                        value={mobilenum}
                        onChange={(e) => this.handleChange("mobilenum", e.target.value)}
                        className={classes.input}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={2}
                      lg={2}
                      className={classes.buttons}
                    >
                      <Button
                        style={{ width: "80px" }}
                        className={classes.clear}
                        onClick={() => this.handleClear("otp")}
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
                      md={10}
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
                        type="text"
                        size="small"
                        variant="outlined"
                        style={{ width: "100%" }}
                        placeholder="OTP Number"
                        className={classes.input}
                        inputProps={{
                          maxLength: 6
                        }}
                        disabled={this.state.otpdsiabled}
                        onChange={(e) => {
                          this.handleChange("OTPNumber", e.target.value);
                        }}
                        value={this.state.OTPNumber}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={2}
                      lg={3}
                      className={classes.enterOTP1}
                    >
                      <Button
                        className={classes.clear1}
                        onClick={() => this.handlevalidation()}
                        disabled={this.state.isValidate}
                      >
                        validate
                      </Button>
                    </Grid>
                    {this.state.errdata ? <Button
                      size='small'
                      style={{
                        marginTop: "10px",
                        backgroundColor: "green",
                        color: "white",
                        height: "30px"
                      }}
                    >Invaild OTP number</Button> : ""
                      || query === "success" ? (
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
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      className={classes.otpdd}
                      style={{ paddingTop: "0px" }}
                    >
                      <Hidden xsUp>Enter OTP Number</Hidden>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      className={classes.enterOTP12}
                      style={{ paddingTop: "0px" }}
                    >
                      <Button
                        onClick={() => this.handleClear("resend")}
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
                </Grid>
                <Grid
                  item
                  className={classes.submitbotton}
                  style={{ textAlign: "end", marginRight: "20px" }}
                >
                  <Button
                    variant="contained"
                    className={classes.submit11}
                    disabled={isSubmit}
                    onClick={() => this.props.history.push({
                      pathname: "/passwordSuccess",
                      state: {
                        update: true
                      }
                    })}
                  >
                    SUBMIT
                  </Button>
                  <Button
                    className={classes.clear2}
                    // variant="contained"
                    onClick={() => this.Clear()}
                  >
                    CLEAR
                  </Button>
                </Grid>
              </div>
            </Container>
          </Card>
          {/* end */}

          {/* PhoneInTalkIcon section */}

          {/* end */}
          <div style={{ float: "right" }}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.btn}
              onClick={() => this.props.history.push("/home")}
            >
              <KeyboardBackspaceIcon /> Back
            </Button>
          </div>
        </Container >
      </div >
    );
  }
}

export default withStyles(styles)(withRouter(MyaccountEditComponent));
