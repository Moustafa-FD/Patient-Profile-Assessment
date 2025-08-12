import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<h1>Welcome to the Patient Profile</h1>} />
              <Route path="/profile" element={<h1>Patient Profile Page</h1>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
