import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

function Blog_row(props) {
    return (
        <>
           <div className="blog__row">
               <h2 className="blog__row__title">{props.title}</h2> 
               <div className="blog__row__blogs">
                    <div className="blog__row__blog">
                        <div className="blog__row__content"> 
                            <img 
                                src="https://images.pexels.com/photos/4842544/pexels-photo-4842544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                placeholder="blog banner">
                            </img>

                            <h3 className="blog__title">
                                <strong>What is Lorem Ipsum?</strong>
                            </h3> 
                            
                            <div className="blog__desc">
                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's....
                            </div> 

                            <div className="row blog__meta">
                                <div className="col-lg-8 col-xs-12">
                                    <p style={{color: "black", padding:"10px"}}><span className="icon fa fa-user"></span> <strong>Aditi Singh</strong></p>
                                </div>
                                <div className="col-lg-4 col-xs-12">
                                    <Link to="#" className="btn btn-primary" style={{float:"right", margin:"10px"}}>Read More</Link>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div className="blog__row__blog">
                        <div className="blog__row__content"> 
                            <img 
                                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg" 
                                placeholder="blog banner">
                            </img>

                            <h3 className="blog__title">
                                <strong>What is Lorem Ipsum?</strong>
                            </h3> 
                            
                            <div className="blog__desc">
                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's....
                            </div> 

                            <div className="row blog__meta">
                                <div className="col-lg-8 col-xs-12">
                                    <p style={{color: "black", padding:"10px"}}><span className="icon fa fa-user"></span> <strong>Ritika Dey</strong></p>
                                </div>
                                <div className="col-lg-4 col-xs-12">
                                    <Link to="#" className="btn btn-primary" style={{float:"right", margin:"10px"}}>Read More</Link>
                                </div>
                            </div> 

                        </div>
                    </div>

                    <div className="blog__row__blog">
                        <div className="blog__row__content"> 
                            <img 
                                src="https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                placeholder="blog banner">
                            </img>

                            <h3 className="blog__title">
                                <strong>What is Lorem Ipsum?</strong>
                            </h3> 
                            
                            <div className="blog__desc">
                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's....
                            </div> 

                            <div className="row blog__meta">
                                <div className="col-lg-8 col-xs-12">
                                    <p style={{color: "black", padding:"10px"}}><span className="icon fa fa-user"></span> <strong>Samarth Chadda</strong></p>
                                </div>
                                <div className="col-lg-4 col-xs-12">
                                    <Link to="#" className="btn btn-primary" style={{float:"right", margin:"10px"}}>Read More</Link>
                                </div>
                            </div> 

                        </div>
                    </div>

                    <div className="blog__row__more">
                        <button className="btn btn-default" onClick={() => {props.changeState(props.title)}}>More <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
               </div>
           </div> 
        </>
    )
}

export default Blog_row
