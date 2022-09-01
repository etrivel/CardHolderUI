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
} from "@material-ui/core";
import { EdittablesContext } from "../../../contexts/index";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { Hidden } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import MaterialTable from "material-table";
import axios from "axios";
import config from "../../../config";
import moment from "moment"
// style
const styles = (theme) => ({
  root: {
    width: "100%",
    background: theme.palette.mainbackground.default,
    opacity: 1,
    padding: "30px 0px",
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
  signInButtonerr: {
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
  title: {
    fontSize: 16,
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
    // color: "#012834"
  },
  card: {
    background: theme.palette.background.paper,
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: 16,
    opacity: 1,
    margin: "20px 0px",
    padding: 24,
    "& .MuiPaper-elevation2": {
      boxShadow: "none",
      // border: "1px solid #c9caca30"
    },
    "& .MuiInput-root": {
      // border: "1px solid #c9caca59",
      borderRadius: 6,
      padding: 4,
    },
    "& .MuiInput-underline:before,.MuiInput-underline:hover:not(.Mui-disabled):before,.MuiInput-underline:after":
    {
      borderBottom: "unset",
    },
    "& .MuiToolbar-regular": {
      minHeight: 0,
    },
    "& .MTableToolbar-root-50": {
      marginBottom: 6,
      display: "none",
    },
  },
  summary: {
    cursor: "pointer",
    "& .MuiCardContent-root:last-child": {
      padding: 0,
    },
  },
  card_title: {
    border: " 1px solid #EAEAEA",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",
    // borderTop: `2px solid ${theme.palette.mainbackground.default}`,
    // borderRight: `2px solid ${theme.palette.mainbackground.default}`,
    // borderLeft: `2px solid ${theme.palette.mainbackground.default}`,
    fontSize: 14,
    // [theme.breakpoints.only('xs')]: {
    //   height: '20px'
    // }
    borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
    fontWeight: "bold",
    background: "#F4F5F8 0% 0% no-repeat padding-box;",

    padding: "20px",
    borderRadius: "10px",
    [theme.breakpoints.only("xs")]: {
      height: "20px",
    },
  },
  body: {
    padding: "30px 0px 0px",
  },

  clear: {
    boxShadow: "0px 3px 6px #0049903D",
    border: `1px solid ${theme.palette.primary.main}`,
    opacity: 0.9,
    fontSize: 12,
    borderRadius: 8,
    fontWeight: 600,
    marginRight: 12,
  },
  submit: {
    border: `2px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.main,
    boxShadow: "0px 3px 6px #0049903D",
    borderRadius: 8,
    fontSize: 12,
    opacity: 0.9,
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
  table: {
  },
  input: {
    width: "100%",
  },
  text_title: {
    padding: "6px 0px",
    opacity: 0.9,
  },
  buttons: {
    marginTop: "35px",
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

  hint_title2: {
    color: "#4BCD3E",
    marginTop: "0px",
    textAlign: "end",
    position: "relative",
    left: "40px",
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
  submitbotton: {
    [theme.breakpoints.only("xs")]: {
      marginRight: "0px !important",
    },
    [theme.breakpoints.only("sm")]: {
      marginRight: "0px !important",
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
  btns: {
    margin: "20px 0px",
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
});
// end
const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};
class Cardinfotable extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      OTPNumber: "",
      errdata: "",
      disabled: true,
      mobnumber: "",
      vpan: "",
      query: "",
      disableVal: true,
    };
  }
  // end
  Clear = () => {
    this.setState({
      OTPNumber: "",
    });
  };
  // input handle change funcy
  handlechange = (n, v) => {
    const state = this.state;
    this.setState({
      ...state,
      [n]: v,
      filtererr: false,
    });
  };

  validate = (n) => {
    var valerrlist;

    if (n === "otp") {
      valerrlist = ["cardno", "validthrdate", "validthryear"];
    } else if (n === "validate") {
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

  // handle edit funcy
  apiFetchEdit = async (api, playod, n) => {
    await axios
      .post(`${config.api_url}${api}`, playod)
      .then((res) => {
        if (n === "otp") {
          this.setState({
            disabled: false,
            OTPNumber: res.data?.otp,
            otpId: res.data?.otpId
          });
        } else if (n === "validate") {
          this.setState({ query: "success", disableVal: false });
        } else if (n === "submit") {
          this.props.history.push("/welcome");
        }
      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
  };
  handleedit = (data) => {
    debugger;
    this.setState({
      mobnumber: data.mobNo,
      vpan: data.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan,
    });
  };

  handleSubmit = async () => {
    const body = {
      approverId: "",
      cardStatusChangeReq: [
        {
          actionCode: "",
          reason: "",
          reqId: "",
          statusDesc: "",
          vpan: this.state.vpan ? this.state.vpan : "",
        },
      ],
      checkerId: "",
      flag: "S",
      instCode: loginUser?.[0]?.instCode ?? "",
      makerId: "",
      reqMsgId: "",
    };
    await this.apiFetchEdit("api/v1/card/statuschange", body, "submit");
  };

  handleOtp = async () => {
    const state = this.state;
    const body = {
      cardNumber: "",
      cbsCardNum: "",
      cbsErrorMsg: "",
      cbsMobNum: "",
      channelId: "",
      code: "",
      institutionId: "",
      mobileNumber: state.mobnumber ? state.mobnumber : "",
      otac: "",
      otp: state.OTPNumber ? state.OTPNumber : "",
      otpId: state.otpId ? state.otpId : "",
    };
    await this.apiFetchEdit("api/v1/otp/generate", body, "otp");
  };

  // cardreg = (v, i) => {
  //   debugger
  //   let filtered = v.filter((l, index) => index === i)
  //   let result = filtered[0]['cardRegistrationDate'] ?? null
  //   return result
  // }

  componentDidMount() {
    debugger
    const body = {
      accCurr: "",
      accNo: "",
      clearPan: "",
      custCode: '',
      email: "",
      endRecordNo: "",
      firstName: "",
      idNumber: "",
      instCode: loginUser?.[0]?.instCode ?? "",
      isCVV2Reqired: "",
      isClearPANRequired: "",
      isSHA256PANRequired: "",
      lastName: "",
      // mobNo: loginUser?.mobileNo?? '',
      pflag: "S",
      reqId: "",
      reqMsgId: "",
      seqNo: "",
      startRecordNo: "",
      vpan: loginUser?.[0]?.vpanNo ?? "",
    };
    axios
      .get(`${config.api_url}api/v1/users/getAllRegisterCardDetail/${loginUser?.[0]?.userId}`)
      .then((res) => {
        if (res.data) {
          const valData = res?.data?.customerDetailsEnquiryResponseList;
          const val_ = res.data?.user;
          const value = valData?.map((v, index) => {
            v.CardNo = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.panDisplay?.slice?.(0, 6) + "XXXXXX" + v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.panDisplay?.slice?.(7)
            // loginUser?.[0]?.truncated_card_no?.slice?.(0, 6) + "XXXXXX" + loginUser?.[0]?.truncated_card_no?.slice?.(7);
            // v.accountDetailsResp[0].cardDetailsResp[0].vpan;
            v.CardStatus = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardStatus;
            v.CardIsuDate = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardIssuedDate;
            v.CardRegDate = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardRegistrationDate ? moment(v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardRegistrationDate).format('L') : null;
            // .replaceAll("/", "")
            //  this.cardreg(val_, index);
            return v;
          });
          this.setState({
            ...this.state,
            data: value,
          });
        }
      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
  }

  handleChange = (n, v) => {
    const state = this.state;
    this.setState({
      ...state,
      [n]: v,
      filtererr: false,
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

  handleOtpvalidate = async (n, data) => {
    const state = this.state;
    if (this.validate(n)) {
      const body = {
        cardNumber: "",
        channelId: "SMS",
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
      this.setState({ query: "progress" });
    }
  };
  render() {
    const { classes } = this.props;

    const { data, OTPNumber, disabled, disableVal, errdata, mobnumber, query } =
      this.state;

    return (
      <div className={classes.root}>
        <Container>
          <Card className={classes.card} variant="outlined">
            {/* table Component */}
            <CardContent className={classes.card_title}>
              Registered cards
            </CardContent>
            <br />
            <div style={{ background: "#F4F5F8", padding: 2, borderRadius: 4 }}>
              {" "}
              <MaterialTable
                className={classes.table}
                title={false}
                options={{
                  search: false,
                  sorting: true,
                  pageSize: 5,
                  pageSizeOptions: [5, 10, 50, 100, 200],
                  actionsColumnIndex: -1,
                  rowStyle: (rowData) => ({
                    backgroundColor:
                      rowData.tableData.id % 2 === 0 && "#F8F8FA",
                    height: "50px"
                  }),
                }}
                columns={[
                  {
                    field: "CardNo",
                    title: "Card Number",
                  },
                  {
                    field: "CardStatus",
                    title: "Card Status",
                  },

                  {
                    field: "CardIsuDate",
                    title: "Card Issued Date",
                  },
                  {
                    field: "CardRegDate",
                    title: "Card Registration Date",
                  },
                ]}
                data={data}
              // actions={[
              //   {
              //     icon: "save",
              //     tooltip: "View",
              //     onClick: (event, rowData) => {
              //       this.handleedit(rowData);
              //     },
              //   },
              // ]}
              />
            </div>
            {/* end */}
            <br />
            {/* <CardContent className={classes.card_title}>
              Card Activation
            </CardContent>

            <Container>
              <div className={classes.body}>
                <Grid container spacing={4}>
                  <Grid item container xs={12} sm={6} spacing={2}>
                    <Grid item xs={12} sm={12} md={7} lg={10}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Mobile number
                      </Typography>
                      <TextField
                        value={mobnumber}
                        size="small"
                        variant="outlined"
                        placeholder=""
                        disabled
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
                        onClick={() => this.handleOtp()}
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
                      lg={2}
                      className={classes.enterOTP1}
                    >
                      <Button
                        className={classes.clear1}
                        disabled={disabled}
                        onClick={(e, v) => this.handleOtpvalidate("validate", v)}
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
                        disabled={disableVal}
                        className={classes.submit1}
                        onClick={() => this.handleSubmit()}
                      >
                        SUBMIT
                      </Button>
                      <Button
                        className={classes.clear2}
                        onClick={() => this.Clear()}
                      >
                        CLEAR
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Container> */}
          </Card>
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
Cardinfotable.contextType = EdittablesContext;
export default withStyles(styles)(withRouter(Cardinfotable));
