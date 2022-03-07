import React from "react";
import './App.css';

export const App = () => {
  return (
    <>
      <div className="boke">
        <ul>
          <button>Delete</button>
          <li>bbb</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>aaa</li>
          <button>Delete</button>
        </ul>
      </div>
      <div>
        <button>Add</button>
        <input placeholder="Add Text"></input>
        <button>Add</button>
      </div>
    </>
  );
};