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
import DateFnsUtils from "@date-io/date-fns";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import MaterialTable from "material-table";
import axios from "axios";
import config from "../../../config";
import moment from "moment";

// style
const styles = (theme) => ({
  root: {
    width: "100%",
    background: theme.palette.mainbackground.default,
    opacity: 1,
    padding: "30px 0px",
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
    "& .MuiInput-underline:before,.MuiInput-underline:hover:not(.Mui-disabled):before,.MuiInput-underline:after": {
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
    fontWeight: "bold",
    fontSize: 14,
    // [theme.breakpoints.only('xs')]: {
    //   height: '20px'
    // }
    borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
    background: "#F4F5F8 0% 0% no-repeat padding-box;",
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
  table: {},
  input: {
    width: "100%",
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
    padding: "10px 16px",
    marginBottom: "30px",
    marginTop: "30px",

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
  maintable: {
    "& .MuiTypography-h6": {
      fontSize: "14px"
    }
  }
});
// end
const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};
class Balanceinfotable extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      cardNo: " ",
      Totbalance: "",
      currtype: "",
      data: [],
      errdata: "",
    };
  }
  // end
  Clear = () => {
    this.setState({});
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
  // end

  handleedit = (val) => {
    debugger;
    this.setState({
      cardNo: val[0]?.CardNo,
      Totbalance: val?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.avlBalance,
      currtype: val?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.currencyCode,
      daval: val?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan
    });
  };
  // cardreg = (v, i) => {
  //   let filtered = v.filter((l, index) => index === i)
  //   let result = filtered[0]['CardRegistrationDate'] ?? null
  //   return result
  // }
  componentDidMount() {
    debugger
    this.setState({
      ...this.state,
      instCode: loginUser?.instCode ?? '',
    })
    const body = {
      accCurr: "",
      accNo: "",
      clearPan: "",
      custCode: "",
      email: "",
      endRecordNo: "",
      firstName: "",
      idNumber: "",
      instCode: loginUser?.[0]?.instCode ?? "",
      // loginUser?.instCode ?? '',
      isCVV2Reqired: "",
      isClearPANRequired: "Y",
      isSHA256PANRequired: "",
      lastName: "",
      // mobNo: loginUser?.mobileNo ?? '',
      pFlag: "s",
      reqId: "",
      reqMsgId: "",
      seqNo: "",
      startRecordNo: "",
      vpan: loginUser?.[0]?.vpanNo ?? '',
    };
    axios
      .get(`${config.api_url}api/v1/users/getAllRegisterCardDetail/${loginUser?.[0]?.userId}`)
      .then((res) => {
        if (res.data) {
          const valData = res?.data?.customerDetailsEnquiryResponseList;
          const val_ = res.data?.user;
          let value = valData?.map((v, index) => {
            v.CardNo = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.panDisplay?.slice?.(0, 6) + "XXXXXX" + v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.panDisplay?.slice?.(7)
            // loginUser?.[0]?.truncated_card_no?.slice?.(0, 6) + "XXXXXX" + loginUser?.[0]?.truncated_card_no?.slice?.(7);
            // v.accountDetailsResp[0].cardDetailsResp[0].vpan;
            v.cardStatus = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardStatus;
            v.cardIssueddate = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardIssuedDate;
            v.CardRegistrationDate = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardRegistrationDate ? moment(v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardRegistrationDate).format('L') : null;
            //  this.cardreg(val_, index);
            return v;
          });
          this.setState({
            ...this.state,
            data: value,
          });
          // console.log(valData)
        }

      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
  }


  handleClear = () => {
    debugger
    // const data = this.state.data?.[0]?.customerEnquiryRes?.custDetailsResp?.[0]
    // const data = this.state.daval.map(v => {
    //   return { value: v?.vpanNo }
    // })
    const data = this.state.daval
    const dob = new Date();
    axios
      .post(`${config.api_url}api/v1/gettransactiondetails`, {
        "instCode": loginUser?.[0]?.instCode,
        "pFlag": "S",
        "reqId": "",
        "vpan": data ?? "",
        "clearPan": "",
        "accNo": "",
        "rrNo": "",
        "startDate": "20000909",
        "reqMsgId": "",
        "endDate": (dob ? moment(dob).format("YYYY/MM/DD").replaceAll("/", "") : "" || ""),
        "startRecordNo": "",
        "endRecordNo": ""
      })
      .then((res) => {
        if (res.data) {
          const valData = res?.data;
          this.setState({
            ...this.state,
            dataval: valData,
          });
          this.props.history.push({
            pathname: "/Transaction_filter",
            state: {
              fromViewAccBalance: true,
              valtran: this.state.dataval
            }
          });
        }
      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
    console.log(this.state.dataval)
  }

  handleChange = (n, v) => {
    const state = this.state;
    state.error[n] = false;
    this.setState({
      [n]: v,
    });
  };

  dateval = (e) => {
    var keycode = e.which ? e.which : e.keyCode;
    if (keycode <= 48 && keycode >= 57) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  };
  render() {
    const { classes } = this.props;

    const { data, error, date, cardNo, Totbalance, currtype, datas } = this.state;

    return (
      <div className={classes.root}>
        <Container>
          <Card className={classes.card} variant="outlined">
            {/* table Component */}
            <CardContent className={classes.card_title}>
              View Account Balance
            </CardContent>
            <br />
            <div className={classes.maintable} style={{ background: "#F4F5F8", padding: 2, borderRadius: 4 }}>
              {" "}
              <MaterialTable
                className={classes.table}
                title={false}
                options={{
                  selection: true,
                  search: false,
                  sorting: true,
                  pageSize: 5,
                  pageSizeOptions: [5, 10, 50, 100, 200],
                  actionsColumnIndex: -1,
                  rowStyle: (rowData) => ({
                    backgroundColor:
                      rowData.tableData.id % 2 === 0 && "#F8F8FA",
                  }),
                }}
                columns={[
                  {
                    field: "CardNo",
                    title: "Card Number",
                  },
                  {
                    field: "cardStatus",
                    title: "Card Status",
                  },

                  {
                    field: "cardIssueddate",
                    title: "Card Issued Date",
                  },
                  {
                    field: "CardRegistrationDate",
                    title: "Card Registration Date",
                  },
                ]}
                data={data}
                onSelectionChange={(rows) => this.handleedit(rows)}
              />
            </div>
            {/* end */}
            <br />

            <Container>
              <div className={classes.body}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Card Number
                    </Typography>
                    <TextField
                      size="small"
                      name="cardnumber"
                      helperText={
                        error?.cardNo && "Please enter your card Number"
                      }
                      // onKeyPress={(e) => this.textvalidation(e)}
                      error={error?.cardNo}
                      onChange={(e) =>
                        this.handleChange("cardnumber", e.target.value)
                      }
                      variant="outlined"
                      placeholder=""
                      style={{ width: "100%" }}
                      value={cardNo}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Total Available Balance
                    </Typography>
                    <TextField
                      size="small"
                      name="Totalbalance"
                      helperText={error?.Totbalance && ""}
                      error={error?.Totbalance}
                      // onKeyPress={(e) => this.textvalidation(e)}
                      onChange={(e) =>
                        this.handleChange("totbalance", e.target.value)
                      }
                      variant="outlined"
                      placeholder=""
                      style={{ width: "100%" }}
                      value={Totbalance}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Currency Type
                    </Typography>
                    <TextField
                      size="small"
                      name="Totalbalance"
                      helperText={error?.financialEntity && ""}
                      error={error?.financialEntity}
                      // onKeyPress={(e) => this.textvalidation(e)}
                      onChange={(e) =>
                        this.handleChange("currtype", e.target.value)
                      }
                      variant="outlined"
                      placeholder=""
                      style={{ width: "100%" }}
                      value={currtype}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Typography
                        variant="subtitle2"
                        className={classes.text_title}
                      >
                        Date
                      </Typography>
                      <KeyboardDatePicker
                        style={{ width: "100%", margin: 0 }}
                        inputVariant="outlined"
                        margin="normal"
                        format="MM/dd/yyyy"
                        // disabled={checkerDisabled ? true : false}
                        value={date}
                        name="date"
                        maxDate={new Date()}
                        onChange={(e) => this.handleChange("date", e)}
                        placeholder="Date"
                        onKeyPress={(e) => this.dateval(e)}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                        size="small"
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ textAlign: "end" }}>
                    <Button
                      className={classes.clear1}
                      onClick={() => this.handleClear()}
                    >
                      Click to view transaction details
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
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
Balanceinfotable.contextType = EdittablesContext;
export default withStyles(styles)(withRouter(Balanceinfotable));
