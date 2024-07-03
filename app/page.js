
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import CountdownTimer from "./components/CountdownTimer";
import Program from "./components/ProgramDate";
import About from "./components/About";
import Speakers from "./components/FeaturedSpeakers";
import ConferenceHighlights from "./components/ConferenceHighlights";
import KeyDates from "./components/KeyDates";
import ConferenceTracks from "./components/ConferenceTracks";
import RegistrationInformation from "./components/RegistrationInformation.jsx";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <main>
      <Header />
      <HeroSection/>
      <About /> 
      <KeyDates />
      <Speakers /> 
      <ConferenceTracks />
      <RegistrationInformation />
      <Footer />

  
   </main>
  );
}
