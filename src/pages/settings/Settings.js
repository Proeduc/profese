import React, { useEffect, useState } from 'react';
import './Settings.css';
import { db } from '../../firebase';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Settings = () => {
  const user = useSelector(selectUser);
  const [avatars, setAvatars] = useState('');
  const [userData, setUserData] = useState([]);
  //inputs
  const [name, setName] = useState(user.displayName);
  const [mail, setMail] = useState(user.email);
  const [birthDay, setBirthDay] = useState(userData[0]?.data.birth_date);
  const [profile, setProfile] = useState(userData[0]?.data.profile);
  const [proceed, setProceed] = useState(false);

  console.log(user);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user.uid)
        .collection('data')
        .onSnapshot((snapshot) =>
          setUserData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [user, proceed]);

  const actualization = () => {
    if (user && userData) {
      db.collection('users')
        .doc(user.uid)
        .collection('data')
        .doc(userData[0].id)
        .set({
          email: mail,

          name: name,
        });
    }

    setProceed(true);
    setProceed(false);
  };

  return (
    <div className="settings">
      <Link to="/profile">
        {' '}
        <button>Back</button>
      </Link>
      {userData[0]?.data.image ? (
        <Avatar src={userData[0]?.data.image} alt="" />
      ) : (
        <Avatar src="" alt="" />
      )}

      {userData[0]?.data.name ? (
        <h2>name: {userData[0]?.data.name} </h2>
      ) : (
        <input placeholder="provide a name.." />
      )}

      {userData[0]?.data.email ? (
        <h2>email: {userData[0]?.data.email} </h2>
      ) : (
        <input placeholder="provide an email" />
      )}

      {userData[0]?.data.profile ? (
        <h1>tutor/ student: {userData[0]?.data.profile} </h1>
      ) : (
        <input placeholder="provide a profile type..." />
      )}

      {userData[0]?.data.birth_date ? (
        <h2>Birth Date: {userData[0]?.data.birth_date}</h2>
      ) : (
        <input placeholder="provide a birth date..." />
      )}
      <button onClick={actualization}>Actualization</button>

      <div className="settings__payment">
        <h2>Payment details</h2>
      </div>
    </div>
  );
};

export default Settings;
