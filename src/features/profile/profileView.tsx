import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { fetchProfile } from "./profileSlice";

const ProfileView = () => {
  const profile = useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();

  const {
    data: { username },
  } = profile;

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div>
      <h3>Your username is {username}</h3>
    </div>
  );
};

export default ProfileView;
