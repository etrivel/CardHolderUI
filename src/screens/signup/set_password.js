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
  
  // Link,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import DialogComponent from "../../components/dialog/index";

import CloseIcon from "@material-ui/icons/Close";

const valerrlist = ["currentpass", "pass", "newpass"];
// style
const styles = (theme) => ({
  root: {
    width: "100%",
    background: theme.palette.mainbackground.default,
    opacity: 1,
    padding: "30px 0px",
  },
  titledetails: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#012834",
    margin: "14px 0px",
    opacity: 0.9,
  },
  para: {
    margin: "14px 0px",
    fontSize: "14px",
    fontWeight: 500,
    marginLeft: "20px",
    opacity: 0.8,
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  det: {
    padding: "16px 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
    },
  },
  li: {
    opacity: 0.8,
    fontSize: "14px",
    fontWeight: 500,
    margin: "14px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  formGrid: {
    textAlign: "center",
  },
  formHeader: {
    textAlign: "center",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 40,
    },
  },
  formInputs: {
    margin: "10px 0px",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
    },
  },
  userHelpGrid: {
    margin: "10px 0px",
  },
  rememberMe: {
    color: theme.palette.error.main,
    fontSize: 14,
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 6,
    },
  },
  forgotPassword: {
    color: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "flex-end",
    margin: "auto",
    "& a": {
      cursor: "unset",
      textDecoration: "none",
    },
    "& .MuiTypography-body1": {
      fontSize: "0.8rem !important",
      fontWeight: "bold",
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      margin: "auto",
    },
  },
  star: {
    color: theme.palette.error.main,
  },
  text_title_policy: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#012834",
    textDecoration: "underline",
    letterSpacing: 1,
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      marginTop: "52px",
    },
  },

  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  card: {
    background: theme.palette.background.paper,
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: 16,
    opacity: 1,
    margin: "20px 0px",
  },
  card_title: {
    borderBottom: `2px solid ${theme.palette.mainbackground.default}`,
    fontWeight: "bold",
    background:"#F4F5F8",
    fontSize: 17,
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
    border: `1px solid #4BCD3E`,
    opacity: 0.9,
    fontSize: 12,
    borderRadius: 8,
   
    fontWeight: 600,
  },
  submit: {
  
    background: "#4BCD3E",
    boxShadow: "0px 3px 6px #0049903D",
    borderRadius: 8,
    fontSize: 12,
    marginRight: 20,
    opacity: 0.9,
    
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
  dialog: {
    opacity: 0.8,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "& h2": {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      color: "#012834",
      fontWeight: 600,
      fontSize: "16px",
    },
  },
  dialogmain: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "100%",
    },
  },
  //  submit: {
  //     border: `2px solid ${theme.palette.primary.main}`,
  //     background: theme.palette.primary.main,
  //     boxShadow: "0px 3px 6px #0049903D",
  //     borderRadius: 4,
  //     fontSize: 10,
  //     float: "right",
  //     opacity: 0.9,
  //     "&:hover": {
  //         background: theme.palette.primary.main,
  //     },
  //     [theme.breakpoints.only('xs')]: {
  //         fontSize: 9,
  //     }
  // },
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
    width: "50%",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  d_iconss: {
    marginBottom: 4,
    flexGrow: 1
  },
});
// end

