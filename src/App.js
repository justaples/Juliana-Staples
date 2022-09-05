import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import Resume from './components/pages/Resume/Resume';
// import ContactMe from './components/pages/ContactMe/ContactMe';
import Projects from './components/pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      
      <Routes >
      <Route path='/home' element={<Home />} />
      {/* <Route path='/profile' element={<Profile />} /> */}
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      {/* <Route path='/resume' element={<Resume />} /> */}
      {/* <Route path='/contactme' element={<ContactMe />} /> */}
      <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </div>
  );
}

export default App;
