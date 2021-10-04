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

        {/* home footer start */}
        <div className="home__footer">
          <div className="row">
            <div className="home__Contact__info col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <h2 className="contact__info__title">Contact Info</h2>
              
              <div className="contact__info__content">
                <hr/>
                <p className="contact__info__address"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;ADDRESS : C-4 Behind MA Plazaz , New Delhi</p>
                <p className="contact__info__telephone"><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;PHONE: +91 8299729830</p>
                <p className="contact__info__whatsapp"><i className="fa fa-whatsapp"></i>&nbsp;WHATSAPP: +91 8299729830</p>
              </div>
            </div>
            <div className="home__useful__link col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h2 className="useful__links__title">Useful Links</h2>
              <hr style={{borderColor:"#153280"}}/>

              <div className="useful__links__content">
                <div className="home__footer__courses col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <p>COURSES</p>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">Mathematics</NavLink></li>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">Science</NavLink></li>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">Engineering</NavLink></li>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">English</NavLink></li>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">More</NavLink></li>
                </div>
                <div className="home__footer__services col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <p>SERVICES</p>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">Assignment help</NavLink></li>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">One-on-one session</NavLink></li>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">Practice help</NavLink></li>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">Course help</NavLink></li>
                </div>
                <div className="home__footer__careers col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <p>CAREERS</p>
                  <li><i class="fa fa-angle-right" aria-hidden="true"></i>&nbsp;<NavLink to="#">Explore opportunities</NavLink></li>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* home footer end */}
      </div>
    </>
  )
}

export default Home
