import React from 'react'
import './Home.css' 
import image from './img.png'
import Services from './Services/Services'

function Home() {
    return (
        <>
           <div className="container-fluid">

               <div className="container-fluid home_main">
                   <div className="home_banner col-lg-5 col-md-5 col-sm-6 col-xs-6">
                        <h1>Reach your learning goal 100% online</h1>
                        <h3>Excel in your course with personalized 1-on-1 learning and help of our skilled subject experts.</h3>
                        <button className="btn btn-primary">FIND A TUTOR</button>
                   </div>

                   <div className="home_down">
                       <p>See how personalized learning can work for you</p>
                       <button className="home_btn_down" onClick={() => {window.scroll(0, 990)}}><i className="fa fa-angle-down"></i></button>
                   </div>
               </div>

               <Services />
                <div className="search container">
                    <form>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control inp" 
                                placeholder="Find Homework Solution"/>

                            <div className="input-group-btn">
                                <button className="btn btn-primary search_btn" type="submit">
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="container-fluid lesson_details">
                   <h1>Online lessons. Just for you</h1>
                   <h2>Excel from the comfort of your home or on the go.</h2>
                   <div className="row">
                       <div className="lesson_details_text col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <h3><i className="fa fa-check-square"></i>Meet with experts of your own choice, anywhere in the country, online.</h3>
                            <h3><i className="fa fa-check-square"></i>Save time and easily fit lessons into your schedule.</h3>
                            <h3><i className="fa fa-check-square"></i>Collaborate with online features built for any skill or subject.</h3>
                       </div>

                       <div className="lesson_details_image col-lg-6 col-md-6 col-sm-6 col-xs-12">
                           <img className="img-responsive" src={image} alt="image"/>
                       </div>
                   </div>
               </div>
          </div>
        </>
    )
}

export default Home;