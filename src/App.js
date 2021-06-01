import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import MainSection from "./MainSection";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {id: 1, content: "Przejśc na Reacta", done: false},
  {id: 2, content: "Zjeść obiad", done:true},
];

const hideTasksDone = false ;

function App() {
  return (
    <Container>
   <Header title = "Lista zadań"/>
   <MainSection 
   title="Dodaj nowe zadanie" 
   body={<Form/>} 
   />

   <MainSection tile = "Lista zadan"
   body = {<Tasks tasks = {tasks} hideTasksDone = {hideTasksDone}/>}
    
  extraHeaderContent = {<Buttons tasks ={tasks} hideTasksDone ={hideTasksDone} />}

  />
   </Container>
  );
}


export default App;
