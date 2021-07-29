import React, { useEffect, useState } from 'react';
import './Settings.css';
import { db } from '../../firebase';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

const Settings = () => {
  const user = useSelector(selectUser);
  const [avatars, setAvatars] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    db.collection('users')
    .onSnapshot((snapshot) =>
      setUserData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  console.log('settings', user.uid);
  console.log('settings', userData);

  return (
    <div className="settings">
      <img src="" alt="" />
      <h2>name: </h2>
      <h2>email: </h2>
      <h1>tutor/ student </h1>
      <div className="settings__payment">
        <h2>Payment details</h2>
      </div>
    </div>
  );
};

export default Settings;
