import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Navbar from "./Components/Navbar/Navbar"; // Import Navbar component
import HeroSection from "./Components/Hero/HeroSection";

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <div className="app-container">
        <Navbar /> {/* Render the Navbar component */}
        <HeroSection></HeroSection>
      </div>
    </Router>
  );
}

export default App;
