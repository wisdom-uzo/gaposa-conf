
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import CountdownTimer from "./components/CountdownTimer";
import Program from "./components/ProgramDate";
import About from "./components/About";
import Pricing from "./components/Pricing.jsx";
import Speakers from "./components/Speakers";


export default function Home() {
  return (
   <main>
      <Header />
      <HeroSection/>
      <CountdownTimer />
      <About />
      <Program />
      <Speakers />
      <Pricing />

  
   </main>
  );
}
