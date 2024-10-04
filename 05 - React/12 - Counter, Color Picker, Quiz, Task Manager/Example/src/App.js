import './App.css';
import Quiz from './Components/Quiz';
import TaskManager from './Components/TaskManager';
import ColorPicker from './Components/ColorPicker';
import Counter from './Components/Counter';
export default function App() {
  return (
    <div className='App'>
      <Counter />
      <hr />
      <ColorPicker />
      <hr />
      <TaskManager />
      <hr />
      <Quiz />
    </div>
  );
}
