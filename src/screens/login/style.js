export const styles = (theme) => ({
  root: {
    width: "100%",
    // height: "100%",
    backgroundImage: `url("${process.env.PUBLIC_URL}../assets/Mask Group 2.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    background: "#f4f5f8",
    height: "100%",
    boxShadow: " 0px 35px 50px #4BCD3E29 !important",
    // background: theme.palette.mainbackground.default,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
      height: "180vh",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "20px 10px",
      height: "100%",
    },
  },

  rootCard: {
    // marginTop: "-100px",
    borderRadius: 16,
    boxShadow: "0px 35px 50px #4BCD3E29 !important",
    border: "1px solid #70707029",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  backarr: {
    fontSize: "12px",
    paddingRight: "10px",
  },
  illustratorGrid: {
    [theme.breakpoints.up("md")]: {
      height: "100%",
      marginBottom: -6,
    },
    borderRight: `1px solid ${theme.palette.mainbackground.default}`,
  },
  divs: {
    [theme.breakpoints.only("xs")]: {
      padding: 0,
    },
  },
  divcom: {
    marginTop: "18px",
    [theme.breakpoints.only("xs")]: {
      margin: 0,
    },
  },
  divcomss: {
    [theme.breakpoints.up("md")]: {
      overflow: "hidden",
      marginLeft: "60px",
      marginRight: "60px",
    },
  },
  logo: {
    width: "80%",
    height: "100%",
    "& img": {
      width: 100,
      position: "absolute",
      height: "80%",
    },
  },
  pr: {
    color: "#728691",
    fontSize: "0.8rem",
  },
  back1: {
    textAlign: "end",
    padding: "30px 60px 20px 0px",
  },
  login_back: {
    textTransform: "capitalize",
    background: "#FFFFFF",
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
    borderRadius: 8,
  },
  header: {
    height: "74px",
    minHeight: "50px",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    "& img": {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      fontSize: "1.5rem",
      "& img": {
        width: 80,
        display: "block",
        margin: "auto",
      },
    },
  },
  d_btn: {
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    display: "flex",
    alignItems: "center",
  },
  illustrator: {
    textAlign: "center",
  },
  mainHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
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
  login_details: {
    textAlign: "center",
    paddingRight: "30px",
    marginBottom: "80px",
  },
  signInButtonerr: {
    width: "100%",
    margin: "20px 0px",
    padding: "12px",
    color: theme.palette.secondary.main,
    textTransform: "capitalize",
    fontWeight: 600,
    boxShadow: "0px 10px 15px #70707028",
    fontSize: "12px",
    background: "#4BCD3E",
    border: " 1px solid #FF0000",
    borderRadius: "8px",
    opacity: 1,
    "&:hover": {
      background: "#FF000012 0% 0% no-repeat padding-box",
    },
  },
  signInButton: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 22,
    },
    width: "100%",
    margin: "2px 0px 16px",
    padding: "12px",
    color: theme.palette.secondary.main,
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: 600,
    boxShadow: "0px 10px 15px #70707028",
    background: "#4BCD3E",
    transition: "0.5s",
    "& button": {
      padding: 8,
    },
    "&:hover": {
      transition: "0.5s",
      background: "#4BCD3E",
      boxShadow: "0px 10px 15px #70707028",
      opacity: 0.9,
    },
  },
  click: {
    cursor: "pointer",
    color: "#4BCD3E",
  },
  passIcon: {
    color: theme.palette.text.disabled,
  },
  newuser: {
    color: theme.palette.secondary.main,
    fontSize: "0.8rem !important",
    cursor: "pointer",
    marginBottom: 20,
    opacity: 0.9,
    fontWeight: "bold",
  },
  for_checkbox: {
    float: "left",
    width: "100%",
    marginBottom: -4,
    "& .MuiTypography-body1": {
      color: theme.palette.text.primary,
      fontWeight: 500,
      opacity: 0.7,
      fontSize: 14,
    },
  },
  for_newuser: {
    color: theme.palette.secondary.dark,
    textAlign: "left",
    opacity: 0.8,
    marginBottom: 12,
    fontWeight: 600,
  },
  for_resetuser: {
    fontSize: 14,
    fontWeight: 500,
    margin: "10px 0px -8px",
  },
  proceedButton: {
    width: "100%",
    margin: "20px 0px 0px",
    padding: "12px",
    color: theme.palette.secondary.main,
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
  backButton: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 22,
    },
    textTransform: "capitalize",
    width: "100%",
    boxShadow: "0px 10px 15px #70707028",
    margin: "20px 0px",
    padding: "12px",
    border: `1.6px solid ${theme.palette.primary.main}`,
    "&:hover": {
      transition: "0.5s",
      boxShadow: "0px 10px 15px #70707028",
      border: `1.6px solid ${theme.palette.primary.main}`,
      opacity: 0.9,
    },
  },
  submit: {
    border: `2px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.main,
    boxShadow: "0px 3px 6px #0049903D",
    borderRadius: 4,
    fontSize: 10,
    float: "right",
    opacity: 0.9,
    "&:hover": {
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 9,
    },
  },
});
