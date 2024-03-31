import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import {db} from "./firebase";
import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';


function reducer(state, action){
    switch(action.type){
        case "title":
            return { ...state, title: action.payload }
        case "content":
            return { ...state, content: action.payload }
        case "date":
            return { ...state, date: action.payload }
        case "author":
            return { ...state, author: action.payload }
        default:
            return state
    }
   
}

const Blog = () => {
  const [state, dispatch] = useReducer(reducer, {

    title: "",
    content: "",
    date: "",
    author: ""

  }); 

  async function handleSubmit() {
    const uid = uuidv4();
    await setDoc(doc(db, "blogs", uid), {
      title: state.title,
      content: state.content,
      date: state.date,
      author: state.author,
    });
    alert("Blog Data Added Successfully");
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={state.title}
          onChange={(e) => dispatch({ type: "title", payload: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Content"
          value={state.content}
          onChange={(e) => dispatch({ type: "content", payload: e.target.value })}
        />
      </div>
      <div>
        <input type="date" placeholder="Date" 
        value={state.date}
        onChange={(e) => dispatch({ type: "date", payload: e.target.value })}
        />
      </div>
      <div>
        <input type="text" placeholder="author" 
        value={state.author}
        onChange={(e) => dispatch({ type: "author", payload: e.target.value })}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Blog;
