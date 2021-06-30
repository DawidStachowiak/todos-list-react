import { List, Item, Content, Buttons } from "./styled";

const Tasks = ({ tasks, hideTasksDone, removeTask, toglleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideTasksDone}>
        <Buttons onClick={() => toglleTaskDone(task.id)} toggleDone>
          {task.done ? "✔" : ""}
        </Buttons>
        <Content done={task.done}>{task.content}</Content>

        <Buttons remove onClick={() => removeTask(task.id)}>
          &#128465;
        </Buttons>
      </Item>
    ))}
  </List>
);

export default Tasks;
