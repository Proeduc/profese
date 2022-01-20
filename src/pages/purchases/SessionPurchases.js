import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Purchases.css'

function SessionPurchases() {
    // temp count for showing the design    
    const [purchaseCount, setpurchaseCount] = useState(1)
    return (
        <>
            <div className="session__purchases">
                <h3 className='session__purchases__title'>Live Session Purchases</h3>

                <div className='session__purchases__cards'>
                    {
                        purchaseCount == 0 ?
                            <div className='empty__purchase' align="center">
                                <h3><b>You haven't purchased anything yet..!!</b></h3>
                                <img className='img-responsive' src='https://image.freepik.com/free-vector/search-concept-yellow-folder-magnifier-icons-hand-drawn-cartoon-art-illustration_56104-891.jpg' alt="empty order image" />
                            </div>
                            :
                            // {/* repeat this card */}
                            <div className='session__purchases__card col-sm-3'>
                                <div className="card" style={{ width: "20rem" }}>
                                    <img width="100%" src="https://image.freepik.com/free-vector/meeting-concept-illustration_114360-727.jpg" className="card-img-top" alt="card background" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Live Session Topic</b></h5>
                                        <p className="card-text"><i className='fa fa-rupee'></i> 500 <span className="text-success">PAID</span></p>
                                        <p>Duration : 45 Minutes</p>
                                        <p>Date and time: 4-10-21 4:00 PM</p>
                                        <Link to="/reviews">Rate Us</Link><br />
                                        {/* insert the value of meeting link in href and keep it a tag dont replace with link tag*/}
                                        <a href="https://us04web.zoom.us/j/72475023184?pwd=hThnqHHV_N7DQOEm4Z4AsMUvMx36z5.1" className="btn btn-primary" target="_blank">Join Meeting</a> 
                                    </div>
                                </div>
                            </div>
                        // {/* signle card end */}
                    }
                </div>
            </div>
        </>
    );
}

export default SessionPurchases;
