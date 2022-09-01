import React from "react";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  Toolbar,
  Typography,
  // Avatar,
  AppBar,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { withAllContexts } from "../../hocs";

// style
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    background: theme.palette.primary.dark,
    [theme.breakpoints.only("xs")]: {
      position: "",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: "32px",
    width: "100px",
    [theme.breakpoints.only("xs")]: {
      flexGrow: 1,
      marginRight: 0,
    },
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    [theme.breakpoints.only("xs")]: {
      textAlign: "left",
      fontSize: 16,
      display: "none",
    },
  },
  square: {
    borderRadius: 8,
    margin: "0px 4px",
    width: "42px",
    height: "42px",
    float: "right",
  },
  appbar: {
    // background: theme.palette.primary.dark,
    background: "#001c24",
    boxShadow: "none",
    width: "100%",
    color: "#fff",
    borderBottom: "1px solid #f5f5f5",
    position: "fixed",
    zIndex: 10000,
  },

  menuicon: {
    color: theme.palette.primary.main,
    fontSize: 26,
    marginRight: 8,
    display: "none",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
});
// end

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // end

  render() {
    // const {
    //     drawer
    // } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* AppBar Component in Top navar */}
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <MenuIcon
              className={classes.menuicon}
              onClick={() => this.props.handleDrawermbl()}
            />
            <div className={classes.menuButton}>
              <img
                alt="img"
                width="100%"
                height="100%"
                src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
              />
            </div>
            <Typography variant="h6" className={classes.title}>
              Cardholder Portal
            </Typography>
            <span style={{ textAlign: "right", margin: "auto" }}>
              <div
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  float: "right",
                  width: "100%",
                }}
              >
                Client Logo
              </div>
            </span>
          </Toolbar>
        </AppBar>
        {/* end */}
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(withAllContexts(Header)));
