import "../../reset.css"
import "../css/newfeedback.css"

export default function NewFeedback() {
  return (
    <>
      <div className="feedback-container">
        <div className="feedback-header">
          <button  className="gobackBtn">  <img src="\img\left-blue-icon.svg" alt="" />Go Back
          </button>

        </div>

        <div className="feedback-form">
          <form >
            <button className="addnewBtn">
              <img src="\img\plus-icon.svg" alt="" />
            </button>

            <div  >
              <h2>Create New Feedback</h2>
              <h3>Feedback Title</h3>
              <p>Add a short, descriptive headline</p>
              <input type="text" />
            </div>

            <div >
              <h3>Category</h3>
              <p>Choose a category for your feedback</p>
              <select name="" id="">
                <option value="feature"> Feature</option>
                <option value="ui"> UI</option>
                <option value="ux"> UX</option>
                <option value="enhancement"> Enhancement</option>
                <option value="bug"> Bug</option>
              </select>
            </div>

            <div >
              <h3>Feedback Detail</h3>
              <p>Include any specific comments on what should be improved, added, etc.</p>
              <textarea required name="" id=""></textarea>
            </div>

            <div className="feedback-footer">
              <button className="addfeedbackBtn">Add Feedback</button>
              <button className="cancelBtn">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
