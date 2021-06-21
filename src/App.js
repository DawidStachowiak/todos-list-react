import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";




function App() {
  const [hideTasksDone, setHidetasksDone] = useState(false);
  const [tasks, setTasks] = useState(
    []

  );
    const [tasks, setTasks] = useState 
    JSON.parse(localStorage.getItem((tasks)) || []);
    

  const toggleHideDone = () => {
    setHidetasksDone(hideTasksDone => !hideTasksDone);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toglleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {

      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));

  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [...tasks,
    {
      content,
      done: false,
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
    }]);
  }
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks}
          hideTasksDone={hideTasksDone}
          removeTask={removeTask}
          toglleTaskDone={toglleTaskDone}
        />}
        extraHeaderContent={
          <Buttons tasks={tasks}
            hideTasksDone={hideTasksDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone} />
        }
      />
    </Container>
  );
}

export default App;

