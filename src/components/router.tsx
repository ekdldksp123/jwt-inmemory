import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Hello from '../pages/Hello';
import Home from '../pages/Home';
import Login from '../pages/Login';

interface Props {
    user: boolean
}

interface RouteProps {
    user: boolean,
    redirectPath?: string,
    component: any
}

const ProtectedRoute = ({user, redirectPath = '/login', component}: RouteProps) => {
    if(!user) return <Navigate to={redirectPath} replace />
    return component
}

const Router: React.FC<Props> = ({user}) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/hello' element={<Hello />}/>
                {/* <ProtectedRoute user={user} component={<Hello />}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router