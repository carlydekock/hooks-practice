import './App.css';
import TodoApp from './components/TodoApp';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoApp />
    </div>
  );
}

export default App;
