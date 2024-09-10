
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home2 from './components/Home2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
        <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home2 />} />
        </Routes>
       </Router> 
      </header>
    </div>
  );
}

export default App;
