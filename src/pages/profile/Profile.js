import React, { useState, useEffect } from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import SaveIcon from '@material-ui/icons/Save'
import { db } from '../../firebase'

const Profile = () => {
  const user = useSelector(selectUser)
  const history = useHistory()

  const [description, setDescription] = useState('not defined')
  const [specialities, setSpecialities] = useState('not defined')
  const [about, setAbout] = useState('not defined')

  useEffect(() => {
    db.collection('users')
      .doc(user?.uid)
      .collection('data')
      .doc('data')
      .get()
      .then((doc) => {
        if (doc.exists) {
          setAbout(`${doc.data().about}`)
          setDescription(`${doc.data().description}`)
          setSpecialities(`${doc.data().specialities}`)
        }
      })
  }, [user?.uid])

  if (!user) {
    return (
      <h1 className="profile__authentication">Proceeding Authentication....</h1>
    )
  } else {
    return (
      <>
        <div className="user container-fluid">
          <div className="user_details col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="user_details_content">
              <img
                className="profile_pic img-responsive"
                src={`${user?.photo}`}
                alt=""
              ></img>
              <h2 className="user_name">{user?.displayName}</h2>
              <p className="profile__userProfile">User Profile</p>
              <div className="user_speciality">
                <p className="user_speciality_name">
                  <i className="fa fa-graduation-cap">&nbsp;&nbsp;</i>Computer
                  Science
                </p>
                <p className="user_speciality_name">
                  <i className="fa fa-graduation-cap">&nbsp;&nbsp;</i>UX Design
                </p>
              </div>
              <button className="msg_user_btn btn">
                Message {user?.displayName}
              </button>
            </div>
          </div>

          <div className="user_overview col-lg-offset-1 col-md-offset-1 col-lg-7 col-md-7 col-sm-7 col-xs-12">
            <div className="user_overview_content">
              <p>Overview</p>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h4>
                    <i class="fa fa-star"></i>5 Reviews
                  </h4>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h4 className="user__overviewDescription">{description}</h4>

                  {/* here i didn't got appropriate icons */}
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h4 className="user__overviewDescription">{specialities}</h4>

                  {/* here i didn't got appropriate icons */}
                </div>
              </div>
            </div>

            <div className="user_about">
              <p>About Me</p>
              <div className="user_about_content">
                <h4 className="user__overviewDescription">{about}</h4>
              </div>
            </div>
          </div>
        </div>
        {/* setting is not in the design and I'm bit confused where to put it so I just skipped it. */}
        <Footer />
      </>
    )
  }
}

export default Profile
