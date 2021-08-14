import React from 'react'
import assignment_help from './assignment_help.jpg'
import one_on_one from './one-on-one.jpg'
import practice_exam from './practice_exam.jpg'
import course_help from './course_help.jpg'
import './Services.css'

// please add captions over images I was not able to add them properly
function Services() {
    return (
        <>
           <div className="container-fluid">
               <div className="row">
                   <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       <div className="thumbnail">
                         <img className="img-responsive" src={assignment_help} />
                         <h1>Lorem Ipsum</h1>
                         <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                         <button className="btn btn-primary get_started">Get started</button>
                       </div>
                   </div>
                   <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       <div className="thumbnail">
                         <img className="img-responsive" src={course_help} />
                         <h1>Lorem Ipsum</h1>
                         <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                             <button className="btn btn-primary get_started">Get started</button>
                       </div>
                   </div>
               </div>

               <div className="row">
                   <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="thumbnail">
                          <img className="img-responsive" src={practice_exam} />
                          <h1>Lorem Ipsum</h1>
                          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                          <button className="btn btn-primary get_started">Get started</button>
                        </div>
                   </div>
                   <div className="service col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="thumbnail">
                          <img className="img-responsive" src={one_on_one} /> 
                          <h1>Lorem Ipsum</h1>
                          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                           <button className="btn btn-primary get_started">Get started</button>
                        </div>
                   </div>
               </div>
            </div> 
        </>
    )
}

export default Services
