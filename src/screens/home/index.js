import React from 'react'
import { Grid, withStyles, Drawer, Hidden } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import routes from './../../router/routes'
import Header from '../../components/navbar/index'
import Footer from '../../components/footer/index'
import Welcome from '../../components/welcome/index'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Changepassword from '../../components/MyaccountComponent/changes_password'
import Sidebar from '../../components/navbar/sidenavbar'
import SubHeader from '../../components/navbar/subnav/index'
import MyaccountComponent from '../../components/MyaccountComponent'
import Cardnewinfo from '../../components/cardmanagement/card_information/index'
import Cardinfotable from '../../components/cardmanagement/card_information/table'
import Balanceinfotable from '../../components/cardmanagement/balance_information/table'
import ManageCardinfotable from '../../components/cardmanagement/manage_cards/table'
import Managecardstatus from '../../components/cardmanagement/manage_cards/status'
import SetpinInfotable from '../../components/pin_management/set_pin/table'
import SetpinStatus from '../../components/pin_management/set_pin/details'
import ChangepinInfotable from '../../components/pin_management/change_pin/table'
import ChangepinStatus from '../../components/pin_management/change_pin/detail'
import ForgotRemember from '../../components/pin_management/change_pin/remember'
import TransactionTabledetails from '../../components/cardmanagement/transaction_history/details'
import TransactionTable from '../../components/cardmanagement/transaction_history/tableview'
import TransactionFilter from '../../components/cardmanagement/transaction_history/detailview'
import ManageChannelTable from '../../components/cardmanagement/manage_cards/channel_enable/table'
import Limit from '../../components/cardmanagement/manage_cards/channel_enable/limit'
import MyaccountEditComponent from '../../components/MyaccountComponent/editable';
import Registration from "../../screens/login/registration";
import Createpassword from "../../screens/login/createpassword";
import RegSuccusUser from "../../screens/login/onSave";
import ErrorPage from "../../components/error_page/index";
import Succus from "../../components/success"
const drawerWidth = 220

// import { localStorageKeys } from './../../utils'

