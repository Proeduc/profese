import React, { useState } from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import ReqAssignment from './ReqAssignment'
import ReqCourse from './ReqCourse'
import ReqExam from './ReqExam'
import ReqSessions from './ReqSessions'
import AddBlog from './AddBlog'
import AddCareer from './AddCareer' 
import Queries from './Queries'
import TutorReq from './TutorReq'
import TutorApproved from './TutorApproved'
import Dashboard from './Dashboard'
import { DashboardOutlined, AssignmentIndOutlined, SubjectOutlined, VideoCallOutlined, BookOutlined, WorkOutline, QueryBuilderOutlined, AssignmentTurnedInOutlined, GroupAddOutlined, GroupOutlined} from '@material-ui/icons' 

function Admin() {
    const [Dashb, setDashboard] = useState(false)
    const [Assignment, setAssignment] = useState(false)
    const [Course, setCourse] = useState(false)
    const [Practice, setPractice] = useState(false)
    const [Sessions, setSessions] = useState(false)
    const [Blog, setAddBlog] = useState(false)
    const [Career, setAddCareer] = useState(false)
    const [Querie, setQueries] = useState(false) 
    const [Trequest, setTrequest] = useState(false)
    const [TApproved, setTApproved] = useState(false)


    const changePage = (str) => {
        if(str === "Dashboard"){
            setDashboard(true)
            setAssignment(false)
            setCourse(false)
            setPractice(false)
            setSessions(false)
            setAddBlog(false)
            setAddCareer(false)
            setQueries(false)
            setTrequest(false)
            setTApproved(false)
        }
        else if(str === "Assignments"){
            setDashboard(false)
            setAssignment(true)
            setCourse(false)
            setPractice(false)
            setSessions(false)
            setAddBlog(false)
            setAddCareer(false)
            setQueries(false)
            setTrequest(false)
            setTApproved(false)
        }
        else if(str === "Course Help"){
            setDashboard(false)
            setAssignment(false)
            setCourse(true)
            setPractice(true)
            setSessions(false)
            setAddBlog(false)
            setAddCareer(false)
            setQueries(false)
            setTrequest(false)
            setTApproved(false)
        }
        else if(str === "Live Sessions"){
            setDashboard(false)
            setAssignment(false)
            setCourse(false)
            setPractice(false)
            setSessions(true)
            setAddBlog(false)
            setAddCareer(false)
            setQueries(false)
            setTrequest(false)
            setTApproved(false)
        }
        else if(str === "Add Blog"){
            setDashboard(false)
            setAssignment(false)
            setCourse(false)
            setPractice(false)
            setSessions(false)
            setAddBlog(true)
            setAddCareer(false)
            setQueries(false)
            setTrequest(false)
            setTApproved(false)
        }
        else if(str === "Add Career"){
            setDashboard(false)
            setAssignment(false)
            setCourse(false)
            setPractice(false)
            setSessions(false)
            setAddBlog(false)
            setAddCareer(true)
            setQueries(false)
            setTrequest(false)
            setTApproved(false)
        }
        else if(str === "Queries"){
            setDashboard(false)
            setAssignment(false)
            setCourse(false)
            setPractice(false)
            setSessions(false)
            setAddBlog(false)
            setAddCareer(false)
            setQueries(true)
            setTrequest(false)
            setTApproved(false)
        } 
        else if(str === "Tutor Requests"){
            setDashboard(false)
            setAssignment(false)
            setCourse(false)
            setPractice(false)
            setSessions(false)
            setAddBlog(false)
            setAddCareer(false)
            setQueries(false)
            setTrequest(true)
            setTApproved(false)
        }
        else if(str === "Approved Tutors"){
            setDashboard(false)
            setAssignment(false)
            setCourse(false)
            setPractice(false)
            setSessions(false)
            setAddBlog(false)
            setAddCareer(false)
            setQueries(false)
            setTrequest(false)
            setTApproved(true)
        }
        else if(str === "Practice Exam"){
            setDashboard(false)
            setAssignment(false)
            setCourse(false)
            setPractice(true)
            setSessions(false)
            setAddBlog(false)
            setAddCareer(false)
            setQueries(false)
            setTrequest(false)
            setTApproved(false)
        }
    }
    return (
        <>
            <div className="admin__panel">
                <div className="admin__panel__sidebar col-sm-2">
                    <div className="list-group">
                        {/* add user, icons */}
                        <Link to="#" onClick={() => changePage('Dashboard')} className="list-group-item sidebar_item"><DashboardOutlined /> Dashboard</Link>
                        <Link to="#" onClick={() => changePage('Assignments')} className="list-group-item sidebar_item"><AssignmentIndOutlined/> Requested Assignments</Link>
                        <Link to="#" onClick={() => changePage('Course Help')} className="list-group-item sidebar_item"><SubjectOutlined /> Requested Course Help</Link>
                        <Link to="#" onClick={() => changePage('Practice Exam')} className="list-group-item sidebar_item"><AssignmentTurnedInOutlined/> Requested Exams</Link>
                        <Link to="#" onClick={() => changePage('Live Sessions')} className="list-group-item sidebar_item"><VideoCallOutlined /> Requested Live Session</Link>
                        <Link to="#" onClick={() => changePage('Add Blog')} className="list-group-item sidebar_item"><BookOutlined/> Add Blog</Link>
                        <Link to="#" onClick={() => changePage('Add Career')} className="list-group-item sidebar_item"><WorkOutline/> Add Career</Link>
                        <Link to="#" onClick={() => changePage('Queries')} className="list-group-item sidebar_item"><QueryBuilderOutlined /> Queries</Link> 
                        <Link to="#" onClick={() => changePage('Tutor Requests')} className="list-group-item sidebar_item"><GroupAddOutlined/> Tutor Requests</Link>
                        <Link to="#" onClick={() => changePage('Approved Tutors')} className="list-group-item sidebar_item"><GroupOutlined/> Approved Tutors</Link> 
                    </div> 
                </div>
                <div className="admin__panel__content col-sm-10">
                    {
                        Assignment ? 
                            <ReqAssignment /> 
                            : 
                            (Course ? 
                                <ReqCourse /> 
                                : 
                                (Practice ? 
                                    <ReqExam /> 
                                    : 
                                    (Sessions ? 
                                        <ReqSessions /> 
                                        :
                                        (Blog ?
                                            <AddBlog />
                                            :
                                            (Career ?
                                                <AddCareer/>
                                                :  
                                                    (Querie ? 
                                                        <Queries />
                                                        :
                                                        (Trequest ?
                                                            <TutorReq /> :
                                                            (TApproved ?
                                                                <TutorApproved />
                                                                :
                                                                <Dashboard />
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            
                    }
                </div>
            </div>
        </>
    )
}

export default Admin
