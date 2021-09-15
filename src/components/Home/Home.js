import React, { useState, useEffect } from 'react'
import './Home.css'
import image from './img.png'
import Services from './Services/Services'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'
import { db } from '../../firebase'

function Home() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    db.collection('reviews').onSnapshot((snapshot) =>
      setReviews(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
      ),
    )
  }, [])

  return (
    <>
      <div className="container-fluid home">
        <div className="container-fluid home_main">
          <Slide right>
            <div className="home_banner col-lg-5 col-md-5 col-sm-6 col-xs-6">
              <h1>Reach your learning goal 100% online</h1>
              <h3>
                Excel in your course with personalized 1-on-1 learning and help
                of our skilled subject experts.
              </h3>
              <button className="btn btn-primary home__banner__btn">
                FIND A TUTOR
              </button>
            </div>
          </Slide>
          <div className="home_down">
            <p className="home__down__text">
              See how personalized learning can work for you
            </p>
            <button
              className="home_btn_down"
              onClick={() => {
                window.scroll(0, 990)
              }}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </div>
        </div>
        <div className="search container">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control inp"
                placeholder="Find Homework Solution"
              />

              <div className="input-group-btn">
                <button className="btn btn-primary search_btn" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <Services />{' '}
        <Fade>
          <div className="container-fluid lesson_details">
            <h1>Online lessons. Just for you</h1>
            <h2>Excel from the comfort of your home or on the go.</h2>
            <div className="row">
              <div className="lesson_details_text col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h3>
                  <i className="fa fa-check-square"></i>Meet with experts of
                  your own choice, anywhere in the country, online.
                </h3>
                <h3>
                  <i className="fa fa-check-square"></i>Save time and easily fit
                  lessons into your schedule.
                </h3>
                <h3>
                  <i className="fa fa-check-square"></i>Collaborate with online
                  features built for any skill or subject.
                </h3>
              </div>
              <div className="lesson_details_image col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <img alt="" className="img-responsive" src={image} alt="" />
              </div>
            </div>
          </div>
        </Fade>
        {/* <div className="reviews__home container-fluid">
          {' '}
          <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Reviews</h1>
          <div className="reviews_row__home container">
            {reviews.map((r) => (
              <div className="review">
                <div className="reviewer_profile row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <img
                      style={{ width: '100px' }}
                      className="profile_img img-responsive img-circle"
                      alt=""
                      src={r.data.image}
                    ></img>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <h3 className="username">{r.data.name}</h3>
                    <p>Student at {r.data.university}</p>
                  </div>
                </div>
                <div className="review_content">
                  <p>{r.data.text}</p>
                </div>
              </div>
            ))}

            <div className="view_more">
              <NavLink
                className="view__more__btn btn btn-primary"
                to="/reviews"
              >
                More &nbsp;<i class="glyphicon glyphicon-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Home
