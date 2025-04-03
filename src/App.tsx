import './App.css';
import Testing from './pages/Testing';
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
        <Route path="/testing" element={<Testing />} />
        <Route path="/*" />
      </Routes>
    </Router>
    </MyProvider>
  );
}

export default App;