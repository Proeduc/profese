import React from 'react'
import { NavLink } from 'react-router-dom'
import './Discussion.css'

function Discussion() {
  return (
    <>
      <div className="container-fluid">
        <div className="discussion_header container-fluid">
          <NavLink to="/discussion" className="discussion_header_title">
            Discussion Board
          </NavLink>
          <NavLink to="/ask_a_ques" className="discussion_header_title">
            Ask a question
          </NavLink>
        </div>

        <div className="discussion_main container-fluid">
          <div className="discussion_search col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control inp"
                  placeholder="Search Question"
                />

                <div className="input-group-btn">
                  <button className="btn btn-primary search_btn" type="submit">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </form>

            <div className="search_subjects">
              <h2>Browse by Subject</h2>
              <h4>Chemistry</h4>
              <h4>Maths</h4>
              <h4>Biology</h4>
              <h4>Physics</h4>
              <h4>Engineering</h4>
            </div>
          </div>

          <div className="discussion_content col-lg-9 col-md-9 col-sm-9 col-xs-12">
            <h2>
              <span
                className="glyphicon glyphicon-star-empty"
                style={{ color: 'yellow' }}
              ></span>
              &nbsp;Top Question
            </h2>

            <div className="discussions">
              <div className="discussions_profile discussion__row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <img
                    className="profile_img img-responsive img-circle"
                    alt=""
                    src="https://picsum.photos/id/237/100/90"
                  ></img>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h3 className="username">Posted by User Name</h3>
                  <p>
                    Answered by XYZ{' '}
                    <span style={{ fontWeight: 'bold' }}>19 AUG 2021</span>
                  </p>
                </div>
                <div className="likes col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <span className="glyphicon glyphicon-thumbs-up">
                    &nbsp;19
                  </span>
                  &nbsp;&nbsp;
                  <span className="glyphicon glyphicon-thumbs-down">
                    &nbsp;3
                  </span>
                </div>
              </div>
              <div className="discussions_que">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry?
                </p>
              </div>
              <div className="discussions_ans">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="thumbnail">
                  <img
                    className="img-responsive"
                    alt=""
                    src="https://picsum.photos/id/237/300/100"
                  ></img>
                </div>
              </div>

              <div className="discussions_profile discussion__row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <img
                    className="profile_img img-responsive img-circle"
                    alt=""
                    src="https://picsum.photos/id/237/100/90"
                  ></img>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h3 className="username">Posted by User Name</h3>
                  <p>
                    Answered by XYZ{' '}
                    <span style={{ fontWeight: 'bold' }}>19 AUG 2021</span>
                  </p>
                </div>
                <div className="likes col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <span className="glyphicon glyphicon-thumbs-up">
                    &nbsp;19
                  </span>
                  &nbsp;&nbsp;
                  <span className="glyphicon glyphicon-thumbs-down">
                    &nbsp;3
                  </span>
                </div>
              </div>
              <div className="discussions_que">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry?
                </p>
              </div>
              <div className="discussions_ans">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="thumbnail">
                  <img
                    className="img-responsive"
                    alt=""
                    src="https://picsum.photos/id/237/300/100"
                  ></img>
                </div>
              </div>

              <div className="discussions_profile discussion__row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <img
                    className="profile_img img-responsive img-circle"
                    alt=""
                    src="https://picsum.photos/id/237/100/90"
                  ></img>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h3 className="username">Posted by User Name</h3>
                  <p>
                    Answered by XYZ{' '}
                    <span style={{ fontWeight: 'bold' }}>19 AUG 2021</span>
                  </p>
                </div>
                <div className="likes col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <span className="glyphicon glyphicon-thumbs-up">
                    &nbsp;19
                  </span>
                  &nbsp;&nbsp;
                  <span className="glyphicon glyphicon-thumbs-down">
                    &nbsp;3
                  </span>
                </div>
              </div>
              <div className="discussions_que">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry?
                </p>
              </div>
              <div className="discussions_ans">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="thumbnail">
                  <img
                    className="img-responsive"
                    alt=""
                    src="https://picsum.photos/id/237/300/100"
                  ></img>
                </div>
              </div>

              <div className="discussions_profile discussion__row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <img
                    className="profile_img img-responsive img-circle"
                    alt=""
                    src="https://picsum.photos/id/237/100/90"
                  ></img>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <h3 className="username">Posted by User Name</h3>
                  <p>
                    Answered by XYZ{' '}
                    <span style={{ fontWeight: 'bold' }}>19 AUG 2021</span>
                  </p>
                </div>
                <div className="likes col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <span className="glyphicon glyphicon-thumbs-up">
                    &nbsp;19
                  </span>
                  &nbsp;&nbsp;
                  <span className="glyphicon glyphicon-thumbs-down">
                    &nbsp;3
                  </span>
                </div>
              </div>
              <div className="discussions_que">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry?
                </p>
              </div>
              <div className="discussions_ans">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="thumbnail">
                  <img
                    className="img-responsive"
                    alt=""
                    src="https://picsum.photos/id/237/300/100"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Discussion
