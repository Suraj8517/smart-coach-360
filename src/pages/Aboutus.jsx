import { useEffect, useRef } from "react";
import { FontLoader } from "../components/aboutus/FontLoader";
import {Hero} from "../components/aboutus/Hero";
import React from "react";
import { Story } from "../components/aboutus/Story";
import { Values } from "../components/aboutus/Values";
import { Milestones } from "../components/aboutus/Milestones";
import { CTA } from "../components/aboutus/CTA";

export default function AboutUs() {
  return (
    <div className="sc-fb antialiased bg-white text-[#1c0f1f]">
      <FontLoader />
      <Hero />
      <Story />
      <Values />
      <Milestones />
      <CTA />
    </div>
  );
}