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
    </div>
  )
}