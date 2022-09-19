import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login/Login";
import Dashboard from "./component/dashboard/dashboard";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
