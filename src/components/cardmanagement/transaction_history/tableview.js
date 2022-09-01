import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Card, CardContent, withStyles, Button } from "@material-ui/core";
import { EdittablesContext } from "../../../contexts/index";
import VisibilityIcon from "@material-ui/icons/Visibility";
import moment from "moment"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import MaterialTable from "material-table";
import axios from "axios";
import config from "../../../config";
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
  table: {},
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
class TransactionTable extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // end
  Clear = () => {
    this.setState({
      institutionvalue: "",
      status: "",
      fromdate: null,
      todate: null,
      filtererr: false,
      menuvalue: "",
      submenuvalue: "",
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
  // end
  // handle submit funcy
  // handlesubmit = () => {
  // const state = this.state;
  // this.setState({ ...state, submit: true, open: true })
  // setTimeout(() => {
  //     this.setState({ submit: false });
  //     this.props.history.push("/modify-usermanagement-table")
  // }, 3000);
  // }
  // end

  // handle edit funcy

  handledata = (val) => {
    debugger;
    this.context.setData({ ...this.context, transactiondetails: val });
    this.props.history.push({
      pathname: "/Transaction_filter",
      // state: {
      //   fromViewAccBalance: true
      // }
    });
  };
  handleedit = async (val) => { };
  fetchTable = () => { };

  // cardreg = (v, i) => {
  //   let filtered = v.filter((l, index) => index === i)
  //   let result = filtered[0]['CardRegistrationDate'] ?? null
  //   return result
  // }

  componentDidMount() {
    debugger;
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
      isCVV2Reqired: "",
      isClearPANRequired: "",
      isSHA256PANRequired: "",
      lastName: "",
      // mobNo: loginUser?.mobileNo ?? '',
      pflag: "s",
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

          const value = valData?.map((v, index) => {
            v.cardNo = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.panDisplay?.slice?.(0, 6) + "XXXXXX" + v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.panDisplay?.slice?.(7)
            // loginUser?.[0]?.truncated_card_no?.slice?.(0, 6) + "XXXXXX" + loginUser?.[0]?.truncated_card_no?.slice?.(7);
            // v.accountDetailsResp[0].cardDetailsResp[0].vpan;
            v.cardStatus = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardStatus;
            v.cardIssueddate = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardIssuedDate;
            v.CardRegistrationDate = v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardRegistrationDate ? moment(v?.customerEnquiryRes?.custDetailsResp?.[0]?.accountDetailsResp?.[0]?.cardDetailsResp?.[0]?.cardRegistrationDate).format('L') : null;
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
  // end

  handlesubmit = () => { };
  onCancel = () => {
    this.fetchTable();
    this.Clear();
  };

  render() {
    const { classes } = this.props;

    const { data } = this.state;

    return (
      <div className={classes.root}>
        <Container>
          <Card className={classes.card} variant="outlined">
            {/* table Component */}
            <CardContent className={classes.card_title}>
              View Transaction Details
            </CardContent>
            <br />
            <div style={{ background: "#F4F5F8", borderRadius: 4 }}>
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
                    field: "cardNo",
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
                actions={[
                  (rowData) => ({
                    icon: () => (
                      <VisibilityIcon
                        onClick={() => this.handledata(rowData)}
                        fontSize="small"
                        style={{ color: "#728691" }}
                      />
                    ),

                    tooltip: "View",
                  }),
                ]}
              // com
              />
            </div>
            {/* end */}
            <br />
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
TransactionTable.contextType = EdittablesContext;
export default withStyles(styles)(withRouter(TransactionTable));
