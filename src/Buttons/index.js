import "./style.css";

const Buttons = ({ tasks, hideTasksDone, toggleHideDone, setAllDone }) => {
  if (!tasks.length) {
    return null;
  }
  return (
    <div className="buttons">
      <button onClick={toggleHideDone} className="buttons__button">
        {hideTasksDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        onClick={setAllDone}
        className="buttons__button "
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
