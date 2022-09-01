import React from "react";
import {
  Button,
  Grid,
  InputAdornment,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  withStyles,
} from "@material-ui/core";

import { withRouter } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { styles } from "./style";
import axios from "axios";

class Signin extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }
  // end\
  componentDidMount = async () => {
    debugger
    await axios
      .get('https://iasuat.fisglobal.com/cardholderservice/api/v1/idpurlgenerate')
      .then((res) => {
        if (res.data) {
          const valData = res?.data;
          this.setState({
            login: valData,
          })
          // console.log(valData)
        }
      })
  }

  render() {
    const { showPassword } = this.state;
    const { classes, handlechange } = this.props;

    return (
      <>
        <div>
          <Grid item xs={12} className={classes.login_details}>
            {/* <Typography className={classes.login_det1}>
              {" "}
              Last Login: 18 Feb 2020 15:22 IST
            </Typography> */}
          </Grid>

          <div>
            {/* Signing title */}
            <Grid item xs={12} className={classes.formHeader}>
              <Typography
                variant="h2"
                component="h2"
                className={classes.mainHeading}
              >
                Existing User{" "}
              </Typography>
            </Grid>
            {/* end */}

            {/* signin form component */}
            <Grid container item xs={12} justify="center">
              <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                {/* <Grid item xs={12} className={classes.form}>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.formInputs}
                      label="Login ID"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      variant="outlined"
                      className={classes.formInputs}
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        type={"password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        labelWidth={70}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container item xs={12} className={classes.userHelpGrid}>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                    justify="flex-start"
                    className={classes.rememberMe}
                  >
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={8}
                    xl={8}
                    className={classes.forgotPassword}
                  >
                    <Typography
                      variant="body1"
                      component="div"
                      onClick={() => handlechange()}
                    >
                      Forgot Login ID or Password?
                      <span className={classes.click}> Click here</span>
                    </Typography>
                  </Grid>
                </Grid> */}
                {/* <Grid item xs={12}>
                            <Button
                                className={classes.signInButtonerr}
                            >
                                Too many attempts, please try again later. </Button>
                        </Grid> */}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="#4BCD3E"
                    disableElevation
                    className={classes.signInButton}
                    onClick={() =>
                      window.location.href = this.state.login
                      // "https://infinity.dev.fiscloudservices.com/idp/SMYNT/?response_type=id_token&client_id=CORTEXCHPORTAL&scope=openid&state=https://iasuat.fisglobal.com/cardholderservice/api/v1/users/welcome&redirect_uri=https://iasuat3.fisglobal.com/cardholderservice/api/v1/users/welcome"
                      //  this.props.history.push("/welcome")
                    }
                  >
                    Login In{" "}
                  </Button>
                  <Typography variant="subtitle2" className={classes.newuser}>
                    New User?
                    <span className={classes.click}
                      onClick={() =>
                        this.props.history.push("/registration")
                      }> Click here</span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* end */}
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(Signin));
