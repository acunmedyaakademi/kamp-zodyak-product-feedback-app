import "../../reset.css"
import "../css/newfeedback.css"

export default function NewFeedback() {
  return (
    <>
      <div className="feedback-part">
        <div>
          <button className="addnewBtn">
            <img src="\img\plus-icon.svg" alt="" />
          </button>
        </div>

        <div>
          <form >
            <h2>Create New Feedback</h2>
            <h3>Feedback Title</h3>
            <p>Add a short, descriptive headline</p>
            <input type="text" />
           
           
            <h3>Category</h3>
            <p>Choose a category for your feedback</p>
           
            <select name="" id="">
              <option value="feature"> Feature</option>
              <option value="ui"> UI</option>
              <option value="ux"> UX</option>
              <option value="enhancement"> Enhancement</option>
              <option value="bug"> Bug</option>
            </select>
            <h3>Feedback Detail</h3>
            <p>Include any specific comments on what should be improved, added, etc.</p>

            <textarea  required name="" id=""></textarea>

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
