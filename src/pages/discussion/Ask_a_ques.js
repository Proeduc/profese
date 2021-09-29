import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Discussion.css'
import { db, firebase } from '../../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import Loader from 'react-loader-spinner'
function Ask_a_ques() {
  const user = useSelector(selectUser)

  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')

  const askQuestion = (e) => {
    e.preventDefault()

    if (subject !== '' && text !== '') {
      db.collection('topics').add({
        name: user?.displayName,
        subject: subject,
        text: text,
        image: user?.photo,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      setSubject('')
      setText('')
    }
  }
  console.log(subject, text)
  if (!user) {
    return (
      <div
        style={{
          height: 'calc(100vh - 125px)',
          width: '100%',
          display: 'grid',
          placeItems: 'center',
          backgroundColor: 'rgb(230, 227, 227)',
        }}
      >
        <h1>Login And Signup First To Ask Questions</h1>
        <div className="container qu">
          <div className="row">
          <NavLink to="/discussion" className=" btn-primary btns ">
                Discussion Board
              </NavLink>
          
              <NavLink to="/login" className=" btn-primary btns ">
               Login From Here
              </NavLink>
          </div>

        </div>

        <Loader type="ThreeDots" color="#153280" height={120} width={120} />
        
      </div>



    )
  } else {
    return (
      <>
        <div className="container-fluid">
          <div className="discussion_header container-fluid">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <NavLink to="/discussion" className="discussion_header_title">
                Discussion Board
              </NavLink>
              <NavLink to="/ask_a_ques" className="discussion_header_title">
                Ask a question
              </NavLink>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <div className="discussion_tips">
                <h2>Tips</h2>
                <ul>
                  <li>Make sure your question is concise.</li>
                  <li>Double check grammar and spelling.</li>
                  <li>Upload documents, images if necessary.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ques_input">
            <div className="user_profile row ">
              <img
                className="img-responsive img-circle"
                alt=""
                src={user?.photo}
              ></img>
              <h3>

                &nbsp;<b>{user?.displayName}</b> posting in &nbsp;
                <span class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                  >
                    Select Subject&nbsp;
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>MATHS</li>
                    <li>SCIENCE</li>
                    <li>ENGINEERING</li>
                  </ul>
                </span>
              </h3>
            </div>

            <div className="inputs container qu">
              <form className="ask__form">

                <input
                  type="text"
                  placeholder="Subject"
                  className="form__input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />

                <textarea
                  class="form__textArea"
                  rows="6"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Ask away...."
                  required
                ></textarea>

                {/* file upload portion */}

                <button
                  onClick={askQuestion}
                  className="btn-ask btn-primary"
                  style={{ float: 'right', marginTop: '20px' }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Ask_a_ques
