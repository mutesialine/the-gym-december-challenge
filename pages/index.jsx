import Tum from "../components/sections/homepage/Tum";
import Header from "../components/layouts/Header"
import Degree from "../components/sections/homepage/Degree";
import Discover from "../components/sections/homepage/Discover";
import Hero from "../components/sections/homepage/Hero";
import News from "../components/sections/homepage/News";
import Research from "../components/sections/homepage/Research";
import Ground from "../components/sections/homepage/Ground";
import Numbers from "../components/sections/homepage/Numbers"
import University from "../components/sections/homepage/University";
import Footer from "../components/layouts/Footer";
export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <News/>
      <Discover/>
      <Degree/>
      <Tum/>
      <Numbers/>
      <Research/>
      <Ground/>
      <University/>
      <Footer/>
    </>
  );
  
}
