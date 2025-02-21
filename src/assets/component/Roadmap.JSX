import '../css/roadmap.css';
import { useContext, useState, useEffect } from "react";
import { DataContext } from '../../App.jsx';


const Roadmap = () => {
  const { data, setData, currentUser, setCurrentUser } = useContext(DataContext);
  const [activeTab, setActiveTab] = useState("in-progress");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (!data || !data.productRequests) return <div></div>;
  
  const statusMap = {
    "planned": "Planned",
    "in-progress": "In-Progress",
    "live": "Live"
  };
  
  const statusColors = {
    "planned": "planned-color",
    "in-progress": "in-progress-color",
    "live": "live-color"
  };
  
  const statusDescriptions = {
    "planned": "Ideas prioritized for research",
    "in-progress": "Currently being developed",
    "live": "Released features"
  };
  
  const filteredRequests = data.productRequests.filter(
    (request) => request.status === activeTab
  );

  const renderCard = (request) => {
    const statusClass = request.status;

    return (
      <div 
        key={request.id} 
        className={`card ${statusClass}`}
        style={{ borderTopColor: 
          statusClass === "planned" ? "#F49F85" : 
          statusClass === "in-progress" ? "#AD1FEA" : 
          "#62BCFA" 
        }}
      >
        <p className="status-indicator">
          {statusMap[request.status]}
        </p>
        <h3 className="card-title">{request.title}</h3>
        <p className="card-description">{request.description}</p>
        <span className={`category-tag tag-${request.category.toLowerCase()}`}>
          {request.category}
        </span>
        
        <div className="card-footer">
          <button className="upvote-button">{request.upvotes}</button>
          <span className="comment-count">{request.comments?.length || 0}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="roadmap-container">
      <div className="header">
        <div className="logo-part">
          <button className="goBackBtn" onClick={() => window.history.back()}>
            Go Back
          </button>
          <h1 className="logo">Roadmap</h1>
        </div>
        <a href="./assets/component/NewFeedback.jsx">
          <button className="addFeedbackBtn">+ Add Feedback</button>
        </a>
      </div>
 
      {isMobile && (
        <div className="roadmap-tabs">
          {Object.entries(statusMap).map(([key, label]) => (
            <button 
              key={key} 
              onClick={() => setActiveTab(key)}
              data-active={activeTab === key ? "true" : "false"}
            >
              {label} ({data.productRequests.filter(req => req.status === key).length})
            </button>
          ))}
        </div>
      )}

      {isMobile && (
        <div className="mobile-view">
          <h2 className="active-status">
            {statusMap[activeTab]} ({filteredRequests.length})
          </h2>
          <p className="active-status-text">{statusDescriptions[activeTab]}</p>
          
          {filteredRequests.map(request => renderCard(request))}
        </div>
      )}
      
      {!isMobile && (
        <div className="desktop-view">
          {Object.entries(statusMap).map(([status, label]) => {
            const statusRequests = data.productRequests.filter(req => req.status === status);
            
            return (
              <div key={status} className="status-column">
                <div className="status-header">
                  <h2 className="status-title">
                    {label} ({statusRequests.length})
                  </h2>
                  <p className="status-description">{statusDescriptions[status]}</p>
                </div>
                
                <div className="status-cards">
                  {statusRequests.map(request => renderCard(request))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Roadmap;
