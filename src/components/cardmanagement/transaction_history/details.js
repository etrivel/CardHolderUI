import React from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
  MenuItem,
  Divider,
  Button
} from "@material-ui/core";
import { EdittablesContext } from "../../../contexts/index";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";
import jsPDF from "jspdf";
import { CSVLink } from "react-csv";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import MaterialTable from "material-table";

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
    borderRadius: 4,

    // borderTop: `2px solid ${theme.palette.mainbackground.default}`,
    // borderRight: `2px solid ${theme.palette.mainbackground.default}`,
    // borderLeft: `2px solid ${theme.palette.mainbackground.default}`,
    fontSize: 18,
    // [theme.breakpoints.only('xs')]: {
    //   height: '20px'
    // }

    borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
    fontWeight: "bold",

    padding: "20px",

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


const headers = [
  // { label: "S no", key: "sno" },
  { label: "Account Numer", key: "AccountNumer" },
  { label: "CardIssued Date", key: "cardIssueddate" },
  { label: "PAN", key: "PAN" },
  { label: "Transaction Type", key: "TransactionType" },
  { label: "Transaction Date", key: "TransactionDate" },
  { label: "Billing Amount", key: "BillingAmount" },
  { label: "Description", key: "Description" },
  { label: "Transaction ResponseCode", key: "TransactionResponseCode" },
  { label: "Balance", key: "Balance" },
]


