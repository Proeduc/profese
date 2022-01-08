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
                   Profese provides best assignment help service by a team of expert tutors. Assignment help is ideal for students who need guidance through specific
                   assignments, like homework, projects, and labs. Out tutors will ensure you achieve the highest marks and give you a deeper 
                   understanding of the material with thorough explanations.
               </p>
           </div>

           {/* assignment help container start */}
           <div className="assignment__help__content container">
               <h3 className="text-primary assignment__help__title">Assignment Help Services</h3>
               <hr style={{borderTop:"2px dotted #153280"}}/>

                {/* keep these three col-m-4 divs just apply loop inside them */}
                <div className="col-sm-4">  
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Programming Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">Java assignment help</li>
                            <li className="list-group-item">C++ assignment help</li> 
                            <li className="list-group-item">Python assignment help</li> 
                            <li className="list-group-item">C assignment help</li>  
                            <li className="list-group-item">DSA assignment help</li>     
                        </div> 
                    </div>
                </div>

                <div className="col-sm-4">
                    {/* just keep one assignment help type div and apply loop */}
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Computer Science Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">DBMS Assignment Help</li> 
                            <li className="list-group-item">OS Assignment Help</li> 
                            <li className="list-group-item">Computer organisation Assignment Help</li>  
                        </div> 
                    </div> 
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Web Developement Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">HTML Assignment Help</li> 
                            <li className="list-group-item">CSS Assignment Help</li> 
                            <li className="list-group-item">Javascript Assignment Help</li>  
                        </div> 
                    </div> 
                </div>

                <div className="col-sm-4">
                    {/* just keep one assignment help type div and apply loop */}
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Computer Science Assignment Help</h4>
                        <div className="list-group">
                            <li className="list-group-item">Discrete mathematics assignment help</li> 
                            <li className="list-group-item">Design and Analysis of Algorithms assignment help</li> 
                            <li className="list-group-item">Automata theory assignment help</li> 
                            <li className="list-group-item">Compiler design assignment help</li>  
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

                <div className='services__tips col-sm-2'>
                    <h3><strong>Tips <i className="fa fa-lightbulb-o" aria-hidden="true"></i></strong></h3>
                    <hr style={{borderColor:"white"}}/>
                    <div className="panel ">
                       <div className="panel-body" style={{color:"#4d67ad", fontWeight:"bold"}}>Make sure your questions are concise</div>
                       <div className="panel-body" style={{color:"#4d67ad", fontWeight:"bold"}}>For multiple pages upload in PDF format.</div>
                       <div className="panel-body" style={{color:"#4d67ad", fontWeight:"bold"}}>Use formal language and double check spellings</div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Assignment_help
