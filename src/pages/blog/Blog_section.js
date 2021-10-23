import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog_section(props) {
    return (
         <>
          <div className="blog__section container-fluid">
              <div className="blog__section__header"> 
                  <button className="blog__Section__back btn btn-default" onClick={props.changeState}><i className="fa fa-arrow-circle-left"></i> Back</button> 
                  <h2>{props.section}</h2>
              </div>

              <div className="blog__section__content container">
                  <div className="row blog__section__row"> 
                      <div className="blog__section__blog col-sm-6">
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
                                        <Link to="#" className="btn btn-primary" style={{float:"right", margin:"10px"}} onClick={() => props.ShowSingleBlog("Blog title from backend here")}>Read More</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                      </div>


                      <div className="blog__section__blog col-sm-6">
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
                                        <Link to="#" className="btn btn-primary" style={{float:"right", margin:"10px"}} onClick={() => props.ShowSingleBlog("Blog title from backend here")}>Read More</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                      </div>
                  </div>



                  {/* second row */}

                  <div className="row blog__section__row"> 
                      <div className="blog__section__blog col-sm-6">
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
                                        <Link to="#" className="btn btn-primary" style={{float:"right", margin:"10px"}} onClick={() => props.ShowSingleBlog("Blog title from backend here")}>Read More</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                      </div>


                      <div className="blog__section__blog col-sm-6">
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
                                        <Link to="#" className="btn btn-primary" style={{float:"right", margin:"10px"}} onClick={() => props.ShowSingleBlog("Blog title from backend here")}>Read More</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                      </div>
                  </div>

                {/* third row */}
                <div className="row blog__section__row"> 
                      <div className="blog__section__blog col-sm-6">
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
                                        <Link to="#" className="btn btn-primary" style={{float:"right", margin:"10px"}} onClick={() => props.ShowSingleBlog("Blog title from backend here")}>Read More</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                      </div>


                      <div className="blog__section__blog col-sm-6">
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
                                        <Link to="#" className="btn btn-primary" style={{float:"right", margin:"10px"}} onClick={() => props.ShowSingleBlog("Blog title from backend here")}>Read More</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                      </div>
                  </div>

              </div>
          </div>
         </>
    )
}
