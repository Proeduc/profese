import React from 'react'
import './Service.css'
import live_session_img from './Live_session.png'

function One_on_one() {
    return (
        <>
            <div className="live__session__help container">
            {/* Live session header */}
               <h3 className="text-primary live__session__title">Live session</h3>
               <hr style={{borderTop:"2px dotted #153280"}}/>
               <p className="live__session__desc text-justify">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               </p>
            </div>
            {/* Live session header end */}

            {/* live session content */}
            <div className="live__sesssion__content container">
                <h3 className="text-primary live__session__title">How to book Live session</h3>
                <hr style={{borderTop:"2px dotted #153280"}}/>
                <div className="live__Session__img">
                    <img src={live_session_img} alt="how it works live session" className="img-thumbnail img-responsive" />
                </div>                
            </div>
            {/* live session content end */}    

            {/* live session form */}
             <div className="live__session__form container">
               <h3 className="live__session__title">Book your Live session</h3>
               <hr style={{borderTop:"2px dotted white"}}/>

                <form className="container form__container col-sm-8">
                    <div className="form-group">
                        <label for="email">Email: </label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label for="title">Subject Title: </label>
                        <input type="text" className="form-control" id="title" placeholder="Enter Subject title"/>
                    </div>  
                    <div className="form-group">
                        <label for="desc">Problem Description</label>
                        <textarea type="text" rows="3" className="form-control" id="desc" placeholder="Enter Course description"/>
                    </div> 
                    <div className="form-group">
                        <label for="session_date">Session Date</label>
                        <input type="datetime-local" className="form-control" id="session_date"/>
                    </div> 
                    <div className="form-group">
                        <label for="duration">Session Duration</label>
                        <input type="number" className="form-control" id="duration" placeholder="Duration in Minutes"/>
                    </div> 
                    <div className="form-group">
                        <input type="file"/>
                    </div>

                    <div className="form-group"> 
                        <button type="submit" className="btn btn-primary">Submit</button> 
                    </div>
                </form> 
                {/* live session form end */}
            </div>
        </>
    )
}

export default One_on_one
