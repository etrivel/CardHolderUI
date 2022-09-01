import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
//import { withStyles } from "@material-ui/core";
import { useHistory } from "react-router";
// import AddCircleIcon from "@material-ui/icons";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// style
// const styles = (theme) => ({});
// end

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(1),
        border: "1px solid #F4F5F8",

    },
    pop: {
        "& .MuiPopover-paper": {
            width: "20vh"
        }
    }
}));

export const LanguageMyAcc = () => {
    const classes = useStyles();
    const [language, setLanguage] = React.useState(null);
    const [myprofile, setMyprofile] = React.useState(null);
    const history = useHistory();

    const handleClick = (event, val) => {
        if (val === "language") {
            setLanguage(event.currentTarget);
        } else if (val === "myprofile") {
            setMyprofile(event.currentTarget);
        }
    };

    const handleClose = (val) => {
        if (val === "language") {
            setLanguage(null);
        } else if (val === "myprofile") {
            setMyprofile(null);
        }
    };

    const languageopen = Boolean(language);
    const id = languageopen ? "simple-popover" : undefined;

    const mypeofileopen = Boolean(myprofile);
    const id1 = mypeofileopen ? "simple-popover" : undefined;

    return (
        <div style={{ display: "flex" }}>
            {/* <div
                style={{
                    alignItems: "center",
                    display: "flex",
                }}
            >
                Last Login: 18 Feb 2020 15:22 IST
            </div> */}
            <div style={{ paddingLeft: "0" }}>
                <Button
                    aria-describedby={id}
                    variant="contained"
                    style={{
                        background: "white",
                        // borderRadius: "5px",
                        fontSize: 12,
                        padding: 8,
                        height: "33px"
                    }}
                    onClick={(event) => handleClick(event, "language")}
                >
                    Language<ExpandMoreIcon style={{
                        fill: "#00000080",
                        width: "20px"
                    }} />
                </Button>
                <Popover
                    id={id}
                    open={languageopen}
                    anchorEl={language}
                    onClose={() => handleClose("language")}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    className={classes.pop}
                    style={{
                        width: "10%",
                        // marginLeft: "-10px",
                    }}
                >
                    <Typography className={classes.typography}>English
                    </Typography>

                </Popover>
            </div>
            {/* <div style={{ paddingLeft: "20px" }}>
                <Button
                    aria-describedby={id1}
                    variant="contained"
                    style={{
                        background: "white",
                        borderRadius: "5px",
                        fontSize: 12,
                        padding: 8,
                    }}
                    onClick={(event) => handleClick(event, "myprofile")}
                >
                    My Account
                </Button>
                <Popover
                    id={id1}
                    open={mypeofileopen}
                    anchorEl={myprofile}
                    onClose={() => handleClose("myprofile")}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <Typography
                        className={classes.typography}
                        onClick={() => {
                            //window.location.href = "/profile_details";
                            history.push("/profile_details");
                        }}
                    >
                        My Profile
                    </Typography>
                    <Typography
                        className={classes.typography}
                        onClick={() => {
                            //window.location.href = "/changepassword";
                            history.push("/changepassword");
                        }}
                    >
                        Change Password
                    </Typography>
                    <Typography
                        className={classes.typography}
                        onClick={() => {
                            //window.location.href = "/login";
                            history.push("/login");
                        }}
                    >
                        Logout
                    </Typography>
                </Popover>
            </div> */}
        </div >
    );
};

export default withRouter(LanguageMyAcc);
