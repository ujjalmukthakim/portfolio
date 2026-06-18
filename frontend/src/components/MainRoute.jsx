import Footer from './Footer';
import Navbar from './Navbar';
import About from './About'
import Projects from './Projects'
import Skills from './Skill'
import Contact from './Contact'
import Home from './Home';



const MainRoute = () => {
    return (
      <div>
        <Navbar/>
        <main>
          <section id="home" className="scroll-mt-28">
            <Home/>
          </section>
          <section id="about" className="scroll-mt-28">
            <About/>
          </section>
          <section id="projects" className="scroll-mt-28">
            <Projects/>
          </section>
          <section id="skill" className="scroll-mt-28">
            <Skills/>
          </section>
          <section id="contact" className="scroll-mt-28">
            <Contact/>
          </section>
        </main>
        <Footer/>
      </div>
        
    );
};

export default MainRoute;
