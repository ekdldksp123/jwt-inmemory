import { Navigate } from "react-router-dom"
import { Container } from "../components/layout/default"
import { deleteJwtTokensFromCookie } from "../libs/auth"
import { useStore } from "../libs/store"

const Hello: React.FC = () => {

    const state = useStore(state => state)

    const handleLogout = () => {
        state.deleteToken()
        deleteJwtTokensFromCookie()
    }

    if(state.authenticated) {
        return (
            <Container>
                <h1>Hello</h1>
                <button onClick={() => handleLogout()}>Logout</button>
            </Container>
        )
    } else {
        console.log('logout')
        return <Navigate to='/login' />
    }
}

export default Hello