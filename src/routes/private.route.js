import React from "react";
import { Route, Redirect } from  "react-router-dom";

import {useSelector} from "react-redux";

const  PrivateRoute = (props) => {
  const jwt = localStorage.getItem('token')

  const isLogin = useSelector(state => state.auth.isAuth)

  return  jwt ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) :
    (<Redirect  to="/login"  />);
};
export  default  PrivateRoute;