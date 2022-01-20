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
                            <th>Add Meeting Link</th>
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
                            {/* add that id logic here */}
                            <td><button className='btn btn-primary' data-toggle="modal" data-target="#solutionModal">Add</button></td>
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
                            {/* add that id logic here */}
                            <td><button className='btn btn-primary' data-toggle="modal" data-target="#solutionModal">Add</button></td>
                        </tr>

                    </tbody>
                </table>



                {/* <!-- Modal start --> */} 
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
                            <label htmlFor='meeetinglink'>Meeting Link</label>
                            <input
                              type='text'
                              name='meetinglink'
                              className='form-control'
                              placeholder='Add meeting link here'/>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='duration'>Duration</label>
                            <input
                              type='number'
                              name='duration'
                              className='form-control'
                              placeholder='Add duration' />
                        </div>

                        <button className="btn btn-primary">Post Solution</button>
                    </div> 
                  </div>
                </div>
              </div>

              {/* modal end */}
            </div>
        </div>
        </>
    )
}

export default ReqSessions
 