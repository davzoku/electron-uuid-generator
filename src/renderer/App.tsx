import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const Hello = () => {
  const [uuid, setUuid] = useState(uuidv4());

  return (
    <div>
      <div className="Hello">
        <h1>Your version 4 UUID:</h1>
        <p>{uuid}</p>
        <button onClick={() => setUuid(uuidv4())}>Generate</button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
