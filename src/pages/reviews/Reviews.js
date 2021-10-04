 import {React, useState} from 'react'
import { NavLink} from 'react-router-dom'
import './Reviews.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
 
 function Reviews() {  
  const user = useSelector(selectUser)
  const [leaveReview, setLeaveReview] = useState(false)
  const [text, setText] = useState('')
  const [comment, setcomment] = useState('')
  const [reviews, setReviews] = useState([])

  const giveReview = () => {
    setLeaveReview(!leaveReview)
  }
   return (
     <>
       <div className="reviews__container container-fluid">
         <div className="reviews__header container-fluid">
           <div className="reviews__pill btn btn-primary">
             Reviews
           </div>
           <div className="reviews__header__content row">
             <div className="col-sm-8">
               <h2 className="text-primary text-justify"><strong>Read testimonials and reviews on services tailored towards our student's need</strong></h2>
             </div>
             <div className="reviews__new__btn col-sm-4">
               {leaveReview === false && user !== null && (
                     <button onClick={giveReview} className="btn-lg btn-primary">Write a review</button>
                )}
                {leaveReview === true && user !== null && (
                  <button
                    onClick={giveReview}
                    className="btn-lg btn-primary"
                  >
                    Back To Reviews
                  </button>
                )}
             </div>
           </div>
         </div>

         {leaveReview === true && (
           
          <form className="form-horizontal container reviews__form"> 
          <div className="form-group">
            <label className="control-label col-sm-2" for="email">University: </label>
            <div className="col-sm-10">
              <input
                value={comment}
                className="form-control"
                onChange={(e) => setcomment(e.target.value)}
                type="text"
                required
              /> 
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="pwd">Review: </label>
            <div className="col-sm-10">
              <textarea
                value={text}
                className="form-control"
                onChange={(e) => setText(e.target.value)}
                rows={5}
                required
              /> 
            </div>
          </div> 
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
        
        )}


        {leaveReview === false && (  
         <div className="reviews__content row">
           <div className="reviews__fliter col-sm-3">
             <div className="reviews__filter__one">
                <h4 className="text-primary"><strong>Browse by</strong></h4>
                <div className="list-group">
                  <NavLink to="#" className="list-group-item">Assignment help</NavLink>
                  <NavLink to="#" className="list-group-item">All services</NavLink>
                  <NavLink to="#" className="list-group-item">Course help</NavLink>
                  <NavLink to="#" className="list-group-item">Live sessions</NavLink>
                  <NavLink to="#" className="list-group-item">Exam prep</NavLink>
                </div>
             </div>
             <div className="reviews__filter__two">
                <h4 className="text-primary"><strong>Filter by</strong></h4>
                <div className="list-group">
                  <NavLink to="#" className="list-group-item"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></NavLink>
                  <NavLink to="#" className="list-group-item"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></NavLink>
                  <NavLink to="#" className="list-group-item"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></NavLink>
                  <NavLink to="#" className="list-group-item"><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></NavLink>
                  <NavLink to="#" className="list-group-item"><i className="fa fa-star" aria-hidden="true"></i></NavLink>
                </div>
             </div>
           </div>

           <div className="reviews__review__section col-sm-9">
             
             <h4 className="text-primary"><strong>Recently added reviews</strong></h4>
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
         </div>
        )}
       </div>
     </>
   )
 }
 
 export default Reviews
 