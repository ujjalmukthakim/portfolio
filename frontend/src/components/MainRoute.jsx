import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About'
import Projects from './Projects'
import Skills from './Skill'
import Contact from './Contact'



const MainRoute = () => {
    return (
      <div>
        <Navbar/>
        <Outlet/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
        
    );
};

export default MainRoute;