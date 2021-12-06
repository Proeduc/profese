import React from 'react'
import Chart from 'react-google-charts'
import './Admin.css'

function Dashboard() {
    return (
        <>
            <div className="dashboard__container container-fluid">
                <div className="dashboard__header container">
                    <h1>Hello Admin..!!</h1>
                    <p>Welcome to Profese admin dashboard</p>
                </div>

                <div className="dashboard__contents container">
                    {/* number of requests */}
                    <div className="dashboard__req">
                        <div className="col-sm-3 req__cards">
                            <div className="req__cards__content" align="center">
                                <h4>Requested Assignments</h4>
                                {/* put value from backend here */}
                                <p>11045</p> 
                            </div>
                        </div>
                        <div className="col-sm-3 req__cards">
                            <div className="req__cards__content" align="center">
                                <h4>Requested Course help</h4>
                                {/* put value from backend here */}
                                <p>11045</p> 
                            </div>
                        </div>
                        <div className="col-sm-3 req__cards">
                            <div className="req__cards__content" align="center">
                                <h4>Requested Sessions</h4>
                                {/* put value from backend here */}
                                <p>11045</p> 
                            </div>
                        </div>
                        <div className="col-sm-3 req__cards">
                            <div className="req__cards__content" align="center">
                                <h4> Exams</h4>
                                {/* put value from backend here */}
                                <p>11045</p> 
                            </div>
                        </div>
                    </div>


                    {/* charts */}
                    <div className="dashboard__charts">
                        <div className="dashboard__chart__newuser col-sm-6">
                            <Chart 
                                chartType="ColumnChart"
                                loader={<div>Loading Chart</div>}
                                // update this data field and connect with backend
                                data={[
                                ['Date', 'New user count'],
                                ['1-12-21', 817],
                                ['2-12-21', 379],
                                ['3-12-21', 269],
                                ['4-12-21', 99],
                                ['5-12-21', 152],
                                ]}
                                options={{
                                title: 'New user Signup Data', 
                                hAxis: {
                                    title: 'Total New User',
                                    minValue: 0,
                                },
                                vAxis: {
                                    title: 'City',
                                },
                                }}
                                legendToggle
                            />
                        </div>
                        <div className="dashboard__chart__usertraffic col-sm-6">
                            <Chart 
                                chartType="AreaChart"
                                loader={<div>Loading Chart</div>}
                                // update this data field and connect with backend
                                data={[
                                ['Month', 'User Visited'],
                                ['Jan', 1000],
                                ['Feb', 1170],
                                ['March', 660],
                                ['April', 1030],
                                ['May', 340]
                                ]}
                                options={{
                                title: 'Website Traffic/User engagement',
                                hAxis: { title: 'Month' },
                                vAxis: { title: 'User visited', minValue: 0 } 
                                }}
                            />
                        </div>
                    </div>


                    {/* pending reviews and new cutomers */}
                    <div className="dashboard__lists container-fluid">
                        <div className="col-sm-7 pending__reviews">
                            <h3><b>Pending Reviews</b></h3> 
                            {/* loop over pending review div */}
                            <div className="pending__review">
                                <div className="review__details col-xs-9">
                                    <h4>Reviewer Name</h4>
                                    <p>what is lorem ipsum ? how to use it?</p>
                                </div>
                                <div className="review__approve__btn col-xs-3">
                                    <button className="btn btn-primary">Approve</button>
                                </div>
                            </div>


                            <div className="pending__review">
                                <div className="review__details col-xs-9">
                                    <h4>Reviewer Name</h4>
                                    <p>what is lorem ipsum ? how to use it?</p>
                                </div>
                                <div className="review__approve__btn col-xs-3">
                                    <button className="btn btn-primary">Approve</button>
                                </div>
                            </div>


                            <div className="pending__review">
                                <div className="review__details col-xs-9">
                                    <h4>Reviewer Name</h4>
                                    <p>what is lorem ipsum ? how to use it?</p>
                                </div>
                                <div className="review__approve__btn col-xs-3">
                                    <button className="btn btn-primary">Approve</button>
                                </div>
                            </div>

                            <div className="pending__review">
                                <div className="review__details col-xs-9">
                                    <h4>Reviewer Name</h4>
                                    <p>what is lorem ipsum ? how to use it?</p>
                                </div>
                                <div className="review__approve__btn col-xs-3">
                                    <button className="btn btn-primary">Approve</button>
                                </div>
                            </div> 

                            <div className="pending__review">
                                <div className="review__details col-xs-9">
                                    <h4>Reviewer Name</h4>
                                    <p>what is lorem ipsum ? how to use it?</p>
                                </div>
                                <div className="review__approve__btn col-xs-3">
                                    <button className="btn btn-primary">Approve</button>
                                </div>
                            </div> 
                        </div>
                        <div className="col-sm-5 new__customers">
                            <h3><b>New Customers</b></h3>
                            <div className="new__customer__list">
                                <div className="customer">
                                    <div className="customer__img col-sm-2">
                                        <img className="img-responsive" width="100" height="100" src="https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png" alt="profile picture"/>
                                    </div>
                                    <div className="customer__details col-sm-10">
                                        <h4>User Name</h4>
                                    </div>
                                </div>

                                <div className="customer">
                                    <div className="customer__img col-sm-2">
                                        <img className="img-responsive" width="100" height="100" src="https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png" alt="profile picture"/>
                                    </div>
                                    <div className="customer__details col-sm-10">
                                        <h4>User Name</h4>
                                    </div>
                                </div>


                                <div className="customer">
                                    <div className="customer__img col-sm-2">
                                        <img className="img-responsive" width="100" height="100" src="https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png" alt="profile picture"/>
                                    </div>
                                    <div className="customer__details col-sm-10">
                                        <h4>User Name</h4>
                                    </div>
                                </div>

                                <div className="customer">
                                    <div className="customer__img col-sm-2">
                                        <img className="img-responsive" width="100" height="100" src="https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png" alt="profile picture"/>
                                    </div>
                                    <div className="customer__details col-sm-10">
                                        <h4>User Name</h4>
                                    </div>
                                </div>

                                <div className="customer">
                                    <div className="customer__img col-sm-2">
                                        <img className="img-responsive" width="100" height="100" src="https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png" alt="profile picture"/>
                                    </div>
                                    <div className="customer__details col-sm-10">
                                        <h4>User Name</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
 