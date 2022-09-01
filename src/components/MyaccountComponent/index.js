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
  Checkbox
  // Link
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import DialogComponent from "../../components/dialog/index";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckboxLabels from "../../components/checkbox/index2";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DateFnsUtils from "@date-io/date-fns";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import axios from "axios";
import moment from "moment";
import config from "../../config";
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
  textfield: {
    width: "100px",
    "& .MuiInputBase-root.Mui-disabled": {
      color: "black",
      background: "#70707014 0% 0% no-repeat padding-box",
      opacity: "100%",
    },
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
    fontWeight: 600,
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
  input: {
    width: "100%",
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
const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};

class MyaccountComponent extends React.Component {
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
      country: null,
      phoneNumber: null,
      officeNumber: null,
      emailId: "",
      martial: "",
      middleName: "",
      gender: "",
      gen: ""
    };
  }
  // data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.expDate
  // end
  componentDidMount() {
    debugger
    var loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};
    // the fetch api
    const valData = {
      F: { value: "Female", label: "F" },
      M: { value: "Male", label: "M" },
    }
    const marriedStatusd = {
      S: { value: "Single", label: "S" },
      M: { value: "Married", label: "M" },
    };
    const cuty = {
      91: "INDIA"
    };

    axios
      .get(`${config.api_url}api/v1/users/getAllRegisterCardDetail/${loginUser?.[0]?.userId}`)
      .then((res) => {
        if (res.data) {
          const data = res.data.customerDetailsEnquiryResponseList;
          this.setState({
            ...data,
            martial: marriedStatusd[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.married],
            gender: valData[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.gender],
            statevalue: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.homeCountry,
            // emailId: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.email,
            areacode: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0].areacode ?? '',
            usertype: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0].userType?.type,
            firstName: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.firstName ?? "",
            lastName: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.lastName ?? "",
            addressLine1: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.addressLine1 ?? '',
            addressLine2: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.addressLine2 ?? "",
            addressLine3: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.addressLine3 ?? "",
            city: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.homeCity ?? "",
            pincode: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.homePostCode ?? "",
            country: cuty[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.homeCountryCode?.replace(" ", "")] ?? "",
            phoneNumber: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.mobNo?.replaceAll("+91 ", "") ?? "",
            // officeNumber: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.officeNumber ?? "",
            emailId: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.emailId ?? "",
            activationDate: moment(data.activationDate ?? null).format("MM/DD/YYYY") ?? null,
            expirationDate: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.dateOfBirth ? moment(data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.dateOfBirth).format("MM/DD/YYYY") : null,
            workCountry: cuty[data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workCountyCode?.replace(" ", "")] ?? null,
            workAddRLine1: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workAddRLine1 ?? "",
            workAddRLine2: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workAddRLine2 ?? "",
            workCity: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workCity ?? "",
            workstate: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workCountry ?? "",
            workPostCode: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workPostCode ?? "",
            gen: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.title ?? "",
            areacode: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workTel.slice(0, 3) ?? "",
            officeNumber: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.workTel.slice(3) ?? "",
            gen: { value: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.title, label: data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.title },
            val: data
          });
          localStorage.setItem("groupId", data.userGroupId);
          localStorage.setItem("userId", data.userId);
          localStorage.setItem("institutionId", data.institution?.instId);
        }
      })
      .catch((err) => {
        console.log("Profile details", err);
      });
  }
  handleChange = (n, v) => {
    const state = this.state;
    this.setState({
      ...state,
      [n]: v,
    });
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
        state: "",
        pincode: "",
        country: "",
      });
    }
  };


  handlesubmit = async () => {
    debugger
    const state = this.state;
    this.props.history.push({
      pathname: "/edit_profile",
      state: {
        val_: this.state.val
      }
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
  render() {
    const { classes } = this.props;

    const {
      open,
      submit,
      firstName,
      lastName,
      usertype,
      userId,
      expirationDate,
      addressLine1,
      addressLine2,
      city,
      martial,
      statevalue,
      middleName,
      pincode,
      country,
      phoneNumber,
      officeNumber,
      emailId,
      gender
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
                            { value: "Mrs" },
                            { value: "Miss" },
                          ]}
                          disabled
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
                          disabled
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
                      disabled
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
                      disabled
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
                      disabled
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
                      disabled
                      variant="outlined"
                      placeholder="Mother Name"
                      value={usertype}
                      onChange={(e) =>
                        this.handleChange("usertype", e.target.value)
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

                      value={this.state.martial}
                      name="reson"
                      disabled
                      options={[{ value: "Married", label: 'M' }, { value: "Single", label: "S" }]}
                      getOptionLabel={(option) => option.value}
                      onChange={(e, v) => this.handleChange("", v)}
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
                      disabled
                      options={[{ value: "Male", label: "M" }, { value: "Female", label: "F" }]}
                      getOptionLabel={(option) => option.value}
                      onChange={(e, v) => this.handleChange("", v)}
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
                      disabled
                      placeholder="Email ID"
                      inputProps={{
                        maxLength: 64
                      }}
                      value={emailId?.toLowerCase()}
                      onChange={(e) =>
                        this.handleChange("email", e.target.value)
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
                            disabled
                            value={"+91"}
                            onChange={(e) =>
                              this.handleChange("phoneNumber", e.target.value)
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
                            disabled
                            value={phoneNumber}
                            inputProps={{
                              maxLength: 10
                            }}
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
                            disabled
                            placeholder="Area Code"
                            inputProps={{
                              maxLength: 4
                            }}
                            value={this.state.areacode}
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
                            disabled
                            value={officeNumber}
                            onChange={(e) =>
                              this.handleChange("officeNumber", e.target.value)
                            }
                            inputProps={{
                              maxLength: 7
                            }}
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

                        style={{ width: "100%", margin: 0 }}
                        inputVariant="outlined"
                        margin="normal"
                        format="MM/dd/yyyy"
                        disabled
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
                      disabled
                      value={this.state.workAddRLine1}
                      onChange={(e) =>
                        this.handleChange("workAddRLine1", e.target.value)
                      }
                      inputProps={{
                        maxLength: 75
                      }}
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
                      disabled
                      inputProps={{
                        maxLength: 35
                      }}
                      value={this.state.workAddRLine2}
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
                      City
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="City"
                      disabled
                      value={this.state.workCity}
                      inputProps={{
                        maxLength: 40
                      }}
                      onChange={(e) =>
                        this.handleChange("workCity", e.target.value)
                      }
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      State
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="State"
                      disabled
                      value={this.state.workstate}
                      onChange={(e) =>
                        this.handleChange("statevalue", e.target.value)
                      }
                      inputProps={{
                        maxLength: 40
                      }}
                      className={classes.input}
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
                      disabled
                      value={this.state.workPostCode}
                      onChange={(e) =>
                        this.handleChange("pincode", e.target.value)
                      }
                      inputProps={{
                        maxLength: 10
                      }}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Country
                    </Typography>
                    <TextField
                      type="text"
                      size="small"
                      variant="outlined"
                      placeholder="Country"
                      disabled
                      value={this.state.workCountry}
                      onChange={(e) =>
                        this.handleChange("workCountry", e.target.value)
                      }
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
                              disabled
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
                        disabled
                        value={addressLine1}
                        inputProps={{
                          maxLength: 75
                        }}
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
                        disabled
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
                        City
                      </Typography>
                      <TextField
                        type="text"
                        size="small"
                        variant="outlined"
                        placeholder="City"
                        disabled
                        inputProps={{
                          maxLength: 40
                        }}
                        value={city}
                        onChange={(e) =>
                          this.handleChange("city", e.target.value)
                        }
                        className={classes.input}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        State
                      </Typography>
                      <TextField
                        type="text"
                        size="small"
                        variant="outlined"
                        disabled
                        inputProps={{
                          maxLength: 40
                        }}
                        placeholder="State"
                        value={statevalue}
                        onChange={(e) =>
                          this.handleChange("statevalue", e.target.value)
                        }
                        className={classes.input}
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
                        disabled
                        inputProps={{
                          maxLength: 10
                        }}
                        placeholder="PIN Code"
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
                        Country
                      </Typography>
                      <TextField
                        type="text"
                        size="small"
                        variant="outlined"
                        disabled
                        placeholder="Country"
                        value={country}
                        onChange={(e) =>
                          this.handleChange("country", e.target.value)
                        }
                        className={classes.input}
                      />
                    </Grid>
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
                    style={{ textAlign: "end", marginRight: "20px" }}
                  >
                    <Button
                      variant="contained"
                      className={classes.submit1}
                      onClick={() => this.handlesubmit()}
                    >
                      Modify Details
                    </Button>
                  </Grid>
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
              onClick={() => this.props.history.push("/welcome")}
            >
              <KeyboardBackspaceIcon /> Back
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(MyaccountComponent));
