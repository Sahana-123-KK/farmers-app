import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CreateFarmer from './components/CreateFarmer/CreateFarmer';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Filter from './components/Filter/Filter';
function App() {
  return (
    <Router>
      {localStorage.getItem("ftoken") && <Navbar />}
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/createfarmer' element={<CreateFarmer />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/filter' element={<Filter />} />




      </Routes>
    </Router>
  );
}

export default App;
