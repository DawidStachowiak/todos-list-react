import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejśc na Reacta", done: false },
  { id: 2, content: "Zjeść obiad", done: true },
  { id: 3, content: "Obejrzeć mecz Polska-Rosja", done: true },
];

const hideTasksDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideTasksDone={hideTasksDone} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideTasksDone={hideTasksDone} />
        }
      />
    </Container>
  );
}

export default App;
