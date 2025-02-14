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
        <h3>Add a dark theme option</h3>
        <p>It would help people with light sensitivities and who prefer dark mode.</p>

      </div>
    </div>
  )
}