import React from 'react'
import { Link } from 'react-router-dom'
import './Purchases.css'

function AssignmentPurchase() {
    return (
        <div className="assignment__purchases">
            <h3 className='assignment__purchases__title'>Assignment Help Purchases</h3>

            <div className='assignment__purchases__cards'>
                {/* repeat this card */}
                <div className='assignment__purchases__card col-sm-3'>
                    <div class="card" style={{width: "20rem"}}>
                        <img width="100%" src="https://image.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy_335657-356.jpg" class="card-img-top" alt="card background"/>
                        <div class="card-body">
                            <h5 class="card-title"><b>Assignment Help Topic</b></h5>
                            <p class="card-text"><i className='fa fa-rupee'></i> 500 <span className="text-success">PAID</span></p>
                            <Link to="/reviews">Rate Us</Link><br/>
                            <Link to="#" class="btn btn-primary">View Solution</Link>
                        </div>
                    </div>
                </div>
                {/* signle card end */}


                <div className='assignment__purchases__card col-sm-3'>
                    <div class="card" style={{width: "20rem"}}>
                        <img width="100%" src="https://image.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy_335657-356.jpg" class="card-img-top" alt="card background"/>
                        <div class="card-body">
                            <h5 class="card-title"><b>Assignment Help Topic</b></h5>
                            <p class="card-text"><i className='fa fa-rupee'></i> 500 <span className="text-success">PAID</span></p>
                            <Link to="/reviews">Rate Us</Link><br/>
                            <Link to="#" class="btn btn-primary">View Solution</Link>
                        </div>
                    </div>
                </div>


                <div className='assignment__purchases__card col-sm-3'>
                    <div class="card" style={{width: "20rem"}}>
                        <img width="100%" src="https://image.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy_335657-356.jpg" class="card-img-top" alt="card background"/>
                        <div class="card-body">
                            <h5 class="card-title"><b>Assignment Help Topic</b></h5>
                            <p class="card-text"><i className='fa fa-rupee'></i> 500 <span className="text-success">PAID</span></p>
                            <Link to="/reviews">Rate Us</Link><br/>
                            <Link to="#" class="btn btn-primary">View Solution</Link>
                        </div>
                    </div>
                </div>


                <div className='assignment__purchases__card col-sm-3'>
                    <div class="card" style={{width: "20rem"}}>
                        <img width="100%" src="https://image.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy_335657-356.jpg" class="card-img-top" alt="card background"/>
                        <div class="card-body">
                            <h5 class="card-title"><b>Assignment Help Topic</b></h5>
                            <p class="card-text"><i className='fa fa-rupee'></i> 500 <span className="text-success">PAID</span></p>
                            <Link to="/reviews">Rate Us</Link><br/>
                            <Link to="#" class="btn btn-primary">View Solution</Link>
                        </div>
                    </div>
                </div>

                <div className='assignment__purchases__card col-sm-3'>
                    <div class="card" style={{width: "20rem"}}>
                        <img width="100%" src="https://image.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy_335657-356.jpg" class="card-img-top" alt="card background"/>
                        <div class="card-body">
                            <h5 class="card-title"><b>Assignment Help Topic</b></h5>
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

export default AssignmentPurchase
