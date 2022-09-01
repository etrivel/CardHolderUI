import React from "react";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Button,
  Grid,

  // Avatar,
  AppBar,
} from "@material-ui/core";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { withAllContexts } from "../../../hocs";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BreadcrumbsCom from "../../breadcrumbs/breadcrumbs";
import moment from "moment";
import axios from "axios";
import LanguageMyAcc from "../../languagecom/index"

// style
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menus: {
    "& .MuiMenu-paper": {
      top: "115px !important",
      marginLeft: "-16%",
      left: "106% !important"
    },
  },
  menusp: {
    "& .MuiMenu-paper": {
      top: "115px !important",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),

    height: "32px",

    [theme.breakpoints.only("xs")]: {
      diplay: "none",
    },
  },

  square: {
    borderRadius: 8,
    margin: "0px 4px",

    height: "42px",
    float: "right",
  },

  btnss: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #4BCD3E1A",
    color: "#094C61",
    textTransform: "capitalize",
    opacity: "1",
    marginRight: "10px",
    fontSize: "12px",
    [theme.breakpoints.only("xs")]: {
      width: "100px",
      marginRight: "0px",
      fontSize: "12px",
      float: "right",
    },
  },
  btnss1: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #4BCD3E1A",
    color: "#094C61",
    textTransform: "capitalize",
    opacity: "1",
    marginRight: "20px",
    width: "100px",
    fontSize: "12px",
    [theme.breakpoints.only("xs")]: {
      width: "110px",
      marginRight: "0px",
      fontSize: "12px",
    },
  },
  iconcolor: {
    fontSize: "13px",
  },

  logintitle: {
    marginTop: "7px",

    [theme.breakpoints.only("xs")]: {
      textAlign: "Center",
      marginRight: "0px",
    },
  },
  name: {
    padding: '0px 45px'
  }
});
// end
const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};

