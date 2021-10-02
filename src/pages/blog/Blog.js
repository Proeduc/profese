import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Blog.css'
import Blog_row from './Blog_row'
import Blog_section from './Blog_section'

function Blog() {
    const [ShowSection, setShowSection] = useState(false)
    const [Section, setSection] = useState("")

    const changeState = (section) => {
        setShowSection(!ShowSection)
        setSection(section)
    }

    return (
        <>
            <div className="blog container-fluid">
                <div className="blog__header container-fluid">
                    <div className="row">
                        <div className="blog__header__brand col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <p>Blog</p>
                        </div>
                        <div className="blog__header__search col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Blogs"/>
                                    <div className="input-group-btn">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="blog__featured">
                        <h2 className="blog__featured__title">Featured Posts</h2>
                        <div className="blog__featured__slides">
                           <div className="blog__featured__slide col-lg-3 col-md-3 col-sm-3 col-xs-3">
                               <img 
                                  src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg" 
                                  placeholder="blog banner">
                               </img>
                               <h4>Blog Title here Blog Title here Blog Title here Blog Title here Blog Title here</h4>
                               <div className="blog__continue">
                                   <button className="btn btn-default">Continue </button>
                               </div>
                           </div>
                           <div className="blog__featured__slide col-lg-3 col-md-3 col-sm-3 col-xs-3">
                               <img 
                                  src="https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                  placeholder="blog banner">
                               </img>
                               <h4>Blog Title here Blog Title here Blog Title here Blog Title here Blog Title here</h4>
                               <div className="blog__continue">
                                   <button className="btn btn-default">Continue </button>
                               </div>
                           </div>
                           <div className="blog__featured__slide col-lg-3 col-md-3 col-sm-3 col-xs-3">
                               <img 
                                  src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg" 
                                  placeholder="blog banner">
                               </img>
                               <h4>Blog Title here Blog Title here Blog Title here Blog Title here Blog Title here</h4>
                               <div className="blog__continue">
                                   <button className="btn btn-default">Continue </button>
                               </div>
                           </div>
                           <div className="blog__featured__slide col-lg-3 col-md-3 col-sm-3 col-xs-3">
                               <img 
                                  src="https://images.pexels.com/photos/4842544/pexels-photo-4842544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                  placeholder="blog banner">
                               </img>
                               <h4>Blog Title here  Blog Title here Blog Title here Blog Title here Blog Title here</h4>
                               <div className="blog__continue">
                                   <button className="btn btn-default">Continue </button>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>

                {
                    ShowSection ? 
                       <Blog_section section={Section} changeState={changeState} /> 
                    :
                        <div className="blog__body container-fluid" style={{marginTop:"20px"}}>
                            <Blog_row title="Trending" changeState={changeState}/>
                            <Blog_row title="Science" changeState={changeState}/>
                            <Blog_row title="Mathematics" changeState={changeState}/>
                            <Blog_row title="English" changeState={changeState}/>
                            <Blog_row title="Engineering" changeState={changeState}/>
                        </div>
                }
            </div>
        </>
    )
}

export default Blog
