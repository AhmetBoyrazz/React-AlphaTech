import About from "./components/About";
import Brand from "./components/Brand";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Services />
      <Portfolio />
      <About />
      <OurTeam />
      <Brand />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
