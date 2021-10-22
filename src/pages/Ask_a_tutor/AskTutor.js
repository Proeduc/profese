import React from 'react'
import './AskTutor.css'
import steps from './steps.png'

export default function AskTutor() {
    return (
        <>
           <div className="asktutor__container container-fluid">
               <div className="asktutor__header container-fluid">
                   <div className="asktutor__header__content container">
                       <h1 className="asktutor__header__title">Get solution of your queries by Expert tutors.</h1>
                       <h4>Stay ahead in your circle by clearing your doubts with subject experts.</h4>
                       <div className="input-group">
                            <input type="search" className="form-control" placeholder="Search Homework Solution Here"/>
                            <div className="input-group-btn">
                                <button className="btn btn-primary" type="submit">
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                        </div>
                   </div>
               </div>

               <div className="asktutor__steps container">
                   <h1 className="asktutor__steps__title">Get solutions to your questions Now...!!!</h1>
                   <img className="img-responsive img-thumbnail" src={steps} alt="..."></img>
               </div>

               <div className="asktutor__form container">
                    {/* add aunthentication here first login or signup then only fill the form */}
                    <form className="form__container"> 
                        <div className="form-group">
                            <label for="query">Query: </label>
                            <input type="text" className="form-control" id="query" placeholder="Enter your Query"/>
                        </div>  
                        <div className="form-group">
                            <input type="file"/>
                        </div>
                        <div className="form-group"> 
                            <button type="submit" className="btn btn-default">Submit</button> 
                        </div>
                    </form>
               </div>
           </div>
        </>
    )
}
