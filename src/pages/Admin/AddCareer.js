import React from 'react'

function AddCareer() {
    return (
        <>
           <div className="add__career container-fluid">
               <h2>Add Career</h2>
               <div className="add__career__form container">
                    <form>
                        <div className="form-group"> 
                            <input 
                                className="form-control" 
                                type="text" 
                                name="job_title" 
                                placeholder="Enter Job title here. e.g: Developer, tester, DB administrator"/>
                        </div>
                        <div className="form-group"> 
                            <input 
                                className="form-control" 
                                type="text" 
                                name="location" 
                                placeholder="Enter Job location here."/>
                        </div>
                        <div className="form-group"> 
                            <input 
                                className="form-control" 
                                type="text" 
                                name="experience" 
                                placeholder="Enter required experience."/>
                        </div>
                        <div className="form-group"> 
                            <input 
                                className="form-control" 
                                type="text" 
                                name="type" 
                                placeholder="Enter job type here. e.g: Fulltime, parttime, internship."/>
                        </div>
                        <div className="form-group"> 
                            <textarea
                                className="form-control" 
                                type="text" 
                                name="Desc" 
                                rows="4"
                                placeholder="Enter Job description here.">
                            </textarea>
                        </div>

                        <input type="submit" value="Add" className="btn btn-primary"/>
                    </form>
               </div>
           </div>
        </>
    )
}

export default AddCareer
 