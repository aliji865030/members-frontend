import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';

function App() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-cover bg-fixed' 
    style={{backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)"}}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;