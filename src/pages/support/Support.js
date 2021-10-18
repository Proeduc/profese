import React from 'react'
import Faq from './Faq'
import './Support.css'

function Support() {
    return (
        <>
           <div className="support__container container-fluid">
               {/* frequently asked questions to be fetched from backend */}
               <div className="support__faq__Content col-sm-7">
                   <h3 className="support__faq__title">Frequently asked Questions:</h3>
                   {/* FAQ start, loop over this only and put the ques, ans from backend */}
                      <Faq 
                         ques="Is there any refund policy?" 
                         ans ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters" />
                   {/* FAQ end */}


                   {/* just copies remove them after backend implementation */}
                   <Faq 
                         ques="How to take assignment help?" 
                         ans ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters" />
                   
                   <Faq 
                         ques="How to book an online live session?" 
                         ans ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters" />
                   
                   <Faq 
                         ques="How to cancel a prebooked class?" 
                         ans ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters" />
                   
                   <Faq 
                         ques="Can I take more than one assignment help at a time?" 
                         ans ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters" />
                   
                   <Faq 
                         ques="How to schedule practice exam?" 
                         ans ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters" />
                   
               </div>

               {/* support form to share any info or complaint by user  */}
               <div className="support__form col-sm-3 col-md-offset-1">
                   <h1 className="support__form__title">Write your query here</h1>
                   <form>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input 
                               type="text" 
                               className="form-control" 
                               id="email"
                               placeholder="Enter your email here"/>
                        </div>
                        <div class="form-group">
                            <label for="query">Your Query:</label>
                            <textarea 
                               className="form-control" 
                               rows="5" 
                               id="query"
                               placeholder="Enter your query here"></textarea>
                        </div>
                        <button className="btn btn-default support__form__btn">Submit</button>
                   </form>
               </div>
           </div>
        </>
    )
}

export default Support
