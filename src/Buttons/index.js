import { ButtonContainer, Button } from "./styled";
const Buttons = ({ tasks, hideTasksDone, toggleHideDone, setAllDone }) => {
  if (!tasks.length) {
    return null;
  }
  return (
    <ButtonContainer>
      <Button onClick={toggleHideDone} className="buttons__button">
        {hideTasksDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        onClick={setAllDone}
        className="buttons__button "
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </Button>
    </ButtonContainer>
  );
};

export default Buttons;
