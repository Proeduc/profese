import React from 'react'
import './Profile.css'

function UserBasics() {
    return (
         <>
            <div className="user__basics__container container-fluid">
                <h2 className="user__basics__title">Basic Information</h2>
                <hr style={{border:"1px solid #153280"}}/>
                
                <div className="user__email user__details col-sm-6">
                    <h3><i className="fa fa-envelope" aria-hidden="true"></i> Email </h3>
                    <h4>riti@gmail.com</h4>
                </div>
                <div className="user__mob user__details col-sm-6">
                    <h3><i className="fa fa-phone" aria-hidden="true"></i> Phone </h3>
                    <h4>+91 7488838372</h4>
                </div>
                <div className="user__dob user__details col-sm-6">
                    <h3><i className="fa fa-calendar" aria-hidden="true"></i> Date of Birth </h3>
                    <h4>10th March</h4>
                </div> 
            </div>
         </>
    )
}

export default UserBasics
