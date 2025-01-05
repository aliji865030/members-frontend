import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className='w-full h-screen flex justify-center items-start' 
    style={{backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)"}}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;