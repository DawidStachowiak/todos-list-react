import "./style.css";

const Tasks = (props) => ( 
    <ul className="main__unorderList">
 {props.tasks.map(task =>(
            <li className={`list__item"${
                task.done && props.hideTasksDone ? " list__item--hide" : ""
              }`}>
                <button className="done__button js-done__button">
      {task.done ? "✔" : ""}
    </button>
    <span className={`taskList__span${task.done ? " taskList__span--done" : ""}`}>
      {task.content}
    </span>
      <button className="remove__button">&#128465;
    </button>
            </li>
        ) )}

    </ul>
       

);

export default Tasks;

