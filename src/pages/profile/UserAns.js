import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

function UserAns() {
    return (
        <> 
           <div className="user__ans__Container container-fluid">
                <h2 className="user__ans__title">Answers by Me</h2>
                <hr style={{border:"1px solid #153280"}}/>

                <div className="user__ans__details">
               {/* Just keep one div and apply loop on it as we fetch data from backend */}
                    <div className="user__answer">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <p className="ans__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ......</p>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">Read more</Link>
                    </div>
                    <div className="user__answer">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <p className="ans__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ......</p>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">Read more</Link>
                    </div>
                    <div className="user__answer">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <p className="ans__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ......</p>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">Read more</Link>
                    </div>
                    <div className="user__answer">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <p className="ans__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ......</p>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">Read more</Link>
                    </div>
                    <div className="user__answer">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <p className="ans__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ......</p>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">Read more</Link>
                    </div>
                    <div className="user__answer">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <p className="ans__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ......</p>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">Read more</Link>
                    </div>
                    <div className="user__answer">
                        <h3 className="ques__desc"><strong>What is Lorem Ipsum? Why do we use it?</strong></h3>
                        <p className="ans__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ......</p>
                        <Link to="/discussion" className="btn btn-default user__read__more__btn">Read more</Link>
                    </div>
                </div>
           </div>
        </>
    )
}

export default UserAns
