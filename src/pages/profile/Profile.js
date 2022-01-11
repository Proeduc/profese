 import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
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
   const [IsModalOpen, setIsModalOpen] = useState(false)
   const history = useHistory()

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
            <div className='profile__shortcut__buttons'>
              <button title='Edit profile' className="btn btn-info profile__shortcut__btn" data-toggle="modal" data-target="#profileModal"><i className="fa fa-edit"></i></button>
              <button title='Cart' onClick={() => {history.push('/cart')}} className="btn btn-info profile__shortcut__btn"><i className='fa fa-shopping-cart'></i></button>
              <button title='Notifications' onClick={() => {history.push('/')}} className="btn btn-info profile__shortcut__btn"><i className='fa fa-bell'></i></button>
              <button title='My Purchases' onClick={() => {history.push('/purchases')}} className="btn btn-info profile__shortcut__btn"><i className='fa fa-list-alt'></i></button>
            </div>
              
              {/* <!-- Modal --> */}
              {/* modal content */} 
              <div id="profileModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  {/* <!-- Modal content--> */}
                  <div className="modal-content" style={{backgroundColor:"#153280", color:"white"}}>
                    <div className="modal-header" style={{backgroundColor:"white", color:"#153280", fontWeight:"bold"}}>
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Edit your profile details</h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                          <label htmlFor="name">Name:</label>
                          <input 
                              type="text" 
                              name="name"   
                              className="form-control" 
                              placeholder="Update your name here" required/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <input 
                              type="text" 
                              name="email"   
                              className="form-control" 
                              placeholder="Update your email here" required/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="dob">DOB:</label>
                          <input 
                              type="date" 
                              name="DOB"  
                              className="form-control" 
                              placeholder="Update your Date of birth here" required/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="course">Course:</label>
                          <input 
                              type="text" 
                              name="course"  
                              className="form-control" 
                              placeholder="Update your Course here" required/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="major">Major:</label>
                          <input 
                              type="text" 
                              name="major"   
                              className="form-control" 
                              placeholder="Update your major subject here" required/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="institution">Institution:</label>
                          <input 
                              type="text" 
                              name="institution"  
                              className="form-control" 
                              placeholder="Update your institution here" required/>
                        </div>


                        <button className="btn btn-default">Update</button>
                    </div> 
                  </div>
                </div>
              </div>
            
              
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
 