class TransactionTabledetails extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      download: false,
      status: { value: "All", label: "0" },
      fromdate: null,
      usertype: null,
      todate: null,
      filtererr: false,
      menu: [],
      // v: [
      //   {
      //     AccountNumer: "XXXXXXXXXXX2345",
      //     cardIssueddate: "23/09/2020",
      //     PAN: "BHKL FGGR 6879 8810",
      //     TransactionType: "Netbanking",
      //     TransactionDate: "23/09/2020",
      //     BillingAmount: "10000.00",
      //     Description: "XYZ",
      //     TransactionResponseCode: "15202",
      //     Balance: "2309202",
      //   }
      // ],
      menuvalue: "",
      submenu: [],
      submenuvalue: "",
    };
  }

  handleDownload = () => {
    const state = this.state;
    this.setState({
      ...state,
      download: !state.download,
    });
  };
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

  // handleedit = async (val) => { };

  fetchTable = async () => {
    debugger
    const l = this.props.location.state?.valda_
    const v_ = l?.map(v => {
      return {
        AccountNumer: v.panDisplay,
        cardIssueddate: v?.ctxDate ?? "",
        PAN: v?.pan ?? "",
        TransactionType: v?.txnType ?? "",
        TransactionDate: v?.TransactionDate ?? "",
        BillingAmount: v?.billAmount ?? "",
        Description: v?.description ?? "",
        TransactionResponseCode: v?.transCode ?? "",
        Balance: v?.availBalance ?? "",
      }
    })
    this.setState({
      // ...this.state,
      data: v_
    })
  };

  downloadpdf = () => {
    const state = this.state;
    this.setState({
      ...state,
      downloadloading: true,
    });
    // const pdf = new jsPDF('p', 'pt', 'letter');
    // if (state.data && downloadpath) {
    //     pdf.table(1, 1, state.data, downloadpath, { autoSize: true })
    //     pdf.save("Audit.pdf")
    //     this.setState({
    //         ...state,
    //         open: !state.open,
    //     })
    // }
    setTimeout(() => {
      this.setState({
        ...state,
        downloadloading: false,
      });
    }, 3000);
    const doc = new jsPDF();
    doc.autoTable({
      columnStyles: {
        content: 'Text', colSpan: 2, rowSpan: 2, styles: { halign: 'center' }
      },
      body: this.state.data,
      columns: [
        { header: "Account Numer", dataKey: "AccountNumer" },
        { header: "CardIssued Date", dataKey: "cardIssueddate" },
        { header: "PAN", dataKey: "PAN" },
        { header: "Transaction Type", dataKey: "TransactionType" },
        { header: "Transaction Date", dataKey: "TransactionDate" },
        { header: "Billing Amount", dataKey: "BillingAmount" },
        { header: "Description", dataKey: "Description" },
        { header: "Transaction ResponseCode", dataKey: "TransactionResponseCode" },
        { header: "Balance", dataKey: "Balance" },
      ]

    });
    //doc.save("Audit.pdf");
    doc.save("TransactionDetails.pdf");
    this.setState({
      ...state,
      download: !state.download,
    });
  };

  async componentDidMount() {
    debugger
    // axios.get(`${config.api_url}api/v1/institution`).then(res => {
    //     if (res.data) {
    //         const valData = res?.data
    //         this.setState({
    //             institution: valData
    //         })
    //     }
    // }).catch(err => {
    //     console.log("bank portal=>dashbooard=> institution", err)
    // })
    await this.fetchTable();
    var menuData = [];
    // const menu = menulists.filter(v => {
    //   if (v?.childrens?.length > 0) {
    //     v.childrens.filter(l => {
    //       return menuData.push(l)
    //     })
    //   }
    // })

    this.setState({
      ...this.state,
      menu: menuData,
    });
  }
  // end
  handlemenu = (n, v) => {
    const state = this.state;
    this.setState({
      ...state,
      [n]: v,
      submenu: v.child ? v.child : [],
      submenuvalue: !v.child && "",
      filtererr: false,
    });
  };
  handleChangeinputs = (n, v) => {
    const state = this.state;
    this.setState({
      ...state,
      [n]: v,
      filtererr: false,
    });
  };
  handlesubmit = () => { };
  onCancel = () => {
    // this.fetchTable();
    this.Clear();
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

    const { data, download } = this.state;
    // const menuDataMapped =
    //   menu.length > 0
    //     ? menu.map(v => {
    //         if (v) {
    //           return {
    //             value: v?.name,
    //             label: v?.url,
    //             child: v?.childrens
    //           }
    //         } else {
    //           return { value: 'nodata' }
    //         }
    //       })
    //     : []
    return (
      <div className={classes.root}>
        <Container style={{ maxWidth: "1140px" }}>
          <Card className={classes.card} variant="outlined">
            {/* table Component */}

            <CardContent className={classes.card_title}>
              <Grid container spacing={2}>

                <Grid item xs={6} sm={6}>
                  Transaction Details
                </Grid>
                <Grid item xs={6} sm={6} style={{ textAlign: "end" }}>
                  <Typography
                    variant="subtitle1"
                    className={classes.export}
                    onClick={() => this.handleDownload()}
                  >
                    Export <PlayForWorkIcon />
                    {download && (
                      <div className={classes.menus}>
                        <CSVLink filename={"Transactiondetails.csv"} data={data} headers={headers}>
                          <MenuItem uFEFF={true}>CSV</MenuItem>
                        </CSVLink>
                        <Divider />
                        <MenuItem onClick={() => this.downloadpdf()}>
                          PDF
                        </MenuItem>
                      </div>
                    )}
                  </Typography>{" "}
                </Grid>
              </Grid>
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
                  }),
                }}
                columns={[
                  {
                    field: "AccountNumer",
                    title: "Account Numer",
                  },
                  {
                    field: "PAN",
                    title: "PAN",
                  },
                  {
                    field: "TransactionType",
                    title: "Transaction Type",
                  },
                  {
                    field: "TransactionDate",
                    title: "Transaction Date",
                  },
                  {
                    field: "BillingAmount",
                    title: "Billing Amount",
                  },
                  {
                    field: "Description",
                    title: "Description",
                  },
                  {
                    field: "TransactionResponseCode",
                    title: "Transaction Response Code",
                  },
                  {
                    field: "Balance",
                    title: "Balance",
                  },
                ]}
                data={data}

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
              onClick={() => this.props.history.push("/Transaction_filter")}
            >
              <KeyboardBackspaceIcon /> Back
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}
TransactionTabledetails.contextType = EdittablesContext;
export default withStyles(styles)(withRouter(TransactionTabledetails));
