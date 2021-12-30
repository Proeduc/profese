import React, { useState } from 'react' 
import './Blog.css'
import Blog_row from './Blog_row'
import Blog_section from './Blog_section'
import Blog_single from './Blog_single'

function Blog() {
    const [ShowSection, setShowSection] = useState(false)
    const [Section, setSection] = useState("")
    const [ShowBlog, setShowBlog] = useState(false)
    const [BlogTitle, setBlogTitle] = useState("")

    const changeState = (section) => {
        setShowSection(!ShowSection)
        setSection(section)
    }

    const ShowSingleBlog = (Blog_title) => {
        setShowBlog(!ShowBlog)
        setBlogTitle(Blog_title)
    }

    return (
        <>
            {
                ShowBlog ? <Blog_single back = {ShowSingleBlog} title = {BlogTitle} />
                :
                <div className="blog container-fluid">
                    <div className="blog__header container-fluid">
                        <div className="row">
                            <div className="blog__header__brand col-sm-8">
                                <p>Blog</p>
                            </div>
                            <div className="blog__header__search col-sm-4">
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
                            <div className="blog__featured__slide col-sm-3">
                                <img 
                                    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg" 
                                    placeholder="blog banner">
                                </img>
                                <h4 className='featured__post__title'>What is Atomic theory?</h4>
                                <div className="blog__continue">
                                    <button className="btn btn-default" onClick={() => ShowSingleBlog("Blog title from backend here")}>Continue </button>
                                </div>
                            </div>
                            <div className="blog__featured__slide col-sm-3">
                                <img 
                                    src="https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                    placeholder="blog banner">
                                </img>
                                <h4 className='featured__post__title'>What is mass communication?</h4>
                                <div className="blog__continue">
                                    <button className="btn btn-default" onClick={() => ShowSingleBlog("Blog title from backend here")}>Continue </button>
                                </div>
                            </div>
                            <div className="blog__featured__slide col-sm-3">
                                <img 
                                    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg" 
                                    placeholder="blog banner">
                                </img>
                                <h4 className='featured__post__title'>What is mass communication?</h4>
                                <div className="blog__continue">
                                    <button className="btn btn-default" onClick={() => ShowSingleBlog("Blog title from backend here")}>Continue </button>
                                </div>
                            </div>
                            <div className="blog__featured__slide col-sm-3">
                                <img 
                                    src="https://images.pexels.com/photos/4842544/pexels-photo-4842544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                    placeholder="blog banner">
                                </img>
                                <h4 className='featured__post__title'>Blog Title here</h4>
                                <div className="blog__continue">
                                    <button className="btn btn-default" onClick={() => ShowSingleBlog("Blog title from backend here")}>Continue </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    {
                        ShowSection ? 
                        <Blog_section section={Section} changeState={changeState} ShowSingleBlog={ShowSingleBlog} /> 
                        :
                            <div className="blog__body container-fluid" style={{marginTop:"20px"}}>
                                <Blog_row title="Trending" changeState={changeState} ShowSingleBlog={ShowSingleBlog}/>
                                <Blog_row title="Science" changeState={changeState} ShowSingleBlog={ShowSingleBlog}/>
                                <Blog_row title="Mathematics" changeState={changeState} ShowSingleBlog={ShowSingleBlog}/>
                                <Blog_row title="English" changeState={changeState} ShowSingleBlog={ShowSingleBlog}/>
                                <Blog_row title="Engineering" changeState={changeState} ShowSingleBlog={ShowSingleBlog}/>
                            </div>
                    }
                </div>
        }
        </>
    )
}

export default Blog
