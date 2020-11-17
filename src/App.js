import './App.css';

import ViewRouting from './routing'

import { useSelector } from 'react-redux'

function App() {

  const listtodo = useSelector(state => state.listtodo)
  const taskname = useSelector(state => state.taskname)
  const modeselector = useSelector(state => state.modeselector)
  const activity = useSelector(state => state.activity)
  console.log('listtodo:', listtodo);
  console.log('taskname:', taskname);
  console.log('modeselector:', modeselector);
  console.log('activity:', activity);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ViewRouting />
    </div>
  );
}

export default App;
