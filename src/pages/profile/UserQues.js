import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

function UserQues() {
    return (
        <> 
           <div className="user__ques__Container container-fluid">
                <h2 className="user__ques__title">Questions by Me</h2>
                <hr style={{border:"1px solid #153280"}}/>

                <div className="user__ques__details">
               {/* Just keep one div and apply loop on it as we fetch data from backend */}
                    <div className="user__question">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">View</Link>
                    </div>
                    <div className="user__question">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">View</Link>
                    </div>
                    <div className="user__question">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">View</Link>
                    </div>
                    <div className="user__question">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">View</Link>
                    </div>
                    <div className="user__question">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">View</Link>
                    </div>
                    <div className="user__question">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">View</Link>
                    </div>
                    <div className="user__question">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">View</Link>
                    </div>
                </div>
           </div>
        </>
    )
}

export default UserQues
