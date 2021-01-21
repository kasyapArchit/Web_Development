import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    setList((prevList) => {
      return [...prevList, <li>{item}</li>];
    });
    setItem("");
  }

  function handleChange(event) {
    setItem(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text" 
          onChange={handleChange}
          value={item}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {[...list]}
        </ul>
      </div>
    </div>
  );
}

export default App;
