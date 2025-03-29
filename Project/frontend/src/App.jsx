import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Advertise from './component/Advertise';
import Collaborator from './component/Collaborator';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Registration from './component/Register';
import Login from "./component/Login";

function Home() {
  return <></>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ Add a Home Route */}
        <Route path="/" element={<Home />} />

        {/* ✅ Define Registration Route */}
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Other Components */}
      {/* <div className='mt-4 add' style={{ backgroundColor: "black", width: "100vw", padding: "0px 0" }}>
        <Advertise />
      </div>
      <h1 className="display-1" style={{ textAlign: "center" }}>Our collaborators</h1>
      <div>
        <Collaborator />
      </div>
      <Footer /> */}
    </Router>
  );
}

export default App;
