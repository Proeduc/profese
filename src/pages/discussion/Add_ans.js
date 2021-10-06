import React from 'react'
import { Link } from 'react-router-dom'
import './Discussion.css'

function Add_ans() {
    return (
        <>
          <div className="container">
             <Link className="btn btn-default" to="/discussion" style={{marginBottom:"20px"}}><i className="fa fa-arrow-circle-left"></i> Back</Link>
          </div>
          <div className="discussion__add__ans container">
            <div className="discussion__add__ans__header">
                <img 
                    src="https://www.bing.com/th?id=OIP.gxn_fMRYjgGPp7I9lh81FgHaGS&w=153&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
                    className="img-circle img-responsive"
                    alt="profile image" />
                <h4>&nbsp;<strong>Ritika Dey</strong>&nbsp;&nbsp;</h4>
            </div>
            <div className="discussion__add__ans__form">
                <textarea
                    name="new_ques"
                    className="form-control"
                    rows="5"
                    placeholder="Enter your answer here"
                    type="text"
                    />
                <div className="discussion__add__ans__attachments">
                    <input  
                        type="file" />

                    <input
                        type="submit"
                        value="Post Answer"
                        className="btn btn-primary" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Add_ans
