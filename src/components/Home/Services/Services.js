import React from 'react'
import assignment_help from './assignment_help.jpg'
import one_on_one from './one-on-one.jpg'
import practice_exam from './practice_exam.jpg'
import course_help from './course_help.jpg'
import './Services.css'
import Fade from 'react-reveal/Fade'

// please add captions over images I was not able to add them properly
function Services() {
  return (
    <>
      <div className="container-fluid">
        <Fade bottom>
          <div className="services__row">
            <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="thumbnail">
                <img className="img-responsive" alt="" src={assignment_help} />
                <h1>Lorem Ipsum</h1>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </h4>
                <button className="btn btn-primary get_started">
                  Get started
                </button>
              </div>
            </div>
            <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="thumbnail">
                <img className="img-responsive" alt="" src={course_help} />
                <h1>Lorem Ipsum</h1>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </h4>
                <button className="btn btn-primary get_started">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="services__row">
            <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="thumbnail">
                <img className="img-responsive" alt="" src={practice_exam} />
                <h1>Lorem Ipsum</h1>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </h4>
                <button className="btn btn-primary get_started">
                  Get started
                </button>
              </div>
            </div>
            <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="thumbnail">
                <img className="img-responsive" alt="" src={one_on_one} />
                <h1>Lorem Ipsum</h1>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </h4>
                <button className="btn btn-primary get_started">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Services
