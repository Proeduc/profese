import React from 'react'
import './Reviews.css';

function Reviews() {
    return (
        <>
           <div className="container-fluid">
               <div className="review_header container-fluid">
                   <h3 className="review_header_title">Reviews</h3>
                   <h2 className="review_header_content1">See what students have to say about their experience with Profese and our expert tutors</h2>
                   <h3 className="review_header_content2">Stop struggling. Our expert tutors will help you improve, or your money back. Guaranted.*</h3>
               </div>

               <div className="review-content container-fluid">
                   <div className="row">
                       <div className="reviews">
                           {/* just for better visual i copied the review div many times when you connect it with backend just keep one div and apply for loop */}
                           <div className="review">
                               <div className="reviewer_profile row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                     <img className="profile_img img-responsive img-circle" src="https://picsum.photos/id/237/100/90"></img>
                                  </div>
                                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
                                     <h3 className="username">User Name</h3>
                                     <p>Student at XYZ University</p>
                                  </div>
                               </div>
                               <div className="review_content">
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                               ever since the 1500s.</p>
                               </div>
                           </div>

                           <div className="review">
                               <div className="reviewer_profile row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                     <img className="profile_img img-responsive img-circle" src="https://picsum.photos/id/237/100/90"></img>
                                  </div>
                                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
                                     <h3 className="username">User Name</h3>
                                     <p>Student at XYZ University</p>
                                  </div>
                               </div>
                               <div className="review_content">
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                               ever since the 1500s.</p>
                               </div>
                           </div>

                           <div className="review">
                               <div className="reviewer_profile row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                     <img className="profile_img img-responsive img-circle" src="https://picsum.photos/id/237/100/90"></img>
                                  </div>
                                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
                                     <h3 className="username">User Name</h3>
                                     <p>Student at XYZ University</p>
                                  </div>
                               </div>
                               <div className="review_content">
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                               ever since the 1500s.</p>
                               </div>
                           </div>


                           <div className="review">
                               <div className="reviewer_profile row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                     <img className="profile_img img-responsive img-circle" src="https://picsum.photos/id/237/100/90"></img>
                                  </div>
                                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
                                     <h3 className="username">User Name</h3>
                                     <p>Student at XYZ University</p>
                                  </div>
                               </div>
                               <div className="review_content">
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                               ever since the 1500s.</p>
                               </div>
                           </div>

                           <div className="review">
                               <div className="reviewer_profile row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                     <img className="profile_img img-responsive img-circle" src="https://picsum.photos/id/237/100/90"></img>
                                  </div>
                                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
                                     <h3 className="username">User Name</h3>
                                     <p>Student at XYZ University</p>
                                  </div>
                               </div>
                               <div className="review_content">
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                               ever since the 1500s.</p>
                               </div>
                           </div>

                           <div className="review">
                               <div className="reviewer_profile row">
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                     <img className="profile_img img-responsive img-circle" src="https://picsum.photos/id/237/100/90"></img>
                                  </div>
                                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
                                     <h3 className="username">User Name</h3>
                                     <p>Student at XYZ University</p>
                                  </div>
                               </div>
                               <div className="review_content">
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                               ever since the 1500s.</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

               <div>
                   <button className="review_button btn btn-primary">Leave a Review</button>
               </div>
           </div>
        </>
    )
}

export default Reviews
