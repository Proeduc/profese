import React, { useState, useEffect } from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import SaveIcon from '@material-ui/icons/Save'
import { db } from '../../firebase'
import Loader from 'react-loader-spinner'

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
      <div
        style={{
          height: 'calc(100vh - 125px)',
          width: '100%',
          display: 'grid',
          placeItems: 'center',
          backgroundColor: 'rgb(230, 227, 227)',
        }}
      >
        <Loader type="ThreeDots" color="#153280" height={120} width={120} />
      </div>
    )
  } else {
    return (
      <>
        <div className="user">
          <div className="user__container">
            <div className="user_details">
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
              <button className="msg_user_btn btn">Message</button>
            </div>

            <div className="user_overview">
              <div className="user_overview_content">
                <p>Overview</p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <h4>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <div className="profile__reviews">5 Reviews</div>
                    </h4>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <h4 className="user__overviewDescription">{description}</h4>

                    {/* here i didn't got appropriate icons */}
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <h4 className="user__overviewDescription">
                      {specialities}
                    </h4>

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
        </div>
        {/* setting is not in the design and I'm bit confused where to put it so I just skipped it. */}
        <Footer />
      </>
    )
  }
}

export default Profile
