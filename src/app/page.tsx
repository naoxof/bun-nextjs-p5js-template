'use client'
import React from "react";
import MySketch from "./components/sketch";

import { NextReactP5Wrapper } from "@p5-wrapper/next";

const Home = () => {
  return <NextReactP5Wrapper sketch={MySketch} />;
};

export default Home;
