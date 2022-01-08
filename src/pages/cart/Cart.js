import React, { useState } from 'react'
import AssignmentList from './AssignmentList'
import CourseList from './CourseList'
import SessionList from './SessionList'
import ExamList from './ExamList'
import './Cart.css'

function Cart() {
    const [Assignment, setAssignmentList] = useState(false)
    const [Course, setCourseList] = useState(false)
    const [Session, setSessionList] = useState(false)
    const [Exam, setExamList] = useState(false)

    const showList = (str) =>{
        if(str === 'assignment help'){
            setAssignmentList(true)
            setCourseList(false)
            setExamList(false)
            setSessionList(false)
        }
        else if(str === 'course help'){
            setAssignmentList(false)
            setCourseList(true)
            setExamList(false)
            setSessionList(false)
        }
        else if(str === 'live sessions'){
            setAssignmentList(false)
            setCourseList(false)
            setExamList(false)
            setSessionList(true)
        }
        else{
            setAssignmentList(false)
            setCourseList(false)
            setExamList(true)
            setSessionList(false)
        }
    }
    return (
        <div className='container-fluid '>
            <div className='cart__header container-fluid'>
                <h3 className='cart__header__pill btn btn-primary'>My Cart</h3>
            </div>

            <div className='cart__items col-sm-9'>
                <div className='cart__item__contain'>
                    <div className='cart__item__header'>
                        <button className='btn btn1' onClick={() => showList('assignment help')}>Assignment Help</button>
                        <button className='btn btn2' onClick={() => showList('course help')}>Course Help</button>
                        <button className='btn btn3' onClick={() => showList('live sessions')}>Live Session</button>
                        <button className='btn btn4' onClick={() => showList('practice exam')}>Practice Exam</button>
                    </div>
                    
                    <hr style={{width:"100%"}}/>
                    <div className="cart__item__list">
                        {
                            Course ?
                                <CourseList />
                                :
                                Session ? 
                                    <SessionList />
                                    :
                                    Exam ?
                                        <ExamList />
                                        :
                                        <AssignmentList />
                        }
                    </div>

                </div>
            </div>

            <div className='cart__summary col-sm-3'>
                <div className='cart__summary__contains'>

                    <h3 className='cart__summary__title'>PRICE DETAILS</h3> 
                    
                    <table className='table table-responsive'>
                        <tbody>
                            <tr>
                                <td>Total items</td>
                                {/*value from backend */}
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Total Price</td>
                                {/*value from backend */}
                                <td><i className='fa fa-rupee'></i>1000</td>
                            </tr> 
                            <tr>
                                <td>Tax: </td>
                                {/* 18% of total amount */}
                                <td>+ <i className='fa fa-rupee'></i>100</td>
                            </tr>
                            <tr>
                                <td>Discount: </td>
                                {/* Not decided yet */}
                                <td>- <i className='fa fa-rupee'></i>10</td>
                            </tr>
                            <tr>
                                <td><b>GRAND TOTAL</b></td>
                                {/*value from backend */}
                                <td><b><i className='fa fa-rupee'></i>1090</b></td>
                            </tr> 
                        </tbody>
                    </table>
                        
                    {/*value from backend */}
                    <button className='btn btn-block btn-primary'>Pay <i className='fa fa-rupee'></i>1090</button> 
                </div>
            </div>
        </div>
    )
}

export default Cart
 