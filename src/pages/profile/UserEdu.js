import React from 'react'
import './Profile.css'

function UserEdu() {
    return (
        <>
           <div className="user__edu__container container-fluid">
                <h2 className="user__edu__title">Educational Information</h2>
                <hr style={{border:"1px solid #153280"}}/>

                <div className="user__college user__details col-sm-6">
                    <h3><i className="fa fa-university" aria-hidden="true"></i> Institution </h3>
                    <h4>Jharkhand Technical University</h4>
                </div>

                <div className="user__course user__details col-sm-6">
                    <h3><i className="fa fa-graduation-cap" aria-hidden="true"></i> Course </h3>
                    <h4>BTech</h4>
                </div>

                <div className="user__major user__details col-sm-6">
                    <h3><i className="fa fa-book" aria-hidden="true"></i> Major </h3>
                    <h4>Computer Science</h4>
                </div>
           </div>
        </>
    )
}

export default UserEdu
