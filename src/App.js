import PonyList from './components/PonyList';
import NewPonyForm from './components/NewPonyForm';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';



function App() {
  const [reload, setReload] = useState(false);

  const handleReload = (status) => {
    setReload(status);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='rainbow-text'>React-O-Blog</h1>
      </header>
      <NewPonyForm handleReload={handleReload} />
      <Router>
        <PonyList reload={reload}/>
      </Router>
    </div>
  );
}

export default App;
