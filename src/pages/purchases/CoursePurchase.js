import React from 'react'
import { Link } from 'react-router-dom'
import './Purchases.css'

function CoursePurchase() {
    return (
        <div className="course__purchases">
            <h3 className='course__purchases__title'>Course Help Purchases</h3>

            <div className='course__purchases__cards'>
                {/* repeat this card */}
                <div className='course__purchases__card col-sm-3'>
                    <div class="card" style={{width: "20rem"}}>
                        <img width="100%" src="https://image.freepik.com/free-vector/writing-letter-concept-illustration_114360-4442.jpg" class="card-img-top" alt="card background"/>
                        <div class="card-body">
                            <h5 class="card-title"><b>Course Help Topic</b></h5>
                            <p class="card-text"><i className='fa fa-rupee'></i> 500 <span className="text-success">PAID</span></p>
                            <Link to="/reviews">Rate Us</Link><br/>
                            <Link to="#" class="btn btn-primary">View Solution</Link>
                        </div>
                    </div>
                </div>
                {/* signle card end */}


                <div className='course__purchases__card col-sm-3'>
                    <div class="card" style={{width: "20rem"}}>
                        <img width="100%" src="https://image.freepik.com/free-vector/writing-letter-concept-illustration_114360-4442.jpg" class="card-img-top" alt="card background"/>
                        <div class="card-body">
                            <h5 class="card-title"><b>Course Help Topic</b></h5>
                            <p class="card-text"><i className='fa fa-rupee'></i> 500 <span className="text-success">PAID</span></p>
                            <Link to="/reviews">Rate Us</Link><br/>
                            <Link to="#" class="btn btn-primary">View Solution</Link>
                        </div>
                    </div>
                </div>


                <div className='course__purchases__card col-sm-3'>
                    <div class="card" style={{width: "20rem"}}>
                        <img width="100%" src="https://image.freepik.com/free-vector/writing-letter-concept-illustration_114360-4442.jpg" class="card-img-top" alt="card background"/>
                        <div class="card-body">
                            <h5 class="card-title"><b>Course Help Topic</b></h5>
                            <p class="card-text"><i className='fa fa-rupee'></i> 500 <span className="text-success">PAID</span></p>
                            <Link to="/reviews">Rate Us</Link><br/>
                            <Link to="#" class="btn btn-primary">View Solution</Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default CoursePurchase
