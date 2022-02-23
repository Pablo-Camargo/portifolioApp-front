import Nav from './Components/Nav/Nav'
import Profile from "./Components/Home/Profile";
import ContactMe from "./Components/ContactMe/ContactMe";
import AboutMe from './Components/AboutMe/AboutMe'
import Experience from './Components/Experience/Experience';
import Testimonial  from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Profile/>
      <AboutMe/>
      <Experience/>
      <Testimonial/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
