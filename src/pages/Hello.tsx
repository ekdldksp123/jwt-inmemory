import { Navigate } from "react-router-dom"
import { Container } from "../components/layout/default"
import { useStore } from "../libs/store"

const Hello: React.FC = () => {

    const state = useStore(state => state)
    
    if(state.authenticated) {
        return (
            <Container>
                <h1>Hello</h1>
                <button onClick={() => state.deleteToken()}>Logout</button>
            </Container>
        )
    } else {
        console.log('logout')
        return <Navigate to='/login' />
    }
}

export default Hello