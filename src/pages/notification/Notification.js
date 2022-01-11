import React from 'react' 
import './Notification.css' 

function Notification() {
    return (
        <>
            <div className='notification__container container'>
                <div className='notifcation__header'>
                    <h5><b>Notifications</b></h5> &nbsp;&nbsp;&nbsp;
                    <button title='Mark all as read' className="btn"><i className='fa fa-check'></i></button>
                </div>

                <hr style={{borderTop:"2px solid black"}}/> 

                <div className='notification col-sm-11' style={{backgroundColor:"rgb(202, 225, 233)"}}>
                    <div className='notification__body col-xs-11'>
                        <p className='notification__time'>DEC 19</p>
                        <h5 className='notification__title'>The standard Lorem Ipsum passage, used since the 1500s</h5>
                        <p className='notification__body'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>

                <div className='notification col-sm-11' style={{backgroundColor:"rgb(202, 225, 233)"}}>
                    <div className='notification__body col-xs-11'>
                        <p className='notification__time'>DEC 19</p>
                        <h5 className='notification__title'>The standard Lorem Ipsum passage, used since the 1500s</h5>
                        <p className='notification__body'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>


                <div className='notification col-sm-11' style={{backgroundColor:"rgb(202, 225, 233)"}}>
                    <div className='notification__body col-xs-11'>
                        <p className='notification__time'>DEC 19</p>
                        <h5 className='notification__title'>The standard Lorem Ipsum passage, used since the 1500s</h5>
                        <p className='notification__body'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div> 
                </div>


                <div className='notification col-sm-11'>
                    <div className='notification__body col-xs-11'>
                        <p className='notification__time'>DEC 19</p>
                        <h5 className='notification__title'>The standard Lorem Ipsum passage, used since the 1500s</h5>
                        <p className='notification__body'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div> 
            </div> 
        </>
    )
}

export default Notification