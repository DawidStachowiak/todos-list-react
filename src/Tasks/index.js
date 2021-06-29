import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideTasksDone, removeTask, toglleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideTasksDone}>
        <Button onClick={() => toglleTaskDone(task.id)} toggleDone>
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>

        <Button remove onClick={() => removeTask(task.id)}>
          &#128465;
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
