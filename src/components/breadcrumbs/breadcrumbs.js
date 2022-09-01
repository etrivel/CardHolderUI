import React from "react";
import { withRouter } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { withStyles, Typography, Breadcrumbs } from "@material-ui/core";

// style
const styles = (theme) => ({
  title: {
    fontSize: 16,
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
});
// end

class BreadcrumbsCom extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {};
  }
  // end
  render() {
    const { classes, data } = this.props;
    return (
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        {data?.map((v) => {
          return (
            <Typography
              key={v}
              color={v.active ? "textPrimary" : ""}
              style={{ cursor: v.active ? "pointer" : "" }}
              className={classes.title}
              onClick={() => {
                v.url && this.props.history.push(v?.url);
              }}
            >
              {v?.title}
            </Typography>
          );
        })}
      </Breadcrumbs>
    );
  }
}

export default withStyles(styles)(withRouter(BreadcrumbsCom));