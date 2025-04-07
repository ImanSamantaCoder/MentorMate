import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Advertise from './component/Advertise';
import Collaborator from './component/Collaborator';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Start from "./pages/Start";
import AdminDashboard from "./component/AdminDashBoard";
import StudentDashboard from "./pages/StudentDashBoard";
import TeacherDashboard from "./pages/TeacherDashboard";
function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />

        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/studentDashboard" element={<StudentDashboard/>} />
        <Route path="/TeacherDashboard" element={<TeacherDashboard/>} />

      </Routes>

      
    </Router>
  );
}

export default App;
