
import Login from './components/Login';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home2 from './components/Home2';
import ProfileUpdate from './components/ProfileUpdate';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
        <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home2 />} />
              <Route path="/profile" element={<ProfileUpdate />} />
        </Routes>
       </Router> 
      </header>
    </div>
  );
}

export default App;
