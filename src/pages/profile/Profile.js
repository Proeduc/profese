 import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 import './Profile.css'
import UserAns from './UserAns'
import UserBasics from './UserBasics'
import UserEdu from './UserEdu'
import UserQues from './UserQues'
 
 function Profile() {
   const [ShowBasics, setShowBasics] = useState(false)
   const [ShowAns, setShowAns] = useState(false)
   const [ShowEdu, setShowEdu] = useState(false)
   const [ShowQues, setShowQues] = useState(false)

   const changeBasics = () => {
    setShowBasics(true)
    setShowAns(false)
    setShowEdu(false)
    setShowQues(false)
   }

   const changeEdu = () => {
    setShowBasics(false)
    setShowAns(false)
    setShowEdu(true)
    setShowQues(false)
   }

   const changeAns = () => {
    setShowBasics(false)
    setShowAns(true)
    setShowEdu(false)
    setShowQues(false)
   }

   const changeQues = () => {
    setShowBasics(false)
    setShowAns(false)
    setShowEdu(false)
    setShowQues(true)
   }
   return (
     <>
       <div className="profile__container container">

         {/* profile sidenav */}
          <div className="col-sm-4 profile__nav">
              <div className="profile__image" align="center">
                 {/* profile image, get image src from backend */}
                 <img className="img-responsive img-circle" src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile image"/>
                 <h3><strong>Ritika Dey</strong></h3>
              </div>
              <div className="profile__nav__list">
                  <div className="list-group">
                    <Link to="#" className="list-group-item" onClick={() => changeBasics()}>Basics</Link>
                    <Link to="#" className="list-group-item" onClick={() => changeEdu()}>Education</Link> 
                    <Link to="#" className="list-group-item" onClick={() => changeAns()}>Answers</Link> 
                    <Link to="#" className="list-group-item" onClick={() => changeQues()}>Questions</Link> 
                    {/* change the below url for ask a question don't change above urls*/}
                    <Link to="/ask" className="list-group-item">Ask Questions</Link> 
                  </div>
              </div>
              <div className="profile__image__upload" align="center">
                <button className="btn btn-primary">Upload New Image</button>
              </div>
          </div>
         {/* profile sidenav end */}

         {/* profile data */}
          <div className="col-sm-8 profile__data"> 
              <button style={{float:"right", borderRadius:"50%"}} className="btn btn-primary"><i className="fa fa-edit" aria-hidden="true"></i></button>
              { 
                ShowBasics ? <UserBasics /> : (ShowEdu ? <UserEdu /> : (ShowAns ? <UserAns /> : ShowQues ? <UserQues /> : <UserBasics />))
              }
          </div>
         {/* profile data end */}
       </div>
     </>
   )
 }
 
 export default Profile
 