import React from "react";
import { Grid, Container, Typography, Avatar } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

// style
const styles = (theme) => ({
  root: {
    padding: "100px 0px",
    width: "100%",
    height: "100vh",
    background: theme.palette.mainbackground.default,
  },
  pr: {
    color: "#728691",
    fontSize: "0.8rem",
  },
  divavatars: {
    margin: "auto 14px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      margin: "10px 0px",
    },
  },
  avatars: {
    width: "30px",
    height: "30px",
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
    },
  },
  rootCard: {
    // width: "100%",
    borderRadius: 16,
    boxShadow: "0px 35px 50px #70707028 !important",
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      width: "88%",
    },
  },
  illustrator: {
    textAlign: "center",
  },
  illustratorGrid: {
    borderRight: `1px solid ${theme.palette.mainbackground.default}`,
  },
  mainContent: {
    display: "flex",
    alignItems: "center",
  },
  Welcome: {
    color: theme.palette.primary.main,
    fontSize: 70,
    fontWeight: 600,
    marginBottom: -10,
  },
  username: {
    fontSize: 50,
    fontWeight: 600,
  },
  userid: {
    fontSize: 20,
  },
  img: {
    width: "80%",
    height: "80%",
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
      width: "100%",
      height: "100%",
    },
  },
  logo: {
    width: 80,
  },
  header: {
    height: 44,
    [theme.breakpoints.down("xs")]: {
      height: 60,
      textAlign: "center",
    },
  },
});
// end

class ErrorPage extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {};
  }
  // end

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        {/* card Component */}
        <Container maxWidth="lg" style={{ margin: "auto", marginTop: "-15vh" }}>
          <Card className={classes.rootCard}>
            <Grid
              container
              item
              xs={12}
              justify="space-between"
              className={classes.header}
            >
              {/* logo */}
              <Grid item>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
                  alt="fis logo"
                  className={classes.logo}
                />
              </Grid>
              {this.props.location?.state?.isErr !== true ? <Grid item className={classes.divavatars}>
                <Avatar className={classes.avatars} />
                <div className={classes.pr}>Parntner Logo</div>
              </Grid> : ""}
              {/* end */}
            </Grid>
            <Grid container item xs={12} className={classes.mainContent}>
              <Grid item xs={12} sm={6} className={classes.illustratorGrid}>
                <Grid item xs={12} className={classes.illustrator}>
                  <Typography variant="h5" className={classes.Welcome}>
                    {this.props.location?.state?.isErr === true ? "Oops... Sorry!" : "404"}
                  </Typography>

                  <Typography variant="h4" className={classes.username}>
                    {this.props.location?.state?.isErr === true ? "It looks like you dont have access to any" : "ERROR"}
                  </Typography>

                  <Typography variant="h6" className={classes.userid}>
                    {this.props.location?.state?.isErr === true ? "of the Cardholder Screens." : "Page Not Found"}
                  </Typography>
                </Grid>
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
                <img
                  className={classes.img}
                  src={`${process.env.PUBLIC_URL}/assets/FIS Illustration-03-01.svg`}
                  alt="fis logo"
                />
              </Grid>
            </Grid>
          </Card>
        </Container>
        {/* end */}
      </Grid >
    );
  }
}

export default withStyles(styles)(withRouter(ErrorPage));
