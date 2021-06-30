import React, { useState } from "react";

import { FormElement, Button, FormInput } from "./styled";

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
