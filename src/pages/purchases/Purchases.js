import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import AssignmentPurchase from './AssignmentPurchase'
import CoursePurchase from './CoursePurchase'
import ExamPurchase from './ExamPurchase'
import './Purchases.css'
import SessionPurchases from './SessionPurchases'

function Purchases() {
    const [assignment, setassignment] = useState(false)
    const [course, setcourse] = useState(false)
    const [exam, setexam] = useState(false)
    const [session, setsession] = useState(false)

    const changeFilter = (filter) => {
         if(filter === 'Assignment Help'){
             setassignment(true)
             setcourse(false)
             setexam(false)
             setsession(false)
         }
         else if(filter === 'Course help'){
            setassignment(false)
            setcourse(true)
            setexam(false)
            setsession(false)
         }
         else if(filter === "Exam prep"){
            setassignment(false)
            setcourse(false)
            setexam(true)
            setsession(false)
         }
         else{
             setassignment(false)
             setcourse(false)
             setexam(false)
             setsession(true)
         }
    }

    return (
        <>
           <div className='container-fluid'>
                <div className='purchases__header container-fluid'>
                    <h3 className='purchases__header__pill btn btn-primary'>MY PURCHASES</h3>
                </div>


                <div className='purchases__contain'>
                    <div className='purchases__filter col-sm-2'>
                    <h4 className="text-primary"><strong>Filters</strong></h4>
                        <div className="list-group">
                            <Link to="#" onClick={() => changeFilter('Assignment Help')} className="list-group-item">Assignment help</Link> 
                            <Link to="#" onClick={() => changeFilter('Course help')} className="list-group-item">Course help</Link> 
                            <Link to="#" onClick={() => changeFilter('Exam prep')} className="list-group-item">Exam prep</Link>
                            <Link to="#" onClick={() => changeFilter('Live session')} className="list-group-item">Live session</Link>
                        </div> 
                    </div>

                    <div className='purchases__cards col-sm-10'>
                        <div className='purchases__search'>
                            <div className="input-group">
                                <input type="search" className="form-control" placeholder="Search Your Purchase Here"/>
                                <div className="input-group-btn">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>


                        {
                            course ? <CoursePurchase /> : exam ? <ExamPurchase /> : session ? <SessionPurchases/> : <AssignmentPurchase />
                        }
                    </div>
                </div>
           </div>
        </>
    )
}

export default Purchases
