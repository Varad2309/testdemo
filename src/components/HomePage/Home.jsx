import HeroSection from "./HeroSection";
import Services from "./Services";
import Faq from "./Faq";
import Client from "./Client";

const Home = () => {
  return (
    <section id="home" className="main-container">
      <HeroSection />
      <Services />
      <Client />
      <Faq />
    </section>
  );
};
export default Home;
