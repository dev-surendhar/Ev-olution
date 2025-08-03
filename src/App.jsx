import React, { useState } from "react";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  let heroData = [
    {
      text1: "Welcome to EV-olution",
      text2: "Your journey towards sustainable transportation starts here.",
    },
    {
      text1: "Explore our range of electric vehicles",
      text2: "Find the perfect EV for your needs.",
    },
    {
      text1: "Join the EV revolution",
      text2: "Together, we can make a difference.",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setplayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setplayStatus={setplayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
