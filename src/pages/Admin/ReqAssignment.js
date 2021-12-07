import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import './Admin.css'

function ReqAssignment() {
    const [Status, setStatus] = useState('Pending')

    const ChangeStatus = () =>{
        if(window.confirm("Do you want to change status ?")){
            setStatus('Done')
        }else{
            setStatus('Pending')
        }
    }

    return (
        <>
            <div className="req__assignment container-fluid">
                <h2>Requested Assignment Helps</h2>
                <div className="req__assignment__table container">
                    <table className="table table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Deadline</th>
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
                                <td>Atomic theory</td>
                                <td>What is atom?</td>
                                <td>Science</td>
                                <td>10-02-21</td>
                                <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                                <td><Link to="#">Click here</Link></td>
                                {/* i done this with states for exmple but in main code you have to change the status in database so apply same logic but with db value and remove this state value */}
                                {/* and do the same for course help practice exam and live session as well.. */}
                                <td>{Status} {Status === 'Pending' ? <i className="fa fa-edit" onClick={ChangeStatus}></i> : ''}</td>
                            </tr>


                            <tr>
                                <td>01</td>
                                <td>riti@gmail.com</td>
                                <td>Atomic theory</td>
                                <td>What is atom?</td>
                                <td>Science</td>
                                <td>10-02-21</td>
                                <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                                <td><Link to="#">Click here</Link></td>
                                <td>{Status} {Status === 'Pending' ? <i className="fa fa-edit" onClick={ChangeStatus}></i> : ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ReqAssignment
