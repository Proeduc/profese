import React from 'react'
import { useLocation } from 'react-router'

function ReviewFilter(props) {
    const location = useLocation();
    return (
        <> 
          <div className="reviews__review__section col-sm-9">
             <button className="btn btn-default" onClick={props.hideFilter}><i className="fa fa-arrow-circle-left"></i> Back</button>
             <h3 className="text-primary"><strong>{props.filtername} Reviews</strong></h3>
             {/* just repeated the code for better visual */}
             <div className="row">
               <div className="review col-sm-5">
                 <div className="review__header">
                   <div className="review__header__img col-sm-3 col-xs-3">
                      <img className="img-circle img-responsive" src="https://www.bing.com/th?id=OIP.gxn_fMRYjgGPp7I9lh81FgHaGS&w=153&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="profile image"></img>
                   </div>
                   <div className="reviewer__detail col-sm-9 col-xs-9">
                     <p><strong>Student name</strong></p>
                     <p>Student university</p>
                   </div>
                 </div>
                 <div className="review__content container-fluid">
                   <p className="text-justify"> Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's....  Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's....</p>
                 </div>
               </div>
               
               <div className="review col-sm-5">
               <div className="review__header">
                   <div className="review__header__img col-sm-3 col-xs-3">
                      <img className="img-circle img-responsive" src="https://www.bing.com/th?id=OIP.gxn_fMRYjgGPp7I9lh81FgHaGS&w=153&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="profile image"></img>
                   </div>
                   <div className="reviewer__detail col-sm-9 col-xs-9">
                     <p><strong>Student name</strong></p>
                     <p>Student university</p>
                   </div>
                 </div>
                 <div className="review__content container-fluid">
                   <p className="text-justify"> Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's....  Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's....</p>
                 </div>
               </div>
             </div>


             <div className="row">
               <div className="review col-sm-5">
                 <div className="review__header">
                   <div className="review__header__img col-sm-3 col-xs-3">
                      <img className="img-circle img-responsive" src="https://www.bing.com/th?id=OIP.gxn_fMRYjgGPp7I9lh81FgHaGS&w=153&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="profile image"></img>
                   </div>
                   <div className="reviewer__detail col-sm-9 col-xs-9">
                     <p><strong>Student name</strong></p>
                     <p>Student university</p>
                   </div>
                 </div>
                 <div className="review__content container-fluid">
                   <p className="text-justify"> Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's....  Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's....</p>
                 </div>
               </div>
                
             </div>

 
           </div>
          
        </>
    )
}

export default ReviewFilter
