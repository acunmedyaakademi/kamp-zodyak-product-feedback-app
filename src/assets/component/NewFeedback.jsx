import "../../reset.css"
import "../css/newfeedback.css"
import { DataContext } from "../../App";
import { useContext } from "react";

export default function NewFeedback() {

  const { data, setData} = useContext(DataContext)

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);

    const newFeedbackObj = {
      id: crypto.randomUUID(),
      comments:[],
      status: "In-Progress",
      upvotes:0
    }
    const myData = {...formObj, ...newFeedbackObj};
    setData([...data, myData]);
    console.log(data)
    
  }

  return (
    <>
      <div className="feedback-container">
        <div className="feedback-header">
          <button type="button" onClick={() => history.back()} className="gobackBtn">  <img src="\img\left-blue-icon.svg" alt="" />Go Back
          </button>
        </div>

        <div className="feedback-form">
          <form onSubmit={handleSubmit} >
            <button type="button" className="addnewBtn">
              <img src="\img\plus-icon.svg" alt="" />
            </button>

            <div>
              <h2>Create New Feedback</h2>
              <h3>Feedback Title</h3>
              <p>Add a short, descriptive headline</p>
              <input required name="title" type="text" />
            </div>

            <div>
              <h3>Category</h3>
              <p>Choose a category for your feedback</p>
              <select required name="category" id="">
                <option value="feature"> Feature</option>
                <option value="ui"> UI</option>
                <option value="ux"> UX</option>
                <option value="enhancement"> Enhancement</option>
                <option value="bug"> Bug</option>
              </select>
            </div>

            <div>
              <h3>Feedback Detail</h3>
              <p>Include any specific comments on what should be improved, added, etc.</p>
              <textarea required name="description" ></textarea>
            </div>

            <div className="feedback-footer">
              <div>
                <button type="submit" className="addfeedbackBtn">Add Feedback</button>
              </div>
              <div>
                <button onClick={() => history.back()}  type="button" className="cancelBtn">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
