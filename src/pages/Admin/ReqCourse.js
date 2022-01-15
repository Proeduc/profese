import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'

function ReqCourse() {
    return ( 
        <>
            <div className="req__course container-fluid">
                <h2>Requested Course Helps</h2>
                <div className="req__course__table container">
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
                                <th>Solution</th>
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
                                <td>Done</td>
                                <td><button className='btn btn-primary' data-toggle="modal" data-target="#solutionModal">Add Solution</button></td>
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
                                <td>Pending</td>
                                <td><button className='btn btn-primary' data-toggle="modal" data-target="#solutionModal">Add Solution</button></td>
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
                                <td>Pending</td>
                                <td><button className='btn btn-primary' data-toggle="modal" data-target="#solutionModal">Add Solution</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            {/* <!-- Modal --> */} 
            <div id="solutionModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  {/* <!-- Modal content--> */}
                  <div className="modal-content">

                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Add solution for this assignment</h4>
                    </div>

                    <div className="modal-body">
                        <div className="form-group">
                          <label htmlFor="name">Price:</label>
                          <input 
                              type="number"
                              name="price"   
                              className="form-control" 
                              placeholder="Add total price for this assignment" required/>
                        </div>  

                        <div className="form-group">
                          <label htmlFor="remarks">Remarks</label>
                          <input 
                              type="text" 
                              name="institution"  
                              className="form-control" 
                              placeholder="Add remarks if any, OPTIONAL"/>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='solutionfile'>Solution File(PDF):</label>
                            <input
                              type="file"
                              name='solutionfile'
                              className='form-control' required/>
                        </div>


                        <button className="btn btn-primary">Post Solution</button>
                    </div> 
                  </div>
                </div>
              </div>
            
        </>
    )
}

export default ReqCourse
