import React from 'react'
import { Link } from 'react-router-dom'

function Blog_single(props) {
    return (
        <>
          <div className="blog__single container-fluid">
              <div className="blog__single__header">
                    <button className="blog__Section__back btn btn-default" onClick={props.back}><i className="fa fa-arrow-circle-left"></i> Back</button> 
              </div>

              <div className="blog__single__content container">
                  {/* blog title */}
                  <h2 className="blog__single__title">{props.title}</h2>
                  <hr style={{borderTop:"2px solid #153280"}} />

                  {/* blog banner image */}
                  <div className="blog__single__img" align="center">
                      <img className="img-responsive img-rounded" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="blog single banner"></img>
                  </div>
                  <hr style={{borderTop:"2px solid #153280"}} />

                  {/* blog body */}
                  <div className="blog__single__body">
                      <div className="col-xs-2 blog__single__sidebar">
                          <div className="blog__single__likes">
                                <p><i class="fa fa-heart" aria-hidden="true"></i> 7</p>
                          </div>
                          <div className="blog__single__comments">
                                <p><i class="fa fa-comment" aria-hidden="true"></i> 2</p>
                          </div>
                      </div>
                      <div className="col-xs-10 blog__single__main">
                          <div className="blog__single__text">
                              <p className="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                              <p className="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                          </div>


                          <div className="blog__single__share">
                              <div className="blog__single__twitter"><Link to="#"><i className="fa fa-twitter"></i></Link></div>
                              <div className="blog__single__facebook"><Link to="#"><i className="fa fa-facebook"></i></Link></div>
                              <div className="blog__single__linkedin"><Link to="#"><i className="fa fa-linkedin"></i></Link></div>
                          </div>

                          <div className="blog__single__meta">                  
                            {/* got these info from backend */}
                            <p>By <i><b>Ritika Dey</b></i></p>
                            <p>Published on <b>12.10.21</b></p>
                          </div>

                            
                          <hr style={{borderTop:"1px solid black", marginBottom:"20px"}} />

                          <div className="blog__single__leave__comment">
                            <h1 className="blog__single__form__title">Leave a Comment</h1>
                            <form>
                               <textarea className="form-control" rows="3" placeholder="write your comment here...."></textarea>
                               <input type="submit" value="Send" className="btn btn-primary" style={{marginTop:"20px"}} />
                            </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Blog_single
