import React from 'react'

export default function User() {
    return (
        <>
            <div className="user container-fluid">
                <h2>Customer Details</h2>
                <div className="user__table container">
                    <table className="table table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Profession</th>
                                <th>University</th>
                                <th>DOB</th> 
                                <th>Profile image</th>
                            </tr>
                        </thead>

                        {/* loop over this tr tag for data values insertion */}
                        <tbody>
                            <tr> 
                                <td>udg567xdf</td>
                                <td>Ritika Dey</td>
                                <td>riti@gmail.com</td>
                                <td>+91 7777777777</td>
                                <td>Student</td>
                                <td>BTech</td>
                                <td>10-03-01</td>
                                <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                            </tr> 

                            <tr> 
                                <td>udg567xdf</td>
                                <td>Ritika Dey</td>
                                <td>riti@gmail.com</td>
                                <td>+91 7777777777</td>
                                <td>Student</td>
                                <td>BTech</td>
                                <td>10-03-01</td>
                                <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                            </tr> 

                            <tr> 
                                <td>udg567xdf</td>
                                <td>Ritika Dey</td>
                                <td>riti@gmail.com</td>
                                <td>+91 7777777777</td>
                                <td>Student</td>
                                <td>BTech</td>
                                <td>10-03-01</td>
                                <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                            </tr> 


                            <tr> 
                                <td>udg567xdf</td>
                                <td>Ritika Dey</td>
                                <td>riti@gmail.com</td>
                                <td>+91 7777777777</td>
                                <td>Student</td>
                                <td>BTech</td>
                                <td>10-03-01</td>
                                <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                            </tr> 

                            <tr> 
                                <td>udg567xdf</td>
                                <td>Ritika Dey</td>
                                <td>riti@gmail.com</td>
                                <td>+91 7777777777</td>
                                <td>Student</td>
                                <td>BTech</td>
                                <td>10-03-01</td>
                                <td><img className="img-responsive" src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w=" alt="assignment image" width="40px" /></td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
