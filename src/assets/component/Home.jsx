import '../css/home.css';
import { DataContext } from '../../App.jsx';
import { useContext, useEffect, useState } from 'react';
import { Header } from './header.jsx';


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { data, setData, currentUser, setCurrentUser } = useContext(DataContext)
  const [sortBy, setSortBy] = useState("Most Upvotes");
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

  function handleUpvotes(id) {
    if (currentUser.myUpvotes.includes(id)) {
      data.find(x => x.id === id).upvotes--;
      currentUser.myUpvotes = currentUser.myUpvotes.filter(x => x !== id);
    } else {
      data.find(x => x.id === id).upvotes++;
      currentUser.myUpvotes.push(id);
    }
    setCurrentUser({ ...currentUser });
    setData([...data]);
  }

  function openFeedback(feedback) {
    window.location.hash = `#/feedback-detail/${feedback.id}`;
  }

  function handleSort(e) {
    setSortBy(e.target.value);

    const sortedData = data.sort((a, b) => {
      if (e.target.value === 'Most Upvotes') {
        return b.upvotes - a.upvotes;
      } else if (e.target.value === 'Least Upvotes') {
        return a.upvotes - b.upvotes;
      }
      return 0;
    });

    setData(sortedData);
  }


  return (
    <div className="home-container">
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="input-group">
        {responsive &&
         (<div>
          <img src="/public/img/suggestion-icon.svg" alt="" />
          <span>{data.length}</span>
         </div>)
        }
        <h5>Sort by :</h5>
        <select name="" onChange={handleSort}>
          <option value="Most Upvotes">Most Upvotes</option>
          <option value="Least Upvotes">Least Upvotes</option>
        </select>
        <button onClick={() => window.location.hash = "#/new-feedback"}>+ Add Feedack</button>
      </div>
      {data?.length ?
        <div className="feedbacks-list">
          {data?.map((x,i) => 
          {responsive ?
           (<div className="feedback-item"  key={i}>
            <div className='feedback-content'>
              <h3>{x.title}</h3>
              <p>{x.description}</p>
              <span className='category'>{x.category}</span>
              <div className="home-feedback-footer">
                <span onClick={() => handleUpvotes(x.id)}><img src="/public/img/up-icon.svg" alt="" />{x.upvotes}</span>
                <span onClick={() => openFeedback(x)}><img src="/public/img/comments-icon.svg" alt="" />{x.comments ? (x.comments?.length + x.comments?.map(y => y.replies?.length || 0).reduce((a, b) => a + b, 0)) : 0}</span>
              </div>
            </div>
          </div>) : (
            <div>
              
            </div>
          )
           }
          
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