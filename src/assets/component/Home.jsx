
import { Data } from "../../App";
import { useContext } from "react";

export default function Home() {

const { data } = useContext(Data);

  return (
    <div className="container">
      <ul>
        {data.map((x, index) => (
          <li key={index}>
            <div className="feedback-cards">
              <h6>{x.title}</h6>
              <p>{x.description}</p>
              <span>{x.category}</span>
            </div>
            
          </li> 
        ))}
      </ul>
    </div>
  );
}