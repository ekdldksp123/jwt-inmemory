import React from "react"
import { Link } from "react-router-dom"
import { Container } from "../components/layout/default"

const Home: React.FC = () => {
    return (
        <Container>
            <h1>Home Sweet Home 🏠</h1>
            <Link to="/login">로그인</Link>
            <Link to="/hello">여긴 로그인 해야 갈 수 있어요</Link>
        </Container>
    )
}

export default Home


