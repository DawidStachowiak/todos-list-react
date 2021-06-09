import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";




function App() {
  const [hideTasksDone, setHidetasksDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejśc na Reacta", done: false },
    { id: 2, content: "Zjeść obiad", done: true },
    { id: 3, content: "Obejrzeć mecz Polska-Rosja", done: true }
  ]

  );


  const toggleHideDone = () =>{
    setHidetasksDone(hideTasksDone => !hideTasksDone);
  }

  const removeTask = (id) =>{
setTasks(tasks => tasks.filter(task =>task.id !== id));
  };

  const toglleTaskDone = (id) =>{
    setTasks(tasks => tasks.map(task =>{

        if(task.id === id) {
          return{...task, done: !task.done};
        }
        return task;
    }));

  }
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideTasksDone={hideTasksDone} removeTask={removeTask} toglleTaskDone={toglleTaskDone} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideTasksDone={hideTasksDone} toggleHideDone={toggleHideDone} />
        }
      />
    </Container>
  );
}

export default App;

