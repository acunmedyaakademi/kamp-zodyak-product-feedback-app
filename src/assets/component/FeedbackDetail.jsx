import '../css/feedback-detail.css';
import { Data } from '../../App.jsx';
import { useContext } from 'react';

export default function FeedbackDetail() {
  const { data } = useContext(Data)
  return (
    <div className='container'>
      <div className="header">
        <a href="/">Go back</a>
        <a href="#/">Edit Feedback</a>
      </div>
      <div className="feedback-card">
        <div className='content'>
          <h3>Add a dark theme option</h3>
          <p>It would help people with light sensitivities and who prefer dark mode.</p>
          <span className='category'>Features</span>
          <div className="feedback-footer">
            <span><img src="/public/img/up-icon.svg" alt="" />99</span>
            <span><img src="/public/img/comments-icon.svg" alt="" />4</span>
          </div>
        </div>
      </div>
      <div className="comments-card">
        <h2>4 Comments</h2>
        <ul className='comment-list'>
          <li className='comment-item'>
            <div className='comment-header'>
              <img src="/public/user-images/image-elijah.jpg" alt="" />
              <div className='user-info'>
                <h6>Elijah Moss</h6>
                <span>@hexagon.bestagon</span>
              </div>
              <button>Reply</button>
            </div>
            <p>Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
          </li>
          <li className='comment-item'>
            <div className='comment-header'>
              <img src="/public/user-images/image-elijah.jpg" alt="" />
              <div className='user-info'>
                <h6>Elijah Moss</h6>
                <span>@hexagon.bestagon</span>
              </div>
              <button>Reply</button>
            </div>
            <p>Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
          </li>
          <li className='comment-item'>
            <div className='comment-header'>
              <img src="/public/user-images/image-elijah.jpg" alt="" />
              <div className='user-info'>
                <h6>Elijah Moss</h6>
                <span>@hexagon.bestagon</span>
              </div>
              <button>Reply</button>
            </div>
            <p>Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
            <ul>
              <li className='comment-item'>
                <div className='comment-header'>
                  <img src="/public/user-images/image-elijah.jpg" alt="" />
                  <div className='user-info'>
                    <h6>Elijah Moss</h6>
                    <span>@hexagon.bestagon</span>
                  </div>
                  <button>Reply</button>
                </div>
                <p>Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="add-comment">
        <h2>Add Comment</h2>
        <textarea name="message" id="" placeholder='Type your comment here'></textarea>
        <div className='add-comment-footer'>
          <p>250 Characters left</p>
          <button>Post Comment</button>
        </div>
      </div>

    </div>
  )
}