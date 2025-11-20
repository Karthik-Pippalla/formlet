import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import StepsSection from "./Components/StepsSection";
import Testimonials from "./Components/Testimonials";
import GrownForFlavour from "./Components/GrownForFlavour";
import SliderWithHero from "./Components/SliderWithHero";
import "./App.css";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <StepsSection />
      <Testimonials />
      <GrownForFlavour />
      <SliderWithHero/>

      <Footer />
    </div>
  );
}
