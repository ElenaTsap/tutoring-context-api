import './App.css';
import {StateHolder} from './MyContext'
import C from './C'

function App() {
  return (
    <div className="App">
      <StateHolder>
        <C/>
      </StateHolder>
    </div>
  );
}

export default App;
