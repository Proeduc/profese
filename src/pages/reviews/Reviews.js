import React, { useEffect, useState } from 'react'
import './Reviews.css'
import { db, firebase } from '../../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Reviews() {
  const user = useSelector(selectUser)
  const [leaveReview, setLeaveReview] = useState(false)
  const [text, setText] = useState('')
  const [comment, setcomment] = useState('')
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    db.collection('reviews').onSnapshot((snapshot) =>
      setReviews(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
      ),
    )
  }, [])

  const giveReview = () => {
    setLeaveReview(!leaveReview)
  }

  const addReview = () => {
    db.collection('reviews').doc(user?.uid).set({
      name: user?.displayName,
      comment: comment,
      text: text,
      image: user?.photo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return (
    <>
      <div className="container-fluid reviews__container">
        <div className="review_header container-fluid">
          <h3 className="review_header_title">Reviews</h3>
          <h2 className="review_header_content1">
            See what students have to say about their experience with Profese
            and our expert tutors
          </h2>
          <h3 className="review_header_content2">
            Stop struggling. Our expert tutors will help you improve, or your
            money back. Guaranted.*
          </h3>
        </div>
        {leaveReview === true && (
          <div className="review__form">
            <div className="review__inputRow">
              <label>University</label>
              <input
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="review__inputRow">
              <label>Review</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                required
              />
            </div>
            <button
              onClick={addReview}
              className="review__buttonForm btn btn-primary"
            >
              Submit
            </button>
          </div>
        )}

        {leaveReview === false && (
          <div className="review-content container-fluid">
            <div className="review__row">
              <div className="reviews">
                {/* just for better visual i copied the review div many times when you connect it with backend just keep one div and apply for loop */}
                {reviews.map((r) => (
                  <div className="review">
                    <div className="reviewer_profile row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <img
                          className="profile_img img-responsive img-circle"
                          alt=""
                          src="https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg"
                         
                        ></img>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <h3 className="username">{r.data.name}</h3>
                        <p> {r.data.comment}</p>
                      </div>
                    </div>
                    <div className="review_content">
                      <p>{r.data.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {leaveReview === false && user !== null && (
          <button
            onClick={giveReview}
            className="review_button btn btn-primary"
          >
            Leave a Review
          </button>
        )}
        {leaveReview === true && user !== null && (
          <button
            onClick={giveReview}
            className="review_button btn btn-primary"
          >
            Back To Reviews
          </button>
        )}
      </div>
    </>
  )
}

export default Reviews
