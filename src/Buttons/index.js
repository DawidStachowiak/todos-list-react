import { ListButtonWrap, Button } from "./styled";
const Buttons = ({ tasks, hideTasksDone, toggleHideDone, setAllDone }) => {
  if (!tasks.length) {
    return null;
  }
  return (
    <ListButtonWrap>
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
    </ListButtonWrap>
  );
};

export default Buttons;
