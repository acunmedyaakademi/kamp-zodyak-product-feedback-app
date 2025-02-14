import '../css/home.css';
import { DataContext } from '../../App.jsx';
import { useContext, useState } from 'react';
import { Header } from './header.jsx';


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [upvotes, setUpvotes] = useState(null);
  const { data } = useContext(DataContext)
  const { productRequests } = data || []


  function handleUpvotes(upvotes) {
    setUpvotes(upvotes + 1)
  }

  return (
    <div className="home-container">
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="input-group">
        <h5>Sort by :</h5>
        <select name="" id="">
          <option value="">Most Upvotes</option>
        </select>
        <button>+ Add Feedack</button>
      </div>
      {productRequests?.length  ? 
        <div className="feedbacks-list">
          {productRequests?.map((x,i) => 
          <div className="feedback-item" key={i}>
            <div className='feedback-content'>
              <h3>{x.title}</h3>
              <p>{x.description}</p>
              <span className='category'>{x.category}</span>
              <div className="home-feedback-footer">
                <span onClick={() => handleUpvotes(x.upvotes)}><img src="/public/img/up-icon.svg" alt="" />{x.upvotes}</span>
                <span><img src="/public/img/comments-icon.svg" alt="" />{x.comments ? (x.comments?.length + x.comments?.map(y => y.replies?.length || 0).reduce((a, b) => a + b, 0)) : 0}</span>
              </div>
            </div>
          </div>
          )}
        </div>
        : 
        <div className='not-found'>
          <div className="home-not-found">
            <img src="/public/img/no-feedback-img.png" alt="" />
            <h3>There is no feedback yet.</h3>
            <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <button>+ Add Feedback</button>
          </div>

        </div>
      }
    </div>
  )
}