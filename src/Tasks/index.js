import "./style.css";
import {List, Item, Content } from "./styled";

const Tasks = ({ tasks, hideTasksDone, removeTask, toglleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item
      
        key={task.id}
        hidden={task.done && hideTasksDone}
      >
        <button
          onClick={() => toglleTaskDone(task.id)}
          className="done__button js-done__button"
        >
          {task.done ? "✔" : ""}
        </button>
        <Content done={task.done}>
          {tasks.content}
        
        </Content>
        <button onClick={() => removeTask(task.id)} className="remove__button">&#128465;</button>
      </Item>
    ))}
  </List>
);

export default Tasks;
