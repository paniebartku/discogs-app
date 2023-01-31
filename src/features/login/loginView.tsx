import { isEmpty } from "lodash-es";
import React, { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { getToken } from "./loginSlice";

const LoginView = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector(state => state.login);

  console.log(login, "login");

  let isAuth = false;

  const {
    data: { oauth_token },
  } = login;

  useEffect(() => {
    if (!isAuth) {
      dispatch(getToken());
    }
    if (!isEmpty(oauth_token)) {
      window.location.replace(
        `https://discogs.com/oauth/authorize?oauth_token=${oauth_token}`
      );
    }

    isAuth = true;
  }, [dispatch]);

  return (
    <div>
      <h3>Login stuff</h3>
    </div>
  );
};

export default LoginView;
