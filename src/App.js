import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./LandingPage/pages/Home";
import GovtHeader from "./LandingPage/components/GovtTopBar";
import NavBar from "./LandingPage/components/Navbar";
import Footer from "./LandingPage/components/Footer";
import ContactUs from './LandingPage/pages/ContactUs';
import AboutUs from "./LandingPage/pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
    <GovtHeader />
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
