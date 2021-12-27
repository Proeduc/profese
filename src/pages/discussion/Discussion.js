import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import Disscussion_filter from './Disscussion_filter'
import "./Discussion.css"
 
 function Discussion() {
    const [Filter, setFilter] = useState('')
    const [showFilter, setshowFilter] = useState(false)

    const changeFilter = (filter) => {
        setshowFilter(true)
        setFilter(filter)
     }

     const hideFilter = () => {
        setshowFilter(false)
      }
     return (
         <>
            <div className="disscussion_board container">

                <div className="discussion_filter col-sm-2"> 
                    <h4 className="text-primary"><strong>Filters</strong></h4>
                    <div className="list-group">
                        <Link to="#" onClick={() => changeFilter('Assignment Help')} className="list-group-item">Assignment help</Link>
                        <Link to="#" onClick={() => changeFilter('All Services')} className="list-group-item">All services</Link>
                        <Link to="#" onClick={() => changeFilter('Course help')} className="list-group-item">Course help</Link>
                        <Link to="#" onClick={() => changeFilter('Live session')} className="list-group-item">Live sessions</Link>
                        <Link to="#" onClick={() => changeFilter('Exam prep')} className="list-group-item">Exam prep</Link>
                    </div> 
                    <h4 className="text-primary"><strong>Filters by Subject</strong></h4>
                    <div className="list-group">
                        <Link to="#" onClick={() => changeFilter('Engineering')} className="list-group-item">Engineering</Link>
                        <Link to="#" onClick={() => changeFilter('Mathematics')} className="list-group-item">Mathematics</Link>
                        <Link to="#" onClick={() => changeFilter('English')} className="list-group-item">English</Link>
                        <Link to="#" onClick={() => changeFilter('Science')} className="list-group-item">Science</Link> 
                    </div> 
                </div>

                {
                 showFilter ? <Disscussion_filter hideFilter={hideFilter} filtername = {Filter} /> :
                <div className="discussion_feed col-sm-8">
                    <div className="discussion__feed__new container-fluid">
                        <div className="discussion__feed__new__header">
                            <img 
                              src="https://www.bing.com/th?id=OIP.gxn_fMRYjgGPp7I9lh81FgHaGS&w=153&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
                              className="img-circle img-responsive"
                              alt="profile image" />
                            <h4>&nbsp;<strong>Ritika Dey</strong>&nbsp;&nbsp;</h4>
                        </div>
                        <div className="discussion__feed__new__form">
                            <input 
                              name="new_ques"
                              className="form-control"
                              placeholder="Enter your question here"
                              type="text"
                              />
                            <div className="discussion__feed__new__attachments">
                                <input  
                                  type="file" />

                                <input
                                  type="submit"
                                  value="Post"
                                  className="btn btn-primary" />
                            </div>
                        </div>
                    </div>
                     <div className="discussion__content container-fluid">
                         <h3 className="text-primary">Top questions for you</h3>
                         <div className="discussion__ques">
                             <div className="discussion__que">
                                 <div className='discussion__que__upper'>
                                    <h4 className="discussion__que__title">How do you use electricity to make something cold?</h4>
                                    <div className="discussion__que__likes text-success">5 <i className="fa fa-check-circle-o"></i></div>
                                    <div className="discussion__que__dislikes text-danger">2 <i className="fa fa-close"></i></div>
                                 </div>
                                 <div className="discussion__que__meta">
                                    <div className="discussion__que__anscnt text-primary"><p><i className="fa fa-edit " ></i> No answers yet</p></div>
                                    <div className="discussion__que__addans text-primary"><p><i className="fa fa-plus" aria-hidden="true"></i><Link to="/add-ans"> Add a answer</Link></p></div>
                                    <div className="discussion__que__anscnt text-primary"><i className="fa fa-tag" aria-hidden="true"></i> Tag</div>
                                 </div>
                             </div>

                             <div className="discussion__que">
                                <div className='discussion__que__upper'>
                                    <h4 className="discussion__que__title">How do you use electricity to make something cold?</h4>
                                    <div className="discussion__que__likes text-success">5 <i className="fa fa-check-circle-o"></i></div>
                                    <div className="discussion__que__dislikes text-danger">2 <i className="fa fa-close"></i></div>
                                </div>
                                <img 
                                    className="img-responsive img-rounded"
                                    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg" 
                                    placeholder="ques banner">
                                </img>
                                 <div className="discussion__que__meta">
                                     <div className="discussion__que__anscnt text-primary"><p><i className="fa fa-edit " ></i> 5 answers yet</p></div>
                                     <div className="discussion__que__addans text-primary"><p><i className="fa fa-plus" aria-hidden="true"></i><Link to="/add-ans"> Add a answer</Link></p></div>
                                     <div className="discussion__que__anscnt text-primary"><i className="fa fa-tag" aria-hidden="true"></i> Tag</div>
                                 </div>
                             </div>

                             <div className="discussion__que">
                                <div className='discussion__que__upper'>
                                    <h4 className="discussion__que__title">How do you use electricity to make something cold?</h4>
                                    <div className="discussion__que__likes text-success">5 <i className="fa fa-check-circle-o"></i></div>
                                    <div className="discussion__que__dislikes text-danger">2 <i className="fa fa-close"></i></div>
                                </div>
                                 <div className="discussion__que__meta">
                                     <div className="discussion__que__anscnt text-primary"><p><i className="fa fa-edit " ></i> No answers yet</p></div>
                                     <div className="discussion__que__addans text-primary"><p><i className="fa fa-plus" aria-hidden="true"></i><Link to="/add-ans"> Add a answer</Link></p></div>
                                     <div className="discussion__que__anscnt text-primary"><i className="fa fa-tag" aria-hidden="true"></i> Tag</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>

                }

                <div className="discussion_tips col-sm-2">
                    <h3><strong>Tips <i className="fa fa-lightbulb-o" aria-hidden="true"></i></strong></h3>
                    <hr style={{borderColor:"yellow"}}/>
                    <div className="panel panel-default">
                       <div className="panel-body">Make sure your question is concise</div>
                       <div className="panel-body">Upload pictures, diagrams of nessecary!</div>
                       <div className="panel-body">Use formal language and double check spellings</div>
                    </div>
                </div>
            </div>
         </>
     )
 }
 
 export default Discussion
 