import PonyList from './components/PonyList';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='rainbow-text'>React-O-Blog</h1>
      </header>
      <Router>
        <PonyList />
        
      </Router>
    </div>
  );
}

export default App;
