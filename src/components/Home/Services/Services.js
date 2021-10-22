import React from 'react'
import assignment_help from './assignment_help.jpg'
import one_on_one from './one-on-one.jpg'
import practice_exam from './practice_exam.jpg'
import course_help from './course_help.jpg'
import './Services.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'

// please add captions over images I was not able to add them properly
function Services() {
  return (
    <>
      <div className="container-fluid">
        <Fade bottom>
          <div className="services__row">
            <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="home__thumbnail thumbnail">
                <div className="home__service__img thumbnail">
                    <img className="img-responsive" alt="" src={assignment_help} /> 
                </div>
                <h1>Assignment Help</h1>
                <h4>
                  For students who need help with homeworks and projects.
                </h4>
                <Link to="/assignment-help" className="btn btn-primary get_started">
                  Get started
                </Link>
              </div>
            </div>
            <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="home__thumbnail thumbnail">
                <div className="home__service__img thumbnail">
                  <img className="img-responsive" alt="" src={course_help} />
                </div>
                <h1>Course Help</h1>
                <h4>
                   For students who need general help with course material.
                </h4>
                <Link to="/course-help" className="btn btn-primary get_started">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="services__row">
            <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="home__thumbnail thumbnail">
                <div className="home__service__img thumbnail">
                  <img className="img-responsive" alt="" src={practice_exam} />
                </div>
                <h1>Practice Exam</h1>
                <h4>
                   For students who need some more practice with course material.
                </h4>
                <Link to="/practice-exam" className="btn btn-primary get_started">
                  Get started
                </Link>
              </div>
            </div>
            <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="home__thumbnail thumbnail">
                <div className="home__service__img thumbnail">
                  <img className="img-responsive" alt="" src={one_on_one} />
                </div>
                <h1>Live session</h1>
                <h4>
                   Private sessions specifically tailored to your needs.
                </h4>
                <Link to="/live-sessions" className="btn btn-primary get_started">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Services
