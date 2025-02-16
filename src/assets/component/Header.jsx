import { useContext,useState } from 'react';
import { DataContext } from '../../App.jsx';

import "../../reset.css"
import "../css/header.css"



export function Header({ selectedCategory, setSelectedCategory}) {
  const {data} = useContext(DataContext)
  const [isOpen, setIsOpen] = useState(false);
  console.log(data)
    return (
<>
  <header className="header">
    <div className="header-text">
      <h1>Frontend Mentor</h1>
      <h3>Feedback Board</h3>
    </div>
    <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "✖" : "☰"}
    </button>
  </header>

  {/* Sidebar Menü */}
  <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <div className="sidebar-content">
      <div className="tags">
        <button className="active">All</button>
        <button>UI</button>
        <button>UX</button>
        <button>Enhancement</button>
        <button>Bug</button>
        <button>Feature</button>
      </div>
      <div className="header-road-map">
        <div className="road-map-links">
          <h3>Roadmap</h3>
          <a href="/roadmap.jsx"> View</a>
        </div>
      <ul className="roadmap">
        <li><span className="dot planned"></span> Planned <span className='count'>2</span></li>
        <li><span className="dot in-progress"></span> In-Progress <span className='count'>3</span></li>
        <li><span className="dot live"></span> Live <span className='count'>1</span></li>
      </ul>
      </div>
    </div>
  </div>

  {/* overlay */}
  {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
</>

    );
}

