import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";
import { useTasks } from "./useTasks";

function App() {
  const [hideTasksDone, setHidetasksDone] = useState(false);

  const toggleHideDone = () => {
    setHidetasksDone((hideTasksDone) => !hideTasksDone);
  };

  const { tasks, removeTask, toglleTaskDone, setAllDone, addNewTask } =
    useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideTasksDone={hideTasksDone}
            removeTask={removeTask}
            toglleTaskDone={toglleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideTasksDone={hideTasksDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
