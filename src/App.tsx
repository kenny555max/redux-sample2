import CreateTodo from "./create-todo";
import DisplayTodo from "./display-todo";

function App(){
  return(
    <div className="app">
      <header>header</header>
      <h1 style={{ color: 'yellow', textAlign: 'center', marginBottom: '20px' }}>Create Todo</h1>
      <CreateTodo />
      <DisplayTodo />
    </div>
  );
}

export default App;