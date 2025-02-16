import "../../reset.css"
import "../css/editfeedback.css"
import { DataContext } from "../../App";
import { useContext } from "react";


export default function EditFeedback() {

  function deleteData(id) {
    const newData = data.filter(x => x.id !== id);
    setData(newData); // Yeni filtrelenmiş diziyi setData ile güncelleyin
  }
  

  const { data, setData } = useContext(DataContext)
  console.log(data)
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);

    const editedFeedback = {
      id: data.id,
      comments: [],
      upvotes: 0
    }

    const myData = { ...formObj, ...editedFeedback }
    setData([...data, myData])
    console.log(data)
  }


  return (
    <>
      <div className="feedback-container">
        <div className="feedback-header">
          <button onClick={() => history.back()} type="button" className="gobackBtn">  <img src="\img\left-blue-icon.svg" alt="" />Go Back
          </button>

        </div>

        <div className="feedback-form">
          <form onSubmit={handleSubmit} >
            <button type="button" className="addnewBtn">
              <img src="\img\edit-icon.svg" alt="" />
            </button>

            <div  >
              <h2>Editing ‘Add a dark theme option’</h2>
              <h3>Feedback Title</h3>
              <p>Add a short, descriptive headline</p>
              <input name="title" type="text" />
            </div>

            <div >
              <h3>Category</h3>
              <p>Choose a category for your feedback</p>
              <select name="category" id="">
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
              <select name="status" id="">
                <option value="Planned">Planned</option>
                <option value="inprogress">In-Progress</option>
                <option value="live">Live</option>
              </select>
            </div>

            <div >
              <h3>Feedback Detail</h3>
              <p>Include any specific comments on what should be improved, added, etc.</p>
              <textarea required name="description" id=""></textarea>
            </div>

            <div className="feedback-footer">
              <button type="submit" className="addfeedbackBtn">Save Changes</button>
              <button type="button" onClick={() => history.back()} className="cancelBtn">Cancel</button>
              <button type="button" className="deleteBtn">Delete</button>
            </div>
            <div className="feedback-footer-tablet">
              <div>
                <button onClick={() => deleteData(data.id)} type="button" className="deleteBtn">Delete</button>
              </div>
              <div>
                <button type="button" onClick={() => history.back()} className="cancelBtn">Cancel

                </button>
                <button type="submit" className="addfeedbackBtn">Save Changes

                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
