
import { Route, Routes } from 'react-router-dom';
import MainRoute from '../components/MainRoute';




const AppRoutes = () => {
    return (
       <Routes>
        <Route path='/' element={<MainRoute/>}/>
        <Route path='*' element={<MainRoute/>}/>

       </Routes>
    );
};

export default AppRoutes;
