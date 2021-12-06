import { CKEditor } from 'ckeditor4-react'
import React, { useState } from 'react'

function AddBlog() {
    // 
    const [blog_body, setblog_body] = useState("")
    const changedata = (e) =>{
        setblog_body(e.editor.getData()) 
    }

    return (
        <>
            <div className="add__blog container-fluid">
                <h2>Add New Blog</h2>
                <div className="add__blog__form container">
                    <form>
                        <div className="form-group"> 
                            <input 
                                className="form-control" 
                                type="text" 
                                name="blog_title" 
                                placeholder="Enter Blog title here."/>
                        </div>
                        <div className="form-group"> 
                            <input 
                                className="form-control" 
                                type="text" 
                                name="subject" 
                                placeholder="Enter Blog subject here."/>
                        </div>
                        <div className="form-group"> 
                            <input 
                                className="form-control" 
                                type="text" 
                                name="author" 
                                placeholder="Enter your name here."/>
                        </div>
                        <CKEditor
                            data={blog_body}
                            onChange={changedata}
                            initData={<h2>Enter blog body here...</h2>}
                        />

                        <input type="submit" value="Publish Blog" className="btn btn-primary"/>
                    </form>
               </div>
            </div>
        </>
    )
}

export default AddBlog
 