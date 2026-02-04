
import { Route, Routes } from 'react-router-dom';

import Home from '../components/Home';

import About from '../components/About';
import Projects from '../components/Projects';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import MainRoute from '../components/MainRoute';




const AppRoutes = () => {
    return (
       <Routes>
        <Route element={<MainRoute/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='skill' element={<Skill/>}/>
        <Route path='contact' element={<Contact/>}/>

        

        
        
        </Route>

       </Routes>
    );
};

export default AppRoutes;