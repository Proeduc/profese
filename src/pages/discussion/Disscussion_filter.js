import React from 'react'
import './Discussion.css'
import {Link} from 'react-router-dom'

function Disscussion_filter(props) {
    return (
        <>
            <div className="discussion_feed col-sm-8">
                <button className="btn btn-default" onClick={props.hideFilter}><i className="fa fa-arrow-circle-left"></i> Back</button>
               <div className="discussion__content container-fluid">
                    <h3 className="text-primary">{props.filtername} questions for you</h3>
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
        </>
    )
}

export default Disscussion_filter
