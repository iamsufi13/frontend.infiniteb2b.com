import React from "react";
import { useNavigate } from "react-router-dom";
import StateSection from "./StackSection";
import CircularDivs from "./CategorySection";
import TrustedVender from "./TrustedVender";
import Curated from "./Curated";
import FeaturedSolutionf from "./FeaturedSolutionf";
import Section2home from "./Section2home";
import HeroSection from "./HeroSection";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <Section2home />

      <Curated />

      <StateSection />
      <CircularDivs />
      <TrustedVender />
    </>
  );
};

export default HomePage;
