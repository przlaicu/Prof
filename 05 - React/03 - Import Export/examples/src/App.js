import './App.css';
import { sum, greet, student, num } from './Helpers/Helpers';

export default function App() {
  console.log(sum(5, num));
  greet(student);

  return (
    <div>
      <h1>Moja React Aplikacija</h1>
    </div>
  );
}
