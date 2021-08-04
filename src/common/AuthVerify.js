import React from "react";
import { history } from '../helpers/history';

export const AuthVerify = (props) => {
  history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      if (user.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return <div></div>;
};

export default AuthVerify