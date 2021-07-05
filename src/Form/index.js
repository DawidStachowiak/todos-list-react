import React, { useState, useRef } from "react";

import { FormElement, Button, FormInput } from "./styled";

const Form = ({ addNewTask }) => {
  const [newtaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newtaskContent.trim() === "") {
      return;
    }
    addNewTask(newtaskContent.trim());
    setNewTaskContent("");
    inputFocus();
  };
  return (
    <FormElement onSubmit={onFormSubmit}>
      <FormInput
        value={newtaskContent}
        className="form__input js-new__task"
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
        required
      />
      <Button>Dodaj zadanie</Button>
    </FormElement>
  );
};

export default Form;
