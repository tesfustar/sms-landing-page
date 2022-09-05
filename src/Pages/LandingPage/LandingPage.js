import { Stack } from "@chakra-ui/react";
import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import What from "./components/What";
import Why from "./components/Why";
import Features from "./components/Features";
import Services from "./components/Services";
import Plan from "./components/Plan";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Plans from "./components/Plans";
import InformationModal from "./components/InformationModal";
export default function LandingPage() {
  //Hook
  const HeroRef = useRef();
  const WhatRef = useRef();
  const WhyRef = useRef();
  const FeaturesRef = useRef();
  const ServicesRef = useRef();
  const PlanRef = useRef();

  //Jsx
  return (
    <Stack spacing={0}>
      <NavBar
        HeroRef={HeroRef}
        WhatRef={WhatRef}
        WhyRef={WhyRef}
        FeaturesRef={FeaturesRef}
        ServicesRef={ServicesRef}
        PlanRef={PlanRef}
      />
      <div ref={HeroRef}></div>
      <HeroSection />
      <div ref={WhatRef}></div>
      <What />
      <div ref={WhyRef}></div>
      <Why />
      <div ref={FeaturesRef}></div>
      <Features />
      <div ref={ServicesRef}></div>
      <Services />
      <div ref={PlanRef}></div>
      <Plans />
      {/* <Plan /> */}
      <InformationModal />
      <Footer
        HeroRef={HeroRef}
        WhatRef={WhatRef}
        WhyRef={WhyRef}
        FeaturesRef={FeaturesRef}
        ServicesRef={ServicesRef}
        PlanRef={PlanRef}
      />
    </Stack>
  );
}
