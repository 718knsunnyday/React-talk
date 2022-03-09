import React, { useState } from "react";
import classes from "./App.module.scss";

export const App = () => {
  const [addText, setText] = useState("");
  const [addBokeText, setBokeText] = useState([""]);

  // テキストの追加
  const onChangeAddText = (event) => setText(event.target.value);

  // テキスト追加後
  const onClickBokeButton = () => {
    const newText = [...addBokeText, addText]
    setBokeText(newText);
  };


  return (
    <>
      <div>
        <ul>
          {addBokeText.map((text) => {
            return (
            <div className={classes.flex}>
              <button className={classes.button}>Delete</button>
              <li>{text}</li>
            </div>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          <div className={classes.flex}>
            <li>aaa</li>
            <button className={classes.button}>Delete</button>
          </div>
        </ul>
      </div>
      <div>
        <button className={classes.button}>Add</button>
        <input placeholder="Add Text" value={addText} onChange={onChangeAddText}></input>
        <button className={classes.button} onClick={onClickBokeButton}>Add</button>
      </div>
    </>
  );
};