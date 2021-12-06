import React from 'react'
import './Admin.css'

function ReqSessions() {
    return (
        <>
        <div className="req__session container-fluid">
            <h2>Requested Live Sessions</h2>
            <div className="req__session__table container">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Description</th> 
                            <th>Date & Time</th>
                            <th>Image</th>
                            <th>Duration</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    {/* loop over this tr tage for data values insertion */}
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>riti@gmail.com</td>
                            <td>Biology</td>
                            <td>What is atom?</td> 
                            <td>10-02-21 05:40PM</td>
                            <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                            <td>45 Minutes</td>
                            <td>Done</td>
                        </tr>


                        <tr>
                            <td>01</td>
                            <td>riti@gmail.com</td>
                            <td>Biology</td>
                            <td>What is atom?</td> 
                            <td>10-02-21 02:10AM</td>
                            <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                            <td>30 Minutes</td>
                            <td>Pending</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default ReqSessions
 