import React, { useState } from 'react';
import './Profile.css';
import { auth, firebase } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { Link, useHistory } from 'react-router-dom';

const Profile = () => {
  const user = useSelector(selectUser);
  const history = useHistory();

  const logOut = () => {
    auth.signOut();

    history.push('/');
  };

  if (!user) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <div className="profile">
        <h1>
          Hello {user?.displayName} {user?.email}
        </h1>
        <button onClick={logOut}>LogOut</button>
        <Link to="settings">
          <button className="profile__settings">Settings</button>
        </Link>
      </div>
    );
  }
};

export default Profile;
