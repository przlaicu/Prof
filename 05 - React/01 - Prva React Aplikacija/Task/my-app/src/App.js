import './App.css';
import randomstring from 'randomstring'; // Import paketa
import moment from 'moment'; // Import paketa

function App() {
  console.log(randomstring.generate());
  console.log(moment().format('MM DD YYYY, h:mm:ss a'));
  return (
    <>
      <h1>Moja Prva React Aplikacija</h1>
      <p>Wohoo</p>
    </>
  );
}

export default App;
