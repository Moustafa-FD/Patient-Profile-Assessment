import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function PatientProfile() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Welcome to the Patient Profile</h1>} />
                    <Route path="/profile" element={<h1>Patient Profile Page</h1>} />
                </Routes>
            </BrowserRouter>
            <h1>Bye World!</h1>
        
        </>
    );
}