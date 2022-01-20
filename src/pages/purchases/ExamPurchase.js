import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ExamPurchase() {
    // temp count for showing the design
    const [purchaseCount, setpurchaseCount] = useState(1)
    return ( 
        <div className="exam__purchases">
            <h3 className='exam__purchases__title'>Practice Exam Purchases</h3>

            <div className='exam__purchases__cards'>
                {
                    purchaseCount == 0 ? 
                     <div className='empty__purchase' align="center">
                         <h3><b>You haven't purchased anything yet..!!</b></h3>
                         <img src='https://image.freepik.com/free-vector/search-concept-yellow-folder-magnifier-icons-hand-drawn-cartoon-art-illustration_56104-891.jpg' alt="empty order image"/>
                     </div>
                    :
                    // {/* repeat this card */}
                    <div className='exam__purchases__card col-sm-3'>
                        <div className="card" style={{width: "20rem"}}>
                            <img width="100%" src="https://image.freepik.com/free-vector/giant-check-list_23-2148087771.jpg" className="card-img-top" alt="card background"/>
                            <div className="card-body">
                                <h5 className="card-title"><b>Practice Exam Topic</b></h5>
                                <p className="card-text"><i className='fa fa-rupee'></i> 500 <span className="text-success">PAID</span></p>
                                <Link to="/reviews">Rate Us</Link><br/>
                                <Link to="#" className="btn btn-primary" style={{marginBottom:"10px"}}>View Questions</Link> 
                                <Link to="#" className="btn btn-primary">View Solutions</Link>
                            </div> 
                        </div>
                    </div>
                    // {/* signle card end */}
                }
            </div>
        </div>
    )
}

export default ExamPurchase
