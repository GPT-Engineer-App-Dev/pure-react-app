import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index.jsx";
import About from "./pages/About";
import Login from "./pages/Login";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;