class Changepassword extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      open1: false,
      currentpass: "",
      pass: "",
      newpass: "",
      error: {},
      open: false,
      data: [
        "Have 15 or more characters.",
        "Contain three of the following four types:",
        "English uppercase character(A - Z)",
        "English lowercase character(a - z)",
        "Numeric(0 - 9)",
        "Special character(!, ., ;, $, #, @)",
        "Not contain your user name(employee id) or your first or last name.",
      ],
      data2: [
        "Select a phrase that's easy for you to remember, and then add complexity by using spaces, numbers",
        "and/or special characters.",
        "Leverage dictionary words (except for words used in common passwords, like 'password').",
        "Consider misspelling words to add complexity (for example, kidz for kids).",
        "Avoid adjacent keyboard characters, like 'qwerty'.",
        "Avoid using personal details, such as your social security number or birthdate.",
        "Don't use your FNFIS password for other applications and websites, including consumer sites.",
        "Examples (Do not use these as they are known by all employees):",
      ],
    };
  }
  // end
  Clear = () => {
    this.setState({
      submit: false,
      open: false,
      currentpass: "",
      pass: "",
      newpass: "",
      error: {},
    });
  };
  validate = () => {
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
  // handle submit funcy
  handlesubmit = () => {
    this.setState({
      ...this.state,
      open:true,
    })
    /* const state = this.state;
    if (this.validate()) {
      if (state.newpass !== state.pass) {
        state.error["mismatch"] = true;
        this.setState({ ...state });
        return false;
      } else {
        this.setState({ ...state, submit: true, open: true });
        setTimeout(() => {
          this.setState({ submit: false });
          this.props.history.push("/home");
        }, 3000);
      }
    } */
  };
  // end
  handleChange = (n, v) => {
    const state = this.state;
    state.error[n] = false;
    this.setState({
      ...state,
      [n]: v,
    });
  };
  handleClose = () => {
    const state = this.state
    this.setState({
      ...state,
      open: !state.open
    })
  }
  handlecls = () => {
    const state = this.state;
    this.setState({
      ...state,
      open1: !this.state.open1,
    });
  };
  render() {
    const { classes } = this.props;

    const {
      open,
     
      error,
      newpass,
      pass,
      currentpass,
      open1,
      data,
      data2,
    } = this.state;

    return (
      <div className={classes.root}>
        <Container>
          {/* dialogbox component */}
          {//submit && (

<DialogComponent
        open={open}
        handleClose={() => this.handleClose()}
        component={
          <div style={{ margin: 'auto', textAlign: 'center',width:"300px"}}>
            <span style={{ display: 'flex' }}>
              <span className={classes.d_iconss} />
              <CloseIcon
                style={{
                  marginTop: -10,
                  marginRight: -12,
                  cursor: 'pointer',
                  opacity: 0.7
                }}
                onClick={() => this.handleClose()}
              />
            </span>
            <Typography variant='subtitle2' className={classes.d_title}>
            Do you Want to procced?
            </Typography>
            <Button
              className={classes.clear}
              onClick={() => this.handleClose()}
            >
              No
            </Button>
            &nbsp;
            <Button
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={() =>this.props.history.push("/home") }
            >
              Yes
            </Button>
          </div>
        }
      />




            // <DialogComponent
            //   open={open}
            //   handleClose={this.handleClose}
            //   component={
            //     <div>
            //       <CheckCircleOutlineIcon className={classes.d_icon} />
            //       <Typography variant="subtitle2" className={classes.d_title}>
            //         {" "}
            //       {" "}
            //       </Typography>
            //       <Button
            //         variant="contained"
            //         color="primary"
            //         disableElevation
            //         className={classes.d_btn}
            //         onClick={() => this.props.history.push("/home")}
            //       >
            //         Ok
            //       </Button>
            //     </div>
            //   }
            // />
          //)
          }
          {/* end */}
          <Dialog
            open={open1}
            onClose={() => this.handlecls()}
            className={classes.dialogmain}
          >
            <DialogTitle className={classes.dialog}>
              Password Policy{" "}
              <CloseIcon
                style={{ color: "#0000007A", cursor: "pointer" }}
                onClick={() => this.handlecls()}
              />
            </DialogTitle>
            <DialogContent className={classes.det}>
              <Typography className={classes.titledetails}>
                Rules - Your password must:
              </Typography>
              {data.map((v) => {
                return <li className={classes.li}>{v}</li>;
              })}
              <Typography className={classes.titledetails}>
                Guidance - Use a complex yet practicable password:
              </Typography>
              {data2.map((v) => {
                return <li className={classes.li}>{v}</li>;
              })}
              <p className={classes.para}>My Kidz Like 2 Swim</p>
              <p className={classes.para}>@IloveAlaska-intheSummer</p>
              <p className={classes.para}>Why would u do that!</p>
              <p className={classes.para}>
                If you have any questions or issues, you may contact Employee
                Support at: http://employeesupport.fnfis.com
              </p>
              <Typography className={classes.titledetails}>
                For assistance:
              </Typography>
              <p className={classes.para}>
                FIS Employees - Employee Support: 800.448.8625 (US);
                856.470.2445 (Outside the US)
              </p>
              <Button
                variant="contained"
                className={classes.submit}
                onClick={() => this.handlecls()}
              >
                {"Close"}
              </Button>
            </DialogContent>
          </Dialog>
          {/* card component */}
        
          {/* end */}

          {/* card component */}
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.card_title}>
            Create Login ID and Password
            </CardContent>

            <Container>
              <div className={classes.body}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Login Id <span className={classes.star}>*</span>
                    </Typography>
                    <TextField
                      onChange={(e) =>
                        this.handleChange("currentpass", e.target.value)
                      }
                      value={currentpass}
                      fullWidth={true}
                      style={{ width: "100%" }}
                      helperText={
                        error.currentpass &&
                        "Please enter your current password"
                      }
                      error={error.currentpass && true}
                      type="password"
                      size="small"
                      variant="outlined"
                      placeholder="Login ID"
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography
                      onClick={() => this.handlecls()}
                      variant="subtitle2"
                      className={classes.text_title_policy}
                    >
                      Password Policy ?
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      New Password <span className={classes.star}>*</span>
                    </Typography>
                    <TextField
                      helperText={
                        error.pass && "Please enter your new password"
                      }
                      onChange={(e) =>
                        this.handleChange("pass", e.target.value)
                      }
                      value={pass}
                      error={error.pass && true}
                      type="password"
                      size="small"
                      variant="outlined"
                      placeholder="New Password"
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle2"
                      className={classes.text_title}
                    >
                      Confirm New Password{" "}
                      <span className={classes.star}>*</span>
                    </Typography>
                    <TextField
                      helperText={
                        this.state.error.mismatch
                          ? "The confirm new password is mismatched with new password"
                          : error.newpass &&
                            "Please enter your confirm password"
                      }
                      error={
                        (error.newpass || this.state.error.mismatch) && true
                      }
                      onChange={(e) =>
                        this.handleChange("newpass", e.target.value)
                      }
                      value={newpass}
                      type="password"
                      size="small"
                      variant="outlined"
                      placeholder="Confirm New Password"
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  className={classes.btns}
                >
                  <Grid item>
                  <Button
                      variant="contained"
                      className={classes.submit}
                      onClick={() => this.handlesubmit()}
                    >
                        REGISTER
                    </Button>

                    <Button
                      className={classes.clear}
                      onClick={() => this.Clear()}
                    >
                      CLEAR
                    </Button>
                   
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Card>
          {/* end */}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Changepassword));
