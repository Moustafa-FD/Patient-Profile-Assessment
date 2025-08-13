import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import PatientProfile from './pages/PatientProfile/patientProfile';

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<h1>Welcome to the Patient Profile</h1>} />
              <Route path="/profile" element={<PatientProfile/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
