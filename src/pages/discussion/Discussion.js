/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Discussion.css'
import { db, firebase } from '../../firebase'

function Discussion() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    db.collection('topics').onSnapshot((snapshot) =>
      setTopics(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))),
    )
  }, [])

  console.table(topics[0])
  return (
    <>
      <div className="container qu">
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

          <div className="discussion_content col-lg-9 col-md-9 col-sm-9 col-xs-12 ">
            <h2>
              <span
                className="glyphicon glyphicon-star-empty"
                style={{ color: 'yellow' }}
              ></span>
              &nbsp;Top Asked Questions
            </h2>

            <div className="discussions">
            <div class="table-responsive que ">  
            <table class="table ">
    <thead>
      <tr>
       <th>Profile Pic </th>
        <th>Posted By</th>
        <th>Subject</th>
        <th>Question</th>
        <th>Likes And Dislikes</th>
       
      </tr>
    </thead>
    <tbody>
    {topics.map((t) => (
      <tr key={t.data.id} >
        <td> <img
            className="profile_img img-responsive img-circle"
            alt=""
            src={t.data.image}
          /></td>
        <td><p> {t.data.name} 
            
          </p></td>
        <td> <p>{t.data.subject}</p></td>
        <td> <p>{t.data.text}</p></td>
        <td> <p><a href={`/custom/${t.id}`} type="button" class="btn btn-primary">Answers</a></p></td>
        <td>
        <span className="glyphicon glyphicon-thumbs-up">
            &nbsp;19
          </span>
          &nbsp;&nbsp;
          <span className="glyphicon glyphicon-thumbs-down">
            &nbsp;3
          </span>
        </td>
        
      </tr>
      ))}
    </tbody>
  </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Discussion