const styles = theme => ({
  root: {
    display: 'flex',
    height: 'auto !important',
    '& .MuiDrawer-paper': {
      position: 'absolute'
    }
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {

    position: 'absolute',
    borderTopRightRadius: "40px",
    borderBottomRightRadius: "80px",

    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

  },
  drawerOpen: {
    overflow: 'hidden',
    marginTop: '26px',
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  mbl: {
    overflow: 'hidden',
    marginTop: '52px',
    position: 'relative'
  },
  drawerClose: {
    // position: 'absolute',
    overflow: 'hidden',
    marginTop: '26px',
    position: 'relative',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    marginTop: 60
  }
})

class Home extends React.Component {
  // state
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      openmbl: false
    }
  }
  // end

  // {*----------page inside  child components-----------*}

  giveMeComponentToRender = () => {
    if (
      this.props.location.pathname === routes.home ||
      this.props.match.path === routes.home
    ) {
      return <MyaccountComponent {...this.props} />
    } else if (
      ((this.props.location.pathname === routes.welcome ||
        this.props.match.path === routes.welcome) || (this.props.location.pathname === routes.welcome1 ||
          this.props.match.path === routes.welcome1))
    ) {
      return <Welcome {...this.props} />
    } else if (
      this.props.location.pathname === routes.newcardinfo ||
      this.props.match.path === routes.newcardinfo
    ) {
      return <Cardnewinfo {...this.props} />
    } else if (
      this.props.location.pathname === routes.balanceinfotable ||
      this.props.match.path === routes.balanceinfotable
    ) {
      return <Balanceinfotable {...this.props} />
    } else if (
      this.props.location.pathname === routes.cardinfotable ||
      this.props.match.path === routes.cardinfotable
    ) {
      return <Cardinfotable {...this.props} />
    } else if (
      this.props.location.pathname === routes.setpininfotable ||
      this.props.match.path === routes.setpininfotable
    ) {
      return <SetpinInfotable {...this.props} />
    } else if (
      this.props.location.pathname === routes.managecardinfotable ||
      this.props.match.path === routes.managecardinfotable
    ) {
      return <ManageCardinfotable {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.managecardstatus ||
      this.props.match.path === routes.managecardstatus
    ) {
      return <Managecardstatus {...this.props} />
    }

    else if (
      this.props.location.pathname === routes.password ||
      this.props.match.path === routes.password
    ) {
      return <Changepassword {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.createpassword ||
      this.props.match.path === routes.createpassword
    ) {
      return <Createpassword {...this.props} />
    }

    else if (
      this.props.location.pathname === routes.channelenable ||
      this.props.match.path === routes.channelenable
    ) {
      return <ManageChannelTable {...this.props} />
    }

    else if (
      this.props.location.pathname === routes.setpintable ||
      this.props.match.path === routes.setpintable
    ) {
      return <SetpinInfotable {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.changepintable ||
      this.props.match.path === routes.changepintable
    ) {
      return <ChangepinInfotable {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.changepinstatus ||
      this.props.match.path === routes.changepinstatus
    ) {
      return <ChangepinStatus {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.forgotremember ||
      this.props.match.path === routes.forgotremember
    ) {
      return <ForgotRemember {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.setpinstatus ||
      this.props.match.path === routes.setpinstatus
    ) {
      return <SetpinStatus {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.transactiontable ||
      this.props.match.path === routes.transactiontable
    ) {
      return <TransactionTable {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.transactionfilter ||
      this.props.match.path === routes.transactionfilter
    ) {
      return <TransactionFilter {...this.props} />
    }

    else if (
      this.props.location.pathname === routes.tansactionfilterdetails ||
      this.props.match.path === routes.tansactionfilterdetails
    ) {
      return <TransactionTabledetails {...this.props} />
    }

    else if (
      this.props.location.pathname === routes.limit ||
      this.props.match.path === routes.limit
    ) {
      return <Limit {...this.props} />
    }

    else if (
      this.props.location.pathname === routes.editmyprofile ||
      this.props.match.path === routes.editmyprofile
    ) {
      return <MyaccountEditComponent {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.registration ||
      this.props.match.path === routes.registration
    ) {
      return <Registration {...this.props} />
    }
    else if (
      this.props.location.pathname === routes.registrationSucess ||
      this.props.match.path === routes.registrationSucess
    ) {
      return <RegSuccusUser {...this.props} />
    } else if (
      this.props.location.pathname === routes.ErrorPage ||
      this.props.match.path === routes.ErrorPage
    ) {
      return <ErrorPage {...this.props} />
    } else if (
      this.props.location.pathname === routes.success ||
      this.props.match.path === routes.success
    ) {
      return <Succus {...this.props} />
    }
  }
  // componentDidMount() {
  //     if (!localStorage.getItem(localStorageKeys.auth_token)) {
  //         this.props.history.push(routes.login);
  //     }
  // }
  handleDrawer = () => {
    const state = this.state
    this.setState({
      ...state,
      open: !state.open
    })
  }
  handleDrawermbl = () => {
    const state = this.state
    this.setState({
      ...state,
      openmbl: !state.openmbl
    })
  }
  render() {
    const { classes } = this.props
    const { open, openmbl } = this.state
    const loginUser = localStorage.getItem('CH_user_decode') ? JSON.parse(atob(localStorage.getItem('CH_user_decode'))) : {};
    return (
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} className={classes.header}>
          {/* Header component here */}
          <Header {...this.props} handleDrawermbl={this.handleDrawermbl} />
        </Grid>

        <Grid item xs={12} style={{ position: 'relative' }}>
          {/* // {*----------inside child components-----------*} */}
          <div className={classes.root}>

            <Hidden mdDown>
              {(
                this.props.location.pathname !== routes.registration
              ) && <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
                })}
                classes={{
                  paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                  })
                }}
              >
                  <div className={classes.toolbar}>
                    <span
                      style={{
                        textAlign: 'left',
                        width: '79%',
                        fontWeight: 500,
                        position: "relative",
                        left: "12px",

                      }}
                    >
                      {/* {open ?
                        loginUser.userId : ''} */}
                      {open ?
                        loginUser?.[0]?.firstName + ' ' + loginUser?.[0]?.lastName
                        :
                        loginUser?.[0]?.firstName?.[0] + ' ' + loginUser?.[0]?.lastName?.[0]
                      }
                    </span>
                    <ChevronLeftIcon onClick={() => this.handleDrawer()} style={{
                      background: '#4BCD3E',
                      borderRadius: '50%',
                      color: '#fff',
                      marginRight: -8,
                      marginTop: "50px",
                    }} />
                  </div>
                  <Sidebar open={open} />
                </Drawer>}
            </Hidden>
            <Hidden smUp>
              {(
                this.props.location.pathname !== routes.registration
              ) && <Drawer
                className={classes.mbl}
                open={openmbl}
                variant='temporary'
                anchor={'left'}
                onClose={() => this.handleDrawermbl()}
              >
                  <div className={classes.mbl}>
                    <IconButton onClick={() => this.handleDrawer()}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </div>
                  <Sidebar open={open} />
                </Drawer>}
            </Hidden>
            <main className={classes.content}>
              <SubHeader
                hidden={
                  this.props.location.pathname === routes.registration ||
                  this.props.match.path === routes.registration
                }
              />
              <div>{this.giveMeComponentToRender()}</div>
            </main>
          </div>
        </Grid>

        <Grid item xs={12}>
          {/* Footer component here */}
          <Footer />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(withRouter(Home))
