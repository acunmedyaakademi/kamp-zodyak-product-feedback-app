import '../css/home.css';
import { Data } from '../../App.jsx';
import { useContext, useState } from 'react';
import { Header } from './header.jsx';


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { data } = useContext(Data)

  return (
    <div className="container">
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="input-group">
        <h5>Sort by: </h5>
        <select name="" id="">
          <option value="">Most Upvotes</option>
        </select>
        <button>+ Add Feedack</button>
      </div>
    </div>
  )
}