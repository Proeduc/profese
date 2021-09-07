import React, { useEffect, useState } from 'react'
import './Settings.css'
import { db, firebase, storage } from '../../firebase'
import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'

const Settings = () => {
  const user = useSelector(selectUser)
  const [image, setImage] = useState(null)
  const [userData, setUserData] = useState([])
  //inputs
  const [specialities, setSpecialities] = useState('')
  const [description, setDescription] = useState('')
  const [about, setAbout] = useState('')
  const [progress, setProgress] = useState(null)

  console.log(user)

  useEffect(() => {
    db.collection('users')
      .doc(user?.uid)
      .collection('data')
      .doc('data')
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserData(doc.data())
          // input initial states
          setAbout(`${doc.data().about}`)
          setDescription(`${doc.data().description}`)
          setSpecialities(`${doc.data().specialities}`)
        }
      })
  }, [user?.uid])

  console.table(userData)
  console.log(about, specialities, description)

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
      console.log('image>>>>>>>', image)
    }
  }

  const changeAvatar = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image)

      uploadTask.on(
        'state_changed',

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // progress
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
            )
            setProgress(progress)
          },
          (error) => {
            // Error
            console.log('ERRROR', error)
            alert(error.message)
          },
          () => {
            // complete
            storage
              .ref('images')
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                //post image
                db.collection('users').doc(user.uid).collection('avatar').add({
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  image: url,
                })
                setImage(null)
              })
          },
        ),
      )
    }
  }

  const actualization = () => {
    db.collection('users').doc(user?.uid).collection('data').doc('data').set({
      about: about,
      description: description,
      specialities: specialities,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return (
    <div className="settings">
      {/* <button onClick={addSth}>addSth</button> */}
      <div className="settings__container">
        <input
          onChange={handleChange}
          className="settings__inputFile"
          type="file"
        />
        <Avatar
          className="settings__avatar"
          onClick={changeAvatar}
          src={user?.photo}
          alt=""
        />
        <div>
          <div className="settings__row">
            {' '}
            <label>About</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder={about}
              rows="3"
            />
          </div>
          <div className="settings__row">
            {' '}
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={description}
              rows="3"
            />
          </div>
          <div className="settings__row">
            {' '}
            <label>Specialities</label>
            <textarea
              value={specialities}
              onChange={(e) => setSpecialities(e.target.value)}
              placeholder={specialities}
              rows="3"
            />
          </div>

          <button
            className="settings__button btn-primary"
            onClick={actualization}
          >
            Actualization
          </button>
        </div>

        <div className="settings__payment">
          <h2>Payment details</h2>
        </div>
      </div>
    </div>
  )
}

export default Settings
