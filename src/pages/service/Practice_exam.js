import React from 'react'
import "./Service.css"

function Practice_exam() {
    return (
        <>
            {/* practice exam header */}
            <div className="practice__exam container">
               <h3 className="text-primary practice__exam__title">Practice Exam</h3>
               <hr style={{borderTop:"2px dotted #153280"}}/>
               <p className="practice__exam__desc text-justify">
                 Practice Exams are best for students who are confidents enough with course material to start
                 trying problems on theri own but may need some guidance through challenging problems or test-taking strategies.
                 Our tutors will give you the practice and guidance you need to ace your next exam.  
               </p>
            </div>
            {/* practice exam header end */}


            {/* Practice Exam container start */}
           <div className="practice__exam__content container">
               <h3 className="text-primary practice__exam__title">Practice Exam Services</h3>
               <hr style={{borderTop:"2px dotted #153280"}}/>

                {/* keep these three col-m-4 divs just apply loop inside them */}
                <div className="col-sm-4"> 
                    <div className="practice__exam__type">
                        <h4 className="practice__exam__type__title">Programming Practice Exam</h4>
                        <div className="list-group">
                            <li className="list-group-item">Java Practice Exam</li>
                            <li className="list-group-item">C++ Practice Exam</li> 
                            <li className="list-group-item">Python Practice Exam</li> 
                            <li className="list-group-item">C Practice Exam</li>  
                        </div> 
                    </div>
                </div>

                <div className="col-sm-4"> 
                    <div className="practice__exam__type">
                        <h4 className="practice__exam__type__title">DBMS Practice Exam</h4>
                        <div className="list-group">
                            <li className="list-group-item">SQL Practice Exam</li> 
                            <li className="list-group-item">NoSQL Practice Exam</li> 
                            <li className="list-group-item">Join Practice Exam</li>  
                        </div> 
                    </div>

                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Computer Science Practice Exam</h4>
                        <div className="list-group">
                            <li className="list-group-item">Computer Network Practice Exam</li> 
                            <li className="list-group-item">OS Practice Exam</li> 
                            <li className="list-group-item">Computer organisation Practice Exam</li>  
                        </div> 
                    </div> 
                </div>

                <div className="col-sm-4"> 
                   <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Web Developement Practice Exam</h4>
                        <div className="list-group">
                            <li className="list-group-item">HTML Practice Exam</li> 
                            <li className="list-group-item">CSS Practice Exam</li> 
                            <li className="list-group-item">Javascript Practice Exam</li>  
                        </div> 
                    </div>
                    <div className="assignment__help__type">
                        <h4 className="assignment__help__type__title">Computer Science Practice Exam</h4>
                        <div className="list-group">
                            <li className="list-group-item">Discrete mathematics Practice Exam</li> 
                            <li className="list-group-item">Design and Analysis of Algorithms Practice Exam</li> 
                            <li className="list-group-item">Automata theory Practice Exam</li> 
                            <li className="list-group-item">Compiler design Practice Exam</li>  
                        </div> 
                    </div> 
                </div>
           </div>
           {/* Practice Exam container end */}


           {/* Practice Exam form */}
           <div className="practice__exam__form container">
               <h3 className="practice__exam__title">Schedule your Practice Exam</h3>
               <hr style={{borderTop:"2px dotted white"}}/>

                <form className="container form__container col-sm-8">
                    <div className="form-group">
                        <label for="email">Email: </label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                    </div> 

                    <div className="form-group">
                        <label for="title">Practice Exam Subject: </label>
                        <input type="text" className="form-control" id="title" placeholder="Enter Practice Exam subject"/>
                    </div>  

                    <div className="form-group">
                        <label for="topic">Practice Exam Topic:</label>
                        <input type="text" className="form-control" id="topic" placeholder="Enter practice exam topic" />
                    </div>

                    <div className="form-group">
                        <label for="date">Date and time:</label>
                        <input type="datetime-local" className="form-control" id="date"/>
                    </div> 

                    <div className="form-group">
                        <label for="file">Reference document</label>
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

export default Practice_exam
