import React, { useState } from 'react';
import './Profile.css';
import { auth, firebase } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'

const Profile = () => {
  const user = useSelector(selectUser);
  const history = useHistory();

  const logOut = () => {
    auth.signOut();

    history.push('/');
  };

  if (!user) {
    return <h1>Loading....</h1>;
  } 
  else {
    return (
      <>
       <div className="user container-fluid">
           <div className="user_details col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="user_details_content" >
                  <img className="profile_pic img-responsive img-circle" src="https://picsum.photos/id/237/200/180"></img>
                  <h2 className="user_name">User Name</h2>
                  <p className="user_profile">User Profile</p>
                  <div className="user_speciality">
                    <p className="user_speciality_name"><i className="fa fa-graduation-cap">&nbsp;&nbsp;</i>Computer Science</p>
                    <p className="user_speciality_name"><i className="fa fa-graduation-cap">&nbsp;&nbsp;</i>UX Design</p>
                  </div>
                  <button className="msg_user_btn btn">Message John</button>
              </div>
           </div>

           <div className="user_overview col-lg-offset-1 col-md-offset-1 col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="user_overview_content">
                <p>Overview</p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <h4><i class="fa fa-star"></i>5 Reviews</h4>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <h4>Fluent in English, Hindi, Spanish</h4>
                    {/* here i didn't got appropriate icons */}
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <h4>Specialities in Maths, Computer Science, Frontend development</h4>
                    {/* here i didn't got appropriate icons */}
                  </div>
                </div>
              </div>

              <div className="user_about">
                <p>About Me</p>
                <div className="user_about_content">
                  <h4>Lorem Ih4sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h4>
                </div>
              </div>
           </div>
       </div>
 
      {/* setting is not in the design and I'm bit confused where to put it so I just skipped it. */}
       <Footer />
      </>
    );
  }
};

export default Profile;
 