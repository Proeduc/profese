import { Link } from 'react-router-dom'
import React from 'react'
import './Admin.css'

function ReqExam() {
    return (
        <>
        <div className="req__exam container-fluid">
            <h2>Requested Practice Exam</h2>
            <div className="req__exam__table container">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th> 
                            <th>Topic</th>
                            <th>Type</th>
                            <th>Date & Time</th>
                            <th>Image</th>
                            <th>Download</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    {/* loop over this tr tage for data values insertion */}
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>riti@gmail.com</td> 
                            <td>What is atom?</td>
                            <td>Science</td>
                            <td>10-02-21</td>
                            <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                            <td><Link to="#">Click here</Link></td>
                            <td>Done</td>
                        </tr>


                        <tr>
                            <td>01</td>
                            <td>riti@gmail.com</td> 
                            <td>What is atom?</td>
                            <td>Science</td>
                            <td>10-02-21</td>
                            <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                            <td><Link to="#">Click here</Link></td>
                            <td>Pending</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default ReqExam
