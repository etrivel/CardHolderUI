import React from "react";
import { Grid, Hidden, Container, Avatar, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { styles } from "./style";
import Signin from "./signin";
import Forgetpassword from "./forgot_passwod";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { EdittablesContext } from "../../contexts/index";
// import axios from "axios";
// import config from "../../config";
class Login extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      showpasswordreset: false,
    };
  }
  // end
  componentDidMount() {
    // the fetch api
    localStorage.setItem("userId", "USR001");
    localStorage.setItem("institutionId", 1);
  }
  // input handle change funcy
  handlechange = () => {
    const state = this.state;
    this.setState({
      ...state,
      showpasswordreset: !state.showpasswordreset,
    });
  };
  // end

  render() {
    const { classes } = this.props;

    const { showpasswordreset } = this.state;

    return (
      <Grid container className={classes.root}>
        <Container maxWidth="xl" className={classes.divs}>
          <Grid container justify="space-between" className={classes.header}>
            <Grid item style={{ margin: "auto" }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
                alt="fis logo"
              />
              <div> Cardholder Portal</div>
            </Grid>
            <Grid item className={classes.divavatars}>
              <Avatar className={classes.avatars} variant="square" />
              {/* <div className={classes.pr}>Parntner Logo</div> */}
            </Grid>
          </Grid>
          <Container maxWidth="lg" className={classes.divcom}>
            <div className={classes.divcomss}>
              {/* Card Component in signin*/}
              <Card className={classes.rootCard}>
                <Grid container item xs={12} className={classes.mainContent}>
                  <Grid item xs={6} className={classes.illustratorGrid}>
                    <Hidden smDown>
                      <Grid item xs={12} className={classes.illustrator}>
                        <div className={classes.logo}>
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/logo_2.svg`}
                            alt="fis logo"
                          />
                        </div>
                        <img
                          width="100%"
                          height="100%"
                          src={`${process.env.PUBLIC_URL}/assets/Group 6047.png`}
                          alt="fis logo"
                        />
                      </Grid>
                    </Hidden>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className={classes.formGrid}
                  >
                    {showpasswordreset ? (
                      <Forgetpassword handlechange={this.handlechange} />
                    ) : (
                      <Signin handlechange={this.handlechange} />
                    )}
                  </Grid>
                </Grid>
              </Card>
              {/* end */}
            </div>

            {/* <div>
              <Grid item xs={12} className={classes.back1}>
                <Button className={classes.login_back}>
                  {" "}
                  <ArrowBackIcon className={classes.backarr} />
                  Go To Home Page
                </Button>
              </Grid>
            </div> */}
          </Container>
        </Container>
      </Grid>
    );
  }
}
Login.contextType = EdittablesContext;

export default withStyles(styles)(withRouter(Login));
