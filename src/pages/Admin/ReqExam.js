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
                            <th>Add Question</th>
                            <th>Add Answer</th>
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
                            {/* add that id logic here */}
                            <td><button className='btn btn-primary' data-toggle="modal" data-target="#questionModal">Add Question</button></td> 
                            <td><button className='btn btn-primary' data-toggle="modal" data-target="#answerModal">Add Answer</button></td>
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
                            {/* add that id logic here */}
                            <td><button className='btn btn-primary' data-toggle="modal" data-target="#questionModal">Add Question</button></td>
                            <td><button className='btn btn-primary' data-toggle="modal" data-target="#answerModal">Add Answer</button></td>
                        </tr>

                    </tbody>
                </table>


                {/* <!-- Modal for ques start --> */} 
                <div id="questionModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  {/* <!-- Modal content--> */}
                  <div className="modal-content">

                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Add Question for Practice exam</h4>
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
                            <label htmlFor='solutionfile'>Question File(PDF):</label>
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
              {/* modal for question end */}



              {/* <!-- Modal for answer end --> */} 
              <div id="answerModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  {/* <!-- Modal content--> */}
                  <div className="modal-content">

                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Add solution for this Practice exam</h4>
                    </div>

                    <div className="modal-body">
                        <div className='form-group'>
                            <label htmlFor='solutionfile'>Answer File(PDF):</label>
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

              {/* modal for answer end */}
            </div>
        </div>
        </>
    )
}

export default ReqExam
