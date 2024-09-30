import './App.css';
import Car from './Components/Car';
import Counter from './Components/Counter';
import Yoda from './Components/Yoda';

export default function App() {
  return (
    <div>
      <Yoda />
      <hr />
      <Car />
      <hr />
      <Counter />
    </div>
  );
}