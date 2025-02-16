
import "../../reset.css"
import "../css/editfeedback.css"

export default function EditFeedback() {
  return (
    <>
      <div className="feedback-container">
        <div className="feedback-header">
          <button className="gobackBtn">  <img src="\img\left-blue-icon.svg" alt="" />Go Back
          </button>

        </div>

        <div className="feedback-form">
          <form >
            <button className="addnewBtn">
              <img src="\img\edit-icon.svg" alt="" />
            </button>

            <div  >
              <h2>Editing ‘Add a dark theme option’</h2>
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

            <div>
              <h3>Update Status</h3>
              <p>Change feature state</p>
              <select name="" id="">
                <option value="Planned">Planned</option>
                <option value="inprogress">In-Progress</option>
                <option value="live">Live</option>
              </select>
            </div>

            <div >
              <h3>Feedback Detail</h3>
              <p>Include any specific comments on what should be improved, added, etc.</p>
              <textarea required name="" id=""></textarea>
            </div>

            <div className="feedback-footer">
              <button className="addfeedbackBtn">Save Changes</button>
              <button className="cancelBtn">Cancel</button>
              <button className="deleteBtn">Delete</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
