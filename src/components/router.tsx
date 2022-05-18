import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Hello from '../pages/Hello';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NavBar from './molecules/navbar';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/hello' element={<Hello />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router