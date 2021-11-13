import React from 'react'
import './Service.css'

function Course_help() {
    return (
        <>
            <div className="Course__help container">
            {/* course help header */}
               <h3 className="text-primary Course__help__title">Course Help</h3>
               <hr style={{borderTop:"2px dotted #153280"}}/>
               <p className="Course__help__desc text-justify">
                   We you with a tutor expert in the subject you need help. This service is best for students who need help with a subject and conceptual 
                   issues, with a tutor to guide you through an entire course until you master the material.
               </p>
            </div>
            {/* course help header end */}

            {/* course help container */}
            <div className="course__help__container container">
                <h3 className="text-primary Course__help__title">Course Help Subjects</h3>
                <hr style={{borderTop:"2px dotted #153280"}}/> 
                <div className="row">
                    <div className="col-sm-4 list-group"><li className="list-group-item">DBMS</li></div>
                    <div className="col-sm-4 list-group"><li className="list-group-item">OS</li></div>
                    <div className="col-sm-4 list-group"><li className="list-group-item">Computer Network</li></div>
                </div>
                <div className="row">
                    <div className="col-sm-4 list-group"><li className="list-group-item">Discrete mathematics</li></div>
                    <div className="col-sm-4 list-group"><li className="list-group-item">Automata theory</li></div>
                    <div className="col-sm-4 list-group"><li className="list-group-item">Compiler design</li></div>
                </div>
                <div className="row">
                    <div className="col-sm-4 list-group"><li className="list-group-item">Data structures</li></div>
                    <div className="col-sm-4 list-group"><li className="list-group-item">Design and Analysis of Algorithms.</li></div>
                    <div className="col-sm-4 list-group"><li className="list-group-item">Computer Architecture and Organisation</li></div>
                </div>
            </div>
            {/* course help container end */}

            {/* Course help form */}
            <div className="Course__help__form container">
               <h3 className="Course__help__title">Submit Your Course Query Here</h3>
               <hr style={{borderTop:"2px dotted white"}}/>

                <form className="container form__container col-sm-8">
                    <div className="form-group">
                        <label for="email">Email: </label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label for="title">Course Title: </label>
                        <input type="text" className="form-control" id="title" placeholder="Enter Course title"/>
                    </div> 
                    <div className="form-group col-sm-6">
                        <label for="title">Course Type: </label>
                        <input type="text" className="form-control" id="title" placeholder="Enter Course type"/>
                    </div> 
                    
                    <div className="form-group">
                        <label for="desc">Course Description</label>
                        <textarea type="text" rows="3" className="form-control" id="desc" placeholder="Enter Course description"/>
                    </div> 
                    <div className="form-group">
                        <label for="deadline">Deadline</label>
                        <input type="date" className="form-control" id="deadline"/>
                    </div> 
                    <div className="form-group">
                        <input type="file"/>
                    </div>

                    <div className="form-group"> 
                        <button type="submit" className="btn btn-primary">Submit</button> 
                    </div>
                </form> 
            </div>
        </>
    )
}

export default Course_help
