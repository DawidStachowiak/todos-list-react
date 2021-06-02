import "./style.css";

const Tasks = ({ tasks, hideTasksDone }) => (
  <ul className="section__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item ${
          task.done && hideTasksDone ? "list__item--hide" : ""
        }`}
      >
        <button className="done__button js-done__button">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`taskList__span ${
            task.done ? "taskList__span--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button className="remove__button">&#128465;</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
