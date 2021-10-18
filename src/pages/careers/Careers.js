import React from 'react'
import './Careers.css'

function Careers() {
    return (
        <>
            <div className="careers__header">
                <img src="https://image.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg" className="img-responsive"/>
                <div className="careers__header__text">
                <h1>Join Us</h1> 
                <h4 className="text-justify"> Excel your professional career with Profese today. Be with a group of people who believe in stand</h4>
                </div>
            </div>

           <div className="careers__container container">
               <div className="careers__about__us">
                   <h3 className="text-primary about__us__title">Who we are?</h3>
                   {/* change this with original content */}
                   <h4 className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                     ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                     not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
               </div>


               <div className="careers__why__join">
                   <h3 className="text-primary why__join__title">Why join us?</h3>
                   {/* change this with original content */}
                   <div className="list-group row">
                       <li className="col-sm-6 list-group-item"><i className="fa fa-user" aria-hidden="true"></i> Point 1</li>
                       <li className="col-sm-6 list-group-item"><i className="fa fa-user" aria-hidden="true"></i> Point 2</li> 
                   </div>
                   <div className="list-group row">
                       <li className="col-sm-6 list-group-item"><i className="fa fa-user" aria-hidden="true"></i> Point 3</li>
                       <li className="col-sm-6 list-group-item"><i className="fa fa-user" aria-hidden="true"></i> Point 4</li> 
                   </div>
               </div>


               {/* job openings */}
               <div className="careers__job__openings container">
                   {/* implement backend here */}
                   <h2 className="job__openings__title">Job Openings</h2>
                   <hr style={{borderTop:"5px solid #153280"}} />

                    {/* job row start loop over this row only remove others */}
                   <div className="row">
                       <div className="job__opening col-sm-6">
                           <div className="job__opening__content">
                               <h3 className="job__role">Software developer</h3>
                               <p className="job__Desc">We are looking for experiences professional and immediate joiners for our delhi based office.</p>
                               <div className="job__details">
                                   <p className="job__type"><i class="fa fa-tasks" aria-hidden="true"></i> &nbsp;Fulltime</p>
                                   <p className="job__location"><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;Pune</p>
                                   <p className="job__experience"><i class="fa fa-briefcase" aria-hidden="true"></i> &nbsp;2-5 years</p>
                               </div>
                           </div>
                       </div>
                       <div className="job__opening col-sm-6">
                           <div className="job__opening__content">
                               <h3 className="job__role">Content writor</h3>
                               <p className="job__Desc">We are looking for experiences professional and immediate joiners for our delhi based office.</p>
                               <div className="job__details">
                                   <p className="job__type"><i class="fa fa-tasks" aria-hidden="true"></i> &nbsp;Fulltime</p>
                                   <p className="job__location"><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;Pune</p>
                                   <p className="job__experience"><i class="fa fa-briefcase" aria-hidden="true"></i> &nbsp;2-5 years</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   {/* job row end */}
                   <div className="row">
                       <div className="job__opening col-sm-6">
                           <div className="job__opening__content">
                               <h3 className="job__role">Maths tutor</h3>
                               <p className="job__Desc">We are looking for experiences professional and immediate joiners for our delhi based office.</p>
                               <div className="job__details">
                                   <p className="job__type"><i class="fa fa-tasks" aria-hidden="true"></i> &nbsp;Fulltime</p>
                                   <p className="job__location"><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;Pune</p>
                                   <p className="job__experience"><i class="fa fa-briefcase" aria-hidden="true"></i> &nbsp;2-5 years</p>
                               </div>
                           </div>
                       </div>
                       <div className="job__opening col-sm-6">
                           <div className="job__opening__content">
                               <h3 className="job__role">Software developer</h3>
                               <p className="job__Desc">We are looking for experiences professional and immediate joiners for our delhi based office.</p>
                               <div className="job__details">
                                   <p className="job__type"><i class="fa fa-tasks" aria-hidden="true"></i> &nbsp;Fulltime</p>
                                   <p className="job__location"><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;Pune</p>
                                   <p className="job__experience"><i class="fa fa-briefcase" aria-hidden="true"></i> &nbsp;2-5 years</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="job__opening col-sm-6">
                           <div className="job__opening__content">
                               <h3 className="job__role">Graphics designer</h3>
                               <p className="job__Desc">We are looking for experiences professional and immediate joiners for our delhi based office.</p>
                               <div className="job__details">
                                   <p className="job__type"><i class="fa fa-tasks" aria-hidden="true"></i> &nbsp;Internship</p>
                                   <p className="job__location"><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;Pune</p>
                                   <p className="job__experience"><i class="fa fa-briefcase" aria-hidden="true"></i> &nbsp;2-5 years</p>
                               </div>
                           </div>
                       </div>
                       <div className="job__opening col-sm-6">
                           <div className="job__opening__content">
                               <h3 className="job__role">Sales executive</h3>
                               <p className="job__Desc">We are looking for experiences professional and immediate joiners for our delhi based office.</p>
                               <div className="job__details">
                                   <p className="job__type"><i class="fa fa-tasks" aria-hidden="true"></i> &nbsp;Part time</p>
                                   <p className="job__location"><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;Pune</p>
                                   <p className="job__experience"><i class="fa fa-briefcase" aria-hidden="true"></i> &nbsp;2-5 years</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Careers
