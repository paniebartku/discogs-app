import { isEmpty } from "lodash-es";
import React, { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { getToken } from "./loginSlice";

const LoginView = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector(state => state.login);

  console.log(login);

  useEffect(() => {
    dispatch(getToken());
    if (!isEmpty(login.data)) {
      window.location.replace(
        `https://discogs.com/oauth/authorize?oauth_token=${login.data}`
      );
    }
  }, []);

  return (
    <div>
      <h3>Login stuff</h3>
    </div>
  );
};

export default LoginView;