class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      drawer: false,
      open1: false
    };
  }
  // end

  // handle Profile MenuOpen lists funcy
  handleProfileMenuOpen = () => {
    debugger
    const state = this.state;
    this.setState({
      ...state,
      open: !state.open,
    });
  };

  handlelagOpen = () => {
    debugger
    const state = this.state;
    this.setState({
      ...state,
      open1: !state.open1,

    });
  }
  // end
  breadcrumbsdata = () => {
    const location = window.location.pathname;

    if (location === "/cardholder/newcard") {
      return [
        {
          title: "Card Information",
          url: "",
        },
        {
          title: "Register New Card",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/cardinfotable") {
      return [
        {
          title: "Card Information",
          url: "",
        },
        {
          title: "View Registered Card & Card Activation",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/balanceinfo") {
      return [
        {
          title: "Balance Information",
          url: "",
        },
        {
          title: "View Account Balance",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/Transaction_table"
    ) {
      return [
        {
          title: "Transaction History",
          url: "",
        },
        {
          title: "View Transaction Details",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/Transaction_filter"
    ) {
      return [
        {
          title: "Transaction History",
          url: "",
        },
        {
          title: "View Transaction Details",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/Transaction_filter_details"
    ) {
      return [
        {
          title: "Transaction History",
          url: "",
        },
        {
          title: "View Transaction Details",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/Manage_cardinfo_table"
    ) {
      return [
        {
          title: "Manage Card",
          url: "",
        },
        {
          title: "Card Status",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/card_status") {
      return [
        {
          title: "Manage Card",
          url: "",
        },
        {
          title: "Card Status",
          url: "/Manage_cardinfo_table",
        },
        {
          title: "Card Details",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/channel_enablement"
    ) {
      return [
        {
          title: "Manage Card",
          url: "",
        },

        {
          title:
            "Channel Enablement & Limit Management (Domestic And International)",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/limit_Management"
    ) {
      return [
        {
          title: "Manage Card",
          url: "",
        },

        {
          title:
            "Channel Enablement & Limit Management (Domestic And International)",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/setpin_table") {
      return [
        {
          title: "Pin Management",
          url: "",
        },

        {
          title: "Select Card Details",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/setpin_status") {
      return [
        {
          title: "Pin Management",
          url: "",
        },

        {
          title: "Select Card Details",
          url: "/setpin_table",
        },
        {
          title: "Set Pin",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/changepin_table") {
      return [
        {
          title: "Pin Management",
          url: "",
        },

        {
          title: "Select Card Details",
          url: "",
          active: true,
        },
      ];
    } else if (
      location === "/cardholder/changepin_status"
    ) {
      return [
        {
          title: "Pin Management",
          url: "",
        },

        {
          title: "Select Card Details",
          url: "/changepin_table",
        },
        {
          title: "Change PIN",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/forgot_pin") {
      return [
        {
          title: "Pin Management",
          url: "",
        },

        {
          title: "Select Card Details",
          url: "/changepin_table",
        },
        {
          title: "Change PIN",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/home") {
      return [
        {
          title: "View Profile",
          url: "",
          active: true,
        },
      ];
    } else if (location === "/cardholder/edit_profile") {
      return [
        {
          title: "View Profile",
          url: "/home",
        },
        {
          title: "Modify Profile",
          url: "",
          active: true,
        },
      ];
    }
  };

  logout = async () => {
    debugger
    // const { cookies } = this.props;
    // window.open("https://infinity.dev.fiscloudservices.com/idp/SMYNT/globalLogout.html?idpnb="+sessionStorage.getItem('expires_in'), "_blank",'noopener,noreferrer');
    // window.close("_blank")
    var popup = window.open("https://infinity.dev.fiscloudservices.com/idp/SMYNT/globalLogout.html?idpnb=" + sessionStorage.getItem('expires_in'), "window", "_blank");
    // popup.close();
    // alert("https://infinity.dev.fiscloudservices.com/idp/SMYNT/globalLogout.html?idpnb=" + sessionStorage.getItem('expires_in'));

    var config = {
      method: 'get',
      url: 'https://infinity.dev.fiscloudservices.com/idp/SMYNT/globalLogout.html?idpnb=' + sessionStorage.getItem('expires_in'),
      headers: {
        'Cookie': 'i18next=en; CSALang=en_US; JSESSIONID=5174e34679fe957239cea765bce3eedf; ak_bmsc=4C4DFD2743C7AC19A8320E59F4BB9F8A~000000000000000000000000000000~YAAQ5elUuAugk0OBAQAAlKMBlRB9DOULppqmox8IxemQtm+QBO6O2HWBXWH8nIsPX/sBy/23ExzRwSDzh9uufUDb5DC37C1JyCEQF2gRlGNZUoPKZrPf2ssh/kR5VHjUSwv2RJVu8/iip7Bfvsy+KxhvSM0M5cTnPuou/1xxc6Nmr4RcW3i1pnbEUPfTqICXIFFPKWn8dPoc8AlaHF+aYgsv6YR6zlJDNFhLQ0dOVQlY5OO9SsZ7pI4sRDImar3tY3XXExZhtVQGk6ilgmQbHNi2K/towlLRtA1jdtROsqC46pIVJmOPwOgqN019v8fSPu1OyFyO+XMs/WLzbw+J/iLwvNuaDXsSyZ3yl6ojauPB84HwoY1WmbTH2vdCWf4lplfzzGVUsm7ZwD5alFPBsM0TVdRgMkKEozQ=; bm_sv=011E17BE4CEE62B354A1FEC0473DA36E~YAAQ5elUuPdglUOBAQAAEEgdlRAF/5UgmpmrtRaMTczVZF1umzUk7WvAa4VemSywlOVs5NJNgzN4Zx783s0FxI0e6re35LqM8eQ6hPjhmjzLEfGsQNbWm/WlKzV1+5+vPAqNK0hDd5LXz2ANhHSF8rahSJLBQwH0fbsdbC+3HRRNdmld+ZgP+JRt8U9+qx2h27EzsusBLZi6QqmrODFipbZ1fdruyEqK28qEe9NWcT1rmcE0O7A3ELgePq895Iiv6lIf62uWaJ0rxRaLbuyw~1'
      }
    };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // window.close();
    axios
      .get(`https://infinity.dev.fiscloudservices.com/idp/SMYNT/globalLogout.html?idpnb=${sessionStorage.getItem('expires_in')}`)
      .then(result => {
        // console.log(result, "---Result---");
        // this.setState({
        //   repos: result.data,
        //   isLoading: false
        // });
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false

        }),
      );
    // console.log("--end---")
    // --------
    debugger
    await axios
      .post(`${config.api_url}api/v1/users/logout/${localStorage.getItem('id_token')}`)
      .then(async (res) => {
        this.props.history.push(`https://infinity.dev.fiscloudservices.com/idp/SMYNT/globalLogout.html?idpnb=${sessionStorage.getItem('expires_in')}`)
        // -----------
        localStorage.clear();
      })
      .catch(async (err) => {
        this.props.history.push(`https://infinity.dev.fiscloudservices.com/idp/SMYNT/globalLogout.html?idpnb=${sessionStorage.getItem('expires_in')}`)

        // -----------
        axios
          .get(`https://infinity.dev.fiscloudservices.com/idp/SMYNT/globalLogout.html?idpnb=${sessionStorage.getItem('expires_in')}`)
          .then(result => {
            console.log(result);
            // this.setState({
            //   repos: result.data,
            //   isLoading: false
            // });
          })
          .catch(error =>
            this.setState({
              error,
              isLoading: false
            })
          );
        // --------
        //  popup.close();
        localStorage.clear();
        // await this.deleteAllCookies()
        // window.location.href = "https://iasuat.fisglobal.com/usermanagement/login"
        setInterval(() => {
          // console.log('This will be called every 5 seconds');
          popup.close();
        }, 1000);
        setInterval(() => {
          // console.log('This will be called every 5 seconds');
          window.location.href = "https://iasuat.fisglobal.com/cardholder/login"
        }, 3000);
      });
  }

  render() {
    const { classes } = this.props;
    const { open, open1 } = this.state;

    return (
      <div className={classes.root}>
        {/* AppBar Component in Top navar */}
        <AppBar position="static" className={classes.appbar}>
          <div style={{ background: "#F4F5F8" }}>
            <Toolbar
              style={{
                background: "#F4F5F8",
                display: "flex-box",
                // float: 'right'
                justifyContent: "space-between",
              }}
            >
              <div>
                <BreadcrumbsCom data={this.breadcrumbsdata()} />
              </div>
              <div className={classes.name}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} className={classes.logintitle}>
                    {!this.props.hidden && <span
                      className={classes.spanlast}
                      style={{
                        color: "#094C61",
                        fontSize: "14px",
                        marginRight: "5px",
                      }}
                    >
                      {/* <div style={{ color: "#728691", fontSize: 11, fontWeight: 500 }}>Parntner Logo</div> */}
                      Last Login:  {moment(loginUser?.[0]?.lastLogin).format('MMMM Do YYYY, h:mm')}
                      {/* slice(0,10) */}
                    </span>}
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    {/* <div style={{ display: "flex" }}> */}
                    <LanguageMyAcc />
                    {/* </div> */}
                    {/* <Typography className={classes.loginid}>
                      <Button className={classes.btnss}
                        onClick={() => this.handlelagOpen()}
                      >
                        Language
                        <ExpandMoreIcon className={classes.iconcolor} />
                        <Menu
                          keepMounted
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",

                          }}
                          onClose={() => this.handlelagOpen()}
                          className={classes.menus}
                          open={open1}

                        >
                          <MenuItem
                          // onClick={() => {
                          //   this.props.history.push("/home");
                          // }}
                          >
                            {/* <PersonOutlineOutlinedIcon
                              className={classes.icons}
                            />{" "} */}
                    {/* English
                          </MenuItem> */}
                    {/* <MenuItem
                            onClick={() => {
                              this.props.history.push("/change-password");
                            }}
                          >
                            <LockOutlinedIcon className={classes.icons} />{" "}
                            Change Password
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              this.props.history.push("/");
                            }}
                          >
                            <ExitToAppOutlinedIcon className={classes.icons} />{" "}
                            Log Out
                          </MenuItem> */}
                    {/* </Menu>
                      </Button>
                    </Typography> */}
                  </Grid>
                  &nbsp;&nbsp;
                  <Grid item xs={6} sm={2}>
                    <Typography className={classes.loginid}>
                      {!this.props.hidden && <Button
                        className={classes.btnss1}
                        onClick={() => this.handleProfileMenuOpen()}
                      >
                        My&nbsp;Account&nbsp;
                        <ExpandMoreIcon className={classes.iconcolor} />
                        <Menu
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          onClose={() => this.handleProfileMenuOpen()}
                          className={classes.menusp}
                          open={open}
                        >
                          <MenuItem
                            onClick={() => {
                              this.handleProfileMenuOpen();
                              this.props.history.push("/home");
                            }}
                          >
                            <PersonOutlineOutlinedIcon
                              className={classes.icons}
                            />{" "}
                            Profile Details
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              this.handleProfileMenuOpen();
                              this.props.history.push("/changepassword");
                            }}
                          >
                            <LockOutlinedIcon className={classes.icons} />{" "}
                            Change Password
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              this.handleProfileMenuOpen();
                              // this.props.history.push("/");
                              this.logout()
                            }}
                          >
                            <ExitToAppOutlinedIcon className={classes.icons} />{" "}
                            Log Out
                          </MenuItem>
                        </Menu>
                      </Button>
                      }
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Toolbar>
          </div>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(withRouter(withAllContexts(SubHeader)));
