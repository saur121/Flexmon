
//import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmissionForm from './component/AdmissionForm';
import Home from './component/Home';

function App() {
  return (
    <Router>
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/register" element={<AdmissionForm />} />

       </Routes>
    </Router>   
  );
}

export default App;
