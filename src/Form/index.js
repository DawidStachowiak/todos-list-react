import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newtaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newtaskContent.trim() === "") {
      return;
    }
    addNewTask(newtaskContent.trim());
    setNewTaskContent("");
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newtaskContent}
        className="form__input js-new__task"
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
        required
      />
      <button className="form__button ">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
