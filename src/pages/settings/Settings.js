// import React, { useEffect, useState } from 'react'
// import './Settings.css' 
// import { Avatar } from '@material-ui/core' 

// const Settings = () => { 
//   const [image, setImage] = useState(null)
//   const [userData, setUserData] = useState([])
//   //inputs
//   const [specialities, setSpecialities] = useState('')
//   const [description, setDescription] = useState('')
//   const [about, setAbout] = useState('')
//   const [avatar, setAvatar] = useState(user?.photo)
//   const [avatarUrl, setAvatarUrl] = useState('')
//   const [progress, setProgress] = useState(null)

//   useEffect(() => {
//     db.collection('users')
//       .doc(user?.uid)
//       .collection('data')
//       .doc('data')
//       .get()
//       .then((doc) => {
//         if (doc.exists) {
//           setUserData(doc.data())
//           // input initial states
//           setAbout(`${doc.data().about}`)
//           setDescription(`${doc.data().description}`)
//           setSpecialities(`${doc.data().specialities}`)
//           setAvatarUrl(`${doc.data().avatarUrl}`)
//         }
//       })
//     if (avatarUrl !== '') {
//       dispatch(
//         login({
//           photo: avatarUrl,
//         }),
//       )
//     }
//   }, [user?.uid])

//   console.table(userData)
//   console.log(about, specialities, description, avatarUrl, user?.photo)

//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0])
//       console.log('image>>>>>>>', image)
//     }
//   }

//   const uploadAvatar = () => {
//     if (image) {
//       const uploadTask = storage.ref(`images/${image.name}`).put(image)

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {
//           // progress
//           const progress = Math.round(
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
//           )
//           setProgress(progress)
//         },
//         (error) => {
//           // Error
//           console.log('ERRROR', error)
//           alert(error.message)
//         },
//         () => {
//           // complete
//           storage
//             .ref('images')
//             .child(image.name)
//             .getDownloadURL()
//             .then((url) => {
//               //post image
//               db.collection('users')
//                 .doc(user?.uid)
//                 .collection('data')
//                 .doc('data')
//                 .update({
//                   avatarUrl: url,
//                 })
//               setAvatar(url)
//               setImage(null)
//             })
//         },
//       )
//     }
//   }

//   const actualization = () => {
//     db.collection('users').doc(user?.uid).collection('data').doc('data').set({
//       about: about,
//       description: description,
//       specialities: specialities,
//       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//     })
//   }

//   return (
//     <div className="settings">
//       {/* <button onClick={addSth}>addSth</button> */}
//       <div className="settings__container">
//         <div className="settings__inuptFileContainer">
//           <input
//             onChange={handleChange}
//             className="settings__inputFile"
//             type="file"
//           />
//           <button className="settings__buttonInput btn-primary">
//             Pick new photo
//           </button>

//           <button
//             onClick={uploadAvatar}
//             className="settings__button btn-primary"
//           >
//             Save avatar
//           </button>
//         </div>
//         <progress className="settings__progress" value={progress} max="100" />
//         {avatarUrl !== null && (
//           <Avatar
//             onClick={uploadAvatar}
//             className="settings__avatar"
//             src={avatarUrl}
//             alt=""
//           />
//         )}
//         {avatarUrl === null && (
//           <Avatar
//             onClick={uploadAvatar}
//             className="settings__avatar"
//             src={avatar}
//             alt=""
//           />
//         )}

//         <div>
//           <div className="settings__row">
//             {' '}
//             <label>About</label>
//             <textarea
//               value={about}
//               onChange={(e) => setAbout(e.target.value)}
//               placeholder={about}
//               rows="3"
//             />
//           </div>
//           <div className="settings__row">
//             {' '}
//             <label>Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder={description}
//               rows="3"
//             />
//           </div>
//           <div className="settings__row">
//             {' '}
//             <label>Specialities</label>
//             <textarea
//               value={specialities}
//               onChange={(e) => setSpecialities(e.target.value)}
//               placeholder={specialities}
//               rows="3"
//             />
//           </div>

//           <button
//             className="settings__button btn-primary"
//             onClick={actualization}
//           >
//             Actualization
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Settings
