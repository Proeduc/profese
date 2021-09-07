import React from 'react'
import {NavLink} from 'react-router-dom'
import './Discussion.css'

function Ask_a_ques() {
    return (
        <>
           <div className="container-fluid">
            <div className="discussion_header container-fluid">
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <NavLink to="/discussion" className="discussion_header_title">Discussion Board</NavLink >
                <NavLink to="/ask_a_ques" className="discussion_header_title">Ask a question</NavLink >
              </div>
              
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                 <div className="discussion_tips">
                   <h2>Tips</h2>
                   <ul>
                     <li>Make sure your question is concise.</li>
                     <li>Double check grammar and spelling.</li>
                     <li>Upload documents, images if necessary.</li>
                   </ul>
                 </div>
              </div>
            </div>

             <div className="ques_input">
               <div className="user_profile row"> 
                  <img
                      className="img-responsive img-circle"
                      alt=""
                      src="https://picsum.photos/id/237/55/55"
                  ></img> 
                  <h3>&nbsp;<b>User Name</b> posting in &nbsp;
                  <span class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Subject&nbsp;
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                      <li>MATHS</li>
                      <li>SCIENCE</li>
                      <li>ENGINEERING</li>
                    </ul>
                  </span>
                  </h3>  
               </div>

               <div className="inputs container">
                 <form>
                   <input
                     type="text"
                     placeholder="Subject"
                     className="form-control"
                     />
                     
                   <textarea 
                     class="form-control" 
                     rows="6"
                     placeholder="Ask away...."></textarea>

                     {/* file upload portion */}

                    <button className="btn btn-primary" style={{float:"right", marginTop:"20px"}}>Submit</button>
                 </form>
               </div>
              </div>
           </div>
        </>
    )
}

export default Ask_a_ques
