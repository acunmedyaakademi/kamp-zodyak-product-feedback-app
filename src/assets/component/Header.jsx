import { useContext,useState } from 'react';
import { DataContext } from '../../App.jsx';

import "../../reset.css"
import "../css/header.css"



export function Header({ selectedCategory, setSelectedCategory}) {
  const {data} = useContext(DataContext)
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); 
  };
    return (
<>
  <div className="header-mobile">
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
              <button
                className={selectedCategory === "All" ? "active" : ""}
                onClick={() => handleCategoryChange("All")}
              >
                All
              </button>
              <button
                className={selectedCategory === "UI" ? "active" : ""}
                onClick={() => handleCategoryChange("UI")}
              >
                UI
              </button>
              <button
                className={selectedCategory === "UX" ? "active" : ""}
                onClick={() => handleCategoryChange("UX")}
              >
                UX
              </button>
              <button
                className={selectedCategory === "Enhancement" ? "active" : ""}
                onClick={() => handleCategoryChange("enhancement")}
              >
                Enhancement
              </button>
              <button
                className={selectedCategory === "Bug" ? "active" : ""}
                onClick={() => handleCategoryChange("Bug")}
              >
                Bug
              </button>
              <button
                className={selectedCategory === "Feature" ? "active" : ""}
                onClick={() => handleCategoryChange("Feature")}
              >
                Feature
              </button>
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
  </div>
  <div className="header-desktop">
    <div className="front-end">
    <h1>Frontend Mentor</h1>
    <h3>Feedback Board</h3>
    </div>
  <div className="tags">
              <button
                className={selectedCategory === "All" ? "active" : ""}
                onClick={() => handleCategoryChange("All")}
              >
                All
              </button>
              <button
                className={selectedCategory === "UI" ? "active" : ""}
                onClick={() => handleCategoryChange("UI")}
              >
                UI
              </button>
              <button
                className={selectedCategory === "UX" ? "active" : ""}
                onClick={() => handleCategoryChange("UX")}
              >
                UX
              </button>
              <button
                className={selectedCategory === "Enhancement" ? "active" : ""}
                onClick={() => handleCategoryChange("enhancement")}
              >
                Enhancement
              </button>
              <button
                className={selectedCategory === "Bug" ? "active" : ""}
                onClick={() => handleCategoryChange("Bug")}
              >
                Bug
              </button>
              <button
                className={selectedCategory === "Feature" ? "active" : ""}
                onClick={() => handleCategoryChange("Feature")}
              >
                Feature
              </button>
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
</>

    );
}

