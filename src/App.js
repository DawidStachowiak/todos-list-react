import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  {id: 1, content: "Przejśc na Reacta", done: false},
  {id: 2, content: "Zjeść obiad", done:true},
];

const hideTasksDone = false ;

function App() {
  return (
    <div>
   <header><h1>Lista zadań</h1></header>
    <div class="main">
      <div class="main__section">
        <h2 class="main__sectionHeader">Dodaj nowe zadanie</h2>
      </div>

      <Form/>
    </div>

    <div class="main">
      <div class="main__section">
        <h2 class="main__sectionHeader">Lista zadań</h2>
        <Buttons tasks ={tasks} />
      </div>

      <Tasks tasks = {tasks} hideTasksDone = {hideTasksDone}/>
    </div>
    </div>
  );
}

export default App;
