import React from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Typography,
  withStyles,
  Grid,
  Button,
} from "@material-ui/core";
import { EdittablesContext } from "../../../contexts/index";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MaterialTable from "material-table";
import axios from "axios";
import config from "../../../config";
import moment from "moment";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// style
const styles = (theme) => ({
  root: {
    width: "100%",
    background: theme.palette.mainbackground.default,
    opacity: 1,
    padding: "30px 0px",
    overflowX: "hidden",
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // borderTop: `2px solid ${theme.palette.mainbackground.default}`,
    // borderRight: `2px solid ${theme.palette.mainbackground.default}`,
    // borderLeft: `2px solid ${theme.palette.mainbackground.default}`,

    borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
    fontWeight: "bold",
    fontSize: 18,
    padding: "0px 0px 20px 0px",
    // [theme.breakpoints.only('xs')]: {
    //   height: '20px'
    // }
  },
  text_title: {
    padding: "6px 0px",
    opacity: 0.9,
  },
  body: {
    padding: "30px 0px 0px",
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
    marginRight: 12,
  },
  submit: {
    border: `2px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.main,
    boxShadow: "0px 3px 6px #0049903D",
    borderRadius: 8,
    margin: "0px 10px 0px 0px",
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
  table: {
    fontSize: "12px",
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
});
// end
const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};

class TransactionFilter extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      institution: [],
      institutionvalue: "",
      data: [],
      status: { value: "All", label: "0" },
      fromdate: null,
      todate: null,
      filtererr: false,
      menuvalue: "",
      submenu: [],
      submenuvalue: "",
    };
  }
  // end
  Clear = () => {
    this.setState({
      fromdate: null,
      todate: null,
    });
  };
  // input handle change funcy
  handleChange = (n, v) => {
    debugger;
    const state = this.state;
    this.setState({
      ...state,
      [n]: v,
    });
  };

  handleTransaction = async (val) => {
    debugger
    const state = this.state;
    this.context.setData({ ...this.context, transactiontable: val });
    this.props.history.push({
      pathname: "/Transaction_filter_details",
      state: {
        valda_: [val]
      }
    });
  };
  // handle edit funcy

  apiFetchEdit = async (api, playod, search) => {
    debugger
    await axios
      .post(`${config.api_url}${api}`, playod)
      .then((res) => {
        const d_ = res.data;
        if (search === "/Transaction_filter_details") {
          const p_ = d_?.transactionDetailsRes?.transactionDetailsResp?.map((v) => {
            return {
              TranscType: v?.txnType ?? "",
              TranscID: v?.tlogId ?? "",
              TranscStatus: "Active" ?? "",
              TermCode: v?.terminalSeq ?? "",
              BillAmount: v?.billAmount ?? "",
              credit: v?.transDesc === "ACCOUNT LOAD" ? "Credit" : "Debit" ?? "",
              TransactionDate: moment(v?.dateLocal).format('DD/MM/YYYY')
            }
          })
          this.setState({
            ...this.state,
            values: d_?.transactionDetailsRes?.transactionDetailsResp?.length > 0 ? p_ : []
          })
        }
        this.setState({ data: d_ })
      })
      .catch((error) => {
        this.setState({
          errdata: error.message,
        });
      });
    console.log(this.state.data)
  };

  handleBack = () => {
    this.props.history.push("/Transaction_table")
  };

  componentDidMount = async () => {
    debugger
    const fromViewAccBalance = this.props.location?.state?.fromViewAccBalance;
    const location = window.location.pathname;

    if (!fromViewAccBalance) {
      const val = this.context.transactiondetails?.customerEnquiryRes?.custDetailsResp?.[0];
      const state = this.state;
      const dob = new Date();

      const body = {
        accNo: val?.accountDetailsResp?.[0]?.accNo,
        clearPan: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.clearPan,
        endDate: (state?.todate ? moment(state.todate).format("YYYY/MM/DD").replaceAll("/", "") : "") || (dob ? moment(dob).format("YYYY/MM/DD").replaceAll("/", "") : ""),
        endRecordNo: 0,
        instCode: loginUser?.[0]?.instCode,
        pflag: "S",
        reqId: "",
        reqMsgId: "",
        rrNo: "",
        startDate: ("20000909") || (state?.fromdate ? moment(state.fromdate).format("YYYY/MM/DD").replaceAll("/", "") : ""),
        startRecordNo: 0,
        vpan: val?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan,
      };
      await this.apiFetchEdit(
        "api/v1/gettransactiondetails",
        body,
        "/Transaction_filter_details"
      );
      const valdata = (this.state?.data?.transactionDetailsRes?.transactionDetailsResp) || (this.props?.location?.state?.valtran?.transactionDetailsRes?.transactionDetailsResp);
      // const v_ = this.state?.data?.transactionDetailsRes?.transactionDetailsResp;
      const val_ = valdata?.map((v) => {
        v.TranscType = v?.txnType ?? "";
        v.TranscID = v?.tlogId ?? ""
        v.TranscStatus = "Active" ?? ""
        v.TermCode = v?.terminalSeq ?? ""
        v.BillAmount = v?.billAmount.includes("-") ? v?.billAmount.replace('-',''): v?.billAmount
       // v.credit = v?.transDesc === "ACCOUNT LOAD" ? "Credit" : "Debit" ?? ""
       v.credit = v?.billAmount.includes("-") ? "credit" : "Debit"
        v.TransactionDate = moment(v?.dateLocal).format('DD/MM/YYYY');
      })
      this.setState({ values: valdata })
    }
    else if (location === "/cardholder/Transaction_filter") {
      debugger
      const valdata = (this.state?.data?.transactionDetailsRes?.transactionDetailsResp) || (this.props?.location?.state?.valtran?.transactionDetailsRes?.transactionDetailsResp) || [];
      // const v_ = this.state?.data?.transactionDetailsRes?.transactionDetailsResp;
      const val = valdata?.map((v) => {
        v.TranscType = v?.txnType || "";
        v.TranscID = v?.tlogId || ""
        v.TranscStatus = "Active" || ""
        v.TermCode = v?.terminalSeq || "";
        v.BillAmount = v?.billAmount || "";
        v.credit = "Credit" || ""
        v.TransactionDate = moment(v?.dateLocal).format('DD/MM/YYYY') || "";
      })
      // console.log(val)
      this.setState({ values: valdata })
    }
  };

  handlesubmit = async () => {
    debugger
    const val = this.context?.transactiondetails;
    const state = this.state;
    const body = {
      accNo: val?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.accNo ?? "",
      clearPan: val?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.clearPan ?? "",
      endDate: state.todate ? moment(state.todate).format("YYYY/MM/DD").replaceAll("/", "") : "",
      endRecordNo: 0,
      instCode: loginUser?.[0]?.instCode,
      pflag: "S",
      reqId: "",
      reqMsgId: "",
      rrNo: "",
      startDate: state.fromdate ? moment(state.fromdate).format("YYYY/MM/DD").replaceAll("/", "") : "",
      startRecordNo: 0,
      vpan: val?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.vpan ?? "",
      //'ER00000000011374'
    };
    await this.apiFetchEdit(
      "api/v1/gettransactiondetails",
      body,
      "/Transaction_filter_details"
    );
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

    const {
      data,
      todate,
      fromdate,
      filtererr,
    } = this.state;

    return (
      <div className={classes.root}>
        <Container>
          {/* Breadcrumbs Component */}

          {/* end */}
          {/* Card Component in add form in modify user*/}
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.card_title}>Filter By</CardContent>
            <div className={classes.body}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      From Date
                    </Typography>
                    <KeyboardDatePicker
                      style={{ width: "100%", margin: 0 }}
                      inputVariant="outlined"
                      margin="normal"
                      format="yyyy-MM-dd"
                      value={this.state.fromdate}
                      onChange={(e) => this.handleChange("fromdate", e)}
                      // minDate={`${new Date().getMonth() + 1
                      //   }/01/${new Date().getFullYear()}`}
                      onKeyPress={(e) => this.dateval(e)}
                      placeholder=""
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      size="small"
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      To Date
                    </Typography>
                    <KeyboardDatePicker
                      style={{ width: "100%", margin: 0 }}
                      inputVariant="outlined"
                      margin="normal"
                      format="yyyy-MM-dd"
                      // minDate={moment(fromdate)}
                      value={this.state.todate}
                      onKeyPress={(e) => this.dateval(e)}
                      onChange={(e) => {
                        this.handleChange("todate", e);
                      }}
                      placeholder=""
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      size="small"
                    />
                  </MuiPickersUtilsProvider>
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
                  {filtererr && (
                    <Button className={classes.signInButtonerr}>
                      {!this.state.fromdate && !this.state.todate
                        ? "Please select/fill atleast one field"
                        : "No records found"}
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.submit}
                    onClick={() => this.handlesubmit()}
                  >
                    Search
                  </Button>
                  <Button
                    className={classes.clear}
                    onClick={() => this.Clear()}
                  >
                    Clear
                  </Button>
                </Grid>
              </Grid>
            </div>
            {/* table Component */}
            <br />
            <br /> <br />
            <CardContent className={classes.card_title}>
              Transaction Details
            </CardContent>
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
                  }),
                }}
                columns={[
                  {
                    field: "TranscType",
                    title: "Transaction Type",
                  },
                  {
                    field: "TranscID",
                    title: "Transaction ID",
                  },
                  {
                    field: "TranscStatus",
                    title: "Transaction Status",
                  },
                  {
                    field: "TermCode",
                    title: "Terminal Code",
                  },
                  {
                    field: "BillAmount",
                    title: "Billing Amount",
                  },
                  {
                    field: "credit",
                    title: "Debit/ Credit",
                  },
                  {
                    field: "TransactionDate",
                    title: "Transaction Date",
                  },
                ]}
                data={this.state?.values}
                actions={[
                  {
                    icon: "save",
                    tooltip: "View",
                    onClick: (event, rowData) => {
                      debugger
                      this.handleTransaction(rowData);
                    },
                  },
                ]}
              />
            </div>
            {/* end */}
          </Card>
          {/* end */}
          <div style={{ float: "right" }}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.btn} balanceinfo
              onClick={() => (this.props.location?.state?.fromViewAccBalance ? this.props.history.push('/balanceinfo') : this.state?.val__ ? this.props.history.push('/Transaction_table') : this.props.history.push('/balanceinfo'))}
            >
              <KeyboardBackspaceIcon /> Back
            </Button>
          </div>
        </Container>

      </div>
    );
  }
}
TransactionFilter.contextType = EdittablesContext;
export default withStyles(styles)(withRouter(TransactionFilter));
