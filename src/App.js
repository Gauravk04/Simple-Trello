import './App.css';
import Tasks from './Tasks'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Tasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
