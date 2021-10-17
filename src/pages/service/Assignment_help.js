import React from 'react'
import { Link } from 'react-router-dom'
import './Service.css'

function Assignment_help() {
    return (
        <>
           <div className="assignment__help container">
               <h3 className="text-primary assignment__help__title">Assignment Help</h3>
               <hr style={{borderTop:"2px dotted #153280"}}/>
               <p className="assignment__help__desc text-justify">
                   Profese provides best assignment help service by a team of expert tutors. We guarantee best quality,
                   plagiarism free, 24*7 assignment help service. We deliver our final work always on time.
               </p>
           </div>

           {/* assignment help container start */}
           <div className="assignment__help__content container">
               <h3 className="text-primary assignment__help__title">Assignment Help Services</h3>
               <hr style={{borderTop:"2px dotted #153280"}}/>

                {/* keep these three col-m-4 divs just apply loop inside them */}
                <div className="col-sm-4">
                    {/* just keep one assignment help type div and apply loop */}
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Engineering Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">Computer Science Engg help</li>
                            <li className="list-group-item">Electronics & Communicaions Engg help</li>
                            <li className="list-group-item">Electrical Engg help</li>
                            <li className="list-group-item">Mechanical Engg help</li>
                            <li className="list-group-item">Civil Engg help</li>
                            <li className="list-group-item">Engineering Labs help</li>
                        </div> 
                    </div>
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Nursing Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">Bichemistry assignment help</li>
                            <li className="list-group-item">Nursing Foundation assignment help</li>
                            <li className="list-group-item">Pharmacology assignment help</li> 
                        </div> 
                    </div>
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Programming Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">Java assignment help</li>
                            <li className="list-group-item">C++ assignment help</li> 
                            <li className="list-group-item">Python assignment help</li> 
                            <li className="list-group-item">C assignment help</li> 
                            <li className="list-group-item">C# assignment help</li> 
                            <li className="list-group-item">Golang assignment help</li> 
                            <li className="list-group-item">DSA assignment help</li> 
                            <li className="list-group-item">Dynamic programming assignment help</li> 
                            <li className="list-group-item">Android assignment help</li> 
                            <li className="list-group-item">Web developement assignment help</li> 
                        </div> 
                    </div>
                </div>

                <div className="col-sm-4">
                    {/* just keep one assignment help type div and apply loop */}
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">English Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">Grammar Assignment Help</li> 
                            <li className="list-group-item">Text book Assignment Help</li> 
                            <li className="list-group-item">Alphabet and phonics Assignment Help</li>  
                        </div> 
                    </div>
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Science Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">Chemistry assignment help</li> 
                            <li className="list-group-item">Physics assignment help</li> 
                            <li className="list-group-item">Biology assignment help</li> 
                        </div> 
                    </div>
                </div>

                <div className="col-sm-4">
                    {/* just keep one assignment help type div and apply loop */}
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Mathematics Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">Discrete mathematics assignment help</li> 
                            <li className="list-group-item">Geometry assignment help</li> 
                            <li className="list-group-item">Algebra assignment help</li> 
                            <li className="list-group-item">Calculus assignment help</li>  
                        </div> 
                    </div>
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">DBMS Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">SQL assignment help</li> 
                            <li className="list-group-item">NoSQL assignment help</li> 
                            <li className="list-group-item">Join assignment help</li>  
                        </div> 
                    </div>
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Miscellaneous Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">Arts assignment help</li> 
                            <li className="list-group-item">Business assignment help</li> 
                            <li className="list-group-item">Architecture assignment help</li> 
                            <li className="list-group-item">Project help</li> 
                            <li className="list-group-item">Law assignment help</li> 
                        </div> 
                    </div>
                </div>
           </div>
           {/* assignment help container end */}


           {/* assignment help form */}
           <div className="assignment__help__form container">
               <h3 className="assignment__help__title">Submit Your Assignment Query Here</h3>
               <hr style={{borderTop:"2px dotted white"}}/>

                <form className="container form__container col-sm-8">
                    <div className="form-group">
                        <label for="email">Email: </label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label for="title">Assignment Title: </label>
                        <input type="text" className="form-control" id="title" placeholder="Enter assignment title"/>
                    </div> 
                    <div className="form-group col-sm-6">
                        <label for="title">Assignment Type: </label>
                        <input type="text" className="form-control" id="title" placeholder="Enter assignment type"/>
                    </div> 
                    
                    <div className="form-group">
                        <label for="desc">Assignment Description</label>
                        <textarea type="text" rows="3" className="form-control" id="desc" placeholder="Enter assignment description"/>
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

export default Assignment_help
