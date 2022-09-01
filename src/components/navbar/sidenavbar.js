import React from "react";
import {
  withStyles,
  ListItem,
  ListItemText,
  Button,
  List,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CreditIcon from "../drawer icons/creditcard";
import PinIcon from "../drawer icons/pin";

const data = [
  {
    title: "Card Management",
    icon: <CreditIcon />,
    childparent: [
      {
        title: "Card Information",

        child: [
          {
            title: "Register New Card",
            url: "/newcard",
          },
          {
            title: (
              <div>
                view Registered Card <br /> Card Activation
              </div>
            ),
            url: "/cardinfotable",
          },
        ],
      },

      {
        title: "Balance Information",

        child: [
          {
            title: "View Account Balance",
            icon: "",
            url: "/balanceinfo",
          },
        ],
      },
      {
        title: "Transaction History",

        child: [
          {
            title: "View Transaction Details",
            icon: "",
            url: "/Transaction_table",
          },
        ],
      },
      {
        title: "Manage Card",

        child: [
          {
            title: "Card Status",
            icon: "",
            url: "/Manage_cardinfo_table",
          },
          {
            title: (
              <div>
                Channel Enablement <br />
                Limit Management <br />
                (Domestic and <br /> International){" "}
              </div>
            ),
            icon: "",
            url: "/channel_enablement",
          },
        ],
      },
    ],
  },
  {
    title: "Pin Management",
    icon: <PinIcon />,
    childparent: [
      {
        title: "Set pin",
        icon: "",
        url: "/setpin_table",
      },
      {
        title: "Change pin",
        icon: "",
        url: "/changepin_table",
      },
    ],
  },
];
const styles = (theme) => ({
  root: {},
  maintext: {
    "& span": {
      fontWeight: 500,
      fontSize: 15,
      padding: "0px 7px",
    },
  },
  mainIcon: {
    with: 20,
    height: 20,
  },
  iconcolor: {
    color: "#4BCD3E",
  },
});

class Sidenav extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = { menuopen: null, submenuopen: null };
  }
  parentmenu = (p_i) => {
    if (this.props.location?.state?.isErr === true) {
      return true
    } else {
      const state = this.state;
      const update = p_i === state.menuopen ? null : p_i;
      this.setState({
        menuopen: update,
      });
    }
  };
  submenu = (s_i) => {
    if (this.props.location?.state?.isErr === true) {
      return true
    } else {
      const state = this.state;
      const update = s_i === state.submenuopen ? null : s_i;
      this.setState({
        submenuopen: update,
      });
    }
  };
  render() {
    const { classes, open } = this.props;
    const { menuopen, submenuopen } = this.state;
    return (
      <div>
        {data?.map((p, p_i) => {
          if (p?.childparent.length > 0) {
            return (
              <div>
                <ListItem
                  button
                  onClick={() => open && this.parentmenu(p_i)}
                  style={{
                    padding: menuopen === p_i && 8,
                  }}
                >
                  <span
                    className={classes.mainIcon}
                    style={{
                      background: menuopen === p_i && "#4BCD3E",
                      borderRadius: "8px",
                      color: menuopen === p_i ? "#fff" : "#555",
                      padding: menuopen === p_i && 8,
                    }}
                  >
                    {p.icon}
                  </span>
                  {open && (
                    <ListItemText
                      primary={p?.title}
                      className={classes.maintext}
                    />
                  )}
                  {open &&
                    (menuopen === p_i ? (
                      <ExpandLess className={classes.iconcolor} />
                    ) : (
                      <ExpandMore className={classes.iconcolor} />
                    ))}
                </ListItem>
                {open && (
                  <>
                    {p.childparent.map((s, s_i) => {
                      if (s.child?.length > 0) {
                        return (
                          <Collapse
                            in={menuopen === p_i ? true : false}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List
                              component="div"
                              disablePadding
                              onClick={() => this.submenu(s_i)}
                            >
                              <ListItem
                                button
                                className={classes.nested}
                                style={{
                                  borderRadius: "10px",
                                  background:
                                    submenuopen === s_i && "rgb(75, 205, 62)",
                                  /* margin: 2px; */
                                  color: submenuopen === s_i && "#fff",
                                }}
                              >
                                <ListItemText
                                  primary={s?.title}
                                  className={classes.maintext}
                                />
                                {submenuopen === s_i ? (
                                  <ExpandLess
                                    className={classes.iconcolor}
                                    style={{
                                      color: submenuopen === s_i && "#fff",
                                    }}
                                  />
                                ) : (
                                  <ExpandMore
                                    className={classes.iconcolor}
                                    style={{
                                      color: submenuopen === s_i && "#fff",
                                    }}
                                  />
                                )}
                              </ListItem>
                            </List>
                            {s?.child.map((l, l_i) => {
                              return (
                                <Collapse
                                  in={submenuopen === s_i ? true : false}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <List component="div" disablePadding>
                                    <Button
                                      style={{ textTransform: "capitalize" }}
                                      onClick={() =>
                                        this.props.history.push(l.url)
                                      }
                                    >
                                      <ListItem
                                        button
                                        className={classes.nested}
                                      >
                                        <span
                                          style={{
                                            background:
                                              l.url.split("/")[1] ===
                                              window.location.pathname.split(
                                                "/"
                                              )[2] && "#4BCD3E",
                                            height: "20px",
                                            width: "4px",
                                            borderRadius: "10px",
                                          }}
                                        ></span>{" "}
                                        <ListItemText
                                          style={{
                                            fontSize: "12px",
                                            wordBreak: "-moz-initial",
                                          }}
                                          className={classes.maintext}
                                          primary={l?.title}
                                          onClick={() =>
                                            this.props.history.push(l.url)
                                          }
                                        />
                                      </ListItem>
                                    </Button>
                                  </List>
                                </Collapse>
                              );
                            })}
                          </Collapse>
                        );
                      } else {
                        return (
                          <Collapse
                            in={menuopen === p_i ? true : false}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List
                              component="div"
                              disablePadding
                              onClick={() => this.submenu(s_i)}
                            >
                              <ListItem button className={classes.nested}>
                                <span
                                  style={{
                                    background:
                                      s.url === window.location.pathname &&
                                      "#4BCD3E",
                                    height: "20px",
                                    width: "4px",
                                    borderRadius: "10px",
                                  }}
                                ></span>{" "}
                                <ListItemText
                                  primary={s?.title}
                                  className={classes.maintext}
                                  onClick={() => this.props.history.push(s.url)}
                                />
                              </ListItem>
                            </List>
                          </Collapse>
                        );
                      }
                    })}
                  </>
                )}
              </div>
            );
          } else {
            return (
              <div>
                <ListItem button onClick={() => open && this.parentmenu(p_i)}>
                  <img src={p.icon} alt={p.icon} />
                  {open && (
                    <ListItemText
                      className={classes.maintext}
                      primary={p?.title}
                    />
                  )}
                </ListItem>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Sidenav));
