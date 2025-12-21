import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
const MainRoute = () => {
    return (
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
        
    );
};

export default MainRoute;