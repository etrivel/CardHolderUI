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
  Avatar,
  Button,

  // Link
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CloseIcon from "@material-ui/icons/Close";
import { Hidden } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import axios from "axios";
import moment from "moment";
import config from "../../config";
import DialogComponent from "../../components/dialog/index";
// style
const styles = (theme) => ({
  root: {
    backgroundImage: `url("${process.env.PUBLIC_URL}../assets/Mask Group 2.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    background: "#f4f5f8",
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

  clear1: {
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
    marginLeft: 12,
    padding: "7px 16px",
    marginTop: "35px",
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
    marginLeft: "14px",
    color: "#4BCD3E",
    marginTop: "0px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginTop: "0px !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-40px",
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

class Signup extends React.Component {
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
      expirationDate: new Date(),
      addressLine1: null,
      addressLine2: null,
      city: null,
      statevalue: null,
      pincode: null,
      country: null,
      phoneNumber: null,
      officeNumber: null,
      emailId: "NUKK@M.COM",
    };
  }
  // end
  componentDidMount() {
    // the fetch api
    axios
      .get(`${config.api_url}api/v1/users/USR001`)
      .then((res) => {
        if (res.data) {
          const data = res.data;
          this.setState({
            ...data,
            statevalue: data.state,
            emailId: data?.email,
            usertype: data.userType?.type,
            activationDate: moment(data.activationDate).format("MM/DD/YYYY"),
            expirationDate: moment(data.expirationDate).format("MM/DD/YYYY"),
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
  handleClose = () => {
    const state = this.state;
    this.setState({
      ...state,
      open: !state.open,
    });
  };
  Clear = () => {
    this.setState({
      institutionname: "MYNT",
      financialentity: "FINO",
      cardcount: null,
      selectData: [],
      data: [],
      tabledata: [],
      error: {},
      open: false,
      download: false,
      errorsubmit: {},
      selectcardtype: "",
    });
  };
  handlesubmit = () => {
    const state = this.state;

    //if (this.validate()) {
    // if (!state.data.length > 0) {
    this.setState({
      ...state,
      open: true,
      //errorsubmit: {
      //error: true,
      //msg: 'Please choose file'
      //}
    });
    return;
    //} else {
    //this.setState({
    // ...state,
    // errorsubmit: {
    // error: false
    //}
    //})
    //}
    //this.handleClose()
    //setTimeout(this.handleClose(), 1000)
    //}
  };
  handleSearch = () => {
    const location = window.location.pathname;
    if (this.validate()) {
      if (location === "/card-enquiry-search") {
        this.props.history.push("/card-enquiry-table");
      } else if (location === "/transaction-search") {
        this.props.history.push("/transaction-search-result");
      } else if (location === "/file-upload-search") {
        this.props.history.push("/file-upload-table");
      }
    }
  };
  handleClear = () => {
    this.setState({
      institutionName: "",
      financialEntity: "",
      branchCode: "",
      vpanNumber: "",
      accNo: "",
      cardno: "",
      firstName: "",
      middleName: "",
      lastName: "",
      mobileNO: "",
      email: "",
      mCountry: "",
      fromdate: null,
      todate: null,
      OTPNumber: "",
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
  handleformsubmit = () => {
    this.handleClose();
    this.props.history.push("/changepassword");
  };
  render() {
    const { classes } = this.props;

    const {
      open,

      usertype,
    } = this.state;

    return (
      <Grid container className={classes.root}>
        <DialogComponent
          open={open}
          handleClose={() => this.handleClose()}
          component={
            <div
              style={{ margin: "auto", textAlign: "center", width: "300px" }}
            >
              <span style={{ display: "flex" }}>
                <span className={classes.d_iconss} />
                <CloseIcon
                  style={{
                    marginTop: -10,
                    marginRight: -12,
                    cursor: "pointer",
                    opacity: 0.7,
                  }}
                  onClick={() => this.handleClose()}
                />
              </span>
              <Typography variant="subtitle2" className={classes.d_title}>
                Do you Want to procced?
              </Typography>
              <Button
                className={classes.clear3}
                onClick={() => this.handleClose()}
              >
                No
              </Button>
              &nbsp;
              <Button
                variant="contained"
                color="primary"
                className={classes.submit2}
                onClick={() => this.handleformsubmit()}
              >
                Yes
              </Button>
            </div>
          }
        />

        <Container maxWidth="xl" className={classes.divs}>
          <Grid container justify="space-between" className={classes.header}>
            <Grid item style={{ margin: "auto" }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
                alt="fis logo"
              />
              <div>Cardholder Portal</div>
            </Grid>
            <Grid item className={classes.divavatars}>
              <Avatar className={classes.avatars} variant="square" />
              {/* <div className={classes.pr}>Parntner Logo</div> */}
            </Grid>
          </Grid>

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
                        type="number"
                        size="small"
                        variant="outlined"
                        placeholder=" Card Number"
                        className={classes.input}
                        onChange={(e) => {
                          this.handleChange("firstName", e.target.value);
                        }}
                        value={this.state.firstName}
                      />
                    </Grid>

                    <Grid item xs={6} sm={2} md={2}>
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
                          value={this.state.validthr}
                          name="validthrou"
                          options={[
                            { value: "01" },
                            { value: "02" },
                            { value: "03" },
                            { value: "04" },
                            { value: "05" },
                          ]}
                          getOptionLabel={(option) => option.value}
                          onChange={(e, v) =>
                            this.handleChange("validthrou", v)
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
                              placeholder="08"
                              className={classes.TextField}
                            />
                          )}
                        />
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sm={2}
                      md={2}
                      className={classes.validthro}
                    >
                      <Autocomplete
                        fullWidth={false}
                        size="small"
                        value={this.state.validthr}
                        name="validthrouyear"
                        options={[
                          { value: "2021" },
                          { value: "2022" },
                          { value: "2023" },
                          { value: "2024" },
                          { value: "2025" },
                        ]}
                        getOptionLabel={(option) => option.value}
                        onChange={(e, v) =>
                          this.handleChange("validthrouyear", v)
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
                            placeholder="2024"
                            className={classes.TextField}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item container xs={12} sm={6} spacing={4}>
                      <Grid item xs={12} sm={12} md={7}>
                        <Typography
                          variant="subtitle2"
                          className={classes.text_title}
                        >
                          Enter last four digit of registered mobile number
                        </Typography>
                        <TextField
                          type="number"
                          size="small"
                          variant="outlined"
                          placeholder=""
                          value={usertype}
                          onChange={(e) =>
                            this.handleChange("", e.target.value)
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
                          className={classes.clear}
                          onClick={() => this.handleClear()}
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
                          type="number"
                          size="small"
                          variant="outlined"
                          placeholder="  OTP Number"
                          className={classes.input}
                          onChange={(e) => {
                            this.handleChange(" OTPNumber", e.target.value);
                          }}
                          value={this.state.OTPNumber}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        className={classes.enterOTP1}
                      >
                        <Button
                          className={classes.clear1}
                          onClick={() => this.handleClear()}
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
                        <Typography
                          variant="subtitle2"
                          className={classes.hint_title2}
                        >
                          Resend OTP
                          <ArrowRightIcon
                            style={{ position: "relative", top: "7px" }}
                          />
                        </Typography>
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
        </Container>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(Signup));
