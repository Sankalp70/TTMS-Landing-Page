import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GovtHeader from "../../LandingPage/components/GovtTopBar";
import NavBar from "../../LandingPage/components/Navbar";
import Footer from "../../LandingPage/components/Footer";
import Carousel from "../../LandingPage/components/Carousel";
import InfoCard from "../../LandingPage/components/InfoCard";
import Disclaimer from "../../LandingPage/components/Disclaimer";
import ContactUs from './ContactUs';
import VideoSection from '../components/VideoSection';

const Home = () => (
  <>
    <Carousel />
    <InfoCard />
    <VideoSection />
    <Disclaimer />
  </>
);



export default Home;
