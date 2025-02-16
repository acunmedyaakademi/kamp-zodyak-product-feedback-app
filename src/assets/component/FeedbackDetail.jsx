import '../css/feedback-detail.css';
import { DataContext } from '../../App.jsx';
import { useContext, useEffect, useState } from 'react';

function getUrlParam() {
  return location.hash.substring(1).split('/').at(-1);
}

export default function FeedbackDetail() {
  const { data, currentUser, setCurrentUser } = useContext(DataContext)
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [text , setText] = useState("")
  const [currentReply, setCurrentReply] = useState(null);
  const [responsive, setResponsive] = useState(window.innerWidth < 525)


  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth < 525);
    };

    window.addEventListener("resize", handleResize);
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const feedbackId = getUrlParam()
    if (feedbackId) {
      const feedback = data.find(x => x.id == feedbackId);
      if (feedback) {
        setSelectedFeedback(feedback)
      }
    }
  }, [setSelectedFeedback])

  if (!selectedFeedback) {
    return <p>Feedback Bilgisi bulunamadı</p>
  }

  console.log(currentUser);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formObj = Object.fromEntries(formData);
    const newReplyObj = {
      id: crypto.randomUUID(),
      content: text,
      user: {
        image: currentUser.image,
        name: currentUser.name,
        username: currentUser.username,
      }
    }
    let updatedComments;
    if (currentReply) {
      updatedComments = selectedFeedback.comments.map(comment => {
        if (comment.id === currentReply) {
          const updatedReplies = Array.isArray(comment.replies) ? [...comment.replies, newReplyObj] : [newReplyObj];
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
    } else {
      updatedComments = [...selectedFeedback.comments, {
        id: crypto.randomUUID(),
        content: text,
        user: {
          image: currentUser.image,
          name: currentUser.name,
          username: currentUser.username,
        },
        replies: []
      }];
    }

    const updatedFeedback = { ...selectedFeedback, comments: updatedComments };
    setSelectedFeedback(updatedFeedback);


    setText("");
    setCurrentReply(null);
  }

  function handleReply(id, username) {
    setCurrentReply(id)
    setText(`@${username} `)

  }


  return (
    <div className='feedback-detail-container'>
      <div className="feedback-detail-header">
        <a href="/">Go back</a>
        <a href="#/edit-feedback">Edit Feedback</a>
      </div>
      {responsive ?
        <div className="feedback-detail-item">
          <div className='feedback-detail-content'>
            <h3>{selectedFeedback.title}</h3>
            <p>{selectedFeedback.description}</p>
            <span className='category'>{selectedFeedback.category}</span>
            <div className="feedback-detail-footer">
              <span><img src="/public/img/up-icon.svg" alt="" />{selectedFeedback.upvotes}</span>
              <span><img src="/public/img/comments-icon.svg" alt="" />{selectedFeedback.comments ? (selectedFeedback.comments?.length + selectedFeedback.comments?.map(y => y.replies?.length || 0).reduce((a, b) => a + b, 0)) : 0}</span>
            </div>
          </div>
        </div> :
        (<div className="feedback-detail-item">
          <div className='feedback-detail-content'>
            <span><img src="/public/img/up-icon.svg" alt="" />{selectedFeedback.upvotes}</span>
            <div>
              <h3>{selectedFeedback.title}</h3>
              <p>{selectedFeedback.description}</p>
              <span className='feedback-detail-category'>{selectedFeedback.category}</span>
            </div>
            <span><img src="/public/img/comments-icon.svg" alt="" />{selectedFeedback.comments ? (selectedFeedback.comments?.length + selectedFeedback.comments?.map(y => y.replies?.length || 0).reduce((a, b) => a + b, 0)) : 0}</span>
          </div>
        </div>)
      }

      <div className="comments-card">
        <h2>{selectedFeedback.comments ? (selectedFeedback.comments?.length + selectedFeedback.comments?.map(y => y.replies?.length || 0).reduce((a, b) => a + b, 0)) : 0} Comments</h2>
        <ul className='comment-list' >
          {selectedFeedback.comments.map((x, i) =>
            <li className='comment-item' key={i}>
              <div className='comment-header'>
                <img src={x.user.image} alt="" />
                <div className='user-info'>
                  <h6>{x.user.name}</h6>
                  <span>@{x.user.username}</span>
                </div>
                <button onClick={() => handleReply(x.id, x.user.username)}>Reply</button>
              </div>
              <p>{x.content}</p>
              {x.replies && (
                <ul>
                  {x.replies.map(y =>
                    <li className='comment-item' key={y.id}>
                      <div className='comment-header'>
                        <img src={y.user?.image} alt="" style={{ borderRadius: '50%' }} />
                        <div className='user-info'>
                          <h6>{y.user?.name}</h6>
                          <span>@{y.user?.username}</span>
                        </div>
                        <button>Reply</button>
                      </div>
                      <p>{y.content}</p>
                    </li>
                  )}
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
      <div className="add-comment">
        <h2>Add Comment</h2>
        <form onSubmit={handleSubmit}>
          <textarea name="message" value={text} onChange={(e) => setText(e.target.value)} rows={2} placeholder='Type your comment here'></textarea>
          <div className='add-comment-footer'>
            <p>250 Characters left</p>
            <button>Post Comment</button>
          </div>
        </form>
      </div>
    </div>
  )
}