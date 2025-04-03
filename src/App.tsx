import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import { MyProvider } from './context/usercontext';
function App() {
  return (
    <MyProvider>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </MyProvider>
  );
}

export default App;