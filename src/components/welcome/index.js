import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import axios from "axios";
import config from "../../config";
import jwt from "jsonwebtoken"
import moment from "moment";

// style
const styles = (theme) => ({
  root: {
    width: "100%",
    background: theme.palette.mainbackground.default,
    padding: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "70px 0px",
    },
  },
  rootCard: {
    // backgroundImage: `url("../assets/Mask Group 2.png")`,
    // backgroundImage: `url("/assets/business-woman-hand-typing-laptop-keyboard-with-financial-cha.png")`,
    backgroundImage: `url("${process.env.PUBLIC_URL}/assets/business-woman-hand-typing-laptop-keyboard-with-financial-cha.png")`,
    backgroundPosition: "center",
    // backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    borderRadius: 16,
    boxShadow: "0px 35px 50px #70707028 !important",
    padding: "86px 40px",
    // margin: "40px",
    [theme.breakpoints.down("xs")]: {
      margin: "0px",
      padding: "66px 40px",
    },
  },
  illustrator: {
    opacity: 0.9,
    textAlign: "center",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 5px 10px #00000029",
    borderRadius: "16px",
    padding: 60,
    [theme.breakpoints.down("xs")]: {
      padding: "30px 20px",
    },
  },
  illustratorGrid: {
    // borderRight: `1px solid ${theme.palette.mainbackground.default}`,
  },
  mainContent: {
    display: "flex",
    alignItems: "center",
  },
  Welcome: {
    color: theme.palette.primary.main,
    fontSize: 22,
    fontWeight: 600,
  },
  username: {
    opacity: 0.9,
    fontWeight: 600,
  },
  userid: {
    fontSize: 16,
    opacity: 0.8,
    marginTop: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
    },
  },
});
// end
const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};

class Welcome extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      valueData: ""
    };
  }
  // end


  async componentDidMount() {
    debugger
    const locationPath = new URLSearchParams(this.props.location.search ||
      this.props.match.params.id_token).get("id_token")
    // btoa Encode
    // atob Dccode
    const id_Token = jwt.decode(locationPath)

    if (id_Token) {
      let expires_in = id_Token?.expires_in;
      // if (id_Token) {
      //   axios
      //     .get(`${config.api_url}api/v1/users/${id_Token?.sub}`)
      //     .then((res) => {
      //       if (res.data) {
      //         const valData = res?.data;
      //         this.setState({
      //           ...this.state,
      //           valueData: valData,
      //         });
      //       }

      //     })
      //     .catch((error) => {
      //       this.setState({
      //         errdata: error.message,
      //       });
      //     });
      // }
      sessionStorage.setItem('CH_expires_in', expires_in)
      localStorage.setItem('CH_id_token', locationPath);
      localStorage.setItem('CH_sessionTimeout', Date.now());
      axios
        .get(`https://iasuat.fisglobal.com/cardholderservice/api/v1/users/${id_Token?.sub}`)
        // ${id_Token?.sub}
        .then(async (res) => {
          if (res.data) {
            const data = res.data;
            await axios
              .get(`${'https://iasuat.fisglobal.com/userservice/'}api/v1/institution`)
              .then((resp) => {
                if (resp.data) {
                  const valData = resp?.data?.filter(v => v?.instId === data?.institutionId);
                  data.instCode = valData?.[0]?.instcode;
                }
              })
              .catch((err) => {
                console.log("get institutions", err);
              });

            this.setState({
              ...data,
              ...this.state.valueData,
              statevalue: data.state,
            });

            localStorage.setItem("CH_user_decode", btoa(JSON.stringify(data)));
            //localStorage.setItem("custCode", this.state.valueData.custCode);
            //localStorage.setItem("userIds", this.state.valueData.userId);
            localStorage.setItem('CH_accessToken', id_Token?.accessToken);
            // localStorage.setItem("instCode", this.state.valueData.instCode);
            localStorage.setItem("CH_custCode", data?.[0]?.custCode);
            localStorage.setItem("CH_userIds", data?.[0]?.userId);
            localStorage.setItem("CH_instCode", data?.[0]?.instCode);
            localStorage.setItem("CH_groupId", data?.[0]?.userGroupId);
            localStorage.setItem("CH_userId", data?.[0]?.userId);
            localStorage.setItem("CH_institutionId", data?.[0]?.institutionId);
            localStorage.setItem("CH_lastmodify", data?.[0]?.lastModifiedDate);
            // localStorage.setItem("lastmodify", data?.[0]?.lastModifiedDate);
            localStorage.setItem("CH_vpanNo", data?.[0]?.vpanNo);
            if (data?.length === 0) {
              this.props.history.push({
                pathname: "/404",
                state: {
                  isErr: true
                }
              })
            } else {
              window.location.href = "/cardholder/welcome"
            }

          }
        })
        .catch((err) => {
          console.log("Profile(Login page inside) details", err);
        });
    }
    // else {
    //   if (localStorage.getItem("CH_userId")) {
    //     window.location.href =
    //       "https://infinity.dev.fiscloudservices.com/idp/SMYNT/?response_type=id_token&client_id=CORTEXPORTAL&scope=openid&state=https://iasuat.fisglobal.com/bbo/api/v1/users/welcome&redirect_uri=https://iasuat.fisglobal.com/bbo/api/v1/users/welcome";
    //   }
    // }
    // console.log(loginUser)
  };

  render() {

    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Container maxWidth="lg" style={{ margin: "auto" }}>
          {/* Card Component in welcome page*/}
          <Card className={classes.rootCard}>
            <Grid container item xs={12} className={classes.mainContent}>
              <Grid item xs={12} sm={6} className={classes.illustratorGrid}>
                <Grid item xs={12} className={classes.illustrator}>
                  <Typography variant="h5" className={classes.Welcome}>
                    Welcome
                  </Typography>

                  <Typography variant="h4" className={classes.username}>
                    {loginUser?.[0]?.firstName + ' ' + loginUser?.[0]?.lastName}
                    {/* {loginUser.userId} */}
                    {/* {loginUser?.firstName ?loginUser?.firstName : "" + ' ' + loginUser?.lastName ?loginUser?.lastName: ""} */}
                  </Typography>

                  <Typography variant="h6" className={classes.userid}>
                    Last Login: {moment(loginUser?.[0]?.lastLogin).format('MMMM Do YYYY, h:mm')}
                    {/* .slice(0,10) */}
                  </Typography>
                </Grid>
              </Grid>
              {/* <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={6}
                                xl={6}
                                className={classes.formGrid}
                            >
                                <img
                                    className={classes.img}
                                    src="/assets/FIS-Illustration-01.svg"
                                    alt="fis logo"
                                />
                            </Grid> */}
            </Grid>
          </Card>
          {/* end */}
        </Container>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(Welcome));
