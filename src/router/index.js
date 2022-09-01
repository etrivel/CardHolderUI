import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./private_router";

import ErrorPage from "../components/error_page/index";
import Changepassword from "../screens/signup/set_password";
import password from "../components/MyaccountComponent/changes_password";
import { Login, SignUp, Home, Profile } from "./../screens";

const RouterApp = (props) => {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <Switch>
        {/* redirect page component(login) */}
        <Redirect exact from="/" to={routes.login} />
        <Route exact path="/" component={Login} />
        {/* end */}
        {/* login component */}
        <Route path={routes.login} component={Login} />
        {/* end */}

        {/* new card component */}
        <Route path={routes.newcardinfo} component={Home} />
        {/* end */}

        {/* new cardtable component */}
        <Route path={routes.cardinfotable} component={Home} />
        {/* end */}

        {/* new balancetable component */}
        <Route path={routes.balanceinfotable} component={Home} />
        {/* end */}
        {/* new setpintable component */}
        <Route path={routes.setpininfotable} component={Home} />
        {/* end */}
        {/* new managecardinfotable component */}
        <Route path={routes.managecardinfotable} component={Home} />
        {/* end */}
        {/* new cardstatus component */}
        <Route path={routes.managecardstatus} component={Home} />
        {/* end */}
        {/* new managecardchannelenable component */}
        <Route path={routes.channelenable} component={Home} />
        {/* end */}
        {/* new setpintable component */}
        <Route path={routes.setpintable} component={Home} />
        {/* end */}
        {/* new changepintable component */}
        <Route path={routes.changepintable} component={Home} />
        {/* end */}
        {/* new changepinstatuscomponent */}
        <Route path={routes.changepinstatus} component={Home} />
        {/* end */}
        {/* new forgotpincomponent */}
        <Route path={routes.forgotremember} component={Home} />
        {/* end */}

        {/* new transactiontable */}
        <Route path={routes.transactiontable} component={Home} />
        {/* end */}
        {/* new transactionfilter */}
        <Route path={routes.transactionfilter} component={Home} />
        {/* end */}
        {/* new transactionfilterdetails */}
        <Route path={routes.transactiontabledetails} component={Home} />
        {/* end */}
        {/* new setpinstatus component */}
        <Route path={routes.setpinstatus} component={Home} />
        {/* end */}
        {/* signup component */}
        <Route path={routes.signup} component={SignUp} />
        {/* end */}
        {/* home component */}
        <Route path={routes.home} component={Home} />
        {/* end */}
        {/* welcome component */}
        <Route path={routes.welcome} component={Home} />
        {/* end */}
        {/* Error Page component */}
        <Route path={routes.ErrorPage} component={Home} />
        {/* end */}
        {/* Change password component */}
        <Route path={routes.password} component={password} />
        {/* end */}
        {/* Change password component */}
        <Route path={routes.password} component={Home} />
        {/* end */}
        {/* new editmyprofile component */}
        <Route path={routes.editmyprofile} component={Home} />
        {/* end */}
        {/* profile component */}
        <PrivateRoute path={routes.profile} component={Profile} />
        {/* end */}
        {/* limit management component */}
        <PrivateRoute path={routes.limit} component={Home} />
        {/* end */}

        {/* new user registration component */}
        <Route path={routes.registration} component={Home} />

        <Route path={routes.registrationSucess} component={Home} />
        <Route path={routes.success} component={Home} />
        {/* end */}
      </Switch>
    </Router>
  );
};

export default RouterApp;
