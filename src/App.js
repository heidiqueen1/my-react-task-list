import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HeaderComponent/>
        <img src={logo} className="App-logo" alt="logo" />  
      </header>
      <main>
        <TaskList/>
      </main>
    </div>
  );
}

export default App;
