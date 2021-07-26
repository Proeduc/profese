import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
            <div className="home_main">
                <img src="https://www.hyperthread.in/wp-content/uploads/2014/12/bg-dummy-01.jpg" alt="background" />

                <div className="home_contents">
                    <p style={{marginBottom:'10px'}}>GET ASSIGNMENT AND COURSE HELP TODAY</p>
                    <h2 style={{marginBottom:'10px'}}>SCHEDULE A SESSION</h2>
                    <div className="home_content_para">
                        <p>Excel your course with the help of our skilled subject experts for:</p>
                        <ul>
                            <li>Courses</li>
                            <li>Assignments</li>
                            <li>Online exam prep</li>
                        </ul>
                    </div>

                    <button className="home_button">FIND A TUTOR</button>
                </div>

                <div className="home_down">
                    <p>See how personalized learning can work for you</p>
                    <button className="home_btn_down" onClick={() => {window.scroll(0, 990)}}><i className="fa fa-angle-down"></i></button>
                </div>

            </div>


        </>
    )
}

export default Home