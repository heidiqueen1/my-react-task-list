import './App.css';
import HeaderComponent from './components/HeaderComponent';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HeaderComponent/>
      </header>
      <main className= 'Lista-Tareas'>
        <TaskList/>  
      </main>
    </div>
    
  );
}

export default App;
